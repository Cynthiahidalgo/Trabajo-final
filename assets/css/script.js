$('.boton__nuevo').on('click', funtion(e),
    e.preventDefoult(),
    $('.boton__nuevo').append(<div class="pagos__servicios py-2 my-2">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                </label>
    </div>
            <li class="pagos__texto">16/3</li>
            <li class="pagos__texto">Ecogas</li>
            <li class="pagos__texto">$600</li>
            <li>
                <button type="button" class="btn btn-info btn-sm"><a href="Comprobante.html">Pagar</a></button>
            </li>

        </div>
    )
);