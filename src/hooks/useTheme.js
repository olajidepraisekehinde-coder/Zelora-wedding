import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

export default function UseTheme() {
    const user = useContext(themeContext)
    return user
}
