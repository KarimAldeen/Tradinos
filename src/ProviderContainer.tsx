import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import { Tchildren } from './Layout/app/Types'
import useDisableShortcutsAndRightClick from './Hooks/useDisableShortcutsAndRightClick';

function ProviderContainer({children}:Tchildren) {
    useDisableShortcutsAndRightClick()
   
  return (
 <BrowserRouter basename='/'>
        {/* <ReduxT> */}
     <QueryProvider>
        {/* <ToastProvider> */}
             {children}
        {/* </ToastProvider> */}
    </QueryProvider>
    {/* </ReduxT> */}
</BrowserRouter>
    )
}

export default ProviderContainer