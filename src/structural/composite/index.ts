import { ConcreteFile } from "./concretes/concrete-file";
import { Folder } from "./concretes/folder";

const folder01 =  new Folder('Folder 01');
const folder02 =  new Folder('Folder 02');

const file01 = new ConcreteFile('file 01');
const file02 = new ConcreteFile('file 02');
const file03 = new ConcreteFile('file 03');

folder01.addFile(file01);
folder01.addFile(file02);
folder02.addFile(file03);

const root = new Folder('Root');
root.addFile(folder01);

folder01.addFile(folder02);
root.addFile(folder01);

root.scan();