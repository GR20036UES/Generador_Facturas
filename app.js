const DEFAULT_LOGO = "data:image/jpeg;base64,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";

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
      <td>
        <input class="item-description" type="text" placeholder="Producto o servicio"
               value="${escapeHtml(item.description)}"
               data-index="${index}" data-field="description">
      </td>
      <td>
        <input class="item-qty" type="number" min="0" step="1"
               value="${item.quantity}" data-index="${index}" data-field="quantity">
      </td>
      <td>
        <input class="item-price" type="number" min="0" step="0.01"
               value="${item.price}" data-index="${index}" data-field="price">
      </td>
      <td class="item-total">${money((Number(item.quantity)||0)*(Number(item.price)||0))}</td>
      <td><button class="delete-item" title="Eliminar" data-delete="${index}">×</button></td>
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
      renderItemsEditor();
      renderPreview();
      // Devolver el foco al campo modificado para que la edición sea fluida.
      const inputs = $("itemsBody").querySelectorAll("input");
      const same = [...inputs].find(el =>
        Number(el.dataset.index) === index && el.dataset.field === field
      );
      if (same) {
        same.focus();
        try { same.setSelectionRange(same.value.length, same.value.length); } catch(e) {}
      }
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
    doc.addImage(DEFAULT_LOGO, "JPEG", pageWidth - 78, 47, 38, 36);
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
