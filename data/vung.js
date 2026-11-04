// ===== THONG TIN CAC VUNG UU TIEN =====
// Nguon: trang viec "Lam som khu uu tien Hiep Thanh" (chot 04/11/2026), ban ve QH-04.2, QH-04.3.
// lo: EntityHandle cua lo trong DAT_ALL_POLY_FINAL.geojson; duong: chi so tuyen tim trong DUONG_FINAL.geojson.
// Nhom thong tin sau (CSTN, RPBM, San lap, Giao thau) dien dan theo viec.
var VUNG = [
  {
    ma: "0", ten: "Vùng 0 - Khu nhà tạm, thi công quý 4", mau: "#D50000",
    lo: ["5D8D2"], loTen: ["DV-5 (góc Tây Bắc)"],
    dienTich: "1,03 - 2,05 ha (1/2 tới toàn bộ DV-5)",
    ghiChu: "Nằm trong vùng 1, đầu Bắc. Khu BT + 2 - 4 container sát đường Xóm Bố - Bàu Đồn, lùi tránh 2 tuyến đường gom; khu đá dăm kéo ra mép đường. Kinh phí từ phần nhà tạm gói RPBM 01.",
    tiepCan: "Giáp đường Xóm Bố - Bàu Đồn",
    thuTu: 1
  },
  {
    ma: "1", ten: "Vùng 1 - Nhà máy XLNT và các lô kế bên", mau: "#FF6D00",
    lo: ["5D8D2", "5FDD9", "54480", "5447E", "86C6F"],
    loTen: ["DV-5 2,05 ha", "TICC 3,44 ha", "HTKT-2 (XLNT) 3,29 ha", "HTKT-1 (trạm biến áp) 0,99 ha", "DV-6 (trữ khí hóa lỏng) 0,51 ha"],
    dienTich: "10,28 ha (kể cả vùng 0, chưa tính đường, cây xanh xen giữa)",
    ghiChu: "Ranh có lấy đường quy hoạch, dải cây xanh xen giữa (CXCC-13, CXCC-24) không: chưa chốt.",
    tiepCan: "Giáp đường Xóm Bố - Bàu Đồn, không vạch tuyến riêng",
    thuTu: 2
  },
  {
    ma: "2", ten: "Vùng 2 - Nhà máy nước cấp", mau: "#0091EA",
    lo: ["65319"], loTen: ["HTKT-3 2,25 ha"],
    dienTich: "2,25 ha",
    ghiChu: "Đầu Đông Bắc, gần cầu kênh N8.",
    tiepCan: "Chưa vạch",
    thuTu: 3
  },
  {
    ma: "3", ten: "Vùng 3 - Đường gom N3, N4", mau: "#AA00FF",
    lo: [], loTen: ["N3 2.343,05 m", "N4 2.340,38 m (mặt cắt 1-1)"],
    // N3 = tim 64 + 63 (phia Bac truc chinh, cong 2.346 m); N4 = tim 59 + 60 (phia Nam, 60 la doan qua kenh)
    duong: [64, 63, 59, 60],
    dienTich: "9,02 ha (thêm 1,13 ha nếu tính đoạn N4 mặt cắt 7-7, 8-8, 11-11)",
    ghiChu: "Dọc đường Bàu Đồn - Xóm Bố hiện hữu, hai bên trục chính. Tuyến vẽ theo tim đường trong dữ liệu bản đồ gốc, N3 khớp chiều dài thuyết minh; đoạn N4 phía Đông kênh (mặt cắt khác) vẽ chung, cần đối chiếu QH-04.3.",
    tiepCan: "Đường hiện hữu",
    thuTu: 3
  }
];

// Cac buoc theo doi tung vung (Tinh trang): chua lam / dang lam / xong
var BUOC = ["Khoanh vùng (MB03.a)", "CSTN thanh lý cây", "Bàn giao mặt bằng", "Rà phá bom mìn", "San lấp", "Giao thầu XD"];
