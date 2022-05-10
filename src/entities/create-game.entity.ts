import { SourceType } from '../enum/source-type';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { EntityRepository } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
@Entity()
export class CreateGame extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'game_id' })
  gameId: string;

  @Column('varchar', { array: true, name: 'member', default: [] })
  member: string[];

  @Column('varchar', { name: 'source_id' })
  sourceId: string;

  @Column({
    type: 'enum',
    enum: SourceType,
    name: 'source_type',
  })
  sourceType: SourceType;
  @Column('boolean', { name: 'isEnd', default: false })
  isEnd: boolean;
  @CreateDateColumn({ name: 'create_at' })
  create_at: Date;
}
@EntityRepository(CreateGame)
export class CreateGameRepository extends BaseRepository<CreateGame> {}
