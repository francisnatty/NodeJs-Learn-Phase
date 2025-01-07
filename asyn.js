// const { func } = require("joi");
//Callback
//Promises
//Async/await


// console.log('Before');
// getUser(1, getRepositories);

// function getRepositories(user) {
//     getRepositories(user.githHubUsername, getCommits
//     );
// }
// function getCommits(repos) {
//     getCommits(repo, displayCommits)

// }

// function displayCommits(commits) {
//     console.log(commits);
// }


// getUser(1).then(user=> getRepositories(user.id),)
// .then(repos=> getCommits(repos[0]))
// .then(commits => console.log('Commits',commits))
// .catch(err=> console.log('Error',err.message)),

//Aynsc and Await approach
async function displayCommits (){

    try{

const user= await getUser(1);
//console.log(username.)
const respos= await  getRepositories(user.githHubUsername);
const commits=await getCommits(repos[0]);
console.log(commits);

    }catch(err){
        console.log('Error', err.message)

    }



}

displayCommits();







function getUser(id,) {
    return new Promise((resolve,reject)=>{
//Kick off some async work 
setTimeout(() => {
    console.log('Reading a user from a database....');
    resolve({ id: id, githHubUsername: 'Natty' });
}, 2000,)
    });
   
}

function getRepositories(username) {

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            console.log('Calling Github APi.....',);
           // resolve(['repo1', 'repo2', 'repo3']);
           reject(new Error('Could not get the repos'));
    
        }, 2000);

    })
       
  


}

function getCommits(repo){
    return new Promise((resolve,reject)=>{

        setTimeout(()=> {
            console.log('Calling GithHub APT....');
            resolve(['commit']);
    
        },2000)

    })
  
}

// a promise is a n object that holds the eventual result of an asynchronous operation