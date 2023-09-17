class agregarTarea {
    constructor(usuario, tarea, fecha) {
        this.usuario = usuario;
        this.tarea = tarea;
        this.fecha = fecha;

    }
}

function add(usuario, tarea, fecha) {
    const descripcion = new agregarTarea(usuario, tarea, fecha);
    tareas.push(descripcion);
    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    for (const tarea of tareas) {
        guardarLocal("Notas", JSON.stringify(tareas));

    }
    console.log(tarea)


}

document.addEventListener('DOMContentLoaded', function () {
    const input1 = document.getElementById('username');
    const input2 = document.getElementById('text');
    const input3 = document.getElementById('date');
    const storeButton = document.getElementById('storeButton');
    const recordsJSON = JSON.parse(localStorage.getItem('myRecords'));


    //Funcion para buscar datos en localStorage
    function getRecords() {

        const recordsJSON = localStorage.getItem('myRecords');
        return JSON.parse(recordsJSON) || [];
    }

    function saveRecords(records) {
        localStorage.setItem('myRecords', JSON.stringify(records));
    }

    //Funcion para crear las tarjetas
    function createCard(record) {


        //Busco div de las tarjetas
        const cardContainer = document.getElementById("notesDiv");

        //Creo las tarjetas
        const card = document.createElement("div");

        //Agrego info
        const cardContent = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardText = document.createElement('div');
        const cardDate = document.createElement('div');

       //Asigno clases
        card.classList.add('note');
        cardContent.classList.add('card-content');
        cardHeader.classList.add('card-username');
        cardText.classList.add('card-text');
        cardDate.classList.add('card-date');

        //Agrego info
        cardHeader.textContent = `${record.data1}`;
        cardText.textContent = `${record.data2}`;
        cardDate.textContent = `${record.data3}`;

        //Hago los appends
        cardContent.appendChild(cardHeader);
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardDate);
        card.appendChild(cardHeader);
        card.appendChild(cardText);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
    }

    //Funcion para refrescar las tarjetas
    function refreshCards() {
        const records = getRecords();
        const cardsContainer = document.getElementById('notesDiv');

        //borramos lo existente
        cardsContainer.innerHTML = '';

        //Agregamos tarjetas
        for (const record of records) {
            createCard(record);
        }
    }



    //Funcion para buscar por username
    function SearchByUsername(username) {
        return recordsJSON.filter(item => {
            return item.data1.toLowerCase().includes(username.toLowerCase());
        });

    };


    //Funcion para renderizar
    function renderResults(results) {
        getRecords();
        const cardContainer = document.getElementById("notesDiv");
        cardContainer.innerHTML = '';

        if (results.length === 0) {
            alert('No results found.');
        }
        else {
            results.forEach(item => {

                //Creo las tarjetas
                const card = document.createElement("div");

                //Agrego info
                const cardContent = document.createElement('div');
                const cardHeader = document.createElement('div');
                const cardText = document.createElement('div');
                const cardDate = document.createElement('div');

                //Asigno clases
                card.classList.add('note');
                cardContent.classList.add('card-content');
                cardHeader.classList.add('card-username');
                cardText.classList.add('card-text');
                cardDate.classList.add('card-date');

                //Agrego contenido
                cardHeader.textContent = `${item.data1}`;
                cardText.textContent = `${item.data2}`;
                cardDate.textContent = `${item.data3}`;

                //hago los appends
                cardContent.appendChild(cardHeader);
                cardContent.appendChild(cardText);
                cardContent.appendChild(cardDate);
                card.appendChild(cardHeader);
                card.appendChild(cardText);
                card.appendChild(cardContent);
                cardContainer.appendChild(card);
            });

        }
    };




    // Agrego evento espera de click
    storeButton.addEventListener('click', () => {
        window.location.reload();
        // Get the values from the input fields
        const data1 = input1.value;
        const data2 = input2.value;
        const data3 = input3.value;
        console.log(data1);

        // Cheque por campos vacios
        if (data1 === '' || data2 === '' || data3 === '') {
            alert('Please enter data in all fields.');
            return;
        }

        // Genero objeto
        const dataObject = {
            data1,
            data2,
            data3
        };
        // Busco info en localStorage
        const records = getRecords();

        // Agrego datos al array
        records.push(dataObject);

        // Guardo los datos en localStorage
        saveRecords(records);

        // Limpio campos
        input1.value = '';
        input2.value = '';
        input3.value = '';

        storeButton.textContent = 'Saved'
        storeButton.classList.add('fadeColor');

        setTimeout(() => {
            storeButton.textContent = 'Submit'
            storeButton.classList.remove('fadeColor');
        }, 1500);
        refreshCards()

    });



    const filterButton = document.getElementById('filterButton');
    const filterInput = document.getElementById('filterInput');

    //evento esperando click en el filtro
    filterButton.addEventListener('click', () => {

        const data1 = filterInput.value;
        const results = SearchByUsername(data1)
        renderResults(results);

    });

    const clearFilterButton = document.getElementById('clearFilterButton');
    clearFilterButton.addEventListener('click', () => {
        filterInput.value = '';
        refreshCards()
    });
    refreshCards()
});

