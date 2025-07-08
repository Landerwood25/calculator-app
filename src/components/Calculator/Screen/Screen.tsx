interface ScreenProps {
    display : string;
}
export default function Screen({display} : ScreenProps) {
    return (
        <form>
            <input type="text" className="screen" value={display} readOnly />
        </form>
    )
}
