export function IsLoggedIn(prop) {
  // TODO: make better validation
  let isLogged = prop?.user_session !== undefined;

  return isLogged;
}
