var previous=0, current=0, op="";
var res = 0;

function setClear() {
    this.current = "";
    this.previous = "";
    this.op = "";
    document.getElementById("calRes").innerText = "";
}

function setCurrent(curr) {
    if (op == "=") {
        document.getElementById("calRes").innerText = "";
        op = "";
    }
    document.getElementById("calRes").innerText = document.getElementById("calRes").innerText + curr.innerText;
    this.current = document.getElementById("calRes").innerText;
}

function setPrevios() {
    this.previous = this.current;
}

function setOperator(op) {

    if (op.innerText == "=") {
        performOperation(this.op);
        //set result to screen
        document.getElementById("calRes").innerText = res;
        //setCurrent(res);
        this.current = res;
        this.op = op.innerText;
    }
    else {
        this.op = op.innerText;
        

        setPrevios();
        document.getElementById("calRes").innerText = "";

    }
    
   
}


function performOperation(op) {
    
    switch (op) {
        case "+": res = parseFloat(this.previous) + parseFloat(this.current);
            break;

        case "-": res = parseFloat(this.previous) - parseFloat(this.current);
            break;

        case "/": res = parseFloat(this.previous) / parseFloat(this.current);
            break;

        case "*": res = parseFloat(this.previous) * parseFloat(this.current);
            break;
        case "%": res = parseFloat(this.current) / 100;
            break;
        case "f2c": res = (parseFloat(this.current) -32) *5/9;
            break;
    }
}