const printSet = (sets, reps, weight, metric) =>
  `${sets}x${reps} ${weight} ${metric ? ' kgs' : ' lbs'}`;

const findWeight = (exercise, weight, stepSize, barWeight) =>
  exercise.multiplier !== undefined
    ? roundDown(exercise.multiplier * weight, stepSize, barWeight)
    : exercise.weight;

const calculateBarbellWeights = (weight, barWeight, weights) => {
  weight -= barWeight;
  if (weight === 0) return 'Bar';
  weight /= 2;
  let weight_45 = 0;
  let weight_35 = 0;
  let weight_25 = 0;
  let weight_10 = 0;
  let weight_5 = 0;
  let weight_2half = 0;
  while (weight > 0) {
    if (weight >= weights[0]) {
      weight_45 += 1;
      weight -= weights[0];
      continue;
    } else if (weight >= weights[1]) {
      weight_35 += 1;
      weight -= weights[1];
      continue;
    } else if (weight >= weights[2]) {
      weight_25 += 1;
      weight -= weights[2];
      continue;
    } else if (weight >= weights[3]) {
      weight_10 += 1;
      weight -= weights[3];
      continue;
    } else if (weight >= weights[4]) {
      weight_5 += 1;
      weight -= weights[4];
      continue;
    } else {
      weight_2half += 1;
      weight -= weights[5];
      continue;
    }
  }
  let result = '';
  if (weight_45 !== 0) result += printWeightCountSubstring(weight_45, String(weights[0]));
  if (weight_35 !== 0) result += printWeightCountSubstring(weight_35, String(weights[1]));
  if (weight_25 !== 0) result += printWeightCountSubstring(weight_25, String(weights[2]));
  if (weight_10 !== 0) result += printWeightCountSubstring(weight_10, String(weights[3]));
  if (weight_5 !== 0) result += printWeightCountSubstring(weight_5, String(weights[4]));
  if (weight_2half !== 0) result += printWeightCountSubstring(weight_2half, String(weights[5]));
  return result.trim();
};

// Private Methods
const printWeightCountSubstring = (weight, text) =>
  weight > 1 ? `${weight}x${text} ` : `${text} `;

const roundDown = (num, stepSize, barWeight) =>
  num - (num % stepSize) < barWeight ? barWeight : num - (num % stepSize);

export { printSet, calculateBarbellWeights, findWeight };
