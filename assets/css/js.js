$('.boton__nuevo').on('click', funtion(e),
    e.preventDefoult(),
    $('.boton__nuevo').append(<div class="pagos__servicios py-2 my-2">
        <li class="pagos__texto">16/3</li>
        <li class="pagos__texto">Ecogas</li>
        <li class="pagos__texto">$600</li>
        <li>
            <button class="pagos__boton">Pagar</button>
        </li>

    </div>);


