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
    onMounted(() => {
        fetch(dataFile)
            .then((res) => res.text())
            .then((text) => loadData(text))
            .then((parsedText) => showData(parsedText))
    });
    
    // Asynchronously parse CSV data
    async function loadData(dataText) {
        console.log("Ready to load data");
        let data = papaparse.parse(dataText, { delimiter: ",", header: true });
        return data;
    }

    // Update movieData and loaded status after data is loaded
    function showData(parsedData) {
        console.log("Data loaded");
        movieData.value = parsedData.data.slice(2); // Slice to skip header rows
        loaded.value = true;
    }

    // Dynamically generate filtered and sorted data
    const filteredMovieData = computed(() => {
        let filteredByTitle = movieData.value.slice(); // Make a copy to avoid mutating original data

        // Sorting logic based on selected column
        filteredByTitle.sort((a, b) => {
            if (whatToSort.value === 'Series_Title') {
                return a.Series_Title.localeCompare(b.Series_Title) * sortDirection.value;
            } else if (whatToSort.value === 'Released_Year') {
                return (a.Released_Year - b.Released_Year) * sortDirection.value;
            }
            // Add more cases for other columns if needed
        });

        return filteredByTitle; // Return sorted data
    });
</script>
    