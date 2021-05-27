import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "adc132c9e21d406b8942f52fb2b6d3fb",
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.status(400).json("unable to work with API"));
};

export default handleApiCall;
