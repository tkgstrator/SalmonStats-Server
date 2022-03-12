import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Waves {
  @PrimaryGeneratedColumn()
  readonly wave_id: number;

  @Column('int', { width: 11, nullable: false })
  start_time: number;

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
}
