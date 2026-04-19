let portions = 4;
const maxPortions = 10;

const ingredientData = [
    { name: "Färska lasagneplattor", qty: 400, unit: "g", roundTo: 50 },
    { name: "Vegofärsk (alt 500g nötfärs)", qty: 500, unit: "g", roundTo: 50 },
    { name: "Klyftor vitlök", qty: 5, unit: "", roundTo: 1 },
    { name: "Gul lök (eller 2 mindre gula lökar)", qty: 1, unit: "", roundTo: 1 },
    { name: "Rotselleri", qty: 1, unit: "", roundTo: 1 },
    { name: "Morot", qty: 1, unit: "", roundTo: 1 },
    { name: "tomatpuré", qty: 2, unit: "msk", roundTo: 1 },
    { name: "Krossade tomater", qty: 500, unit: "g", roundTo: 50 },
    { name: "Olivolja", qty: 4, unit: "msk", roundTo: 1 },
    { name: "Vinäger", qty: 3, unit: "msk", roundTo: 1 },
    { name: "Mozarella, riven", qty: 200, unit: "g", roundTo: 25 },
    { name: "Crème fraîche", qty: 3, unit: "dl", roundTo: 0.5 },
    { name: "vatten (alt laktosfri mjölk)", qty: 2, unit: "msk", roundTo: 1 },
    { name: "Salt", qty: 0, unit: "", isStatic: true },
    { name: "Peppar", qty: 0, unit: "", isStatic: true },
    { name: "Röd tomat", qty: 1, unit: "", roundTo: 1 },
    { name: "Kruka persilja, hackad", qty: 1, unit: "", roundTo: 1 }
];

function renderIngredients() {
    const container = document.getElementById('ingredient-list');
    container.innerHTML = "";

    const splitIndex = 8;
    const leftCol = document.createElement('div');
    const rightCol = document.createElement('div');

    ingredientData.forEach((item, index) => {
        let displayLine = "";
        
        if (item.isStatic) {
            displayLine = `• ${item.name}`;
        } else {
            let rawQty = (item.qty / 4) * portions;
            let finalQty;

            if (item.roundTo === 1) {
                finalQty = Math.round(rawQty);
            } else if (item.roundTo === 0.5) {
                finalQty = Math.round(rawQty * 2) / 2;
            } else {
                finalQty = Math.round(rawQty / item.roundTo) * item.roundTo;
            }
            
            displayLine = `• ${finalQty}${item.unit} ${item.name}`;
        }

        const itemElement = document.createElement('div');
        itemElement.style.marginBottom = "8px";
        itemElement.innerHTML = displayLine;

        if (index < splitIndex) {
            leftCol.appendChild(itemElement);
        } else {
            rightCol.appendChild(itemElement);
        }
    });

    container.appendChild(leftCol);
    container.appendChild(rightCol);

    document.getElementById('portion-count').innerText = portions;
}

function changePortions(amount) {
    const newTotal = portions + amount;
    if (newTotal >= 1 && newTotal <= maxPortions) {
        portions = newTotal;
        renderIngredients();
    }
}

renderIngredients();