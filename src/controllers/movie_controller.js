import { Controller } from '@hotwired/stimulus'
import Sortable from "sortablejs"

export default class extends Controller {
    static targets = ["input", "list", "button", "reset"]

    connect() {
        Sortable.create(this.listTarget, {
          ghostClass: "ghost",
          animation: 150,
          onEnd: (event) => {
            alert(`${event.oldIndex + 1} moved to ${event.newIndex + 1}`)
          }
        })
    }

    insertMovies = (moviesArray) => {
        this.listTarget.innerHTML = ""
        moviesArray.forEach((movie) => {
          const movieTag = `<li><img src="${movie.Poster}" width="100"></li>`
          this.listTarget.insertAdjacentHTML('beforeend', movieTag)
        })
    }

    fetchMovies = (event) => {
        event.preventDefault()
        const movieName = this.inputTarget.value
        this.buttonTarget.setAttribute("disabled", "")
        fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`)
          .then(response => response.json()) // dados em json = data
          .then(data => this.insertMovies(data.Search))
    }
    
    clear = () => {
       this.listTarget.innerHTML = ""
       this.buttonTarget.removeAttribute("disabled", "") 
    }
}