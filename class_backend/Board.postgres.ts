import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"; //BaseEntity가 table만들기 위한 기능 가지고 있어.
// 여기서 입력 저장하면 postgres에 바로 입력됨.

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  // isDeleted - 삭제가 됐는지 안됐는지 기록하는 column
  deletedAt?: Date; //삭제가 됐고 언제가 삭제됐는지 까지
}
