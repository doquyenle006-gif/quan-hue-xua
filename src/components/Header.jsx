function Header({ tenQuan, tongPhan }) {
  return (
    <header className="header">
      <h1>{tenQuan}</h1>

      <div>
        Số phần trong giỏ:
        <strong data-testid="tong-phan">{tongPhan}</strong>
      </div>
    </header>
  )
}

export default Header