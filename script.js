var app = new Vue({
    el:"#app",
    data(){
        return{
            query:null,
            results: null,
            apikey: 'bmnLTiwNTCxrSAxferktyuCcFxNXTNZ5DgmmpbsozXv78HAt3T'

        }
    },
    created() {
        this.Calcular(),
        this.mostrarUSD(),
        this.mostrarEUR()
    },
    methods:{
        Calcular(){
            axios.get(`https://fcsapi.com/api/forex/converter?pair1=USD&pair2=VEF&amount=${this.query}&access_key=${this.apikey}`)
                .then(response =>{
                    // console.log(response.data.response)  
                    var results =  response.data.response.total

                    document.getElementById('resultado').innerHTML = results

                })
        },
        mostrarUSD(){
            axios.get(`https://fcsapi.com/api/forex/converter?pair1=USD&pair2=VEF&amount=${this.query}&access_key=${this.apikey}`)
            .then(response =>{
                console.log(response.data.response.price_1x_VEF)  
                var valorUSD =  response.data.response.total.price_1x_VEF

                // document.getElementById('usd').innerHTML = valorUSD
                

            })
        },
        mostrarEUR(){
            axios.get(`https://fcsapi.com/api/forex/converter?pair1=EUR&pair2=VEF&amount=${this.query}&access_key=${this.apikey}`)
            .then(response =>{
                console.log(response.data.response.price_1x_VEF)  
                // var EUR =  response.data.response.total.price_1x_VEF

                // document.getElementById('EUR').innerHTML = EUR

            })
        },
    }
});