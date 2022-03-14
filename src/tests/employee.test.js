
const {employeeValidator} = require("../helpers/employeeValidator");

describe("TESTING VALIDATOR EMPLOYEE", ()=>{
    const expectErrors = ["El campo 'nombre' no puede estar vacio"]
    const expectErrors1 = ["El campo 'apellido' no puede estar vacio"]
    const expectErrors2 = ["El campo 'nombre' es necesario; formato: [a-zA-Z]{2,20}"]
    const expectErrors3 = ["El campo 'apellido' es necesario; formato: [a-zA-Z]{2,20}"]
    const expectErrors4 = ["El campo 'nombre' no puede estar vacio", "El campo 'apellido' no puede estar vacio"]
    const expectErrors5 = ["El campo 'nombre' no puede estar vacio", "El campo 'apellido' es necesario; formato: [a-zA-Z]{2,20}"]
    test("Return error when 'nombre' is null", ()=>{
        expect(employeeValidator(null, "lopez")).toEqual(expect.arrayContaining(expectErrors))
    })
    test("Return error when 'apellido' is null", ()=>{
        expect(employeeValidator("Camilo", null)).toEqual(expect.arrayContaining(expectErrors1))
    })
    test("Return error when 'nombre' is not a string", ()=>{
        expect(employeeValidator("12311", "lopez")).toEqual(expect.arrayContaining(expectErrors2))
    })
    test("Return error when 'apellido' is not a string", ()=>{
        expect(employeeValidator("Robert", "12311")).toEqual(expect.arrayContaining(expectErrors3))
    })
    test("Returns errors when 'nombre' and 'apellido' are null", ()=>{
        expect(employeeValidator(null, null)).toEqual(expect.arrayContaining(expectErrors4))
    })
    test("Returns errors when 'nombre' is null and 'apellido' is not a string", ()=>{
        expect(employeeValidator(null, "12312")).toEqual(expect.arrayContaining(expectErrors5))
    })
})