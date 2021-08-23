let handlemembersArea = async (req, res) => {
    return res.render("area-de-membros.ejs",{
        user: req.user
    });
};

module.exports = {
    handlemembersArea: handlemembersArea,
};
