const Order = require("./order.model")
const tree = []
function create_tree(ndata, old_tree = tree){

}

function listen() {
    Order.watch().on("change", doc => {
        console.log(doc)
    })
}

module.exports = function(){
    listen()
}