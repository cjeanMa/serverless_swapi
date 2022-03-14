
const employeeValidator = (nombre, apellido) =>{
    const errors = []
    /* Validacion nombre */
    if(nombre===null || nombre === "") errors.push("El campo 'nombre' no puede estar vacio")
    else if(!/^[a-zA-Z]{2,20}/.test(nombre)){
        errors.push("El campo 'nombre' es necesario; formato: [a-zA-Z]{2,20}")
    }
    /* Validacion apellido */
    if(apellido===null || apellido === "") errors.push("El campo 'apellido' no puede estar vacio")
    else if(!/^[a-zA-Z]{2,20}/.test(apellido)){
        errors.push("El campo 'apellido' es necesario; formato: [a-zA-Z]{2,20}")
    }
    return errors
}

module.exports = {
    employeeValidator
}