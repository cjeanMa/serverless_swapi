const AWS = require("aws-sdk")

class DynamoConnection {

    constructor(){
        this.connection = new AWS.DynamoDB.DocumentClient();
    }

}

module.exports = new DynamoConnection();