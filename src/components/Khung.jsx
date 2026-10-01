function Khung({ tieuDe, hanhDong, children }) {
  return (
    <section className="khung">
      <div className="khung-header">
        <h2>{tieuDe}</h2>

        <div>{hanhDong}</div>
      </div>

      {children}
    </section>
  )
}

export default Khung