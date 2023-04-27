class Array{
    constructor(pris){
        this.nextdoor =null;
        this.pris=pris;
    }
}

class Welcome{
    constructor(){
        this.place=place;
        this.tele=tele;
        this.length=0;
    }
    create(pris){
        let node=new Array(pris);
       if (!this.place){
        this.place=node;
        this.tele=this.place
       }else{
        this.tele.nextdoor=node;
        this.tele=node;
       }
       this.length++
       return this
    }
    remove(){
        if(!this.place){
            return undefined
        }else{
            let now=this.tele;
            let newTele=now

            while(now.nextdoor){
                this.tel=newTele;
                this.tele.nextdoor=null
            }
            this.length--;
            return now;
        }
    }
}