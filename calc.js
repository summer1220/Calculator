
function dis(val){
    if (output.value === '0'||already_solved==1) {
        output.value = val;
        already_solved=0;
    } else{
        output.value += val;
    }
}
function myFunction(event){
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='+'||event.key=='-'||event.key=='/'||event.key=='*'||event.key=='^'){
            document.getElementById("output").value+=event.key;
    }

}
function solve(){
        already_solved=1;
        let x=document.getElementById("output").value
        let y=math.evaluate(x)
        document.getElementById("output").value=y
        
}
function clr(){
    document.getElementById("output").value="0"
}
var already_solved=0;