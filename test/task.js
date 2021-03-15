const { format } = require("morgan");

function get_operations(nnumber) {
    let number = nnumber
    let count = 0
    while (number !== 0){
        if(number % 2){
            number -= 1
        } else {
            number /= 2
        }

        count++;
    }
    console.log(nnumber, "\t", count)
}
Array.from(Array(parseInt(process.argv[2])).keys()).forEach(i => {
    get_operations(i)  
})
