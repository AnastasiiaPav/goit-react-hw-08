import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader } from "components/Loader";
import { UserMenu } from "components/UserMenu";

const Loyout = () => {
const isLogin = useSelector(state => state.user.isLogged)
const isRefreshing = useSelector( state => state.user.isRefreshing)

return(
    <div>
         <header
        style={{
          display: 'flex',
          justifyContent: `${
            isLogin || isRefreshing ? 'space-between' : 'center'
          }`,
        }}
      >
        <h1>Phonebook</h1>
        {isLogin && <UserMenu />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
)
}

export default Loyout