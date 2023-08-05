export default function FormInputButton ({children}) {
    return(
        <input type="submit" className="button-input" value={children} />
    )
}