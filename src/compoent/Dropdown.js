import React,{useState} from 'react'

import {NativeSelect,FormControl} from '@material-ui/core';
import '../Styles/Dropdown.css'
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import { Translate } from '@material-ui/icons';
import '../Styles/Dropdown.css';

  


export const Dropdown = () => {

  const [select1, setSelect1] = useState("Hyderabad, Sindh")

const handleChange = (event) => {
    const val = event.target.value;
    setSelect1(val)

  };

    return (
        <div>

        <Grid  container>
    
    <Grid item  >
            <FormControl  className="select1" variant="outlined"  >
      <InputLabel htmlFor="selectid" className="inputLabel"  ><span><SearchIcon/></span>{select1}</InputLabel>
           
            <Select
            style={{border:"2px solid black"}}
            native
            // defaultValue="" 
            id="selectid"
            label="Hyderabad"
             value={select1}
             onChange={handleChange}               
            >

        <option aria-label="None" value="" />
        <option value="Global1">Global1</option>
  
        <option value="Global2">Global1</option>
        <option value="Global3">Global1</option>
  
           </Select>
        </FormControl>
    
        </Grid>
  


            <Grid item  className="Searchgrid">


            <div className="search">
            <InputBase 
            style={{width:"100%", height:"100%",fontSize:"20px" }}
              placeholder="Find..."
           
              inputProps={{ 'aria-label': 'search' }}
            />

            <div className="searchIcon">
              <SearchIcon />
            </div>
             </div>








              </Grid>



        </Grid>


        </div>
    )
}
