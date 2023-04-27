class Node{
    constructor(val){
        this.val=val;
        this.next=null;

    }

}

class Linkedlist09{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0
    }

    insert (val){
        let node=new Node(val);
        if(!this.head){
            this.first=node;
            this.last=this.first;
        }else{
            this.last.next=node;
            this.last=node;
        }
        this.length++;
        return this;
    }
    delete(){
        let current= this.last;
        let newLast=current;

        while(current.next){
            this.last=newLast;
            this.last=null;
        }
        this.length--;
        return current;
    }
}

let Linkedlist09=new Linkedlist09()

console.log(Linkedlist09.insert(90));