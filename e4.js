
//Exercise #4
//Objective: Asynchronous Observer with Destructuring

//Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
//The data passed to each observer's update method should be the list of posts fetched.
//Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
//Within the Observer class's update method, destructure the received posts to log the title of the first post. 
//If an error message is received instead, just log it.
//Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.


class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
        this.observers.push(observer)
	}

	removeObserver(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notifyObservers(data) {
		this.observers.forEach((observer)=>{
            observer.update(data);
        });
	}

	async fetchAndNotify() {
        try{
		const url = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const res = await url.json();
        this.notifyObservers(res); 
        console.log('ASYNC/AWAIT: ', res);

    }catch (err){
        console.log('This is an error:', err);
    }
}
}

class Observer {
	update(data) {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.

		if (typeof data === 'string') {
			console.log(data);
		} else {
			const [post] = data;
			console.log(post.title);
		}
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

const newSubject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

newSubject.addObserver(observer1);
newSubject.addObserver(observer2);

newSubject.fetchAndNotify();