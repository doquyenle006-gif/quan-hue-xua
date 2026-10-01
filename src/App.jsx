import { useEffect, useState } from 'react'
import Header from './components/Header'
import DanhSachMon from './components/DanhSachMon'
import GioHang from './components/GioHang'
import FormDatMon from './components/FormDatMon'
import Khung from './components/Khung'
import useLocalStorage from './hooks/useLocalStorage'
import { dsMon } from './data/monAn'

function App() {
  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'QUÁN HUẾ XƯA'

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
    <div className="app-shell">
      <div className="app">
        <Header
          tenQuan={tenQuan}
          tongPhan={tongPhan}
        />

        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">MÓN NGON TỪ CỔ ĐÔ</span>
            <h2>
              Một chút <span className="script-text">Huế</span>,
              <br />
              thưởng cả nhà.
            </h2>
            <p>
              Vị cay nồng của bún bò, chút đậm đà của cơm hến – món ngon thân
              quen xứ Huế được nấu bằng tất cả tâm tình.
            </p>

            <div className="hero-actions">
              <a href="#dat-mon" className="primary-btn">Đặt ngay</a>
              <a href="#menu-section" className="secondary-btn">Xem thực đơn</a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-bowl">
              <div className="hero-bowl-inner" />
              <div className="hero-stamp">
                <span>VỊ NGON</span>
                <span className="stamp-big">TỪ</span>
                <span className="stamp-big">1986</span>
                <small>ĐẶT CỔ ĐÔ</small>
              </div>
            </div>
          </div>
        </section>

        <DanhSachMon
          dsMon={dsMon}
          idDangChon={idDangChon}
          onChon={setIdDangChon}
          onDat={datMon}
        />

        <Khung
          id="gio-hang"
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

        <Khung id="dat-mon" tieuDe="Đặt món">
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
    </div>
  )
}

export default App