// const { func } = require("joi");
//Callback
//Promises
//Async/await


console.log('Before');
getUser(1, getRepositories);

function getRepositories(user) {
    getRepositories(user.githHubUsername, getCommits
    );
}
function getCommits(repos) {
    getCommits(repo, displayCommits)

}

function displayCommits(commits) {
    console.log(commits);
}



function getUser(id,) {
    return new Promise((resolve,reject)=>{
//Kick off some async work 
setTimeout(() => {
    console.log('Reading a user from a database....');
    resolve({ id: id, githHubUsername: 'Natty' });
}, 2000,)
    });
   
}

function getRepositories(username, callback) {
       
    setTimeout(() => {
        console.log('Calling Github APi.....',);
        callback(['repo1', 'repo2', 'repo3']);

    }, 2000)


}

function getCommits(repo,callback){
    setTimeout(()=> {
        console.log('Calling GithHub APT....');
        callback(['commit']);

    },2000)
}

// a promise is a n object that holds the eventual result of an asynchronous operation