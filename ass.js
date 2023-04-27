const {log}=require("console");

class Person{
    constructor(val){
       this.require=null;
       this.val=val; 
    }
}

class Linklist{
    constructor(){
        this.first=null;
        this.last=0;
    }
    addList(val){
        let node=new Node(val);
        if(!this.first){
            this.first=node;
            this.last=this.first
        }else{
            this.last.next=node;
            this.last=node;
        }
        this.length++
        return this;
    }
    remove(){
        if(!this.first){
            return undefined
        }else{
            let current=this.last;
            let newlast=current

            while(current.next){
                this.last=newlast
                this.tail.next=null
            }
            this.length--
            return current;
        }

    }
}
let newlink=new linkedList()
console.log(newlink.addList(400))