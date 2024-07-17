import { IFile } from "../interfaces/file";

export class Folder implements IFile {
  private children: IFile[];

  constructor(private name: string, children?: IFile[]) {
    this.children = children || [];
  }

  scan(indent: string = ''): void {
    console.log(`${indent}> ${this.name}`);
    this.children?.forEach((child, index) => {
      child.scan(`${indent}   ` + '├── ');
    });
  }

  addFile(file: IFile): void {
    this.children.push(file);
  }
}