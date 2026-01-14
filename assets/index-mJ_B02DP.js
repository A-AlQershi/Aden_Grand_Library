(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const m of d)
      if (m.type === "childList")
        for (const p of m.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && f(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const m = {};
    return (
      d.integrity && (m.integrity = d.integrity),
      d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const m = s(d);
    fetch(d.href, m);
  }
})();
var Mf = { exports: {} },
  Nn = {};
var Wh;
function fy() {
  if (Wh) return Nn;
  Wh = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function s(f, d, m) {
    var p = null;
    if (
      (m !== void 0 && (p = "" + m),
      d.key !== void 0 && (p = "" + d.key),
      "key" in d)
    ) {
      m = {};
      for (var _ in d) _ !== "key" && (m[_] = d[_]);
    } else m = d;
    return (
      (d = m.ref),
      { $$typeof: c, type: f, key: p, ref: d !== void 0 ? d : null, props: m }
    );
  }
  return (Nn.Fragment = r), (Nn.jsx = s), (Nn.jsxs = s), Nn;
}
var Fh;
function oy() {
  return Fh || ((Fh = 1), (Mf.exports = fy())), Mf.exports;
}
var H = oy(),
  Cf = { exports: {} },
  F = {};
var Ih;
function ry() {
  if (Ih) return F;
  Ih = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    R = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function G(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (B && y[B]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    Q = {};
  function j(y, U, L) {
    (this.props = y),
      (this.context = U),
      (this.refs = Q),
      (this.updater = L || V);
  }
  (j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (y, U) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, U, "setState");
    }),
    (j.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function K() {}
  K.prototype = j.prototype;
  function J(y, U, L) {
    (this.props = y),
      (this.context = U),
      (this.refs = Q),
      (this.updater = L || V);
  }
  var bt = (J.prototype = new K());
  (bt.constructor = J), k(bt, j.prototype), (bt.isPureReactComponent = !0);
  var Et = Array.isArray;
  function Rt() {}
  var I = { H: null, A: null, T: null, S: null },
    Ct = Object.prototype.hasOwnProperty;
  function Gt(y, U, L) {
    var X = L.ref;
    return {
      $$typeof: c,
      type: y,
      key: U,
      ref: X !== void 0 ? X : null,
      props: L,
    };
  }
  function me(y, U) {
    return Gt(y.type, U, y.props);
  }
  function xe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function Wt(y) {
    var U = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (L) {
        return U[L];
      })
    );
  }
  var Dl = /\/+/g;
  function Le(y, U) {
    return typeof y == "object" && y !== null && y.key != null
      ? Wt("" + y.key)
      : U.toString(36);
  }
  function Oe(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(Rt, Rt)
            : ((y.status = "pending"),
              y.then(
                function (U) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = U));
                },
                function (U) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = U));
                }
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function C(y, U, L, X, P) {
    var lt = typeof y;
    (lt === "undefined" || lt === "boolean") && (y = null);
    var st = !1;
    if (y === null) st = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case r:
              st = !0;
              break;
            case x:
              return (st = y._init), C(st(y._payload), U, L, X, P);
          }
      }
    if (st)
      return (
        (P = P(y)),
        (st = X === "" ? "." + Le(y, 0) : X),
        Et(P)
          ? ((L = ""),
            st != null && (L = st.replace(Dl, "$&/") + "/"),
            C(P, U, L, "", function (qa) {
              return qa;
            }))
          : P != null &&
            (xe(P) &&
              (P = me(
                P,
                L +
                  (P.key == null || (y && y.key === P.key)
                    ? ""
                    : ("" + P.key).replace(Dl, "$&/") + "/") +
                  st
              )),
            U.push(P)),
        1
      );
    st = 0;
    var Jt = X === "" ? "." : X + ":";
    if (Et(y))
      for (var Dt = 0; Dt < y.length; Dt++)
        (X = y[Dt]), (lt = Jt + Le(X, Dt)), (st += C(X, U, L, lt, P));
    else if (((Dt = G(y)), typeof Dt == "function"))
      for (y = Dt.call(y), Dt = 0; !(X = y.next()).done; )
        (X = X.value), (lt = Jt + Le(X, Dt++)), (st += C(X, U, L, lt, P));
    else if (lt === "object") {
      if (typeof y.then == "function") return C(Oe(y), U, L, X, P);
      throw (
        ((U = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (U === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : U) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return st;
  }
  function q(y, U, L) {
    if (y == null) return y;
    var X = [],
      P = 0;
    return (
      C(y, X, "", "", function (lt) {
        return U.call(L, lt, P++);
      }),
      X
    );
  }
  function W(y) {
    if (y._status === -1) {
      var U = y._result;
      (U = U()),
        U.then(
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = L));
          },
          function (L) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = L));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = U));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var mt =
      typeof reportError == "function"
        ? reportError
        : function (y) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof y == "object" &&
                  y !== null &&
                  typeof y.message == "string"
                    ? String(y.message)
                    : String(y),
                error: y,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", y);
              return;
            }
            console.error(y);
          },
    pt = {
      map: q,
      forEach: function (y, U, L) {
        q(
          y,
          function () {
            U.apply(this, arguments);
          },
          L
        );
      },
      count: function (y) {
        var U = 0;
        return (
          q(y, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (y) {
        return (
          q(y, function (U) {
            return U;
          }) || []
        );
      },
      only: function (y) {
        if (!xe(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      },
    };
  return (
    (F.Activity = R),
    (F.Children = pt),
    (F.Component = j),
    (F.Fragment = s),
    (F.Profiler = d),
    (F.PureComponent = J),
    (F.StrictMode = f),
    (F.Suspense = b),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (y) {
        return I.H.useMemoCache(y);
      },
    }),
    (F.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (y, U, L) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + "."
        );
      var X = k({}, y.props),
        P = y.key;
      if (U != null)
        for (lt in (U.key !== void 0 && (P = "" + U.key), U))
          !Ct.call(U, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && U.ref === void 0) ||
            (X[lt] = U[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) X.children = L;
      else if (1 < lt) {
        for (var st = Array(lt), Jt = 0; Jt < lt; Jt++)
          st[Jt] = arguments[Jt + 2];
        X.children = st;
      }
      return Gt(y.type, P, X);
    }),
    (F.createContext = function (y) {
      return (
        (y = {
          $$typeof: p,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: m, _context: y }),
        y
      );
    }),
    (F.createElement = function (y, U, L) {
      var X,
        P = {},
        lt = null;
      if (U != null)
        for (X in (U.key !== void 0 && (lt = "" + U.key), U))
          Ct.call(U, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (P[X] = U[X]);
      var st = arguments.length - 2;
      if (st === 1) P.children = L;
      else if (1 < st) {
        for (var Jt = Array(st), Dt = 0; Dt < st; Dt++)
          Jt[Dt] = arguments[Dt + 2];
        P.children = Jt;
      }
      if (y && y.defaultProps)
        for (X in ((st = y.defaultProps), st))
          P[X] === void 0 && (P[X] = st[X]);
      return Gt(y, lt, P);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (y) {
      return { $$typeof: _, render: y };
    }),
    (F.isValidElement = xe),
    (F.lazy = function (y) {
      return { $$typeof: x, _payload: { _status: -1, _result: y }, _init: W };
    }),
    (F.memo = function (y, U) {
      return { $$typeof: g, type: y, compare: U === void 0 ? null : U };
    }),
    (F.startTransition = function (y) {
      var U = I.T,
        L = {};
      I.T = L;
      try {
        var X = y(),
          P = I.S;
        P !== null && P(L, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(Rt, mt);
      } catch (lt) {
        mt(lt);
      } finally {
        U !== null && L.types !== null && (U.types = L.types), (I.T = U);
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (F.use = function (y) {
      return I.H.use(y);
    }),
    (F.useActionState = function (y, U, L) {
      return I.H.useActionState(y, U, L);
    }),
    (F.useCallback = function (y, U) {
      return I.H.useCallback(y, U);
    }),
    (F.useContext = function (y) {
      return I.H.useContext(y);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (y, U) {
      return I.H.useDeferredValue(y, U);
    }),
    (F.useEffect = function (y, U) {
      return I.H.useEffect(y, U);
    }),
    (F.useEffectEvent = function (y) {
      return I.H.useEffectEvent(y);
    }),
    (F.useId = function () {
      return I.H.useId();
    }),
    (F.useImperativeHandle = function (y, U, L) {
      return I.H.useImperativeHandle(y, U, L);
    }),
    (F.useInsertionEffect = function (y, U) {
      return I.H.useInsertionEffect(y, U);
    }),
    (F.useLayoutEffect = function (y, U) {
      return I.H.useLayoutEffect(y, U);
    }),
    (F.useMemo = function (y, U) {
      return I.H.useMemo(y, U);
    }),
    (F.useOptimistic = function (y, U) {
      return I.H.useOptimistic(y, U);
    }),
    (F.useReducer = function (y, U, L) {
      return I.H.useReducer(y, U, L);
    }),
    (F.useRef = function (y) {
      return I.H.useRef(y);
    }),
    (F.useState = function (y) {
      return I.H.useState(y);
    }),
    (F.useSyncExternalStore = function (y, U, L) {
      return I.H.useSyncExternalStore(y, U, L);
    }),
    (F.useTransition = function () {
      return I.H.useTransition();
    }),
    (F.version = "19.2.3"),
    F
  );
}
var Ph;
function Xf() {
  return Ph || ((Ph = 1), (Cf.exports = ry())), Cf.exports;
}
var O = Xf(),
  Df = { exports: {} },
  xn = {},
  Nf = { exports: {} },
  xf = {};
var td;
function sy() {
  return (
    td ||
      ((td = 1),
      (function (c) {
        function r(C, q) {
          var W = C.length;
          C.push(q);
          t: for (; 0 < W; ) {
            var mt = (W - 1) >>> 1,
              pt = C[mt];
            if (0 < d(pt, q)) (C[mt] = q), (C[W] = pt), (W = mt);
            else break t;
          }
        }
        function s(C) {
          return C.length === 0 ? null : C[0];
        }
        function f(C) {
          if (C.length === 0) return null;
          var q = C[0],
            W = C.pop();
          if (W !== q) {
            C[0] = W;
            t: for (var mt = 0, pt = C.length, y = pt >>> 1; mt < y; ) {
              var U = 2 * (mt + 1) - 1,
                L = C[U],
                X = U + 1,
                P = C[X];
              if (0 > d(L, W))
                X < pt && 0 > d(P, L)
                  ? ((C[mt] = P), (C[X] = W), (mt = X))
                  : ((C[mt] = L), (C[U] = W), (mt = U));
              else if (X < pt && 0 > d(P, W)) (C[mt] = P), (C[X] = W), (mt = X);
              else break t;
            }
          }
          return q;
        }
        function d(C, q) {
          var W = C.sortIndex - q.sortIndex;
          return W !== 0 ? W : C.id - q.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          c.unstable_now = function () {
            return m.now();
          };
        } else {
          var p = Date,
            _ = p.now();
          c.unstable_now = function () {
            return p.now() - _;
          };
        }
        var b = [],
          g = [],
          x = 1,
          R = null,
          B = 3,
          G = !1,
          V = !1,
          k = !1,
          Q = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function bt(C) {
          for (var q = s(g); q !== null; ) {
            if (q.callback === null) f(g);
            else if (q.startTime <= C)
              f(g), (q.sortIndex = q.expirationTime), r(b, q);
            else break;
            q = s(g);
          }
        }
        function Et(C) {
          if (((k = !1), bt(C), !V))
            if (s(b) !== null) (V = !0), Rt || ((Rt = !0), Wt());
            else {
              var q = s(g);
              q !== null && Oe(Et, q.startTime - C);
            }
        }
        var Rt = !1,
          I = -1,
          Ct = 5,
          Gt = -1;
        function me() {
          return Q ? !0 : !(c.unstable_now() - Gt < Ct);
        }
        function xe() {
          if (((Q = !1), Rt)) {
            var C = c.unstable_now();
            Gt = C;
            var q = !0;
            try {
              t: {
                (V = !1), k && ((k = !1), K(I), (I = -1)), (G = !0);
                var W = B;
                try {
                  e: {
                    for (
                      bt(C), R = s(b);
                      R !== null && !(R.expirationTime > C && me());

                    ) {
                      var mt = R.callback;
                      if (typeof mt == "function") {
                        (R.callback = null), (B = R.priorityLevel);
                        var pt = mt(R.expirationTime <= C);
                        if (((C = c.unstable_now()), typeof pt == "function")) {
                          (R.callback = pt), bt(C), (q = !0);
                          break e;
                        }
                        R === s(b) && f(b), bt(C);
                      } else f(b);
                      R = s(b);
                    }
                    if (R !== null) q = !0;
                    else {
                      var y = s(g);
                      y !== null && Oe(Et, y.startTime - C), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (R = null), (B = W), (G = !1);
                }
                q = void 0;
              }
            } finally {
              q ? Wt() : (Rt = !1);
            }
          }
        }
        var Wt;
        if (typeof J == "function")
          Wt = function () {
            J(xe);
          };
        else if (typeof MessageChannel < "u") {
          var Dl = new MessageChannel(),
            Le = Dl.port2;
          (Dl.port1.onmessage = xe),
            (Wt = function () {
              Le.postMessage(null);
            });
        } else
          Wt = function () {
            j(xe, 0);
          };
        function Oe(C, q) {
          I = j(function () {
            C(c.unstable_now());
          }, q);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (c.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Ct = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (c.unstable_next = function (C) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = B;
            }
            var W = B;
            B = q;
            try {
              return C();
            } finally {
              B = W;
            }
          }),
          (c.unstable_requestPaint = function () {
            Q = !0;
          }),
          (c.unstable_runWithPriority = function (C, q) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var W = B;
            B = C;
            try {
              return q();
            } finally {
              B = W;
            }
          }),
          (c.unstable_scheduleCallback = function (C, q, W) {
            var mt = c.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? mt + W : mt))
                : (W = mt),
              C)
            ) {
              case 1:
                var pt = -1;
                break;
              case 2:
                pt = 250;
                break;
              case 5:
                pt = 1073741823;
                break;
              case 4:
                pt = 1e4;
                break;
              default:
                pt = 5e3;
            }
            return (
              (pt = W + pt),
              (C = {
                id: x++,
                callback: q,
                priorityLevel: C,
                startTime: W,
                expirationTime: pt,
                sortIndex: -1,
              }),
              W > mt
                ? ((C.sortIndex = W),
                  r(g, C),
                  s(b) === null &&
                    C === s(g) &&
                    (k ? (K(I), (I = -1)) : (k = !0), Oe(Et, W - mt)))
                : ((C.sortIndex = pt),
                  r(b, C),
                  V || G || ((V = !0), Rt || ((Rt = !0), Wt()))),
              C
            );
          }),
          (c.unstable_shouldYield = me),
          (c.unstable_wrapCallback = function (C) {
            var q = B;
            return function () {
              var W = B;
              B = q;
              try {
                return C.apply(this, arguments);
              } finally {
                B = W;
              }
            };
          });
      })(xf)),
    xf
  );
}
var ed;
function hy() {
  return ed || ((ed = 1), (Nf.exports = sy())), Nf.exports;
}
var Uf = { exports: {} },
  wt = {};
var ld;
function dy() {
  if (ld) return wt;
  ld = 1;
  var c = Xf();
  function r(b) {
    var g = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        g += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var f = {
      d: {
        f: s,
        r: function () {
          throw Error(r(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function m(b, g, x) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: R == null ? null : "" + R,
      children: b,
      containerInfo: g,
      implementation: x,
    };
  }
  var p = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(b, g) {
    if (b === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (wt.createPortal = function (b, g) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return m(b, g, null, x);
    }),
    (wt.flushSync = function (b) {
      var g = p.T,
        x = f.p;
      try {
        if (((p.T = null), (f.p = 2), b)) return b();
      } finally {
        (p.T = g), (f.p = x), f.d.f();
      }
    }),
    (wt.preconnect = function (b, g) {
      typeof b == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        f.d.C(b, g));
    }),
    (wt.prefetchDNS = function (b) {
      typeof b == "string" && f.d.D(b);
    }),
    (wt.preinit = function (b, g) {
      if (typeof b == "string" && g && typeof g.as == "string") {
        var x = g.as,
          R = _(x, g.crossOrigin),
          B = typeof g.integrity == "string" ? g.integrity : void 0,
          G = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        x === "style"
          ? f.d.S(b, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: R,
              integrity: B,
              fetchPriority: G,
            })
          : x === "script" &&
            f.d.X(b, {
              crossOrigin: R,
              integrity: B,
              fetchPriority: G,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (wt.preinitModule = function (b, g) {
      if (typeof b == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var x = _(g.as, g.crossOrigin);
            f.d.M(b, {
              crossOrigin: x,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && f.d.M(b);
    }),
    (wt.preload = function (b, g) {
      if (
        typeof b == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var x = g.as,
          R = _(x, g.crossOrigin);
        f.d.L(b, x, {
          crossOrigin: R,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (wt.preloadModule = function (b, g) {
      if (typeof b == "string")
        if (g) {
          var x = _(g.as, g.crossOrigin);
          f.d.m(b, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: x,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    (wt.requestFormReset = function (b) {
      f.d.r(b);
    }),
    (wt.unstable_batchedUpdates = function (b, g) {
      return b(g);
    }),
    (wt.useFormState = function (b, g, x) {
      return p.H.useFormState(b, g, x);
    }),
    (wt.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (wt.version = "19.2.3"),
    wt
  );
}
var ad;
function my() {
  if (ad) return Uf.exports;
  ad = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), (Uf.exports = dy()), Uf.exports;
}
var nd;
function vy() {
  if (nd) return xn;
  nd = 1;
  var c = hy(),
    r = Xf(),
    s = my();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function m(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function _(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function b(t) {
    if (m(t) !== t) throw Error(f(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = m(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return b(n), t;
          if (u === a) return b(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var i = !1, o = n.child; o; ) {
          if (o === l) {
            (i = !0), (l = n), (a = u);
            break;
          }
          if (o === a) {
            (i = !0), (a = n), (l = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === l) {
              (i = !0), (l = u), (a = n);
              break;
            }
            if (o === a) {
              (i = !0), (a = u), (l = n);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = x(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var R = Object.assign,
    B = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    V = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    K = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    bt = Symbol.for("react.forward_ref"),
    Et = Symbol.for("react.suspense"),
    Rt = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Ct = Symbol.for("react.lazy"),
    Gt = Symbol.for("react.activity"),
    me = Symbol.for("react.memo_cache_sentinel"),
    xe = Symbol.iterator;
  function Wt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (xe && t[xe]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Dl = Symbol.for("react.client.reference");
  function Le(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Dl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case k:
        return "Fragment";
      case j:
        return "Profiler";
      case Q:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Rt:
        return "SuspenseList";
      case Gt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case bt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return (
            (e = t.displayName || null), e !== null ? e : Le(t.type) || "Memo"
          );
        case Ct:
          (e = t._payload), (t = t._init);
          try {
            return Le(t(e));
          } catch {}
      }
    return null;
  }
  var Oe = Array.isArray,
    C = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    mt = [],
    pt = -1;
  function y(t) {
    return { current: t };
  }
  function U(t) {
    0 > pt || ((t.current = mt[pt]), (mt[pt] = null), pt--);
  }
  function L(t, e) {
    pt++, (mt[pt] = t.current), (t.current = e);
  }
  var X = y(null),
    P = y(null),
    lt = y(null),
    st = y(null);
  function Jt(t, e) {
    switch ((L(lt, e), L(P, t), L(X, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Sh(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Sh(e)), (t = bh(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    U(X), L(X, t);
  }
  function Dt() {
    U(X), U(P), U(lt);
  }
  function qa(t) {
    t.memoizedState !== null && L(st, t);
    var e = X.current,
      l = bh(e, t.type);
    e !== l && (L(P, t), L(X, l));
  }
  function Ln(t) {
    P.current === t && (U(X), U(P)),
      st.current === t && (U(st), (On._currentValue = W));
  }
  var oi, kf;
  function Nl(t) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (oi = (e && e[1]) || ""),
          (kf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      oi +
      t +
      kf
    );
  }
  var ri = !1;
  function si(t, e) {
    if (!t || ri) return "";
    ri = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var N = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(N.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(N, []);
                } catch (A) {
                  var z = A;
                }
                Reflect.construct(t, [], N);
              } else {
                try {
                  N.call();
                } catch (A) {
                  z = A;
                }
                t.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                z = A;
              }
              (N = t()) &&
                typeof N.catch == "function" &&
                N.catch(function () {});
            }
          } catch (A) {
            if (A && z && typeof A.stack == "string") return [A.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        o = u[1];
      if (i && o) {
        var h = i.split(`
`),
          T = o.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < T.length && !T[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === T.length)
          for (
            a = h.length - 1, n = T.length - 1;
            1 <= a && 0 <= n && h[a] !== T[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== T[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== T[n])) {
                  var M =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", t.displayName)),
                    M
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (ri = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Nl(l) : "";
  }
  function Yd(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Nl(t.type);
      case 16:
        return Nl("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Nl("Suspense Fallback")
          : Nl("Suspense");
      case 19:
        return Nl("SuspenseList");
      case 0:
      case 15:
        return si(t.type, !1);
      case 11:
        return si(t.type.render, !1);
      case 1:
        return si(t.type, !0);
      case 31:
        return Nl("Activity");
      default:
        return "";
    }
  }
  function $f(t) {
    try {
      var e = "",
        l = null;
      do (e += Yd(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var hi = Object.prototype.hasOwnProperty,
    di = c.unstable_scheduleCallback,
    mi = c.unstable_cancelCallback,
    Gd = c.unstable_shouldYield,
    Xd = c.unstable_requestPaint,
    ne = c.unstable_now,
    Qd = c.unstable_getCurrentPriorityLevel,
    Wf = c.unstable_ImmediatePriority,
    Ff = c.unstable_UserBlockingPriority,
    Yn = c.unstable_NormalPriority,
    Zd = c.unstable_LowPriority,
    If = c.unstable_IdlePriority,
    Vd = c.log,
    Kd = c.unstable_setDisableYieldValue,
    La = null,
    ue = null;
  function ul(t) {
    if (
      (typeof Vd == "function" && Kd(t),
      ue && typeof ue.setStrictMode == "function")
    )
      try {
        ue.setStrictMode(La, t);
      } catch {}
  }
  var ie = Math.clz32 ? Math.clz32 : kd,
    wd = Math.log,
    Jd = Math.LN2;
  function kd(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((wd(t) / Jd) | 0)) | 0;
  }
  var Gn = 256,
    Xn = 262144,
    Qn = 4194304;
  function xl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Zn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~u),
          a !== 0
            ? (n = xl(a))
            : ((i &= o),
              i !== 0
                ? (n = xl(i))
                : l || ((l = o & ~t), l !== 0 && (n = xl(l)))))
        : ((o = a & ~u),
          o !== 0
            ? (n = xl(o))
            : i !== 0
            ? (n = xl(i))
            : l || ((l = a & ~t), l !== 0 && (n = xl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & u) === 0 &&
          ((u = n & -n),
          (l = e & -e),
          u >= l || (u === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Ya(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function $d(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pf() {
    var t = Qn;
    return (Qn <<= 1), (Qn & 62914560) === 0 && (Qn = 4194304), t;
  }
  function vi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ga(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Wd(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var o = t.entanglements,
      h = t.expirationTimes,
      T = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var M = 31 - ie(l),
        N = 1 << M;
      (o[M] = 0), (h[M] = -1);
      var z = T[M];
      if (z !== null)
        for (T[M] = null, M = 0; M < z.length; M++) {
          var A = z[M];
          A !== null && (A.lane &= -536870913);
        }
      l &= ~N;
    }
    a !== 0 && to(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function to(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - ie(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function eo(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - ie(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function lo(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : yi(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function yi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gi(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ao() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Zh(t.type));
  }
  function no(t, e) {
    var l = q.p;
    try {
      return (q.p = t), e();
    } finally {
      q.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Xt = "__reactFiber$" + il,
    Ft = "__reactProps$" + il,
    Il = "__reactContainer$" + il,
    pi = "__reactEvents$" + il,
    Fd = "__reactListeners$" + il,
    Id = "__reactHandles$" + il,
    uo = "__reactResources$" + il,
    Xa = "__reactMarker$" + il;
  function Si(t) {
    delete t[Xt], delete t[Ft], delete t[pi], delete t[Fd], delete t[Id];
  }
  function Pl(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Il] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Oh(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = Oh(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function ta(t) {
    if ((t = t[Xt] || t[Il])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ea(t) {
    var e = t[uo];
    return (
      e ||
        (e = t[uo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Lt(t) {
    t[Xa] = !0;
  }
  var io = new Set(),
    co = {};
  function Ul(t, e) {
    la(t, e), la(t + "Capture", e);
  }
  function la(t, e) {
    for (co[t] = e, t = 0; t < e.length; t++) io.add(e[t]);
  }
  var Pd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    fo = {},
    oo = {};
  function tm(t) {
    return hi.call(oo, t)
      ? !0
      : hi.call(fo, t)
      ? !1
      : Pd.test(t)
      ? (oo[t] = !0)
      : ((fo[t] = !0), !1);
  }
  function Vn(t, e, l) {
    if (tm(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Kn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ye(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ro(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function em(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (l = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function bi(t) {
    if (!t._valueTracker) {
      var e = ro(t) ? "checked" : "value";
      t._valueTracker = em(t, e, "" + t[e]);
    }
  }
  function so(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = ro(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function wn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var lm = /[\n"\\]/g;
  function ye(t) {
    return t.replace(lm, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ei(t, e, l, a, n, u, i, o) {
    (t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ve(e))
          : t.value !== "" + ve(e) && (t.value = "" + ve(e))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ti(t, i, ve(e))
        : l != null
        ? Ti(t, i, ve(l))
        : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.name = "" + ve(o))
        : t.removeAttribute("name");
  }
  function ho(t, e, l, a, n, u, i, o) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      e != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        bi(t);
        return;
      }
      (l = l != null ? "" + ve(l) : ""),
        (e = e != null ? "" + ve(e) : l),
        o || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = o ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      bi(t);
  }
  function Ti(t, e, l) {
    (e === "number" && wn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function aa(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + ve(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function mo(t, e, l) {
    if (
      e != null &&
      ((e = "" + ve(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + ve(l) : "";
  }
  function vo(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (Oe(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = ve(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      bi(t);
  }
  function na(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var am = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function yo(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || am.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function go(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && yo(t, n, a);
    } else for (var u in e) e.hasOwnProperty(u) && yo(t, u, e[u]);
  }
  function zi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var nm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    um =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Jn(t) {
    return um.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ge() {}
  var _i = null;
  function Ai(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ua = null,
    ia = null;
  function po(t) {
    var e = ta(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ei(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ye("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(f(90));
                Ei(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && so(a);
          }
          break t;
        case "textarea":
          mo(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && aa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ri = !1;
  function So(t, e, l) {
    if (Ri) return t(e, l);
    Ri = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ri = !1),
        (ua !== null || ia !== null) &&
          (Hu(), ua && ((e = ua), (t = ia), (ia = ua = null), po(e), t)))
      )
        for (e = 0; e < t.length; e++) po(t[e]);
    }
  }
  function Za(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var Xe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Oi = !1;
  if (Xe)
    try {
      var Va = {};
      Object.defineProperty(Va, "passive", {
        get: function () {
          Oi = !0;
        },
      }),
        window.addEventListener("test", Va, Va),
        window.removeEventListener("test", Va, Va);
    } catch {
      Oi = !1;
    }
  var cl = null,
    Mi = null,
    kn = null;
  function bo() {
    if (kn) return kn;
    var t,
      e = Mi,
      l = e.length,
      a,
      n = "value" in cl ? cl.value : cl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return (kn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function $n(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Wn() {
    return !0;
  }
  function Eo() {
    return !1;
  }
  function It(t) {
    function e(l, a, n, u, i) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in t)
        t.hasOwnProperty(o) && ((l = t[o]), (this[o] = l ? l(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Wn
          : Eo),
        (this.isPropagationStopped = Eo),
        this
      );
    }
    return (
      R(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Wn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Wn));
        },
        persist: function () {},
        isPersistent: Wn,
      }),
      e
    );
  }
  var Hl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Fn = It(Hl),
    Ka = R({}, Hl, { view: 0, detail: 0 }),
    im = It(Ka),
    Ci,
    Di,
    wa,
    In = R({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== wa &&
              (wa && t.type === "mousemove"
                ? ((Ci = t.screenX - wa.screenX), (Di = t.screenY - wa.screenY))
                : (Di = Ci = 0),
              (wa = t)),
            Ci);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Di;
      },
    }),
    To = It(In),
    cm = R({}, In, { dataTransfer: 0 }),
    fm = It(cm),
    om = R({}, Ka, { relatedTarget: 0 }),
    Ni = It(om),
    rm = R({}, Hl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sm = It(rm),
    hm = R({}, Hl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    dm = It(hm),
    mm = R({}, Hl, { data: 0 }),
    zo = It(mm),
    vm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ym = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function pm(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = gm[t])
      ? !!e[t]
      : !1;
  }
  function xi() {
    return pm;
  }
  var Sm = R({}, Ka, {
      key: function (t) {
        if (t.key) {
          var e = vm[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = $n(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? ym[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xi,
      charCode: function (t) {
        return t.type === "keypress" ? $n(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? $n(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    bm = It(Sm),
    Em = R({}, In, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    _o = It(Em),
    Tm = R({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xi,
    }),
    zm = It(Tm),
    _m = R({}, Hl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Am = It(_m),
    Rm = R({}, In, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Om = It(Rm),
    Mm = R({}, Hl, { newState: 0, oldState: 0 }),
    Cm = It(Mm),
    Dm = [9, 13, 27, 32],
    Ui = Xe && "CompositionEvent" in window,
    Ja = null;
  Xe && "documentMode" in document && (Ja = document.documentMode);
  var Nm = Xe && "TextEvent" in window && !Ja,
    Ao = Xe && (!Ui || (Ja && 8 < Ja && 11 >= Ja)),
    Ro = " ",
    Oo = !1;
  function Mo(t, e) {
    switch (t) {
      case "keyup":
        return Dm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Co(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ca = !1;
  function xm(t, e) {
    switch (t) {
      case "compositionend":
        return Co(e);
      case "keypress":
        return e.which !== 32 ? null : ((Oo = !0), Ro);
      case "textInput":
        return (t = e.data), t === Ro && Oo ? null : t;
      default:
        return null;
    }
  }
  function Um(t, e) {
    if (ca)
      return t === "compositionend" || (!Ui && Mo(t, e))
        ? ((t = bo()), (kn = Mi = cl = null), (ca = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ao && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Hm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Do(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Hm[t.type] : e === "textarea";
  }
  function No(t, e, l, a) {
    ua ? (ia ? ia.push(a) : (ia = [a])) : (ua = a),
      (e = Xu(e, "onChange")),
      0 < e.length &&
        ((l = new Fn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var ka = null,
    $a = null;
  function jm(t) {
    dh(t, 0);
  }
  function Pn(t) {
    var e = Qa(t);
    if (so(e)) return t;
  }
  function xo(t, e) {
    if (t === "change") return e;
  }
  var Uo = !1;
  if (Xe) {
    var Hi;
    if (Xe) {
      var ji = "oninput" in document;
      if (!ji) {
        var Ho = document.createElement("div");
        Ho.setAttribute("oninput", "return;"),
          (ji = typeof Ho.oninput == "function");
      }
      Hi = ji;
    } else Hi = !1;
    Uo = Hi && (!document.documentMode || 9 < document.documentMode);
  }
  function jo() {
    ka && (ka.detachEvent("onpropertychange", Bo), ($a = ka = null));
  }
  function Bo(t) {
    if (t.propertyName === "value" && Pn($a)) {
      var e = [];
      No(e, $a, t, Ai(t)), So(jm, e);
    }
  }
  function Bm(t, e, l) {
    t === "focusin"
      ? (jo(), (ka = e), ($a = l), ka.attachEvent("onpropertychange", Bo))
      : t === "focusout" && jo();
  }
  function qm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pn($a);
  }
  function Lm(t, e) {
    if (t === "click") return Pn(e);
  }
  function Ym(t, e) {
    if (t === "input" || t === "change") return Pn(e);
  }
  function Gm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ce = typeof Object.is == "function" ? Object.is : Gm;
  function Wa(t, e) {
    if (ce(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(e, n) || !ce(t[n], e[n])) return !1;
    }
    return !0;
  }
  function qo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Lo(t, e) {
    var l = qo(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = qo(l);
    }
  }
  function Yo(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? Yo(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Go(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = wn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = wn(t.document);
    }
    return e;
  }
  function Bi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Xm = Xe && "documentMode" in document && 11 >= document.documentMode,
    fa = null,
    qi = null,
    Fa = null,
    Li = !1;
  function Xo(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Li ||
      fa == null ||
      fa !== wn(a) ||
      ((a = fa),
      "selectionStart" in a && Bi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Fa && Wa(Fa, a)) ||
        ((Fa = a),
        (a = Xu(qi, "onSelect")),
        0 < a.length &&
          ((e = new Fn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = fa))));
  }
  function jl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var oa = {
      animationend: jl("Animation", "AnimationEnd"),
      animationiteration: jl("Animation", "AnimationIteration"),
      animationstart: jl("Animation", "AnimationStart"),
      transitionrun: jl("Transition", "TransitionRun"),
      transitionstart: jl("Transition", "TransitionStart"),
      transitioncancel: jl("Transition", "TransitionCancel"),
      transitionend: jl("Transition", "TransitionEnd"),
    },
    Yi = {},
    Qo = {};
  Xe &&
    ((Qo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete oa.animationend.animation,
      delete oa.animationiteration.animation,
      delete oa.animationstart.animation),
    "TransitionEvent" in window || delete oa.transitionend.transition);
  function Bl(t) {
    if (Yi[t]) return Yi[t];
    if (!oa[t]) return t;
    var e = oa[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Qo) return (Yi[t] = e[l]);
    return t;
  }
  var Zo = Bl("animationend"),
    Vo = Bl("animationiteration"),
    Ko = Bl("animationstart"),
    Qm = Bl("transitionrun"),
    Zm = Bl("transitionstart"),
    Vm = Bl("transitioncancel"),
    wo = Bl("transitionend"),
    Jo = new Map(),
    Gi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gi.push("scrollEnd");
  function Me(t, e) {
    Jo.set(t, e), Ul(e, [t]);
  }
  var tu =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    ge = [],
    ra = 0,
    Xi = 0;
  function eu() {
    for (var t = ra, e = (Xi = ra = 0); e < t; ) {
      var l = ge[e];
      ge[e++] = null;
      var a = ge[e];
      ge[e++] = null;
      var n = ge[e];
      ge[e++] = null;
      var u = ge[e];
      if (((ge[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && ko(l, n, u);
    }
  }
  function lu(t, e, l, a) {
    (ge[ra++] = t),
      (ge[ra++] = e),
      (ge[ra++] = l),
      (ge[ra++] = a),
      (Xi |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Qi(t, e, l, a) {
    return lu(t, e, l, a), au(t);
  }
  function ql(t, e) {
    return lu(t, null, null, e), au(t);
  }
  function ko(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return);
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ie(l)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        u)
      : null;
  }
  function au(t) {
    if (50 < bn) throw ((bn = 0), (Fc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var sa = {};
  function Km(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function fe(t, e, l, a) {
    return new Km(t, e, l, a);
  }
  function Zi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Qe(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = fe(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function $o(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function nu(t, e, l, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == "function")) Zi(t) && (i = 1);
    else if (typeof t == "string")
      i = Wv(t, l, X.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Gt:
          return (t = fe(31, l, e, n)), (t.elementType = Gt), (t.lanes = u), t;
        case k:
          return Ll(l.children, n, u, e);
        case Q:
          (i = 8), (n |= 24);
          break;
        case j:
          return (
            (t = fe(12, l, e, n | 2)), (t.elementType = j), (t.lanes = u), t
          );
        case Et:
          return (t = fe(13, l, e, n)), (t.elementType = Et), (t.lanes = u), t;
        case Rt:
          return (t = fe(19, l, e, n)), (t.elementType = Rt), (t.lanes = u), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case J:
                i = 10;
                break t;
              case K:
                i = 9;
                break t;
              case bt:
                i = 11;
                break t;
              case I:
                i = 14;
                break t;
              case Ct:
                (i = 16), (a = null);
                break t;
            }
          (i = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = fe(i, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = u), e
    );
  }
  function Ll(t, e, l, a) {
    return (t = fe(7, t, a, e)), (t.lanes = l), t;
  }
  function Vi(t, e, l) {
    return (t = fe(6, t, null, e)), (t.lanes = l), t;
  }
  function Wo(t) {
    var e = fe(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Ki(t, e, l) {
    return (
      (e = fe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Fo = new WeakMap();
  function pe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Fo.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: $f(e) }), Fo.set(t, e), e);
    }
    return { value: t, source: e, stack: $f(e) };
  }
  var ha = [],
    da = 0,
    uu = null,
    Ia = 0,
    Se = [],
    be = 0,
    fl = null,
    Ue = 1,
    He = "";
  function Ze(t, e) {
    (ha[da++] = Ia), (ha[da++] = uu), (uu = t), (Ia = e);
  }
  function Io(t, e, l) {
    (Se[be++] = Ue), (Se[be++] = He), (Se[be++] = fl), (fl = t);
    var a = Ue;
    t = He;
    var n = 32 - ie(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - ie(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Ue = (1 << (32 - ie(e) + n)) | (l << n) | a),
        (He = u + t);
    } else (Ue = (1 << u) | (l << n) | a), (He = t);
  }
  function wi(t) {
    t.return !== null && (Ze(t, 1), Io(t, 1, 0));
  }
  function Ji(t) {
    for (; t === uu; )
      (uu = ha[--da]), (ha[da] = null), (Ia = ha[--da]), (ha[da] = null);
    for (; t === fl; )
      (fl = Se[--be]),
        (Se[be] = null),
        (He = Se[--be]),
        (Se[be] = null),
        (Ue = Se[--be]),
        (Se[be] = null);
  }
  function Po(t, e) {
    (Se[be++] = Ue),
      (Se[be++] = He),
      (Se[be++] = fl),
      (Ue = e.id),
      (He = e.overflow),
      (fl = t);
  }
  var Qt = null,
    Tt = null,
    ct = !1,
    ol = null,
    Ee = !1,
    ki = Error(f(519));
  function rl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Pa(pe(e, t)), ki);
  }
  function tr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Xt] = t), (e[Ft] = a), l)) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Tn.length; l++) nt(Tn[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e),
          ho(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), vo(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      gh(e.textContent, l)
        ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)),
          a.onScroll != null && nt("scroll", e),
          a.onScrollEnd != null && nt("scrollend", e),
          a.onClick != null && (e.onclick = Ge),
          (e = !0))
        : (e = !1),
      e || rl(t, !0);
  }
  function er(t) {
    for (Qt = t.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          Ee = !1;
          return;
        case 27:
        case 3:
          Ee = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function ma(t) {
    if (t !== Qt) return !1;
    if (!ct) return er(t), (ct = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || df(t.type, t.memoizedProps))),
        (l = !l)),
      l && Tt && rl(t),
      er(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Tt = Rh(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      Tt = Rh(t);
    } else
      e === 27
        ? ((e = Tt), _l(t.type) ? ((t = pf), (pf = null), (Tt = t)) : (Tt = e))
        : (Tt = Qt ? ze(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Yl() {
    (Tt = Qt = null), (ct = !1);
  }
  function $i() {
    var t = ol;
    return (
      t !== null &&
        (le === null ? (le = t) : le.push.apply(le, t), (ol = null)),
      t
    );
  }
  function Pa(t) {
    ol === null ? (ol = [t]) : ol.push(t);
  }
  var Wi = y(null),
    Gl = null,
    Ve = null;
  function sl(t, e, l) {
    L(Wi, e._currentValue), (e._currentValue = l);
  }
  function Ke(t) {
    (t._currentValue = Wi.current), U(Wi);
  }
  function Fi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Ii(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var o = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (o.context === e[h]) {
              (u.lanes |= l),
                (o = u.alternate),
                o !== null && (o.lanes |= l),
                Fi(u.return, l, t),
                a || (i = null);
              break t;
            }
          u = o.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        (i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Fi(i, l, t),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function va(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var o = n.type;
          ce(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(o) : (t = [o]));
        }
      } else if (n === st.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(On) : (t = [On]));
      }
      n = n.return;
    }
    t !== null && Ii(e, t, l, a), (e.flags |= 262144);
  }
  function iu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Xl(t) {
    (Gl = t),
      (Ve = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Zt(t) {
    return lr(Gl, t);
  }
  function cu(t, e) {
    return Gl === null && Xl(t), lr(t, e);
  }
  function lr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ve === null)) {
      if (t === null) throw Error(f(308));
      (Ve = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ve = Ve.next = e;
    return l;
  }
  var wm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    Jm = c.unstable_scheduleCallback,
    km = c.unstable_NormalPriority,
    Ut = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Pi() {
    return { controller: new wm(), data: new Map(), refCount: 0 };
  }
  function tn(t) {
    t.refCount--,
      t.refCount === 0 &&
        Jm(km, function () {
          t.controller.abort();
        });
  }
  var en = null,
    tc = 0,
    ya = 0,
    ga = null;
  function $m(t, e) {
    if (en === null) {
      var l = (en = []);
      (tc = 0),
        (ya = af()),
        (ga = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return tc++, e.then(ar, ar), e;
  }
  function ar() {
    if (--tc === 0 && en !== null) {
      ga !== null && (ga.status = "fulfilled");
      var t = en;
      (en = null), (ya = 0), (ga = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Wm(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var nr = C.S;
  C.S = function (t, e) {
    (Xs = ne()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        $m(t, e),
      nr !== null && nr(t, e);
  };
  var Ql = y(null);
  function ec() {
    var t = Ql.current;
    return t !== null ? t : St.pooledCache;
  }
  function fu(t, e) {
    e === null ? L(Ql, Ql.current) : L(Ql, e.pool);
  }
  function ur() {
    var t = ec();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var pa = Error(f(460)),
    lc = Error(f(474)),
    ou = Error(f(542)),
    ru = { then: function () {} };
  function ir(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function cr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Ge, Ge), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), or(t), t);
      default:
        if (typeof e.status == "string") e.then(Ge, Ge);
        else {
          if (((t = St), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), or(t), t);
        }
        throw ((Vl = e), pa);
    }
  }
  function Zl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Vl = l), pa)
        : l;
    }
  }
  var Vl = null;
  function fr() {
    if (Vl === null) throw Error(f(459));
    var t = Vl;
    return (Vl = null), t;
  }
  function or(t) {
    if (t === pa || t === ou) throw Error(f(483));
  }
  var Sa = null,
    ln = 0;
  function su(t) {
    var e = ln;
    return (ln += 1), Sa === null && (Sa = []), cr(Sa, t, e);
  }
  function an(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function hu(t, e) {
    throw e.$$typeof === B
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function rr(t) {
    function e(S, v) {
      if (t) {
        var E = S.deletions;
        E === null ? ((S.deletions = [v]), (S.flags |= 16)) : E.push(v);
      }
    }
    function l(S, v) {
      if (!t) return null;
      for (; v !== null; ) e(S, v), (v = v.sibling);
      return null;
    }
    function a(S) {
      for (var v = new Map(); S !== null; )
        S.key !== null ? v.set(S.key, S) : v.set(S.index, S), (S = S.sibling);
      return v;
    }
    function n(S, v) {
      return (S = Qe(S, v)), (S.index = 0), (S.sibling = null), S;
    }
    function u(S, v, E) {
      return (
        (S.index = E),
        t
          ? ((E = S.alternate),
            E !== null
              ? ((E = E.index), E < v ? ((S.flags |= 67108866), v) : E)
              : ((S.flags |= 67108866), v))
          : ((S.flags |= 1048576), v)
      );
    }
    function i(S) {
      return t && S.alternate === null && (S.flags |= 67108866), S;
    }
    function o(S, v, E, D) {
      return v === null || v.tag !== 6
        ? ((v = Vi(E, S.mode, D)), (v.return = S), v)
        : ((v = n(v, E)), (v.return = S), v);
    }
    function h(S, v, E, D) {
      var w = E.type;
      return w === k
        ? M(S, v, E.props.children, D, E.key)
        : v !== null &&
          (v.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === Ct &&
              Zl(w) === v.type))
        ? ((v = n(v, E.props)), an(v, E), (v.return = S), v)
        : ((v = nu(E.type, E.key, E.props, null, S.mode, D)),
          an(v, E),
          (v.return = S),
          v);
    }
    function T(S, v, E, D) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== E.containerInfo ||
        v.stateNode.implementation !== E.implementation
        ? ((v = Ki(E, S.mode, D)), (v.return = S), v)
        : ((v = n(v, E.children || [])), (v.return = S), v);
    }
    function M(S, v, E, D, w) {
      return v === null || v.tag !== 7
        ? ((v = Ll(E, S.mode, D, w)), (v.return = S), v)
        : ((v = n(v, E)), (v.return = S), v);
    }
    function N(S, v, E) {
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return (v = Vi("" + v, S.mode, E)), (v.return = S), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case G:
            return (
              (E = nu(v.type, v.key, v.props, null, S.mode, E)),
              an(E, v),
              (E.return = S),
              E
            );
          case V:
            return (v = Ki(v, S.mode, E)), (v.return = S), v;
          case Ct:
            return (v = Zl(v)), N(S, v, E);
        }
        if (Oe(v) || Wt(v))
          return (v = Ll(v, S.mode, E, null)), (v.return = S), v;
        if (typeof v.then == "function") return N(S, su(v), E);
        if (v.$$typeof === J) return N(S, cu(S, v), E);
        hu(S, v);
      }
      return null;
    }
    function z(S, v, E, D) {
      var w = v !== null ? v.key : null;
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return w !== null ? null : o(S, v, "" + E, D);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case G:
            return E.key === w ? h(S, v, E, D) : null;
          case V:
            return E.key === w ? T(S, v, E, D) : null;
          case Ct:
            return (E = Zl(E)), z(S, v, E, D);
        }
        if (Oe(E) || Wt(E)) return w !== null ? null : M(S, v, E, D, null);
        if (typeof E.then == "function") return z(S, v, su(E), D);
        if (E.$$typeof === J) return z(S, v, cu(S, E), D);
        hu(S, E);
      }
      return null;
    }
    function A(S, v, E, D, w) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (S = S.get(E) || null), o(v, S, "" + D, w);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case G:
            return (
              (S = S.get(D.key === null ? E : D.key) || null), h(v, S, D, w)
            );
          case V:
            return (
              (S = S.get(D.key === null ? E : D.key) || null), T(v, S, D, w)
            );
          case Ct:
            return (D = Zl(D)), A(S, v, E, D, w);
        }
        if (Oe(D) || Wt(D)) return (S = S.get(E) || null), M(v, S, D, w, null);
        if (typeof D.then == "function") return A(S, v, E, su(D), w);
        if (D.$$typeof === J) return A(S, v, E, cu(v, D), w);
        hu(v, D);
      }
      return null;
    }
    function Y(S, v, E, D) {
      for (
        var w = null, ft = null, Z = v, et = (v = 0), it = null;
        Z !== null && et < E.length;
        et++
      ) {
        Z.index > et ? ((it = Z), (Z = null)) : (it = Z.sibling);
        var ot = z(S, Z, E[et], D);
        if (ot === null) {
          Z === null && (Z = it);
          break;
        }
        t && Z && ot.alternate === null && e(S, Z),
          (v = u(ot, v, et)),
          ft === null ? (w = ot) : (ft.sibling = ot),
          (ft = ot),
          (Z = it);
      }
      if (et === E.length) return l(S, Z), ct && Ze(S, et), w;
      if (Z === null) {
        for (; et < E.length; et++)
          (Z = N(S, E[et], D)),
            Z !== null &&
              ((v = u(Z, v, et)),
              ft === null ? (w = Z) : (ft.sibling = Z),
              (ft = Z));
        return ct && Ze(S, et), w;
      }
      for (Z = a(Z); et < E.length; et++)
        (it = A(Z, S, et, E[et], D)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Z.delete(it.key === null ? et : it.key),
            (v = u(it, v, et)),
            ft === null ? (w = it) : (ft.sibling = it),
            (ft = it));
      return (
        t &&
          Z.forEach(function (Cl) {
            return e(S, Cl);
          }),
        ct && Ze(S, et),
        w
      );
    }
    function $(S, v, E, D) {
      if (E == null) throw Error(f(151));
      for (
        var w = null, ft = null, Z = v, et = (v = 0), it = null, ot = E.next();
        Z !== null && !ot.done;
        et++, ot = E.next()
      ) {
        Z.index > et ? ((it = Z), (Z = null)) : (it = Z.sibling);
        var Cl = z(S, Z, ot.value, D);
        if (Cl === null) {
          Z === null && (Z = it);
          break;
        }
        t && Z && Cl.alternate === null && e(S, Z),
          (v = u(Cl, v, et)),
          ft === null ? (w = Cl) : (ft.sibling = Cl),
          (ft = Cl),
          (Z = it);
      }
      if (ot.done) return l(S, Z), ct && Ze(S, et), w;
      if (Z === null) {
        for (; !ot.done; et++, ot = E.next())
          (ot = N(S, ot.value, D)),
            ot !== null &&
              ((v = u(ot, v, et)),
              ft === null ? (w = ot) : (ft.sibling = ot),
              (ft = ot));
        return ct && Ze(S, et), w;
      }
      for (Z = a(Z); !ot.done; et++, ot = E.next())
        (ot = A(Z, S, et, ot.value, D)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              Z.delete(ot.key === null ? et : ot.key),
            (v = u(ot, v, et)),
            ft === null ? (w = ot) : (ft.sibling = ot),
            (ft = ot));
      return (
        t &&
          Z.forEach(function (cy) {
            return e(S, cy);
          }),
        ct && Ze(S, et),
        w
      );
    }
    function gt(S, v, E, D) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === k &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case G:
            t: {
              for (var w = E.key; v !== null; ) {
                if (v.key === w) {
                  if (((w = E.type), w === k)) {
                    if (v.tag === 7) {
                      l(S, v.sibling),
                        (D = n(v, E.props.children)),
                        (D.return = S),
                        (S = D);
                      break t;
                    }
                  } else if (
                    v.elementType === w ||
                    (typeof w == "object" &&
                      w !== null &&
                      w.$$typeof === Ct &&
                      Zl(w) === v.type)
                  ) {
                    l(S, v.sibling),
                      (D = n(v, E.props)),
                      an(D, E),
                      (D.return = S),
                      (S = D);
                    break t;
                  }
                  l(S, v);
                  break;
                } else e(S, v);
                v = v.sibling;
              }
              E.type === k
                ? ((D = Ll(E.props.children, S.mode, D, E.key)),
                  (D.return = S),
                  (S = D))
                : ((D = nu(E.type, E.key, E.props, null, S.mode, D)),
                  an(D, E),
                  (D.return = S),
                  (S = D));
            }
            return i(S);
          case V:
            t: {
              for (w = E.key; v !== null; ) {
                if (v.key === w)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === E.containerInfo &&
                    v.stateNode.implementation === E.implementation
                  ) {
                    l(S, v.sibling),
                      (D = n(v, E.children || [])),
                      (D.return = S),
                      (S = D);
                    break t;
                  } else {
                    l(S, v);
                    break;
                  }
                else e(S, v);
                v = v.sibling;
              }
              (D = Ki(E, S.mode, D)), (D.return = S), (S = D);
            }
            return i(S);
          case Ct:
            return (E = Zl(E)), gt(S, v, E, D);
        }
        if (Oe(E)) return Y(S, v, E, D);
        if (Wt(E)) {
          if (((w = Wt(E)), typeof w != "function")) throw Error(f(150));
          return (E = w.call(E)), $(S, v, E, D);
        }
        if (typeof E.then == "function") return gt(S, v, su(E), D);
        if (E.$$typeof === J) return gt(S, v, cu(S, E), D);
        hu(S, E);
      }
      return (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
        ? ((E = "" + E),
          v !== null && v.tag === 6
            ? (l(S, v.sibling), (D = n(v, E)), (D.return = S), (S = D))
            : (l(S, v), (D = Vi(E, S.mode, D)), (D.return = S), (S = D)),
          i(S))
        : l(S, v);
    }
    return function (S, v, E, D) {
      try {
        ln = 0;
        var w = gt(S, v, E, D);
        return (Sa = null), w;
      } catch (Z) {
        if (Z === pa || Z === ou) throw Z;
        var ft = fe(29, Z, null, S.mode);
        return (ft.lanes = D), (ft.return = S), ft;
      }
    };
  }
  var Kl = rr(!0),
    sr = rr(!1),
    hl = !1;
  function ac(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function nc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function dl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ml(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (rt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = au(t)),
        ko(t, null, l),
        e
      );
    }
    return lu(t, a, e, l), au(t);
  }
  function nn(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), eo(t, l);
    }
  }
  function uc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var ic = !1;
  function un() {
    if (ic) {
      var t = ga;
      if (t !== null) throw t;
    }
  }
  function cn(t, e, l, a) {
    ic = !1;
    var n = t.updateQueue;
    hl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var h = o,
        T = h.next;
      (h.next = null), i === null ? (u = T) : (i.next = T), (i = h);
      var M = t.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (o = M.lastBaseUpdate),
        o !== i &&
          (o === null ? (M.firstBaseUpdate = T) : (o.next = T),
          (M.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var N = n.baseState;
      (i = 0), (M = T = h = null), (o = u);
      do {
        var z = o.lane & -536870913,
          A = z !== o.lane;
        if (A ? (ut & z) === z : (a & z) === z) {
          z !== 0 && z === ya && (ic = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var Y = t,
              $ = o;
            z = e;
            var gt = l;
            switch ($.tag) {
              case 1:
                if (((Y = $.payload), typeof Y == "function")) {
                  N = Y.call(gt, N, z);
                  break t;
                }
                N = Y;
                break t;
              case 3:
                Y.flags = (Y.flags & -65537) | 128;
              case 0:
                if (
                  ((Y = $.payload),
                  (z = typeof Y == "function" ? Y.call(gt, N, z) : Y),
                  z == null)
                )
                  break t;
                N = R({}, N, z);
                break t;
              case 2:
                hl = !0;
            }
          }
          (z = o.callback),
            z !== null &&
              ((t.flags |= 64),
              A && (t.flags |= 8192),
              (A = n.callbacks),
              A === null ? (n.callbacks = [z]) : A.push(z));
        } else
          (A = {
            lane: z,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            M === null ? ((T = M = A), (h = N)) : (M = M.next = A),
            (i |= z);
        if (((o = o.next), o === null)) {
          if (((o = n.shared.pending), o === null)) break;
          (A = o),
            (o = A.next),
            (A.next = null),
            (n.lastBaseUpdate = A),
            (n.shared.pending = null);
        }
      } while (!0);
      M === null && (h = N),
        (n.baseState = h),
        (n.firstBaseUpdate = T),
        (n.lastBaseUpdate = M),
        u === null && (n.shared.lanes = 0),
        (Sl |= i),
        (t.lanes = i),
        (t.memoizedState = N);
    }
  }
  function hr(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function dr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) hr(l[t], e);
  }
  var ba = y(null),
    du = y(0);
  function mr(t, e) {
    (t = tl), L(du, t), L(ba, e), (tl = t | e.baseLanes);
  }
  function cc() {
    L(du, tl), L(ba, ba.current);
  }
  function fc() {
    (tl = du.current), U(ba), U(du);
  }
  var oe = y(null),
    Te = null;
  function vl(t) {
    var e = t.alternate;
    L(Nt, Nt.current & 1),
      L(oe, t),
      Te === null &&
        (e === null || ba.current !== null || e.memoizedState !== null) &&
        (Te = t);
  }
  function oc(t) {
    L(Nt, Nt.current), L(oe, t), Te === null && (Te = t);
  }
  function vr(t) {
    t.tag === 22
      ? (L(Nt, Nt.current), L(oe, t), Te === null && (Te = t))
      : yl();
  }
  function yl() {
    L(Nt, Nt.current), L(oe, oe.current);
  }
  function re(t) {
    U(oe), Te === t && (Te = null), U(Nt);
  }
  var Nt = y(0);
  function mu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || yf(l) || gf(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var we = 0,
    tt = null,
    vt = null,
    Ht = null,
    vu = !1,
    Ea = !1,
    wl = !1,
    yu = 0,
    fn = 0,
    Ta = null,
    Fm = 0;
  function Ot() {
    throw Error(f(321));
  }
  function rc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function sc(t, e, l, a, n, u) {
    return (
      (we = u),
      (tt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (C.H = t === null || t.memoizedState === null ? Ir : Rc),
      (wl = !1),
      (u = l(a, n)),
      (wl = !1),
      Ea && (u = gr(e, l, a, n)),
      yr(t),
      u
    );
  }
  function yr(t) {
    C.H = sn;
    var e = vt !== null && vt.next !== null;
    if (((we = 0), (Ht = vt = tt = null), (vu = !1), (fn = 0), (Ta = null), e))
      throw Error(f(300));
    t === null ||
      jt ||
      ((t = t.dependencies), t !== null && iu(t) && (jt = !0));
  }
  function gr(t, e, l, a) {
    tt = t;
    var n = 0;
    do {
      if ((Ea && (Ta = null), (fn = 0), (Ea = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ht = vt = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (C.H = Pr), (u = e(l, a));
    } while (Ea);
    return u;
  }
  function Im() {
    var t = C.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? on(e) : e),
      (t = t.useState()[0]),
      (vt !== null ? vt.memoizedState : null) !== t && (tt.flags |= 1024),
      e
    );
  }
  function hc() {
    var t = yu !== 0;
    return (yu = 0), t;
  }
  function dc(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function mc(t) {
    if (vu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      vu = !1;
    }
    (we = 0), (Ht = vt = tt = null), (Ea = !1), (fn = yu = 0), (Ta = null);
  }
  function kt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ht === null ? (tt.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht;
  }
  function xt() {
    if (vt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = vt.next;
    var e = Ht === null ? tt.memoizedState : Ht.next;
    if (e !== null) (Ht = e), (vt = t);
    else {
      if (t === null)
        throw tt.alternate === null ? Error(f(467)) : Error(f(310));
      (vt = t),
        (t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null,
        }),
        Ht === null ? (tt.memoizedState = Ht = t) : (Ht = Ht.next = t);
    }
    return Ht;
  }
  function gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function on(t) {
    var e = fn;
    return (
      (fn += 1),
      Ta === null && (Ta = []),
      (t = cr(Ta, t, e)),
      (e = tt),
      (Ht === null ? e.memoizedState : Ht.next) === null &&
        ((e = e.alternate),
        (C.H = e === null || e.memoizedState === null ? Ir : Rc)),
      t
    );
  }
  function pu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return on(t);
      if (t.$$typeof === J) return Zt(t);
    }
    throw Error(f(438, String(t)));
  }
  function vc(t) {
    var e = null,
      l = tt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = tt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = gu()), (tt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = me;
    return e.index++, l;
  }
  function Je(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Su(t) {
    var e = xt();
    return yc(e, vt, t);
  }
  function yc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (e.baseQueue = n = u), (a.pending = null);
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      e = n.next;
      var o = (i = null),
        h = null,
        T = e,
        M = !1;
      do {
        var N = T.lane & -536870913;
        if (N !== T.lane ? (ut & N) === N : (we & N) === N) {
          var z = T.revertLane;
          if (z === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              N === ya && (M = !0);
          else if ((we & z) === z) {
            (T = T.next), z === ya && (M = !0);
            continue;
          } else
            (N = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              h === null ? ((o = h = N), (i = u)) : (h = h.next = N),
              (tt.lanes |= z),
              (Sl |= z);
          (N = T.action),
            wl && l(u, N),
            (u = T.hasEagerState ? T.eagerState : l(u, N));
        } else
          (z = {
            lane: N,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            h === null ? ((o = h = z), (i = u)) : (h = h.next = z),
            (tt.lanes |= N),
            (Sl |= N);
        T = T.next;
      } while (T !== null && T !== e);
      if (
        (h === null ? (i = u) : (h.next = o),
        !ce(u, t.memoizedState) && ((jt = !0), M && ((l = ga), l !== null)))
      )
        throw l;
      (t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = h),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function gc(t) {
    var e = xt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do (u = t(u, i.action)), (i = i.next);
      while (i !== n);
      ce(u, e.memoizedState) || (jt = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function pr(t, e, l) {
    var a = tt,
      n = xt(),
      u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ce((vt || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (jt = !0)),
      (n = n.queue),
      bc(Er.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || i || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        za(9, { destroy: void 0 }, br.bind(null, a, n, l, e), null),
        St === null)
      )
        throw Error(f(349));
      u || (we & 127) !== 0 || Sr(a, e, l);
    }
    return l;
  }
  function Sr(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = tt.updateQueue),
      e === null
        ? ((e = gu()), (tt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function br(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), Tr(e) && zr(t);
  }
  function Er(t, e, l) {
    return l(function () {
      Tr(e) && zr(t);
    });
  }
  function Tr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function zr(t) {
    var e = ql(t, 2);
    e !== null && ae(e, t, 2);
  }
  function pc(t) {
    var e = kt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), wl)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: t,
      }),
      e
    );
  }
  function _r(t, e, l, a) {
    return (t.baseState = l), yc(t, vt, typeof a == "function" ? a : Je);
  }
  function Pm(t, e, l, a, n) {
    if (Tu(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      C.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = e.pending),
        l === null
          ? ((u.next = e.pending = u), Ar(e, u))
          : ((u.next = l.next), (e.pending = l.next = u));
    }
  }
  function Ar(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = C.T,
        i = {};
      C.T = i;
      try {
        var o = l(n, a),
          h = C.S;
        h !== null && h(i, o), Rr(t, e, o);
      } catch (T) {
        Sc(t, e, T);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), (C.T = u);
      }
    } else
      try {
        (u = l(n, a)), Rr(t, e, u);
      } catch (T) {
        Sc(t, e, T);
      }
  }
  function Rr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Or(t, e, a);
          },
          function (a) {
            return Sc(t, e, a);
          }
        )
      : Or(t, e, l);
  }
  function Or(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Mr(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Ar(t, l)));
  }
  function Sc(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Mr(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Mr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Cr(t, e) {
    return e;
  }
  function Dr(t, e) {
    if (ct) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = tt;
          if (ct) {
            if (Tt) {
              e: {
                for (var n = Tt, u = Ee; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = ze(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (Tt = ze(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            rl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = kt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cr,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = $r.bind(null, tt, a)),
      (a.dispatch = l),
      (a = pc(!1)),
      (u = Ac.bind(null, tt, !1, a.queue)),
      (a = kt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = Pm.bind(null, tt, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Nr(t) {
    var e = xt();
    return xr(e, vt, t);
  }
  function xr(t, e, l) {
    if (
      ((e = yc(t, e, Cr)[0]),
      (t = Su(Je)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = on(e);
      } catch (i) {
        throw i === pa ? ou : i;
      }
    else a = e;
    e = xt();
    var n = e.queue,
      u = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((tt.flags |= 2048),
        za(9, { destroy: void 0 }, tv.bind(null, n, l), null)),
      [a, u, t]
    );
  }
  function tv(t, e) {
    t.action = e;
  }
  function Ur(t) {
    var e = xt(),
      l = vt;
    if (l !== null) return xr(e, l, t);
    xt(), (e = e.memoizedState), (l = xt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function za(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = tt.updateQueue),
      e === null && ((e = gu()), (tt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Hr() {
    return xt().memoizedState;
  }
  function bu(t, e, l, a) {
    var n = kt();
    (tt.flags |= t),
      (n.memoizedState = za(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function Eu(t, e, l, a) {
    var n = xt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    vt !== null && a !== null && rc(a, vt.memoizedState.deps)
      ? (n.memoizedState = za(e, u, l, a))
      : ((tt.flags |= t), (n.memoizedState = za(1 | e, u, l, a)));
  }
  function jr(t, e) {
    bu(8390656, 8, t, e);
  }
  function bc(t, e) {
    Eu(2048, 8, t, e);
  }
  function ev(t) {
    tt.flags |= 4;
    var e = tt.updateQueue;
    if (e === null) (e = gu()), (tt.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function Br(t) {
    var e = xt().memoizedState;
    return (
      ev({ ref: e, nextImpl: t }),
      function () {
        if ((rt & 2) !== 0) throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function qr(t, e) {
    return Eu(4, 2, t, e);
  }
  function Lr(t, e) {
    return Eu(4, 4, t, e);
  }
  function Yr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Gr(t, e, l) {
    (l = l != null ? l.concat([t]) : null), Eu(4, 4, Yr.bind(null, e, t), l);
  }
  function Ec() {}
  function Xr(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && rc(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Qr(t, e) {
    var l = xt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && rc(e, a[1])) return a[0];
    if (((a = t()), wl)) {
      ul(!0);
      try {
        t();
      } finally {
        ul(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Tc(t, e, l) {
    return l === void 0 || ((we & 1073741824) !== 0 && (ut & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Zs()), (tt.lanes |= t), (Sl |= t), l);
  }
  function Zr(t, e, l, a) {
    return ce(l, e)
      ? l
      : ba.current !== null
      ? ((t = Tc(t, l, a)), ce(t, e) || (jt = !0), t)
      : (we & 42) === 0 || ((we & 1073741824) !== 0 && (ut & 261930) === 0)
      ? ((jt = !0), (t.memoizedState = l))
      : ((t = Zs()), (tt.lanes |= t), (Sl |= t), e);
  }
  function Vr(t, e, l, a, n) {
    var u = q.p;
    q.p = u !== 0 && 8 > u ? u : 8;
    var i = C.T,
      o = {};
    (C.T = o), Ac(t, !1, e, l);
    try {
      var h = n(),
        T = C.S;
      if (
        (T !== null && T(o, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var M = Wm(h, a);
        rn(t, e, M, de(t));
      } else rn(t, e, a, de(t));
    } catch (N) {
      rn(t, e, { then: function () {}, status: "rejected", reason: N }, de());
    } finally {
      (q.p = u),
        i !== null && o.types !== null && (i.types = o.types),
        (C.T = i);
    }
  }
  function lv() {}
  function zc(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Kr(t).queue;
    Vr(
      t,
      n,
      e,
      W,
      l === null
        ? lv
        : function () {
            return wr(t), l(a);
          }
    );
  }
  function Kr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: W,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Je,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function wr(t) {
    var e = Kr(t);
    e.next === null && (e = t.alternate.memoizedState),
      rn(t, e.next.queue, {}, de());
  }
  function _c() {
    return Zt(On);
  }
  function Jr() {
    return xt().memoizedState;
  }
  function kr() {
    return xt().memoizedState;
  }
  function av(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = de();
          t = dl(l);
          var a = ml(e, t, l);
          a !== null && (ae(a, e, l), nn(a, e, l)),
            (e = { cache: Pi() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function nv(t, e, l) {
    var a = de();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tu(t)
        ? Wr(e, l)
        : ((l = Qi(t, e, l, a)), l !== null && (ae(l, t, a), Fr(l, e, a)));
  }
  function $r(t, e, l) {
    var a = de();
    rn(t, e, l, a);
  }
  function rn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tu(t)) Wr(e, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            o = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = o), ce(o, i)))
            return lu(t, e, n, 0), St === null && eu(), !1;
        } catch {}
      if (((l = Qi(t, e, n, a)), l !== null))
        return ae(l, t, a), Fr(l, e, a), !0;
    }
    return !1;
  }
  function Ac(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: af(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tu(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Qi(t, l, a, 2)), e !== null && ae(e, t, 2);
  }
  function Tu(t) {
    var e = t.alternate;
    return t === tt || (e !== null && e === tt);
  }
  function Wr(t, e) {
    Ea = vu = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Fr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), eo(t, l);
    }
  }
  var sn = {
    readContext: Zt,
    use: pu,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot,
  };
  sn.useEffectEvent = Ot;
  var Ir = {
      readContext: Zt,
      use: pu,
      useCallback: function (t, e) {
        return (kt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Zt,
      useEffect: jr,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          bu(4194308, 4, Yr.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return bu(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        bu(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = kt();
        e = e === void 0 ? null : e;
        var a = t();
        if (wl) {
          ul(!0);
          try {
            t();
          } finally {
            ul(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = kt();
        if (l !== void 0) {
          var n = l(e);
          if (wl) {
            ul(!0);
            try {
              l(e);
            } finally {
              ul(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = nv.bind(null, tt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = kt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = pc(t);
        var e = t.queue,
          l = $r.bind(null, tt, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = kt();
        return Tc(l, t, e);
      },
      useTransition: function () {
        var t = pc(!1);
        return (
          (t = Vr.bind(null, tt, t.queue, !0, !1)),
          (kt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = tt,
          n = kt();
        if (ct) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = e()), St === null)) throw Error(f(349));
          (ut & 127) !== 0 || Sr(a, e, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: e };
        return (
          (n.queue = u),
          jr(Er.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          za(9, { destroy: void 0 }, br.bind(null, a, u, l, e), null),
          l
        );
      },
      useId: function () {
        var t = kt(),
          e = St.identifierPrefix;
        if (ct) {
          var l = He,
            a = Ue;
          (l = (a & ~(1 << (32 - ie(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = yu++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_");
        } else (l = Fm++), (e = "_" + e + "r_" + l.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: _c,
      useFormState: Dr,
      useActionState: Dr,
      useOptimistic: function (t) {
        var e = kt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Ac.bind(null, tt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: vc,
      useCacheRefresh: function () {
        return (kt().memoizedState = av.bind(null, tt));
      },
      useEffectEvent: function (t) {
        var e = kt(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((rt & 2) !== 0) throw Error(f(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Rc = {
      readContext: Zt,
      use: pu,
      useCallback: Xr,
      useContext: Zt,
      useEffect: bc,
      useImperativeHandle: Gr,
      useInsertionEffect: qr,
      useLayoutEffect: Lr,
      useMemo: Qr,
      useReducer: Su,
      useRef: Hr,
      useState: function () {
        return Su(Je);
      },
      useDebugValue: Ec,
      useDeferredValue: function (t, e) {
        var l = xt();
        return Zr(l, vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Su(Je)[0],
          e = xt().memoizedState;
        return [typeof t == "boolean" ? t : on(t), e];
      },
      useSyncExternalStore: pr,
      useId: Jr,
      useHostTransitionStatus: _c,
      useFormState: Nr,
      useActionState: Nr,
      useOptimistic: function (t, e) {
        var l = xt();
        return _r(l, vt, t, e);
      },
      useMemoCache: vc,
      useCacheRefresh: kr,
    };
  Rc.useEffectEvent = Br;
  var Pr = {
    readContext: Zt,
    use: pu,
    useCallback: Xr,
    useContext: Zt,
    useEffect: bc,
    useImperativeHandle: Gr,
    useInsertionEffect: qr,
    useLayoutEffect: Lr,
    useMemo: Qr,
    useReducer: gc,
    useRef: Hr,
    useState: function () {
      return gc(Je);
    },
    useDebugValue: Ec,
    useDeferredValue: function (t, e) {
      var l = xt();
      return vt === null ? Tc(l, t, e) : Zr(l, vt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = gc(Je)[0],
        e = xt().memoizedState;
      return [typeof t == "boolean" ? t : on(t), e];
    },
    useSyncExternalStore: pr,
    useId: Jr,
    useHostTransitionStatus: _c,
    useFormState: Ur,
    useActionState: Ur,
    useOptimistic: function (t, e) {
      var l = xt();
      return vt !== null
        ? _r(l, vt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: kr,
  };
  Pr.useEffectEvent = Br;
  function Oc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : R({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Mc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        n = dl(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = ml(t, n, a)),
        e !== null && (ae(e, t, a), nn(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = de(),
        n = dl(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = ml(t, n, a)),
        e !== null && (ae(e, t, a), nn(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = de(),
        a = dl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = ml(t, a, l)),
        e !== null && (ae(e, t, l), nn(e, t, l));
    },
  };
  function ts(t, e, l, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Wa(l, a) || !Wa(n, u)
        : !0
    );
  }
  function es(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Mc.enqueueReplaceState(e, e.state, null);
  }
  function Jl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = R({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function ls(t) {
    tu(t);
  }
  function as(t) {
    console.error(t);
  }
  function ns(t) {
    tu(t);
  }
  function zu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function us(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Cc(t, e, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        zu(t, e);
      }),
      l
    );
  }
  function is(t) {
    return (t = dl(t)), (t.tag = 3), t;
  }
  function cs(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          us(e, l, a);
        });
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        us(e, l, a),
          typeof n != "function" &&
            (bl === null ? (bl = new Set([this])) : bl.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function uv(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && va(e, l, n, !0),
        (l = oe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Te === null ? ju() : l.alternate === null && Mt === 0 && (Mt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ru
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  tf(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ru
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  tf(t, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return tf(t, a, n), ju(), !1;
    }
    if (ct)
      return (
        (e = oe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== ki && ((t = Error(f(422), { cause: a })), Pa(pe(t, l))))
          : (a !== ki && ((e = Error(f(423), { cause: a })), Pa(pe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = pe(a, l)),
            (n = Cc(t.stateNode, a, n)),
            uc(t, n),
            Mt !== 4 && (Mt = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = pe(u, l)),
      Sn === null ? (Sn = [u]) : Sn.push(u),
      Mt !== 4 && (Mt = 2),
      e === null)
    )
      return !0;
    (a = pe(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = Cc(l.stateNode, a, t)),
            uc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (bl === null || !bl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = is(n)),
              cs(n, t, l, a),
              uc(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dc = Error(f(461)),
    jt = !1;
  function Vt(t, e, l, a) {
    e.child = t === null ? sr(e, null, l, a) : Kl(e, t.child, l, a);
  }
  function fs(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var o in a) o !== "ref" && (i[o] = a[o]);
    } else i = a;
    return (
      Xl(e),
      (a = sc(t, e, l, i, u, n)),
      (o = hc()),
      t !== null && !jt
        ? (dc(t, e, n), ke(t, e, n))
        : (ct && o && wi(e), (e.flags |= 1), Vt(t, e, a, n), e.child)
    );
  }
  function os(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Zi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = u), rs(t, e, u, a, n))
        : ((t = nu(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((u = t.child), !Lc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Wa), l(i, a) && t.ref === e.ref)
      )
        return ke(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = Qe(u, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function rs(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Wa(u, a) && t.ref === e.ref)
        if (((jt = !1), (e.pendingProps = a = u), Lc(t, n)))
          (t.flags & 131072) !== 0 && (jt = !0);
        else return (e.lanes = t.lanes), ke(t, e, n);
    }
    return Nc(t, e, l, a, n);
  }
  function ss(t, e, l, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~u;
        } else (a = 0), (e.child = null);
        return hs(t, e, u, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && fu(e, u !== null ? u.cachePool : null),
          u !== null ? mr(e, u) : cc(),
          vr(e);
      else
        return (
          (a = e.lanes = 536870912),
          hs(t, e, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (fu(e, u.cachePool), mr(e, u), yl(), (e.memoizedState = null))
        : (t !== null && fu(e, null), cc(), yl());
    return Vt(t, e, n, l), e.child;
  }
  function hn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function hs(t, e, l, a, n) {
    var u = ec();
    return (
      (u = u === null ? null : { parent: Ut._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && fu(e, null),
      cc(),
      vr(e),
      t !== null && va(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function _u(t, e) {
    return (
      (e = Ru({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function ds(t, e, l) {
    return (
      Kl(e, t.child, null, l),
      (t = _u(e, e.pendingProps)),
      (t.flags |= 2),
      re(e),
      (e.memoizedState = null),
      t
    );
  }
  function iv(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (ct) {
        if (a.mode === "hidden")
          return (t = _u(e, a)), (e.lanes = 536870912), hn(null, t);
        if (
          (oc(e),
          (t = Tt)
            ? ((t = Ah(t, Ee)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ue, overflow: He } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Wo(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (Tt = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return (e.lanes = 536870912), null;
      }
      return _u(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((oc(e), n))
        if (e.flags & 256) (e.flags &= -257), (e = ds(t, e, l));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(f(558));
      else if (
        (jt || va(t, e, l, !1), (n = (l & t.childLanes) !== 0), jt || n)
      ) {
        if (
          ((a = St),
          a !== null && ((i = lo(a, l)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), ql(t, i), ae(a, t, i), Dc);
        ju(), (e = ds(t, e, l));
      } else
        (t = u.treeContext),
          (Tt = ze(i.nextSibling)),
          (Qt = e),
          (ct = !0),
          (ol = null),
          (Ee = !1),
          t !== null && Po(e, t),
          (e = _u(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = Qe(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Au(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Nc(t, e, l, a, n) {
    return (
      Xl(e),
      (l = sc(t, e, l, a, void 0, n)),
      (a = hc()),
      t !== null && !jt
        ? (dc(t, e, n), ke(t, e, n))
        : (ct && a && wi(e), (e.flags |= 1), Vt(t, e, l, n), e.child)
    );
  }
  function ms(t, e, l, a, n, u) {
    return (
      Xl(e),
      (e.updateQueue = null),
      (l = gr(e, a, l, n)),
      yr(t),
      (a = hc()),
      t !== null && !jt
        ? (dc(t, e, u), ke(t, e, u))
        : (ct && a && wi(e), (e.flags |= 1), Vt(t, e, l, u), e.child)
    );
  }
  function vs(t, e, l, a, n) {
    if ((Xl(e), e.stateNode === null)) {
      var u = sa,
        i = l.contextType;
      typeof i == "object" && i !== null && (u = Zt(i)),
        (u = new l(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Mc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        ac(e),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? Zt(i) : sa),
        (u.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (Oc(e, l, i, a), (u.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Mc.enqueueReplaceState(u, u.state, null),
          cn(e, a, u, n),
          un(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps,
        h = Jl(l, o);
      u.props = h;
      var T = u.context,
        M = l.contextType;
      (i = sa), typeof M == "object" && M !== null && (i = Zt(M));
      var N = l.getDerivedStateFromProps;
      (M =
        typeof N == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (o = e.pendingProps !== o),
        M ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((o || T !== i) && es(e, u, a, i)),
        (hl = !1);
      var z = e.memoizedState;
      (u.state = z),
        cn(e, a, u, n),
        un(),
        (T = e.memoizedState),
        o || z !== T || hl
          ? (typeof N == "function" && (Oc(e, l, N, a), (T = e.memoizedState)),
            (h = hl || ts(e, l, h, a, z, T, i))
              ? (M ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = T)),
            (u.props = a),
            (u.state = T),
            (u.context = i),
            (a = h))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (u = e.stateNode),
        nc(t, e),
        (i = e.memoizedProps),
        (M = Jl(l, i)),
        (u.props = M),
        (N = e.pendingProps),
        (z = u.context),
        (T = l.contextType),
        (h = sa),
        typeof T == "object" && T !== null && (h = Zt(T)),
        (o = l.getDerivedStateFromProps),
        (T =
          typeof o == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== N || z !== h) && es(e, u, a, h)),
        (hl = !1),
        (z = e.memoizedState),
        (u.state = z),
        cn(e, a, u, n),
        un();
      var A = e.memoizedState;
      i !== N ||
      z !== A ||
      hl ||
      (t !== null && t.dependencies !== null && iu(t.dependencies))
        ? (typeof o == "function" && (Oc(e, l, o, a), (A = e.memoizedState)),
          (M =
            hl ||
            ts(e, l, M, a, z, A, h) ||
            (t !== null && t.dependencies !== null && iu(t.dependencies)))
            ? (T ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, A, h),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, A, h)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = A)),
          (u.props = a),
          (u.state = A),
          (u.context = h),
          (a = M))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Au(t, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Kl(e, t.child, null, n)),
              (e.child = Kl(e, null, l, n)))
            : Vt(t, e, l, n),
          (e.memoizedState = u.state),
          (t = e.child))
        : (t = ke(t, e, n)),
      t
    );
  }
  function ys(t, e, l, a) {
    return Yl(), (e.flags |= 256), Vt(t, e, l, a), e.child;
  }
  var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Uc(t) {
    return { baseLanes: t, cachePool: ur() };
  }
  function Hc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= he), t;
  }
  function gs(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if (
          (n ? vl(e) : yl(),
          (t = Tt)
            ? ((t = Ah(t, Ee)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: fl !== null ? { id: Ue, overflow: He } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Wo(t)),
                (l.return = e),
                (e.child = l),
                (Qt = e),
                (Tt = null)))
            : (t = null),
          t === null)
        )
          throw rl(e);
        return gf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var o = a.children;
      return (
        (a = a.fallback),
        n
          ? (yl(),
            (n = e.mode),
            (o = Ru({ mode: "hidden", children: o }, n)),
            (a = Ll(a, n, l, null)),
            (o.return = e),
            (a.return = e),
            (o.sibling = a),
            (e.child = o),
            (a = e.child),
            (a.memoizedState = Uc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = xc),
            hn(null, a))
          : (vl(e), jc(e, o))
      );
    }
    var h = t.memoizedState;
    if (h !== null && ((o = h.dehydrated), o !== null)) {
      if (u)
        e.flags & 256
          ? (vl(e), (e.flags &= -257), (e = Bc(t, e, l)))
          : e.memoizedState !== null
          ? (yl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (yl(),
            (o = a.fallback),
            (n = e.mode),
            (a = Ru({ mode: "visible", children: a.children }, n)),
            (o = Ll(o, n, l, null)),
            (o.flags |= 2),
            (a.return = e),
            (o.return = e),
            (a.sibling = o),
            (e.child = a),
            Kl(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Uc(l)),
            (a.childLanes = Hc(t, i, l)),
            (e.memoizedState = xc),
            (e = hn(null, a)));
      else if ((vl(e), gf(o))) {
        if (((i = o.nextSibling && o.nextSibling.dataset), i)) var T = i.dgst;
        (i = T),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          Pa({ value: a, source: null, stack: null }),
          (e = Bc(t, e, l));
      } else if (
        (jt || va(t, e, l, !1), (i = (l & t.childLanes) !== 0), jt || i)
      ) {
        if (
          ((i = St),
          i !== null && ((a = lo(i, l)), a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), ql(t, a), ae(i, t, a), Dc);
        yf(o) || ju(), (e = Bc(t, e, l));
      } else
        yf(o)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (Tt = ze(o.nextSibling)),
            (Qt = e),
            (ct = !0),
            (ol = null),
            (Ee = !1),
            t !== null && Po(e, t),
            (e = jc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (yl(),
        (o = a.fallback),
        (n = e.mode),
        (h = t.child),
        (T = h.sibling),
        (a = Qe(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        T !== null ? (o = Qe(T, o)) : ((o = Ll(o, n, l, null)), (o.flags |= 2)),
        (o.return = e),
        (a.return = e),
        (a.sibling = o),
        (e.child = a),
        hn(null, a),
        (a = e.child),
        (o = t.child.memoizedState),
        o === null
          ? (o = Uc(l))
          : ((n = o.cachePool),
            n !== null
              ? ((h = Ut._currentValue),
                (n = n.parent !== h ? { parent: h, pool: h } : n))
              : (n = ur()),
            (o = { baseLanes: o.baseLanes | l, cachePool: n })),
        (a.memoizedState = o),
        (a.childLanes = Hc(t, i, l)),
        (e.memoizedState = xc),
        hn(t.child, a))
      : (vl(e),
        (l = t.child),
        (t = l.sibling),
        (l = Qe(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function jc(t, e) {
    return (
      (e = Ru({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ru(t, e) {
    return (t = fe(22, t, null, e)), (t.lanes = 0), t;
  }
  function Bc(t, e, l) {
    return (
      Kl(e, t.child, null, l),
      (t = jc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function ps(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Fi(t.return, e, l);
  }
  function qc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Ss(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Nt.current,
      o = (i & 2) !== 0;
    if (
      (o ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      L(Nt, i),
      Vt(t, e, a, l),
      (a = ct ? Ia : 0),
      !o && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ps(t, l, e);
        else if (t.tag === 19) ps(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && mu(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          qc(e, !1, n, l, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && mu(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        qc(e, !0, l, null, u, a);
        break;
      case "together":
        qc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ke(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Sl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((va(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Qe(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = Qe(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Lc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && iu(t)));
  }
  function cv(t, e, l) {
    switch (e.tag) {
      case 3:
        Jt(e, e.stateNode.containerInfo),
          sl(e, Ut, t.memoizedState.cache),
          Yl();
        break;
      case 27:
      case 5:
        qa(e);
        break;
      case 4:
        Jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        sl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), oc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (vl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? gs(t, e, l)
            : (vl(e), (t = ke(t, e, l)), t !== null ? t.sibling : null);
        vl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (va(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Ss(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          L(Nt, Nt.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), ss(t, e, l, e.pendingProps);
      case 24:
        sl(e, Ut, t.memoizedState.cache);
    }
    return ke(t, e, l);
  }
  function bs(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) jt = !0;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0) return (jt = !1), cv(t, e, l);
        jt = (t.flags & 131072) !== 0;
      }
    else (jt = !1), ct && (e.flags & 1048576) !== 0 && Io(e, Ia, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Zl(e.elementType)), (e.type = t), typeof t == "function"))
            Zi(t)
              ? ((a = Jl(t, a)), (e.tag = 1), (e = vs(null, e, t, a, l)))
              : ((e.tag = 0), (e = Nc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === bt) {
                (e.tag = 11), (e = fs(null, e, t, a, l));
                break t;
              } else if (n === I) {
                (e.tag = 14), (e = os(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = Le(t) || t), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return Nc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Jl(a, e.pendingProps)), vs(t, e, a, n, l);
      case 3:
        t: {
          if ((Jt(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          (n = u.element), nc(t, e), cn(e, a, null, l);
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            sl(e, Ut, a),
            a !== u.cache && Ii(e, [Ut], l, !0),
            un(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = ys(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = pe(Error(f(424)), e)), Pa(n), (e = ys(t, e, a, l));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Tt = ze(t.firstChild),
                  Qt = e,
                  ct = !0,
                  ol = null,
                  Ee = !0,
                  l = sr(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Yl(), a === n)) {
              e = ke(t, e, l);
              break t;
            }
            Vt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Au(t, e),
          t === null
            ? (l = Nh(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Qu(lt.current).createElement(l)),
                (a[Xt] = e),
                (a[Ft] = t),
                Kt(a, l, t),
                Lt(a),
                (e.stateNode = a))
            : (e.memoizedState = Nh(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          qa(e),
          t === null &&
            ct &&
            ((a = e.stateNode = Mh(e.type, e.pendingProps, lt.current)),
            (Qt = e),
            (Ee = !0),
            (n = Tt),
            _l(e.type) ? ((pf = n), (Tt = ze(a.firstChild))) : (Tt = n)),
          Vt(t, e, e.pendingProps.children, l),
          Au(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((n = a = Tt) &&
              ((a = qv(a, e.type, e.pendingProps, Ee)),
              a !== null
                ? ((e.stateNode = a),
                  (Qt = e),
                  (Tt = ze(a.firstChild)),
                  (Ee = !1),
                  (n = !0))
                : (n = !1)),
            n || rl(e)),
          qa(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          df(n, u) ? (a = null) : i !== null && df(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = sc(t, e, Im, null, null, l)), (On._currentValue = n)),
          Au(t, e),
          Vt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = Tt) &&
              ((l = Lv(l, e.pendingProps, Ee)),
              l !== null
                ? ((e.stateNode = l), (Qt = e), (Tt = null), (t = !0))
                : (t = !1)),
            t || rl(e)),
          null
        );
      case 13:
        return gs(t, e, l);
      case 4:
        return (
          Jt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Kl(e, null, a, l)) : Vt(t, e, a, l),
          e.child
        );
      case 11:
        return fs(t, e, e.type, e.pendingProps, l);
      case 7:
        return Vt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Vt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Vt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          sl(e, e.type, a.value),
          Vt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Xl(e),
          (n = Zt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Vt(t, e, a, l),
          e.child
        );
      case 14:
        return os(t, e, e.type, e.pendingProps, l);
      case 15:
        return rs(t, e, e.type, e.pendingProps, l);
      case 19:
        return Ss(t, e, l);
      case 31:
        return iv(t, e, l);
      case 22:
        return ss(t, e, l, e.pendingProps);
      case 24:
        return (
          Xl(e),
          (a = Zt(Ut)),
          t === null
            ? ((n = ec()),
              n === null &&
                ((n = St),
                (u = Pi()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              ac(e),
              sl(e, Ut, n))
            : ((t.lanes & l) !== 0 && (nc(t, e), cn(e, null, null, l), un()),
              (n = t.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  sl(e, Ut, a))
                : ((a = u.cache),
                  sl(e, Ut, a),
                  a !== n.cache && Ii(e, [Ut], l, !0))),
          Vt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function $e(t) {
    t.flags |= 4;
  }
  function Yc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Js()) t.flags |= 8192;
        else throw ((Vl = ru), lc);
    } else t.flags &= -16777217;
  }
  function Es(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Bh(e)))
      if (Js()) t.flags |= 8192;
      else throw ((Vl = ru), lc);
  }
  function Ou(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Pf() : 536870912), (t.lanes |= e), (Oa |= e));
  }
  function dn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function fv(t, e, l) {
    var a = e.pendingProps;
    switch ((Ji(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return zt(e), null;
      case 1:
        return zt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ke(Ut),
          Dt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (ma(e)
              ? $e(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), $i())),
          zt(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          t === null
            ? ($e(e),
              u !== null ? (zt(e), Es(e, u)) : (zt(e), Yc(e, n, null, a, l)))
            : u
            ? u !== t.memoizedState
              ? ($e(e), zt(e), Es(e, u))
              : (zt(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && $e(e),
              zt(e),
              Yc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (Ln(e),
          (l = lt.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return zt(e), null;
          }
          (t = X.current),
            ma(e) ? tr(e) : ((t = Mh(n, a, l)), (e.stateNode = t), $e(e));
        }
        return zt(e), null;
      case 5:
        if ((Ln(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && $e(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return zt(e), null;
          }
          if (((u = X.current), ma(e))) tr(e);
          else {
            var i = Qu(lt.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (u = i.createElement("div")),
                      (u.innerHTML = "<script></script>"),
                      (u = u.removeChild(u.firstChild));
                    break;
                  case "select":
                    (u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size);
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            (u[Xt] = e), (u[Ft] = a);
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break t;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
            e.stateNode = u;
            t: switch ((Kt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && $e(e);
          }
        }
        return (
          zt(e),
          Yc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && $e(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = lt.current), ma(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Qt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                gh(t.nodeValue, l)
              )),
              t || rl(e, !0);
          } else (t = Qu(t).createTextNode(a)), (t[Xt] = e), (e.stateNode = t);
        }
        return zt(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ma(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(f(557));
              t[Xt] = e;
            } else
              Yl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            zt(e), (t = !1);
          } else
            (l = $i()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0) throw Error(f(558));
        }
        return zt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = ma(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Xt] = e;
            } else
              Yl(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            zt(e), (n = !1);
          } else
            (n = $i()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return (
          re(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              Ou(e, e.updateQueue),
              zt(e),
              null)
        );
      case 4:
        return Dt(), t === null && ff(e.stateNode.containerInfo), zt(e), null;
      case 10:
        return Ke(e.type), zt(e), null;
      case 19:
        if ((U(Nt), (a = e.memoizedState), a === null)) return zt(e), null;
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) dn(a, !1);
          else {
            if (Mt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((u = mu(t)), u !== null)) {
                  for (
                    e.flags |= 128,
                      dn(a, !1),
                      t = u.updateQueue,
                      e.updateQueue = t,
                      Ou(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    $o(l, t), (l = l.sibling);
                  return (
                    L(Nt, (Nt.current & 1) | 2),
                    ct && Ze(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ne() > xu &&
              ((e.flags |= 128), (n = !0), dn(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = mu(u)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ou(e, t),
                dn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !ct)
              )
                return zt(e), null;
            } else
              2 * ne() - a.renderingStartTime > xu &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), dn(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ne()),
            (t.sibling = null),
            (l = Nt.current),
            L(Nt, n ? (l & 1) | 2 : l & 1),
            ct && Ze(e, a.treeForkCount),
            t)
          : (zt(e), null);
      case 22:
      case 23:
        return (
          re(e),
          fc(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : zt(e),
          (l = e.updateQueue),
          l !== null && Ou(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && U(Ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ke(Ut),
          zt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function ov(t, e) {
    switch ((Ji(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ke(Ut),
          Dt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ln(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((re(e), e.alternate === null)) throw Error(f(340));
          Yl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (re(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Yl();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return U(Nt), null;
      case 4:
        return Dt(), null;
      case 10:
        return Ke(e.type), null;
      case 22:
      case 23:
        return (
          re(e),
          fc(),
          t !== null && U(Ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ke(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ts(t, e) {
    switch ((Ji(e), e.tag)) {
      case 3:
        Ke(Ut), Dt();
        break;
      case 26:
      case 27:
      case 5:
        Ln(e);
        break;
      case 4:
        Dt();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        U(Nt);
        break;
      case 10:
        Ke(e.type);
        break;
      case 22:
      case 23:
        re(e), fc(), t !== null && U(Ql);
        break;
      case 24:
        Ke(Ut);
    }
  }
  function mn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            (a = u()), (i.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      dt(e, e.return, o);
    }
  }
  function gl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              o = i.destroy;
            if (o !== void 0) {
              (i.destroy = void 0), (n = e);
              var h = l,
                T = o;
              try {
                T();
              } catch (M) {
                dt(n, h, M);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (M) {
      dt(e, e.return, M);
    }
  }
  function zs(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        dr(e, l);
      } catch (a) {
        dt(t, t.return, a);
      }
    }
  }
  function _s(t, e, l) {
    (l.props = Jl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      dt(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      dt(t, e, n);
    }
  }
  function je(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          dt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          dt(t, e, n);
        }
      else l.current = null;
  }
  function As(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      dt(t, t.return, n);
    }
  }
  function Gc(t, e, l) {
    try {
      var a = t.stateNode;
      Nv(a, t.type, l, e), (a[Ft] = e);
    } catch (n) {
      dt(t, t.return, n);
    }
  }
  function Rs(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && _l(t.type)) ||
      t.tag === 4
    );
  }
  function Xc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rs(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && _l(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Qc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Ge));
    else if (
      a !== 4 &&
      (a === 27 && _l(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Qc(t, e, l), t = t.sibling; t !== null; )
        Qc(t, e, l), (t = t.sibling);
  }
  function Mu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && _l(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Mu(t, e, l), t = t.sibling; t !== null; )
        Mu(t, e, l), (t = t.sibling);
  }
  function Os(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Kt(e, a, l), (e[Xt] = t), (e[Ft] = l);
    } catch (u) {
      dt(t, t.return, u);
    }
  }
  var We = !1,
    Bt = !1,
    Zc = !1,
    Ms = typeof WeakSet == "function" ? WeakSet : Set,
    Yt = null;
  function rv(t, e) {
    if (((t = t.containerInfo), (sf = $u), (t = Go(t)), Bi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0,
              o = -1,
              h = -1,
              T = 0,
              M = 0,
              N = t,
              z = null;
            e: for (;;) {
              for (
                var A;
                N !== l || (n !== 0 && N.nodeType !== 3) || (o = i + n),
                  N !== u || (a !== 0 && N.nodeType !== 3) || (h = i + a),
                  N.nodeType === 3 && (i += N.nodeValue.length),
                  (A = N.firstChild) !== null;

              )
                (z = N), (N = A);
              for (;;) {
                if (N === t) break e;
                if (
                  (z === l && ++T === n && (o = i),
                  z === u && ++M === a && (h = i),
                  (A = N.nextSibling) !== null)
                )
                  break;
                (N = z), (z = N.parentNode);
              }
              N = A;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      hf = { focusedElem: t, selectionRange: l }, $u = !1, Yt = e;
      Yt !== null;

    )
      if (
        ((e = Yt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Yt = t);
      else
        for (; Yt !== null; ) {
          switch (((e = Yt), (u = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  (n = t[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                (t = void 0),
                  (l = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var Y = Jl(l.type, n);
                  (t = a.getSnapshotBeforeUpdate(Y, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch ($) {
                  dt(l, l.return, $);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  vf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Yt = t);
            break;
          }
          Yt = e.return;
        }
  }
  function Cs(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ie(t, l), a & 4 && mn(5, l);
        break;
      case 1:
        if ((Ie(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (i) {
              dt(l, l.return, i);
            }
          else {
            var n = Jl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              dt(l, l.return, i);
            }
          }
        a & 64 && zs(l), a & 512 && vn(l, l.return);
        break;
      case 3:
        if ((Ie(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            dr(t, e);
          } catch (i) {
            dt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Os(l);
      case 26:
      case 5:
        Ie(t, l), e === null && a & 4 && As(l), a & 512 && vn(l, l.return);
        break;
      case 12:
        Ie(t, l);
        break;
      case 31:
        Ie(t, l), a & 4 && xs(t, l);
        break;
      case 13:
        Ie(t, l),
          a & 4 && Us(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Sv.bind(null, l)), Yv(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || We), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Bt), (n = We);
          var u = Bt;
          (We = a),
            (Bt = e) && !u ? Pe(t, l, (l.subtreeFlags & 8772) !== 0) : Ie(t, l),
            (We = n),
            (Bt = u);
        }
        break;
      case 30:
        break;
      default:
        Ie(t, l);
    }
  }
  function Ds(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Ds(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Si(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var _t = null,
    Pt = !1;
  function Fe(t, e, l) {
    for (l = l.child; l !== null; ) Ns(t, e, l), (l = l.sibling);
  }
  function Ns(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(La, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Bt || je(l, e),
          Fe(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Bt || je(l, e);
        var a = _t,
          n = Pt;
        _l(l.type) && ((_t = l.stateNode), (Pt = !1)),
          Fe(t, e, l),
          _n(l.stateNode),
          (_t = a),
          (Pt = n);
        break;
      case 5:
        Bt || je(l, e);
      case 6:
        if (
          ((a = _t),
          (n = Pt),
          (_t = null),
          Fe(t, e, l),
          (_t = a),
          (Pt = n),
          _t !== null)
        )
          if (Pt)
            try {
              (_t.nodeType === 9
                ? _t.body
                : _t.nodeName === "HTML"
                ? _t.ownerDocument.body
                : _t
              ).removeChild(l.stateNode);
            } catch (u) {
              dt(l, e, u);
            }
          else
            try {
              _t.removeChild(l.stateNode);
            } catch (u) {
              dt(l, e, u);
            }
        break;
      case 18:
        _t !== null &&
          (Pt
            ? ((t = _t),
              zh(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              ja(t))
            : zh(_t, l.stateNode));
        break;
      case 4:
        (a = _t),
          (n = Pt),
          (_t = l.stateNode.containerInfo),
          (Pt = !0),
          Fe(t, e, l),
          (_t = a),
          (Pt = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gl(2, l, e), Bt || gl(4, l, e), Fe(t, e, l);
        break;
      case 1:
        Bt ||
          (je(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && _s(l, e, a)),
          Fe(t, e, l);
        break;
      case 21:
        Fe(t, e, l);
        break;
      case 22:
        (Bt = (a = Bt) || l.memoizedState !== null), Fe(t, e, l), (Bt = a);
        break;
      default:
        Fe(t, e, l);
    }
  }
  function xs(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ja(t);
      } catch (l) {
        dt(e, e.return, l);
      }
    }
  }
  function Us(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ja(t);
      } catch (l) {
        dt(e, e.return, l);
      }
  }
  function sv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ms()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ms()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Cu(t, e) {
    var l = sv(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = bv.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          o = i;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (_l(o.type)) {
                (_t = o.stateNode), (Pt = !1);
                break t;
              }
              break;
            case 5:
              (_t = o.stateNode), (Pt = !1);
              break t;
            case 3:
            case 4:
              (_t = o.stateNode.containerInfo), (Pt = !0);
              break t;
          }
          o = o.return;
        }
        if (_t === null) throw Error(f(160));
        Ns(u, i, n),
          (_t = null),
          (Pt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Hs(e, t), (e = e.sibling);
  }
  var Ce = null;
  function Hs(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        te(e, t),
          ee(t),
          a & 4 && (gl(3, t, t.return), mn(3, t), gl(5, t, t.return));
        break;
      case 1:
        te(e, t),
          ee(t),
          a & 512 && (Bt || l === null || je(l, l.return)),
          a & 64 &&
            We &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ce;
        if (
          (te(e, t),
          ee(t),
          a & 512 && (Bt || l === null || je(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Xa] ||
                          u[Xt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title")
                          )),
                        Kt(u, a, l),
                        (u[Xt] = t),
                        Lt(u),
                        (a = u);
                      break t;
                    case "link":
                      var i = Hh("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var o = 0; o < i.length; o++)
                          if (
                            ((u = i[o]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(o, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Kt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = Hh("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (o = 0; o < i.length; o++)
                          if (
                            ((u = i[o]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(o, 1);
                            break e;
                          }
                      }
                      (u = n.createElement(a)),
                        Kt(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Xt] = t), Lt(u), (a = u);
                }
                t.stateNode = a;
              } else jh(n, t.type, t.stateNode);
            else t.stateNode = Uh(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? jh(n, t.type, t.stateNode)
                  : Uh(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Gc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        te(e, t),
          ee(t),
          a & 512 && (Bt || l === null || je(l, l.return)),
          l !== null && a & 4 && Gc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (te(e, t),
          ee(t),
          a & 512 && (Bt || l === null || je(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            na(n, "");
          } catch (Y) {
            dt(t, t.return, Y);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), Gc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Zc = !0);
        break;
      case 6:
        if ((te(e, t), ee(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (Y) {
            dt(t, t.return, Y);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (n = Ce),
          (Ce = Zu(e.containerInfo)),
          te(e, t),
          (Ce = n),
          ee(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ja(e.containerInfo);
          } catch (Y) {
            dt(t, t.return, Y);
          }
        Zc && ((Zc = !1), js(t));
        break;
      case 4:
        (a = Ce),
          (Ce = Zu(t.stateNode.containerInfo)),
          te(e, t),
          ee(t),
          (Ce = a);
        break;
      case 12:
        te(e, t), ee(t);
        break;
      case 31:
        te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Cu(t, a)));
        break;
      case 13:
        te(e, t),
          ee(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Nu = ne()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Cu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          T = We,
          M = Bt;
        if (
          ((We = T || n),
          (Bt = M || h),
          te(e, t),
          (Bt = M),
          (We = T),
          ee(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || h || We || Bt || kl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((u = h.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    o = h.stateNode;
                    var N = h.memoizedProps.style,
                      z =
                        N != null && N.hasOwnProperty("display")
                          ? N.display
                          : null;
                    o.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (Y) {
                  dt(h, h.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (Y) {
                  dt(h, h.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                h = e;
                try {
                  var A = h.stateNode;
                  n ? _h(A, !0) : _h(h.stateNode, !1);
                } catch (Y) {
                  dt(h, h.return, Y);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Cu(t, l))));
        break;
      case 19:
        te(e, t),
          ee(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Cu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        te(e, t), ee(t);
    }
  }
  function ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Rs(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Xc(t);
            Mu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (na(i, ""), (l.flags &= -33));
            var o = Xc(t);
            Mu(t, o, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              T = Xc(t);
            Qc(t, T, h);
            break;
          default:
            throw Error(f(161));
        }
      } catch (M) {
        dt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function js(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        js(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Ie(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Cs(t, e.alternate, e), (e = e.sibling);
  }
  function kl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gl(4, e, e.return), kl(e);
          break;
        case 1:
          je(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && _s(e, e.return, l),
            kl(e);
          break;
        case 27:
          _n(e.stateNode);
        case 26:
        case 5:
          je(e, e.return), kl(e);
          break;
        case 22:
          e.memoizedState === null && kl(e);
          break;
        case 30:
          kl(e);
          break;
        default:
          kl(e);
      }
      t = t.sibling;
    }
  }
  function Pe(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Pe(n, u, l), mn(4, u);
          break;
        case 1:
          if (
            (Pe(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (T) {
              dt(a, a.return, T);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var o = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  hr(h[n], o);
            } catch (T) {
              dt(a, a.return, T);
            }
          }
          l && i & 64 && zs(u), vn(u, u.return);
          break;
        case 27:
          Os(u);
        case 26:
        case 5:
          Pe(n, u, l), l && a === null && i & 4 && As(u), vn(u, u.return);
          break;
        case 12:
          Pe(n, u, l);
          break;
        case 31:
          Pe(n, u, l), l && i & 4 && xs(n, u);
          break;
        case 13:
          Pe(n, u, l), l && i & 4 && Us(n, u);
          break;
        case 22:
          u.memoizedState === null && Pe(n, u, l), vn(u, u.return);
          break;
        case 30:
          break;
        default:
          Pe(n, u, l);
      }
      e = e.sibling;
    }
  }
  function Vc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && tn(l));
  }
  function Kc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && tn(t));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Bs(t, e, l, a), (e = e.sibling);
  }
  function Bs(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e, l, a), n & 2048 && mn(9, e);
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        De(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && tn(t)));
        break;
      case 12:
        if (n & 2048) {
          De(t, e, l, a), (t = e.stateNode);
          try {
            var u = e.memoizedProps,
              i = u.id,
              o = u.onPostCommit;
            typeof o == "function" &&
              o(
                i,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (h) {
            dt(e, e.return, h);
          }
        } else De(t, e, l, a);
        break;
      case 31:
        De(t, e, l, a);
        break;
      case 13:
        De(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? De(t, e, l, a)
              : yn(t, e)
            : u._visibility & 2
            ? De(t, e, l, a)
            : ((u._visibility |= 2),
              _a(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Vc(i, e);
        break;
      case 24:
        De(t, e, l, a), n & 2048 && Kc(e.alternate, e);
        break;
      default:
        De(t, e, l, a);
    }
  }
  function _a(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var u = t,
        i = e,
        o = l,
        h = a,
        T = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _a(u, i, o, h, n), mn(8, i);
          break;
        case 23:
          break;
        case 22:
          var M = i.stateNode;
          i.memoizedState !== null
            ? M._visibility & 2
              ? _a(u, i, o, h, n)
              : yn(u, i)
            : ((M._visibility |= 2), _a(u, i, o, h, n)),
            n && T & 2048 && Vc(i.alternate, i);
          break;
        case 24:
          _a(u, i, o, h, n), n && T & 2048 && Kc(i.alternate, i);
          break;
        default:
          _a(u, i, o, h, n);
      }
      e = e.sibling;
    }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            yn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          case 24:
            yn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          default:
            yn(l, a);
        }
        e = e.sibling;
      }
  }
  var gn = 8192;
  function Aa(t, e, l) {
    if (t.subtreeFlags & gn)
      for (t = t.child; t !== null; ) qs(t, e, l), (t = t.sibling);
  }
  function qs(t, e, l) {
    switch (t.tag) {
      case 26:
        Aa(t, e, l),
          t.flags & gn &&
            t.memoizedState !== null &&
            Fv(l, Ce, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Aa(t, e, l);
        break;
      case 3:
      case 4:
        var a = Ce;
        (Ce = Zu(t.stateNode.containerInfo)), Aa(t, e, l), (Ce = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = gn), (gn = 16777216), Aa(t, e, l), (gn = a))
            : Aa(t, e, l));
        break;
      default:
        Aa(t, e, l);
    }
  }
  function Ls(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function pn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Yt = a), Gs(a, t);
        }
      Ls(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ys(t), (t = t.sibling);
  }
  function Ys(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        pn(t), t.flags & 2048 && gl(9, t, t.return);
        break;
      case 3:
        pn(t);
        break;
      case 12:
        pn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Du(t))
          : pn(t);
        break;
      default:
        pn(t);
    }
  }
  function Du(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Yt = a), Gs(a, t);
        }
      Ls(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          gl(8, e, e.return), Du(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Du(e));
          break;
        default:
          Du(e);
      }
      t = t.sibling;
    }
  }
  function Gs(t, e) {
    for (; Yt !== null; ) {
      var l = Yt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          gl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Yt = a);
      else
        t: for (l = t; Yt !== null; ) {
          a = Yt;
          var n = a.sibling,
            u = a.return;
          if ((Ds(a), a === l)) {
            Yt = null;
            break t;
          }
          if (n !== null) {
            (n.return = u), (Yt = n);
            break t;
          }
          Yt = u;
        }
    }
  }
  var hv = {
      getCacheForType: function (t) {
        var e = Zt(Ut),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: function () {
        return Zt(Ut).controller.signal;
      },
    },
    dv = typeof WeakMap == "function" ? WeakMap : Map,
    rt = 0,
    St = null,
    at = null,
    ut = 0,
    ht = 0,
    se = null,
    pl = !1,
    Ra = !1,
    wc = !1,
    tl = 0,
    Mt = 0,
    Sl = 0,
    $l = 0,
    Jc = 0,
    he = 0,
    Oa = 0,
    Sn = null,
    le = null,
    kc = !1,
    Nu = 0,
    Xs = 0,
    xu = 1 / 0,
    Uu = null,
    bl = null,
    qt = 0,
    El = null,
    Ma = null,
    el = 0,
    $c = 0,
    Wc = null,
    Qs = null,
    bn = 0,
    Fc = null;
  function de() {
    return (rt & 2) !== 0 && ut !== 0 ? ut & -ut : C.T !== null ? af() : ao();
  }
  function Zs() {
    if (he === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Xn;
        (Xn <<= 1), (Xn & 3932160) === 0 && (Xn = 262144), (he = t);
      } else he = 536870912;
    return (t = oe.current), t !== null && (t.flags |= 32), he;
  }
  function ae(t, e, l) {
    ((t === St && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (Ca(t, 0), Tl(t, ut, he, !1)),
      Ga(t, l),
      ((rt & 2) === 0 || t !== St) &&
        (t === St &&
          ((rt & 2) === 0 && ($l |= l), Mt === 4 && Tl(t, ut, he, !1)),
        Be(t));
  }
  function Vs(t, e, l) {
    if ((rt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ya(t, e),
      n = a ? yv(t, e) : Pc(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Ra && !a && Tl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), u && !mv(l))) {
          (n = Pc(t, e, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = e), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            e = i;
            t: {
              var o = t;
              n = Sn;
              var h = o.current.memoizedState.isDehydrated;
              if ((h && (Ca(o, i).flags |= 256), (i = Pc(o, i, !1)), i !== 2)) {
                if (wc && !h) {
                  (o.errorRecoveryDisabledLanes |= u), ($l |= u), (n = 4);
                  break t;
                }
                (u = le),
                  (le = n),
                  u !== null && (le === null ? (le = u) : le.push.apply(le, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Ca(t, 0), Tl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Tl(a, e, he, !pl);
              break t;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && ((n = Nu + 300 - ne()), 10 < n)) {
            if ((Tl(a, e, he, !pl), Zn(a, 0, !0) !== 0)) break t;
            (el = e),
              (a.timeoutHandle = Eh(
                Ks.bind(
                  null,
                  a,
                  l,
                  le,
                  Uu,
                  kc,
                  e,
                  he,
                  $l,
                  Oa,
                  pl,
                  u,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break t;
          }
          Ks(a, l, le, Uu, kc, e, he, $l, Oa, pl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Be(t);
  }
  function Ks(t, e, l, a, n, u, i, o, h, T, M, N, z, A) {
    if (
      ((t.timeoutHandle = -1),
      (N = e.subtreeFlags),
      N & 8192 || (N & 16785408) === 16785408)
    ) {
      (N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ge,
      }),
        qs(e, u, N);
      var Y =
        (u & 62914560) === u ? Nu - ne() : (u & 4194048) === u ? Xs - ne() : 0;
      if (((Y = Iv(N, Y)), Y !== null)) {
        (el = u),
          (t.cancelPendingCommit = Y(
            Ps.bind(null, t, e, u, l, a, n, i, o, h, M, N, null, z, A)
          )),
          Tl(t, u, i, !T);
        return;
      }
    }
    Ps(t, e, u, l, a, n, i, o, h);
  }
  function mv(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ce(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Tl(t, e, l, a) {
    (e &= ~Jc),
      (e &= ~$l),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var u = 31 - ie(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    l !== 0 && to(t, l, e);
  }
  function Hu() {
    return (rt & 6) === 0 ? (En(0), !1) : !0;
  }
  function Ic() {
    if (at !== null) {
      if (ht === 0) var t = at.return;
      else (t = at), (Ve = Gl = null), mc(t), (Sa = null), (ln = 0), (t = at);
      for (; t !== null; ) Ts(t.alternate, t), (t = t.return);
      at = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Hv(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (el = 0),
      Ic(),
      (St = t),
      (at = l = Qe(t.current, null)),
      (ut = e),
      (ht = 0),
      (se = null),
      (pl = !1),
      (Ra = Ya(t, e)),
      (wc = !1),
      (Oa = he = Jc = $l = Sl = Mt = 0),
      (le = Sn = null),
      (kc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ie(a),
          u = 1 << n;
        (e |= t[n]), (a &= ~u);
      }
    return (tl = e), eu(), l;
  }
  function ws(t, e) {
    (tt = null),
      (C.H = sn),
      e === pa || e === ou
        ? ((e = fr()), (ht = 3))
        : e === lc
        ? ((e = fr()), (ht = 4))
        : (ht =
            e === Dc
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (se = e),
      at === null && ((Mt = 1), zu(t, pe(e, t.current)));
  }
  function Js() {
    var t = oe.current;
    return t === null
      ? !0
      : (ut & 4194048) === ut
      ? Te === null
      : (ut & 62914560) === ut || (ut & 536870912) !== 0
      ? t === Te
      : !1;
  }
  function ks() {
    var t = C.H;
    return (C.H = sn), t === null ? sn : t;
  }
  function $s() {
    var t = C.A;
    return (C.A = hv), t;
  }
  function ju() {
    (Mt = 4),
      pl || ((ut & 4194048) !== ut && oe.current !== null) || (Ra = !0),
      ((Sl & 134217727) === 0 && ($l & 134217727) === 0) ||
        St === null ||
        Tl(St, ut, he, !1);
  }
  function Pc(t, e, l) {
    var a = rt;
    rt |= 2;
    var n = ks(),
      u = $s();
    (St !== t || ut !== e) && ((Uu = null), Ca(t, e)), (e = !1);
    var i = Mt;
    t: do
      try {
        if (ht !== 0 && at !== null) {
          var o = at,
            h = se;
          switch (ht) {
            case 8:
              Ic(), (i = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              oe.current === null && (e = !0);
              var T = ht;
              if (((ht = 0), (se = null), Da(t, o, h, T), l && Ra)) {
                i = 0;
                break t;
              }
              break;
            default:
              (T = ht), (ht = 0), (se = null), Da(t, o, h, T);
          }
        }
        vv(), (i = Mt);
        break;
      } catch (M) {
        ws(t, M);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ve = Gl = null),
      (rt = a),
      (C.H = n),
      (C.A = u),
      at === null && ((St = null), (ut = 0), eu()),
      i
    );
  }
  function vv() {
    for (; at !== null; ) Ws(at);
  }
  function yv(t, e) {
    var l = rt;
    rt |= 2;
    var a = ks(),
      n = $s();
    St !== t || ut !== e
      ? ((Uu = null), (xu = ne() + 500), Ca(t, e))
      : (Ra = Ya(t, e));
    t: do
      try {
        if (ht !== 0 && at !== null) {
          e = at;
          var u = se;
          e: switch (ht) {
            case 1:
              (ht = 0), (se = null), Da(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ir(u)) {
                (ht = 0), (se = null), Fs(e);
                break;
              }
              (e = function () {
                (ht !== 2 && ht !== 9) || St !== t || (ht = 7), Be(t);
              }),
                u.then(e, e);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              ir(u)
                ? ((ht = 0), (se = null), Fs(e))
                : ((ht = 0), (se = null), Da(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var o = at;
                  if (i ? Bh(i) : o.stateNode.complete) {
                    (ht = 0), (se = null);
                    var h = o.sibling;
                    if (h !== null) at = h;
                    else {
                      var T = o.return;
                      T !== null ? ((at = T), Bu(T)) : (at = null);
                    }
                    break e;
                  }
              }
              (ht = 0), (se = null), Da(t, e, u, 5);
              break;
            case 6:
              (ht = 0), (se = null), Da(t, e, u, 6);
              break;
            case 8:
              Ic(), (Mt = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        gv();
        break;
      } catch (M) {
        ws(t, M);
      }
    while (!0);
    return (
      (Ve = Gl = null),
      (C.H = a),
      (C.A = n),
      (rt = l),
      at !== null ? 0 : ((St = null), (ut = 0), eu(), Mt)
    );
  }
  function gv() {
    for (; at !== null && !Gd(); ) Ws(at);
  }
  function Ws(t) {
    var e = bs(t.alternate, t, tl);
    (t.memoizedProps = t.pendingProps), e === null ? Bu(t) : (at = e);
  }
  function Fs(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = ms(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = ms(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        mc(e);
      default:
        Ts(l, e), (e = at = $o(e, tl)), (e = bs(l, e, tl));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Bu(t) : (at = e);
  }
  function Da(t, e, l, a) {
    (Ve = Gl = null), mc(e), (Sa = null), (ln = 0);
    var n = e.return;
    try {
      if (uv(t, n, e, l, ut)) {
        (Mt = 1), zu(t, pe(l, t.current)), (at = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((at = n), u);
      (Mt = 1), zu(t, pe(l, t.current)), (at = null);
      return;
    }
    e.flags & 32768
      ? (ct || a === 1
          ? (t = !0)
          : Ra || (ut & 536870912) !== 0
          ? (t = !1)
          : ((pl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = oe.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Is(e, t))
      : Bu(e);
  }
  function Bu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Is(e, pl);
        return;
      }
      t = e.return;
      var l = fv(e.alternate, e, tl);
      if (l !== null) {
        at = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Mt === 0 && (Mt = 5);
  }
  function Is(t, e) {
    do {
      var l = ov(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (at = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    (Mt = 6), (at = null);
  }
  function Ps(t, e, l, a, n, u, i, o, h) {
    t.cancelPendingCommit = null;
    do qu();
    while (qt !== 0);
    if ((rt & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= Xi),
        Wd(t, l, u, i, o, h),
        t === St && ((at = St = null), (ut = 0)),
        (Ma = e),
        (El = t),
        (el = l),
        ($c = u),
        (Wc = n),
        (Qs = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ev(Yn, function () {
              return nh(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = C.T), (C.T = null), (n = q.p), (q.p = 2), (i = rt), (rt |= 4);
        try {
          rv(t, e, l);
        } finally {
          (rt = i), (q.p = n), (C.T = a);
        }
      }
      (qt = 1), th(), eh(), lh();
    }
  }
  function th() {
    if (qt === 1) {
      qt = 0;
      var t = El,
        e = Ma,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = C.T), (C.T = null);
        var a = q.p;
        q.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Hs(e, t);
          var u = hf,
            i = Go(t.containerInfo),
            o = u.focusedElem,
            h = u.selectionRange;
          if (
            i !== o &&
            o &&
            o.ownerDocument &&
            Yo(o.ownerDocument.documentElement, o)
          ) {
            if (h !== null && Bi(o)) {
              var T = h.start,
                M = h.end;
              if ((M === void 0 && (M = T), "selectionStart" in o))
                (o.selectionStart = T),
                  (o.selectionEnd = Math.min(M, o.value.length));
              else {
                var N = o.ownerDocument || document,
                  z = (N && N.defaultView) || window;
                if (z.getSelection) {
                  var A = z.getSelection(),
                    Y = o.textContent.length,
                    $ = Math.min(h.start, Y),
                    gt = h.end === void 0 ? $ : Math.min(h.end, Y);
                  !A.extend && $ > gt && ((i = gt), (gt = $), ($ = i));
                  var S = Lo(o, $),
                    v = Lo(o, gt);
                  if (
                    S &&
                    v &&
                    (A.rangeCount !== 1 ||
                      A.anchorNode !== S.node ||
                      A.anchorOffset !== S.offset ||
                      A.focusNode !== v.node ||
                      A.focusOffset !== v.offset)
                  ) {
                    var E = N.createRange();
                    E.setStart(S.node, S.offset),
                      A.removeAllRanges(),
                      $ > gt
                        ? (A.addRange(E), A.extend(v.node, v.offset))
                        : (E.setEnd(v.node, v.offset), A.addRange(E));
                  }
                }
              }
            }
            for (N = [], A = o; (A = A.parentNode); )
              A.nodeType === 1 &&
                N.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < N.length;
              o++
            ) {
              var D = N[o];
              (D.element.scrollLeft = D.left), (D.element.scrollTop = D.top);
            }
          }
          ($u = !!sf), (hf = sf = null);
        } finally {
          (rt = n), (q.p = a), (C.T = l);
        }
      }
      (t.current = e), (qt = 2);
    }
  }
  function eh() {
    if (qt === 2) {
      qt = 0;
      var t = El,
        e = Ma,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = C.T), (C.T = null);
        var a = q.p;
        q.p = 2;
        var n = rt;
        rt |= 4;
        try {
          Cs(t, e.alternate, e);
        } finally {
          (rt = n), (q.p = a), (C.T = l);
        }
      }
      qt = 3;
    }
  }
  function lh() {
    if (qt === 4 || qt === 3) {
      (qt = 0), Xd();
      var t = El,
        e = Ma,
        l = el,
        a = Qs;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (qt = 5)
        : ((qt = 0), (Ma = El = null), ah(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (bl = null),
        gi(l),
        (e = e.stateNode),
        ue && typeof ue.onCommitFiberRoot == "function")
      )
        try {
          ue.onCommitFiberRoot(La, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = C.T), (n = q.p), (q.p = 2), (C.T = null);
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var o = a[i];
            u(o.value, { componentStack: o.stack });
          }
        } finally {
          (C.T = e), (q.p = n);
        }
      }
      (el & 3) !== 0 && qu(),
        Be(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Fc
            ? bn++
            : ((bn = 0), (Fc = t))
          : (bn = 0),
        En(0);
    }
  }
  function ah(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), tn(e)));
  }
  function qu() {
    return th(), eh(), lh(), nh();
  }
  function nh() {
    if (qt !== 5) return !1;
    var t = El,
      e = $c;
    $c = 0;
    var l = gi(el),
      a = C.T,
      n = q.p;
    try {
      (q.p = 32 > l ? 32 : l), (C.T = null), (l = Wc), (Wc = null);
      var u = El,
        i = el;
      if (((qt = 0), (Ma = El = null), (el = 0), (rt & 6) !== 0))
        throw Error(f(331));
      var o = rt;
      if (
        ((rt |= 4),
        Ys(u.current),
        Bs(u, u.current, i, l),
        (rt = o),
        En(0, !1),
        ue && typeof ue.onPostCommitFiberRoot == "function")
      )
        try {
          ue.onPostCommitFiberRoot(La, u);
        } catch {}
      return !0;
    } finally {
      (q.p = n), (C.T = a), ah(t, e);
    }
  }
  function uh(t, e, l) {
    (e = pe(l, e)),
      (e = Cc(t.stateNode, e, 2)),
      (t = ml(t, e, 2)),
      t !== null && (Ga(t, 2), Be(t));
  }
  function dt(t, e, l) {
    if (t.tag === 3) uh(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          uh(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (bl === null || !bl.has(a)))
          ) {
            (t = pe(l, t)),
              (l = is(2)),
              (a = ml(e, l, 2)),
              a !== null && (cs(l, a, e, t), Ga(a, 2), Be(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function tf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new dv();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((wc = !0), n.add(l), (t = pv.bind(null, t, e, l)), e.then(t, t));
  }
  function pv(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      St === t &&
        (ut & l) === l &&
        (Mt === 4 || (Mt === 3 && (ut & 62914560) === ut && 300 > ne() - Nu)
          ? (rt & 2) === 0 && Ca(t, 0)
          : (Jc |= l),
        Oa === ut && (Oa = 0)),
      Be(t);
  }
  function ih(t, e) {
    e === 0 && (e = Pf()), (t = ql(t, e)), t !== null && (Ga(t, e), Be(t));
  }
  function Sv(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), ih(t, l);
  }
  function bv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), ih(t, l);
  }
  function Ev(t, e) {
    return di(t, e);
  }
  var Lu = null,
    Na = null,
    ef = !1,
    Yu = !1,
    lf = !1,
    zl = 0;
  function Be(t) {
    t !== Na &&
      t.next === null &&
      (Na === null ? (Lu = Na = t) : (Na = Na.next = t)),
      (Yu = !0),
      ef || ((ef = !0), zv());
  }
  function En(t, e) {
    if (!lf && Yu) {
      lf = !0;
      do
        for (var l = !1, a = Lu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                o = a.pingedLanes;
              (u = (1 << (31 - ie(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~o)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), rh(a, u));
          } else
            (u = ut),
              (u = Zn(
                a,
                a === St ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Ya(a, u) || ((l = !0), rh(a, u));
          a = a.next;
        }
      while (l);
      lf = !1;
    }
  }
  function Tv() {
    ch();
  }
  function ch() {
    Yu = ef = !1;
    var t = 0;
    zl !== 0 && Uv() && (t = zl);
    for (var e = ne(), l = null, a = Lu; a !== null; ) {
      var n = a.next,
        u = fh(a, e);
      u === 0
        ? ((a.next = null),
          l === null ? (Lu = n) : (l.next = n),
          n === null && (Na = l))
        : ((l = a), (t !== 0 || (u & 3) !== 0) && (Yu = !0)),
        (a = n);
    }
    (qt !== 0 && qt !== 5) || En(t), zl !== 0 && (zl = 0);
  }
  function fh(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;

    ) {
      var i = 31 - ie(u),
        o = 1 << i,
        h = n[i];
      h === -1
        ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = $d(o, e))
        : h <= e && (t.expiredLanes |= o),
        (u &= ~o);
    }
    if (
      ((e = St),
      (l = ut),
      (l = Zn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (ht === 2 || ht === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && mi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ya(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && mi(a), gi(l))) {
        case 2:
        case 8:
          l = Ff;
          break;
        case 32:
          l = Yn;
          break;
        case 268435456:
          l = If;
          break;
        default:
          l = Yn;
      }
      return (
        (a = oh.bind(null, t)),
        (l = di(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && mi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function oh(t, e) {
    if (qt !== 0 && qt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (qu() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = Zn(
        t,
        t === St ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Vs(t, a, e),
          fh(t, ne()),
          t.callbackNode != null && t.callbackNode === l
            ? oh.bind(null, t)
            : null)
    );
  }
  function rh(t, e) {
    if (qu()) return null;
    Vs(t, e, !0);
  }
  function zv() {
    jv(function () {
      (rt & 6) !== 0 ? di(Wf, Tv) : ch();
    });
  }
  function af() {
    if (zl === 0) {
      var t = ya;
      t === 0 && ((t = Gn), (Gn <<= 1), (Gn & 261888) === 0 && (Gn = 256)),
        (zl = t);
    }
    return zl;
  }
  function sh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Jn("" + t);
  }
  function hh(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function _v(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = sh((n[Ft] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Ft] || null)
          ? sh(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var o = new Fn("action", "action", null, a, n);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var h = i ? hh(n, i) : new FormData(n);
                  zc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" &&
                  (o.preventDefault(),
                  (h = i ? hh(n, i) : new FormData(n)),
                  zc(
                    l,
                    { pending: !0, data: h, method: n.method, action: u },
                    u,
                    h
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var nf = 0; nf < Gi.length; nf++) {
    var uf = Gi[nf],
      Av = uf.toLowerCase(),
      Rv = uf[0].toUpperCase() + uf.slice(1);
    Me(Av, "on" + Rv);
  }
  Me(Zo, "onAnimationEnd"),
    Me(Vo, "onAnimationIteration"),
    Me(Ko, "onAnimationStart"),
    Me("dblclick", "onDoubleClick"),
    Me("focusin", "onFocus"),
    Me("focusout", "onBlur"),
    Me(Qm, "onTransitionRun"),
    Me(Zm, "onTransitionStart"),
    Me(Vm, "onTransitionCancel"),
    Me(wo, "onTransitionEnd"),
    la("onMouseEnter", ["mouseout", "mouseover"]),
    la("onMouseLeave", ["mouseout", "mouseover"]),
    la("onPointerEnter", ["pointerout", "pointerover"]),
    la("onPointerLeave", ["pointerout", "pointerover"]),
    Ul(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ul(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ul("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ul(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ul(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ul(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Tn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ov = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Tn)
    );
  function dh(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var o = a[i],
              h = o.instance,
              T = o.currentTarget;
            if (((o = o.listener), h !== u && n.isPropagationStopped()))
              break t;
            (u = o), (n.currentTarget = T);
            try {
              u(n);
            } catch (M) {
              tu(M);
            }
            (n.currentTarget = null), (u = h);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((o = a[i]),
              (h = o.instance),
              (T = o.currentTarget),
              (o = o.listener),
              h !== u && n.isPropagationStopped())
            )
              break t;
            (u = o), (n.currentTarget = T);
            try {
              u(n);
            } catch (M) {
              tu(M);
            }
            (n.currentTarget = null), (u = h);
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[pi];
    l === void 0 && (l = e[pi] = new Set());
    var a = t + "__bubble";
    l.has(a) || (mh(e, t, 2, !1), l.add(a));
  }
  function cf(t, e, l) {
    var a = 0;
    e && (a |= 4), mh(l, t, a, e);
  }
  var Gu = "_reactListening" + Math.random().toString(36).slice(2);
  function ff(t) {
    if (!t[Gu]) {
      (t[Gu] = !0),
        io.forEach(function (l) {
          l !== "selectionchange" && (Ov.has(l) || cf(l, !1, t), cf(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Gu] || ((e[Gu] = !0), cf("selectionchange", !1, e));
    }
  }
  function mh(t, e, l, a) {
    switch (Zh(e)) {
      case 2:
        var n = ey;
        break;
      case 8:
        n = ly;
        break;
      default:
        n = zf;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !Oi ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function of(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var h = i.tag;
              if ((h === 3 || h === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Pl(o)), i === null)) return;
            if (((h = i.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = u = i;
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    So(function () {
      var T = u,
        M = Ai(l),
        N = [];
      t: {
        var z = Jo.get(t);
        if (z !== void 0) {
          var A = Fn,
            Y = t;
          switch (t) {
            case "keypress":
              if ($n(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = bm;
              break;
            case "focusin":
              (Y = "focus"), (A = Ni);
              break;
            case "focusout":
              (Y = "blur"), (A = Ni);
              break;
            case "beforeblur":
            case "afterblur":
              A = Ni;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = To;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = fm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = zm;
              break;
            case Zo:
            case Vo:
            case Ko:
              A = sm;
              break;
            case wo:
              A = Am;
              break;
            case "scroll":
            case "scrollend":
              A = im;
              break;
            case "wheel":
              A = Om;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = dm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = _o;
              break;
            case "toggle":
            case "beforetoggle":
              A = Cm;
          }
          var $ = (e & 4) !== 0,
            gt = !$ && (t === "scroll" || t === "scrollend"),
            S = $ ? (z !== null ? z + "Capture" : null) : z;
          $ = [];
          for (var v = T, E; v !== null; ) {
            var D = v;
            if (
              ((E = D.stateNode),
              (D = D.tag),
              (D !== 5 && D !== 26 && D !== 27) ||
                E === null ||
                S === null ||
                ((D = Za(v, S)), D != null && $.push(zn(v, D, E))),
              gt)
            )
              break;
            v = v.return;
          }
          0 < $.length &&
            ((z = new A(z, Y, null, l, M)), N.push({ event: z, listeners: $ }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (A = t === "mouseout" || t === "pointerout"),
            z &&
              l !== _i &&
              (Y = l.relatedTarget || l.fromElement) &&
              (Pl(Y) || Y[Il]))
          )
            break t;
          if (
            (A || z) &&
            ((z =
              M.window === M
                ? M
                : (z = M.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            A
              ? ((Y = l.relatedTarget || l.toElement),
                (A = T),
                (Y = Y ? Pl(Y) : null),
                Y !== null &&
                  ((gt = m(Y)),
                  ($ = Y.tag),
                  Y !== gt || ($ !== 5 && $ !== 27 && $ !== 6)) &&
                  (Y = null))
              : ((A = null), (Y = T)),
            A !== Y)
          ) {
            if (
              (($ = To),
              (D = "onMouseLeave"),
              (S = "onMouseEnter"),
              (v = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                (($ = _o),
                (D = "onPointerLeave"),
                (S = "onPointerEnter"),
                (v = "pointer")),
              (gt = A == null ? z : Qa(A)),
              (E = Y == null ? z : Qa(Y)),
              (z = new $(D, v + "leave", A, l, M)),
              (z.target = gt),
              (z.relatedTarget = E),
              (D = null),
              Pl(M) === T &&
                (($ = new $(S, v + "enter", Y, l, M)),
                ($.target = E),
                ($.relatedTarget = gt),
                (D = $)),
              (gt = D),
              A && Y)
            )
              e: {
                for ($ = Mv, S = A, v = Y, E = 0, D = S; D; D = $(D)) E++;
                D = 0;
                for (var w = v; w; w = $(w)) D++;
                for (; 0 < E - D; ) (S = $(S)), E--;
                for (; 0 < D - E; ) (v = $(v)), D--;
                for (; E--; ) {
                  if (S === v || (v !== null && S === v.alternate)) {
                    $ = S;
                    break e;
                  }
                  (S = $(S)), (v = $(v));
                }
                $ = null;
              }
            else $ = null;
            A !== null && vh(N, z, A, $, !1),
              Y !== null && gt !== null && vh(N, gt, Y, $, !0);
          }
        }
        t: {
          if (
            ((z = T ? Qa(T) : window),
            (A = z.nodeName && z.nodeName.toLowerCase()),
            A === "select" || (A === "input" && z.type === "file"))
          )
            var ft = xo;
          else if (Do(z))
            if (Uo) ft = Ym;
            else {
              ft = qm;
              var Z = Bm;
            }
          else
            (A = z.nodeName),
              !A ||
              A.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? T && zi(T.elementType) && (ft = xo)
                : (ft = Lm);
          if (ft && (ft = ft(t, T))) {
            No(N, ft, l, M);
            break t;
          }
          Z && Z(t, z, T),
            t === "focusout" &&
              T &&
              z.type === "number" &&
              T.memoizedProps.value != null &&
              Ti(z, "number", z.value);
        }
        switch (((Z = T ? Qa(T) : window), t)) {
          case "focusin":
            (Do(Z) || Z.contentEditable === "true") &&
              ((fa = Z), (qi = T), (Fa = null));
            break;
          case "focusout":
            Fa = qi = fa = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Li = !1), Xo(N, l, M);
            break;
          case "selectionchange":
            if (Xm) break;
          case "keydown":
          case "keyup":
            Xo(N, l, M);
        }
        var et;
        if (Ui)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          ca
            ? Mo(t, l) && (it = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (it = "onCompositionStart");
        it &&
          (Ao &&
            l.locale !== "ko" &&
            (ca || it !== "onCompositionStart"
              ? it === "onCompositionEnd" && ca && (et = bo())
              : ((cl = M),
                (Mi = "value" in cl ? cl.value : cl.textContent),
                (ca = !0))),
          (Z = Xu(T, it)),
          0 < Z.length &&
            ((it = new zo(it, t, null, l, M)),
            N.push({ event: it, listeners: Z }),
            et
              ? (it.data = et)
              : ((et = Co(l)), et !== null && (it.data = et)))),
          (et = Nm ? xm(t, l) : Um(t, l)) &&
            ((it = Xu(T, "onBeforeInput")),
            0 < it.length &&
              ((Z = new zo("onBeforeInput", "beforeinput", null, l, M)),
              N.push({ event: Z, listeners: it }),
              (Z.data = et))),
          _v(N, t, T, l, M);
      }
      dh(N, e);
    });
  }
  function zn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Xu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Za(t, l)),
          n != null && a.unshift(zn(t, n, u)),
          (n = Za(t, e)),
          n != null && a.push(zn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Mv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function vh(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var o = l,
        h = o.alternate,
        T = o.stateNode;
      if (((o = o.tag), h !== null && h === a)) break;
      (o !== 5 && o !== 26 && o !== 27) ||
        T === null ||
        ((h = T),
        n
          ? ((T = Za(l, u)), T != null && i.unshift(zn(l, T, h)))
          : n || ((T = Za(l, u)), T != null && i.push(zn(l, T, h)))),
        (l = l.return);
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Cv = /\r\n?/g,
    Dv = /\u0000|\uFFFD/g;
  function yh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Cv,
        `
`
      )
      .replace(Dv, "");
  }
  function gh(t, e) {
    return (e = yh(e)), yh(t) === e;
  }
  function yt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || na(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            na(t, "" + a);
        break;
      case "className":
        Kn(t, "class", a);
        break;
      case "tabIndex":
        Kn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Kn(t, l, a);
        break;
      case "style":
        go(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Kn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Jn("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (e !== "input" && yt(t, e, "name", n.name, n, null),
                yt(t, e, "formEncType", n.formEncType, n, null),
                yt(t, e, "formMethod", n.formMethod, n, null),
                yt(t, e, "formTarget", n.formTarget, n, null))
              : (yt(t, e, "encType", n.encType, n, null),
                yt(t, e, "method", n.method, n, null),
                yt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Jn("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Ge);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Jn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Vn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ye(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Vn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = nm.get(l) || l), Vn(t, l, a));
    }
  }
  function rf(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        go(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? na(t, a)
          : (typeof a == "number" || typeof a == "bigint") && na(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ge);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!co.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (u = t[Ft] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && t.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Vn(t, l, a);
          }
    }
  }
  function Kt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nt("error", t), nt("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  yt(t, e, u, i, l, null);
              }
          }
        n && yt(t, e, "srcSet", l.srcSet, l, null),
          a && yt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var o = (u = i = n = null),
          h = null,
          T = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  n = M;
                  break;
                case "type":
                  i = M;
                  break;
                case "checked":
                  h = M;
                  break;
                case "defaultChecked":
                  T = M;
                  break;
                case "value":
                  u = M;
                  break;
                case "defaultValue":
                  o = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null) throw Error(f(137, e));
                  break;
                default:
                  yt(t, e, a, M, l, null);
              }
          }
        ho(t, u, o, h, T, i, n, !1);
        return;
      case "select":
        nt("invalid", t), (a = i = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((o = l[n]), o != null))
            switch (n) {
              case "value":
                u = o;
                break;
              case "defaultValue":
                i = o;
                break;
              case "multiple":
                a = o;
              default:
                yt(t, e, n, o, l, null);
            }
        (e = u),
          (l = i),
          (t.multiple = !!a),
          e != null ? aa(t, !!a, e, !1) : l != null && aa(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), (u = n = a = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((o = l[i]), o != null))
            switch (i) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                n = o;
                break;
              case "children":
                u = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(f(91));
                break;
              default:
                yt(t, e, i, o, l, null);
            }
        vo(t, a, n, u);
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) &&
            ((a = l[h]), a != null) &&
            (h === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : yt(t, e, h, a, l, null));
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tn.length; a++) nt(Tn[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in l)
          if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                yt(t, e, T, a, l, null);
            }
        return;
      default:
        if (zi(e)) {
          for (M in l)
            l.hasOwnProperty(M) &&
              ((a = l[M]), a !== void 0 && rf(t, e, M, a, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((a = l[o]), a != null && yt(t, e, o, a, l, null));
  }
  function Nv(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          o = null,
          h = null,
          T = null,
          M = null;
        for (A in l) {
          var N = l[A];
          if (l.hasOwnProperty(A) && N != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = N;
              default:
                a.hasOwnProperty(A) || yt(t, e, A, null, a, N);
            }
        }
        for (var z in a) {
          var A = a[z];
          if (((N = l[z]), a.hasOwnProperty(z) && (A != null || N != null)))
            switch (z) {
              case "type":
                u = A;
                break;
              case "name":
                n = A;
                break;
              case "checked":
                T = A;
                break;
              case "defaultChecked":
                M = A;
                break;
              case "value":
                i = A;
                break;
              case "defaultValue":
                o = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(f(137, e));
                break;
              default:
                A !== N && yt(t, e, z, A, a, N);
            }
        }
        Ei(t, i, o, h, T, M, u, n);
        return;
      case "select":
        A = i = o = z = null;
        for (u in l)
          if (((h = l[u]), l.hasOwnProperty(u) && h != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                a.hasOwnProperty(u) || yt(t, e, u, null, a, h);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (u != null || h != null))
          )
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                o = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== h && yt(t, e, n, u, a, h);
            }
        (e = o),
          (l = i),
          (a = A),
          z != null
            ? aa(t, !!l, z, !1)
            : !!a != !!l &&
              (e != null ? aa(t, !!l, e, !0) : aa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = z = null;
        for (o in l)
          if (
            ((n = l[o]),
            l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(t, e, o, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                A = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && yt(t, e, i, n, a, u);
            }
        mo(t, z, A);
        return;
      case "option":
        for (var Y in l)
          (z = l[Y]),
            l.hasOwnProperty(Y) &&
              z != null &&
              !a.hasOwnProperty(Y) &&
              (Y === "selected" ? (t.selected = !1) : yt(t, e, Y, null, a, z));
        for (h in a)
          (z = a[h]),
            (A = l[h]),
            a.hasOwnProperty(h) &&
              z !== A &&
              (z != null || A != null) &&
              (h === "selected"
                ? (t.selected =
                    z && typeof z != "function" && typeof z != "symbol")
                : yt(t, e, h, z, a, A));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in l)
          (z = l[$]),
            l.hasOwnProperty($) &&
              z != null &&
              !a.hasOwnProperty($) &&
              yt(t, e, $, null, a, z);
        for (T in a)
          if (
            ((z = a[T]),
            (A = l[T]),
            a.hasOwnProperty(T) && z !== A && (z != null || A != null))
          )
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, e));
                break;
              default:
                yt(t, e, T, z, a, A);
            }
        return;
      default:
        if (zi(e)) {
          for (var gt in l)
            (z = l[gt]),
              l.hasOwnProperty(gt) &&
                z !== void 0 &&
                !a.hasOwnProperty(gt) &&
                rf(t, e, gt, void 0, a, z);
          for (M in a)
            (z = a[M]),
              (A = l[M]),
              !a.hasOwnProperty(M) ||
                z === A ||
                (z === void 0 && A === void 0) ||
                rf(t, e, M, z, a, A);
          return;
        }
    }
    for (var S in l)
      (z = l[S]),
        l.hasOwnProperty(S) &&
          z != null &&
          !a.hasOwnProperty(S) &&
          yt(t, e, S, null, a, z);
    for (N in a)
      (z = a[N]),
        (A = l[N]),
        !a.hasOwnProperty(N) ||
          z === A ||
          (z == null && A == null) ||
          yt(t, e, N, z, a, A);
  }
  function ph(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function xv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          o = n.duration;
        if (u && o && ph(i)) {
          for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a],
              T = h.startTime;
            if (T > o) break;
            var M = h.transferSize,
              N = h.initiatorType;
            M &&
              ph(N) &&
              ((h = h.responseEnd), (i += M * (h < o ? 1 : (o - T) / (h - T))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var sf = null,
    hf = null;
  function Qu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Sh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function df(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var mf = null;
  function Uv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === mf
        ? !1
        : ((mf = t), !0)
      : ((mf = null), !1);
  }
  var Eh = typeof setTimeout == "function" ? setTimeout : void 0,
    Hv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Th = typeof Promise == "function" ? Promise : void 0,
    jv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Th < "u"
        ? function (t) {
            return Th.resolve(null).then(t).catch(Bv);
          }
        : Eh;
  function Bv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function _l(t) {
    return t === "head";
  }
  function zh(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            t.removeChild(n), ja(e);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") _n(t.ownerDocument.documentElement);
        else if (l === "head") {
          (l = t.ownerDocument.head), _n(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              o = u.nodeName;
            u[Xa] ||
              o === "SCRIPT" ||
              o === "STYLE" ||
              (o === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i);
          }
        } else l === "body" && _n(t.ownerDocument.body);
      l = n;
    } while (l);
    ja(e);
  }
  function _h(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function vf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vf(l), Si(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function qv(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Xa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = ze(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Lv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ah(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function yf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function gf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Yv(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function ze(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var pf = null;
  function Rh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return ze(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Oh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Mh(t, e, l) {
    switch (((e = Qu(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function _n(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Si(t);
  }
  var _e = new Map(),
    Ch = new Set();
  function Zu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var ll = q.d;
  q.d = { f: Gv, r: Xv, D: Qv, C: Zv, L: Vv, m: Kv, X: Jv, S: wv, M: kv };
  function Gv() {
    var t = ll.f(),
      e = Hu();
    return t || e;
  }
  function Xv(t) {
    var e = ta(t);
    e !== null && e.tag === 5 && e.type === "form" ? wr(e) : ll.r(t);
  }
  var xa = typeof document > "u" ? null : document;
  function Dh(t, e, l) {
    var a = xa;
    if (a && typeof e == "string" && e) {
      var n = ye(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        Ch.has(n) ||
          (Ch.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Kt(e, "link", t),
            Lt(e),
            a.head.appendChild(e)));
    }
  }
  function Qv(t) {
    ll.D(t), Dh("dns-prefetch", t, null);
  }
  function Zv(t, e) {
    ll.C(t, e), Dh("preconnect", t, e);
  }
  function Vv(t, e, l) {
    ll.L(t, e, l);
    var a = xa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ye(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ye(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + ye(l.imageSizes) + '"]'))
        : (n += '[href="' + ye(t) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = Ua(t);
          break;
        case "script":
          u = Ha(t);
      }
      _e.has(u) ||
        ((t = R(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        _e.set(u, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(An(u))) ||
          (e === "script" && a.querySelector(Rn(u))) ||
          ((e = a.createElement("link")),
          Kt(e, "link", t),
          Lt(e),
          a.head.appendChild(e)));
    }
  }
  function Kv(t, e) {
    ll.m(t, e);
    var l = xa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ye(a) + '"][href="' + ye(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ha(t);
      }
      if (
        !_e.has(u) &&
        ((t = R({ rel: "modulepreload", href: t }, e)),
        _e.set(u, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Rn(u))) return;
        }
        (a = l.createElement("link")),
          Kt(a, "link", t),
          Lt(a),
          l.head.appendChild(a);
      }
    }
  }
  function wv(t, e, l) {
    ll.S(t, e, l);
    var a = xa;
    if (a && t) {
      var n = ea(a).hoistableStyles,
        u = Ua(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var o = { loading: 0, preload: null };
        if ((i = a.querySelector(An(u)))) o.loading = 5;
        else {
          (t = R({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = _e.get(u)) && Sf(t, l);
          var h = (i = a.createElement("link"));
          Lt(h),
            Kt(h, "link", t),
            (h._p = new Promise(function (T, M) {
              (h.onload = T), (h.onerror = M);
            })),
            h.addEventListener("load", function () {
              o.loading |= 1;
            }),
            h.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Vu(i, e, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: o }),
          n.set(u, i);
      }
    }
  }
  function Jv(t, e) {
    ll.X(t, e);
    var l = xa;
    if (l && t) {
      var a = ea(l).hoistableScripts,
        n = Ha(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Rn(n))),
        u ||
          ((t = R({ src: t, async: !0 }, e)),
          (e = _e.get(n)) && bf(t, e),
          (u = l.createElement("script")),
          Lt(u),
          Kt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function kv(t, e) {
    ll.M(t, e);
    var l = xa;
    if (l && t) {
      var a = ea(l).hoistableScripts,
        n = Ha(t),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Rn(n))),
        u ||
          ((t = R({ src: t, async: !0, type: "module" }, e)),
          (e = _e.get(n)) && bf(t, e),
          (u = l.createElement("script")),
          Lt(u),
          Kt(u, "link", t),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Nh(t, e, l, a) {
    var n = (n = lt.current) ? Zu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ua(l.href)),
            (l = ea(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ua(l.href);
          var u = ea(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(An(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              _e.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                _e.set(t, l),
                u || $v(n, t, l, i.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ha(l)),
              (l = ea(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Ua(t) {
    return 'href="' + ye(t) + '"';
  }
  function An(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function xh(t) {
    return R({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function $v(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Kt(e, "link", l),
        Lt(e),
        t.head.appendChild(e));
  }
  function Ha(t) {
    return '[src="' + ye(t) + '"]';
  }
  function Rn(t) {
    return "script[async]" + t;
  }
  function Uh(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ye(l.href) + '"]');
          if (a) return (e.instance = a), Lt(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Lt(a),
            Kt(a, "style", n),
            Vu(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Ua(l.href);
          var u = t.querySelector(An(n));
          if (u) return (e.state.loading |= 4), (e.instance = u), Lt(u), u;
          (a = xh(l)),
            (n = _e.get(n)) && Sf(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            Lt(u);
          var i = u;
          return (
            (i._p = new Promise(function (o, h) {
              (i.onload = o), (i.onerror = h);
            })),
            Kt(u, "link", a),
            (e.state.loading |= 4),
            Vu(u, l.precedence, t),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Ha(l.src)),
            (n = t.querySelector(Rn(u)))
              ? ((e.instance = n), Lt(n), n)
              : ((a = l),
                (n = _e.get(u)) && ((a = R({}, l)), bf(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Lt(n),
                Kt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Vu(a, l.precedence, t));
    return e.instance;
  }
  function Vu(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var o = a[i];
      if (o.dataset.precedence === e) u = o;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function bf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ku = null;
  function Hh(t, e, l) {
    if (Ku === null) {
      var a = new Map(),
        n = (Ku = new Map());
      n.set(l, a);
    } else (n = Ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Xa] ||
          u[Xt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var o = a.get(i);
        o ? o.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function jh(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Wv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Bh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Fv(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Ua(a.href),
          u = e.querySelector(An(n));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = wu.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = u),
            Lt(u);
          return;
        }
        (u = e.ownerDocument || e),
          (a = xh(a)),
          (n = _e.get(n)) && Sf(a, n),
          (u = u.createElement("link")),
          Lt(u);
        var i = u;
        (i._p = new Promise(function (o, h) {
          (i.onload = o), (i.onerror = h);
        })),
          Kt(u, "link", a),
          (l.instance = u);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = wu.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l));
    }
  }
  var Ef = 0;
  function Iv(t, e) {
    return (
      t.stylesheets && t.count === 0 && ku(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && ku(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Ef === 0 && (Ef = 62500 * xv());
            var n = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && ku(t, t.stylesheets), t.unsuspend))
              ) {
                var u = t.unsuspend;
                (t.unsuspend = null), u();
              }
            }, (t.imgBytes > Ef ? 50 : 800) + e);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function wu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Ju = null;
  function ku(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ju = new Map()),
        e.forEach(Pv, t),
        (Ju = null),
        wu.call(t));
  }
  function Pv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ju.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Ju.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = wu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var On = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function ty(t, e, l, a, n, u, i, o, h) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = vi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vi(0)),
      (this.hiddenUpdates = vi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function qh(t, e, l, a, n, u, i, o, h, T, M, N) {
    return (
      (t = new ty(t, e, l, i, h, T, M, N, o)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = fe(3, null, null, e)),
      (t.current = u),
      (u.stateNode = t),
      (e = Pi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ac(u),
      t
    );
  }
  function Lh(t) {
    return t ? ((t = sa), t) : sa;
  }
  function Yh(t, e, l, a, n, u) {
    (n = Lh(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = dl(e)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = ml(t, a, e)),
      l !== null && (ae(l, t, e), nn(l, t, e));
  }
  function Gh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Tf(t, e) {
    Gh(t, e), (t = t.alternate) && Gh(t, e);
  }
  function Xh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ql(t, 67108864);
      e !== null && ae(e, t, 67108864), Tf(t, 67108864);
    }
  }
  function Qh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = de();
      e = yi(e);
      var l = ql(t, e);
      l !== null && ae(l, t, e), Tf(t, e);
    }
  }
  var $u = !0;
  function ey(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = q.p;
    try {
      (q.p = 2), zf(t, e, l, a);
    } finally {
      (q.p = u), (C.T = n);
    }
  }
  function ly(t, e, l, a) {
    var n = C.T;
    C.T = null;
    var u = q.p;
    try {
      (q.p = 8), zf(t, e, l, a);
    } finally {
      (q.p = u), (C.T = n);
    }
  }
  function zf(t, e, l, a) {
    if ($u) {
      var n = _f(a);
      if (n === null) of(t, e, a, Wu, l), Vh(t, a);
      else if (ny(n, t, e, l, a)) a.stopPropagation();
      else if ((Vh(t, a), e & 4 && -1 < ay.indexOf(t))) {
        for (; n !== null; ) {
          var u = ta(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = xl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var h = 1 << (31 - ie(i));
                      (o.entanglements[1] |= h), (i &= ~h);
                    }
                    Be(u), (rt & 6) === 0 && ((xu = ne() + 500), En(0));
                  }
                }
                break;
              case 31:
              case 13:
                (o = ql(u, 2)), o !== null && ae(o, u, 2), Hu(), Tf(u, 2);
            }
          if (((u = _f(a)), u === null && of(t, e, a, Wu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else of(t, e, a, null, l);
    }
  }
  function _f(t) {
    return (t = Ai(t)), Af(t);
  }
  var Wu = null;
  function Af(t) {
    if (((Wu = null), (t = Pl(t)), t !== null)) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = _(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Wu = t), null;
  }
  function Zh(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qd()) {
          case Wf:
            return 2;
          case Ff:
            return 8;
          case Yn:
          case Zd:
            return 32;
          case If:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Rf = !1,
    Al = null,
    Rl = null,
    Ol = null,
    Mn = new Map(),
    Cn = new Map(),
    Ml = [],
    ay =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Vh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        Rl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ol = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(e.pointerId);
    }
  }
  function Dn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = ta(e)), e !== null && Xh(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function ny(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (Al = Dn(Al, t, e, l, a, n)), !0;
      case "dragenter":
        return (Rl = Dn(Rl, t, e, l, a, n)), !0;
      case "mouseover":
        return (Ol = Dn(Ol, t, e, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Mn.set(u, Dn(Mn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), Cn.set(u, Dn(Cn.get(u) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function Kh(t) {
    var e = Pl(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = p(l)), e !== null)) {
            (t.blockedOn = e),
              no(t.priority, function () {
                Qh(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = _(l)), e !== null)) {
            (t.blockedOn = e),
              no(t.priority, function () {
                Qh(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Fu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = _f(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (_i = a), l.target.dispatchEvent(a), (_i = null);
      } else return (e = ta(l)), e !== null && Xh(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function wh(t, e, l) {
    Fu(t) && l.delete(e);
  }
  function uy() {
    (Rf = !1),
      Al !== null && Fu(Al) && (Al = null),
      Rl !== null && Fu(Rl) && (Rl = null),
      Ol !== null && Fu(Ol) && (Ol = null),
      Mn.forEach(wh),
      Cn.forEach(wh);
  }
  function Iu(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Rf ||
        ((Rf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, uy)));
  }
  var Pu = null;
  function Jh(t) {
    Pu !== t &&
      ((Pu = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Pu === t && (Pu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (Af(a || l) === null) continue;
            break;
          }
          var u = ta(l);
          u !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function ja(t) {
    function e(h) {
      return Iu(h, t);
    }
    Al !== null && Iu(Al, t),
      Rl !== null && Iu(Rl, t),
      Ol !== null && Iu(Ol, t),
      Mn.forEach(e),
      Cn.forEach(e);
    for (var l = 0; l < Ml.length; l++) {
      var a = Ml[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Ml.length && ((l = Ml[0]), l.blockedOn === null); )
      Kh(l), l.blockedOn === null && Ml.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[Ft] || null;
        if (typeof u == "function") i || Jh(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Ft] || null))) o = i.formAction;
            else if (Af(n) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
            Jh(l);
        }
      }
  }
  function kh() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function Of(t) {
    this._internalRoot = t;
  }
  (ti.prototype.render = Of.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = de();
      Yh(l, a, t, e, null, null);
    }),
    (ti.prototype.unmount = Of.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Yh(t.current, 2, null, t, null, null), Hu(), (e[Il] = null);
        }
      });
  function ti(t) {
    this._internalRoot = t;
  }
  ti.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ao();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Ml.length && e !== 0 && e < Ml[l].priority; l++);
      Ml.splice(l, 0, t), l === 0 && Kh(t);
    }
  };
  var $h = r.version;
  if ($h !== "19.2.3") throw Error(f(527, $h, "19.2.3"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? x(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var iy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ei.isDisabled && ei.supportsFiber)
      try {
        (La = ei.inject(iy)), (ue = ei);
      } catch {}
  }
  return (
    (xn.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        n = ls,
        u = as,
        i = ns;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = qh(t, 1, !1, null, null, l, a, null, n, u, i, kh)),
        (t[Il] = e.current),
        ff(t),
        new Of(e)
      );
    }),
    (xn.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        n = "",
        u = ls,
        i = as,
        o = ns,
        h = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.formState !== void 0 && (h = l.formState)),
        (e = qh(t, 1, !0, e, l ?? null, a, n, h, u, i, o, kh)),
        (e.context = Lh(null)),
        (l = e.current),
        (a = de()),
        (a = yi(a)),
        (n = dl(a)),
        (n.callback = null),
        ml(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ga(e, l),
        Be(e),
        (t[Il] = e.current),
        ff(t),
        new ti(e)
      );
    }),
    (xn.version = "19.2.3"),
    xn
  );
}
var ud;
function yy() {
  if (ud) return Df.exports;
  ud = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (r) {
        console.error(r);
      }
  }
  return c(), (Df.exports = vy()), Df.exports;
}
var gy = yy();
const py = "_topbar_l5h41_1",
  Sy = "_headerContainer_l5h41_11",
  by = "_brand_l5h41_29",
  Ey = "_email_l5h41_43",
  li = { topbar: py, headerContainer: Sy, brand: by, email: Ey };
function Ty() {
  return H.jsx("header", {
    className: li.topbar,
    children: H.jsxs("div", {
      className: li.headerContainer,
      children: [
        H.jsx("div", { className: li.brand, children: "Aden Grand Library" }),
        H.jsx("p", {
          className: li.email,
          children: "info@adengrandlibrary.com",
        }),
      ],
    }),
  });
}
const zy = "_banner_1dq9d_1",
  _y = "_promo_1dq9d_27",
  id = { banner: zy, promo: _y };
function Ay() {
  return H.jsx("div", {
    className: id.banner,
    children: H.jsx("div", {
      className: id.promo,
      children: "Library of Geniuses",
    }),
  });
}
const Ry = "_content_vwfxn_1",
  Oy = { content: Ry },
  My = "_searchTerms_bs3qg_9",
  Cy = { searchTerms: My },
  Dy = [
    "Accounting",
    "Anthropology",
    "Architecture",
    "Art",
    "Biography & Autobiography",
    "Biology",
    "Business & Economics",
    "Chemistry",
    "Communication Studies",
    "Computers",
    "Computers / Artificial Intelligence",
    "Computers / Cybersecurity",
    "Computers / Data Science",
    "Computers / Hardware",
    "Computers / Programming",
    "Computers / Software Development",
    "Cooking",
    "Cultural Studies",
    "Design",
    "Economics",
    "Education",
    "Education / Teaching",
    "Electronics",
    "Embedded Systems",
    "Engineering",
    "Entrepreneurship",
    "Film",
    "Finance",
    "Fiction",
    "Food",
    "Gardening",
    "Geography",
    "Healths",
    "History",
    "Hobbies",
    "Investing",
    "Juvenile Fiction",
    "Juvenile Nonfiction",
    "Language Learning",
    "Law",
    "Leadership",
    "Linguistics",
    "Management",
    "Marketing",
    "Mathematics",
    "Media Studies",
    "Medical",
    "Mental Health",
    "Music",
    "Nonfiction",
    "Nursing",
    "Performing Arts",
    "Personal Development",
    "Philosophy",
    "Photography",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Health",
    "Reference",
    "Religion",
    "Robotics",
    "Science",
    "Self-Help",
    "Sociology",
    "Sports & Recreation",
    "Study Aids",
    "Technology",
    "Travel",
  ],
  Ny = ({ setSearchQuery: c, setCategory: r }) => {
    function s(d) {
      c(d.target.value);
    }
    function f(d) {
      r(d.target.value);
    }
    return H.jsxs("div", {
      className: Cy.searchTerms,
      children: [
        H.jsx("h3", { children: "What are you looking for?" }),
        H.jsx("br", {}),
        H.jsx("label", { htmlFor: "search", children: "Search" }),
        H.jsx("input", {
          type: "text",
          id: "search",
          name: "search",
          onChange: s,
        }),
        H.jsx("br", {}),
        H.jsx("label", { htmlFor: "categories", children: "Category" }),
        H.jsxs("select", {
          id: "categories",
          name: "categories",
          onChange: f,
          children: [
            H.jsx("option", { value: "" }),
            Dy.map((d) => H.jsx("option", { value: d, children: d }, d)),
          ],
        }),
      ],
    });
  },
  xy = O.memo(Ny),
  Uy = "_bookList_t8k3k_1",
  Hy = "_shelf_t8k3k_11",
  jy = "_shelfNoContent_t8k3k_29",
  By = "_book_t8k3k_1",
  qy = "_bookDetails_t8k3k_87",
  Ly = "_thumbnail_t8k3k_95",
  Yy = "_shelfMessage_t8k3k_123",
  Gy = "_pagination_t8k3k_131",
  Xy = "_elementsPerPage_t8k3k_151",
  $t = {
    bookList: Uy,
    shelf: Hy,
    shelfNoContent: jy,
    book: By,
    bookDetails: qy,
    thumbnail: Ly,
    shelfMessage: Yy,
    pagination: Gy,
    elementsPerPage: Xy,
  };
var cd = "popstate";
function Qy(c = {}) {
  function r(d, m) {
    let {
      pathname: p = "/",
      search: _ = "",
      hash: b = "",
    } = Wl(d.location.hash.substring(1));
    return (
      !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p),
      Lf(
        "",
        { pathname: p, search: _, hash: b },
        (m.state && m.state.usr) || null,
        (m.state && m.state.key) || "default"
      )
    );
  }
  function s(d, m) {
    let p = d.document.querySelector("base"),
      _ = "";
    if (p && p.getAttribute("href")) {
      let b = d.location.href,
        g = b.indexOf("#");
      _ = g === -1 ? b : b.slice(0, g);
    }
    return _ + "#" + (typeof m == "string" ? m : Hn(m));
  }
  function f(d, m) {
    Ae(
      d.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        m
      )})`
    );
  }
  return Vy(r, s, f, c);
}
function At(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function Ae(c, r) {
  if (!c) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Zy() {
  return Math.random().toString(36).substring(2, 10);
}
function fd(c, r) {
  return { usr: c.state, key: c.key, idx: r };
}
function Lf(c, r, s = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Wl(r) : r),
    state: s,
    key: (r && r.key) || f || Zy(),
  };
}
function Hn({ pathname: c = "/", search: r = "", hash: s = "" }) {
  return (
    r && r !== "?" && (c += r.charAt(0) === "?" ? r : "?" + r),
    s && s !== "#" && (c += s.charAt(0) === "#" ? s : "#" + s),
    c
  );
}
function Wl(c) {
  let r = {};
  if (c) {
    let s = c.indexOf("#");
    s >= 0 && ((r.hash = c.substring(s)), (c = c.substring(0, s)));
    let f = c.indexOf("?");
    f >= 0 && ((r.search = c.substring(f)), (c = c.substring(0, f))),
      c && (r.pathname = c);
  }
  return r;
}
function Vy(c, r, s, f = {}) {
  let { window: d = document.defaultView, v5Compat: m = !1 } = f,
    p = d.history,
    _ = "POP",
    b = null,
    g = x();
  g == null && ((g = 0), p.replaceState({ ...p.state, idx: g }, ""));
  function x() {
    return (p.state || { idx: null }).idx;
  }
  function R() {
    _ = "POP";
    let Q = x(),
      j = Q == null ? null : Q - g;
    (g = Q), b && b({ action: _, location: k.location, delta: j });
  }
  function B(Q, j) {
    _ = "PUSH";
    let K = Lf(k.location, Q, j);
    s && s(K, Q), (g = x() + 1);
    let J = fd(K, g),
      bt = k.createHref(K);
    try {
      p.pushState(J, "", bt);
    } catch (Et) {
      if (Et instanceof DOMException && Et.name === "DataCloneError") throw Et;
      d.location.assign(bt);
    }
    m && b && b({ action: _, location: k.location, delta: 1 });
  }
  function G(Q, j) {
    _ = "REPLACE";
    let K = Lf(k.location, Q, j);
    s && s(K, Q), (g = x());
    let J = fd(K, g),
      bt = k.createHref(K);
    p.replaceState(J, "", bt),
      m && b && b({ action: _, location: k.location, delta: 0 });
  }
  function V(Q) {
    return Ky(Q);
  }
  let k = {
    get action() {
      return _;
    },
    get location() {
      return c(d, p);
    },
    listen(Q) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(cd, R),
        (b = Q),
        () => {
          d.removeEventListener(cd, R), (b = null);
        }
      );
    },
    createHref(Q) {
      return r(d, Q);
    },
    createURL: V,
    encodeLocation(Q) {
      let j = V(Q);
      return { pathname: j.pathname, search: j.search, hash: j.hash };
    },
    push: B,
    replace: G,
    go(Q) {
      return p.go(Q);
    },
  };
  return k;
}
function Ky(c, r = !1) {
  let s = "http://localhost";
  typeof window < "u" &&
    (s =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    At(s, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Hn(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !r && f.startsWith("//") && (f = s + f),
    new URL(f, s)
  );
}
function gd(c, r, s = "/") {
  return wy(c, r, s, !1);
}
function wy(c, r, s, f) {
  let d = typeof r == "string" ? Wl(r) : r,
    m = nl(d.pathname || "/", s);
  if (m == null) return null;
  let p = pd(c);
  Jy(p);
  let _ = null;
  for (let b = 0; _ == null && b < p.length; ++b) {
    let g = n0(m);
    _ = l0(p[b], g, f);
  }
  return _;
}
function pd(c, r = [], s = [], f = "", d = !1) {
  let m = (p, _, b = d, g) => {
    let x = {
      relativePath: g === void 0 ? p.path || "" : g,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: _,
      route: p,
    };
    if (x.relativePath.startsWith("/")) {
      if (!x.relativePath.startsWith(f) && b) return;
      At(
        x.relativePath.startsWith(f),
        `Absolute route path "${x.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (x.relativePath = x.relativePath.slice(f.length));
    }
    let R = al([f, x.relativePath]),
      B = s.concat(x);
    p.children &&
      p.children.length > 0 &&
      (At(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
      ),
      pd(p.children, r, B, R, b)),
      !(p.path == null && !p.index) &&
        r.push({ path: R, score: t0(R, p.index), routesMeta: B });
  };
  return (
    c.forEach((p, _) => {
      if (p.path === "" || !p.path?.includes("?")) m(p, _);
      else for (let b of Sd(p.path)) m(p, _, !0, b);
    }),
    r
  );
}
function Sd(c) {
  let r = c.split("/");
  if (r.length === 0) return [];
  let [s, ...f] = r,
    d = s.endsWith("?"),
    m = s.replace(/\?$/, "");
  if (f.length === 0) return d ? [m, ""] : [m];
  let p = Sd(f.join("/")),
    _ = [];
  return (
    _.push(...p.map((b) => (b === "" ? m : [m, b].join("/")))),
    d && _.push(...p),
    _.map((b) => (c.startsWith("/") && b === "" ? "/" : b))
  );
}
function Jy(c) {
  c.sort((r, s) =>
    r.score !== s.score
      ? s.score - r.score
      : e0(
          r.routesMeta.map((f) => f.childrenIndex),
          s.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var ky = /^:[\w-]+$/,
  $y = 3,
  Wy = 2,
  Fy = 1,
  Iy = 10,
  Py = -2,
  od = (c) => c === "*";
function t0(c, r) {
  let s = c.split("/"),
    f = s.length;
  return (
    s.some(od) && (f += Py),
    r && (f += Wy),
    s
      .filter((d) => !od(d))
      .reduce((d, m) => d + (ky.test(m) ? $y : m === "" ? Fy : Iy), f)
  );
}
function e0(c, r) {
  return c.length === r.length && c.slice(0, -1).every((f, d) => f === r[d])
    ? c[c.length - 1] - r[r.length - 1]
    : 0;
}
function l0(c, r, s = !1) {
  let { routesMeta: f } = c,
    d = {},
    m = "/",
    p = [];
  for (let _ = 0; _ < f.length; ++_) {
    let b = f[_],
      g = _ === f.length - 1,
      x = m === "/" ? r : r.slice(m.length) || "/",
      R = ii(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: g },
        x
      ),
      B = b.route;
    if (
      (!R &&
        g &&
        s &&
        !f[f.length - 1].route.index &&
        (R = ii(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          x
        )),
      !R)
    )
      return null;
    Object.assign(d, R.params),
      p.push({
        params: d,
        pathname: al([m, R.pathname]),
        pathnameBase: f0(al([m, R.pathnameBase])),
        route: B,
      }),
      R.pathnameBase !== "/" && (m = al([m, R.pathnameBase]));
  }
  return p;
}
function ii(c, r) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [s, f] = a0(c.path, c.caseSensitive, c.end),
    d = r.match(s);
  if (!d) return null;
  let m = d[0],
    p = m.replace(/(.)\/+$/, "$1"),
    _ = d.slice(1);
  return {
    params: f.reduce((g, { paramName: x, isOptional: R }, B) => {
      if (x === "*") {
        let V = _[B] || "";
        p = m.slice(0, m.length - V.length).replace(/(.)\/+$/, "$1");
      }
      const G = _[B];
      return (
        R && !G ? (g[x] = void 0) : (g[x] = (G || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: m,
    pathnameBase: p,
    pattern: c,
  };
}
function a0(c, r = !1, s = !0) {
  Ae(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    d =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, _, b) => (
            f.push({ paramName: _, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (d += "\\/*$")
      : c !== "" && c !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, r ? void 0 : "i"), f]
  );
}
function n0(c) {
  try {
    return c
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Ae(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      c
    );
  }
}
function nl(c, r) {
  if (r === "/") return c;
  if (!c.toLowerCase().startsWith(r.toLowerCase())) return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length,
    f = c.charAt(s);
  return f && f !== "/" ? null : c.slice(s) || "/";
}
var bd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  u0 = (c) => bd.test(c);
function i0(c, r = "/") {
  let {
      pathname: s,
      search: f = "",
      hash: d = "",
    } = typeof c == "string" ? Wl(c) : c,
    m;
  if (s)
    if (u0(s)) m = s;
    else {
      if (s.includes("//")) {
        let p = s;
        (s = s.replace(/\/\/+/g, "/")),
          Ae(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${p} -> ${s}`
          );
      }
      s.startsWith("/") ? (m = rd(s.substring(1), "/")) : (m = rd(s, r));
    }
  else m = r;
  return { pathname: m, search: o0(f), hash: r0(d) };
}
function rd(c, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((d) => {
      d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Hf(c, r, s, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function c0(c) {
  return c.filter(
    (r, s) => s === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function Ed(c) {
  let r = c0(c);
  return r.map((s, f) => (f === r.length - 1 ? s.pathname : s.pathnameBase));
}
function Td(c, r, s, f = !1) {
  let d;
  typeof c == "string"
    ? (d = Wl(c))
    : ((d = { ...c }),
      At(
        !d.pathname || !d.pathname.includes("?"),
        Hf("?", "pathname", "search", d)
      ),
      At(
        !d.pathname || !d.pathname.includes("#"),
        Hf("#", "pathname", "hash", d)
      ),
      At(!d.search || !d.search.includes("#"), Hf("#", "search", "hash", d)));
  let m = c === "" || d.pathname === "",
    p = m ? "/" : d.pathname,
    _;
  if (p == null) _ = s;
  else {
    let R = r.length - 1;
    if (!f && p.startsWith("..")) {
      let B = p.split("/");
      for (; B[0] === ".."; ) B.shift(), (R -= 1);
      d.pathname = B.join("/");
    }
    _ = R >= 0 ? r[R] : "/";
  }
  let b = i0(d, _),
    g = p && p !== "/" && p.endsWith("/"),
    x = (m || p === ".") && s.endsWith("/");
  return !b.pathname.endsWith("/") && (g || x) && (b.pathname += "/"), b;
}
var al = (c) => c.join("/").replace(/\/\/+/g, "/"),
  f0 = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  o0 = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  r0 = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c),
  s0 = class {
    constructor(c, r, s, f = !1) {
      (this.status = c),
        (this.statusText = r || ""),
        (this.internal = f),
        s instanceof Error
          ? ((this.data = s.toString()), (this.error = s))
          : (this.data = s);
    }
  };
function h0(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
function d0(c) {
  return (
    c
      .map((r) => r.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var zd =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function _d(c, r) {
  let s = c;
  if (typeof s != "string" || !bd.test(s))
    return { absoluteURL: void 0, isExternal: !1, to: s };
  let f = s,
    d = !1;
  if (zd)
    try {
      let m = new URL(window.location.href),
        p = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
        _ = nl(p.pathname, r);
      p.origin === m.origin && _ != null
        ? (s = _ + p.search + p.hash)
        : (d = !0);
    } catch {
      Ae(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: f, isExternal: d, to: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Ad = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ad);
var m0 = ["GET", ...Ad];
new Set(m0);
var Ba = O.createContext(null);
Ba.displayName = "DataRouter";
var ci = O.createContext(null);
ci.displayName = "DataRouterState";
var v0 = O.createContext(!1),
  Rd = O.createContext({ isTransitioning: !1 });
Rd.displayName = "ViewTransition";
var y0 = O.createContext(new Map());
y0.displayName = "Fetchers";
var g0 = O.createContext(null);
g0.displayName = "Await";
var Re = O.createContext(null);
Re.displayName = "Navigation";
var jn = O.createContext(null);
jn.displayName = "Location";
var qe = O.createContext({ outlet: null, matches: [], isDataRoute: !1 });
qe.displayName = "Route";
var Qf = O.createContext(null);
Qf.displayName = "RouteError";
var Od = "REACT_ROUTER_ERROR",
  p0 = "REDIRECT",
  S0 = "ROUTE_ERROR_RESPONSE";
function b0(c) {
  if (c.startsWith(`${Od}:${p0}:{`))
    try {
      let r = JSON.parse(c.slice(28));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string" &&
        typeof r.location == "string" &&
        typeof r.reloadDocument == "boolean" &&
        typeof r.replace == "boolean"
      )
        return r;
    } catch {}
}
function E0(c) {
  if (c.startsWith(`${Od}:${S0}:{`))
    try {
      let r = JSON.parse(c.slice(40));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string"
      )
        return new s0(r.status, r.statusText, r.data);
    } catch {}
}
function T0(c, { relative: r } = {}) {
  At(
    Bn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: f } = O.useContext(Re),
    { hash: d, pathname: m, search: p } = qn(c, { relative: r }),
    _ = m;
  return (
    s !== "/" && (_ = m === "/" ? s : al([s, m])),
    f.createHref({ pathname: _, search: p, hash: d })
  );
}
function Bn() {
  return O.useContext(jn) != null;
}
function Fl() {
  return (
    At(
      Bn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    O.useContext(jn).location
  );
}
var Md =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Cd(c) {
  O.useContext(Re).static || O.useLayoutEffect(c);
}
function z0() {
  let { isDataRoute: c } = O.useContext(qe);
  return c ? q0() : _0();
}
function _0() {
  At(
    Bn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = O.useContext(Ba),
    { basename: r, navigator: s } = O.useContext(Re),
    { matches: f } = O.useContext(qe),
    { pathname: d } = Fl(),
    m = JSON.stringify(Ed(f)),
    p = O.useRef(!1);
  return (
    Cd(() => {
      p.current = !0;
    }),
    O.useCallback(
      (b, g = {}) => {
        if ((Ae(p.current, Md), !p.current)) return;
        if (typeof b == "number") {
          s.go(b);
          return;
        }
        let x = Td(b, JSON.parse(m), d, g.relative === "path");
        c == null &&
          r !== "/" &&
          (x.pathname = x.pathname === "/" ? r : al([r, x.pathname])),
          (g.replace ? s.replace : s.push)(x, g.state, g);
      },
      [r, s, m, d, c]
    )
  );
}
O.createContext(null);
function A0() {
  let { matches: c } = O.useContext(qe),
    r = c[c.length - 1];
  return r ? r.params : {};
}
function qn(c, { relative: r } = {}) {
  let { matches: s } = O.useContext(qe),
    { pathname: f } = Fl(),
    d = JSON.stringify(Ed(s));
  return O.useMemo(() => Td(c, JSON.parse(d), f, r === "path"), [c, d, f, r]);
}
function R0(c, r) {
  return Dd(c, r);
}
function Dd(c, r, s, f, d) {
  At(
    Bn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: m } = O.useContext(Re),
    { matches: p } = O.useContext(qe),
    _ = p[p.length - 1],
    b = _ ? _.params : {},
    g = _ ? _.pathname : "/",
    x = _ ? _.pathnameBase : "/",
    R = _ && _.route;
  {
    let K = (R && R.path) || "";
    xd(
      g,
      !R || K.endsWith("*") || K.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${
        K === "/" ? "*" : `${K}/*`
      }">.`
    );
  }
  let B = Fl(),
    G;
  if (r) {
    let K = typeof r == "string" ? Wl(r) : r;
    At(
      x === "/" || K.pathname?.startsWith(x),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${K.pathname}" was given in the \`location\` prop.`
    ),
      (G = K);
  } else G = B;
  let V = G.pathname || "/",
    k = V;
  if (x !== "/") {
    let K = x.replace(/^\//, "").split("/");
    k = "/" + V.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let Q = gd(c, { pathname: k });
  Ae(
    R || Q != null,
    `No routes matched location "${G.pathname}${G.search}${G.hash}" `
  ),
    Ae(
      Q == null ||
        Q[Q.length - 1].route.element !== void 0 ||
        Q[Q.length - 1].route.Component !== void 0 ||
        Q[Q.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let j = N0(
    Q &&
      Q.map((K) =>
        Object.assign({}, K, {
          params: Object.assign({}, b, K.params),
          pathname: al([
            x,
            m.encodeLocation
              ? m.encodeLocation(
                  K.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                ).pathname
              : K.pathname,
          ]),
          pathnameBase:
            K.pathnameBase === "/"
              ? x
              : al([
                  x,
                  m.encodeLocation
                    ? m.encodeLocation(
                        K.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : K.pathnameBase,
                ]),
        })
      ),
    p,
    s,
    f,
    d
  );
  return r && j
    ? O.createElement(
        jn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...G,
            },
            navigationType: "POP",
          },
        },
        j
      )
    : j;
}
function O0() {
  let c = B0(),
    r = h0(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
      ? c.message
      : JSON.stringify(c),
    s = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    m = { padding: "2px 4px", backgroundColor: f },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (p = O.createElement(
      O.Fragment,
      null,
      O.createElement("p", null, "💿 Hey developer 👋"),
      O.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        O.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        O.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    O.createElement(
      O.Fragment,
      null,
      O.createElement("h2", null, "Unexpected Application Error!"),
      O.createElement("h3", { style: { fontStyle: "italic" } }, r),
      s ? O.createElement("pre", { style: d }, s) : null,
      p
    )
  );
}
var M0 = O.createElement(O0, null),
  Nd = class extends O.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, r) {
      return r.location !== c.location ||
        (r.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : r.error,
            location: r.location,
            revalidation: c.revalidation || r.revalidation,
          };
    }
    componentDidCatch(c, r) {
      this.props.onError
        ? this.props.onError(c, r)
        : console.error(
            "React Router caught the following error during render",
            c
          );
    }
    render() {
      let c = this.state.error;
      if (
        this.context &&
        typeof c == "object" &&
        c &&
        "digest" in c &&
        typeof c.digest == "string"
      ) {
        const s = E0(c.digest);
        s && (c = s);
      }
      let r =
        c !== void 0
          ? O.createElement(
              qe.Provider,
              { value: this.props.routeContext },
              O.createElement(Qf.Provider, {
                value: c,
                children: this.props.component,
              })
            )
          : this.props.children;
      return this.context ? O.createElement(C0, { error: c }, r) : r;
    }
  };
Nd.contextType = v0;
var jf = new WeakMap();
function C0({ children: c, error: r }) {
  let { basename: s } = O.useContext(Re);
  if (
    typeof r == "object" &&
    r &&
    "digest" in r &&
    typeof r.digest == "string"
  ) {
    let f = b0(r.digest);
    if (f) {
      let d = jf.get(r);
      if (d) throw d;
      let m = _d(f.location, s);
      if (zd && !jf.get(r))
        if (m.isExternal || f.reloadDocument)
          window.location.href = m.absoluteURL || m.to;
        else {
          const p = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(m.to, {
              replace: f.replace,
            })
          );
          throw (jf.set(r, p), p);
        }
      return O.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${m.absoluteURL || m.to}`,
      });
    }
  }
  return c;
}
function D0({ routeContext: c, match: r, children: s }) {
  let f = O.useContext(Ba);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = r.route.id),
    O.createElement(qe.Provider, { value: c }, s)
  );
}
function N0(c, r = [], s = null, f = null, d = null) {
  if (c == null) {
    if (!s) return null;
    if (s.errors) c = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      c = s.matches;
    else return null;
  }
  let m = c,
    p = s?.errors;
  if (p != null) {
    let x = m.findIndex((R) => R.route.id && p?.[R.route.id] !== void 0);
    At(
      x >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ),
      (m = m.slice(0, Math.min(m.length, x + 1)));
  }
  let _ = !1,
    b = -1;
  if (s)
    for (let x = 0; x < m.length; x++) {
      let R = m[x];
      if (
        ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (b = x),
        R.route.id)
      ) {
        let { loaderData: B, errors: G } = s,
          V =
            R.route.loader &&
            !B.hasOwnProperty(R.route.id) &&
            (!G || G[R.route.id] === void 0);
        if (R.route.lazy || V) {
          (_ = !0), b >= 0 ? (m = m.slice(0, b + 1)) : (m = [m[0]]);
          break;
        }
      }
    }
  let g =
    s && f
      ? (x, R) => {
          f(x, {
            location: s.location,
            params: s.matches?.[0]?.params ?? {},
            unstable_pattern: d0(s.matches),
            errorInfo: R,
          });
        }
      : void 0;
  return m.reduceRight((x, R, B) => {
    let G,
      V = !1,
      k = null,
      Q = null;
    s &&
      ((G = p && R.route.id ? p[R.route.id] : void 0),
      (k = R.route.errorElement || M0),
      _ &&
        (b < 0 && B === 0
          ? (xd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (V = !0),
            (Q = null))
          : b === B &&
            ((V = !0), (Q = R.route.hydrateFallbackElement || null))));
    let j = r.concat(m.slice(0, B + 1)),
      K = () => {
        let J;
        return (
          G
            ? (J = k)
            : V
            ? (J = Q)
            : R.route.Component
            ? (J = O.createElement(R.route.Component, null))
            : R.route.element
            ? (J = R.route.element)
            : (J = x),
          O.createElement(D0, {
            match: R,
            routeContext: { outlet: x, matches: j, isDataRoute: s != null },
            children: J,
          })
        );
      };
    return s && (R.route.ErrorBoundary || R.route.errorElement || B === 0)
      ? O.createElement(Nd, {
          location: s.location,
          revalidation: s.revalidation,
          component: k,
          error: G,
          children: K(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
          onError: g,
        })
      : K();
  }, null);
}
function Zf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function x0(c) {
  let r = O.useContext(Ba);
  return At(r, Zf(c)), r;
}
function U0(c) {
  let r = O.useContext(ci);
  return At(r, Zf(c)), r;
}
function H0(c) {
  let r = O.useContext(qe);
  return At(r, Zf(c)), r;
}
function Vf(c) {
  let r = H0(c),
    s = r.matches[r.matches.length - 1];
  return (
    At(
      s.route.id,
      `${c} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function j0() {
  return Vf("useRouteId");
}
function B0() {
  let c = O.useContext(Qf),
    r = U0("useRouteError"),
    s = Vf("useRouteError");
  return c !== void 0 ? c : r.errors?.[s];
}
function q0() {
  let { router: c } = x0("useNavigate"),
    r = Vf("useNavigate"),
    s = O.useRef(!1);
  return (
    Cd(() => {
      s.current = !0;
    }),
    O.useCallback(
      async (d, m = {}) => {
        Ae(s.current, Md),
          s.current &&
            (typeof d == "number"
              ? await c.navigate(d)
              : await c.navigate(d, { fromRouteId: r, ...m }));
      },
      [c, r]
    )
  );
}
var sd = {};
function xd(c, r, s) {
  !r && !sd[c] && ((sd[c] = !0), Ae(!1, s));
}
O.memo(L0);
function L0({ routes: c, future: r, state: s, onError: f }) {
  return Dd(c, void 0, s, f, r);
}
function Yf(c) {
  At(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Y0({
  basename: c = "/",
  children: r = null,
  location: s,
  navigationType: f = "POP",
  navigator: d,
  static: m = !1,
  unstable_useTransitions: p,
}) {
  At(
    !Bn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let _ = c.replace(/^\/*/, "/"),
    b = O.useMemo(
      () => ({
        basename: _,
        navigator: d,
        static: m,
        unstable_useTransitions: p,
        future: {},
      }),
      [_, d, m, p]
    );
  typeof s == "string" && (s = Wl(s));
  let {
      pathname: g = "/",
      search: x = "",
      hash: R = "",
      state: B = null,
      key: G = "default",
    } = s,
    V = O.useMemo(() => {
      let k = nl(g, _);
      return k == null
        ? null
        : {
            location: { pathname: k, search: x, hash: R, state: B, key: G },
            navigationType: f,
          };
    }, [_, g, x, R, B, G, f]);
  return (
    Ae(
      V != null,
      `<Router basename="${_}"> is not able to match the URL "${g}${x}${R}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    V == null
      ? null
      : O.createElement(
          Re.Provider,
          { value: b },
          O.createElement(jn.Provider, { children: r, value: V })
        )
  );
}
function G0({ children: c, location: r }) {
  return R0(Gf(c), r);
}
function Gf(c, r = []) {
  let s = [];
  return (
    O.Children.forEach(c, (f, d) => {
      if (!O.isValidElement(f)) return;
      let m = [...r, d];
      if (f.type === O.Fragment) {
        s.push.apply(s, Gf(f.props.children, m));
        return;
      }
      At(
        f.type === Yf,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        At(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: f.props.id || m.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        middleware: f.props.middleware,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (p.children = Gf(f.props.children, m)), s.push(p);
    }),
    s
  );
}
var ni = "get",
  ui = "application/x-www-form-urlencoded";
function fi(c) {
  return typeof HTMLElement < "u" && c instanceof HTMLElement;
}
function X0(c) {
  return fi(c) && c.tagName.toLowerCase() === "button";
}
function Q0(c) {
  return fi(c) && c.tagName.toLowerCase() === "form";
}
function Z0(c) {
  return fi(c) && c.tagName.toLowerCase() === "input";
}
function V0(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function K0(c, r) {
  return c.button === 0 && (!r || r === "_self") && !V0(c);
}
var ai = null;
function w0() {
  if (ai === null)
    try {
      new FormData(document.createElement("form"), 0), (ai = !1);
    } catch {
      ai = !0;
    }
  return ai;
}
var J0 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Bf(c) {
  return c != null && !J0.has(c)
    ? (Ae(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`
      ),
      null)
    : c;
}
function k0(c, r) {
  let s, f, d, m, p;
  if (Q0(c)) {
    let _ = c.getAttribute("action");
    (f = _ ? nl(_, r) : null),
      (s = c.getAttribute("method") || ni),
      (d = Bf(c.getAttribute("enctype")) || ui),
      (m = new FormData(c));
  } else if (X0(c) || (Z0(c) && (c.type === "submit" || c.type === "image"))) {
    let _ = c.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = c.getAttribute("formaction") || _.getAttribute("action");
    if (
      ((f = b ? nl(b, r) : null),
      (s = c.getAttribute("formmethod") || _.getAttribute("method") || ni),
      (d =
        Bf(c.getAttribute("formenctype")) ||
        Bf(_.getAttribute("enctype")) ||
        ui),
      (m = new FormData(_, c)),
      !w0())
    ) {
      let { name: g, type: x, value: R } = c;
      if (x === "image") {
        let B = g ? `${g}.` : "";
        m.append(`${B}x`, "0"), m.append(`${B}y`, "0");
      } else g && m.append(g, R);
    }
  } else {
    if (fi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = ni), (f = null), (d = ui), (p = c);
  }
  return (
    m && d === "text/plain" && ((p = m), (m = void 0)),
    { action: f, method: s.toLowerCase(), encType: d, formData: m, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Kf(c, r) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(r);
}
function $0(c, r, s) {
  let f =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : c;
  return (
    f.pathname === "/"
      ? (f.pathname = `_root.${s}`)
      : r && nl(f.pathname, r) === "/"
      ? (f.pathname = `${r.replace(/\/$/, "")}/_root.${s}`)
      : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${s}`),
    f
  );
}
async function W0(c, r) {
  if (c.id in r) return r[c.id];
  try {
    let s = await import(c.module);
    return (r[c.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function F0(c) {
  return c == null
    ? !1
    : c.href == null
    ? c.rel === "preload" &&
      typeof c.imageSrcSet == "string" &&
      typeof c.imageSizes == "string"
    : typeof c.rel == "string" && typeof c.href == "string";
}
async function I0(c, r, s) {
  let f = await Promise.all(
    c.map(async (d) => {
      let m = r.routes[d.route.id];
      if (m) {
        let p = await W0(m, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return lg(
    f
      .flat(1)
      .filter(F0)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function hd(c, r, s, f, d, m) {
  let p = (b, g) => (s[g] ? b.route.id !== s[g].route.id : !0),
    _ = (b, g) =>
      s[g].pathname !== b.pathname ||
      (s[g].route.path?.endsWith("*") && s[g].params["*"] !== b.params["*"]);
  return m === "assets"
    ? r.filter((b, g) => p(b, g) || _(b, g))
    : m === "data"
    ? r.filter((b, g) => {
        let x = f.routes[b.route.id];
        if (!x || !x.hasLoader) return !1;
        if (p(b, g) || _(b, g)) return !0;
        if (b.route.shouldRevalidate) {
          let R = b.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: s[0]?.params || {},
            nextUrl: new URL(c, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function P0(c, r, { includeHydrateFallback: s } = {}) {
  return tg(
    c
      .map((f) => {
        let d = r.routes[f.route.id];
        if (!d) return [];
        let m = [d.module];
        return (
          d.clientActionModule && (m = m.concat(d.clientActionModule)),
          d.clientLoaderModule && (m = m.concat(d.clientLoaderModule)),
          s &&
            d.hydrateFallbackModule &&
            (m = m.concat(d.hydrateFallbackModule)),
          d.imports && (m = m.concat(d.imports)),
          m
        );
      })
      .flat(1)
  );
}
function tg(c) {
  return [...new Set(c)];
}
function eg(c) {
  let r = {},
    s = Object.keys(c).sort();
  for (let f of s) r[f] = c[f];
  return r;
}
function lg(c, r) {
  let s = new Set();
  return (
    new Set(r),
    c.reduce((f, d) => {
      let m = JSON.stringify(eg(d));
      return s.has(m) || (s.add(m), f.push({ key: m, link: d })), f;
    }, [])
  );
}
function Ud() {
  let c = O.useContext(Ba);
  return (
    Kf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    c
  );
}
function ag() {
  let c = O.useContext(ci);
  return (
    Kf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    c
  );
}
var wf = O.createContext(void 0);
wf.displayName = "FrameworkContext";
function Hd() {
  let c = O.useContext(wf);
  return (
    Kf(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function ng(c, r) {
  let s = O.useContext(wf),
    [f, d] = O.useState(!1),
    [m, p] = O.useState(!1),
    {
      onFocus: _,
      onBlur: b,
      onMouseEnter: g,
      onMouseLeave: x,
      onTouchStart: R,
    } = r,
    B = O.useRef(null);
  O.useEffect(() => {
    if ((c === "render" && p(!0), c === "viewport")) {
      let k = (j) => {
          j.forEach((K) => {
            p(K.isIntersecting);
          });
        },
        Q = new IntersectionObserver(k, { threshold: 0.5 });
      return (
        B.current && Q.observe(B.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [c]),
    O.useEffect(() => {
      if (f) {
        let k = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(k);
        };
      }
    }, [f]);
  let G = () => {
      d(!0);
    },
    V = () => {
      d(!1), p(!1);
    };
  return s
    ? c !== "intent"
      ? [m, B, {}]
      : [
          m,
          B,
          {
            onFocus: Un(_, G),
            onBlur: Un(b, V),
            onMouseEnter: Un(g, G),
            onMouseLeave: Un(x, V),
            onTouchStart: Un(R, G),
          },
        ]
    : [!1, B, {}];
}
function Un(c, r) {
  return (s) => {
    c && c(s), s.defaultPrevented || r(s);
  };
}
function ug({ page: c, ...r }) {
  let { router: s } = Ud(),
    f = O.useMemo(() => gd(s.routes, c, s.basename), [s.routes, c, s.basename]);
  return f ? O.createElement(cg, { page: c, matches: f, ...r }) : null;
}
function ig(c) {
  let { manifest: r, routeModules: s } = Hd(),
    [f, d] = O.useState([]);
  return (
    O.useEffect(() => {
      let m = !1;
      return (
        I0(c, r, s).then((p) => {
          m || d(p);
        }),
        () => {
          m = !0;
        }
      );
    }, [c, r, s]),
    f
  );
}
function cg({ page: c, matches: r, ...s }) {
  let f = Fl(),
    { manifest: d, routeModules: m } = Hd(),
    { basename: p } = Ud(),
    { loaderData: _, matches: b } = ag(),
    g = O.useMemo(() => hd(c, r, b, d, f, "data"), [c, r, b, d, f]),
    x = O.useMemo(() => hd(c, r, b, d, f, "assets"), [c, r, b, d, f]),
    R = O.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let V = new Set(),
        k = !1;
      if (
        (r.forEach((j) => {
          let K = d.routes[j.route.id];
          !K ||
            !K.hasLoader ||
            ((!g.some((J) => J.route.id === j.route.id) &&
              j.route.id in _ &&
              m[j.route.id]?.shouldRevalidate) ||
            K.hasClientLoader
              ? (k = !0)
              : V.add(j.route.id));
        }),
        V.size === 0)
      )
        return [];
      let Q = $0(c, p, "data");
      return (
        k &&
          V.size > 0 &&
          Q.searchParams.set(
            "_routes",
            r
              .filter((j) => V.has(j.route.id))
              .map((j) => j.route.id)
              .join(",")
          ),
        [Q.pathname + Q.search]
      );
    }, [p, _, f, d, g, r, c, m]),
    B = O.useMemo(() => P0(x, d), [x, d]),
    G = ig(x);
  return O.createElement(
    O.Fragment,
    null,
    R.map((V) =>
      O.createElement("link", {
        key: V,
        rel: "prefetch",
        as: "fetch",
        href: V,
        ...s,
      })
    ),
    B.map((V) =>
      O.createElement("link", { key: V, rel: "modulepreload", href: V, ...s })
    ),
    G.map(({ key: V, link: k }) =>
      O.createElement("link", { key: V, nonce: s.nonce, ...k })
    )
  );
}
function fg(...c) {
  return (r) => {
    c.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var og =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  og && (window.__reactRouterVersion = "7.11.0");
} catch {}
function rg({
  basename: c,
  children: r,
  unstable_useTransitions: s,
  window: f,
}) {
  let d = O.useRef();
  d.current == null && (d.current = Qy({ window: f, v5Compat: !0 }));
  let m = d.current,
    [p, _] = O.useState({ action: m.action, location: m.location }),
    b = O.useCallback(
      (g) => {
        s === !1 ? _(g) : O.startTransition(() => _(g));
      },
      [s]
    );
  return (
    O.useLayoutEffect(() => m.listen(b), [m, b]),
    O.createElement(Y0, {
      basename: c,
      children: r,
      location: p.location,
      navigationType: p.action,
      navigator: m,
      unstable_useTransitions: s,
    })
  );
}
var jd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Jf = O.forwardRef(function (
    {
      onClick: r,
      discover: s = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: m,
      replace: p,
      state: _,
      target: b,
      to: g,
      preventScrollReset: x,
      viewTransition: R,
      unstable_defaultShouldRevalidate: B,
      ...G
    },
    V
  ) {
    let { basename: k, unstable_useTransitions: Q } = O.useContext(Re),
      j = typeof g == "string" && jd.test(g),
      K = _d(g, k);
    g = K.to;
    let J = T0(g, { relative: d }),
      [bt, Et, Rt] = ng(f, G),
      I = mg(g, {
        replace: p,
        state: _,
        target: b,
        preventScrollReset: x,
        relative: d,
        viewTransition: R,
        unstable_defaultShouldRevalidate: B,
        unstable_useTransitions: Q,
      });
    function Ct(me) {
      r && r(me), me.defaultPrevented || I(me);
    }
    let Gt = O.createElement("a", {
      ...G,
      ...Rt,
      href: K.absoluteURL || J,
      onClick: K.isExternal || m ? r : Ct,
      ref: fg(V, Et),
      target: b,
      "data-discover": !j && s === "render" ? "true" : void 0,
    });
    return bt && !j
      ? O.createElement(O.Fragment, null, Gt, O.createElement(ug, { page: J }))
      : Gt;
  });
Jf.displayName = "Link";
var sg = O.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: f = "",
    end: d = !1,
    style: m,
    to: p,
    viewTransition: _,
    children: b,
    ...g
  },
  x
) {
  let R = qn(p, { relative: g.relative }),
    B = Fl(),
    G = O.useContext(ci),
    { navigator: V, basename: k } = O.useContext(Re),
    Q = G != null && Sg(R) && _ === !0,
    j = V.encodeLocation ? V.encodeLocation(R).pathname : R.pathname,
    K = B.pathname,
    J =
      G && G.navigation && G.navigation.location
        ? G.navigation.location.pathname
        : null;
  s ||
    ((K = K.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (j = j.toLowerCase())),
    J && k && (J = nl(J, k) || J);
  const bt = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
  let Et = K === j || (!d && K.startsWith(j) && K.charAt(bt) === "/"),
    Rt =
      J != null &&
      (J === j || (!d && J.startsWith(j) && J.charAt(j.length) === "/")),
    I = { isActive: Et, isPending: Rt, isTransitioning: Q },
    Ct = Et ? r : void 0,
    Gt;
  typeof f == "function"
    ? (Gt = f(I))
    : (Gt = [
        f,
        Et ? "active" : null,
        Rt ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let me = typeof m == "function" ? m(I) : m;
  return O.createElement(
    Jf,
    {
      ...g,
      "aria-current": Ct,
      className: Gt,
      ref: x,
      style: me,
      to: p,
      viewTransition: _,
    },
    typeof b == "function" ? b(I) : b
  );
});
sg.displayName = "NavLink";
var hg = O.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: r,
      navigate: s,
      reloadDocument: f,
      replace: d,
      state: m,
      method: p = ni,
      action: _,
      onSubmit: b,
      relative: g,
      preventScrollReset: x,
      viewTransition: R,
      unstable_defaultShouldRevalidate: B,
      ...G
    },
    V
  ) => {
    let { unstable_useTransitions: k } = O.useContext(Re),
      Q = gg(),
      j = pg(_, { relative: g }),
      K = p.toLowerCase() === "get" ? "get" : "post",
      J = typeof _ == "string" && jd.test(_),
      bt = (Et) => {
        if ((b && b(Et), Et.defaultPrevented)) return;
        Et.preventDefault();
        let Rt = Et.nativeEvent.submitter,
          I = Rt?.getAttribute("formmethod") || p,
          Ct = () =>
            Q(Rt || Et.currentTarget, {
              fetcherKey: r,
              method: I,
              navigate: s,
              replace: d,
              state: m,
              relative: g,
              preventScrollReset: x,
              viewTransition: R,
              unstable_defaultShouldRevalidate: B,
            });
        k && s !== !1 ? O.startTransition(() => Ct()) : Ct();
      };
    return O.createElement("form", {
      ref: V,
      method: K,
      action: j,
      onSubmit: f ? b : bt,
      ...G,
      "data-discover": !J && c === "render" ? "true" : void 0,
    });
  }
);
hg.displayName = "Form";
function dg(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bd(c) {
  let r = O.useContext(Ba);
  return At(r, dg(c)), r;
}
function mg(
  c,
  {
    target: r,
    replace: s,
    state: f,
    preventScrollReset: d,
    relative: m,
    viewTransition: p,
    unstable_defaultShouldRevalidate: _,
    unstable_useTransitions: b,
  } = {}
) {
  let g = z0(),
    x = Fl(),
    R = qn(c, { relative: m });
  return O.useCallback(
    (B) => {
      if (K0(B, r)) {
        B.preventDefault();
        let G = s !== void 0 ? s : Hn(x) === Hn(R),
          V = () =>
            g(c, {
              replace: G,
              state: f,
              preventScrollReset: d,
              relative: m,
              viewTransition: p,
              unstable_defaultShouldRevalidate: _,
            });
        b ? O.startTransition(() => V()) : V();
      }
    },
    [x, g, R, s, f, r, c, d, m, p, _, b]
  );
}
var vg = 0,
  yg = () => `__${String(++vg)}__`;
function gg() {
  let { router: c } = Bd("useSubmit"),
    { basename: r } = O.useContext(Re),
    s = j0(),
    f = c.fetch,
    d = c.navigate;
  return O.useCallback(
    async (m, p = {}) => {
      let { action: _, method: b, encType: g, formData: x, body: R } = k0(m, r);
      if (p.navigate === !1) {
        let B = p.fetcherKey || yg();
        await f(B, s, p.action || _, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: x,
          body: R,
          formMethod: p.method || b,
          formEncType: p.encType || g,
          flushSync: p.flushSync,
        });
      } else
        await d(p.action || _, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: x,
          body: R,
          formMethod: p.method || b,
          formEncType: p.encType || g,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition,
        });
    },
    [f, d, r, s]
  );
}
function pg(c, { relative: r } = {}) {
  let { basename: s } = O.useContext(Re),
    f = O.useContext(qe);
  At(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    m = { ...qn(c || ".", { relative: r }) },
    p = Fl();
  if (c == null) {
    m.search = p.search;
    let _ = new URLSearchParams(m.search),
      b = _.getAll("index");
    if (b.some((x) => x === "")) {
      _.delete("index"),
        b.filter((R) => R).forEach((R) => _.append("index", R));
      let x = _.toString();
      m.search = x ? `?${x}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      d.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (m.pathname = m.pathname === "/" ? s : al([s, m.pathname])),
    Hn(m)
  );
}
function Sg(c, { relative: r } = {}) {
  let s = O.useContext(Rd);
  At(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Bd("useViewTransitionState"),
    d = qn(c, { relative: r });
  if (!s.isTransitioning) return !1;
  let m = nl(s.currentLocation.pathname, f) || s.currentLocation.pathname,
    p = nl(s.nextLocation.pathname, f) || s.nextLocation.pathname;
  return ii(d.pathname, p) != null || ii(d.pathname, m) != null;
}
function dd(c) {
  return c.length > 75 ? c.slice(0, 70) + "..." : c;
}
const bg = "/Aden_Grand_Library/assets/search-B_2Bd0YE.svg",
  Eg = "/Aden_Grand_Library/assets/no-result-C4kRoZdG.png",
  qd = "/Aden_Grand_Library/assets/error-DFvxHu1Y.png",
  Ld = "/Aden_Grand_Library/assets/loading-B6ZQt6Sf.gif",
  Tg = ({ searchQuery: c, category: r }) => {
    const [s, f] = O.useState([]),
      [d, m] = O.useState(0),
      [p, _] = O.useState(1),
      [b, g] = O.useState(4),
      [x, R] = O.useState(!1),
      [B, G] = O.useState(!1);
    function V() {
      _((j) => j - 1);
    }
    function k() {
      _((j) => j + 1);
    }
    function Q(j) {
      g(Number(j.target.value)), m(Math.ceil(s.length / j.target.value)), _(1);
    }
    return (
      O.useEffect(() => {
        let j = "";
        r && (j = "+subject:" + r);
        let K = `https://www.googleapis.com/books/v1/volumes?q=${c}${j}&maxResults=40`;
        c &&
          (R(!0),
          G(!1),
          fetch(K)
            .then((J) => {
              if (!J.ok) throw new Error("Network response was not ok");
              return J.json();
            })
            .then((J) => {
              const bt = J.items || [];
              f(bt), _(1), m(Math.ceil(bt.length / b)), R(!1), G(!1);
            })
            .catch((J) => {
              G(!0), R(!1), console.error("Error fetching data: ", J);
            }));
      }, [c, r]),
      c && x
        ? H.jsxs("div", {
            className: $t.shelfNoContent,
            children: [
              H.jsx("p", {
                className: $t.shelfMessage,
                children: "Fetching Knowledge ...",
              }),
              H.jsx("img", { src: Ld, alt: "loading" }),
            ],
          })
        : B
        ? H.jsxs("div", {
            className: $t.shelfNoContent,
            children: [
              H.jsx("p", {
                className: $t.shelfMessage,
                children: "NETWORK ERROR!",
              }),
              H.jsx("img", { src: qd, alt: "NETWORK ERROR!" }),
            ],
          })
        : c && s.length === 0
        ? H.jsxs("div", {
            className: $t.shelfNoContent,
            children: [
              H.jsx("p", {
                className: $t.shelfMessage,
                children: "No results found!",
              }),
              H.jsx("img", { src: Eg, alt: "no results found" }),
            ],
          })
        : c
        ? H.jsxs("div", {
            className: $t.bookList,
            children: [
              H.jsxs("div", {
                className: $t.pagination,
                children: [
                  H.jsx("button", {
                    onClick: V,
                    disabled: p === 1,
                    children: "prev",
                  }),
                  H.jsxs("p", { children: ["Page: ", p] }),
                  H.jsx("button", {
                    onClick: k,
                    disabled: p === d,
                    children: "next",
                  }),
                ],
              }),
              H.jsxs("div", {
                className: $t.elementsPerPage,
                children: [
                  H.jsxs("select", {
                    name: "elements",
                    id: "elements",
                    defaultValue: "4",
                    onChange: Q,
                    children: [
                      H.jsx("option", { value: "4", children: "4" }),
                      H.jsx("option", { value: "8", children: "8" }),
                      H.jsx("option", { value: "12", children: "12" }),
                      H.jsx("option", { value: "16", children: "16" }),
                    ],
                  }),
                  H.jsx("p", {
                    style: { fontSize: "medium" },
                    children: "elements per page",
                  }),
                ],
              }),
              H.jsx("div", {
                className: $t.shelf,
                children: s
                  .slice((p - 1) * b, p * b)
                  .map((j) =>
                    H.jsxs(
                      "div",
                      {
                        className: $t.book,
                        children: [
                          H.jsx(
                            Jf,
                            {
                              to: `/book/${j.id}`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: H.jsx("img", {
                                className: $t.thumbnail,
                                src: `https://play.google.com/books/publisher/content/images/frontcover/${j.id}?fife=w2000-h2000`,
                                alt: "No preview available!",
                              }),
                            },
                            j.id
                          ),
                          H.jsxs("div", {
                            className: $t.bookDetails,
                            children: [
                              H.jsxs("p", {
                                title: j.volumeInfo.title
                                  ? j.volumeInfo.title
                                  : "N/A",
                                children: [
                                  H.jsx("span", { children: "Title:" }),
                                  " ",
                                  j.volumeInfo.title
                                    ? dd(j.volumeInfo.title)
                                    : "N/A",
                                ],
                              }),
                              H.jsxs("p", {
                                title: j.volumeInfo.authors
                                  ? j.volumeInfo.authors.join(", ")
                                  : "N/A",
                                children: [
                                  H.jsxs("span", {
                                    children: [
                                      "Author",
                                      j?.volumeInfo?.authors?.length > 1
                                        ? "s"
                                        : "",
                                      ":",
                                    ],
                                  }),
                                  " ",
                                  j.volumeInfo.authors
                                    ? dd(j.volumeInfo.authors.join(", "))
                                    : "N/A",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      j.id
                    )
                  ),
              }),
            ],
          })
        : H.jsxs("div", {
            className: $t.shelfNoContent,
            children: [
              H.jsx("p", {
                className: $t.shelfMessage,
                children: "Try searching for a book",
              }),
              H.jsx("img", { src: bg, alt: "search for a book" }),
            ],
          })
    );
  },
  zg = O.createContext(null),
  qf = { didCatch: !1, error: null };
class md extends O.Component {
  constructor(r) {
    super(r),
      (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
      (this.state = qf);
  }
  static getDerivedStateFromError(r) {
    return { didCatch: !0, error: r };
  }
  resetErrorBoundary(...r) {
    const { error: s } = this.state;
    s !== null &&
      (this.props.onReset?.({ args: r, reason: "imperative-api" }),
      this.setState(qf));
  }
  componentDidCatch(r, s) {
    this.props.onError?.(r, s);
  }
  componentDidUpdate(r, s) {
    const { didCatch: f } = this.state,
      { resetKeys: d } = this.props;
    f &&
      s.error !== null &&
      _g(r.resetKeys, d) &&
      (this.props.onReset?.({ next: d, prev: r.resetKeys, reason: "keys" }),
      this.setState(qf));
  }
  render() {
    const {
        children: r,
        fallbackRender: s,
        FallbackComponent: f,
        fallback: d,
      } = this.props,
      { didCatch: m, error: p } = this.state;
    let _ = r;
    if (m) {
      const b = { error: p, resetErrorBoundary: this.resetErrorBoundary };
      if (typeof s == "function") _ = s(b);
      else if (f) _ = O.createElement(f, b);
      else if (d !== void 0) _ = d;
      else throw p;
    }
    return O.createElement(
      zg.Provider,
      {
        value: {
          didCatch: m,
          error: p,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      _
    );
  }
}
function _g(c = [], r = []) {
  return c.length !== r.length || c.some((s, f) => !Object.is(s, r[f]));
}
const Ag = "_fallback_1rgvf_1",
  Rg = { fallback: Ag };
function vd({ error: c, resetErrorBoundary: r }) {
  return H.jsxs("div", {
    className: Rg.fallback,
    children: [
      H.jsx("h5", { children: "Something went wrong:" }),
      H.jsx("pre", { children: c.message }),
      H.jsx("button", { onClick: r, children: "Refresh element" }),
    ],
  });
}
function yd(c, r) {
  console.error(c), console.error(r.componentStack);
}
function Og() {
  const [c, r] = O.useState(""),
    [s, f] = O.useState("");
  return H.jsxs("div", {
    className: Oy.content,
    children: [
      H.jsx(md, {
        FallbackComponent: vd,
        onError: yd,
        children: H.jsx(xy, { setSearchQuery: r, setCategory: f }),
      }),
      H.jsx(md, {
        FallbackComponent: vd,
        onError: yd,
        children: H.jsx(Tg, { searchQuery: c, category: s }),
      }),
    ],
  });
}
function Mg() {
  return H.jsxs(H.Fragment, { children: [H.jsx(Ay, {}), H.jsx(Og, {})] });
}
const Cg = "_bookDetails_dwn35_1",
  Dg = "_image_dwn35_13",
  Ng = "_preview_dwn35_27",
  xg = "_sample_dwn35_47",
  Ug = "_title_dwn35_81",
  Hg = "_info_dwn35_87",
  jg = "_noBook_dwn35_93",
  Bg = "_noBookMessage_dwn35_115",
  Ne = {
    bookDetails: Cg,
    image: Dg,
    preview: Ng,
    sample: xg,
    title: Ug,
    info: Hg,
    noBook: jg,
    noBookMessage: Bg,
  },
  qg = {
    aa: "Afar",
    ab: "Abkhazian",
    ae: "Avestan",
    af: "Afrikaans",
    ak: "Akan",
    am: "Amharic",
    an: "Aragonese",
    ar: "Arabic",
    as: "Assamese",
    av: "Avaric",
    ay: "Aymara",
    az: "Azerbaijani",
    ba: "Bashkir",
    be: "Belarusian",
    bg: "Bulgarian",
    bh: "Bihari languages",
    bi: "Bislama",
    bm: "Bambara",
    bn: "Bengali",
    bo: "Tibetan",
    br: "Breton",
    bs: "Bosnian",
    ca: "Catalan; Valencian",
    ce: "Chechen",
    ch: "Chamorro",
    co: "Corsican",
    cr: "Cree",
    cs: "Czech",
    cu: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
    cv: "Chuvash",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    dv: "Divehi; Dhivehi; Maldivian",
    dz: "Dzongkha",
    ee: "Ewe",
    el: "Greek, Modern (1453-)",
    en: "English",
    eo: "Esperanto",
    es: "Spanish; Castilian",
    et: "Estonian",
    eu: "Basque",
    fa: "Persian",
    ff: "Fulah",
    fi: "Finnish",
    fj: "Fijian",
    fo: "Faroese",
    fr: "French",
    fy: "Western Frisian",
    ga: "Irish",
    gd: "Gaelic; Scomttish Gaelic",
    gl: "Galician",
    gn: "Guarani",
    gu: "Gujarati",
    gv: "Manx",
    ha: "Hausa",
    he: "Hebrew",
    hi: "Hindi",
    ho: "Hiri Motu",
    hr: "Croatian",
    ht: "Haitian; Haitian Creole",
    hu: "Hungarian",
    hy: "Armenian",
    hz: "Herero",
    ia: "Interlingua (International Auxiliary Language Association)",
    id: "Indonesian",
    ie: "Interlingue; Occidental",
    ig: "Igbo",
    ii: "Sichuan Yi; Nuosu",
    ik: "Inupiaq",
    io: "Ido",
    is: "Icelandic",
    it: "Italian",
    iu: "Inuktitut",
    ja: "Japanese",
    jv: "Javanese",
    ka: "Georgian",
    kg: "Kongo",
    ki: "Kikuyu; Gikuyu",
    kj: "Kuanyama; Kwanyama",
    kk: "Kazakh",
    kl: "Kalaallisut; Greenlandic",
    km: "Central Khmer",
    kn: "Kannada",
    ko: "Korean",
    kr: "Kanuri",
    ks: "Kashmiri",
    ku: "Kurdish",
    kv: "Komi",
    kw: "Cornish",
    ky: "Kirghiz; Kyrgyz",
    la: "Latin",
    lb: "Luxembourgish; Letzeburgesch",
    lg: "Ganda",
    li: "Limburgan; Limburger; Limburgish",
    ln: "Lingala",
    lo: "Lao",
    lt: "Lithuanian",
    lu: "Luba-Katanga",
    lv: "Latvian",
    mg: "Malagasy",
    mh: "Marshallese",
    mi: "Maori",
    mk: "Macedonian",
    ml: "Malayalam",
    mn: "Mongolian",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    my: "Burmese",
    na: "Nauru",
    nb: "Bokmål, Norwegian; Norwegian Bokmål",
    nd: "Ndebele, North; North Ndebele",
    ne: "Nepali",
    ng: "Ndonga",
    nl: "Dutch; Flemish",
    nn: "Norwegian Nynorsk; Nynorsk, Norwegian",
    no: "Norwegian",
    nr: "Ndebele, South; South Ndebele",
    nv: "Navajo; Navaho",
    ny: "Chichewa; Chewa; Nyanja",
    oc: "Occitan (post 1500)",
    oj: "Ojibwa",
    om: "Oromo",
    or: "Oriya",
    os: "Ossetian; Ossetic",
    pa: "Panjabi; Punjabi",
    pi: "Pali",
    pl: "Polish",
    ps: "Pushto; Pashto",
    pt: "Portuguese",
    qu: "Quechua",
    rm: "Romansh",
    rn: "Rundi",
    ro: "Romanian; Moldavian; Moldovan",
    ru: "Russian",
    rw: "Kinyarwanda",
    sa: "Sanskrit",
    sc: "Sardinian",
    sd: "Sindhi",
    se: "Northern Sami",
    sg: "Sango",
    si: "Sinhala; Sinhalese",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sn: "Shona",
    so: "Somali",
    sq: "Albanian",
    sr: "Serbian",
    ss: "Swati",
    st: "Sotho, Southern",
    su: "Sundanese",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    tg: "Tajik",
    th: "Thai",
    ti: "Tigrinya",
    tk: "Turkmen",
    tl: "Tagalog",
    tn: "Tswana",
    to: "Tonga (Tonga Islands)",
    tr: "Turkish",
    ts: "Tsonga",
    tt: "Tatar",
    tw: "Twi",
    ty: "Tahitian",
    ug: "Uighur; Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volapük",
    wa: "Walloon",
    wo: "Wolof",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    za: "Zhuang; Chuang",
    zh: "Chinese",
    zu: "Zulu",
  };
function Lg(c) {
  return qg[c] || c;
}
function Yg() {
  const { id: c } = A0(),
    [r, s] = O.useState(null),
    [f, d] = O.useState(!0),
    [m, p] = O.useState(!1);
  return (
    console.log(`https://www.googleapis.com/books/v1/volumes/${c}`),
    O.useEffect(() => {
      d(!0),
        p(!1),
        fetch(`https://www.googleapis.com/books/v1/volumes/${c}`)
          .then((_) => {
            if (!_.ok) throw new Error("Network response was not ok");
            return _.json();
          })
          .then((_) => {
            s(_), d(!1), p(!1);
          })
          .catch((_) => {
            p(!0), d(!1), console.error("Error fetching data: ", _);
          });
    }, [c]),
    f
      ? H.jsxs("div", {
          className: Ne.noBook,
          children: [
            H.jsx("p", {
              className: Ne.noBookMessage,
              children: "Fetching Knowledge ...",
            }),
            H.jsx("img", { src: Ld, alt: "loading" }),
          ],
        })
      : m
      ? H.jsxs("div", {
          className: Ne.noBook,
          children: [
            H.jsx("p", {
              className: Ne.noBookMessage,
              children: "NETWORK ERROR!",
            }),
            H.jsx("img", { src: qd, alt: "NETWORK ERROR!" }),
          ],
        })
      : H.jsxs("div", {
          className: Ne.bookDetails,
          children: [
            H.jsxs("div", {
              className: Ne.preview,
              children: [
                H.jsx("img", {
                  className: Ne.image,
                  src: `https://play.google.com/books/publisher/content/images/frontcover/${c}?fife=w2000-h2000`,
                  alt: "No preview available!",
                }),
                r.volumeInfo.industryIdentifiers &&
                  r.volumeInfo.industryIdentifiers.map((_) =>
                    H.jsxs(
                      "p",
                      {
                        className: Ne.isbn,
                        children: [
                          H.jsxs("span", { children: [_.type, ":"] }),
                          " ",
                          _.identifier,
                        ],
                      },
                      _.identifier
                    )
                  ),
                r.accessInfo.webReaderLink &&
                  H.jsxs("a", {
                    href: r.accessInfo.webReaderLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: Ne.sample,
                    children: [
                      "Read sample",
                      " ",
                      H.jsxs("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                          H.jsx("path", {
                            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                          }),
                          H.jsx("polyline", { points: "15 3 21 3 21 9" }),
                          H.jsx("line", {
                            x1: "10",
                            y1: "14",
                            x2: "21",
                            y2: "3",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            H.jsxs("div", {
              className: Ne.info,
              children: [
                H.jsx("h1", {
                  className: Ne.title,
                  children: r.volumeInfo.title ? r.volumeInfo.title : "N/A",
                }),
                H.jsxs("h3", {
                  children: [
                    H.jsx("span", { children: "By " }),
                    r.volumeInfo.authors
                      ? r.volumeInfo.authors.join(", ")
                      : "N/A",
                  ],
                }),
                H.jsx("br", {}),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Subtitle: " }),
                    r.volumeInfo.subtitle ? r.volumeInfo.subtitle : "N/A",
                  ],
                }),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Publication date: " }),
                    r.volumeInfo.publishedDate
                      ? r.volumeInfo.publishedDate
                      : "N/A",
                  ],
                }),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Published by: " }),
                    r.volumeInfo.publisher ? r.volumeInfo.publisher : "N/A",
                  ],
                }),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Pages: " }),
                    r.volumeInfo.pageCount ? r.volumeInfo.pageCount : "N/A",
                  ],
                }),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Categories: " }),
                    r.volumeInfo.categories
                      ? r.volumeInfo.categories.join(", ")
                      : "N/A",
                  ],
                }),
                H.jsxs("p", {
                  children: [
                    H.jsx("span", { children: "- Language: " }),
                    r.volumeInfo.language ? Lg(r.volumeInfo.language) : "N/A",
                  ],
                }),
              ],
            }),
          ],
        })
  );
}
function Gg() {
  return H.jsxs(H.Fragment, {
    children: [
      H.jsx(Ty, {}),
      H.jsxs(G0, {
        children: [
          H.jsx(Yf, { path: "/", element: H.jsx(Mg, {}) }),
          H.jsx(Yf, { path: "/book/:id", element: H.jsx(Yg, {}) }),
        ],
      }),
    ],
  });
}
gy.createRoot(document.getElementById("root")).render(
  H.jsx(O.StrictMode, { children: H.jsx(rg, { children: H.jsx(Gg, {}) }) })
);
