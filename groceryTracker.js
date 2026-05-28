
function groceryTracker() {
    let item1 = Number(document.getElementById("grocery1").value);
    let item2 = Number(document.getElementById("grocery2").value);
    let item3 = Number(document.getElementById("grocery3").value);

    let total = item1 + item2 + item3;

    document.getElementById("result").textContent =
        "Total amount spent: ₦" + total;
}