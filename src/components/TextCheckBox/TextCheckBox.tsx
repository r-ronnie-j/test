import CheckBox, { CheckBoxVariant } from "../CheckBox/checkBox"
import "./TextCheckBox.css"

interface TextCheckBoxProps {
    text: string, check: boolean, setCheck: React.Dispatch<React.SetStateAction<boolean>>, variant: CheckBoxVariant 
}

const TextCheckBox :React.FC<TextCheckBoxProps>= ({ text, check, setCheck, variant })=> {
    return <div className="text-checkbox">
        <div>{text}</div>
        <div style={{
            background:"red"
        }}>
        <CheckBox check={check} setCheck={setCheck} variant={variant} />
        </div>
    </div>
}

export default TextCheckBox