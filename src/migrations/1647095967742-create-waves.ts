import {MigrationInterface, QueryRunner} from "typeorm";

export class createWaves1647095967742 implements MigrationInterface {
    name = 'createWaves1647095967742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`waves\` (\`wave_id\` int NOT NULL AUTO_INCREMENT, \`start_time\` int(11) NOT NULL, \`play_time\` int(11) NOT NULL, \`ikura_num\` smallint(4) NOT NULL, \`golden_ikura_num\` tinyint(3) NOT NULL, \`golden_ikura_pop_num\` tinyint(3) NOT NULL, \`quota_num\` tinyint(3) NOT NULL, \`event_type\` tinyint(3) NOT NULL, \`water_level\` tinyint(3) NOT NULL, \`is_clear\` tinyint(1) NOT NULL, \`player_1\` varchar(16) NOT NULL, \`player_2\` varchar(16) NOT NULL, \`player_3\` varchar(16) NOT NULL, \`player_4\` varchar(16) NOT NULL, UNIQUE INDEX \`IDX_b66c6d86053e4e43b9d48e63f2\` (\`player_1\`), UNIQUE INDEX \`IDX_5f5216a8a054d50590a74720b7\` (\`player_2\`), UNIQUE INDEX \`IDX_534b0ce64cf1c163dc2b51a2b1\` (\`player_3\`), UNIQUE INDEX \`IDX_26213b42dc21775590a90439aa\` (\`player_4\`), PRIMARY KEY (\`wave_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_26213b42dc21775590a90439aa\` ON \`waves\``);
        await queryRunner.query(`DROP INDEX \`IDX_534b0ce64cf1c163dc2b51a2b1\` ON \`waves\``);
        await queryRunner.query(`DROP INDEX \`IDX_5f5216a8a054d50590a74720b7\` ON \`waves\``);
        await queryRunner.query(`DROP INDEX \`IDX_b66c6d86053e4e43b9d48e63f2\` ON \`waves\``);
        await queryRunner.query(`DROP TABLE \`waves\``);
    }

}
