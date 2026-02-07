function maxNumber(salaat, azaan, afifaa){
    if(salaat > azaan && salaat > afifaa){
        return salaat;
    }
    else if(azaan > salaat && azaan > afifaa){
        return azaan
    }
    else{
        return afifaa;
    }
}
const salaat = 89;
const azaan = 47;
const afifaa = 99;
const maxResult = maxNumber(salaat, azaan, afifaa)
console.log(maxResult)
