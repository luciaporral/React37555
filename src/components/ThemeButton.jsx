import { Switch,  FormGroup, FormControlLabel } from "@mui/material";
import { ActiveThemeContext,useTheme } from "../context/theme-context";
import React from "react"
class ThemedButton extends React.Component{
    render(){
        let theme = this.context;
        return(
            <>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked onClick={theme.handleActiveTheme} />} label="Dark Mode" />
            </FormGroup>
            </>
        );
    }
}

ThemedButton.contextType = ActiveThemeContext;

export default ThemedButton