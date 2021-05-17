const withAuth = (req, res, next) => {
  console.log(req.user_Id);
    if (!req.session.user_Id) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  