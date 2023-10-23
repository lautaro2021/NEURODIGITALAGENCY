import React, {ReactNode, useContext} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '@/Context/AppContext';

type CustomLinkProps = {
    href:string,
    children: ReactNode;
}

function CustomLink({href, children}:CustomLinkProps) {
    const router = useRouter();
    const {isLoading, setIsLoading} = useContext(AppContext);

    const handleRedirect = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        if(router.asPath !== href){
            setIsLoading(true);
            setTimeout(() => {
                router.push(href);
                window.scrollTo(0, 0);
            }, 500)
        }
    }

  return (
    <>
    <a href={href} onClick={handleRedirect}>
        {children}
    </a>
    <style jsx>{`
        a{
            width: 100%;
            z-index: 500;
        }
    `}</style>
    </>
  )
}

export default CustomLink