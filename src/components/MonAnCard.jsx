import { dinhDangGia } from '../data/monAn'

function MonAnCard({ mon, dangChon, onChon, onDat }) {
  function xuLyDatMon(event) {
    event.stopPropagation()
    onDat(mon.id)
  }

  return (
    <article
      className={dangChon ? 'mon-an dang-chon' : 'mon-an'}
      onClick={() => onChon(mon.id)}
    >
      <h3>{mon.ten}</h3>

      <p>{mon.moTa}</p>

      <p>{dinhDangGia(mon.gia)}</p>

      {mon.daHet && <span className="het-mon">Hết món</span>}

      <button
        type="button"
        disabled={mon.daHet}
        onClick={xuLyDatMon}
      >
        Đặt món
      </button>
    </article>
  )
}

export default MonAnCard