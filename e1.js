//Exercise #1
//Objective: Understand the Observer design pattern.
//Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
//When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
//Instantiate the Subject and add multiple observers. 
//Afterward, call notifyObservers and ensure each observer gets updated.

class Subject {
	constructor() {
		this.observers = [];
	}
	addObserver(observer){
        this.observers.push(observer)

    }

    removeObserver(observer){
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notifyObserver(){
        this.observers.forEach((observer)=>{
            observer.update();
        });
    }
}

class Observer {
	
	update() {
		console.log(`Observer updated!`);
	}
}


const subject = new Subject();
C