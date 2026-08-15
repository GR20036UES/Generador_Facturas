const DEFAULT_LOGO = "logo-referencia.png"
const $ = (id) => document.getElementById(id);

let items = [
  { description: "", quantity: 1, price: 0 }
];

function money(value) {
  return Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getFormData() {
  return {
    invoiceNumber: $("invoiceNumber").value.trim(),
    date: $("invoiceDate").value,
    currency: $("currency").value,
    taxRate: Number($("taxRate").value || 0),
    businessName: $("businessName").value.trim(),
    businessPhone: $("businessPhone").value.trim(),
    businessAddress: $("businessAddress").value.trim(),
    businessCity: $("businessCity").value.trim(),
    clientName: $("clientName").value.trim(),
    clientCompany: $("clientCompany").value.trim(),
    clientAddress: $("clientAddress").value.trim(),
    clientCity: $("clientCity").value.trim(),
    clientPhone: $("clientPhone").value.trim(),
    clientEmail: $("clientEmail").value.trim(),
    footerMessage: $("footerMessage").value.trim(),
    invoiceNote: $("invoiceNote").value.trim()
  };
}

function formatDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function totalItems() {
  return items.reduce((sum, item) => {
    return sum + (Number(item.quantity) || 0) * (Number(item.price) || 0);
  }, 0);
}

function renderItemsEditor() {
  const body = $("itemsBody");
  body.innerHTML = "";

  items.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-label="Descripción">
        <input class="item-description" type="text" placeholder="Producto o servicio"
               value="${escapeHtml(item.description)}"
               data-index="${index}" data-field="description">
      </td>
      <td data-label="Cantidad">
        <input class="item-qty" type="number" min="0" step="1"
               value="${item.quantity}" data-index="${index}" data-field="quantity">
      </td>
      <td data-label="Precio unitario">
        <input class="item-price" type="number" min="0" step="0.01"
               value="${item.price}" data-index="${index}" data-field="price">
      </td>
      <td data-label="Total" class="item-total">${money((Number(item.quantity)||0)*(Number(item.price)||0))}</td>
      <td class="delete-cell"><button class="delete-item" title="Eliminar" data-delete="${index}">×</button></td>
    `;
    body.appendChild(tr);
  });

  body.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const field = event.target.dataset.field;
      items[index][field] = field === "description"
        ? event.target.value
        : Number(event.target.value || 0);

      // No reconstruir la tabla mientras se escribe.
      // Esto mantiene el mismo input y evita que el cursor salte al inicio.
      const row = event.target.closest("tr");
      const totalCell = row ? row.querySelector(".item-total") : null;
      if (totalCell) {
        const qty = Number(items[index].quantity) || 0;
        const price = Number(items[index].price) || 0;
        totalCell.textContent = money(qty * price);
      }

      renderPreview();
    });
  });

  body.querySelectorAll("[data-delete]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.delete);
      if (items.length === 1) {
        items[0] = { description: "", quantity: 1, price: 0 };
      } else {
        items.splice(index, 1);
      }
      renderItemsEditor();
      renderPreview();
    });
  });

  $("itemCount").textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
}

function escapeHtml(text) {
  return String(text ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPreview() {
  const data = getFormData();
  const subtotal = totalItems();
  const tax = subtotal * data.taxRate / 100;
  const grandTotal = subtotal + tax;

  const rows = items.map(item => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    return `
      <tr>
        <td>${escapeHtml(item.description || "—")}</td>
        <td>${qty}</td>
        <td>${data.currency} ${money(price)}</td>
        <td>${data.currency} ${money(qty * price)}</td>
      </tr>
    `;
  }).join("");

  const clientLines = [
    data.clientName,
    data.clientCompany ? `[${data.clientCompany}]` : "",
    data.clientAddress ? `[${data.clientAddress}]` : "",
    data.clientCity ? `[${data.clientCity}]` : "",
    data.clientPhone ? `[${data.clientPhone}]` : "",
    data.clientEmail ? `[${data.clientEmail}]` : ""
  ].filter(Boolean);

  $("invoicePreview").innerHTML = `
    <div class="invoice-top">
      <div>
        <div class="business-name">${escapeHtml(data.businessName || "Taller automotriz D&K Santa Cruz")}</div>
        <div class="business-lines">
          <div>${escapeHtml(data.businessAddress)}</div>
          <div>${escapeHtml(data.businessCity)}</div>
          <div>Teléfono: ${escapeHtml(data.businessPhone)}</div>
        </div>
      </div>
      <div>
        <div class="factura-title">FACTURA</div>
        <div class="invoice-meta">
          <div>N.º DE FACTURA</div>
          <div>FECHA</div>
          <div class="value">${escapeHtml(data.invoiceNumber)}</div>
          <div class="value">${formatDate(data.date)}</div>
        </div>
        <div class="logo-box">
          <img src="${DEFAULT_LOGO}" alt="Logo">
        </div>
      </div>
    </div>

    <div class="client-title">FACTURAR A</div>
    <div class="client-info">
      ${clientLines.map(line => `<div>${escapeHtml(line)}</div>`).join("") || "<div>Cliente</div>"}
    </div>

    <table class="invoice-table">
      <thead>
        <tr>
          <th>DESCRIPCIÓN</th>
          <th>CANT.</th>
          <th>PRECIO UNITARIO</th>
          <th>TOTAL NETO</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <div class="invoice-bottom">
      <div class="thanks">${escapeHtml(data.footerMessage || "Gracias por su confianza")}</div>
      <div class="total-box">
        <div class="label">TOTAL</div>
        <div class="amount">${data.currency} ${money(grandTotal)}</div>
      </div>
    </div>

    ${data.taxRate > 0 ? `<div class="note">Subtotal: ${data.currency} ${money(subtotal)} · IVA ${data.taxRate}%: ${data.currency} ${money(tax)}</div>` : ""}
    ${data.invoiceNote ? `<div class="note">${escapeHtml(data.invoiceNote)}</div>` : ""}
  `;
}

function addItem() {
  items.push({ description: "", quantity: 1, price: 0 });
  renderItemsEditor();
  renderPreview();

  const last = $("itemsBody").querySelector("tr:last-child input");
  if (last) last.focus();
}

function resetForm() {
  $("invoiceNumber").value = "2";
  $("invoiceDate").value = new Date().toISOString().slice(0, 10);
  $("currency").value = "$";
  $("taxRate").value = "0";
  $("businessName").value = "Taller automotriz D&K Santa Cruz";
  $("businessPhone").value = "+503 7415 0232";
  $("businessAddress").value = "[Calle]";
  $("businessCity").value = "San Miguel, El Salvador";
  $("clientName").value = "";
  $("clientCompany").value = "";
  $("clientAddress").value = "";
  $("clientCity").value = "";
  $("clientPhone").value = "";
  $("clientEmail").value = "";
  $("footerMessage").value = "Gracias por su confianza";
  $("invoiceNote").value = "";
  items = [{ description: "", quantity: 1, price: 0 }];
  renderItemsEditor();
  renderPreview();
}

function addPdfHeader(doc, data) {
  const blue = [47, 120, 183];
  const darkBlue = [36, 87, 127];
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setTextColor(...darkBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(data.businessName || "Taller automotriz D&K Santa Cruz", 18, 16);

  doc.setFontSize(9);
  doc.text(data.businessAddress || "", 18, 23);
  doc.text(data.businessCity || "", 18, 29);
  doc.text(`Teléfono: ${data.businessPhone || ""}`, 18, 35);

  doc.setTextColor(...blue);
  doc.setFontSize(25);
  doc.text("FACTURA", pageWidth - 18, 18, { align: "right" });

  doc.setFillColor(...blue);
  doc.rect(pageWidth - 90, 27, 72, 8, "F");
  doc.setTextColor(255,255,255);
  doc.setFontSize(7);
  doc.text("N.º DE FACTURA", pageWidth - 72, 32, { align: "center" });
  doc.text("FECHA", pageWidth - 30, 32, { align: "center" });

  doc.setTextColor(20,20,20);
  doc.setFontSize(8);
  doc.text(String(data.invoiceNumber || ""), pageWidth - 72, 40, { align: "center" });
  doc.text(formatDate(data.date), pageWidth - 30, 40, { align: "center" });

  // Logo embebido en el HTML; no se guarda en servidor.
  try {
    doc.addImage(DEFAULT_LOGO, "PNG", pageWidth - 78, 47, 38, 36);
  } catch (e) {}

  doc.setFillColor(...blue);
  doc.rect(18, 47, 76, 8, "F");
  doc.setTextColor(255,255,255);
  doc.setFontSize(8);
  doc.text("FACTURAR A", 23, 52.5);

  doc.setTextColor(35,35,35);
  doc.setFontSize(7.5);
  const client = [
    data.clientName,
    data.clientCompany ? `[${data.clientCompany}]` : "",
    data.clientAddress ? `[${data.clientAddress}]` : "",
    data.clientCity ? `[${data.clientCity}]` : "",
    data.clientPhone ? `[${data.clientPhone}]` : "",
    data.clientEmail ? `[${data.clientEmail}]` : ""
  ].filter(Boolean);

  let y = 60;
  client.forEach(line => {
    doc.text(line, 18, y);
    y += 4.2;
  });
}

function generatePdf() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("No se pudo cargar el generador PDF. Verifica tu conexión a Internet.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const data = getFormData();
  const currency = data.currency;
  const blue = [47, 120, 183];
  const darkBlue = [36, 87, 127];

  const body = items.map(item => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;
    return [
      item.description || "",
      String(qty),
      `${currency} ${money(price)}`,
      `${currency} ${money(qty * price)}`
    ];
  });

  const subtotal = totalItems();
  const tax = subtotal * data.taxRate / 100;
  const grandTotal = subtotal + tax;

  doc.setProperties({
    title: `Factura ${data.invoiceNumber || ""}`,
    subject: "Factura generada localmente",
    author: data.businessName || "Facturador"
  });

  addPdfHeader(doc, data);

  doc.autoTable({
    startY: 96,
    margin: { top: 96, left: 18, right: 18, bottom: 25 },
    head: [["DESCRIPCIÓN", "CANT.", "PRECIO UNITARIO", "TOTAL NETO"]],
    body,
    theme: "grid",
    styles: {
      font: "helvetica",
      fontSize: 7.2,
      cellPadding: 1.8,
      lineColor: [40,40,40],
      lineWidth: 0.15,
      textColor: [25,25,25]
    },
    headStyles: {
      fillColor: blue,
      textColor: [255,255,255],
      fontStyle: "bold",
      halign: "center"
    },
    columnStyles: {
      0: { cellWidth: 91, halign: "left" },
      1: { cellWidth: 13, halign: "center" },
      2: { cellWidth: 36, halign: "right" },
      3: { cellWidth: 36, halign: "right" }
    },
    didDrawPage: function() {
      addPdfHeader(doc, data);
    }
  });

  const finalY = Math.min((doc.lastAutoTable?.finalY || 96) + 3, 275);
  const pageWidth = doc.internal.pageSize.getWidth();

  // Si no cabe el pie, creamos una página nueva.
  if (finalY > 265) {
    doc.addPage();
    addPdfHeader(doc, data);
  }

  const yFooter = finalY > 265 ? 96 : finalY;
  const thanksWidth = 118;
  const totalX = 18 + thanksWidth;
  const totalWidth = 56;

  doc.setDrawColor(...blue);
  doc.setLineWidth(0.5);
  doc.line(18, yFooter, pageWidth - 18, yFooter);

  doc.setTextColor(...blue);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.text(data.footerMessage || "Gracias por su confianza", 77, yFooter + 5, { align: "center" });

  doc.setFillColor(189, 213, 233);
  doc.rect(totalX, yFooter, 28, 8, "F");
  doc.setTextColor(...darkBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("TOTAL", totalX + 5, yFooter + 5.5);

  doc.setFillColor(234, 241, 246);
  doc.rect(totalX + 28, yFooter, 28, 8, "F");
  doc.setTextColor(20,20,20);
  doc.text(`${currency} ${money(grandTotal)}`, pageWidth - 18, yFooter + 5.5, { align: "right" });

  if (data.taxRate > 0) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(90,90,90);
    doc.text(`Subtotal: ${currency} ${money(subtotal)} · IVA ${data.taxRate}%: ${currency} ${money(tax)}`, 18, yFooter + 14);
  }

  if (data.invoiceNote) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(80,80,80);
    doc.text(data.invoiceNote, 18, yFooter + (data.taxRate > 0 ? 18 : 14));
  }

  const filename = `factura-${data.invoiceNumber || "sin-numero"}.pdf`;
  doc.save(filename);
}

document.addEventListener("DOMContentLoaded", () => {
  $("invoiceDate").value = new Date().toISOString().slice(0, 10);

  document.querySelectorAll("input:not(.item-description):not(.item-qty):not(.item-price), select")
    .forEach(el => el.addEventListener("input", renderPreview));

  $("addItem").addEventListener("click", addItem);
  $("clearAll").addEventListener("click", resetForm);
  $("generatePdf").addEventListener("click", generatePdf);
  $("previewPdf").addEventListener("click", renderPreview);

  renderItemsEditor();
  renderPreview();
});
