/* Generated by Opal 0.7.0 */
Opal.modules["conway/helpers.rb"] = function(Opal) {
  Opal.dynamic_require_severity = "error";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$attr_reader', '$canvas', '$set_height', '$set_width']);
  (function($base) {
    var self = $module($base, 'Window');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.cdecl($scope, 'Height', $(window).height());

    Opal.cdecl($scope, 'Width', $(window).width());
  })(self);
  (function($base, $super) {
    function $Context(){};
    var self = $Context = $klass($base, $super, 'Context', $Context);

    var def = self.$$proto, $scope = self.$$scope;

    def.context = nil;
    self.$attr_reader("context");

    def.$initialize = function($kwargs) {
      var self = this, canvas = nil, type = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((canvas = $kwargs.smap['canvas']) == null) {
        canvas = ""
      }
      if ((type = $kwargs.smap['type']) == null) {
        type = ""
      }
      return self.context = canvas.$canvas().getContext(type);
    };

    def.$move_to = function($kwargs) {
      var self = this, x = nil, y = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((x = $kwargs.smap['x']) == null) {
        x = 0
      }
      if ((y = $kwargs.smap['y']) == null) {
        y = 0
      }
      return self.context.moveTo(x, y);
    };

    def.$stroke_style = function($kwargs) {
      var self = this, color = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((color = $kwargs.smap['color']) == null) {
        color = ""
      }
      return self.context.strokeStyle = color;
    };

    def.$stroke = function() {
      var self = this;

      return self.context.stroke();
    };

    return (def.$line_to = function($kwargs) {
      var self = this, x = nil, y = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((x = $kwargs.smap['x']) == null) {
        x = 0
      }
      if ((y = $kwargs.smap['y']) == null) {
        y = 0
      }
      return self.context.lineTo(x, y);
    }, nil) && 'line_to';
  })(self, null);
  (function($base, $super) {
    function $Context2D(){};
    var self = $Context2D = $klass($base, $super, 'Context2D', $Context2D);

    var def = self.$$proto, $scope = self.$$scope, TMP_1;

    return (def.$initialize = TMP_1 = function($kwargs) {
      var self = this, $iter = TMP_1.$$p, $yield = $iter || nil, canvas = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((canvas = $kwargs.smap['canvas']) == null) {
        canvas = ""
      }
      TMP_1.$$p = null;
      return Opal.find_super_dispatcher(self, 'initialize', TMP_1, null).apply(self, [$hash2(["canvas", "type"], {"canvas": canvas, "type": "2d"})]);
    }, nil) && 'initialize'
  })(self, $scope.get('Context'));
  return (function($base, $super) {
    function $Canvas(){};
    var self = $Canvas = $klass($base, $super, 'Canvas', $Canvas);

    var def = self.$$proto, $scope = self.$$scope;

    def.canvas = nil;
    self.$attr_reader("canvas");

    def.$initialize = function($kwargs) {
      var self = this, id = nil, height = nil, width = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((id = $kwargs.smap['id']) == null) {
        id = ""
      }
      if ((height = $kwargs.smap['height']) == null) {
        height = 0
      }
      if ((width = $kwargs.smap['width']) == null) {
        width = 0
      }
      self.canvas = document.getElementById(id);
      self.$set_height(height);
      return self.$set_width(width);
    };

    def.$set_width = function(w) {
      var self = this;

      return self.canvas.width  = w;
    };

    return (def.$set_height = function(h) {
      var self = this;

      return self.canvas.height  = h;
    }, nil) && 'set_height';
  })(self, null);
};

/* Generated by Opal 0.7.0 */
Opal.modules["conway/app.rb"] = function(Opal) {
  Opal.dynamic_require_severity = "error";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$require', '$new', '$times', '$move_to', '$*', '$line_to', '$columns', '$rows', '$stroke_style', '$stroke', '$private', '$floor', '$/', '$draw', '$puts']);
  self.$require("conway/helpers.rb");
  (function($base) {
    var self = $module($base, 'Cell');

    var def = self.$$proto, $scope = self.$$scope;

    Opal.cdecl($scope, 'Height', 25);

    Opal.cdecl($scope, 'Width', 50);

    Opal.cdecl($scope, 'StrokeColor', "#23eeee");
  })(self);
  (function($base, $super) {
    function $Grid(){};
    var self = $Grid = $klass($base, $super, 'Grid', $Grid);

    var def = self.$$proto, $scope = self.$$scope;

    def.context = nil;
    def.$initialize = function($kwargs) {
      var self = this, canvas = nil, canvas_id = nil;

      if ($kwargs == null) {
        $kwargs = $hash2([], {});
      }
      if (!$kwargs.$$is_hash) {
        throw Opal.ArgumentError.$new('expecting keyword args');
      }
      if ((canvas_id = $kwargs.smap['canvas_id']) == null) {
        canvas_id = ""
      }
      canvas = $scope.get('Canvas').$new($hash2(["id", "height", "width"], {"id": canvas_id, "height": (($scope.get('Window')).$$scope.get('Height')), "width": (($scope.get('Window')).$$scope.get('Width'))}));
      return self.context = $scope.get('Context2D').$new($hash2(["canvas"], {"canvas": canvas}));
    };

    def.$draw = function() {
      var $a, $b, TMP_1, $c, TMP_2, self = this;

      ($a = ($b = self.$columns()).$times, $a.$$p = (TMP_1 = function(x){var self = TMP_1.$$s || this;
        if (self.context == null) self.context = nil;
if (x == null) x = nil;
      self.context.$move_to($hash2(["x", "y"], {"x": (($scope.get('Cell')).$$scope.get('Width'))['$*'](x), "y": 0}));
        return self.context.$line_to($hash2(["x", "y"], {"x": (($scope.get('Cell')).$$scope.get('Width'))['$*'](x), "y": (($scope.get('Window')).$$scope.get('Height'))}));}, TMP_1.$$s = self, TMP_1), $a).call($b);
      ($a = ($c = self.$rows()).$times, $a.$$p = (TMP_2 = function(y){var self = TMP_2.$$s || this;
        if (self.context == null) self.context = nil;
if (y == null) y = nil;
      self.context.$move_to($hash2(["x", "y"], {"x": 0, "y": (($scope.get('Cell')).$$scope.get('Width'))['$*'](y)}));
        return self.context.$line_to($hash2(["x", "y"], {"x": (($scope.get('Window')).$$scope.get('Width')), "y": (($scope.get('Cell')).$$scope.get('Width'))['$*'](y)}));}, TMP_2.$$s = self, TMP_2), $a).call($c);
      self.context.$stroke_style($hash2(["color"], {"color": (($scope.get('Cell')).$$scope.get('StrokeColor'))}));
      return self.context.$stroke();
    };

    self.$private();

    def.$columns = function() {
      var self = this;

      return ((($scope.get('Window')).$$scope.get('Width'))['$/']((($scope.get('Cell')).$$scope.get('Width')))).$floor();
    };

    return (def.$rows = function() {
      var self = this;

      return ((($scope.get('Window')).$$scope.get('Height'))['$/']((($scope.get('Cell')).$$scope.get('Height')))).$floor();
    }, nil) && 'rows';
  })(self, null);
  $scope.get('Grid').$new($hash2(["canvas_id"], {"canvas_id": "conwayCanvas"})).$draw();
  return self.$puts("Jiks");
};

/* Generated by Opal 0.7.0 */
(function(Opal) {
  Opal.dynamic_require_severity = "error";
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$require']);
  self.$require("conway/helpers.rb");
  return self.$require("conway/app.rb");
})(Opal);
