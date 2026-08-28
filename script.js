const HMS_DATA = {
    departments: ["All Departments", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology", "ICU & Critical Care"],
    
    doctors: [
        { id: "DOC-101", name: "Dr. Farhana Ahmed", dept: "Cardiology", degree: "MBBS, FCPS (Cardiology)", fee: 1500, status: "Available", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-102", name: "Dr. A. K. M. Shamsuddin", dept: "Neurology", degree: "MBBS, MD (Neurology)", fee: 1800, status: "In Consultation", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-103", name: "Dr. S. K. Roy", dept: "Orthopedics", degree: "MBBS, MS (Orthopedics)", fee: 1200, status: "Available", photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
        { id: "DOC-104", name: "Dr. Nusrat Jahan", dept: "Pediatrics", degree: "MBBS, DCH (Pediatrics)", fee: 1000, status: "Available", photo: "https://images.unsplash.com/photo-1594824813566-78a933f00938?w=400&auto=format&fit=crop&q=80" }
    ],

    nurses: [
        { id: "NRS-201", name: "Salma Khatun", dept: "ICU & Critical Care", shift: "Morning Shift (8AM - 4PM)", status: "On Duty", photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80" },
        { id: "NRS-202", name: "Mariam Begum", dept: "Cardiology", shift: "Evening Shift (4PM - 12AM)", status: "On Duty", photo: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&auto=format&fit=crop&q=80" }
    ],

    cabins: [
        { code: "VIP-Cabin 501", type: "VIP Suite", price: "৳ 8,000 / day", status: "Occupied", patient: "Kabir Hossain" },
        { code: "Deluxe-Cabin 502", type: "Deluxe Cabin", price: "৳ 5,000 / day", status: "Vacant", patient: "None" },
        { code: "ICU-Bed 101", type: "ICU Care Bed", price: "৳ 12,000 / day", status: "Occupied", patient: "Nusrat Begum" },
        { code: "Deluxe-Cabin 503", type: "Deluxe Cabin", price: "৳ 5,000 / day", status: "Vacant", patient: "None" }
    ],

    leaves: [
        { id: "LV-901", staffId: "NRS-202", name: "Mariam Begum", role: "Nurse", dept: "Cardiology", dates: "02 Sept - 05 Sept", reason: "Family Emergency", status: "Pending" }
    ],

    invoices: [
        { id: "INV-2026-881", mrn: "BD-2026-9901", name: "Rahim Chowdhury", service: "Cardiology OPD & ECG Test", amount: 2500, method: "bKash Online", status: "Paid" },
        { id: "INV-2026-882", mrn: "BD-2026-9901", name: "Rahim Chowdhury", service: "Deluxe Cabin 2 Days Stay", amount: 10000, method: "Cash Desk", status: "Paid" }
    ],

    reports: [
        { id: "LAB-7011", name: "Rahim Chowdhury", test: "Echocardiogram (ECG)", date: "26 Aug 2026", status: "Completed", doctor: "Dr. Farhana Ahmed" },
        { id: "LAB-7012", name: "Rahim Chowdhury", test: "Complete Blood Count (CBC)", date: "28 Aug 2026", status: "Completed", doctor: "Dr. Farhana Ahmed" }
    ]
};

let selectedDeptFilter = "All Departments";
let selectedPatientDeptFilter = "All Departments";
let activeRole = "admin";
let isDoctorCheckedIn = false;
let isNurseCheckedIn = false;

const ROLE_CONFIGS = {
    admin: {
        userName: "Md. Emtiaz Hossain",
        userRole: "System Administrator",
        avatar: "Md. EmTIAZ hOSSAIN sAMI LOGO.png",
        viewId: "view-admin",
        banner: "Admin Master Privileges: Unrestricted CRUD & staff control active.",
        navMenu: [
            { id: "view-admin", label: "Admin Control Center", icon: "fa-sliders" },
            { id: "view-doctors-directory", label: "Specialist Directory", icon: "fa-user-doctor" },
            { id: "view-accounts", label: "Accounts & Billing", icon: "fa-wallet" },
            { id: "view-patient", label: "Patient View Preview", icon: "fa-hospital-user" }
        ]
    },
    patient: {
        userName: "Rahim Chowdhury",
        userRole: "Patient Portal",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        viewId: "view-patient",
        banner: "Patient Self-Service Active: Browse Doctors, Invoices & Book Cabins.",
        navMenu: [
            { id: "view-patient", label: "My Health Dashboard", icon: "fa-hospital-user" },
            { id: "view-doctors-directory", label: "All Hospital Staff", icon: "fa-user-doctor" }
        ]
    },
    doctor: {
        userName: "Dr. Farhana Ahmed",
        userRole: "Senior Cardiologist",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80",
        viewId: "view-doctor",
        banner: "Doctor Console Active: OPD Queue & Duty Check-in.",
        navMenu: [
            { id: "view-doctor", label: "OPD Queue", icon: "fa-user-md" },
            { id: "view-doctors-directory", label: "Specialist Directory", icon: "fa-user-doctor" }
        ]
    },
    nurse: {
        userName: "Salma Khatun",
        userRole: "Nurse Station",
        avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80",
        viewId: "view-nurse",
        banner: "Nursing Duty Console: Ward vitals management.",
        navMenu: [
            { id: "view-nurse", label: "Ward & Vitals Matrix", icon: "fa-bed-pulse" }
        ]
    },
    accounts: {
        userName: "Anisur Rahman",
        userRole: "Accounts Officer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        viewId: "view-accounts",
        banner: "Accounts & Revenue Control Active.",
        navMenu: [
            { id: "view-accounts", label: "Accounts Ledger", icon: "fa-wallet" },
            { id: "view-patient", label: "Patient Billing Preview", icon: "fa-receipt" }
        ]
    },
    labtech: {
        userName: "Ayesha Siddiqua",
        userRole: "Lab Technician",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
        viewId: "view-labtech",
        banner: "Laboratory Diagnostics Active.",
        navMenu: [
            { id: "view-labtech", label: "Lab Orders", icon: "fa-microscope" }
        ]
    },
    pharmacist: {
        userName: "Tanvir Hossain",
        userRole: "Pharmacist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
        viewId: "view-accounts",
        banner: "Pharmacy Inventory Active.",
        navMenu: [
            { id: "view-accounts", label: "Dispensing Ledger", icon: "fa-pills" }
        ]
    }
};

function switchStakeholderSession(roleKey) {
    activeRole = roleKey;
    const config = ROLE_CONFIGS[roleKey];
    if (!config) return;

    document.getElementById("navUserName").innerText = config.userName;
    document.getElementById("navUserRole").innerText = config.userRole;
    document.getElementById("navUserAvatar").src = config.avatar;
    document.getElementById("contextBannerText").innerText = config.banner;

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

function toggleSidebar() {
    document.getElementById("sidebarNav").classList.toggle("open");
    document.getElementById("sidebarOverlay").classList.toggle("open");
}

function closeSidebar() {
    document.getElementById("sidebarNav").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("open");
}

function renderDepartmentDirectory() {
    const tabsContainer = document.getElementById("departmentTabs");
    tabsContainer.innerHTML = "";

    HMS_DATA.departments.forEach(dept => {
        const btn = document.createElement("button");
        btn.className = `dept-tab ${dept === selectedDeptFilter ? 'active' : ''}`;
        btn.innerText = dept;
        btn.onclick = () => {
            selectedDeptFilter = dept;
            renderDepartmentDirectory();
        };
        tabsContainer.appendChild(btn);
    });

    const docGrid = document.getElementById("doctorsGrid");
    docGrid.innerHTML = "";
    
    const filteredDocs = selectedDeptFilter === "All Departments" 
        ? HMS_DATA.doctors 
        : HMS_DATA.doctors.filter(d => d.dept === selectedDeptFilter);

    filteredDocs.forEach(d => {
        docGrid.innerHTML += createDoctorCardHTML(d);
    });

    const nurseGrid = document.getElementById("nursesGrid");
    nurseGrid.innerHTML = "";

    const filteredNurses = selectedDeptFilter === "All Departments"
        ? HMS_DATA.nurses
        : HMS_DATA.nurses.filter(n => n.dept === selectedDeptFilter);

    filteredNurses.forEach(n => {
        nurseGrid.innerHTML += `
            <div class="profile-card">
                <div class="card-img-box">
                    <img src="${n.photo}" alt="${n.name}">
                    <span class="card-badge">${n.dept}</span>
                </div>
                <div class="card-body">
                    <h4>${n.name}</h4>
                    <div class="sub">${n.shift}</div>
                    <p>Status: <strong style="color:#10b981">${n.status}</strong></p>
                </div>
            </div>
        `;
    });
}

function renderPatientDoctors() {
    const tabsContainer = document.getElementById("patientDeptTabs");
    if (!tabsContainer) return;
    tabsContainer.innerHTML = "";

    HMS_DATA.departments.forEach(dept => {
        const btn = document.createElement("button");
        btn.className = `dept-tab ${dept === selectedPatientDeptFilter ? 'active' : ''}`;
        btn.innerText = dept;
        btn.onclick = () => {
            selectedPatientDeptFilter = dept;
            renderPatientDoctors();
        };
        tabsContainer.appendChild(btn);
    });

    const docGrid = document.getElementById("patientDoctorsGrid");
    docGrid.innerHTML = "";
    
    const filteredDocs = selectedPatientDeptFilter === "All Departments" 
        ? HMS_DATA.doctors 
        : HMS_DATA.doctors.filter(d => d.dept === selectedPatientDeptFilter);

    filteredDocs.forEach(d => {
        docGrid.innerHTML += createDoctorCardHTML(d);
    });
}

function createDoctorCardHTML(d) {
    return `
        <div class="profile-card">
            <div class="card-img-box">
                <img src="${d.photo}" alt="${d.name}">
                <span class="card-badge">${d.dept}</span>
            </div>
            <div class="card-body">
                <h4>${d.name}</h4>
                <div class="sub">${d.degree}</div>
                <p>Status: <strong style="color:${d.status === 'Available' ? '#10b981':'#f59e0b'}">${d.status}</strong></p>
                <div class="card-footer-action">
                    <span class="fee-tag">৳ ${d.fee}</span>
                    <button class="btn btn-primary btn-sm" onclick="openBookModalForDoc('${d.name}')">Book Now</button>
                </div>
            </div>
        </div>
    `;
}

function renderCabins() {
    const adminGrid = document.getElementById("adminCabinGrid");
    const patientGrid = document.getElementById("patientCabinGrid");
    adminGrid.innerHTML = "";
    patientGrid.innerHTML = "";

    HMS_DATA.cabins.forEach((c, idx) => {
        adminGrid.innerHTML += `
            <div class="cabin-card ${c.status === 'Occupied' ? 'occupied' : ''}">
                <div class="cabin-head">
                    <span>${c.code}</span>
                    <i class="fa-solid fa-bed"></i>
                </div>
                <p style="font-size:0.85rem; font-weight:700; color:#0f172a">${c.type}</p>
                <small style="color:#64748b">${c.price}</small>
                <div style="margin-top:0.4rem;">
                    <span class="status-tag ${c.status === 'Vacant' ? 'success' : 'danger'}">${c.status}</span>
                </div>
            </div>
        `;

        patientGrid.innerHTML += `
            <div class="cabin-card ${c.status === 'Occupied' ? 'occupied' : ''}">
                <div class="cabin-head">
                    <span>${c.code}</span>
                </div>
                <p style="font-size:0.85rem; font-weight:700; color:#0f172a">${c.type}</p>
                <small style="color:#64748b">${c.price}</small>
                <div style="margin-top:0.6rem;">
                    ${c.status === 'Vacant' 
                        ? `<button class="btn btn-primary btn-sm" onclick="bookCabinDirect(${idx})">Book Cabin</button>` 
                        : `<span class="status-tag danger">Occupied</span>`}
                </div>
            </div>
        `;
    });

    document.getElementById("adminStatCabins").innerText = `${HMS_DATA.cabins.filter(c => c.status === 'Occupied').length} / ${HMS_DATA.cabins.length}`;
}

function bookCabinDirect(idx) {
    HMS_DATA.cabins[idx].status = "Occupied";
    HMS_DATA.cabins[idx].patient = "Rahim Chowdhury";
    renderCabins();
    alert(`Successfully Reserved ${HMS_DATA.cabins[idx].code}!`);
}

function renderLeaves() {
    const tbody = document.getElementById("adminLeaveTable");
    tbody.innerHTML = "";

    HMS_DATA.leaves.forEach((l, idx) => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${l.staffId}</strong></td>
                <td>${l.name}</td>
                <td>${l.role}</td>
                <td>${l.dept}</td>
                <td>${l.dates}</td>
                <td>${l.reason}</td>
                <td>
                    ${l.status === 'Pending' 
                        ? `<button class="btn btn-primary btn-sm" onclick="approveLeave(${idx})">Approve</button>` 
                        : `<span class="status-tag success">Approved</span>`}
                </td>
            </tr>
        `;
    });
}

function approveLeave(idx) {
    HMS_DATA.leaves[idx].status = "Approved";
    renderLeaves();
    alert("Leave Request Approved!");
}

function toggleDoctorAttendance() {
    isDoctorCheckedIn = !isDoctorCheckedIn;
    const btn = document.getElementById("docCheckInBtn");
    btn.innerHTML = isDoctorCheckedIn ? `<i class="fa-solid fa-circle-check"></i> Checked In` : `<i class="fa-solid fa-clock"></i> Check-In Duty`;
    btn.className = isDoctorCheckedIn ? "btn btn-primary" : "btn btn-outline";
}

function toggleNurseAttendance() {
    isNurseCheckedIn = !isNurseCheckedIn;
    const btn = document.getElementById("nurseCheckInBtn");
    btn.innerHTML = isNurseCheckedIn ? `<i class="fa-solid fa-circle-check"></i> Shift Active` : `<i class="fa-solid fa-clock"></i> Check-In Shift`;
    btn.className = isNurseCheckedIn ? "btn btn-primary" : "btn btn-outline";
}

function renderTables() {
    const accTbody = document.getElementById("accountsInvoiceTable");
    const patTbody = document.getElementById("patientInvoiceTable");
    accTbody.innerHTML = "";
    patTbody.innerHTML = "";

    HMS_DATA.invoices.forEach(inv => {
        const row = `
            <tr>
                <td><strong>${inv.id}</strong></td>
                <td>${inv.name}</td>
                <td>${inv.mrn}</td>
                <td>৳ ${inv.amount}</td>
                <td>${inv.method}</td>
                <td><span class="status-tag success">${inv.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="printInvoice('${inv.id}')"><i class="fa-solid fa-print"></i> Print</button></td>
            </tr>
        `;
        accTbody.innerHTML += row;
        if (inv.mrn === "BD-2026-9901") {
            patTbody.innerHTML += `
                <tr>
                    <td><strong>${inv.id}</strong></td>
                    <td>${inv.service}</td>
                    <td>৳ ${inv.amount}</td>
                    <td><span class="status-tag success">${inv.status}</span></td>
                    <td><button class="btn btn-outline btn-sm" onclick="printInvoice('${inv.id}')"><i class="fa-solid fa-print"></i> Print</button></td>
                </tr>
            `;
        }
    });

    const repTbody = document.getElementById("patientReportTable");
    repTbody.innerHTML = "";
    HMS_DATA.reports.forEach(rep => {
        repTbody.innerHTML += `
            <tr>
                <td><strong>${rep.id}</strong></td>
                <td>${rep.test}</td>
                <td>${rep.date}</td>
                <td><span class="status-tag success">${rep.status}</span></td>
                <td><button class="btn btn-outline btn-sm" onclick="printLabReport('${rep.id}')"><i class="fa-solid fa-print"></i> Print</button></td>
            </tr>
        `;
    });
}

function printInvoice(invId) {
    const inv = HMS_DATA.invoices.find(i => i.id === invId);
    if (!inv) return;

    document.getElementById("printableArea").innerHTML = `
        <div class="invoice-header">
            <div>
                <h2>CAREPULSE SPECIALIZED HOSPITAL</h2>
                <p>Dhaka Central Medical Tower, Bangladesh</p>
            </div>
            <div style="text-align:right">
                <h3>OFFICIAL RECEIPT</h3>
                <p>Invoice #: <strong>${inv.id}</strong></p>
            </div>
        </div>
        <p><strong>Patient Name:</strong> ${inv.name} | <strong>MRN:</strong> ${inv.mrn}</p>
        <p><strong>Payment Method:</strong> ${inv.method}</p>
        <hr style="margin:1rem 0;">
        <table style="width:100%; text-align:left;">
            <tr><th>Description</th><th>Amount</th></tr>
            <tr><td>${inv.service}</td><td>৳ ${inv.amount}</td></tr>
        </table>
        <h3 style="text-align:right; margin-top:1.5rem;">Total Paid: ৳ ${inv.amount}</h3>
    `;

    openModal("printDocumentModal");
}

function printLabReport(repId) {
    const rep = HMS_DATA.reports.find(r => r.id === repId);
    if (!rep) return;

    document.getElementById("printableArea").innerHTML = `
        <div class="invoice-header">
            <div>
                <h2>CAREPULSE DIAGNOSTIC LABORATORY</h2>
                <p>ISO 9001 Certified Medical Testing</p>
            </div>
            <div style="text-align:right">
                <h3>LAB REPORT</h3>
                <p>Report #: <strong>${rep.id}</strong></p>
            </div>
        </div>
        <p><strong>Patient:</strong> ${rep.name} | <strong>Date:</strong> ${rep.date}</p>
        <p><strong>Prescribed By:</strong> ${rep.doctor}</p>
        <hr style="margin:1rem 0;">
        <h4>Test Performed: ${rep.test}</h4>
        <p style="margin-top:1rem;">Result: <strong style="color:#10b981">NORMAL PARAMETERS / CLEAR</strong></p>
    `;

    openModal("printDocumentModal");
}

function triggerPrint() { window.print(); }
function openModal(modalId) { document.getElementById(modalId).classList.add("open"); }
function closeModal(modalId) { document.getElementById(modalId).classList.remove("open"); }

function openBookModalForDoc(docName) {
    openModal("bookAppointmentModal");
    document.getElementById("appDoctorSelect").value = docName;
}

function handleAddDoctor(e) {
    e.preventDefault();
    const newDoc = {
        id: `DOC-${HMS_DATA.doctors.length + 101}`,
        name: document.getElementById("docName").value,
        dept: document.getElementById("docDept").value,
        degree: document.getElementById("docDegrees").value,
        fee: parseInt(document.getElementById("docFee").value),
        status: "Available",
        photo: document.getElementById("docPhoto").value
    };

    HMS_DATA.doctors.push(newDoc);
    renderDepartmentDirectory();
    renderPatientDoctors();
    populateDoctorSelectOptions();
    closeModal("addDoctorModal");
    document.getElementById("addDoctorForm").reset();
    document.getElementById("adminStatDoctors").innerText = HMS_DATA.doctors.length;
    alert("New Specialist Doctor Added!");
}

function handleAddNurse(e) {
    e.preventDefault();
    const newNurse = {
        id: `NRS-${HMS_DATA.nurses.length + 201}`,
        name: document.getElementById("nurseName").value,
        dept: document.getElementById("nurseDept").value,
        shift: document.getElementById("nurseShift").value,
        status: "On Duty",
        photo: document.getElementById("nursePhoto").value
    };

    HMS_DATA.nurses.push(newNurse);
    renderDepartmentDirectory();
    closeModal("addNurseModal");
    document.getElementById("addNurseForm").reset();
    document.getElementById("adminStatNurses").innerText = HMS_DATA.nurses.length;
    alert("Nurse Profile Added!");
}

function handleLeaveSubmit(e) {
    e.preventDefault();
    HMS_DATA.leaves.push({
        id: `LV-${HMS_DATA.leaves.length + 901}`,
        staffId: "STF-USER",
        name: "Staff Member",
        role: "Staff",
        dept: "Medical",
        dates: document.getElementById("leaveDates").value,
        reason: document.getElementById("leaveReason").value,
        status: "Pending"
    });
    renderLeaves();
    closeModal("applyLeaveModal");
    alert("Leave Request Submitted!");
}

function handleGenerateBill(e) {
    e.preventDefault();
    HMS_DATA.invoices.push({
        id: `INV-2026-${HMS_DATA.invoices.length + 883}`,
        mrn: document.getElementById("billMrn").value,
        name: document.getElementById("billName").value,
        service: document.getElementById("billService").value,
        amount: parseInt(document.getElementById("billAmount").value),
        method: "Cash / Gateway",
        status: "Paid"
    });
    renderTables();
    closeModal("generateBillModal");
    alert("Invoice Generated Successfully!");
}

function handleBookAppointment(e) {
    e.preventDefault();
    const doc = document.getElementById("appDoctorSelect").value;
    const date = document.getElementById("appDate").value;
    closeModal("bookAppointmentModal");
    alert(`Appointment Request Confirmed with ${doc} on ${date}!`);
}

function populateDoctorSelectOptions() {
    const select = document.getElementById("appDoctorSelect");
    select.innerHTML = "";
    HMS_DATA.doctors.forEach(d => {
        select.innerHTML += `<option value="${d.name}">${d.name} (${d.dept})</option>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    populateDoctorSelectOptions();
    renderDepartmentDirectory();
    renderPatientDoctors();
    renderCabins();
    renderLeaves();
    renderTables();
    switchStakeholderSession("admin");
});
