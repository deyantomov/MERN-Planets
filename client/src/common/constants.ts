/* eslint-disable */

export const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border border-gray-300 bg-gray-300/70 py-4 px-3 text-lg font-medium text-black lg:px-4`,
  TdStyle: `text-dark border border-gray-300 bg-gray-100 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border border-gray-300 bg-white py-5 px-2 text-center text-base font-medium`,
};

export const columns = [
  {
    key: "name",
    title: "Name",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
  },
  {
    key: "orderFromSun",
    title: "Order from sun",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
  },
  {
    key: "hasRings",
    title: "Has Rings",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
  },
  {
    key: 'mainAtmosphere',
    title: 'Main Atmosphere',
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
    render: (value: any) => value.length > 0 ? value.join(", ") : "N/A",
  },
  {
    key: "surfaceTemperatureC",
    title: "Min surface temperature",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
    render: (data: any) => data?.min ?? "N/A",
  },
  {
    key: "surfaceTemperatureC",
    title: "Max surface temperature",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
    render: (data: any) => data?.max ?? "N/A",
  },
  {
    key: "surfaceTemperatureC",
    title: "Avg surface temperature",
    thStyle: TdStyle.ThStyle,
    tdStyle: TdStyle.TdStyle,
    tdStyleAlt: TdStyle.TdStyle2,
    render: (data: any) => data?.mean ?? "N/A",
  },
];
