import {User} from "../../entities/UserEntity.js";

export class AuthenticationRepository {
    constructor(em){
        this.em = em
        // super(em, User);
    }

    login(userBody){
        // const dataUser = this.data.data.find((val) => val.username === userBody.username);

        // if (!dataUser) { 
        //     return "gada boy datanya"
        // }

        // if (userBody.password === dataUser.password){
        //     return 'login success';
        // } else {
        //     return 'wrong password';
        // }
    }

    register(data){
        // writeFileSync("./api/data.json", Buffer.from(JSON.stringify(data)));
        // console.log(data);
        // return this.data
    }

    async getAll(search){
        // console.log(search, 'apa');
    
        // if(search && search.length > 0){
        //     return this.data.data.filter((val) => val.username.includes(search))
        // };
    
        // return this.data.data;
        const dataAllUser = await this.em.findAll(User);
        return dataAllUser
    }
}

