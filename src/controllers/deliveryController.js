let handledelivery = async (req, res) => {
    return res.render("delivery.ejs",{
        user: req.user
    });
};

module.exports = {
    handledelivery: handledelivery,
};
