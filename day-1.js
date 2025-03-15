// ********* CallBack **********

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data fetched!");
//         callback();
//     },2000)
// }


// function processData() {
//     console.log("Processing data...");
// }

// fetchData(processData);



// ********* Promise **********

// let myPromise = new Promise((resolve, reject) => {
//     let x=0;

//     if(x==0){
//         resolve();
//     }else{
//         reject();
//     }
// })

// myPromise.then(
//     function() {console.log("success");
//     },
//     function () {
//         console.log("error");       
//     }
// )

// ********* Async/Await **********

// function fetchUserData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "rahiq"
//             });        
//         }, 2000);
//     })
// }

// async function getUser() {
//     console.log("Fetching user data...");
    
//     let user = await fetchUserData();
//     console.log("User Data: ", user);
    
//     console.log("processing user data...");
    
// }

// getUser();