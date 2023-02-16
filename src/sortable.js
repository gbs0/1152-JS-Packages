import Sortable from "sortablejs";

const initSortable = () => {
    const list = document.getElementById("results")
    Sortable.create(list, {
        ghostClass: "ghost",
        animation: 150,
        onEnd: (event) => {
            console.dir(event)
            alert(`Movie ${event.oldIndex + 1} moved to ${event.newIndex + 1}!`)
        }
    })
}

export { initSortable }