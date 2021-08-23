let handleplans = async (req, res) => {
    return res.render("planos.ejs",{
        user: req.user
    });
};

module.exports = {
    handleplans: handleplans,
};
