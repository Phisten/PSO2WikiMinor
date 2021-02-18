// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    // Redirect the original request to a given URL.
    //var url = "https://pso2m.swiki.jp/";
    var url = info.url;
    //var new_url = url.replace("/pso2.swiki.jp/gi", "pso2m.swiki.jp");
    var new_url = url.replace("://pso2.swiki.jp/", "://pso2m.swiki.jp/");
    //console.log(info);
    return {redirectUrl: new_url};
    //return {redirectUrl: url};
  },
  // filters
  {
    urls: [
      "*://pso2.swiki.jp/*"
    ],
    types: ["main_frame"]
  },
  // extraInfoSpec
  ["blocking"]
);
