var sandwichMaker = (function(maker) {

  console.log("meat.js is loaded");
  // Private variable to store the different meat prices


    var meatPrices = {"salamiMeat": .59,
      "capicolaMeat": .76,
      "roastBeefMeat": .80,
      "hamMeat": .90};

      maker.addMeat = function(topping) {
        return meatPrices[topping];
      }

      return maker;

    })(sandwichMaker);


//   // Augment the original object with another method
//   maker.addMeat = function(meatChoice) {
//     var meatPrices = {"salamiMeat": .59,
//       "capicolaMeat": .76,
//       "roastBeefMeat": .80,
//       "hamMeat": .90};

//     var price = meatPrices[meatChoice];

//     return price;
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(sandwichMaker);