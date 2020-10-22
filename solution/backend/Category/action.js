const db = require('../database');

getAllCategoriesQuery = () => {
    const query = 'select * from Category';
    return new Promise((resolve, reject) => {

        db.query(query , (error, results, fields) => {
            if (error) reject(error)
            else resolve(results);
        });
    });
}
getAllCategories = async (req , res) => {

    try {
        
        let categories = await getAllCategoriesQuery();
        res.json(categories).status(200);
    } catch (error) {
        res.status(500).send(error)
    }
};
createCategoryQuery = (body)=> {

    const query = 'insert into Category ( name ) values ( ? )';
    return new Promise((resolve, reject) => {

        db.query(query , [ body.name ] , (error, results, fields) => {
            if (error) reject(error)
            else resolve(results);
        });
    });
}
createCategory =  async (req, res , next) => {
    try {
        let body = req.body;
        console.log(body.name)
        if(body.name.length == 0){
            let error = new Error('Name of category is required');
            error.status = 404;
            next(error);
        }else {
            await createCategoryQuery(body);
            res.json('Success!');
        }
        
        
    } catch (error) {
        res.status(500).send(error)
    }
}
module.exports = {
    getAllCategories,
    createCategory
}