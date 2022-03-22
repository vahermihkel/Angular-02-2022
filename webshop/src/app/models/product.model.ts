export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public imgSrc: string,
    public category: string,
    public isActive: boolean
  ) {}
}