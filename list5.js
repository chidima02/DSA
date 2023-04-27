class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Linklist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    insert (val){
        let node=new Node(val);
        if(!this.head){
          this.head=node;
          this. tail =this.head;
    }else{
        this.tail.next=node;
        this.tail=node;
    }
    this.length++;
    return this;
}
}

let Linklist=new Linklist()
console.log(Linklist.insert(70))
console.log(linkedList.insert(500))