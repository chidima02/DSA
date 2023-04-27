class Node2{
    constructor(val){
        this.val=val;
        this.next=null;
    
    }
}

class Linkedlist01{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insert (val) {
        let node=new Node(val);
        if(!this.head){
            this.head=node;
            this.tail =this.head;
        }else{
            this.tail.next=node;
            this.tail=node;

        }
        this.length++
        return this;
    }

    remove(){
        let current=this.tail;
        let newTail=current;
        while(current.next){
            this.tail=newTail;
            this.tail=null;
        }
        this. length--;
        return current;
    }
}

let Linkedlist01=new Linkedlist01()
console.log(Linkedlist01.insert(80))