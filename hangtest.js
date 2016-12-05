describe('protractor browser hang', function(){
  
  it('should hang on an assertion with an uncaught exception and potentially a promise',function(){
    browser.get('http://localhost:8000');
    element(by.tagName('li')).getText().then((text) => {
      expect(text).toEqual('nothing. this is uncaught exception');
    });
  });

});
