const vm = new Vue({
    el: '#app',
    delimiters: ['[[',']]'],
    data: {
        inputWord: '',
        responseData: {},
        savedWord: {},
    },
    methods: {
        getWordDefinition: function() {
            axios({
                method: 'GET',
                url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.inputWord}`,
                params: {
                key: '4b9c7cd3-8080-4ec9-9d38-870e96c7fb58'
                }
            }).then((response) => {
                this.responseData = response.data
                console.log(response.data)
            }).catch(error => {
                console.log(error.response),
                console.log(error.response.data)
            })
        },
        saveWordDefinition: function() {
            this.savedWord = this.responseData
            console.log(this.savedWord)
            axios({
                method: 'POST',
                url: 'apis/v1/words',
                data: this.savedWord,
                headers: {
                    'X-CSRFToken': this.csrf_token,
                },
            }).then((response) => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.response),
                console.log(error.response.data)
            })
        },
    }
})