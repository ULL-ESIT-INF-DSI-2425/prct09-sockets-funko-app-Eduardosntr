import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { IFile } from "./interfaces.js"
// import { connectWithServer } from "./clientF.js"

export const argv = yargs(hideBin(process.argv))
  .command<IFile>(
    "Send",
    "Send a file path",
    (yargs) => {
      yargs.option("path", {
        alias: "p", 
        type: "string", 
        demandOption: true, 
        description: "Path of the file", 
    }); 
  }, 
  (args) => {
    // connectWithServer(args.path)
    console.log(args)
  }
)

.demandCommand()
.help().argv;