const deepspeech = require('deepspeech');

const modelPath = '../deepspeech-0.9.3-models.pbmm';
const scorerPath = '../deepspeech-0.9.3-models.scorer';
const model = new DeepSpeech.Model(modelPath);
model.enableExternalScorer(scorerPath);

const transcribe = async (req, res) => {
  const audioBuffer = fs.readFileSync('./2830-3980-0043.wav');
  const transcription = model.stt(audioBuffer);
  res.json({ transcription });
};

module.exports = {
  transcribe,
};
