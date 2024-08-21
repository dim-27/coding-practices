import {assert} from 'chai';
import { getGrades } from '../grader.js'

describe("Solution", function() {
  it("should pass some sample tests", function() {
    assert.strictEqual(getGrades(0.7), "C");
    assert.strictEqual(getGrades(0.9), "A");
    assert.strictEqual(getGrades(0.6), "D");
  });
});