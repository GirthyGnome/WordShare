const vm = new Vue({
    el: '#app',

    data: {
        inputWord: '',
        currentWord: '',

        responseData: {},
    },
    methods: {
        getWordDefinition: function() {
            this.currentWord = this.inputWord
            axios({
                method: 'GET',
                url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.currentWord}`,
                params: {
                key: '4b9c7cd3-8080-4ec9-9d38-870e96c7fb58'
                }
            }).then((response) => {
                this.responseData = response.data
                console.log(response.data)
            })
        }
    }
})