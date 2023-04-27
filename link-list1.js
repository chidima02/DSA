class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class linkedlist03{
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

    remove(){
        if(this.head){
            return undefined;
        }else{
            let current =this.tail;
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

let linkedlist03=new linkedlist03();

console.log(linkedlist03.insert(03));
console.log(linkedlist03.insert(300));