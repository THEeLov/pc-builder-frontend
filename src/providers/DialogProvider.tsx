import React, { createContext, useState } from "react"

export interface DialogContextType {
    isDialogOpen: boolean
    openDialog: () => void
    closeDialog: () => void
}

export const DialogContext = createContext<DialogContextType | undefined>(undefined)

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const openDialog = () => {
        setIsDialogOpen(true)
    }

    const closeDialog = () => {
        setIsDialogOpen(false)
    }

    return <DialogContext.Provider value={{ isDialogOpen, openDialog, closeDialog }}>{children}</DialogContext.Provider>
}
