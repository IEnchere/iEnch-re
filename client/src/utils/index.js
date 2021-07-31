export function signIn(token) {
  localStorage.setItem("jwt", token);
}

export function logOut() {
  localStorage.clear();
  sessionStorage.clear();
}
