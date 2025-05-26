/**
 * Responsabilidad: gestionar los eventos
 * */ 

const btn = document.getElementById("btn")
btn.addEventListener("click", (click) => {
	click.preventDefault();
	domInput()
})
