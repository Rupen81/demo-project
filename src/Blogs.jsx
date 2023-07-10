import { styled } from "styled-components";
import { blogs } from "./utils/common";
import { useContext } from "react";
import { Context } from "./globalContext";
import useDebounce from "./DebouncedValue";


function Blog() {
    const context = useContext(Context);
    const [searchText, isLoading] = useDebounce(context.searchText);
    console.log('context.searchText', context.searchText)
    return (
        <>
        {
            isLoading && <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <img width="50%" height="50%" src="https://media2.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e47ijozlg81kh8comhp0xo3zrj613cgef326hpr98qm&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
            </div>
        }
        <Container>
            {
                blogs.map((blog, idx) => (
                    (String(blog.title.toLowerCase()).match(String(searchText).toLowerCase()) || 
                    String(blog.desc.toLowerCase()).match(String(context.searchText).toLowerCase())) &&
                    <BlogWrapper>
                        <Image src={blog.src} />
                        <Title>{blog.title}</Title>
                        <Description>{blog.desc}</Description>
                    </BlogWrapper>
                ))
            }
        </Container>
        </>
    )
}

const Container = styled.div`
display: grid;
padding: 20px;
grid-template-columns: 1fr 1fr 1fr;
`;
const Title = styled.div`
font-size: 20px;
flex-direction: column;
text-align: left;
`;

const Image = styled.img`
    max-width: 100%;
    height:200px;
    border-radius: 10px;
`;

const BlogWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;

`;

const Description = styled.div`
font-size: 16px;
text-align: left;
`;
export default Blog;