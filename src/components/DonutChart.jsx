
import { TEChart } from "tw-elements-react";

export default function ChartDoughnut() {
  return (
   <div  className="w-96 pt-10">
     <TEChart
      type="doughnut"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365],
            backgroundColor: [
              "rgba(63, 81, 181, 0.5)",
              "rgba(77, 182, 172, 0.5)",
              "rgba(66, 133, 244, 0.5)",
              "rgba(156, 39, 176, 0.5)",
              "rgba(233, 30, 99, 0.5)",
            ],
          },
        ],
      }}
    />
   </div>
  );
}