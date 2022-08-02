// const validateInputs = () => {

//     // input.nameimport { validateInputs } from '..';
// }  
const validateInputs = (name, weight, height, hp, attack, defense, speed, type) => {
    //    console.log(name)
    // console.log(name, weight, height, hp, attack,defense,speed,type) 
    // if (!name && !weight && !height && !hp && !attack && !defense && !speed && !type) 
    if (!name) {
        alert('Please enter a name')
        return false
    } else if ( !weight ) {       
        alert('Please enter a weight') 
        return false
    } else if ( !height) {
        alert('Please enter a height')
        return false
    } else if ( !hp ) {
        alert('Please enter a hp')
        return false
    } else if ( !attack ) {
        alert('Please enter a attack')
        return false
    } else if ( !defense ) {
        alert('Please enter a defense')
        return false
    } else if ( !speed ) {
        alert('Please enter a speed')
        return false
    }else if ( !type ) {
        alert('Please enter a type')
        return false
    }
    // ) {
        // alert("existen todos los datos")
    //} //else if (
        // alert("Faltan datos")
        return true
    //);
};

module.exports = {
    validateInputs
};