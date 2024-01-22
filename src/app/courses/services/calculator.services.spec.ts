import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";
describe("CalculatorService", () => {
  let calculator: CalculatorService;
  let loggerSpy: any;
  beforeEach(() => {
    console.log("Calling BeforeEach");

    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two nmubers", () => {
    console.log("Calling add test");

    let result = calculator.add(2, 2);

    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should substract two nmubers", () => {
    console.log("Calling substract test");
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0, "unpexceted substraction result");
  });
});
