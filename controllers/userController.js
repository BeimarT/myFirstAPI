// module.exports.list = () => {
//cada función sera una propieda   
// }

const users = [{id: 1, name:'John'},
                {id: 2, name:'David'}, 
                {id: 3, name:'Maria'}];
const status = {
    ok: 200,
    notFound: 404,
}
module.exports = {
    list: (req, res) => {
        //console.log/re.query.orden
        console.log(req.body);
        //Petición a la BBDD para obtener users
        res.status(status.ok).send(users);
    },
    profile: (req, res) => {
        //Petición a la BBDD per obtenir les dades d'un user
        // console.log(req.params.userId);

        const user = users.find((user) => user.id == req.params.userId);
        // res.status(status.ok).send(user);
        if(user) {
            res.status(status.ok).send(user);
        } else {
            const msg = {error: 'User Id not found'};
            res.status(status.notFound).send(msg);
        }
    }
}