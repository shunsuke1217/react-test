import { useState } from 'react';
import { Autocomplete, Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
export const HomePage=()=>{
    const [display,setDisplay] = useState(true);
    const [selectvalue,setSelectvalue] = useState(null);
    const [inputvalue,setInputvalue] = useState("");
    const options=[
        {id:1,name:"jone"},
        {id:2,name:"jane"},
        {id:3,name:"jim"},
    ]
    return (
        <>
        <Button onClick={()=>{
            setDisplay(!display)
        }} variant='contained' color='secondary'>Toggle</Button>
        {display && <h1>HelloWorld</h1>}
        <Box>
            <TextField label='Name' variant='outlined' />
        </Box>
        <Card>
            <CardContent>
                <Typography variant='h6'>HelloWorld</Typography>
            </CardContent>
        </Card>
        <Typography >HelloWorld</Typography>
        <Autocomplete
            options={options}
            value={selectvalue}
            inputValue={inputvalue}
            onChange={(e,value)=>setSelectvalue(value)}
            onInputChange={(e,value)=>setInputvalue(value)}
            renderInput={(params)=>(<TextField {...params} label='技術を選択'/>)}
            />
        </> 
    )
}
