
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
}

const first = () => {
    console.log('hey there!');
    second();
    console.log('The end');
}

first();
