import MonAnCard from './MonAnCard'

function DanhSachMon({
  dsMon,
  idDangChon,
  onChon,
  onDat,
}) {
  return (
    <section>
      <h2>Danh sách món</h2>

      <div className="danh-sach-mon">
        {dsMon.map((mon) => (
          <MonAnCard
            key={mon.id}
            mon={mon}
            dangChon={mon.id === idDangChon}
            onChon={onChon}
            onDat={onDat}
          />
        ))}
      </div>
    </section>
  )
}

export default DanhSachMon