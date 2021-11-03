function saturdayFun(activity = "roller-skate") {
   let saturdayPlans = `This Saturday, I want to ${activity}!`;
    return saturdayPlans;
}

//

// function mondayWork(activity = "go to the office") {
//     let mondayPlans = `This Monday, I will ${activity}.`;
//     return mondayPlans;
// }

const mondayWork = function(activity = "go to the office") {
    let mondayPlans = `This Monday, I will ${activity}.`;
    return mondayPlans;
}

//

//     it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective()
//       let emphatic = result("a hard worker")
//       expect(emphatic).to.equal("You are *a hard worker*!")
//     });

//     it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
//       let result = wrapAdjective("||")
//       let emphatic = result("a dedicated programmer")
//       expect(emphatic).to.equal("You are ||a dedicated programmer||!")
//     });
//   })
// })

// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". 
//Name it however you wish.
// return a String of the form "You are ..." where ... should be 
//the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to 
//create visual flair
// You may call the parameter whatever you like, but its default
// value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective
//("!!!")
// Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer"); 
//=> "You are %a dedicated programmer%!"

// function wrapAdjective() {
//     return function inner(descriptiveWord = "special", flair = "*") {
//         return `You are ${flair}${descriptiveWord}${flair}!`;
//     };
// }


function wrapAdjective(flair = "*") {
        return function inner(descriptiveWord = "special") {
            return `You are ${flair}${descriptiveWord}${flair}!`;
        };
    }

// function outer(greeting, msg = "It's a fine day to learn") {
//     return function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//   }
  
//   outer("Hello")("student", "JavaScript");
