<!-- Modal -->
<div class="modal fade" id="modalHorario" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularHorario">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="frmHorario<?php echo $varGral?>">
    <input type="hidden"  id="Idh">
    <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <h1 for="Turno" >Turnos:</h1>
                <select id="Turno" class="form-control" style="width: 100%"   autofocus required>
                    <option  value="Especial">Especial</option>
                    <option  value="Matutino">Matutino</option>
                    <option  value="Vespertino">Vespertino</option>
                    <option  value="Nocturno">Nocturno</option>
                 </select>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Lunes</h1>
            </div>
            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="luEntrada">Hora Entrada:</label>
                <input type="time" class="form-control " id="luEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-6 col-sm-8 col-md-8 col-lg-6">
            <div class="form-group">
                <label for="luSalida">Hora Salida:</label>
                <input type="time" class="form-control " id="luSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Martes</h1>
            </div>

            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="maEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="maEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="maSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="maSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Miercoles</h1>
            </div>

            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="MiE">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="MiE" autofocus required>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="miSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="miSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Jueves</h1>
            </div>

            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="juEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="juEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="juSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="juSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Viernes</h1>
            </div>

            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="viEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="viEntrada" autofocus required>
            </div>
        </div>
       
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="viSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="viSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Sabado</h1>
            </div>

            <div class="row">

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="saEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="saEntrada" autofocus required>
            </div>
        </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="SS">Hora Salida:</label>
                <input type="time" class="form-control activo" id="SS" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Domingo</h1>
            </div>

            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="doEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="doEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="doSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="doSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="modal-footer">
                    <button  type="submit" class="btn btn-success  activo btnEspacio" id="Guardar">Guardar</button>
                <button type="submit" class="btn btn-danger activo btnEspacio" data-dismiss="modal">Cerrar</button> 
            </div>
        </div>
                
            </div>
        </div>

    </div>

</form>
       
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<!-- Modal2 -->
<div class="modal fade" id="modalActualizar" tabindex="-1" role="dialog" aria-labelledby="modalDatosCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document" >
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title" id="txtTitularHorario2">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form id="frmHorario<?php echo $varGral?>">
    <input type="hidden"  id="idpers">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <h1 for="actualizarTurno" >Turno:</h1>
                <select id="actualizarTurno" class="form-control" style="width: 100%"   autofocus required>
                    <option  value="Especial">Especial</option>
                    <option  value="Matutino">Matutino</option>
                    <option  value="Vespertino">Vespertino</option>
                    <option  value="Nocturno">Nocturno</option>
                 </select>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Lunes</h1>
            </div>

            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarluEntrada">Hora Entrada:</label>
                <input type="time" class="form-control " id="actualizarluEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarluSalida">Hora Salida:</label>
                <input type="time" class="form-control " id="actualizarluSalida" autofocus required>
            </div>
        </div>
        </div>

        <div class="row">
            <h1>Martes</h1>
            </div>
            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarmaEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="actualizarmaEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarmaSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="actualizarmaSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Miercoles</h1>
            </div>
            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eMiE">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="eMiE" autofocus required>
            </div>
        </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarmiSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="actualizarMiS" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
            <h1>Jueves</h1>
            </div>
            <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarjuEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="actualizarjuEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarjuSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="actualizarjuSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
        <h1>Viernes</h1>
            </div>
            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarviEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="actualizarviEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarviSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="actualizarviSalida" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
        <h1>Sabado</h1>
            </div>
            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizarsaEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="actualizarsaEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="eSS">Hora Salida:</label>
                <input type="time" class="form-control activo" id="eSS" autofocus required>
            </div>
        </div>
        </div>
        <div class="row">
        <h1>Domingo</h1>
            </div>
            <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizardoEntrada">Hora Entrada:</label>
                <input type="time" class="form-control activo" id="actualizardoEntrada" autofocus required>
            </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="form-group">
                <label for="actualizardoSalida">Hora Salida:</label>
                <input type="time" class="form-control activo" id="actualizardoSalida" autofocus required>
            </div>
        </div>
        </div>
    
        <div class="modal-footer">
                    <button  type="submit" class="btn btn-success  activo btnEspacio" id="actua">Actualizar</button>
                <button type="submit" class="btn btn-danger" data-dismiss="modal">Cerrar</button> 
            </div>
        </div>
        </div>
    </div>

</form>
       
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>