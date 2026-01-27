export interface EventColor {
    bgColor: string
    bgHoverColor: string
    bgIconColor: string
    textColor: string
    darkBgColor: string
}

const palette = [
    "red","amber","lime","emerald","teal","sky","violet","fuchsia",
    "rose","indigo","yellow","green","blue","purple","pink","gray","cyan",
]

function stringToIndex(str: string) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    return Math.abs(hash)
}

export function getEventColors(eventName: string): EventColor {
    const index = stringToIndex(eventName) % palette.length
    const color = palette[index]

    return {
        bgColor: `bg-${color}-100`,
        bgHoverColor: `hover:bg-${color}-200`,
        bgIconColor: `bg-${color}-500`,
        textColor: `text-${color}-500`,
        darkBgColor: `bg-${color}-500`,
    }
}
