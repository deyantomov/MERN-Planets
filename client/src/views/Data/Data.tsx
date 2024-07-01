import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { fetchAllPlanetData } from "../../api/fetchData";

interface IPlanetData {
  name: string,
  orderFromSun: number,
  hasRings: boolean,
  mainAtmosphere: Array<string>,
  surfaceTemperatureC: {
    min: number,
    max: number,
    mean: number
  }
}

export default function Data() {
  const [planetData, setPlanetData] = useState<IPlanetData[]>([]);
  const [triggerFetch, setTriggerFetch] = useState(true);
  const navigate = useNavigate();

  const TdStyle = {
    ThStyle: `w-1/6 min-w-[160px] border border-gray-300 bg-gray-300/70 py-4 px-3 text-lg font-medium text-black lg:px-4`,
    TdStyle: `text-dark border border-gray-300 bg-gray-100 py-5 px-2 text-center text-base font-medium`,
    TdStyle2: `text-dark border border-gray-300 bg-white py-5 px-2 text-center text-base font-medium`,
  };
  
  useEffect(() => {
    if (planetData.length > 0) {
      setTriggerFetch(false);
    } else {
      setTriggerFetch(true);
    }
  }, [planetData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAllPlanetData();
        setPlanetData(result.data);

        return result;
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      } catch (err: any) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [triggerFetch]);

  if (planetData.length === 0) {
    return <Loader />;
  }

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div className="w-full h-full flex align-center items-center justify-center bg-green-700">
      <section className="bg-white rounded-lg shadow-lg">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="max-w-full overflow-auto p-6">
                <button className="bg-red-500 text-white rounded-xl p-3 mb-6" onClick={handleClick}>
                  Go back
                </button>
                <table className="w-full table-auto">
                  <thead className="text center bg-primary">
                    <tr>
                      <th className={TdStyle.ThStyle}>Name</th>
                      <th className={TdStyle.ThStyle}>Order from sun</th>
                      <th className={TdStyle.ThStyle}>Has rings</th>
                      <th className={TdStyle.ThStyle}>Main Atmosphere</th>
                      <th className={TdStyle.ThStyle}>
                        Min surface temperature &deg;C
                      </th>
                      <th className={TdStyle.ThStyle}>
                        Max surface temperature &deg;C
                      </th>
                      <th className={TdStyle.ThStyle}>
                        Avg surface temperature &deg;C
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {planetData.length > 0 ? (
                      planetData.map((planet, index) => {
                        return (
                          <tr>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.name || "N/A"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.orderFromSun || "N/A"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.hasRings ? "Yes" : "No"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.mainAtmosphere.join(", ") || "N/A"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.surfaceTemperatureC.min || "N/A"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.surfaceTemperatureC.max || "N/A"}
                            </td>
                            <td className={index % 2 !== 0 ? TdStyle.TdStyle : TdStyle.TdStyle2}>
                              {planet.surfaceTemperatureC.mean || "N/A"}
                            </td>
                          </tr>
                        );
                      })) : (
                        <tr>
                          <td colSpan={7}>No data found.</td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
