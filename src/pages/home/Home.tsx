import classes from './style.module.css'
import RestPosts from '../../components/home/RestPosts'
import GqlPosts from '../../components/home/GqlPosts'

const Home = () => {
  return (
    <div className={classes.root}>
      <RestPosts />
      <GqlPosts />
    </div>
  )
}

export default Home
