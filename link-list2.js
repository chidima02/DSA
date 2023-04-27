class Blessing{
    constructor(ayo){
        this.nextlocation=null;
        this.ayo=ayo
    }
}
class Bonjour{
    constructor(){
        this.led;
        this.tel=tel;
        this.length=0;
    }

    create(ayo){
        let node=new Blessing(ayo);
        if(!this.led){
            this.led=node;
            this.tel=this.led
        }else{
            this.tel.nextlocation =node;
            this.tel=node;
        }
        this.length++
        return this
    }
    delete(){
        if(!this.led){
            return undefined
        }else{
            let now=this.tel;
            let newTel=now

            while(now.nextlocation){
                this.tel=newTel;
                this.tel.nextlocation=null
            }
            this.length--;
            return now;
    
        }
    }
}
let Bonjour=new Bonjour()
console.log(Bonjour.create(13));
console.log(Bonjour.create(300));