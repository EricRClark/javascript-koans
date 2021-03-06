var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
_(products).chain()
      .filter(function(product)){ /*filter out nuts*/
return !product.containsNuts;
})
.filter(function(noNuts)){
  return noNuts.ingredients.indexOf('mushrooms') === -1;
})
.any(functiona(el)) {
  return !el.ingredients.includes('mushrooms') /*If they don't contain shrooms*/
}
.each(function (noNutsnoShrooms);
})
.value();
      /*productsICanEat = _.reject(products, function(product){ return _.include(product.ingredients, "mushrooms") || product.containsNuts === true});

    */  expect(productsICanEat.length).toBe();
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
/* looping 1 thru 100 */
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe();
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
(_.range(1,1000)).chain()
.reduce(function(accumulator, element){
  .
    return accumulator += element;
},0)/*always put something here*/
.value();
    var sum = ;    /* try chaining range() and reduce() */

    expect(233168).toBe(FILL_ME_IN);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }
/* want to count # of times ingredients occur
want initialize every time new ingredient gets introduced
var ingredients =products.map(function(el)){
return el.ingredients
})
so we want to use _.flatten (ingredients) to just get those
products.reduce(function(accu, element) {
if (accum[el]){            (accumulator already has element inside object)
accm [el] += 1;

}else {
acc [el] = 1;
}return acc;
},{})*/

    expect(ingredientCount['mushrooms']).toBe(FILL_ME_IN);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _.chain(products)
     .map(function(product){ return product.ingredients; })
     .flatten()
     .each(function(ingredient) {
       ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
});

});

    expect(ingredientCount['mushrooms']).toBe();
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
