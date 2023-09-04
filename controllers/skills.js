//crear un archivo por cada tabla de la base de datos

import conexion from "../config/db.js"

const getSkills = async (request, response)=> {
    const skills = await conexion.query("SELECT * FROM skills")
    response.json(skills.rows)
}

const insertSkills = async (request, response) => {
    const {skill_name, skill_description} = request.body
    const skill = await conexion.query(`INSERT INTO skills(skill_name, skill_description) VALUES('${skill_name}','${skill_description}')`)

    response.json({success:skill.rowCount})
}

const updateSkills = async (request, response) => {
    const id = request.params.id
    const {skill_name, skill_description} = request.body
    const skill = await conexion.query(`UPDATE skills SET skill_name='${skill_name}', skill_description='${skill_description}' WHERE skill_id='${id}'`)

    response.json({success:skill.rowCount})
}

const deleteSkills = async (request, response) => {
    const id = request.params.id
    const skill = await conexion.query(`DELETE FROM clientes WHERE id='${id}'`)

    response.json({success:skill.rowCount})
}

export {getSkills, insertSkills, updateSkills, deleteSkills}