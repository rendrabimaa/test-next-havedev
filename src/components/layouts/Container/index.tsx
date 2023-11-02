import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='w-full p-4 bg-slate-200 min-h-screen max-h-fit'>
        {children}
    </div>
  )
}

export default Container