import inputArgs from "./handlers/cli/commands.ts";
import { imageToPAA } from "./handlers/images/imageToPAA.ts";

imageToPAA(inputArgs.image);
