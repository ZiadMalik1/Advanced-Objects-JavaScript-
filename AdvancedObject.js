const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
      get appetizers(){
        return this._courses.appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      get desserts(){
        return this._courses.desserts;
      },
      set appetizers(appetizer){
        this._courses.appetizers = appetizer;
      },
      set mains(mains){
        this._courses.mains = mains;
      },
      set desserts(desserts){
        this._courses.desserts = desserts;
      },
      get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
      },
      generateRandomMeal(){
        var appetizer = this.getRandomDishFromCourse('appetizers');
        var main = this.getRandomDishFromCourse('mains');
        var dessert = this.getRandomDishFromCourse('desserts');
        const price = (appetizer.price + main.price + dessert.price);
        return (`Your Meal Included: ${appetizer.name}, ${main.name},  ${dessert.name}. Total Price is: ${price}`);
      },
      getRandomDishFromCourse(courseName){
        var dishes = this._courses[courseName];
        const index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
      },
      addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
          name: dishName,
          price: dishPrice,
        };
        return this._courses[courseName].push(dish); 
      },
    };
  menu.addDishToCourse('appetizers', 'Falafel', 130);
  menu.addDishToCourse('mains', 'Burger', 200);
  menu.addDishToCourse('desserts', 'Molten Lava Cake', 300);
  menu.addDishToCourse('appetizers', 'Fries', 150);
  menu.addDishToCourse('mains', 'Tacos', 242);
  menu.addDishToCourse('desserts', 'Churros', 120);
  menu.addDishToCourse('appetizers', 'Wings', 50);
  menu.addDishToCourse('mains', 'Chicken Wrap', 265);
  menu.addDishToCourse('desserts', 'Doughnut', 20);
  
  var meal = menu.generateRandomMeal();
  
  console.log(meal);