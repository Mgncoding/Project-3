import React, { Component } from "react"
import { Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: { //delete the object and chang this to props.chartData
                labels: ["Fixed Expenses", "Variable Expenses", "Debt", "Salary"],
                datasets: [{
                    label: "",
                    data: [ ],
                    backgroundColor: [ ]
                }]

            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "bottom",
        location: "Finances"
    }
    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{ 
                        title: {
                            display: this.props.displayTitle,
                            text: " Your Budget" + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                     }} //optional
                />
            </div>
        )
    }

}
export default Chart;