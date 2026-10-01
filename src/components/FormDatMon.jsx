import { useEffect, useRef, useState } from 'react'

function FormDatMon({ onGui, choPhepGui }) {
  const [hoTen, setHoTen] = useState('')
  const [soDienThoai, setSoDienThoai] = useState('')
  const [ghiChu, setGhiChu] = useState('')

  const [loiHoTen, setLoiHoTen] = useState('')
  const [loiSoDienThoai, setLoiSoDienThoai] =
    useState('')

  const oHoTen = useRef(null)

  useEffect(() => {
    oHoTen.current?.focus()
  }, [])

  function kiemTraHoTen() {
    if (hoTen.trim().length < 2) {
      setLoiHoTen('Họ tên cần ít nhất 2 ký tự')
      return false
    }

    setLoiHoTen('')
    return true
  }

  function kiemTraSoDienThoai() {
    if (!/^0\d{9}$/.test(soDienThoai.trim())) {
      setLoiSoDienThoai(
        'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0',
      )
      return false
    }

    setLoiSoDienThoai('')
    return true
  }

  function xuLySubmit(event) {
    event.preventDefault()

    const hoTenHopLe = kiemTraHoTen()
    const soDienThoaiHopLe = kiemTraSoDienThoai()

    if (!hoTenHopLe || !soDienThoaiHopLe) {
      return
    }

    onGui({
      hoTen: hoTen.trim(),
      soDienThoai: soDienThoai.trim(),
      ghiChu: ghiChu.trim(),
    })
  }

  return (
    <form onSubmit={xuLySubmit}>
      <div>
        <label htmlFor="hoTen">Họ tên</label>

        <input
          ref={oHoTen}
          id="hoTen"
          value={hoTen}
          onChange={(event) =>
            setHoTen(event.target.value)
          }
          onBlur={kiemTraHoTen}
        />

        {loiHoTen && (
          <p className="loi" role="alert">
            {loiHoTen}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="soDienThoai">
          Số điện thoại
        </label>

        <input
          id="soDienThoai"
          value={soDienThoai}
          onChange={(event) =>
            setSoDienThoai(event.target.value)
          }
          onBlur={kiemTraSoDienThoai}
        />

        {loiSoDienThoai && (
          <p className="loi" role="alert">
            {loiSoDienThoai}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="ghiChu">Ghi chú</label>

        <textarea
          id="ghiChu"
          value={ghiChu}
          onChange={(event) =>
            setGhiChu(event.target.value)
          }
        />
      </div>

      <button type="submit" disabled={!choPhepGui}>
        Gửi đơn
      </button>
    </form>
  )
}

export default FormDatMon