function salon (arg,arg1) {
    return arg + this.tip +arg1 
}
function salon2 (arg){
    return 'astazi nu facem lucrari cu ' + this.subtip + arg
}
const proceduri1 ={
    tip:'manichiura',
    subtip:'gel-lac',
    pret: 300,
    reducere:'nu',
    salon

}
const proceduri2 ={
    tip:'freza',
    subtip:'cu vopsire',
    pret: 1000,
    reducere:'nu',
    salon
}

const proceduri3 ={
    tip: 'pedichiura',
    subtip:'gel-lac',
    pret: 350,
    reducere:'nu',
    salon2
}
console.log(proceduri2.salon('salut, azi avem reducere la procedurile de ', '. Multumim'))
console.log(proceduri3.salon2(' multumim.'))