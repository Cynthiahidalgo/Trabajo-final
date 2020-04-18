
$(document).ready(function () {
    $('.boton__nuevo')
        .on('click',
            function () {
                var DuplicarPago = `
 <article class="pagos__servicios d-flex justify-content-between p-2 my-2">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                </label>
            </div>
            <div class="pagos__texto">16/3</div>
            <div class="pagos__texto">Ecogas</div>
            <div class="pagos__texto">$600</div>
            <div>
                <a type="button" class="btn btn-info btn-sm" href="comprobante.html">Pagar</a>
            </div>
  </article>
`;
                $('.vencimientos').append(DuplicarPago);
            },
        );

});


