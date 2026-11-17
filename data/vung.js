// ===== VUNG DE NGHI BAN GIAO 1 - 2 HA (ban 17/11/2026) =====
// Nguon: trang viec "Lam som khu uu tien Hiep Thanh" (chot 17/11/2026), ban ve
// 26.11.17_QH-04.2_ap_MB vung uu tien ban giao 1-2ha_DT4.pdf. Ban 16/11 cat o ban-16-11/. Sua 17/11: bo doan mo moi 98 m, dung duong hien huu, ban 04/11 o ban-04-11/.
// lo: EntityHandle trong DAT_ALL_POLY_FINAL.geojson; ranh: vong toa do ve san (lon, lat).
var VUNG = [
  {
    ma: "dao", nhan: "Vùng đào", ten: "Vùng đào (ô 60 x 60 m trong hồ HN-2)", mau: "#D50000",
    ranh: [[106.2485363,11.1437559],[106.2490354,11.1439839],[106.2488038,11.1444753],[106.2483046,11.1442473]],
    loTen: ["Hồ HN-2, đầu đường chở đất; nằm trong ranh đào hồ sau này"],
    dienTich: "3.600 m² (ô vuông 60 x 60 m)",
    ghiChu: "Đào đủ đất đắp, không theo cao độ thiết kế; tính có mái taluy 1:1,5, cao độ hiện trạng TB +7,20. PA1 (đắp 1/2 DV-5): đào 3.657,41 m³, sâu 1,07 m, đáy +6,13. PA2 (đắp trọn DV-5): đào 7.314,82 m³, sâu 2,28 m, đáy +4,92 (≈ cao độ thứ nhất +4,90). Chưa tính K90.",
    tiepCan: "Đường đất hiện hữu sát vùng đào, nối đường lô cao su hiện có",
    thuTu: 1
  },
  {
    ma: "dap", nhan: "Vùng đắp", ten: "Vùng đắp (DV-5)", mau: "#FF6D00",
    lo: ["5D8D2"], nuaPA1: [[106.2486584,11.1494462],[106.2481198,11.1492024],[106.2480815,11.1490986],[106.2485813,11.1480225],[106.249197,11.1483038]],
    loTen: ["DV-5 2,05 ha (phần tô đậm: nửa gần chỗ xe vào)"],
    dienTich: "PA1: 1/2 DV-5 10.250 m²; PA2: trọn DV-5 20.500 m²",
    ghiChu: "Đắp bằng đất vùng đào, bình quân Lô 04 0,357 m³/m²: PA1 3.657,41 m³; PA2 7.314,82 m³. Chưa tính K90.",
    tiepCan: "Xe chở đất từ vùng đào theo đường hiện hữu, rẽ vào DV-5",
    thuTu: 2
  }
];
var TONG_BAN_GIAO = "PA1: 13.850 m² (1,39 ha); PA2: 24.100 m² (2,41 ha). Diện tích tính theo ranh lô quy hoạch, thực tế cao su bàn giao (dải cây xanh, lộ giới tới mép đường hiện hữu) sẽ nhiều hơn.";

// Khu nha tam Ban QLDA (nha panel, goc Tay Bac CXCC-15), lay tu ban ve 26.11.15_QH-04.2_ap_MB_khu_nha_tam
var NHA_TAM = {"panel":[[106.243676,11.1472922],[106.2437179,11.1473114],[106.2437948,11.147146],[106.2437529,11.1471268],[106.243676,11.1472922]],"hanhlang":[[106.2437179,11.1473114],[106.2437305,11.1473172],[106.2438074,11.1471517],[106.2437948,11.147146],[106.2437179,11.1473114]],"dadam":[[[106.2435607,11.1475404],[106.2436445,11.1475787],[106.2437598,11.1473306],[106.243676,11.1472922],[106.2435607,11.1475404]],[[106.2437305,11.1473172],[106.2437598,11.1473306],[106.2438367,11.1471651],[106.2438074,11.1471517],[106.2437305,11.1473172]]]};

// Duong xe cho dat: cu = duong hien huu (duong dat, duong lo; khong ban giao), tu vung dao toi DV-5, vao = re vao DV-5
var DUONG_CHO_DAT = {moi: [], cu: [[106.2488044,11.1444743],[106.2496284,11.1448381],[106.2486784,11.1469468],[106.2480579,11.1482256]], vao: [[106.2480579,11.1482256],[106.2486305,11.1484872]]};

// Huong ra pha bom min (giu huong chot 09/11; vach ngang ha xuong 17/11 cho khong cat vung dao)
var HUONG_RPBM = {"tuyen":[[[106.248911,11.1498592],[106.2510943,11.1450368],[106.2503314,11.1435119],[106.2460162,11.1435294],[106.2460317,11.147233]]],"mui":[[106.2460324,11.1473999],[106.2461249,11.1472326],[106.2459384,11.1472334],[106.2460324,11.1473999]]};

// Cac buoc theo doi tung vung (Tinh trang): chua lam / dang lam / xong
var BUOC = ["Khoanh vùng (MB03.a)", "CSTN thanh lý cây", "Bàn giao mặt bằng", "Rà phá bom mìn", "San lấp", "Giao thầu XD"];
