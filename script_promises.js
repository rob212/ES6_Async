// ES6 feature promises recreating the previous callback example 

const getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({IDS: [523, 883, 432, 732], word:'Our Recipe'});
    }, 1000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(recipeID => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Rob'
            };
            resolve({ ID: recipeID, recipe: recipe});
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

getIds
// then resolve can only accept 1 arg so just make it an object
.then(value => {
    console.log(`${value.word}: ${value.IDS}`);
    return getRecipe(value.IDS[2]);
})
.then(recipe => {
    console.log(recipe.recipe.publisher);
    return getRelated(recipe.recipe.publisher);
})
.then(recipeDetails => {
    console.log(recipeDetails);
})
.catch(error => {
    console.log(`ERROR: ${error}`);
});