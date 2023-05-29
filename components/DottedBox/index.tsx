import React, { ReactNode } from "react"

interface DottedBoxProps {
  children: ReactNode
}

const DottedBox: React.FC<DottedBoxProps> = ({ children }) => {
  return (
    <div className="border border-dashed border-2 rounded-lg border-purple p-6 md:p-4">
      {children}
    </div>
  )
}

export default DottedBox
