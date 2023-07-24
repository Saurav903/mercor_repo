import { useEffect, useRef, useState } from 'react'
import {Box,Button, Textarea, Heading, Divider, Text, FormLabel, Card, CardBody, Stack, StackDivider} from "@chakra-ui/react";
import style from "./styles/app.module.css";
import { getdata, postdata } from './redux/codepage/codepage.action';
import { useDispatch, useSelector } from 'react-redux';
import Tablez from './pages/Tablez';
function App() {
  const values1 = useSelector((store)=> store.qns.datas);
  const [g,setG] = useState("");
  const values2 = useSelector((store)=>store.qns.submitted);
  const [p,setP] = useState("");
  const [submitValue,setSubmitValue] = useState("");
  const [page,setPage] = useState(1);
  const bottomRef = useRef();
  let dispatch = useDispatch();
  const handleSubmit = ()=>{
    let value = {
      code:submitValue,
      questionId:values1[0]._id
    }
    console.log(value);
    dispatch(postdata(value));
    setTimeout(()=>{
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    },1000)
  }

  const handlePage = ()=>{
    setPage((page)=>page+1);
  }

  useEffect(() => {
    setG(values1);
    setP(values2);
  }, [values1,values2]);

  useEffect(() => {
    dispatch(getdata(page));
  }, [page]);

  return (
    <>
      <Box display={"grid"} gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} className={style.main}>
        <Box className={style.left}>
          <Heading>Question: {page}</Heading>
          <Divider/>
          <Box>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                <Text>
                  {g[0]?.question}:
                </Text>
                <FormLabel>Input</FormLabel>
                <Text>{g[0]?.input}</Text>
                <FormLabel>Output</FormLabel>
                <Text>{g[0]?.output}</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          </Box>
        </Box>
        <Box>
          <Textarea autoFocus placeholder='# Write Code Here' rows={20} bg="black" color="orange" padding={"20px"} onChange={(e)=>setSubmitValue(e.target.value)}/>
          <Box className={style.right}>
            <Button onClick={()=>handleSubmit()} bg="blue.200">Run Code</Button>
            <Button bg="gray.300" onClick={()=>handlePage()}>Next</Button>
          </Box>
        </Box>
      </Box>
      <Box w={{sm:"100%",md:"95%",lg:"80%"}} className={style.boxtable}>
        <Tablez p = {p}/>
      </Box>
      <Box ref={bottomRef}></Box>
    </>
  )
}

export default App
