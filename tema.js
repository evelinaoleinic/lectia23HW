const market = {
    item: 'drinks',
    type: 'coffee',
    price: 50,
    distributor:'etiopia'

}
console.log(Object.getOwnPropertyDescriptors(market,'type'))
console.log(Object.getOwnPropertyDescriptors(market))


//folositi, call, apply si bind astfel ca chemarea metodeii dintr-un obiect sa afiseze proprietatea din altul

function menu (arg,arg2){
    return arg+ ' meniul de azi este ' +this.meniulZilei + ' la pretul de ' + this.pret +' cu bonus la meniu '+ this.add + arg2
}

const menu1 = {
    meniulZilei: 'supa de pui',
    pret: 50,
    add: 'limonada',
    menu
}
const menu2 ={
    meniulZilei:'ciorba de ciuperci',
    pret: 50,
    add:'ceai verde',
    menu
}
console.log(menu1.menu('buna '))
console.log(menu2.menu())
//metoda call
console.log(menu1.menu.call(menu2, 'salutare'))
//metoda apply
console.log(menu2.menu.apply(menu1,['hello', ' multumim']))
//metoda bind
const bound = menu.bind(menu1)
console.log(bound('hey', ' thanks'))

//intrebare cum facem doar un this sa se schimbe din object, nu toate this-urile sa fie preluate de catre alt obiect

//Creati un obiect si adaugati proprietati noi la fie care din ele cel putin un atribut trebuie sa fie false si aratati cum acest atribut afecteaza obiectul

const market1 = {
    item: 'drinks',
    type: 'coffee',
    price: 50,
    distributor:'etiopia'

}

Object.defineProperty(market1,'reducere',{
    value: 'da',
    writable:false, // nu se adauga modificarile
    enumerable:true, // sa poate fi iterata
    configurable: true //sa le putem modifica pe alea de sus

})

  market1.reducere = 'nu'
  console.log(market1)

Object.defineProperty(market1,'reducere',{
     value: 'da',
     writable:true, 
     enumerable:false, // nu poate fi iterata
     configurable: true 

 })

 market1.reducere = 'nu'
 //verificam daca cheia/valoarea a fost adaugata
 console.log(market1)
 console.log(Object.keys(market1))
 console.log(Object.values(market1))
 for(let key in market1) console.log([key])
 console.log(market1.reducere) // apare in consola val modificata

Object.defineProperty(market1,'reducere',{
    value: 'da',
    writable:true, 
    enumerable:true, 
    configurable: false 

})
console.log(market1)
 Object.defineProperty(market1,'reducere',{
     value: 'da',
    writable:true, 
     enumerable:true, 
     configurable: true // nu se mai pot face modificari, arata eroare
 })
 console.log(market1)

//Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins

const market2={
    type: 'deserts',
    item:'chocolate',
    price: 20,

}

Object.preventExtensions(market2)
market2.reducere='da'
console.log(market2)
console.log(Object.isExtensible(market2))

//Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins sa nu pot modifica atributele dar sa pot schimba valoarea la key existente in obiect.

const market3={
    type:'vegetables',
    item:'cucumbers',
    price: 40
}
Object.seal(market3) //nu se adauga chei si nu se schimba atributele
market3.reducere='yes'
market3.item='potatoes'
console.log(market3)
Object.isSealed(market3)

//Creati un obiect si aplicati metoda care nu permite ca obiectul sa fie extins, valorile sa nu fie posibil de modificat la fel ca si atributele

const market4 ={
    type:'fruits',
    item:'tomatoes',
    price:30
}
Object.freeze(market4) //blocheaza toate modificarile
console.log(market4)
Object.isFrozen(market4)

//Creati o functie care primeste o lista si un element, intoarce true daca toate itemurile din lista sunt egale cu elementul primit si false daca nu sunt egale.
const list =[2,2,2,2,2]
const element = 2
function reduce1(list,element) {
    return list.reduce((acc,curr)=>{
        if(curr !== element){ //daca itemul din lista nu este = cu elementul dat de noi, intoace fals
            return false
        }
        return acc //intoarce acc care e setata a fi true
    },true)

}
console.log(reduce1(list,element))

//Creati o functie care primeste o lista si un element ca argument, si va intoarce indexul itemului din lista care este identic cu elementul primit, daca asa element nu exista, va intoarce -1.

const list2=[1,2,3,4,5,6]
const element2= 4
function reduce2(list,element){
    return list.reduce((acc,curr, index)=>{
        if(list.indexOf(curr)===element){
            return index
        } 
        return acc
    },-1)
}
console.log(reduce2(list2,element)) //rezultatul e elementul pe care l-am setat
///incercarea 2
const list3=[1,2,3,4,5,6]
 const element3= 4
 const reduce3 =(list,item)=> {
     return list.reduce((acc,curr,index)=>{
         if(acc.findIndex(curr)===element) { //daca indexul elemeentului curent analizat coincide cu elementul din exterior
         return index //returneaza indexul
     } return acc //daca nu, returneaza acc, care l-am setat ca e -1
     },-1)
  }
 console.log(reduce3(list3,element3)) //dar oricum imi da eroare ca findIndex nu e functie

//Creati o functie care primeste o lista si un element ca argument, va intoarce o lista cu itemurile din lista care sunt identice cu acel element.

const list4=[1,2,3,4,5,3,9,3,]
const element4= 3
const reduce4 = (list, element) =>{ 
    return list4.reduce((acc,curr) => {
    if(curr===element){ //daca item este egal cu elementul dat, adauga-l la lista
        acc.push(curr) //adaugam fiecare element care corespunde conditiei la lista 
    } return acc //lista noua cu elementele selectate

},[]) //rez va fi lista
}
console.log(reduce4(list4,element4))