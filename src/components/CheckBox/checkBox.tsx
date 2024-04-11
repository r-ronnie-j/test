import "./checkBox.css"

export enum CheckBoxVariant {
    SimpleBordered,
    SimpleBorderedBackground,
    LightBlue,
    DarkBlue,
    DarkBlueBordered,
    DarkBlueBackground,
    LightBlueBackground
}

interface CheckBoxProps {
    check: boolean;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
    variant?: CheckBoxVariant
}

const CheckBox: React.FC<CheckBoxProps> = ({ check, setCheck, variant = CheckBoxVariant.DarkBlueBackground}) => {
    let bordered =  ""
    let sorrounding =  ""
    let checkmarkBg = "checkmark_bg_white"
    let checkmarkColor = "checkmark_dark"

    switch (variant) {
        case CheckBoxVariant.SimpleBordered:
            bordered = "bordered"
            sorrounding = ""
            checkmarkColor = "checkmark_light"
            checkmarkBg = "checkmark_bg_white"
            break;

        case CheckBoxVariant.SimpleBorderedBackground:
            bordered = "bordered"
            sorrounding = "sorrounding"
            checkmarkColor = "checkmark_dark"
            checkmarkBg = "checkmark_bg_white"
            break;

        case CheckBoxVariant.LightBlue:
            bordered = ""
            sorrounding = ""
            checkmarkColor = "checkmark_white"
            checkmarkBg = "checkmark_bg_light_blue"
            break;

        case CheckBoxVariant.DarkBlue:
            bordered = ""
            sorrounding = ""
            checkmarkColor = "checkmark_white"
            checkmarkBg = "checkmark_bg_dark_blue"
            break;

        case CheckBoxVariant.DarkBlueBackground:
            bordered = ""
            sorrounding = "sorrounding"
            checkmarkColor = "checkmark_white"
            checkmarkBg = "checkmark_bg_dark_blue"
            break;

        case CheckBoxVariant.DarkBlueBordered:
            bordered = "bordered"
            sorrounding = ""
            checkmarkColor = "checkmark_white"
            checkmarkBg = "checkmark_bg_dark_blue"
            break;

        case CheckBoxVariant.LightBlueBackground:
            bordered = ""
            sorrounding = "sorrounding"
            checkmarkColor = "checkmark_white"
            checkmarkBg = "checkmark_bg_light_blue"
            break;

    }

    return (
        <div className="contain" onClick={() => {
            setCheck(!check)
        }}>
            <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />
            <div className={sorrounding}></div>
            <span className={`checkmark ${check?bordered:"border"} ${checkmarkBg} ${checkmarkColor}`} />
        </div>
    );
};

export default CheckBox;
