import conexion from "../config/db.js"

const getCompanies = async (request, response)=> {
    const companies = await conexion.query("SELECT * FROM companies")
    response.json(companies.rows)
}

const insertCompanies = async (request, response) => {
    const {companie_name, companie_city, companie_address, companie_sector} = request.body
    const companie = await conexion.query(`INSERT INTO companies (companie_name, companie_city, companie_address, companie_sector) VALUES('${companie_name}', '${companie_city}', '${companie_address}', '${companie_sector}')`)

    response.json({success:companie.rowCount})
}

const updateCompanies = async (request, response) => {
    const id = request.params.id
    const {companie_name, companie_city, companie_address, companie_sector} = request.body
    const companie = await conexion.query(`UPDATE companies SET companie_name='${companie_name}', companie_city='${companie_city}', companie_address='${companie_address}', companie_sector='${companie_sector}' WHERE skill_id='${id}'`)

    response.json({success:companie.rowCount})
}

const deleteCompanies = async (request, response) => {
    const id = request.params.id
    const companie = await conexion.query(`DELETE FROM companies WHERE id='${id}'`)

    response.json({success:companie.rowCount})
}

export {getCompanies, insertCompanies, updateCompanies, deleteCompanies}