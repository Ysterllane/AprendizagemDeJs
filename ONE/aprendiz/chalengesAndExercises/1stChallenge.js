let senhaDoSistema = "senhaTeste!";

let senha = prompt("Digite a senha do sistema:");

/* O dev havia colocado '=' em vez de '==' para atribição, bastava apenas consertar */
if (senha == senhaDoSistema){
    alert("Acesso ao sistema garantido");
}