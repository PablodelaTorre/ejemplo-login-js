$('document').ready(() => {
    if (localStorage.getItem("token")){
        const user = localStorage.getItem("email").split("@")
        $("#user").text(user[0])
    }
})