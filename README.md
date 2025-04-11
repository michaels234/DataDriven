# NodeVue App

Simple fullstack app using Vue.js + AWS Lambda + DynamoDB.

## Features

- Type and submit text
- Lambda saves each entry to DynamoDB
- View the full list below the input
- All infra is uniquely tied to this `nodevue` project

## Backend (AWS)

### Stack: Lambda + API Gateway + DynamoDB

#### 1. Deploy CloudFormation

```bash
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name nodevue-stack \
  --capabilities CAPABILITY_NAMED_IAM
```

## Frontend (Vue.js)

### 1. Set Up Vue App

```bash
npm install -g @vue/cli
vue create frontend
cd frontend
```

Use default config or manually configure.

### 2. Replace ```src/App.vue```
Copy in the provided ```App.vue```.

### 3. Set Your API Endpoint
Update the ```apiUrl``` in ```App.vue```:

```js
apiUrl: 'https://YOUR_ID.execute-api.YOUR_REGION.amazonaws.com/prod/submit'
```

### 4. Run Locally

```bash
npm run serve
```

Go to http://localhost:8080

## Deployment (Optional)
### GitHub Pages
```bash
vue add gh-pages
npm run build
npm run deploy
```
### S3/CloudFront
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name
```