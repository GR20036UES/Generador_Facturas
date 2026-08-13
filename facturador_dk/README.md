# Facturador D&K Santa Cruz

Web estática para crear facturas en PDF sin base de datos, usuarios ni almacenamiento.

## Uso
1. Abre `index.html` en un navegador.
2. Completa los datos de la factura.
3. Agrega/elimina tantos items como necesites.
4. El total se calcula automáticamente.
5. Pulsa **Generar PDF**.

## Dependencias
El PDF utiliza jsPDF y jsPDF-AutoTable desde CDN. Por eso el navegador necesita acceso a Internet al generar el PDF.

## Privacidad
No se utiliza localStorage, sessionStorage, cookies, base de datos ni servidor de aplicación. Los datos permanecen únicamente en memoria mientras la página está abierta.

## Personalización
- `styles.css`: apariencia de la aplicación y vista previa.
- `app.js`: cálculo, vista previa y generación del PDF.
- `logo-referencia.jpg`: logotipo extraído de la imagen proporcionada.
