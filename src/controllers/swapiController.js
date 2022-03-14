const { mappingSwapi } = require("../helpers/mappingSwapi")
const { formatResponse } = require("../helpers/response")
const { getNombres } = require("../services/swapiService")

const getData = async (event) => {

    const {page} = event.queryStringParameters || {page:1}

    const result = await getNombres(page)
    const response = mappingSwapi(result.data.results)

    return (formatResponse(200, response))
}

module.exports = {
    getData
}