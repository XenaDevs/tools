import Fuse from "fuse.js";
import { toolsList } from "./tools";

const options = { keys: ["label", "shortDesc"] };
const myIndex = Fuse.createIndex(options.keys, toolsList);
export const fuse = new Fuse(toolsList, options, myIndex);
