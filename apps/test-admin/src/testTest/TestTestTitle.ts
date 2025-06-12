import { TestTest as TTestTest } from "../api/testTest/TestTest";

export const TESTTEST_TITLE_FIELD = "id";

export const TestTestTitle = (record: TTestTest): string => {
  return record.id?.toString() || String(record.id);
};
