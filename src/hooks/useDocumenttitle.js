import {useEffect} from 'react'

const useDocumenttitle = (count) => (
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])
)

export default useDocumenttitle
