import { useEffect } from 'react';
import AOS from "aos";

function Layout({children}){
        useEffect(() => {
                AOS.init();
                AOS.refresh();
              }, []);
        return children
}

export default Layout