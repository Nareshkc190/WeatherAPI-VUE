window.onload = function () {
let weatherApp = new Vue({
    el: "#app",
    data :  {
      results : '',
      zipcode : '07306'
  },

    methods: {
      getWeather : function() {

        let url = "https://api.openweathermap.org/data/2.5/weather?zip=" + this.zipcode + ",us&units=imperial&appid=c2f8212a26a7a84d3ab42886d3861a88";
        axios
        .get(url)
          .then(response => {
            this.results = response.data;
        })
        .catch(error => {
          alert("zipcode doesn't match !!!");
        });
      },
    },
    beforeMount() {
      this.getWeather();
    },

  });
}
