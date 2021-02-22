function wash(callback) {
        setTimeout(function () {
            console.log('wash');
            callback();
            }, 3000);
    }
    
function dry(callback) {
    setTimeout(function () {
    console.log('dry');
    callback();
    }, 2000);
    }

function fold(callback) {
    setTimeout(function () {
    console.log('fold');
    callback();
    }, 1000);
    }

const doLaundry = (inputArray)=>{
    inputArray[0](()=>inputArray[1](()=>inputArray[2](()=>console.log('done!'))))
}

doLaundry([wash,dry,fold])