interface UserInterface{
    name: string;
    // email: string;
    // age: number;

    // register();
    payInvoice();
}

class User implements UserInterface {
    name: string;
    private email: string;
    protected age: number;

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name);
    }

    private register(){
        console.log(this.name + ' is now registrated');
    }

    payInvoice(){
        console.log(`${this.name} paid invoice`);
    }
}

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age); //fill parent class attributes
        this.id = id;

    }

    payInvoice(){
        super.payInvoice();
    }
}

//let john = new User('John Doe', 'john@email.com', 30);