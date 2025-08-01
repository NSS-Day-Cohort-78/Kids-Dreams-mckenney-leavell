import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

// when celebrity name is clicked, it should display their sport
// (celebrity name) is a (sport) star

//define event listener
document.addEventListener("click", (clickEvent) => {
    //define click event target
    const itemClicked = clickEvent.target
    //was a celebrity's name clicked?
    if (itemClicked.dataset.type === "celebrity") {
        //see which celebrity was clicked
        const celebrityId = parseInt(itemClicked.dataset.id)
        for (const celebrity of celebrities) {
            if (celebrity.id === celebrityId) {
                window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
            }
        }
    }
})
