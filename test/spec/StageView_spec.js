var StageView = require('../../src/framework/stageview.js');
var CommonViewTests = require('./helpers/commonviewtests.js');
var CommonGroupViewTests = require('./helpers/commongroupviewtests.js');
var GroupView_renderChildPositionTests = require('./helpers/groupview_renderchildpositiontests.js');
var Common_renderChildPositionTests = require('./helpers/common_renderchildpositiontests.js');

var ViewsCommonParseTests = require('./helpers/views/common/parsetests.js');
var ViewsGroup_parseChildrenTests = require('./helpers/views/group/_parseChildrentests.js');
var ViewsCommonIdentifyTests = require('./helpers/views/common/identifytests.js');


describe("StageView", function() {
  /*
    CommonViewTests(function() {
      return {
          data: JSON.parse(JSON.stringify(require('./datasets/simple_stagedata.js')[0])),
          ViewType : StageView
      };
    });
  */

  CommonGroupViewTests('simple_stagedata.js', function() {
    return {
      data: JSON.parse(JSON.stringify(require('./datasets/simple_stagedata.js'))),
      ViewType: StageView,
      parentId: 110540
    };
  });

  CommonGroupViewTests('test_data_set.js', function() {
    return {
      data: JSON.parse(JSON.stringify(require('./datasets/test_data_set.js'))),
      ViewType: StageView,
      parentId: 1
    };
  });

  ViewsCommonParseTests({
    ViewType: StageView
  });

  ViewsGroup_parseChildrenTests({
    ViewType: StageView,
    viewTypeName: 'StageView',
    type: 'stage',
    HTML: "<div id='100' data-wl-id='100' data-wl-type='stage'>" +
      "<div id='101' data-wl-id='101' data-wl-type='layer'></div>" +
      "<div id='102' data-wl-id='102' data-wl-type='layer'></div>" +
      "</div>",
    expectedChildren: ['101', '102']
  });

  ViewsCommonIdentifyTests('div data-wl-type="stage"', StageView, function() {
    var element = document.createElement('div');
    element.setAttribute('data-wl-type', 'stage');

    return element;
  }, true);

  ViewsCommonIdentifyTests('div', StageView, function() {
    return document.createElement('div');
  }, false);

})
