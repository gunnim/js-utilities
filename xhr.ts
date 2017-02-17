
export interface P1 {
    type?: string;
    method?: string;
    url: string;
    responseType?: string;
    callback?(xhrObj : XMLHttpRequest | XhrLike): () => void;
    contentType?: string;
    defaultContentType?: boolean;
}

interface XhrLike {
    status : number;
    response : any;
}

export default function constructXhr(p1 : P1 | string, 
                    callback : (xhrObj : XMLHttpRequest | XhrLike) => void) : XMLHttpRequest {

    var xhr = new XMLHttpRequest();

    if (typeof p1 === 'object') {
      
      var type = p1.type || p1.method || 'POST';

      xhr.open(type, p1.url);
      xhr.responseType = p1.responseType ? p1.responseType : 'json';

      // Use the default request header when transmitting MIME encoded data
      // Usage: Specifiy the contentType explicitly with p1.contentType
      // set no flags to use our default of application/x-www-form-urlencoded
      // set p1.defaultContentType to use XHR default of multipart/form-data
      // when transmitting files
      if (!p1.defaultContentType)
          xhr.setRequestHeader('Content-type', p1.contentType ? p1.contentType : 'application/x-www-form-urlencoded');

      xhr.onload = function() {

        // IE Fix
        if (!xhr.responseType.length) {

            var newXhr = {
                response: JSON.parse(xhr.response),
                status: xhr.status
            };

            callback ? callback(newXhr) : p1.callback(newXhr);
        }
        else if (typeof xhr.response != 'object') { // Arrays typeof == object also 
        
            var newXhr = {
                response: JSON.parse(xhr.response),
                status: xhr.status
            };

            callback ? callback(newXhr) : p1.callback(newXhr);
        }
        else
            callback ? callback(xhr) : p1.callback(xhr);
      };
    }
    else {
      xhr.open('POST', p1);
      xhr.responseType = 'json';
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function() {

            // IE Fix
            if (!xhr.responseType.length) {

                var newXhr = {
                    response: JSON.parse(xhr.response),
                    status: xhr.status
                };

                callback(newXhr);
            }
            else if (typeof xhr.response != 'object') { // Arrays typeof == object also 
            
                var newXhr = {
                    response: JSON.parse(xhr.response),
                    status: xhr.status
                };

                callback(newXhr);
            }
            else
                callback(xhr);
        };
    }

    return xhr;

    // Demo onload callback
    /*
        var myCallback = function () {
                                                      // xhr.response.success is a custom response we might return from our controller
            if (xhr.status >= 200 && xhr.status < 300 && xhr.response.success) {
                console.log('success');
            }
            else console.log('error');

            AlwaysRunThis();
        };
    */

    // Simple example usage - send application/x-www-form-urlencoded with POST
    /*
        var formData = 'param1=' + encodeURIComponent(paramStr1) + '&param2=' + encodeURIComponent(paramStr2);

        var constructXhr = require('utilities/xhr.ts');
        var xhr = constructXhr('/umbraco/surface/test/action', myCallback);

        xhr.send(formData);
    */

    // Example usage - send a js obj
    /*
        var myObj = { prop1: 'a', prop2: 1 };

        var constructXhr = require('utilities/xhr.ts');
        var xhr = constructXhr({
            type: 'POST',
            url: '/umbraco/surface/test/action',
            responseType: 'json',
            contentType: 'application/json',
        }, myCallback);

        xhr.send(JSON.stringify(myObj));
    */
};
