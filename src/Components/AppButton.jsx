import "./AppButton.css"

export const ButtonTypes = {
    Button: "Btn",
    IconButton: "IconBtn"
}
const AppButton = ({ onClick, text, icon, type }) => {

    switch (type) {
        case ButtonTypes.Button:
            return <button className="app-button" onClick={onClick}>{text}</button>
        case ButtonTypes.IconButton:
            return <button className="icon-btn" onClick={onClick}><div style={{ display: "flex" }}>{icon}</div></button>
        default:
            return <button className="app-button" onClick={onClick}>{text} {icon}</button>
    }
}

export default AppButton