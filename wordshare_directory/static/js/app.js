const vm = new Vue({
    el: '#app',
    delimiters: ['[[',']]'],
    data: {
        inputWord: '',
        currentWord: '',
        savedWord: '',
        word: '',
        currentUser: '',

        usersEndPoint: '/api/v1/users/',
        wordsEndPoint: '/api/v1/words/',
        currentUserEndPoint: '/api/v1/current-user/',
        csrf_token: '',
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
                this.currentWord = response.data
                this.savedWord = this.inputWord
            }).catch(error => {
                // console.log(error.response),
                // console.log(error.response.data)
            })
        },
        saveWordDefinition: function() {
            axios({
                method: 'POST',
                url: this.wordsEndPoint,
                headers: {
                    'X-CSRFToken': this.csrf_token,
                },
                data: {
                    "word": this.savedWord,
                    "word_definition": this.currentWord[0].shortdef[0],
                    "word_pronounciation": this.currentWord[0].hwi.hw,
                    "word_etymology": this.currentWord[0].et[0][1],
                    "word_origin_date": this.currentWord[0].date,
                    "user": this.currentUser.id
                },
            }).then((response) => {
                // console.log(response)
                // console.log('saveWordDefinition response:',response.data)
            }).catch(error => {
                // console.log('saveWordDefinition error:', error)
                // console.log('saveWordDefinition error:', error.response)
            })
        },
        getSingleWord: function(id) {
            axios({
                method: 'GET',
                url: this.urlEndPoint + id
            }).then(response => {
                this.word = response.data
            }).catch(error => {
                // console.log(error.response),
                // console.log(error.response.data)
            })
        },
        getCurrentUser: function() {
            axios({
                method: 'GET',
                url: this.currentUserEndPoint
            }).then(response => {
                this.currentUser = response.data
                // console.log('current user should be printed', this.currentUser)
            }).catch(error => {
                // console.log(error.response)
                // console.log(error.response.data)
            })
        }
    },
    mounted: function() {
        this.csrf_token = document.querySelector("input[name=csrfmiddlewaretoken]").value
        this.getCurrentUser()
    }
})