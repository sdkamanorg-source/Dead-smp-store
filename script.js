function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
}

function openProduct(name, price) {
    showSection('product');
    document.getElementById('pname').innerText = name;
    document.getElementById('pprice').innerText = price;
}

/* REAL BUY BUTTON (redirect example) */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("buy")){
        alert("Redirecting to payment...");
        window.location.href = "https://your-payment-link.com";
    }
});
