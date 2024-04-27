<!-- HtmlViewer.vue -->

<template>
  <div>
    <div v-html="htmlContent" v-if="!errorMessage"></div>
    <div v-else>{{ errorMessage }}</div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'; // Import DOMPurify for HTML sanitization

export default {
  props: {
    htmlPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      htmlContent: '',
      errorMessage: ''
    }
  },
  mounted() {
    // Fetch HTML content from file
    this.fetchHtmlContent();
  },
  methods: {
    fetchHtmlContent() {
      fetch(this.htmlPath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          this.htmlContent = DOMPurify.sanitize(data); // Sanitize the HTML content
        })
        .catch(error => {
          console.error('Error fetching HTML content:', error);
          this.errorMessage = `An error occurred while loading the HTML content: ${error.message}`;
        });
    }
  }
}
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
  