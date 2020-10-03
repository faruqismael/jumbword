
var vm = new Vue({
    el: "#vue-root",
    data: {
        name: "Faruq",
        message: "Keep Calm and learn Vue",
        randomWords: [
            'My', 'own', 'answer', 'to', 'the', 'contrarian', 'question', 'is', 'that', 'most', 'people', 'think',
            'the', 'Spreading', 'old', 'ways', 'to', 'create', 'wealth', 'around', 'the', 'world', 'will', 'result',
            'in', 'devastation', 'this', 'progress', 'continue', 'future', 'of', 'the', 'world', 'will', 'be',
            'defined', 'by', 'globalization'
        ],
        random_input: '',
        answer:''
    },
    methods: {
        showAnswer: function () {
            this.answer = this.randomize;
            document.getElementById("ansrbtn").textContent = this.answer
            return this.answer;
        }
    },
    computed: {
        randomize: function () {
            return this.randomWords[Math.floor(Math.random() * this.randomWords.length)]
        },
        reversed: function () {
            return this.randomize.split('').reverse().join('').toUpperCase()
        },
        jumbled: function () {
            let jumble = new Array();
            let first = this.reversed[0];
            let last = this.reversed[this.reversed.length - 1];
            jumble[0] = first;
            jumble[1] = last;
            if (this.reversed.length > 2) {
                for (let word of this.reversed.slice(2, this.reversed.length - 1)) {
                    jumble.push(word)
                }
            jumble.push(this.reversed[1])
            }
            return jumble.join('').toUpperCase()
        }
        
    }
});
