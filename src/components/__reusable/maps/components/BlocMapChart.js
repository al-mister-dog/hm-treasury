import { useState, memo } from "react";
import ReactTooltip from "react-tooltip";
import { roundToMillion, roundToBillion } from "../../tools/RoundNums";
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  Sphere,
  Graticule,
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import { scaleLinear } from "d3-scale";

const useStyles = makeStyles(() => ({
  formCtrlLabel: {
    fontSize: "0.2rem",
  },
}));

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ countries, blocs }) => {
  const [content, setContent] = useState("");


  function setFill(mappedCountry) {
    const bloc = blocs.find(bloc => bloc.name === mappedCountry.bloc);
    return bloc ? bloc.color : "#333"
    
  }

  function setToolTip(mappedCountry) {
    setContent(`${mappedCountry.NAME}: ${mappedCountry.bloc}`);
  }

  return (
    <>
      <Box sx={{ border: "1px solid #d7d7d7", borderRadius: "5px", padding: "10px" }}>
        <div style={{ width: "100%", height: "60vh" }}>
          <ComposableMap
            data-tip=""
            width={900}
            height={400}
            projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
          >
            <ZoomableGroup>
              <Sphere stroke="#000" strokeWidth={0.3} />
              <Graticule stroke="#000" strokeWidth={0.3} />
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const mappedCountry = countries.find(
                      (country) => country.iso === geo.properties.ISO_A3
                    );

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={mappedCountry ? setFill(mappedCountry) : "#333"}
                        stroke="green"
                        strokeWidth={0.3}
                        onMouseEnter={() => {
                          mappedCountry
                            ? setToolTip(mappedCountry)
                            : setContent("no data");
                        }}
                        onMouseLeave={() => {
                          setContent(mappedCountry.bloc);
                        }}
                        style={{
                          hover: {
                            fill: "#2D4263",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <ReactTooltip>{content}</ReactTooltip>
        </div>
      </Box>
    </>
  );
};

export default memo(MapChart);
