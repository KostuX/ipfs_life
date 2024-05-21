const userShema_db = require("../database/queries/createUserShema");
const addEncKey_db = require("../database/queries/addEncKey");
const createEncKey = require("./encryption/key/generateKey");

module.exports = async function UserInit(user) {
  userShema_db(user, async (e) => {
    if (e.ok) {
      createEncKey(user, "password", (e) => {
        addEncKey_db(user, e.key, "default");
      });
    }
  });
};
