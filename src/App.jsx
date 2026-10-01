import { useEffect, useState } from 'react'
import Header from './components/Header'
import DanhSachMon from './components/DanhSachMon'
import GioHang from './components/GioHang'
import FormDatMon from './components/FormDatMon'
import Khung from './components/Khung'
import useLocalStorage from './hooks/useLocalStorage'
import { dsMon } from './data/monAn'

function App() {
  const tenQuan = import.meta.env.VITE_TEN_QUAN

  const [gio, setGio] = useLocalStorage(
    'gio-hang',
    [],
  )

  const [idDangChon, setIdDangChon] = useState(null)
  const [tenNguoiDat, setTenNguoiDat] = useState('')
  const [lanGui, setLanGui] = useState(0)

  const tongPhan = gio.reduce(
    (tong, dong) => tong + dong.soLuong,
    0,
  )

  function datMon(id) {
    setGio((gioCu) => {
      const daCo = gioCu.some((dong) => dong.id === id)

      if (!daCo) {
        return [...gioCu, { id, soLuong: 1 }]
      }

      return gioCu.map((dong) => {
        if (dong.id === id) {
          return {
            ...dong,
            soLuong: dong.soLuong + 1,
          }
        }

        return dong
      })
    })
  }

  function xoaGioHang() {
    setGio([])
  }

function guiDon(thongTin) {
  setTenNguoiDat(thongTin.hoTen)
  setGio([])
  setLanGui((lanCu) => lanCu + 1)

  console.log('Thông tin đơn hàng:', thongTin)
}
  useEffect(() => {
    if (tongPhan === 0) {
      document.title = tenQuan
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`
    }
  }, [tongPhan, tenQuan])

  return (
    <div className="app">
      <Header
        tenQuan={tenQuan}
        tongPhan={tongPhan}
      />

      <DanhSachMon
        dsMon={dsMon}
        idDangChon={idDangChon}
        onChon={setIdDangChon}
        onDat={datMon}
      />

      <Khung
        tieuDe="Giỏ hàng"
        hanhDong={
          <button
            type="button"
            onClick={xoaGioHang}
          >
            Xóa giỏ hàng
          </button>
        }
      >
        <GioHang
          gio={gio}
          dsMon={dsMon}
        />
      </Khung>

      <Khung tieuDe="Đặt món">
        {tenNguoiDat && (
  <p role="status">
    Đã nhận đơn của {tenNguoiDat}
  </p>
)}

        <FormDatMon
          key={lanGui}
          onGui={guiDon}
          choPhepGui={gio.length > 0}
        />
      </Khung>
    </div>
  )
}

export default App