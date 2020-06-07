<!-- Modal -->
<div id="passmodal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Contenido del modal -->
             <div class="modal-content">
                  <div class="modal-header">
                  <!-- Titulo -->
                  <h5 class="modal-title" id="exampleModalLabel">Modal Cambiar Contraseña</h5>
                   <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <!-- inputs text -->
                  <div class="modal-body">
                  <div class="form-group">
            <label for="nuevacontra1" class="col-form-label">Escribe una Nueva contraseña:</label>
            <input type="password" class="form-control" id="nuevacontra1">
          </div>
          <div class="form-group">
            <label for="nuevacontra2" class="col-form-label">Escribe la Contraseña de Nuevo:</label>
            <input type="password" class="form-control" id="nuevacontra2"></input>
          </div>
                  </div>
                  <!-- Botones Modal-->
                  <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar Modal</button>
                   <button id="actualizar" type="button" class="btn btn-primary">Actualizar Contraseña</button>
                   <button id="generar" type="button" class="btn btn-success" onclick="Autopass(8);">Generar Contraseña</button>
                </div>
              </div>
             </div>
            </div>