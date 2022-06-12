import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Row,
  Col,
  Container,
} from "reactstrap";
import Plot from "react-plotly.js";
import React, { useState } from 'react';

const data = {
  dayList: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
}
const Cards = () => {
  const [dayList, setDayList] = React.useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]);
  const [predictionData, setPredictionData] = React.useState([
    {
        "day": "Monday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Plain Papadum in the area. Looks like you will sell 19.75764774540769 Plain Papadum.",
                "name": "Plain Papadum",
                "url": "https://5.imimg.com/data5/NL/IR/TH/SELLER-58879595/plain-papad-500x500.jpg"
            }
        ]
    },
    {
        "day": "Tuesday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Sheek Kehab in the area. Looks like you will sell 21.84716440614097 Sheek Kehab.",
                "name": "Sheek Kehab",
                "url": "https://www.ndtv.com/cooks/images/seekh-kebab-620.jpg"
            }
        ]
    },
    {
        "day": "Wednesday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Mushroom - Chicken Tikka in the area. Looks like you will sell 17.96159599860432 Mushroom - Chicken Tikka.",
                "name": "Mushroom - Chicken Tikka",
                "url": "https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1.jpg"
            }
        ]
    },
    {
        "day": "Thursday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Mushroom - Chicken Tikka in the area. Looks like you will sell 17.96159599860432 Mushroom - Chicken Tikka.",
                "name": "Mushroom - Chicken Tikka",
                "url": "https://www.eitanbernath.com/wp-content/uploads/2020/10/Chicken-Tikka-LOW-RES-1.jpg"
            }
        ]
    },
    {
        "day": "Friday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Plain Papadum in the area. Looks like you will sell 19.75764774540769 Plain Papadum.",
                "name": "Plain Papadum",
                "url": "https://5.imimg.com/data5/NL/IR/TH/SELLER-58879595/plain-papad-500x500.jpg"
            }
        ]
    },
    {
        "day": "Saturday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Plain Papadum in the area. Looks like you will sell 19.75764774540769 Plain Papadum.",
                "name": "Plain Papadum",
                "url": "https://5.imimg.com/data5/NL/IR/TH/SELLER-58879595/plain-papad-500x500.jpg"
            }
        ]
    },
    {
        "day": "Sunday",
        "predictedDishes": [
            {
                "description": "Looks like people are loving your Vegetable Samosa. Estimated sales: 0",
                "name": "Vegetable Samosa",
                "url": "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa-960x1358.jpg"
            },
            {
                "description": "Looks like people are loving your Onion Bhaji. Estimated sales: 0",
                "name": "Onion Bhaji",
                "url": "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Onion-Bhaji-square-FS-23.jpg"
            },
            {
                "description": "You have the best Plain Papadum in the area. Looks like you will sell 19.75764774540769 Plain Papadum.",
                "name": "Plain Papadum",
                "url": "https://5.imimg.com/data5/NL/IR/TH/SELLER-58879595/plain-papad-500x500.jpg"
            }
        ]
    }
]);
  const [jsonData, setJsonDataData] = React.useState(JSON.parse("{\"data\":[{\"hovertemplate\":\"date=%{x}<br>footfall=%{y}<extra></extra>\",\"legendgroup\":\"\",\"line\":{\"color\":\"#636efa\",\"dash\":\"solid\"},\"marker\":{\"symbol\":\"circle\"},\"mode\":\"lines\",\"name\":\"\",\"orientation\":\"v\",\"showlegend\":false,\"x\":[\"2022-06-05\",\"2022-06-06\",\"2022-06-07\",\"2022-06-08\",\"2022-06-09\",\"2022-06-10\",\"2022-06-11\",\"2022-06-12\",\"2022-06-13\",\"2022-06-14\",\"2022-06-15\",\"2022-06-16\",\"2022-06-17\",\"2022-06-18\",\"2022-06-19\"],\"xaxis\":\"x\",\"y\":[27,16,16,17,18,38,40,26,15,15,16,17,37,39,25],\"yaxis\":\"y\",\"type\":\"scatter\"}],\"layout\":{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"anchor\":\"y\",\"domain\":[0.0,1.0],\"title\":{\"text\":\"date\"}},\"yaxis\":{\"anchor\":\"x\",\"domain\":[0.0,1.0],\"title\":{\"text\":\"footfall\"}},\"legend\":{\"tracegroupgap\":0},\"margin\":{\"t\":60}}}")["data"]);

  React.useEffect(() => {
    const fetchData = async () => {
      fetch(
        "https://9293-2405-204-5220-8b46-203c-c6de-57a7-6e38.in.ngrok.io/getPrediction?date=2022-06-12")
                    .then((res) => res.json())
                    .then((json) => {
                      // console.log(json)
                      setPredictionData(json["dayPredictions"])
                      setDayList(json["dayList"])
                      setJsonDataData(JSON.parse(json["chartData"])["data"])
                    })
    }
    fetchData();
  }, []);
  const styles = {
    card: {
      width:"1200",
      padding: '1rem'
    },
    cardImage: {
      objectFit: 'fit',
      width: '22vw',
      height: '30vh'
    }
  }
  const [radioIndex, setRadioIndex] = useState(0)
  function onChangeValue(event) {
    setRadioIndex(event.target.value);
  }
  return (
    <div>
      <Container fluid>
      <div>
          <Container fluid>
          <h5 className="mb-3 mt-3">Choose a day to know about the top three dishes in demand!</h5>
              <div className="options_days" onChange={onChangeValue}>
                  <Row justify-content>
                    {dayList.map((day, i) => (
                    <Col>
                      <div>
                        {console.log(radioIndex + " " + i)}
                        <input type="radio" value={i} checked={data.dayList[radioIndex] === day} />
                        <label>&nbsp;&nbsp;{day}</label>
                      </div>
                    </Col>
                  ))}
                  </Row>
              </div>
          </Container>
        <br></br>
        <Container fluid>
        <Row>
          <Col>
            <CardGroup>
              {predictionData.length > 0 &&  predictionData[radioIndex].predictedDishes.map((prediction) =>  
                <Card style={styles.card} variant="outlined">
                <CardImg alt="..." src={prediction.url} position="top" style={styles.cardImage}/>
                  <CardBody>
                    <CardTitle tag="h5">{prediction.name}</CardTitle>
                    <CardText>
                      {prediction.description}
                    </CardText>
                  </CardBody>
              </Card>
              )}
            </CardGroup>
          </Col>
        </Row>
        </Container>
      </div>
      </Container>
      <div>
      
      <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
      <Container fluid>
      <h5 className="mb-3 mt-3">Footfall prediction for the next week</h5>
      <Plot
        data={jsonData}
        layout={{ width: 1200, height: 400, title: "Footfall Prediction" }}
        />
      </Container>
      </div>
    </div>
  );
}
// .options_days{display:flex;flex-direction:row;}
export default Cards;