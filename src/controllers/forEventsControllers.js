let handleForEvents = async (req, res) => {
    return res.render("Para-eventos.ejs",{
        user: req.user
    });
};

module.exports = {
    handleForEvents: handleForEvents,
};
