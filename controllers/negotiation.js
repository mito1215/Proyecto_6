import conexion from "../config/db.js"

const getNegotiation = async (request, response)=> {
    const negotiation = await conexion.query("SELECT * FROM negotiation")
    response.json(negotiation.rows)
}

const insertNegotiation = async (request, response) => {
    const {status_id, user_id, companie_id, negotiation_hours} = request.body
    const negotiation = await conexion.query(`INSERT INTO negotiation (status_id, user_id, companie_id, negotiation_hours) VALUES('${status_id}', '${user_id}', '${companie_id}', '${negotiation_hours}')`)

    response.json({success:negotiation.rowCount})
}

const updateNegotiation = async (request, response) => {
    const id = request.params.id
    const {status_id, user_id, companie_id, negotiation_hours} = request.body
    const negotiation = await conexion.query(`UPDATE negotiation SET status_id='${status_id}', user_id='${user_id}', companie_id='${companie_id}', negotiation_hours='${negotiation_hours}' WHERE negotiation_id='${id}'`)

    response.json({success:negotiation.rowCount})
}

const deleteNegotiation = async (request, response) => {
    const id = request.params.id
    const negotiation = await conexion.query(`DELETE FROM negotiation WHERE negotiation_id='${id}'`)

    response.json({success:negotiation.rowCount})
}

export {getNegotiation, insertNegotiation, updateNegotiation, deleteNegotiation}