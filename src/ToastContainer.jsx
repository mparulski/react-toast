import React from "react"

const ToastContainer = () => {
    React.useEffect(() => {
        console.log("i've been rendered")
    })
    return (
        <div>
            toasts
        </div>
    )
}

export default ToastContainer