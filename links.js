class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Linkedlist09{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    insert(val){
    let node=new Node(val);
    if(!this.head){
        this.head=node;
        this.tail=this.head;
    }else{
        this.tail.next=node;
        this.tail=node;
    }
}
remove(){
    let current =this.tail;
    let newTail =current;
    while(current.next){
        this.tail=newTail;
        this.tail=null;
    }
    this.length--;
    return current;
}


}

let Linkedlist09=new Linkedlist09()

console.log(linkedList09.insert(90));
console.log(linkedList09.insert(900))