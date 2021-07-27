import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

const typeDefs = gql`
  input UpdateBoardInput {
    writer: String
    title: String
    age: Int
  }
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  type Board { # 아래 fetch Board에 return한 Board가 타입이 없어서 정해주는거임.
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoard(number: Int!): Board
    fetchBoards: [Board] #Board라는 배열로 객체를 받아오는 것.
    fetchProduct(productId: ID!): Product
    fetchProducts: [Product]
  }
  # 주석
  type Mutation { # = playground에 나오는 부분  ~(괄호 안 = input = input타입) : 그냥 type
    createBoard(writer: String!, title: String!, age: Int!): Boolean
    updateBoard(number: Int!, updateBoardInput: UpdateBoardInput!): Boolean
    deleteBoard(number: Int!): Boolean #(삭제할 데이터 번호)자게는 값 Board로 해야돼.
    createProduct(
      seller: String!
      createProductInput: CreateProductInput!
    ): Boolean
  }
`;

const resolvers = {
  //  = 실질적인 api 부분 (type, resolevers부분 둘 다 쿼리 뮤테 들어가는거 똑같이 둘 다 들어가줘야해.)
  Query: {
    // 한개의 데이터 꺼내서 프엔에게 주기
    fetchBoard: (_: any, args: any) => {
      return Board.findOne({ where: { number: args.number, deletedAt: null } });
    },
    fetchBoards: () => {
      // 데이터 목록을 꺼내서 프엔에게 주기     return "안녕하세요"
      return Board.find({ where: { deletedAt: null } }); //목록 가져오기
    },
    //******* homework ------------------********/
    fetchProduct: (_: any, args: any) => {
      return Board.findOne({ where: { name: args.number, createdAt: null } });
    },
    fetchProducts: () => {
      return Board.find({ where: { createdAt: null } });
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터 만들고, 결과를 프엔에게 주기
      // 아래 Board = Board.postgres.ts에서 export해준 class 'Board'를 import한 것임.
      try {
        await Board.insert({
          //내용넣기(실제 db로 들어감.)
          writer: args.writer, //args하면 플그에서 mutation한 내용들이 들어감.
          title: args.title,
          age: args.age,
          // writer: "자두",
          // title: "제목이닷 !",
          // age: 9,
        });
      } catch (error) {
        console.log(error.message); // 보통 alert으로 에러 알렸는데 이건 백엔드니까 로그남겨줘
      }
      return true;
    },
    updateBoard: (_: any, args: any) => {
      // ({조건}, {바꿀 내용})
      Board.update(
        { number: args.number },
        {
          //number 해당하는 글만 내용 바꾼다는 것.
          writer: args.updateBoardInput.writer,
          title: args.updateBoardInput.title,
          age: args.updateBoardInput.age,
        }
      );
      return true; // Boolean타입으로 정해놨으니까 true함
    },
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() }); // 실무방법
      // Board.delete({ number: args.number });
      return true;
    },
  },
};

const server = new ApolloServer({
  // api와 playground의 type을 둘 다 가지고있는 부분
  typeDefs: typeDefs, // 보여줄 해당 타입과 api종류들
  resolvers: resolvers, // resolvers = api
});

createConnection({
  // 접속정보 //!----- 백엔드와 데이터베이스의 이 것을 연결 시도한다 !!!!
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5007,
  host: "34.64.71.71", // = 'db.example.codebootcamp.co.kr' 의 ip주소
  entities: [__dirname + "/*.postgres.ts"], //table관련된 파일이 어딨니?   dir~ = 현재위치
  logging: true,
  synchronize: true, // 원래 입력 직접해야되는데 이거 하면 자동으로 되는거 확인됨.
}).then(() => {
  //!----- 연결 성공 시 실행 !!!!
  console.log("접속완료!!");
  server.listen({ port: 4000 });
});
