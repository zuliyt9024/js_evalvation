
function createCountdown(seconds,onTick,onComplete){

    let remaining =seconds;
    let timerId=setInterval(()=>{
        if(remaining>0){
            onTick(remaining);
            remaining--;
        }
        else{
            clearInterval(timerId);
            onComplete();

        }

    },1000);
    return{
        stop(){
            clearInterval(timerId);
        }
    };
}