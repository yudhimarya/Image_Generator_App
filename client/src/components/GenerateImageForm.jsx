import {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import Button from "./button"
import { GenerateAIImage } from "../api";
import { CreatePost } from "../api";
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import SearchBar from './TextInput';
const From= styled.div`
    flex:1;
    padding: 16px 20px;
    display:flex;
    flex-direction:column;
    gap: 9%;
    justify-content:center;
    `;
const Top= styled.div`flex:1;
    flex-direction: column;
    gap: 6px;`;
const Title= styled.div`
    font-size: 28px;
    font-weight:500;
    color: ${({theme})=> theme.text_primary};`;
const Desc= styled.div`font-size: 17px;
    font-weight:400;
    color: ${({theme})=> theme.text_secondary}`;  
const Body= styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size:12px;
    font-weight:400;
    color:${({theme})=> theme.text_secondary};
    `;
const Actions= styled.div`
    flex: 1;
    display: flex;
    gap:8px;
    `;

const GenerateImageForm = ({
    post, 
    setPost,
    createPostLoading, generateImageLoading,
    setGenerateImageLoading,
    setcreatePostLoading,
}) => {
    const navigate= useNavigate()
    const [error,setError] = useState("")
    const generateImageFun = async () => {
        if (!post.prompt || post.prompt.trim() === "") {
            alert("Prompt cannot be empty. Please provide a valid input.");
            return;
        }
        try {
            setGenerateImageLoading(true); // Start loading
    
            const response = await GenerateAIImage({ prompt: post.prompt });
    
            setPost((prevPost) => ({
                ...prevPost,
                photo: response.data.photo,
            })); // Update only the photo part of the post
        } catch (error) {
            console.error("Error generating image:", error.response?.data || error.message);
            alert("Failed to generate image. Please try again.");
        } finally {
            setGenerateImageLoading(false); // Stop loading
        }
    };
    
    // const createPostFun= async () =>
    //     {
    //     try{   
    //     setcreatePostLoading(true);
    //     const response = await CreatePost({ post })
    //     if (response.status === 200 || response.status === 201) {
    //         navigate("/"); // Redirect to home page
    //     } else {
    //         alert("Failed to create the post. Please try again.");
    //     }
    
    // } catch (error) {
    //     console.error("Error generating image:", error.response?.data || error.message);
    //     alert("Failed to generate image. Please try again.");
    // } finally {
    //     setcreatePostLoading(false); // Stop loading
    // }
    // }

    const createPostFun = async ()=>{
        setcreatePostLoading(true);
        await CreatePost(post)
            .then((res)=>{
                setcreatePostLoading(false);
                navigate("/")
            })
            .catch((error)=>{
                setError(error?.reponse?.data?.message);
                setcreatePostLoading(false);
            })
    }

  return (
    <From>
        <Top>
            <Title>Generate Image with prompt</Title>
                
            <Desc>Write your promt according to the image you want </Desc>
        </Top>
        <Body>
            <SearchBar label="AUTHOR" 
            
            
            placeholder="Enter your name..."
            value={post.name}
            handleChange={(e)=>setPost({...post,name: e.target.value})}
            />
            <SearchBar label="IMAGE PROMPT" 
            name="yudhi"
            rows='8'
            value={post.prompt}
            handleChange={(e)=>setPost({...post,prompt: e.target.value})}
            placeholder="Write a detailed prompt about the image..."/>
            
            ** You can post the AI Generated Image to the Community **
        </Body>
        <Actions>
            <Button text="Generate Image" flex leftIcon={<AutoAwesome></AutoAwesome>}
            isLoading={generateImageLoading}
            isdisabled={post.prompt==="" }
            onClick={()=>generateImageFun()}
            />
        
        <Button text="Post Image" flex type="secondary" leftIcon={<CreateRounded/>}
        isLoading={createPostLoading}
        isdisabled={post.name===""|| post.prompt===""|| post.photo===""}
        onClick={()=>createPostFun()}/></Actions>
    </From>
  )
}

export default GenerateImageForm;