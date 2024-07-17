import { IFile } from "../interfaces/file";

export class ConcreteFile implements IFile {
  constructor(private name: string) {}

  scan(indent?: string): void {
    console.log(`${indent}- ${this.name}`);
  }
}