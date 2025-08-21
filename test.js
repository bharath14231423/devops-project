const greet=require('./app');

if(greet()==="Hello from Devops!"){
    console.log("test passed");
    ProcessingInstruction.exit(0);
}else{
    console.log("test  failed");
    ProcessingInstruction.exit(1);
}