import { List } from "@mui/material"
import StyledComponent from "./styleComponents/StyledComponent"
import StyleProp from "./styleComponents/StyleProp"
import SxProp from "./styleComponents/SxProp"
import SystemProps from "./styleComponents/SystemProps"
import TailwindCss from "./styleComponents/TailwindCss"

export default function StyledToDo(){
    const styledItems = [
            'style prop',
            'system props',
            'sx prop',
            'styled component',
            'tailwind css'
          ]

    return(
        <div style={{width: '100%'}}>
            <List>
            <StyleProp title={styledItems[0]}/>
            <SystemProps title={styledItems[1]}/>
            <SxProp title={styledItems[2]}/>
            <StyledComponent title={styledItems[3]}/>
            <TailwindCss title={styledItems[4]}/>
            </List>
        </div>
    )
}