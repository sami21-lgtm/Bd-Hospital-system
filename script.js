/* CarePulse HMS Core Application Engine */

// Database Setup with Specific Credentials & Patient Phone Recovery
const DB = {
  users: [
    // Admin
    { id: "admin@hospital.com", alias: "admin", pass: "admin123", name: "System Administrator", role: "admin", roleTitle: "System Administrator", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
    
    // Doctor 1
    { id: "doctor@hospital.com", alias: "doctor1", pass: "doctor123", name: "Prof. Dr. Syed Shamsul Huda", role: "doctor", roleTitle: "Specialist Doctor (Cardiology)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },

    // Doctor 2 (Additional Doctor to test Doctor-wise Filtering)
    { id: "doctor2@hospital.com", alias: "doctor2", pass: "doctor123", name: "Dr. Farhana Yasmin", role: "doctor", roleTitle: "Specialist Doctor (Neurology)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },

    // Nurse
    { id: "nurse@hospital.com", alias: "nurse1", pass: "nurse123", name: "Sr. Sabina Yasmin", role: "nurse", roleTitle: "Ward Nurse Station", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80" },
    
    // Patient
    { id: "patient@hospital.com", alias: "patient1", pass: "patient123", name: "Tariqul Islam", phone: "01711223344", role: "patient", roleTitle: "Patient Portal Account", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    
    // Receptionist
    { id: "reception@hospital.com", alias: "reception", pass: "reception123", name: "Nusrat Jahan", role: "receptionist", roleTitle: "Front Desk Officer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
    
    // Pharmacist
    { id: "pharma@hospital.com", alias: "pharma", pass: "pharma123", name: "Mahmudur Rahman", role: "pharmacist", roleTitle: "Lead Pharmacist", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80" }
  ],

  doctors: [
    { id: "DOC-101", name: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", degrees: "MBBS, FCPS, FACC (USA)", fee: 1800, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-102", name: "Dr. Farhana Yasmin", dept: "Neurology", degrees: "MBBS, MD (Neurology)", fee: 1500, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-103", name: "Dr. Anisur Rahman", dept: "Orthopedics", degrees: "MBBS, MS (Ortho)", fee: 1500, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-104", name: "Dr. Nusrat Chowdury", dept: "Gynaecology", degrees: "MBBS, FCPS (OBGYN)", fee: 1600, photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" }
  ],

  patients: [
    { mrn: "BD-2026-9901", name: "Tariqul Islam", contact: "01711223344", age: 45, gender: "Male", history: "Hypertension, BP: 130/85, Temp: 98.6°F", allergies: "Penicillin" },
    { mrn: "BD-2026-9902", name: "Selina Begum", contact: "01819887766", age: 38, gender: "Female", history: "Asthma, BP: 120/80, Temp: 99.1°F", allergies: "Dust, Sulfa Drugs" },
    { mrn: "BD-2026-9903", name: "Abdur Rahim", contact: "01912345678", age: 62, gender: "Male", history: "IHD, Post-PCI, BP: 140/90, Temp: 98.4°F", allergies: "None" }
  ],

  appointments: [
    { id: "APT-801", patientName: "Tariqul Islam", doctorName: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", dateTime: "2026-08-29 10:30 AM", status: "Scheduled" },
    { id: "APT-802", patientName: "Selina Begum", doctorName: "Dr. Farhana Yasmin", dept: "Neurology", dateTime: "2026-08-29 11:15 AM", status: "Completed" },
    { id: "APT-803", patientName: "Abdur Rahim", doctorName: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", dateTime: "2026-08-29 12:00 PM", status: "Scheduled" }
  ],

  prescriptions: [
    { rxId: "RX-501", patientName: "Selina Begum", doctorName: "Dr. Farhana Yasmin", diagnosis: "Migraine with Aura", meds: "Tab. Napex 500mg (1+0+1)\nCap. Omeprazole 20mg (1+0+0) Before Meal" }
  ],

  labTests: [
    { id: "LAB-301", patientName: "Tariqul Islam", test: "Lipid Profile + HbA1c", date: "2026-08-29", status: "Pending" },
    { id: "LAB-302", patientName: "Abdur Rahim", test: "ECG & Echocardiogram", date: "2026-08-29", status: "Completed" }
  ],

  pharmacy: [
    { name: "Napa Extra 500mg", category: "Analgesic", stock: 450, price: 2.5, exp: "2028-05" },
    { name: "Seclo 20mg Capsule", category: "PPI", stock: 22, price: 7.0, exp: "2027-11" },
    { name: "Sergel 40mg Injection", category: "Injectable", stock: 12, price: 85.0, exp: "2027-02" },
    { name: "Azithrocin 500mg", category: "Antibiotic", stock: 120, price: 35.0, exp: "2028-01" }
  ],

  cabins: [
    { number: "Cabin 401 (VIP)", type: "Single Deluxe", status: "Occupied", patient: "Abdur Rahim", rate: 8000 },
    { number: "Cabin 402", type: "Single Standard", status: "Available", patient: "-", rate: 5000 },
    { number: "ICU Bed 03", type: "Critical Care", status: "Occupied", patient: "Emergency Ref", rate: 15000 },
    { number: "CCU Bed 01", type: "Cardiac Care", status: "Available", patient: "-", rate: 12000 }
  ],

  invoices: [
    { id: "INV-9001", mrn: "BD-2026-9902", patientName: "Selina Begum", service: "Neurology OPD Consultation", amount: 1500, status: "Paid" },
    { id: "INV-9002", mrn: "BD-2026-9903", patientName: "Abdur Rahim", service: "ECG & Echocardiogram Tests", amount: 3500, status: "Paid" }
  ],

  notifications: [
    { text: "System Boot: CarePulse HMS Engine running.", time: "08:00 AM" }
  ]
};

// Current Active User State
let currentUser = null;

// Initialize System on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  autoFillCredentials('admin');
  populateDropdowns();
});

// Auto-fill Credentials Helper in Login Modal
function autoFillCredentials(roleKey) {
  const user = DB.users.find(u => u.role === roleKey);
  if (user) {
    document.getElementById("loginUserId").value = user.id;
    document.getElementById("loginPassword").value = user.pass;
    document.getElementById("credentialHint").innerHTML = `ID: <b>${user.id}</b> | Pass: <b>${user.pass}</b>`;
  }
}

// User Authentication Handler
function handleUserLogin(event) {
  event.preventDefault();
  const inputId = document.getElementById("loginUserId").value.trim().toLowerCase();
  const inputPass = document.getElementById("loginPassword").value.trim();
  const errorMsg = document.getElementById("loginErrorMsg");

  // Validate ID/Email/Alias and Password
  const matchedUser = DB.users.find(u => 
    (u.id.toLowerCase() === inputId || u.alias.toLowerCase() === inputId) && u.pass === inputPass
  );

  if (matchedUser) {
    currentUser = matchedUser;
    errorMsg.style.display = "none";
    document.getElementById("loginModal").style.display = "none";
    
    // Update Header Profile
    document.getElementById("navUserAvatar").src = currentUser.avatar;
    document.getElementById("navUserName").textContent = currentUser.name;
    document.getElementById("navUserRole").textContent = currentUser.roleTitle;
    document.getElementById("activeRoleDisplay").textContent = currentUser.roleTitle;

    buildSidebarMenu();
    
    // Direct user to default role workstation panel
    const defaultView = getDefaultViewForRole(currentUser.role);
    switchView(defaultView);
    addNotification(`User ${currentUser.name} authenticated successfully as ${currentUser.roleTitle}.`);
  } else {
    errorMsg.style.display = "block";
  }
}

// Patient Password Recovery Handler (Name & Phone Match)
function handlePatientPasswordRecovery(e) {
  e.preventDefault();
  const nameInput = document.getElementById("recPatientName").value.trim().toLowerCase();
  const phoneInput = document.getElementById("recPatientPhone").value.trim().replace(/\D/g, "");
  const newPassInput = document.getElementById("recNewPassword").value.trim();
  const statusBox = document.getElementById("recoveryStatus");

  statusBox.style.display = "block";

  // Find matching patient by name and phone
  const matchedPatient = DB.patients.find(p => 
    p.name.toLowerCase() === nameInput && p.contact.replace(/\D/g, "") === phoneInput
  );

  if (matchedPatient) {
    // Find associated user account in DB
    let userAccount = DB.users.find(u => u.name.toLowerCase() === nameInput || u.role === 'patient');

    if (userAccount) {
      userAccount.pass = newPassInput; // Update password
      statusBox.className = "info-alert success";
      statusBox.innerHTML = `✅ পাসওয়ার্ড সফলভাবে পরিবর্তিত হয়েছে!<br>User ID/Email: <b>${userAccount.id}</b><br>নতুন পাসওয়ার্ড: <b>${newPassInput}</b>`;
      addNotification(`Password reset successfully for Patient: ${matchedPatient.name}.`);
      
      setTimeout(() => {
        closeModal("forgotPasswordModal");
        statusBox.style.display = "none";
      }, 3000);
    } else {
      statusBox.className = "info-alert error";
      statusBox.textContent = "❌ কোনো ম্যাচিং পেশেন্ট ইউজার অ্যাকাউন্ট পাওয়া যায়নি।";
    }
  } else {
    statusBox.className = "info-alert error";
    statusBox.textContent = "❌ নাম এবং মোবাইল নম্বর মিলছে না! সঠিক তথ্য দিন।";
  }
}

function handleUserLogout() {
  currentUser = null;
  document.getElementById("loginModal").style.display = "flex";
}

// Workspace Navigation Mapping per Role
function getDefaultViewForRole(role) {
  switch (role) {
    case 'doctor': return 'view-consultation';
    case 'patient': return 'view-appointments';
    case 'receptionist': return 'view-appointments';
    case 'nurse': return 'view-beds';
    case 'pharmacist': return 'view-pharmacy';
    default: return 'view-admin';
  }
}

function buildSidebarMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.innerHTML = "";

  const menuItems = [
    { id: "view-admin", label: "Operations Dashboard", icon: "fa-chart-line", roles: ["admin"] },
    { id: "view-appointments", label: "Appointments", icon: "fa-calendar-days", roles: ["admin", "receptionist", "doctor", "patient"] },
    { id: "view-patients", label: "Patient Records (EMR)", icon: "fa-address-card", roles: ["admin", "receptionist", "doctor", "nurse"] },
    { id: "view-doctors", label: "Specialist Directory", icon: "fa-user-doctor", roles: ["admin", "receptionist", "patient"] },
    { id: "view-consultation", label: "My Doctor Desk", icon: "fa-stethoscope", roles: ["admin", "doctor"] },
    { id: "view-prescriptions", label: "e-Prescriptions", icon: "fa-file-prescription", roles: ["admin", "doctor", "patient", "pharmacist"] },
    { id: "view-laboratory", label: "Lab Diagnostics", icon: "fa-microscope", roles: ["admin", "doctor"] },
    { id: "view-pharmacy", label: "Pharmacy Stock", icon: "fa-capsules", roles: ["admin", "pharmacist"] },
    { id: "view-beds", label: "Bed & Ward Status", icon: "fa-bed", roles: ["admin", "nurse", "receptionist"] },
    { id: "view-accounts", label: "Billing & Cashier", icon: "fa-file-invoice-dollar", roles: ["admin", "receptionist", "patient"] },
    { id: "view-notifications", label: "System Audit Logs", icon: "fa-bell", roles: ["admin", "doctor", "nurse", "receptionist", "pharmacist", "patient"] }
  ];

  menuItems.forEach(item => {
    if (item.roles.includes(currentUser.role)) {
      const li = document.createElement("li");
      li.className = "sidebar-item";
      li.id = `nav-item-${item.id}`;
      li.innerHTML = `<i class="fa-solid ${item.icon}"></i> <span>${item.label}</span>`;
      li.onclick = () => switchView(item.id);
      sideMenu.appendChild(li);
    }
  });
}

// Workspace Switcher
function switchView(viewId) {
  document.querySelectorAll(".view-panel").forEach(panel => panel.classList.remove("active"));
  document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));

  const targetPanel = document.getElementById(viewId);
  const targetNavItem = document.getElementById(`nav-item-${viewId}`);

  if (targetPanel) targetPanel.classList.add("active");
  if (targetNavItem) targetNavItem.classList.add("active");

  const titles = {
    'view-admin': 'Executive Operations Dashboard',
    'view-appointments': currentUser?.role === 'doctor' ? `Appointments for ${currentUser.name}` : 'OPD Appointment Scheduling Center',
    'view-patients': currentUser?.role === 'doctor' ? `Patients Assigned to ${currentUser.name}` : 'Patient Electronic Medical Records (EMR)',
    'view-doctors': 'Hospital Specialist Directory',
    'view-consultation': `Doctor Desk (${currentUser?.name || ''})`,
    'view-prescriptions': 'Issued e-Prescriptions Archive',
    'view-laboratory': 'Laboratory Diagnostic Management',
    'view-pharmacy': 'Pharmacy Inventory & Medicine Dispensing',
    'view-beds': 'Ward & Cabin Bed Management',
    'view-accounts': 'Billing & Cashier Ledger',
    'view-notifications': 'System Audit Logs'
  };
  document.getElementById("pageTitle").textContent = titles[viewId] || "CarePulse System";

  document.getElementById("contextBannerText").textContent = 
    `Active Session: ${currentUser.roleTitle} (${currentUser.name}) | CarePulse Enterprise Workspace`;

  closeSidebar();
  renderViewData(viewId);
}

// Data Renderer Router
function renderViewData(viewId) {
  switch (viewId) {
    case 'view-admin': renderAdminDashboard(); break;
    case 'view-appointments': renderAppointments(); break;
    case 'view-patients': renderPatients(); break;
    case 'view-doctors': renderDoctors(); break;
    case 'view-consultation': renderConsultationDesk(); break;
    case 'view-prescriptions': renderPrescriptions(); break;
    case 'view-laboratory': renderLaboratory(); break;
    case 'view-pharmacy': renderPharmacy(); break;
    case 'view-beds': renderBeds(); break;
    case 'view-accounts': renderAccounts(); break;
    case 'view-notifications': renderNotifications(); break;
  }
}

// Admin Dashboard Render
function renderAdminDashboard() {
  document.getElementById("statPatients").textContent = DB.patients.length;
  document.getElementById("statDoctors").textContent = DB.doctors.length;
  
  const occupiedBeds = DB.cabins.filter(c => c.status === "Occupied").length;
  document.getElementById("statBeds").textContent = `${occupiedBeds} / ${DB.cabins.length}`;

  const totalRev = DB.invoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
  document.getElementById("statRevenue").textContent = `৳ ${totalRev.toLocaleString()}`;

  const tbody = document.getElementById("adminQuickQueueTable");
  tbody.innerHTML = "";
  DB.appointments.forEach(app => {
    tbody.innerHTML += `
      <tr>
        <td><b>${app.id}</b></td>
        <td>${app.patientName}</td>
        <td>${app.doctorName}</td>
        <td>${app.dept}</td>
        <td><span class="badge-status status-${app.status.toLowerCase()}">${app.status}</span></td>
        <td><button class="btn btn-outline btn-sm" onclick="switchView('view-appointments')">Manage</button></td>
      </tr>
    `;
  });
}

// Appointments List Render (Filtered specifically if DOCTOR is logged in)
function renderAppointments() {
  const tbody = document.getElementById("appointmentTableBody");
  const heading = document.getElementById("appointmentTableHeading");
  tbody.innerHTML = "";

  let apptList = DB.appointments;

  // DOCTOR FILTER: Shows ONLY appointments belonging to the logged-in doctor
  if (currentUser.role === 'doctor') {
    apptList = DB.appointments.filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
    heading.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Appointments Assigned to ${currentUser.name}`;
  } else {
    heading.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Appointment Scheduling Center`;
  }

  if (apptList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No appointments found for ${currentUser.name}.</td></tr>`;
    return;
  }

  apptList.forEach(app => {
    tbody.innerHTML += `
      <tr>
        <td><b>${app.id}</b></td>
        <td>${app.patientName}</td>
        <td>${app.doctorName}</td>
        <td>${app.dateTime}</td>
        <td><span class="badge-status status-${app.status.toLowerCase()}">${app.status}</span></td>
        <td>
          ${app.status === 'Scheduled' ? `<button class="btn btn-primary btn-sm" onclick="completeAppointment('${app.id}')">Complete</button>` : '<i class="fa-solid fa-check text-success"></i> Done'}
        </td>
      </tr>
    `;
  });
}

function completeAppointment(id) {
  const app = DB.appointments.find(a => a.id === id);
  if (app) {
    app.status = "Completed";
    addNotification(`Appointment ${id} completed.`);
    renderAppointments();
  }
}

// Patient Directory Render (Filtered if Doctor is logged in)
function renderPatients() {
  const tbody = document.getElementById("patientTableBody");
  const heading = document.getElementById("patientTableHeading");
  tbody.innerHTML = "";

  let patientList = DB.patients;

  // DOCTOR FILTER: Shows ONLY patients who have appointments with this doctor
  if (currentUser.role === 'doctor') {
    const assignedPatientNames = DB.appointments
      .filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()))
      .map(a => a.patientName);

    patientList = DB.patients.filter(p => assignedPatientNames.includes(p.name));
    heading.innerHTML = `<i class="fa-solid fa-address-card"></i> Patients Assigned to ${currentUser.name}`;
  } else {
    heading.innerHTML = `<i class="fa-solid fa-address-card"></i> Patient Electronic Medical Records (EMR)`;
  }

  if (patientList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No assigned patients found.</td></tr>`;
    return;
  }

  patientList.forEach(pat => {
    tbody.innerHTML += `
      <tr>
        <td><b>${pat.mrn}</b></td>
        <td>${pat.name}</td>
        <td>${pat.age} Yrs / ${pat.gender}</td>
        <td>${pat.contact}</td>
        <td>${pat.history}</td>
        <td><span class="text-danger">${pat.allergies}</span></td>
      </tr>
    `;
  });
}

function renderDoctors() {
  const deptTabs = document.getElementById("departmentTabs");
  const depts = ["All", ...new Set(DB.doctors.map(d => d.dept))];
  deptTabs.innerHTML = depts.map(dept => `<button class="tab-btn ${dept==='All'?'active':''}" onclick="filterDoctors('${dept}', this)">${dept}</button>`).join("");

  renderDoctorCards(DB.doctors);
}

function filterDoctors(dept, btnElement) {
  document.querySelectorAll(".filter-tabs .tab-btn").forEach(b => b.classList.remove("active"));
  btnElement.classList.add("active");

  if (dept === "All") {
    renderDoctorCards(DB.doctors);
  } else {
    renderDoctorCards(DB.doctors.filter(d => d.dept === dept));
  }
}

function renderDoctorCards(list) {
  const grid = document.getElementById("doctorsGrid");
  grid.innerHTML = list.map(doc => `
    <div class="doctor-card">
      <img src="${doc.photo}" alt="${doc.name}">
      <h4>${doc.name}</h4>
      <p><b>${doc.dept}</b><br><small>${doc.degrees}</small></p>
      <div class="badge-status status-available">Fee: ৳${doc.fee}</div>
    </div>
  `).join("");
}

// Doctor Desk Workstation Render (Doctor Specific Patient Select)
function renderConsultationDesk() {
  const select = document.getElementById("consultPatientSelect");
  document.getElementById("doctorDeskTitle").innerHTML = `<i class="fa-solid fa-stethoscope"></i> OPD Patient Queue (${currentUser.name})`;
  select.innerHTML = `<option value="">-- Select Patient from Queue --</option>`;

  let doctorAppts = DB.appointments;

  // Filter queue specifically for the logged-in doctor
  if (currentUser.role === 'doctor') {
    doctorAppts = DB.appointments.filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
  }

  doctorAppts.forEach(app => {
    select.innerHTML += `<option value="${app.patientName}">${app.patientName} (Appt: ${app.id})</option>`;
  });
}

function loadConsultationPatient(patientName) {
  const box = document.getElementById("consultPatientDetails");
  const patient = DB.patients.find(p => p.name === patientName);

  if (patient) {
    box.innerHTML = `
      <p><b>Patient Name:</b> ${patient.name} (${patient.mrn})</p>
      <p><b>Contact:</b> ${patient.contact}</p>
      <p><b>Age / Gender:</b> ${patient.age} Yrs / ${patient.gender}</p>
      <p><b>Vitals & History:</b> ${patient.history}</p>
      <p><b>Known Allergies:</b> <span style="color:var(--danger)">${patient.allergies}</span></p>
    `;
  } else {
    box.innerHTML = `<p>Select a patient to view EMR details.</p>`;
  }
}

function toggleDoctorAttendance() {
  const btn = document.getElementById("docCheckInBtn");
  if (btn.classList.contains("btn-outline")) {
    btn.className = "btn btn-primary btn-sm";
    btn.textContent = "On Duty (Active)";
    addNotification(`${currentUser.name} status: On Duty.`);
  } else {
    btn.className = "btn btn-outline btn-sm";
    btn.textContent = "Duty Check-In";
    addNotification(`${currentUser.name} status: Offline.`);
  }
}

function handleSavePrescription(e) {
  e.preventDefault();
  const patientName = document.getElementById("consultPatientSelect").value;
  if (!patientName) {
    alert("Please select an assigned patient from the queue first.");
    return;
  }

  const rx = {
    rxId: `RX-${Math.floor(100 + Math.random() * 900)}`,
    patientName: patientName,
    doctorName: currentUser.name,
    diagnosis: document.getElementById("rxDiagnosis").value,
    meds: document.getElementById("rxMedicines").value
  };

  DB.prescriptions.unshift(rx);
  addNotification(`Prescription ${rx.rxId} created for ${patientName} by ${currentUser.name}.`);
  alert("Prescription saved and sent to Pharmacy.");
  e.target.reset();
  switchView('view-prescriptions');
}

function renderPrescriptions() {
  const tbody = document.getElementById("prescriptionTableBody");
  tbody.innerHTML = "";

  let rxList = DB.prescriptions;

  // Filter prescriptions if DOCTOR is logged in
  if (currentUser.role === 'doctor') {
    rxList = DB.prescriptions.filter(r => r.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
  }

  rxList.forEach(rx => {
    tbody.innerHTML += `
      <tr>
        <td><b>${rx.rxId}</b></td>
        <td>${rx.patientName}</td>
        <td>${rx.doctorName}</td>
        <td>${rx.diagnosis}</td>
        <td><pre style="font-family:inherit; white-space:pre-wrap;">${rx.meds}</pre></td>
        <td><button class="btn btn-outline btn-sm" onclick="printRx('${rx.rxId}')"><i class="fa-solid fa-print"></i> Print</button></td>
      </tr>
    `;
  });
}

function printRx(rxId) {
  const rx = DB.prescriptions.find(r => r.rxId === rxId);
  if (!rx) return;

  const printable = document.getElementById("printableArea");
  printable.innerHTML = `
    <div class="doc-header">
      <div>
        <h2>CarePulse Specialized Hospital</h2>
        <p><small>126 Gulshan Avenue, Dhaka-1212 | Tel: +8802998877</small></p>
      </div>
      <div style="text-align:right;">
        <h3>e-PRESCRIPTION</h3>
        <p><b>Rx ID:</b> ${rx.rxId}</p>
      </div>
    </div>
    <p><b>Patient Name:</b> ${rx.patientName}</p>
    <p><b>Prescribed By:</b> ${rx.doctorName}</p>
    <p><b>Diagnosis:</b> ${rx.diagnosis}</p>
    <hr class="divider">
    <h4>Prescribed Medication:</h4>
    <p style="white-space:pre-wrap; margin-top:10px;">${rx.meds}</p>
  `;
  openModal("printDocumentModal");
}

function renderLaboratory() {
  const tbody = document.getElementById("labTableBody");
  tbody.innerHTML = "";
  DB.labTests.forEach(lab => {
    tbody.innerHTML += `
      <tr>
        <td><b>${lab.id}</b></td>
        <td>${lab.patientName}</td>
        <td>${lab.test}</td>
        <td>${lab.date}</td>
        <td><span class="badge-status status-${lab.status.toLowerCase()}">${lab.status}</span></td>
        <td>
          ${lab.status === 'Pending' ? `<button class="btn btn-primary btn-sm" onclick="completeLab('${lab.id}')">Update Result</button>` : '<i class="fa-solid fa-file-pdf"></i> Report Ready'}
        </td>
      </tr>
    `;
  });
}

function completeLab(id) {
  const item = DB.labTests.find(l => l.id === id);
  if (item) {
    item.status = "Completed";
    addNotification(`Lab Test Report ${id} updated.`);
    renderLaboratory();
  }
}

function renderPharmacy() {
  document.getElementById("statPharmacyItems").textContent = `${DB.pharmacy.length} Items`;
  const lowCount = DB.pharmacy.filter(p => p.stock < 30).length;
  document.getElementById("statPharmacyLow").textContent = `${lowCount} Items`;

  const tbody = document.getElementById("pharmacyTableBody");
  tbody.innerHTML = "";
  DB.pharmacy.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td><b>${item.name}</b></td>
        <td>${item.category}</td>
        <td><span style="color:${item.stock<30?'var(--danger)':'var(--text-main)'}; font-weight:bold;">${item.stock}</span></td>
        <td>৳ ${item.price.toFixed(2)}</td>
        <td>${item.exp}</td>
        <td><button class="btn btn-outline btn-sm" onclick="restockMedicine('${item.name}')">Restock +50</button></td>
      </tr>
    `;
  });
}

function restockMedicine(name) {
  const item = DB.pharmacy.find(p => p.name === name);
  if (item) {
    item.stock += 50;
    addNotification(`Restocked 50 units for ${name}.`);
    renderPharmacy();
  }
}

function renderBeds() {
  const grid = document.getElementById("cabinGrid");
  grid.innerHTML = DB.cabins.map(cabin => `
    <div class="cabin-card">
      <h3>${cabin.number}</h3>
      <p>${cabin.type} | ৳${cabin.rate}/day</p>
      <p><b>Patient:</b> ${cabin.patient}</p>
      <div class="badge-status status-${cabin.status.toLowerCase()} mb-20">${cabin.status}</div>
      <div>
        <button class="btn btn-outline btn-sm" onclick="toggleCabinStatus('${cabin.number}')">
          ${cabin.status === 'Occupied' ? 'Discharge Patient' : 'Allocate Bed'}
        </button>
      </div>
    </div>
  `).join("");
}

function toggleCabinStatus(number) {
  const cabin = DB.cabins.find(c => c.number === number);
  if (cabin) {
    if (cabin.status === 'Occupied') {
      cabin.status = 'Available';
      cabin.patient = '-';
    } else {
      cabin.status = 'Occupied';
      cabin.patient = 'Newly Admitted Patient';
    }
    addNotification(`Bed status updated for ${number}.`);
    renderBeds();
  }
}

function renderAccounts() {
  const tbody = document.getElementById("accountsTableBody");
  tbody.innerHTML = "";
  DB.invoices.forEach(inv => {
    tbody.innerHTML += `
      <tr>
        <td><b>${inv.id}</b></td>
        <td>${inv.mrn}</td>
        <td>${inv.patientName}</td>
        <td>${inv.service}</td>
        <td>৳ ${Number(inv.amount).toLocaleString()}</td>
        <td><span class="badge-status status-paid">${inv.status}</span></td>
        <td><button class="btn btn-outline btn-sm" onclick="printInvoice('${inv.id}')"><i class="fa-solid fa-print"></i> Receipt</button></td>
      </tr>
    `;
  });
}

function printInvoice(invId) {
  const inv = DB.invoices.find(i => i.id === invId);
  if (!inv) return;

  const printable = document.getElementById("printableArea");
  printable.innerHTML = `
    <div class="doc-header">
      <div>
        <h2>CarePulse Specialized Hospital</h2>
        <p><small>126 Gulshan Avenue, Dhaka-1212 | Billing Dept</small></p>
      </div>
      <div style="text-align:right;">
        <h3>MONEY RECEIPT</h3>
        <p><b>Invoice No:</b> ${inv.id}</p>
      </div>
    </div>
    <p><b>Patient MRN:</b> ${inv.mrn}</p>
    <p><b>Patient Name:</b> ${inv.patientName}</p>
    <p><b>Service Provided:</b> ${inv.service}</p>
    <hr class="divider">
    <h3>Total Paid Amount: ৳ ${Number(inv.amount).toLocaleString()} BDT</h3>
    <p><small>Status: PAID (Official System Receipt)</small></p>
  `;
  openModal("printDocumentModal");
}

function renderNotifications() {
  const list = document.getElementById("notificationList");
  list.innerHTML = DB.notifications.map(n => `
    <li>
      <span>${n.text}</span>
      <small style="color:var(--text-muted)">${n.time}</small>
    </li>
  `).join("");
  document.getElementById("notifCount").textContent = DB.notifications.length;
}

function addNotification(text) {
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  DB.notifications.unshift({ text, time: timeStr });
  document.getElementById("notifCount").textContent = DB.notifications.length;
}

// Populate Modal Select Dropdowns
function populateDropdowns() {
  const docSelect = document.getElementById("appDoctorSelect");
  const docDeptSelect = document.getElementById("docDept");

  if (docSelect) {
    docSelect.innerHTML = DB.doctors.map(d => `<option value="${d.name}">${d.name} (${d.dept})</option>`).join("");
  }
  if (docDeptSelect) {
    const depts = ["Cardiology", "Neurology", "Orthopedics", "Gynaecology", "Pediatrics", "Gastroenterology"];
    docDeptSelect.innerHTML = depts.map(dept => `<option value="${dept}">${dept}</option>`).join("");
  }
}

// Modal Controllers
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

// Form Handlers
function handleAddDoctor(e) {
  e.preventDefault();
  const newDoc = {
    id: `DOC-${Math.floor(100 + Math.random() * 900)}`,
    name: document.getElementById("docName").value,
    dept: document.getElementById("docDept").value,
    degrees: document.getElementById("docDegrees").value,
    fee: Number(document.getElementById("docFee").value),
    photo: document.getElementById("docPhoto").value
  };

  DB.doctors.push(newDoc);
  addNotification(`Doctor ${newDoc.name} registered.`);
  closeModal("addDoctorModal");
  populateDropdowns();
  renderDoctors();
}

function handleAddPatient(e) {
  e.preventDefault();
  const name = document.getElementById("patName").value;
  const contact = document.getElementById("patContact").value;

  const newPat = {
    mrn: `BD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    name: name,
    contact: contact,
    age: document.getElementById("patAge").value,
    gender: document.getElementById("patGender").value,
    history: document.getElementById("patHistory").value || "N/A",
    allergies: document.getElementById("patAllergies").value || "None"
  };

  DB.patients.push(newPat);

  // Auto create Patient user credential for login
  DB.users.push({
    id: `${name.toLowerCase().replace(/\s+/g, '')}@hospital.com`,
    alias: name.toLowerCase().replace(/\s+/g, ''),
    pass: "123456",
    name: name,
    phone: contact,
    role: "patient",
    roleTitle: "Patient Portal Account",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  });

  addNotification(`Patient ${newPat.name} registered (MRN: ${newPat.mrn}).`);
  closeModal("addPatientModal");
  renderPatients();
}

function handleBookAppointment(e) {
  e.preventDefault();
  const app = {
    id: `APT-${Math.floor(100 + Math.random() * 900)}`,
    patientName: document.getElementById("appPatientName").value,
    doctorName: document.getElementById("appDoctorSelect").value,
    dept: "Specialist OPD",
    dateTime: document.getElementById("appDateTime").value.replace("T", " "),
    status: "Scheduled"
  };

  DB.appointments.unshift(app);
  addNotification(`Appointment ${app.id} booked for ${app.patientName}.`);
  closeModal("bookAppointmentModal");
  renderAppointments();
}

function handleGenerateBill(e) {
  e.preventDefault();
  const inv = {
    id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    mrn: document.getElementById("billMrn").value,
    patientName: document.getElementById("billName").value,
    service: document.getElementById("billService").value,
    amount: document.getElementById("billAmount").value,
    status: "Paid"
  };

  DB.invoices.unshift(inv);
  addNotification(`Invoice ${inv.id} generated for ${inv.patientName}.`);
  closeModal("generateBillModal");
  renderAccounts();
}

function triggerPrint() {
  window.print();
}

// Mobile Responsive Handlers
function toggleSidebar() {
  document.getElementById("sidebarNav").classList.toggle("active");
  document.getElementById("sidebarOverlay").classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebarNav").classList.remove("active");
  document.getElementById("sidebarOverlay").classList.remove("active");
}
