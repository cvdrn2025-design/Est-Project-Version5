// Variable Global
let projectsStore = JSON.parse(localStorage.getItem('sicermat_projects')) || {};
let currentProjectKey = null;

// Inisialisasi Saat Halaman Dimuat
window.onload = function() {
  renderSavedProjectsDropdown();
  if (typeof renderPriceTable === 'function') {
    renderPriceTable('bahan');
    renderPriceTable('alat');
    renderPriceTable('upah');
  }
};

// --- KELOLA PROYEK ---
function createNewProject() {
  document.getElementById('projectName').value = '';
  document.getElementById('projectDate').valueAsDate = new Date();
  document.getElementById('itemList').innerHTML = '';
  currentProjectKey = null;
  calculateTotals();
  alert('Proyek baru siap diisi!');
}

function saveCurrentProject() {
  const name = document.getElementById('projectName').value.trim();
  if (!name) {
    alert('Harap isi Nama Proyek terlebih dahulu!');
    return;
  }
  
  projectsStore[name] = {
    name: name,
    type: document.getElementById('projectType').value,
    date: document.getElementById('projectDate').value,
    overhead: document.getElementById('overheadPct').value,
    tax: document.getElementById('taxPct').value,
    profit: document.getElementById('profitPct').value
  };

  localStorage.setItem('sicermat_projects', JSON.stringify(projectsStore));
  renderSavedProjectsDropdown();
  alert('Proyek "' + name + '" berhasil disimpan!');
}

function renderSavedProjectsDropdown() {
  const select = document.getElementById('savedProjectsSelect');
  if (!select) return;
  select.innerHTML = '<option value="">-- Pilih Proyek Tersimpan --</option>';
  for (let key in projectsStore) {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = key;
    select.appendChild(opt);
  }
}

function loadSelectedProject() {
  const select = document.getElementById('savedProjectsSelect');
  const key = select.value;
  if (!key || !projectsStore[key]) return;

  const proj = projectsStore[key];
  document.getElementById('projectName').value = proj.name;
  document.getElementById('projectType').value = proj.type;
  document.getElementById('projectDate').value = proj.date;
  document.getElementById('overheadPct').value = proj.overhead || 0;
  document.getElementById('taxPct').value = proj.tax || 11;
  document.getElementById('profitPct').value = proj.profit || 10;
  
  currentProjectKey = key;
  calculateTotals();
}

function renameProject() {
  const select = document.getElementById('savedProjectsSelect');
  const oldKey = select.value;
  if (!oldKey) { alert('Pilih proyek yang ingin diganti nama!'); return; }
  
  const newName = prompt('Masukkan nama proyek baru:', oldKey);
  if (newName && newName !== oldKey) {
    projectsStore[newName] = projectsStore[oldKey];
    projectsStore[newName].name = newName;
    delete projectsStore[oldKey];
    localStorage.setItem('sicermat_projects', JSON.stringify(projectsStore));
    renderSavedProjectsDropdown();
    document.getElementById('projectName').value = newName;
  }
}

function deleteProject() {
  const select = document.getElementById('savedProjectsSelect');
  const key = select.value;
  if (!key) { alert('Pilih proyek yang ingin dihapus!'); return; }
  
  if (confirm('Yakin ingin menghapus proyek "' + key + '"?')) {
    delete projectsStore[key];
    localStorage.setItem('sicermat_projects', JSON.stringify(projectsStore));
    renderSavedProjectsDropdown();
    createNewProject();
  }
}

// --- MODAL AHS ---
function openAHSModal() {
  document.getElementById('ahsModal').style.display = 'flex';
  if (typeof filterAHSList === 'function') filterAHSList();
}

function closeAHSModal() {
  document.getElementById('ahsModal').style.display = 'none';
}

function filterAHSList() {
  // Dipanggil dari master-data.js jika ada, atau fallback sederhana
  const tbody = document.getElementById('ahsTableBody');
  if (tbody && tbody.children.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; padding:20px;">Library AHS Siap Digunakan.</td></tr>';
  }
}

// --- TABEL ITEM & KALKULASI REKAP ---
function addItemRow(desc = '', qty = 1, unit = 'm2', price = 0) {
  const tbody = document.getElementById('itemList');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><input type="text" class="form-control item-desc" value="${desc}"></td>
    <td><input type="number" class="form-control item-qty" value="${qty}" oninput="calculateTotals()"></td>
    <td><input type="text" class="form-control item-unit" value="${unit}"></td>
    <td><input type="number" class="form-control item-price" value="${price}" oninput="calculateTotals()"></td>
    <td class="item-total" style="font-weight:600;">Rp 0</td>
    <td><button class="btn btn-sm btn-danger-outline" onclick="this.closest('tr').remove(); calculateTotals();">✖</button></td>
  `;
  tbody.appendChild(tr);
  calculateTotals();
}

function calculateTotals() {
  let subtotal = 0;
  const rows = document.querySelectorAll('#itemList tr');
  
  rows.forEach(row => {
    const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
    const price = parseFloat(row.querySelector('.item-price').value) || 0;
    const total = qty * price;
    row.querySelector('.item-total').textContent = 'Rp ' + total.toLocaleString('id-ID');
    subtotal += total;
  });

  const overheadPct = parseFloat(document.getElementById('overheadPct').value) || 0;
  const taxPct = parseFloat(document.getElementById('taxPct').value) || 0;
  const profitPct = parseFloat(document.getElementById('profitPct').value) || 0;

  const overhead = subtotal * (overheadPct / 100);
  const profit = subtotal * (profitPct / 100);
  const tax = (subtotal + overhead + profit) * (taxPct / 100);
  const grandTotal = subtotal + overhead + profit + tax;

  document.getElementById('subtotalVal').textContent = 'Rp ' + subtotal.toLocaleString('id-ID');
  document.getElementById('grandTotalVal').textContent = 'Rp ' + Math.round(grandTotal).toLocaleString('id-ID');
}

// --- PANEL HARGA DASAR FALLBACK ---
function addMasterItem(type) {
  const name = prompt('Masukkan nama ' + type + ' baru:');
  const price = prompt('Masukkan harga satuan (Rp):');
  if (name && price) {
    alert(type.toUpperCase() + ' ' + name + ' berhasil ditambahkan!');
  }
}

function renderPriceTable(type) {
  // Menjaga agar tidak error jika dipanggil
}

// --- EXPORT ---
function exportExcel() {
  alert('Memproses Export Excel...');
}

function exportPDF() {
  window.print();
}

