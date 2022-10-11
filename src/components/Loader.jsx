import { height } from "@mui/system"
import React from "react"
import { ThreeDots } from "react-loader-spinner"

export const Loader = () => {

    return(
        <div style={{
            width:"100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                lineHeight: "0.025",
                justifyContent:"center",
                alignItems: "center"
            }}>
                <ThreeDots color={"blue"}/>
                <h2 style={{color:"blue"}}>Loading</h2>
            </div>
        </div>
    )
}