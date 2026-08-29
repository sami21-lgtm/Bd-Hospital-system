/* CarePulse HMS Core Application Engine - Fixed & Complete */

// Database Setup with Specific Credentials & Patient Phone Recovery
const DB = {
  users: [
    // Admin
    { id: "admin@hospital.com", alias: "admin", pass: "admin123", name: "Md. Emtiaz Hossian Sami", role: "admin", roleTitle: "System Administrator", avatar: "Md. EmTIAZ hOSSAIN sAMI LOGO.png" },
    
    // Doctor 1
    { id: "doctor@hospital.com", alias: "doctor1", pass: "doctor123", name: "Prof. Dr. Syed Shamsul Huda", role: "doctor", roleTitle: "Specialist Doctor (Cardiology)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },

    // Doctor 2
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
    { id: "DOC-101", name: "Prof. Dr. Kazi Ashraful Alam", dept: "General & Laparoscopic Surgery", degrees: "MBBS, FCPS (Surgery), MS", fee: 1500, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-102", name: "Dr. Ariful Islam", dept: "Urology", degrees: "MBBS, MS (Urology)", fee: 1500, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-103", name: "Dr. Nusrat Chowdury", dept: "Obstetrics & Gynecology", degrees: "MBBS, FCPS (OBGYN)", fee: 1600, photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-104", name: "Prof. Dr. Mahbubur Rahman", dept: "Cardiac Surgery", degrees: "MBBS, MS (Cardiothoracic Surgery)", fee: 2000, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-105", name: "Dr. Shahriar Nabi", dept: "Vascular Surgery", degrees: "MBBS, MS (Vascular Surgery)", fee: 1500, photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-106", name: "Dr. Imran Khan", dept: "Respiratory Medicine", degrees: "MBBS, MD (Chest Medicine)", fee: 1500, photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-107", name: "Dr. Tariqul Islam", dept: "Colorectal Surgery", degrees: "MBBS, FCPS (Surgery), MS (Colorectal)", fee: 1600, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-108", name: "Dr. Mehzabin Ahmed", dept: "Dental and Maxillofacial Surgery", degrees: "BDS, FCPS (Oral & Maxillofacial)", fee: 1200, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-109", name: "Dt. Rashida Parveen", dept: "Nutrition & Dietetic Department", degrees: "BSc & MSc in Food & Nutrition", fee: 1000, photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-110", name: "Dr. Ayesha Siddiqua", dept: "Rheumatology", degrees: "MBBS, MD (Rheumatology)", fee: 1600, photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-111", name: "Dr. Rafiqul Hassan", dept: "Anaesthesia", degrees: "MBBS, DA, FCPS (Anaesthesiology)", fee: 1200, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-112", name: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", degrees: "MBBS, FCPS, FACC (USA)", fee: 1800, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-113", name: "Dr. Tanvir Mahmud", dept: "Pediatric & Neonatology", degrees: "MBBS, DCH, FCPS (Pediatrics)", fee: 1300, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-114", name: "Dr. Mahbub Alam", dept: "ENT, Head & Neck Surgery", degrees: "MBBS, MS (ENT)", fee: 1400, photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-115", name: "Dr. Anisur Rahman", dept: "Orthopedics, Arthroscopy & Joint Replacement", degrees: "MBBS, MS (Ortho)", fee: 1500, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-116", name: "Dr. Bilkis Jahan", dept: "Clinical Hematology", degrees: "MBBS, MD (Hematology)", fee: 1600, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-117", name: "Dr. Kamrul Islam", dept: "Surgical Oncology", degrees: "MBBS, MS (Surgical Oncology)", fee: 1800, photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-118", name: "Dr. Moniruzzaman", dept: "Physical Medicine", degrees: "MBBS, FCPS (Physical Medicine)", fee: 1300, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-119", name: "Dr. Sharmin Akter", dept: "Plastic & Aesthetic Surgery", degrees: "MBBS, FCPS (Plastic Surgery)", fee: 1700, photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-120", name: "Prof. Dr. Kamrul Hasan", dept: "Gastroenterology & Hepatology", degrees: "MBBS, MD (Gastroenterology)", fee: 1800, photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-121", name: "Dr. Sabina Yeasmin", dept: "Dermatology", degrees: "MBBS, DDV, FCPS (Skin & VD)", fee: 1400, photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-122", name: "Dr. Shamsul Alam", dept: "Neurosurgery", degrees: "MBBS, MS (Neurosurgery)", fee: 1800, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-123", name: "Dr. Asaduzzaman", dept: "Thoracic Surgery", degrees: "MBBS, MS (Thoracic Surgery)", fee: 1700, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-124", name: "Dr. Mahmudul Haq", dept: "ICU", degrees: "MBBS, MD (Critical Care Medicine)", fee: 1500, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-125", name: "Dr. Nargis Sultana", dept: "Laboratory Medicine", degrees: "MBBS, MD (Pathology)", fee: 1200, photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-126", name: "Dr. Faisal Ahmed", dept: "Pediatric Surgery", degrees: "MBBS, MS (Pediatric Surgery)", fee: 1500, photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-127", name: "Prof. Dr. Zahirul Islam", dept: "Hepatobiliary & Pancreatic Surgery", degrees: "MBBS, FCPS, MS (HBP Surgery)", fee: 2000, photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-128", name: "Dr. Sadia Chowdhury", dept: "Pediatric Cardiology", degrees: "MBBS, MD (Pediatric Cardiology)", fee: 1600, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-129", name: "Dr. Nahid Sultana", dept: "Oncology", degrees: "MBBS, FCPS (Oncology)", fee: 1700, photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-130", name: "Dr. Tariqul Islam", dept: "Nephrology", degrees: "MBBS, MD (Nephrology)", fee: 1600, photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-131", name: "Dr. Rehana Parveen", dept: "Diabetes & Endocrinology", degrees: "MBBS, MD (Endocrinology)", fee: 1500, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-132", name: "Dr. Farhana Yasmin", dept: "Neurology", degrees: "MBBS, MD (Neurology)", fee: 1500, photo: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-133", name: "Prof. Dr. M. A. Rashid", dept: "Internal Medicine", degrees: "MBBS, FCPS (Medicine)", fee: 2000, photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-134", name: "Dr. Khairul Bashar", dept: "Radiology & Imaging", degrees: "MBBS, MD (Radiology)", fee: 1300, photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-135", name: "Dr. Sajjad Hossain", dept: "Psychiatry", degrees: "MBBS, FCPS (Psychiatry)", fee: 1400, photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80" },
    { id: "DOC-136", name: "Dr. Farzana Parveen", dept: "Breast, Colorectal & Laparoscopic Surgery", degrees: "MBBS, FCPS (Surgery), MS", fee: 1600, photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&auto=format&fit=crop&q=80" }
  ],

  patients: [
    { mrn: "BD-2026-9901", name: "Tariqul Islam", contact: "01711223344", age: 45, gender: "Male", history: "Hypertension, BP: 130/85, Temp: 98.6°F", allergies: "Penicillin" },
    { mrn: "BD-2026-9902", name: "Selina Begum", contact: "01819887766", age: 38, gender: "Female", history: "Asthma, BP: 120/80, Temp: 99.1°F", allergies: "Dust, Sulfa Drugs" },
    { mrn: "BD-2026-9903", name: "Abdur Rahim", contact: "01912345678", age: 62, gender: "Male", history: "IHD, Post-PCI, BP: 140/90, Temp: 98.4°F", allergies: "None" },
    { mrn: "BD-2026-9904", name: "Nasreen Sultana", contact: "01733445566", age: 29, gender: "Female", history: "Pregnancy 2nd Trimester, BP: 110/70", allergies: "None" },
    { mrn: "BD-2026-9905", name: "Kamrul Hassan", contact: "01555667788", age: 50, gender: "Male", history: "Type-2 Diabetes, BP: 135/88", allergies: "Aspirin" },
    { mrn: "BD-2026-9906", name: "Aayan Rahman", contact: "01611224455", age: 6, gender: "Male", history: "Acute Tonsillitis, Temp: 101.2°F", allergies: "None" },
    { mrn: "BD-2026-9907", name: "Farida Yasmin", contact: "01822334455", age: 55, gender: "Female", history: "Osteoarthritis, BP: 125/80", allergies: "NSAIDs" },
    { mrn: "BD-2026-9908", name: "Rafiqul Islam", contact: "01988776655", age: 41, gender: "Male", history: "CKD Stage 3, BP: 145/95", allergies: "Codeine" }
  ],

  appointments: [
    { id: "APT-801", patientName: "Tariqul Islam", doctorName: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", dateTime: "2026-08-29 10:30 AM", status: "Scheduled" },
    { id: "APT-802", patientName: "Selina Begum", doctorName: "Dr. Farhana Yasmin", dept: "Neurology", dateTime: "2026-08-29 11:15 AM", status: "Completed" },
    { id: "APT-803", patientName: "Abdur Rahim", doctorName: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", dateTime: "2026-08-29 12:00 PM", status: "Scheduled" },
    { id: "APT-804", patientName: "Nasreen Sultana", doctorName: "Dr. Nusrat Chowdury", dept: "Obstetrics & Gynecology", dateTime: "2026-08-29 02:00 PM", status: "Scheduled" },
    { id: "APT-805", patientName: "Kamrul Hassan", doctorName: "Dr. Rehana Parveen", dept: "Diabetes & Endocrinology", dateTime: "2026-08-29 03:30 PM", status: "Scheduled" },
    { id: "APT-806", patientName: "Aayan Rahman", doctorName: "Dr. Tanvir Mahmud", dept: "Pediatric & Neonatology", dateTime: "2026-08-29 04:15 PM", status: "Scheduled" },
    { id: "APT-807", patientName: "Farida Yasmin", doctorName: "Dr. Anisur Rahman", dept: "Orthopedics, Arthroscopy & Joint Replacement", dateTime: "2026-08-30 10:00 AM", status: "Scheduled" },
    { id: "APT-808", patientName: "Rafiqul Islam", doctorName: "Dr. Tariqul Islam", dept: "Nephrology", dateTime: "2026-08-30 11:30 AM", status: "Scheduled" }
  ],

  prescriptions: [
    { rxId: "RX-501", patientName: "Selina Begum", doctorName: "Dr. Farhana Yasmin", diagnosis: "Migraine with Aura", meds: "Tab. Napex 500mg (1+0+1)\nCap. Omeprazole 20mg (1+0+0) Before Meal" },
    { rxId: "RX-502", patientName: "Tariqul Islam", doctorName: "Prof. Dr. Syed Shamsul Huda", diagnosis: "Essential Hypertension", meds: "Tab. Bisoprolol 5mg (1+0+0)\nTab. Amlodipine 5mg (0+0+1)" },
    { rxId: "RX-503", patientName: "Nasreen Sultana", doctorName: "Dr. Nusrat Chowdury", diagnosis: "Routine ANC Visit", meds: "Cap. Iron + Folic Acid (0+1+0)\nTab. Calcium 500mg (1+0+1)" },
    { rxId: "RX-504", patientName: "Kamrul Hassan", doctorName: "Dr. Rehana Parveen", diagnosis: "Uncontrolled Type-2 DM", meds: "Tab. Metformin 850mg (1+0+1)\nTab. Sitagliptin 50mg (1+0+0)" }
  ],

  labTests: [
    { id: "LAB-301", patientName: "Tariqul Islam", test: "Lipid Profile + HbA1c", date: "2026-08-29", status: "Pending" },
    { id: "LAB-302", patientName: "Abdur Rahim", test: "ECG & Echocardiogram", date: "2026-08-29", status: "Completed" },
    { id: "LAB-303", patientName: "Nasreen Sultana", test: "USG of Pregnancy Profile", date: "2026-08-29", status: "Completed" },
    { id: "LAB-304", patientName: "Kamrul Hassan", test: "Fasting Blood Sugar & Serum Creatinine", date: "2026-08-29", status: "Pending" },
    { id: "LAB-305", patientName: "Rafiqul Islam", test: "24 Hours Urinary Protein", date: "2026-08-30", status: "Pending" }
  ],

  pharmacy: [
    { name: "Napa Extra 500mg", category: "Analgesic", stock: 450, price: 2.5, exp: "2028-05" },
    { name: "Seclo 20mg Capsule", category: "PPI", stock: 22, price: 7.0, exp: "2027-11" },
    { name: "Sergel 40mg Injection", category: "Injectable", stock: 12, price: 85.0, exp: "2027-02" },
    { name: "Azithrocin 500mg", category: "Antibiotic", stock: 120, price: 35.0, exp: "2028-01" },
    { name: "Monas 10mg Tablet", category: "Antiasthmatic", stock: 300, price: 16.0, exp: "2027-09" },
    { name: "Bizoran 5/20 Tablet", category: "Antihypertensive", stock: 180, price: 12.0, exp: "2028-03" },
    { name: "Compathic 500mg", category: "Antibiotic", stock: 15, price: 40.0, exp: "2026-12" },
    { name: "Ceevit 250mg Chewable", category: "Vitamin", stock: 500, price: 2.0, exp: "2028-06" }
  ],

  cabins: [
    { number: "Cabin 401 (VIP)", type: "Single Deluxe", status: "Occupied", patient: "Abdur Rahim", rate: 8000 },
    { number: "Cabin 402", type: "Single Standard", status: "Available", patient: "-", rate: 5000 },
    { number: "Cabin 403", type: "Single Deluxe", status: "Occupied", patient: "Farida Yasmin", rate: 7500 },
    { number: "Cabin 404", type: "Double Bed", status: "Available", patient: "-", rate: 3500 },
    { number: "ICU Bed 01", type: "Critical Care", status: "Available", patient: "-", rate: 15000 },
    { number: "ICU Bed 03", type: "Critical Care", status: "Occupied", patient: "Emergency Ref", rate: 15000 },
    { number: "CCU Bed 01", type: "Cardiac Care", status: "Available", patient: "-", rate: 12000 },
    { number: "NICU Bed 02", type: "Neonatal ICU", status: "Occupied", patient: "Baby of Nasreen", rate: 10000 }
  ],

  invoices: [
    { id: "INV-9001", mrn: "BD-2026-9902", patientName: "Selina Begum", service: "Neurology OPD Consultation", amount: 1500, status: "Paid" },
    { id: "INV-9002", mrn: "BD-2026-9903", patientName: "Abdur Rahim", service: "ECG & Echocardiogram Tests", amount: 3500, status: "Paid" },
    { id: "INV-9003", mrn: "BD-2026-9904", patientName: "Nasreen Sultana", service: "USG & Gynee OPD Consultation", amount: 3100, status: "Paid" },
    { id: "INV-9004", mrn: "BD-2026-9905", patientName: "Kamrul Hassan", service: "Endocrinology Consultation", amount: 1500, status: "Unpaid" },
    { id: "INV-9005", mrn: "BD-2026-9907", patientName: "Farida Yasmin", service: "Cabin Booking & Admission Fee", amount: 10000, status: "Unpaid" }
  ],

  notifications: [
    { text: "System Boot: CarePulse HMS Engine running.", time: "08:00 AM" },
    { text: "Emergency Admission: ICU Bed 03 occupied.", time: "09:15 AM" },
    { text: "Lab Result Updated: ECG for Abdur Rahim.", time: "11:00 AM" },
    { text: "Pharmacy Alert: Low stock for Sergel Injection.", time: "11:45 AM" }
  ]
};

// Current Active User State
let currentUser = null;

// Initialize System on DOM Ready & Restore Active Session
document.addEventListener("DOMContentLoaded", () => {
  autoFillCredentials('admin');
  populateDropdowns();
  restoreUserSession(); // Reload প্রতিরোধ ও লগইন সেশন পুনরুদ্ধার
});

// Restore User Session on Page Reload
function restoreUserSession() {
  const savedSession = localStorage.getItem("carepulse_active_user");
  if (savedSession) {
    try {
      currentUser = JSON.parse(savedSession);
      const loginModal = document.getElementById("loginModal");
      if (loginModal) loginModal.style.display = "none";

      updateUIHeader();
      buildSidebarMenu();

      const lastView = localStorage.getItem("carepulse_active_view") || getDefaultViewForRole(currentUser.role);
      switchView(lastView);
    } catch (e) {
      console.error("Session restore failed:", e);
      localStorage.removeItem("carepulse_active_user");
    }
  }
}

// Auto-fill Credentials Helper in Login Modal
function autoFillCredentials(roleKey) {
  const user = DB.users.find(u => u.role === roleKey);
  if (user) {
    const idEl = document.getElementById("loginUserId");
    const passEl = document.getElementById("loginPassword");
    const hintEl = document.getElementById("credentialHint");

    if (idEl) idEl.value = user.id;
    if (passEl) passEl.value = user.pass;
    if (hintEl) hintEl.innerHTML = `ID: <b>${user.id}</b> | Pass: <b>${user.pass}</b>`;
  }
}

// Flexible User Authentication Handler (Any Doctor / Any Nurse / Admin / Patient)
function handleUserLogin(event) {
  if (event) event.preventDefault();
  const idEl = document.getElementById("loginUserId");
  const passEl = document.getElementById("loginPassword");
  const errorMsg = document.getElementById("loginErrorMsg");
  const loginModal = document.getElementById("loginModal");

  if (!idEl || !passEl) return;

  const inputId = idEl.value.trim().toLowerCase();
  const inputPass = passEl.value.trim();

  // 1. Check Primary Users List
  let matchedUser = DB.users.find(u => 
    (u.id.toLowerCase() === inputId || u.alias.toLowerCase() === inputId || (u.phone && u.phone === inputId)) && u.pass === inputPass
  );

  // 2. Allow ANY Doctor from Doctor Directory (General or Specialist)
  if (!matchedUser) {
    const docMatch = DB.doctors.find(d => 
      d.id.toLowerCase() === inputId || 
      d.name.toLowerCase().includes(inputId) ||
      `${d.id.toLowerCase()}@hospital.com` === inputId
    );

    if (docMatch && (inputPass === "doctor123" || inputPass === "123456" || inputPass === "doctor")) {
      matchedUser = {
        id: `${docMatch.id.toLowerCase()}@hospital.com`,
        alias: docMatch.id.toLowerCase(),
        pass: inputPass,
        name: docMatch.name,
        role: "doctor",
        roleTitle: `Doctor (${docMatch.dept})`,
        avatar: docMatch.photo
      };
    }
  }

  // 3. Allow ANY Nurse Login
  if (!matchedUser && (inputId.includes("nurse") || inputId.includes("sr."))) {
    if (inputPass === "nurse123" || inputPass === "123456" || inputPass === "nurse") {
      matchedUser = {
        id: inputId.includes("@") ? inputId : `${inputId}@hospital.com`,
        alias: inputId,
        pass: inputPass,
        name: inputId.startsWith("sr.") ? inputId : "Senior Ward Nurse",
        role: "nurse",
        roleTitle: "Ward Nurse Station",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80"
      };
    }
  }

  if (matchedUser) {
    currentUser = matchedUser;
    
    // Save to LocalStorage to prevent logout on reload
    localStorage.setItem("carepulse_active_user", JSON.stringify(currentUser));

    if (errorMsg) errorMsg.style.display = "none";
    if (loginModal) loginModal.style.display = "none";

    updateUIHeader();
    buildSidebarMenu();

    const defaultView = getDefaultViewForRole(currentUser.role);
    switchView(defaultView);
    addNotification(`User ${currentUser.name} authenticated successfully as ${currentUser.roleTitle}.`);
  } else {
    if (errorMsg) errorMsg.style.display = "block";
  }
}

// Update Top Navigation Bar User Info
function updateUIHeader() {
  if (!currentUser) return;
  if (document.getElementById("navUserAvatar")) document.getElementById("navUserAvatar").src = currentUser.avatar || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80";
  if (document.getElementById("navUserName")) document.getElementById("navUserName").textContent = currentUser.name;
  if (document.getElementById("navUserRole")) document.getElementById("navUserRole").textContent = currentUser.roleTitle;
  if (document.getElementById("activeRoleDisplay")) document.getElementById("activeRoleDisplay").textContent = currentUser.roleTitle;
}

// Patient Password Recovery Handler (Name & Phone Match)
function handlePatientPasswordRecovery(e) {
  if (e) e.preventDefault();
  const nameInput = document.getElementById("recPatientName")?.value.trim().toLowerCase();
  const phoneInput = document.getElementById("recPatientPhone")?.value.trim().replace(/\D/g, "");
  const newPassInput = document.getElementById("recNewPassword")?.value.trim();
  const statusBox = document.getElementById("recoveryStatus");

  if (!statusBox) return;
  statusBox.style.display = "block";

  const matchedPatient = DB.patients.find(p => 
    p.name.toLowerCase() === nameInput && p.contact.replace(/\D/g, "") === phoneInput
  );

  if (matchedPatient) {
    let userAccount = DB.users.find(u => u.name.toLowerCase() === nameInput || u.role === 'patient');

    if (userAccount) {
      userAccount.pass = newPassInput;
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
  localStorage.removeItem("carepulse_active_user");
  localStorage.removeItem("carepulse_active_view");
  const loginModal = document.getElementById("loginModal");
  if (loginModal) loginModal.style.display = "flex";
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
  if (!sideMenu || !currentUser) return;
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

  localStorage.setItem("carepulse_active_view", viewId);

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

  const pageTitle = document.getElementById("pageTitle");
  if (pageTitle) pageTitle.textContent = titles[viewId] || "CarePulse System";

  const banner = document.getElementById("contextBannerText");
  if (banner && currentUser) {
    banner.textContent = `Active Session: ${currentUser.roleTitle} (${currentUser.name}) | CarePulse Enterprise Workspace`;
  }

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
  const statP = document.getElementById("statPatients");
  if (statP) statP.textContent = DB.patients.length;
  
  const statD = document.getElementById("statDoctors");
  if (statD) statD.textContent = DB.doctors.length;
  
  const statB = document.getElementById("statBeds");
  if (statB) {
    const occupiedBeds = DB.cabins.filter(c => c.status === "Occupied").length;
    statB.textContent = `${occupiedBeds} / ${DB.cabins.length}`;
  }

  const statR = document.getElementById("statRevenue");
  if (statR) {
    const totalRev = DB.invoices.reduce((sum, inv) => sum + Number(inv.amount), 0);
    statR.textContent = `৳ ${totalRev.toLocaleString()}`;
  }

  const tbody = document.getElementById("adminQuickQueueTable");
  if (!tbody) return;
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

// Appointments List Render
function renderAppointments() {
  const tbody = document.getElementById("appointmentTableBody");
  const heading = document.getElementById("appointmentTableHeading");
  if (!tbody) return;
  tbody.innerHTML = "";

  let apptList = DB.appointments;

  if (currentUser?.role === 'doctor') {
    apptList = DB.appointments.filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
    if (heading) heading.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Appointments Assigned to ${currentUser.name}`;
  } else {
    if (heading) heading.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Appointment Scheduling Center`;
  }

  if (apptList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">No appointments found.</td></tr>`;
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

// Patient Directory Render
function renderPatients() {
  const tbody = document.getElementById("patientTableBody");
  const heading = document.getElementById("patientTableHeading");
  if (!tbody) return;
  tbody.innerHTML = "";

  let patientList = DB.patients;

  if (currentUser?.role === 'doctor') {
    const assignedPatientNames = DB.appointments
      .filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()))
      .map(a => a.patientName);

    patientList = DB.patients.filter(p => assignedPatientNames.includes(p.name));
    if (heading) heading.innerHTML = `<i class="fa-solid fa-address-card"></i> Patients Assigned to ${currentUser.name}`;
  } else {
    if (heading) heading.innerHTML = `<i class="fa-solid fa-address-card"></i> Patient Electronic Medical Records (EMR)`;
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
  if (deptTabs) {
    const depts = ["All", ...new Set(DB.doctors.map(d => d.dept))];
    deptTabs.innerHTML = depts.map(dept => `<button class="tab-btn ${dept==='All'?'active':''}" onclick="filterDoctors('${dept}', this)">${dept}</button>`).join("");
  }
  renderDoctorCards(DB.doctors);
}

function filterDoctors(dept, btnElement) {
  document.querySelectorAll(".filter-tabs .tab-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  if (dept === "All") {
    renderDoctorCards(DB.doctors);
  } else {
    renderDoctorCards(DB.doctors.filter(d => d.dept === dept));
  }
}

function renderDoctorCards(list) {
  const grid = document.getElementById("doctorsGrid");
  if (!grid) return;
  grid.innerHTML = list.map(doc => `
    <div class="doctor-card">
      <img src="${doc.photo}" alt="${doc.name}">
      <h4>${doc.name}</h4>
      <p><b>${doc.dept}</b><br><small>${doc.degrees}</small></p>
      <div class="badge-status status-available">Fee: ৳${doc.fee}</div>
    </div>
  `).join("");
}

// Doctor Desk Workstation Render
function renderConsultationDesk() {
  const select = document.getElementById("consultPatientSelect");
  const title = document.getElementById("doctorDeskTitle");
  if (!select) return;

  if (title && currentUser) {
    title.innerHTML = `<i class="fa-solid fa-stethoscope"></i> OPD Patient Queue (${currentUser.name})`;
  }
  select.innerHTML = `<option value="">-- Select Patient from Queue --</option>`;

  let doctorAppts = DB.appointments;

  if (currentUser?.role === 'doctor') {
    doctorAppts = DB.appointments.filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
  }

  doctorAppts.forEach(app => {
    select.innerHTML += `<option value="${app.patientName}">${app.patientName} (Appt: ${app.id})</option>`;
  });
}

function loadConsultationPatient(patientName) {
  const box = document.getElementById("consultPatientDetails");
  if (!box) return;

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
  if (!btn || !currentUser) return;

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
  if (e) e.preventDefault();
  const select = document.getElementById("consultPatientSelect");
  const diagInput = document.getElementById("rxDiagnosis");
  const medsInput = document.getElementById("rxMedicines");

  const patientName = select?.value;
  if (!patientName) {
    alert("Please select an assigned patient from the queue first.");
    return;
  }

  const rx = {
    rxId: `RX-${Math.floor(100 + Math.random() * 900)}`,
    patientName: patientName,
    doctorName: currentUser ? currentUser.name : "Duty Doctor",
    diagnosis: diagInput?.value || "N/A",
    meds: medsInput?.value || "N/A"
  };

  DB.prescriptions.unshift(rx);
  addNotification(`Prescription ${rx.rxId} created for ${patientName}.`);
  alert("Prescription saved and sent to Pharmacy.");
  if (e?.target) e.target.reset();
  switchView('view-prescriptions');
}

function renderPrescriptions() {
  const tbody = document.getElementById("prescriptionTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  let rxList = DB.prescriptions;

  if (currentUser?.role === 'doctor') {
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
  if (printable) {
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
  }
  openModal("printDocumentModal");
}

function renderLaboratory() {
  const tbody = document.getElementById("labTableBody");
  if (!tbody) return;
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
  const itemsEl = document.getElementById("statPharmacyItems");
  const lowEl = document.getElementById("statPharmacyLow");

  if (itemsEl) itemsEl.textContent = `${DB.pharmacy.length} Items`;
  if (lowEl) {
    const lowCount = DB.pharmacy.filter(p => p.stock < 30).length;
    lowEl.textContent = `${lowCount} Items`;
  }

  const tbody = document.getElementById("pharmacyTableBody");
  if (!tbody) return;
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
  if (!grid) return;
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
  if (!tbody) return;
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
  if (printable) {
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
  }
  openModal("printDocumentModal");
}

function renderNotifications() {
  const list = document.getElementById("notificationList");
  const count = document.getElementById("notifCount");
  if (list) {
    list.innerHTML = DB.notifications.map(n => `
      <li>
        <span>${n.text}</span>
        <small style="color:var(--text-muted)">${n.time}</small>
      </li>
    `).join("");
  }
  if (count) count.textContent = DB.notifications.length;
}

function addNotification(text) {
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  DB.notifications.unshift({ text, time: timeStr });
  const count = document.getElementById("notifCount");
  if (count) count.textContent = DB.notifications.length;
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
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

// Form Handlers
function handleAddDoctor(e) {
  if (e) e.preventDefault();
  const newDoc = {
    id: `DOC-${Math.floor(100 + Math.random() * 900)}`,
    name: document.getElementById("docName")?.value || "Dr. Unknown",
    dept: document.getElementById("docDept")?.value || "General",
    degrees: document.getElementById("docDegrees")?.value || "MBBS",
    fee: Number(document.getElementById("docFee")?.value || 1000),
    photo: document.getElementById("docPhoto")?.value || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80"
  };

  DB.doctors.push(newDoc);
  addNotification(`Doctor ${newDoc.name} registered.`);
  closeModal("addDoctorModal");
  populateDropdowns();
  renderDoctors();
}

function handleAddPatient(e) {
  if (e) e.preventDefault();
  const name = document.getElementById("patName")?.value || "Patient";
  const contact = document.getElementById("patContact")?.value || "01700000000";

  const newPat = {
    mrn: `BD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    name: name,
    contact: contact,
    age: document.getElementById("patAge")?.value || 30,
    gender: document.getElementById("patGender")?.value || "Male",
    history: document.getElementById("patHistory")?.value || "N/A",
    allergies: document.getElementById("patAllergies")?.value || "None"
  };

  DB.patients.push(newPat);

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
  if (e) e.preventDefault();
  const app = {
    id: `APT-${Math.floor(100 + Math.random() * 900)}`,
    patientName: document.getElementById("appPatientName")?.value || "Patient",
    doctorName: document.getElementById("appDoctorSelect")?.value || "Doctor",
    dept: "Specialist OPD",
    dateTime: document.getElementById("appDateTime")?.value.replace("T", " ") || "2026-08-29 10:00 AM",
    status: "Scheduled"
  };

  DB.appointments.unshift(app);
  addNotification(`Appointment ${app.id} booked for ${app.patientName}.`);
  closeModal("bookAppointmentModal");
  renderAppointments();
}

function handleGenerateBill(e) {
  if (e) e.preventDefault();
  const inv = {
    id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
    mrn: document.getElementById("billMrn")?.value || "BD-2026-0000",
    patientName: document.getElementById("billName")?.value || "Patient",
    service: document.getElementById("billService")?.value || "OPD Service",
    amount: document.getElementById("billAmount")?.value || 1000,
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
  const nav = document.getElementById("sidebarNav");
  const overlay = document.getElementById("sidebarOverlay");
  if (nav) nav.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

function closeSidebar() {
  const nav = document.getElementById("sidebarNav");
  const overlay = document.getElementById("sidebarOverlay");
  if (nav) nav.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}
