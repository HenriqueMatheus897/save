let handleaboutTheClub = async (req, res) => {
    return res.render("Sobre-o-clube.ejs",{
        user: req.user
    });
};

module.exports = {
    handleaboutTheClub: handleaboutTheClub,
};
