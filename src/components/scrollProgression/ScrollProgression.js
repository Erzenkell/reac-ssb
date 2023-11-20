import React from 'react'
import StyledProgress from './StyledProgress'

const ScrollProgression = () => {
    const [scrollProgress, setScrollProgress] = React.useState(0)

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const winHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = Math.round((scrollTop / winHeight) * 100);
            setScrollProgress(scrolled);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollProgress])

    return (
        <StyledProgress scroll={scrollProgress+'%'} />
    )
}

export default ScrollProgression;