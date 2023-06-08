import { IPost } from '../../mocks/data'
import classes from './style.module.css'
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePostMutation,
} from '../../redux/slices/restApi'

const RestPosts = () => {
  const { data } = useGetPostsQuery()
  const [addPostMutation] = useAddPostMutation()
  const [deletePostMutation] = useDeletePostMutation()
  const [updatePostMutation] = useUpdatePostMutation()
  const deleteWRestOnClickHandler = async (id: number) => {
    await deletePostMutation(id)
  }

  const updateWRestOnClickHandler = async (id: number, postData: IPost) => {
    await updatePostMutation({
      id,
      updatedPost: postData,
    })
  }

  const addNewPostWRestClickHandler = async (title: string, body: string) => {
    await addPostMutation({ title, body })
  }
  return (
    <div>
      <div className={classes.postFeed}>
        <span>Rest Api Data</span>
        {data?.map((d: IPost) => (
          <div className={classes.post} key={d.id}>
            <div>{d.title}</div>
            <div>{d.body}</div>
            <button onClick={() => deleteWRestOnClickHandler(d.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                updateWRestOnClickHandler(d.id, {
                  id: d.id,
                  title: 'rest title updated',
                  body: 'rest body content updated',
                })
              }
            >
              Edit
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            addNewPostWRestClickHandler(
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

export default RestPosts
