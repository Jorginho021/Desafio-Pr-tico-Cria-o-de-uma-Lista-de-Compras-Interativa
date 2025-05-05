document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shopping-form');
    const productNameInput = document.getElementById('product-name');
    const productQuantityInput = document.getElementById('product-quantity');
    const shoppingList = document.getElementById('shopping-list');
    const clearListButton = document.getElementById('clear-list');

   
    function addItemToList(name, quantity) {
        const li = document.createElement('li');
        li.textContent = `${name} (${quantity})`;
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        shoppingList.appendChild(li);
    }

  
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = productNameInput.value.trim();
        const productQuantity = parseInt(productQuantityInput.value, 10);

        if (productName === '' || isNaN(productQuantity) || productQuantity <= 0) {
            alert('Por favor, insira um nome válido e uma quantidade maior que zero.');
            return;
        }

        addItemToList(productName, productQuantity);

    
        productNameInput.value = '';
        productQuantityInput.value = '';
    });

   
    clearListButton.addEventListener('click', () => {
        shoppingList.innerHTML = '';
    });
});
