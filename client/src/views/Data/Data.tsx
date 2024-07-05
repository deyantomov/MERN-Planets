import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Table from "../../components/Table/Table";
import { fetchAllPlanetData } from "../../api/fetchData";
import { columns } from "../../common/constants";

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (planetData.length > 0) {
      setTriggerFetch(false);
      setLoading(false);
    } else {
      setTriggerFetch(true);
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [triggerFetch]);

  if (loading) {
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
                <Table columns={columns} data={planetData}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
