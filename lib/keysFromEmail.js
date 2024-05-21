const getUser = require("@/pages/api/database/queries/getUserFromEmail");
const getKeys = require("@/pages/api/database/queries/getUserKeys");

module.exports = async function (session) {
  let user = await getUser(session.user.email);

  let keys = await getKeys(user.rows[0], () => {});

  return keys.rows;
  /*
  getUser(session.user.email, (data) => {
    if (data.ok) {
      let user = data.data.rows[0];

      getKeys(user, (data) => {
        if (data.ok) {
          cb({
            data: data.keys,
          });
        }
      });
    }
  });
  */
};
