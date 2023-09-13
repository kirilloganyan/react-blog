import '../App.css';
import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pagesFind";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../UI/pagination/Pagination";
import {useFetching} from "../hooks/useFetching";

function Posts() {
    const [posts,setPosts]=useState([])
    const [modal,setModal] = useState(false)
    const [filter,setFilter] = useState({sort:'',query:''})
    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts,isPostLoading,postError] = useFetching(async (limit,page) => {
        const response = await PostService.getAll(limit,page)
        setPosts(response.data)
        const totalCount =response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })
    const createPost=(newPost)=>{
        setPosts([...posts,newPost])
        setModal(false)
    }
    useEffect(()=>{
        fetchPosts(limit,page)
    },[])


    const removePost =(post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }

    const  changePage = (page) =>{
        setPage(page)
        fetchPosts(limit,page)
    }
    // const bodyInputRef = useRef()
    return (
        <div className='App'>
            <MyButton style = {{marginTop:'15px'}} onClick={()=>setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create ={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFiler={setFilter}
            />{postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
            {isPostLoading
                ?<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Loader />
                </div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов JavaScript  '}/>

            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default Posts
