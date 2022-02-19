class Stack{
    constructor(){
        this.buffer = [];
    }

    push(data){
        this.buffer.push(data);
    }
    pop(){
        return this.buffer.pop();
    }
    checkLength(){
        return this.buffer.length;
    }
    isEmpty(){
        return this.checkLength === 0;
    }
    printElements(){
        this.buffer.forEach(elements=>console.log(elements))
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.printElements()