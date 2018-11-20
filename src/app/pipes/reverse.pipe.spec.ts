import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {

  //Use global helper
  let pipe;
  beforeEach(() => {
    pipe = new ReversePipe();
  })

  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  //My test
  it('should transform string', () => {
    expect(pipe.transform('12345')).toBe('54321');
  });

  //My test 2
  it('should trow an error', () => {
    expect(() => {
      pipe.transform({ x: 5})
    }).toThrowError('ReversePipe: This is not a string');
  });

});
