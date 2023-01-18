const process = require('process')
const p = process.argv.splice(2) 


const timer = (par) => {
    
    if (par.length === 0) {
        return
    }
    let array = []
    for(i= 0; i < par.length; i++) {
        if ( par[i] > 0) {
    
            array.push(par[i])
        }
    }
    let r = 0
    for (i = 0; i < array.length; i++) {
        r = array[i]
        setTimeout(() => {
        process.stdout.write(".");
        }, r );
    }  
}
timer(p)



