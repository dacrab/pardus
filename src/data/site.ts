export const site = {
  name: "Pardus",
  url: "https://pardus.wine",
  title: "PARDUS — Natural Wine from the Aegean",
  description:
    "A natural wine estate on Ano Vouno, a Cycladic island. Hand farmed at 612 metres, fermented wild in clay and concrete, bottled unfined.",
  founded: 2019,
  altitude: 612,
  coordinates: { lat: "38.2146° N", lng: "22.1234° E" },
  geo: { lat: 38.2146, lng: 22.1234 },
  address: {
    street: "Ano Vouno 84401",
    locality: "Ano Vouno",
    region: "Cyclades",
    postalCode: "84401",
    country: "GR",
    display: "Ano Vouno, Cyclades",
  },
  email: {
    hello: "hello@pardus.wine",
    visit: "visit@pardus.wine",
  },
} as const;

export const nav = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "The land", href: "#land" },
  { label: "Wines", href: "#wines" },
  { label: "Process", href: "#process" },
  { label: "Visit", href: "#visit" },
] as const;

/** The four headline numbers. */
export const stats = [
  { label: "Altitude", value: `${site.altitude} m` },
  { label: "Vines", value: "67 yrs avg" },
  { label: "Estate", value: "3.2 ha" },
  { label: "Bottles / yr", value: "3,120" },
] as const;

export const estateFacts = [
  { label: "Founded", value: String(site.founded) },
  { label: "Hectares", value: "3.2" },
  { label: "Soils", value: "Schist, limestone" },
  { label: "Aspect", value: "North-west, meltemi" },
  { label: "Grapes", value: "5 varieties" },
  { label: "Winemaker", value: "M. Halaris" },
] as const;

export const landFacts = [
  { label: "Soil", value: "Schist, limestone, decomposed clay" },
  { label: "Aspect", value: "North-west, exposed to the meltemi" },
  { label: "Vines", value: "Assyrtiko and Mavrotragano, massale" },
  { label: "Grapes", value: "Assyrtiko, Malagousia, Muscat, Mavrotragano, Voudomato" },
] as const;

export const wines = [
  {
    name: "Bianco",
    varietal: "Assyrtiko · Malagousia",
    year: "2023",
    notes: "Wild fennel, salt rind, quince, wet stone",
    abv: "12.5%",
    maceration: "14 days on skins",
    production: "1,180 bottles",
    price: "€38",
  },
  {
    name: "Rosso",
    varietal: "Mavrotragano · Voudomato",
    year: "2022",
    notes: "Sour cherry, dried rose, black tea, iron",
    abv: "13.0%",
    maceration: "21 days on skins",
    production: "820 bottles",
    price: "€44",
  },
  {
    name: "Pet-Nat",
    varietal: "Assyrtiko · Muscat",
    year: "2023",
    notes: "Bergamot, pear skin, yeast, sea air",
    abv: "11.5%",
    maceration: "Ancestral, disgorged by hand",
    production: "640 bottles",
    price: "€32",
  },
  {
    name: "Amphora",
    varietal: "Mavrotragano, old vines",
    year: "2021",
    notes: "Pomegranate, tobacco, tar, dried herbs",
    abv: "12.5%",
    maceration: "11 months in clay amphora",
    production: "480 bottles",
    price: "€68",
  },
] as const;

export const processSteps = [
  {
    title: "Hand harvest",
    timing: "August – September",
    body: "Three passes through each parcel over ten days. Grapes go into 18 kg crates and are sorted at the vine. Only the first pass is kept.",
  },
  {
    title: "Whole-bunch press",
    timing: "August – September",
    body: "Six to eight hours at low pressure. The juice settles overnight in stainless, then moves by gravity.",
  },
  {
    title: "Wild ferment",
    timing: "September – November",
    body: "Native yeasts in old clay or concrete. No temperature control beyond the cellar itself, which is enough.",
  },
  {
    title: "Time in vessel",
    timing: "November – August",
    body: "Eleven months on the lees. Whites are stirred monthly; the reds are left alone until bottling.",
  },
  {
    title: "Bottle unfined",
    timing: "Following autumn",
    body: "A single racking by gravity. No fining, no filtration, and at most 12 mg/L of sulphur.",
  },
] as const;

export const neverUsed = [
  "Oak chips",
  "Selected yeasts",
  "Enzymes",
  "Acid adjustment",
  "Sugar adjustment",
  "Reverse osmosis",
  "Spinning cone",
  "Cryoextraction",
  "New barrique",
] as const;

export const visitDetails = [
  { label: "Hours", value: "Wednesday to Sunday, 16:00 – 20:30" },
  { label: "Duration", value: "90 minutes · four wines · bread & olive oil" },
  { label: "Price", value: "€45 per person, waived on an order over €90" },
  { label: "Where", value: site.address.street },
] as const;
