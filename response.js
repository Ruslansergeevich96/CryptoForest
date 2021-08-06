'use strict'

exports.status = (values, res) => {

    const data ={
        "stats": 200,
        "values": values
    }

    res.json(data)
    res.end()
}