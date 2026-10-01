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
    <section data-testid="gio-hang">
      <h2>Giỏ hàng</h2>

      {gio.length === 0 ? (
        <p>Giỏ hàng trống</p>
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
                  {mon.ten} × {dong.soLuong} —{' '}
                  {dinhDangGia(thanhTien)}
                </li>
              )
            })}
          </ul>

          <p data-testid="tong-tien">
            Tổng tiền: {dinhDangGia(tongTien)}
          </p>
        </>
      )}
    </section>
  )
}

export default GioHang