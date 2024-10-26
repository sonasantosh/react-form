

export const Button = ( {icon, value, secondary}) => {
  return (
    <button className={secondary? "btn btn_secondary":"btn" }>{icon} {value}</button>
  )
}
