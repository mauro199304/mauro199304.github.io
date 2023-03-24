///Holamundo 
const app = require ("./app");
const { connectToDB } = require("./utils/mongoose");

function main() {
 connectToDB;
 // app.listen(3000);
  //console.log("Server on port", 3000);

  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

}

main();