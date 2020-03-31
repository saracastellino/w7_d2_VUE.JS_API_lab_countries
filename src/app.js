import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
          countries: [],
          filteredCountry: ""
        },
        mounted(){
          this.fetchCountry();
        },
        computed: {
            totalPopulation: function(){
                return this.countries.reduce((runningTotal, country) => {
                  return runningTotal + country.population;
                }, 0);
              },
              filterCountries: function(){
                return this.countries.filter((country) => {
                  return country.name === this.filteredCountry;
                });
              }
            },
        methods: {
          fetchCountry: function(){
            fetch('https://restcountries.eu/rest/v2/all')
              .then( response => response.json() )
              .then( countries => this.countries = countries )
              .catch( err => console.error(err))
          }
        }
          });
        })
