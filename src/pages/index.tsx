import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>Blog</h1>
      <h2>
        Kyungpyo Kim
      </h2>
      <h2>
        kyungpyo94@gmail.com
      </h2>
    </div>
  </>
)