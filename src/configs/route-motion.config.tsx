import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionRouterProps {
  children: ReactNode
}

const MotionRoutes = ({ children }: MotionRouterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
export default MotionRoutes
