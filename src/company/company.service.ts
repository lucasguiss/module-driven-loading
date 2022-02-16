import { Injectable } from "@nestjs/common";

@Injectable()
export class CompanyService {

    timeout(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async createCompany(): Promise<string> {
        await this.timeout(300)
        return "success"
    }

    

}