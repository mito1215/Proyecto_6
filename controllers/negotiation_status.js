import conexion from "../config/db.js"

const getNegotiationStatus = async (request, response)=> {
    const status = await conexion.query("SELECT * FROM negotiation_status")
    response.json(status.rows)
}

const insertNegotiationStatus = async (request, response) => {
    const {status_name, status_description} = request.body
    const status = await conexion.query(`INSERT INTO negotiation_status (status_name, status_description) VALUES('${status_name}','${status_description}')`)

    response.json({success:status.rowCount})
}

const updateNegotiationStatus = async (request, response) => {
    const id = request.params.id
    const {status_name, status_description} = request.body
    const status = await conexion.query(`UPDATE negotiation_status SET status_name='${status_name}', status_description='${status_description}' WHERE status_id='${id}'`)

    response.json({success:status.rowCount})
}

const deleteNegotiationStatus = async (request, response) => {
    const id = request.params.id
    const status = await conexion.query(`DELETE FROM negotiation_status WHERE status_id='${id}'`)

    response.json({success:status.rowCount})
}

export {getNegotiationStatus, insertNegotiationStatus, updateNegotiationStatus, deleteNegotiationStatus}