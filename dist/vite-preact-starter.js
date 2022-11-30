var N, f, se, w, J, U = {}, ce = [], we = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function k(t, e) {
  for (var _ in e)
    t[_] = e[_];
  return t;
}
function ue(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function $(t, e, _) {
  var o, i, n, l = {};
  for (n in e)
    n == "key" ? o = e[n] : n == "ref" ? i = e[n] : l[n] = e[n];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? N.call(arguments, 2) : _), typeof t == "function" && t.defaultProps != null)
    for (n in t.defaultProps)
      l[n] === void 0 && (l[n] = t.defaultProps[n]);
  return E(t, l, o, i, null);
}
function E(t, e, _, o, i) {
  var n = { type: t, props: e, key: _, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++se : i };
  return i == null && f.vnode != null && f.vnode(n), n;
}
function F(t) {
  return t.children;
}
function L(t, e) {
  this.props = t, this.context = e;
}
function H(t, e) {
  if (e == null)
    return t.__ ? H(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var _; e < t.__k.length; e++)
    if ((_ = t.__k[e]) != null && _.__e != null)
      return _.__e;
  return typeof t.type == "function" ? H(t) : null;
}
function ae(t) {
  var e, _;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((_ = t.__k[e]) != null && _.__e != null) {
        t.__e = t.__c.base = _.__e;
        break;
      }
    return ae(t);
  }
}
function K(t) {
  (!t.__d && (t.__d = !0) && w.push(t) && !D.__r++ || J !== f.debounceRendering) && ((J = f.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var t; D.__r = w.length; )
    t = w.sort(function(e, _) {
      return e.__v.__b - _.__v.__b;
    }), w = [], t.some(function(e) {
      var _, o, i, n, l, s;
      e.__d && (l = (n = (_ = e).__v).__e, (s = _.__P) && (o = [], (i = k({}, n)).__v = n.__v + 1, R(s, n, i, _.__n, s.ownerSVGElement !== void 0, n.__h != null ? [l] : null, o, l == null ? H(n) : l, n.__h), de(o, n), n.__e != l && ae(n)));
    });
}
function fe(t, e, _, o, i, n, l, s, c, p) {
  var r, d, a, u, h, C, v, y = o && o.__k || ce, b = y.length;
  for (_.__k = [], r = 0; r < e.length; r++)
    if ((u = _.__k[r] = (u = e[r]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? E(null, u, null, null, u) : Array.isArray(u) ? E(F, { children: u }, null, null, null) : u.__b > 0 ? E(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
      if (u.__ = _, u.__b = _.__b + 1, (a = y[r]) === null || a && u.key == a.key && u.type === a.type)
        y[r] = void 0;
      else
        for (d = 0; d < b; d++) {
          if ((a = y[d]) && u.key == a.key && u.type === a.type) {
            y[d] = void 0;
            break;
          }
          a = null;
        }
      R(t, u, a = a || U, i, n, l, s, c, p), h = u.__e, (d = u.ref) && a.ref != d && (v || (v = []), a.ref && v.push(a.ref, null, u), v.push(d, u.__c || h, u)), h != null ? (C == null && (C = h), typeof u.type == "function" && u.__k === a.__k ? u.__d = c = pe(u, c, t) : c = he(t, u, a, y, h, c), typeof _.type == "function" && (_.__d = c)) : c && a.__e == c && c.parentNode != t && (c = H(a));
    }
  for (_.__e = C, r = b; r--; )
    y[r] != null && me(y[r], y[r]);
  if (v)
    for (r = 0; r < v.length; r++)
      ve(v[r], v[++r], v[++r]);
}
function pe(t, e, _) {
  for (var o, i = t.__k, n = 0; i && n < i.length; n++)
    (o = i[n]) && (o.__ = t, e = typeof o.type == "function" ? pe(o, e, _) : he(_, o, o, i, o.__e, e));
  return e;
}
function he(t, e, _, o, i, n) {
  var l, s, c;
  if (e.__d !== void 0)
    l = e.__d, e.__d = void 0;
  else if (_ == null || i != n || i.parentNode == null)
    e:
      if (n == null || n.parentNode !== t)
        t.appendChild(i), l = null;
      else {
        for (s = n, c = 0; (s = s.nextSibling) && c < o.length; c += 1)
          if (s == i)
            break e;
        t.insertBefore(i, n), l = n;
      }
  return l !== void 0 ? l : i.nextSibling;
}
function Ee(t, e, _, o, i) {
  var n;
  for (n in _)
    n === "children" || n === "key" || n in e || j(t, n, null, _[n], o);
  for (n in e)
    i && typeof e[n] != "function" || n === "children" || n === "key" || n === "value" || n === "checked" || _[n] === e[n] || j(t, n, e[n], _[n], o);
}
function Q(t, e, _) {
  e[0] === "-" ? t.setProperty(e, _) : t[e] = _ == null ? "" : typeof _ != "number" || we.test(e) ? _ : _ + "px";
}
function j(t, e, _, o, i) {
  var n;
  e:
    if (e === "style")
      if (typeof _ == "string")
        t.style.cssText = _;
      else {
        if (typeof o == "string" && (t.style.cssText = o = ""), o)
          for (e in o)
            _ && e in _ || Q(t.style, e, "");
        if (_)
          for (e in _)
            o && _[e] === o[e] || Q(t.style, e, _[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      n = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + n] = _, _ ? o || t.addEventListener(e, n ? Y : X, n) : t.removeEventListener(e, n ? Y : X, n);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = _ == null ? "" : _;
          break e;
        } catch {
        }
      typeof _ == "function" || (_ == null || _ === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, _));
    }
}
function X(t) {
  this.l[t.type + !1](f.event ? f.event(t) : t);
}
function Y(t) {
  this.l[t.type + !0](f.event ? f.event(t) : t);
}
function R(t, e, _, o, i, n, l, s, c) {
  var p, r, d, a, u, h, C, v, y, b, S, x, G, T, A, g = e.type;
  if (e.constructor !== void 0)
    return null;
  _.__h != null && (c = _.__h, s = e.__e = _.__e, e.__h = null, n = [s]), (p = f.__b) && p(e);
  try {
    e:
      if (typeof g == "function") {
        if (v = e.props, y = (p = g.contextType) && o[p.__c], b = p ? y ? y.props.value : p.__ : o, _.__c ? C = (r = e.__c = _.__c).__ = r.__E : ("prototype" in g && g.prototype.render ? e.__c = r = new g(v, b) : (e.__c = r = new L(v, b), r.constructor = g, r.render = Ne), y && y.sub(r), r.props = v, r.state || (r.state = {}), r.context = b, r.__n = o, d = r.__d = !0, r.__h = [], r._sb = []), r.__s == null && (r.__s = r.state), g.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = k({}, r.__s)), k(r.__s, g.getDerivedStateFromProps(v, r.__s))), a = r.props, u = r.state, d)
          g.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), r.componentDidMount != null && r.__h.push(r.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && v !== a && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, b), !r.__e && r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, b) === !1 || e.__v === _.__v) {
            for (r.props = v, r.state = r.__s, e.__v !== _.__v && (r.__d = !1), r.__v = e, e.__e = _.__e, e.__k = _.__k, e.__k.forEach(function(P) {
              P && (P.__ = e);
            }), S = 0; S < r._sb.length; S++)
              r.__h.push(r._sb[S]);
            r._sb = [], r.__h.length && l.push(r);
            break e;
          }
          r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, b), r.componentDidUpdate != null && r.__h.push(function() {
            r.componentDidUpdate(a, u, h);
          });
        }
        if (r.context = b, r.props = v, r.__v = e, r.__P = t, x = f.__r, G = 0, "prototype" in g && g.prototype.render) {
          for (r.state = r.__s, r.__d = !1, x && x(e), p = r.render(r.props, r.state, r.context), T = 0; T < r._sb.length; T++)
            r.__h.push(r._sb[T]);
          r._sb = [];
        } else
          do
            r.__d = !1, x && x(e), p = r.render(r.props, r.state, r.context), r.state = r.__s;
          while (r.__d && ++G < 25);
        r.state = r.__s, r.getChildContext != null && (o = k(k({}, o), r.getChildContext())), d || r.getSnapshotBeforeUpdate == null || (h = r.getSnapshotBeforeUpdate(a, u)), A = p != null && p.type === F && p.key == null ? p.props.children : p, fe(t, Array.isArray(A) ? A : [A], e, _, o, i, n, l, s, c), r.base = e.__e, e.__h = null, r.__h.length && l.push(r), C && (r.__E = r.__ = null), r.__e = !1;
      } else
        n == null && e.__v === _.__v ? (e.__k = _.__k, e.__e = _.__e) : e.__e = He(_.__e, e, _, o, i, n, l, c);
    (p = f.diffed) && p(e);
  } catch (P) {
    e.__v = null, (c || n != null) && (e.__e = s, e.__h = !!c, n[n.indexOf(s)] = null), f.__e(P, e, _);
  }
}
function de(t, e) {
  f.__c && f.__c(e, t), t.some(function(_) {
    try {
      t = _.__h, _.__h = [], t.some(function(o) {
        o.call(_);
      });
    } catch (o) {
      f.__e(o, _.__v);
    }
  });
}
function He(t, e, _, o, i, n, l, s) {
  var c, p, r, d = _.props, a = e.props, u = e.type, h = 0;
  if (u === "svg" && (i = !0), n != null) {
    for (; h < n.length; h++)
      if ((c = n[h]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        t = c, n[h] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(a);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, a.is && a), n = null, s = !1;
  }
  if (u === null)
    d === a || s && t.data === a || (t.data = a);
  else {
    if (n = n && N.call(t.childNodes), p = (d = _.props || U).dangerouslySetInnerHTML, r = a.dangerouslySetInnerHTML, !s) {
      if (n != null)
        for (d = {}, h = 0; h < t.attributes.length; h++)
          d[t.attributes[h].name] = t.attributes[h].value;
      (r || p) && (r && (p && r.__html == p.__html || r.__html === t.innerHTML) || (t.innerHTML = r && r.__html || ""));
    }
    if (Ee(t, a, d, i, s), r)
      e.__k = [];
    else if (h = e.props.children, fe(t, Array.isArray(h) ? h : [h], e, _, o, i && u !== "foreignObject", n, l, n ? n[0] : _.__k && H(_, 0), s), n != null)
      for (h = n.length; h--; )
        n[h] != null && ue(n[h]);
    s || ("value" in a && (h = a.value) !== void 0 && (h !== t.value || u === "progress" && !h || u === "option" && h !== d.value) && j(t, "value", h, d.value, !1), "checked" in a && (h = a.checked) !== void 0 && h !== t.checked && j(t, "checked", h, d.checked, !1));
  }
  return t;
}
function ve(t, e, _) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (o) {
    f.__e(o, _);
  }
}
function me(t, e, _) {
  var o, i;
  if (f.unmount && f.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || ve(o, null, e)), (o = t.__c) != null) {
    if (o.componentWillUnmount)
      try {
        o.componentWillUnmount();
      } catch (n) {
        f.__e(n, e);
      }
    o.base = o.__P = null, t.__c = void 0;
  }
  if (o = t.__k)
    for (i = 0; i < o.length; i++)
      o[i] && me(o[i], e, _ || typeof t.type != "function");
  _ || t.__e == null || ue(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Ne(t, e, _) {
  return this.constructor(t, _);
}
function W(t, e, _) {
  var o, i, n;
  f.__ && f.__(t, e), i = (o = typeof _ == "function") ? null : _ && _.__k || e.__k, n = [], R(e, t = (!o && _ || e).__k = $(F, null, [t]), i || U, U, e.ownerSVGElement !== void 0, !o && _ ? [_] : i ? null : e.firstChild ? N.call(e.childNodes) : null, n, !o && _ ? _ : i ? i.__e : e.firstChild, o), de(n, t);
}
function ye(t, e) {
  W(t, e, ye);
}
function ge(t, e, _) {
  var o, i, n, l = k({}, t.props);
  for (n in e)
    n == "key" ? o = e[n] : n == "ref" ? i = e[n] : l[n] = e[n];
  return arguments.length > 2 && (l.children = arguments.length > 3 ? N.call(arguments, 2) : _), E(t.type, l, o || t.key, i || t.ref, null);
}
N = ce.slice, f = { __e: function(t, e, _, o) {
  for (var i, n, l; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((n = i.constructor) && n.getDerivedStateFromError != null && (i.setState(n.getDerivedStateFromError(t)), l = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, o || {}), l = i.__d), l)
          return i.__E = i;
      } catch (s) {
        t = s;
      }
  throw t;
} }, se = 0, L.prototype.setState = function(t, e) {
  var _;
  _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof t == "function" && (t = t(k({}, _), this.props)), t && k(_, t), t != null && this.__v && (e && this._sb.push(e), K(this));
}, L.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), K(this));
}, L.prototype.render = F, w = [], D.__r = 0;
var z, m, V, Z, I = 0, be = [], M = [], ee = f.__b, te = f.__r, _e = f.diffed, ne = f.__c, oe = f.unmount;
function ke(t, e) {
  f.__h && f.__h(m, t, I || e), I = 0;
  var _ = m.__H || (m.__H = { __: [], __h: [] });
  return t >= _.__.length && _.__.push({ __V: M }), _.__[t];
}
function Se(t) {
  return I = 1, Te($e, t);
}
function Te(t, e, _) {
  var o = ke(z++, 2);
  if (o.t = t, !o.__c && (o.__ = [_ ? _(e) : $e(void 0, e), function(n) {
    var l = o.__N ? o.__N[0] : o.__[0], s = o.t(l, n);
    l !== s && (o.__N = [s, o.__[1]], o.__c.setState({}));
  }], o.__c = m, !m.u)) {
    m.u = !0;
    var i = m.shouldComponentUpdate;
    m.shouldComponentUpdate = function(n, l, s) {
      if (!o.__c.__H)
        return !0;
      var c = o.__c.__H.__.filter(function(r) {
        return r.__c;
      });
      if (c.every(function(r) {
        return !r.__N;
      }))
        return !i || i.call(this, n, l, s);
      var p = !1;
      return c.forEach(function(r) {
        if (r.__N) {
          var d = r.__[0];
          r.__ = r.__N, r.__N = void 0, d !== r.__[0] && (p = !0);
        }
      }), !(!p && o.__c.props === n) && (!i || i.call(this, n, l, s));
    };
  }
  return o.__N || o.__;
}
function Ae(t, e) {
  var _ = ke(z++, 3);
  !f.__s && Me(_.__H, e) && (_.__ = t, _.i = e, m.__H.__h.push(_));
}
function Pe() {
  for (var t; t = be.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(O), t.__H.__h.forEach(q), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], f.__e(e, t.__v);
      }
}
f.__b = function(t) {
  m = null, ee && ee(t);
}, f.__r = function(t) {
  te && te(t), z = 0;
  var e = (m = t.__c).__H;
  e && (V === m ? (e.__h = [], m.__h = [], e.__.forEach(function(_) {
    _.__N && (_.__ = _.__N), _.__V = M, _.__N = _.i = void 0;
  })) : (e.__h.forEach(O), e.__h.forEach(q), e.__h = [])), V = m;
}, f.diffed = function(t) {
  _e && _e(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (be.push(e) !== 1 && Z === f.requestAnimationFrame || ((Z = f.requestAnimationFrame) || Le)(Pe)), e.__H.__.forEach(function(_) {
    _.i && (_.__H = _.i), _.__V !== M && (_.__ = _.__V), _.i = void 0, _.__V = M;
  })), V = m = null;
}, f.__c = function(t, e) {
  e.some(function(_) {
    try {
      _.__h.forEach(O), _.__h = _.__h.filter(function(o) {
        return !o.__ || q(o);
      });
    } catch (o) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], f.__e(o, _.__v);
    }
  }), ne && ne(t, e);
}, f.unmount = function(t) {
  oe && oe(t);
  var e, _ = t.__c;
  _ && _.__H && (_.__H.__.forEach(function(o) {
    try {
      O(o);
    } catch (i) {
      e = i;
    }
  }), _.__H = void 0, e && f.__e(e, _.__v));
};
var re = typeof requestAnimationFrame == "function";
function Le(t) {
  var e, _ = function() {
    clearTimeout(o), re && cancelAnimationFrame(e), setTimeout(t);
  }, o = setTimeout(_, 100);
  re && (e = requestAnimationFrame(_));
}
function O(t) {
  var e = m, _ = t.__c;
  typeof _ == "function" && (t.__c = void 0, _()), m = e;
}
function q(t) {
  var e = m;
  t.__c = t.__(), m = e;
}
function Me(t, e) {
  return !t || t.length !== e.length || e.some(function(_, o) {
    return _ !== t[o];
  });
}
function $e(t, e) {
  return typeof e == "function" ? e(t) : e;
}
var Ce = function(t, e, _, o) {
  var i;
  e[0] = 0;
  for (var n = 1; n < e.length; n++) {
    var l = e[n++], s = e[n] ? (e[0] |= l ? 1 : 2, _[e[n++]]) : e[++n];
    l === 3 ? o[0] = s : l === 4 ? o[1] = Object.assign(o[1] || {}, s) : l === 5 ? (o[1] = o[1] || {})[e[++n]] = s : l === 6 ? o[1][e[++n]] += s + "" : l ? (i = t.apply(s, Ce(t, s, _, ["", null])), o.push(i), s[0] ? e[0] |= 2 : (e[n - 2] = 0, e[n] = i)) : o.push(s);
  }
  return o;
}, ie = /* @__PURE__ */ new Map();
function Oe(t) {
  var e = ie.get(this);
  return e || (e = /* @__PURE__ */ new Map(), ie.set(this, e)), (e = Ce(this, e.get(t) || (e.set(t, e = function(_) {
    for (var o, i, n = 1, l = "", s = "", c = [0], p = function(a) {
      n === 1 && (a || (l = l.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, a, l) : n === 3 && (a || l) ? (c.push(3, a, l), n = 2) : n === 2 && l === "..." && a ? c.push(4, a, 0) : n === 2 && l && !a ? c.push(5, 0, !0, l) : n >= 5 && ((l || !a && n === 5) && (c.push(n, 0, l, i), n = 6), a && (c.push(n, a, 0, i), n = 6)), l = "";
    }, r = 0; r < _.length; r++) {
      r && (n === 1 && p(), p(r));
      for (var d = 0; d < _[r].length; d++)
        o = _[r][d], n === 1 ? o === "<" ? (p(), c = [c], n = 3) : l += o : n === 4 ? l === "--" && o === ">" ? (n = 1, l = "") : l = o + l[0] : s ? o === s ? s = "" : l += o : o === '"' || o === "'" ? s = o : o === ">" ? (p(), n = 1) : n && (o === "=" ? (n = 5, i = l, l = "") : o === "/" && (n < 5 || _[r][d + 1] === ">") ? (p(), n === 3 && (c = c[0]), n = c, (c = c[0]).push(2, 0, n), n = 0) : o === " " || o === "	" || o === `
` || o === "\r" ? (p(), n = 2) : l += o), n === 3 && l === "!--" && (n = 4, c = c[0]);
    }
    return p(), c;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
function B() {
  return (B = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var _ = arguments[e];
      for (var o in _)
        Object.prototype.hasOwnProperty.call(_, o) && (t[o] = _[o]);
    }
    return t;
  }).apply(this, arguments);
}
function Ue(t) {
  this.getChildContext = function() {
    return t.context;
  };
  var e = t.children, _ = function(o, i) {
    if (o == null)
      return {};
    var n, l, s = {}, c = Object.keys(o);
    for (l = 0; l < c.length; l++)
      i.indexOf(n = c[l]) >= 0 || (s[n] = o[n]);
    return s;
  }(t, ["context", "children"]);
  return ge(e, _);
}
function De() {
  var t = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(t), this._vdom = $(Ue, B({}, this._props, { context: t.detail.context }), function e(_, o) {
    if (_.nodeType === 3)
      return _.data;
    if (_.nodeType !== 1)
      return null;
    var i = [], n = {}, l = 0, s = _.attributes, c = _.childNodes;
    for (l = s.length; l--; )
      s[l].name !== "slot" && (n[s[l].name] = s[l].value, n[xe(s[l].name)] = s[l].value);
    for (l = c.length; l--; ) {
      var p = e(c[l], null), r = c[l].slot;
      r ? n[r] = $(le, { name: r }, p) : i[l] = p;
    }
    var d = o ? $(le, null, i) : i;
    return $(o || _.nodeName.toLowerCase(), n, d);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? ye : W)(this._vdom, this._root);
}
function xe(t) {
  return t.replace(/-(\w)/g, function(e, _) {
    return _ ? _.toUpperCase() : "";
  });
}
function je(t, e, _) {
  if (this._vdom) {
    var o = {};
    o[t] = _ = _ == null ? void 0 : _, o[xe(t)] = _, this._vdom = ge(this._vdom, o), W(this._vdom, this._root);
  }
}
function Fe() {
  W(this._vdom = null, this._root);
}
function le(t, e) {
  var _ = this;
  return $("slot", B({}, t, { ref: function(o) {
    o ? (_.ref = o, _._listener || (_._listener = function(i) {
      i.stopPropagation(), i.detail.context = e;
    }, o.addEventListener("_preact", _._listener))) : _.ref.removeEventListener("_preact", _._listener);
  } }));
}
function We(t, e, _, o) {
  function i() {
    var n = Reflect.construct(HTMLElement, [], i);
    return n._vdomComponent = t, n._root = o && o.shadow ? n.attachShadow({ mode: "open" }) : n, n;
  }
  return (i.prototype = Object.create(HTMLElement.prototype)).constructor = i, i.prototype.connectedCallback = De, i.prototype.attributeChangedCallback = je, i.prototype.disconnectedCallback = Fe, _ = _ || t.observedAttributes || Object.keys(t.propTypes || {}), i.observedAttributes = _, _.forEach(function(n) {
    Object.defineProperty(i.prototype, n, { get: function() {
      return this._vdom.props[n];
    }, set: function(l) {
      this._vdom ? this.attributeChangedCallback(n, null, l) : (this._props || (this._props = {}), this._props[n] = l, this.connectedCallback());
      var s = typeof l;
      l != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(n, l);
    } });
  }), customElements.define(e || t.tagName || t.displayName || t.name, i);
}
const Ve = `.stars{text-decoration:none}
`, Ie = Oe.bind($), qe = async (t) => {
  const e = await fetch(`https://api.github.com/repos/${t}`), {
    stargazers_count: _
  } = await e.json();
  return _;
}, Re = ({
  repo: t
}) => {
  const [e, _] = Se("\u2026");
  return Ae(() => qe(t).then(_), [t]), Ie`
    <style>
      ${Ve}
    </style>
    <a
      href=${`https://github.com/${t}`}
      class="stars"
      target="_blank"
      rel="noopener noreferrer"
    >
      ⭐️ ${e} Stars
    </a>
  `;
};
We(Re, "github-stars", ["repo"], {
  shadow: !0
});
export {
  Re as Stars
};
