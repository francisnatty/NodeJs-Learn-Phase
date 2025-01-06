const p = new Promise((resolve, reject) => {
    //kick off some async work
    //...
    setTimeout(() => {
        // console.log

        //  resolve(1);
        // reject 
        reject(new Error('message'))


    }, 2000)


})
p.then(result => console.log('Result', result)).catch(err=> console.log('Error',err.message));