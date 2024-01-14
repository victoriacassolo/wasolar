var client = 0;
var install = 0;
var kw = 0;

function valueOfText() {
  const idClient = setInterval(() => {
    client++;
    document.getElementById("client_value").innerText = client;

    if (client > 99) {
      clearInterval(idClient);
    }
  }, 80);

  const idInstall = setInterval(() => {
    install++;
    document.getElementById("install_value").innerText = install;

    if (install > 119) {
      clearInterval(idInstall);
    }
  }, 80);

  const idKw = setInterval(() => {
    kw++;
    document.getElementById("kw_value").innerText = kw;

    if (kw > 999) {
      clearInterval(idKw);
    }
  }, 10);
}

valueOfText();

console.log(client);
