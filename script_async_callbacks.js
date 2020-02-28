// The old way of doing things - async calls with callbacks. Doing so by simultaing AJAX calls making a fake recipes app.

// simulating making a call to a remote webserver - async

function getRecipe() {
    // simulating async http call delay
    setTimeout(() => {
        const recipeIDs = [523, 883, 432, 732];
        console.log(recipeIDs);
        
        setTimeout((id) => {
            // simulating now getting response from a server
            // you can pass a third param to setTimeout to pass in args to the callback function
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Rob'
            };
            console.log(`${id} is the recipe: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe = {
                    title: 'Pizza',
                    publisher: 'Rob'
                };
                console.log(recipe);
            }, 1500, recipe.publisher);
        }, 1500, recipeIDs[2]);

    }, 1500);
}

getRecipe();


// This is callback hell and can be seen with the triangle shape. 
// ES6 introduced promises to try and solve this callback hell issue. 