import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestTestService } from "./testTest.service";
import { TestTestControllerBase } from "./base/testTest.controller.base";

@swagger.ApiTags("testTests")
@common.Controller("testTests")
export class TestTestController extends TestTestControllerBase {
  constructor(protected readonly service: TestTestService) {
    super(service);
  }
}
