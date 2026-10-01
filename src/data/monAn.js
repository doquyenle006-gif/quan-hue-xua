export const dsMon = [
  {
    id: 1,
    ten: 'Bún bò Huế',
    moTa: 'Bún bò truyền thống với nước dùng đậm đà.',
    gia: 45000,
    daHet: false,
  },
  {
    id: 2,
    ten: 'Cơm hến',
    moTa: 'Cơm hến đặc sản xứ Huế.',
    gia: 35000,
    daHet: false,
  },
  {
    id: 3,
    ten: 'Bánh bèo',
    moTa: 'Bánh bèo Huế mềm thơm, ăn kèm nước mắm.',
    gia: 30000,
    daHet: false,
  },
  {
    id: 4,
    ten: 'Bánh lọc',
    moTa: 'Bánh lọc nhân tôm thịt truyền thống.',
    gia: 40000,
    daHet: false,
  },
  {
    id: 5,
    ten: 'Bánh nậm',
    moTa: 'Bánh nậm mềm với nhân tôm thịt.',
    gia: 35000,
    daHet: true,
  },
  {
    id: 6,
    ten: 'Nem lụi',
    moTa: 'Nem lụi nướng thơm ăn kèm rau sống.',
    gia: 50000,
    daHet: false,
  },
  {
    id: 7,
    ten: 'Chè Huế',
    moTa: 'Các loại chè truyền thống của Huế.',
    gia: 25000,
    daHet: false,
  },
  {
    id: 8,
    ten: 'Tôm chua',
    moTa: 'Đặc sản Huế với vị chua cay đặc trưng.',
    gia: 60000,
    daHet: false,
  },
]

export function dinhDangGia(gia) {
  return gia.toLocaleString('vi-VN') + 'đ'
}