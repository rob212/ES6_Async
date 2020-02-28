// Added in ES8 async/await is a much easier way to consume promises. 

// ES6 feature promises recreating the previous callback example 

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ IDS: [523, 883, 432, 732], word: 'Our Recipe' });
    }, 1000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(recipeID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Rob'
            };
            resolve({ ID: recipeID, recipe: recipe });
        }, 1000, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Pizza',
                publisher: 'Rob'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
}

// the async keyboard means this is an asynchronous function that keeps running in the background as before
// async runs in the BACKGROUND so we are ok to 'stop' the function until we get a response. 
async function getRecipes() {
    console.log('hello I\'m starting the getRecipes async function');
    // the code will await the promise resovling and pass the value of the resolve not a promise
    // this is a much cleaner alternative way of not having the chain thens from promises. 
    const IDs = await getIds;
    console.log(IDs);
    const recipe = await getRecipe(IDs.IDS[2]);
    console.log(recipe);
    const relatedRecipe = await getRelated(recipe.recipe.publisher);
    console.log(relatedRecipe);
    return recipe; //- this is just to highlight the fact this doesn't work whould use a promise instead
}

// const rec = getRecipes();   this ultimately returns a promise so should use a then as below.
// console.log(rec);   this won't work as it will run before the getRecipe method is still 
// running in the background therefore we would get a Pending Promise. 
getRecipes().then(rec => {
    console.log('******************************************************************************')
    console.log(`The final response is: ${rec.recipe.title} by the publisher ${rec.recipe.publisher}`);
    console.log('******************************************************************************')
});