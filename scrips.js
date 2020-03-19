// const formSearch = document.querySelector('.form-search')
// inputCitiesFrom = formSearch.querySelector('.input__cities-from')
// dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from')
// inputCitiesTo = formSearch.querySelector('.input__cities-to')
// dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');
const inputCitiesFrom = document.querySelector('.input__cities-from'),
    formSearch = document.querySelector('.form-search'),
    dropdownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
    inputCitiesTo = formSearch.querySelector('.input__cities-to'),
    dropdownCitiesTo = formSearch.querySelector('.dropdown__cities-to');

const cities = ['Москва', 'Санкт-Петербург',
    'Керчь', 'Бишкек', 'Астана', 'Киев', 'Нижний Новгород', 'Усть Кузьминск', 'Вроцлав'
];

const showCity = (input, list) => {
    list.textContent = ''; //для того чтобы список не заполнялся
    if ((input.value !== '')) {

        console.log('всё ок инпут не пустой');
        const filterCity = cities.filter((item) => {
            // console.log(item);
            const fixItem = item.toLocaleLowerCase();
            return fixItem.includes(input.value.toLocaleLowerCase());
        });
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add = 'dropdown__city';
            li.textContent = item;
            list.append(li);
        });
    }
};

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', event => {
    target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        const cityName = target.textContent;
        inputCitiesFrom.value = cityName;
        dropdownCitiesFrom.textContent = '';
    }

})