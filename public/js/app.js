
const loginForm = document.getElementById("loginForm")
if(loginForm){
    loginForm.addEventListener("submit", async (e) =>{
        e.preventDefault()
        const login = document.getElementById("login").value
        const senha = document.getElementById("senha").value
        const response = await fetch("/login", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                login,
                senha
            })
        })
        const dados = await response.json()
        document.getElementById("mensagem").textContent = dados.mensagem
        if(response.ok){
            window.location.href = "/app.html"
        }
    })
} 

const btnLogout = document.getElementById("logout")
if(btnLogout){
    btnLogout.addEventListener("click", async () =>{
        await fetch("/logout", {
            method: "POST"
        })
        window.location.href = "/"
    })
}

async function carregarUsuario(){
    const response = await fetch("/usuario")

    if(response.status === 401){
        window.location.href = "/"
        return
    }
    const usuario = await response.json()
    document.getElementById("usuario").textContent = `Olá, ${usuario.nome}`
}
if(document.getElementById("usuario")){
    carregarUsuario()
}
