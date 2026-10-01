import { useMemo } from 'react'
import { dinhDangGia } from '../data/monAn'

function GioHang({ gio, dsMon }) {
  const tongTien = useMemo(() => {
    return gio.reduce((tong, dong) => {
      const mon = dsMon.find((item) => item.id === dong.id)

      if (!mon) {
        return tong
      }

      return tong + mon.gia * dong.soLuong
    }, 0)
  }, [gio, dsMon])

  return (
    <section className="gio-hang" data-testid="gio-hang">
      {gio.length === 0 ? (
        <p className="gio-trong">Giỏ hàng trống</p>
      ) : (
        <>
          <ul>
            {gio.map((dong) => {
              const mon = dsMon.find(
                (item) => item.id === dong.id,
              )

              if (!mon) {
                return null
              }

              const thanhTien = mon.gia * dong.soLuong

              return (
                <li key={dong.id}>
                  <span>
                    {mon.ten} × {dong.soLuong}
                  </span>
                  <strong>{dinhDangGia(thanhTien)}</strong>
                </li>
              )
            })}
          </ul>

          <p className="tong-tien" data-testid="tong-tien">
            Tổng tiền: {dinhDangGia(tongTien)}
          </p>
        </>
      )}
    </section>
  )
}

export default GioHang