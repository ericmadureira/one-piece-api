import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  private characters: Character[] = []; // in memory for initial tests.
  private nextId: number = 1;

  create(createCharacterDto: CreateCharacterDto) {
    const newCharacter = { id: this.nextId++, ...createCharacterDto };
    this.characters.push(newCharacter);
    return newCharacter;
  }

  findAll() {
    return this.characters;
  }

  findOne(id: number) {
    return this.characters.findIndex(c => c.id === id);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    const index = this.characters.findIndex(c => c.id === id);
    if (index === -1) return null;
    this.characters[index] = { ...this.characters[index], ...updateCharacterDto };
    return this.characters[index];
  }

  remove(id: number) {
    const index = this.characters.findIndex(c => c.id === id);
    if (index === -1) return null;
    const [deleted] = this.characters.splice(index, 1);
    return deleted;
  }
}
