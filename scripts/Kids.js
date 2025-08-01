import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

// When the kid name is clicked, it should display their wish.
// (kid name)'s wish is (kid wish)

//define event listener
document.addEventListener("click", (clickEvent) => {
    //define click event target
    const itemClicked = clickEvent.target
    //was a child's name clicked?
    if (itemClicked.dataset.type === "child") {
        //see which child was clicked
        const childId = parseInt(itemClicked.dataset.id)
        for (const child of children) {
            if (child.id === childId) {
                window.alert(`${child.name}'s wish is ${child.wish}`)
            }
        }
    }
})

