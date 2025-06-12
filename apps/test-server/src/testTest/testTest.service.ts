import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestTestServiceBase } from "./base/testTest.service.base";

@Injectable()
export class TestTestService extends TestTestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
