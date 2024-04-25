<!-- HtmlViewer.vue -->

<template>
    <div v-html="htmlContent"></div>
  </template>
  
  <script>
  export default {
    props: {
      htmlPath: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        htmlContent: ''
      }
    },
    mounted() {
      // Fetch HTML content from file
      this.fetchHtmlContent();
    },
    methods: {
      fetchHtmlContent() {
        fetch(this.htmlPath)
          .then(response => response.text())
          .then(data => {
            this.htmlContent = data;
          })
          .catch(error => {
            console.error('Error fetching HTML content:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  