/**
 * Los conceptos son los registros principales de la estructura de datos.
 * Prácticamente toda la información de los datos principales se referencia desde este tipo de dato.
 * Tabla da datos asociada a los conceptos: con 
 * Versión: 0.0.1
*/
class Concepto {
    constructor (ide, cod, tip, fec, res, tex) {
        this.ide = ide;                 // Identificador del concepto. Se genera en la base de datos
        this.cod = cod;                 // Código del concepto. Máximo 256 caracteres.
        this.tip = tip;                 // Tipo de concepto
        this.fec = new Date();          // Fecha de creación del concepto
        this.res = res;                 // Resumen del concepto. Máximo 1024 caracteres.
        this.tex = tex;                 // Texto del concepto.
    }

    
    /**
     * Devolución de los datos del Concepto.
     */

    Identificador = function() {
        return this.ide;
    }

    Codigo = function () {
        return this.cod;
    }

    Tipo = function() {
        return this.tip;
    }

    FechaAlta = function() {
        return this.fec;
    }

    Resumen = function() {
        return this.res;
    }

    Descripcion = function() {
        return this.tex;
    }

    FechaCreacionUTC = function() {
        return fec.toUTCString();
    }
}

/**
 * Versiones:
 * 
 0.0.1 - 25/12/2020 **
    Se crea la clase y se incluyen los campos:
        ide;                 // Identificador del concepto. Se genera en la base de datos
        cod;                 // Código del concepto. Máximo 256 caracteres.
        tip;                 // Tipo de concepto
        new Date();          // Fecha de creación del concepto
        res;                 // Resumen del concepto. Máximo 1024 caracteres.
        tex;                 // Texto del concepto.
    Se crean las funciones
        Identificador
        Código
        Tipo
        FechaAlta
        Resumen
        Descripción
        FechaCreacionUTC
*/