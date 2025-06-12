import { Module } from "@nestjs/common";
import { TestTestModuleBase } from "./base/testTest.module.base";
import { TestTestService } from "./testTest.service";
import { TestTestController } from "./testTest.controller";
import { TestTestResolver } from "./testTest.resolver";

@Module({
  imports: [TestTestModuleBase],
  controllers: [TestTestController],
  providers: [TestTestService, TestTestResolver],
  exports: [TestTestService],
})
export class TestTestModule {}
