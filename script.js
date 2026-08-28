// Central Hospital Management System Database
const HMS_DATA = {
    departments: ["All Departments", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Nephrology", "ICU & Critical Care"],
    
    doctors: [
        { id: "DOC-101", name: "Dr. Farhana Ahmed", dept: "Cardiology", degree: "MBBS, FCPS (Cardiology)", fee: 1500, status: "Available", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-102", name: "Dr. A. K. M. Shamsuddin", dept: "Neurology", degree: "MBBS, MD (Neurology)", fee: 1800, status: "In Consultation", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-103", name: "Dr. S. K. Roy", dept: "Orthopedics", degree: "MBBS, MS (Orthopedics)", fee: 1200, status: "Available", photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-104", name: "Dr. Nusrat Jahan", dept: "Pediatrics", degree: "MBBS, DCH (Pediatrics)", fee: 1000, status: "Available", photo: "https://images.unsplash.com/photo-1594824813566-78a933f00938?w=400&auto=format&fit=crop&q=80" }
    ],

    patients: [
        { mrn: "BD-2026-9901", name: "Rahim Chowdhury", age: 45, gender: "Male", contact: "+8801711223344", history: "Hypertension, Type-2 Diabetes", allergies: "Penicillin" },
        { mrn: "BD-2026-9902", name: "Nusrat Begum", age: 32, gender: "Female", contact: "+8801811556677", history: "Asthma", allergies: "Dust, Sulfa Drugs" }
    ],

    appointments: [
        { id: "APT-881", patientName: "Rahim Chowdhury", doctor: "Dr. Farhana Ahmed", dept: "Cardiology", date: "2026-08-29 10:30 AM", status: "Confirmed" },
        { id: "APT-882", patientName: "Nusrat Begum", doctor: "Dr. A. K. M. Shamsuddin", dept: "Neurology", date: "2026-08-29 11:15 AM", status: "Pending" }
    ],

    prescriptions: [
        { rxId: "RX-401", patientName: "Rahim Chowdhury", doctor: "Dr. Farhana Ahmed", diagnosis: "Essential Hypertension", medicines: "Tab Napa Extra 500mg (1+0+1) - 5 Days\nCap Seclo 20mg (1+0+1) - 14 Days" }
    ],

    labOrders: [
        { id: "LAB-7011", patientName: "Rahim Chowdhury", test: "Echocardiogram (ECG)", date: "2026-08-28", status: "Completed" },
        { id: "LAB-7012", patientName: "Nusrat Begum", test: "Complete Blood Count (CBC)", date: "2026-08-29", status: "Sample Collected" }
    ],

    pharmacyStock: [
        { name: "Napa Extra 500mg", category: "Analgesic", stock: 1500, price: 2.5, expiry: "2028-12" },
        { name: "Seclo 20mg", category: "Gastric", stock: 20, price: 7.0, expiry: "2027-06" },
        { name: "Sergel 20mg", category: "Gastric", stock: 850, price: 8.0, expiry: "2028-01" }
    ],

    cabins: [
        { code: "VIP-Suite 501", type: "VIP Suite", price: "৳ 8,000 / day", status: "Occupied", patient: "Kabir Hossain" },
        { code: "Deluxe-Cabin 502", type: "Deluxe Cabin", price: "৳ 5,000 / day", status: "Vacant", patient: "None" },
        { code: "ICU-Bed 101", type: "ICU Care Bed", price: "৳ 12,000 / day", status: "Occupied", patient: "Nusrat Begum" },
        { code: "Deluxe-Cabin 503", type: "Deluxe Cabin", price: "৳ 5,000 / day", status: "Vacant", patient: "None" }
    ],

    invoices: [
        { id: "INV-2026-881", mrn: "BD-2026-9901", name: "Rahim Chowdhury", service: "Cardiology OPD & ECG Test", amount: 2500, status: "Paid" },
        { id: "INV-2026-882", mrn: "BD-2026-9901", name: "Rahim Chowdhury", service: "Deluxe Cabin 2 Days Stay", amount: 10000, status: "Paid" }
    ],

    notifications: [
        { text: "Appointment APT-881 confirmed for Rahim Chowdhury.", time: "10 mins ago" },
        { text: "Lab Report LAB-7011 ready for download.", time: "25 mins ago" }
    ]
};

// Stakeholder User Accounts & Credentials
const USER_CREDENTIALS = {
    admin: { id: "admin", pass: "1234" },
    doctor: { id: "doctor", pass: "1234" },
    patient: { id: "patient", pass: "1234" },
    receptionist: { id: "receptionist", pass: "1234" },
    nurse: { id: "nurse", pass: "1234" },
    labtech: { id: "labtech", pass: "1234" },
    pharmacist: { id: "pharmacist", pass: "1234" }
};

// Stakeholder Dynamic Navigation Configurations (7 Roles Covered)
const ROLE_CONFIGS = {
    admin: {
        userName: "Md. Emtiaz Hossain", userRole: "System Administrator", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        viewId: "view-admin", banner: "Admin Control Center Active: Full System Configuration & Financial Ledger Privileges.",
        navMenu: [
            { id: "view-admin", label: "Dashboard", icon: "fa-sliders" },
            { id: "view-appointments", label: "Appointments", icon: "fa-calendar-check" },
            { id: "view-patients", label: "Patient Directory", icon: "fa-hospital-user" },
            { id: "view-doctors", label: "Specialists Directory", icon: "fa-user-doctor" },
            { id: "view-beds", label: "Cabin & Wards", icon: "fa-bed" },
            { id: "view-accounts", label: "Accounts & Billing", icon: "fa-wallet" }
        ]
    },
    doctor: {
        userName: "Dr. Farhana Ahmed", userRole: "Senior Cardiologist", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80",
        viewId: "view-consultation", banner: "Doctor Console Active: OPD Patient Queue & e-Prescription Workspace.",
        navMenu: [
            { id: "view-consultation", label: "OPD Consultation", icon: "fa-user-md" },
            { id: "view-prescriptions", label: "Prescriptions", icon: "fa-prescription" },
            { id: "view-laboratory", label: "Lab Diagnostic Orders", icon: "fa-microscope" }
        ]
    },
    patient: {
        userName: "Rahim Chowdhury", userRole: "Patient Self-Service", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        viewId: "view-appointments", banner: "Patient Portal Active: Book Appointments, View Medical Records & Invoices.",
        navMenu: [
            { id: "view-appointments", label: "My Appointments", icon: "fa-calendar-check" },
            { id: "view-doctors", label: "Find Doctors", icon: "fa-user-doctor" },
            { id: "view-prescriptions", label: "My Prescriptions", icon: "fa-prescription" },
            { id: "view-accounts", label: "My Billing History", icon: "fa-receipt" }
        ]
    },
    receptionist: {
        userName: "Tanvir Hossain", userRole: "Front Desk Officer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        viewId: "view-appointments", banner: "Reception Console: Patient Booking Queue & Registration.",
        navMenu: [
            { id: "view-appointments", label: "Appointment Desk", icon: "fa-calendar-check" },
            { id: "view-patients", label: "Patient Registration", icon: "fa-id-card" },
            { id: "view-beds", label: "Cabin Allocation", icon: "fa-bed" }
        ]
    },
    nurse: {
        userName: "Salma Khatun", userRole: "ICU Charge Nurse", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80",
        viewId: "view-beds", banner: "Nursing Duty Console: Inpatient Ward Vitals & Bed Allocation.",
        navMenu: [
            { id: "view-beds", label: "Ward & Bed Matrix", icon: "fa-bed-pulse" },
            { id: "view-patients", label: "Patient Records", icon: "fa-users" }
        ]
    },
    labtech: {
        userName: "Ayesha Siddiqua", userRole: "Senior Lab Technician", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
        viewId: "view-laboratory", banner: "Laboratory Console: Test Processing & Diagnostic Report Upload.",
        navMenu: [
            { id: "view-laboratory", label: "Lab Diagnostic Orders", icon: "fa-vials" }
        ]
    },
    pharmacist: {
        userName: "Kazi Nasim", userRole: "Pharmacy Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
        viewId: "view-pharmacy", banner: "Pharmacy Inventory: Stock Alerts & Prescription Dispensing.",
        navMenu: [
            { id: "view-pharmacy", label: "Medicine Stock", icon: "fa-pills" },
            { id: "view-prescriptions", label: "Rx Dispense Queue", icon: "fa-file-prescription" }
        ]
    }
};

let activeRole = "admin";
let selectedDeptFilter = "All Departments";

// Authentication Handlers
function autoFillCredentials(role) {
    const cred = USER_CREDENTIALS[role];
    if (cred) {
        document.getElementById("loginUserId").value = cred.id;
        document.getElementById("loginPassword").value = cred.pass;
        document.getElementById("credentialHint").innerHTML = `User ID: <b>${cred.id}</b> | Password: <b>${cred.pass}</b>`;
    }
}

function handleUserLogin(e) {
    e.preventDefault();
    const role = document.getElementById("loginRoleSelect").value;
    const uid = document.getElementById("loginUserId").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();
    const err = document.getElementById("loginErrorMsg");

    const cred = USER_CREDENTIALS[role];
    if (cred && cred.id === uid && cred.pass === pass) {
        err.style.display = "none";
        document.getElementById("loginModal").style.display = "none";
        switchStakeholderSession(role);
    } else {
        err.style.display = "block";
    }
}

function handleUserLogout() {
    document.getElementById("loginModal").style.display = "flex";
}

function switchStakeholderSession(roleKey) {
    activeRole = roleKey;
    const config = ROLE_CONFIGS[roleKey];
    if (!config) return;

    document.getElementById("navUserName").innerText = config.userName;
    document.getElementById("navUserRole").innerText = config.userRole;
    document.getElementById("navUserAvatar").src = config.avatar;
    document.getElementById("contextBannerText").innerText = config.banner;
    document.getElementById("activeRoleDisplay").innerText = `${config.userRole}`;

    const sideMenu = document.getElementById("sideMenu");
    sideMenu.innerHTML = "";
    config.navMenu.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = `sidebar-item ${index === 0 ? 'active' : ''}`;
        li.onclick = () => switchView(item.id, li);
        li.innerHTML = `<i class="fa-solid ${item.icon}"></i> <span>${item.label}</span>`;
        sideMenu.appendChild(li);
    });

    switchView(config.viewId);
}

function switchView(viewId, clickedEl = null) {
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    const target = document.getElementById(viewId);
    if (target) target.classList.add("active");

    if (clickedEl) {
        document.querySelectorAll(".sidebar-item").forEach(item => item.classList.remove("active"));
        clickedEl.classList.add("active");
    }
    closeSidebar();
}

// Module Renderers
function renderAllModules() {
    renderAdminStats();
    renderAppointments();
    renderPatients();
    renderDoctors();
    renderPrescriptions();
    renderLabOrders();
    renderPharmacy();
    renderCabins();
    renderAccounts();
    renderNotifications();
    populateSelectOptions();
}

function renderAdminStats() {
    document.getElementById("statPatients").innerText = HMS_DATA.patients.length;
    document.getElementById("statDoctors").innerText = HMS_DATA.doctors.length;
    const occBeds = HMS_DATA.cabins.filter(c => c.status === "Occupied").length;
    document.getElementById("statBeds").innerText = `${occBeds} / ${HMS_DATA.cabins.length}`;
    const totalRev = HMS_DATA.invoices.reduce((acc, i) => acc + i.amount, 0);
    document.getElementById("statRevenue").innerText = `৳ ${totalRev.toLocaleString()}`;

    const queueTable = document.getElementById("adminQuickQueueTable");
    queueTable.innerHTML = "";
    HMS_DATA.appointments.forEach((a, idx) => {
        queueTable.innerHTML += `
            <tr>
                <td><strong>#${a.id}</strong></td>
                <td>${a.patientName}</td>
                <td>${a.doctor}</td>
                <td>${a.dept}</td>
                <td><span class="badge-tag ${a.status === 'Confirmed' ? 'success' : 'warning'}">${a.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="toggleApptStatus(${idx})">Toggle</button></td>
            </tr>
        `;
    });
}

function renderAppointments() {
    const tbody = document.getElementById("appointmentTableBody");
    tbody.innerHTML = "";
    HMS_DATA.appointments.forEach((a, idx) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>#${a.id}</strong></td>
                <td>${a.patientName}</td>
                <td>${a.doctor}</td>
                <td>${a.date}</td>
                <td><span class="badge-tag ${a.status === 'Confirmed' ? 'success' : 'warning'}">${a.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="toggleApptStatus(${idx})">Change Status</button></td>
            </tr>
        `;
    });
}

function toggleApptStatus(idx) {
    HMS_DATA.appointments[idx].status = HMS_DATA.appointments[idx].status === "Confirmed" ? "Pending" : "Confirmed";
    renderAppointments();
    renderAdminStats();
}

function renderPatients() {
    const tbody = document.getElementById("patientTableBody");
    tbody.innerHTML = "";
    HMS_DATA.patients.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${p.mrn}</strong></td>
                <td>${p.name}</td>
                <td>${p.age} Yrs / ${p.gender}</td>
                <td>${p.contact}</td>
                <td>${p.history}</td>
                <td>${p.allergies}</td>
            </tr>
        `;
    });
}

function renderDoctors() {
    const tabsContainer = document.getElementById("departmentTabs");
    tabsContainer.innerHTML = "";
    HMS_DATA.departments.forEach(dept => {
        const btn = document.createElement("button");
        btn.className = `btn btn-sm ${dept === selectedDeptFilter ? 'btn-primary' : 'btn-outline'}`;
        btn.innerText = dept;
        btn.onclick = () => { selectedDeptFilter = dept; renderDoctors(); };
        tabsContainer.appendChild(btn);
    });

    const grid = document.getElementById("doctorsGrid");
    grid.innerHTML = "";
    const filtered = selectedDeptFilter === "All Departments" 
        ? HMS_DATA.doctors 
        : HMS_DATA.doctors.filter(d => d.dept === selectedDeptFilter);

    filtered.forEach(d => {
        grid.innerHTML += `
            <div class="profile-card">
                <img src="${d.photo}" alt="${d.name}">
                <div class="card-body">
                    <h4>${d.name}</h4>
                    <div class="sub">${d.dept} | ${d.degree}</div>
                    <p style="font-size:0.82rem; margin-bottom:10px;">Consultation Fee: <strong>৳ ${d.fee}</strong></p>
                    <span class="badge-tag ${d.status === 'Available' ? 'success' : 'warning'}">${d.status}</span>
                </div>
            </div>
        `;
    });
}

function renderPrescriptions() {
    const tbody = document.getElementById("prescriptionTableBody");
    tbody.innerHTML = "";
    HMS_DATA.prescriptions.forEach(r => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${r.rxId}</strong></td>
                <td>${r.patientName}</td>
                <td>${r.doctor}</td>
                <td>${r.diagnosis}</td>
                <td><pre style="font-family:inherit;">${r.medicines}</pre></td>
                <td><button class="btn btn-outline btn-sm" onclick="printPrescription('${r.rxId}')"><i class="fa-solid fa-print"></i> Print Rx</button></td>
            </tr>
        `;
    });
}

function renderLabOrders() {
    const tbody = document.getElementById("labTableBody");
    tbody.innerHTML = "";
    HMS_DATA.labOrders.forEach((l, idx) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${l.id}</strong></td>
                <td>${l.patientName}</td>
                <td>${l.test}</td>
                <td>${l.date}</td>
                <td><span class="badge-tag ${l.status === 'Completed' ? 'success' : 'warning'}">${l.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="completeLabOrder(${idx})">Upload Result</button></td>
            </tr>
        `;
    });
}

function completeLabOrder(idx) {
    HMS_DATA.labOrders[idx].status = "Completed";
    renderLabOrders();
    alert("Diagnostic Test Result Uploaded!");
}

function renderPharmacy() {
    const tbody = document.getElementById("pharmacyTableBody");
    tbody.innerHTML = "";
    let lowStock = 0;
    HMS_DATA.pharmacyStock.forEach(m => {
        if (m.stock < 50) lowStock++;
        tbody.innerHTML += `
            <tr>
                <td><strong>${m.name}</strong></td>
                <td>${m.category}</td>
                <td>${m.stock} Box</td>
                <td>৳ ${m.price}</td>
                <td>${m.expiry}</td>
                <td><button class="btn btn-outline btn-sm" onclick="alert('Dispensed ${m.name}')">Dispense</button></td>
            </tr>
        `;
    });
    document.getElementById("statPharmacyItems").innerText = `${HMS_DATA.pharmacyStock.length} Types`;
    document.getElementById("statPharmacyLow").innerText = `${lowStock} Items`;
}

function renderCabins() {
    const grid = document.getElementById("cabinGrid");
    grid.innerHTML = "";
    HMS_DATA.cabins.forEach((c, idx) => {
        grid.innerHTML += `
            <div class="cabin-card ${c.status === 'Occupied' ? 'occupied' : ''}">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>${c.code}</strong>
                    <span class="badge-tag ${c.status === 'Vacant' ? 'success' : 'danger'}">${c.status}</span>
                </div>
                <p style="font-size:0.85rem; font-weight:700; margin-top:6px;">${c.type}</p>
                <small style="color:var(--text-muted);">${c.price}</small>
                <div style="margin-top:12px;">
                    ${c.status === 'Vacant' 
                        ? `<button class="btn btn-primary btn-sm btn-block" onclick="toggleCabinStatus(${idx})">Assign Bed</button>` 
                        : `<button class="btn btn-outline btn-sm btn-block" onclick="toggleCabinStatus(${idx})">Discharge Patient</button>`}
                </div>
            </div>
        `;
    });
}

function toggleCabinStatus(idx) {
    HMS_DATA.cabins[idx].status = HMS_DATA.cabins[idx].status === "Vacant" ? "Occupied" : "Vacant";
    renderCabins();
    renderAdminStats();
}

function renderAccounts() {
    const tbody = document.getElementById("accountsTableBody");
    tbody.innerHTML = "";
    HMS_DATA.invoices.forEach(i => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${i.id}</strong></td>
                <td>${i.mrn}</td>
                <td>${i.name}</td>
                <td>${i.service}</td>
                <td>৳ ${i.amount.toLocaleString()}</td>
                <td><span class="badge-tag success">${i.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="printInvoice('${i.id}')"><i class="fa-solid fa-print"></i> Receipt</button></td>
            </tr>
        `;
    });
}

function renderNotifications() {
    const list = document.getElementById("notificationList");
    list.innerHTML = "";
    HMS_DATA.notifications.forEach(n => {
        list.innerHTML += `<li><i class="fa-solid fa-circle-info" style="color:var(--primary)"></i> ${n.text} <small>${n.time}</small></li>`;
    });
    document.getElementById("notifCount").innerText = HMS_DATA.notifications.length;
}

// Select Inputs Population
function populateSelectOptions() {
    const docSelect = document.getElementById("appDoctorSelect");
    const consultSelect = document.getElementById("consultPatientSelect");
    const deptSelect = document.getElementById("docDept");

    if (docSelect) {
        docSelect.innerHTML = "";
        HMS_DATA.doctors.forEach(d => docSelect.innerHTML += `<option value="${d.name}">${d.name} (${d.dept})</option>`);
    }
    if (consultSelect) {
        consultSelect.innerHTML = "<option value=''>-- Select Patient --</option>";
        HMS_DATA.patients.forEach(p => consultSelect.innerHTML += `<option value="${p.name}">${p.name} (${p.mrn})</option>`);
    }
    if (deptSelect) {
        deptSelect.innerHTML = "";
        HMS_DATA.departments.filter(d => d !== "All Departments").forEach(d => deptSelect.innerHTML += `<option value="${d}">${d}</option>`);
    }
}

function loadConsultationPatient(patientName) {
    const p = HMS_DATA.patients.find(x => x.name === patientName);
    const box = document.getElementById("consultPatientDetails");
    if (p) {
        box.innerHTML = `
            <p><strong>Patient:</strong> ${p.name} | <strong>MRN:</strong> ${p.mrn}</p>
            <p><strong>Vitals:</strong> BP 120/80 mmHg | Pulse 74 bpm</p>
            <p><strong>Medical History:</strong> ${p.history}</p>
            <p><strong>Allergies:</strong> <span style="color:var(--danger)">${p.allergies}</span></p>
        `;
    } else {
        box.innerHTML = `<p>Select a patient to view EMR details.</p>`;
    }
}

// Action Handlers
function handleSavePrescription(e) {
    e.preventDefault();
    const patientName = document.getElementById("consultPatientSelect").value;
    if (!patientName) { alert("Please select a patient first!"); return; }

    const newRx = {
        rxId: `RX-${HMS_DATA.prescriptions.length + 401}`,
        patientName: patientName,
        doctor: "Dr. Farhana Ahmed",
        diagnosis: document.getElementById("rxDiagnosis").value,
        medicines: document.getElementById("rxMedicines").value
    };
    HMS_DATA.prescriptions.push(newRx);
    renderPrescriptions();
    alert("Prescription Saved & Transmitted to Pharmacy Desk!");
}

function handleAddDoctor(e) {
    e.preventDefault();
    HMS_DATA.doctors.push({
        id: `DOC-${HMS_DATA.doctors.length + 101}`,
        name: document.getElementById("docName").value,
        dept: document.getElementById("docDept").value,
        degree: document.getElementById("docDegrees").value,
        fee: parseInt(document.getElementById("docFee").value),
        status: "Available",
        photo: document.getElementById("docPhoto").value
    });
    renderDoctors();
    renderAdminStats();
    closeModal('addDoctorModal');
}

function handleAddPatient(e) {
    e.preventDefault();
    HMS_DATA.patients.push({
        mrn: `BD-2026-${HMS_DATA.patients.length + 9901}`,
        name: document.getElementById("patName").value,
        age: document.getElementById("patAge").value,
        gender: document.getElementById("patGender").value,
        contact: document.getElementById("patContact").value,
        history: document.getElementById("patHistory").value || "None",
        allergies: document.getElementById("patAllergies").value || "None"
    });
    renderPatients();
    renderAdminStats();
    populateSelectOptions();
    closeModal('addPatientModal');
}

function handleBookAppointment(e) {
    e.preventDefault();
    HMS_DATA.appointments.push({
        id: `APT-${HMS_DATA.appointments.length + 881}`,
        patientName: document.getElementById("appPatientName").value,
        doctor: document.getElementById("appDoctorSelect").value,
        dept: "OPD Consultation",
        date: document.getElementById("appDateTime").value,
        status: "Confirmed"
    });
    renderAppointments();
    renderAdminStats();
    closeModal('bookAppointmentModal');
}

function handleGenerateBill(e) {
    e.preventDefault();
    HMS_DATA.invoices.push({
        id: `INV-2026-${HMS_DATA.invoices.length + 881}`,
        mrn: document.getElementById("billMrn").value,
        name: document.getElementById("billName").value,
        service: document.getElementById("billService").value,
        amount: parseInt(document.getElementById("billAmount").value),
        status: "Paid"
    });
    renderAccounts();
    renderAdminStats();
    closeModal('generateBillModal');
}

function toggleDoctorAttendance() {
    const btn = document.getElementById("docCheckInBtn");
    if (btn.innerText.includes("Check-In")) {
        btn.innerText = "Checked In";
        btn.className = "btn btn-primary btn-sm";
    } else {
        btn.innerText = "Duty Check-In";
        btn.className = "btn btn-outline btn-sm";
    }
}

// Document Printing System
function printInvoice(invId) {
    const inv = HMS_DATA.invoices.find(i => i.id === invId);
    if (!inv) return;
    document.getElementById("printableArea").innerHTML = `
        <div style="text-align:center; margin-bottom:15px;">
            <h2>CAREPULSE SPECIALIZED HOSPITAL</h2>
            <p style="font-size:0.8rem;">Dhaka Central Medical Tower, Dhaka, Bangladesh</p>
            <p style="font-size:0.8rem;">Emergency: +880 9611 000 999</p>
            <hr style="margin:10px 0;">
            <h3>OFFICIAL MONEY RECEIPT</h3>
        </div>
        <p><strong>Invoice No:</strong> ${inv.id} | <strong>Date:</strong> 29 Aug 2026</p>
        <p><strong>Patient Name:</strong> ${inv.name}</p>
        <p><strong>MRN:</strong> ${inv.mrn}</p>
        <br>
        <table style="width:100%; border-collapse:collapse;">
            <tr style="background:#f1f5f9;">
                <th style="border:1px solid #ccc; padding:8px;">Description</th>
                <th style="border:1px solid #ccc; padding:8px;">Amount (BDT)</th>
            </tr>
            <tr>
                <td style="border:1px solid #ccc; padding:8px;">${inv.service}</td>
                <td style="border:1px solid #ccc; padding:8px;">৳ ${inv.amount.toLocaleString()}</td>
            </tr>
        </table>
        <h3 style="text-align:right; margin-top:20px;">Total Paid: ৳ ${inv.amount.toLocaleString()}</h3>
    `;
    openModal("printDocumentModal");
}

function printPrescription(rxId) {
    const rx = HMS_DATA.prescriptions.find(r => r.rxId === rxId);
    if (!rx) return;
    document.getElementById("printableArea").innerHTML = `
        <div style="border-bottom:2px solid #000; padding-bottom:10px; margin-bottom:15px;">
            <h2>CAREPULSE MEDICAL CENTER</h2>
            <p style="font-size:0.8rem;">OPD e-Prescription Network</p>
        </div>
        <p><strong>Rx No:</strong> ${rx.rxId} | <strong>Date:</strong> 29 Aug 2026</p>
        <p><strong>Patient Name:</strong> ${rx.patientName}</p>
        <p><strong>Specialist:</strong> ${rx.doctor}</p>
        <p><strong>Diagnosis:</strong> ${rx.diagnosis}</p>
        <hr style="margin:15px 0;">
        <h4>Prescribed Medicines (Rx):</h4>
        <pre style="font-family:inherit; font-size:0.9rem; margin-top:10px;">${rx.medicines}</pre>
    `;
    openModal("printDocumentModal");
}

function triggerPrint() { window.print(); }
function openModal(id) { document.getElementById(id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }
function toggleSidebar() { document.getElementById("sidebarNav").classList.toggle("open"); document.getElementById("sidebarOverlay").classList.toggle("open"); }
function closeSidebar() { document.getElementById("sidebarNav").classList.remove("open"); document.getElementById("sidebarOverlay").classList.remove("open"); }

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    switchStakeholderSession("admin");
    renderAllModules();
});
