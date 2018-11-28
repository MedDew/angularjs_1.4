'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
/*
describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

});


describe('PhoneListCtrl', function()
{
  beforeEach(function() {
    browser.get('app/index.html');
  });
  it('should create "phones" model with 3 phones', function() 
  {
    var scope = {},
    ctrl = new PhoneListCtrl(scope);
    console.log("YAWP");
    expect(scope.phones.length).toBe(3);
  });
  
});
*/

describe('PhoneCat App', function() {
  
  describe('Phone list view', function() {
    
    beforeEach(function() {
      // browser.get('app/index.html');
      browser.get('app/index.html#/phones');
    });
    
    
    /*it('should filter the phone list as a user types into the search box', function() {
      
      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));
      
      expect(phoneList.count()).toBe(3);
      
      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);
      
      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(2);
    });
    
    it('should display the current filter value in the title bar', function() {
      var query = element(by.model('query'));
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery :\s*$/);
      
      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery : nexus$/);
    });*/
    
    /*
    it('should be possible to control phone order via the drop down select box', function() {
      
      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      var query = element(by.model('query'));
      
      function getNames() {
        
        return phoneNameColumn.map(function(elm) {
          console.log("YAWP");
          // console.log(elm.getText());
          return elm.getText();
        });
      }
      
      // browser.manage().logs().get("browser").then(function(browserLogs){
      //   browserLogs.forEach(function(log) {
      //     if(log.level > 900)
      //     {
      //       console.log("BROWSER LOG");
      //     }
      //   });
      // });

      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter
      
      //expect(phoneNameColumn.count()).toBe(3);
      expect(getNames()).toEqual([
        "Motorola XOOM\u2122 with Wi-Fi",
        "MOTOROLA XOOM\u2122"
      ]);
    
      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();
    
      expect(getNames()).toEqual([
        "MOTOROLA XOOM\u2122",
        "Motorola XOOM\u2122 with Wi-Fi"
      ]);
    });
    */

   it('should render phone specific links', function() {
    var query = element(by.model('query'));
    query.sendKeys('sa');
    element(by.css('.phones li a')).click();
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/phones/samsung-gem');
    });
  });

  });

  it('should redirect index.html to index.html#/phones', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url).toEqual('/phones');
      });
  });

  describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });


    it('should display placeholder page with phoneId', function() {
      expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
    });

    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });
    
    /*it('should display 4 thumbnail in the detail page', function() {
      var phoneThumbnails = element.all(by.repeater('img in phone.images'));
      expect(phoneThumbnails.count()).toBe(4);
    });*/
  });

});