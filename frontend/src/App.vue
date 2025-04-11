<template>
  <div class="container">
    <h1>NodeVue App</h1>
    <input v-model="inputValue" placeholder="Enter something..." />
    <button @click="submit">Submit</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      items: [],
      apiUrl: 'https://q4wpfzpz1j.execute-api.us-east-1.amazonaws.com/prod/submit' // Same URL for both GET and POST
    };
  },
  methods: {
    async submit() {
      const res = await fetch(this.apiUrl, {
        method: 'POST', // POST request to submit new value
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: this.inputValue })
      });
      const data = await res.json();
      this.items = data;  // Update the items after the new value is added
      this.inputValue = ''; // Clear the input field
    }
  }
};
</script>

<style>
.container {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
}
</style>
