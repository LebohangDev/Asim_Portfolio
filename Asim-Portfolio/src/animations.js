export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99] // Custom cubic-bezier for "premium" feel
        }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger effect for children
            delayChildren: 0.1
        }
    }
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export const textReveal = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

export const revealContainer = {
    hidden: { opacity: 1 }, // Keep container visible
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};
