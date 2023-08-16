import { Pokemon } from './../pokemon/entities/pokemon.entity';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { HttpService } from '@nestjs/axios';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class SeedService {

  constructor(
    private readonly http: HttpService,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
  ) { }

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const { data } = await this.http.axiosRef.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert: {name: string, num: number}[] = [];

    data.results.forEach(async({ name, url }) => {
      const segments = url.split('/');
      const num = +segments[segments.length - 2];
      // const pokemon = await this.pokemonModel.create({name, num});
      pokemonToInsert.push({name, num});

    })

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }
}
