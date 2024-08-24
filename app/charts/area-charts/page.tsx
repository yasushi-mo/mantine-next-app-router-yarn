import { AreaChart } from "@mantine/charts";
import { DATA } from "../../../features/charts/area-charts";

export default function AreaCharts() {
  return (
    <div>
      Area Charts
      <AreaChart
        h={300}
        data={DATA}
        dataKey="date"
        series={[
          { name: "Apples", color: "indigo.6" },
          { name: "Oranges", color: "blue.6" },
          { name: "Tomatoes", color: "teal.6" },
        ]}
        curveType="linear"
      />
    </div>
  );
}
