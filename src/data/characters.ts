import elesis from "../assets/characters/elesis.webp";
import lire from "../assets/characters/lire.webp";
import arme from "../assets/characters/arme.webp";
import lass from "../assets/characters/lass.webp";
import ryan from "../assets/characters/ryan.webp";
import ronan from "../assets/characters/ronan.webp";
import amy from "../assets/characters/amy.webp";
import jin from "../assets/characters/jin.webp";
import sieghart from "../assets/characters/sieghart.webp";
import mari from "../assets/characters/mari.webp";
import dio from "../assets/characters/dio.webp";
import zero from "../assets/characters/zero.webp";
import ley from "../assets/characters/ley.webp";
import rufus from "../assets/characters/rufus.webp";
import lin from "../assets/characters/lin.webp";
import asin from "../assets/characters/asin.webp";
import lime from "../assets/characters/lime.webp";
import edel from "../assets/characters/edel.webp";
import veigas from "../assets/characters/veigas.webp";
import decane from "../assets/characters/decane.webp";
import ai from "../assets/characters/ai.webp";

declare global {
  interface Character {
    name: string;
    src: string;
    id: number;
  }
}

export const characters: Character[] = [
  {
    id: 1,
    name: "elesis",
    src: elesis,
  },
  {
    id: 2,
    name: "lire",
    src: lire,
  },
  {
    id: 3,
    name: "arme",
    src: arme,
  },
  {
    id: 4,
    name: "lass",
    src: lass,
  },
  {
    id: 5,
    name: "ryan",
    src: ryan,
  },
  {
    id: 6,
    name: "ronan",
    src: ronan,
  },
  {
    id: 7,
    name: "amy",
    src: amy,
  },
  {
    id: 8,
    name: "jin",
    src: jin,
  },
  {
    id: 9,
    name: "sieghart",
    src: sieghart,
  },
  {
    id: 10,
    name: "mari",
    src: mari,
  },
  {
    id: 11,
    name: "dio",
    src: dio,
  },
  {
    id: 12,
    name: "zero",
    src: zero,
  },
  {
    id: 13,
    name: "ley",
    src: ley,
  },
  {
    id: 14,
    name: "rufus",
    src: rufus,
  },
  {
    id: 15,
    name: "lin",
    src: lin,
  },
  {
    id: 16,
    name: "asin",
    src: asin,
  },
  {
    id: 17,
    name: "lime",
    src: lime,
  },
  {
    id: 18,
    name: "edel",
    src: edel,
  },
  {
    id: 19,
    name: "veigas",
    src: veigas,
  },
  {
    id: 20,
    name: "decane",
    src: decane,
  },
  {
    id: 21,
    name: "ai",
    src: ai,
  },
];
