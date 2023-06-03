
// Cell type X means - empty
export enum CellType {
  X, I, O, T, J, L, S, Z
}

export const cellTypeColor = new Map<string, string>([
  ['X', "white"],
  ['I', "cyan"],
  ['O', "yellow"],
  ['T', "purple"],
  ['J', "blue"],
  ['L', "orange"],
  ['S', "green"],
  ['Z', "red"]
]);

export class Cell {
  private index: number; //TODO could be removed?
  // public empty: boolean = true; //TODO could be removed?
  public type: CellType;

  constructor(index:number, type:CellType) {
    this.index = index;
    this.type = type;
  }

  public isEmpty(): boolean {
    return this.type !== CellType.X;
  }

  public getColor(): string {
    return cellTypeColor.get(this.type.toString())!;
  }
}
