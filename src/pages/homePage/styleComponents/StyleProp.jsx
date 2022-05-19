
export default function StyleProp({titile}){
   return (
        <div style={{display: "grid"}}>
                <div style={{
                    height: '50px',
                    display: "flex", 
                    flexDirection: 'row',
                    justifyContent: "center",
                    marginTop: '30px'
                }}>
                    <input type='checkbox' style={{marginLeft: '10px', width: "10%"}} 
                    name='StyleProp'
                    id='StyleProp'/>
                    <div style={{color: 'black', width: "80%", fontSize: '14px', marginLeft: '10px'}}>
                    {titile}
                    </div>
                    <button style={{
                        width: "10%",
                        height: "20px",
                        borderRadius: '25%',
                        background: '#73bd7a',
                        marginRight: '10px'
                    }}></button>
                </div>
        </div>
    )
}