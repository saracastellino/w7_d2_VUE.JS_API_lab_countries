import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        rates: {
        //   currency: "",
        //   rate: null
        currencies: {}
        }
      },
    mounted(){
        this.fetchRates();
    },
    methods: {
        fetchRates: function(){
            fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(rates => this.rates = rates)
            .catch( err => console.error(err))
        }
        // displayRates: function(){
        //     for (let [key, value] of rates) {
        //         console.log(`${key}: ${value}`);
        //       }
              
        
    }
  });
})