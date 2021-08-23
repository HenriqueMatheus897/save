let handlecontact = async (req, res) => {
    return res.render("contato.ejs",{
        user: req.user
    });
};

module.exports = {
    handlecontact: handlecontact,
};
