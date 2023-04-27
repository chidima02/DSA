class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Linklist05{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    insert(val){
        let node=new Node(val);
        if(!this.head){
            this.tail=this.head;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return this;
    }
    delete(){
        if(!this.head){
            return undefined;
        }else{
            let current=this.tail;
            let newTail=current;
            while(current.next){
                this.tail=newTail;
                this.tail.next=null;
            }
            this.length--;
            return current;
        }
    }
}
let Linklist05=new Linklist05();

console.log(Linklist05.insert(1000));
console.log(Linklist05.insert(500))