import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "Redux/userOperations";



export const UserMenu = () => {
    const name = useSelector(state => state.user.user.name)
    const dispath = useDispatch()

    return(
        <div>
            <p>{name}</p>
            <button type='button' onClick={() => dispath(logoutThunk())}> 🔴 </button>

        </div>
    )
}