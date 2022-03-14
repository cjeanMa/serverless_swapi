const { v4 } = require("uuid");
const { formatResponse } = require('../helpers/response');
const dynamoDB = require("../db/connectionDynamo")

const postEmployee = async (event) =>{
    
    const {nombre, apellido} = JSON.parse(event.body);
    const id = v4();
    const creado = Date().toString();

    const newEmployee = {
        id,
        nombre,
        apellido,
        creado
    }

    await dynamoDB.connection.put({
        TableName: 'EmployeeTable',
        Item: newEmployee
    }).promise()
    
    return (formatResponse(201, JSON.stringify(newEmployee)))
}

const getEmployees = async (event) =>{
    const result = await dynamoDB.connection.scan({
        TableName: "EmployeeTable"
    }).promise()

    const employees = result.Items

    return (formatResponse(200, employees))
}

module.exports = {
    postEmployee,
    getEmployees
}