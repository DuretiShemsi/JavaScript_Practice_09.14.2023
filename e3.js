//Exercise #3
//Objective: Understand and Implement Asynchronous Code Using Async/Await.

//Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
//Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
//Invoke the fetchPosts function and log the results.

async function fetchPosts() {
    try{
        const url = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const res = await url.json();
        console.log('ASYNC/AWAIT: ', res);

    }catch (err){
        console.log('err:', err);
    }
	
}
// Call the function to fetch posts
fetchPosts();
