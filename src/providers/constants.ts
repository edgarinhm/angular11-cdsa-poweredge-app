export const Constants = {
    versioApp: '0.0.1',
    ionCalendarFormat: {
      weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
    },
    datosPorDefecto: {
      iconos: {
        enlacesMenu: 'fas fa-home'
      },
      colores:
        {
          enlacesMenuBackground: '#183040'
        }
    },    
    validationMessages: {
      campoRequired: [
        {type: 'required', message: 'El campo es obligatorio.'},
      ],
      email: [
        {type: 'required', message: 'El correo electrónico es obligatorio.'},
        {type: 'email', message: 'Por favor ingrese un correo electrónico válido.'}
      ]
    },
    localStorage: {
      primerInicio: 'primerInicio',
      Sesion: {
        expiracionClave: 'expiracionClave',
        sizePassword: 5,
        usuarioExpiro: 'usuarioExpiro',
        usuarioArea: 'usuarioArea',
        permisos: 'permisos',
        TAB: 'tab',
        MENU: 'menuLateral',
        PANEL: 'panel',
        deviceMobile: 1,
        empresa: 'empresa',
        lang: 'lang',
        parametros: 'parametros',
        paginaNume: 'paginaNume',
      },
      StorageFilled: 'StorageFilled',
      storageInicioSesion: 'storageInicioSesion',
      sincronizado: 'sincronizado',
      usuario: {
        usuarioNumero: 'usuarioNumero',
        usuarioNombre: 'usuarioNombre',
        usuarioLogin: 'usuarioLogin',
        usuarioRolNumero: 'usuarioRolNumero',
        usuarioCntaNumero: 'usuarioCntaNumero',
        usuarioLenguaje: 'usuarioLenguaje',
        usuarioEmail: 'usuarioEmail',
        usuarioTelefono: 'usuarioTelefono',
        usuarioMovil: 'usuarioMovil',
        usuarioRolNombre: 'usuarioRolNombre',
        usuarioImagen: 'usuarioImagen',
        usuarioExtension: 'usuarioExtension',
      },
      valoresAjax: {
        sortBy: 'sortBy',
        numberOfRows: 'numberOfRows',
        sortAscending: 'sortAscending',
        startIndex: 'startIndex',
        obje_refere: 'objetoNumero',
        id_objeto: 'id_objeto',
        cadena: 'cadena',
        operacion: 'operacion',
        obj_padre: 'obj_padre',
        matriz_parame: 'matriz_parame',
        ejecucion: 'ejecucion'
      },
      NUMREGISTROS: 'NUM_REGISTROS'
    },
    respuesta: {
      status: {
        success: 'success',
        error: 'error',
        nulo: 'nulo',
        ok: 'ok'
      },
      code: {
        ok: 'ok',
        dbError: 'dbError',
        dbNulo: 'dbNulo',
        userNotFound: 'userNotFound',
        userUnconfirm: 'userUnconfirm',
        userUnActived: 'userUnActived',
        userLock: 'userLock',
        userLockTime: 'userLockTime',
        passExpired: 'passExpired',
        blanckPage: 'blanckPage',
        actualizaOk: '1',
        actualizaNulo: '2',
        estadoInicialObservable: 'codeInit',
        error: 'Error'
      },
      message: {
        ok: 'La consulta genero datos satisfactoriamente',
        okLog: 'Usuario Logueado Correctamente',
        noLog: 'Error, Hay mas de un usuario que coincide con los datos ingresados',
        noTabs: 'El usuario no tiene módulos disponibles',
        UserNulo: 'Error, No hay usuarios que coincidan con los datos ingresados',
        UserNuloWeb: 'Error, No hay usuarios que coincidan con los datos ingresados en el servidor',
        userNotFound: 'Usuario o contraseña incorrectos',
        userUnconfirm: 'Usuario sin confirmación de la cuenta',
        userUnActived: 'Usuario inactivo por el administrador',
        userLock: {
          userLock1: 'Usuario bloqueado por ',
          userLock2: ' intento',
          userLock3: ' fallido',
          userLock4: ', comuníquese con el administrador o en ',
          userLock5: ' minutos se activará su acceso',
        },
        userLockTime: 'Bloqueado tiempo de no acceso',
        passExpired: 'La contraseña ha expirado',
        blanckPage: 'El usuario no tiene modulos asignados',
        updateOk: 'Se realizo la actualizacion satisfactoriamente',
        insertOk: 'Se realizo la insercción satisfactoriamente',
        insertError: 'No Se realizo la operacion satisfactoriamente',
        queryError: 'La consulta genero error',
        dataNotFound: 'La consulta no genero datos',
        postSuccess: 'Se ejecuto la peticion POST exitosamente',
        postError: 'No se ejecuto la peticion POST exitosamente',
        conecctionPreSyncError: 'Error de conexion antes de iniciar sincronizacion, verifica que realmente tengas datos de navegación',
        getSuccess: 'Se ejecuto la peticion GET exitosamente',
        getError: 'No se ejecuto la peticion GET exitosamente, verifica tu conexión a internet',
        actualizaNulo: 'La aplicacion actualizo registros del servidor',
        actualizaOk: 'La aplicacion actualizo registros locales y del servidor',
        resgistrosPendientes: 'Hay registros Pendientes por sincronizar',
        resgistrosPendientesNulo: 'No hay registros pendientes por sincronizar',
        error: 'Se produjo un error en la sincronización, por favor vuelva a intentarlo',
        errorSincroConexion: 'Se produjo un error en la sincronización, reinicie su conexion a internet y por favor vuelva a intentarlo'
      }
    }
  };