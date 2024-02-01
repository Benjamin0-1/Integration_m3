let myFavorites = [];

const postFav = (req, res) => {
    const {id} = req.body;
    myFavorites.push(req.body); // guardar todo el personaje
    res.json(myFavorites);
};

const deleteFav = (req, res) => {       // /fav/:id
    const id = req.params.id;
    myFavorites = myFavorites.filter(char => char.id !== Number(id));
    res.json(myFavorites);
};

module.exports = {postFav, deleteFav};

