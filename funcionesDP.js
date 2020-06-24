//VARIABLE GLOBAL PARA NOMBRAR LOS ELEMENTOS DE LOS  FORMULARIOS
//DATOS PERSONALES -DP 
var nombreModulo_DP="Datos Personales";
$("#frmGuardar-DP").submit(function(e){

    var clave     = $("#clave").val();
    var nombre    = $("#nombre").val();
    var apPaterno = $("#apPaterno").val();
    var apMaterno = $("#apMaterno").val();
    var fNac      = $("#fNac").val();
    var correo    = $("#correo").val();
    var curp      = $("#curp").val();
    var domicilio = $("#domicilio").val();
    var sexo      = $("#sexo").val();
    var ecivil    = $("#ecivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/guardar.php",
                type:"POST",
                dateType:"html",
                data:{clave,nombre,apPaterno,apMaterno,fNac,correo,curp,domicilio,sexo,ecivil},
                success:function(respuesta){
                    
                    $("#guardar-DP").hide();
                    llenar_lista_DP();
                    $("#frmGuardar-DP")[0].reset();
                    selectTwo();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se insertado un nuevo registro a la tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

$("#frmActualizar-DP").submit(function(e){

    var id        = $("#eId").val();
    var nombre    = $("#eNombre").val();
    var apPaterno = $("#eApPaterno").val();
    var apMaterno = $("#eApMaterno").val();
    var fNac      = $("#eFnac").val();
    var correo    = $("#eCorreo").val();
    var curp      = $("#eCurp").val();
    var clave     = $("#eClave").val();
    var domicilio = $("#eDomicilio").val();
    var sexo      = $("#eSexo").val();
    var ecivil    = $("#eEcivil").val();

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar la información?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-success",
        confirmButtonText: "Si deseo actualizarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/actualizar.php",
                type:"POST",
                dateType:"html",
                data:{clave,id,nombre,apPaterno,apMaterno,fNac,correo,curp,clave,domicilio,sexo,ecivil},
                success:function(respuesta){
                    //console.log(respuesta);
                    llenar_lista_DP();
                        $("#frmGuardar-DP")[0].reset();
                        $("#frmActualizar-DP")[0].reset();
                        alertify.success("<i class='fa fa-bolt fa-lg'></i>", 2);
                    $("#btnCancelarG-DP , #btnCancelarA-DP").click();
                    actividad  ="Se ha modificado un registro de la tabla tabla "+nombreModulo_DP;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
                    
                    $('#nombre').focus();
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});

function llenar_lista_DP(){
    abrirModalCarga('Cargando Lista');
    $("#frmGuardar-DP")[0].reset();
    $("#Listado-DP").hide();
    $.ajax({
        url:"../mDatosPersonales/lista.php",
        type:"POST",
        dateType:"html",
        data:{},
        success:function(respuesta){
            $("#Listado-DP").html(respuesta);
            $("#Listado-DP").fadeIn("slow");
            cerrarModalCarga();      
            $("#nombre").focus();
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function edad(fecha){
    $.ajax({
        url:"../mDatosPersonales/calcularEdad.php",
        type:"POST",
        dateType:"html",
        data:{fecha},
        success:function(respuesta){

            $("#edad").val(respuesta);
            $("#eEdad").val(respuesta);

            xedad= parseInt(respuesta);
            if (xedad < 0) {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", rojo);
            } else {
                
                $("#edad, #eEdad , #fNac , #efNac").css("color", obscuro);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

function llenar_formulario_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil){
   
    $("#eId").val(id);
    $("#eClave").val(clave);
    $("#eNombre").val(nombre);
    $("#eApPaterno").val(apPaterno);
    $("#eApMaterno").val(apMaterno);
    $("#eFnac").val(fNac);
    $("#eEdad").val(edad);
    $("#eCorreo").val(correo);
    $("#eCurp").val(curp);
    $("#eClave").val(clave);
    $("#eDomicilio").val(domicilio);
    $("#eSexo").val(sexo);
    $("#eEcivil").val(ecivil);

    selectTwo();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Modificar datos");

    $("#guardar-DP").hide();
    $("#Listado-DP").hide();
    $("#editar-DP").fadeIn();
    $("#eNombre").focus();
}

function cambiar_estatus_DP(id,consecutivo){

    var valor=$("#check"+consecutivo).val();
    var contravalor=(valor==1)?0:1;
    $("#check"+consecutivo).val(contravalor);

    $.ajax({
        url:"../mDatosPersonales/cEstatus.php",
        type:"POST",
        dateType:"html",
        data:{id,contravalor},
        success:function(respuesta){
            // console.log(respuesta);
            if(contravalor==1){
                alertify.success("<i class='fa fa-check fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).removeAttr('disabled');
                $("#btnImprimir-DP"+consecutivo).removeAttr('disabled');
                $("#btnModal-DP"+consecutivo).removeAttr('disabled');
                $("#btnFoto-DP"+consecutivo).removeAttr('disabled');
                $("#btnSonido-DP"+consecutivo).removeAttr('disabled');
                $("#btnHorario"+consecutivo).removeAttr('disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-mute fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-up fa-lg");
                actividad  ="Se ha reactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }else{
                alertify.error("<i class='fa fa-times fa-lg'></i>", 2);
                $("#btnEditar-DP"+consecutivo).attr('disabled','disabled');
                $("#btnImprimir-DP"+consecutivo).attr('disabled','disabled');
                $("#btnModal-DP"+consecutivo).attr('disabled','disabled');
                $("#btnFoto-DP"+consecutivo).attr('disabled','disabled');
                $("#btnSonido-DP"+consecutivo).attr('disabled','disabled');
                $("#btnHorario"+consecutivo).removeAttr('disabled','disabled');
                $("#icoSound-DP"+consecutivo).removeClass("fa fa-volume-up fa-lg");
                $("#icoSound-DP"+consecutivo).addClass("fa fa-volume-mute fa-lg");
                actividad  ="Se ha desactivado un registro de la tabla tabla "+nombreModulo_DP;
                var idUser=$("#inicioIdusuario").val();
                log(actividad,idUser);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });

}

function abrirModalDatos_DP(id,nombre,apPaterno,apMaterno,fNac,edad,correo,curp,clave,domicilio,sexo,ecivil) {
    $("#modalTitle-DP").text("Datos personales - "+nombre+' '+apPaterno);

    $("#mNombre").val(nombre);
    $("#mApPaterno").val(apPaterno);
    $("#mApMaterno").val(apMaterno);
    $("#mFnac").val(fNac);
    $("#mEdad").val(edad);
    $("#mCorreo").val(correo);
    $("#mCurp").val(curp);
    $("#mClave").val(clave);
    $("#mDomicilio").val(domicilio);
    $("#mSexo").val(sexo);
    $("#mEcivil").val(ecivil);

    selectTwo();

    $("#modalDatos-DP").modal("show");
}


//Manipulacion de eventos con jquery
$("#fNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);
    ;
});

$("#efNac").change(function(){
    var fecha = $(this).val();
    edad(fecha);

});

$("#btnCancelarG-DP , #btnCancelarA-DP ,#btnCancelarHorario").click(function(){
    $("#editar-DP").hide();
    $("#guardar-DP").hide();
    $("#modalHorario").hide();

    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Lista");

    $("#Listado-DP").fadeIn();
 
});


$("#clave").keydown(function() {
    var valor=$(this).val();
    soloNumeros(valor);
});

$("#curp , #eCurp").keyup(function() {

    valor=$(this);
    // Convierte en mayuscula
    valor.val(valor.val().toUpperCase());
    
    //validar curp + expresion regular
    if (curpValida(valor.val())=="Si") {
        //$("#btnGuardar-DP").removeAttr('disabled');
        $(valor).css("color", obscuro);
        alertify.success("Curp valida !",1);
    }else{
        //$("#btnGuardar-DP").attr('disabled','disabled');
        $(valor).css("color", rojo);
    }

});

$("#clave").keyup(function(){
    var valor=$(this).val();
    revisar_clave(valor);
});

//Manipulacion de eventos con jquery

//Revisar clave repetida
function revisar_clave(valor){
    $.ajax({
        url:"../mDatosPersonales/rClave.php",
        type:"POST",
        dateType:"html",
        data:{valor},
        success:function(respuesta){
            res =parseInt(respuesta);
            if (res == 0) {
                $("#clave").css("color", obscuro);
            }else{
                $("#clave").css("color", rojo);
            }
        },
        error:function(xhr,status){
            alert("Error en metodo AJAX"); 
        },
    });
}

//validar curp
function curpValida(valor) {

    var validador;
    var curp=valor;

    // Expresion regular para curp
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    
    if (!validado){  //Coincide con el formato general?
        validador = "No";
    }else{
        validador = "Si";
    }
    return validador;
}

//llenar combo
function combo_ecivil()
{
    $.ajax({
        url : '../mDatosPersonales/comboEcivil.php',
        data : {},
        type : 'POST',
        dataType : 'html',
        success : function(respuesta) {
            
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").empty();
            $("#ecivil , #eEcivil , #mEcivil , #eDesc").html(respuesta);    
            selectTwo();
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });
}

function nuevo_registro_DP(){
    $("#lblTitular").text(nombreModulo_DP);
    $("#badgeInfo").text("Nuevo registro");

    $("#Listado-DP").hide();
    $("#guardar-DP").fadeIn();
    $('#frmGuardar-DP')[0].reset();
    $("#clave").focus();
    
}


function abrirModalFoto(id,clave,nombre,valorfoto) {

    $("#clavePersona").val(clave);
    $("#txtTitularFoto").text(nombre);

    if (valorfoto=="No") {
        $('#formVista').hide();
        $('#formSubida').fadeIn();
        $('#formSubida')[0].reset();
    }else{
        $('#formSubida').hide();
        $('#formVista').fadeIn();
        var archivo='../fotos/'+clave+".jpg";
        $("#imgFoto").attr("src",archivo);
    }
    
    $("#modalFoto").modal("show");

}



function  eliminarFoto(){

    var formData = new FormData();
    var clave=$('#clavePersona').val();
    formData.append('clave',clave);

    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas eliminar la foto?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-dark",
        confirmButtonText: "Si deseo eliminarla",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url: '../mDatosPersonales/fotoBorrar.php',
                type: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function(response) {
                  var res=parseInt(response);
                  switch(res){
                    case 0 :
                        alertify.error("<i class='fa fa-times fa-lg'></i> No se encuentra el archivo",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                      break;
                    case 1 :
                        alertify.warning("<i class='fa fa-check fa-lg'></i> Foto Eliminada",1);
                        $("#modalFoto").modal("hide");
                        llenar_lista_DP();
                        break;
                  }
        
                },
                error:function(xhr,status){
                    alertify.error('Error en proceso');
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

}

function subirFoto(){
    var formData = new FormData();

    var files = $('#image')[0].files[0];

    var clave=$('#clavePersona').val();
    var tam=$('#tamanoKB').val();

    formData.append('file',files);
    formData.append('clave',clave);
    formData.append('tam',tam);

    $.ajax({
        url: '../mDatosPersonales/fotoSubir.php',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
          var res=parseInt(response);
          switch(res){
            case 0 :
                alertify.success("<i class='fas fa-file-upload'></i>",1);
                $("#modalFoto").modal("hide");
                llenar_lista_DP();
              break;
            case 1 :

                swal({
                    title: "Error!",
                    text: "No ha sido posible cargar el archivo debido a que este debe de tener extención jpg y no debe de sobrepasar los 3 megabytes",
                    type: "error",
                    confirmButtonClass: "btn-dark",
                    confirmButtonText: "Enterado"
                }, function (isConfirm) {
                    alertify.message("Gracias !");
                });
              break;
            default:
                  alertify.error("<i class='fa fa-times fa-lg'></i>",1);
          }

        },
        error:function(xhr,status){
            alertify.error('Error en proceso');
        },
    });
// return false;
}
function abrirModalHorario(id,nombre,valorHorario,turno,luEntrada,luSalida,maEntrada,maSalida,miEntrada,miSalida,juEntrada,juSalida,viEntrada,viSalida,saEntrada,saSalida,doEntrada,doSalida) {
    limpiarmodalhorario();
    if (valorHorario=="No") {
        $("#modalHorario").modal("show");
        $("#Idh").val(id);
        $("#txtTitularHorario").text(nombre);
    }else{
        $("#modalActualizarHorario").modal("show");
        $("#txtTitularHorario2").text(nombre);
        desabilitar();
        $("#idpers").val(id);
        $("#actualizarTurno").val(turno);
        $("#actualizarluEntrada").val(luEntrada);       
        $("#actualizarluSalida").val(luSalida);
        $("#actualizarmaEntrada").val(maEntrada);        
        $("#actualizarmaSalida").val(maSalida);
        $("#actualizarmiEntrada").val(miEntrada);   
        $("#actualizarmiSalida").val(miSalida);
        $("#actualizarjuEntrada").val(juEntrada);      
        $("#actualizarjuSalida").val(juSalida);
        $("#actualizarviEntrada").val(viEntrada);     
        $("#actualizarviSalida").val(viSalida);
        $("#actualizarsaEntrada").val(saEntrada);      
        $("#actualizarsaSalida").val(saSalida);
        $("#actualizardoEntrada").val(doEntrada);    
        $("#actualizardoSalida").val(doSalida);

    }
}

$("#modalHorario").submit(function(e){
    var id    = $("#Idh").val();
    var Turno   = $("#Turno").val();
    var luEntrada   = $("#luEntrada").val();       
    var luSalida = $("#luSalida").val();
    var maEntrada  = $("#maEntrada").val();        
    var maSalida = $("#maSalida").val();
    var miEntrada = $("#miEntrada").val();   
    var miSalida = $("#miSalida").val();
    var juEntrada = $("#juEntrada").val();      
    var juSalida = $("#juSalida").val();
    var viEntrada = $("#viEntrada").val();     
    var viSalida = $("#viSalida").val();
    var saEntrada = $("#saEntrada").val();      
    var saSalida = $("#saSalida").val();
    var doEntrada = $("#doEntrada").val();    
    var doSalida = $("#doSalida").val();
    
    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Guardar El Horario?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo guardarlo",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/guardarHorario.php",
                type:"POST",
                dateType:"html",
                data:{id,
                     Turno,
                     luEntrada,luSalida,maEntrada,maSalida,miEntrada,miSalida,juEntrada,juSalida,viEntrada,viSalida,saEntrada,saSalida,doEntrada,doSalida},
                success:function(respuesta ){
                    selectTwo();
                    llenar_lista_DP();
                    $("#modalHorario .close").click();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se ha Insertado un Nuevo Registro en la Tabla " +nombrePersona;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});
$("#modalActualizarHorario").submit(function(e){
    var id    = $("#idpers").val();
    var actualizarTurno   = $("#actualizarTurno").val();
    var actualizarluEntrada   = $("#actualizarluEntrada").val();       
    var actualizarluSalida = $("#actualizarluSalida").val();
    var actualizarmaEntrada  = $("#actualizarmaEntrada").val();        
    var actualizarmaSalida = $("#actualizarmaSalida").val();
    var actualizarmiEntrada = $("#actualizarmiEntrada").val();   
    var actualizarmiSalida = $("#actualizarmiSalida").val();
    var actualizarjuEntrada = $("#actualizarjuEntrada").val();      
    var actualizarjuSalida = $("#actualizarjuSalida").val();
    var actualizarviEntrada = $("#actualizarviEntrada").val();     
    var actualizarviSalida = $("#actualizarviSalida").val();
    var actualizarsaEntrada = $("#actualizarsaEntrada").val();      
    var actualizarsaSalida = $("#actualizarsaSalida").val();
    var actualizardoEntrada = $("#actualizardoEntrada").val();    
    var actualizardoSalida = $("#actualizardoSalida").val();
    
    swal({
        title: "¿Estas Seguro?",
        text: "¿Deseas Actualizar El Horario?",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: "btn-primary",
        confirmButtonText: "Si deseo actualizarlo",
        cancelButtonText: "Cancelar Acción",
        cancelButtonClass: "btn-outline-danger",
        closeOnConfirm: false,
        closeOnCancel: true,
        showLoaderOnConfirm: true
      }, function (isConfirm) {
        if (isConfirm) {
        setTimeout(function () {
            swal.close();
            $.ajax({
                url:"../mDatosPersonales/actualizarHorario.php",
                type:"POST",
                dateType:"html",
                data:{id,
                    Turno,
                    luEntrada,luSalida,maEntrada,maSalida,miEntrada,miSalida,juEntrada,juSalida,viEntrada,viSalida,saEntrada,saSalida,doEntrada,doSalida},
                success:function(respuesta){
                    selectTwo();
                    llenar_lista_DP();
                    $("#modalActualizarHorario .close").click();
                    alertify.success("<i class='fa fa-save fa-lg'></i>", 2);
                    $('#nombre').focus();
                    actividad  ="Se Insertado un Nuevo Registro a la Tabla "+ nombre;
                    var idUser=$("#inicioIdusuario").val();
                    log(actividad,idUser);
        
                },
                error:function(xhr,status){
                    alert("Error en metodo AJAX"); 
                },
            });
        }, 2000);}
        else{
            alertify.error(" <i class='fa fa-times fa-lg'></i> Cancelado",2);
        }
      });

    e.preventDefault();
    return false;
});


function limpiarmodalhorario(params) {
    $("#Turno").val(""); 
    $("#luEntrada").val("");   
    $("#luSalida").val("");
    $("#maEntrada").val("");  
    $("#maSalida").val("");
    $("#miEntrada").val(""); 
    $("#miSalida").val("");
    $("#juEntrada").val("");   
    $("#juSalida").val("");
    $("#viEntrada").val("");  
    $("#viSalida").val("");
    $("#saEntrada").val(""); 
    $("#saSalida").val("");
    $("#doEntrada").val(""); 
    $("#doSalida").val("");
    $("#hTrabajadas").val("");
}

function limpiarmodalhorario2(params) {
    $('#luEntrada').val('').prop('disabled', false);
    $('#luSalida').val('').prop('disabled', false);
    $('#maEntrada').val('').prop('disabled', false);
    $('#maSalida').val('').prop('disabled', false);
    $('#miEntrada').val('').prop('disabled', false);
    $('#miSalida').val('').prop('disabled', false);
    $('#juEntrada').val('').prop('disabled', false);
    $('#juSalida').val('').prop('disabled', false);
    $('#viEntrada').val('').prop('disabled', false);
    $('#viSalida').val('').prop('disabled', false);
    $('#saEntrada').val('').prop('disabled', false);
    $('#saSalida').val('').prop('disabled', false);
    $('#doEntrada').val('').prop('disabled', false);
    $('#doSalida').val('').prop('disabled', false);
    $('#actualizarluEntrada').val('').prop('disabled', false);
    $('#actualizarluSalida').val('').prop('disabled', false);
    $('#actualizarmaEntrada').val('').prop('disabled', false);
    $('#actualizarmaSalida').val('').prop('disabled', false);
    $('#actualizarmiEntrada').val('').prop('disabled', false);
    $('#actualizarmiSalida').val('').prop('disabled', false);
    $('#actualizarjuEntrada').val('').prop('disabled', false);
    $('#actualizarjuSalida').val('').prop('disabled', false);
    $('#actualizarviEntrada').val('').prop('disabled', false);
    $('#actualizarviSalida').val('').prop('disabled', false);
    $('#actualizarsaEntrada').val('').prop('disabled', false);
    $('#actualizarsaSalida').val('').prop('disabled', false);
    $('#actualizardoEntrada').val('').prop('disabled', false);
    $('#actualizardoSalida').val('').prop('disabled', false);

}
///Para Agregar horario segun el combo de Turnos
var esp="";
var seis="06:00";
var doce="12:00";
var dieciocho="18:00";
var cero="23:59";

$("#Turno").change(function(){
    var turno = $('select[id=turno]').val();
    if (turno=="Especial") {
        limpiarmodalhorario2();
        limpiarmodalhorario2();
        
        $('#luEntrada').prop('disabled', false);
        $('#luSalida').prop('disabled', false);
        $('#maEntrada').prop('disabled', false);
        $('#maSalida').prop('disabled', false);
        $('#miEntrada').prop('disabled', false);
        $('#miSalida').prop('disabled', false);
        $('#juEntrada').prop('disabled', false);
        $('#juSalida').prop('disabled', false);
        $('#viEntrada').prop('disabled', false);
        $('#viSalida').prop('disabled', false);
        $('#saEntrada').prop('disabled', false);
        $('#saSalida').prop('disabled', false);
        $('#doEntradaDE').prop('disabled', false);
        $('#doSalida').prop('disabled', false);
        
    }
    if (turno == "Matutino") {
        desabilitar();
        $('#luEntrada').val(seis);
        $('#luSalida').val(doce);
        $('#maEntrada').val(seis);
        $('#maSalida').val(doce);
        $('#miEntrada').val(seis);
        $('#miSalida').val(doce);
        $('#juEntrada').val(seis);
        $('#juSalida').val(doce);
        $('#viEntrada').val(seis);
        $('#viSalida').val(doce);
        $('#saEntrada').val(seis);
        $('#saSalida').val(doce);
        $('#doEntrada').val(seis);
        $('#doSalida').val(doce);

    }
    if (turno == "Vespertino") {
        desabilitar();
        $('#luEntrada').val(doce);
        $('#luSalida').val(dieciocho);
        $('#maEntrada').val(doce);
        $('#maSalida').val(dieciocho);
        $('#miEntrada').val(doce);
        $('#miSalida').val(dieciocho);
        $('#juEntrada').val(doce);
        $('#juSalida').val(dieciocho);
        $('#viEntrada').val(doce);
        $('#viSalida').val(dieciocho);
        $('#saEntrada').val(doce);
        $('#saSalida').val(dieciocho);
        $('#doEntrada').val(doce);
        $('#doSalida').val(dieciocho);
    }
    if (turno == "Nocturno") {
        desabilitar();
        $('#luEntrada').val(dieciocho);
        $('#luSalida').val(cero);
        $('#maEntrada').val(dieciocho);
        $('#maSalida').val(cero);
        $('#miEntrada').val(dieciocho);
        $('#miSalida').val(cero);
        $('#juEntrada').val(dieciocho);
        $('#juSalida').val(cero);
        $('#viEntrada').val(dieciocho);
        $('#viSalida').val(cero);
        $('#saEntrada').val(dieciocho);
        $('#saSalida').val(cero);
        $('#doEntrada').val(dieciocho);
        $('#doSalida').val(cero);
    }
});
var esp1="";
var seis1="06:00";
var doce1="12:00";
var dieciocho1="18:00";
var cero1="23:59";
$("#actualizarturno").change(function(){
    var turno = $('select[id=actualizarTurno]').val();
    if (turno=="Especial") {
        limpiarmodalhorario2();
        
        $('#actualizarluEntrada').prop('disabled', false);
        $('#actualizarluSalida').prop('disabled', false);
        $('#actualizarmaEntrada').prop('disabled', false);
        $('#actualizarmaSalida').prop('disabled', false);
        $('#actualizarmiEntrada').prop('disabled', false);
        $('#actualizarmiSalida').prop('disabled', false);
        $('#actualizarjuEntrada').prop('disabled', false);
        $('#actualizarjuSalida').prop('disabled', false);
        $('#actualizarviEntrada').prop('disabled', false);
        $('#actualizarviSalida').prop('disabled', false);
        $('#actualizarsaEntrada').prop('disabled', false);
        $('#actualizarsaSalida').prop('disabled', false);
        $('#actualizardoEntrada').prop('disabled', false);
        $('#actualizardoSalida').prop('disabled', false);
        
    }
    if (turno == "Matutino") {
        desabilitar();
        $('#actualizarluEntrada').val(seis1);
        $('#actualizarluSalida').val(doce1);
        $('#actualizarmaEntrada').val(seis1);
        $('#actualizarmaSalida').val(doce1);
        $('#actualizarmiEntrada').val(seis1);
        $('#actualizarmiSalida').val(doce1);
        $('#actualizarjuEntrada').val(seis1);
        $('#actualizarjuSalida').val(doce1);
        $('#actualizarviEntrada').val(seis);
        $('#actualizarviSalida').val(doce1);
        $('#actualizarsaEntrada').val(seis1);
        $('#actualizarsaSalida').val(doce1);
        $('#actualizardoEntrada').val(seis1);
        $('#actualizardoSalida').val(doce);

    }
    if (turno == "Vespertino") {
        desabilitar();
        $('#actualizarluEntrada').val(doce1);
        $('#actualizarluSalida').val(dieciocho1);
        $('#actualizarmaEntrada').val(doce1);
        $('#actualizarmaSalida').val(dieciocho1);
        $('#actualizarmiEntrada').val(doce1);
        $('#actualizarmiSalida').val(dieciocho1);
        $('#actualizarjuEntrada').val(doce1);
        $('#actualizarjuSalida').val(dieciocho1);
        $('#actualizarviEntrada').val(doce1);
        $('#actualizarviSalida').val(dieciocho1);
        $('#actualizarsaEntrada').val(doce1);
        $('#actualizarsaSalida').val(dieciocho1);
        $('#actualizardoEntrada').val(doce1);
        $('#actualizardoSalida').val(dieciocho);
    }
    if (turno == "Nocturno") {
        desabilitar();
        $('#actualizarluEntrada').val(dieciocho1);
        $('#actualizarluSalida').val(cero1);
        $('#actualizarmaEntrada').val(dieciocho1);
        $('#actualizarmaSalida').val(cero1);
        $('#actualizarmiEntrada').val(dieciocho1);
        $('#actualizarmiSalida').val(cero1);
        $('#actualizarjuEntrada').val(dieciocho1);
        $('#actualizarjuSalida').val(cero1);
        $('#actualizarviEntrada').val(dieciocho1);
        $('#actualizarviSalida').val(cero1);
        $('#actualizarsaEntrada').val(dieciocho1);
        $('#actualizarsaSalida').val(cero1);
        $('#actualizardoEntrada').val(dieciocho1);
        $('#actualizardoSalida').val(cero1);
    }
});

function desabilitar() {
    $('#luEntrada').prop('disabled', true);
    $('#luSalida').prop('disabled', true);
    $('#maEntrada').prop('disabled', true);
    $('#maSalida').prop('disabled', true);
    $('#miEntrada').prop('disabled', true);
    $('#miSalida').prop('disabled', true);
    $('#juEntrada').prop('disabled', true);
    $('#juSalida').prop('disabled', true);
    $('#viEntrada').prop('disabled', true);
    $('#viSalida').prop('disabled', true);
    $('#saEntrada').prop('disabled', true);
    $('#saSalida').prop('disabled', true);
    $('#doEntrada').prop('disabled', true);
    $('#doSalida').prop('disabled', true);
    $('#actualizarluEntrada').prop('disabled', true);
    $('#actualizarluSalida').prop('disabled', true);
    $('#actualizarmaEntrada').prop('disabled', true);
    $('#actualizarmaSalida').prop('disabled', true);
    $('#actualizarmiEntrada').prop('disabled', true);
    $('#actualizarmiSalida').prop('disabled', true);
    $('#actualizarjuEntrada').prop('disabled', true);
    $('#actualizarjuSalida').prop('disabled', true);
    $('#actualizarviEntrada').prop('disabled', true);
    $('#actualizarviSalida').prop('disabled', true);
    $('#actualizarsaEntrada').prop('disabled', true);
    $('#actualizarsaSalida').prop('disabled', true);
    $('#actualizardoEntrada').prop('disabled', true);
    $('#actualizardoSalida').prop('disabled', true);
}

