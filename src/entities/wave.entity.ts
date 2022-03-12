import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity()
@Unique('unique', ['play_time', 'player_1', 'player_2', 'player_3', 'player_4'])
export class Waves {
  @PrimaryGeneratedColumn()
  readonly wave_id: number;

  @Column('int', { width: 11, nullable: false })
  start_time: number;

  @Column('int', { width: 11, nullable: false })
  play_time: number;

  @Column('smallint', { width: 4, nullable: false })
  ikura_num: number;

  @Column('tinyint', { width: 3, nullable: false })
  golden_ikura_num: number;

  @Column('tinyint', { width: 3, nullable: false })
  golden_ikura_pop_num: number;

  @Column('tinyint', { width: 3, nullable: false })
  quota_num: number;

  @Column('tinyint', { width: 3, nullable: false })
  event_type: number;

  @Column('tinyint', { width: 3, nullable: false })
  water_level: number;

  @Column('tinyint', { width: 1, nullable: false })
  is_clear: boolean;

  @Column('varchar', { length: 16, nullable: false })
  player_1: string;

  @Column('varchar', { length: 16, nullable: false })
  player_2: string;

  @Column('varchar', { length: 16, nullable: false })
  player_3: string;

  @Column('varchar', { length: 16, nullable: false })
  player_4: string;
}
