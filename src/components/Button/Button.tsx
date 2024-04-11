import "./Button.css"

export default function Button({text}:{text:string}){
    return <div className="primary_button">
        {text} 
    </div>
}