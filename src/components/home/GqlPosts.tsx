import {
  useGetGqlPostsQuery,
  useUpdateGqlPostsMutation,
} from '../../redux/slices/gqlApi'
import classes from './style.module.css'
import { IPost } from '../../mocks/data'
const GqlPosts = () => {
  const { data } = useGetGqlPostsQuery()

  // Define mutation hooks for GraphQL API operations
  const [mutatePostsWGqlMutation] = useUpdateGqlPostsMutation()

  const updatePostWGql = async (id: number, title: string, body: string) => {
    try {
      const mutation = `
          mutation UpdatePost($id: ID!, $title: String!, $body: String!) {
            updatePost(id: $id, title: $title, body: $body) {
              id
              title
              body
            }
          }
        `
      const variables = {
        id,
        title,
        body,
      }
      await mutatePostsWGqlMutation({
        query: mutation,
        variables,
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const deletePostWGql = async (id: number) => {
    try {
      const mutation = `
          mutation DeletePost($id: ID!) {
            deletePost(id: $id) {
              id
              title
              body
            }
          }
        `
      const variables = {
        id,
      }
      await mutatePostsWGqlMutation({ query: mutation, variables })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const addPostWGql = async (title: string, body: string) => {
    try {
      const mutation = `
          mutation AddPost($title: String!, $body: String!) {
            addPost(title: $title, body: $body) {
              id
              title
              body
            }
          }
        `
      const variables = {
        title,
        body,
      }
      await mutatePostsWGqlMutation({ query: mutation, variables })
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <div>
      {/* Graphql Api Data */}
      <div className={classes.postFeed}>
        <span>Graphql Api Data</span>
        {data?.data?.posts?.map((d: IPost, i: number) => (
          <div className={classes.post} key={i}>
            <div>{d.title}</div>
            <div>{d.body}</div>
            <button onClick={() => deletePostWGql(d.id)}>Delete</button>
            <button
              onClick={() =>
                updatePostWGql(d.id, 'title update', 'content updated')
              }
            >
              Edit
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            addPostWGql(
              'newly added post title',
              'hey there we have added this new post'
            )
          }
        >
          Add New Post
        </button>
      </div>
    </div>
  )
}

export default GqlPosts
