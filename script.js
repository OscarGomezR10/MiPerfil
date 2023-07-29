        let menuVisible = false;

        function mostrarOcultarMenu() {
            const nav = document.getElementById("nav");
            if (menuVisible) {
                nav.classList.remove("responsive");
                menuVisible = false;
            } else {
                nav.classList.add("responsive");
                menuVisible = true;
            }
        }

        function seleccionar() {
            const nav = document.getElementById("nav");
            nav.classList.remove("responsive");
            menuVisible = false;
        }

        // Agregar un evento al hacer clic en un enlace dentro del menú
        const enlacesMenu = document.querySelectorAll("#nav a");
        enlacesMenu.forEach((enlace) => {
            enlace.addEventListener("click", seleccionar);
        });

        document.addEventListener("DOMContentLoaded", function () {
            const lenguajesContainer = document.querySelector(".lenguajes");
            const iconosLenguaje = lenguajesContainer.querySelectorAll(".icono-lenguaje");
          
            iconosLenguaje.forEach((icono) => {
                const lenguaje = icono.dataset.lenguaje;
                switch (lenguaje) {
                    case "javascript":
                        icono.classList.add("fab", "fa-js");
                        break;
                    case "python":
                        icono.classList.add("fab", "fa-python");
                        break;
                    case "html":
                        icono.classList.add("fab", "fa-html5");
                        break;
                    case "css":
                        icono.classList.add("fab", "fa-css3-alt");
                        break;
                    case "git":
                        icono.classList.add("fab", "fa-git");
                        break;
                    case "github":
                        icono.classList.add("fab", "fa-github");
                        break;
                    case "mysql":
                        icono.classList.add("fas", "fa-database");
                        break;
                    case "react":
                        icono.classList.add("fab", "fa-react");
                        break;
                    // Agrega más casos para más lenguajes si es necesario
                    default:
                        // Si no se reconoce el lenguaje, puedes mostrar un ícono genérico
                        icono.classList.add("fas", "fa-code");
                }
            });
        });