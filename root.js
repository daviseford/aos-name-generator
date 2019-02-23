const lib_index = require('./lib/index')

module.exports = async (event, context) => {
    let statusCode = 500
    let [err, name] = [null, null]

    if (!event.body) return res(400, { name, err })

    try {
        const body = JSON.parse(event.body)
        if (!body.faction || !lib_index[body.faction]) {
            return res(404, { name, err: `faction '${body.faction}' not found/supported` })
        }
        name = lib_index[body.faction].generate()
        statusCode = 200
    } catch (e) {
        err = JSON.stringify(e)
    }

    return res(statusCode, { name, err })
};


const res = (statusCode, body) => {
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(body)
    };
}