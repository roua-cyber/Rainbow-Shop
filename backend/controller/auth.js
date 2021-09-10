

module.exports=register = async (req, res, next) => {
    try {
       res.send("register route")
 
    } catch (error) {
        console.error(error);
    }
};

module.exports=login = async (req, res, next) => {
    try {
        res.send("login route")

     } catch (error) {
         console.error(error);
     }
};

module.exports=forgotpassword = async (req, res, next) => {
    try {
  res.send("forgotpassword route")

     } catch (error) {
         console.error(error);
     }
};

module.exports=resetpassword = async (req, res, next) => {
    try {
  res.send("resetpassword route")

     } catch (error) {
         console.error(error);
     }
};

