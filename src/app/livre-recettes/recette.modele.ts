export class Recette {
  public nom: string;
  public description: string;
  public cheminImage: string;

  constructor(nom: string, description: string, cheminImage: string) {
    this.nom = nom;
    this.description = description;
    this.cheminImage = cheminImage;
  }
}
