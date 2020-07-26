export class Beer {
  id?: number;
  name?: string;
  tagline?: string;
  first_brewed?: string;
  description?: string;
  image_url?: string;
  abv?: number;
  ibu?: number;
  target_fg?: number;
  target_og?: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level?: number;
  volume?: BeerUnits;
  boil_volume?: BeerUnits;
  method?: BeerMethod;
  ingredients?: BeerIngredients;
  food_pairing?: string;
  brewers_tips?: string;
  contributed_by?: string;
}

export interface BeerMethod {
  mash_temp?: BeerMethodMashTemp[];
  fermentation?: BeerMethodFermentation;
  twist?: any;
}

export interface BeerMethodMashTemp {
  temp?: BeerUnits;
  duration?: number;
}

export interface BeerIngredients {
  malt?: BeerIngredientsUnits[];
  hops?: BeerIngredientsUnits[];
  yeast?: string;
}

export interface BeerMethodFermentation {
  temp?: BeerUnits;
}

export interface BeerIngredientsUnits {
  name?: string;
  amount?: BeerUnits;
  add?: string;
  attribute?: string;
}

export interface BeerUnits {
  value?: number;
  unit?: string;
}
