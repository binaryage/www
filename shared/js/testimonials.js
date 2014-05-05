(function() {
  var cb;

  cb = new Codebird();

  cb.setConsumerKey('lE7iNxF0PTBECR2gC5yWvw', 'lsuUKQLDziDQZHh9ujTQTq5jfIHgWBGWrTIhm6RQqTA');

  cb.setToken('28596139-xZsNjHrgmhvgaMgueyg6bpWJcWuR837XegCtGCOQ', 'azEN2xRuQkTi0zNuzYEjcCqWPn7GR7ezn00JOMHMsY');

  $.fn.tweet = function(options) {
    var generator, index, prevCard, ready;
    index = 0;
    ready = false;
    prevCard = void 0;
    generator = function(root, params) {
      var itemTemplate, twitter_params, worker;
      itemTemplate = "            <li id=\"status_--id--\" class=\"hentry status\">                <span class=\"thumb vcard author\">                    <a class=\"tweet-url profile-pic url\" href=\"http://twitter.com/--userscreenname--\">                        <img width=\"48\" height=\"48\" src=\"--avatar--\" class=\"photo fn\" alt=\"--username--\">                    </a>                </span>                <span class=\"status-body\">                    <strong><a title=\"--username--\" class=\"tweet-url screen-name\" href=\"http://twitter.com/--userscreenname--\">--userscreenname--</a></strong>                     <span class=\"entry-content\">--text--</span><span class=\"meta entry-meta\">                        <a rel=\"bookmark\" class=\"entry-date\" href=\"http://twitter.com/--userscreenname--/status/--id--\"><span class=\"published timestamp\">--createdat--</span></a>                         <span>from --source--</span>                    </span>                    <a class=\"more-praise\" target=\"_blank\" href=\"http://twitter.com/binaryage/favorites\">show all recent</a>                </span>            </li>";
      worker = function(data) {
        var availHeight, availWidth, children, container, cur, gen, last_item, step;
        if (!ready) {
          setTimeout((function() {
            return worker(data);
          }), 100);
          return;
        }
        container = $("#main .container");
        availWidth = 950 - 300;
        availHeight = container.height() - 80;
        if (availHeight < 200) {
          availHeight = 200;
        }
        if (availHeight > 600) {
          availHeight = 600;
        }
        gen = function(item) {
          var el, li, rot;
          index++;
          if (prevCard) {
            prevCard.addClass("card-fade-out");
          }
          li = itemTemplate;
          li = li.replace(/--id--/g, item.id);
          li = li.replace(/--text--/g, item.text);
          li = li.replace(/--avatar--/g, item.user.profile_image_url);
          li = li.replace(/--username--/g, item.user.name);
          li = li.replace(/--userscreenname--/g, item.user.screen_name);
          li = li.replace(/--source--/g, item.source);
          li = li.replace(/--createdat--/g, item.created_at);
          el = $(li);
          rot = Math.round(Math.random() * 3) + 3;
          if (index % 2 === 0) {
            rot = -rot;
          }
          el.css({
            left: Math.random() * availWidth,
            top: Math.random() * availHeight,
            "-webkit-transform": "rotate(" + rot + "deg)",
            "-moz-transform": "rotate(" + rot + "deg)"
          });
          root.append(el);
          prevCard = el;
          el.find(".published").relatizeDate();
          return el.find(".entry-content").autolink().autohash();
        };
        if (!data.length) {

        } else {
          children = root.children();
          if (children.length > 60) {
            children.slice(0, data.length).fadeOut(3000, function() {
              return $(this).remove();
            });
          }
          cur = -1;
          last_item = null;
          step = function() {
            var c, futureItem, im, item;
            cur++;
            if (cur >= data.length) {
              params.max_id = last_item["id"] - 1;
              generator(root, params);
              return;
            }
            item = data[cur];
            last_item = item;
            gen(item);
            c = 1;
            while (c <= 5) {
              futureItem = data[cur + c];
              if (futureItem) {
                im = new Image();
                im.src = futureItem.user.profile_image_url;
              }
              c++;
            }
            return setTimeout(step, 3000);
          };
          return step();
        }
      };
      twitter_params = {
        'screen_name': params.user,
        'count': params.count
      };
      if (params.max_id) {
        twitter_params['max_id'] = params.max_id;
      }
      return cb.__call('favorites_list', twitter_params, worker);
    };
    return this.each(function() {
      var defaults, params, root;
      root = $(this);
      defaults = {
        user: "binaryage",
        count: 100
      };
      params = $.extend(defaults, options);
      root.data("sparams", params);
      $("#main").addClass("main-dim").append("<div class=\"main-overlay\"></div>");
      setTimeout((function() {
        return ready = true;
      }), 500);
      return generator(root, params);
    });
  };

}).call(this);
