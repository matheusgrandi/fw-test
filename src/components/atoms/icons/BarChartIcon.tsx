type BarChartIconProps = {
  height?: number | string
  width?: number | string
  color?: string
}
const BarChartIcon = ({
  height = '16',
  width = '16',
  color = '#6B7280',
}: BarChartIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 5V13M9 8V13M5 11V13M3 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17Z'
        stroke={color}
        strokeWidth='1.5'
      />
    </svg>
  )
}

export default BarChartIcon
