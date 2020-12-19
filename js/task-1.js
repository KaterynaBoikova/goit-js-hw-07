const numberOfCategories = document.querySelectorAll('li.item');
console.log(`В списке ${numberOfCategories.length} категории.`);

numberOfCategories.forEach(category => {
    const categoryName = category.querySelector('h2');
    console.log(`Категория: ${categoryName.textContent}`);
    const numberOfElements = category.querySelectorAll('li');
    console.log(`Количество элементов: ${numberOfElements.length}`);
});






