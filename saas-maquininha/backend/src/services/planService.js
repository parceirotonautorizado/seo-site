let plans = {
  default: {
    pix: 0,
    deb: 0.57,
    cre: {
      1: 0.57,
      12: 7.97
    }
  }
};

export function getPlans() {
  return plans;
}

export function updatePlans(newPlans) {
  plans = {
    ...plans,
    default: {
      ...plans.default,
      ...newPlans
    }
  };

  return plans;
}