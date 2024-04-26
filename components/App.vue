<script setup>
    // to parse csv file
    import papaparse from 'papaparse';

    // bits of vue we are using
    import { ref, onMounted, computed } from 'vue';

    // data imported
    const movieData = ref([]);

    // title
    const title = ref([]);

    // tells us if the data has been loaded
    const loaded = ref(false);

    // for filtering based on text
    const filterText = ref('');

    const sortDirection = ref(1);
    const whatToSort = ref('Series_Title');

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
        let data = papaparse.parse(dataText, {delimter: ",", header: true});
        return data;
    }

    // get data ready to show
    function showData(parsedData) {
        console.log("data loaded");
    

    // get data 
    movieData.value = parsedData.slice(2);

    // show data
    loaded.value = true;
    }

    // dynamically generated filtered and sorted data
    const filteredMovieData = computed(
        () => {
            // first, filter by title
            let filteredByTitle = movieData.value;

            filteredByTitle.sort((a, b) => {
                var start = a[whatToSort.value];
                var end = b[whatToSort.value];

                if (whatToSort.value == 1) {
                    start = Number(a[whatToSort.value]);
                    end = Number(b[whatToSort.value]);
                }
            });
        }
    )


</script>


  


<template>
    <div class="container">
        
        <div v-if="loaded">
        
            <!-- Title-->
            <div class="row">
                <h1>Movies</h1>
                <hr/>
            </div>

            <!-- table body with data -->
            <tbody>
                <tr v-for="movie in filteredMovieData">
                    <td>{{ movie.Series_Title }}</td>
                    <td>{{ movie.Released_Year }} </td>
                </tr>
            </tbody>


        </div>

        <div v-else>
            <p>Loading data...</p>
        </div>
    </div>
</template>