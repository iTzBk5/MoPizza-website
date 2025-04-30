
import { useEffect, useRef } from "react"
import '../Vdcart/Vdcart.css'
import vd1 from '../Assets/vd1.mp4';

export default function VdCart() {
  const blockRef = useRef(null)

  // Add mouse movement tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blockRef.current) return

      const block = blockRef.current
      const rect = block.getBoundingClientRect()

      // Calculate mouse position relative to the center of the eement
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      // Calculate rotation based on mouse position
      const rotateX = y / -100
      const rotateY = x / 100

      // Apply the 3D transform
      block.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
    }

    const handleMouseLeave = () => {
      if (!blockRef.current) return
      // Reset transform on mouse leave with smooth transition
      blockRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    blockRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      blockRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className='absolute'>
      <div className="view">
        <div ref={blockRef} className="block">
          <video  src={vd1} autoPlay muted loop playsInline></video>
          <div className="block-reflection"></div>
        </div>
      </div>
    </div>
  )
}
