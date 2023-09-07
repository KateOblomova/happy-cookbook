import Ramsay from "../assets/Gordon-Ramsay.avif"

export default function Error() {
    return (
        <>
        <h1 style={{textAlign: "center"}}>Page not Found <br/> Error 404</h1>
        <div style={{display: "flex", justifyContent:"center"}}>
        <img width="800px" src={Ramsay} alt="gorden-ramsay" />
        </div>
        <h1 style={{textAlign: "center"}}>You Donkey!</h1>
        </>
    )
}