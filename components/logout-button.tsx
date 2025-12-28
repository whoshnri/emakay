"use client"

import { logoutAction } from "@/app/actions/auth"
import { LogOut } from "lucide-react"

export function LogoutButton() {
    const handleLogout = async () => {
        await logoutAction()
        window.location.href = "/admin/login"
    }

    return (
        <button
            onClick={handleLogout}
            className="text-[10px] uppercase tracking-[0.3em] font-black hover:text-destructive transition-colors flex items-center gap-4 cursor-pointer"
        >
            <LogOut size={14} /> Exit System    
        </button>
    )
}
