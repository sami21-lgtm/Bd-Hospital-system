/* CarePulse HMS Core Application Engine - Complete JS with All 36 Doctor Credentials */

const DB = {
  users: [
    // Admin
    { id: "admin@hospital.com", alias: "admin", pass: "admin123", name: "Md. Emtiaz Hossian Sami", role: "admin", roleTitle: "System Administrator", avatar: "Md. EmTIAZ hOSSAIN sAMI LOGO.png" },
    
    // Other Staff & Patients
    { id: "nurse@hospital.com", alias: "nurse1", pass: "nurse123", name: "Sr. Sabina Yasmin", role: "nurse", roleTitle: "Ward Nurse Station", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80" },
    { id: "patient@hospital.com", alias: "patient1", pass: "patient123", name: "Tariqul Islam", phone: "01711223344", role: "patient", roleTitle: "Patient Portal Account", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { id: "reception@hospital.com", alias: "reception", pass: "reception123", name: "Nusrat Jahan", role: "receptionist", roleTitle: "Front Desk Officer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
    { id: "pharma@hospital.com", alias: "pharma", pass: "pharma123", name: "Mahmudur Rahman", role: "pharmacist", roleTitle: "Lead Pharmacist", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80" },

    // All 36 Doctors Registered Accounts (Pass: doctor123)
    { id: "doc101@hospital.com", alias: "doc101", pass: "doctor123", name: "Prof. Dr. Kazi Ashraful Alam", role: "doctor", roleTitle: "Specialist Doctor (General & Laparoscopic Surgery)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc102@hospital.com", alias: "doc102", pass: "doctor123", name: "Dr. Ariful Islam", role: "doctor", roleTitle: "Specialist Doctor (Urology)", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc103@hospital.com", alias: "doc103", pass: "doctor123", name: "Dr. Nusrat Chowdury", role: "doctor", roleTitle: "Specialist Doctor (Obstetrics & Gynecology)", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80" },
    { id: "doc104@hospital.com", alias: "doc104", pass: "doctor123", name: "Prof. Dr. Mahbubur Rahman", role: "doctor", roleTitle: "Specialist Doctor (Cardiac Surgery)", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" },
    { id: "doc105@hospital.com", alias: "doc105", pass: "doctor123", name: "Dr. Shahriar Nabi", role: "doctor", roleTitle: "Specialist Doctor (Vascular Surgery)", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80" },
    { id: "doc106@hospital.com", alias: "doc106", pass: "doctor123", name: "Dr. Imran Khan", role: "doctor", roleTitle: "Specialist Doctor (Respiratory Medicine)", avatar: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=100&auto=format&fit=crop&q=80" },
    { id: "doc107@hospital.com", alias: "doc107", pass: "doctor123", name: "Dr. Tariqul Islam", role: "doctor", roleTitle: "Specialist Doctor (Colorectal Surgery)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc108@hospital.com", alias: "doc108", pass: "doctor123", name: "Dr. Mehzabin Ahmed", role: "doctor", roleTitle: "Specialist Doctor (Dental and Maxillofacial Surgery)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },
    { id: "doc109@hospital.com", alias: "doc109", pass: "doctor123", name: "Dt. Rashida Parveen", role: "doctor", roleTitle: "Specialist Nutritionist (Nutrition & Dietetic Department)", avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc110@hospital.com", alias: "doc110", pass: "doctor123", name: "Dr. Ayesha Siddiqua", role: "doctor", roleTitle: "Specialist Doctor (Rheumatology)", avatar: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&auto=format&fit=crop&q=80" },
    { id: "doc111@hospital.com", alias: "doc111", pass: "doctor123", name: "Dr. Rafiqul Hassan", role: "doctor", roleTitle: "Specialist Doctor (Anaesthesia)", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc112@hospital.com", alias: "doc112", pass: "doctor123", name: "Prof. Dr. Syed Shamsul Huda", role: "doctor", roleTitle: "Specialist Doctor (Cardiology)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc113@hospital.com", alias: "doc113", pass: "doctor123", name: "Dr. Tanvir Mahmud", role: "doctor", roleTitle: "Specialist Doctor (Pediatric & Neonatology)", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" },
    { id: "doc114@hospital.com", alias: "doc114", pass: "doctor123", name: "Dr. Mahbub Alam", role: "doctor", roleTitle: "Specialist Doctor (ENT, Head & Neck Surgery)", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80" },
    { id: "doc115@hospital.com", alias: "doc115", pass: "doctor123", name: "Dr. Anisur Rahman", role: "doctor", roleTitle: "Specialist Doctor (Orthopedics, Arthroscopy & Joint Replacement)", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc116@hospital.com", alias: "doc116", pass: "doctor123", name: "Dr. Bilkis Jahan", role: "doctor", roleTitle: "Specialist Doctor (Clinical Hematology)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },
    { id: "doc117@hospital.com", alias: "doc117", pass: "doctor123", name: "Dr. Kamrul Islam", role: "doctor", roleTitle: "Specialist Doctor (Surgical Oncology)", avatar: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=100&auto=format&fit=crop&q=80" },
    { id: "doc118@hospital.com", alias: "doc118", pass: "doctor123", name: "Dr. Moniruzzaman", role: "doctor", roleTitle: "Specialist Doctor (Physical Medicine)", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" },
    { id: "doc119@hospital.com", alias: "doc119", pass: "doctor123", name: "Dr. Sharmin Akter", role: "doctor", roleTitle: "Specialist Doctor (Plastic & Aesthetic Surgery)", avatar: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=100&auto=format&fit=crop&q=80" },
    { id: "doc120@hospital.com", alias: "doc120", pass: "doctor123", name: "Prof. Dr. Kamrul Hasan", role: "doctor", roleTitle: "Specialist Doctor (Gastroenterology & Hepatology)", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80" },
    { id: "doc121@hospital.com", alias: "doc121", pass: "doctor123", name: "Dr. Sabina Yeasmin", role: "doctor", roleTitle: "Specialist Doctor (Dermatology)", avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc122@hospital.com", alias: "doc122", pass: "doctor123", name: "Dr. Shamsul Alam", role: "doctor", roleTitle: "Specialist Doctor (Neurosurgery)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc123@hospital.com", alias: "doc123", pass: "doctor123", name: "Dr. Asaduzzaman", role: "doctor", roleTitle: "Specialist Doctor (Thoracic Surgery)", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc124@hospital.com", alias: "doc124", pass: "doctor123", name: "Dr. Mahmudul Haq", role: "doctor", roleTitle: "Specialist Doctor (ICU)", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" },
    { id: "doc125@hospital.com", alias: "doc125", pass: "doctor123", name: "Dr. Nargis Sultana", role: "doctor", roleTitle: "Specialist Doctor (Laboratory Medicine)", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80" },
    { id: "doc126@hospital.com", alias: "doc126", pass: "doctor123", name: "Dr. Faisal Ahmed", role: "doctor", roleTitle: "Specialist Doctor (Pediatric Surgery)", avatar: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=100&auto=format&fit=crop&q=80" },
    { id: "doc127@hospital.com", alias: "doc127", pass: "doctor123", name: "Prof. Dr. Zahirul Islam", role: "doctor", roleTitle: "Specialist Doctor (Hepatobiliary & Pancreatic Surgery)", avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&auto=format&fit=crop&q=80" },
    { id: "doc128@hospital.com", alias: "doc128", pass: "doctor123", name: "Dr. Sadia Chowdhury", role: "doctor", roleTitle: "Specialist Doctor (Pediatric Cardiology)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },
    { id: "doc129@hospital.com", alias: "doc129", pass: "doctor123", name: "Dr. Nahid Sultana", role: "doctor", roleTitle: "Specialist Doctor (Oncology)", avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80" },
    { id: "doc130@hospital.com", alias: "doc130", pass: "doctor123", name: "Dr. Tariqul Islam", role: "doctor", roleTitle: "Specialist Doctor (Nephrology)", avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc131@hospital.com", alias: "doc131", pass: "doctor123", name: "Dr. Rehana Parveen", role: "doctor", roleTitle: "Specialist Doctor (Diabetes & Endocrinology)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },
    { id: "doc132@hospital.com", alias: "doc132", pass: "doctor123", name: "Dr. Farhana Yasmin", role: "doctor", roleTitle: "Specialist Doctor (Neurology)", avatar: "https://images.unsplash.com/photo-1594824813566-88855ce78c00?w=100&auto=format&fit=crop&q=80" },
    { id: "doc133@hospital.com", alias: "doc133", pass: "doctor123", name: "Prof. Dr. M. A. Rashid", role: "doctor", roleTitle: "Specialist Doctor (Internal Medicine)", avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80" },
    { id: "doc134@hospital.com", alias: "doc134", pass: "doctor123", name: "Dr. Khairul Bashar", role: "doctor", roleTitle: "Specialist Doctor (Radiology & Imaging)", avatar: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=100&auto=format&fit=crop&q=80" },
    { id: "doc135@hospital.com", alias: "doc135", pass: "doctor123", name: "Dr. Sajjad Hossain", role: "doctor", roleTitle: "Specialist Doctor (Psychiatry)", avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80" },
    { id: "doc136@hospital.com", alias: "doc136", pass: "doctor123", name: "Dr. Farzana Parveen", role: "doctor", roleTitle: "Specialist Doctor (Breast, Colorectal & Laparoscopic Surgery)", avatar: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=100&auto=format&fit=crop&q=80" }
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
    { mrn: "BD-2026-9903", name: "Abdur Rahim", contact: "01912345678", age: 62, gender: "Male", history: "Type 2 Diabetes, BP: 140/90", allergies: "None" },
    { mrn: "BD-2026-9904", name: "Nasreen Sultana", contact: "01611223344", age: 29, gender: "Female", history: "Migraine, BP: 118/78", allergies: "Aspirin" }
  ],

  // Complete Appointment Queue for All 36 Doctors
  appointments: [
    { id: "APT-801", patientName: "Tariqul Islam", doctorName: "Prof. Dr. Kazi Ashraful Alam", dept: "General & Laparoscopic Surgery", dateTime: "2026-08-29 09:00 AM", status: "Scheduled" },
    { id: "APT-802", patientName: "Selina Begum", doctorName: "Dr. Ariful Islam", dept: "Urology", dateTime: "2026-08-29 09:30 AM", status: "Scheduled" },
    { id: "APT-803", patientName: "Abdur Rahim", doctorName: "Dr. Nusrat Chowdury", dept: "Obstetrics & Gynecology", dateTime: "2026-08-29 10:00 AM", status: "Scheduled" },
    { id: "APT-804", patientName: "Nasreen Sultana", doctorName: "Prof. Dr. Mahbubur Rahman", dept: "Cardiac Surgery", dateTime: "2026-08-29 10:30 AM", status: "Scheduled" },
    { id: "APT-805", patientName: "Tariqul Islam", doctorName: "Dr. Shahriar Nabi", dept: "Vascular Surgery", dateTime: "2026-08-29 11:00 AM", status: "Scheduled" },
    { id: "APT-806", patientName: "Selina Begum", doctorName: "Dr. Imran Khan", dept: "Respiratory Medicine", dateTime: "2026-08-29 11:30 AM", status: "Scheduled" },
    { id: "APT-807", patientName: "Abdur Rahim", doctorName: "Dr. Tariqul Islam", dept: "Colorectal Surgery", dateTime: "2026-08-29 12:00 PM", status: "Scheduled" },
    { id: "APT-808", patientName: "Nasreen Sultana", doctorName: "Dr. Mehzabin Ahmed", dept: "Dental and Maxillofacial Surgery", dateTime: "2026-08-29 02:00 PM", status: "Scheduled" },
    { id: "APT-809", patientName: "Tariqul Islam", doctorName: "Dt. Rashida Parveen", dept: "Nutrition & Dietetic Department", dateTime: "2026-08-29 02:30 PM", status: "Scheduled" },
    { id: "APT-810", patientName: "Selina Begum", doctorName: "Dr. Ayesha Siddiqua", dept: "Rheumatology", dateTime: "2026-08-29 03:00 PM", status: "Scheduled" },
    { id: "APT-811", patientName: "Abdur Rahim", doctorName: "Dr. Rafiqul Hassan", dept: "Anaesthesia", dateTime: "2026-08-29 03:30 PM", status: "Scheduled" },
    { id: "APT-812", patientName: "Nasreen Sultana", doctorName: "Prof. Dr. Syed Shamsul Huda", dept: "Cardiology", dateTime: "2026-08-29 04:00 PM", status: "Scheduled" },
    { id: "APT-813", patientName: "Tariqul Islam", doctorName: "Dr. Tanvir Mahmud", dept: "Pediatric & Neonatology", dateTime: "2026-08-29 04:30 PM", status: "Scheduled" },
    { id: "APT-814", patientName: "Selina Begum", doctorName: "Dr. Mahbub Alam", dept: "ENT, Head & Neck Surgery", dateTime: "2026-08-29 05:00 PM", status: "Scheduled" },
    { id: "APT-815", patientName: "Abdur Rahim", doctorName: "Dr. Anisur Rahman", dept: "Orthopedics, Arthroscopy & Joint Replacement", dateTime: "2026-08-29 05:30 PM", status: "Scheduled" },
    { id: "APT-816", patientName: "Nasreen Sultana", doctorName: "Dr. Bilkis Jahan", dept: "Clinical Hematology", dateTime: "2026-08-29 06:00 PM", status: "Scheduled" },
    { id: "APT-817", patientName: "Tariqul Islam", doctorName: "Dr. Kamrul Islam", dept: "Surgical Oncology", dateTime: "2026-08-30 09:00 AM", status: "Scheduled" },
    { id: "APT-818", patientName: "Selina Begum", doctorName: "Dr. Moniruzzaman", dept: "Physical Medicine", dateTime: "2026-08-30 09:30 AM", status: "Scheduled" },
    { id: "APT-819", patientName: "Abdur Rahim", doctorName: "Dr. Sharmin Akter", dept: "Plastic & Aesthetic Surgery", dateTime: "2026-08-30 10:00 AM", status: "Scheduled" },
    { id: "APT-820", patientName: "Nasreen Sultana", doctorName: "Prof. Dr. Kamrul Hasan", dept: "Gastroenterology & Hepatology", dateTime: "2026-08-30 10:30 AM", status: "Scheduled" },
    { id: "APT-821", patientName: "Tariqul Islam", doctorName: "Dr. Sabina Yeasmin", dept: "Dermatology", dateTime: "2026-08-30 11:00 AM", status: "Scheduled" },
    { id: "APT-822", patientName: "Selina Begum", doctorName: "Dr. Shamsul Alam", dept: "Neurosurgery", dateTime: "2026-08-30 11:30 AM", status: "Scheduled" },
    { id: "APT-823", patientName: "Abdur Rahim", doctorName: "Dr. Asaduzzaman", dept: "Thoracic Surgery", dateTime: "2026-08-30 12:00 PM", status: "Scheduled" },
    { id: "APT-824", patientName: "Nasreen Sultana", doctorName: "Dr. Mahmudul Haq", dept: "ICU", dateTime: "2026-08-30 02:00 PM", status: "Scheduled" },
    { id: "APT-825", patientName: "Tariqul Islam", doctorName: "Dr. Nargis Sultana", dept: "Laboratory Medicine", dateTime: "2026-08-30 02:30 PM", status: "Scheduled" },
    { id: "APT-826", patientName: "Selina Begum", doctorName: "Dr. Faisal Ahmed", dept: "Pediatric Surgery", dateTime: "2026-08-30 03:00 PM", status: "Scheduled" },
    { id: "APT-827", patientName: "Abdur Rahim", doctorName: "Prof. Dr. Zahirul Islam", dept: "Hepatobiliary & Pancreatic Surgery", dateTime: "2026-08-30 03:30 PM", status: "Scheduled" },
    { id: "APT-828", patientName: "Nasreen Sultana", doctorName: "Dr. Sadia Chowdhury", dept: "Pediatric Cardiology", dateTime: "2026-08-30 04:00 PM", status: "Scheduled" },
    { id: "APT-829", patientName: "Tariqul Islam", doctorName: "Dr. Nahid Sultana", dept: "Oncology", dateTime: "2026-08-30 04:30 PM", status: "Scheduled" },
    { id: "APT-830", patientName: "Selina Begum", doctorName: "Dr. Tariqul Islam", dept: "Nephrology", dateTime: "2026-08-30 05:00 PM", status: "Scheduled" },
    { id: "APT-831", patientName: "Abdur Rahim", doctorName: "Dr. Rehana Parveen", dept: "Diabetes & Endocrinology", dateTime: "2026-08-30 05:30 PM", status: "Scheduled" },
    { id: "APT-832", patientName: "Nasreen Sultana", doctorName: "Dr. Farhana Yasmin", dept: "Neurology", dateTime: "2026-08-30 06:00 PM", status: "Scheduled" },
    { id: "APT-833", patientName: "Tariqul Islam", doctorName: "Prof. Dr. M. A. Rashid", dept: "Internal Medicine", dateTime: "2026-08-31 09:00 AM", status: "Scheduled" },
    { id: "APT-834", patientName: "Selina Begum", doctorName: "Dr. Khairul Bashar", dept: "Radiology & Imaging", dateTime: "2026-08-31 09:30 AM", status: "Scheduled" },
    { id: "APT-835", patientName: "Abdur Rahim", doctorName: "Dr. Sajjad Hossain", dept: "Psychiatry", dateTime: "2026-08-31 10:00 AM", status: "Scheduled" },
    { id: "APT-836", patientName: "Nasreen Sultana", doctorName: "Dr. Farzana Parveen", dept: "Breast, Colorectal & Laparoscopic Surgery", dateTime: "2026-08-31 10:30 AM", status: "Scheduled" }
  ],

  prescriptions: [
    { id: "RX-501", patientName: "Tariqul Islam", doctorName: "Prof. Dr. Syed Shamsul Huda", date: "2026-08-29", meds: "Tab. Ecospirin 75mg (1-0-0), Tab. Atorvastatin 20mg (0-0-1)", advice: "Low salt diet, walk 30 mins daily" }
  ],

  labTests: [
    { id: "LAB-301", patientName: "Tariqul Islam", testName: "Lipid Profile & ECG", doctorName: "Prof. Dr. Syed Shamsul Huda", status: "Completed", result: "Total Chol: 210 mg/dL, ECG Normal" },
    { id: "LAB-302", patientName: "Selina Begum", testName: "Chest X-Ray & Spirometry", doctorName: "Dr. Imran Khan", status: "Pending", result: "Awaiting Lab Technician Input" }
  ],

  pharmacy: [
    { name: "Tab. Sergel 20mg", stock: 450, unit: "Pills" },
    { name: "Tab. Napa Extra 500mg", stock: 1200, unit: "Pills" },
    { name: "Syp. Tuzid 100ml", stock: 85, unit: "Bottles" },
    { name: "Inj. Ceftriaxone 1g", stock: 150, unit: "Vials" }
  ],

  cabins: [
    { number: "Cabin 501 (VIP)", status: "Occupied", patient: "Abdur Rahim" },
    { number: "Cabin 502 (Deluxe)", status: "Vacant", patient: "N/A" },
    { number: "ICU Bed 03", status: "Occupied", patient: "Emergency Patient" },
    { number: "Cabin 504 (Standard)", status: "Vacant", patient: "N/A" }
  ],

  accounts: {
    totalRevenue: "485,000 BDT",
    pendingBills: "42,500 BDT",
    todayIncome: "38,500 BDT"
  }
};

// Global App State Variables
let currentUser = null;
let doctorAttendance = true;

// Initialize System on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  autoFillCredentials('admin');
  populateDropdowns();
  restoreUserSession();
});

// Dynamically Extract & Populate Dropdowns from DB.doctors
function populateDropdowns() {
  const docSelect = document.getElementById("appDoctorSelect");
  const docDeptSelect = document.getElementById("docDept");

  if (docSelect) {
    docSelect.innerHTML = DB.doctors.map(d => `<option value="${d.name}">${d.name} (${d.dept})</option>`).join("");
  }

  if (docDeptSelect) {
    const depts = [...new Set(DB.doctors.map(d => d.dept))];
    docDeptSelect.innerHTML = depts.map(dept => `<option value="${dept}">${dept}</option>`).join("");
  }
}

// Session Management
function restoreUserSession() {
  const savedUser = localStorage.getItem("carepulse_active_user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    showMainAppUI();
  } else {
    showAuthUI();
  }
}

function autoFillCredentials(roleKey) {
  const userMap = {
    admin: { id: "admin@hospital.com", pass: "admin123" },
    doc101: { id: "doc101@hospital.com", pass: "doctor123" },
    nurse: { id: "nurse@hospital.com", pass: "nurse123" },
    patient: { id: "patient@hospital.com", pass: "patient123" },
    reception: { id: "reception@hospital.com", pass: "reception123" },
    pharma: { id: "pharma@hospital.com", pass: "pharma123" }
  };
  
  const creds = userMap[roleKey] || userMap['admin'];
  const emailInput = document.getElementById("loginEmail");
  const passInput = document.getElementById("loginPassword");
  
  if (emailInput && passInput) {
    emailInput.value = creds.id;
    passInput.value = creds.pass;
  }
}

function handleUserLogin(event) {
  if (event) event.preventDefault();
  const inputId = document.getElementById("loginEmail")?.value.trim().toLowerCase();
  const inputPass = document.getElementById("loginPassword")?.value.trim();

  const user = DB.users.find(u => 
    (u.id.toLowerCase() === inputId || u.alias.toLowerCase() === inputId) && u.pass === inputPass
  );

  if (user) {
    currentUser = user;
    localStorage.setItem("carepulse_active_user", JSON.stringify(user));
    showMainAppUI();
  } else {
    alert("Invalid credentials! Please verify email/username and password.");
  }
}

function handlePatientPasswordRecovery(e) {
  if(e) e.preventDefault();
  const phone = document.getElementById("recoverPhone")?.value.trim();
  const found = DB.users.find(u => u.role === "patient" && u.phone === phone);
  
  if(found) {
    alert(`Account Recovery Success!\n\nPatient Name: ${found.name}\nLogin ID: ${found.id}\nPassword: ${found.pass}`);
  } else {
    alert("No registered patient account found with this phone number!");
  }
}

function handleUserLogout() {
  currentUser = null;
  localStorage.removeItem("carepulse_active_user");
  showAuthUI();
}

function showAuthUI() {
  document.getElementById("authContainer")?.classList.remove("d-none");
  document.getElementById("mainAppContainer")?.classList.add("d-none");
}

function showMainAppUI() {
  document.getElementById("authContainer")?.classList.add("d-none");
  document.getElementById("mainAppContainer")?.classList.remove("d-none");
  
  updateUIHeader();
  buildSidebarMenu();
  switchView(getDefaultViewForRole(currentUser.role));
}

function updateUIHeader() {
  if (!currentUser) return;
  const avatarImg = document.getElementById("userAvatarImg");
  const userNameEl = document.getElementById("userNameDisplay");
  const userRoleEl = document.getElementById("userRoleDisplay");

  if (avatarImg) avatarImg.src = currentUser.avatar;
  if (userNameEl) userNameEl.innerText = currentUser.name;
  if (userRoleEl) userRoleEl.innerText = currentUser.roleTitle || currentUser.role.toUpperCase();
}

function getDefaultViewForRole(role) {
  switch(role) {
    case "admin": return "view-admin-dashboard";
    case "doctor": return "view-consultation";
    case "nurse": return "view-beds";
    case "patient": return "view-appointments";
    case "receptionist": return "view-appointments";
    case "pharmacist": return "view-pharmacy";
    default: return "view-admin-dashboard";
  }
}

function buildSidebarMenu() {
  const menuContainer = document.getElementById("sidebarMenuNav");
  if (!menuContainer) return;

  const role = currentUser.role;
  let links = [];

  if (role === "admin") {
    links = [
      { id: "view-admin-dashboard", label: "Dashboard", icon: "bi-speedometer2" },
      { id: "view-appointments", label: "Appointments Queue", icon: "bi-calendar-check" },
      { id: "view-doctors", label: "Doctor Directory", icon: "bi-person-badge" },
      { id: "view-patients", label: "Patient Records", icon: "bi-people" },
      { id: "view-consultation", label: "Doctor's Desk", icon: "bi-stethoscope" },
      { id: "view-prescriptions", label: "Prescriptions", icon: "bi-file-earmark-medical" },
      { id: "view-lab", label: "Laboratory", icon: "bi-journal-check" },
      { id: "view-pharmacy", label: "Pharmacy", icon: "bi-capsule" },
      { id: "view-beds", label: "Cabin & Wards", icon: "bi-hospital" },
      { id: "view-accounts", label: "Financial Accounts", icon: "bi-cash-stack" }
    ];
  } else if (role === "doctor") {
    links = [
      { id: "view-consultation", label: "My Consultation Desk", icon: "bi-stethoscope" },
      { id: "view-appointments", label: "My Schedule", icon: "bi-calendar-check" },
      { id: "view-patients", label: "Patient List", icon: "bi-people" },
      { id: "view-prescriptions", label: "Prescriptions History", icon: "bi-file-earmark-medical" }
    ];
  } else if (role === "patient") {
    links = [
      { id: "view-appointments", label: "My Appointments", icon: "bi-calendar-check" },
      { id: "view-prescriptions", label: "My Prescriptions", icon: "bi-file-earmark-medical" },
      { id: "view-doctors", label: "Find Doctors", icon: "bi-search" }
    ];
  } else if (role === "receptionist") {
    links = [
      { id: "view-appointments", label: "Appointment Management", icon: "bi-calendar-check" },
      { id: "view-patients", label: "Patient Admission/Records", icon: "bi-people" },
      { id: "view-doctors", label: "Doctor Schedule", icon: "bi-person-badge" },
      { id: "view-beds", label: "Cabin Allocation", icon: "bi-hospital" }
    ];
  } else if (role === "nurse") {
    links = [
      { id: "view-beds", label: "Ward & Cabin Monitoring", icon: "bi-hospital" },
      { id: "view-patients", label: "Patient List", icon: "bi-people" },
      { id: "view-lab", label: "Lab Sample Collector", icon: "bi-journal-check" }
    ];
  } else if (role === "pharmacist") {
    links = [
      { id: "view-pharmacy", label: "Medicine Inventory", icon: "bi-capsule" },
      { id: "view-prescriptions", label: "Dispense Orders", icon: "bi-file-earmark-medical" }
    ];
  }

  menuContainer.innerHTML = links.map(link => `
    <li class="nav-item">
      <a class="nav-link text-white py-2 px-3 mb-1 rounded" href="#" id="link-${link.id}" onclick="switchView('${link.id}')">
        <i class="${link.icon} me-2"></i> ${link.label}
      </a>
    </li>
  `).join("");
}

function switchView(viewId) {
  document.querySelectorAll(".app-view").forEach(el => el.classList.add("d-none"));
  
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.remove("d-none");
  }

  document.querySelectorAll("#sidebarMenuNav .nav-link").forEach(el => el.classList.remove("active", "bg-primary"));
  const activeLink = document.getElementById(`link-${viewId}`);
  if (activeLink) activeLink.classList.add("active", "bg-primary");

  renderViewData(viewId);
}

function renderViewData(viewId) {
  switch(viewId) {
    case "view-admin-dashboard": renderAdminDashboard(); break;
    case "view-appointments": renderAppointments(); break;
    case "view-patients": renderPatients(); break;
    case "view-doctors": renderDoctors(); break;
    case "view-consultation": renderConsultationDesk(); break;
    case "view-prescriptions": renderPrescriptions(); break;
    case "view-lab": renderLaboratory(); break;
    case "view-pharmacy": renderPharmacy(); break;
    case "view-beds": renderBeds(); break;
    case "view-accounts": renderAccounts(); break;
  }
}

// Data Rendering Functions
function renderAdminDashboard() {
  const container = document.getElementById("adminDashboardContent");
  if(!container) return;

  container.innerHTML = `
    <div class="row g-3 mb-4">
      <div class="col-md-3">
        <div class="card bg-primary text-white p-3 rounded shadow-sm">
          <h5>Total Doctors</h5>
          <h2>${DB.doctors.length}</h2>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-success text-white p-3 rounded shadow-sm">
          <h5>Today's Appointments</h5>
          <h2>${DB.appointments.length}</h2>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-warning text-dark p-3 rounded shadow-sm">
          <h5>Total Patients</h5>
          <h2>${DB.patients.length}</h2>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-info text-white p-3 rounded shadow-sm">
          <h5>Total Revenue</h5>
          <h2>${DB.accounts.totalRevenue}</h2>
        </div>
      </div>
    </div>
  `;
}

function renderAppointments() {
  const tbody = document.getElementById("appointmentsTableBody");
  if (!tbody) return;

  let list = DB.appointments;
  if (currentUser.role === "doctor") {
    list = list.filter(a => a.doctorName.toLowerCase().includes(currentUser.name.toLowerCase()));
  } else if (currentUser.role === "patient") {
    list = list.filter(a => a.patientName.toLowerCase() === currentUser.name.toLowerCase());
  }

  tbody.innerHTML = list.map(a => `
    <tr>
      <td>${a.id}</td>
      <td>${a.patientName}</td>
      <td>${a.doctorName}</td>
      <td>${a.dept}</td>
      <td>${a.dateTime}</td>
      <td><span class="badge ${a.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}">${a.status}</span></td>
      <td>
        ${a.status === 'Scheduled' ? `<button class="btn btn-sm btn-outline-success" onclick="completeAppointment('${a.id}')">Complete</button>` : '-'}
      </td>
    </tr>
  `).join("");
}

function completeAppointment(id) {
  const apt = DB.appointments.find(a => a.id === id);
  if (apt) {
    apt.status = "Completed";
    renderAppointments();
  }
}

function renderPatients() {
  const tbody = document.getElementById("patientsTableBody");
  if (!tbody) return;

  tbody.innerHTML = DB.patients.map(p => `
    <tr>
      <td>${p.mrn}</td>
      <td>${p.name}</td>
      <td>${p.age} / ${p.gender}</td>
      <td>${p.contact}</td>
      <td>${p.history}</td>
      <td><span class="badge bg-danger">${p.allergies}</span></td>
    </tr>
  `).join("");
}

function renderDoctors() {
  renderDoctorCards(DB.doctors);
}

function filterDoctors(dept, btnElement) {
  if (btnElement) {
    document.querySelectorAll(".dept-filter-btn").forEach(b => b.classList.remove("active", "btn-primary"));
    btnElement.classList.add("active", "btn-primary");
  }

  if (dept === 'All') {
    renderDoctorCards(DB.doctors);
  } else {
    const filtered = DB.doctors.filter(d => d.dept === dept);
    renderDoctorCards(filtered);
  }
}

function renderDoctorCards(list) {
  const container = document.getElementById("doctorsCardsContainer");
  if (!container) return;

  container.innerHTML = list.map(d => `
    <div class="col-md-4 mb-3">
      <div class="card h-100 shadow-sm border-0">
        <img src="${d.photo}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${d.name}">
        <div class="card-body">
          <h5 class="card-title text-primary">${d.name}</h5>
          <p class="card-text mb-1"><strong>Dept:</strong> ${d.dept}</p>
          <p class="card-text mb-1"><small>${d.degrees}</small></p>
          <p class="card-text text-success"><strong>Fee:</strong> ${d.fee} BDT</p>
        </div>
      </div>
    </div>
  `).join("");
}

function renderConsultationDesk() {
  const patientSelect = document.getElementById("consultationPatientSelect");
  if (patientSelect) {
    patientSelect.innerHTML = DB.patients.map(p => `<option value="${p.name}">${p.name} (${p.mrn})</option>`).join("");
  }
}

function loadConsultationPatient(patientName) {
  const patient = DB.patients.find(p => p.name === patientName);
  if (patient) {
    document.getElementById("patientVitalsDisplay").innerHTML = `
      <h6>Patient Information: ${patient.name}</h6>
      <p>Age/Gender: ${patient.age}/${patient.gender} | Contact: ${patient.contact}</p>
      <p>Vitals History: ${patient.history}</p>
    `;
  }
}

function toggleDoctorAttendance() {
  doctorAttendance = !doctorAttendance;
  const statusEl = document.getElementById("doctorAttendanceStatus");
  if (statusEl) {
    statusEl.className = doctorAttendance ? "badge bg-success" : "badge bg-secondary";
    statusEl.innerText = doctorAttendance ? "Available" : "Offline";
  }
}

function handleSavePrescription(e) {
  if (e) e.preventDefault();
  const patientName = document.getElementById("consultationPatientSelect")?.value;
  const meds = document.getElementById("prescriptionMeds")?.value;
  const advice = document.getElementById("prescriptionAdvice")?.value;

  const newRx = {
    id: `RX-${501 + DB.prescriptions.length}`,
    patientName,
    doctorName: currentUser ? currentUser.name : "Consultant Doctor",
    date: new Date().toISOString().split('T')[0],
    meds,
    advice
  };

  DB.prescriptions.push(newRx);
  alert("Prescription generated successfully!");
  switchView("view-prescriptions");
}

function renderPrescriptions() {
  const tbody = document.getElementById("prescriptionsTableBody");
  if (!tbody) return;

  let list = DB.prescriptions;
  if (currentUser.role === "patient") {
    list = list.filter(r => r.patientName.toLowerCase() === currentUser.name.toLowerCase());
  }

  tbody.innerHTML = list.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${r.patientName}</td>
      <td>${r.doctorName}</td>
      <td>${r.date}</td>
      <td>${r.meds}</td>
      <td><button class="btn btn-sm btn-outline-primary" onclick="printRx('${r.id}')"><i class="bi bi-printer"></i> Print</button></td>
    </tr>
  `).join("");
}

function printRx(rxId) {
  alert(`Printing Prescription ID: ${rxId}`);
}

function renderLaboratory() {
  const tbody = document.getElementById("labTableBody");
  if (!tbody) return;

  tbody.innerHTML = DB.labTests.map(l => `
    <tr>
      <td>${l.id}</td>
      <td>${l.patientName}</td>
      <td>${l.testName}</td>
      <td>${l.doctorName}</td>
      <td><span class="badge ${l.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}">${l.status}</span></td>
      <td>${l.result}</td>
      <td>${l.status === 'Pending' ? `<button class="btn btn-sm btn-success" onclick="completeLab('${l.id}')">Upload Result</button>` : '-'}</td>
    </tr>
  `).join("");
}

function completeLab(id) {
  const test = DB.labTests.find(l => l.id === id);
  if (test) {
    test.status = "Completed";
    test.result = "Sample Examined: Parameters within normal limits.";
    renderLaboratory();
  }
}

function renderPharmacy() {
  const tbody = document.getElementById("pharmacyTableBody");
  if (!tbody) return;

  tbody.innerHTML = DB.pharmacy.map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.stock} ${p.unit}</td>
      <td><button class="btn btn-sm btn-outline-success" onclick="restockMedicine('${p.name}')">+ Restock</button></td>
    </tr>
  `).join("");
}

function restockMedicine(name) {
  const item = DB.pharmacy.find(p => p.name === name);
  if (item) {
    item.stock += 50;
    renderPharmacy();
  }
}

function renderBeds() {
  const container = document.getElementById("bedsContainer");
  if (!container) return;

  container.innerHTML = DB.cabins.map((c, idx) => `
    <div class="col-md-3 mb-3">
      <div class="card border-0 shadow-sm ${c.status === 'Occupied' ? 'bg-light-danger border-start border-danger border-4' : 'bg-light-success border-start border-success border-4'}">
        <div class="card-body">
          <h5>${c.number}</h5>
          <p class="mb-1">Status: <strong>${c.status}</strong></p>
          <p class="mb-2"><small>Patient: ${c.patient}</small></p>
          <button class="btn btn-sm ${c.status === 'Occupied' ? 'btn-outline-danger' : 'btn-outline-success'}" onclick="toggleCabinStatus(${idx})">
            ${c.status === 'Occupied' ? 'Release Cabin' : 'Allocate Patient'}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function toggleCabinStatus(index) {
  const cabin = DB.cabins[index];
  if (cabin) {
    if (cabin.status === "Occupied") {
      cabin.status = "Vacant";
      cabin.patient = "N/A";
    } else {
      cabin.status = "Occupied";
      cabin.patient = "Admitted Patient";
    }
    renderBeds();
  }
}

function renderAccounts() {
  const el = document.getElementById("accountsSummaryContent");
  if (!el) return;

  el.innerHTML = `
    <div class="row g-3">
      <div class="col-md-4"><div class="p-3 bg-white shadow-sm rounded"><h5>Total Revenue</h5><h4>${DB.accounts.totalRevenue}</h4></div></div>
      <div class="col-md-4"><div class="p-3 bg-white shadow-sm rounded"><h5>Pending Invoices</h5><h4>${DB.accounts.pendingBills}</h4></div></div>
      <div class="col-md-4"><div class="p-3 bg-white shadow-sm rounded"><h5>Today's Collection</h5><h4>${DB.accounts.todayIncome}</h4></div></div>
    </div>
  `;
}
