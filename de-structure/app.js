const jsObj = {
    creator: 'Eshgin Farzali',
    date: '1995',
    family: 'C',
    compileType: 'interpretator'
}

const {creator, family, ...others} = jsObj




const human ={
    name: "Eshgin",
    age: 28,
    job: "dev",
    car:"bmw"

}

function writInfo({name, age, ...di}){
    console.log(`My name is ${name}. I'm ${age} years old.`);
}
writInfo(human)


const laptop = {
    name: "Acer",
    model:"Aspire",
    contury:{
        contryName: "China",
        capital:{
            capitalName:"Pekin",
            adress:"China Abenqudi, st. Tichaou"
        }
    },
    year:2050
}

function lattopInfo({name, model, contury:{ contryName, capital:{capitalName,adress}}, year}){

    console.log(`laptop name  is ${name}, Model:${model}. Made in ${contryName}. Capital name is ${capitalName}. Adess: ${adress}. Year: ${year}`);
}
lattopInfo(laptop)




