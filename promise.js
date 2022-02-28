function getRandomNumber(number) {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve(Math.random());
        }, 500)
    );
    
}

async function awaitGetRandomNumber() {
    const num = await getRandomNumber();
    console.log(num);

}

