import { Controller } from '@hotwired/stimulus'
 
export default class extends Controller {
  static targets = ["btn", "form"]
  static values = { filter: String }

  connect() {
  }

  alert() {
    setTimeout(() => { 
        
        alert("Hello World!")
    }, 300)
    this.btnTarget.setAttribute("disabled", "")
    console.log(this.filterValue)
  }

  
}