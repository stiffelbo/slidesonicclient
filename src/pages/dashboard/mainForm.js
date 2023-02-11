import React, { useState, useEffect } from "react";
import axios from "axios";

//Mui
import { Box, Typography, TextField, Grid, Slider, IconButton } from "@mui/material";

//Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
//styles
import styles from './dashboard.module.css';

//Comp
import CheckList from "./checkList";

export function sanitizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, "_");
}

function validateImageURL(url) {
    const regex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    return regex.test(url);
}

const MainForm = ({userName, setUserName, mode, setMode, bpm, setBpm, images, setImages, pages, page, setPage}) => {

    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    const [urlCopy, setUrlCopy] = useState('');

    useEffect(()=>{
        const left = page === 1 ? false : true;
        const right = page == pages ? false : true;
        setLeft(left);
        setRight(right);
    }, [images, page, pages]);

    const handleChange = e => {
        const val = e.target.value;
        setUserName(sanitizeString(val));
    }

    const handleAddUrl = e => {
        const val = e.target.value;
        const url = validateImageURL(val);
        if(url){
            const newImages = [...images];
            newImages.push(val);
            setImages(newImages);
            setTimeout(()=>{
                e.target.value = 'Image add to stack!';
            }, 2000);            
            setTimeout(()=>{
                e.target.value = '';
            }, 4000);
        }        
    }

    const handlePasteUrl = e => {
        const target = e.target;
        if(urlCopy){
            target.value = urlCopy;
            const event = new Event("change");
            target.dispatchEvent(event);
            setUrlCopy('');
        }
    }

    const handleChangeBpm = e => {
        const val = e.target.value;
        setBpm(val);
    }

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // handle the uploaded files
        const files = e.dataTransfer.files;
        console.log(files);
        // do something with the files
    };

    const handleModeChange = () => {
        if(mode === 'dash'){
            setMode('player');
        }
        if(mode === 'player'){
            setMode('dash');
        }
    }

    const dropText = `Drop files here.`;
    const dropSubText = `${100 - images.length} left to full your stack.`;

    const genre = bpm => {
        if(bpm < 84){
            return "good for: reggea, soul, hip hop";
        }
        if(bpm > 83 && bpm < 88){
            return "drum 'n' bass, hip hop";
        }
        if(bpm > 87 && bpm < 100){
            return "hip hop, r'n'b";
        }
        if(bpm > 99 && bpm < 117){
            return "funky, breaks, glitch hop, slow chill house";
        }
        if(bpm > 116 && bpm < 125){
            return "nu disco, house";
        }
        if(bpm > 124 && bpm < 130){
            return "edm, house, dance";
        }
        if(bpm > 129){
            return "trance, techno, goa, fast breaks";
        }
    }

    return ( <Box sx={{maxHeight: '100%', height: '100%', padding: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <img src="/img/logo.png" style={{width: '90px', cursor: 'pointer'}} onClick={() => setMode('player')}></img>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">SlideSonic</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton onClick={handleModeChange} color="primary">
                        {mode === 'dash' && <OndemandVideoIcon />}
                        {mode === 'player' && <DashboardIcon />}
                    </IconButton>
                </Grid>
            </Grid>   
            <Grid container>
                <CheckList 
                    userName={userName}
                    bpm={bpm}
                    images={images}
                />
            </Grid>   
            <Grid container mb={3} spacing={3}>
                {/*
                <Grid item md={12}>
                    <TextField 
                        label="username"
                        value={userName}
                        size="small"
                        sx={{width: "100%"}}
                        variant="standard"
                        onChange={e => handleChange(e)}
                    />
                </Grid>
*/}
                <Grid item md={12}>
                    <Typography >
                        BPM: <b>{bpm}</b> <i>{`   ${genre(bpm)}`}</i>
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Slider
                        size="small"
                        value={bpm}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={76}
                        max={149}
                        onChange={e=>handleChangeBpm(e)}    
                    />
                </Grid>
            </Grid>
            {userName && <Box 
                    className={styles.dropZone} 
                    onDrop={e => handleDrop(e)}
                    onDragOver={e => handleDrag(e)}
                >
                <Typography variant="h4">{dropText}</Typography>
                <Typography variant="body1">{dropSubText}</Typography>
            </Box>}
            <Grid container mt={1}>
                <Grid item md={12}>
                    <TextField 
                        label="Paste image url to add"
                        size="small"
                        sx={{width: "100%"}}
                        variant="standard"
                        onChange={e => handleAddUrl(e)}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent: 'center', marginTop: 'auto'}}>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    {left && <IconButton onClick={()=>setPage(page - 1)}>
                        <ArrowBackIosNewIcon />
                    </IconButton>}
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                {(right || left) && <Typography variant="h6">{page}</Typography>}
                </Grid>
                <Grid item md={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    {right && <IconButton onClick={()=>setPage(page + 1)}>
                        <ArrowForwardIosIcon />
                    </IconButton>}
                </Grid>
            </Grid> 
    </Box> );
}
 
export default MainForm;