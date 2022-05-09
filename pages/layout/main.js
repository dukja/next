import Nav from './../../component/Nav'

export default function Main({children}){
    return(
        <>
        <div className='dark-ink-higher siteWrap'>
            <Nav/>
            <div className='pageWraper'>
                {children}    
            </div>
            <div className='pagePading t-metadata-sm footer'>Dukyeon Ha</div>
        </div>
        <div className='bg'></div>
        </>
    )
}