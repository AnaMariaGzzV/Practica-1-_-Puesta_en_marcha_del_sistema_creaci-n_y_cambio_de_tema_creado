<!-- Contenido del Login -->
<div class="login-box" >
    <div class="login-box-body bordeLogin">
                <!-- Titulo de Login -->
        <p class="tituloLogin">Sistema Control de Accesos</p>
        <!-- labels e input para login -->
        <form action="verificar_login.php" method="post" id="frmLogin" style="border-color:#40739e">
            <div class="form-group has-feedback logoActivo">
                <label class="lblTitulo">Usuario:</label>
            <input type="usuario" id="loginUsuario" class="form-control" placeholder="Escribe el nombre de usuario" autofocus required>
            </div>
            <div class="form-group has-feedback">
                <label class="lblTitulo">Contraseña:</label>
            <input type="password" id="loginContra" class="form-control" placeholder="Escribe la contraseña" required>
            </div>
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
            <!-- Cambio de contraseña toggle -->
            <input id="check" type="checkbox" value="0" onchange="" data-toggle="toggle" data-on="Si" data-off="No" data-onstyle="outline-success" data-width="60" data-size="sm" data-offstyle="outline-danger"> Cambiar contraseña
                <!-- Boton de ingresar -->
                <div class="col text-center">
                    <button   type="submit" class="btn btn-outline-dark active" id="btnIngresar" disabled>
                        <i class="fas fa-lock" id="icoLogin"></i>
                        Ingresar al sistema
                    </button>
                </div>

        </form>
    </div>
</div>

