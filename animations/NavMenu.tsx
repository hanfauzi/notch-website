const parentMenu = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.3
        }
    }
}
const childMenu = {
    hidden: { y: '-100%' },
    show: { y: '0%' }
}

export { parentMenu , childMenu };