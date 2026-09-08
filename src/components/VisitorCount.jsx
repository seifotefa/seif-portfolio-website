import { useEffect, useState } from 'react'

const goatCounterCode = import.meta.env.VITE_GOATCOUNTER_CODE
const visitorOffset = Number(import.meta.env.VITE_VISITOR_OFFSET || 744)

export const VisitorCount = () => {
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!goatCounterCode) return undefined

    const counterUrl = `https://${goatCounterCode}.goatcounter.com`
    const script = document.createElement('script')
    script.src = 'https://gc.zgo.at/count.js'
    script.async = true
    script.dataset.goatcounter = `${counterUrl}/count`
    document.head.appendChild(script)

    fetch(`${counterUrl}/counter/TOTAL.json`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.count) {
          const liveCount = Number(String(data.count).replace(/,/g, ''))
          setCount(Number.isNaN(liveCount) ? visitorOffset : visitorOffset + liveCount)
        }
      })
      .catch(() => {})

    return () => {
      script.remove()
    }
  }, [])

  return (
    <span aria-label="total visitors">
      {count ?? visitorOffset} visitors
    </span>
  )
}
