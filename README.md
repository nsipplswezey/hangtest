```
cd client
python3 -m http.server
```

Then

```
protractor config.js
```


```
Failures:
1) protractor browser hang should hang on an assertion with an uncaught exception and potentially a promise
  Message:
    Failed: No element found using locator: By(css selector, li)
  Stack:
    NoSuchElementError: No element found using locator: By(css selector, li)
        at WebDriverError (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:27:5)
        at NoSuchElementError (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/error.js:242:5)
        at /Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/built/element.js:707:27
        at ManagedPromise.invokeCallback_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1379:14)
        at TaskQueue.execute_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2913:14)
        at TaskQueue.executeNext_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2896:21)
        at asyncRun (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2775:27)
        at /Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:639:7
        at process._tickCallback (internal/process/next_tick.js:103:7)Error
        at ElementArrayFinder.applyAction_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/built/element.js:397:27)
        at ElementArrayFinder._this.(anonymous function) [as getText] (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/built/element.js:100:30)
        at ElementFinder.(anonymous function) [as getText] (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/built/element.js:728:22)
        at Object.<anonymous> (/Users/nicolas.sippl-swezey/Projects/protractor/hangtest.js:5:31)
        at /Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/jasminewd2/index.js:94:23
        at new ManagedPromise (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1082:7)
        at controlFlowExecute (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/jasminewd2/index.js:80:18)
        at TaskQueue.execute_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2913:14)
        at TaskQueue.executeNext_ (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2896:21)
        at asyncRun (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2820:25)
    From: Task: Run it("should hang on an assertion with an uncaught exception and potentially a promise") in control flow
        at Object.<anonymous> (/Users/nicolas.sippl-swezey/.nvm/versions/node/v6.9.1/lib/node_modules/protractor/node_modules/jasminewd2/index.js:79:14)
    From asynchronous test: 
    Error
        at Suite.<anonymous> (/Users/nicolas.sippl-swezey/Projects/protractor/hangtest.js:3:3)
        at Object.<anonymous> (/Users/nicolas.sippl-swezey/Projects/protractor/hangtest.js:1:1)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)

1 spec, 1 failure
Finished in 0.436 seconds
[18:45:05] I/local - Shutting down selenium standalone server.
[18:45:05] I/launcher - 0 instance(s) of WebDriver still running
[18:45:05] I/launcher - chrome #01 failed 1 test(s)
[18:45:05] I/launcher - overall: 1 failed spec(s)
[18:45:05] E/launcher - Process exited with error code 1
```
