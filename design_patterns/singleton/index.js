import { file1_execute, file1_execute2 } from "./file1.js";
import { file2_execute, file2_execute2 } from "./file2.js";
import { file3_execute, file3_execute2 } from "./file3.js";

export default {
    file1: [file1_execute, file1_execute2],
    file2: [file2_execute, file2_execute2],
    file3: [file3_execute, file3_execute2],
};
