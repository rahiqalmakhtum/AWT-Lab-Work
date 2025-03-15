
let myPromise = new Promise((resolve, reject) => {
    let x=0;

    if(x==0){
        resolve();
    }else{
        reject();
    }
})

myPromise.then(
    function() {console.log("success");
    },
    function () {
        console.log("error");       
    }
)
