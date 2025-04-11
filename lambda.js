const AWS = require('aws-sdk');
const { randomUUID } = require('crypto');

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const body = JSON.parse(event.body)
  const value = body.value

  if (!value) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing value' })
    };
  }

  const item = {
    id: randomUUID(),
    value,
    createdAt: new Date().toISOString()
  };

  await dynamo.put({
    TableName: TABLE_NAME,
    Item: item
  }).promise();

  // Query the items and sort by the createdAt attribute
  const result = await dynamo.scan({ 
    TableName: TABLE_NAME,
    // This will sort by createdAt in ascending order by default
    ScanIndexForward: true 
  }).promise();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    body: JSON.stringify(result.Items)
  };
};
