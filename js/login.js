$("#login_form").submit(async(e) => {
    e.preventDefault();

    $('#login-error').text('')
    const email = $("#email").val()
    const password = $("#password").val()

    const resultadoDeLaPeticion = await enviarDatos("https://reqres.in/api/login", {email, password})

    if (!!resultadoDeLaPeticion.token){
        localStorage.setItem('token', resultadoDeLaPeticion.token)
        localStorage.setItem('email', email)
        location.replace('./')
    }else{
        $('#login-error').addClass('text-danger')
        $('#login-error').text('Usuario incorrecto')
    }
    
    console.log(resultadoDeLaPeticion)
})



const enviarDatos = async(url = "", data = {}) => {
    $("#btnIngresar").text("Cargando...")
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    $("#btnIngresar").text("Ingresar")
    return response.json()
}