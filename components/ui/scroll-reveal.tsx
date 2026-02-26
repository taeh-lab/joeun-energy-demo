"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    animation?: "fade-up" | "fade-in" | "scale-in"
    delay?: number
}

export function ScrollReveal({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("reveal-visible")
                        }, delay)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={elementRef} className={`reveal-init reveal-${animation} ${className}`}>
            {children}
        </div>
    )
}
