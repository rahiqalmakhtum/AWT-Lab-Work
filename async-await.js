
function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "rahiq"
            });        
        }, 2000);
    })
}

async function getUser() {
    console.log("Fetching user data...");
    
    let user = await fetchUserData();
    console.log("User Data: ", user);
    
    console.log("processing user data...");
    
}

getUser();