import React from 'react'

function WeatherRow() {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  ">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        17-07-2024
      </th>
      <td className="px-6 py-4">
        34
      </td>
      <td className="px-6 py-4">
        Cloudy
      </td>
    </tr>

  )
}

export default WeatherRow
