

export function ServicesDetail (props: { servId: number, details: string[] }) {
  const { servId, details } = props
  return (
    <ul>
      {
        details.map((detail, index) => {
          return (
            <li key={`${servId}.${index}`}>
              {detail}
            </li>
          )
        })
      }
    </ul>
  )
}
