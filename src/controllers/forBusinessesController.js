let handleforBusinesses = async (req, res) => {
    return res.render("Para-empresas.ejs",{
        user: req.user
    });
};

module.exports = {
    handleforBusinesses: handleforBusinesses,
};
