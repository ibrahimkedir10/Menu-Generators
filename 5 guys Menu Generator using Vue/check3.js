const Movies = {
   data() {
      return {
         user_choices_sandwich: [],
         user_choices_cook_level: [],
         user_choices_toppings: [],
         user_choices_sides: [],

         total: 0,
         sandwichs: [],
         cook_level: [],
         toppings: [],
         sides: []
      }
   }, //end data property 	
   created() {
      fetch('FiveGuys.json')
         .then(response => response.json())
         .then(data => {
            this.sandwichs = data.sandwich
            this.cook_level = data.cook_level
            this.toppings = data.toppings
            this.sides = data.sides

            //pre-select a movie object
            this.user_choices_sandwich = this.sandwichs[0] // pre-select first size Small
            this.user_choices_cook_level = this.cook_level[0] // pre-select first size Small
            
         })
         .catch(function (error) {
            console.log(error);
         })

      
   },
   methods: {
      calc(){
         this.total=this.user_choices_sandwich.sandwich_price;
         if(this.user_choices_sandwich){
            this.total = this.user_choices_sandwich.sandwich_price;
         }
         console.log("before for loop" + this.total);

         for(i=0; i< this.user_choices_sides.length; i++){
            this.total += this.user_choices_sides[i].side_price;
         }
         console.log("after for loop" + this.total);
         this.total = parseFloat(this.total).toFixed(2);
      }
   }		
         
   
   
   
   //end created method	
} //end Vue object

Vue.createApp(Movies).mount('#vue_check')