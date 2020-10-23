/* eslint-disable no-eval */
export default function validateForm(values, validaciones) {
  const err = {};
  validaciones.map((validacion) => {
    let val =
      validacion.tipo === "a"
        ? "values." +
          validacion.elemento1 +
          "." +
          validacion.atributo1 +
          validacion.condicion +
          validacion.elemento2
        : validacion.tipo === "b"
        ? "values." +
          validacion.elemento1 +
          validacion.condicion +
          "values." +
          validacion.elemento2
        : validacion.tipo === "c"
        ? "values." +
          validacion.elemento1 +
          validacion.condicion +
          validacion.elemento2
        : "values." +
          validacion.elemento1 +
          "." +
          validacion.atributo1 +
          validacion.condicion +
          validacion.elemento2 +
          "." +
          validacion.atributo2;
    if (eval(val)) {
      err[validacion.elemento1] = validacion.respuesta;
    }
    return val;
  });
  return err;
}
