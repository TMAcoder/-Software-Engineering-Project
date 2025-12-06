// --- DỮ LIỆU MÓN ĂN ---
let menuData = {
  "pho-bo": {
    title: "Phở Bò Tái Nạm",
    price: "45.000đ",
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop",
    desc: "Hương vị truyền thống với nước dùng ninh từ xương ống trong 24h.",
    isAvailable: true,
  },
  "ga-chien": {
    title: "Gà Chiên Mắm Tỏi",
    price: "120.000đ",
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    desc: "Gà ta thả vườn chắc thịt, chiên giòn da và sốt nước mắm tỏi ớt.",
    isAvailable: true,
  },
  "lau-thai": {
    title: "Lẩu Thái Hải Sản",
    price: "250.000đ",
    img: "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=800&auto=format&fit=crop",
    desc: "Nồi lẩu chua cay chuẩn vị Thái với tôm sú, mực ống, nghêu.",
    isAvailable: true,
  },
  "nom-sua": {
    title: "Nộm Sứa Biển",
    price: "65.000đ",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    desc: "Sứa biển tươi giòn sần sật, trộn cùng xoài xanh, cà rốt.",
    isAvailable: true,
  },
  "com-chien": {
    title: "Cơm Chiên Dương Châu",
    price: "50.000đ",
    img: "https://daotaobeptruong.vn/wp-content/uploads/2021/02/ban-com-chien-duong-chau.jpg",
    desc: "Cơm chiên hạt vàng óng, tơi xốp, kết hợp với lạp xưởng.",
    isAvailable: true,
  },
  bia: {
    title: "Bia & Đồ Uống",
    price: "15.000đ - 25.000đ",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    desc: "Đa dạng các loại bia chai và nước ngọt các loại.",
    isAvailable: true,
  },
};

// --- DỮ LIỆU BÀN ---
let tableData = [
  { id: 1, name: "Bàn 01", area: "Tầng 1", status: "empty" },
  { id: 2, name: "Bàn 02", area: "Tầng 1", status: "occupied" },
  { id: 3, name: "Bàn 03", area: "Tầng 1", status: "empty" },
  { id: 4, name: "Bàn 04", area: "Tầng 1", status: "reserved" },
  { id: 5, name: "Bàn 05", area: "Tầng 2", status: "empty" },
  { id: 6, name: "Bàn 06", area: "Tầng 2", status: "occupied" },
  { id: 7, name: "Bàn 07", area: "Tầng 2", status: "empty" },
  { id: 8, name: "Bàn VIP 1", area: "Sân vườn", status: "empty" },
  { id: 9, name: "Bàn VIP 2", area: "Sân vườn", status: "occupied" },
];

// --- DỮ LIỆU ĐƠN HÀNG ---
let ordersData = [
  {
    id: 101,
    table: "Bàn 02",
    time: "10:30",
    total: "295.000đ",
    status: "pending",
    items: [
      { name: "Lẩu Thái", qty: 1, price: "250k" },
      { name: "Bia", qty: 3, price: "45k" },
    ],
  },
  {
    id: 102,
    table: "Bàn 06",
    time: "11:15",
    total: "120.000đ",
    status: "completed",
    items: [{ name: "Gà Chiên", qty: 1, price: "120k" }],
  },
  {
    id: 103,
    table: "Mang về",
    time: "11:20",
    total: "45.000đ",
    status: "pending",
    items: [{ name: "Phở Bò", qty: 1, price: "45k" }],
  },
  {
    id: 104,
    table: "Bàn VIP 2",
    time: "11:45",
    total: "565.000đ",
    status: "pending",
    items: [
      { name: "Lẩu Thái", qty: 2, price: "500k" },
      { name: "Nộm Sứa", qty: 1, price: "65k" },
    ],
  },
];

// --- DỮ LIỆU NHÂN VIÊN (ĐÃ CẬP NHẬT THÔNG TIN CHI TIẾT) ---
let staffData = [
  {
    id: 1,
    name: "Đoàn Phạm Thanh Tú",
    role: "Phục vụ",
    status: "online",
    img: "https://maunailxinh.com/wp-content/uploads/2025/06/avatar-an-danh-1.jpg",
    info: { phone: "0901.234.567", dob: "1998", address: "Hà Nội" },
    schedule: "Ca Sáng (8:00 - 16:00) | T2 - T7",
    salary: { basic: "6.000.000", bonus: "500.000", total: "6.500.000" },
  },
  {
    id: 2,
    name: "Trần Ngọc Khánh Linh",
    role: "Thu ngân",
    status: "online",
    img: "https://maunailxinh.com/wp-content/uploads/2025/06/avatar-an-danh-1.jpg",
    info: { phone: "0912.345.678", dob: "1995", address: "Đà Nẵng" },
    schedule: "Ca Full (9:00 - 21:00) | T2 - T6",
    salary: { basic: "8.000.000", bonus: "1.000.000", total: "9.000.000" },
  },
  {
    id: 3,
    name: "Trần Đức Trung",
    role: "Đầu bếp",
    status: "offline",
    img: "https://maunailxinh.com/wp-content/uploads/2025/06/avatar-an-danh-1.jpg",
    info: { phone: "0987.654.321", dob: "1990", address: "HCM" },
    schedule: "Ca Gãy (10:00 - 14:00 & 17:00 - 22:00)",
    salary: { basic: "12.000.000", bonus: "2.000.000", total: "14.000.000" },
  },
  {
    id: 4,
    name: "Trần Chí Trung",
    role: "Bảo vệ",
    status: "online",
    img: "https://maunailxinh.com/wp-content/uploads/2025/06/avatar-an-danh-1.jpg",
    info: { phone: "0345.678.901", dob: "1985", address: "Hải Phòng" },
    schedule: "Ca Đêm (20:00 - 6:00) | T2 - CN",
    salary: { basic: "7.000.000", bonus: "300.000", total: "7.300.000" },
  },
];

// Dữ liệu biểu đồ
const chartData = {
  revenue: [
    { label: "Tiền mặt", value: 33, color: "#3b82f6", info: "5.200k" },
    { label: "CK", value: 53, color: "#ec4899", info: "8.500k" },
    { label: "Thẻ", value: 14, color: "#8b5cf6", info: "2.100k" },
  ],
  table: [
    { label: "Trống", value: 50, color: "#10b981", info: "12 bàn" },
    { label: "Có khách", value: 33, color: "#ec4899", info: "8 bàn" },
    { label: "Đặt trước", value: 17, color: "#3b82f6", info: "4 bàn" },
  ],
  order: [
    { label: "Tại bàn", value: 60, color: "#3b82f6", info: "45 đơn" },
    { label: "Mang về", value: 16, color: "#ec4899", info: "12 đơn" },
    { label: "App", value: 24, color: "#8b5cf6", info: "18 đơn" },
  ],
};

// Biến toàn cục
let notifications = [];
let currentDishId = null,
  currentTableId = null,
  currentOrderId = null;
let isEditing = false,
  isAddingNew = false,
  isEditingStaff = false,
  currentStaffId = null;

// --- 1. CORE FUNCTIONS (Tab Navigation) ---
function switchView(viewId) {
  document
    .querySelectorAll('[id^="view-"]')
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".menu-item")
    .forEach((el) => el.classList.remove("active"));

  document.getElementById("view-" + viewId).style.display = "block";

  const navItem = document.getElementById("nav-" + viewId);
  if (navItem) navItem.classList.add("active");

  const titles = {
    dashboard: "Tổng quan kinh doanh",
    menu: "Quản lý thực đơn",
    tables: "Quản lý bàn & QR",
    orders: "Quản lý đơn hàng",
    staff: "Quản lý nhân viên",
  };
  document.getElementById("page-header-title").innerText = titles[viewId];

  if (viewId === "orders") renderOrders();
  if (viewId === "staff") renderStaff();
}

// --- 2. QUẢN LÝ NHÂN VIÊN (NÂNG CẤP) ---
function renderStaff(data = staffData) {
  const container = document.getElementById("staff-grid-container");
  container.innerHTML = "";

  data.forEach((staff) => {
    const statusClass =
      staff.status === "online" ? "dot-online" : "dot-offline";
    const statusText = staff.status === "online" ? "Đang làm việc" : "Offline";

    // Tạo dữ liệu mặc định nếu thiếu để tránh lỗi hiển thị
    if (!staff.salary) {
      staff.info = { phone: "Chưa cập nhật", dob: "--", address: "--" };
      staff.schedule = "Chưa xếp lịch";
      staff.salary = { basic: "0", bonus: "0", total: "0" };
    }

    const card = `
            <div class="staff-card" id="staff-card-${staff.id}" onclick="toggleStaffExpand(${staff.id})">
                <img src="${staff.img}" class="staff-avatar">
                <div class="staff-info">
                    <div class="staff-name">${staff.name}</div>
                    <div class="staff-role">${staff.role}</div>
                    <div style="font-size: 0.8rem; margin-top: 8px; color: #64748b;">
                        <span class="staff-status-dot ${statusClass}"></span> ${statusText}
                    </div>
                </div>
                <div class="expand-icon"><i class="fas fa-chevron-down"></i></div>

                <div class="staff-details-expand" id="staff-details-${staff.id}">
                    <div class="detail-section">
                        <div class="detail-title"><i class="fas fa-id-card"></i> Thông tin</div>
                        <div class="detail-content">SĐT: ${staff.info.phone}<br>NS: ${staff.info.dob} - ĐC: ${staff.info.address}</div>
                    </div>
                    <div class="detail-section">
                        <div class="detail-title"><i class="fas fa-calendar-alt"></i> Lịch làm việc</div>
                        <div class="detail-content">${staff.schedule}</div>
                    </div>
                    <div class="detail-section" style="margin-bottom: 0;">
                        <div class="detail-title"><i class="fas fa-money-bill-wave"></i> Lương & Thưởng</div>
                        <div class="detail-content">
                            <div class="salary-row"><span>Cơ bản:</span> <span>${staff.salary.basic}</span></div>
                            <div class="salary-row"><span>Thưởng:</span> <span>${staff.salary.bonus}</span></div>
                            <div class="salary-row salary-total"><span>Thực nhận:</span> <span>${staff.salary.total}</span></div>
                        </div>
                    </div>
                </div>
                
                <div class="staff-actions">
                    <button class="icon-btn btn-edit" onclick="event.stopPropagation(); openEditStaff(${staff.id})"><i class="fas fa-pen"></i></button>
                    <button class="icon-btn btn-delete" onclick="event.stopPropagation(); deleteStaff(${staff.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
    container.innerHTML += card;
  });
}

function toggleStaffExpand(id) {
  document.getElementById(`staff-card-${id}`).classList.toggle("expanded");
}

function searchStaff() {
  const keyword = document
    .getElementById("staff-search-input")
    .value.toLowerCase();
  const filteredData = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(keyword) ||
      staff.role.toLowerCase().includes(keyword)
  );
  renderStaff(filteredData);
}

// Reset form về trạng thái trống
function resetStaffForm() {
  document.getElementById("staff-name-input").value = "";
  document.getElementById("staff-role-input").value = "Phục vụ";
  document.getElementById("staff-status-input").value = "online";
  document.getElementById("staff-img-input").value = "";
  document.getElementById("staff-preview-img").src =
    "https://via.placeholder.com/100?text=Avatar";

  // Reset các trường chi tiết
  document.getElementById("staff-phone").value = "";
  document.getElementById("staff-dob").value = "";
  document.getElementById("staff-address").value = "";
  document.getElementById("staff-schedule").value = "";
  document.getElementById("staff-salary-basic").value = "";
  document.getElementById("staff-salary-bonus").value = "";
}

function openStaffModal() {
  isEditingStaff = false;
  currentStaffId = null;
  document.getElementById("staff-modal-title").innerText = "Thêm nhân viên mới";
  resetStaffForm();
  document.getElementById("staffModal").style.display = "block";
}

// Mở form sửa và điền dữ liệu cũ vào
function openEditStaff(id) {
  const s = staffData.find((x) => x.id === id);
  if (s) {
    isEditingStaff = true;
    currentStaffId = id;

    document.getElementById("staff-modal-title").innerText =
      "Cập nhật thông tin";
    document.getElementById("staff-name-input").value = s.name;
    document.getElementById("staff-role-input").value = s.role;
    document.getElementById("staff-status-input").value = s.status;
    document.getElementById("staff-img-input").value = s.img;
    document.getElementById("staff-preview-img").src = s.img;

    // Điền thông tin chi tiết
    if (s.info) {
      document.getElementById("staff-phone").value = s.info.phone;
      document.getElementById("staff-dob").value = s.info.dob;
      document.getElementById("staff-address").value = s.info.address;
    }
    if (s.schedule)
      document.getElementById("staff-schedule").value = s.schedule;
    if (s.salary) {
      document.getElementById("staff-salary-basic").value = s.salary.basic;
      document.getElementById("staff-salary-bonus").value = s.salary.bonus;
    }

    document.getElementById("staffModal").style.display = "block";
  }
}

function saveStaff() {
  // Lấy dữ liệu từ form
  const name = document.getElementById("staff-name-input").value;
  const role = document.getElementById("staff-role-input").value;
  const status = document.getElementById("staff-status-input").value;
  let img = document.getElementById("staff-img-input").value;

  const phone = document.getElementById("staff-phone").value || "Chưa cập nhật";
  const dob = document.getElementById("staff-dob").value || "--";
  const address = document.getElementById("staff-address").value || "--";
  const schedule =
    document.getElementById("staff-schedule").value || "Chờ xếp lịch";
  const basicSal = document.getElementById("staff-salary-basic").value || "0";
  const bonusSal = document.getElementById("staff-salary-bonus").value || "0";

  // Tính tổng lương (Xử lý chuỗi tiền đơn giản để cộng)
  const totalSal = (
    parseInt(basicSal.replace(/\./g, "")) +
    parseInt(bonusSal.replace(/\./g, ""))
  ).toLocaleString("vi-VN");

  if (!name) {
    alert("Vui lòng nhập tên nhân viên!");
    return;
  }
  if (!img)
    img = `https://randomuser.me/api/portraits/${
      Math.random() > 0.5 ? "men" : "women"
    }/${Math.floor(Math.random() * 99)}.jpg`;

  const staffObj = {
    id: isEditingStaff ? currentStaffId : Date.now(),
    name,
    role,
    status,
    img,
    info: { phone, dob, address },
    schedule,
    salary: { basic: basicSal, bonus: bonusSal, total: totalSal },
  };

  if (isEditingStaff) {
    const index = staffData.findIndex((s) => s.id === currentStaffId);
    if (index !== -1) {
      staffData[index] = staffObj;
      addNotification(`Cập nhật nhân viên: ${name}`, "info");
    }
  } else {
    staffData.push(staffObj);
    addNotification(`Thêm nhân viên: ${name}`, "add");
  }

  renderStaff();
  closeModal("staffModal");
}

function deleteStaff(id) {
  if (confirm("Bạn có chắc muốn xóa nhân viên này khỏi hệ thống?")) {
    staffData = staffData.filter((s) => s.id !== id);
    renderStaff();
    addNotification("Đã xóa nhân viên", "delete");
  }
}

// --- 3. MENU LOGIC ---
function renderMenu() {
  const grid = document.getElementById("menu-grid-container");
  grid.innerHTML = "";
  for (const [id, dish] of Object.entries(menuData)) {
    grid.innerHTML += `<div class="menu-card" onclick="showDishDetail('${id}')"><img src="${dish.img}" class="menu-img" onerror="this.src='https://via.placeholder.com/300'"><div class="menu-info"><h4>${dish.title}</h4><div class="price-tag">${dish.price}</div></div></div>`;
  }
}
document
  .getElementById("edit-img-file")
  .addEventListener("change", function (e) {
    if (e.target.files[0]) {
      const r = new FileReader();
      r.onload = function (ev) {
        document.getElementById("modal-img").src = ev.target.result;
        document.getElementById("edit-img-input").value = "";
      };
      r.readAsDataURL(e.target.files[0]);
    }
  });
function openAddModal() {
  isEditing = true;
  isAddingNew = true;
  currentDishId = null;
  document.getElementById("dishModal").style.display = "block";
  document.getElementById("modal-img").src =
    "https://via.placeholder.com/400x400";
  document.getElementById("img-input-container").style.display = "block";
  document.getElementById(
    "modal-title-container"
  ).innerHTML = `<input type="text" id="edit-title-input" class="edit-input" placeholder="Tên món">`;
  document.getElementById(
    "modal-price-container"
  ).innerHTML = `<input type="text" id="edit-price-input" class="edit-input" placeholder="Giá">`;
  document.getElementById(
    "modal-desc-container"
  ).innerHTML = `<textarea id="edit-desc-input" class="edit-textarea" placeholder="Mô tả"></textarea>`;
  document.getElementById("btn-toggle-status").style.display = "none";
  document.getElementById("delete-btn").style.display = "none";
  document.getElementById("modal-status").innerHTML = "● Đang tạo mới";
  document.getElementById("edit-btn-text").innerText = "Lưu món mới";
}
function showDishDetail(id) {
  isEditing = false;
  isAddingNew = false;
  const dish = menuData[id];
  currentDishId = id;
  if (dish) {
    document.getElementById(
      "modal-title-container"
    ).innerHTML = `<h2 id="modal-title" class="modal-title">${dish.title}</h2>`;
    document.getElementById(
      "modal-price-container"
    ).innerHTML = `<span id="modal-price" class="modal-price">${dish.price}</span>`;
    document.getElementById(
      "modal-desc-container"
    ).innerHTML = `<p id="modal-desc" class="modal-desc">${dish.desc}</p>`;
    document.getElementById("modal-img").src = dish.img;
    document.getElementById("img-input-container").style.display = "none";
    document.getElementById("btn-toggle-status").style.display = "inline-block";
    document.getElementById("delete-btn").style.display = "flex";
    document.getElementById("edit-btn-text").innerText = "Sửa";
    updateStatusUI(dish.isAvailable);
    document.getElementById("dishModal").style.display = "block";
  }
}
function toggleEditMode() {
  if (isEditing) {
    const title = document.getElementById("edit-title-input").value;
    const price = document.getElementById("edit-price-input").value;
    const desc = document.getElementById("edit-desc-input").value;
    const img = document.getElementById("modal-img").src;
    if (!title || !price) {
      alert("Nhập tên và giá!");
      return;
    }
    if (isAddingNew) {
      menuData["dish-" + Date.now()] = {
        title,
        price,
        img,
        desc,
        isAvailable: true,
      };
      addNotification(`Thêm món: ${title}`, "add");
    } else {
      menuData[currentDishId] = {
        ...menuData[currentDishId],
        title,
        price,
        desc,
        img,
      };
      addNotification(`Cập nhật món: ${title}`, "info");
    }
    renderMenu();
    if (isAddingNew) closeModal("dishModal");
    else showDishDetail(currentDishId);
    isEditing = false;
    isAddingNew = false;
  } else {
    const d = menuData[currentDishId];
    document.getElementById(
      "modal-title-container"
    ).innerHTML = `<input type="text" id="edit-title-input" class="edit-input" value="${d.title}">`;
    document.getElementById(
      "modal-price-container"
    ).innerHTML = `<input type="text" id="edit-price-input" class="edit-input" value="${d.price}">`;
    document.getElementById(
      "modal-desc-container"
    ).innerHTML = `<textarea id="edit-desc-input" class="edit-textarea">${d.desc}</textarea>`;
    document.getElementById("img-input-container").style.display = "block";
    document.getElementById("edit-btn-text").innerText = "Lưu";
    isEditing = true;
  }
}
function deleteDish() {
  if (confirm("Xóa món này?")) {
    delete menuData[currentDishId];
    renderMenu();
    closeModal("dishModal");
    addNotification("Đã xóa món", "delete");
  }
}
function toggleStatus() {
  if (menuData[currentDishId]) {
    menuData[currentDishId].isAvailable = !menuData[currentDishId].isAvailable;
    updateStatusUI(menuData[currentDishId].isAvailable);
    addNotification("Đã đổi trạng thái món", "status");
  }
}
function updateStatusUI(isAvail) {
  const el = document.getElementById("modal-status");
  if (isAvail) {
    el.innerHTML = "● Còn món";
    el.className = "text-green";
  } else {
    el.innerHTML = "● Hết món";
    el.className = "text-red";
  }
}
function resetEditButton() {
  document.getElementById("edit-btn-text").innerText = "Chỉnh sửa thông tin";
  document.getElementById("edit-btn").style.background = "";
}

// --- 4. TABLE LOGIC ---
function renderTables(filter = "all") {
  const grid = document.getElementById("table-grid-container");
  grid.innerHTML = "";
  tableData.forEach((t) => {
    if (filter !== "all" && t.area !== filter) return;
    let st =
      t.status === "occupied"
        ? "Có khách"
        : t.status === "reserved"
        ? "Đặt trước"
        : "Trống";
    grid.innerHTML += `<div class="table-card ${t.status}" onclick="openTableDetail(${t.id})"><div class="table-icon"><i class="fas fa-chair"></i></div><div class="table-name">${t.name}</div><div class="table-info">${t.area}</div><div class="table-info" style="font-weight:bold;margin-top:5px;">${st}</div></div>`;
  });
}
function filterTables(area) {
  document
    .querySelectorAll("#view-tables .filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderTables(area);
}
function openTableDetail(id) {
  const t = tableData.find((x) => x.id === id);
  currentTableId = id;
  if (t) {
    document.getElementById("table-title").innerText = t.name;
    document.getElementById("table-area").innerText = `Khu vực: ${t.area}`;
    const stEl = document.getElementById("table-status-text");
    stEl.innerText =
      t.status === "empty"
        ? "Bàn Trống"
        : t.status === "occupied"
        ? "Đang phục vụ"
        : "Đã đặt trước";
    stEl.style.color =
      t.status === "empty"
        ? "#10b981"
        : t.status === "occupied"
        ? "#ec4899"
        : "#3b82f6";
    document.getElementById(
      "table-qr-img"
    ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Table-${t.id}`;
    document.getElementById("tableModal").style.display = "block";
  }
}
function changeTableStatus(status) {
  const t = tableData.find((x) => x.id === currentTableId);
  if (t) {
    t.status = status;
    renderTables();
    openTableDetail(currentTableId);
    addNotification(`${t.name}: Trạng thái mới`, "status");
  }
}
function closeTableModal() {
  document.getElementById("tableModal").style.display = "none";
}

// --- 5. ORDER LOGIC ---
function renderOrders(filter = "all") {
  const container = document.getElementById("order-list-container");
  container.innerHTML = "";
  ordersData.forEach((order) => {
    if (filter !== "all" && order.status !== filter) return;
    const statusBadge =
      order.status === "pending"
        ? '<span class="badge badge-pending">Chờ bếp</span>'
        : '<span class="badge badge-completed">Hoàn thành</span>';
    container.innerHTML += `<tr onclick="openOrderDetail(${order.id})"><td>#${order.id}</td><td style="font-weight:bold;">${order.table}</td><td>${order.time}</td><td style="color:var(--status-red); font-weight:bold;">${order.total}</td><td>${statusBadge}</td><td><button class="status-btn">Chi tiết</button></td></tr>`;
  });
}
function filterOrders(status) {
  document
    .querySelectorAll("#view-orders .filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  renderOrders(status);
}
function openOrderDetail(id) {
  const order = ordersData.find((o) => o.id === id);
  if (order) {
    currentOrderId = id;
    document.getElementById("order-id-modal").innerText = "#" + order.id;
    document.getElementById("order-total-modal").innerText = order.total;
    let html = "";
    order.items.forEach(
      (i) =>
        (html += `<div style="display:flex;justify-content:space-between;margin-bottom:5px;"><span><b>${i.qty}x</b> ${i.name}</span><span>${i.price}</span></div>`)
    );
    document.getElementById("order-items-list").innerHTML = html;
    document.getElementById("orderModal").style.display = "block";
  }
}
function completeOrder() {
  const order = ordersData.find((o) => o.id === currentOrderId);
  if (order) {
    order.status = "completed";
    renderOrders();
    closeModal("orderModal");
    addNotification(`Đơn #${order.id} hoàn thành`, "status");
  }
}

// --- 6. NOTIFICATION & COMMON ---
function addNotification(msg, type = "info") {
  const time = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let icon = type === "add" ? "✅" : type === "delete" ? "🗑️" : "📝";
  notifications.unshift({
    id: Date.now(),
    message: msg,
    time,
    icon,
    isRead: false,
  });
  renderNotifications();
}
function renderNotifications() {
  const badge = document.getElementById("noti-badge");
  const unread = notifications.filter((n) => !n.isRead).length;
  badge.style.display = unread > 0 ? "inline-block" : "none";
  badge.innerText = unread;
  const list = document.getElementById("noti-list");
  if (notifications.length === 0)
    list.innerHTML =
      '<div style="padding:15px;text-align:center;color:#999;">Chưa có thông báo</div>';
  else
    list.innerHTML = notifications
      .map(
        (n) =>
          `<div class="noti-item ${
            n.isRead ? "" : "unread"
          }" onclick="markAsRead(${n.id})"><div class="noti-icon">${
            n.icon
          }</div><div class="noti-content"><div class="noti-title">${
            n.message
          }</div><div class="noti-time">${n.time}</div></div>${
            !n.isRead ? '<div class="unread-dot"></div>' : ""
          }</div>`
      )
      .join("");
}
function markAsRead(id) {
  const n = notifications.find((x) => x.id === id);
  if (n) {
    n.isRead = true;
    renderNotifications();
  }
}
function toggleNotiDropdown() {
  const d = document.getElementById("noti-dropdown");
  d.style.display = d.style.display === "block" ? "none" : "block";
}

function closeModal(id) {
  if (id) document.getElementById(id).style.display = "none";
}
window.onclick = function (e) {
  if (e.target.classList.contains("modal")) e.target.style.display = "none";
  if (!e.target.closest(".noti-wrapper"))
    document.getElementById("noti-dropdown").style.display = "none";
};

// --- CHART ---
function drawDonutChart(containerId, data, centerText) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const size = 180,
    cx = 90,
    cy = 90,
    radius = 55,
    labelRadius = 75;
  let currentAngle = 0,
    svgHtml = `<svg width="100%" height="100%" viewBox="0 0 ${size} ${size}" style="overflow:visible;">`;
  data.forEach((item) => {
    const sliceAngle = (item.value / 100) * 2 * Math.PI,
      endAngle = currentAngle + sliceAngle;
    const x1 = cx + radius * Math.cos(currentAngle),
      y1 = cy + radius * Math.sin(currentAngle);
    const x2 = cx + radius * Math.cos(endAngle),
      y2 = cy + radius * Math.sin(endAngle);
    const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
    const midAngle = currentAngle + sliceAngle / 2;
    const lx1 = cx + radius * Math.cos(midAngle),
      ly1 = cy + radius * Math.sin(midAngle);
    const lx2 = cx + labelRadius * Math.cos(midAngle),
      ly2 = cy + labelRadius * Math.sin(midAngle);
    svgHtml += `<g class="chart-group"><path d="M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z" fill="${
      item.color
    }" class="chart-segment" onmousemove="showTooltip(evt,'${item.label}: ${
      item.info
    }')" onmouseleave="hideTooltip()"></path><line x1="${lx1}" y1="${ly1}" x2="${lx2}" y2="${ly2}" class="chart-line"/><circle cx="${lx2}" cy="${ly2}" r="2" fill="${
      item.color
    }" class="chart-line"/><rect x="${lx2 - 30}" y="${
      ly2 - 15
    }" width="60" height="30" rx="4" class="chart-text-bg"/><text x="${lx2}" y="${
      ly2 - 4
    }" class="chart-text">${item.label}</text><text x="${lx2}" y="${
      ly2 + 10
    }" class="chart-text" style="font-weight:normal;font-size:10px;">${
      item.info
    }</text></g>`;
    currentAngle += sliceAngle;
  });
  svgHtml += `<circle cx="${cx}" cy="${cy}" r="${
    radius * 0.6
  }" fill="white"/></svg><div class="center-label">${centerText}</div>`;
  container.innerHTML = svgHtml;
}
const tooltip = document.getElementById("chart-tooltip");
function showTooltip(evt, text) {
  if (tooltip) {
    tooltip.style.display = "block";
    tooltip.innerText = text;
    tooltip.style.left = evt.pageX + 15 + "px";
    tooltip.style.top = evt.pageY + 15 + "px";
  }
}
function hideTooltip() {
  if (tooltip) tooltip.style.display = "none";
}

// INIT APP
window.onload = function () {
  renderMenu();
  renderTables();
  renderOrders();
  renderStaff();
  drawDonutChart("chart-revenue", chartData.revenue, "15.8tr");
  drawDonutChart("chart-table", chartData.table, "24 Bàn");
  drawDonutChart("chart-order", chartData.order, "75 Đơn");
};
