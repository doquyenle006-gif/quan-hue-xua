function Header({ tenQuan, tongPhan }) {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <span className="topbar-dot" aria-hidden="true" />
          <span className="topbar-text">Bếp Huế mở cửa hôm nay</span>
        </div>

        <div className="topbar-right">
          <span>09:00 – 21:30</span>
          <span className="topbar-divider" aria-hidden="true" />
          <span>Giao tận nơi trong 30–45 phút</span>
        </div>
      </div>

      <header className="header">
        <div className="brand">
          <span className="brand-badge">H</span>

          <div className="brand-copy">
            <h1>{tenQuan}</h1>
            <span>HƯƠNG VỊ CỔ ĐÔ</span>
          </div>
        </div>

        <nav className="main-menu" aria-label="Chuyển hướng chính">
          <a href="#menu-section" className="active">Thực đơn</a>
          <a href="#gio-hang">Giỏ hàng</a>
          <a href="#dat-mon">Đặt món</a>
        </nav>

        <a href="#gio-hang" className="gio-tong" aria-label={`Giỏ hàng, ${tongPhan} món`}>
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span>Giỏ hàng</span>
          <strong data-testid="tong-phan">{tongPhan}</strong>
        </a>
      </header>
    </>
  )
}

export default Header