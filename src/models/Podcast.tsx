import Programmation from './Programmation'

export default class Podcast {

  constructor(
    public title: string,
    public id: number,
    public programmation: Programmation
  ) {}
}
