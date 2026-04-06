function showSection(id, el) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    if(el) el.classList.add('active');
}

function openProduct(name, price) {
    showSection('product');
    document.getElementById('pname').innerText = name;
    document.getElementById('pprice').innerText = price;
}
