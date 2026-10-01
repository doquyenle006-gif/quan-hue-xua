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
      <div
        className="mon-thumb"
        style={{
          backgroundImage: `url(${mon.hinh})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: mon.mau || 'linear-gradient(135deg, #f7d7aa, #ea8a5a)',
        }}
      />

      <div className="mon-body">
        <h3>{mon.ten}</h3>

        <p>{mon.moTa}</p>

        <div className="mon-info">
          <span className="price-tag">
            {dinhDangGia(mon.gia)}
          </span>

          {mon.daHet && <span className="het-mon">Hết món</span>}
        </div>

        <button
          type="button"
          disabled={mon.daHet}
          onClick={xuLyDatMon}
        >
          Đặt món
        </button>
      </div>
    </article>
  )
}

export default MonAnCard