function Khung({ id, tieuDe, hanhDong, children }) {
  return (
    <section id={id} className="khung">
      <div className="khung-header">
        <h2>{tieuDe}</h2>

        <div>{hanhDong}</div>
      </div>

      {children}
    </section>
  )
}

export default Khung