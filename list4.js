class Node{
    constructor(person){
        this.person=person;
        this.next=null;
    }
}

class Linkedlist11{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insert(person){
        let node=new Node(person);
        if(!this.head){
            this.head=node;
            this.tail=this.head;

        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return this;
    }
    remove(){
        let current=this.tail;
        let newTail=current;
        while(current.next){
            this.tail=newTail;
            this.tail=null;
        }
        this.length--;
        return current;
    }
}
let Linkedlist11=new Linkedlist11()
console.log(Linkedlist11.insert(600))
console.log(Linkedlist11.insert(5000))