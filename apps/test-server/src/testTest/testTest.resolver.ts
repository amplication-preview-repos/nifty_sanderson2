import * as graphql from "@nestjs/graphql";
import { TestTestResolverBase } from "./base/testTest.resolver.base";
import { TestTest } from "./base/TestTest";
import { TestTestService } from "./testTest.service";

@graphql.Resolver(() => TestTest)
export class TestTestResolver extends TestTestResolverBase {
  constructor(protected readonly service: TestTestService) {
    super(service);
  }
}
