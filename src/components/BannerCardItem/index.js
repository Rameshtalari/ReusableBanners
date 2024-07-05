import './index.css'

const BannerCardItem = props => {
  const {BannerCardList} = props
  const {headerText, description, className} = BannerCardList

  return (
    <li className={className}>
      <h1 className="title">{headerText}</h1>
      <p className="sub-title">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
