import conexion from "../config/db.js"

const getUsers = async (request, response)=> {
    const users = await conexion.query("SELECT * FROM users")
    response.json(users.rows)
}

const insertUsers = async (request, response) => {
    const {user_name, user_city, user_address, user_tariff, skill_id} = request.body
    const user = await conexion.query(`INSERT INTO users (user_name, user_city, user_address, user_tariff, skill_id) VALUES('${user_name}', '${user_city}', '${user_address}', '${user_tariff}', '${skill_id}')`)

    response.json({success:user.rowCount})
}

const updateUsers = async (request, response) => {
    const id = request.params.id
    const {user_name, user_city, user_address, user_tariff, skill_id} = request.body
    const user = await conexion.query(`UPDATE users SET user_name='${user_name}', user_city='${user_city}', user_address='${user_address}', user_tariff='${user_tariff}', skill_id='${skill_id}' WHERE skill_id='${id}'`)

    response.json({success:user.rowCount})
}

const deleteUsers = async (request, response) => {
    const id = request.params.id
    const user = await conexion.query(`DELETE FROM users WHERE id='${id}'`)

    response.json({success:user.rowCount})
}

export {getUsers, insertUsers, updateUsers, deleteUsers}