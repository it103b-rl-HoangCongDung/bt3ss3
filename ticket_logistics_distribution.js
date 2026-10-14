const customerAge = 19;
const movieRating = 'T18';
const seatType = 'VIP';
const roomFormatCode = 2;
const dayOfWeek = 4;
const isStudent = true;
const isPhysicalTicket = true;
const comboOptionCode = 1;

let isOrderValid = true;
let baseSeatPrice = 0;
let seatDescription = '';
let roomSurcharge = 0;
let roomFormatName = '';
let discountAmount = 0;
let netTicketPrice = 0;
let comboFee = 0;
let comboName = '';
let physicalTicketFee = 0;
let totalPayable = 0;
let logisticsGift = '';

if (isNaN(customerAge) || customerAge < 1 || customerAge > 120) {
    isOrderValid = false;
    console.log('[LỖI] Dữ liệu độ tuổi không hợp lệ.');
} else {
    let minRequiredAge = 0;
    if (movieRating === 'P') {
        minRequiredAge = 0;
    } else if (movieRating === 'T13') {
        minRequiredAge = 13;
    } else if (movieRating === 'T16') {
        minRequiredAge = 16;
    } else if (movieRating === 'T18') {
        minRequiredAge = 18;
    } else {
        isOrderValid = false;
        console.log('[LỖI] Mã phân loại phim không tồn tại.');
    }

    if (isOrderValid) {
        if (customerAge < minRequiredAge) {
            isOrderValid = false;
            console.log('[TỪ CHỐI] Khán giả không đủ độ tuổi theo quy định của bộ phim.');
        }
    }
}

if (isOrderValid) {
    if (seatType === 'STANDARD') {
        baseSeatPrice = 80000;
        seatDescription = 'Ghế Tiêu Chuẩn';
    } else if (seatType === 'VIP') {
        baseSeatPrice = 95000;
        seatDescription = 'Ghế VIP';
    } else if (seatType === 'COUPLE') {
        baseSeatPrice = 160000;
        seatDescription = 'Ghế Đôi Sweetbox';
    } else {
        isOrderValid = false;
        baseSeatPrice = 0;
        console.log('[LỖI] Hạng ghế không hợp lệ.');
    }
}

if (isOrderValid) {
    switch (roomFormatCode) {
        case 1:
            roomFormatName = '2D Tiêu Chuẩn';
            roomSurcharge = 0;
            break;
        case 2:
            roomFormatName = '3D IMAX (Kèm Kính Chuyên Dụng)';
            roomSurcharge = 40000;
            break;
        case 3:
            roomFormatName = '4DX Đa Giác Quan (Chuyển Động & Hiệu Ứng)';
            roomSurcharge = 60000;
            break;
        default:
            isOrderValid = false;
            roomSurcharge = 0;
            console.log('[LỖI] Định dạng phòng chiếu không tồn tại.');
            break;
    }
}

if (isOrderValid) {
    discountAmount = isStudent && (dayOfWeek >= 2 && dayOfWeek <= 6) ? baseSeatPrice * 0.2 : 0;
    netTicketPrice = baseSeatPrice - discountAmount;

    switch (comboOptionCode) {
        case 0:
            comboName = 'Không chọn bắp nước';
            comboFee = 0;
            break;
        case 1:
            comboName = 'Solo Box (1 Bắp Ngọt + 1 Nước)';
            comboFee = 65000;
            break;
        case 2:
            comboName = 'Couple Box (1 Bắp Ngọt + 2 Nước + 1 Snack)';
            comboFee = 99000;
            break;
        default:
            comboName = 'Gói không hợp lệ';
            comboFee = 0;
            console.log('[CẢNH BÁO] Mã combo không hợp lệ, chuyển về mặc định không sử dụng.');
            break;
    }

    physicalTicketFee = isPhysicalTicket ? 5000 : 0;
    totalPayable = netTicketPrice + roomSurcharge + comboFee + physicalTicketFee;
    logisticsGift = totalPayable >= 200000 ? 'Voucher Bắp Ngọt Miễn Phí Suất Chiếu Kế Tiếp' : 'Không có quà tặng kèm';

    console.log('========================================');
    console.log('              PHIẾU ĐIỀU PHỐI HẬU CẦN VÀ VÉ XEM PHIM');
    console.log('========================================');
    console.log(`Độ tuổi khán giả     : ${customerAge} tuổi (Mác phim: ${movieRating})`);
    console.log(`Hạng ghế lựa chọn    : ${seatDescription} - ${baseSeatPrice} VNĐ`);
    console.log(`Định dạng phòng chiếu: ${roomFormatName} (Phụ phí: ${roomSurcharge} VNĐ)`);
    console.log(`Giảm giá ưu đãi HSSV : -${discountAmount} VNĐ`);
    console.log(`Tiền vé sau ưu đãi   : ${netTicketPrice} VNĐ`);
    console.log(`Dịch vụ bắp nước     : ${comboName} (${comboFee} VNĐ)`);
    console.log(`Ấn phẩm vé cứng      : ${isPhysicalTicket ? 'Có yêu cầu in' : 'Không in'} (${physicalTicketFee} VNĐ)`);
    console.log('----------------------------------------');
    console.log(`TỔNG THANH TOÁN      : ${totalPayable} VNĐ`);
    console.log(`QUÀ TẶNG KÈM THEO    : ${logisticsGift}`);
    console.log('========================================');
}