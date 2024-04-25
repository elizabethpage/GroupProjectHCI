<script setup>
    // to parse csv file
    import papaparse from 'papaparse';

    // bits of vue we are using
    import { ref, onMounted, computed } from 'vue';

    // data imported
    const MovieData = ref([]);

    // title
    const title = ref([]);

    // tells us if the data has been loaded
    const loaded = ref(false);

    // for filtering based on text
    const filterText = ref('');

    // location of data
    const dataFile = "./assets/imdb_top_1000.csv";

    // asynchronously loads data when page is mounted
    onMounted(() => fetch(dataFile)
        .then((res) => res.text())
        .then((text) => loadData(text))
        .then((parsedText) => showData(parsedText)));
    
    // asynchronous function to wrap around parse process
    async function loadData(dataText) {
        console.log("ready to load data");
        let data = papaparse.parse(dataText, {delimter: ",", header: true}) // NOT DONE
        return data;
    }

    // get data ready to show
    function showData(parsedData) {
        console.log("data loaded");
    

    // get data 
    MovieData.value = parsedData.data;

    // show data
    loaded.value = true;

    }


</script>

<template>
    <div id="app">
      <HtmlViewer :htmlPaths="['/HomePage.html', '/Movies.html']" />
    </div>
  </template>
  
  <script>
  import HtmlViewer from './components/HtmlViewer.vue';
  
  export default {
    name: 'App',
    components: {
      HtmlViewer
    }
  }
  </script>
  
  <style>
  /* Add global styles if needed */
  </style>
  


<template>
    <div class="container">
        
        <div v-if="loaded">
        
        </div>
    </div>
</template>