import { DEFAULT_THEME as e, RESOLVED_THEMES as t, THEMES as n, THEME_STORAGE_KEY as r } from "./theme-config.js";
import { ArrowRightIcon as i, ArrowUpIcon as a, BracketsCurlyIcon as o, BracketsSquareIcon as s, CaretDownIcon as c, CaretLeftIcon as l, CaretRightIcon as u, CaretUpDownIcon as d, CaretUpIcon as f, CheckCircleIcon as p, CheckIcon as m, CloudArrowUpIcon as h, CopyIcon as g, CrownIcon as _, CubeIcon as v, DotsSixIcon as y, DotsThreeVerticalIcon as b, EyeIcon as x, EyeSlashIcon as S, HashIcon as C, InfoIcon as w, MagnifyingGlassIcon as T, TextAaIcon as E, ToggleLeftIcon as D, TrayIcon as O, WarningIcon as k, XCircleIcon as A, XIcon as j } from "@phosphor-icons/react";
import M from "classnames";
import * as N from "react";
import P, { Children as ee, Fragment as te, cloneElement as ne, createContext as re, forwardRef as ie, isValidElement as F, useCallback as I, useContext as ae, useEffect as L, useImperativeHandle as R, useLayoutEffect as oe, useMemo as se, useReducer as ce, useRef as z, useState as B } from "react";
import { Portal as le } from "react-portal";
import { Slot as ue } from "@radix-ui/react-slot";
import { cva as de, cx as fe } from "class-variance-authority";
import { configure as pe } from "safe-stable-stringify";
import { twMerge as me } from "tailwind-merge";
import { v4 as he } from "uuid";
import { Fragment as ge, jsx as V, jsxs as H } from "react/jsx-runtime";
import * as _e from "@radix-ui/react-avatar";
import { highlightTree as ve, styleTags as ye, tagHighlighter as be, tags as U } from "@lezer/highlight";
import xe from "dayjs";
import * as Se from "@sentry/browser";
import { createPopper as Ce } from "@popperjs/core";
import { createTheme as we } from "@uiw/codemirror-themes";
import { Highlight as Te, themes as Ee } from "prism-react-renderer";
import De from "prismjs";
import "prismjs/components/prism-groovy.js";
import "prismjs/components/prism-kotlin.js";
import "prismjs/components/prism-ruby.js";
import "prismjs/components/prism-sql.js";
import "prismjs/components/prism-swift.js";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-json.js";
import { Command as Oe } from "cmdk";
import * as ke from "@radix-ui/react-dialog";
import * as Ae from "@radix-ui/react-popover";
import * as je from "@radix-ui/react-label";
import { DayPicker as Me } from "react-day-picker";
import Ne from "dayjs/plugin/duration.js";
import Pe from "dayjs/plugin/relativeTime.js";
import * as Fe from "@radix-ui/react-select";
import Ie from "object-hash";
import * as Le from "@radix-ui/react-checkbox";
import { DndContext as Re, MouseSensor as ze, PointerSensor as Be, closestCenter as Ve, useSensor as He, useSensors as Ue } from "@dnd-kit/core";
import { SortableContext as We, arrayMove as Ge, useSortable as Ke, verticalListSortingStrategy as qe } from "@dnd-kit/sortable";
import { CSS as Je } from "@dnd-kit/utilities";
import * as Ye from "@radix-ui/react-switch";
import { FormProvider as Xe } from "react-hook-form";
import * as Ze from "@radix-ui/react-radio-group";
import Qe from "lodash/debounce";
import $e from "lodash/get";
import { NavLink as et } from "react-router-dom";
import * as tt from "@radix-ui/react-separator";
import { Transition as nt } from "@headlessui/react";
import { createColumnHelper as rt, flexRender as it, getCoreRowModel as at, getFilteredRowModel as ot, getPaginationRowModel as st, getSortedRowModel as ct, useReactTable as lt } from "@tanstack/react-table";
import { useOverlayScrollbars as ut } from "overlayscrollbars-react";
import { useVirtual as dt } from "react-virtual";
import * as ft from "@radix-ui/react-tabs";
import { create as pt } from "zustand";
import { persist as mt } from "zustand/middleware";
import { Toaster as ht } from "sonner";
import * as gt from "@radix-ui/react-tooltip";
import * as _t from "@radix-ui/react-dropdown-menu";
import * as vt from "react-resizable-panels";
//#region \0rolldown/runtime.js
var yt = Object.create, bt = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, St = Object.getOwnPropertyNames, Ct = Object.getPrototypeOf, wt = Object.prototype.hasOwnProperty, Tt = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Et = (e, t) => {
	let n = {};
	for (var r in e) bt(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || bt(n, Symbol.toStringTag, { value: "Module" }), n;
}, Dt = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = St(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !wt.call(e, s) && s !== n && bt(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = xt(t, s)) || r.enumerable
	});
	return e;
}, Ot = (e, t, n) => (n = e == null ? {} : yt(Ct(e)), Dt(t || !e || !e.__esModule || !wt.call(e, "default") ? bt(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), kt = () => {}, At = () => BigInt(`0x${Array(16).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join("")}`), jt = pe({ deterministic: !0 });
//#endregion
//#region src/utils/styles.ts
function W(...e) {
	return me(fe(e));
}
//#endregion
//#region src/utils/truncate.ts
var Mt = 1e3, Nt = Mt / 2;
function Pt(e) {
	return e.length <= Mt ? e : `${e.slice(0, Nt)}...${e.slice(-500)}`;
}
function Ft(e) {
	return typeof e != "object" || !e ? e : Object.entries(e).reduce((e, [t, n]) => {
		if (typeof n == "string" && n.length > Mt) return {
			...e,
			[t]: Pt(n)
		};
		if (Array.isArray(n)) {
			let r = n.map((e) => typeof e != "object" || !e ? typeof e == "string" ? Pt(e) : e : Ft(e));
			return {
				...e,
				[t]: r
			};
		}
		return typeof n == "object" ? {
			...e,
			[t]: Ft(n)
		} : {
			...e,
			[t]: n
		};
	}, {});
}
//#endregion
//#region src/utils/uuid.ts
var It = () => he(), Lt = /* @__PURE__ */ Et({
	slugRegex: () => Rt,
	urlRegex: () => zt
}), Rt = /^[a-z0-9]+(?:-[a-z0-9]+)*$/, zt = /* @__PURE__ */ RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i"), Bt = de(["inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-aeonik uppercase tracking-wider text-sm font-medium gap-1 shrink-0", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"], {
	variants: {
		variant: {
			default: "bg-background text-foreground-normal enabled:hover:bg-background-surface/70 border border-border-normal",
			primary: "bg-background-inverse text-foreground-on-inverse enabled:hover:bg-background-inverse/85 disabled:border-border-normal disabled:opacity-100 disabled:bg-background-surface-hovered disabled:text-foreground-disabled",
			secondary: "bg-background-surface enabled:hover:bg-background-surface/90 text-foreground text-foreground-normal border border-border-normal",
			critical: "bg-fill-critical text-foreground-on-fill enabled:hover:bg-fill-critical/90",
			ghost: "bg-transparent text-foreground-normal border-none enabled:hover:bg-background-surface/70 active:bg-background-surface/80 data-[state=open]:bg-background-surface/80",
			outline: "bg-transparent text-foreground-normal border border-border-normal hover:bg-background-surface/70"
		},
		size: {
			default: "h-8 px-4",
			sm: "h-8 px-3",
			xs: "h-6 px-2",
			lg: "h-10 px-8 text-base",
			icon: "h-6 w-6",
			square: "h-8 w-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Vt = P.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => /* @__PURE__ */ V(r ? ue : "button", {
	type: "button",
	className: W(Bt({
		variant: t,
		size: n
	}), e),
	ref: a,
	...i
}));
Vt.displayName = "Button";
//#endregion
//#region src/icon/SvgOnly.tsx
var Ht = ie(({ className: e, style: t, svg: n, ...r }, i) => {
	let a = z(null);
	return R(i, () => a.current), !F(n) || ee.count(n) !== 1 ? (console.error("SvgOnly must be passed a single SVG icon as a JSX tag."), null) : ne(n, {
		...r,
		...i ? { ref: a } : {},
		className: W("shrink-0", e, n.props.className),
		style: {
			...t,
			...n.props.style
		}
	});
});
Ht.displayName = "SvgOnly";
//#endregion
//#region src/icon/Icon.tsx
var G = ie(({ className: e, style: t, svg: n, ...r }, i) => /* @__PURE__ */ V(Ht, {
	ref: i,
	className: W("size-5", e),
	style: t,
	svg: n,
	...r
}));
G.displayName = "Icon";
//#endregion
//#region src/typography/Heading.tsx
var Ut = {
	1: "font-kairos text-2xl sm:text-3xl leading-8 text-foreground-normal antialiased mb-2",
	2: "font-sans text-xl sm:text-2xl font-medium leading-6 text-foreground-normal antialiased mb-2",
	3: "font-sans text-base sm:text-lg font-medium leading-normal text-foreground-normal antialiased mb-1",
	4: "font-sans text-sm leading-normal font-medium text-foreground-normal antialiased mb-0.5"
}, Wt = ({ level: e, children: t, className: n, ...r }) => {
	let i = `h${e}`;
	return /* @__PURE__ */ V(i, {
		className: W(Ut[e], n),
		...r,
		children: t
	});
}, Gt = re({ parentNodeId: null }), Kt = 5e3, qt = {
	success: p,
	danger: A,
	warning: k,
	info: w
};
function Jt({ variant: e, children: t, autoDismiss: n, onClose: r, className: i, ...a }) {
	let { parentNodeId: o } = ae(Gt), [s, c] = B(!0);
	if (L(() => {
		if (n && s) {
			let e = setTimeout(() => {
				c(!1);
			}, Kt);
			return () => {
				clearTimeout(e);
			};
		}
	}, [n, s]), !s || !o) return null;
	let l = () => {
		c(!1), r && r();
	}, u = qt[e];
	return /* @__PURE__ */ V(le, {
		node: document.getElementById(o),
		children: /* @__PURE__ */ H("div", {
			"data-testid": "alert",
			className: M("mx-auto flex items-start gap-x-2 rounded-lg border px-3 sm:w-[90%]", i, {
				"border-border-success bg-fill-success-secondary": e === "success",
				"border-border-critical bg-fill-critical-secondary": e === "danger",
				"border-border-warning bg-fill-warning-secondary": e === "warning",
				"border-border-info bg-fill-info-secondary": e === "info"
			}),
			...a,
			children: [
				/* @__PURE__ */ V("div", {
					className: "grid place-items-center py-3.5",
					children: /* @__PURE__ */ V(G, { svg: /* @__PURE__ */ V(u, {}) })
				}),
				/* @__PURE__ */ V("div", {
					className: "text-foreground-normal flex-1 py-3.5 text-base",
					children: t
				}),
				/* @__PURE__ */ V("div", {
					className: "ml-6 grid place-items-center py-2",
					children: /* @__PURE__ */ V(Vt, {
						"data-testid": "closeButton",
						"aria-label": "Close",
						onClick: l,
						size: "icon",
						className: M("border-0 bg-transparent p-4 shadow-none", {
							"hover:bg-fill-success-secondary!": e === "success",
							"hover:bg-fill-critical-secondary!": e === "danger",
							"hover:bg-fill-warning-secondary!": e === "warning",
							"hover:bg-fill-info-secondary!": e === "info"
						}),
						children: /* @__PURE__ */ V(G, {
							svg: /* @__PURE__ */ V(j, {}),
							className: "text-foreground-normal"
						})
					})
				})
			]
		})
	});
}
Jt.Title = ({ className: e, ...t }) => /* @__PURE__ */ V(Wt, {
	level: 3,
	className: M("text-foreground-normal font-medium", e),
	...t
}), Jt.Body = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: M("text-foreground-normal mt-2 text-sm font-normal", e),
	...t
}), Jt.defaultProps = { autoDismiss: !0 };
//#endregion
//#region src/alert/AlertProvider.tsx
var Yt = "alertsParentNode", Xt = ({ children: e }) => /* @__PURE__ */ H(Gt.Provider, {
	value: { parentNodeId: Yt },
	children: [e, /* @__PURE__ */ V("div", {
		className: "fixed bottom-2 left-0 z-50 w-full",
		children: /* @__PURE__ */ V("div", {
			"data-testid": "alertProvider",
			className: "container mx-auto sm:px-6 lg:px-8",
			id: Yt
		})
	})]
}), Zt = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(_e.Root, {
	ref: n,
	className: W("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
	...t
}));
Zt.displayName = _e.Root.displayName;
var Qt = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(_e.Image, {
	ref: n,
	className: W("aspect-square h-full w-full", e),
	...t
}));
Qt.displayName = _e.Image.displayName;
var $t = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(_e.Fallback, {
	ref: n,
	className: W("bg-background-surface flex h-full w-full items-center justify-center rounded-full", e),
	...t
}));
$t.displayName = _e.Fallback.displayName;
var en = Zt;
en.Image = Qt, en.Fallback = $t;
//#endregion
//#region src/badge/Badge.tsx
function tn({ colorScheme: e = "gray", size: t = "default", className: n, ...r }) {
	return /* @__PURE__ */ V("span", {
		className: W("inline-flex items-center rounded-full font-medium", { "px-3 py-0.5 text-sm": t === "default" }, { "px-1.5 py-0.5 text-sm": t === "sm" }, { "px-1.5 py-0.5 text-xs": t === "xs" }, { "px-3.5 py-1": t === "lg" }, { "bg-gray-100 text-gray-800 dark:bg-gray-200": e === "gray" }, { "bg-red-100 text-red-800 dark:bg-red-200": e === "red" }, { "bg-green-100 text-green-800 dark:bg-green-200": e === "green" }, { "bg-green-800 text-white": e === "darkGreen" }, { "bg-blue-100 text-blue-800 dark:bg-blue-200": e === "blue" }, { "bg-yellow-100 text-yellow-800 dark:bg-yellow-200": e === "yellow" }, { "bg-amber-100 text-amber-800 dark:bg-amber-200": e === "amber" }, { "bg-sunset-50 text-sunset": e === "sunset" }, { "bg-background-surface-secondary text-foreground-normal": e === "neutral" }, { "bg-primary text-foreground-on-brand-primary": e === "brand" }, n),
		...r
	});
}
//#endregion
//#region src/card/Card.tsx
var nn = ie(({ className: e, children: t, isDivided: n }, r) => /* @__PURE__ */ V("div", {
	ref: r,
	className: W("bg-background-surface border-border-normal rounded-xl border shadow-lg", { "divide-border-normal divide-y": n }, e),
	children: t
}));
nn.displayName = "Card";
var rn = ie(({ children: e, isFlushed: t, className: n, ...r }, i) => /* @__PURE__ */ V("div", {
	ref: i,
	className: W({ "px-4 py-5 sm:p-6": !t }, n),
	...r,
	children: e
}));
rn.displayName = "CardBody";
var an = ({ children: e, isFlushed: t, className: n, ...r }) => /* @__PURE__ */ V("div", {
	className: W({ "px-4 pt-5 sm:px-6 sm:pt-6": !t }, n),
	...r,
	children: e
}), on = ({ children: e, isFlushed: t, className: n, ...r }) => /* @__PURE__ */ V("div", {
	className: W("flex justify-end", { "px-4 py-5 sm:px-6": !t }, n),
	...r,
	children: e
}), sn = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("h-5 sm:h-6", e),
	...t
}), cn = nn;
cn.Body = rn, cn.Header = an, cn.Footer = on, cn.Spacer = sn;
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/extends.js
function ln() {
	return ln = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ln.apply(null, arguments);
}
//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.29.7/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function un(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region node_modules/.pnpm/@marijn+find-cluster-break@1.0.3/node_modules/@marijn/find-cluster-break/src/index.js
var dn = [], fn = [];
(() => {
	let e = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
	for (let t = 0, n = 0; t < e.length; t++) (t % 2 ? fn : dn).push(n += e[t]);
})();
function pn(e) {
	if (e < 768) return !1;
	for (let t = 0, n = dn.length;;) {
		let r = t + n >> 1;
		if (e < dn[r]) n = r;
		else if (e >= fn[r]) t = r + 1;
		else return !0;
		if (t == n) return !1;
	}
}
function mn(e) {
	return e >= 127462 && e <= 127487;
}
var hn = 8205;
function gn(e, t, n = !0, r = !0) {
	return (n ? _n : vn)(e, t, r);
}
function _n(e, t, n) {
	if (t == e.length) return t;
	t && bn(e.charCodeAt(t)) && xn(e.charCodeAt(t - 1)) && t--;
	let r = yn(e, t);
	for (t += Sn(r); t < e.length;) {
		let i = yn(e, t);
		if (r == hn || i == hn || n && pn(i)) t += Sn(i), r = i;
		else if (mn(i)) {
			let n = 0, r = t - 2;
			for (; r >= 0 && mn(yn(e, r));) n++, r -= 2;
			if (n % 2 == 0) break;
			t += 2;
		} else break;
	}
	return t;
}
function vn(e, t, n) {
	for (; t > 1;) {
		let r = _n(e, t - 2, n);
		if (r < t) return r;
		t--;
	}
	return 0;
}
function yn(e, t) {
	let n = e.charCodeAt(t);
	if (!xn(n) || t + 1 == e.length) return n;
	let r = e.charCodeAt(t + 1);
	return bn(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function bn(e) {
	return e >= 56320 && e < 57344;
}
function xn(e) {
	return e >= 55296 && e < 56320;
}
function Sn(e) {
	return e < 65536 ? 1 : 2;
}
//#endregion
//#region node_modules/.pnpm/@codemirror+state@6.7.1/node_modules/@codemirror/state/dist/index.js
var K = class e {
	lineAt(e) {
		if (e < 0 || e > this.length) throw RangeError(`Invalid position ${e} in document of length ${this.length}`);
		return this.lineInner(e, !1, 1, 0);
	}
	line(e) {
		if (e < 1 || e > this.lines) throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
		return this.lineInner(e, !0, 1, 0);
	}
	replace(e, t, n) {
		[e, t] = Mn(this, e, t);
		let r = [];
		return this.decompose(0, e, r, 2), n.length && n.decompose(0, n.length, r, 3), this.decompose(t, this.length, r, 1), wn.from(r, this.length - (t - e) + n.length);
	}
	append(e) {
		return this.replace(this.length, this.length, e);
	}
	slice(e, t = this.length) {
		[e, t] = Mn(this, e, t);
		let n = [];
		return this.decompose(e, t, n, 0), wn.from(n, t - e);
	}
	eq(e) {
		if (e == this) return !0;
		if (e.length != this.length || e.lines != this.lines) return !1;
		let t = this.scanIdentical(e, 1), n = this.length - this.scanIdentical(e, -1), r = new On(this), i = new On(e);
		for (let e = t, a = t;;) {
			if (r.next(e), i.next(e), e = 0, r.lineBreak != i.lineBreak || r.done != i.done || r.value != i.value) return !1;
			if (a += r.value.length, r.done || a >= n) return !0;
		}
	}
	iter(e = 1) {
		return new On(this, e);
	}
	iterRange(e, t = this.length) {
		return new kn(this, e, t);
	}
	iterLines(e, t) {
		let n;
		if (e == null) n = this.iter();
		else {
			t ??= this.lines + 1;
			let r = this.line(e).from;
			n = this.iterRange(r, Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to));
		}
		return new An(n);
	}
	toString() {
		return this.sliceString(0);
	}
	toJSON() {
		let e = [];
		return this.flatten(e), e;
	}
	constructor() {}
	static of(t) {
		if (t.length == 0) throw RangeError("A document must have at least one line");
		return t.length == 1 && !t[0] ? e.empty : t.length <= 32 ? new Cn(t) : wn.from(Cn.split(t, []));
	}
}, Cn = class e extends K {
	constructor(e, t = Tn(e)) {
		super(), this.text = e, this.length = t;
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(e, t, n, r) {
		for (let i = 0;; i++) {
			let a = this.text[i], o = r + a.length;
			if ((t ? n : o) >= e) return new jn(r, o, n, a);
			r = o + 1, n++;
		}
	}
	decompose(t, n, r, i) {
		let a = t <= 0 && n >= this.length ? this : new e(Dn(this.text, t, n), Math.min(n, this.length) - Math.max(0, t));
		if (i & 1) {
			let t = r.pop(), n = En(a.text, t.text.slice(), 0, a.length);
			if (n.length <= 32) r.push(new e(n, t.length + a.length));
			else {
				let t = n.length >> 1;
				r.push(new e(n.slice(0, t)), new e(n.slice(t)));
			}
		} else r.push(a);
	}
	replace(t, n, r) {
		if (!(r instanceof e)) return super.replace(t, n, r);
		[t, n] = Mn(this, t, n);
		let i = En(this.text, En(r.text, Dn(this.text, 0, t)), n), a = this.length + r.length - (n - t);
		return i.length <= 32 ? new e(i, a) : wn.from(e.split(i, []), a);
	}
	sliceString(e, t = this.length, n = "\n") {
		[e, t] = Mn(this, e, t);
		let r = "";
		for (let i = 0, a = 0; i <= t && a < this.text.length; a++) {
			let o = this.text[a], s = i + o.length;
			i > e && a && (r += n), e < s && t > i && (r += o.slice(Math.max(0, e - i), t - i)), i = s + 1;
		}
		return r;
	}
	flatten(e) {
		for (let t of this.text) e.push(t);
	}
	scanIdentical() {
		return 0;
	}
	static split(t, n) {
		let r = [], i = -1;
		for (let a of t) r.push(a), i += a.length + 1, r.length == 32 && (n.push(new e(r, i)), r = [], i = -1);
		return i > -1 && n.push(new e(r, i)), n;
	}
}, wn = class e extends K {
	constructor(e, t) {
		super(), this.children = e, this.length = t, this.lines = 0;
		for (let t of e) this.lines += t.lines;
	}
	lineInner(e, t, n, r) {
		for (let i = 0;; i++) {
			let a = this.children[i], o = r + a.length, s = n + a.lines - 1;
			if ((t ? s : o) >= e) return a.lineInner(e, t, n, r);
			r = o + 1, n = s + 1;
		}
	}
	decompose(e, t, n, r) {
		for (let i = 0, a = 0; a <= t && i < this.children.length; i++) {
			let o = this.children[i], s = a + o.length;
			if (e <= s && t >= a) {
				let i = r & (a <= e | (s >= t ? 2 : 0));
				a >= e && s <= t && !i ? n.push(o) : o.decompose(e - a, t - a, n, i);
			}
			a = s + 1;
		}
	}
	replace(t, n, r) {
		if ([t, n] = Mn(this, t, n), r.lines < this.lines) for (let i = 0, a = 0; i < this.children.length; i++) {
			let o = this.children[i], s = a + o.length;
			if (t >= a && n <= s) {
				let c = o.replace(t - a, n - a, r), l = this.lines - o.lines + c.lines;
				if (c.lines < l >> 4 && c.lines > l >> 6) {
					let a = this.children.slice();
					return a[i] = c, new e(a, this.length - (n - t) + r.length);
				}
				return super.replace(a, s, c);
			}
			a = s + 1;
		}
		return super.replace(t, n, r);
	}
	sliceString(e, t = this.length, n = "\n") {
		[e, t] = Mn(this, e, t);
		let r = "";
		for (let i = 0, a = 0; i < this.children.length && a <= t; i++) {
			let o = this.children[i], s = a + o.length;
			a > e && i && (r += n), e < s && t > a && (r += o.sliceString(e - a, t - a, n)), a = s + 1;
		}
		return r;
	}
	flatten(e) {
		for (let t of this.children) t.flatten(e);
	}
	scanIdentical(t, n) {
		if (!(t instanceof e)) return 0;
		let r = 0, [i, a, o, s] = n > 0 ? [
			0,
			0,
			this.children.length,
			t.children.length
		] : [
			this.children.length - 1,
			t.children.length - 1,
			-1,
			-1
		];
		for (;; i += n, a += n) {
			if (i == o || a == s) return r;
			let e = this.children[i], c = t.children[a];
			if (e != c) return r + e.scanIdentical(c, n);
			r += e.length + 1;
		}
	}
	static from(t, n = t.reduce((e, t) => e + t.length + 1, -1)) {
		let r = 0;
		for (let e of t) r += e.lines;
		if (r < 32) {
			let e = [];
			for (let n of t) n.flatten(e);
			return new Cn(e, n);
		}
		let i = Math.max(32, r >> 5), a = i << 1, o = i >> 1, s = [], c = 0, l = -1, u = [];
		function d(t) {
			let n;
			if (t.lines > a && t instanceof e) for (let e of t.children) d(e);
			else t.lines > o && (c > o || !c) ? (f(), s.push(t)) : t instanceof Cn && c && (n = u[u.length - 1]) instanceof Cn && t.lines + n.lines <= 32 ? (c += t.lines, l += t.length + 1, u[u.length - 1] = new Cn(n.text.concat(t.text), n.length + 1 + t.length)) : (c + t.lines > i && f(), c += t.lines, l += t.length + 1, u.push(t));
		}
		function f() {
			c != 0 && (s.push(u.length == 1 ? u[0] : e.from(u, l)), l = -1, c = u.length = 0);
		}
		for (let e of t) d(e);
		return f(), s.length == 1 ? s[0] : new e(s, n);
	}
};
K.empty = /*@__PURE__*/ new Cn([""], 0);
function Tn(e) {
	let t = -1;
	for (let n of e) t += n.length + 1;
	return t;
}
function En(e, t, n = 0, r = 1e9) {
	for (let i = 0, a = 0, o = !0; a < e.length && i <= r; a++) {
		let s = e[a], c = i + s.length;
		c >= n && (c > r && (s = s.slice(0, r - i)), i < n && (s = s.slice(n - i)), o ? (t[t.length - 1] += s, o = !1) : t.push(s)), i = c + 1;
	}
	return t;
}
function Dn(e, t, n) {
	return En(e, [""], t, n);
}
var On = class {
	constructor(e, t = 1) {
		this.dir = t, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [t > 0 ? 1 : (e instanceof Cn ? e.text.length : e.children.length) << 1];
	}
	nextInner(e, t) {
		for (this.done = this.lineBreak = !1;;) {
			let n = this.nodes.length - 1, r = this.nodes[n], i = this.offsets[n], a = i >> 1, o = r instanceof Cn ? r.text.length : r.children.length;
			if (a == (t > 0 ? o : 0)) {
				if (n == 0) return this.done = !0, this.value = "", this;
				t > 0 && this.offsets[n - 1]++, this.nodes.pop(), this.offsets.pop();
			} else if ((i & 1) == (t > 0 ? 0 : 1)) {
				if (this.offsets[n] += t, e == 0) return this.lineBreak = !0, this.value = "\n", this;
				e--;
			} else if (r instanceof Cn) {
				let i = r.text[a + (t < 0 ? -1 : 0)];
				if (this.offsets[n] += t, i.length > Math.max(0, e)) return this.value = e == 0 ? i : t > 0 ? i.slice(e) : i.slice(0, i.length - e), this;
				e -= i.length;
			} else {
				let i = r.children[a + (t < 0 ? -1 : 0)];
				e > i.length ? (e -= i.length, this.offsets[n] += t) : (t < 0 && this.offsets[n]--, this.nodes.push(i), this.offsets.push(t > 0 ? 1 : (i instanceof Cn ? i.text.length : i.children.length) << 1));
			}
		}
	}
	next(e = 0) {
		return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
	}
}, kn = class {
	constructor(e, t, n) {
		this.value = "", this.done = !1, this.cursor = new On(e, t > n ? -1 : 1), this.pos = t > n ? e.length : 0, this.from = Math.min(t, n), this.to = Math.max(t, n);
	}
	nextInner(e, t) {
		if (t < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
		e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
		let n = t < 0 ? this.pos - this.from : this.to - this.pos;
		e > n && (e = n), n -= e;
		let { value: r } = this.cursor.next(e);
		return this.pos += (r.length + e) * t, this.value = r.length <= n ? r : t < 0 ? r.slice(r.length - n) : r.slice(0, n), this.done = !this.value, this;
	}
	next(e = 0) {
		return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != "";
	}
}, An = class {
	constructor(e) {
		this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
	}
	next(e = 0) {
		let { done: t, lineBreak: n, value: r } = this.inner.next(e);
		return t && this.afterBreak ? (this.value = "", this.afterBreak = !1) : t ? (this.done = !0, this.value = "") : n ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
	}
	get lineBreak() {
		return !1;
	}
};
typeof Symbol < "u" && (K.prototype[Symbol.iterator] = function() {
	return this.iter();
}, On.prototype[Symbol.iterator] = kn.prototype[Symbol.iterator] = An.prototype[Symbol.iterator] = function() {
	return this;
});
var jn = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.number = n, this.text = r;
	}
	get length() {
		return this.to - this.from;
	}
};
function Mn(e, t, n) {
	return t = Math.max(0, Math.min(e.length, t)), [t, Math.max(t, Math.min(e.length, n))];
}
function Nn(e, t, n = !0, r = !0) {
	return gn(e, t, n, r);
}
function Pn(e) {
	return e >= 56320 && e < 57344;
}
function Fn(e) {
	return e >= 55296 && e < 56320;
}
function In(e, t) {
	let n = e.charCodeAt(t);
	if (!Fn(n) || t + 1 == e.length) return n;
	let r = e.charCodeAt(t + 1);
	return Pn(r) ? (n - 55296 << 10) + (r - 56320) + 65536 : n;
}
function Ln(e) {
	return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
function Rn(e) {
	return e < 65536 ? 1 : 2;
}
var zn = /\r\n?|\n/, Bn = /*@__PURE__*/ (function(e) {
	return e[e.Simple = 0] = "Simple", e[e.TrackDel = 1] = "TrackDel", e[e.TrackBefore = 2] = "TrackBefore", e[e.TrackAfter = 3] = "TrackAfter", e;
})(Bn ||= {}), Vn = class e {
	constructor(e) {
		this.sections = e;
	}
	get length() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
		return e;
	}
	get newLength() {
		let e = 0;
		for (let t = 0; t < this.sections.length; t += 2) {
			let n = this.sections[t + 1];
			e += n < 0 ? this.sections[t] : n;
		}
		return e;
	}
	get empty() {
		return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
	}
	iterGaps(e) {
		for (let t = 0, n = 0, r = 0; t < this.sections.length;) {
			let i = this.sections[t++], a = this.sections[t++];
			a < 0 ? (e(n, r, i), r += i) : r += a, n += i;
		}
	}
	iterChangedRanges(e, t = !1) {
		Gn(this, e, t);
	}
	get invertedDesc() {
		let t = [];
		for (let e = 0; e < this.sections.length;) {
			let n = this.sections[e++], r = this.sections[e++];
			r < 0 ? t.push(n, r) : t.push(r, n);
		}
		return new e(t);
	}
	composeDesc(e) {
		return this.empty ? e : e.empty ? this : qn(this, e);
	}
	mapDesc(e, t = !1) {
		return e.empty ? this : Kn(this, e, t);
	}
	mapPos(e, t = -1, n = Bn.Simple) {
		let r = 0, i = 0;
		for (let a = 0; a < this.sections.length;) {
			let o = this.sections[a++], s = this.sections[a++], c = r + o;
			if (s < 0) {
				if (c > e) return i + (e - r);
				i += o;
			} else {
				if (n != Bn.Simple && c >= e && (n == Bn.TrackDel && r < e && c > e || n == Bn.TrackBefore && r < e || n == Bn.TrackAfter && c > e)) return null;
				if (c > e || c == e && t < 0 && !o) return e == r || t < 0 ? i : i + s;
				i += s;
			}
			r = c;
		}
		if (e > r) throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);
		return i;
	}
	touchesRange(e, t = e) {
		for (let n = 0, r = 0; n < this.sections.length && r <= t;) {
			let i = this.sections[n++], a = this.sections[n++], o = r + i;
			if (a >= 0 && r <= t && o >= e) return r < e && o > t ? "cover" : !0;
			r = o;
		}
		return !1;
	}
	toString() {
		let e = "";
		for (let t = 0; t < this.sections.length;) {
			let n = this.sections[t++], r = this.sections[t++];
			e += (e ? " " : "") + n + (r >= 0 ? ":" + r : "");
		}
		return e;
	}
	toJSON() {
		return this.sections;
	}
	static fromJSON(t) {
		if (!Array.isArray(t) || t.length % 2 || t.some((e) => typeof e != "number")) throw RangeError("Invalid JSON representation of ChangeDesc");
		return new e(t);
	}
	static create(t) {
		return new e(t);
	}
}, Hn = class e extends Vn {
	constructor(e, t) {
		super(e), this.inserted = t;
	}
	apply(e) {
		if (this.length != e.length) throw RangeError("Applying change set to a document with the wrong length");
		return Gn(this, (t, n, r, i, a) => e = e.replace(r, r + (n - t), a), !1), e;
	}
	mapDesc(e, t = !1) {
		return Kn(this, e, t, !0);
	}
	invert(t) {
		let n = this.sections.slice(), r = [];
		for (let e = 0, i = 0; e < n.length; e += 2) {
			let a = n[e], o = n[e + 1];
			if (o >= 0) {
				n[e] = o, n[e + 1] = a;
				let s = e >> 1;
				for (; r.length < s;) r.push(K.empty);
				r.push(a ? t.slice(i, i + a) : K.empty);
			}
			i += a;
		}
		return new e(n, r);
	}
	compose(e) {
		return this.empty ? e : e.empty ? this : qn(this, e, !0);
	}
	map(e, t = !1) {
		return e.empty ? this : Kn(this, e, t, !0);
	}
	iterChanges(e, t = !1) {
		Gn(this, e, t);
	}
	get desc() {
		return Vn.create(this.sections);
	}
	filter(t) {
		let n = [], r = [], i = [], a = new Jn(this);
		done: for (let e = 0, o = 0;;) {
			let s = e == t.length ? 1e9 : t[e++];
			for (; o < s || o == s && a.len == 0;) {
				if (a.done) break done;
				let e = Math.min(a.len, s - o);
				Un(i, e, -1);
				let t = a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0;
				Un(n, e, t), t > 0 && Wn(r, n, a.text), a.forward(e), o += e;
			}
			let c = t[e++];
			for (; o < c;) {
				if (a.done) break done;
				let e = Math.min(a.len, c - o);
				Un(n, e, -1), Un(i, e, a.ins == -1 ? -1 : a.off == 0 ? a.ins : 0), a.forward(e), o += e;
			}
		}
		return {
			changes: new e(n, r),
			filtered: Vn.create(i)
		};
	}
	toJSON() {
		let e = [];
		for (let t = 0; t < this.sections.length; t += 2) {
			let n = this.sections[t], r = this.sections[t + 1];
			r < 0 ? e.push(n) : r == 0 ? e.push([n]) : e.push([n].concat(this.inserted[t >> 1].toJSON()));
		}
		return e;
	}
	static of(t, n, r) {
		let i = [], a = [], o = 0, s = null;
		function c(t = !1) {
			if (!t && !i.length) return;
			o < n && Un(i, n - o, -1);
			let r = new e(i, a);
			s = s ? s.compose(r.map(s)) : r, i = [], a = [], o = 0;
		}
		function l(t) {
			if (Array.isArray(t)) for (let e of t) l(e);
			else if (t instanceof e) {
				if (t.length != n) throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);
				c(), s = s ? s.compose(t.map(s)) : t;
			} else {
				let { from: e, to: s = e, insert: l } = t;
				if (e > s || e < 0 || s > n) throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);
				let u = l ? typeof l == "string" ? K.of(l.split(r || zn)) : l : K.empty, d = u.length;
				if (e == s && d == 0) return;
				e < o && c(), e > o && Un(i, e - o, -1), Un(i, s - e, d), Wn(a, i, u), o = s;
			}
		}
		return l(t), c(!s), s;
	}
	static empty(t) {
		return new e(t ? [t, -1] : [], []);
	}
	static fromJSON(t) {
		if (!Array.isArray(t)) throw RangeError("Invalid JSON representation of ChangeSet");
		let n = [], r = [];
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			if (typeof i == "number") n.push(i, -1);
			else if (!Array.isArray(i) || typeof i[0] != "number" || i.some((e, t) => t && typeof e != "string")) throw RangeError("Invalid JSON representation of ChangeSet");
			else if (i.length == 1) n.push(i[0], 0);
			else {
				for (; r.length < e;) r.push(K.empty);
				r[e] = K.of(i.slice(1)), n.push(i[0], r[e].length);
			}
		}
		return new e(n, r);
	}
	static createSet(t, n) {
		return new e(t, n);
	}
};
function Un(e, t, n, r = !1) {
	if (t == 0 && n <= 0) return;
	let i = e.length - 2;
	i >= 0 && n <= 0 && n == e[i + 1] ? e[i] += t : i >= 0 && t == 0 && e[i] == 0 ? e[i + 1] += n : r ? (e[i] += t, e[i + 1] += n) : e.push(t, n);
}
function Wn(e, t, n) {
	if (n.length == 0) return;
	let r = t.length - 2 >> 1;
	if (r < e.length) e[e.length - 1] = e[e.length - 1].append(n);
	else {
		for (; e.length < r;) e.push(K.empty);
		e.push(n);
	}
}
function Gn(e, t, n) {
	let r = e.inserted;
	for (let i = 0, a = 0, o = 0; o < e.sections.length;) {
		let s = e.sections[o++], c = e.sections[o++];
		if (c < 0) i += s, a += s;
		else {
			let l = i, u = a, d = K.empty;
			for (; l += s, u += c, c && r && (d = d.append(r[o - 2 >> 1])), !(n || o == e.sections.length || e.sections[o + 1] < 0);) s = e.sections[o++], c = e.sections[o++];
			t(i, l, a, u, d), i = l, a = u;
		}
	}
}
function Kn(e, t, n, r = !1) {
	let i = [], a = r ? [] : null, o = new Jn(e), s = new Jn(t);
	for (let e = -1;;) if (o.done && s.len || s.done && o.len) throw Error("Mismatched change set lengths");
	else if (o.ins == -1 && s.ins == -1) {
		let e = Math.min(o.len, s.len);
		Un(i, e, -1), o.forward(e), s.forward(e);
	} else if (s.ins >= 0 && (o.ins < 0 || e == o.i || o.off == 0 && (s.len < o.len || s.len == o.len && !n))) {
		let t = s.len;
		for (Un(i, s.ins, -1); t;) {
			let n = Math.min(o.len, t);
			o.ins >= 0 && e < o.i && o.len <= n && (Un(i, 0, o.ins), a && Wn(a, i, o.text), e = o.i), o.forward(n), t -= n;
		}
		s.next();
	} else if (o.ins >= 0) {
		let t = 0, n = o.len;
		for (; n;) if (s.ins == -1) {
			let e = Math.min(n, s.len);
			t += e, n -= e, s.forward(e);
		} else if (s.ins == 0 && s.len < n) n -= s.len, s.next();
		else break;
		Un(i, t, e < o.i ? o.ins : 0), a && e < o.i && Wn(a, i, o.text), e = o.i, o.forward(o.len - n);
	} else if (o.done && s.done) return a ? Hn.createSet(i, a) : Vn.create(i);
	else throw Error("Mismatched change set lengths");
}
function qn(e, t, n = !1) {
	let r = [], i = n ? [] : null, a = new Jn(e), o = new Jn(t);
	for (let e = !1;;) if (a.done && o.done) return i ? Hn.createSet(r, i) : Vn.create(r);
	else if (a.ins == 0) Un(r, a.len, 0, e), a.next();
	else if (o.len == 0 && !o.done) Un(r, 0, o.ins, e), i && Wn(i, r, o.text), o.next();
	else if (a.done || o.done) throw Error("Mismatched change set lengths");
	else {
		let t = Math.min(a.len2, o.len), n = r.length;
		if (a.ins == -1) {
			let n = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
			Un(r, t, n, e), i && n && Wn(i, r, o.text);
		} else o.ins == -1 ? (Un(r, a.off ? 0 : a.len, t, e), i && Wn(i, r, a.textBit(t))) : (Un(r, a.off ? 0 : a.len, o.off ? 0 : o.ins, e), i && !o.off && Wn(i, r, o.text));
		e = (a.ins > t || o.ins >= 0 && o.len > t) && (e || r.length > n), a.forward2(t), o.forward(t);
	}
}
var Jn = class {
	constructor(e) {
		this.set = e, this.i = 0, this.next();
	}
	next() {
		let { sections: e } = this.set;
		this.i < e.length ? (this.len = e[this.i++], this.ins = e[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted: e } = this.set, t = this.i - 2 >> 1;
		return t >= e.length ? K.empty : e[t];
	}
	textBit(e) {
		let { inserted: t } = this.set, n = this.i - 2 >> 1;
		return n >= t.length && !e ? K.empty : t[n].slice(this.off, e == null ? void 0 : this.off + e);
	}
	forward(e) {
		e == this.len ? this.next() : (this.len -= e, this.off += e);
	}
	forward2(e) {
		this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
	}
}, Yn = class e {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.flags = n, this.goalColumn = r;
	}
	get anchor() {
		return this.flags & 32 ? this.to : this.from;
	}
	get head() {
		return this.flags & 32 ? this.from : this.to;
	}
	get empty() {
		return this.from == this.to;
	}
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
	}
	get undirectional() {
		return (this.flags & 64) > 0;
	}
	get bidiLevel() {
		let e = this.flags & 7;
		return e == 7 ? null : e;
	}
	map(t, n = -1) {
		let r, i;
		return this.empty ? r = i = t.mapPos(this.from, n) : (r = t.mapPos(this.from, 1), i = t.mapPos(this.to, -1)), r == this.from && i == this.to ? this : new e(r, i, this.flags, this.goalColumn);
	}
	extend(e, t = e, n = 0) {
		if (e <= this.anchor && t >= this.anchor) return q.range(e, t, void 0, void 0, n);
		let r = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
		return q.range(this.anchor, r, void 0, void 0, n);
	}
	eq(e, t = !1) {
		return this.anchor == e.anchor && this.head == e.head && this.goalColumn == e.goalColumn && (!t || !this.empty || this.assoc == e.assoc);
	}
	toJSON() {
		return {
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(e) {
		if (!e || typeof e.anchor != "number" || typeof e.head != "number") throw RangeError("Invalid JSON representation for SelectionRange");
		return q.range(e.anchor, e.head);
	}
	static create(t, n, r, i) {
		return new e(t, n, r, i);
	}
}, q = class e {
	constructor(e, t) {
		this.ranges = e, this.mainIndex = t;
	}
	map(t, n = -1) {
		return t.empty ? this : e.create(this.ranges.map((e) => e.map(t, n)), this.mainIndex);
	}
	eq(e, t = !1) {
		if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
		for (let n = 0; n < this.ranges.length; n++) if (!this.ranges[n].eq(e.ranges[n], t)) return !1;
		return !0;
	}
	get main() {
		return this.ranges[this.mainIndex];
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new e([this.main], 0);
	}
	addRange(t, n = !0) {
		return e.create([t].concat(this.ranges), n ? 0 : this.mainIndex + 1);
	}
	replaceRange(t, n = this.mainIndex) {
		let r = this.ranges.slice();
		return r[n] = t, e.create(r, this.mainIndex);
	}
	toJSON() {
		return {
			ranges: this.ranges.map((e) => e.toJSON()),
			main: this.mainIndex
		};
	}
	static fromJSON(t) {
		if (!t || !Array.isArray(t.ranges) || typeof t.main != "number" || t.main >= t.ranges.length) throw RangeError("Invalid JSON representation for EditorSelection");
		return new e(t.ranges.map((e) => Yn.fromJSON(e)), t.main);
	}
	static single(t, n = t) {
		return new e([e.range(t, n)], 0);
	}
	static create(t, n = 0) {
		if (t.length == 0) throw RangeError("A selection needs at least one range");
		for (let r = 0, i = 0; i < t.length; i++) {
			let a = t[i];
			if (a.empty ? a.from <= r : a.from < r) return e.normalized(t.slice(), n);
			r = a.to;
		}
		return new e(t, n);
	}
	static cursor(e, t = 0, n, r) {
		return Yn.create(e, e, (t == 0 ? 0 : t < 0 ? 8 : 16) | (n == null ? 7 : Math.min(6, n)), r);
	}
	static range(e, t, n, r, i) {
		let a = r == null ? 7 : Math.min(6, r);
		return !i && e != t && (i = t < e ? 1 : -1), i && (a |= i < 0 ? 8 : 16), t < e ? Yn.create(t, e, a | 32, n) : Yn.create(e, t, a, n);
	}
	static undirectionalRange(e, t) {
		return Yn.create(e, t, 64, void 0);
	}
	static normalized(t, n = 0) {
		let r = t[n];
		t.sort((e, t) => e.from - t.from), n = t.indexOf(r);
		for (let r = 1; r < t.length; r++) {
			let i = t[r], a = t[r - 1];
			if (i.empty ? i.from <= a.to : i.from < a.to) {
				let o = a.from, s = Math.max(i.to, a.to);
				r <= n && n--, t.splice(--r, 2, i.anchor > i.head ? e.range(s, o) : e.range(o, s));
			}
		}
		return new e(t, n);
	}
};
function Xn(e, t) {
	for (let n of e.ranges) if (n.to > t) throw RangeError("Selection points outside of document");
}
var Zn = 0, J = class e {
	constructor(e, t, n, r, i) {
		this.combine = e, this.compareInput = t, this.compare = n, this.isStatic = r, this.id = Zn++, this.default = e([]), this.extensions = typeof i == "function" ? i(this) : i;
	}
	get reader() {
		return this;
	}
	static define(t = {}) {
		return new e(t.combine || ((e) => e), t.compareInput || ((e, t) => e === t), t.compare || (t.combine ? (e, t) => e === t : Qn), !!t.static, t.enables);
	}
	of(e) {
		return new $n([], this, 0, e);
	}
	compute(e, t) {
		if (this.isStatic) throw Error("Can't compute a static facet");
		return new $n(e, this, 1, t);
	}
	computeN(e, t) {
		if (this.isStatic) throw Error("Can't compute a static facet");
		return new $n(e, this, 2, t);
	}
	from(e, t) {
		return t ||= (e) => e, this.compute([e], (n) => t(n.field(e)));
	}
};
function Qn(e, t) {
	return e == t || e.length == t.length && e.every((e, n) => e === t[n]);
}
var $n = class {
	constructor(e, t, n, r) {
		this.dependencies = e, this.facet = t, this.type = n, this.value = r, this.id = Zn++;
	}
	dynamicSlot(e) {
		let t = this.value, n = this.facet.compareInput, r = this.id, i = e[r] >> 1, a = this.type == 2, o = !1, s = !1, c = [];
		for (let t of this.dependencies) t == "doc" ? o = !0 : t == "selection" ? s = !0 : (e[t.id] ?? 1) & 1 || c.push(e[t.id]);
		return {
			create(e) {
				return e.values[i] = t(e), 1;
			},
			update(e, r) {
				if (o && r.docChanged || s && (r.docChanged || r.selection) || tr(e, c)) {
					let r = t(e);
					if (a ? !er(r, e.values[i], n) : !n(r, e.values[i])) return e.values[i] = r, 1;
				}
				return 0;
			},
			reconfigure: (e, o) => {
				let s, c = o.config.address[r];
				if (c != null) {
					let r = mr(o, c);
					if (this.dependencies.every((t) => t instanceof J ? o.facet(t) === e.facet(t) : t instanceof ir ? o.field(t, !1) == e.field(t, !1) : !0) || (a ? er(s = t(e), r, n) : n(s = t(e), r))) return e.values[i] = r, 0;
				} else s = t(e);
				return e.values[i] = s, 1;
			}
		};
	}
	get extension() {
		return this;
	}
};
function er(e, t, n) {
	if (e.length != t.length) return !1;
	for (let r = 0; r < e.length; r++) if (!n(e[r], t[r])) return !1;
	return !0;
}
function tr(e, t) {
	let n = !1;
	for (let r of t) pr(e, r) & 1 && (n = !0);
	return n;
}
function nr(e, t, n) {
	let r = n.map((t) => e[t.id]), i = n.map((e) => e.type), a = r.filter((e) => !(e & 1)), o = e[t.id] >> 1;
	function s(e) {
		let n = [];
		for (let t = 0; t < r.length; t++) {
			let a = mr(e, r[t]);
			if (i[t] == 2) for (let e of a) n.push(e);
			else n.push(a);
		}
		return t.combine(n);
	}
	return {
		create(e) {
			for (let t of r) pr(e, t);
			return e.values[o] = s(e), 1;
		},
		update(e, n) {
			if (!tr(e, a)) return 0;
			let r = s(e);
			return t.compare(r, e.values[o]) ? 0 : (e.values[o] = r, 1);
		},
		reconfigure(e, i) {
			let a = tr(e, r), c = i.config.facets[t.id], l = i.facet(t);
			if (c && !a && Qn(n, c)) return e.values[o] = l, 0;
			let u = s(e);
			return t.compare(u, l) ? (e.values[o] = l, 0) : (e.values[o] = u, 1);
		}
	};
}
var rr = /*@__PURE__*/ J.define({ static: !0 }), ir = class e {
	constructor(e, t, n, r, i) {
		this.id = e, this.createF = t, this.updateF = n, this.compareF = r, this.spec = i, this.provides = void 0;
	}
	static define(t) {
		let n = new e(Zn++, t.create, t.update, t.compare || ((e, t) => e === t), t);
		return t.provide && (n.provides = t.provide(n)), n;
	}
	create(e) {
		return (e.facet(rr).find((e) => e.field == this)?.create || this.createF)(e);
	}
	slot(e) {
		let t = e[this.id] >> 1;
		return {
			create: (e) => (e.values[t] = this.create(e), 1),
			update: (e, n) => {
				let r = e.values[t], i = this.updateF(r, n);
				return this.compareF(r, i) ? 0 : (e.values[t] = i, 1);
			},
			reconfigure: (e, n) => {
				let r = e.facet(rr), i = n.facet(rr), a;
				return (a = r.find((e) => e.field == this)) && a != i.find((e) => e.field == this) ? (e.values[t] = a.create(e), 1) : n.config.address[this.id] == null ? (e.values[t] = this.create(e), 1) : (e.values[t] = n.field(this), 0);
			}
		};
	}
	init(e) {
		return [this, rr.of({
			field: this,
			create: e
		})];
	}
	get extension() {
		return this;
	}
}, ar = {
	lowest: 4,
	low: 3,
	default: 2,
	high: 1,
	highest: 0
};
function or(e) {
	return (t) => new cr(t, e);
}
var sr = {
	highest: /*@__PURE__*/ or(ar.highest),
	high: /*@__PURE__*/ or(ar.high),
	default: /*@__PURE__*/ or(ar.default),
	low: /*@__PURE__*/ or(ar.low),
	lowest: /*@__PURE__*/ or(ar.lowest)
}, cr = class {
	constructor(e, t) {
		this.inner = e, this.prec = t;
	}
	get extension() {
		return this;
	}
}, lr = class e {
	of(e) {
		return new ur(this, e);
	}
	reconfigure(t) {
		return e.reconfigure.of({
			compartment: this,
			extension: t
		});
	}
	get(e) {
		return e.config.compartments.get(this);
	}
}, ur = class {
	constructor(e, t) {
		this.compartment = e, this.inner = t;
	}
	get extension() {
		return this;
	}
}, dr = class e {
	constructor(e, t, n, r, i, a) {
		for (this.base = e, this.compartments = t, this.dynamicSlots = n, this.address = r, this.staticValues = i, this.facets = a, this.statusTemplate = []; this.statusTemplate.length < n.length;) this.statusTemplate.push(0);
	}
	staticFacet(e) {
		let t = this.address[e.id];
		return t == null ? e.default : this.staticValues[t >> 1];
	}
	static resolve(t, n, r) {
		let i = [], a = Object.create(null), o = /* @__PURE__ */ new Map();
		for (let e of fr(t, n, o)) e instanceof ir ? i.push(e) : (a[e.facet.id] || (a[e.facet.id] = [])).push(e);
		let s = Object.create(null), c = [], l = [];
		for (let e of i) s[e.id] = l.length << 1, l.push((t) => e.slot(t));
		let u = r?.config.facets;
		for (let e in a) {
			let t = a[e], n = t[0].facet, i = u && u[e] || [];
			if (t.every((e) => e.type == 0)) if (s[n.id] = c.length << 1 | 1, Qn(i, t)) c.push(r.facet(n));
			else {
				let e = n.combine(t.map((e) => e.value));
				c.push(r && n.compare(e, r.facet(n)) ? r.facet(n) : e);
			}
			else {
				for (let e of t) e.type == 0 ? (s[e.id] = c.length << 1 | 1, c.push(e.value)) : (s[e.id] = l.length << 1, l.push((t) => e.dynamicSlot(t)));
				s[n.id] = l.length << 1, l.push((e) => nr(e, n, t));
			}
		}
		let d = l.map((e) => e(s));
		return new e(t, o, d, s, c, a);
	}
};
function fr(e, t, n) {
	let r = [
		[],
		[],
		[],
		[],
		[]
	], i = /* @__PURE__ */ new Map();
	function a(e, o) {
		let s = i.get(e);
		if (s != null) {
			if (s <= o) return;
			let t = r[s].indexOf(e);
			t > -1 && r[s].splice(t, 1), e instanceof ur && n.delete(e.compartment);
		}
		if (i.set(e, o), Array.isArray(e)) for (let t of e) a(t, o);
		else if (e instanceof ur) {
			if (n.has(e.compartment)) throw RangeError("Duplicate use of compartment in extensions");
			let r = t.get(e.compartment) || e.inner;
			n.set(e.compartment, r), a(r, o);
		} else if (e instanceof cr) a(e.inner, e.prec);
		else if (e instanceof ir) r[o].push(e), e.provides && a(e.provides, o);
		else if (e instanceof $n) r[o].push(e), e.facet.extensions && a(e.facet.extensions, ar.default);
		else {
			let t = e.extension;
			if (!t) throw Error(`Unrecognized extension value in extension set (${e}).`);
			if (t == e) throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
			a(t, o);
		}
	}
	return a(e, ar.default), r.reduce((e, t) => e.concat(t));
}
function pr(e, t) {
	if (t & 1) return 2;
	let n = t >> 1, r = e.status[n];
	if (r == 4) throw Error("Cyclic dependency between fields and/or facets");
	if (r & 2) return r;
	e.status[n] = 4;
	let i = e.computeSlot(e, e.config.dynamicSlots[n]);
	return e.status[n] = 2 | i;
}
function mr(e, t) {
	return t & 1 ? e.config.staticValues[t >> 1] : e.values[t >> 1];
}
var hr = /*@__PURE__*/ J.define(), gr = /*@__PURE__*/ J.define({
	combine: (e) => e.some((e) => e),
	static: !0
}), _r = /*@__PURE__*/ J.define({
	combine: (e) => e.length ? e[0] : void 0,
	static: !0
}), vr = /*@__PURE__*/ J.define(), yr = /*@__PURE__*/ J.define(), br = /*@__PURE__*/ J.define(), xr = /*@__PURE__*/ J.define({ combine: (e) => e.length ? e[0] : !1 }), Sr = class {
	constructor(e, t) {
		this.type = e, this.value = t;
	}
	static define() {
		return new Cr();
	}
}, Cr = class {
	of(e) {
		return new Sr(this, e);
	}
}, wr = class {
	constructor(e) {
		this.map = e;
	}
	of(e) {
		return new Y(this, e);
	}
}, Y = class e {
	constructor(e, t) {
		this.type = e, this.value = t;
	}
	map(t) {
		let n = this.type.map(this.value, t);
		return n === void 0 ? void 0 : n == this.value ? this : new e(this.type, n);
	}
	is(e) {
		return this.type == e;
	}
	static define(e = {}) {
		return new wr(e.map || ((e) => e));
	}
	static mapEffects(e, t) {
		if (!e.length) return e;
		let n = [];
		for (let r of e) {
			let e = r.map(t);
			e && n.push(e);
		}
		return n;
	}
};
Y.reconfigure = /*@__PURE__*/ Y.define(), Y.appendConfig = /*@__PURE__*/ Y.define();
var Tr = class e {
	constructor(t, n, r, i, a, o) {
		this.startState = t, this.changes = n, this.selection = r, this.effects = i, this.annotations = a, this.scrollIntoView = o, this._doc = null, this._state = null, r && Xn(r, n.newLength), a.some((t) => t.type == e.time) || (this.annotations = a.concat(e.time.of(Date.now())));
	}
	static create(t, n, r, i, a, o) {
		return new e(t, n, r, i, a, o);
	}
	get newDoc() {
		return this._doc ||= this.changes.apply(this.startState.doc);
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state;
	}
	annotation(e) {
		for (let t of this.annotations) if (t.type == e) return t.value;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	isUserEvent(t) {
		let n = this.annotation(e.userEvent);
		return !!(n && (n == t || n.length > t.length && n.slice(0, t.length) == t && n[t.length] == "."));
	}
};
Tr.time = /*@__PURE__*/ Sr.define(), Tr.userEvent = /*@__PURE__*/ Sr.define(), Tr.addToHistory = /*@__PURE__*/ Sr.define(), Tr.remote = /*@__PURE__*/ Sr.define();
function Er(e, t) {
	let n = [];
	for (let r = 0, i = 0;;) {
		let a, o;
		if (r < e.length && (i == t.length || t[i] >= e[r])) a = e[r++], o = e[r++];
		else if (i < t.length) a = t[i++], o = t[i++];
		else return n;
		!n.length || n[n.length - 1] < a ? n.push(a, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
	}
}
function Dr(e, t, n) {
	let r, i, a;
	return n ? (r = t.changes, i = Hn.empty(t.changes.length), a = e.changes.compose(t.changes)) : (r = t.changes.map(e.changes), i = e.changes.mapDesc(t.changes, !0), a = e.changes.compose(r)), {
		changes: a,
		selection: t.selection ? t.selection.map(i) : e.selection?.map(r),
		effects: Y.mapEffects(e.effects, r).concat(Y.mapEffects(t.effects, i)),
		annotations: e.annotations.length ? e.annotations.concat(t.annotations) : t.annotations,
		scrollIntoView: e.scrollIntoView || t.scrollIntoView
	};
}
function Or(e, t, n) {
	let r = t.selection, i = Nr(t.annotations);
	return t.userEvent && (i = i.concat(Tr.userEvent.of(t.userEvent))), {
		changes: t.changes instanceof Hn ? t.changes : Hn.of(t.changes || [], n, e.facet(_r)),
		selection: r && (r instanceof q ? r : q.single(r.anchor, r.head)),
		effects: Nr(t.effects),
		annotations: i,
		scrollIntoView: !!t.scrollIntoView
	};
}
function kr(e, t, n) {
	let r = Or(e, t.length ? t[0] : {}, e.doc.length);
	t.length && t[0].filter === !1 && (n = !1);
	for (let i = 1; i < t.length; i++) {
		t[i].filter === !1 && (n = !1);
		let a = !!t[i].sequential;
		r = Dr(r, Or(e, t[i], a ? r.changes.newLength : e.doc.length), a);
	}
	let i = Tr.create(e, r.changes, r.selection, r.effects, r.annotations, r.scrollIntoView);
	return jr(n ? Ar(i) : i);
}
function Ar(e) {
	let t = e.startState, n = !0;
	for (let r of t.facet(vr)) {
		let t = r(e);
		if (t === !1) {
			n = !1;
			break;
		}
		Array.isArray(t) && (n = n === !0 ? t : Er(n, t));
	}
	if (n !== !0) {
		let r, i;
		if (n === !1) i = e.changes.invertedDesc, r = Hn.empty(t.doc.length);
		else {
			let t = e.changes.filter(n);
			r = t.changes, i = t.filtered.mapDesc(t.changes).invertedDesc;
		}
		e = Tr.create(t, r, e.selection && e.selection.map(i), Y.mapEffects(e.effects, i), e.annotations, e.scrollIntoView);
	}
	let r = t.facet(yr);
	for (let n = r.length - 1; n >= 0; n--) {
		let i = r[n](e);
		e = i instanceof Tr ? i : Array.isArray(i) && i.length == 1 && i[0] instanceof Tr ? i[0] : kr(t, Nr(i), !1);
	}
	return e;
}
function jr(e) {
	let t = e.startState, n = t.facet(br), r = e;
	for (let i = n.length - 1; i >= 0; i--) {
		let a = n[i](e);
		a && Object.keys(a).length && (r = Dr(r, Or(t, a, e.changes.newLength), !0));
	}
	return r == e ? e : Tr.create(t, e.changes, e.selection, r.effects, r.annotations, r.scrollIntoView);
}
var Mr = [];
function Nr(e) {
	return e == null ? Mr : Array.isArray(e) ? e : [e];
}
var Pr = /*@__PURE__*/ (function(e) {
	return e[e.Word = 0] = "Word", e[e.Space = 1] = "Space", e[e.Other = 2] = "Other", e;
})(Pr ||= {}), Fr = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Ir;
try {
	Ir = /*@__PURE__*/ RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function Lr(e) {
	if (Ir) return Ir.test(e);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || Fr.test(n))) return !0;
	}
	return !1;
}
function Rr(e) {
	return (t) => {
		if (!/\S/.test(t)) return Pr.Space;
		if (Lr(t)) return Pr.Word;
		for (let n = 0; n < e.length; n++) if (t.indexOf(e[n]) > -1) return Pr.Word;
		return Pr.Other;
	};
}
var zr = class e {
	constructor(e, t, n, r, i, a) {
		this.config = e, this.doc = t, this.selection = n, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = i, a && (a._state = this);
		for (let e = 0; e < this.config.dynamicSlots.length; e++) pr(this, e << 1);
		this.computeSlot = null;
	}
	field(e, t = !0) {
		let n = this.config.address[e.id];
		if (n == null) {
			if (t) throw RangeError("Field is not present in this state");
			return;
		}
		return pr(this, n), mr(this, n);
	}
	update(...e) {
		return kr(this, e, !0);
	}
	applyTransaction(t) {
		let n = this.config, { base: r, compartments: i } = n;
		for (let e of t.effects) e.is(lr.reconfigure) ? (n &&= (i = /* @__PURE__ */ new Map(), n.compartments.forEach((e, t) => i.set(t, e)), null), i.set(e.value.compartment, e.value.extension)) : e.is(Y.reconfigure) ? (n = null, r = e.value) : e.is(Y.appendConfig) && (n = null, r = Nr(r).concat(e.value));
		let a;
		n ? a = t.startState.values.slice() : (n = dr.resolve(r, i, this), a = new e(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (e, t) => t.reconfigure(e, this), null).values);
		let o = t.startState.facet(gr) ? t.newSelection : t.newSelection.asSingle();
		new e(n, t.newDoc, o, a, (e, n) => n.update(e, t), t);
	}
	replaceSelection(e) {
		return typeof e == "string" && (e = this.toText(e)), this.changeByRange((t) => ({
			changes: {
				from: t.from,
				to: t.to,
				insert: e
			},
			range: q.cursor(t.from + e.length)
		}));
	}
	changeByRange(e) {
		let t = this.selection, n = e(t.ranges[0]), r = this.changes(n.changes), i = [n.range], a = Nr(n.effects);
		for (let n = 1; n < t.ranges.length; n++) {
			let o = e(t.ranges[n]), s = this.changes(o.changes), c = s.map(r);
			for (let e = 0; e < n; e++) i[e] = i[e].map(c);
			let l = r.mapDesc(s, !0);
			i.push(o.range.map(l)), r = r.compose(c), a = Y.mapEffects(a, c).concat(Y.mapEffects(Nr(o.effects), l));
		}
		return {
			changes: r,
			selection: q.create(i, t.mainIndex),
			effects: a
		};
	}
	changes(t = []) {
		return t instanceof Hn ? t : Hn.of(t, this.doc.length, this.facet(e.lineSeparator));
	}
	toText(t) {
		return K.of(t.split(this.facet(e.lineSeparator) || zn));
	}
	sliceDoc(e = 0, t = this.doc.length) {
		return this.doc.sliceString(e, t, this.lineBreak);
	}
	facet(e) {
		let t = this.config.address[e.id];
		return t == null ? e.default : (pr(this, t), mr(this, t));
	}
	toJSON(e) {
		let t = {
			doc: this.sliceDoc(),
			selection: this.selection.toJSON()
		};
		if (e) for (let n in e) {
			let r = e[n];
			r instanceof ir && this.config.address[r.id] != null && (t[n] = r.spec.toJSON(this.field(e[n]), this));
		}
		return t;
	}
	static fromJSON(t, n = {}, r) {
		if (!t || typeof t.doc != "string") throw RangeError("Invalid JSON representation for EditorState");
		let i = [];
		if (r) {
			for (let e in r) if (Object.prototype.hasOwnProperty.call(t, e)) {
				let n = r[e], a = t[e];
				i.push(n.init((e) => n.spec.fromJSON(a, e)));
			}
		}
		return e.create({
			doc: t.doc,
			selection: q.fromJSON(t.selection),
			extensions: n.extensions ? i.concat([n.extensions]) : i
		});
	}
	static create(t = {}) {
		let n = dr.resolve(t.extensions || [], /* @__PURE__ */ new Map()), r = t.doc instanceof K ? t.doc : K.of((t.doc || "").split(n.staticFacet(e.lineSeparator) || zn)), i = t.selection ? t.selection instanceof q ? t.selection : q.single(t.selection.anchor, t.selection.head) : q.single(0);
		return Xn(i, r.length), n.staticFacet(gr) || (i = i.asSingle()), new e(n, r, i, n.dynamicSlots.map(() => null), (e, t) => t.create(e), null);
	}
	get tabSize() {
		return this.facet(e.tabSize);
	}
	get lineBreak() {
		return this.facet(e.lineSeparator) || "\n";
	}
	get readOnly() {
		return this.facet(xr);
	}
	phrase(t, ...n) {
		for (let n of this.facet(e.phrases)) if (Object.prototype.hasOwnProperty.call(n, t)) {
			t = n[t];
			break;
		}
		return n.length && (t = t.replace(/\$(\$|\d*)/g, (e, t) => {
			if (t == "$") return "$";
			let r = +(t || 1);
			return !r || r > n.length ? e : n[r - 1];
		})), t;
	}
	languageDataAt(e, t, n = -1) {
		let r = [];
		for (let i of this.facet(hr)) for (let a of i(this, t, n)) Object.prototype.hasOwnProperty.call(a, e) && r.push(a[e]);
		return r;
	}
	charCategorizer(e) {
		let t = this.languageDataAt("wordChars", e);
		return Rr(t.length ? t[0] : "");
	}
	wordAt(e) {
		let { text: t, from: n, length: r } = this.doc.lineAt(e), i = this.charCategorizer(e), a = e - n, o = e - n;
		for (; a > 0;) {
			let e = Nn(t, a, !1);
			if (i(t.slice(e, a)) != Pr.Word) break;
			a = e;
		}
		for (; o < r;) {
			let e = Nn(t, o);
			if (i(t.slice(o, e)) != Pr.Word) break;
			o = e;
		}
		return a == o ? null : q.range(a + n, o + n);
	}
};
zr.allowMultipleSelections = gr, zr.tabSize = /*@__PURE__*/ J.define({ combine: (e) => e.length ? e[0] : 4 }), zr.lineSeparator = _r, zr.readOnly = xr, zr.phrases = /*@__PURE__*/ J.define({ compare(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length == r.length && n.every((n) => e[n] == t[n]);
} }), zr.languageData = hr, zr.changeFilter = vr, zr.transactionFilter = yr, zr.transactionExtender = br, lr.reconfigure = /*@__PURE__*/ Y.define();
function Br(e, t, n = {}) {
	let r = {};
	for (let t of e) for (let e of Object.keys(t)) {
		let i = t[e], a = r[e];
		if (a === void 0) r[e] = i;
		else if (a !== i && i !== void 0) if (Object.hasOwnProperty.call(n, e)) r[e] = n[e](a, i);
		else throw Error("Config merge conflict for field " + e);
	}
	for (let e in t) r[e] === void 0 && (r[e] = t[e]);
	return r;
}
var Vr = class {
	eq(e) {
		return this == e;
	}
	range(e, t = e) {
		return Ur.create(e, t, this);
	}
};
Vr.prototype.startSide = Vr.prototype.endSide = 0, Vr.prototype.point = !1, Vr.prototype.mapMode = Bn.TrackDel;
function Hr(e, t) {
	return e == t || e.constructor == t.constructor && e.eq(t);
}
var Ur = class e {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.value = n;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
};
function Wr(e, t) {
	return e.from - t.from || e.value.startSide - t.value.startSide;
}
var Gr = class e {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.value = n, this.maxPoint = r;
	}
	get length() {
		return this.to[this.to.length - 1];
	}
	findIndex(e, t, n, r = 0) {
		let i = n ? this.to : this.from;
		for (let a = r, o = i.length;;) {
			if (a == o) return a;
			let r = a + o >> 1, s = i[r] - e || (n ? this.value[r].endSide : this.value[r].startSide) - t;
			if (r == a) return s >= 0 ? a : o;
			s >= 0 ? o = r : a = r + 1;
		}
	}
	between(e, t, n, r) {
		for (let i = this.findIndex(t, -1e9, !0), a = this.findIndex(n, 1e9, !1, i); i < a; i++) if (r(this.from[i] + e, this.to[i] + e, this.value[i]) === !1) return !1;
	}
	map(t, n) {
		let r = [], i = [], a = [], o = -1, s = -1;
		for (let e = 0; e < this.value.length; e++) {
			let c = this.value[e], l = this.from[e] + t, u = this.to[e] + t, d, f;
			if (l == u) {
				let e = n.mapPos(l, c.startSide, c.mapMode);
				if (e == null || (d = f = e, c.startSide != c.endSide && (f = n.mapPos(l, c.endSide), f < d))) continue;
			} else if (d = n.mapPos(l, c.startSide), f = n.mapPos(u, c.endSide), d > f || d == f && c.startSide > 0 && c.endSide <= 0) continue;
			(f - d || c.endSide - c.startSide) < 0 || (o < 0 && (o = d), c.point && (s = Math.max(s, f - d)), r.push(c), i.push(d - o), a.push(f - o));
		}
		return {
			mapped: r.length ? new e(i, a, r, s) : null,
			pos: o
		};
	}
}, Kr = class e {
	constructor(e, t, n, r) {
		this.chunkPos = e, this.chunk = t, this.nextLayer = n, this.maxPoint = r;
	}
	static create(t, n, r, i) {
		return new e(t, n, r, i);
	}
	get length() {
		let e = this.chunk.length - 1;
		return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
	}
	get size() {
		if (this.isEmpty) return 0;
		let e = this.nextLayer.size;
		for (let t of this.chunk) e += t.value.length;
		return e;
	}
	chunkEnd(e) {
		return this.chunkPos[e] + this.chunk[e].length;
	}
	update(t) {
		let { add: n = [], sort: r = !1, filterFrom: i = 0, filterTo: a = this.length } = t, o = t.filter;
		if (n.length == 0 && !o) return this;
		if (r && (n = n.slice().sort(Wr)), this.isEmpty) return n.length ? e.of(n) : this;
		let s = new Xr(this, null, -1).goto(0), c = 0, l = [], u = new Jr();
		for (; s.value || c < n.length;) if (c < n.length && (s.from - n[c].from || s.startSide - n[c].value.startSide) >= 0) {
			let e = n[c++];
			u.addInner(e.from, e.to, e.value) || l.push(e);
		} else s.rangeIndex == 1 && s.chunkIndex < this.chunk.length && (c == n.length || this.chunkEnd(s.chunkIndex) < n[c].from) && (!o || i > this.chunkEnd(s.chunkIndex) || a < this.chunkPos[s.chunkIndex]) && u.addChunk(this.chunkPos[s.chunkIndex], this.chunk[s.chunkIndex]) ? s.nextChunk() : ((!o || i > s.to || a < s.from || o(s.from, s.to, s.value)) && (u.addInner(s.from, s.to, s.value) || l.push(Ur.create(s.from, s.to, s.value))), s.next());
		return u.finishInner(this.nextLayer.isEmpty && !l.length ? e.empty : this.nextLayer.update({
			add: l,
			filter: o,
			filterFrom: i,
			filterTo: a
		}));
	}
	map(t) {
		if (t.empty || this.isEmpty) return this;
		let n = [], r = [], i = -1;
		for (let e = 0; e < this.chunk.length; e++) {
			let a = this.chunkPos[e], o = this.chunk[e], s = t.touchesRange(a, a + o.length);
			if (s === !1) i = Math.max(i, o.maxPoint), n.push(o), r.push(t.mapPos(a));
			else if (s === !0) {
				let { mapped: e, pos: s } = o.map(a, t);
				e && (i = Math.max(i, e.maxPoint), n.push(e), r.push(s));
			}
		}
		let a = this.nextLayer.map(t);
		return n.length == 0 ? a : new e(r, n, a || e.empty, i);
	}
	between(e, t, n) {
		if (!this.isEmpty) {
			for (let r = 0; r < this.chunk.length; r++) {
				let i = this.chunkPos[r], a = this.chunk[r];
				if (t >= i && e <= i + a.length && a.between(i, e - i, t - i, n) === !1) return;
			}
			this.nextLayer.between(e, t, n);
		}
	}
	iter(e = 0) {
		return Zr.from([this]).goto(e);
	}
	get isEmpty() {
		return this.nextLayer == this;
	}
	static iter(e, t = 0) {
		return Zr.from(e).goto(t);
	}
	static compare(e, t, n, r, i = -1) {
		let a = e.filter((e) => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i), o = t.filter((e) => e.maxPoint > 0 || !e.isEmpty && e.maxPoint >= i), s = Yr(a, o, n), c = new $r(a, s, i), l = new $r(o, s, i);
		n.iterGaps((e, t, n) => ei(c, e, l, t, n, r)), n.empty && n.length == 0 && ei(c, 0, l, 0, 0, r);
	}
	static eq(e, t, n = 0, r) {
		r ??= 1e9 - 1;
		let i = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0), a = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0);
		if (i.length != a.length) return !1;
		if (!i.length) return !0;
		let o = Yr(i, a), s = new $r(i, o, 0).goto(n), c = new $r(a, o, 0).goto(n);
		for (;;) {
			if (s.to != c.to || !ti(s.active, c.active) || s.point && (!c.point || !Hr(s.point, c.point))) return !1;
			if (s.to > r) return !0;
			s.next(), c.next();
		}
	}
	static spans(e, t, n, r, i = -1) {
		let a = new $r(e, null, i).goto(t), o = t, s = a.openStart;
		for (;;) {
			let e = Math.min(a.to, n);
			if (a.point) {
				let n = a.activeForPoint(a.to), i = a.pointFrom < t ? n.length + 1 : a.point.startSide < 0 ? n.length : Math.min(n.length, s);
				r.point(o, e, a.point, n, i, a.pointRank), s = Math.min(a.openEnd(e), n.length);
			} else e > o && (r.span(o, e, a.active, s), s = a.openEnd(e));
			if (a.to > n) return s + (a.point && a.to > n ? 1 : 0);
			o = a.to, a.next();
		}
	}
	static of(e, t = !1) {
		let n = new Jr();
		for (let r of e instanceof Ur ? [e] : t ? qr(e) : e) n.add(r.from, r.to, r.value);
		return n.finish();
	}
	static join(t) {
		if (!t.length) return e.empty;
		let n = t[t.length - 1];
		for (let r = t.length - 2; r >= 0; r--) for (let i = t[r]; i != e.empty; i = i.nextLayer) n = new e(i.chunkPos, i.chunk, n, Math.max(i.maxPoint, n.maxPoint));
		return n;
	}
};
Kr.empty = /*@__PURE__*/ new Kr([], [], null, -1);
function qr(e) {
	if (e.length > 1) for (let t = e[0], n = 1; n < e.length; n++) {
		let r = e[n];
		if (Wr(t, r) > 0) return e.slice().sort(Wr);
		t = r;
	}
	return e;
}
Kr.empty.nextLayer = Kr.empty;
var Jr = class e {
	finishChunk(e) {
		this.chunks.push(new Gr(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
	}
	constructor() {
		this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
	}
	add(t, n, r) {
		this.addInner(t, n, r) || (this.nextLayer ||= new e()).add(t, n, r);
	}
	addInner(e, t, n) {
		let r = e - this.lastTo || n.startSide - this.last.endSide;
		if (r <= 0 && (e - this.lastFrom || n.startSide - this.last.startSide) < 0) throw Error("Ranges must be added sorted by `from` position and `startSide`");
		return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(t - this.chunkStart), this.last = n, this.lastFrom = e, this.lastTo = t, this.value.push(n), n.point && (this.maxPoint = Math.max(this.maxPoint, t - e)), !0);
	}
	addChunk(e, t) {
		if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
		this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint), this.chunks.push(t), this.chunkPos.push(e);
		let n = t.value.length - 1;
		return this.last = t.value[n], this.lastFrom = t.from[n] + e, this.lastTo = t.to[n] + e, !0;
	}
	finish() {
		return this.finishInner(Kr.empty);
	}
	finishInner(e) {
		if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return e;
		let t = Kr.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
		return this.from = null, t;
	}
};
function Yr(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	for (let t of e) for (let e = 0; e < t.chunk.length; e++) t.chunk[e].maxPoint <= 0 && r.set(t.chunk[e], t.chunkPos[e]);
	let i = /* @__PURE__ */ new Set();
	for (let e of t) for (let t = 0; t < e.chunk.length; t++) {
		let a = r.get(e.chunk[t]);
		a != null && (n ? n.mapPos(a) : a) == e.chunkPos[t] && !n?.touchesRange(a, a + e.chunk[t].length) && i.add(e.chunk[t]);
	}
	return i;
}
var Xr = class {
	constructor(e, t, n, r = 0) {
		this.layer = e, this.skip = t, this.minPoint = n, this.rank = r;
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(e, t = -1e9) {
		return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(e, t, !1), this;
	}
	gotoInner(e, t, n) {
		for (; this.chunkIndex < this.layer.chunk.length;) {
			let t = this.layer.chunk[this.chunkIndex];
			if (!(this.skip && this.skip.has(t) || this.layer.chunkEnd(this.chunkIndex) < e || t.maxPoint < this.minPoint)) break;
			this.chunkIndex++, n = !1;
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], t, !0);
			(!n || this.rangeIndex < r) && this.setRangeIndex(r);
		}
		this.next();
	}
	forward(e, t) {
		(this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
	}
	next() {
		for (;;) if (this.chunkIndex == this.layer.chunk.length) {
			this.from = this.to = 1e9, this.value = null;
			break;
		} else {
			let e = this.layer.chunkPos[this.chunkIndex], t = this.layer.chunk[this.chunkIndex], n = e + t.from[this.rangeIndex];
			if (this.from = n, this.to = e + t.to[this.rangeIndex], this.value = t.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
		}
	}
	setRangeIndex(e) {
		if (e == this.layer.chunk[this.chunkIndex].value.length) {
			if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = e;
	}
	nextChunk() {
		this.chunkIndex++, this.rangeIndex = 0, this.next();
	}
	compare(e) {
		return this.from - e.from || this.startSide - e.startSide || this.rank - e.rank || this.to - e.to || this.endSide - e.endSide;
	}
}, Zr = class e {
	constructor(e) {
		this.heap = e;
	}
	static from(t, n = null, r = -1) {
		let i = [];
		for (let e = 0; e < t.length; e++) for (let a = t[e]; !a.isEmpty; a = a.nextLayer) a.maxPoint >= r && i.push(new Xr(a, n, r, e));
		return i.length == 1 ? i[0] : new e(i);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(e, t = -1e9) {
		for (let n of this.heap) n.goto(e, t);
		for (let e = this.heap.length >> 1; e >= 0; e--) Qr(this.heap, e);
		return this.next(), this;
	}
	forward(e, t) {
		for (let n of this.heap) n.forward(e, t);
		for (let e = this.heap.length >> 1; e >= 0; e--) Qr(this.heap, e);
		(this.to - e || this.value.endSide - t) < 0 && this.next();
	}
	next() {
		if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
		else {
			let e = this.heap[0];
			this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Qr(this.heap, 0);
		}
	}
};
function Qr(e, t) {
	for (let n = e[t];;) {
		let r = (t << 1) + 1;
		if (r >= e.length) break;
		let i = e[r];
		if (r + 1 < e.length && i.compare(e[r + 1]) >= 0 && (i = e[r + 1], r++), n.compare(i) < 0) break;
		e[r] = n, e[t] = i, t = r;
	}
}
var $r = class {
	constructor(e, t, n) {
		this.minPoint = n, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Zr.from(e, t, n);
	}
	goto(e, t = -1e9) {
		return this.cursor.goto(e, t), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = e, this.endSide = t, this.openStart = -1, this.next(), this;
	}
	forward(e, t) {
		for (; this.minActive > -1 && (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;) this.removeActive(this.minActive);
		this.cursor.forward(e, t);
	}
	removeActive(e) {
		ni(this.active, e), ni(this.activeTo, e), ni(this.activeRank, e), this.minActive = ii(this.active, this.activeTo);
	}
	addActive(e) {
		let t = 0, { value: n, to: r, rank: i } = this.cursor;
		for (; t < this.activeRank.length && (i - this.activeRank[t] || r - this.activeTo[t]) > 0;) t++;
		ri(this.active, t, n), ri(this.activeTo, t, r), ri(this.activeRank, t, i), e && ri(e, t, this.cursor.from), this.minActive = ii(this.active, this.activeTo);
	}
	next() {
		let e = this.to, t = this.point;
		this.point = null;
		let n = this.openStart < 0 ? [] : null;
		for (;;) {
			let r = this.minActive;
			if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
				if (this.activeTo[r] > e) {
					this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
					break;
				}
				this.removeActive(r), n && ni(n, r);
			} else if (!this.cursor.value) {
				this.to = this.endSide = 1e9;
				break;
			} else if (this.cursor.from > e) {
				this.to = this.cursor.from, this.endSide = this.cursor.startSide;
				break;
			} else {
				let e = this.cursor.value;
				if (!e.point) this.addActive(n), this.cursor.next();
				else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
				else {
					this.point = e, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = e.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
					break;
				}
			}
		}
		if (n) {
			this.openStart = 0;
			for (let t = n.length - 1; t >= 0 && n[t] < e; t--) this.openStart++;
		}
	}
	activeForPoint(e) {
		if (!this.active.length) return this.active;
		let t = [];
		for (let n = this.active.length - 1; n >= 0 && !(this.activeRank[n] < this.pointRank); n--) (this.activeTo[n] > e || this.activeTo[n] == e && this.active[n].endSide >= this.point.endSide) && t.push(this.active[n]);
		return t.reverse();
	}
	openEnd(e) {
		let t = 0;
		for (let n = this.activeTo.length - 1; n >= 0 && this.activeTo[n] > e; n--) t++;
		return t;
	}
};
function ei(e, t, n, r, i, a) {
	e.goto(t), n.goto(r);
	let o = r + i, s = r, c = r - t, l = !!a.boundChange;
	for (let t = !1;;) {
		let r = e.to + c - n.to, i = r || e.endSide - n.endSide, u = i < 0 ? e.to + c : n.to, d = Math.min(u, o);
		if (e.point || n.point ? (e.point && n.point && Hr(e.point, n.point) && ti(e.activeForPoint(e.to), n.activeForPoint(n.to)) || a.comparePoint(s, d, e.point, n.point), t = !1) : (t && a.boundChange(s), d > s && !ti(e.active, n.active) && a.compareRange(s, d, e.active, n.active), l && d < o && (r || e.openEnd(u) != n.openEnd(u)) && (t = !0)), u > o) break;
		s = u, i <= 0 && e.next(), i >= 0 && n.next();
	}
}
function ti(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] != t[n] && !Hr(e[n], t[n])) return !1;
	return !0;
}
function ni(e, t) {
	for (let n = t, r = e.length - 1; n < r; n++) e[n] = e[n + 1];
	e.pop();
}
function ri(e, t, n) {
	for (let n = e.length - 1; n >= t; n--) e[n + 1] = e[n];
	e[t] = n;
}
function ii(e, t) {
	let n = -1, r = 1e9;
	for (let i = 0; i < t.length; i++) (t[i] - r || e[i].endSide - e[n].endSide) < 0 && (n = i, r = t[i]);
	return n;
}
function ai(e, t, n = e.length) {
	let r = 0;
	for (let i = 0; i < n && i < e.length;) e.charCodeAt(i) == 9 ? (r += t - r % t, i++) : (r++, i = Nn(e, i));
	return r;
}
function oi(e, t, n, r) {
	for (let r = 0, i = 0;;) {
		if (i >= t) return r;
		if (r == e.length) break;
		i += e.charCodeAt(r) == 9 ? n - i % n : 1, r = Nn(e, r);
	}
	return r === !0 ? -1 : e.length;
}
for (var si = "ͼ", ci = typeof Symbol > "u" ? "__ͼ" : Symbol.for(si), li = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {}, di = class {
	constructor(e, t) {
		this.rules = [];
		let { finish: n } = t || {};
		function r(e) {
			return /^@/.test(e) ? [e] : e.split(/,\s*/);
		}
		function i(e, t, a, o) {
			let s = [], c = /^@(\w+)\b/.exec(e[0]), l = c && c[1] == "keyframes";
			if (c && t == null) return a.push(e[0] + ";");
			for (let n in t) {
				let o = t[n];
				if (/&/.test(n)) i(n.split(/,\s*/).map((t) => e.map((e) => t.replace(/&/, e))).reduce((e, t) => e.concat(t)), o, a);
				else if (o && typeof o == "object") {
					if (!c) throw RangeError("The value of a property (" + n + ") should be a primitive value.");
					i(r(n), o, s, l);
				} else o != null && s.push(n.replace(/_.*/, "").replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()) + ": " + o + ";");
			}
			(s.length || l) && a.push((n && !c && !o ? e.map(n) : e).join(", ") + " {" + s.join(" ") + "}");
		}
		for (let t in e) i(r(t), e[t], this.rules);
	}
	getRules() {
		return this.rules.join("\n");
	}
	static newName() {
		let e = ui[ci] || 1;
		return ui[ci] = e + 1, si + e.toString(36);
	}
	static mount(e, t, n) {
		let r = e[li], i = n && n.nonce;
		r ? i && r.setNonce(i) : r = new pi(e, i), r.mount(Array.isArray(t) ? t : [t], e);
	}
}, fi = /* @__PURE__ */ new Map(), pi = class {
	constructor(e, t) {
		let n = e.ownerDocument || e, r = n.defaultView;
		if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
			let t = fi.get(n);
			if (t) return e[li] = t;
			this.sheet = new r.CSSStyleSheet(), fi.set(n, this);
		} else this.styleTag = n.createElement("style"), t && this.styleTag.setAttribute("nonce", t);
		this.modules = [], e[li] = this;
	}
	mount(e, t) {
		let n = this.sheet, r = 0, i = 0;
		for (let t = 0; t < e.length; t++) {
			let a = e[t], o = this.modules.indexOf(a);
			if (o < i && o > -1 && (this.modules.splice(o, 1), i--, o = -1), o == -1) {
				if (this.modules.splice(i++, 0, a), n) for (let e = 0; e < a.rules.length; e++) n.insertRule(a.rules[e], r++);
			} else {
				for (; i < o;) r += this.modules[i++].rules.length;
				r += a.rules.length, i++;
			}
		}
		if (n) t.adoptedStyleSheets.indexOf(this.sheet) < 0 && (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
		else {
			let e = "";
			for (let t = 0; t < this.modules.length; t++) e += this.modules[t].getRules() + "\n";
			this.styleTag.textContent = e;
			let n = t.head || t;
			this.styleTag.parentNode != n && n.insertBefore(this.styleTag, n.firstChild);
		}
	}
	setNonce(e) {
		this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
	}
}, mi = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
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
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, hi = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, gi = typeof navigator < "u" && /Mac/.test(navigator.platform), _i = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), vi = 0; vi < 10; vi++) mi[48 + vi] = mi[96 + vi] = String(vi);
for (var vi = 1; vi <= 24; vi++) mi[vi + 111] = "F" + vi;
for (var vi = 65; vi <= 90; vi++) mi[vi] = String.fromCharCode(vi + 32), hi[vi] = String.fromCharCode(vi);
for (var yi in mi) hi.hasOwnProperty(yi) || (hi[yi] = mi[yi]);
function bi(e) {
	var t = !(gi && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || _i && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? hi : mi)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
//#endregion
//#region node_modules/.pnpm/crelt@1.0.7/node_modules/crelt/index.js
function xi() {
	var e = arguments[0];
	typeof e == "string" && (e = document.createElement(e));
	var t = 1, n = arguments[1];
	if (n && typeof n == "object" && n.nodeType == null && !Array.isArray(n)) {
		for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
			var i = n[r];
			typeof i == "string" ? e.setAttribute(r, i) : i != null && (e[r] = i);
		}
		t++;
	}
	for (; t < arguments.length; t++) Si(e, arguments[t]);
	return e;
}
function Si(e, t) {
	if (typeof t == "string") e.appendChild(document.createTextNode(t));
	else if (t != null) if (t.nodeType != null) e.appendChild(t);
	else if (Array.isArray(t)) for (var n = 0; n < t.length; n++) Si(e, t[n]);
	else throw RangeError("Unsupported child node: " + t);
}
//#endregion
//#region node_modules/.pnpm/@codemirror+view@6.43.7/node_modules/@codemirror/view/dist/index.js
var Ci = typeof navigator < "u" ? navigator : {
	userAgent: "",
	vendor: "",
	platform: ""
}, wi = typeof document < "u" ? document : { documentElement: { style: {} } }, Ti = /*@__PURE__*/ /Edge\/(\d+)/.exec(Ci.userAgent), Ei = /*@__PURE__*/ /MSIE \d/.test(Ci.userAgent), Di = /*@__PURE__*/ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ci.userAgent), Oi = !!(Ei || Di || Ti), ki = !Oi && /*@__PURE__*/ /gecko\/(\d+)/i.test(Ci.userAgent), Ai = !Oi && /*@__PURE__*/ /Chrome\/(\d+)/.exec(Ci.userAgent), ji = "webkitFontSmoothing" in wi.documentElement.style, Mi = !Oi && /*@__PURE__*/ /Apple Computer/.test(Ci.vendor), Ni = Mi && (/*@__PURE__*/ /Mobile\/\w+/.test(Ci.userAgent) || Ci.maxTouchPoints > 2), X = {
	mac: Ni || /*@__PURE__*/ /Mac/.test(Ci.platform),
	windows: /*@__PURE__*/ /Win/.test(Ci.platform),
	linux: /*@__PURE__*/ /Linux|X11/.test(Ci.platform),
	ie: Oi,
	ie_version: Ei ? wi.documentMode || 6 : Di ? +Di[1] : Ti ? +Ti[1] : 0,
	gecko: ki,
	gecko_version: ki ? +(/*@__PURE__*/ /Firefox\/(\d+)/.exec(Ci.userAgent) || [0, 0])[1] : 0,
	chrome: !!Ai,
	chrome_version: Ai ? +Ai[1] : 0,
	ios: Ni,
	android: /*@__PURE__*/ /Android\b/.test(Ci.userAgent),
	webkit: ji,
	webkit_version: ji ? +(/*@__PURE__*/ /\bAppleWebKit\/(\d+)/.exec(Ci.userAgent) || [0, 0])[1] : 0,
	safari: Mi,
	safari_version: Mi ? +(/*@__PURE__*/ /\bVersion\/(\d+(\.\d+)?)/.exec(Ci.userAgent) || [0, 0])[1] : 0,
	tabSize: wi.documentElement.style.tabSize == null ? "-moz-tab-size" : "tab-size"
};
function Pi(e, t) {
	for (let n in e) n == "class" && t.class ? t.class += " " + e.class : n == "style" && t.style ? t.style += ";" + e.style : t[n] = e[n];
	return t;
}
var Fi = /*@__PURE__*/ Object.create(null);
function Ii(e, t, n) {
	if (e == t) return !0;
	e ||= Fi, t ||= Fi;
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length - (n && r.indexOf(n) > -1 ? 1 : 0) != i.length - (n && i.indexOf(n) > -1 ? 1 : 0)) return !1;
	for (let a of r) if (a != n && (i.indexOf(a) == -1 || e[a] !== t[a])) return !1;
	return !0;
}
function Li(e, t) {
	for (let n = e.attributes.length - 1; n >= 0; n--) {
		let r = e.attributes[n].name;
		t[r] ?? e.removeAttribute(r);
	}
	for (let n in t) {
		let r = t[n];
		n == "style" ? e.style.cssText = r : e.getAttribute(n) != r && e.setAttribute(n, r);
	}
}
function Ri(e, t, n) {
	let r = !1;
	if (t) for (let i in t) n && i in n || (r = !0, i == "style" ? e.style.cssText = "" : e.removeAttribute(i));
	if (n) for (let i in n) t && t[i] == n[i] || (r = !0, i == "style" ? e.style.cssText = n[i] : e.setAttribute(i, n[i]));
	return r;
}
function zi(e) {
	let t = Object.create(null);
	for (let n = 0; n < e.attributes.length; n++) {
		let r = e.attributes[n];
		t[r.name] = r.value;
	}
	return t;
}
var Bi = class {
	eq(e) {
		return !1;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	compare(e) {
		return this == e || this.constructor == e.constructor && this.eq(e);
	}
	get estimatedHeight() {
		return -1;
	}
	get lineBreaks() {
		return 0;
	}
	ignoreEvent(e) {
		return !0;
	}
	coordsAt(e, t, n) {
		return null;
	}
	get isHidden() {
		return !1;
	}
	get editable() {
		return !1;
	}
	destroy(e) {}
}, Vi = /*@__PURE__*/ (function(e) {
	return e[e.Text = 0] = "Text", e[e.WidgetBefore = 1] = "WidgetBefore", e[e.WidgetAfter = 2] = "WidgetAfter", e[e.WidgetRange = 3] = "WidgetRange", e;
})(Vi ||= {}), Z = class extends Vr {
	constructor(e, t, n, r) {
		super(), this.startSide = e, this.endSide = t, this.widget = n, this.spec = r;
	}
	get heightRelevant() {
		return !1;
	}
	static mark(e) {
		return new Hi(e);
	}
	static widget(e) {
		let t = Math.max(-1e4, Math.min(1e4, e.side || 0)), n = !!e.block;
		return t += n && !e.inlineOrder ? t > 0 ? 3e8 : -4e8 : t > 0 ? 1e8 : -1e8, new Wi(e, t, t, n, e.widget || null, !1);
	}
	static replace(e) {
		let t = !!e.block, n, r;
		if (e.isBlockGap) n = -5e8, r = 4e8;
		else {
			let { start: i, end: a } = Gi(e, t);
			n = (i ? t ? -3e8 : -1 : 5e8) - 1, r = (a ? t ? 2e8 : 1 : -6e8) + 1;
		}
		return new Wi(e, n, r, t, e.widget || null, !0);
	}
	static line(e) {
		return new Ui(e);
	}
	static set(e, t = !1) {
		return Kr.of(e, t);
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1;
	}
};
Z.none = Kr.empty;
var Hi = class e extends Z {
	constructor(e) {
		let { start: t, end: n } = Gi(e);
		super(t ? -1 : 5e8, n ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.attrs = e.class && e.attributes ? Pi(e.attributes, { class: e.class }) : e.class ? { class: e.class } : e.attributes || Fi;
	}
	eq(t) {
		return this == t || t instanceof e && this.tagName == t.tagName && Ii(this.attrs, t.attrs);
	}
	range(e, t = e) {
		if (e >= t) throw RangeError("Mark decorations may not be empty");
		return super.range(e, t);
	}
};
Hi.prototype.point = !1;
var Ui = class e extends Z {
	constructor(e) {
		super(-2e8, -2e8, null, e);
	}
	eq(t) {
		return t instanceof e && this.spec.class == t.spec.class && Ii(this.spec.attributes, t.spec.attributes);
	}
	range(e, t = e) {
		if (t != e) throw RangeError("Line decoration ranges must be zero-length");
		return super.range(e, t);
	}
};
Ui.prototype.mapMode = Bn.TrackBefore, Ui.prototype.point = !0;
var Wi = class e extends Z {
	constructor(e, t, n, r, i, a) {
		super(t, n, i, e), this.block = r, this.isReplace = a, this.mapMode = r ? t <= 0 ? Bn.TrackBefore : Bn.TrackAfter : Bn.TrackDel;
	}
	get type() {
		return this.startSide == this.endSide ? this.startSide <= 0 ? Vi.WidgetBefore : Vi.WidgetAfter : Vi.WidgetRange;
	}
	get heightRelevant() {
		return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
	}
	eq(t) {
		return t instanceof e && Ki(this.widget, t.widget) && this.block == t.block && this.startSide == t.startSide && this.endSide == t.endSide;
	}
	range(e, t = e) {
		if (this.isReplace && (e > t || e == t && this.startSide > 0 && this.endSide <= 0)) throw RangeError("Invalid range for replacement decoration");
		if (!this.isReplace && t != e) throw RangeError("Widget decorations can only have zero-length ranges");
		return super.range(e, t);
	}
};
Wi.prototype.point = !0;
function Gi(e, t = !1) {
	let { inclusiveStart: n, inclusiveEnd: r } = e;
	return n ??= e.inclusive, r ??= e.inclusive, {
		start: n ?? t,
		end: r ?? t
	};
}
function Ki(e, t) {
	return e == t || !!(e && t && e.compare(t));
}
function qi(e, t, n, r = 0) {
	let i = n.length - 1;
	i >= 0 && n[i] + r >= e ? n[i] = Math.max(n[i], t) : n.push(e, t);
}
var Ji = class e extends Vr {
	constructor(e, t, n) {
		super(), this.tagName = e, this.attributes = t, this.rank = n;
	}
	eq(t) {
		return t == this || t instanceof e && this.tagName == t.tagName && Ii(this.attributes, t.attributes);
	}
	static create(t) {
		return new e(t.tagName, t.attributes || Fi, t.rank == null ? 50 : Math.max(0, Math.min(t.rank, 100)));
	}
	static set(e, t = !1) {
		return Kr.of(e, t);
	}
};
Ji.prototype.startSide = Ji.prototype.endSide = -1;
function Yi(e) {
	let t;
	return t = e.nodeType == 11 ? e.getSelection ? e : e.ownerDocument : e, t.getSelection();
}
function Xi(e, t) {
	return t ? e == t || e.contains(t.nodeType == 1 ? t : t.parentNode) : !1;
}
function Zi(e, t) {
	if (!t.anchorNode) return !1;
	try {
		return Xi(e, t.anchorNode);
	} catch {
		return !1;
	}
}
function Qi(e) {
	return e.nodeType == 3 ? pa(e, 0, e.nodeValue.length).getClientRects() : e.nodeType == 1 ? e.getClientRects() : [];
}
function $i(e, t, n, r) {
	return n ? na(e, t, n, r, -1) || na(e, t, n, r, 1) : !1;
}
function ea(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}
function ta(e) {
	return e.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName);
}
function na(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : ra(e))) {
			if (e.nodeName == "DIV") return !1;
			let n = e.parentNode;
			if (!n || n.nodeType != 1) return !1;
			t = ea(e) + (i < 0 ? 0 : 1), e = n;
		} else if (e.nodeType == 1) {
			if (e = e.childNodes[t + (i < 0 ? -1 : 0)], e.nodeType == 1 && e.contentEditable == "false") return !1;
			t = i < 0 ? ra(e) : 0;
		} else return !1;
	}
}
function ra(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function ia(e, t) {
	let { left: n, right: r } = e;
	if (n == r) return e;
	let i = t ? n : r;
	return {
		left: i,
		right: i,
		top: e.top,
		bottom: e.bottom
	};
}
function aa(e) {
	let t = e.visualViewport;
	return t ? {
		left: 0,
		right: t.width,
		top: 0,
		bottom: t.height
	} : {
		left: 0,
		right: e.innerWidth,
		top: 0,
		bottom: e.innerHeight
	};
}
function oa(e, t) {
	let n = t.width / e.offsetWidth, r = t.height / e.offsetHeight;
	return (n > .995 && n < 1.005 || !isFinite(n) || Math.abs(t.width - e.offsetWidth) < 1) && (n = 1), (r > .995 && r < 1.005 || !isFinite(r) || Math.abs(t.height - e.offsetHeight) < 1) && (r = 1), {
		scaleX: n,
		scaleY: r
	};
}
function sa(e, t, n, r, i, a, o, s) {
	let c = e.ownerDocument, l = c.defaultView || window;
	for (let u = e, d = !1; u && !d;) if (u.nodeType == 1) {
		let e, f = u == c.body, p = 1, m = 1;
		if (f) e = aa(l);
		else {
			if (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (d = !0), u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) {
				u = u.assignedSlot || u.parentNode;
				continue;
			}
			let t = u.getBoundingClientRect();
			({scaleX: p, scaleY: m} = oa(u, t)), e = {
				left: t.left,
				right: t.left + u.clientWidth * p,
				top: t.top,
				bottom: t.top + u.clientHeight * m
			};
		}
		let h = 0, g = 0;
		if (i == "nearest") t.top < e.top + o ? (g = t.top - (e.top + o), n > 0 && t.bottom > e.bottom + g && (g = t.bottom - e.bottom + o)) : t.bottom > e.bottom - o && (g = t.bottom - e.bottom + o, n < 0 && t.top - g < e.top && (g = t.top - (e.top + o)));
		else {
			let r = t.bottom - t.top, a = e.bottom - e.top;
			g = (i == "center" && r <= a ? t.top + r / 2 - a / 2 : i == "start" || i == "center" && n < 0 ? t.top - o : t.bottom - a + o) - e.top;
		}
		if (r == "nearest" ? t.left < e.left + a ? (h = t.left - (e.left + a), n > 0 && t.right > e.right + h && (h = t.right - e.right + a)) : t.right > e.right - a && (h = t.right - e.right + a, n < 0 && t.left < e.left + h && (h = t.left - (e.left + a))) : h = (r == "center" ? t.left + (t.right - t.left) / 2 - (e.right - e.left) / 2 : r == "start" == s ? t.left - a : t.right - (e.right - e.left) + a) - e.left, h || g) if (f) l.scrollBy(h, g);
		else {
			let e = 0, n = 0;
			if (g) {
				let e = u.scrollTop;
				u.scrollTop += g / m, n = (u.scrollTop - e) * m;
			}
			if (h) {
				let t = u.scrollLeft;
				u.scrollLeft += h / p, e = (u.scrollLeft - t) * p;
			}
			t = {
				left: t.left - e,
				top: t.top - n,
				right: t.right - e,
				bottom: t.bottom - n
			}, e && Math.abs(e - h) < 1 && (r = "nearest"), n && Math.abs(n - g) < 1 && (i = "nearest");
		}
		if (f) break;
		(t.top < e.top || t.bottom > e.bottom || t.left < e.left || t.right > e.right) && (t = {
			left: Math.max(t.left, e.left),
			right: Math.min(t.right, e.right),
			top: Math.max(t.top, e.top),
			bottom: Math.min(t.bottom, e.bottom)
		}), u = u.assignedSlot || u.parentNode;
	} else if (u.nodeType == 11) u = u.host;
	else break;
}
function ca(e, t = !0) {
	let n = e.ownerDocument, r = null, i = null;
	for (let a = e.parentNode; a && !(a == n.body || (!t || r) && i);) if (a.nodeType == 1) !i && a.scrollHeight > a.clientHeight && (i = a), t && !r && a.scrollWidth > a.clientWidth && (r = a), a = a.assignedSlot || a.parentNode;
	else if (a.nodeType == 11) a = a.host;
	else break;
	return {
		x: r,
		y: i
	};
}
var la = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	eq(e) {
		return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
	}
	setRange(e) {
		let { anchorNode: t, focusNode: n } = e;
		this.set(t, Math.min(e.anchorOffset, t ? ra(t) : 0), n, Math.min(e.focusOffset, n ? ra(n) : 0));
	}
	set(e, t, n, r) {
		this.anchorNode = e, this.anchorOffset = t, this.focusNode = n, this.focusOffset = r;
	}
}, ua = null;
X.safari && X.safari_version >= 26 && (ua = !1);
function da(e) {
	if (e.setActive) return e.setActive();
	if (ua) return e.focus(ua);
	let t = [];
	for (let n = e; n && (t.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode);
	if (e.focus(ua == null ? { get preventScroll() {
		return ua = { preventScroll: !0 }, !0;
	} } : void 0), !ua) {
		ua = !1;
		for (let e = 0; e < t.length;) {
			let n = t[e++], r = t[e++], i = t[e++];
			n.scrollTop != r && (n.scrollTop = r), n.scrollLeft != i && (n.scrollLeft = i);
		}
	}
}
var fa;
function pa(e, t, n = t) {
	let r = fa ||= document.createRange();
	return r.setEnd(e, n), r.setStart(e, t), r;
}
function ma(e, t, n, r) {
	let i = {
		key: t,
		code: t,
		keyCode: n,
		which: n,
		cancelable: !0
	};
	r && ({altKey: i.altKey, ctrlKey: i.ctrlKey, shiftKey: i.shiftKey, metaKey: i.metaKey} = r);
	let a = new KeyboardEvent("keydown", i);
	a.synthetic = !0, e.dispatchEvent(a);
	let o = new KeyboardEvent("keyup", i);
	return o.synthetic = !0, e.dispatchEvent(o), a.defaultPrevented || o.defaultPrevented;
}
function ha(e) {
	for (; e;) {
		if (e && (e.nodeType == 9 || e.nodeType == 11 && e.host)) return e;
		e = e.assignedSlot || e.parentNode;
	}
	return null;
}
function ga(e, t) {
	let n = t.focusNode, r = t.focusOffset;
	if (!n || t.anchorNode != n || t.anchorOffset != r) return !1;
	for (r = Math.min(r, ra(n));;) if (r) {
		if (n.nodeType != 1) return !1;
		let e = n.childNodes[r - 1];
		e.contentEditable == "false" ? r-- : (n = e, r = ra(n));
	} else if (n == e) return !0;
	else r = ea(n), n = n.parentNode;
}
function _a(e) {
	return e instanceof Window ? e.pageYOffset > Math.max(0, e.document.documentElement.scrollHeight - e.innerHeight - 4) : e.scrollTop > Math.max(1, e.scrollHeight - e.clientHeight - 4);
}
function va(e, t) {
	for (let n = e, r = t;;) if (n.nodeType == 3 && r > 0) return {
		node: n,
		offset: r
	};
	else if (n.nodeType == 1 && r > 0) {
		if (n.contentEditable == "false") return null;
		n = n.childNodes[r - 1], r = ra(n);
	} else if (n.parentNode && !ta(n)) r = ea(n), n = n.parentNode;
	else return null;
}
function ya(e, t) {
	for (let n = e, r = t;;) if (n.nodeType == 3 && r < n.nodeValue.length) return {
		node: n,
		offset: r
	};
	else if (n.nodeType == 1 && r < n.childNodes.length) {
		if (n.contentEditable == "false") return null;
		n = n.childNodes[r], r = 0;
	} else if (n.parentNode && !ta(n)) r = ea(n) + 1, n = n.parentNode;
	else return null;
}
var ba = class e {
	constructor(e, t, n = !0) {
		this.node = e, this.offset = t, this.precise = n;
	}
	static before(t, n) {
		return new e(t.parentNode, ea(t), n);
	}
	static after(t, n) {
		return new e(t.parentNode, ea(t) + 1, n);
	}
}, xa = /*@__PURE__*/ (function(e) {
	return e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL", e;
})(xa ||= {}), Sa = xa.LTR, Ca = xa.RTL;
function wa(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(1 << e[n]);
	return t;
}
var Ta = /*@__PURE__*/ wa("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), Ea = /*@__PURE__*/ wa("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), Da = /*@__PURE__*/ Object.create(null), Oa = [];
for (let e of [
	"()",
	"[]",
	"{}"
]) {
	let t = /*@__PURE__*/ e.charCodeAt(0), n = /*@__PURE__*/ e.charCodeAt(1);
	Da[t] = n, Da[n] = -t;
}
function ka(e) {
	return e <= 247 ? Ta[e] : 1424 <= e && e <= 1524 ? 2 : 1536 <= e && e <= 1785 ? Ea[e - 1536] : 1774 <= e && e <= 2220 ? 4 : 8192 <= e && e <= 8204 ? 256 : 64336 <= e && e <= 65023 ? 4 : 1;
}
var Aa = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, ja = class {
	get dir() {
		return this.level % 2 ? Ca : Sa;
	}
	constructor(e, t, n) {
		this.from = e, this.to = t, this.level = n;
	}
	side(e, t) {
		return this.dir == t == e ? this.to : this.from;
	}
	forward(e, t) {
		return e == (this.dir == t);
	}
	static find(e, t, n, r) {
		let i = -1;
		for (let a = 0; a < e.length; a++) {
			let o = e[a];
			if (o.from <= t && o.to >= t) {
				if (o.level == n) return a;
				(i < 0 || (r == 0 ? e[i].level > o.level : r < 0 ? o.from < t : o.to > t)) && (i = a);
			}
		}
		if (i < 0) throw RangeError("Index out of range");
		return i;
	}
};
function Ma(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = t[n];
		if (r.from != i.from || r.to != i.to || r.direction != i.direction || !Ma(r.inner, i.inner)) return !1;
	}
	return !0;
}
var Na = [];
function Pa(e, t, n, r, i) {
	for (let a = 0; a <= r.length; a++) {
		let o = a ? r[a - 1].to : t, s = a < r.length ? r[a].from : n, c = a ? 256 : i;
		for (let t = o, n = c, r = c; t < s; t++) {
			let i = ka(e.charCodeAt(t));
			i == 512 ? i = n : i == 8 && r == 4 && (i = 16), Na[t] = i == 4 ? 2 : i, i & 7 && (r = i), n = i;
		}
		for (let e = o, t = c, r = c; e < s; e++) {
			let i = Na[e];
			if (i == 128) e < s - 1 && t == Na[e + 1] && t & 24 ? i = Na[e] = t : Na[e] = 256;
			else if (i == 64) {
				let i = e + 1;
				for (; i < s && Na[i] == 64;) i++;
				let a = e && t == 8 || i < n && Na[i] == 8 ? r == 1 ? 1 : 8 : 256;
				for (let t = e; t < i; t++) Na[t] = a;
				e = i - 1;
			} else i == 8 && r == 1 && (Na[e] = 1);
			t = i, i & 7 && (r = i);
		}
	}
}
function Fa(e, t, n, r, i) {
	let a = i == 1 ? 2 : 1;
	for (let o = 0, s = 0, c = 0; o <= r.length; o++) {
		let l = o ? r[o - 1].to : t, u = o < r.length ? r[o].from : n;
		for (let t = l, n, r, o; t < u; t++) if (r = Da[n = e.charCodeAt(t)]) if (r < 0) {
			for (let e = s - 3; e >= 0; e -= 3) if (Oa[e + 1] == -r) {
				let n = Oa[e + 2], r = n & 2 ? i : n & 4 ? n & 1 ? a : i : 0;
				r && (Na[t] = Na[Oa[e]] = r), s = e;
				break;
			}
		} else if (Oa.length == 189) break;
		else Oa[s++] = t, Oa[s++] = n, Oa[s++] = c;
		else if ((o = Na[t]) == 2 || o == 1) {
			let e = o == i;
			c = +!e;
			for (let t = s - 3; t >= 0; t -= 3) {
				let n = Oa[t + 2];
				if (n & 2) break;
				if (e) Oa[t + 2] |= 2;
				else {
					if (n & 4) break;
					Oa[t + 2] |= 4;
				}
			}
		}
	}
}
function Ia(e, t, n, r) {
	for (let i = 0, a = r; i <= n.length; i++) {
		let o = i ? n[i - 1].to : e, s = i < n.length ? n[i].from : t;
		for (let c = o; c < s;) {
			let o = Na[c];
			if (o == 256) {
				let o = c + 1;
				for (;;) if (o == s) {
					if (i == n.length) break;
					o = n[i++].to, s = i < n.length ? n[i].from : t;
				} else if (Na[o] == 256) o++;
				else break;
				let l = a == 1, u = l == ((o < t ? Na[o] : r) == 1) ? l ? 1 : 2 : r;
				for (let t = o, r = i, a = r ? n[r - 1].to : e; t > c;) t == a && (t = n[--r].from, a = r ? n[r - 1].to : e), Na[--t] = u;
				c = o;
			} else a = o, c++;
		}
	}
}
function La(e, t, n, r, i, a, o) {
	let s = r % 2 ? 2 : 1;
	if (r % 2 == i % 2) for (let c = t, l = 0; c < n;) {
		let t = !0, u = !1;
		if (l == a.length || c < a[l].from) {
			let e = Na[c];
			e != s && (t = !1, u = e == 16);
		}
		let d = !t && s == 1 ? [] : null, f = t ? r : r + 1, p = c;
		run: for (;;) if (l < a.length && p == a[l].from) {
			if (u) break run;
			let m = a[l];
			if (!t) for (let e = m.to, t = l + 1;;) {
				if (e == n) break run;
				if (t < a.length && a[t].from == e) e = a[t++].to;
				else if (Na[e] == s) break run;
				else break;
			}
			l++, d ? d.push(m) : (m.from > c && o.push(new ja(c, m.from, f)), Ra(e, m.direction == Sa == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.to), p = m.to;
		} else if (p == n || (t ? Na[p] != s : Na[p] == s)) break;
		else p++;
		d ? La(e, c, p, r + 1, i, d, o) : c < p && o.push(new ja(c, p, f)), c = p;
	}
	else for (let c = n, l = a.length; c > t;) {
		let n = !0, u = !1;
		if (!l || c > a[l - 1].to) {
			let e = Na[c - 1];
			e != s && (n = !1, u = e == 16);
		}
		let d = !n && s == 1 ? [] : null, f = n ? r : r + 1, p = c;
		run: for (;;) if (l && p == a[l - 1].to) {
			if (u) break run;
			let m = a[--l];
			if (!n) for (let e = m.from, n = l;;) {
				if (e == t) break run;
				if (n && a[n - 1].to == e) e = a[--n].from;
				else if (Na[e - 1] == s) break run;
				else break;
			}
			d ? d.push(m) : (m.to < c && o.push(new ja(m.to, c, f)), Ra(e, m.direction == Sa == !(f % 2) ? r : r + 1, i, m.inner, m.from, m.to, o), c = m.from), p = m.from;
		} else if (p == t || (n ? Na[p - 1] != s : Na[p - 1] == s)) break;
		else p--;
		d ? La(e, p, c, r + 1, i, d, o) : p < c && o.push(new ja(p, c, f)), c = p;
	}
}
function Ra(e, t, n, r, i, a, o) {
	let s = t % 2 ? 2 : 1;
	Pa(e, i, a, r, s), Fa(e, i, a, r, s), Ia(i, a, r, s), La(e, i, a, t, n, r, o);
}
function za(e, t, n) {
	if (!e) return [new ja(0, 0, +(t == Ca))];
	if (t == Sa && !n.length && !Aa.test(e)) return Ba(e.length);
	if (n.length) for (; e.length > Na.length;) Na[Na.length] = 256;
	let r = [], i = t == Sa ? 0 : 1;
	return Ra(e, i, i, n, 0, e.length, r), r;
}
function Ba(e) {
	return [new ja(0, e, 0)];
}
var Va = "";
function Ha(e, t, n, r, i) {
	let a = r.head - e.from, o = ja.find(t, a, r.bidiLevel ?? -1, r.assoc), s = t[o], c = s.side(i, n);
	if (a == c) {
		let e = o += i ? 1 : -1;
		if (e < 0 || e >= t.length) return null;
		s = t[o = e], a = s.side(!i, n), c = s.side(i, n);
	}
	let l = Nn(e.text, a, s.forward(i, n));
	(l < s.from || l > s.to) && (l = c), Va = e.text.slice(Math.min(a, l), Math.max(a, l));
	let u = o == (i ? t.length - 1 : 0) ? null : t[o + (i ? 1 : -1)];
	return u && l == c && u.level + +!i < s.level ? q.cursor(u.side(!i, n) + e.from, u.forward(i, n) ? 1 : -1, u.level) : q.cursor(l + e.from, s.forward(i, n) ? -1 : 1, s.level);
}
function Ua(e, t, n) {
	for (let r = t; r < n; r++) {
		let t = ka(e.charCodeAt(r));
		if (t == 1) return Sa;
		if (t == 2 || t == 4) return Ca;
	}
	return Sa;
}
var Wa = /*@__PURE__*/ J.define(), Ga = /*@__PURE__*/ J.define(), Ka = /*@__PURE__*/ J.define(), qa = /*@__PURE__*/ J.define(), Ja = /*@__PURE__*/ J.define(), Ya = /*@__PURE__*/ J.define(), Xa = /*@__PURE__*/ J.define(), Za = /*@__PURE__*/ J.define(), Qa = /*@__PURE__*/ J.define(), $a = /*@__PURE__*/ J.define({ combine: (e) => e.some((e) => e) }), eo = /*@__PURE__*/ J.define({ combine: (e) => e.some((e) => e) }), to = /*@__PURE__*/ J.define(), no = class e {
	constructor(e, t, n, r, i, a = !1) {
		this.range = e, this.y = t, this.x = n, this.yMargin = r, this.xMargin = i, this.isSnapshot = a;
	}
	map(t) {
		return t.empty ? this : new e(this.range.map(t), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
	clip(t) {
		return this.range.to <= t.doc.length ? this : new e(q.cursor(t.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
}, ro = /*@__PURE__*/ Y.define({ map: (e, t) => e.map(t) }), io = /*@__PURE__*/ Y.define();
function ao(e, t, n) {
	let r = e.facet(qa);
	r.length ? r[0](t) : window.onerror && window.onerror(String(t), n, void 0, void 0, t) || (n ? console.error(n + ":", t) : console.error(t));
}
var oo = /*@__PURE__*/ J.define({ combine: (e) => !e.length || e[0] }), so = 0, co = /*@__PURE__*/ J.define({ combine(e) {
	return e.filter((t, n) => {
		for (let r = 0; r < n; r++) if (e[r].plugin == t.plugin) return !1;
		return !0;
	});
} }), lo = class e {
	constructor(e, t, n, r, i) {
		this.id = e, this.create = t, this.domEventHandlers = n, this.domEventObservers = r, this.baseExtensions = i(this), this.extension = this.baseExtensions.concat(co.of({
			plugin: this,
			arg: void 0
		}));
	}
	of(e) {
		return this.baseExtensions.concat(co.of({
			plugin: this,
			arg: e
		}));
	}
	static define(t, n) {
		let { eventHandlers: r, eventObservers: i, provide: a, decorations: o } = n || {};
		return new e(so++, t, r, i, (e) => {
			let t = [];
			return o && t.push(mo.of((t) => {
				let n = t.plugin(e);
				return n ? o(n) : Z.none;
			})), a && t.push(a(e)), t;
		});
	}
	static fromClass(t, n) {
		return e.define((e, n) => new t(e, n), n);
	}
}, uo = class {
	constructor(e) {
		this.spec = e, this.mustUpdate = null, this.value = null;
	}
	get plugin() {
		return this.spec && this.spec.plugin;
	}
	update(e) {
		if (!this.value) {
			if (this.spec) try {
				this.value = this.spec.plugin.create(e, this.spec.arg);
			} catch (t) {
				ao(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
			}
		} else if (this.mustUpdate) {
			let e = this.mustUpdate;
			if (this.mustUpdate = null, this.value.update) try {
				this.value.update(e);
			} catch (t) {
				if (ao(e.state, t, "CodeMirror plugin crashed"), this.value.destroy) try {
					this.value.destroy();
				} catch {}
				this.deactivate();
			}
		}
		return this;
	}
	destroy(e) {
		if (this.value?.destroy) try {
			this.value.destroy();
		} catch (t) {
			ao(e.state, t, "CodeMirror plugin crashed");
		}
	}
	deactivate() {
		this.spec = this.value = null;
	}
}, fo = /*@__PURE__*/ J.define(), po = /*@__PURE__*/ J.define(), mo = /*@__PURE__*/ J.define(), ho = /*@__PURE__*/ J.define(), go = /*@__PURE__*/ J.define(), _o = /*@__PURE__*/ J.define(), vo = /*@__PURE__*/ J.define();
function yo(e, t) {
	let n = e.state.facet(vo);
	if (!n.length) return n;
	let r = n.map((t) => t instanceof Function ? t(e) : t), i = [];
	return Kr.spans(r, t.from, t.to, {
		point() {},
		span(e, n, r, a) {
			let o = e - t.from, s = n - t.from, c = i;
			for (let e = r.length - 1; e >= 0; e--, a--) {
				let n = r[e].spec.bidiIsolate, i;
				if (n ??= Ua(t.text, o, s), a > 0 && c.length && (i = c[c.length - 1]).to == o && i.direction == n) i.to = s, c = i.inner;
				else {
					let e = {
						from: o,
						to: s,
						direction: n,
						inner: []
					};
					c.push(e), c = e.inner;
				}
			}
		}
	}), i;
}
var bo = /*@__PURE__*/ J.define();
function xo(e) {
	let t = 0, n = 0, r = 0, i = 0;
	for (let a of e.state.facet(bo)) {
		let o = a(e);
		o && (o.left != null && (t = Math.max(t, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (r = Math.max(r, o.top)), o.bottom != null && (i = Math.max(i, o.bottom)));
	}
	return {
		left: t,
		right: n,
		top: r,
		bottom: i
	};
}
var So = /*@__PURE__*/ J.define(), Co = class e {
	constructor(e, t, n, r) {
		this.fromA = e, this.toA = t, this.fromB = n, this.toB = r;
	}
	join(t) {
		return new e(Math.min(this.fromA, t.fromA), Math.max(this.toA, t.toA), Math.min(this.fromB, t.fromB), Math.max(this.toB, t.toB));
	}
	addToSet(e) {
		let t = e.length, n = this;
		for (; t > 0; t--) {
			let r = e[t - 1];
			if (!(r.fromA > n.toA)) {
				if (r.toA < n.fromA) break;
				n = n.join(r), e.splice(t - 1, 1);
			}
		}
		return e.splice(t, 0, n), e;
	}
	static extendWithRanges(t, n) {
		if (n.length == 0) return t;
		let r = [];
		for (let i = 0, a = 0, o = 0;;) {
			let s = i < t.length ? t[i].fromB : 1e9, c = a < n.length ? n[a] : 1e9, l = Math.min(s, c);
			if (l == 1e9) break;
			let u = l + o, d = l, f = u;
			for (;;) if (a < n.length && n[a] <= d) {
				let e = n[a + 1];
				a += 2, d = Math.max(d, e);
				for (let e = i; e < t.length && t[e].fromB <= d; e++) o = t[e].toA - t[e].toB;
				f = Math.max(f, e + o);
			} else if (i < t.length && t[i].fromB <= d) {
				let e = t[i++];
				d = Math.max(d, e.toB), f = Math.max(f, e.toA), o = e.toA - e.toB;
			} else break;
			r.push(new e(u, f, l, d));
		}
		return r;
	}
}, wo = class e {
	constructor(e, t, n) {
		this.view = e, this.state = t, this.transactions = n, this.flags = 0, this.startState = e.state, this.changes = Hn.empty(this.startState.doc.length);
		for (let e of n) this.changes = this.changes.compose(e.changes);
		let r = [];
		this.changes.iterChangedRanges((e, t, n, i) => r.push(new Co(e, t, n, i))), this.changedRanges = r;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	get viewportMoved() {
		return (this.flags & 8) > 0;
	}
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 18) > 0;
	}
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get selectionSet() {
		return this.transactions.some((e) => e.selection);
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
}, To = [], Eo = class {
	constructor(e, t, n = 0) {
		this.dom = e, this.length = t, this.flags = n, this.parent = null, e.cmTile = this;
	}
	get breakAfter() {
		return this.flags & 1;
	}
	get children() {
		return To;
	}
	isWidget() {
		return !1;
	}
	get isHidden() {
		return !1;
	}
	isComposite() {
		return !1;
	}
	isLine() {
		return !1;
	}
	isText() {
		return !1;
	}
	isBlock() {
		return !1;
	}
	get domAttrs() {
		return null;
	}
	sync(e) {
		if (this.flags |= 2, this.flags & 4) {
			this.flags &= -5;
			let e = this.domAttrs;
			e && Li(this.dom, e);
		}
	}
	toString() {
		return this.constructor.name + (this.children.length ? `(${this.children})` : "") + (this.breakAfter ? "#" : "");
	}
	destroy() {
		this.parent = null;
	}
	setDOM(e) {
		this.dom = e, e.cmTile = this;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(e, t = this.posAtStart) {
		let n = t;
		for (let t of this.children) {
			if (t == e) return n;
			n += t.length + t.breakAfter;
		}
		throw RangeError("Invalid child in posBefore");
	}
	posAfter(e) {
		return this.posBefore(e) + e.length;
	}
	covers(e) {
		return !0;
	}
	coordsIn(e, t, n) {
		return null;
	}
	domPosFor(e, t) {
		let n = ea(this.dom), r = this.length ? e > 0 : t > 0;
		return new ba(this.parent.dom, n + +!!r, e == 0 || e == this.length);
	}
	markDirty(e) {
		this.flags &= -3, e && (this.flags |= 4), this.parent && this.parent.flags & 2 && this.parent.markDirty(!1);
	}
	get overrideDOMText() {
		return null;
	}
	get root() {
		for (let e = this; e; e = e.parent) if (e instanceof ko) return e;
		return null;
	}
	static get(e) {
		return e.cmTile;
	}
}, Do = class extends Eo {
	constructor(e) {
		super(e, 0), this._children = [];
	}
	isComposite() {
		return !0;
	}
	get children() {
		return this._children;
	}
	get lastChild() {
		return this.children.length ? this.children[this.children.length - 1] : null;
	}
	append(e) {
		this.children.push(e), e.parent = this;
	}
	sync(e) {
		if (this.flags & 2) return;
		super.sync(e);
		let t = this.dom, n = null, r, i = e?.node == t ? e : null, a = 0;
		for (let o of this.children) {
			if (o.sync(e), a += o.length + o.breakAfter, r = n ? n.nextSibling : t.firstChild, i && r != o.dom && (i.written = !0), o.dom.parentNode == t) for (; r && r != o.dom;) r = Oo(r);
			else t.insertBefore(o.dom, r);
			n = o.dom;
		}
		for (r = n ? n.nextSibling : t.firstChild, i && r && (i.written = !0); r;) r = Oo(r);
		this.length = a;
	}
};
function Oo(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var ko = class extends Do {
	constructor(e, t) {
		super(t), this.view = e;
	}
	owns(e) {
		for (; e; e = e.parent) if (e == this) return !0;
		return !1;
	}
	isBlock() {
		return !0;
	}
	nearest(e) {
		for (;;) {
			if (!e) return null;
			let t = Eo.get(e);
			if (t && this.owns(t)) return t;
			e = e.parentNode;
		}
	}
	blockTiles(e) {
		for (let t = [], n = this, r = 0, i = 0;;) if (r == n.children.length) {
			if (!t.length) return;
			n = n.parent, n.breakAfter && i++, r = t.pop();
		} else {
			let a = n.children[r++];
			if (a instanceof Ao) t.push(r), n = a, r = 0;
			else {
				let t = i + a.length, n = e(a, i);
				if (n !== void 0) return n;
				i = t + a.breakAfter;
			}
		}
	}
	resolveBlock(e, t) {
		let n, r = -1, i, a = -1;
		if (this.blockTiles((o, s) => {
			let c = s + o.length;
			if (e >= s && e <= c) {
				if (o.isWidget() && t >= -1 && t <= 1) {
					if (o.flags & 32) return !0;
					o.flags & 16 && (n = void 0);
				}
				(s < e || e == c && (t < -1 ? o.length : o.covers(1))) && (!n || !o.isWidget() && n.isWidget()) && (n = o, r = e - s), (c > e || e == s && (t > 1 ? o.length : o.covers(-1))) && (!i || !o.isWidget() && i.isWidget()) && (i = o, a = e - s);
			}
		}), !n && !i) throw Error("No tile at position " + e);
		return n && t < 0 || !i ? {
			tile: n,
			offset: r
		} : {
			tile: i,
			offset: a
		};
	}
}, Ao = class e extends Do {
	constructor(e, t) {
		super(e), this.wrapper = t;
	}
	isBlock() {
		return !0;
	}
	covers(e) {
		return this.children.length ? e < 0 ? this.children[0].covers(-1) : this.lastChild.covers(1) : !1;
	}
	get domAttrs() {
		return this.wrapper.attributes;
	}
	static of(t, n) {
		let r = new e(n || document.createElement(t.tagName), t);
		return n || (r.flags |= 4), r;
	}
}, jo = class e extends Do {
	constructor(e, t) {
		super(e), this.attrs = t;
	}
	isLine() {
		return !0;
	}
	static start(t, n, r) {
		let i = new e(n || document.createElement("div"), t);
		return (!n || !r) && (i.flags |= 4), i;
	}
	get domAttrs() {
		return this.attrs;
	}
	resolveInline(e, t, n) {
		let r = null, i = -1, a = null, o = -1;
		function s(e, c) {
			for (let l = 0, u = 0; l < e.children.length && u <= c; l++) {
				let d = e.children[l], f = u + d.length;
				f >= c && (d.isComposite() ? s(d, c - u) : (!a || a.isHidden && (t > 0 && !(a.flags & 32) || n && No(a, d))) && (f > c || d.flags & 32 && t <= 1) ? (a = d, o = c - u) : (u < c || d.flags & 16 && !d.isHidden && t >= -1) && (r = d, i = c - u)), u = f;
			}
		}
		s(this, e);
		let c = (t < 0 ? r : a) || r || a;
		return c ? {
			tile: c,
			offset: c == r ? i : o
		} : null;
	}
	coordsIn(e, t, n) {
		let r = this.resolveInline(e, t, !0);
		return r ? r.tile.coordsIn(Math.max(0, r.offset), t, n) : Mo(this);
	}
	domIn(e, t) {
		let n = this.resolveInline(e, t);
		if (n) {
			let { tile: e, offset: r } = n;
			if (this.dom.contains(e.dom)) return e.isText() ? new ba(e.dom, Math.min(e.dom.nodeValue.length, r)) : e.domPosFor(r, e.flags & 16 ? 1 : e.flags & 32 ? -1 : t);
			let i = n.tile.parent, a = !1;
			for (let e of i.children) {
				if (a) return new ba(e.dom, 0);
				e == n.tile && (a = !0);
			}
		}
		return new ba(this.dom, 0);
	}
};
function Mo(e) {
	let t = e.dom.lastChild;
	if (!t) return e.dom.getBoundingClientRect();
	let n = Qi(t);
	return n[n.length - 1] || null;
}
function No(e, t) {
	let n = e.coordsIn(0, 1), r = t.coordsIn(0, 1);
	return n && r && r.top < n.bottom;
}
var Po = class e extends Do {
	constructor(e, t) {
		super(e), this.mark = t;
	}
	get domAttrs() {
		return this.mark.attrs;
	}
	static of(t, n) {
		let r = new e(n || document.createElement(t.tagName), t);
		return n || (r.flags |= 4), r;
	}
}, Fo = class e extends Eo {
	constructor(e, t) {
		super(e, t.length), this.text = t;
	}
	sync(e) {
		this.flags & 2 || (super.sync(e), this.dom.nodeValue != this.text && (e && e.node == this.dom && (e.written = !0), this.dom.nodeValue = this.text));
	}
	isText() {
		return !0;
	}
	toString() {
		return JSON.stringify(this.text);
	}
	coordsIn(e, t, n) {
		let r = this.dom.nodeValue.length;
		e > r && (e = r);
		let i = e, a = e, o = 0;
		e == 0 && t < 0 || e == r && t >= 0 ? X.chrome || X.gecko || (e ? (i--, o = 1) : a < r && (a++, o = -1)) : t < 0 ? i-- : a < r && a++;
		let s = pa(this.dom, i, a).getClientRects();
		if (!s.length) return null;
		let c = s[(o ? o < 0 : t >= 0) ? 0 : s.length - 1];
		return X.safari && !o && c.width == 0 && (c = Array.prototype.find.call(s, (e) => e.width) || c), n == null ? c : ia(c, (o ? o > 0 : t < 0) == n);
	}
	static of(t, n) {
		let r = new e(n || document.createTextNode(t), t);
		return n || (r.flags |= 2), r;
	}
}, Io = class e extends Eo {
	constructor(e, t, n, r) {
		super(e, t, r), this.widget = n;
	}
	isWidget() {
		return !0;
	}
	get isHidden() {
		return this.widget.isHidden;
	}
	covers(e) {
		return this.flags & 48 ? !1 : (this.flags & (e < 0 ? 64 : 128)) > 0;
	}
	coordsIn(e, t) {
		return this.coordsInWidget(e, t, !1);
	}
	coordsInWidget(e, t, n) {
		let r = this.widget.coordsAt(this.dom, e, t);
		if (r) return r;
		if (n) return ia(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0);
		{
			let t = this.dom.getClientRects(), n = null;
			if (!t.length) return null;
			let r = this.flags & 16 ? !0 : this.flags & 32 ? !1 : e > 0;
			for (let i = r ? t.length - 1 : 0; n = t[i], !(e > 0 ? i == 0 : i == t.length - 1 || n.top < n.bottom); i += r ? -1 : 1);
			return ia(n, !r);
		}
	}
	get overrideDOMText() {
		if (!this.length) return K.empty;
		let { root: e } = this;
		if (!e) return K.empty;
		let t = this.posAtStart;
		return e.view.state.doc.slice(t, t + this.length);
	}
	destroy() {
		super.destroy(), this.widget.destroy(this.dom);
	}
	static of(t, n, r, i, a) {
		return a || (a = t.toDOM(n), t.editable || (a.contentEditable = "false")), new e(a, r, t, i);
	}
}, Lo = class extends Eo {
	constructor(e) {
		let t = document.createElement("img");
		t.className = "cm-widgetBuffer", t.setAttribute("aria-hidden", "true"), super(t, 0, e);
	}
	get isHidden() {
		return !0;
	}
	get overrideDOMText() {
		return K.empty;
	}
	coordsIn(e, t, n) {
		let r = this.dom.getBoundingClientRect();
		return n == null ? r : ia(r, t > 0 == n);
	}
}, Ro = class {
	constructor(e) {
		this.index = 0, this.beforeBreak = !1, this.parents = [], this.tile = e;
	}
	advance(e, t, n) {
		let { tile: r, index: i, beforeBreak: a, parents: o } = this;
		for (; e || t > 0;) if (!r.isComposite()) {
			let t = r.length;
			if (i < t && e) {
				let a = Math.min(e, t - i);
				n && n.skip(r, i, i + a), e -= a, i += a;
			}
			if (i == t) a = !!r.breakAfter, {tile: r, index: i} = o.pop(), i++;
			else if (!e) break;
		} else if (a) {
			if (!e) break;
			n && n.break(), e--, a = !1;
		} else if (i == r.children.length) {
			if (!e && !o.length) break;
			n && n.leave(r), a = !!r.breakAfter, {tile: r, index: i} = o.pop(), i++;
		} else {
			let s = r.children[i], c = s.breakAfter;
			(t > 0 ? s.length <= e : s.length < e) && (!n || n.skip(s, 0, s.length) !== !1 || !s.isComposite) ? (a = !!c, i++, e -= s.length) : (o.push({
				tile: r,
				index: i
			}), r = s, i = 0, n && s.isComposite() && n.enter(s));
		}
		return this.tile = r, this.index = i, this.beforeBreak = a, this;
	}
	get root() {
		return this.parents.length ? this.parents[0].tile : this.tile;
	}
}, zo = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.wrapper = n, this.rank = r;
	}
}, Bo = class {
	constructor(e, t, n) {
		this.cache = e, this.root = t, this.blockWrappers = n, this.curLine = null, this.lastBlock = null, this.afterWidget = null, this.pos = 0, this.wrappers = [], this.wrapperPos = 0;
	}
	addText(e, t, n, r) {
		this.flushBuffer();
		let i = this.ensureMarks(t, n), a = i.lastChild;
		if (a && a.isText() && !(a.flags & 8) && a.length + e.length < 512) {
			this.cache.reused.set(a, 2);
			let t = i.children[i.children.length - 1] = new Fo(a.dom, a.text + e);
			t.parent = i;
		} else i.append(r || Fo.of(e, this.cache.find(Fo)?.dom));
		this.pos += e.length, this.afterWidget = null;
	}
	addComposition(e, t) {
		let n = this.curLine;
		n.dom != t.line.dom && (n.setDOM(this.cache.reused.has(t.line) ? Xo(t.line.dom) : t.line.dom), this.cache.reused.set(t.line, 2));
		let r = n;
		for (let e = t.marks.length - 1; e >= 0; e--) {
			let n = t.marks[e], i = r.lastChild;
			if (i instanceof Po && i.mark.eq(n.mark)) i.dom != n.dom && i.setDOM(Xo(n.dom)), r = i;
			else {
				if (this.cache.reused.get(n)) {
					let e = Eo.get(n.dom);
					e && e.setDOM(Xo(n.dom));
				}
				let e = Po.of(n.mark, n.dom);
				r.append(e), r = e;
			}
			this.cache.reused.set(n, 2);
		}
		let i = Eo.get(e.text);
		i && this.cache.reused.set(i, 2);
		let a = new Fo(e.text, e.text.nodeValue);
		a.flags |= 8, this.pos = e.range.toB, r.append(a);
	}
	addInlineWidget(e, t, n) {
		let r = this.afterWidget && e.flags & 48 && (this.afterWidget.flags & 48) == (e.flags & 48);
		r || this.flushBuffer();
		let i = this.ensureMarks(t, n);
		!r && !(e.flags & 16) && i.append(this.getBuffer(1)), i.append(e), this.pos += e.length, this.afterWidget = e;
	}
	addMark(e, t, n) {
		this.flushBuffer(), this.ensureMarks(t, n).append(e), this.pos += e.length, this.afterWidget = null;
	}
	addBlockWidget(e) {
		this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
	}
	continueWidget(e) {
		let t = this.afterWidget || this.lastBlock;
		t.length += e, this.pos += e;
	}
	addLineStart(e, t) {
		e ||= qo;
		let n = jo.start(e, t || this.cache.find(jo)?.dom, !!t);
		this.getBlockPos().append(this.lastBlock = this.curLine = n);
	}
	addLine(e) {
		this.getBlockPos().append(e), this.pos += e.length, this.lastBlock = e, this.endLine();
	}
	addBreak() {
		this.lastBlock.flags |= 1, this.endLine(), this.pos++;
	}
	addLineStartIfNotCovered(e) {
		this.blockPosCovered() || this.addLineStart(e);
	}
	ensureLine(e) {
		this.curLine || this.addLineStart(e);
	}
	ensureMarks(e, t) {
		let n = this.curLine;
		for (let r = e.length - 1; r >= 0; r--) {
			let i = e[r], a;
			if (t > 0 && (a = n.lastChild) && a instanceof Po && a.mark.eq(i)) n = a, t--;
			else {
				let e = Po.of(i, this.cache.find(Po, (e) => e.mark.eq(i))?.dom);
				n.append(e), n = e, t = 0;
			}
		}
		return n;
	}
	endLine() {
		if (this.curLine) {
			this.flushBuffer();
			let e = this.curLine.lastChild;
			(!e || !Go(this.curLine, !1) || e.dom.nodeName != "BR" && e.isWidget() && !(X.ios && Go(this.curLine, !0))) && this.curLine.append(this.cache.findWidget(Qo, 0, 32) || new Io(Qo.toDOM(), 0, Qo, 32)), this.curLine = this.afterWidget = null;
		}
	}
	updateBlockWrappers() {
		this.wrapperPos > this.pos + 1e4 && (this.blockWrappers.goto(this.pos), this.wrappers.length = 0);
		for (let e = this.wrappers.length - 1; e >= 0; e--) this.wrappers[e].to < this.pos && this.wrappers.splice(e, 1);
		for (let e = this.blockWrappers; e.value && e.from <= this.pos; e.next()) if (e.to >= this.pos) {
			let t = e.rank * 102 + e.value.rank, n = new zo(e.from, e.to, e.value, t), r = this.wrappers.length;
			for (; r > 0 && (this.wrappers[r - 1].rank - n.rank || this.wrappers[r - 1].to - n.to) < 0;) r--;
			this.wrappers.splice(r, 0, n);
		}
		this.wrapperPos = this.pos;
	}
	getBlockPos() {
		this.updateBlockWrappers();
		let e = this.root;
		for (let t of this.wrappers) {
			let n = e.lastChild;
			if (t.from < this.pos && n instanceof Ao && n.wrapper.eq(t.wrapper)) e = n;
			else {
				let n = Ao.of(t.wrapper, this.cache.find(Ao, (e) => e.wrapper.eq(t.wrapper))?.dom);
				e.append(n), e = n;
			}
		}
		return e;
	}
	blockPosCovered() {
		let e = this.lastBlock;
		return e != null && !e.breakAfter && (!e.isWidget() || (e.flags & 160) > 0);
	}
	getBuffer(e) {
		let t = 2 | (e < 0 ? 16 : 32), n = this.cache.find(Lo, void 0, 1);
		return n && (n.flags = t), n || new Lo(t);
	}
	flushBuffer() {
		this.afterWidget && !(this.afterWidget.flags & 32) && (this.afterWidget.parent.append(this.getBuffer(-1)), this.afterWidget = null);
	}
}, Vo = class {
	constructor(e) {
		this.skipCount = 0, this.text = "", this.textOff = 0, this.cursor = e.iter();
	}
	skip(e) {
		this.textOff + e <= this.text.length ? this.textOff += e : (this.skipCount += e - (this.text.length - this.textOff), this.text = "", this.textOff = 0);
	}
	next(e) {
		if (this.textOff == this.text.length) {
			let { value: t, lineBreak: n, done: r } = this.cursor.next(this.skipCount);
			if (this.skipCount = 0, r) throw Error("Ran out of text content when drawing inline views");
			this.text = t;
			let i = this.textOff = Math.min(e, t.length);
			return n ? null : t.slice(0, i);
		}
		let t = Math.min(this.text.length, this.textOff + e), n = this.text.slice(this.textOff, t);
		return this.textOff = t, n;
	}
}, Ho = [
	Io,
	jo,
	Fo,
	Po,
	Lo,
	Ao,
	ko
];
for (let e = 0; e < Ho.length; e++) Ho[e].bucket = e;
var Uo = class {
	constructor(e) {
		this.view = e, this.buckets = Ho.map(() => []), this.index = Ho.map(() => 0), this.reused = /* @__PURE__ */ new Map();
	}
	add(e) {
		let t = e.constructor.bucket, n = this.buckets[t];
		n.length < 6 ? n.push(e) : n[this.index[t] = (this.index[t] + 1) % 6] = e;
	}
	find(e, t, n = 2) {
		let r = e.bucket, i = this.buckets[r], a = this.index[r];
		for (let e = 0; e < i.length; e++) {
			let o = (e + a) % i.length, s = i[o];
			if ((!t || t(s)) && !this.reused.has(s)) return i.splice(o, 1), o < a && this.index[r]--, this.reused.set(s, n), s;
		}
		return null;
	}
	findWidget(e, t, n) {
		let r = this.buckets[0];
		if (r.length) for (let i = 0, a = 0;; i++) {
			if (i == r.length) {
				if (a) return null;
				a = 1, i = 0;
			}
			let o = r[i];
			if (!this.reused.has(o) && (a == 0 ? o.widget.compare(e) : o.widget.constructor == e.constructor && e.updateDOM(o.dom, this.view, o.widget))) return r.splice(i, 1), i < this.index[0] && this.index[0]--, o.widget == e && o.length == t && (o.flags & 497) == n ? (this.reused.set(o, 1), o) : (this.reused.set(o, 2), new Io(o.dom, t, e, o.flags & -498 | n));
		}
	}
	reuse(e) {
		return this.reused.set(e, 1), e;
	}
	maybeReuse(e, t = 2) {
		if (!this.reused.has(e)) return this.reused.set(e, t), e.dom;
	}
	clear() {
		for (let e = 0; e < this.buckets.length; e++) this.buckets[e].length = this.index[e] = 0;
	}
}, Wo = class {
	constructor(e, t, n, r, i) {
		this.view = e, this.decorations = r, this.disallowBlockEffectsFor = i, this.openWidget = !1, this.openMarks = 0, this.cache = new Uo(e), this.text = new Vo(e.state.doc), this.builder = new Bo(this.cache, new ko(e, e.contentDOM), Kr.iter(n)), this.cache.reused.set(t, 2), this.old = new Ro(t), this.reuseWalker = {
			skip: (e, t, n) => {
				if (this.cache.add(e), e.isComposite()) return !1;
			},
			enter: (e) => this.cache.add(e),
			leave: () => {},
			break: () => {}
		};
	}
	run(e, t) {
		let n = t && this.getCompositionContext(t.text);
		for (let r = 0, i = 0, a = 0;;) {
			let o = a < e.length ? e[a++] : null, s = o ? o.fromA : this.old.root.length;
			if (s > r) {
				let e = s - r;
				this.preserve(e, !a, !o), r = s, i += e;
			}
			if (!o) break;
			t && o.fromA <= t.range.fromA && o.toA >= t.range.toA ? (this.forward(o.fromA, t.range.fromA, t.range.fromA < t.range.toA ? 1 : -1), this.emit(i, t.range.fromB), this.builder.flushBuffer(), this.cache.clear(), this.builder.addComposition(t, n), this.text.skip(t.range.toB - t.range.fromB), this.forward(t.range.fromA, o.toA), this.emit(t.range.toB, o.toB)) : (this.forward(o.fromA, o.toA), this.emit(i, o.toB)), i = o.toB, r = o.toA;
		}
		return this.builder.curLine && this.builder.endLine(), this.builder.root;
	}
	preserve(e, t, n) {
		let r = Yo(this.old), i = this.openMarks;
		this.old.advance(e, n ? 1 : -1, {
			skip: (e, t, n) => {
				if (e.isWidget()) if (this.openWidget) this.builder.continueWidget(n - t);
				else {
					let a = n > 0 || t < e.length ? Io.of(e.widget, this.view, n - t, e.flags & 496, this.cache.maybeReuse(e)) : this.cache.reuse(e);
					a.flags & 256 ? (a.flags &= -2, this.builder.addBlockWidget(a)) : (this.builder.ensureLine(null), this.builder.addInlineWidget(a, r, i), i = r.length);
				}
				else if (e.isText()) this.builder.ensureLine(null), !t && n == e.length && !this.cache.reused.has(e) ? this.builder.addText(e.text, r, i, this.cache.reuse(e)) : (this.cache.add(e), this.builder.addText(e.text.slice(t, n), r, i)), i = r.length;
				else if (e.isLine()) e.flags &= -2, this.cache.reused.set(e, 1), this.builder.addLine(e);
				else if (e instanceof Lo) this.cache.add(e);
				else if (e instanceof Po) this.builder.ensureLine(null), this.builder.addMark(e, r, i), this.cache.reused.set(e, 1), i = r.length;
				else return !1;
				this.openWidget = !1;
			},
			enter: (e) => {
				e.isLine() ? this.builder.addLineStart(e.attrs, this.cache.maybeReuse(e)) : (this.cache.add(e), e instanceof Po && r.unshift(e.mark)), this.openWidget = !1;
			},
			leave: (e) => {
				e.isLine() ? r.length &&= i = 0 : e instanceof Po && (r.shift(), i = Math.min(i, r.length));
			},
			break: () => {
				this.builder.addBreak(), this.openWidget = !1;
			}
		}), this.text.skip(e);
	}
	emit(e, t) {
		let n = null, r = this.builder, i = -1, a = Kr.spans(this.decorations, e, t, {
			point: (e, t, a, o, s, c) => {
				if (a instanceof Wi) {
					if (this.disallowBlockEffectsFor[c]) {
						if (a.block) throw RangeError("Block decorations may not be specified via plugins");
						if (t > this.view.state.doc.lineAt(e).to) throw RangeError("Decorations that replace line breaks may not be specified via plugins");
					}
					if (i = o.length, s > o.length) r.continueWidget(t - e);
					else {
						let i = a.widget || (a.block ? Zo.block : Zo.inline), c = Ko(a), l = this.cache.findWidget(i, t - e, c) || Io.of(i, this.view, t - e, c);
						a.block ? (a.startSide > 0 && r.addLineStartIfNotCovered(n), r.addBlockWidget(l)) : (r.ensureLine(n), r.addInlineWidget(l, o, s));
					}
					n = null;
				} else n = Jo(n, a);
				t > e && this.text.skip(t - e);
			},
			span: (e, t, a, o) => {
				for (let i = e; i < t;) {
					let s = this.text.next(Math.min(512, t - i));
					s == null ? (r.addLineStartIfNotCovered(n), r.addBreak(), i++) : (r.ensureLine(n), r.addText(s, a, i == e ? o : a.length), i += s.length), n = null;
				}
				i = a.length;
			}
		});
		i > -1 && (this.openWidget = a > i), this.openWidget || r.addLineStartIfNotCovered(n), this.openMarks = a;
	}
	forward(e, t, n = 1) {
		t - e <= 10 ? this.old.advance(t - e, n, this.reuseWalker) : (this.old.advance(5, -1, this.reuseWalker), this.old.advance(t - e - 10, -1), this.old.advance(5, n, this.reuseWalker));
	}
	getCompositionContext(e) {
		let t = [], n = null;
		for (let r = e.parentNode;; r = r.parentNode) {
			let e = Eo.get(r);
			if (r == this.view.contentDOM) break;
			e instanceof Po ? t.push(e) : e?.isLine() ? n = e : e instanceof Ao || (r.nodeName == "DIV" && !n && r != this.view.contentDOM ? n = new jo(r, qo) : n || t.push(Po.of(new Hi({
				tagName: r.nodeName.toLowerCase(),
				attributes: zi(r)
			}), r)));
		}
		return {
			line: n,
			marks: t
		};
	}
};
function Go(e, t) {
	let n = (e) => {
		for (let r of e.children) if ((t ? r.isText() : r.length) || n(r)) return !0;
		return !1;
	};
	return n(e);
}
function Ko(e) {
	let t = e.isReplace ? (e.startSide < 0 ? 64 : 0) | (e.endSide > 0 ? 128 : 0) : e.startSide > 0 ? 32 : 16;
	return e.block && (t |= 256), t;
}
var qo = { class: "cm-line" };
function Jo(e, t) {
	let n = t.spec.attributes, r = t.spec.class;
	return !n && !r ? e : (e ||= { class: "cm-line" }, n && Pi(n, e), r && (e.class += " " + r), e);
}
function Yo(e) {
	let t = [];
	for (let n = e.parents.length; n > 1; n--) {
		let r = n == e.parents.length ? e.tile : e.parents[n].tile;
		r instanceof Po && t.push(r.mark);
	}
	return t;
}
function Xo(e) {
	let t = Eo.get(e);
	return t && t.setDOM(e.cloneNode()), e;
}
var Zo = class extends Bi {
	constructor(e) {
		super(), this.tag = e;
	}
	eq(e) {
		return e.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(e) {
		return e.nodeName.toLowerCase() == this.tag;
	}
	get isHidden() {
		return !0;
	}
};
Zo.inline = /*@__PURE__*/ new Zo("span"), Zo.block = /*@__PURE__*/ new Zo("div");
var Qo = /*@__PURE__*/ new class extends Bi {
	toDOM() {
		return document.createElement("br");
	}
	get isHidden() {
		return !0;
	}
	get editable() {
		return !0;
	}
}(), $o = class {
	constructor(e) {
		this.view = e, this.decorations = [], this.blockWrappers = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.editContextFormatting = Z.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.updateDeco(), this.tile = new ko(e, e.contentDOM), this.updateInner([new Co(0, 0, 0, e.state.doc.length)], null);
	}
	update(e) {
		let t = e.changedRanges;
		this.minWidth > 0 && t.length && (t.every(({ fromA: e, toA: t }) => t < this.minWidthFrom || e > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
		let n = -1;
		this.view.inputState.composing >= 0 && !this.view.observer.editContext && (this.domChanged?.newSel ? n = this.domChanged.newSel.head : !us(e.changes, this.hasComposition) && !e.selectionSet && (n = e.state.selection.main.head));
		let r = n > -1 ? rs(this.view, e.changes, n) : null;
		if (this.domChanged = null, this.hasComposition) {
			let { from: n, to: r } = this.hasComposition;
			t = new Co(n, r, e.changes.mapPos(n, -1), e.changes.mapPos(r, 1)).addToSet(t.slice());
		}
		this.hasComposition = r ? {
			from: r.range.fromB,
			to: r.range.toB
		} : null, (X.ie || X.chrome) && !r && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
		let i = this.decorations, a = this.blockWrappers;
		this.updateDeco();
		let o = os(i, this.decorations, e.changes);
		o.length && (t = Co.extendWithRanges(t, o));
		let s = cs(a, this.blockWrappers, e.changes);
		return s.length && (t = Co.extendWithRanges(t, s)), r && !t.some((e) => e.fromA <= r.range.fromA && e.toA >= r.range.toA) && (t = r.range.addToSet(t.slice())), this.tile.flags & 2 && t.length == 0 ? !1 : (this.updateInner(t, r), e.transactions.length && (this.lastUpdate = Date.now()), !0);
	}
	updateInner(e, t) {
		this.view.viewState.mustMeasureContent = !0;
		let { observer: n } = this.view;
		n.ignore(() => {
			if (t || e.length) {
				let n = this.tile, r = new Wo(this.view, n, this.blockWrappers, this.decorations, this.dynamicDecorationMap);
				t && Eo.get(t.text) && r.cache.reused.set(Eo.get(t.text), 2), this.tile = r.run(e, t), es(n, r.cache.reused);
			}
			this.tile.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.tile.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
			let r = X.chrome || X.ios ? {
				node: n.selectionRange.focusNode,
				written: !1
			} : void 0;
			this.tile.sync(r), r && (r.written || n.selectionRange.focusNode != r.node || !this.tile.dom.contains(r.node)) && (this.forceSelection = !0), this.tile.dom.style.height = "";
		});
		let r = [];
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let e of this.tile.children) e.isWidget() && e.widget instanceof ds && r.push(e.dom);
		n.updateGaps(r);
	}
	updateEditContextFormatting(e) {
		this.editContextFormatting = this.editContextFormatting.map(e.changes);
		for (let t of e.transactions) for (let e of t.effects) e.is(io) && (this.editContextFormatting = e.value);
	}
	updateSelection(e = !1, t = !1) {
		(e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
		let { dom: n } = this.tile, r = this.view.root.activeElement, i = r == n, a = !i && !(this.view.state.facet(oo) || n.tabIndex > -1) && Zi(n, this.view.observer.selectionRange) && !(r && n.contains(r));
		if (!(i || t || a)) return;
		let o = this.forceSelection;
		this.forceSelection = !1;
		let s = this.view.state.selection.main, c, l;
		if (s.empty ? l = c = this.inlineDOMNearPos(s.anchor, s.assoc || 1) : (l = this.inlineDOMNearPos(s.head, s.head == s.from ? 1 : -1), c = this.inlineDOMNearPos(s.anchor, s.anchor == s.from ? 1 : -1)), X.gecko && s.empty && !this.hasComposition && ts(c)) {
			let e = document.createTextNode("");
			this.view.observer.ignore(() => c.node.insertBefore(e, c.node.childNodes[c.offset] || null)), c = l = new ba(e, 0), o = !0;
		}
		let u = this.view.observer.selectionRange;
		(o || !u.focusNode || (!$i(c.node, c.offset, u.anchorNode, u.anchorOffset) || !$i(l.node, l.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, s)) && (this.view.observer.ignore(() => {
			X.android && X.chrome && n.contains(u.focusNode) && ls(u.focusNode, n) && (n.blur(), n.focus({ preventScroll: !0 }));
			let e = Yi(this.view.root);
			if (e) if (s.empty) {
				if (X.gecko) {
					let e = is(c.node, c.offset);
					if (e && e != 3) {
						let t = (e == 1 ? va : ya)(c.node, c.offset);
						t && (c = new ba(t.node, t.offset));
					}
				}
				e.collapse(c.node, c.offset), s.bidiLevel != null && e.caretBidiLevel !== void 0 && (e.caretBidiLevel = s.bidiLevel);
			} else if (e.extend) {
				e.collapse(c.node, c.offset);
				try {
					e.extend(l.node, l.offset);
				} catch {}
			} else {
				let t = document.createRange();
				s.anchor > s.head && ([c, l] = [l, c]), t.setEnd(l.node, l.offset), t.setStart(c.node, c.offset), e.removeAllRanges(), e.addRange(t);
			}
			a && this.view.root.activeElement == n && (n.blur(), r && r.focus());
		}), this.view.observer.setSelectionRange(c, l)), this.impreciseAnchor = c.precise ? null : new ba(u.anchorNode, u.anchorOffset), this.impreciseHead = l.precise ? null : new ba(u.focusNode, u.focusOffset);
	}
	suppressWidgetCursorChange(e, t) {
		return this.hasComposition && t.empty && $i(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == t.head;
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return;
		let { view: e } = this, t = e.state.selection.main, n = Yi(e.root), { anchorNode: r, anchorOffset: i } = e.observer.selectionRange;
		if (!n || !t.empty || !t.assoc || !n.modify) return;
		let a = this.lineAt(t.head, t.assoc);
		if (!a) return;
		let o = a.posAtStart;
		if (t.head == o || t.head == o + a.length) return;
		let s = this.coordsAt(t.head, -1), c = this.coordsAt(t.head, 1);
		if (!s || !c || s.bottom > c.top) return;
		let l = this.domAtPos(t.head + t.assoc, t.assoc);
		n.collapse(l.node, l.offset), n.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
		let u = e.observer.selectionRange;
		e.docView.posFromDOM(u.anchorNode, u.anchorOffset) != t.from && n.collapse(r, i);
	}
	posFromDOM(e, t) {
		let n = this.tile.nearest(e);
		if (!n) return this.tile.dom.compareDocumentPosition(e) & 2 ? 0 : this.view.state.doc.length;
		let r = n.posAtStart;
		if (n.isComposite()) {
			let i;
			if (e == n.dom) i = n.dom.childNodes[t];
			else {
				let r = ra(e) == 0 ? 0 : t == 0 ? -1 : 1;
				for (;;) {
					let t = e.parentNode;
					if (t == n.dom) break;
					r == 0 && t.firstChild != t.lastChild && (r = e == t.firstChild ? -1 : 1), e = t;
				}
				i = r < 0 ? e : e.nextSibling;
			}
			if (i == n.dom.firstChild) return r;
			for (; i && !Eo.get(i);) i = i.nextSibling;
			if (!i) return r + n.length;
			for (let e = 0, t = r;; e++) {
				let r = n.children[e];
				if (r.dom == i) return t;
				t += r.length + r.breakAfter;
			}
		} else if (n.isText()) return e == n.dom ? r + t : r + (t ? n.length : 0);
		else return r;
	}
	domAtPos(e, t) {
		let { tile: n, offset: r } = this.tile.resolveBlock(e, t);
		return n.isWidget() ? n.domPosFor(r, t) : n.domIn(r, t);
	}
	inlineDOMNearPos(e, t) {
		let n, r = -1, i = !1, a, o = -1, s = !1;
		return this.tile.blockTiles((t, c) => {
			if (t.isWidget()) {
				if (t.flags & 32 && c >= e) return !0;
				t.flags & 16 && (i = !0);
			} else {
				let l = c + t.length;
				if (c <= e && (n = t, r = e - c, i = l < e), l >= e && !a && (a = t, o = e - c, s = c > e), c > e && a) return !0;
			}
		}), !n && !a ? this.domAtPos(e, t) : (i && a ? n = null : s && n && (a = null), n && t < 0 || !a ? n.domIn(r, t) : a.domIn(o, t));
	}
	coordsAt(e, t, n) {
		let { tile: r, offset: i } = this.tile.resolveBlock(e, t);
		return r.isWidget() ? r.widget instanceof ds ? null : r.coordsInWidget(i, t, !0) : r.coordsIn(i, t, n);
	}
	lineAt(e, t) {
		let { tile: n } = this.tile.resolveBlock(e, t);
		return n.isLine() ? n : null;
	}
	coordsForChar(e) {
		let { tile: t, offset: n } = this.tile.resolveBlock(e, 1);
		if (!t.isLine()) return null;
		function r(e, t) {
			if (e.isComposite()) for (let n of e.children) {
				if (n.length >= t) {
					let e = r(n, t);
					if (e) return e;
				}
				if (t -= n.length, t < 0) break;
			}
			else if (e.isText() && t < e.length) {
				let n = Nn(e.text, t);
				if (n == t) return null;
				let r = pa(e.dom, t, n).getClientRects();
				for (let e = 0; e < r.length; e++) {
					let t = r[e];
					if (e == r.length - 1 || t.top < t.bottom && t.left < t.right) return t;
				}
			}
			return null;
		}
		return r(t, n);
	}
	measureVisibleLineHeights(e) {
		let t = [], { from: n, to: r } = e, i = this.view.contentDOM.clientWidth, a = i > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, o = -1, s = this.view.textDirection == xa.LTR, c = 0, l = (e, u, d) => {
			for (let f = 0; f < e.children.length && !(u > r); f++) {
				let r = e.children[f], p = u + r.length, m = r.dom.getBoundingClientRect(), { height: h } = m;
				if (d && !f && (c += m.top - d.top), r instanceof Ao) p > n && l(r, u, m);
				else if (u >= n && (c > 0 && t.push(-c), t.push(h + c), c = 0, a)) {
					let e = r.dom.lastChild, t = e ? Qi(e) : [];
					if (t.length) {
						let e = t[t.length - 1], n = s ? e.right - m.left : m.right - e.left;
						n > o && (o = n, this.minWidth = i, this.minWidthFrom = u, this.minWidthTo = p);
					}
				}
				d && f == e.children.length - 1 && (c += d.bottom - m.bottom), u = p + r.breakAfter;
			}
		};
		return l(this.tile, 0, null), t;
	}
	textDirectionAt(e) {
		let { tile: t } = this.tile.resolveBlock(e, 1);
		return getComputedStyle(t.dom).direction == "rtl" ? xa.RTL : xa.LTR;
	}
	measureTextSize() {
		let e = this.tile.blockTiles((e) => {
			if (e.isLine() && e.children.length && e.length <= 20) {
				let t = 0, n;
				for (let r of e.children) {
					if (!r.isText() || /[^ -~]/.test(r.text)) return;
					let e = Qi(r.dom);
					if (e.length != 1) return;
					t += e[0].width, n = e[0].height;
				}
				if (t) return {
					lineHeight: e.dom.getBoundingClientRect().height,
					charWidth: t / e.length,
					textHeight: n
				};
			}
		});
		if (e) return e;
		let t = document.createElement("div"), n, r, i;
		return t.className = "cm-line", t.style.width = "99999px", t.style.position = "absolute", t.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
			this.tile.dom.appendChild(t);
			let e = Qi(t.firstChild)[0];
			n = t.getBoundingClientRect().height, r = e && e.width ? e.width / 27 : 7, i = e && e.height ? e.height : n, t.remove();
		}), {
			lineHeight: n,
			charWidth: r,
			textHeight: i
		};
	}
	computeBlockGapDeco() {
		let e = [], t = this.view.viewState;
		for (let n = 0, r = 0;; r++) {
			let i = r == t.viewports.length ? null : t.viewports[r], a = i ? i.from - 1 : this.view.state.doc.length;
			if (a > n) {
				let r = (t.lineBlockAt(a).bottom - t.lineBlockAt(n).top) / this.view.scaleY;
				e.push(Z.replace({
					widget: new ds(r),
					block: !0,
					inclusive: !0,
					isBlockGap: !0
				}).range(n, a));
			}
			if (!i) break;
			n = i.to + 1;
		}
		return Z.set(e);
	}
	updateDeco() {
		let e = 1, t = this.view.state.facet(mo).map((t) => (this.dynamicDecorationMap[e++] = typeof t == "function") ? t(this.view) : t), n = !1, r = this.view.state.facet(go).map((e, t) => {
			let r = typeof e == "function";
			return r && (n = !0), r ? e(this.view) : e;
		});
		for (r.length && (this.dynamicDecorationMap[e++] = n, t.push(Kr.join(r))), this.decorations = [
			this.editContextFormatting,
			...t,
			this.computeBlockGapDeco(),
			this.view.viewState.lineGapDeco
		]; e < this.decorations.length;) this.dynamicDecorationMap[e++] = !1;
		this.blockWrappers = this.view.state.facet(ho).map((e) => typeof e == "function" ? e(this.view) : e);
	}
	scrollIntoView(e) {
		if (e.isSnapshot) {
			let t = this.view.viewState.lineBlockAt(e.range.head);
			this.view.scrollDOM.scrollTop = t.top - e.yMargin, this.view.scrollDOM.scrollLeft = e.xMargin;
			return;
		}
		for (let t of this.view.state.facet(to)) try {
			if (t(this.view, e.range, e)) return !0;
		} catch (e) {
			ao(this.view.state, e, "scroll handler");
		}
		let { range: t } = e, n = this.coordsAt(t.head, t.assoc || (t.head > t.anchor ? -1 : 1)), r;
		if (!n) return;
		!t.empty && (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) && (n = {
			left: Math.min(n.left, r.left),
			top: Math.min(n.top, r.top),
			right: Math.max(n.right, r.right),
			bottom: Math.max(n.bottom, r.bottom)
		});
		let i = xo(this.view), a = {
			left: n.left - i.left,
			top: n.top - i.top,
			right: n.right + i.right,
			bottom: n.bottom + i.bottom
		}, { offsetWidth: o, offsetHeight: s } = this.view.scrollDOM;
		if (sa(this.view.scrollDOM, a, t.head < t.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, o), -o), Math.max(Math.min(e.yMargin, s), -s), this.view.textDirection == xa.LTR), window.visualViewport && window.innerHeight - window.visualViewport.height > 1 && (n.top > window.pageYOffset + window.visualViewport.offsetTop + window.visualViewport.height || n.bottom < window.pageYOffset + window.visualViewport.offsetTop)) {
			let e = this.view.docView.lineAt(t.head, 1);
			e && e.dom.scrollIntoView({ block: "nearest" });
		}
	}
	lineHasWidget(e) {
		let t = (e) => e.isWidget() || e.children.some(t);
		return t(this.tile.resolveBlock(e, 1).tile);
	}
	destroy() {
		es(this.tile);
	}
};
function es(e, t) {
	let n = t?.get(e);
	if (n != 1) {
		n ?? e.destroy();
		for (let n of e.children) es(n, t);
	}
}
function ts(e) {
	return e.node.nodeType == 1 && e.node.firstChild && (e.offset == 0 || e.node.childNodes[e.offset - 1].contentEditable == "false") && (e.offset == e.node.childNodes.length || e.node.childNodes[e.offset].contentEditable == "false");
}
function ns(e, t) {
	let n = e.observer.selectionRange;
	if (!n.focusNode) return null;
	let r = va(n.focusNode, n.focusOffset), i = ya(n.focusNode, n.focusOffset), a = r || i;
	if (i && r && i.node != r.node) {
		let t = Eo.get(i.node);
		if (!t || t.isText() && t.text != i.node.nodeValue) a = i;
		else if (e.docView.lastCompositionAfterCursor) {
			let e = Eo.get(r.node);
			!e || e.isText() && e.text != r.node.nodeValue || (a = i);
		}
	}
	if (e.docView.lastCompositionAfterCursor = a != r, !a) return null;
	let o = t - a.offset;
	return {
		from: o,
		to: o + a.node.nodeValue.length,
		node: a.node
	};
}
function rs(e, t, n) {
	let r = ns(e, n);
	if (!r) return null;
	let { node: i, from: a, to: o } = r, s = i.nodeValue;
	if (/[\n\r]/.test(s) || e.state.doc.sliceString(r.from, r.to) != s) return null;
	let c = t.invertedDesc;
	return {
		range: new Co(c.mapPos(a), c.mapPos(o), a, o),
		text: i
	};
}
function is(e, t) {
	return e.nodeType == 1 ? (t && e.childNodes[t - 1].contentEditable == "false" ? 1 : 0) | (t < e.childNodes.length && e.childNodes[t].contentEditable == "false" ? 2 : 0) : 0;
}
var as = class {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		qi(e, t, this.changes);
	}
	comparePoint(e, t) {
		qi(e, t, this.changes);
	}
	boundChange(e) {
		qi(e, e, this.changes);
	}
};
function os(e, t, n) {
	let r = new as();
	return Kr.compare(e, t, n, r), r.changes;
}
var ss = class {
	constructor() {
		this.changes = [];
	}
	compareRange(e, t) {
		qi(e, t, this.changes);
	}
	comparePoint() {}
	boundChange(e) {
		qi(e, e, this.changes);
	}
};
function cs(e, t, n) {
	let r = new ss();
	return Kr.compare(e, t, n, r), r.changes;
}
function ls(e, t) {
	for (let n = e; n && n != t; n = n.assignedSlot || n.parentNode) if (n.nodeType == 1 && n.contentEditable == "false") return !0;
	return !1;
}
function us(e, t) {
	let n = !1;
	return t && e.iterChangedRanges((e, r) => {
		e < t.to && r > t.from && (n = !0);
	}), n;
}
var ds = class extends Bi {
	constructor(e) {
		super(), this.height = e;
	}
	toDOM() {
		let e = document.createElement("div");
		return e.className = "cm-gap", this.updateDOM(e), e;
	}
	eq(e) {
		return e.height == this.height;
	}
	updateDOM(e) {
		return e.style.height = this.height + "px", !0;
	}
	get editable() {
		return !0;
	}
	get estimatedHeight() {
		return this.height;
	}
	ignoreEvent() {
		return !1;
	}
};
function fs(e, t, n = 1) {
	let r = e.charCategorizer(t), i = e.doc.lineAt(t), a = t - i.from;
	if (i.length == 0) return q.cursor(t);
	a == 0 ? n = 1 : a == i.length && (n = -1);
	let o = a, s = a;
	n < 0 ? o = Nn(i.text, a, !1) : s = Nn(i.text, a);
	let c = r(i.text.slice(o, s));
	for (; o > 0;) {
		let e = Nn(i.text, o, !1);
		if (r(i.text.slice(e, o)) != c) break;
		o = e;
	}
	for (; s < i.length;) {
		let e = Nn(i.text, s);
		if (r(i.text.slice(s, e)) != c) break;
		s = e;
	}
	return q.undirectionalRange(o + i.from, s + i.from);
}
function ps(e, t, n, r, i) {
	let a = Math.round((r - t.left) * e.defaultCharacterWidth);
	if (e.lineWrapping && n.height > e.defaultLineHeight * 1.5) {
		let t = e.viewState.heightOracle.textHeight, r = Math.floor((i - n.top - (e.defaultLineHeight - t) * .5) / t);
		a += r * e.viewState.heightOracle.lineLength;
	}
	let o = e.state.sliceDoc(n.from, n.to);
	return n.from + oi(o, a, e.state.tabSize);
}
function ms(e, t, n) {
	let r = e.lineBlockAt(t);
	if (Array.isArray(r.type)) {
		let e;
		for (let i of r.type) {
			if (i.from > t) break;
			if (!(i.to < t)) {
				if (i.from < t && i.to > t) return i;
				(!e || i.type == Vi.Text && (e.type != i.type || (n < 0 ? i.from < t : i.to > t))) && (e = i);
			}
		}
		return e || r;
	}
	return r;
}
function hs(e, t, n, r) {
	let i = ms(e, t.head, t.assoc || -1), a = !r || i.type != Vi.Text || !(e.lineWrapping || i.widgetLineBreaks) ? null : e.coordsAtPos(t.assoc < 0 && t.head > i.from ? t.head - 1 : t.head);
	if (a) {
		let t = e.dom.getBoundingClientRect(), r = e.textDirectionAt(i.from), o = e.posAtCoords({
			x: n == (r == xa.LTR) ? t.right - 1 : t.left + 1,
			y: (a.top + a.bottom) / 2
		});
		if (o != null) return q.cursor(o, n ? -1 : 1);
	}
	return q.cursor(n ? i.to : i.from, n ? -1 : 1);
}
function gs(e, t, n, r) {
	let i = e.state.doc.lineAt(t.head), a = e.bidiSpans(i), o = e.textDirectionAt(i.from);
	for (let s = t, c = null;;) {
		let t = Ha(i, a, o, s, n), l = Va;
		if (!t) {
			if (i.number == (n ? e.state.doc.lines : 1)) return s;
			l = "\n", i = e.state.doc.line(i.number + (n ? 1 : -1)), a = e.bidiSpans(i), t = e.visualLineSide(i, !n);
		}
		if (!c) {
			if (!r) return t;
			c = r(l);
		} else if (!c(l)) return s;
		s = t;
	}
}
function _s(e, t, n) {
	let r = e.state.charCategorizer(t), i = r(n);
	return (e) => {
		let t = r(e);
		return i == Pr.Space && (i = t), i == t;
	};
}
function vs(e, t, n, r) {
	let i = t.head, a = n ? 1 : -1;
	if (i == (n ? e.state.doc.length : 0)) return q.cursor(i, t.assoc);
	let o = t.goalColumn, s, c = e.contentDOM.getBoundingClientRect(), l = e.coordsAtPos(i, t.assoc || ((t.empty ? n : t.head == t.from) ? 1 : -1)), u = e.documentTop;
	if (l) o ??= l.left - c.left, s = a < 0 ? l.top : l.bottom;
	else {
		let t = e.viewState.lineBlockAt(i);
		o ??= Math.min(c.right - c.left, e.defaultCharacterWidth * (i - t.from)), s = (a < 0 ? t.top : t.bottom) + u;
	}
	let d = c.left + o, f = e.viewState.heightOracle.textHeight >> 1, p = r ?? f;
	for (let t = 0;; t += f) {
		let r = s + (p + t) * a, i = Cs(e, {
			x: d,
			y: r
		}, !1, a);
		if (n ? r > c.bottom : r < c.top) return q.cursor(i.pos, i.assoc);
		let l = e.coordsAtPos(i.pos, i.assoc), u = l ? (l.top + l.bottom) / 2 : 0;
		if (!l || (n ? u > s : u < s)) return q.cursor(i.pos, i.assoc, void 0, o);
	}
}
function ys(e, t, n) {
	for (;;) {
		let r = 0;
		for (let i of e) i.between(t - 1, t + 1, (e, i, a) => {
			if (t > e && t < i) {
				let a = r || n || (t - e < i - t ? -1 : 1);
				t = a < 0 ? e : i, r = a;
			}
		});
		if (!r) return t;
	}
}
function bs(e, t) {
	let n = null;
	for (let r = 0; r < t.ranges.length; r++) {
		let i = t.ranges[r], a = null;
		if (i.empty) {
			let t = ys(e, i.from, 0);
			t != i.from && (a = q.cursor(t, -1));
		} else {
			let t = ys(e, i.from, -1), n = ys(e, i.to, 1);
			(t != i.from || n != i.to) && (a = i.undirectional ? q.undirectionalRange(i.from, i.to) : q.range(i.from == i.anchor ? t : n, i.from == i.head ? t : n));
		}
		a && (n ||= t.ranges.slice(), n[r] = a);
	}
	return n ? q.create(n, t.mainIndex) : t;
}
function xs(e, t, n) {
	let r = ys(e.state.facet(_o).map((t) => t(e)), n.from, t.head > n.from ? -1 : 1);
	return r == n.from ? n : q.cursor(r, r < n.from ? 1 : -1);
}
var Ss = class {
	constructor(e, t) {
		this.pos = e, this.assoc = t;
	}
};
function Cs(e, t, n, r) {
	let i = e.contentDOM.getBoundingClientRect(), a = i.top + e.viewState.paddingTop, { x: o, y: s } = t, c = s - a, l;
	for (;;) {
		if (c < 0) return new Ss(0, 1);
		if (c > e.viewState.docHeight) return new Ss(e.state.doc.length, -1);
		if (l = e.elementAtHeight(c), r == null) break;
		if (l.type == Vi.Text) {
			if (r < 0 ? l.to < e.viewport.from : l.from > e.viewport.to) break;
			let t = e.docView.coordsAt(r < 0 ? l.from : l.to, r > 0 ? -1 : 1);
			if (t && (r < 0 ? t.top <= c + a : t.bottom >= c + a)) break;
		}
		let t = e.viewState.heightOracle.textHeight / 2;
		c = r > 0 ? l.bottom + t : l.top - t;
	}
	if (e.viewport.from >= l.to || e.viewport.to <= l.from) {
		if (n) return null;
		if (l.type == Vi.Text) {
			let t = ps(e, i, l, o, s);
			return new Ss(t, t == l.from ? 1 : -1);
		}
	}
	if (l.type != Vi.Text) return c < (l.top + l.bottom) / 2 ? new Ss(l.from, 1) : new Ss(l.to, -1);
	let u = e.docView.lineAt(l.from, 2);
	return (!u || u.length != l.length) && (u = e.docView.lineAt(l.from, -2)), new ws(e, o, s, e.textDirectionAt(l.from)).scanTile(u, l.from);
}
var ws = class {
	constructor(e, t, n, r) {
		this.view = e, this.x = t, this.y = n, this.baseDir = r, this.line = null, this.spans = null;
	}
	bidiSpansAt(e) {
		return (!this.line || this.line.from > e || this.line.to < e) && (this.line = this.view.state.doc.lineAt(e), this.spans = this.view.bidiSpans(this.line)), this;
	}
	baseDirAt(e, t) {
		let { line: n, spans: r } = this.bidiSpansAt(e);
		return r[ja.find(r, e - n.from, -1, t)].level == this.baseDir;
	}
	dirAt(e, t) {
		let { line: n, spans: r } = this.bidiSpansAt(e);
		return r[ja.find(r, e - n.from, -1, t)].dir;
	}
	bidiIn(e, t) {
		let { spans: n, line: r } = this.bidiSpansAt(e);
		return n.length > 1 || n.length && (n[0].level != this.baseDir || n[0].to + r.from < t);
	}
	scan(e, t, n = !1) {
		let r = 0, i = e.length - 1, a = /* @__PURE__ */ new Set(), o = this.bidiIn(e[0], e[i]), s, c, l = -1, u = 1e9, d;
		search: for (; r < i;) {
			let n = i - r, f = r + i >> 1;
			adjust: if (a.has(f)) {
				let e = r + Math.floor(Math.random() * n);
				for (let t = 0; t < n; t++) {
					if (!a.has(e)) {
						f = e;
						break adjust;
					}
					e++, e == i && (e = r);
				}
				break search;
			}
			a.add(f);
			let p = t(f);
			if (p) for (let t = 0; t < p.length; t++) {
				let n = p[t], a = 0;
				if (!(n.width == 0 && p.length > 1)) {
					if (n.bottom < this.y) (!s || s.bottom < n.bottom) && (s = n), a = 1;
					else if (n.top > this.y) (!c || c.top > n.top) && (c = n), a = -1;
					else {
						let e = n.left > this.x ? this.x - n.left : n.right < this.x ? this.x - n.right : 0, t = Math.abs(e);
						t < u && (l = f, u = t, d = n), e && (a = e < 0 == (this.baseDir == xa.LTR) ? -1 : 1);
					}
					a == -1 && (!o || this.baseDirAt(e[f], 1)) ? i = f : a == 1 && (!o || this.baseDirAt(e[f + 1], -1)) && (r = f + 1);
				}
			}
		}
		if (!d) {
			if (!c && !s) return {
				i: e[0],
				after: !1
			};
			let n = s && (!c || this.y - s.bottom < c.top - this.y) ? s : c;
			return this.y = (n.top + n.bottom) / 2, this.scan(e, t, !0);
		}
		if (u && !n) {
			let { top: n, bottom: r } = d;
			if (s && s.bottom > (n + n + r) / 3) return this.y = s.bottom - 1, this.scan(e, t, !0);
			if (c && c.top < (n + r + r) / 3) return this.y = c.top + 1, this.scan(e, t, !0);
		}
		let f = (o ? this.dirAt(e[l], 1) : this.baseDir) == xa.LTR;
		return {
			i: l,
			after: this.x > (d.left + d.right) / 2 == f
		};
	}
	scanText(e, t) {
		let n = [];
		for (let r = 0; r < e.length; r = Nn(e.text, r)) n.push(t + r);
		n.push(t + e.length);
		let r = this.scan(n, (r) => {
			let i = n[r] - t, a = n[r + 1] - t;
			return pa(e.dom, i, a).getClientRects();
		});
		return r.after ? new Ss(n[r.i + 1], -1) : new Ss(n[r.i], 1);
	}
	scanTile(e, t) {
		if (!e.length) return new Ss(t, 1);
		if (e.children.length == 1) {
			let n = e.children[0];
			if (n.isText()) return this.scanText(n, t);
			if (n.isComposite()) return this.scanTile(n, t);
		}
		let n = [t];
		for (let r = 0, i = t; r < e.children.length; r++) n.push(i += e.children[r].length);
		let r = this.scan(n, (t) => {
			let n = e.children[t];
			return n.flags & 48 ? null : (n.dom.nodeType == 1 ? n.dom : pa(n.dom, 0, n.length)).getClientRects();
		}), i = e.children[r.i], a = n[r.i];
		return i.isText() ? this.scanText(i, a) : i.isComposite() ? this.scanTile(i, a) : r.after ? new Ss(n[r.i + 1], -1) : new Ss(a, 1);
	}
}, Ts = "￿", Es = class {
	constructor(e, t) {
		this.points = e, this.view = t, this.text = "", this.lineSeparator = t.state.facet(zr.lineSeparator);
	}
	append(e) {
		this.text += e;
	}
	lineBreak() {
		this.text += Ts;
	}
	readRange(e, t) {
		if (!e) return this;
		let n = e.parentNode;
		for (let r = e;;) {
			this.findPointBefore(n, r);
			let e = this.text.length;
			this.readNode(r);
			let i = Eo.get(r), a = r.nextSibling;
			if (a == t) {
				i?.breakAfter && !a && n != this.view.contentDOM && this.lineBreak();
				break;
			}
			let o = Eo.get(a);
			(i && o ? i.breakAfter : (i ? i.breakAfter : ta(r)) || ta(a) && (r.nodeName != "BR" || i?.isWidget()) && this.text.length > e) && !Os(a, t) && this.lineBreak(), r = a;
		}
		return this.findPointBefore(n, t), this;
	}
	readTextNode(e) {
		let t = e.nodeValue;
		for (let n of this.points) n.node == e && (n.pos = this.text.length + Math.min(n.offset, t.length));
		for (let n = 0, r = this.lineSeparator ? null : /\r\n?|\n/g;;) {
			let i = -1, a = 1, o;
			if (this.lineSeparator ? (i = t.indexOf(this.lineSeparator, n), a = this.lineSeparator.length) : (o = r.exec(t)) && (i = o.index, a = o[0].length), this.append(t.slice(n, i < 0 ? t.length : i)), i < 0) break;
			if (this.lineBreak(), a > 1) for (let t of this.points) t.node == e && t.pos > this.text.length && (t.pos -= a - 1);
			n = i + a;
		}
	}
	readNode(e) {
		let t = Eo.get(e), n = t && t.overrideDOMText;
		if (n != null) {
			this.findPointInside(e, n.length);
			for (let e = n.iter(); !e.next().done;) e.lineBreak ? this.lineBreak() : this.append(e.value);
		} else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
	}
	findPointBefore(e, t) {
		for (let n of this.points) n.node == e && e.childNodes[n.offset] == t && (n.pos = this.text.length);
	}
	findPointInside(e, t) {
		for (let n of this.points) (e.nodeType == 3 ? n.node == e : e.contains(n.node)) && (n.pos = this.text.length + (Ds(e, n.node, n.offset) ? t : 0));
	}
};
function Ds(e, t, n) {
	for (;;) {
		if (!t || n < ra(t)) return !1;
		if (t == e) return !0;
		n = ea(t) + 1, t = t.parentNode;
	}
}
function Os(e, t) {
	let n;
	for (; !(e == t || !e); e = e.nextSibling) {
		let t = Eo.get(e);
		if (!t?.isWidget()) return !1;
		t && (n ||= []).push(t);
	}
	if (n) {
		for (let e of n) if (e.overrideDOMText?.length) return !1;
	}
	return !0;
}
var ks = class {
	constructor(e, t) {
		this.node = e, this.offset = t, this.pos = -1;
	}
}, As = class {
	constructor(e, t, n, r) {
		this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = t > -1;
		let { impreciseHead: i, impreciseAnchor: a } = e.docView, o = e.state.selection;
		if (e.state.readOnly && t > -1) this.newSel = null;
		else if (t > -1 && (this.bounds = js(e.docView.tile, t, n, 0))) {
			let t = i || a ? [] : Is(e), n = new Es(t, e);
			n.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = n.text, this.newSel = Ls(t, this.bounds.from);
		} else {
			let t = e.observer.selectionRange, n = i && i.node == t.focusNode && i.offset == t.focusOffset || !Xi(e.contentDOM, t.focusNode) ? o.main.head : e.docView.posFromDOM(t.focusNode, t.focusOffset), r = a && a.node == t.anchorNode && a.offset == t.anchorOffset || !Xi(e.contentDOM, t.anchorNode) ? o.main.anchor : e.docView.posFromDOM(t.anchorNode, t.anchorOffset), s = e.viewport;
			if ((X.ios || X.chrome) && n != r && Math.min(n, r) <= o.main.from && Math.max(n, r) >= o.main.to && (s.from > 0 || s.to < e.state.doc.length)) {
				let t = Math.min(n, r), i = Math.max(n, r), a = s.from - t, o = s.to - i;
				(a == 0 || a == 1 || t == 0) && (o == 0 || o == -1 || i == e.state.doc.length) && (n = 0, r = e.state.doc.length);
			}
			if (e.inputState.composing > -1 && o.ranges.length > 1) this.newSel = o.replaceRange(q.range(r, n));
			else if (e.lineWrapping && r == n && !(o.main.empty && o.main.head == n) && e.inputState.lastTouchTime > Date.now() - 100) {
				let t = e.coordsAtPos(n, -1), r = 0;
				t && (r = e.inputState.lastTouchY <= t.bottom ? -1 : 1), this.newSel = q.create([q.cursor(n, r)]);
			} else this.newSel = q.single(r, n);
		}
	}
};
function js(e, t, n, r) {
	if (e.isComposite()) {
		let i = -1, a = -1, o = -1, s = -1;
		for (let c = 0, l = r, u = r; c < e.children.length; c++) {
			let r = e.children[c], d = l + r.length;
			if (l < t && d > n) return js(r, t, n, l);
			if (d >= t && i == -1 && (i = c, a = l), l > n && r.dom.parentNode == e.dom) {
				o = c, s = u;
				break;
			}
			u = d, l = d + r.breakAfter;
		}
		return {
			from: a,
			to: s < 0 ? r + e.length : s,
			startDOM: (i ? e.children[i - 1].dom.nextSibling : null) || e.dom.firstChild,
			endDOM: o < e.children.length && o >= 0 ? e.children[o].dom : null
		};
	}
	return e.isText() ? {
		from: r,
		to: r + e.length,
		startDOM: e.dom,
		endDOM: e.dom.nextSibling
	} : null;
}
function Ms(e, t) {
	let n, { newSel: r } = t, { state: i } = e, a = i.selection.main, o = e.inputState.lastKeyTime > Date.now() - 100 ? e.inputState.lastKeyCode : -1;
	if (t.bounds) {
		let { from: e, to: r } = t.bounds, s = a.from, c = null;
		(o === 8 || X.android && t.text.length < r - e) && (s = a.to, c = "end");
		let l = i.doc.sliceString(e, r, Ts), u, d;
		!a.empty && a.from >= e && a.to <= r && (t.typeOver || l != t.text) && l.slice(0, a.from - e) == t.text.slice(0, a.from - e) && l.slice(a.to - e) == t.text.slice(u = t.text.length - (l.length - (a.to - e))) ? n = {
			from: a.from,
			to: a.to,
			insert: K.of(t.text.slice(a.from - e, u).split(Ts))
		} : (d = Fs(l, t.text, s - e, c)) && (X.chrome && o == 13 && d.toB == d.from + 2 && t.text.slice(d.from, d.toB) == "￿￿" && d.toB--, n = {
			from: e + d.from,
			to: e + d.toA,
			insert: K.of(t.text.slice(d.from, d.toB).split(Ts))
		});
	} else r && (!e.hasFocus && i.facet(oo) || Rs(r, a)) && (r = null);
	if (!n && !r) return !1;
	if ((X.mac || X.android) && n && n.from == n.to && n.from == a.head - 1 && /^\. ?$/.test(n.insert.toString()) && e.contentDOM.getAttribute("autocorrect") == "off" ? (r && n.insert.length == 2 && (r = q.single(r.main.anchor - 1, r.main.head - 1)), n = {
		from: n.from,
		to: n.to,
		insert: K.of([n.insert.toString().replace(".", " ")])
	}) : i.doc.lineAt(a.from).to < a.to && e.docView.lineHasWidget(a.to) && e.inputState.insertingTextAt > Date.now() - 50 ? n = {
		from: a.from,
		to: a.to,
		insert: i.toText(e.inputState.insertingText)
	} : X.chrome && n && n.from == n.to && n.from == a.head && n.insert.toString() == "\n " && e.lineWrapping && (r &&= q.single(r.main.anchor - 1, r.main.head - 1), n = {
		from: a.from,
		to: a.to,
		insert: K.of([" "])
	}), n) return Ns(e, n, r, o);
	if (r && !Rs(r, a)) {
		let t = !1, n = "select";
		return e.inputState.lastSelectionTime > Date.now() - 50 && (e.inputState.lastSelectionOrigin == "select" && (t = !0), n = e.inputState.lastSelectionOrigin, n == "select.pointer" && (r = bs(i.facet(_o).map((t) => t(e)), r))), e.dispatch({
			selection: r,
			scrollIntoView: t,
			userEvent: n
		}), !0;
	}
	return !1;
}
function Ns(e, t, n, r = -1) {
	if (X.ios && e.inputState.flushIOSKey(t)) return !0;
	let i = e.state.selection.main;
	if (X.android && (t.to == i.to && (t.from == i.from || t.from == i.from - 1 && e.state.sliceDoc(t.from, i.from) == " ") && t.insert.length == 1 && t.insert.lines == 2 && ma(e.contentDOM, "Enter", 13) || (t.from == i.from - 1 && t.to == i.to && t.insert.length == 0 || r == 8 && t.insert.length < t.to - t.from && t.to > i.head) && ma(e.contentDOM, "Backspace", 8) || t.from == i.from && t.to == i.to + 1 && t.insert.length == 0 && ma(e.contentDOM, "Delete", 46))) return !0;
	let a = t.insert.toString();
	e.inputState.composing >= 0 && e.inputState.composing++;
	let o, s = () => o ||= Ps(e, t, n);
	return e.state.facet(Ya).some((n) => n(e, t.from, t.to, a, s)) || e.dispatch(s()), !0;
}
function Ps(e, t, n) {
	let r, i = e.state, a = i.selection.main, o = -1;
	if (t.from == t.to && t.from < a.from || t.from > a.to) {
		let n = t.from < a.from ? -1 : 1, r = n < 0 ? a.from : a.to, s = ys(i.facet(_o).map((t) => t(e)), r, n);
		t.from == s && (o = s);
	}
	if (o > -1) r = {
		changes: t,
		selection: q.cursor(t.from + t.insert.length, -1)
	};
	else if (t.from >= a.from && t.to <= a.to && t.to - t.from >= (a.to - a.from) / 3 && (!n || n.main.empty && n.main.from == t.from + t.insert.length) && e.inputState.composing < 0) {
		let n = a.from < t.from ? i.sliceDoc(a.from, t.from) : "", o = a.to > t.to ? i.sliceDoc(t.to, a.to) : "";
		r = i.replaceSelection(e.state.toText(n + t.insert.sliceString(0, void 0, e.state.lineBreak) + o));
	} else {
		let o = i.changes(t), s = n && n.main.to <= o.newLength ? n.main : void 0;
		if (i.selection.ranges.length > 1 && (e.inputState.composing >= 0 || e.inputState.compositionPendingChange) && t.to <= a.to + 10 && t.to >= a.to - 10) {
			let c = e.state.sliceDoc(t.from, t.to), l, u = n && ns(e, n.main.head);
			if (u) {
				let e = t.insert.length - (t.to - t.from);
				l = {
					from: u.from,
					to: u.to - e
				};
			} else l = e.state.doc.lineAt(a.head);
			let d = a.to - t.to;
			r = i.changeByRange((n) => {
				if (n.from == a.from && n.to == a.to) return {
					changes: o,
					range: s || n.map(o)
				};
				let r = n.to - d, u = r - c.length;
				if (e.state.sliceDoc(u, r) != c || r >= l.from && u <= l.to) return { range: n };
				let f = i.changes({
					from: u,
					to: r,
					insert: t.insert
				}), p = n.to - a.to;
				return {
					changes: f,
					range: s ? q.range(Math.max(0, s.anchor + p), Math.max(0, s.head + p)) : n.map(f)
				};
			});
		} else r = {
			changes: o,
			selection: s && i.selection.replaceRange(s)
		};
	}
	let s = "input.type";
	return (e.composing || e.inputState.compositionPendingChange && e.inputState.compositionEndedAt > Date.now() - 50) && (e.inputState.compositionPendingChange = !1, s += ".compose", e.inputState.compositionFirstChange && (s += ".start", e.inputState.compositionFirstChange = !1)), i.update(r, {
		userEvent: s,
		scrollIntoView: !0
	});
}
function Fs(e, t, n, r) {
	let i = Math.min(e.length, t.length), a = 0;
	for (; a < i && e.charCodeAt(a) == t.charCodeAt(a);) a++;
	if (a == i && e.length == t.length) return null;
	let o = e.length, s = t.length;
	for (; o > 0 && s > 0 && e.charCodeAt(o - 1) == t.charCodeAt(s - 1);) o--, s--;
	if (r == "end") {
		let e = Math.max(0, a - Math.min(o, s));
		n -= o + e - a;
	}
	if (o < a && e.length < t.length) {
		let e = n <= a && n >= o ? a - n : 0;
		a -= e, s = a + (s - o), o = a;
	} else if (s < a) {
		let e = n <= a && n >= s ? a - n : 0;
		a -= e, o = a + (o - s), s = a;
	}
	return {
		from: a,
		toA: o,
		toB: s
	};
}
function Is(e) {
	let t = [];
	if (e.root.activeElement != e.contentDOM) return t;
	let { anchorNode: n, anchorOffset: r, focusNode: i, focusOffset: a } = e.observer.selectionRange;
	return n && (t.push(new ks(n, r)), (i != n || a != r) && t.push(new ks(i, a))), t;
}
function Ls(e, t) {
	if (e.length == 0) return null;
	let n = e[0].pos, r = e.length == 2 ? e[1].pos : n;
	return n > -1 && r > -1 ? q.single(n + t, r + t) : null;
}
function Rs(e, t) {
	return t.head == e.main.head && t.anchor == e.main.anchor;
}
var zs = class {
	setSelectionOrigin(e) {
		this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
	}
	constructor(e) {
		this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.touchActive = !1, this.lastTouchTime = 0, this.lastTouchX = 0, this.lastTouchY = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.lastWheelEvent = 0, this.pendingIOSKey = void 0, this.lastIOSMomentumScroll = 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.insertingText = "", this.insertingTextAt = 0, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, X.safari && e.contentDOM.addEventListener("input", () => null), X.gecko && Sc(e.contentDOM.ownerDocument);
	}
	handleEvent(e) {
		!$s(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState == 0 ? this.runHandlers(e.type, e) : Promise.resolve().then(() => this.runHandlers(e.type, e)));
	}
	runHandlers(e, t) {
		let n = this.handlers[e];
		if (n) {
			for (let e of n.observers) e(this.view, t);
			for (let e of n.handlers) {
				if (t.defaultPrevented) break;
				if (e(this.view, t)) {
					t.preventDefault();
					break;
				}
			}
		}
	}
	ensureHandlers(e) {
		let t = Hs(e), n = this.handlers, r = this.view.contentDOM;
		for (let e in t) if (e != "scroll") {
			let i = !t[e].handlers.length, a = n[e];
			a && i != !a.handlers.length && (r.removeEventListener(e, this.handleEvent), a = null), a || r.addEventListener(e, this.handleEvent, { passive: i });
		}
		for (let e in n) e != "scroll" && !t[e] && r.removeEventListener(e, this.handleEvent);
		this.handlers = t;
	}
	keydown(e) {
		if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode)) return !0;
		if (this.tabFocusMode > 0 && e.keyCode != 27 && Gs.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), X.android && X.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8)) return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
		if (X.ios && !e.synthetic && !e.altKey && !e.metaKey && (Us.some((t) => t.keyCode == e.keyCode) && !e.ctrlKey || Ws.indexOf(e.key) > -1 && e.ctrlKey)) {
			let t = {
				ctrlKey: e.ctrlKey,
				altKey: e.altKey,
				metaKey: e.metaKey,
				shiftKey: e.shiftKey
			};
			return t.shiftKey && X.ios && !/^(off|none)$/.test(this.view.contentDOM.autocapitalize) && Bs(this.view.win) && (t.shiftKey = !1), this.pendingIOSKey = {
				key: e.key,
				keyCode: e.keyCode,
				mods: t
			}, setTimeout(() => this.flushIOSKey(), 250), !0;
		}
		return e.keyCode != 229 && this.view.observer.forceFlush(), !1;
	}
	flushIOSKey(e) {
		let t = this.pendingIOSKey;
		return !t || t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, ma(this.view.contentDOM, t.key, t.keyCode, t.mods));
	}
	ignoreDuringComposition(e) {
		return !/^key/.test(e.type) || e.synthetic ? !1 : this.composing > 0 ? !0 : X.safari && !X.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1;
	}
	startMouseSelection(e) {
		this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = e;
	}
	update(e) {
		this.view.observer.update(e), this.mouseSelection && this.mouseSelection.update(e), this.draggedContent && e.docChanged && (this.draggedContent = this.draggedContent.map(e.changes)), e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy();
	}
};
function Bs(e) {
	return e.visualViewport ? e.visualViewport.height * e.visualViewport.scale / e.document.documentElement.clientHeight < .85 : !1;
}
function Vs(e, t) {
	return (n, r) => {
		try {
			return t.call(e, r, n);
		} catch (e) {
			ao(n.state, e);
		}
	};
}
function Hs(e) {
	let t = Object.create(null);
	function n(e) {
		return t[e] || (t[e] = {
			observers: [],
			handlers: []
		});
	}
	for (let t of e) {
		let e = t.spec, r = e && e.plugin.domEventHandlers, i = e && e.plugin.domEventObservers;
		if (r) for (let e in r) {
			let i = r[e];
			i && n(e).handlers.push(Vs(t.value, i));
		}
		if (i) for (let e in i) {
			let r = i[e];
			r && n(e).observers.push(Vs(t.value, r));
		}
	}
	for (let e in ec) n(e).handlers.push(ec[e]);
	for (let e in tc) n(e).observers.push(tc[e]);
	return t;
}
var Us = [
	{
		key: "Backspace",
		keyCode: 8,
		inputType: "deleteContentBackward"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertParagraph"
	},
	{
		key: "Enter",
		keyCode: 13,
		inputType: "insertLineBreak"
	},
	{
		key: "Delete",
		keyCode: 46,
		inputType: "deleteContentForward"
	}
], Ws = "dthko", Gs = [
	16,
	17,
	18,
	20,
	91,
	92,
	224,
	225
], Ks = 6;
function qs(e) {
	return Math.max(0, e) * .7 + 8;
}
function Js(e, t) {
	return Math.max(Math.abs(e.clientX - t.clientX), Math.abs(e.clientY - t.clientY));
}
var Ys = class {
	constructor(e, t, n, r) {
		this.view = e, this.startEvent = t, this.style = n, this.mustSelect = r, this.scrollSpeed = {
			x: 0,
			y: 0
		}, this.scrolling = -1, this.lastEvent = t, this.scrollParents = ca(e.contentDOM), this.atoms = e.state.facet(_o).map((t) => t(e));
		let i = e.contentDOM.ownerDocument;
		i.addEventListener("mousemove", this.move = this.move.bind(this)), i.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = t.shiftKey, this.multiple = e.state.facet(zr.allowMultipleSelections) && Xs(e, t), this.dragging = Qs(e, t) && dc(t) == 1 ? null : !1;
	}
	start(e) {
		this.dragging === !1 && this.select(e);
	}
	move(e) {
		if (e.buttons == 0) return this.destroy();
		if (this.dragging || this.dragging == null && Js(this.startEvent, e) < 10) return;
		this.select(this.lastEvent = e);
		let t = 0, n = 0, r = 0, i = 0, a = this.view.win.innerWidth, o = this.view.win.innerHeight;
		this.scrollParents.x && ({left: r, right: a} = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({top: i, bottom: o} = this.scrollParents.y.getBoundingClientRect());
		let s = xo(this.view);
		e.clientX - s.left <= r + Ks ? t = -qs(r - e.clientX) : e.clientX + s.right >= a - Ks && (t = qs(e.clientX - a)), e.clientY - s.top <= i + Ks ? n = -qs(i - e.clientY) : e.clientY + s.bottom >= o - Ks && (n = qs(e.clientY - o)), this.setScrollSpeed(t, n);
	}
	up(e) {
		this.dragging ?? this.select(this.lastEvent), this.dragging || e.preventDefault(), this.destroy();
	}
	destroy() {
		this.setScrollSpeed(0, 0);
		let e = this.view.contentDOM.ownerDocument;
		e.removeEventListener("mousemove", this.move), e.removeEventListener("mouseup", this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
	}
	setScrollSpeed(e, t) {
		this.scrollSpeed = {
			x: e,
			y: t
		}, e || t ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
	}
	scroll() {
		let { x: e, y: t } = this.scrollSpeed;
		e && this.scrollParents.x && (this.scrollParents.x.scrollLeft += e, e = 0), t && this.scrollParents.y && (this.scrollParents.y.scrollTop += t, t = 0), (e || t) && this.view.win.scrollBy(e, t), this.dragging === !1 && this.select(this.lastEvent);
	}
	select(e) {
		let { view: t } = this, n = bs(this.atoms, this.style.get(e, this.extend, this.multiple));
		(this.mustSelect || !n.eq(t.state.selection, this.dragging === !1)) && this.view.dispatch({
			selection: n,
			userEvent: "select.pointer"
		}), this.mustSelect = !1;
	}
	update(e) {
		e.transactions.some((e) => e.isUserEvent("input.type")) ? this.destroy() : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
	}
};
function Xs(e, t) {
	let n = e.state.facet(Wa);
	return n.length ? n[0](t) : X.mac ? t.metaKey : t.ctrlKey;
}
function Zs(e, t) {
	let n = e.state.facet(Ga);
	return n.length ? n[0](t) : X.mac ? !t.altKey : !t.ctrlKey;
}
function Qs(e, t) {
	let { main: n } = e.state.selection;
	if (n.empty) return !1;
	let r = Yi(e.root);
	if (!r || r.rangeCount == 0) return !0;
	let i = r.getRangeAt(0).getClientRects();
	for (let e = 0; e < i.length; e++) {
		let n = i[e];
		if (n.left <= t.clientX && n.right >= t.clientX && n.top <= t.clientY && n.bottom >= t.clientY) return !0;
	}
	return !1;
}
function $s(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target, r; n != e.contentDOM; n = n.parentNode) if (!n || n.nodeType == 11 || (r = Eo.get(n)) && r.isWidget() && !r.isHidden && r.widget.ignoreEvent(t)) return !1;
	return !0;
}
var ec = /*@__PURE__*/ Object.create(null), tc = /*@__PURE__*/ Object.create(null), nc = X.ie && X.ie_version < 15 || X.ios && X.webkit_version < 604;
function rc(e) {
	let t = e.dom.parentNode;
	if (!t) return;
	let n = t.appendChild(document.createElement("textarea"));
	n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
		e.focus(), n.remove(), ac(e, n.value);
	}, 50);
}
function ic(e, t, n) {
	for (let r of e.facet(t)) n = r(n, e);
	return n;
}
function ac(e, t) {
	t = ic(e.state, Za, t);
	let { state: n } = e, r, i = 1, a = n.toText(t), o = a.lines == n.selection.ranges.length;
	if (_c != null && n.selection.ranges.every((e) => e.empty) && _c == a.toString()) {
		let e = -1;
		r = n.changeByRange((r) => {
			let s = n.doc.lineAt(r.from);
			if (s.from == e) return { range: r };
			e = s.from;
			let c = n.toText((o ? a.line(i++).text : t) + n.lineBreak);
			return {
				changes: {
					from: s.from,
					insert: c
				},
				range: q.cursor(r.from + c.length)
			};
		});
	} else r = o ? n.changeByRange((e) => {
		let t = a.line(i++);
		return {
			changes: {
				from: e.from,
				to: e.to,
				insert: t.text
			},
			range: q.cursor(e.from + t.length)
		};
	}) : n.replaceSelection(a);
	e.dispatch(r, {
		userEvent: "input.paste",
		scrollIntoView: !0
	});
}
tc.scroll = (e) => {
	let t = e.inputState;
	t.lastScrollTop = e.scrollDOM.scrollTop, t.lastScrollLeft = e.scrollDOM.scrollLeft, X.ios && !t.touchActive && (t.lastIOSMomentumScroll = Date.now());
}, tc.wheel = tc.mousewheel = (e) => {
	e.inputState.lastWheelEvent = Date.now();
}, ec.keydown = (e, t) => (e.inputState.setSelectionOrigin("select"), t.keyCode == 27 && e.inputState.tabFocusMode != 0 && (e.inputState.tabFocusMode = Date.now() + 2e3), !1), tc.touchstart = (e, t) => {
	let n = e.inputState, r = t.targetTouches[0];
	n.touchActive = !0, n.lastTouchTime = Date.now(), r && (n.lastTouchX = r.clientX, n.lastTouchY = r.clientY), n.setSelectionOrigin("select.pointer");
}, tc.touchmove = (e) => {
	e.inputState.setSelectionOrigin("select.pointer");
}, tc.touchend = (e, t) => {
	e.inputState.touchActive = !1;
}, ec.mousedown = (e, t) => {
	if (e.observer.flush(), e.inputState.lastTouchTime > Date.now() - 2e3) return !1;
	let n = null;
	for (let r of e.state.facet(Ka)) if (n = r(e, t), n) break;
	if (!n && t.button == 0 && (n = fc(e, t)), n) {
		let r = !e.hasFocus;
		e.inputState.startMouseSelection(new Ys(e, t, n, r)), r && e.observer.ignore(() => {
			da(e.contentDOM);
			let t = e.root.activeElement;
			t && !t.contains(e.contentDOM) && t.blur();
		});
		let i = e.inputState.mouseSelection;
		if (i) return i.start(t), i.dragging === !1;
	} else e.inputState.setSelectionOrigin("select.pointer");
	return !1;
};
function oc(e, t, n, r) {
	if (r == 1) return q.cursor(t, n);
	if (r == 2) return fs(e.state, t, n);
	{
		let r = e.docView.lineAt(t, n), i = e.state.doc.lineAt(r ? r.posAtEnd : t), a = r ? r.posAtStart : i.from, o = r ? r.posAtEnd : i.to;
		return o < e.state.doc.length && o == i.to && o++, q.undirectionalRange(a, o);
	}
}
var sc = X.ie && X.ie_version <= 11, cc = null, lc = 0, uc = 0;
function dc(e) {
	if (!sc) return e.detail;
	let t = cc, n = uc;
	return cc = e, uc = Date.now(), lc = !t || n > Date.now() - 400 && Math.abs(t.clientX - e.clientX) < 2 && Math.abs(t.clientY - e.clientY) < 2 ? (lc + 1) % 3 : 1;
}
function fc(e, t) {
	let n = e.posAndSideAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), r = dc(t), i = e.state.selection;
	return {
		update(e) {
			e.docChanged && (n.pos = e.changes.mapPos(n.pos), i = i.map(e.changes));
		},
		get(t, a, o) {
			let s = e.posAndSideAtCoords({
				x: t.clientX,
				y: t.clientY
			}, !1), c, l = oc(e, s.pos, s.assoc, r);
			if (n.pos != s.pos && !a) {
				let t = oc(e, n.pos, n.assoc, r), i = Math.min(t.from, l.from), a = Math.max(t.to, l.to);
				l = i < l.from ? q.range(i, a, l.assoc) : q.range(a, i, l.assoc);
			}
			return a ? i.replaceRange(i.main.extend(l.from, l.to, l.assoc)) : o && r == 1 && i.ranges.length > 1 && (c = pc(i, s.pos)) ? c : o ? i.addRange(l) : q.create([l]);
		}
	};
}
function pc(e, t) {
	for (let n = 0; n < e.ranges.length; n++) {
		let { from: r, to: i } = e.ranges[n];
		if (r <= t && i >= t) return q.create(e.ranges.slice(0, n).concat(e.ranges.slice(n + 1)), e.mainIndex == n ? 0 : e.mainIndex - +(e.mainIndex > n));
	}
	return null;
}
ec.dragstart = (e, t) => {
	let { selection: { main: n } } = e.state;
	if (t.target.draggable) {
		let r = e.docView.tile.nearest(t.target);
		if (r && r.isWidget()) {
			let e = r.posAtStart, t = e + r.length;
			(e >= n.to || t <= n.from) && (n = q.undirectionalRange(e, t));
		}
	}
	let { inputState: r } = e;
	return r.mouseSelection && (r.mouseSelection.dragging = !0), r.draggedContent = n, t.dataTransfer && (t.dataTransfer.setData("Text", ic(e.state, Qa, e.state.sliceDoc(n.from, n.to))), t.dataTransfer.effectAllowed = "copyMove"), !1;
}, ec.dragend = (e) => (e.inputState.draggedContent = null, !1);
function mc(e, t, n, r) {
	if (n = ic(e.state, Za, n), !n) return;
	let i = e.posAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), { draggedContent: a } = e.inputState, o = r && a && Zs(e, t) ? {
		from: a.from,
		to: a.to
	} : null, s = {
		from: i,
		insert: n
	}, c = e.state.changes(o ? [o, s] : s);
	e.focus(), e.dispatch({
		changes: c,
		selection: {
			anchor: c.mapPos(i, -1),
			head: c.mapPos(i, 1)
		},
		userEvent: o ? "move.drop" : "input.drop"
	}), e.inputState.draggedContent = null;
}
ec.drop = (e, t) => {
	if (!t.dataTransfer) return !1;
	if (e.state.readOnly) return !0;
	let n = t.dataTransfer.files;
	if (n && n.length) {
		let r = Array(n.length), i = 0, a = () => {
			++i == n.length && mc(e, t, r.filter((e) => e != null).join(e.state.lineBreak), !1);
		};
		for (let e = 0; e < n.length; e++) {
			let t = new FileReader();
			t.onerror = a, t.onload = () => {
				/[\x00-\x08\x0e-\x1f]{2}/.test(t.result) || (r[e] = t.result), a();
			}, t.readAsText(n[e]);
		}
		return !0;
	}
	{
		let n = t.dataTransfer.getData("Text");
		if (n) return mc(e, t, n, !0), !0;
	}
	return !1;
}, ec.paste = (e, t) => {
	if (e.state.readOnly) return !0;
	e.observer.flush();
	let n = nc ? null : t.clipboardData;
	return n ? (ac(e, n.getData("text/plain") || n.getData("text/uri-list")), !0) : (rc(e), !1);
};
function hc(e, t) {
	let n = e.dom.parentNode;
	if (!n) return;
	let r = n.appendChild(document.createElement("textarea"));
	r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.value = t, r.focus(), r.selectionEnd = t.length, r.selectionStart = 0, setTimeout(() => {
		r.remove(), e.focus();
	}, 50);
}
function gc(e) {
	let t = [], n = [], r = !1;
	for (let r of e.selection.ranges) r.empty || (t.push(e.sliceDoc(r.from, r.to)), n.push(r));
	if (!t.length) {
		let i = -1;
		for (let { from: r } of e.selection.ranges) {
			let a = e.doc.lineAt(r);
			a.number > i && (t.push(a.text), n.push({
				from: a.from,
				to: Math.min(e.doc.length, a.to + 1)
			})), i = a.number;
		}
		r = !0;
	}
	return {
		text: ic(e, Qa, t.join(e.lineBreak)),
		ranges: n,
		linewise: r
	};
}
var _c = null;
ec.copy = ec.cut = (e, t) => {
	if (!Zi(e.contentDOM, e.observer.selectionRange)) return !1;
	let { text: n, ranges: r, linewise: i } = gc(e.state);
	if (!n && !i) return !1;
	_c = i ? n : null, t.type == "cut" && !e.state.readOnly && e.dispatch({
		changes: r,
		scrollIntoView: !0,
		userEvent: "delete.cut"
	});
	let a = nc ? null : t.clipboardData;
	return a ? (a.clearData(), a.setData("text/plain", n), !0) : (hc(e, n), !1);
};
var vc = /*@__PURE__*/ Sr.define();
function yc(e, t) {
	let n = [];
	for (let r of e.facet(Xa)) {
		let i = r(e, t);
		i && n.push(i);
	}
	return n.length ? e.update({
		effects: n,
		annotations: vc.of(!0)
	}) : null;
}
function bc(e) {
	setTimeout(() => {
		let t = e.hasFocus;
		if (t != e.inputState.notifiedFocused) {
			let n = yc(e.state, t);
			n ? e.dispatch(n) : e.update([]);
		}
	}, 10);
}
tc.focus = (e) => {
	e.inputState.lastFocusTime = Date.now(), !e.scrollDOM.scrollTop && (e.inputState.lastScrollTop || e.inputState.lastScrollLeft) && (e.scrollDOM.scrollTop = e.inputState.lastScrollTop, e.scrollDOM.scrollLeft = e.inputState.lastScrollLeft), bc(e);
}, tc.blur = (e) => {
	e.observer.clearSelectionRange(), bc(e);
}, tc.compositionstart = tc.compositionupdate = (e) => {
	e.observer.editContext || (e.inputState.compositionFirstChange ?? (e.inputState.compositionFirstChange = !0), e.inputState.composing < 0 && (e.inputState.composing = 0));
}, tc.compositionend = (e) => {
	e.observer.editContext || (e.inputState.composing = -1, e.inputState.compositionEndedAt = Date.now(), e.inputState.compositionPendingKey = !0, e.inputState.compositionPendingChange = e.observer.pendingRecords().length > 0, e.inputState.compositionFirstChange = null, X.chrome && X.android ? e.observer.flushSoon() : e.inputState.compositionPendingChange ? Promise.resolve().then(() => e.observer.flush()) : setTimeout(() => {
		e.inputState.composing < 0 && e.docView.hasComposition && e.update([]);
	}, 50));
}, tc.contextmenu = (e) => {
	e.inputState.lastContextMenu = Date.now();
}, ec.beforeinput = (e, t) => {
	if ((t.inputType == "insertText" || t.inputType == "insertCompositionText") && (e.inputState.insertingText = t.data, e.inputState.insertingTextAt = Date.now()), t.inputType == "insertReplacementText" && e.observer.editContext) {
		let n = t.dataTransfer?.getData("text/plain"), r = t.getTargetRanges();
		if (n && r.length) {
			let t = r[0];
			return Ns(e, {
				from: e.posAtDOM(t.startContainer, t.startOffset),
				to: e.posAtDOM(t.endContainer, t.endOffset),
				insert: e.state.toText(n)
			}, null), !0;
		}
	}
	let n;
	if (X.chrome && X.android && (n = Us.find((e) => e.inputType == t.inputType)) && (e.observer.delayAndroidKey(n.key, n.keyCode), n.key == "Backspace" || n.key == "Delete")) {
		let t = window.visualViewport?.height || 0;
		setTimeout(() => {
			(window.visualViewport?.height || 0) > t + 10 && e.hasFocus && (e.contentDOM.blur(), e.focus());
		}, 100);
	}
	return X.ios && t.inputType == "deleteContentForward" && e.observer.flushSoon(), X.safari && t.inputType == "insertText" && e.inputState.composing >= 0 && setTimeout(() => tc.compositionend(e, t), 20), !1;
};
var xc = /*@__PURE__*/ new Set();
function Sc(e) {
	xc.has(e) || (xc.add(e), e.addEventListener("copy", () => {}), e.addEventListener("cut", () => {}));
}
var Cc = [
	"pre-wrap",
	"normal",
	"pre-line",
	"break-spaces"
], wc = !1;
function Tc() {
	wc = !1;
}
var Ec = class {
	constructor(e) {
		this.lineWrapping = e, this.doc = K.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
	}
	heightForGap(e, t) {
		let n = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
		return this.lineWrapping && (n += Math.max(0, Math.ceil((t - e - n * this.lineLength * .5) / this.lineLength))), this.lineHeight * n;
	}
	heightForLine(e) {
		return this.lineWrapping ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / Math.max(1, this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
	}
	setDoc(e) {
		return this.doc = e, this;
	}
	mustRefreshForWrapping(e) {
		return Cc.indexOf(e) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(e) {
		let t = !1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r < 0 ? n++ : this.heightSamples[Math.floor(r * 10)] || (t = !0, this.heightSamples[Math.floor(r * 10)] = !0);
		}
		return t;
	}
	refresh(e, t, n, r, i, a) {
		let o = Cc.indexOf(e) > -1, s = Math.abs(t - this.lineHeight) > .3 || this.lineWrapping != o;
		if (this.lineWrapping = o, this.lineHeight = t, this.charWidth = n, this.textHeight = r, this.lineLength = i, s) {
			this.heightSamples = {};
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t < 0 ? e++ : this.heightSamples[Math.floor(t * 10)] = !0;
			}
		}
		return s;
	}
}, Dc = class {
	constructor(e, t) {
		this.from = e, this.heights = t, this.index = 0;
	}
	get more() {
		return this.index < this.heights.length;
	}
}, Oc = class e {
	constructor(e, t, n, r, i) {
		this.from = e, this.length = t, this.top = n, this.height = r, this._content = i;
	}
	get type() {
		return typeof this._content == "number" ? Vi.Text : Array.isArray(this._content) ? this._content : this._content.type;
	}
	get to() {
		return this.from + this.length;
	}
	get bottom() {
		return this.top + this.height;
	}
	get widget() {
		return this._content instanceof Wi ? this._content.widget : null;
	}
	get widgetLineBreaks() {
		return typeof this._content == "number" ? this._content : 0;
	}
	join(t) {
		let n = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(t._content) ? t._content : [t]);
		return new e(this.from, this.length + t.length, this.top, this.height + t.height, n);
	}
}, kc = /*@__PURE__*/ (function(e) {
	return e[e.ByPos = 0] = "ByPos", e[e.ByHeight = 1] = "ByHeight", e[e.ByPosNoHeight = 2] = "ByPosNoHeight", e;
})(kc ||= {}), Ac = .001, jc = class e {
	constructor(e, t, n = 2) {
		this.length = e, this.height = t, this.flags = n;
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(e) {
		this.flags = (e ? 2 : 0) | this.flags & -3;
	}
	setHeight(e) {
		this.height != e && (Math.abs(this.height - e) > Ac && (wc = !0), this.height = e);
	}
	replace(t, n, r) {
		return e.of(r);
	}
	decomposeLeft(e, t) {
		t.push(this);
	}
	decomposeRight(e, t) {
		t.push(this);
	}
	applyChanges(e, t, n, r) {
		let i = this, a = n.doc;
		for (let o = r.length - 1; o >= 0; o--) {
			let { fromA: s, toA: c, fromB: l, toB: u } = r[o], d = i.lineAt(s, kc.ByPosNoHeight, n.setDoc(t), 0, 0), f = d.to >= c ? d : i.lineAt(c, kc.ByPosNoHeight, n, 0, 0);
			for (u += f.to - c, c = f.to; o > 0 && d.from <= r[o - 1].toA;) s = r[o - 1].fromA, l = r[o - 1].fromB, o--, s < d.from && (d = i.lineAt(s, kc.ByPosNoHeight, n, 0, 0));
			l += d.from - s, s = d.from;
			let p = Bc.build(n.setDoc(a), e, l, u);
			i = Mc(i, i.replace(s, c, p));
		}
		return i.updateHeight(n, 0);
	}
	static empty() {
		return new Fc(0, 0, 0);
	}
	static of(t) {
		if (t.length == 1) return t[0];
		let n = 0, r = t.length, i = 0, a = 0;
		for (;;) if (n == r) if (i > a * 2) {
			let e = t[n - 1];
			e.break ? t.splice(--n, 1, e.left, null, e.right) : t.splice(--n, 1, e.left, e.right), r += 1 + e.break, i -= e.size;
		} else if (a > i * 2) {
			let e = t[r];
			e.break ? t.splice(r, 1, e.left, null, e.right) : t.splice(r, 1, e.left, e.right), r += 2 + e.break, a -= e.size;
		} else break;
		else if (i < a) {
			let e = t[n++];
			e && (i += e.size);
		} else {
			let e = t[--r];
			e && (a += e.size);
		}
		let o = 0;
		return t[n - 1] == null ? (o = 1, n--) : t[n] ?? (o = 1, r++), new Lc(e.of(t.slice(0, n)), o, e.of(t.slice(r)));
	}
};
function Mc(e, t) {
	return e == t ? e : (e.constructor != t.constructor && (wc = !0), t);
}
jc.prototype.size = 1;
var Nc = /*@__PURE__*/ Z.replace({}), Pc = class extends jc {
	constructor(e, t, n) {
		super(e, t), this.deco = n, this.spaceAbove = 0;
	}
	mainBlock(e, t) {
		return new Oc(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.deco || 0);
	}
	blockAt(e, t, n, r) {
		return this.spaceAbove && e < n + this.spaceAbove ? new Oc(r, 0, n, this.spaceAbove, Nc) : this.mainBlock(n, r);
	}
	lineAt(e, t, n, r, i) {
		let a = this.mainBlock(r, i);
		return this.spaceAbove ? this.blockAt(0, n, r, i).join(a) : a;
	}
	forEachLine(e, t, n, r, i, a) {
		e <= i + this.length && t >= i && a(this.lineAt(0, kc.ByPos, n, r, i));
	}
	setMeasuredHeight(e) {
		let t = e.heights[e.index++];
		t < 0 ? (this.spaceAbove = -t, t = e.heights[e.index++]) : this.spaceAbove = 0, this.setHeight(t);
	}
	updateHeight(e, t = 0, n = !1, r) {
		return r && r.from <= t && r.more && this.setMeasuredHeight(r), this.outdated = !1, this;
	}
	toString() {
		return `block(${this.length})`;
	}
}, Fc = class e extends Pc {
	constructor(e, t, n) {
		super(e, t, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0, this.spaceAbove = n;
	}
	mainBlock(e, t) {
		return new Oc(t, this.length, e + this.spaceAbove, this.height - this.spaceAbove, this.breaks);
	}
	replace(t, n, r) {
		let i = r[0];
		return r.length == 1 && (i instanceof e || i instanceof Ic && i.flags & 4) && Math.abs(this.length - i.length) < 10 ? (i instanceof Ic ? i = new e(i.length, this.height, this.spaceAbove) : i.height = this.height, this.outdated || (i.outdated = !1), i) : jc.of(r);
	}
	updateHeight(e, t = 0, n = !1, r) {
		return r && r.from <= t && r.more ? this.setMeasuredHeight(r) : (n || this.outdated) && (this.spaceAbove = 0, this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight)), this.outdated = !1, this;
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
	}
}, Ic = class e extends jc {
	constructor(e) {
		super(e, 0);
	}
	heightMetrics(e, t) {
		let n = e.doc.lineAt(t).number, r = e.doc.lineAt(t + this.length).number, i = r - n + 1, a, o = 0;
		if (e.lineWrapping) {
			let t = Math.min(this.height, e.lineHeight * i);
			a = t / i, this.length > i + 1 && (o = (this.height - t) / (this.length - i - 1));
		} else a = this.height / i;
		return {
			firstLine: n,
			lastLine: r,
			perLine: a,
			perChar: o
		};
	}
	blockAt(e, t, n, r) {
		let { firstLine: i, lastLine: a, perLine: o, perChar: s } = this.heightMetrics(t, r);
		if (t.lineWrapping) {
			let i = r + (e < t.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - n) / this.height)) * this.length)), a = t.doc.lineAt(i), c = o + a.length * s, l = Math.max(n, e - c / 2);
			return new Oc(a.from, a.length, l, c, 0);
		}
		{
			let r = Math.max(0, Math.min(a - i, Math.floor((e - n) / o))), { from: s, length: c } = t.doc.line(i + r);
			return new Oc(s, c, n + o * r, o, 0);
		}
	}
	lineAt(e, t, n, r, i) {
		if (t == kc.ByHeight) return this.blockAt(e, n, r, i);
		if (t == kc.ByPosNoHeight) {
			let { from: t, to: r } = n.doc.lineAt(e);
			return new Oc(t, r - t, 0, 0, 0);
		}
		let { firstLine: a, perLine: o, perChar: s } = this.heightMetrics(n, i), c = n.doc.lineAt(e), l = o + c.length * s, u = c.number - a, d = r + o * u + s * (c.from - i - u);
		return new Oc(c.from, c.length, Math.max(r, Math.min(d, r + this.height - l)), l, 0);
	}
	forEachLine(e, t, n, r, i, a) {
		e = Math.max(e, i), t = Math.min(t, i + this.length);
		let { firstLine: o, perLine: s, perChar: c } = this.heightMetrics(n, i);
		for (let l = e, u = r; l <= t;) {
			let t = n.doc.lineAt(l);
			if (l == e) {
				let n = t.number - o;
				u += s * n + c * (e - i - n);
			}
			let r = s + c * t.length;
			a(new Oc(t.from, t.length, u, r, 0)), u += r, l = t.to + 1;
		}
	}
	replace(t, n, r) {
		let i = this.length - n;
		if (i > 0) {
			let t = r[r.length - 1];
			t instanceof e ? r[r.length - 1] = new e(t.length + i) : r.push(null, new e(i - 1));
		}
		if (t > 0) {
			let n = r[0];
			n instanceof e ? r[0] = new e(t + n.length) : r.unshift(new e(t - 1), null);
		}
		return jc.of(r);
	}
	decomposeLeft(t, n) {
		n.push(new e(t - 1), null);
	}
	decomposeRight(t, n) {
		n.push(null, new e(this.length - t - 1));
	}
	updateHeight(t, n = 0, r = !1, i) {
		let a = n + this.length;
		if (i && i.from <= n + this.length && i.more) {
			let r = [], o = Math.max(n, i.from), s = -1;
			for (i.from > n && r.push(new e(i.from - n - 1).updateHeight(t, n)); o <= a && i.more;) {
				let e = t.doc.lineAt(o).length;
				r.length && r.push(null);
				let n = i.heights[i.index++], a = 0;
				n < 0 && (a = -n, n = i.heights[i.index++]), s == -1 ? s = n : Math.abs(n - s) >= Ac && (s = -2);
				let c = new Fc(e, n, a);
				c.outdated = !1, r.push(c), o += e + 1;
			}
			o <= a && r.push(null, new e(a - o).updateHeight(t, o));
			let c = jc.of(r);
			return (s < 0 || Math.abs(c.height - this.height) >= Ac || Math.abs(s - this.heightMetrics(t, n).perLine) >= Ac) && (wc = !0), Mc(this, c);
		}
		return (r || this.outdated) && (this.setHeight(t.heightForGap(n, n + this.length)), this.outdated = !1), this;
	}
	toString() {
		return `gap(${this.length})`;
	}
}, Lc = class extends jc {
	constructor(e, t, n) {
		super(e.length + t + n.length, e.height + n.height, t | (e.outdated || n.outdated ? 2 : 0)), this.left = e, this.right = n, this.size = e.size + n.size;
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(e, t, n, r) {
		let i = n + this.left.height;
		return e < i ? this.left.blockAt(e, t, n, r) : this.right.blockAt(e, t, i, r + this.left.length + this.break);
	}
	lineAt(e, t, n, r, i) {
		let a = r + this.left.height, o = i + this.left.length + this.break, s = t == kc.ByHeight ? e < a : e < o, c = s ? this.left.lineAt(e, t, n, r, i) : this.right.lineAt(e, t, n, a, o);
		if (this.break || (s ? c.to < o : c.from > o)) return c;
		let l = t == kc.ByPosNoHeight ? kc.ByPosNoHeight : kc.ByPos;
		return s ? c.join(this.right.lineAt(o, l, n, a, o)) : this.left.lineAt(o, l, n, r, i).join(c);
	}
	forEachLine(e, t, n, r, i, a) {
		let o = r + this.left.height, s = i + this.left.length + this.break;
		if (this.break) e < s && this.left.forEachLine(e, t, n, r, i, a), t >= s && this.right.forEachLine(e, t, n, o, s, a);
		else {
			let c = this.lineAt(s, kc.ByPos, n, r, i);
			e < c.from && this.left.forEachLine(e, c.from - 1, n, r, i, a), c.to >= e && c.from <= t && a(c), t > c.to && this.right.forEachLine(c.to + 1, t, n, o, s, a);
		}
	}
	replace(e, t, n) {
		let r = this.left.length + this.break;
		if (t < r) return this.balanced(this.left.replace(e, t, n), this.right);
		if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, n));
		let i = [];
		e > 0 && this.decomposeLeft(e, i);
		let a = i.length;
		for (let e of n) i.push(e);
		if (e > 0 && Rc(i, a - 1), t < this.length) {
			let e = i.length;
			this.decomposeRight(t, i), Rc(i, e);
		}
		return jc.of(i);
	}
	decomposeLeft(e, t) {
		let n = this.left.length;
		if (e <= n) return this.left.decomposeLeft(e, t);
		t.push(this.left), this.break && (n++, e >= n && t.push(null)), e > n && this.right.decomposeLeft(e - n, t);
	}
	decomposeRight(e, t) {
		let n = this.left.length, r = n + this.break;
		if (e >= r) return this.right.decomposeRight(e - r, t);
		e < n && this.left.decomposeRight(e, t), this.break && e < r && t.push(null), t.push(this.right);
	}
	balanced(e, t) {
		return e.size > 2 * t.size || t.size > 2 * e.size ? jc.of(this.break ? [
			e,
			null,
			t
		] : [e, t]) : (this.left = Mc(this.left, e), this.right = Mc(this.right, t), this.setHeight(e.height + t.height), this.outdated = e.outdated || t.outdated, this.size = e.size + t.size, this.length = e.length + this.break + t.length, this);
	}
	updateHeight(e, t = 0, n = !1, r) {
		let { left: i, right: a } = this, o = t + i.length + this.break, s = null;
		return r && r.from <= t + i.length && r.more ? s = i = i.updateHeight(e, t, n, r) : i.updateHeight(e, t, n), r && r.from <= o + a.length && r.more ? s = a = a.updateHeight(e, o, n, r) : a.updateHeight(e, o, n), s ? this.balanced(i, a) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
	}
	toString() {
		return this.left + (this.break ? " " : "-") + this.right;
	}
};
function Rc(e, t) {
	let n, r;
	e[t] == null && (n = e[t - 1]) instanceof Ic && (r = e[t + 1]) instanceof Ic && e.splice(t - 1, 3, new Ic(n.length + 1 + r.length));
}
var zc = 5, Bc = class e {
	constructor(e, t) {
		this.pos = e, this.oracle = t, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(e, t) {
		if (this.lineStart > -1) {
			let e = Math.min(t, this.lineEnd), n = this.nodes[this.nodes.length - 1];
			n instanceof Fc ? n.length += e - this.pos : (e > this.pos || !this.isCovered) && this.nodes.push(new Fc(e - this.pos, -1, 0)), this.writtenTo = e, t > e && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
		}
		this.pos = t;
	}
	point(e, t, n) {
		if (e < t || n.heightRelevant) {
			let r = n.widget ? n.widget.estimatedHeight : 0, i = n.widget ? n.widget.lineBreaks : 0;
			r < 0 && (r = this.oracle.lineHeight);
			let a = t - e;
			n.block ? this.addBlock(new Pc(a, r, n)) : (a || i || r >= zc) && this.addLineDeco(r, i, a);
		} else t > e && this.span(e, t);
		this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
		this.lineStart = e, this.lineEnd = t, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new Fc(this.pos - e, -1, 0)), this.writtenTo = this.pos;
	}
	blankContent(e, t) {
		let n = new Ic(t - e);
		return this.oracle.doc.lineAt(e).to == t && (n.flags |= 4), n;
	}
	ensureLine() {
		this.enterLine();
		let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (e instanceof Fc) return e;
		let t = new Fc(0, -1, 0);
		return this.nodes.push(t), t;
	}
	addBlock(e) {
		this.enterLine();
		let t = e.deco;
		t && t.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos += e.length, t && t.endSide > 0 && (this.covering = e);
	}
	addLineDeco(e, t, n) {
		let r = this.ensureLine();
		r.length += n, r.collapsed += n, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += t, this.writtenTo = this.pos += n;
	}
	finish(e) {
		let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		this.lineStart > -1 && !(t instanceof Fc) && !this.isCovered ? this.nodes.push(new Fc(0, -1, 0)) : (this.writtenTo < this.pos || t == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let n = e;
		for (let e of this.nodes) e instanceof Fc && e.updateHeight(this.oracle, n), n += e ? e.length : 1;
		return this.nodes;
	}
	static build(t, n, r, i) {
		let a = new e(r, t);
		return Kr.spans(n, r, i, a, 0), a.finish(r);
	}
};
function Vc(e, t, n) {
	let r = new Hc();
	return Kr.compare(e, t, n, r, 0), r.changes;
}
var Hc = class {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(e, t, n, r) {
		(e < t || n && n.heightRelevant || r && r.heightRelevant) && qi(e, t, this.changes, 5);
	}
};
function Uc(e, t) {
	let n = e.getBoundingClientRect(), r = e.ownerDocument, i = r.defaultView || window, a = Math.max(0, n.left), o = Math.min(i.innerWidth, n.right), s = Math.max(0, n.top), c = Math.min(i.innerHeight, n.bottom);
	for (let t = e.parentNode; t && t != r.body;) if (t.nodeType == 1) {
		let n = t, r = window.getComputedStyle(n);
		if ((n.scrollHeight > n.clientHeight || n.scrollWidth > n.clientWidth) && r.overflow != "visible") {
			let r = n.getBoundingClientRect();
			a = Math.max(a, r.left), o = Math.min(o, r.right), s = Math.max(s, r.top), c = Math.min(t == e.parentNode ? i.innerHeight : c, r.bottom);
		}
		t = r.position == "absolute" || r.position == "fixed" ? n.offsetParent : n.parentNode;
	} else if (t.nodeType == 11) t = t.host;
	else break;
	return {
		left: a - n.left,
		right: Math.max(a, o) - n.left,
		top: s - (n.top + t),
		bottom: Math.max(s, c) - (n.top + t)
	};
}
function Wc(e) {
	let t = e.getBoundingClientRect(), n = e.ownerDocument.defaultView || window;
	return t.left < n.innerWidth && t.right > 0 && t.top < n.innerHeight && t.bottom > 0;
}
function Gc(e, t) {
	let n = e.getBoundingClientRect();
	return {
		left: 0,
		right: n.right - n.left,
		top: t,
		bottom: n.bottom - (n.top + t)
	};
}
var Kc = class {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.size = n, this.displaySize = r;
	}
	static same(e, t) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = t[n];
			if (r.from != i.from || r.to != i.to || r.size != i.size) return !1;
		}
		return !0;
	}
	draw(e, t) {
		return Z.replace({ widget: new qc(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(this.from, this.to);
	}
}, qc = class extends Bi {
	constructor(e, t) {
		super(), this.size = e, this.vertical = t;
	}
	eq(e) {
		return e.size == this.size && e.vertical == this.vertical;
	}
	toDOM() {
		let e = document.createElement("div");
		return this.vertical ? e.style.height = this.size + "px" : (e.style.width = this.size + "px", e.style.height = "2px", e.style.display = "inline-block"), e;
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
}, Jc = class {
	constructor(e, t) {
		this.view = e, this.state = t, this.pixelViewport = {
			left: 0,
			right: window.innerWidth,
			top: 0,
			bottom: 0
		}, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scaleX = 1, this.scaleY = 1, this.scrollOffset = 0, this.scrolledToBottom = !1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = el, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = xa.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
		let n = t.facet(po).some((e) => typeof e != "function" && e.class == "cm-lineWrapping");
		this.heightOracle = new Ec(n), this.stateDeco = tl(t), this.heightMap = jc.empty().applyChanges(this.stateDeco, K.empty, this.heightOracle.setDoc(t.doc), [new Co(0, 0, 0, t.doc.length)]);
		for (let e = 0; e < 2 && (this.viewport = this.getViewport(0, null), this.updateForViewport()); e++);
		this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Z.set(this.lineGaps.map((e) => e.draw(this, !1))), this.scrollParent = e.scrollDOM, this.computeVisibleRanges();
	}
	updateForViewport() {
		let e = [this.viewport], { main: t } = this.state.selection;
		for (let n = 0; n <= 1; n++) {
			let r = n ? t.head : t.anchor;
			if (!e.some(({ from: e, to: t }) => r >= e && r <= t)) {
				let { from: t, to: n } = this.lineBlockAt(r);
				e.push(new Yc(t, n));
			}
		}
		return this.viewports = e.sort((e, t) => e.from - t.from), this.updateScaler();
	}
	updateScaler() {
		let e = this.scaler;
		return this.scaler = this.heightMap.height <= 7e6 ? el : new nl(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
	}
	updateViewportLines() {
		this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
			this.viewportLines.push(rl(e, this.scaler));
		});
	}
	update(e, t = null) {
		this.state = e.state;
		let n = this.stateDeco;
		this.stateDeco = tl(this.state);
		let r = e.changedRanges, i = Co.extendWithRanges(r, Vc(n, this.stateDeco, e ? e.changes : Hn.empty(this.state.doc.length))), a = this.heightMap.height, o = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollOffset);
		Tc(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), i), (this.heightMap.height != a || wc) && (e.flags |= 2), o ? (this.scrollAnchorPos = e.changes.mapPos(o.from, -1), this.scrollAnchorHeight = o.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = a);
		let s = i.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
		(t && (t.range.head < s.from || t.range.head > s.to) || !this.viewportIsAppropriate(s)) && (s = this.getViewport(0, t));
		let c = s.from != this.viewport.from || s.to != this.viewport.to;
		this.viewport = s, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), t && (this.scrollTarget = t), !this.mustEnforceCursorAssoc && (e.selectionSet || e.focusChanged) && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(eo) && (this.mustEnforceCursorAssoc = !0);
	}
	measure() {
		let { view: e } = this, t = e.contentDOM, n = window.getComputedStyle(t), r = this.heightOracle, i = n.whiteSpace;
		this.defaultTextDirection = n.direction == "rtl" ? xa.RTL : xa.LTR;
		let a = this.heightOracle.mustRefreshForWrapping(i) || this.mustMeasureContent === "refresh", o = t.getBoundingClientRect(), s = a || this.mustMeasureContent || this.contentDOMHeight != o.height;
		this.contentDOMHeight = o.height, this.mustMeasureContent = !1;
		let c = 0, l = 0;
		if (o.width && o.height) {
			let { scaleX: e, scaleY: n } = oa(t, o);
			(e > .005 && Math.abs(this.scaleX - e) > .005 || n > .005 && Math.abs(this.scaleY - n) > .005) && (this.scaleX = e, this.scaleY = n, c |= 16, a = s = !0);
		}
		let u = (parseInt(n.paddingTop) || 0) * this.scaleY, d = (parseInt(n.paddingBottom) || 0) * this.scaleY;
		(this.paddingTop != u || this.paddingBottom != d) && (this.paddingTop = u, this.paddingBottom = d, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (s = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
		let f = ca(this.view.contentDOM, !1).y;
		f != this.scrollParent && (this.scrollParent = f, this.scrollAnchorHeight = -1, this.scrollOffset = 0);
		let p = this.getScrollOffset();
		this.scrollOffset != p && (this.scrollAnchorHeight = -1, this.scrollOffset = p), this.scrolledToBottom = _a(this.scrollParent || e.win);
		let m = (this.printing ? Gc : Uc)(t, this.paddingTop), h = m.top - this.pixelViewport.top, g = m.bottom - this.pixelViewport.bottom;
		this.pixelViewport = m;
		let _ = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
		if (_ != this.inView && (this.inView = _, _ && (s = !0)), !this.inView && !this.scrollTarget && !Wc(e.dom)) return 0;
		let v = o.width;
		if ((this.contentDOMWidth != v || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = o.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), s) {
			let t = e.docView.measureVisibleLineHeights(this.viewport);
			if (r.mustRefreshForHeights(t) && (a = !0), a || r.lineWrapping && Math.abs(v - this.contentDOMWidth) > r.charWidth) {
				let { lineHeight: n, charWidth: o, textHeight: s } = e.docView.measureTextSize();
				a = n > 0 && r.refresh(i, n, o, s, Math.max(5, v / o), t), a && (e.docView.minWidth = 0, c |= 16);
			}
			h > 0 && g > 0 ? l = Math.max(h, g) : h < 0 && g < 0 && (l = Math.min(h, g)), Tc();
			for (let n of this.viewports) {
				let i = n.from == this.viewport.from ? t : e.docView.measureVisibleLineHeights(n);
				this.heightMap = (a ? jc.empty().applyChanges(this.stateDeco, K.empty, this.heightOracle, [new Co(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, a, new Dc(n.from, i));
			}
			wc && (c |= 2);
		}
		let y = !this.viewportIsAppropriate(this.viewport, l) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
		return y && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(l, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || y) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(a ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(e, t) {
		let n = .5 - Math.max(-.5, Math.min(.5, e / 1e3 / 2)), r = this.heightMap, i = this.heightOracle, { visibleTop: a, visibleBottom: o } = this, s = new Yc(r.lineAt(a - n * 1e3, kc.ByHeight, i, 0, 0).from, r.lineAt(o + (1 - n) * 1e3, kc.ByHeight, i, 0, 0).to);
		if (t) {
			let { head: e } = t.range;
			if (e < s.from || e > s.to) {
				let n = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), a = r.lineAt(e, kc.ByPos, i, 0, 0), o;
				o = t.y == "center" ? (a.top + a.bottom) / 2 - n / 2 : t.y == "start" || t.y == "nearest" && e < s.from ? a.top : a.bottom - n, s = new Yc(r.lineAt(o - 1e3 / 2, kc.ByHeight, i, 0, 0).from, r.lineAt(o + n + 1e3 / 2, kc.ByHeight, i, 0, 0).to);
			}
		}
		return s;
	}
	mapViewport(e, t) {
		let n = t.mapPos(e.from, -1), r = t.mapPos(e.to, 1);
		return new Yc(this.heightMap.lineAt(n, kc.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, kc.ByPos, this.heightOracle, 0, 0).to);
	}
	viewportIsAppropriate({ from: e, to: t }, n = 0) {
		if (!this.inView) return !0;
		let { top: r } = this.heightMap.lineAt(e, kc.ByPos, this.heightOracle, 0, 0), { bottom: i } = this.heightMap.lineAt(t, kc.ByPos, this.heightOracle, 0, 0), { visibleTop: a, visibleBottom: o } = this;
		return (e == 0 || r <= a - Math.max(10, Math.min(-n, 250))) && (t == this.state.doc.length || i >= o + Math.max(10, Math.min(n, 250))) && r > a - 2e3 && i < o + 2e3;
	}
	mapLineGaps(e, t) {
		if (!e.length || t.empty) return e;
		let n = [];
		for (let r of e) t.touchesRange(r.from, r.to) || n.push(new Kc(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
		return n;
	}
	ensureLineGaps(e, t) {
		let n = this.heightOracle.lineWrapping, r = n ? 1e4 : 2e3, i = r >> 1, a = r << 1;
		if (this.defaultTextDirection != xa.LTR && !n) return [];
		let o = [], s = (r, a, c, l) => {
			if (a - r < i) return;
			let u = this.state.selection.main, d = [u.from];
			u.empty || d.push(u.to);
			for (let e of d) if (e > r && e < a) {
				s(r, e - 10, c, l), s(e + 10, a, c, l);
				return;
			}
			let f = $c(e, (e) => e.from >= c.from && e.to <= c.to && Math.abs(e.from - r) < i && Math.abs(e.to - a) < i && !d.some((t) => e.from < t && e.to > t));
			if (!f) {
				if (a < c.to && t && n && t.visibleRanges.some((e) => e.from <= a && e.to >= a)) {
					let e = t.moveToLineBoundary(q.cursor(a), !1, !0).head;
					e > r && (a = e);
				}
				let e = this.gapSize(c, r, a, l);
				f = new Kc(r, a, e, n || e < 2e6 ? e : 2e6);
			}
			o.push(f);
		}, c = (t) => {
			if (t.length < a || t.type != Vi.Text) return;
			let i = Xc(t.from, t.to, this.stateDeco);
			if (i.total < a) return;
			let o = this.scrollTarget ? this.scrollTarget.range.head : null, c, l;
			if (n) {
				let e = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, n, a;
				if (o != null) {
					let r = Qc(i, o), s = ((this.visibleBottom - this.visibleTop) / 2 + e) / t.height;
					n = r - s, a = r + s;
				} else n = (this.visibleTop - t.top - e) / t.height, a = (this.visibleBottom - t.top + e) / t.height;
				c = Zc(i, n), l = Zc(i, a);
			} else {
				let n = i.total * this.heightOracle.charWidth, a = r * this.heightOracle.charWidth, s = 0;
				if (n > 2e6) for (let n of e) n.from >= t.from && n.from < t.to && n.size != n.displaySize && n.from * this.heightOracle.charWidth + s < this.pixelViewport.left && (s = n.size - n.displaySize);
				let u = this.pixelViewport.left + s, d = this.pixelViewport.right + s, f, p;
				if (o != null) {
					let e = Qc(i, o), t = ((d - u) / 2 + a) / n;
					f = e - t, p = e + t;
				} else f = (u - a) / n, p = (d + a) / n;
				c = Zc(i, f), l = Zc(i, p);
			}
			c > t.from && s(t.from, c, t, i), l < t.to && s(l, t.to, t, i);
		};
		for (let e of this.viewportLines) Array.isArray(e.type) ? e.type.forEach(c) : c(e);
		return o;
	}
	gapSize(e, t, n, r) {
		let i = Qc(r, n) - Qc(r, t);
		return this.heightOracle.lineWrapping ? e.height * i : r.total * this.heightOracle.charWidth * i;
	}
	updateLineGaps(e) {
		Kc.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = Z.set(e.map((e) => e.draw(this, this.heightOracle.lineWrapping))));
	}
	computeVisibleRanges(e) {
		let t = this.stateDeco;
		this.lineGaps.length && (t = t.concat(this.lineGapDeco));
		let n = [];
		Kr.spans(t, this.viewport.from, this.viewport.to, {
			span(e, t) {
				n.push({
					from: e,
					to: t
				});
			},
			point() {}
		}, 20);
		let r = 0;
		if (n.length != this.visibleRanges.length) r = 12;
		else for (let t = 0; t < n.length && !(r & 8); t++) {
			let i = this.visibleRanges[t], a = n[t];
			(i.from != a.from || i.to != a.to) && (r |= 4, e && e.mapPos(i.from, -1) == a.from && e.mapPos(i.to, 1) == a.to || (r |= 8));
		}
		return this.visibleRanges = n, r;
	}
	lineBlockAt(e) {
		return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((t) => t.from <= e && t.to >= e) || rl(this.heightMap.lineAt(e, kc.ByPos, this.heightOracle, 0, 0), this.scaler);
	}
	lineBlockAtHeight(e) {
		return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((t) => t.top <= e && t.bottom >= e) || rl(this.heightMap.lineAt(this.scaler.fromDOM(e), kc.ByHeight, this.heightOracle, 0, 0), this.scaler);
	}
	getScrollOffset() {
		return (this.scrollParent == this.view.scrollDOM ? this.scrollParent.scrollTop : (this.scrollParent ? this.scrollParent.getBoundingClientRect().top : 0) - this.view.contentDOM.getBoundingClientRect().top) * this.scaleY;
	}
	scrollAnchorAt(e) {
		let t = this.lineBlockAtHeight(e + 8);
		return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? t : this.viewportLines[0];
	}
	elementAtHeight(e) {
		return rl(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
}, Yc = class {
	constructor(e, t) {
		this.from = e, this.to = t;
	}
};
function Xc(e, t, n) {
	let r = [], i = e, a = 0;
	return Kr.spans(n, e, t, {
		span() {},
		point(e, t) {
			e > i && (r.push({
				from: i,
				to: e
			}), a += e - i), i = t;
		}
	}, 20), i < t && (r.push({
		from: i,
		to: t
	}), a += t - i), {
		total: a,
		ranges: r
	};
}
function Zc({ total: e, ranges: t }, n) {
	if (n <= 0) return t[0].from;
	if (n >= 1) return t[t.length - 1].to;
	let r = Math.floor(e * n);
	for (let e = 0;; e++) {
		let { from: n, to: i } = t[e], a = i - n;
		if (r <= a) return n + r;
		r -= a;
	}
}
function Qc(e, t) {
	let n = 0;
	for (let { from: r, to: i } of e.ranges) {
		if (t <= i) {
			n += t - r;
			break;
		}
		n += i - r;
	}
	return n / e.total;
}
function $c(e, t) {
	for (let n of e) if (t(n)) return n;
}
var el = {
	toDOM(e) {
		return e;
	},
	fromDOM(e) {
		return e;
	},
	scale: 1,
	eq(e) {
		return e == this;
	}
};
function tl(e) {
	let t = e.facet(mo).filter((e) => typeof e != "function"), n = e.facet(go).filter((e) => typeof e != "function");
	return n.length && t.push(Kr.join(n)), t;
}
var nl = class e {
	constructor(e, t, n) {
		let r = 0, i = 0, a = 0;
		this.viewports = n.map(({ from: n, to: i }) => {
			let a = t.lineAt(n, kc.ByPos, e, 0, 0).top, o = t.lineAt(i, kc.ByPos, e, 0, 0).bottom;
			return r += o - a, {
				from: n,
				to: i,
				top: a,
				bottom: o,
				domTop: 0,
				domBottom: 0
			};
		}), this.scale = (7e6 - r) / (t.height - r);
		for (let e of this.viewports) e.domTop = a + (e.top - i) * this.scale, a = e.domBottom = e.domTop + (e.bottom - e.top), i = e.bottom;
	}
	toDOM(e) {
		for (let t = 0, n = 0, r = 0;; t++) {
			let i = t < this.viewports.length ? this.viewports[t] : null;
			if (!i || e < i.top) return r + (e - n) * this.scale;
			if (e <= i.bottom) return i.domTop + (e - i.top);
			n = i.bottom, r = i.domBottom;
		}
	}
	fromDOM(e) {
		for (let t = 0, n = 0, r = 0;; t++) {
			let i = t < this.viewports.length ? this.viewports[t] : null;
			if (!i || e < i.domTop) return n + (e - r) / this.scale;
			if (e <= i.domBottom) return i.top + (e - i.domTop);
			n = i.bottom, r = i.domBottom;
		}
	}
	eq(t) {
		return t instanceof e && this.scale == t.scale && this.viewports.length == t.viewports.length && this.viewports.every((e, n) => e.from == t.viewports[n].from && e.to == t.viewports[n].to);
	}
};
function rl(e, t) {
	if (t.scale == 1) return e;
	let n = t.toDOM(e.top), r = t.toDOM(e.bottom);
	return new Oc(e.from, e.length, n, r - n, Array.isArray(e._content) ? e._content.map((e) => rl(e, t)) : e._content);
}
var il = /*@__PURE__*/ J.define({ combine: (e) => e.join(" ") }), al = /*@__PURE__*/ J.define({ combine: (e) => e.indexOf(!0) > -1 }), ol = /*@__PURE__*/ di.newName(), sl = /*@__PURE__*/ di.newName(), cl = /*@__PURE__*/ di.newName(), ll = {
	"&light": "." + sl,
	"&dark": "." + cl
};
function ul(e, t, n) {
	return new di(t, { finish(t) {
		return /&/.test(t) ? t.replace(/&\w*/, (t) => {
			if (t == "&") return e;
			if (!n || !n[t]) throw RangeError(`Unsupported selector: ${t}`);
			return n[t];
		}) : e + " " + t;
	} });
}
var dl = /*@__PURE__*/ ul("." + ol, {
	"&": {
		position: "relative !important",
		boxSizing: "border-box",
		"&.cm-focused": { outline: "1px dotted #212121" },
		display: "flex !important",
		flexDirection: "column"
	},
	".cm-scroller": {
		display: "flex !important",
		alignItems: "flex-start !important",
		fontFamily: "monospace",
		lineHeight: 1.4,
		height: "100%",
		overflowX: "auto",
		position: "relative",
		zIndex: 0,
		overflowAnchor: "none"
	},
	".cm-content": {
		margin: 0,
		flexGrow: 2,
		flexShrink: 0,
		display: "block",
		whiteSpace: "pre",
		wordWrap: "normal",
		boxSizing: "border-box",
		minHeight: "100%",
		padding: "4px 0",
		outline: "none",
		"&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" }
	},
	".cm-lineWrapping": {
		whiteSpace_fallback: "pre-wrap",
		whiteSpace: "break-spaces",
		wordBreak: "break-word",
		overflowWrap: "anywhere",
		flexShrink: 1
	},
	"&light .cm-content": { caretColor: "black" },
	"&dark .cm-content": { caretColor: "white" },
	".cm-line": {
		display: "block",
		padding: "0 2px 0 6px"
	},
	".cm-layer": {
		userSelect: "none",
		position: "absolute",
		left: 0,
		top: 0,
		contain: "size style",
		"& > *": { position: "absolute" }
	},
	"&light .cm-selectionBackground": { background: "#d9d9d9" },
	"&dark .cm-selectionBackground": { background: "#222" },
	"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#d7d4f0" },
	"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: "#233" },
	".cm-cursorLayer": { pointerEvents: "none" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: "steps(1) cm-blink 1.2s infinite" },
	"@keyframes cm-blink": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	"@keyframes cm-blink2": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	".cm-cursor, .cm-dropCursor": {
		borderLeft: "1.2px solid black",
		marginLeft: "-0.6px",
		pointerEvents: "none"
	},
	".cm-cursor": { display: "none" },
	"&dark .cm-cursor": { borderLeftColor: "#ddd" },
	".cm-selectionHandle": {
		backgroundColor: "currentColor",
		width: "1.5px"
	},
	".cm-selectionHandle-start::before, .cm-selectionHandle-end::before": {
		content: "\"\"",
		backgroundColor: "inherit",
		borderRadius: "50%",
		width: "8px",
		height: "8px",
		position: "absolute",
		left: "-3.25px"
	},
	".cm-selectionHandle-start::before": { top: "-8px" },
	".cm-selectionHandle-end::before": { bottom: "-8px" },
	".cm-dropCursor": { position: "absolute" },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" },
	".cm-iso": { unicodeBidi: "isolate" },
	".cm-announced": {
		position: "fixed",
		top: "-10000px"
	},
	"@media print": { ".cm-announced": { display: "none" } },
	"&light .cm-activeLine": { backgroundColor: "#cceeff44" },
	"&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
	"&light .cm-specialChar": { color: "red" },
	"&dark .cm-specialChar": { color: "#f78" },
	".cm-gutters": {
		flexShrink: 0,
		display: "flex",
		height: "100%",
		boxSizing: "border-box",
		zIndex: 200
	},
	".cm-gutters-before": { insetInlineStart: 0 },
	".cm-gutters-after": { insetInlineEnd: 0 },
	"&light .cm-gutters": {
		backgroundColor: "#f5f5f5",
		color: "#6c6c6c",
		border: "0px solid #ddd",
		"&.cm-gutters-before": { borderRightWidth: "1px" },
		"&.cm-gutters-after": { borderLeftWidth: "1px" }
	},
	"&dark .cm-gutters": {
		backgroundColor: "#333338",
		color: "#ccc"
	},
	".cm-gutter": {
		display: "flex !important",
		flexDirection: "column",
		flexShrink: 0,
		boxSizing: "border-box",
		minHeight: "100%",
		overflow: "hidden"
	},
	".cm-gutterElement": { boxSizing: "border-box" },
	".cm-lineNumbers .cm-gutterElement": {
		padding: "0 3px 0 5px",
		minWidth: "20px",
		textAlign: "right",
		whiteSpace: "nowrap"
	},
	"&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
	"&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
	".cm-panels": {
		boxSizing: "border-box",
		position: "sticky",
		left: 0,
		right: 0,
		zIndex: 300
	},
	"&light .cm-panels": {
		backgroundColor: "#f5f5f5",
		color: "black"
	},
	".cm-panels-top": { top: "0" },
	".cm-panels-bottom": { bottom: "0" },
	"&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
	"&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
	"&dark .cm-panels": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-dialog": {
		padding: "2px 19px 4px 6px",
		position: "relative",
		"& label": { fontSize: "80%" }
	},
	".cm-dialog-close": {
		position: "absolute",
		top: "3px",
		right: "4px",
		backgroundColor: "inherit",
		border: "none",
		font: "inherit",
		fontSize: "14px",
		padding: "0"
	},
	".cm-tab": {
		display: "inline-block",
		overflow: "hidden",
		verticalAlign: "bottom"
	},
	".cm-widgetBuffer": {
		verticalAlign: "text-top",
		height: "1em",
		width: 0,
		display: "inline"
	},
	".cm-placeholder": {
		color: "#888",
		display: "inline-block",
		verticalAlign: "top",
		userSelect: "none"
	},
	".cm-highlightSpace": {
		backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
		backgroundPosition: "center"
	},
	".cm-highlightTab": {
		backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"20\"><path stroke=\"%23888\" stroke-width=\"1\" fill=\"none\" d=\"M1 10H196L190 5M190 15L196 10M197 4L197 16\"/></svg>')",
		backgroundSize: "auto 100%",
		backgroundPosition: "right 90%",
		backgroundRepeat: "no-repeat"
	},
	".cm-trailingSpace": { backgroundColor: "#ff332255" },
	".cm-button": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		padding: ".2em 1em",
		borderRadius: "1px"
	},
	"&light .cm-button": {
		backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" }
	},
	"&dark .cm-button": {
		backgroundImage: "linear-gradient(#393939, #111)",
		border: "1px solid #888",
		"&:active": { backgroundImage: "linear-gradient(#111, #333)" }
	},
	".cm-textfield": {
		verticalAlign: "middle",
		color: "inherit",
		fontSize: "70%",
		border: "1px solid silver",
		padding: ".2em .5em"
	},
	"&light .cm-textfield": { backgroundColor: "white" },
	"&dark .cm-textfield": {
		border: "1px solid #555",
		backgroundColor: "inherit"
	}
}, ll), fl = {
	childList: !0,
	characterData: !0,
	subtree: !0,
	attributes: !0,
	characterDataOldValue: !0
}, pl = X.ie && X.ie_version <= 11, ml = class {
	constructor(e) {
		this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new la(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((t) => {
			for (let e of t) this.queue.push(e);
			(X.ie && X.ie_version <= 11 || X.ios && e.composing) && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush();
		}), window.EditContext && X.android && e.constructor.EDIT_CONTEXT !== !1 && !(X.chrome && X.chrome_version < 126) && (this.editContext = new vl(e), e.state.facet(oo) && (e.contentDOM.editContext = this.editContext.editContext)), pl && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia("print")), typeof ResizeObserver == "function" && (this.resizeScroll = new ResizeObserver(() => {
			this.view.docView?.lastUpdate < Date.now() - 75 && this.onResize();
		}), this.resizeScroll.observe(e.scrollDOM)), this.addWindowListeners(this.win = e.win), this.start(), typeof IntersectionObserver == "function" && (this.intersection = new IntersectionObserver((e) => {
			this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), e.length > 0 && e[e.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent("Event")));
		}, { threshold: [0, .001] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((e) => {
			e.length > 0 && e[e.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent("Event"));
		}, {})), this.listenForScroll(), this.readSelectionRange();
	}
	onScrollChanged(e) {
		this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
	}
	onScroll(e) {
		this.intersecting && this.flush(!1), this.editContext && this.view.requestMeasure(this.editContext.measureReq), this.onScrollChanged(e);
	}
	onResize() {
		this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
			this.resizeTimeout = -1, this.view.requestMeasure();
		}, 50));
	}
	onPrint(e) {
		(e.type == "change" || !e.type) && !e.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
			this.view.viewState.printing = !1, this.view.requestMeasure();
		}, 500));
	}
	updateGaps(e) {
		if (this.gapIntersection && (e.length != this.gaps.length || this.gaps.some((t, n) => t != e[n]))) {
			this.gapIntersection.disconnect();
			for (let t of e) this.gapIntersection.observe(t);
			this.gaps = e;
		}
	}
	onSelectionChange(e) {
		let t = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view: n } = this, r = this.selectionRange;
		if (n.state.facet(oo) ? n.root.activeElement != this.dom : !Zi(this.dom, r)) return;
		let i = r.anchorNode && n.docView.tile.nearest(r.anchorNode);
		if (i && i.isWidget() && i.widget.ignoreEvent(e)) {
			t || (this.selectionChanged = !1);
			return;
		}
		(X.ie && X.ie_version <= 11 || X.android && X.chrome) && !n.state.selection.main.empty && r.focusNode && $i(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
	}
	readSelectionRange() {
		let { view: e } = this, t = Yi(e.root);
		if (!t) return !1;
		let n = X.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && _l(this.view, t) || t;
		if (!n || this.selectionRange.eq(n)) return !1;
		let r = Zi(this.dom, n);
		return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && ga(this.dom, n) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(n), r && (this.selectionChanged = !0), !0);
	}
	setSelectionRange(e, t) {
		this.selectionRange.set(e.node, e.offset, t.node, t.offset), this.selectionChanged = !1;
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let e = 0, t = null;
		for (let n = this.dom; n;) if (n.nodeType == 1) !t && e < this.scrollTargets.length && this.scrollTargets[e] == n ? e++ : t ||= this.scrollTargets.slice(0, e), t && t.push(n), n = n.assignedSlot || n.parentNode;
		else if (n.nodeType == 11) n = n.host;
		else break;
		if (e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t) {
			for (let e of this.scrollTargets) e.removeEventListener("scroll", this.onScroll);
			for (let e of this.scrollTargets = t) e.addEventListener("scroll", this.onScroll);
		}
	}
	ignore(e) {
		if (!this.active) return e();
		try {
			return this.stop(), e();
		} finally {
			this.start(), this.clear();
		}
	}
	start() {
		this.active ||= (this.observer.observe(this.dom, fl), pl && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), !0);
	}
	stop() {
		this.active && (this.active = !1, this.observer.disconnect(), pl && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
	}
	clear() {
		this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
	}
	delayAndroidKey(e, t) {
		if (!this.delayedAndroidKey) {
			let e = () => {
				let e = this.delayedAndroidKey;
				e && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = e.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && e.force && ma(this.dom, e.key, e.keyCode));
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(e);
		}
		(!this.delayedAndroidKey || e == "Enter") && (this.delayedAndroidKey = {
			key: e,
			keyCode: t,
			force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
		});
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
	}
	flushSoon() {
		this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
			this.delayedFlush = -1, this.flush();
		}));
	}
	forceFlush() {
		this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
	}
	pendingRecords() {
		for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	processRecords() {
		let e = this.pendingRecords();
		e.length && (this.queue = []);
		let t = -1, n = -1, r = !1;
		for (let i of e) {
			let e = this.readMutation(i);
			e && (e.typeOver && (r = !0), t == -1 ? {from: t, to: n} = e : (t = Math.min(e.from, t), n = Math.max(e.to, n)));
		}
		return {
			from: t,
			to: n,
			typeOver: r
		};
	}
	readChange() {
		let { from: e, to: t, typeOver: n } = this.processRecords(), r = this.selectionChanged && Zi(this.dom, this.selectionRange);
		if (e < 0 && !r) return null;
		e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
		let i = new As(this.view, e, t, n);
		return this.view.docView.domChanged = { newSel: i.newSel ? i.newSel.main : null }, i;
	}
	flush(e = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
		e && this.readSelectionRange();
		let t = this.readChange();
		if (!t) return this.view.requestMeasure(), !1;
		let n = this.view.state, r = Ms(this.view, t);
		return this.view.state == n && (t.domChanged || t.newSel && !Rs(this.view.state.selection, t.newSel.main)) && this.view.update([]), r;
	}
	readMutation(e) {
		let t = this.view.docView.tile.nearest(e.target);
		if (!t || t.isWidget()) return null;
		if (t.markDirty(e.type == "attributes"), e.type == "childList") {
			let n = hl(t, e.previousSibling || e.target.previousSibling, -1), r = hl(t, e.nextSibling || e.target.nextSibling, 1);
			return {
				from: n ? t.posAfter(n) : t.posAtStart,
				to: r ? t.posBefore(r) : t.posAtEnd,
				typeOver: !1
			};
		}
		return e.type == "characterData" ? {
			from: t.posAtStart,
			to: t.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		} : null;
	}
	setWindow(e) {
		e != this.win && (this.removeWindowListeners(this.win), this.win = e, this.addWindowListeners(this.win));
	}
	addWindowListeners(e) {
		e.addEventListener("resize", this.onResize), this.printQuery ? this.printQuery.addEventListener ? this.printQuery.addEventListener("change", this.onPrint) : this.printQuery.addListener(this.onPrint) : e.addEventListener("beforeprint", this.onPrint), e.addEventListener("scroll", this.onScroll), e.document.addEventListener("selectionchange", this.onSelectionChange);
	}
	removeWindowListeners(e) {
		e.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onResize), this.printQuery ? this.printQuery.removeEventListener ? this.printQuery.removeEventListener("change", this.onPrint) : this.printQuery.removeListener(this.onPrint) : e.removeEventListener("beforeprint", this.onPrint), e.document.removeEventListener("selectionchange", this.onSelectionChange);
	}
	update(e) {
		this.editContext && (this.editContext.update(e), e.startState.facet(oo) != e.state.facet(oo) && (e.view.contentDOM.editContext = e.state.facet(oo) ? this.editContext.editContext : null));
	}
	destroy() {
		var e, t, n;
		this.stop(), (e = this.intersection) == null || e.disconnect(), (t = this.gapIntersection) == null || t.disconnect(), (n = this.resizeScroll) == null || n.disconnect();
		for (let e of this.scrollTargets) e.removeEventListener("scroll", this.onScroll);
		this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
	}
};
function hl(e, t, n) {
	for (; t;) {
		let r = Eo.get(t);
		if (r && r.parent == e) return r;
		let i = t.parentNode;
		t = i == e.dom ? n > 0 ? t.nextSibling : t.previousSibling : i;
	}
	return null;
}
function gl(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.docView.domAtPos(e.state.selection.main.anchor, 1);
	return $i(o.node, o.offset, i, a) && ([n, r, i, a] = [
		i,
		a,
		n,
		r
	]), {
		anchorNode: n,
		anchorOffset: r,
		focusNode: i,
		focusOffset: a
	};
}
function _l(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return gl(e, n);
	}
	let n = null;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.contentDOM.addEventListener("beforeinput", r, !0), e.dom.ownerDocument.execCommand("indent"), e.contentDOM.removeEventListener("beforeinput", r, !0), n ? gl(e, n) : null;
}
var vl = class {
	constructor(e) {
		this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = Object.create(null), this.composing = null, this.resetRange(e.state);
		let t = this.editContext = new window.EditContext({
			text: e.state.doc.sliceString(this.from, this.to),
			selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
			selectionEnd: this.toContextPos(e.state.selection.main.head)
		});
		this.handlers.textupdate = (n) => {
			let r = e.state.selection.main, { anchor: i, head: a } = r, o = this.toEditorPos(n.updateRangeStart), s = this.toEditorPos(n.updateRangeEnd);
			e.inputState.composing >= 0 && !this.composing && (this.composing = {
				contextBase: n.updateRangeStart,
				editorBase: o,
				drifted: !1
			});
			let c = s - o > n.text.length;
			o == this.from && i < this.from ? o = i : s == this.to && i > this.to && (s = i);
			let l = Fs(e.state.sliceDoc(o, s), n.text, (c ? r.from : r.to) - o, c ? "end" : null);
			if (!l) {
				let t = q.single(this.toEditorPos(n.selectionStart), this.toEditorPos(n.selectionEnd));
				Rs(t, r) || e.dispatch({
					selection: t,
					userEvent: "select"
				});
				return;
			}
			let u = {
				from: l.from + o,
				to: l.toA + o,
				insert: K.of(n.text.slice(l.from, l.toB).split("\n"))
			};
			if ((X.mac || X.android) && u.from == a - 1 && /^\. ?$/.test(n.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (u = {
				from: o,
				to: s,
				insert: K.of([n.text.replace(".", " ")])
			}), this.pendingContextChange = u, !e.state.readOnly) {
				let t = this.to - this.from + (u.to - u.from + u.insert.length);
				Ns(e, u, q.single(this.toEditorPos(n.selectionStart, t), this.toEditorPos(n.selectionEnd, t)));
			}
			this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)), u.from < u.to && !u.insert.length && e.inputState.composing >= 0 && !/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0, n.updateRangeStart - 1), Math.min(t.text.length, n.updateRangeStart + 1))) && this.handlers.compositionend(n);
		}, this.handlers.characterboundsupdate = (n) => {
			let r = [], i = null;
			for (let t = this.toEditorPos(n.rangeStart), a = this.toEditorPos(n.rangeEnd); t < a; t++) {
				let n = e.coordsForChar(t);
				i = n && new DOMRect(n.left, n.top, n.right - n.left, n.bottom - n.top) || i || new DOMRect(), r.push(i);
			}
			t.updateCharacterBounds(n.rangeStart, r);
		}, this.handlers.textformatupdate = (t) => {
			let n = [];
			for (let e of t.getTextFormats()) {
				let t = e.underlineStyle, r = e.underlineThickness;
				if (!/none/i.test(t) && !/none/i.test(r)) {
					let i = this.toEditorPos(e.rangeStart), a = this.toEditorPos(e.rangeEnd);
					if (i < a) {
						let e = `text-decoration: underline ${/^[a-z]/.test(t) ? t + " " : t == "Dashed" ? "dashed " : t == "Squiggle" ? "wavy " : ""}${/thin/i.test(r) ? 1 : 2}px`;
						n.push(Z.mark({ attributes: { style: e } }).range(i, a));
					}
				}
			}
			e.dispatch({ effects: io.of(Z.set(n)) });
		}, this.handlers.compositionstart = () => {
			e.inputState.composing < 0 && (e.inputState.composing = 0, e.inputState.compositionFirstChange = !0);
		}, this.handlers.compositionend = () => {
			if (e.inputState.composing = -1, e.inputState.compositionFirstChange = null, this.composing) {
				let { drifted: t } = this.composing;
				this.composing = null, t && this.reset(e.state);
			}
		};
		for (let e in this.handlers) t.addEventListener(e, this.handlers[e]);
		this.measureReq = { read: (e) => {
			let t = Yi(e.root);
			t && t.rangeCount && this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect());
		} };
	}
	applyEdits(e) {
		let t = 0, n = !1, r = this.pendingContextChange;
		return e.changes.iterChanges((i, a, o, s, c) => {
			if (n) return;
			let l = c.length - (a - i);
			if (r && a >= r.to) if (r.from == i && r.to == a && r.insert.eq(c)) {
				r = this.pendingContextChange = null, t += l, this.to += l;
				return;
			} else r = null, this.revertPending(e.state);
			if (i += t, a += t, a <= this.from) this.from += l, this.to += l;
			else if (i < this.to) {
				if (i < this.from || a > this.to || this.to - this.from + c.length > 3e4) {
					n = !0;
					return;
				}
				this.editContext.updateText(this.toContextPos(i), this.toContextPos(a), c.toString()), this.to += l;
			}
			t += l;
		}), r && !n && this.revertPending(e.state), !n;
	}
	update(e) {
		let t = this.pendingContextChange, n = e.startState.selection.main;
		this.composing && (this.composing.drifted || !e.changes.touchesRange(n.from, n.to) && e.transactions.some((e) => !e.isUserEvent("input.type") && e.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
	}
	resetRange(e) {
		let { head: t } = e.selection.main;
		this.from = Math.max(0, t - 1e4), this.to = Math.min(e.doc.length, t + 1e4);
	}
	reset(e) {
		this.resetRange(e), this.editContext.updateText(0, this.editContext.text.length, e.doc.sliceString(this.from, this.to)), this.setSelection(e);
	}
	revertPending(e) {
		let t = this.pendingContextChange;
		this.pendingContextChange = null, this.editContext.updateText(this.toContextPos(t.from), this.toContextPos(t.from + t.insert.length), e.doc.sliceString(t.from, t.to));
	}
	setSelection(e) {
		let { main: t } = e.selection, n = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))), r = this.toContextPos(t.head);
		(this.editContext.selectionStart != n || this.editContext.selectionEnd != r) && this.editContext.updateSelection(n, r);
	}
	rangeIsValid(e) {
		let { head: t } = e.selection.main;
		return !(this.from > 0 && t - this.from < 500 || this.to < e.doc.length && this.to - t < 500 || this.to - this.from > 3e4);
	}
	toEditorPos(e, t = this.to - this.from) {
		e = Math.min(e, t);
		let n = this.composing;
		return n && n.drifted ? n.editorBase + (e - n.contextBase) : e + this.from;
	}
	toContextPos(e) {
		let t = this.composing;
		return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
	}
	destroy() {
		for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
	}
}, Q = class e {
	get state() {
		return this.viewState.state;
	}
	get viewport() {
		return this.viewState.viewport;
	}
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	get inView() {
		return this.viewState.inView;
	}
	get composing() {
		return !!this.inputState && this.inputState.composing > 0;
	}
	get compositionStarted() {
		return !!this.inputState && this.inputState.composing >= 0;
	}
	get root() {
		return this._root;
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	constructor(e = {}) {
		this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement("div"), this.scrollDOM = document.createElement("div"), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = "cm-scroller", this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement("div"), this.announceDOM.className = "cm-announced", this.announceDOM.setAttribute("aria-live", "polite"), this.dom = document.createElement("div"), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), e.parent && e.parent.appendChild(this.dom);
		let { dispatch: t } = e;
		this.dispatchTransactions = e.dispatchTransactions || t && ((e) => e.forEach((e) => t(e, this))) || ((e) => this.update(e)), this.dispatch = this.dispatch.bind(this), this._root = e.root || ha(e.parent) || document, this.viewState = new Jc(this, e.state || zr.create(e)), e.scrollTo && e.scrollTo.is(ro) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(co).map((e) => new uo(e));
		for (let e of this.plugins) e.update(this);
		this.observer = new ml(this), this.inputState = new zs(this), this.inputState.ensureHandlers(this.plugins), this.docView = new $o(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), document.fonts?.ready && document.fonts.ready.then(() => {
			this.viewState.mustMeasureContent = "refresh", this.requestMeasure();
		});
	}
	dispatch(...e) {
		let t = e.length == 1 && e[0] instanceof Tr ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
		this.dispatchTransactions(t, this);
	}
	update(t) {
		if (this.updateState != 0) throw Error("Calls to EditorView.update are not allowed while an update is in progress");
		let n = !1, r = !1, i, a = this.state;
		for (let e of t) {
			if (e.startState != a) throw RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
			a = e.state;
		}
		if (this.destroyed) {
			this.viewState.state = a;
			return;
		}
		let o = this.hasFocus, s = 0, c = null;
		t.some((e) => e.annotation(vc)) ? (this.inputState.notifiedFocused = o, s = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, c = yc(a, o), c || (s = 1));
		let l = this.observer.delayedAndroidKey, u = null;
		if (l ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(a.doc) || !this.state.selection.eq(a.selection)) && (u = null)) : this.observer.clear(), a.facet(zr.phrases) != this.state.facet(zr.phrases)) return this.setState(a);
		i = wo.create(this, a, t), i.flags |= s;
		let d = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let n of t) {
				if (d &&= d.map(n.changes), n.scrollIntoView) {
					let { main: t } = n.state.selection, { x: r, y: i } = this.state.facet(e.cursorScrollMargin);
					d = new no(t.empty ? t : q.cursor(t.head, t.head > t.anchor ? -1 : 1), "nearest", "nearest", i, r);
				}
				for (let e of n.effects) e.is(ro) && (d = e.value.clip(this.state));
			}
			this.viewState.update(i, d), this.bidiCache = xl.update(this.bidiCache, i.changes), i.empty || (this.updatePlugins(i), this.inputState.update(i)), n = this.docView.update(i), this.state.facet(So) != this.styleModules && this.mountStyles(), r = this.updateAttrs(), this.showAnnouncements(t), this.docView.updateSelection(n, t.some((e) => e.isUserEvent("select.pointer")));
		} finally {
			this.updateState = 0;
		}
		if (i.startState.facet(il) != i.state.facet(il) && (this.viewState.mustMeasureContent = !0), (n || r || d || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), n && this.docViewUpdate(), !i.empty) for (let e of this.state.facet(Ja)) try {
			e(i);
		} catch (e) {
			ao(this.state, e, "update listener");
		}
		(c || u) && Promise.resolve().then(() => {
			c && this.state == c.startState && this.dispatch(c), u && !Ms(this, u) && l.force && ma(this.contentDOM, l.key, l.keyCode);
		});
	}
	setState(e) {
		if (this.updateState != 0) throw Error("Calls to EditorView.setState are not allowed while an update is in progress");
		if (this.destroyed) {
			this.viewState.state = e;
			return;
		}
		this.updateState = 2;
		let t = this.hasFocus;
		try {
			for (let e of this.plugins) e.destroy(this);
			this.viewState = new Jc(this, e), this.plugins = e.facet(co).map((e) => new uo(e)), this.pluginMap.clear();
			for (let e of this.plugins) e.update(this);
			this.docView.destroy(), this.docView = new $o(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
		} finally {
			this.updateState = 0;
		}
		t && this.focus(), this.requestMeasure();
	}
	updatePlugins(e) {
		let t = e.startState.facet(co), n = e.state.facet(co);
		if (t != n) {
			let r = [];
			for (let i of n) {
				let n = t.indexOf(i);
				if (n < 0) r.push(new uo(i));
				else {
					let t = this.plugins[n];
					t.mustUpdate = e, r.push(t);
				}
			}
			for (let t of this.plugins) t.mustUpdate != e && t.destroy(this);
			this.plugins = r, this.pluginMap.clear();
		} else for (let t of this.plugins) t.mustUpdate = e;
		for (let e = 0; e < this.plugins.length; e++) this.plugins[e].update(this);
		t != n && this.inputState.ensureHandlers(this.plugins);
	}
	docViewUpdate() {
		for (let e of this.plugins) {
			let t = e.value;
			if (t && t.docViewUpdate) try {
				t.docViewUpdate(this);
			} catch (e) {
				ao(this.state, e, "doc view update listener");
			}
		}
	}
	measure(e = !0) {
		if (this.destroyed) return;
		if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
			this.measureScheduled = -1, this.requestMeasure();
			return;
		}
		this.measureScheduled = 0, e && this.observer.forceFlush();
		let t = null, n = this.viewState.scrollParent, r = this.viewState.getScrollOffset(), { scrollAnchorPos: i, scrollAnchorHeight: a } = this.viewState;
		Math.abs(r - this.viewState.scrollOffset) > 1 && (a = -1), this.viewState.scrollAnchorHeight = -1;
		try {
			for (let e = 0;; e++) {
				if (a < 0) if (_a(n || this.win)) i = -1, a = this.viewState.heightMap.height;
				else {
					let e = this.viewState.scrollAnchorAt(r);
					i = e.from, a = e.top;
				}
				this.updateState = 1;
				let o = this.viewState.measure();
				if (!o && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
				if (e > 5) {
					console.warn(this.measureRequests.length ? "Measure loop restarted more than 5 times" : "Viewport failed to stabilize");
					break;
				}
				let s = [];
				o & 4 || ([this.measureRequests, s] = [s, this.measureRequests]);
				let c = s.map((e) => {
					try {
						return e.read(this);
					} catch (e) {
						return ao(this.state, e), bl;
					}
				}), l = wo.create(this, this.state, []), u = !1;
				l.flags |= o, t ? t.flags |= o : t = l, this.updateState = 2, l.empty || (this.updatePlugins(l), this.inputState.update(l), this.updateAttrs(), u = this.docView.update(l), u && this.docViewUpdate());
				for (let e = 0; e < s.length; e++) if (c[e] != bl) try {
					let t = s[e];
					t.write && t.write(c[e], this);
				} catch (e) {
					ao(this.state, e);
				}
				if (u && this.docView.updateSelection(!0), !l.viewportChanged && this.measureRequests.length == 0) {
					if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
						this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, a = -1;
						continue;
					} else {
						let e = ((i < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(i).top) - a) / this.scaleY;
						if ((e > 1 || e < -1) && !(X.ios && this.inputState.lastIOSMomentumScroll > Date.now() - 100) && (n == this.scrollDOM || this.hasFocus || Math.max(this.inputState.lastWheelEvent, this.inputState.lastTouchTime) > Date.now() - 100)) {
							r += e, n ? n.scrollTop += e : this.win.scrollBy(0, e), a = -1;
							continue;
						}
					}
					break;
				}
			}
		} finally {
			this.updateState = 0, this.measureScheduled = -1;
		}
		if (t && !t.empty) for (let e of this.state.facet(Ja)) e(t);
	}
	get themeClasses() {
		return ol + " " + (this.state.facet(al) ? cl : sl) + " " + this.state.facet(il);
	}
	updateAttrs() {
		let e = Sl(this, fo, { class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses }), t = {
			spellcheck: "false",
			autocorrect: "off",
			autocapitalize: "off",
			writingsuggestions: "false",
			translate: "no",
			contenteditable: this.state.facet(oo) ? "true" : "false",
			class: "cm-content",
			style: `${X.tabSize}: ${this.state.tabSize}`,
			role: "textbox",
			"aria-multiline": "true"
		};
		this.state.readOnly && (t["aria-readonly"] = "true"), Sl(this, po, t);
		let n = this.observer.ignore(() => {
			let n = Ri(this.contentDOM, this.contentAttrs, t), r = Ri(this.dom, this.editorAttrs, e);
			return n || r;
		});
		return this.editorAttrs = e, this.contentAttrs = t, n;
	}
	showAnnouncements(t) {
		let n = !0;
		for (let r of t) for (let t of r.effects) if (t.is(e.announce)) {
			n && (this.announceDOM.textContent = ""), n = !1;
			let e = this.announceDOM.appendChild(document.createElement("div"));
			e.textContent = t.value;
		}
	}
	mountStyles() {
		this.styleModules = this.state.facet(So);
		let t = this.state.facet(e.cspNonce);
		di.mount(this.root, this.styleModules.concat(dl).reverse(), t ? { nonce: t } : void 0);
	}
	readMeasured() {
		if (this.updateState == 2) throw Error("Reading the editor layout isn't allowed during an update");
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
	}
	requestMeasure(e) {
		if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), e) {
			if (this.measureRequests.indexOf(e) > -1) return;
			if (e.key != null) {
				for (let t = 0; t < this.measureRequests.length; t++) if (this.measureRequests[t].key === e.key) {
					this.measureRequests[t] = e;
					return;
				}
			}
			this.measureRequests.push(e);
		}
	}
	plugin(e) {
		let t = this.pluginMap.get(e);
		return (t === void 0 || t && t.plugin != e) && this.pluginMap.set(e, t = this.plugins.find((t) => t.plugin == e) || null), t && t.update(this).value;
	}
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
	}
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	get scaleX() {
		return this.viewState.scaleX;
	}
	get scaleY() {
		return this.viewState.scaleY;
	}
	elementAtHeight(e) {
		return this.readMeasured(), this.viewState.elementAtHeight(e);
	}
	lineBlockAtHeight(e) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	lineBlockAt(e) {
		return this.viewState.lineBlockAt(e);
	}
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	moveByChar(e, t, n) {
		return xs(this, e, gs(this, e, t, n));
	}
	moveByGroup(e, t) {
		return xs(this, e, gs(this, e, t, (t) => _s(this, e.head, t)));
	}
	visualLineSide(e, t) {
		let n = this.bidiSpans(e), r = this.textDirectionAt(e.from), i = n[t ? n.length - 1 : 0];
		return q.cursor(i.side(t, r) + e.from, i.forward(!t, r) ? 1 : -1);
	}
	moveToLineBoundary(e, t, n = !0) {
		return hs(this, e, t, n);
	}
	moveVertically(e, t, n) {
		return xs(this, e, vs(this, e, t, n));
	}
	domAtPos(e, t = 1) {
		return this.docView.domAtPos(e, t);
	}
	posAtDOM(e, t = 0) {
		return this.docView.posFromDOM(e, t);
	}
	posAtCoords(e, t = !0) {
		this.readMeasured();
		let n = Cs(this, e, t);
		return n && n.pos;
	}
	posAndSideAtCoords(e, t = !0) {
		return this.readMeasured(), Cs(this, e, t);
	}
	coordsAtPos(e, t = 1) {
		this.readMeasured();
		let n = this.state.doc.lineAt(e), r = this.bidiSpans(n), i = r[ja.find(r, e - n.from, -1, t)];
		return this.docView.coordsAt(e, t, i.dir == xa.RTL);
	}
	coordsForChar(e) {
		return this.readMeasured(), this.docView.coordsForChar(e);
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	textDirectionAt(e) {
		return !this.state.facet($a) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	bidiSpans(e) {
		if (e.length > yl) return Ba(e.length);
		let t = this.textDirectionAt(e.from), n;
		for (let r of this.bidiCache) if (r.from == e.from && r.dir == t && (r.fresh || Ma(r.isolates, n = yo(this, e)))) return r.order;
		n ||= yo(this, e);
		let r = za(e.text, t, n);
		return this.bidiCache.push(new xl(e.from, e.to, t, n, !0, r)), r;
	}
	get hasFocus() {
		return (this.dom.ownerDocument.hasFocus() || X.safari && this.inputState?.lastContextMenu > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
	}
	focus() {
		this.observer.ignore(() => {
			da(this.contentDOM), this.docView.updateSelection();
		});
	}
	setRoot(e) {
		this._root != e && (this._root = e, this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window), this.mountStyles());
	}
	destroy() {
		this.root.activeElement == this.contentDOM && this.contentDOM.blur();
		for (let e of this.plugins) e.destroy(this);
		this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
	}
	static scrollIntoView(e, t = {}) {
		return ro.of(new no(typeof e == "number" ? q.cursor(e) : e, t.y ?? "nearest", t.x ?? "nearest", t.yMargin ?? 5, t.xMargin ?? 5));
	}
	scrollSnapshot() {
		let { scrollTop: e, scrollLeft: t } = this.scrollDOM, n = this.viewState.scrollAnchorAt(e);
		return ro.of(new no(q.cursor(n.from), "start", "start", n.top - e, t, !0));
	}
	setTabFocusMode(e) {
		e == null ? this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1 : typeof e == "boolean" ? this.inputState.tabFocusMode = e ? 0 : -1 : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
	}
	static domEventHandlers(e) {
		return lo.define(() => ({}), { eventHandlers: e });
	}
	static domEventObservers(e) {
		return lo.define(() => ({}), { eventObservers: e });
	}
	static theme(e, t) {
		let n = di.newName(), r = [il.of(n), So.of(ul(`.${n}`, e))];
		return t && t.dark && r.push(al.of(!0)), r;
	}
	static baseTheme(e) {
		return sr.lowest(So.of(ul("." + ol, e, ll)));
	}
	static findFromDOM(e) {
		let t = e.querySelector(".cm-content");
		return (t && Eo.get(t) || Eo.get(e))?.root?.view || null;
	}
};
Q.styleModule = So, Q.inputHandler = Ya, Q.clipboardInputFilter = Za, Q.clipboardOutputFilter = Qa, Q.scrollHandler = to, Q.focusChangeEffect = Xa, Q.perLineTextDirection = $a, Q.exceptionSink = qa, Q.updateListener = Ja, Q.editable = oo, Q.mouseSelectionStyle = Ka, Q.dragMovesSelection = Ga, Q.clickAddsSelectionRange = Wa, Q.decorations = mo, Q.blockWrappers = ho, Q.outerDecorations = go, Q.atomicRanges = _o, Q.bidiIsolatedRanges = vo, Q.cursorScrollMargin = /*@__PURE__*/ J.define({ combine: (e) => {
	let t = 5, n = 5;
	for (let r of e) typeof r == "number" ? t = n = r : {x: t, y: n} = r;
	return {
		x: t,
		y: n
	};
} }), Q.scrollMargins = bo, Q.darkTheme = al, Q.cspNonce = /*@__PURE__*/ J.define({ combine: (e) => e.length ? e[0] : "" }), Q.contentAttributes = po, Q.editorAttributes = fo, Q.lineWrapping = /*@__PURE__*/ Q.contentAttributes.of({ class: "cm-lineWrapping" }), Q.announce = /*@__PURE__*/ Y.define();
var yl = 4096, bl = {}, xl = class e {
	constructor(e, t, n, r, i, a) {
		this.from = e, this.to = t, this.dir = n, this.isolates = r, this.fresh = i, this.order = a;
	}
	static update(t, n) {
		if (n.empty && !t.some((e) => e.fresh)) return t;
		let r = [], i = t.length ? t[t.length - 1].dir : xa.LTR;
		for (let a = Math.max(0, t.length - 10); a < t.length; a++) {
			let o = t[a];
			o.dir == i && !n.touchesRange(o.from, o.to) && r.push(new e(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
		}
		return r;
	}
};
function Sl(e, t, n) {
	for (let r = e.state.facet(t), i = r.length - 1; i >= 0; i--) {
		let t = r[i], a = typeof t == "function" ? t(e) : t;
		a && Pi(a, n);
	}
	return n;
}
var Cl = X.mac ? "mac" : X.windows ? "win" : X.linux ? "linux" : "key";
function wl(e, t) {
	let n = e.split(/-(?!$)/), r = n[n.length - 1];
	r == "Space" && (r = " ");
	let i, a, o, s;
	for (let e = 0; e < n.length - 1; ++e) {
		let r = n[e];
		if (/^(cmd|meta|m)$/i.test(r)) s = !0;
		else if (/^a(lt)?$/i.test(r)) i = !0;
		else if (/^(c|ctrl|control)$/i.test(r)) a = !0;
		else if (/^s(hift)?$/i.test(r)) o = !0;
		else if (/^mod$/i.test(r)) t == "mac" ? s = !0 : a = !0;
		else throw Error("Unrecognized modifier name: " + r);
	}
	return i && (r = "Alt-" + r), a && (r = "Ctrl-" + r), s && (r = "Meta-" + r), o && (r = "Shift-" + r), r;
}
function Tl(e, t, n) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n !== !1 && t.shiftKey && (e = "Shift-" + e), e;
}
var El = /*@__PURE__*/ sr.default(/*@__PURE__*/ Q.domEventHandlers({ keydown(e, t) {
	return Fl(kl(t.state), e, t, "editor");
} })), Dl = /*@__PURE__*/ J.define({ enables: El }), Ol = /*@__PURE__*/ new WeakMap();
function kl(e) {
	let t = e.facet(Dl), n = Ol.get(t);
	return n || Ol.set(t, n = Nl(t.reduce((e, t) => e.concat(t), []))), n;
}
function Al(e, t, n) {
	return Fl(kl(e.state), t, e, n);
}
var jl = null, Ml = 4e3;
function Nl(e, t = Cl) {
	let n = Object.create(null), r = Object.create(null), i = (e, t) => {
		let n = r[e];
		if (n == null) r[e] = t;
		else if (n != t) throw Error("Key binding " + e + " is used both as a regular binding and as a multi-stroke prefix");
	}, a = (e, r, a, o, s) => {
		let c = n[e] || (n[e] = Object.create(null)), l = r.split(/ (?!$)/).map((e) => wl(e, t));
		for (let t = 1; t < l.length; t++) {
			let n = l.slice(0, t).join(" ");
			i(n, !0), c[n] || (c[n] = {
				preventDefault: !0,
				stopPropagation: !1,
				run: [(t) => {
					let r = jl = {
						view: t,
						prefix: n,
						scope: e
					};
					return setTimeout(() => {
						jl == r && (jl = null);
					}, Ml), !0;
				}]
			});
		}
		let u = l.join(" ");
		i(u, !1);
		let d = c[u] || (c[u] = {
			preventDefault: !1,
			stopPropagation: !1,
			run: (c._any?.run)?.slice() || []
		});
		a && d.run.push(a), o && (d.preventDefault = !0), s && (d.stopPropagation = !0);
	};
	for (let r of e) {
		let e = r.scope ? r.scope.split(" ") : ["editor"];
		if (r.any) for (let t of e) {
			let e = n[t] || (n[t] = Object.create(null));
			e._any ||= {
				preventDefault: !1,
				stopPropagation: !1,
				run: []
			};
			let { any: i } = r;
			for (let t in e) e[t].run.push((e) => i(e, Pl));
		}
		let i = r[t] || r.key;
		if (i) for (let t of e) a(t, i, r.run, r.preventDefault, r.stopPropagation), r.shift && a(t, "Shift-" + i, r.shift, r.preventDefault, r.stopPropagation);
	}
	return n;
}
var Pl = null;
function Fl(e, t, n, r) {
	Pl = t;
	let i = bi(t), a = Rn(In(i, 0)) == i.length && i != " ", o = "", s = !1, c = !1, l = !1;
	jl && jl.view == n && jl.scope == r && (o = jl.prefix + " ", Gs.indexOf(t.keyCode) < 0 && (c = !0, jl = null));
	let u = /* @__PURE__ */ new Set(), d = (e) => {
		if (e) {
			for (let t of e.run) if (!u.has(t) && (u.add(t), t(n))) return e.stopPropagation && (l = !0), !0;
			e.preventDefault && (e.stopPropagation && (l = !0), c = !0);
		}
		return !1;
	}, f = e[r], p, m;
	return f && (d(f[o + Tl(i, t, !a)]) ? s = !0 : a && (t.altKey || t.metaKey || t.ctrlKey) && !(X.windows && t.ctrlKey && t.altKey) && !(X.mac && t.altKey && !(t.ctrlKey || t.metaKey)) && (p = mi[t.keyCode]) && p != i ? (d(f[o + Tl(p, t, !0)]) || t.shiftKey && (m = hi[t.keyCode]) != i && m != p && d(f[o + Tl(m, t, !1)])) && (s = !0) : a && t.shiftKey && d(f[o + Tl(i, t, !0)]) && (s = !0), !s && d(f._any) && (s = !0)), c && (s = !0), s && l && t.stopPropagation(), Pl = null, s;
}
var Il = class e {
	constructor(e, t, n, r, i) {
		this.className = e, this.left = t, this.top = n, this.width = r, this.height = i;
	}
	draw() {
		let e = document.createElement("div");
		return e.className = this.className, this.adjust(e), e;
	}
	update(e, t) {
		return t.className == this.className && (this.adjust(e), !0);
	}
	adjust(e) {
		e.style.left = this.left + "px", e.style.top = this.top + "px", this.width != null && (e.style.width = this.width + "px"), e.style.height = this.height + "px";
	}
	eq(e) {
		return this.left == e.left && this.top == e.top && this.width == e.width && this.height == e.height && this.className == e.className;
	}
	static forRange(t, n, r) {
		if (r.empty) {
			let i = t.coordsAtPos(r.head, r.assoc || 1);
			if (!i) return [];
			let a = Ll(t);
			return [new e(n, i.left - a.left, i.top - a.top, null, i.bottom - i.top)];
		}
		return zl(t, n, r);
	}
};
function Ll(e) {
	let t = e.scrollDOM.getBoundingClientRect();
	return {
		left: (e.textDirection == xa.LTR ? t.left : t.right - e.scrollDOM.clientWidth * e.scaleX) - e.scrollDOM.scrollLeft * e.scaleX,
		top: t.top - e.scrollDOM.scrollTop * e.scaleY
	};
}
function Rl(e, t, n, r) {
	let i = e.coordsAtPos(t, n * 2);
	if (!i) return r;
	let a = e.dom.getBoundingClientRect(), o = (i.top + i.bottom) / 2, s = e.posAtCoords({
		x: a.left + 1,
		y: o
	}), c = e.posAtCoords({
		x: a.right - 1,
		y: o
	});
	return s == null || c == null ? r : {
		from: Math.max(r.from, Math.min(s, c)),
		to: Math.min(r.to, Math.max(s, c))
	};
}
function zl(e, t, n) {
	if (n.to <= e.viewport.from || n.from >= e.viewport.to) return [];
	let r = Math.max(n.from, e.viewport.from), i = Math.min(n.to, e.viewport.to), a = e.textDirection == xa.LTR, o = e.contentDOM, s = o.getBoundingClientRect(), c = Ll(e), l = o.querySelector(".cm-line"), u = l && window.getComputedStyle(l), d = s.left + (u ? parseInt(u.paddingLeft) + Math.min(0, parseInt(u.textIndent)) : 0), f = s.right - (u ? parseInt(u.paddingRight) : 0), p = ms(e, r, 1), m = ms(e, i, -1), h = p.type == Vi.Text ? p : null, g = m.type == Vi.Text ? m : null;
	if (h && (e.lineWrapping || p.widgetLineBreaks) && (h = Rl(e, r, 1, h)), g && (e.lineWrapping || m.widgetLineBreaks) && (g = Rl(e, i, -1, g)), h && g && h.from == g.from && h.to == g.to) return v(y(n.from, n.to, h));
	{
		let t = h ? y(n.from, null, h) : b(p, !1), r = g ? y(null, n.to, g) : b(m, !0), i = [];
		return (h || p).to < (g || m).from - (h && g ? 1 : 0) || p.widgetLineBreaks > 1 && t.bottom + e.defaultLineHeight / 2 < r.top ? i.push(_(d, t.bottom, f, r.top)) : t.bottom < r.top && e.elementAtHeight((t.bottom + r.top) / 2).type == Vi.Text && (t.bottom = r.top = (t.bottom + r.top) / 2), v(t).concat(i).concat(v(r));
	}
	function _(e, n, r, i) {
		return new Il(t, e - c.left, n - c.top, Math.max(0, r - e), i - n);
	}
	function v({ top: e, bottom: t, horizontal: n }) {
		let r = [];
		for (let i = 0; i < n.length; i += 2) r.push(_(n[i], e, n[i + 1], t));
		return r;
	}
	function y(t, n, r) {
		let i = 1e9, o = -1e9, s = [];
		function c(t, n, c, l, u) {
			let p = e.coordsAtPos(t, t == r.to ? -2 : 2), m = e.coordsAtPos(c, c == r.from ? 2 : -2);
			!p || !m || (i = Math.min(p.top, m.top, i), o = Math.max(p.bottom, m.bottom, o), u == xa.LTR ? s.push(a && n ? d : p.left, a && l ? f : m.right) : s.push(!a && l ? d : m.left, !a && n ? f : p.right));
		}
		let l = t ?? r.from, u = n ?? r.to;
		for (let r of e.visibleRanges) if (r.to > l && r.from < u) for (let i = Math.max(r.from, l), a = Math.min(r.to, u);;) {
			let r = e.state.doc.lineAt(i);
			for (let o of e.bidiSpans(r)) {
				let e = o.from + r.from, s = o.to + r.from;
				if (e >= a) break;
				s > i && c(Math.max(e, i), t == null && e <= l, Math.min(s, a), n == null && s >= u, o.dir);
			}
			if (i = r.to + 1, i >= a) break;
		}
		return s.length == 0 && c(l, t == null, u, n == null, e.textDirection), {
			top: i,
			bottom: o,
			horizontal: s
		};
	}
	function b(e, t) {
		let n = s.top + (t ? e.top : e.bottom);
		return {
			top: n,
			bottom: n,
			horizontal: []
		};
	}
}
function Bl(e, t) {
	return e.constructor == t.constructor && e.eq(t);
}
var Vl = class {
	constructor(e, t) {
		this.view = e, this.layer = t, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
			read: this.measure.bind(this),
			write: this.draw.bind(this)
		}, this.dom = e.scrollDOM.appendChild(document.createElement("div")), this.dom.classList.add("cm-layer"), t.above && this.dom.classList.add("cm-layer-above"), t.class && this.dom.classList.add(t.class), this.scale(), this.dom.setAttribute("aria-hidden", "true"), this.setOrder(e.state), e.requestMeasure(this.measureReq), t.mount && t.mount(this.dom, e);
	}
	update(e) {
		e.startState.facet(Hl) != e.state.facet(Hl) && this.setOrder(e.state), (this.layer.update(e, this.dom) || e.geometryChanged) && (this.scale(), e.view.requestMeasure(this.measureReq));
	}
	docViewUpdate(e) {
		this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
	}
	setOrder(e) {
		let t = 0, n = e.facet(Hl);
		for (; t < n.length && n[t] != this.layer;) t++;
		this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
	}
	measure() {
		return this.layer.markers(this.view);
	}
	scale() {
		let { scaleX: e, scaleY: t } = this.view;
		(e != this.scaleX || t != this.scaleY) && (this.scaleX = e, this.scaleY = t, this.dom.style.transform = `scale(${1 / e}, ${1 / t})`);
	}
	draw(e) {
		if (e.length != this.drawn.length || e.some((e, t) => !Bl(e, this.drawn[t]))) {
			let t = this.dom.firstChild, n = 0;
			for (let r of e) r.update && t && r.constructor && this.drawn[n].constructor && r.update(t, this.drawn[n]) ? (t = t.nextSibling, n++) : this.dom.insertBefore(r.draw(), t);
			for (; t;) {
				let e = t.nextSibling;
				t.remove(), t = e;
			}
			this.drawn = e, X.webkit && (this.dom.style.display = this.dom.firstChild ? "" : "none");
		}
	}
	destroy() {
		this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
	}
}, Hl = /*@__PURE__*/ J.define();
function Ul(e) {
	return [lo.define((t) => new Vl(t, e)), Hl.of(e)];
}
var Wl = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		cursorBlinkRate: 1200,
		drawRangeCursor: !0,
		iosSelectionHandles: !0
	}, {
		cursorBlinkRate: (e, t) => Math.min(e, t),
		drawRangeCursor: (e, t) => e || t
	});
} });
function Gl(e = {}) {
	return [
		Wl.of(e),
		ql,
		Yl,
		Zl,
		eo.of(!0)
	];
}
function Kl(e) {
	return e.startState.facet(Wl) != e.state.facet(Wl);
}
var ql = /*@__PURE__*/ Ul({
	above: !0,
	markers(e) {
		let { state: t } = e, n = t.facet(Wl), r = [];
		for (let i of t.selection.ranges) {
			let a = i == t.selection.main;
			if (i.empty || n.drawRangeCursor && !(a && X.ios && n.iosSelectionHandles)) {
				let t = a ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary", n = i.empty ? i : q.cursor(i.head, i.assoc);
				for (let i of Il.forRange(e, t, n)) r.push(i);
			}
		}
		return r;
	},
	update(e, t) {
		e.transactions.some((e) => e.selection) && (t.style.animationName = t.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
		let n = Kl(e);
		return n && Jl(e.state, t), e.docChanged || e.selectionSet || n;
	},
	mount(e, t) {
		Jl(t.state, e);
	},
	class: "cm-cursorLayer"
});
function Jl(e, t) {
	t.style.animationDuration = e.facet(Wl).cursorBlinkRate + "ms";
}
var Yl = /*@__PURE__*/ Ul({
	above: !1,
	markers(e) {
		let t = [], { main: n, ranges: r } = e.state.selection;
		for (let n of r) if (!n.empty) for (let r of Il.forRange(e, "cm-selectionBackground", n)) t.push(r);
		if (X.ios && !n.empty && e.state.facet(Wl).iosSelectionHandles) {
			for (let r of Il.forRange(e, "cm-selectionHandle cm-selectionHandle-start", q.cursor(n.from, 1))) t.push(r);
			for (let r of Il.forRange(e, "cm-selectionHandle cm-selectionHandle-end", q.cursor(n.to, 1))) t.push(r);
		}
		return t;
	},
	update(e, t) {
		return e.docChanged || e.selectionSet || e.viewportChanged || Kl(e);
	},
	class: "cm-selectionLayer"
}), Xl = X.gecko && X.gecko_version >= 153 ? "#ffffff01" : "transparent", Zl = /*@__PURE__*/ sr.highest(/*@__PURE__*/ Q.theme({
	".cm-line": {
		"& ::selection, &::selection": { backgroundColor: `${Xl} !important` },
		caretColor: "transparent !important"
	},
	".cm-content": {
		caretColor: "transparent !important",
		"& :focus": {
			caretColor: "initial !important",
			"&::selection, & ::selection": { backgroundColor: "Highlight !important" }
		}
	}
})), Ql = /*@__PURE__*/ Y.define({ map(e, t) {
	return e == null ? null : t.mapPos(e);
} }), $l = /*@__PURE__*/ ir.define({
	create() {
		return null;
	},
	update(e, t) {
		return e != null && (e = t.changes.mapPos(e)), t.effects.reduce((e, t) => t.is(Ql) ? t.value : e, e);
	}
}), eu = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.cursor = null, this.measureReq = {
			read: this.readPos.bind(this),
			write: this.drawCursor.bind(this)
		};
	}
	update(e) {
		var t;
		let n = e.state.field($l);
		n == null ? this.cursor != null && ((t = this.cursor) == null || t.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement("div")), this.cursor.className = "cm-dropCursor"), (e.startState.field($l) != n || e.docChanged || e.geometryChanged) && this.view.requestMeasure(this.measureReq));
	}
	readPos() {
		let { view: e } = this, t = e.state.field($l), n = t != null && e.coordsAtPos(t);
		if (!n) return null;
		let r = e.scrollDOM.getBoundingClientRect();
		return {
			left: n.left - r.left + e.scrollDOM.scrollLeft * e.scaleX,
			top: n.top - r.top + e.scrollDOM.scrollTop * e.scaleY,
			height: n.bottom - n.top
		};
	}
	drawCursor(e) {
		if (this.cursor) {
			let { scaleX: t, scaleY: n } = this.view;
			e ? (this.cursor.style.left = e.left / t + "px", this.cursor.style.top = e.top / n + "px", this.cursor.style.height = e.height / n + "px") : this.cursor.style.left = "-100000px";
		}
	}
	destroy() {
		this.cursor && this.cursor.remove();
	}
	setDropPos(e) {
		this.view.state.field($l) != e && this.view.dispatch({ effects: Ql.of(e) });
	}
}, { eventObservers: {
	dragover(e) {
		this.setDropPos(this.view.posAtCoords({
			x: e.clientX,
			y: e.clientY
		}));
	},
	dragleave(e) {
		(e.target == this.view.contentDOM || !this.view.contentDOM.contains(e.relatedTarget)) && this.setDropPos(null);
	},
	dragend() {
		this.setDropPos(null);
	},
	drop() {
		this.setDropPos(null);
	}
} });
function tu() {
	return [$l, eu];
}
function nu(e, t, n, r, i) {
	t.lastIndex = 0;
	for (let a = e.iterRange(n, r), o = n, s; !a.next().done; o += a.value.length) if (!a.lineBreak) for (; s = t.exec(a.value);) i(o + s.index, s);
}
function ru(e, t) {
	let n = e.visibleRanges;
	if (n.length == 1 && n[0].from == e.viewport.from && n[0].to == e.viewport.to) return n;
	let r = [];
	for (let { from: i, to: a } of n) i = Math.max(e.state.doc.lineAt(i).from, i - t), a = Math.min(e.state.doc.lineAt(a).to, a + t), r.length && r[r.length - 1].to >= i ? r[r.length - 1].to = a : r.push({
		from: i,
		to: a
	});
	return r;
}
var iu = class {
	constructor(e) {
		let { regexp: t, decoration: n, decorate: r, boundary: i, maxLength: a = 1e3 } = e;
		if (!t.global) throw RangeError("The regular expression given to MatchDecorator should have its 'g' flag set");
		if (this.regexp = t, r) this.addMatch = (e, t, n, i) => r(i, n, n + e[0].length, e, t);
		else if (typeof n == "function") this.addMatch = (e, t, r, i) => {
			let a = n(e, t, r);
			a && i(r, r + e[0].length, a);
		};
		else if (n) this.addMatch = (e, t, r, i) => i(r, r + e[0].length, n);
		else throw RangeError("Either 'decorate' or 'decoration' should be provided to MatchDecorator");
		this.boundary = i, this.maxLength = a;
	}
	createDeco(e) {
		let t = new Jr(), n = t.add.bind(t);
		for (let { from: t, to: r } of ru(e, this.maxLength)) nu(e.state.doc, this.regexp, t, r, (t, r) => this.addMatch(r, e, t, n));
		return t.finish();
	}
	updateDeco(e, t) {
		let n = 1e9, r = -1;
		return e.docChanged && e.changes.iterChanges((t, i, a, o) => {
			o >= e.view.viewport.from && a <= e.view.viewport.to && (n = Math.min(a, n), r = Math.max(o, r));
		}), e.viewportMoved || r - n > 1e3 ? this.createDeco(e.view) : r > -1 ? this.updateRange(e.view, t.map(e.changes), n, r) : t;
	}
	updateRange(e, t, n, r) {
		for (let i of e.visibleRanges) {
			let a = Math.max(i.from, n), o = Math.min(i.to, r);
			if (o >= a) {
				let n = e.state.doc.lineAt(a), r = n.to < o ? e.state.doc.lineAt(o) : n, s = Math.max(i.from, n.from), c = Math.min(i.to, r.to);
				if (this.boundary) {
					for (; a > n.from; a--) if (this.boundary.test(n.text[a - 1 - n.from])) {
						s = a;
						break;
					}
					for (; o < r.to; o++) if (this.boundary.test(r.text[o - r.from])) {
						c = o;
						break;
					}
				}
				let l = [], u, d = (e, t, n) => l.push(n.range(e, t));
				if (n == r) for (this.regexp.lastIndex = s - n.from; (u = this.regexp.exec(n.text)) && u.index < c - n.from;) this.addMatch(u, e, u.index + n.from, d);
				else nu(e.state.doc, this.regexp, s, c, (t, n) => this.addMatch(n, e, t, d));
				t = t.update({
					filterFrom: s,
					filterTo: c,
					filter: (e, t) => e < s || t > c,
					add: l
				});
			}
		}
		return t;
	}
}, au = /x/.unicode == null ? "g" : "gu", ou = /*@__PURE__*/ RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]", au), su = {
	0: "null",
	7: "bell",
	8: "backspace",
	10: "newline",
	11: "vertical tab",
	13: "carriage return",
	27: "escape",
	8203: "zero width space",
	8204: "zero width non-joiner",
	8205: "zero width joiner",
	8206: "left-to-right mark",
	8207: "right-to-left mark",
	8232: "line separator",
	8237: "left-to-right override",
	8238: "right-to-left override",
	8294: "left-to-right isolate",
	8295: "right-to-left isolate",
	8297: "pop directional isolate",
	8233: "paragraph separator",
	65279: "zero width no-break space",
	65532: "object replacement"
}, cu = null;
function lu() {
	if (cu == null && typeof document < "u" && document.body) {
		let e = document.body.style;
		cu = (e.tabSize ?? e.MozTabSize) != null;
	}
	return cu || !1;
}
var uu = /*@__PURE__*/ J.define({ combine(e) {
	let t = Br(e, {
		render: null,
		specialChars: ou,
		addSpecialChars: null
	});
	return (t.replaceTabs = !lu()) && (t.specialChars = RegExp("	|" + t.specialChars.source, au)), t.addSpecialChars && (t.specialChars = RegExp(t.specialChars.source + "|" + t.addSpecialChars.source, au)), t;
} });
function du(e = {}) {
	return [uu.of(e), pu()];
}
var fu = null;
function pu() {
	return fu ||= lo.fromClass(class {
		constructor(e) {
			this.view = e, this.decorations = Z.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(e.state.facet(uu)), this.decorations = this.decorator.createDeco(e);
		}
		makeDecorator(e) {
			return new iu({
				regexp: e.specialChars,
				decoration: (t, n, r) => {
					let { doc: i } = n.state, a = In(t[0], 0);
					if (a == 9) {
						let e = i.lineAt(r), t = n.state.tabSize, a = ai(e.text, t, r - e.from);
						return Z.replace({ widget: new _u((t - a % t) * this.view.defaultCharacterWidth / this.view.scaleX) });
					}
					return this.decorationCache[a] || (this.decorationCache[a] = Z.replace({ widget: new gu(e, a) }));
				},
				boundary: e.replaceTabs ? void 0 : /[^]/
			});
		}
		update(e) {
			let t = e.state.facet(uu);
			e.startState.facet(uu) == t ? this.decorations = this.decorator.updateDeco(e, this.decorations) : (this.decorator = this.makeDecorator(t), this.decorations = this.decorator.createDeco(e.view));
		}
	}, { decorations: (e) => e.decorations });
}
var mu = "•";
function hu(e) {
	return e >= 32 ? mu : e == 10 ? "␤" : String.fromCharCode(9216 + e);
}
var gu = class extends Bi {
	constructor(e, t) {
		super(), this.options = e, this.code = t;
	}
	eq(e) {
		return e.code == this.code;
	}
	toDOM(e) {
		let t = hu(this.code), n = e.state.phrase("Control character") + " " + (su[this.code] || "0x" + this.code.toString(16)), r = this.options.render && this.options.render(this.code, n, t);
		if (r) return r;
		let i = document.createElement("span");
		return i.textContent = t, i.title = n, i.setAttribute("aria-label", n), i.className = "cm-specialChar", i;
	}
	ignoreEvent() {
		return !1;
	}
}, _u = class extends Bi {
	constructor(e) {
		super(), this.width = e;
	}
	eq(e) {
		return e.width == this.width;
	}
	toDOM() {
		let e = document.createElement("span");
		return e.textContent = "	", e.className = "cm-tab", e.style.width = this.width + "px", e;
	}
	ignoreEvent() {
		return !1;
	}
};
function vu() {
	return bu;
}
var yu = /*@__PURE__*/ Z.line({ class: "cm-activeLine" }), bu = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.decorations = this.getDeco(e);
	}
	update(e) {
		(e.docChanged || e.selectionSet) && (this.decorations = this.getDeco(e.view));
	}
	getDeco(e) {
		let t = -1, n = [];
		for (let r of e.state.selection.ranges) {
			let i = e.lineBlockAt(r.head);
			i.from > t && (n.push(yu.range(i.from)), t = i.from);
		}
		return Z.set(n);
	}
}, { decorations: (e) => e.decorations }), xu = class extends Bi {
	constructor(e) {
		super(), this.content = e;
	}
	toDOM(e) {
		let t = document.createElement("span");
		return t.className = "cm-placeholder", t.style.pointerEvents = "none", t.appendChild(typeof this.content == "string" ? document.createTextNode(this.content) : typeof this.content == "function" ? this.content(e) : this.content.cloneNode(!0)), t.setAttribute("aria-hidden", "true"), t;
	}
	coordsAt(e) {
		let t = e.firstChild ? Qi(e.firstChild) : [];
		if (!t.length) return null;
		let n = window.getComputedStyle(e.parentNode), r = ia(t[0], n.direction != "rtl"), i = parseInt(n.lineHeight);
		return r.bottom - r.top > i * 1.5 ? {
			left: r.left,
			right: r.right,
			top: r.top,
			bottom: r.top + i
		} : r;
	}
	ignoreEvent() {
		return !1;
	}
};
function Su(e) {
	let t = lo.fromClass(class {
		constructor(t) {
			this.view = t, this.placeholder = e ? Z.set([Z.widget({
				widget: new xu(e),
				side: 1
			}).range(0)]) : Z.none;
		}
		get decorations() {
			return this.view.state.doc.length ? Z.none : this.placeholder;
		}
	}, { decorations: (e) => e.decorations });
	return typeof e == "string" ? [t, Q.contentAttributes.of({ "aria-placeholder": e })] : t;
}
var Cu = 2e3;
function wu(e, t, n) {
	let r = Math.min(t.line, n.line), i = Math.max(t.line, n.line), a = [];
	if (t.off > Cu || n.off > Cu || t.col < 0 || n.col < 0) {
		let o = Math.min(t.off, n.off), s = Math.max(t.off, n.off);
		for (let t = r; t <= i; t++) {
			let n = e.doc.line(t);
			n.length <= s && a.push(q.range(n.from + o, n.to + s));
		}
	} else {
		let o = Math.min(t.col, n.col), s = Math.max(t.col, n.col);
		for (let t = r; t <= i; t++) {
			let n = e.doc.line(t), r = oi(n.text, o, e.tabSize, !0);
			if (r < 0) a.push(q.cursor(n.to));
			else {
				let t = oi(n.text, s, e.tabSize);
				a.push(q.range(n.from + r, n.from + t));
			}
		}
	}
	return a;
}
function Tu(e, t) {
	let n = e.coordsAtPos(e.viewport.from);
	return n ? Math.round(Math.abs((n.left - t) / e.defaultCharacterWidth)) : -1;
}
function Eu(e, t) {
	let n = e.posAtCoords({
		x: t.clientX,
		y: t.clientY
	}, !1), r = e.state.doc.lineAt(n), i = n - r.from, a = i > Cu ? -1 : i == r.length ? Tu(e, t.clientX) : ai(r.text, e.state.tabSize, n - r.from);
	return {
		line: r.number,
		col: a,
		off: i
	};
}
function Du(e, t) {
	let n = Eu(e, t), r = e.state.selection;
	return n ? {
		update(e) {
			if (e.docChanged) {
				let t = e.changes.mapPos(e.startState.doc.line(n.line).from), i = e.state.doc.lineAt(t);
				n = {
					line: i.number,
					col: n.col,
					off: Math.min(n.off, i.length)
				}, r = r.map(e.changes);
			}
		},
		get(t, i, a) {
			let o = Eu(e, t);
			if (!o) return r;
			let s = wu(e.state, n, o);
			return s.length ? a ? q.create(s.concat(r.ranges)) : q.create(s) : r;
		}
	} : null;
}
function Ou(e) {
	let t = e?.eventFilter || ((e) => e.altKey && e.button == 0);
	return Q.mouseSelectionStyle.of((e, n) => t(n) ? Du(e, n) : null);
}
var ku = {
	Alt: [18, (e) => !!e.altKey],
	Control: [17, (e) => !!e.ctrlKey],
	Shift: [16, (e) => !!e.shiftKey],
	Meta: [91, (e) => !!e.metaKey]
}, Au = { style: "cursor: crosshair" };
function ju(e = {}) {
	let [t, n] = ku[e.key || "Alt"], r = lo.fromClass(class {
		constructor(e) {
			this.view = e, this.isDown = !1;
		}
		set(e) {
			this.isDown != e && (this.isDown = e, this.view.update([]));
		}
	}, { eventObservers: {
		keydown(e) {
			this.set(e.keyCode == t || n(e));
		},
		keyup(e) {
			(e.keyCode == t || !n(e)) && this.set(!1);
		},
		mousemove(e) {
			this.set(n(e));
		}
	} });
	return [r, Q.contentAttributes.of((e) => e.plugin(r)?.isDown ? Au : null)];
}
var Mu = "-10000px", Nu = class {
	constructor(e, t, n, r) {
		this.facet = t, this.createTooltipView = n, this.removeTooltipView = r, this.input = e.state.facet(t), this.tooltips = this.input.filter((e) => e);
		let i = null;
		this.tooltipViews = this.tooltips.map((e) => i = n(e, i));
	}
	update(e, t) {
		var n;
		let r = e.state.facet(this.facet), i = r.filter((e) => e);
		if (r === this.input) {
			for (let t of this.tooltipViews) t.update && t.update(e);
			return !1;
		}
		let a = [], o = t ? [] : null;
		for (let n = 0; n < i.length; n++) {
			let r = i[n], s = -1;
			if (r) {
				for (let e = 0; e < this.tooltips.length; e++) {
					let t = this.tooltips[e];
					t && t.create == r.create && (s = e);
				}
				if (s < 0) a[n] = this.createTooltipView(r, n ? a[n - 1] : null), o && (o[n] = !!r.above);
				else {
					let r = a[n] = this.tooltipViews[s];
					o && (o[n] = t[s]), r.update && r.update(e);
				}
			}
		}
		for (let e of this.tooltipViews) a.indexOf(e) < 0 && (this.removeTooltipView(e), (n = e.destroy) == null || n.call(e));
		return t && (o.forEach((e, n) => t[n] = e), t.length = o.length), this.input = r, this.tooltips = i, this.tooltipViews = a, !0;
	}
};
function Pu(e) {
	let t = e.dom.ownerDocument.documentElement;
	return {
		top: 0,
		left: 0,
		bottom: t.clientHeight,
		right: t.clientWidth
	};
}
var Fu = /*@__PURE__*/ J.define({ combine: (e) => ({
	position: X.ios ? "absolute" : e.find((e) => e.position)?.position || "fixed",
	parent: e.find((e) => e.parent)?.parent || null,
	tooltipSpace: e.find((e) => e.tooltipSpace)?.tooltipSpace || Pu
}) }), Iu = /*@__PURE__*/ new WeakMap(), Lu = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
		let t = e.state.facet(Fu);
		this.position = t.position, this.parent = t.parent, this.classes = e.themeClasses, this.createContainer(), this.measureReq = {
			read: this.readMeasure.bind(this),
			write: this.writeMeasure.bind(this),
			key: this
		}, this.resizeObserver = typeof ResizeObserver == "function" ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new Nu(e, Vu, (e, t) => this.createTooltip(e, t), (e) => {
			this.resizeObserver && this.resizeObserver.unobserve(e.dom), e.dom.remove();
		}), this.above = this.manager.tooltips.map((e) => !!e.above), this.intersectionObserver = typeof IntersectionObserver == "function" ? new IntersectionObserver((e) => {
			Date.now() > this.lastTransaction - 50 && e.length > 0 && e[e.length - 1].intersectionRatio < 1 && this.measureSoon();
		}, { threshold: [1] }) : null, this.observeIntersection(), e.win.addEventListener("resize", this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
	}
	createContainer() {
		this.parent ? (this.container = document.createElement("div"), this.container.style.position = "relative", this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
	}
	observeIntersection() {
		if (this.intersectionObserver) {
			this.intersectionObserver.disconnect();
			for (let e of this.manager.tooltipViews) this.intersectionObserver.observe(e.dom);
		}
	}
	measureSoon() {
		this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
			this.measureTimeout = -1, this.maybeMeasure();
		}, 50));
	}
	update(e) {
		e.transactions.length && (this.lastTransaction = Date.now());
		let t = this.manager.update(e, this.above);
		t && this.observeIntersection();
		let n = t || e.geometryChanged, r = e.state.facet(Fu);
		if (r.position != this.position && !this.madeAbsolute) {
			this.position = r.position;
			for (let e of this.manager.tooltipViews) e.dom.style.position = this.position;
			n = !0;
		}
		if (r.parent != this.parent) {
			this.parent && this.container.remove(), this.parent = r.parent, this.createContainer();
			for (let e of this.manager.tooltipViews) this.container.appendChild(e.dom);
			n = !0;
		} else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
		n && this.maybeMeasure();
	}
	createTooltip(e, t) {
		let n = e.create(this.view), r = t ? t.dom : null;
		if (n.dom.classList.add("cm-tooltip"), e.arrow && !n.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow")) {
			let e = document.createElement("div");
			e.className = "cm-tooltip-arrow", n.dom.appendChild(e);
		}
		return n.dom.style.position = this.position, n.dom.style.top = Mu, n.dom.style.left = "0px", this.container.insertBefore(n.dom, r), n.mount && n.mount(this.view), this.resizeObserver && this.resizeObserver.observe(n.dom), n;
	}
	destroy() {
		var e, t, n;
		this.view.win.removeEventListener("resize", this.measureSoon);
		for (let t of this.manager.tooltipViews) t.dom.remove(), (e = t.destroy) == null || e.call(t);
		this.parent && this.container.remove(), (t = this.resizeObserver) == null || t.disconnect(), (n = this.intersectionObserver) == null || n.disconnect(), clearTimeout(this.measureTimeout);
	}
	readMeasure() {
		let e = 1, t = 1, n = !1;
		if (this.position == "fixed" && this.manager.tooltipViews.length) {
			let { dom: e } = this.manager.tooltipViews[0];
			if (X.safari) {
				let t = e.getBoundingClientRect();
				n = Math.abs(t.top + 1e4) > 1 || Math.abs(t.left) > 1;
			} else n = !!e.offsetParent && e.offsetParent != this.container.ownerDocument.body;
		}
		if (n || this.position == "absolute") if (this.parent) {
			let n = this.parent.getBoundingClientRect();
			n.width && n.height && (e = n.width / this.parent.offsetWidth, t = n.height / this.parent.offsetHeight);
		} else ({scaleX: e, scaleY: t} = this.view.viewState);
		let r = this.view.scrollDOM.getBoundingClientRect(), i = xo(this.view);
		return {
			visible: {
				left: r.left + i.left,
				top: r.top + i.top,
				right: r.right - i.right,
				bottom: r.bottom - i.bottom
			},
			parent: this.parent ? this.container.getBoundingClientRect() : this.view.dom.getBoundingClientRect(),
			pos: this.manager.tooltips.map((e, t) => {
				let n = this.manager.tooltipViews[t];
				return n.getCoords ? n.getCoords(e.pos) : this.view.coordsAtPos(e.pos);
			}),
			size: this.manager.tooltipViews.map(({ dom: e }) => e.getBoundingClientRect()),
			space: this.view.state.facet(Fu).tooltipSpace(this.view),
			scaleX: e,
			scaleY: t,
			makeAbsolute: n
		};
	}
	writeMeasure(e) {
		if (e.makeAbsolute) {
			this.madeAbsolute = !0, this.position = "absolute";
			for (let e of this.manager.tooltipViews) e.dom.style.position = "absolute";
		}
		let { visible: t, space: n, scaleX: r, scaleY: i } = e, a = [];
		for (let o = 0; o < this.manager.tooltips.length; o++) {
			let s = this.manager.tooltips[o], c = this.manager.tooltipViews[o], { dom: l } = c, u = e.pos[o], d = e.size[o];
			if (!u || s.clip !== !1 && (u.bottom <= Math.max(t.top, n.top) || u.top >= Math.min(t.bottom, n.bottom) || u.right < Math.max(t.left, n.left) - .1 || u.left > Math.min(t.right, n.right) + .1)) {
				l.style.top = Mu;
				continue;
			}
			let f = s.arrow ? c.dom.querySelector(".cm-tooltip-arrow") : null, p = f ? 7 : 0, m = d.right - d.left, h = Iu.get(c) ?? d.bottom - d.top, g = c.offset || Bu, _ = this.view.textDirection == xa.LTR, v = d.width > n.right - n.left ? _ ? n.left : n.right - d.width : _ ? Math.max(n.left, Math.min(u.left - (f ? 14 : 0) + g.x, n.right - m)) : Math.min(Math.max(n.left, u.left - m + (f ? 14 : 0) - g.x), n.right - m), y = this.above[o];
			!s.strictSide && (y ? u.top - h - p - g.y < n.top : u.bottom + h + p + g.y > n.bottom) && y == n.bottom - u.bottom > u.top - n.top && (y = this.above[o] = !y);
			let b = (y ? u.top - n.top : n.bottom - u.bottom) - p;
			if (b < h && c.resize !== !1) {
				if (b < this.view.defaultLineHeight) {
					l.style.top = Mu;
					continue;
				}
				Iu.set(c, h), l.style.height = (h = b) / i + "px";
			} else l.style.height && (l.style.height = "");
			let x = y ? u.top - h - p - g.y : u.bottom + p + g.y, S = v + m;
			if (c.overlap !== !0) for (let e of a) e.left < S && e.right > v && e.top < x + h && e.bottom > x && (x = y ? e.top - h - 2 - p : e.bottom + p + 2);
			if (this.position == "absolute" ? (l.style.top = (x - e.parent.top) / i + "px", Ru(l, (v - e.parent.left) / r)) : (l.style.top = x / i + "px", Ru(l, v / r)), f) {
				let e = u.left + (_ ? g.x : -g.x) - (v + 14 - 7);
				f.style.left = e / r + "px";
			}
			c.overlap !== !0 && a.push({
				left: v,
				top: x,
				right: S,
				bottom: x + h
			}), l.classList.toggle("cm-tooltip-above", y), l.classList.toggle("cm-tooltip-below", !y), c.positioned && c.positioned(e.space);
		}
	}
	maybeMeasure() {
		if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let e of this.manager.tooltipViews) e.dom.style.top = Mu;
	}
}, { eventObservers: { scroll() {
	this.maybeMeasure();
} } });
function Ru(e, t) {
	let n = parseInt(e.style.left, 10);
	(isNaN(n) || Math.abs(t - n) > 1) && (e.style.left = t + "px");
}
var zu = /*@__PURE__*/ Q.baseTheme({
	".cm-tooltip": {
		zIndex: 500,
		boxSizing: "border-box"
	},
	"&light .cm-tooltip": {
		border: "1px solid #bbb",
		backgroundColor: "#f5f5f5"
	},
	"&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" },
	"&dark .cm-tooltip": {
		backgroundColor: "#333338",
		color: "white"
	},
	".cm-tooltip-arrow": {
		height: "7px",
		width: "14px",
		position: "absolute",
		zIndex: -1,
		overflow: "hidden",
		"&:before, &:after": {
			content: "''",
			position: "absolute",
			width: 0,
			height: 0,
			borderLeft: "7px solid transparent",
			borderRight: "7px solid transparent"
		},
		".cm-tooltip-above &": {
			bottom: "-7px",
			"&:before": { borderTop: "7px solid #bbb" },
			"&:after": {
				borderTop: "7px solid #f5f5f5",
				bottom: "1px"
			}
		},
		".cm-tooltip-below &": {
			top: "-7px",
			"&:before": { borderBottom: "7px solid #bbb" },
			"&:after": {
				borderBottom: "7px solid #f5f5f5",
				top: "1px"
			}
		}
	},
	"&dark .cm-tooltip .cm-tooltip-arrow": {
		"&:before": {
			borderTopColor: "#333338",
			borderBottomColor: "#333338"
		},
		"&:after": {
			borderTopColor: "transparent",
			borderBottomColor: "transparent"
		}
	}
}), Bu = {
	x: 0,
	y: 0
}, Vu = /*@__PURE__*/ J.define({ enables: [Lu, zu] }), Hu = /*@__PURE__*/ J.define({ combine: (e) => e.reduce((e, t) => e.concat(t), []) }), Uu = class e {
	static create(t) {
		return new e(t);
	}
	constructor(e) {
		this.view = e, this.mounted = !1, this.dom = document.createElement("div"), this.dom.classList.add("cm-tooltip-hover"), this.manager = new Nu(e, Hu, (e, t) => this.createHostedView(e, t), (e) => e.dom.remove());
	}
	createHostedView(e, t) {
		let n = e.create(this.view);
		return n.dom.classList.add("cm-tooltip-section"), this.dom.insertBefore(n.dom, t ? t.dom.nextSibling : this.dom.firstChild), this.mounted && n.mount && n.mount(this.view), n;
	}
	mount(e) {
		for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
		this.mounted = !0;
	}
	positioned(e) {
		for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
	}
	update(e) {
		this.manager.update(e);
	}
	destroy() {
		var e;
		for (let t of this.manager.tooltipViews) (e = t.destroy) == null || e.call(t);
	}
	passProp(e) {
		let t;
		for (let n of this.manager.tooltipViews) {
			let r = n[e];
			if (r !== void 0) {
				if (t === void 0) t = r;
				else if (t !== r) return;
			}
		}
		return t;
	}
	get offset() {
		return this.passProp("offset");
	}
	get getCoords() {
		return this.passProp("getCoords");
	}
	get overlap() {
		return this.passProp("overlap");
	}
	get resize() {
		return this.passProp("resize");
	}
}, Wu = /*@__PURE__*/ Vu.compute([Hu], (e) => {
	let t = e.facet(Hu);
	return t.length === 0 ? null : {
		pos: Math.min(...t.map((e) => e.pos)),
		end: Math.max(...t.map((e) => e.end ?? e.pos)),
		create: Uu.create,
		above: t[0].above,
		arrow: t.some((e) => e.arrow)
	};
}), Gu = /*@__PURE__*/ J.define(), Ku = class {
	constructor(e, t, n, r, i, a) {
		this.view = e, this.source = t, this.field = n, this.locked = r, this.setHover = i, this.hoverTime = a, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
			x: 0,
			y: 0,
			target: e.dom,
			time: 0
		}, this.checkHover = this.checkHover.bind(this), e.dom.addEventListener("mouseleave", this.mouseleave = this.mouseleave.bind(this)), e.dom.addEventListener("mousemove", this.mousemove = this.mousemove.bind(this));
	}
	update(e) {
		this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		if (this.hoverTimeout = -1, this.active.length) return;
		let e = Date.now() - this.lastMove.time;
		e < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e) : this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { view: e, lastMove: t } = this, n = e.docView.tile.nearest(t.target);
		if (!n) return;
		let r, i = 1;
		if (n.isWidget()) r = n.posAtStart;
		else {
			if (r = e.posAtCoords(t), r == null) return;
			let n = e.coordsAtPos(r);
			if (!n || t.y < n.top || t.y > n.bottom || t.x < n.left - e.defaultCharacterWidth || t.x > n.right + e.defaultCharacterWidth) return;
			let a = e.bidiSpans(e.state.doc.lineAt(r)).find((e) => e.from <= r && e.to >= r), o = a && a.dir == xa.RTL ? -1 : 1;
			i = t.x < n.left ? -o : o;
		}
		this.activateHover(e, r, i);
	}
	activateHover(e, t, n, r) {
		let i = this.source(e, t, n), a = (t) => {
			if (t && !(Array.isArray(t) && !t.length)) {
				let n = Array.isArray(t) ? t : [t];
				r && this.locked.set(n, r), e.dispatch({ effects: this.setHover.of(n) });
			}
		};
		if (i && "then" in i) {
			let n = this.pending = { pos: t };
			i.then((e) => {
				this.pending == n && (this.pending = null, a(e));
			}, (t) => ao(e.state, t, "hover tooltip"));
		} else a(i);
	}
	get tooltip() {
		let e = this.view.plugin(Lu), t = e ? e.manager.tooltips.findIndex((e) => e.create == Uu.create) : -1;
		return t > -1 ? e.manager.tooltipViews[t] : null;
	}
	mousemove(e) {
		this.lastMove = {
			x: e.clientX,
			y: e.clientY,
			target: e.target,
			time: Date.now()
		}, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
		let { active: t, tooltip: n } = this;
		if (t.length && !this.locked.has(t) && n && !Ju(n.dom, e) || this.pending) {
			let { pos: n } = t[0] || this.pending, r = t[0]?.end ?? n;
			(n == r ? this.view.posAtCoords(this.lastMove) != n : !Yu(this.view, n, r, e.clientX, e.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
		}
	}
	mouseleave(e) {
		clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
		let { active: t } = this;
		if (t.length && !this.locked.has(t)) {
			let { tooltip: t } = this;
			t && t.dom.contains(e.relatedTarget) ? this.watchTooltipLeave(t.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
		}
	}
	watchTooltipLeave(e) {
		let t = (n) => {
			e.removeEventListener("mouseleave", t);
			let { active: r } = this;
			r.length && !this.locked.has(r) && !this.view.dom.contains(n.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
		};
		e.addEventListener("mouseleave", t);
	}
	destroy() {
		clearTimeout(this.hoverTimeout), clearTimeout(this.restartTimeout), this.view.dom.removeEventListener("mouseleave", this.mouseleave), this.view.dom.removeEventListener("mousemove", this.mousemove);
	}
}, qu = 4;
function Ju(e, t) {
	let { left: n, right: r, top: i, bottom: a } = e.getBoundingClientRect(), o;
	if (o = e.querySelector(".cm-tooltip-arrow")) {
		let e = o.getBoundingClientRect();
		i = Math.min(e.top, i), a = Math.max(e.bottom, a);
	}
	return t.clientX >= n - qu && t.clientX <= r + qu && t.clientY >= i - qu && t.clientY <= a + qu;
}
function Yu(e, t, n, r, i, a) {
	let o = e.scrollDOM.getBoundingClientRect(), s = e.documentTop + e.documentPadding.top + e.contentHeight;
	if (o.left > r || o.right < r || o.top > i || Math.min(o.bottom, s) < i) return !1;
	let c = e.posAtCoords({
		x: r,
		y: i
	}, !1);
	return c >= t && c <= n;
}
function Xu(e, t = {}) {
	let n = Y.define(), r = /* @__PURE__ */ new WeakMap(), i = ir.define({
		create() {
			return [];
		},
		update(e, a) {
			let o = r.get(e);
			if (e.length && (t.hideOnChange && (a.docChanged || a.selection) || o && o(a) ? e = [] : t.hideOn && (e = e.filter((e) => !t.hideOn(a, e)))), a.docChanged && e.length) {
				let t = [];
				for (let n of e) {
					let e = a.changes.mapPos(n.pos, -1, Bn.TrackDel);
					if (e != null) {
						let r = Object.assign(Object.create(null), n);
						r.pos = e, r.end != null && (r.end = a.changes.mapPos(r.end)), t.push(r);
					}
				}
				e = t;
			}
			for (let t of a.effects) t.is(n) && (e = t.value, o = void 0), (t.is($u) && !t.value || t.value == i) && (e = []);
			return e.length && o && r.set(e, o), e;
		},
		provide: (e) => Hu.from(e)
	}), a = lo.define((a) => new Ku(a, e, i, r, n, t.hoverTime || 300));
	return {
		active: i,
		extension: [
			i,
			a,
			Gu.of(a),
			Wu
		]
	};
}
function Zu(e, t, n, r = {}) {
	let i = e.state.facet(Gu).map((t) => e.plugin(t)).filter((e) => !!e);
	if (r.tooltip && r.tooltip.active) {
		let e = i.find((e) => e.field == r.tooltip.active);
		e && (i = [e]);
	}
	for (let a of i) a.activateHover(e, t, n, r.until ?? (() => !1));
}
function Qu(e, t) {
	let n = e.plugin(Lu);
	if (!n) return null;
	let r = n.manager.tooltips.indexOf(t);
	return r < 0 ? null : n.manager.tooltipViews[r];
}
var $u = /*@__PURE__*/ Y.define(), ed = /*@__PURE__*/ J.define({ combine(e) {
	let t, n;
	for (let r of e) t ||= r.topContainer, n ||= r.bottomContainer;
	return {
		topContainer: t,
		bottomContainer: n
	};
} });
function td(e, t) {
	let n = e.plugin(nd), r = n ? n.specs.indexOf(t) : -1;
	return r > -1 ? n.panels[r] : null;
}
var nd = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.input = e.state.facet(ad), this.specs = this.input.filter((e) => e), this.panels = this.specs.map((t) => t(e));
		let t = e.state.facet(ed);
		this.top = new rd(e, !0, t.topContainer), this.bottom = new rd(e, !1, t.bottomContainer), this.top.sync(this.panels.filter((e) => e.top)), this.bottom.sync(this.panels.filter((e) => !e.top));
		for (let e of this.panels) e.dom.classList.add("cm-panel"), e.mount && e.mount();
	}
	update(e) {
		let t = e.state.facet(ed);
		this.top.container != t.topContainer && (this.top.sync([]), this.top = new rd(e.view, !0, t.topContainer)), this.bottom.container != t.bottomContainer && (this.bottom.sync([]), this.bottom = new rd(e.view, !1, t.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
		let n = e.state.facet(ad);
		if (n != this.input) {
			let t = n.filter((e) => e), r = [], i = [], a = [], o = [];
			for (let n of t) {
				let t = this.specs.indexOf(n), s;
				t < 0 ? (s = n(e.view), o.push(s)) : (s = this.panels[t], s.update && s.update(e)), r.push(s), (s.top ? i : a).push(s);
			}
			this.specs = t, this.panels = r, this.top.sync(i), this.bottom.sync(a);
			for (let e of o) e.dom.classList.add("cm-panel"), e.mount && e.mount();
		} else for (let t of this.panels) t.update && t.update(e);
	}
	destroy() {
		this.top.sync([]), this.bottom.sync([]);
	}
}, { provide: (e) => Q.scrollMargins.of((t) => {
	let n = t.plugin(e);
	return n && {
		top: n.top.scrollMargin(),
		bottom: n.bottom.scrollMargin()
	};
}) }), rd = class {
	constructor(e, t, n) {
		this.view = e, this.top = t, this.container = n, this.dom = void 0, this.classes = "", this.panels = [], this.syncClasses();
	}
	sync(e) {
		for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
		this.panels = e, this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			this.dom &&= (this.dom.remove(), void 0);
			return;
		}
		if (!this.dom) {
			this.dom = document.createElement("div"), this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom";
			let e = this.container || this.view.dom;
			e.insertBefore(this.dom, this.top ? e.firstChild : null);
		}
		let e = this.dom.firstChild;
		for (let t of this.panels) if (t.dom.parentNode == this.dom) {
			for (; e != t.dom;) e = id(e);
			e = e.nextSibling;
		} else this.dom.insertBefore(t.dom, e);
		for (; e;) e = id(e);
	}
	scrollMargin() {
		return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
	}
	syncClasses() {
		if (!(!this.container || this.classes == this.view.themeClasses)) {
			for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
			for (let e of (this.classes = this.view.themeClasses).split(" ")) e && this.container.classList.add(e);
		}
	}
};
function id(e) {
	let t = e.nextSibling;
	return e.remove(), t;
}
var ad = /*@__PURE__*/ J.define({ enables: nd });
function od(e, t) {
	let n, r = new Promise((e) => n = e), i = (e) => ud(e, t, n);
	e.state.field(sd, !1) ? e.dispatch({ effects: cd.of(i) }) : e.dispatch({ effects: Y.appendConfig.of(sd.init(() => [i])) });
	let a = ld.of(i);
	return {
		close: a,
		result: r.then((t) => ((e.win.queueMicrotask || ((t) => e.win.setTimeout(t, 10)))(() => {
			e.state.field(sd).indexOf(i) > -1 && e.dispatch({ effects: a });
		}), t))
	};
}
var sd = /*@__PURE__*/ ir.define({
	create() {
		return [];
	},
	update(e, t) {
		for (let n of t.effects) n.is(cd) ? e = [n.value].concat(e) : n.is(ld) && (e = e.filter((e) => e != n.value));
		return e;
	},
	provide: (e) => ad.computeN([e], (t) => t.field(e))
}), cd = /*@__PURE__*/ Y.define(), ld = /*@__PURE__*/ Y.define();
function ud(e, t, n) {
	let r = t.content ? t.content(e, () => o(null)) : null;
	if (!r) {
		if (r = xi("form"), t.input) {
			let e = xi("input", t.input);
			/^(text|password|number|email|tel|url)$/.test(e.type) && e.classList.add("cm-textfield"), e.name ||= "input", r.appendChild(xi("label", (t.label || "") + ": ", e));
		} else r.appendChild(document.createTextNode(t.label || ""));
		r.appendChild(document.createTextNode(" ")), r.appendChild(xi("button", {
			class: "cm-button",
			type: "submit"
		}, t.submitLabel || "OK"));
	}
	let i = r.nodeName == "FORM" ? [r] : r.querySelectorAll("form");
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		t.addEventListener("keydown", (e) => {
			e.keyCode == 27 ? (e.preventDefault(), o(null)) : e.keyCode == 13 && (e.preventDefault(), o(t));
		}), t.addEventListener("submit", (e) => {
			e.preventDefault(), o(t);
		});
	}
	let a = xi("div", r, xi("button", {
		onclick: () => o(null),
		"aria-label": e.state.phrase("close"),
		class: "cm-dialog-close",
		type: "button"
	}, ["×"]));
	t.class && (a.className = t.class), a.classList.add("cm-dialog");
	function o(t) {
		a.contains(a.ownerDocument.activeElement) && e.focus(), n(t);
	}
	return {
		dom: a,
		top: t.top,
		mount: () => {
			if (t.focus) {
				let e;
				e = typeof t.focus == "string" ? r.querySelector(t.focus) : r.querySelector("input") || r.querySelector("button"), e && "select" in e ? e.select() : e && "focus" in e && e.focus();
			}
		}
	};
}
var dd = class extends Vr {
	compare(e) {
		return this == e || this.constructor == e.constructor && this.eq(e);
	}
	eq(e) {
		return !1;
	}
	destroy(e) {}
};
dd.prototype.elementClass = "", dd.prototype.toDOM = void 0, dd.prototype.mapMode = Bn.TrackBefore, dd.prototype.startSide = dd.prototype.endSide = -1, dd.prototype.point = !0;
var fd = /*@__PURE__*/ J.define(), pd = /*@__PURE__*/ J.define(), md = {
	class: "",
	renderEmptyElements: !1,
	elementStyle: "",
	markers: () => Kr.empty,
	lineMarker: () => null,
	widgetMarker: () => null,
	lineMarkerChange: null,
	initialSpacer: null,
	updateSpacer: null,
	domEventHandlers: {},
	side: "before"
}, hd = /*@__PURE__*/ J.define();
function gd(e) {
	return [vd(), hd.of({
		...md,
		...e
	})];
}
var _d = /*@__PURE__*/ J.define({ combine: (e) => e.some((e) => e) });
function vd(e) {
	let t = [yd];
	return e && e.fixed === !1 && t.push(_d.of(!0)), t;
}
var yd = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.domAfter = null, this.prevViewport = e.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters cm-gutters-before", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = e.state.facet(hd).map((t) => new Cd(e, t)), this.fixed = !e.state.facet(_d);
		for (let e of this.gutters) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
		this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), e.scrollDOM.insertBefore(this.dom, e.contentDOM);
	}
	getDOMAfter() {
		return this.domAfter || (this.domAfter = document.createElement("div"), this.domAfter.className = "cm-gutters cm-gutters-after", this.domAfter.setAttribute("aria-hidden", "true"), this.domAfter.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.domAfter.style.position = this.fixed ? "sticky" : "", this.view.scrollDOM.appendChild(this.domAfter)), this.domAfter;
	}
	update(e) {
		if (this.updateGutters(e)) {
			let t = this.prevViewport, n = e.view.viewport, r = Math.min(t.to, n.to) - Math.max(t.from, n.from);
			this.syncGutters(r < (n.to - n.from) * .8);
		}
		if (e.geometryChanged) {
			let e = this.view.contentHeight / this.view.scaleY + "px";
			this.dom.style.minHeight = e, this.domAfter && (this.domAfter.style.minHeight = e);
		}
		this.view.state.facet(_d) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : "", this.domAfter && (this.domAfter.style.position = this.fixed ? "sticky" : "")), this.prevViewport = e.view.viewport;
	}
	syncGutters(e) {
		let t = this.dom.nextSibling;
		e && (this.dom.remove(), this.domAfter && this.domAfter.remove());
		let n = Kr.iter(this.view.state.facet(fd), this.view.viewport.from), r = [], i = this.gutters.map((e) => new Sd(e, this.view.viewport, -this.view.documentPadding.top));
		for (let e of this.view.viewportLineBlocks) if (r.length && (r = []), Array.isArray(e.type)) {
			let t = !0;
			for (let a of e.type) if (a.type == Vi.Text && t) {
				xd(n, r, a.from);
				for (let e of i) e.line(this.view, a, r);
				t = !1;
			} else if (a.widget) for (let e of i) e.widget(this.view, a);
		} else if (e.type == Vi.Text) {
			xd(n, r, e.from);
			for (let t of i) t.line(this.view, e, r);
		} else if (e.widget) for (let t of i) t.widget(this.view, e);
		for (let e of i) e.finish();
		e && (this.view.scrollDOM.insertBefore(this.dom, t), this.domAfter && this.view.scrollDOM.appendChild(this.domAfter));
	}
	updateGutters(e) {
		let t = e.startState.facet(hd), n = e.state.facet(hd), r = e.docChanged || e.heightChanged || e.viewportChanged || !Kr.eq(e.startState.facet(fd), e.state.facet(fd), e.view.viewport.from, e.view.viewport.to);
		if (t == n) for (let t of this.gutters) t.update(e) && (r = !0);
		else {
			r = !0;
			let i = [];
			for (let r of n) {
				let n = t.indexOf(r);
				n < 0 ? i.push(new Cd(this.view, r)) : (this.gutters[n].update(e), i.push(this.gutters[n]));
			}
			for (let e of this.gutters) e.dom.remove(), i.indexOf(e) < 0 && e.destroy();
			for (let e of i) e.config.side == "after" ? this.getDOMAfter().appendChild(e.dom) : this.dom.appendChild(e.dom);
			this.gutters = i;
		}
		return r;
	}
	destroy() {
		for (let e of this.gutters) e.destroy();
		this.dom.remove(), this.domAfter && this.domAfter.remove();
	}
}, { provide: (e) => Q.scrollMargins.of((t) => {
	let n = t.plugin(e);
	if (!n || n.gutters.length == 0 || !n.fixed) return null;
	let r = n.dom.offsetWidth * t.scaleX, i = n.domAfter ? n.domAfter.offsetWidth * t.scaleX : 0;
	return t.textDirection == xa.LTR ? {
		left: r,
		right: i
	} : {
		right: r,
		left: i
	};
}) });
function bd(e) {
	return Array.isArray(e) ? e : [e];
}
function xd(e, t, n) {
	for (; e.value && e.from <= n;) e.from == n && t.push(e.value), e.next();
}
var Sd = class {
	constructor(e, t, n) {
		this.gutter = e, this.height = n, this.i = 0, this.cursor = Kr.iter(e.markers, t.from);
	}
	addElement(e, t, n) {
		let { gutter: r } = this, i = (t.top - this.height) / e.scaleY, a = t.height / e.scaleY;
		if (this.i == r.elements.length) {
			let t = new wd(e, a, i, n);
			r.elements.push(t), r.dom.appendChild(t.dom);
		} else r.elements[this.i].update(e, a, i, n);
		this.height = t.bottom, this.i++;
	}
	line(e, t, n) {
		let r = [];
		xd(this.cursor, r, t.from), n.length && (r = r.concat(n));
		let i = this.gutter.config.lineMarker(e, t, r);
		i && r.unshift(i);
		let a = this.gutter;
		r.length == 0 && !a.config.renderEmptyElements || this.addElement(e, t, r);
	}
	widget(e, t) {
		let n = this.gutter.config.widgetMarker(e, t.widget, t), r = n ? [n] : null;
		for (let n of e.state.facet(pd)) {
			let i = n(e, t.widget, t);
			i && (r ||= []).push(i);
		}
		r && this.addElement(e, t, r);
	}
	finish() {
		let e = this.gutter;
		for (; e.elements.length > this.i;) {
			let t = e.elements.pop();
			e.dom.removeChild(t.dom), t.destroy();
		}
	}
}, Cd = class {
	constructor(e, t) {
		this.view = e, this.config = t, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
		for (let n in t.domEventHandlers) this.dom.addEventListener(n, (r) => {
			let i = r.target, a;
			if (i != this.dom && this.dom.contains(i)) {
				for (; i.parentNode != this.dom;) i = i.parentNode;
				let e = i.getBoundingClientRect();
				a = (e.top + e.bottom) / 2;
			} else a = r.clientY;
			let o = e.lineBlockAtHeight(a - e.documentTop);
			t.domEventHandlers[n](e, o, r) && r.preventDefault();
		});
		this.markers = bd(t.markers(e)), t.initialSpacer && (this.spacer = new wd(e, 0, 0, [t.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
	}
	update(e) {
		let t = this.markers;
		if (this.markers = bd(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
			let t = this.config.updateSpacer(this.spacer.markers[0], e);
			t != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [t]);
		}
		let n = e.view.viewport;
		return !Kr.eq(this.markers, t, n.from, n.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
	}
	destroy() {
		for (let e of this.elements) e.destroy();
	}
}, wd = class {
	constructor(e, t, n, r) {
		this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, t, n, r);
	}
	update(e, t, n, r) {
		this.height != t && (this.height = t, this.dom.style.height = t + "px"), this.above != n && (this.dom.style.marginTop = (this.above = n) ? n + "px" : ""), Td(this.markers, r) || this.setMarkers(e, r);
	}
	setMarkers(e, t) {
		let n = "cm-gutterElement", r = this.dom.firstChild;
		for (let i = 0, a = 0;;) {
			let o = a, s = i < t.length ? t[i++] : null, c = !1;
			if (s) {
				let e = s.elementClass;
				e && (n += " " + e);
				for (let e = a; e < this.markers.length; e++) if (this.markers[e].compare(s)) {
					o = e, c = !0;
					break;
				}
			} else o = this.markers.length;
			for (; a < o;) {
				let e = this.markers[a++];
				if (e.toDOM) {
					e.destroy(r);
					let t = r.nextSibling;
					r.remove(), r = t;
				}
			}
			if (!s) break;
			s.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(s.toDOM(e), r)), c && a++;
		}
		this.dom.className = n, this.markers = t;
	}
	destroy() {
		this.setMarkers(null, []);
	}
};
function Td(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].compare(t[n])) return !1;
	return !0;
}
var Ed = /*@__PURE__*/ J.define(), Dd = /*@__PURE__*/ J.define(), Od = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		formatNumber: String,
		domEventHandlers: {}
	}, { domEventHandlers(e, t) {
		let n = Object.assign({}, e);
		for (let e in t) {
			let r = n[e], i = t[e];
			n[e] = r ? (e, t, n) => r(e, t, n) || i(e, t, n) : i;
		}
		return n;
	} });
} }), kd = class extends dd {
	constructor(e) {
		super(), this.number = e;
	}
	eq(e) {
		return this.number == e.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
};
function Ad(e, t) {
	return e.state.facet(Od).formatNumber(t, e.state);
}
var jd = /*@__PURE__*/ hd.compute([Od], (e) => ({
	class: "cm-lineNumbers",
	renderEmptyElements: !1,
	markers(e) {
		return e.state.facet(Ed);
	},
	lineMarker(e, t, n) {
		return n.some((e) => e.toDOM) ? null : new kd(Ad(e, e.state.doc.lineAt(t.from).number));
	},
	widgetMarker: (e, t, n) => {
		for (let r of e.state.facet(Dd)) {
			let i = r(e, t, n);
			if (i) return i;
		}
		return null;
	},
	lineMarkerChange: (e) => e.startState.facet(Od) != e.state.facet(Od),
	initialSpacer(e) {
		return new kd(Ad(e, Nd(e.state.doc.lines)));
	},
	updateSpacer(e, t) {
		let n = Ad(t.view, Nd(t.view.state.doc.lines));
		return n == e.number ? e : new kd(n);
	},
	domEventHandlers: e.facet(Od).domEventHandlers,
	side: "before"
}));
function Md(e = {}) {
	return [
		Od.of(e),
		vd(),
		jd
	];
}
function Nd(e) {
	let t = 9;
	for (; t < e;) t = t * 10 + 9;
	return t;
}
var Pd = /*@__PURE__*/ new class extends dd {
	constructor() {
		super(...arguments), this.elementClass = "cm-activeLineGutter";
	}
}(), Fd = /*@__PURE__*/ fd.compute(["selection"], (e) => {
	let t = [], n = -1;
	for (let r of e.selection.ranges) {
		let i = e.doc.lineAt(r.head).from;
		i > n && (n = i, t.push(Pd.range(i)));
	}
	return Kr.of(t);
});
function Id() {
	return Fd;
}
//#endregion
//#region node_modules/.pnpm/@lezer+common@1.5.2/node_modules/@lezer/common/dist/index.js
var Ld = 1024, Rd = 0, zd = class {
	constructor(e, t) {
		this.from = e, this.to = t;
	}
}, $ = class {
	constructor(e = {}) {
		this.id = Rd++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
			throw Error("This node type doesn't define a deserialize function");
		}), this.combine = e.combine || null;
	}
	add(e) {
		if (this.perNode) throw RangeError("Can't add per-node props to node types");
		return typeof e != "function" && (e = Hd.match(e)), (t) => {
			let n = e(t);
			return n === void 0 ? null : [this, n];
		};
	}
};
$.closedBy = new $({ deserialize: (e) => e.split(" ") }), $.openedBy = new $({ deserialize: (e) => e.split(" ") }), $.group = new $({ deserialize: (e) => e.split(" ") }), $.isolate = new $({ deserialize: (e) => {
	if (e && e != "rtl" && e != "ltr" && e != "auto") throw RangeError("Invalid value for isolate: " + e);
	return e || "auto";
} }), $.contextHash = new $({ perNode: !0 }), $.lookAhead = new $({ perNode: !0 }), $.mounted = new $({ perNode: !0 });
var Bd = class {
	constructor(e, t, n, r = !1) {
		this.tree = e, this.overlay = t, this.parser = n, this.bracketed = r;
	}
	static get(e) {
		return e && e.props && e.props[$.mounted.id];
	}
}, Vd = Object.create(null), Hd = class e {
	constructor(e, t, n, r = 0) {
		this.name = e, this.props = t, this.id = n, this.flags = r;
	}
	static define(t) {
		let n = t.props && t.props.length ? Object.create(null) : Vd, r = !!t.top | (t.skipped ? 2 : 0) | (t.error ? 4 : 0) | (t.name == null ? 8 : 0), i = new e(t.name || "", n, t.id, r);
		if (t.props) {
			for (let e of t.props) if (Array.isArray(e) || (e = e(i)), e) {
				if (e[0].perNode) throw RangeError("Can't store a per-node prop on a node type");
				n[e[0].id] = e[1];
			}
		}
		return i;
	}
	prop(e) {
		return this.props[e.id];
	}
	get isTop() {
		return (this.flags & 1) > 0;
	}
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	get isError() {
		return (this.flags & 4) > 0;
	}
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	is(e) {
		if (typeof e == "string") {
			if (this.name == e) return !0;
			let t = this.prop($.group);
			return t ? t.indexOf(e) > -1 : !1;
		}
		return this.id == e;
	}
	static match(e) {
		let t = Object.create(null);
		for (let n in e) for (let r of n.split(" ")) t[r] = e[n];
		return (e) => {
			for (let n = e.prop($.group), r = -1; r < (n ? n.length : 0); r++) {
				let i = t[r < 0 ? e.name : n[r]];
				if (i) return i;
			}
		};
	}
};
Hd.none = new Hd("", Object.create(null), 0, 8);
var Ud = /* @__PURE__ */ new WeakMap(), Wd = /* @__PURE__ */ new WeakMap(), Gd;
(function(e) {
	e[e.ExcludeBuffers = 1] = "ExcludeBuffers", e[e.IncludeAnonymous = 2] = "IncludeAnonymous", e[e.IgnoreMounts = 4] = "IgnoreMounts", e[e.IgnoreOverlays = 8] = "IgnoreOverlays", e[e.EnterBracketed = 16] = "EnterBracketed";
})(Gd ||= {});
var Kd = class e {
	constructor(e, t, n, r, i) {
		if (this.type = e, this.children = t, this.positions = n, this.length = r, this.props = null, i && i.length) {
			this.props = Object.create(null);
			for (let [e, t] of i) this.props[typeof e == "number" ? e : e.id] = t;
		}
	}
	toString() {
		let e = Bd.get(this);
		if (e && !e.overlay) return e.tree.toString();
		let t = "";
		for (let e of this.children) {
			let n = e.toString();
			n && (t && (t += ","), t += n);
		}
		return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (t.length ? "(" + t + ")" : "") : t;
	}
	cursor(e = 0) {
		return new sf(this.topNode, e);
	}
	cursorAt(e, t = 0, n = 0) {
		let r = new sf(Ud.get(this) || this.topNode);
		return r.moveTo(e, t), Ud.set(this, r._tree), r;
	}
	get topNode() {
		return new Qd(this, 0, 0, null);
	}
	resolve(e, t = 0) {
		let n = Xd(Ud.get(this) || this.topNode, e, t, !1);
		return Ud.set(this, n), n;
	}
	resolveInner(e, t = 0) {
		let n = Xd(Wd.get(this) || this.topNode, e, t, !0);
		return Wd.set(this, n), n;
	}
	resolveStack(e, t = 0) {
		return of(this, e, t);
	}
	iterate(e) {
		let { enter: t, leave: n, from: r = 0, to: i = this.length } = e, a = e.mode || 0, o = (a & Gd.IncludeAnonymous) > 0;
		for (let e = this.cursor(a | Gd.IncludeAnonymous);;) {
			let a = !1;
			if (e.from <= i && e.to >= r && (!o && e.type.isAnonymous || t(e) !== !1)) {
				if (e.firstChild()) continue;
				a = !0;
			}
			for (; a && n && (o || !e.type.isAnonymous) && n(e), !e.nextSibling();) {
				if (!e.parent()) return;
				a = !0;
			}
		}
	}
	prop(e) {
		return e.perNode ? this.props ? this.props[e.id] : void 0 : this.type.prop(e);
	}
	get propValues() {
		let e = [];
		if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
		return e;
	}
	balance(t = {}) {
		return this.children.length <= 8 ? this : ff(Hd.none, this.children, this.positions, 0, this.children.length, 0, this.length, (t, n, r) => new e(this.type, t, n, r, this.propValues), t.makeTree || ((t, n, r) => new e(Hd.none, t, n, r)));
	}
	static build(e) {
		return lf(e);
	}
};
Kd.empty = new Kd(Hd.none, [], [], 0);
var qd = class e {
	constructor(e, t) {
		this.buffer = e, this.index = t;
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new e(this.buffer, this.index);
	}
}, Jd = class e {
	constructor(e, t, n) {
		this.buffer = e, this.length = t, this.set = n;
	}
	get type() {
		return Hd.none;
	}
	toString() {
		let e = [];
		for (let t = 0; t < this.buffer.length;) e.push(this.childString(t)), t = this.buffer[t + 3];
		return e.join(",");
	}
	childString(e) {
		let t = this.buffer[e], n = this.buffer[e + 3], r = this.set.types[t], i = r.name;
		if (/\W/.test(i) && !r.isError && (i = JSON.stringify(i)), e += 4, n == e) return i;
		let a = [];
		for (; e < n;) a.push(this.childString(e)), e = this.buffer[e + 3];
		return i + "(" + a.join(",") + ")";
	}
	findChild(e, t, n, r, i) {
		let { buffer: a } = this, o = -1;
		for (let s = e; s != t && !(Yd(i, r, a[s + 1], a[s + 2]) && (o = s, n > 0)); s = a[s + 3]);
		return o;
	}
	slice(t, n, r) {
		let i = this.buffer, a = new Uint16Array(n - t), o = 0;
		for (let e = t, s = 0; e < n;) {
			a[s++] = i[e++], a[s++] = i[e++] - r;
			let n = a[s++] = i[e++] - r;
			a[s++] = i[e++] - t, o = Math.max(o, n);
		}
		return new e(a, o, this.set);
	}
};
function Yd(e, t, n, r) {
	switch (e) {
		case -2: return n < t;
		case -1: return r >= t && n < t;
		case 0: return n < t && r > t;
		case 1: return n <= t && r > t;
		case 2: return r > t;
		case 4: return !0;
	}
}
function Xd(e, t, n, r) {
	for (; e.from == e.to || (n < 1 ? e.from >= t : e.from > t) || (n > -1 ? e.to <= t : e.to < t);) {
		let t = !r && e instanceof Qd && e.index < 0 ? null : e.parent;
		if (!t) return e;
		e = t;
	}
	let i = r ? 0 : Gd.IgnoreOverlays;
	if (r) for (let r = e, a = r.parent; a; r = a, a = r.parent) r instanceof Qd && r.index < 0 && a.enter(t, n, i)?.from != r.from && (e = a);
	for (;;) {
		let r = e.enter(t, n, i);
		if (!r) return e;
		e = r;
	}
}
var Zd = class {
	cursor(e = 0) {
		return new sf(this, e);
	}
	getChild(e, t = null, n = null) {
		let r = $d(this, e, t, n);
		return r.length ? r[0] : null;
	}
	getChildren(e, t = null, n = null) {
		return $d(this, e, t, n);
	}
	resolve(e, t = 0) {
		return Xd(this, e, t, !1);
	}
	resolveInner(e, t = 0) {
		return Xd(this, e, t, !0);
	}
	matchContext(e) {
		return ef(this.parent, e);
	}
	enterUnfinishedNodesBefore(e) {
		let t = this.childBefore(e), n = this;
		for (; t;) {
			let e = t.lastChild;
			if (!e || e.to != t.to) break;
			e.type.isError && e.from == e.to ? (n = t, t = e.prevSibling) : t = e;
		}
		return n;
	}
	get node() {
		return this;
	}
	get next() {
		return this.parent;
	}
}, Qd = class e extends Zd {
	constructor(e, t, n, r) {
		super(), this._tree = e, this.from = t, this.index = n, this._parent = r;
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(t, n, r, i, a = 0) {
		for (let o = this;;) {
			for (let { children: s, positions: c } = o._tree, l = n > 0 ? s.length : -1; t != l; t += n) {
				let l = s[t], u = c[t] + o.from, d;
				if (!(!(a & Gd.EnterBracketed && l instanceof Kd && (d = Bd.get(l)) && !d.overlay && d.bracketed && r >= u && r <= u + l.length) && !Yd(i, r, u, u + l.length))) {
					if (l instanceof Jd) {
						if (a & Gd.ExcludeBuffers) continue;
						let e = l.findChild(0, l.buffer.length, n, r - u, i);
						if (e > -1) return new nf(new tf(o, l, t, u), null, e);
					} else if (a & Gd.IncludeAnonymous || !l.type.isAnonymous || cf(l)) {
						let s;
						if (!(a & Gd.IgnoreMounts) && (s = Bd.get(l)) && !s.overlay) return new e(s.tree, u, t, o);
						let c = new e(l, u, t, o);
						return a & Gd.IncludeAnonymous || !c.type.isAnonymous ? c : c.nextChild(n < 0 ? l.children.length - 1 : 0, n, r, i, a);
					}
				}
			}
			if (a & Gd.IncludeAnonymous || !o.type.isAnonymous || (t = o.index >= 0 ? o.index + n : n < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o)) return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(e) {
		return this.nextChild(0, 1, e, 2);
	}
	childBefore(e) {
		return this.nextChild(this._tree.children.length - 1, -1, e, -2);
	}
	prop(e) {
		return this._tree.prop(e);
	}
	enter(t, n, r = 0) {
		let i;
		if (!(r & Gd.IgnoreOverlays) && (i = Bd.get(this._tree)) && i.overlay) {
			let a = t - this.from, o = r & Gd.EnterBracketed && i.bracketed;
			for (let { from: t, to: r } of i.overlay) if ((n > 0 || o ? t <= a : t < a) && (n < 0 || o ? r >= a : r > a)) return new e(i.tree, i.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, t, n, r);
	}
	nextSignificantParent() {
		let e = this;
		for (; e.type.isAnonymous && e._parent;) e = e._parent;
		return e;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	toString() {
		return this._tree.toString();
	}
};
function $d(e, t, n, r) {
	let i = e.cursor(), a = [];
	if (!i.firstChild()) return a;
	if (n != null) {
		for (let e = !1; !e;) if (e = i.type.is(n), !i.nextSibling()) return a;
	}
	for (;;) {
		if (r != null && i.type.is(r)) return a;
		if (i.type.is(t) && a.push(i.node), !i.nextSibling()) return r == null ? a : [];
	}
}
function ef(e, t, n = t.length - 1) {
	for (let r = e; n >= 0; r = r.parent) {
		if (!r) return !1;
		if (!r.type.isAnonymous) {
			if (t[n] && t[n] != r.name) return !1;
			n--;
		}
	}
	return !0;
}
var tf = class {
	constructor(e, t, n, r) {
		this.parent = e, this.buffer = t, this.index = n, this.start = r;
	}
}, nf = class e extends Zd {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(e, t, n) {
		super(), this.context = e, this._parent = t, this.index = n, this.type = e.buffer.set.types[e.buffer.buffer[n]];
	}
	child(t, n, r) {
		let { buffer: i } = this.context, a = i.findChild(this.index + 4, i.buffer[this.index + 3], t, n - this.context.start, r);
		return a < 0 ? null : new e(this.context, this, a);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(e) {
		return this.child(1, e, 2);
	}
	childBefore(e) {
		return this.child(-1, e, -2);
	}
	prop(e) {
		return this.type.prop(e);
	}
	enter(t, n, r = 0) {
		if (r & Gd.ExcludeBuffers) return null;
		let { buffer: i } = this.context, a = i.findChild(this.index + 4, i.buffer[this.index + 3], n > 0 ? 1 : -1, t - this.context.start, n);
		return a < 0 ? null : new e(this.context, this, a);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(e) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
	}
	get nextSibling() {
		let { buffer: t } = this.context, n = t.buffer[this.index + 3];
		return n < (this._parent ? t.buffer[this._parent.index + 3] : t.buffer.length) ? new e(this.context, this._parent, n) : this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer: t } = this.context, n = this._parent ? this._parent.index + 4 : 0;
		return this.index == n ? this.externalSibling(-1) : new e(this.context, this._parent, t.findChild(n, this.index, -1, 0, 4));
	}
	get tree() {
		return null;
	}
	toTree() {
		let e = [], t = [], { buffer: n } = this.context, r = this.index + 4, i = n.buffer[this.index + 3];
		if (i > r) {
			let a = n.buffer[this.index + 1];
			e.push(n.slice(r, i, a)), t.push(0);
		}
		return new Kd(this.type, e, t, this.to - this.from);
	}
	toString() {
		return this.context.buffer.childString(this.index);
	}
};
function rf(e) {
	if (!e.length) return null;
	let t = 0, n = e[0];
	for (let r = 1; r < e.length; r++) {
		let i = e[r];
		(i.from > n.from || i.to < n.to) && (n = i, t = r);
	}
	let r = n instanceof Qd && n.index < 0 ? null : n.parent, i = e.slice();
	return r ? i[t] = r : i.splice(t, 1), new af(i, n);
}
var af = class {
	constructor(e, t) {
		this.heads = e, this.node = t;
	}
	get next() {
		return rf(this.heads);
	}
};
function of(e, t, n) {
	let r = e.resolveInner(t, n), i = null;
	for (let e = r instanceof Qd ? r : r.context.parent; e; e = e.parent) if (e.index < 0) {
		let a = e.parent;
		(i ||= [r]).push(a.resolve(t, n)), e = a;
	} else {
		let a = Bd.get(e.tree);
		if (a && a.overlay && a.overlay[0].from <= t && a.overlay[a.overlay.length - 1].to >= t) {
			let o = new Qd(a.tree, a.overlay[0].from + e.from, -1, e);
			(i ||= [r]).push(Xd(o, t, n, !1));
		}
	}
	return i ? rf(i) : r;
}
var sf = class {
	get name() {
		return this.type.name;
	}
	constructor(e, t = 0) {
		if (this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, this.mode = t & ~Gd.EnterBracketed, e instanceof Qd) this.yieldNode(e);
		else {
			this._tree = e.context.parent, this.buffer = e.context;
			for (let t = e._parent; t; t = t._parent) this.stack.unshift(t.index);
			this.bufferNode = e, this.yieldBuf(e.index);
		}
	}
	yieldNode(e) {
		return e ? (this._tree = e, this.type = e.type, this.from = e.from, this.to = e.to, !0) : !1;
	}
	yieldBuf(e, t) {
		this.index = e;
		let { start: n, buffer: r } = this.buffer;
		return this.type = t || r.set.types[r.buffer[e]], this.from = n + r.buffer[e + 1], this.to = n + r.buffer[e + 2], !0;
	}
	yield(e) {
		return e ? e instanceof Qd ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
	}
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
	}
	enterChild(e, t, n) {
		if (!this.buffer) return this.yield(this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, n, this.mode));
		let { buffer: r } = this.buffer, i = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, n);
		return i < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(i));
	}
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	childAfter(e) {
		return this.enterChild(1, e, 2);
	}
	childBefore(e) {
		return this.enterChild(-1, e, -2);
	}
	enter(e, t, n = this.mode) {
		return this.buffer ? n & Gd.ExcludeBuffers ? !1 : this.enterChild(1, e, t) : this.yield(this._tree.enter(e, t, n));
	}
	parent() {
		if (!this.buffer) return this.yieldNode(this.mode & Gd.IncludeAnonymous ? this._tree._parent : this._tree.parent);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let e = this.mode & Gd.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
		return this.buffer = null, this.yieldNode(e);
	}
	sibling(e) {
		if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)) : !1;
		let { buffer: t } = this.buffer, n = this.stack.length - 1;
		if (e < 0) {
			let e = n < 0 ? 0 : this.stack[n] + 4;
			if (this.index != e) return this.yieldBuf(t.findChild(e, this.index, -1, 0, 4));
		} else {
			let e = t.buffer[this.index + 3];
			if (e < (n < 0 ? t.buffer.length : t.buffer[this.stack[n] + 3])) return this.yieldBuf(e);
		}
		return n < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode));
	}
	nextSibling() {
		return this.sibling(1);
	}
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(e) {
		let t, n, { buffer: r } = this;
		if (r) {
			if (e > 0) {
				if (this.index < r.buffer.buffer.length) return !1;
			} else for (let e = 0; e < this.index; e++) if (r.buffer.buffer[e + 3] < this.index) return !1;
			({index: t, parent: n} = r);
		} else ({index: t, _parent: n} = this._tree);
		for (; n; {index: t, _parent: n} = n) if (t > -1) for (let r = t + e, i = e < 0 ? -1 : n._tree.children.length; r != i; r += e) {
			let e = n._tree.children[r];
			if (this.mode & Gd.IncludeAnonymous || e instanceof Jd || !e.type.isAnonymous || cf(e)) return !1;
		}
		return !0;
	}
	move(e, t) {
		if (t && this.enterChild(e, 0, 4)) return !0;
		for (;;) {
			if (this.sibling(e)) return !0;
			if (this.atLastNode(e) || !this.parent()) return !1;
		}
	}
	next(e = !0) {
		return this.move(1, e);
	}
	prev(e = !0) {
		return this.move(-1, e);
	}
	moveTo(e, t = 0) {
		for (; (this.from == this.to || (t < 1 ? this.from >= e : this.from > e) || (t > -1 ? this.to <= e : this.to < e)) && this.parent(););
		for (; this.enterChild(1, e, t););
		return this;
	}
	get node() {
		if (!this.buffer) return this._tree;
		let e = this.bufferNode, t = null, n = 0;
		if (e && e.context == this.buffer) scan: for (let r = this.index, i = this.stack.length; i >= 0;) {
			for (let a = e; a; a = a._parent) if (a.index == r) {
				if (r == this.index) return a;
				t = a, n = i + 1;
				break scan;
			}
			r = this.stack[--i];
		}
		for (let e = n; e < this.stack.length; e++) t = new nf(this.buffer, t, this.stack[e]);
		return this.bufferNode = new nf(this.buffer, t, this.index);
	}
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	iterate(e, t) {
		for (let n = 0;;) {
			let r = !1;
			if (this.type.isAnonymous || e(this) !== !1) {
				if (this.firstChild()) {
					n++;
					continue;
				}
				this.type.isAnonymous || (r = !0);
			}
			for (;;) {
				if (r && t && t(this), r = this.type.isAnonymous, !n) return;
				if (this.nextSibling()) break;
				this.parent(), n--, r = !0;
			}
		}
	}
	matchContext(e) {
		if (!this.buffer) return ef(this.node.parent, e);
		let { buffer: t } = this.buffer, { types: n } = t.set;
		for (let r = e.length - 1, i = this.stack.length - 1; r >= 0; i--) {
			if (i < 0) return ef(this._tree, e, r);
			let a = n[t.buffer[this.stack[i]]];
			if (!a.isAnonymous) {
				if (e[r] && e[r] != a.name) return !1;
				r--;
			}
		}
		return !0;
	}
};
function cf(e) {
	return e.children.some((e) => e instanceof Jd || !e.type.isAnonymous || cf(e));
}
function lf(e) {
	let { buffer: t, nodeSet: n, maxBufferLength: r = Ld, reused: i = [], minRepeatType: a = n.types.length } = e, o = Array.isArray(t) ? new qd(t, t.length) : t, s = n.types, c = 0, l = 0;
	function u(e, t, _, v, y, b) {
		let { id: x, start: S, end: C, size: w } = o, T = l, E = c;
		if (w < 0) {
			if (o.next(), w == -1) {
				let t = i[x];
				_.push(t), v.push(S - e);
				return;
			}
			if (w == -3) {
				c = x;
				return;
			}
			if (w == -4) {
				l = x;
				return;
			}
			throw RangeError(`Unrecognized record size: ${w}`);
		}
		let D = s[x], O, k, A = S - e;
		if (C - S <= r && (k = h(o.pos - t, y))) {
			let t = new Uint16Array(k.size - k.skip), r = o.pos - k.size, i = t.length;
			for (; o.pos > r;) i = g(k.start, t, i);
			O = new Jd(t, C - k.start, n), A = k.start - e;
		} else {
			let e = o.pos - w;
			o.next();
			let t = [], n = [], i = x >= a ? x : -1, s = 0, c = C;
			for (; o.pos > e;) i >= 0 && o.id == i && o.size >= 0 ? (o.end <= c - r && (p(t, n, S, s, o.end, c, i, T, E), s = t.length, c = o.end), o.next()) : b > 2500 ? d(S, e, t, n) : u(S, e, t, n, i, b + 1);
			if (i >= 0 && s > 0 && s < t.length && p(t, n, S, s, S, c, i, T, E), t.reverse(), n.reverse(), i > -1 && s > 0) {
				let e = f(D, E);
				O = ff(D, t, n, 0, t.length, 0, C - S, e, e);
			} else O = m(D, t, n, C - S, T - C, E);
		}
		_.push(O), v.push(A);
	}
	function d(e, t, i, a) {
		let s = [], c = 0, l = -1;
		for (; o.pos > t;) {
			let { id: e, start: t, end: n, size: i } = o;
			if (i > 4) o.next();
			else if (l > -1 && t < l) break;
			else l < 0 && (l = n - r), s.push(e, t, n), c++, o.next();
		}
		if (c) {
			let t = new Uint16Array(c * 4), r = s[s.length - 2];
			for (let e = s.length - 3, n = 0; e >= 0; e -= 3) t[n++] = s[e], t[n++] = s[e + 1] - r, t[n++] = s[e + 2] - r, t[n++] = n;
			i.push(new Jd(t, s[2] - r, n)), a.push(r - e);
		}
	}
	function f(e, t) {
		return (n, r, i) => {
			let a = 0, o = n.length - 1, s, c;
			if (o >= 0 && (s = n[o]) instanceof Kd) {
				if (!o && s.type == e && s.length == i) return s;
				(c = s.prop($.lookAhead)) && (a = r[o] + s.length + c);
			}
			return m(e, n, r, i, a, t);
		};
	}
	function p(e, t, r, i, a, o, s, c, l) {
		let u = [], d = [];
		for (; e.length > i;) u.push(e.pop()), d.push(t.pop() + r - a);
		e.push(m(n.types[s], u, d, o - a, c - o, l)), t.push(a - r);
	}
	function m(e, t, n, r, i, a, o) {
		if (a) {
			let e = [$.contextHash, a];
			o = o ? [e].concat(o) : [e];
		}
		if (i > 25) {
			let e = [$.lookAhead, i];
			o = o ? [e].concat(o) : [e];
		}
		return new Kd(e, t, n, r, o);
	}
	function h(e, t) {
		let n = o.fork(), i = 0, s = 0, c = 0, l = n.end - r, u = {
			size: 0,
			start: 0,
			skip: 0
		};
		scan: for (let r = n.pos - e; n.pos > r;) {
			let e = n.size;
			if (n.id == t && e >= 0) {
				u.size = i, u.start = s, u.skip = c, c += 4, i += 4, n.next();
				continue;
			}
			let o = n.pos - e;
			if (e < 0 || o < r || n.start < l) break;
			let d = n.id >= a ? 4 : 0, f = n.start;
			for (n.next(); n.pos > o;) {
				if (n.size < 0) if (n.size == -3 || n.size == -4) d += 4;
				else break scan;
				else n.id >= a && (d += 4);
				n.next();
			}
			s = f, i += e, c += d;
		}
		return (t < 0 || i == e) && (u.size = i, u.start = s, u.skip = c), u.size > 4 ? u : void 0;
	}
	function g(e, t, n) {
		let { id: r, start: i, end: s, size: u } = o;
		if (o.next(), u >= 0 && r < a) {
			let a = n;
			if (u > 4) {
				let r = o.pos - (u - 4);
				for (; o.pos > r;) n = g(e, t, n);
			}
			t[--n] = a, t[--n] = s - e, t[--n] = i - e, t[--n] = r;
		} else u == -3 ? c = r : u == -4 && (l = r);
		return n;
	}
	let _ = [], v = [];
	for (; o.pos > 0;) u(e.start || 0, e.bufferStart || 0, _, v, -1, 0);
	let y = e.length ?? (_.length ? v[0] + _[0].length : 0);
	return new Kd(s[e.topID], _.reverse(), v.reverse(), y);
}
var uf = /* @__PURE__ */ new WeakMap();
function df(e, t) {
	if (!e.isAnonymous || t instanceof Jd || t.type != e) return 1;
	let n = uf.get(t);
	if (n == null) {
		n = 1;
		for (let r of t.children) {
			if (r.type != e || !(r instanceof Kd)) {
				n = 1;
				break;
			}
			n += df(e, r);
		}
		uf.set(t, n);
	}
	return n;
}
function ff(e, t, n, r, i, a, o, s, c) {
	let l = 0;
	for (let n = r; n < i; n++) l += df(e, t[n]);
	let u = Math.ceil(l * 1.5 / 8), d = [], f = [];
	function p(t, n, r, i, o) {
		for (let s = r; s < i;) {
			let r = s, l = n[s], m = df(e, t[s]);
			for (s++; s < i; s++) {
				let n = df(e, t[s]);
				if (m + n >= u) break;
				m += n;
			}
			if (s == r + 1) {
				if (m > u) {
					let e = t[r];
					p(e.children, e.positions, 0, e.children.length, n[r] + o);
					continue;
				}
				d.push(t[r]);
			} else {
				let i = n[s - 1] + t[s - 1].length - l;
				d.push(ff(e, t, n, r, s, l, i, null, c));
			}
			f.push(l + o - a);
		}
	}
	return p(t, n, r, i, 0), (s || c)(d, f, o);
}
var pf = class e {
	constructor(e, t, n, r, i = !1, a = !1) {
		this.from = e, this.to = t, this.tree = n, this.offset = r, this.open = !!i | (a ? 2 : 0);
	}
	get openStart() {
		return (this.open & 1) > 0;
	}
	get openEnd() {
		return (this.open & 2) > 0;
	}
	static addTree(t, n = [], r = !1) {
		let i = [new e(0, t.length, t, 0, !1, r)];
		for (let e of n) e.to > t.length && i.push(e);
		return i;
	}
	static applyChanges(t, n, r = 128) {
		if (!n.length) return t;
		let i = [], a = 1, o = t.length ? t[0] : null;
		for (let s = 0, c = 0, l = 0;; s++) {
			let u = s < n.length ? n[s] : null, d = u ? u.fromA : 1e9;
			if (d - c >= r) for (; o && o.from < d;) {
				let n = o;
				if (c >= n.from || d <= n.to || l) {
					let t = Math.max(n.from, c) - l, r = Math.min(n.to, d) - l;
					n = t >= r ? null : new e(t, r, n.tree, n.offset + l, s > 0, !!u);
				}
				if (n && i.push(n), o.to > d) break;
				o = a < t.length ? t[a++] : null;
			}
			if (!u) break;
			c = u.toA, l = u.toA - u.toB;
		}
		return i;
	}
}, mf = class {
	startParse(e, t, n) {
		return typeof e == "string" && (e = new hf(e)), n = n ? n.length ? n.map((e) => new zd(e.from, e.to)) : [new zd(0, 0)] : [new zd(0, e.length)], this.createParse(e, t || [], n);
	}
	parse(e, t, n) {
		let r = this.startParse(e, t, n);
		for (;;) {
			let e = r.advance();
			if (e) return e;
		}
	}
}, hf = class {
	constructor(e) {
		this.string = e;
	}
	get length() {
		return this.string.length;
	}
	chunk(e) {
		return this.string.slice(e);
	}
	get lineChunks() {
		return !1;
	}
	read(e, t) {
		return this.string.slice(e, t);
	}
};
new $({ perNode: !0 });
//#endregion
//#region node_modules/.pnpm/@codemirror+language@6.12.4/node_modules/@codemirror/language/dist/index.js
var gf = /*@__PURE__*/ new $(), _f = /*@__PURE__*/ new $(), vf = class {
	constructor(e, t, n = [], r = "") {
		this.data = e, this.name = r, zr.prototype.hasOwnProperty("tree") || Object.defineProperty(zr.prototype, "tree", { get() {
			return bf(this);
		} }), this.parser = t, this.extension = [kf.of(this), zr.languageData.of((e, t, n) => {
			let r = yf(e, t, n), i = r.type.prop(gf);
			if (!i) return [];
			let a = e.facet(i), o = r.type.prop(_f);
			if (o) {
				let i = r.resolve(t - r.from, n);
				for (let t of o) if (t.test(i, e)) {
					let n = e.facet(t.facet);
					return t.type == "replace" ? n : n.concat(a);
				}
			}
			return a;
		})].concat(n);
	}
	isActiveAt(e, t, n = -1) {
		return yf(e, t, n).type.prop(gf) == this.data;
	}
	findRegions(e) {
		let t = e.facet(kf);
		if (t?.data == this.data) return [{
			from: 0,
			to: e.doc.length
		}];
		if (!t || !t.allowsNesting) return [];
		let n = [], r = (e, t) => {
			if (e.prop(gf) == this.data) {
				n.push({
					from: t,
					to: t + e.length
				});
				return;
			}
			let i = e.prop($.mounted);
			if (i) {
				if (i.tree.prop(gf) == this.data) {
					if (i.overlay) for (let e of i.overlay) n.push({
						from: e.from + t,
						to: e.to + t
					});
					else n.push({
						from: t,
						to: t + e.length
					});
					return;
				}
				if (i.overlay) {
					let e = n.length;
					if (r(i.tree, i.overlay[0].from + t), n.length > e) return;
				}
			}
			for (let n = 0; n < e.children.length; n++) {
				let i = e.children[n];
				i instanceof Kd && r(i, e.positions[n] + t);
			}
		};
		return r(bf(e), 0), n;
	}
	get allowsNesting() {
		return !0;
	}
};
vf.setState = /*@__PURE__*/ Y.define();
function yf(e, t, n) {
	let r = e.facet(kf), i = bf(e).topNode;
	if (!r || r.allowsNesting) for (let e = i; e; e = e.enter(t, n, Gd.ExcludeBuffers | Gd.EnterBracketed)) e.type.isTop && (i = e);
	return i;
}
function bf(e) {
	let t = e.field(vf.state, !1);
	return t ? t.tree : Kd.empty;
}
var xf = class {
	constructor(e) {
		this.doc = e, this.cursorPos = 0, this.string = "", this.cursor = e.iter();
	}
	get length() {
		return this.doc.length;
	}
	syncTo(e) {
		return this.string = this.cursor.next(e - this.cursorPos).value, this.cursorPos = e + this.string.length, this.cursorPos - this.string.length;
	}
	chunk(e) {
		return this.syncTo(e), this.string;
	}
	get lineChunks() {
		return !0;
	}
	read(e, t) {
		let n = this.cursorPos - this.string.length;
		return e < n || t >= this.cursorPos ? this.doc.sliceString(e, t) : this.string.slice(e - n, t - n);
	}
}, Sf = null, Cf = class e {
	constructor(e, t, n = [], r, i, a, o, s) {
		this.parser = e, this.state = t, this.fragments = n, this.tree = r, this.treeLen = i, this.viewport = a, this.skipped = o, this.scheduleOn = s, this.parse = null, this.tempSkipped = [];
	}
	static create(t, n, r) {
		return new e(t, n, [], Kd.empty, 0, r, [], null);
	}
	startParse() {
		return this.parser.startParse(new xf(this.state.doc), this.fragments);
	}
	work(e, t) {
		return t != null && t >= this.state.doc.length && (t = void 0), this.tree != Kd.empty && this.isDone(t ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
			if (typeof e == "number") {
				let t = Date.now() + e;
				e = () => Date.now() > t;
			}
			for (this.parse ||= this.startParse(), t != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > t) && t < this.state.doc.length && this.parse.stopAt(t);;) {
				let n = this.parse.advance();
				if (n) if (this.fragments = this.withoutTempSkipped(pf.addTree(n, this.fragments, this.parse.stoppedAt != null)), this.treeLen = this.parse.stoppedAt ?? this.state.doc.length, this.tree = n, this.parse = null, this.treeLen < (t ?? this.state.doc.length)) this.parse = this.startParse();
				else return !0;
				if (e()) return !1;
			}
		});
	}
	takeTree() {
		let e, t;
		this.parse && (e = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e), this.withContext(() => {
			for (; !(t = this.parse.advance()););
		}), this.treeLen = e, this.tree = t, this.fragments = this.withoutTempSkipped(pf.addTree(this.tree, this.fragments, !0)), this.parse = null);
	}
	withContext(e) {
		let t = Sf;
		Sf = this;
		try {
			return e();
		} finally {
			Sf = t;
		}
	}
	withoutTempSkipped(e) {
		for (let t; t = this.tempSkipped.pop();) e = wf(e, t.from, t.to);
		return e;
	}
	changes(t, n) {
		let { fragments: r, tree: i, treeLen: a, viewport: o, skipped: s } = this;
		if (this.takeTree(), !t.empty) {
			let e = [];
			if (t.iterChangedRanges((t, n, r, i) => e.push({
				fromA: t,
				toA: n,
				fromB: r,
				toB: i
			})), r = pf.applyChanges(r, e), i = Kd.empty, a = 0, o = {
				from: t.mapPos(o.from, -1),
				to: t.mapPos(o.to, 1)
			}, this.skipped.length) {
				s = [];
				for (let e of this.skipped) {
					let n = t.mapPos(e.from, 1), r = t.mapPos(e.to, -1);
					n < r && s.push({
						from: n,
						to: r
					});
				}
			}
		}
		return new e(this.parser, n, r, i, a, o, s, this.scheduleOn);
	}
	updateViewport(e) {
		if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
		this.viewport = e;
		let t = this.skipped.length;
		for (let t = 0; t < this.skipped.length; t++) {
			let { from: n, to: r } = this.skipped[t];
			n < e.to && r > e.from && (this.fragments = wf(this.fragments, n, r), this.skipped.splice(t--, 1));
		}
		return this.skipped.length >= t ? !1 : (this.reset(), !0);
	}
	reset() {
		this.parse &&= (this.takeTree(), null);
	}
	skipUntilInView(e, t) {
		this.skipped.push({
			from: e,
			to: t
		});
	}
	static getSkippingParser(e) {
		return new class extends mf {
			createParse(t, n, r) {
				let i = r[0].from, a = r[r.length - 1].to;
				return {
					parsedPos: i,
					advance() {
						let t = Sf;
						if (t) {
							for (let e of r) t.tempSkipped.push(e);
							e && (t.scheduleOn = t.scheduleOn ? Promise.all([t.scheduleOn, e]) : e);
						}
						return this.parsedPos = a, new Kd(Hd.none, [], [], a - i);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		}();
	}
	isDone(e) {
		e = Math.min(e, this.state.doc.length);
		let t = this.fragments;
		return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
	}
	static get() {
		return Sf;
	}
};
function wf(e, t, n) {
	return pf.applyChanges(e, [{
		fromA: t,
		toA: n,
		fromB: t,
		toB: n
	}]);
}
var Tf = class e {
	constructor(e) {
		this.context = e, this.tree = e.tree;
	}
	apply(t) {
		if (!t.docChanged && this.tree == this.context.tree) return this;
		let n = this.context.changes(t.changes, t.state), r = this.context.treeLen == t.startState.doc.length ? void 0 : Math.max(t.changes.mapPos(this.context.treeLen), n.viewport.to);
		return n.work(20, r) || n.takeTree(), new e(n);
	}
	static init(t) {
		let n = Math.min(3e3, t.doc.length), r = Cf.create(t.facet(kf).parser, t, {
			from: 0,
			to: n
		});
		return r.work(20, n) || r.takeTree(), new e(r);
	}
};
vf.state = /*@__PURE__*/ ir.define({
	create: Tf.init,
	update(e, t) {
		for (let e of t.effects) if (e.is(vf.setState)) return e.value;
		return t.startState.facet(kf) == t.state.facet(kf) ? e.apply(t) : Tf.init(t.state);
	}
});
var Ef = (e) => {
	let t = setTimeout(() => e(), 500);
	return () => clearTimeout(t);
};
typeof requestIdleCallback < "u" && (Ef = (e) => {
	let t = -1, n = setTimeout(() => {
		t = requestIdleCallback(e, { timeout: 400 });
	}, 100);
	return () => t < 0 ? clearTimeout(n) : cancelIdleCallback(t);
});
var Df = typeof navigator < "u" && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null, Of = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
	}
	update(e) {
		let t = this.view.state.field(vf.state).context;
		(t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(t);
	}
	scheduleWork() {
		if (this.working) return;
		let { state: e } = this.view, t = e.field(vf.state);
		(t.tree != t.context.tree || !t.context.isDone(e.doc.length)) && (this.working = Ef(this.work));
	}
	work(e) {
		this.working = null;
		let t = Date.now();
		if (this.chunkEnd < t && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = t + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
		let { state: n, viewport: { to: r } } = this.view, i = n.field(vf.state);
		if (i.tree == i.context.tree && i.context.isDone(r + 1e5)) return;
		let a = Date.now() + Math.min(this.chunkBudget, 100, e && !Df ? Math.max(25, e.timeRemaining() - 5) : 1e9), o = i.context.treeLen < r && n.doc.length > r + 1e3, s = i.context.work(() => Df && Df() || Date.now() > a, r + (o ? 0 : 1e5));
		this.chunkBudget -= Date.now() - t, (s || this.chunkBudget <= 0) && (i.context.takeTree(), this.view.dispatch({ effects: vf.setState.of(new Tf(i.context)) })), this.chunkBudget > 0 && !(s && !o) && this.scheduleWork(), this.checkAsyncSchedule(i.context);
	}
	checkAsyncSchedule(e) {
		e.scheduleOn &&= (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((e) => ao(this.view.state, e)).then(() => this.workScheduled--), null);
	}
	destroy() {
		this.working && this.working();
	}
	isWorking() {
		return !!(this.working || this.workScheduled > 0);
	}
}, { eventHandlers: { focus() {
	this.scheduleWork();
} } }), kf = /*@__PURE__*/ J.define({
	combine(e) {
		return e.length ? e[0] : null;
	},
	enables: (e) => [
		vf.state,
		Of,
		Q.contentAttributes.compute([e], (t) => {
			let n = t.facet(e);
			return n && n.name ? { "data-language": n.name } : {};
		})
	]
}), Af = /*@__PURE__*/ J.define(), jf = /*@__PURE__*/ J.define({ combine: (e) => {
	if (!e.length) return "  ";
	let t = e[0];
	if (!t || /\S/.test(t) || Array.from(t).some((e) => e != t[0])) throw Error("Invalid indent unit: " + JSON.stringify(e[0]));
	return t;
} });
function Mf(e) {
	let t = e.facet(jf);
	return t.charCodeAt(0) == 9 ? e.tabSize * t.length : t.length;
}
function Nf(e, t) {
	let n = "", r = e.tabSize, i = e.facet(jf)[0];
	if (i == "	") {
		for (; t >= r;) n += "	", t -= r;
		i = " ";
	}
	for (let e = 0; e < t; e++) n += i;
	return n;
}
function Pf(e, t) {
	e instanceof zr && (e = new Ff(e));
	for (let n of e.state.facet(Af)) {
		let r = n(e, t);
		if (r !== void 0) return r;
	}
	let n = bf(e.state);
	return n.length >= t ? Lf(e, n, t) : null;
}
var Ff = class {
	constructor(e, t = {}) {
		this.state = e, this.options = t, this.unit = Mf(e);
	}
	lineAt(e, t = 1) {
		let n = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: i } = this.options;
		return r != null && r >= n.from && r <= n.to ? i && r == e ? {
			text: "",
			from: e
		} : (t < 0 ? r < e : r <= e) ? {
			text: n.text.slice(r - n.from),
			from: r
		} : {
			text: n.text.slice(0, r - n.from),
			from: n.from
		} : n;
	}
	textAfterPos(e, t = 1) {
		if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
		let { text: n, from: r } = this.lineAt(e, t);
		return n.slice(e - r, Math.min(n.length, e + 100 - r));
	}
	column(e, t = 1) {
		let { text: n, from: r } = this.lineAt(e, t), i = this.countColumn(n, e - r), a = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
		return a > -1 && (i += a - this.countColumn(n, n.search(/\S|$/))), i;
	}
	countColumn(e, t = e.length) {
		return ai(e, this.state.tabSize, t);
	}
	lineIndent(e, t = 1) {
		let { text: n, from: r } = this.lineAt(e, t), i = this.options.overrideIndentation;
		if (i) {
			let e = i(r);
			if (e > -1) return e;
		}
		return this.countColumn(n, n.search(/\S|$/));
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
}, If = /*@__PURE__*/ new $();
function Lf(e, t, n) {
	let r = t.resolveStack(n), i = t.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
	if (i != r.node) {
		let e = [];
		for (let t = i; t && !(t.from < r.node.from || t.to > r.node.to || t.from == r.node.from && t.type == r.node.type); t = t.parent) e.push(t);
		for (let t = e.length - 1; t >= 0; t--) r = {
			node: e[t],
			next: r
		};
	}
	return Rf(r, e, n);
}
function Rf(e, t, n) {
	for (let r = e; r; r = r.next) {
		let e = Bf(r.node);
		if (e) return e(Hf.create(t, n, r));
	}
	return 0;
}
function zf(e) {
	return e.pos == e.options.simulateBreak && e.options.simulateDoubleBreak;
}
function Bf(e) {
	let t = e.type.prop(If);
	if (t) return t;
	let n = e.firstChild, r;
	if (n && (r = n.type.prop($.closedBy))) {
		let t = e.lastChild, n = t && r.indexOf(t.name) > -1;
		return (e) => Gf(e, !0, 1, void 0, n && !zf(e) ? t.from : void 0);
	}
	return e.parent == null ? Vf : null;
}
function Vf() {
	return 0;
}
var Hf = class e extends Ff {
	constructor(e, t, n) {
		super(e.state, e.options), this.base = e, this.pos = t, this.context = n;
	}
	get node() {
		return this.context.node;
	}
	static create(t, n, r) {
		return new e(t, n, r);
	}
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	get baseIndent() {
		return this.baseIndentFor(this.node);
	}
	baseIndentFor(e) {
		let t = this.state.doc.lineAt(e.from);
		for (;;) {
			let n = e.resolve(t.from);
			for (; n.parent && n.parent.from == n.from;) n = n.parent;
			if (Uf(n, e)) break;
			t = this.state.doc.lineAt(n.from);
		}
		return this.lineIndent(t.from);
	}
	continue() {
		return Rf(this.context.next, this.base, this.pos);
	}
};
function Uf(e, t) {
	for (let n = t; n; n = n.parent) if (e == n) return !0;
	return !1;
}
function Wf(e) {
	let t = e.node, n = t.childAfter(t.from), r = t.lastChild;
	if (!n) return null;
	let i = e.options.simulateBreak, a = e.state.doc.lineAt(n.from), o = i == null || i <= a.from ? a.to : Math.min(a.to, i);
	for (let e = n.to;;) {
		let i = t.childAfter(e);
		if (!i || i == r) return null;
		if (!i.type.isSkipped) {
			if (i.from >= o) return null;
			let e = /^ */.exec(a.text.slice(n.to - a.from))[0].length;
			return {
				from: n.from,
				to: n.to + e
			};
		}
		e = i.to;
	}
}
function Gf(e, t, n, r, i) {
	let a = e.textAfter, o = a.match(/^\s*/)[0].length, s = r && a.slice(o, o + r.length) == r || i == e.pos + o, c = t ? Wf(e) : null;
	return c ? s ? e.column(c.from) : e.column(c.to) : e.baseIndent + (s ? 0 : e.unit * n);
}
var Kf = 200;
function qf() {
	return zr.transactionFilter.of((e) => {
		if (!e.docChanged || !e.isUserEvent("input.type") && !e.isUserEvent("input.complete")) return e;
		let t = e.startState.languageDataAt("indentOnInput", e.startState.selection.main.head);
		if (!t.length) return e;
		let n = e.newDoc, { head: r } = e.newSelection.main, i = n.lineAt(r);
		if (r > i.from + Kf) return e;
		let a = n.sliceString(i.from, r);
		if (!t.some((e) => e.test(a))) return e;
		let { state: o } = e, s = -1, c = [];
		for (let { head: e } of o.selection.ranges) {
			let t = o.doc.lineAt(e);
			if (t.from == s) continue;
			s = t.from;
			let n = Pf(o, t.from);
			if (n == null) continue;
			let r = /^\s*/.exec(t.text)[0], i = Nf(o, n);
			r != i && c.push({
				from: t.from,
				to: t.from + r.length,
				insert: i
			});
		}
		return c.length ? [e, {
			changes: c,
			sequential: !0
		}] : e;
	});
}
var Jf = /*@__PURE__*/ J.define(), Yf = /*@__PURE__*/ new $();
function Xf(e, t, n) {
	let r = bf(e);
	if (r.length < n) return null;
	let i = r.resolveStack(n, 1), a = null;
	for (let o = i; o; o = o.next) {
		let i = o.node;
		if (i.to <= n || i.from > n) continue;
		if (a && i.from < t) break;
		let s = i.type.prop(Yf);
		if (s && (i.to < r.length - 50 || r.length == e.doc.length || !Zf(i))) {
			let r = s(i, e);
			r && r.from <= n && r.from >= t && r.to > n && (a = r);
		}
	}
	return a;
}
function Zf(e) {
	let t = e.lastChild;
	return t && t.to == e.to && t.type.isError;
}
function Qf(e, t, n) {
	for (let r of e.facet(Jf)) {
		let i = r(e, t, n);
		if (i) return i;
	}
	return Xf(e, t, n);
}
function $f(e, t) {
	let n = t.mapPos(e.from, 1), r = t.mapPos(e.to, -1);
	return n >= r ? void 0 : {
		from: n,
		to: r
	};
}
var ep = /*@__PURE__*/ Y.define({ map: $f }), tp = /*@__PURE__*/ Y.define({ map: $f });
function np(e) {
	let t = [];
	for (let { head: n } of e.state.selection.ranges) t.some((e) => e.from <= n && e.to >= n) || t.push(e.lineBlockAt(n));
	return t;
}
var rp = /*@__PURE__*/ ir.define({
	create() {
		return Z.none;
	},
	update(e, t) {
		t.isUserEvent("delete") && t.changes.iterChangedRanges((t, n) => e = ip(e, t, n)), e = e.map(t.changes);
		let n = [];
		for (let r of t.effects) r.is(ep) && !op(e, r.value.from, r.value.to) ? n.push(r.value) : r.is(tp) && (e = e.update({
			filter: (e, t) => r.value.from != e || r.value.to != t,
			filterFrom: r.value.from,
			filterTo: r.value.to
		}));
		if (n.length) {
			let { preparePlaceholder: r } = t.state.facet(pp), i = n.map((e) => (r ? Z.replace({ widget: new _p(r(t.state, e)) }) : gp).range(e.from, e.to));
			e = e.update({ add: i });
		}
		return t.selection && (e = ip(e, t.selection.main.head)), e;
	},
	provide: (e) => Q.decorations.from(e),
	toJSON(e, t) {
		let n = [];
		return e.between(0, t.doc.length, (e, t) => {
			n.push(e, t);
		}), n;
	},
	fromJSON(e) {
		if (!Array.isArray(e) || e.length % 2) throw RangeError("Invalid JSON for fold state");
		let t = [];
		for (let n = 0; n < e.length;) {
			let r = e[n++], i = e[n++];
			if (typeof r != "number" || typeof i != "number") throw RangeError("Invalid JSON for fold state");
			t.push(gp.range(r, i));
		}
		return Z.set(t, !0);
	}
});
function ip(e, t, n = t) {
	let r = !1;
	return e.between(t, n, (e, i) => {
		e < n && i > t && (r = !0);
	}), r ? e.update({
		filterFrom: t,
		filterTo: n,
		filter: (e, r) => e >= n || r <= t
	}) : e;
}
function ap(e, t, n) {
	var r;
	let i = null;
	return (r = e.field(rp, !1)) == null || r.between(t, n, (e, t) => {
		(!i || i.from > e) && (i = {
			from: e,
			to: t
		});
	}), i;
}
function op(e, t, n) {
	let r = !1;
	return e.between(t, t, (e, i) => {
		e == t && i == n && (r = !0);
	}), r;
}
function sp(e, t) {
	return e.field(rp, !1) ? t : t.concat(Y.appendConfig.of(mp()));
}
var cp = (e) => {
	for (let t of np(e)) {
		let n = Qf(e.state, t.from, t.to);
		if (n) return e.dispatch({ effects: sp(e.state, [ep.of(n), up(e, n)]) }), !0;
	}
	return !1;
}, lp = (e) => {
	if (!e.state.field(rp, !1)) return !1;
	let t = [];
	for (let n of np(e)) {
		let r = ap(e.state, n.from, n.to);
		r && t.push(tp.of(r), up(e, r, !1));
	}
	return t.length && e.dispatch({ effects: t }), t.length > 0;
};
function up(e, t, n = !0) {
	let r = e.state.doc.lineAt(t.from).number, i = e.state.doc.lineAt(t.to).number;
	return Q.announce.of(`${e.state.phrase(n ? "Folded lines" : "Unfolded lines")} ${r} ${e.state.phrase("to")} ${i}.`);
}
var dp = [
	{
		key: "Ctrl-Shift-[",
		mac: "Cmd-Alt-[",
		run: cp
	},
	{
		key: "Ctrl-Shift-]",
		mac: "Cmd-Alt-]",
		run: lp
	},
	{
		key: "Ctrl-Alt-[",
		run: (e) => {
			let { state: t } = e, n = [];
			for (let r = 0; r < t.doc.length;) {
				let i = e.lineBlockAt(r), a = Qf(t, i.from, i.to);
				a && n.push(ep.of(a)), r = (a ? e.lineBlockAt(a.to) : i).to + 1;
			}
			return n.length && e.dispatch({ effects: sp(e.state, n) }), !!n.length;
		}
	},
	{
		key: "Ctrl-Alt-]",
		run: (e) => {
			let t = e.state.field(rp, !1);
			if (!t || !t.size) return !1;
			let n = [];
			return t.between(0, e.state.doc.length, (e, t) => {
				n.push(tp.of({
					from: e,
					to: t
				}));
			}), e.dispatch({ effects: n }), !0;
		}
	}
], fp = {
	placeholderDOM: null,
	preparePlaceholder: null,
	placeholderText: "…"
}, pp = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, fp);
} });
function mp(e) {
	let t = [rp, xp];
	return e && t.push(pp.of(e)), t;
}
function hp(e, t) {
	let { state: n } = e, r = n.facet(pp), i = (t) => {
		let n = e.lineBlockAt(e.posAtDOM(t.target)), r = ap(e.state, n.from, n.to);
		r && e.dispatch({ effects: tp.of(r) }), t.preventDefault();
	};
	if (r.placeholderDOM) return r.placeholderDOM(e, i, t);
	let a = document.createElement("span");
	return a.textContent = r.placeholderText, a.setAttribute("aria-label", n.phrase("folded code")), a.title = n.phrase("unfold"), a.className = "cm-foldPlaceholder", a.onclick = i, a;
}
var gp = /*@__PURE__*/ Z.replace({ widget: /*@__PURE__*/ new class extends Bi {
	toDOM(e) {
		return hp(e, null);
	}
}() }), _p = class extends Bi {
	constructor(e) {
		super(), this.value = e;
	}
	eq(e) {
		return this.value == e.value;
	}
	toDOM(e) {
		return hp(e, this.value);
	}
}, vp = {
	openText: "⌄",
	closedText: "›",
	markerDOM: null,
	domEventHandlers: {},
	foldingChanged: () => !1
}, yp = class extends dd {
	constructor(e, t) {
		super(), this.config = e, this.open = t;
	}
	eq(e) {
		return this.config == e.config && this.open == e.open;
	}
	toDOM(e) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let t = document.createElement("span");
		return t.textContent = this.open ? this.config.openText : this.config.closedText, t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line"), t;
	}
};
function bp(e = {}) {
	let t = {
		...vp,
		...e
	}, n = new yp(t, !0), r = new yp(t, !1), i = lo.fromClass(class {
		constructor(e) {
			this.from = e.viewport.from, this.markers = this.buildMarkers(e);
		}
		update(e) {
			(e.docChanged || e.viewportChanged || e.startState.facet(kf) != e.state.facet(kf) || e.startState.field(rp, !1) != e.state.field(rp, !1) || bf(e.startState) != bf(e.state) || t.foldingChanged(e)) && (this.markers = this.buildMarkers(e.view));
		}
		buildMarkers(e) {
			let t = new Jr();
			for (let i of e.viewportLineBlocks) {
				let a = ap(e.state, i.from, i.to) ? r : Qf(e.state, i.from, i.to) ? n : null;
				a && t.add(i.from, i.from, a);
			}
			return t.finish();
		}
	}), { domEventHandlers: a } = t;
	return [
		i,
		gd({
			class: "cm-foldGutter",
			markers(e) {
				return e.plugin(i)?.markers || Kr.empty;
			},
			initialSpacer() {
				return new yp(t, !1);
			},
			domEventHandlers: {
				...a,
				click: (e, t, n) => {
					if (a.click && a.click(e, t, n)) return !0;
					let r = ap(e.state, t.from, t.to);
					if (r) return e.dispatch({ effects: tp.of(r) }), !0;
					let i = Qf(e.state, t.from, t.to);
					return i ? (e.dispatch({ effects: ep.of(i) }), !0) : !1;
				}
			}
		}),
		mp()
	];
}
var xp = /*@__PURE__*/ Q.baseTheme({
	".cm-foldPlaceholder": {
		backgroundColor: "#eee",
		border: "1px solid #ddd",
		color: "#888",
		borderRadius: ".2em",
		margin: "0 1px",
		padding: "0 1px",
		cursor: "pointer"
	},
	".cm-foldGutter span": {
		padding: "0 1px",
		cursor: "pointer"
	}
}), Sp = class e {
	constructor(e, t) {
		this.specs = e;
		let n;
		function r(e) {
			let t = di.newName();
			return (n ||= Object.create(null))["." + t] = e, t;
		}
		let i = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0, a = t.scope;
		this.scope = a instanceof vf ? (e) => e.prop(gf) == a.data : a ? (e) => e == a : void 0, this.style = be(e.map((e) => ({
			tag: e.tag,
			class: e.class || r(Object.assign({}, e, { tag: null }))
		})), { all: i }).style, this.module = n ? new di(n) : null, this.themeType = t.themeType;
	}
	static define(t, n) {
		return new e(t, n || {});
	}
}, Cp = /*@__PURE__*/ J.define(), wp = /*@__PURE__*/ J.define({ combine(e) {
	return e.length ? [e[0]] : null;
} });
function Tp(e) {
	let t = e.facet(Cp);
	return t.length ? t : e.facet(wp);
}
function Ep(e, t) {
	let n = [Op], r;
	return e instanceof Sp && (e.module && n.push(Q.styleModule.of(e.module)), r = e.themeType), t?.fallback ? n.push(wp.of(e)) : r ? n.push(Cp.computeN([Q.darkTheme], (t) => t.facet(Q.darkTheme) == (r == "dark") ? [e] : [])) : n.push(Cp.of(e)), n;
}
var Dp = class {
	constructor(e) {
		this.markCache = Object.create(null), this.tree = bf(e.state), this.decorations = this.buildDeco(e, Tp(e.state)), this.decoratedTo = e.viewport.to;
	}
	update(e) {
		let t = bf(e.state), n = Tp(e.state), r = n != Tp(e.startState), { viewport: i } = e.view, a = e.changes.mapPos(this.decoratedTo, 1);
		t.length < i.to && !r && t.type == this.tree.type && a >= i.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = a) : (t != this.tree || e.viewportChanged || r) && (this.tree = t, this.decorations = this.buildDeco(e.view, n), this.decoratedTo = i.to);
	}
	buildDeco(e, t) {
		if (!t || !this.tree.length) return Z.none;
		let n = new Jr();
		for (let { from: r, to: i } of e.visibleRanges) ve(this.tree, t, (e, t, r) => {
			n.add(e, t, this.markCache[r] || (this.markCache[r] = Z.mark({ class: r })));
		}, r, i);
		return n.finish();
	}
}, Op = /*@__PURE__*/ sr.high(/*@__PURE__*/ lo.fromClass(Dp, { decorations: (e) => e.decorations })), kp = /*@__PURE__*/ Sp.define([
	{
		tag: U.meta,
		color: "#404740"
	},
	{
		tag: U.link,
		textDecoration: "underline"
	},
	{
		tag: U.heading,
		textDecoration: "underline",
		fontWeight: "bold"
	},
	{
		tag: U.emphasis,
		fontStyle: "italic"
	},
	{
		tag: U.strong,
		fontWeight: "bold"
	},
	{
		tag: U.strikethrough,
		textDecoration: "line-through"
	},
	{
		tag: U.keyword,
		color: "#708"
	},
	{
		tag: [
			U.atom,
			U.bool,
			U.url,
			U.contentSeparator,
			U.labelName
		],
		color: "#219"
	},
	{
		tag: [U.literal, U.inserted],
		color: "#164"
	},
	{
		tag: [U.string, U.deleted],
		color: "#a11"
	},
	{
		tag: [
			U.regexp,
			U.escape,
			/*@__PURE__*/ U.special(U.string)
		],
		color: "#e40"
	},
	{
		tag: /*@__PURE__*/ U.definition(U.variableName),
		color: "#00f"
	},
	{
		tag: /*@__PURE__*/ U.local(U.variableName),
		color: "#30a"
	},
	{
		tag: [U.typeName, U.namespace],
		color: "#085"
	},
	{
		tag: U.className,
		color: "#167"
	},
	{
		tag: [/*@__PURE__*/ U.special(U.variableName), U.macroName],
		color: "#256"
	},
	{
		tag: /*@__PURE__*/ U.definition(U.propertyName),
		color: "#00c"
	},
	{
		tag: U.comment,
		color: "#940"
	},
	{
		tag: U.invalid,
		color: "#f00"
	}
]), Ap = /*@__PURE__*/ Q.baseTheme({
	"&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
	"&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" }
}), jp = 1e4, Mp = "()[]{}", Np = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		afterCursor: !0,
		brackets: Mp,
		maxScanDistance: jp,
		renderMatch: Ip
	});
} }), Pp = /*@__PURE__*/ Z.mark({ class: "cm-matchingBracket" }), Fp = /*@__PURE__*/ Z.mark({ class: "cm-nonmatchingBracket" });
function Ip(e) {
	let t = [], n = e.matched ? Pp : Fp;
	return t.push(n.range(e.start.from, e.start.to)), e.end && t.push(n.range(e.end.from, e.end.to)), t;
}
function Lp(e) {
	let t = [], n = e.facet(Np);
	for (let r of e.selection.ranges) {
		if (!r.empty) continue;
		let i = Up(e, r.head, -1, n) || r.head > 0 && Up(e, r.head - 1, 1, n) || n.afterCursor && (Up(e, r.head, 1, n) || r.head < e.doc.length && Up(e, r.head + 1, -1, n));
		i && (t = t.concat(n.renderMatch(i, e)));
	}
	return Z.set(t, !0);
}
var Rp = [/* @__PURE__ */ lo.fromClass(class {
	constructor(e) {
		this.paused = !1, this.decorations = Lp(e.state);
	}
	update(e) {
		(e.docChanged || e.selectionSet || this.paused) && (e.view.composing ? (this.decorations = this.decorations.map(e.changes), this.paused = !0) : (this.decorations = Lp(e.state), this.paused = !1));
	}
}, { decorations: (e) => e.decorations }), Ap];
function zp(e = {}) {
	return [Np.of(e), Rp];
}
var Bp = /*@__PURE__*/ new $();
function Vp(e, t, n) {
	let r = e.prop(t < 0 ? $.openedBy : $.closedBy);
	if (r) return r;
	if (e.name.length == 1) {
		let r = n.indexOf(e.name);
		if (r > -1 && r % 2 == +(t < 0)) return [n[r + t]];
	}
	return null;
}
function Hp(e) {
	let t = e.type.prop(Bp);
	return t ? t(e.node) : e;
}
function Up(e, t, n, r = {}) {
	let i = r.maxScanDistance || jp, a = r.brackets || Mp, o = bf(e), s = o.resolveInner(t, n);
	for (let r = s; r; r = r.parent) {
		let i = Vp(r.type, n, a);
		if (i && r.from < r.to) {
			let o = Hp(r);
			if (o && (n > 0 ? t >= o.from && t < o.to : t > o.from && t <= o.to)) return Wp(e, t, n, r, o, i, a);
		}
	}
	return Gp(e, t, n, o, s.type, i, a);
}
function Wp(e, t, n, r, i, a, o) {
	let s = r.parent, c = {
		from: i.from,
		to: i.to
	}, l = 0, u = s?.cursor();
	if (u && (n < 0 ? u.childBefore(r.from) : u.childAfter(r.to))) do
		if (n < 0 ? u.to <= r.from : u.from >= r.to) {
			if (l == 0 && a.indexOf(u.type.name) > -1 && u.from < u.to) {
				let e = Hp(u);
				return {
					start: c,
					end: e ? {
						from: e.from,
						to: e.to
					} : void 0,
					matched: !0
				};
			}
			if (Vp(u.type, n, o)) l++;
			else if (Vp(u.type, -n, o)) {
				if (l == 0) {
					let e = Hp(u);
					return {
						start: c,
						end: e && e.from < e.to ? {
							from: e.from,
							to: e.to
						} : void 0,
						matched: !1
					};
				}
				l--;
			}
		}
	while (n < 0 ? u.prevSibling() : u.nextSibling());
	return {
		start: c,
		matched: !1
	};
}
function Gp(e, t, n, r, i, a, o) {
	if (n < 0 ? !t : t == e.doc.length) return null;
	let s = n < 0 ? e.sliceDoc(t - 1, t) : e.sliceDoc(t, t + 1), c = o.indexOf(s);
	if (c < 0 || c % 2 == 0 != n > 0) return null;
	let l = {
		from: n < 0 ? t - 1 : t,
		to: n > 0 ? t + 1 : t
	}, u = e.doc.iterRange(t, n > 0 ? e.doc.length : 0), d = 0;
	for (let e = 0; !u.next().done && e <= a;) {
		let a = u.value;
		n < 0 && (e += a.length);
		let s = t + e * n;
		for (let e = n > 0 ? 0 : a.length - 1, t = n > 0 ? a.length : -1; e != t; e += n) {
			let t = o.indexOf(a[e]);
			if (!(t < 0 || r.resolveInner(s + e, 1).type != i)) if (t % 2 == 0 == n > 0) d++;
			else if (d == 1) return {
				start: l,
				end: {
					from: s + e,
					to: s + e + 1
				},
				matched: t >> 1 == c >> 1
			};
			else d--;
		}
		n > 0 && (e += a.length);
	}
	return u.done ? {
		start: l,
		matched: !1
	} : null;
}
var Kp = /*@__PURE__*/ Object.create(null), qp = [Hd.none], Jp = [], Yp = /*@__PURE__*/ Object.create(null), Xp = /*@__PURE__*/ Object.create(null);
for (let [e, t] of [
	["variable", "variableName"],
	["variable-2", "variableName.special"],
	["string-2", "string.special"],
	["def", "variableName.definition"],
	["tag", "tagName"],
	["attribute", "attributeName"],
	["type", "typeName"],
	["builtin", "variableName.standard"],
	["qualifier", "modifier"],
	["error", "invalid"],
	["header", "heading"],
	["property", "propertyName"]
]) Xp[e] = /*@__PURE__*/ Qp(Kp, t);
function Zp(e, t) {
	Jp.indexOf(e) > -1 || (Jp.push(e), console.warn(t));
}
function Qp(e, t) {
	let n = [];
	for (let r of t.split(" ")) {
		let t = [];
		for (let n of r.split(".")) {
			let r = e[n] || U[n];
			r ? typeof r == "function" ? t.length ? t = t.map(r) : Zp(n, `Modifier ${n} used at start of tag`) : t.length ? Zp(n, `Tag ${n} used as modifier`) : t = Array.isArray(r) ? r : [r] : Zp(n, `Unknown highlighting tag ${n}`);
		}
		for (let e of t) n.push(e);
	}
	if (!n.length) return 0;
	let r = t.replace(/ /g, "_"), i = r + " " + n.map((e) => e.id), a = Yp[i];
	if (a) return a.id;
	let o = Yp[i] = Hd.define({
		id: qp.length,
		name: r,
		props: [ye({ [r]: n })]
	});
	return qp.push(o), o.id;
}
xa.RTL, xa.LTR;
//#endregion
//#region node_modules/.pnpm/@codemirror+commands@6.10.4/node_modules/@codemirror/commands/dist/index.js
var $p = (e) => {
	let { state: t } = e, n = t.doc.lineAt(t.selection.main.from), r = im(e.state, n.from);
	return r.line ? tm(e) : r.block ? rm(e) : !1;
};
function em(e, t) {
	return ({ state: n, dispatch: r }) => {
		if (n.readOnly) return !1;
		let i = e(t, n);
		return i ? (r(n.update(i)), !0) : !1;
	};
}
var tm = /*@__PURE__*/ em(lm, 0), nm = /*@__PURE__*/ em(cm, 0), rm = /*@__PURE__*/ em((e, t) => cm(e, t, sm(t)), 0);
function im(e, t) {
	let n = e.languageDataAt("commentTokens", t, 1);
	return n.length ? n[0] : {};
}
var am = 50;
function om(e, { open: t, close: n }, r, i) {
	let a = e.sliceDoc(r - am, r), o = e.sliceDoc(i, i + am), s = /\s*$/.exec(a)[0].length, c = /^\s*/.exec(o)[0].length, l = a.length - s;
	if (a.slice(l - t.length, l) == t && o.slice(c, c + n.length) == n) return {
		open: {
			pos: r - s,
			margin: s && 1
		},
		close: {
			pos: i + c,
			margin: c && 1
		}
	};
	let u, d;
	i - r <= 100 ? u = d = e.sliceDoc(r, i) : (u = e.sliceDoc(r, r + am), d = e.sliceDoc(i - am, i));
	let f = /^\s*/.exec(u)[0].length, p = /\s*$/.exec(d)[0].length, m = d.length - p - n.length;
	return u.slice(f, f + t.length) == t && d.slice(m, m + n.length) == n ? {
		open: {
			pos: r + f + t.length,
			margin: +!!/\s/.test(u.charAt(f + t.length))
		},
		close: {
			pos: i - p - n.length,
			margin: +!!/\s/.test(d.charAt(m - 1))
		}
	} : null;
}
function sm(e) {
	let t = [];
	for (let n of e.selection.ranges) {
		let r = e.doc.lineAt(n.from), i = n.to <= r.to ? r : e.doc.lineAt(n.to);
		i.from > r.from && i.from == n.to && (i = n.to == r.to + 1 ? r : e.doc.lineAt(n.to - 1));
		let a = t.length - 1;
		a >= 0 && t[a].to > r.from ? t[a].to = i.to : t.push({
			from: r.from + /^\s*/.exec(r.text)[0].length,
			to: i.to
		});
	}
	return t;
}
function cm(e, t, n = t.selection.ranges) {
	let r = n.map((e) => im(t, e.from).block);
	if (!r.every((e) => e)) return null;
	let i = n.map((e, n) => om(t, r[n], e.from, e.to));
	if (e != 2 && !i.every((e) => e)) return { changes: t.changes(n.map((e, t) => i[t] ? [] : [{
		from: e.from,
		insert: r[t].open + " "
	}, {
		from: e.to,
		insert: " " + r[t].close
	}])) };
	if (e != 1 && i.some((e) => e)) {
		let e = [];
		for (let t = 0, n; t < i.length; t++) if (n = i[t]) {
			let i = r[t], { open: a, close: o } = n;
			e.push({
				from: a.pos - i.open.length,
				to: a.pos + a.margin
			}, {
				from: o.pos - o.margin,
				to: o.pos + i.close.length
			});
		}
		return { changes: e };
	}
	return null;
}
function lm(e, t, n = t.selection.ranges) {
	let r = [], i = -1;
	ranges: for (let { from: e, to: a } of n) {
		let n = r.length, o = 1e9, s;
		for (let n = e; n <= a;) {
			let c = t.doc.lineAt(n);
			if (s == null && (s = im(t, c.from).line, !s)) continue ranges;
			if (c.from > i && (e == a || a > c.from)) {
				i = c.from;
				let e = /^\s*/.exec(c.text)[0].length, t = e == c.length, n = c.text.slice(e, e + s.length) == s ? e : -1;
				e < c.text.length && e < o && (o = e), r.push({
					line: c,
					comment: n,
					token: s,
					indent: e,
					empty: t,
					single: !1
				});
			}
			n = c.to + 1;
		}
		if (o < 1e9) for (let e = n; e < r.length; e++) r[e].indent < r[e].line.text.length && (r[e].indent = o);
		r.length == n + 1 && (r[n].single = !0);
	}
	if (e != 2 && r.some((e) => e.comment < 0 && (!e.empty || e.single))) {
		let e = [];
		for (let { line: t, token: n, indent: i, empty: a, single: o } of r) (o || !a) && e.push({
			from: t.from + i,
			insert: n + " "
		});
		let n = t.changes(e);
		return {
			changes: n,
			selection: t.selection.map(n, 1)
		};
	}
	if (e != 1 && r.some((e) => e.comment >= 0)) {
		let e = [];
		for (let { line: t, comment: n, token: i } of r) if (n >= 0) {
			let r = t.from + n, a = r + i.length;
			t.text[a - t.from] == " " && a++, e.push({
				from: r,
				to: a
			});
		}
		return { changes: e };
	}
	return null;
}
var um = /*@__PURE__*/ Sr.define(), dm = /*@__PURE__*/ Sr.define(), fm = /*@__PURE__*/ J.define(), pm = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (e, t) => t
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r)
	});
} }), mm = /*@__PURE__*/ ir.define({
	create() {
		return Nm.empty;
	},
	update(e, t) {
		let n = t.state.facet(pm), r = t.annotation(um);
		if (r) {
			let i = xm.fromTransaction(t, r.selection), a = r.side, o = a == 0 ? e.undone : e.done;
			return o = i ? Sm(o, o.length, n.minDepth, i) : Om(o, t.startState.selection), new Nm(a == 0 ? r.rest : o, a == 0 ? o : r.rest);
		}
		let i = t.annotation(dm);
		if ((i == "full" || i == "before") && (e = e.isolate()), t.annotation(Tr.addToHistory) === !1) return t.changes.empty ? e : e.addMapping(t.changes.desc);
		let a = xm.fromTransaction(t), o = t.annotation(Tr.time), s = t.annotation(Tr.userEvent);
		return a ? e = e.addChanges(a, o, s, n, t) : t.selection && (e = e.addSelection(t.startState.selection, o, s, n.newGroupDelay)), (i == "full" || i == "after") && (e = e.isolate()), e;
	},
	toJSON(e) {
		return {
			done: e.done.map((e) => e.toJSON()),
			undone: e.undone.map((e) => e.toJSON())
		};
	},
	fromJSON(e) {
		return new Nm(e.done.map(xm.fromJSON), e.undone.map(xm.fromJSON));
	}
});
function hm(e = {}) {
	return [
		mm,
		pm.of(e),
		Q.domEventHandlers({ beforeinput(e, t) {
			let n = e.inputType == "historyUndo" ? _m : e.inputType == "historyRedo" ? vm : null;
			return n ? (e.preventDefault(), n(t)) : !1;
		} })
	];
}
function gm(e, t) {
	return function({ state: n, dispatch: r }) {
		if (!t && n.readOnly) return !1;
		let i = n.field(mm, !1);
		if (!i) return !1;
		let a = i.pop(e, n, t);
		return a ? (r(a), !0) : !1;
	};
}
var _m = /*@__PURE__*/ gm(0, !1), vm = /*@__PURE__*/ gm(1, !1), ym = /*@__PURE__*/ gm(0, !0), bm = /*@__PURE__*/ gm(1, !0), xm = class e {
	constructor(e, t, n, r, i) {
		this.changes = e, this.effects = t, this.mapped = n, this.startSelection = r, this.selectionsAfter = i;
	}
	setSelAfter(t) {
		return new e(this.changes, this.effects, this.mapped, this.startSelection, t);
	}
	toJSON() {
		return {
			changes: this.changes?.toJSON(),
			mapped: this.mapped?.toJSON(),
			startSelection: this.startSelection?.toJSON(),
			selectionsAfter: this.selectionsAfter.map((e) => e.toJSON())
		};
	}
	static fromJSON(t) {
		return new e(t.changes && Hn.fromJSON(t.changes), [], t.mapped && Vn.fromJSON(t.mapped), t.startSelection && q.fromJSON(t.startSelection), t.selectionsAfter.map(q.fromJSON));
	}
	static fromTransaction(t, n) {
		let r = Em;
		for (let e of t.startState.facet(fm)) {
			let n = e(t);
			n.length && (r = r.concat(n));
		}
		return !r.length && t.changes.empty ? null : new e(t.changes.invert(t.startState.doc), r, void 0, n || t.startState.selection, Em);
	}
	static selection(t) {
		return new e(void 0, Em, void 0, void 0, t);
	}
};
function Sm(e, t, n, r) {
	let i = t + 1 > n + 20 ? t - n - 1 : 0, a = e.slice(i, t);
	return a.push(r), a;
}
function Cm(e, t) {
	let n = [], r = !1;
	return e.iterChangedRanges((e, t) => n.push(e, t)), t.iterChangedRanges((e, t, i, a) => {
		for (let e = 0; e < n.length;) {
			let t = n[e++], o = n[e++];
			a >= t && i <= o && (r = !0);
		}
	}), r;
}
function wm(e, t) {
	return e.ranges.length == t.ranges.length && e.ranges.filter((e, n) => e.empty != t.ranges[n].empty).length === 0;
}
function Tm(e, t) {
	return e.length ? t.length ? e.concat(t) : e : t;
}
var Em = [], Dm = 200;
function Om(e, t) {
	if (e.length) {
		let n = e[e.length - 1], r = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - Dm));
		return r.length && r[r.length - 1].eq(t) ? e : (r.push(t), Sm(e, e.length - 1, 1e9, n.setSelAfter(r)));
	}
	return [xm.selection([t])];
}
function km(e) {
	let t = e[e.length - 1], n = e.slice();
	return n[e.length - 1] = t.setSelAfter(t.selectionsAfter.slice(0, t.selectionsAfter.length - 1)), n;
}
function Am(e, t) {
	if (!e.length) return e;
	let n = e.length, r = Em;
	for (; n;) {
		let i = jm(e[n - 1], t, r);
		if (i.changes && !i.changes.empty || i.effects.length) {
			let t = e.slice(0, n);
			return t[n - 1] = i, t;
		}
		t = i.mapped, n--, r = i.selectionsAfter;
	}
	return r.length ? [xm.selection(r)] : Em;
}
function jm(e, t, n) {
	let r = Tm(e.selectionsAfter.length ? e.selectionsAfter.map((e) => e.map(t)) : Em, n);
	if (!e.changes) return xm.selection(r);
	let i = e.changes.map(t), a = t.mapDesc(e.changes, !0), o = e.mapped ? e.mapped.composeDesc(a) : a;
	return new xm(i, Y.mapEffects(e.effects, t), o, e.startSelection.map(a), r);
}
var Mm = /^(input\.type|delete)($|\.)/, Nm = class e {
	constructor(e, t, n = 0, r = void 0) {
		this.done = e, this.undone = t, this.prevTime = n, this.prevUserEvent = r;
	}
	isolate() {
		return this.prevTime ? new e(this.done, this.undone) : this;
	}
	addChanges(t, n, r, i, a) {
		let o = this.done, s = o[o.length - 1];
		return o = s && s.changes && !s.changes.empty && t.changes && (!r || Mm.test(r)) && (!s.selectionsAfter.length && n - this.prevTime < i.newGroupDelay && i.joinToEvent(a, Cm(s.changes, t.changes)) || r == "input.type.compose") ? Sm(o, o.length - 1, i.minDepth, new xm(t.changes.compose(s.changes), Tm(Y.mapEffects(t.effects, s.changes), s.effects), s.mapped, s.startSelection, Em)) : Sm(o, o.length, i.minDepth, t), new e(o, Em, n, r);
	}
	addSelection(t, n, r, i) {
		let a = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Em;
		return a.length > 0 && n - this.prevTime < i && r == this.prevUserEvent && r && /^select($|\.)/.test(r) && wm(a[a.length - 1], t) ? this : new e(Om(this.done, t), this.undone, n, r);
	}
	addMapping(t) {
		return new e(Am(this.done, t), Am(this.undone, t), this.prevTime, this.prevUserEvent);
	}
	pop(e, t, n) {
		let r = e == 0 ? this.done : this.undone;
		if (r.length == 0) return null;
		let i = r[r.length - 1], a = i.selectionsAfter[0] || (i.startSelection ? i.startSelection.map(i.changes.invertedDesc, 1) : t.selection);
		if (n && i.selectionsAfter.length) return t.update({
			selection: i.selectionsAfter[i.selectionsAfter.length - 1],
			annotations: um.of({
				side: e,
				rest: km(r),
				selection: a
			}),
			userEvent: e == 0 ? "select.undo" : "select.redo",
			scrollIntoView: !0
		});
		if (i.changes) {
			let n = r.length == 1 ? Em : r.slice(0, r.length - 1);
			return i.mapped && (n = Am(n, i.mapped)), t.update({
				changes: i.changes,
				selection: i.startSelection,
				effects: i.effects,
				annotations: um.of({
					side: e,
					rest: n,
					selection: a
				}),
				filter: !1,
				userEvent: e == 0 ? "undo" : "redo",
				scrollIntoView: !0
			});
		}
		return null;
	}
};
Nm.empty = /*@__PURE__*/ new Nm(Em, Em);
var Pm = [
	{
		key: "Mod-z",
		run: _m,
		preventDefault: !0
	},
	{
		key: "Mod-y",
		mac: "Mod-Shift-z",
		run: vm,
		preventDefault: !0
	},
	{
		linux: "Ctrl-Shift-z",
		run: vm,
		preventDefault: !0
	},
	{
		key: "Mod-u",
		run: ym,
		preventDefault: !0
	},
	{
		key: "Alt-u",
		mac: "Mod-Shift-u",
		run: bm,
		preventDefault: !0
	}
];
function Fm(e, t) {
	return q.create(e.ranges.map(t), e.mainIndex);
}
function Im(e, t) {
	return e.update({
		selection: t,
		scrollIntoView: !0,
		userEvent: "select"
	});
}
function Lm({ state: e, dispatch: t }, n) {
	let r = Fm(e.selection, n);
	return !r.eq(e.selection, !0) && (t(Im(e, r)), !0);
}
function Rm(e, t) {
	return q.cursor(t ? e.to : e.from);
}
function zm(e, t) {
	return Lm(e, (n) => n.empty ? e.moveByChar(n, t) : Rm(n, t));
}
function Bm(e) {
	return e.textDirectionAt(e.state.selection.main.head) == xa.LTR;
}
var Vm = (e) => zm(e, !Bm(e)), Hm = (e) => zm(e, Bm(e));
function Um(e, t) {
	return Lm(e, (n) => n.empty ? e.moveByGroup(n, t) : Rm(n, t));
}
var Wm = (e) => Um(e, !Bm(e)), Gm = (e) => Um(e, Bm(e));
typeof Intl < "u" && Intl.Segmenter;
function Km(e, t, n) {
	if (t.type.prop(n)) return !0;
	let r = t.to - t.from;
	return r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to))) || t.firstChild;
}
function qm(e, t, n) {
	let r = bf(e).resolveInner(t.head), i = n ? $.closedBy : $.openedBy;
	for (let a = t.head;;) {
		let t = n ? r.childAfter(a) : r.childBefore(a);
		if (!t) break;
		Km(e, t, i) ? r = t : a = n ? t.to : t.from;
	}
	let a = r.type.prop(i), o, s;
	return s = a && (o = n ? Up(e, r.from, 1) : Up(e, r.to, -1)) && o.matched ? n ? o.end.to : o.end.from : n ? r.to : r.from, q.cursor(s, n ? -1 : 1);
}
var Jm = (e) => Lm(e, (t) => qm(e.state, t, !Bm(e))), Ym = (e) => Lm(e, (t) => qm(e.state, t, Bm(e)));
function Xm(e, t) {
	return Lm(e, (n) => {
		if (!n.empty) return Rm(n, t);
		let r = e.moveVertically(n, t);
		return r.head == n.head ? e.moveToLineBoundary(n, t) : r;
	});
}
var Zm = (e) => Xm(e, !1), Qm = (e) => Xm(e, !0);
function $m(e) {
	let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2, n = 0, r = 0, i;
	if (t) {
		for (let t of e.state.facet(Q.scrollMargins)) {
			let i = t(e);
			i?.top && (n = Math.max(i?.top, n)), i?.bottom && (r = Math.max(i?.bottom, r));
		}
		i = e.scrollDOM.clientHeight - n - r;
	} else i = (e.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop: n,
		marginBottom: r,
		selfScroll: t,
		height: Math.max(e.defaultLineHeight, i - 5)
	};
}
function eh(e, t) {
	let n = $m(e), { state: r } = e, i = Fm(r.selection, (r) => r.empty ? e.moveVertically(r, t, n.height) : Rm(r, t));
	if (i.eq(r.selection)) return !1;
	let a;
	if (n.selfScroll) {
		let t = e.coordsAtPos(r.selection.main.head), o = e.scrollDOM.getBoundingClientRect(), s = o.top + n.marginTop, c = o.bottom - n.marginBottom;
		t && t.top > s && t.bottom < c && (a = Q.scrollIntoView(i.main.head, {
			y: "start",
			yMargin: t.top - s
		}));
	}
	return e.dispatch(Im(r, i), { effects: a }), !0;
}
var th = (e) => eh(e, !1), nh = (e) => eh(e, !0);
function rh(e, t, n) {
	let r = e.lineBlockAt(t.head), i = e.moveToLineBoundary(t, n);
	if (i.head == t.head && i.head != (n ? r.to : r.from) && (i = e.moveToLineBoundary(t, n, !1)), !n && i.head == r.from && r.length) {
		let n = /^\s*/.exec(e.state.sliceDoc(r.from, Math.min(r.from + 100, r.to)))[0].length;
		n && t.head != r.from + n && (i = q.cursor(r.from + n));
	}
	return i;
}
var ih = (e) => Lm(e, (t) => rh(e, t, !0)), ah = (e) => Lm(e, (t) => rh(e, t, !1)), oh = (e) => Lm(e, (t) => rh(e, t, !Bm(e))), sh = (e) => Lm(e, (t) => rh(e, t, Bm(e))), ch = (e) => Lm(e, (t) => q.cursor(e.lineBlockAt(t.head).from, 1)), lh = (e) => Lm(e, (t) => q.cursor(e.lineBlockAt(t.head).to, -1));
function uh(e, t, n) {
	let r = !1, i = Fm(e.selection, (t) => {
		let i = Up(e, t.head, -1) || Up(e, t.head, 1) || t.head > 0 && Up(e, t.head - 1, 1) || t.head < e.doc.length && Up(e, t.head + 1, -1);
		if (!i || !i.end) return t;
		r = !0;
		let a = i.start.from == t.head ? i.end.to : i.end.from;
		return n ? q.range(t.anchor, a) : q.cursor(a);
	});
	return r ? (t(Im(e, i)), !0) : !1;
}
var dh = ({ state: e, dispatch: t }) => uh(e, t, !1);
function fh(e, t, n) {
	let r = Fm(e.state.selection, (e) => {
		e.undirectional && e.head >= e.anchor != t && (e = q.range(e.head, e.anchor));
		let r = n(e);
		return q.range(e.anchor, r.head, r.goalColumn, r.bidiLevel || void 0, r.assoc);
	});
	return !r.eq(e.state.selection) && (e.dispatch(Im(e.state, r)), !0);
}
function ph(e, t) {
	return fh(e, t, (n) => e.moveByChar(n, t));
}
var mh = (e) => ph(e, !Bm(e)), hh = (e) => ph(e, Bm(e));
function gh(e, t) {
	return fh(e, t, (n) => e.moveByGroup(n, t));
}
var _h = (e) => gh(e, !Bm(e)), vh = (e) => gh(e, Bm(e)), yh = (e) => {
	let t = !Bm(e);
	return fh(e, t, (n) => qm(e.state, n, t));
}, bh = (e) => {
	let t = Bm(e);
	return fh(e, t, (n) => qm(e.state, n, t));
};
function xh(e, t) {
	return fh(e, t, (n) => e.moveVertically(n, t));
}
var Sh = (e) => xh(e, !1), Ch = (e) => xh(e, !0);
function wh(e, t) {
	return fh(e, t, (n) => e.moveVertically(n, t, $m(e).height));
}
var Th = (e) => wh(e, !1), Eh = (e) => wh(e, !0), Dh = (e) => fh(e, !0, (t) => rh(e, t, !0)), Oh = (e) => fh(e, !1, (t) => rh(e, t, !1)), kh = (e) => {
	let t = !Bm(e);
	return fh(e, t, (n) => rh(e, n, t));
}, Ah = (e) => {
	let t = Bm(e);
	return fh(e, t, (n) => rh(e, n, t));
}, jh = (e) => fh(e, !1, (t) => q.cursor(e.lineBlockAt(t.head).from)), Mh = (e) => fh(e, !0, (t) => q.cursor(e.lineBlockAt(t.head).to)), Nh = ({ state: e, dispatch: t }) => (t(Im(e, { anchor: 0 })), !0), Ph = ({ state: e, dispatch: t }) => (t(Im(e, { anchor: e.doc.length })), !0), Fh = ({ state: e, dispatch: t }) => (t(Im(e, {
	anchor: e.selection.main.anchor,
	head: 0
})), !0), Ih = ({ state: e, dispatch: t }) => (t(Im(e, {
	anchor: e.selection.main.anchor,
	head: e.doc.length
})), !0), Lh = ({ state: e, dispatch: t }) => (t(e.update({
	selection: {
		anchor: 0,
		head: e.doc.length
	},
	userEvent: "select"
})), !0), Rh = ({ state: e, dispatch: t }) => {
	let n = rg(e).map(({ from: t, to: n }) => q.range(t, Math.min(n + 1, e.doc.length)));
	return t(e.update({
		selection: q.create(n),
		userEvent: "select"
	})), !0;
}, zh = ({ state: e, dispatch: t }) => {
	let n = Fm(e.selection, (t) => {
		let n = bf(e), r = n.resolveStack(t.from, 1);
		if (t.empty) {
			let e = n.resolveStack(t.from, -1);
			e.node.from >= r.node.from && e.node.to <= r.node.to && (r = e);
		}
		for (let e = r; e; e = e.next) {
			let { node: n } = e;
			if ((n.from < t.from && n.to >= t.to || n.to > t.to && n.from <= t.from) && e.next) return q.range(n.to, n.from);
		}
		return t;
	});
	return !n.eq(e.selection) && (t(Im(e, n)), !0);
};
function Bh(e, t) {
	let { state: n } = e, r = n.selection, i = n.selection.ranges.slice();
	for (let r of n.selection.ranges) {
		let a = n.doc.lineAt(r.head);
		if (t ? a.to < e.state.doc.length : a.from > 0) for (let n = r;;) {
			let r = e.moveVertically(n, t);
			if (r.head < a.from || r.head > a.to) {
				i.some((e) => e.head == r.head) || i.push(r);
				break;
			}
			if (r.head == n.head) break;
			n = r;
		}
	}
	return i.length != r.ranges.length && (e.dispatch(Im(n, q.create(i, i.length - 1))), !0);
}
var Vh = (e) => Bh(e, !1), Hh = (e) => Bh(e, !0), Uh = ({ state: e, dispatch: t }) => {
	let n = e.selection, r = null;
	return n.ranges.length > 1 ? r = q.create([n.main]) : n.main.empty || (r = q.create([q.cursor(n.main.head)])), r ? (t(Im(e, r)), !0) : !1;
};
function Wh(e, t) {
	if (e.state.readOnly) return !1;
	let n = "delete.selection", { state: r } = e, i = r.changeByRange((r) => {
		let { from: i, to: a } = r;
		if (i == a) {
			let o = t(r);
			o < i ? (n = "delete.backward", o = Gh(e, o, !1)) : o > i && (n = "delete.forward", o = Gh(e, o, !0)), i = Math.min(i, o), a = Math.max(a, o);
		} else i = Gh(e, i, !1), a = Gh(e, a, !0);
		return i == a ? { range: r } : {
			changes: {
				from: i,
				to: a
			},
			range: q.cursor(i, i < r.head ? -1 : 1)
		};
	});
	return !i.changes.empty && (e.dispatch(r.update(i, {
		scrollIntoView: !0,
		userEvent: n,
		effects: n == "delete.selection" ? Q.announce.of(r.phrase("Selection deleted")) : void 0
	})), !0);
}
function Gh(e, t, n) {
	if (e instanceof Q) for (let r of e.state.facet(Q.atomicRanges).map((t) => t(e))) r.between(t, t, (e, r) => {
		e < t && r > t && (t = n ? r : e);
	});
	return t;
}
var Kh = (e, t, n) => Wh(e, (r) => {
	let i = r.from, { state: a } = e, o = a.doc.lineAt(i), s, c;
	if (n && !t && i > o.from && i < o.from + 200 && !/[^ \t]/.test(s = o.text.slice(0, i - o.from))) {
		if (s[s.length - 1] == "	") return i - 1;
		let e = ai(s, a.tabSize) % Mf(a) || Mf(a);
		for (let t = 0; t < e && s[s.length - 1 - t] == " "; t++) i--;
		c = i;
	} else c = Nn(o.text, i - o.from, t, t) + o.from, c == i && o.number != (t ? a.doc.lines : 1) ? c += t ? 1 : -1 : !t && /[\ufe00-\ufe0f]/.test(o.text.slice(c - o.from, i - o.from)) && (c = Nn(o.text, c - o.from, !1, !1) + o.from);
	return c;
}), qh = (e) => Kh(e, !1, !0), Jh = (e) => Kh(e, !0, !1), Yh = (e, t) => Wh(e, (n) => {
	let r = n.head, { state: i } = e, a = i.doc.lineAt(r), o = i.charCategorizer(r);
	for (let e = null;;) {
		if (r == (t ? a.to : a.from)) {
			r == n.head && a.number != (t ? i.doc.lines : 1) && (r += t ? 1 : -1);
			break;
		}
		let s = Nn(a.text, r - a.from, t) + a.from, c = a.text.slice(Math.min(r, s) - a.from, Math.max(r, s) - a.from), l = o(c);
		if (e != null && l != e) break;
		(c != " " || r != n.head) && (e = l), r = s;
	}
	return r;
}), Xh = (e) => Yh(e, !1), Zh = (e) => Yh(e, !0), Qh = (e) => Wh(e, (t) => {
	let n = e.lineBlockAt(t.head).to;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), $h = (e) => Wh(e, (t) => {
	let n = e.moveToLineBoundary(t, !1).head;
	return t.head > n ? n : Math.max(0, t.head - 1);
}), eg = (e) => Wh(e, (t) => {
	let n = e.moveToLineBoundary(t, !0).head;
	return t.head < n ? n : Math.min(e.state.doc.length, t.head + 1);
}), tg = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = e.changeByRange((e) => ({
		changes: {
			from: e.from,
			to: e.to,
			insert: K.of(["", ""])
		},
		range: q.cursor(e.from)
	}));
	return t(e.update(n, {
		scrollIntoView: !0,
		userEvent: "input"
	})), !0;
}, ng = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = e.changeByRange((t) => {
		if (!t.empty || t.from == 0 || t.from == e.doc.length) return { range: t };
		let n = t.from, r = e.doc.lineAt(n), i = n == r.from ? n - 1 : Nn(r.text, n - r.from, !1) + r.from, a = n == r.to ? n + 1 : Nn(r.text, n - r.from, !0) + r.from;
		return {
			changes: {
				from: i,
				to: a,
				insert: e.doc.slice(n, a).append(e.doc.slice(i, n))
			},
			range: q.cursor(a)
		};
	});
	return !n.changes.empty && (t(e.update(n, {
		scrollIntoView: !0,
		userEvent: "move.character"
	})), !0);
};
function rg(e) {
	let t = [], n = -1;
	for (let r of e.selection.ranges) {
		let i = e.doc.lineAt(r.from), a = e.doc.lineAt(r.to);
		if (!r.empty && r.to == a.from && (a = e.doc.lineAt(r.to - 1)), n >= i.number) {
			let e = t[t.length - 1];
			e.to = a.to, e.ranges.push(r);
		} else t.push({
			from: i.from,
			to: a.to,
			ranges: [r]
		});
		n = a.number + 1;
	}
	return t;
}
function ig(e, t, n) {
	if (e.readOnly) return !1;
	let r = [], i = [];
	for (let t of rg(e)) {
		if (n ? t.to == e.doc.length : t.from == 0) continue;
		let a = e.doc.lineAt(n ? t.to + 1 : t.from - 1), o = a.length + 1;
		if (n) {
			r.push({
				from: t.to,
				to: a.to
			}, {
				from: t.from,
				insert: a.text + e.lineBreak
			});
			for (let n of t.ranges) i.push(q.range(Math.min(e.doc.length, n.anchor + o), Math.min(e.doc.length, n.head + o)));
		} else {
			r.push({
				from: a.from,
				to: t.from
			}, {
				from: t.to,
				insert: e.lineBreak + a.text
			});
			for (let e of t.ranges) i.push(q.range(e.anchor - o, e.head - o));
		}
	}
	return r.length ? (t(e.update({
		changes: r,
		scrollIntoView: !0,
		selection: q.create(i, e.selection.mainIndex),
		userEvent: "move.line"
	})), !0) : !1;
}
var ag = ({ state: e, dispatch: t }) => ig(e, t, !1), og = ({ state: e, dispatch: t }) => ig(e, t, !0);
function sg(e, t, n) {
	if (e.readOnly) return !1;
	let r = [];
	for (let t of rg(e)) n ? r.push({
		from: t.from,
		insert: e.doc.slice(t.from, t.to) + e.lineBreak
	}) : r.push({
		from: t.to,
		insert: e.lineBreak + e.doc.slice(t.from, t.to)
	});
	let i = e.changes(r);
	return t(e.update({
		changes: i,
		selection: e.selection.map(i, n ? 1 : -1),
		scrollIntoView: !0,
		userEvent: "input.copyline"
	})), !0;
}
var cg = ({ state: e, dispatch: t }) => sg(e, t, !1), lg = ({ state: e, dispatch: t }) => sg(e, t, !0), ug = (e) => {
	if (e.state.readOnly) return !1;
	let { state: t } = e, n = t.changes(rg(t).map(({ from: e, to: n }) => (e > 0 ? e-- : n < t.doc.length && n++, {
		from: e,
		to: n
	}))), r = Fm(t.selection, (t) => {
		let n;
		if (e.lineWrapping) {
			let r = e.lineBlockAt(t.head), i = e.coordsAtPos(t.head, t.assoc || 1);
			i && (n = r.bottom + e.documentTop - i.bottom + e.defaultLineHeight / 2);
		}
		return e.moveVertically(t, !0, n);
	}).map(n);
	return e.dispatch({
		changes: n,
		selection: r,
		scrollIntoView: !0,
		userEvent: "delete.line"
	}), !0;
};
function dg(e, t) {
	if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1))) return {
		from: t,
		to: t
	};
	let n = bf(e).resolveInner(t), r = n.childBefore(t), i = n.childAfter(t), a;
	return r && i && r.to <= t && i.from >= t && (a = r.type.prop($.closedBy)) && a.indexOf(i.name) > -1 && e.doc.lineAt(r.to).from == e.doc.lineAt(i.from).from && !/\S/.test(e.sliceDoc(r.to, i.from)) ? {
		from: r.to,
		to: i.from
	} : null;
}
var fg = /*@__PURE__*/ mg(!1), pg = /*@__PURE__*/ mg(!0);
function mg(e) {
	return ({ state: t, dispatch: n }) => {
		if (t.readOnly) return !1;
		let r = t.changeByRange((n) => {
			let { from: r, to: i } = n, a = t.doc.lineAt(r), o = !e && r == i && dg(t, r);
			e && (r = i = (i <= a.to ? a : t.doc.lineAt(i)).to);
			let s = new Ff(t, {
				simulateBreak: r,
				simulateDoubleBreak: !!o
			}), c = Pf(s, r);
			for (c ??= ai(/^\s*/.exec(t.doc.lineAt(r).text)[0], t.tabSize); i < a.to && /\s/.test(a.text[i - a.from]);) i++;
			o ? {from: r, to: i} = o : r > a.from && r < a.from + 100 && !/\S/.test(a.text.slice(0, r)) && (r = a.from);
			let l = ["", Nf(t, c)];
			return o && l.push(Nf(t, s.lineIndent(a.from, -1))), {
				changes: {
					from: r,
					to: i,
					insert: K.of(l)
				},
				range: q.cursor(r + 1 + l[1].length)
			};
		});
		return n(t.update(r, {
			scrollIntoView: !0,
			userEvent: "input"
		})), !0;
	};
}
function hg(e, t) {
	let n = -1;
	return e.changeByRange((r) => {
		let i = [];
		for (let a = r.from; a <= r.to;) {
			let o = e.doc.lineAt(a);
			o.number > n && (r.empty || r.to > o.from) && (t(o, i, r), n = o.number), a = o.to + 1;
		}
		let a = e.changes(i);
		return {
			changes: i,
			range: q.range(a.mapPos(r.anchor, 1), a.mapPos(r.head, 1))
		};
	});
}
var gg = ({ state: e, dispatch: t }) => {
	if (e.readOnly) return !1;
	let n = Object.create(null), r = new Ff(e, { overrideIndentation: (e) => n[e] ?? -1 }), i = hg(e, (t, i, a) => {
		let o = Pf(r, t.from);
		if (o == null) return;
		/\S/.test(t.text) || (o = 0);
		let s = /^\s*/.exec(t.text)[0], c = Nf(e, o);
		(s != c || a.from < t.from + s.length) && (n[t.from] = o, i.push({
			from: t.from,
			to: t.from + s.length,
			insert: c
		}));
	});
	return i.changes.empty || t(e.update(i, { userEvent: "indent" })), !0;
}, _g = ({ state: e, dispatch: t }) => !e.readOnly && (t(e.update(hg(e, (t, n) => {
	n.push({
		from: t.from,
		insert: e.facet(jf)
	});
}), { userEvent: "input.indent" })), !0), vg = ({ state: e, dispatch: t }) => !e.readOnly && (t(e.update(hg(e, (t, n) => {
	let r = /^\s*/.exec(t.text)[0];
	if (!r) return;
	let i = ai(r, e.tabSize), a = 0, o = Nf(e, Math.max(0, i - Mf(e)));
	for (; a < r.length && a < o.length && r.charCodeAt(a) == o.charCodeAt(a);) a++;
	n.push({
		from: t.from + a,
		to: t.from + r.length,
		insert: o.slice(a)
	});
}), { userEvent: "delete.dedent" })), !0), yg = (e) => (e.setTabFocusMode(), !0), bg = [
	{
		key: "Ctrl-b",
		run: Vm,
		shift: mh,
		preventDefault: !0
	},
	{
		key: "Ctrl-f",
		run: Hm,
		shift: hh
	},
	{
		key: "Ctrl-p",
		run: Zm,
		shift: Sh
	},
	{
		key: "Ctrl-n",
		run: Qm,
		shift: Ch
	},
	{
		key: "Ctrl-a",
		run: ch,
		shift: jh
	},
	{
		key: "Ctrl-e",
		run: lh,
		shift: Mh
	},
	{
		key: "Ctrl-d",
		run: Jh
	},
	{
		key: "Ctrl-h",
		run: qh
	},
	{
		key: "Ctrl-k",
		run: Qh
	},
	{
		key: "Ctrl-Alt-h",
		run: Xh
	},
	{
		key: "Ctrl-o",
		run: tg
	},
	{
		key: "Ctrl-t",
		run: ng
	},
	{
		key: "Ctrl-v",
		run: nh
	}
], xg = /*@__PURE__*/ [
	{
		key: "ArrowLeft",
		run: Vm,
		shift: mh,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowLeft",
		mac: "Alt-ArrowLeft",
		run: Wm,
		shift: _h,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowLeft",
		run: oh,
		shift: kh,
		preventDefault: !0
	},
	{
		key: "ArrowRight",
		run: Hm,
		shift: hh,
		preventDefault: !0
	},
	{
		key: "Mod-ArrowRight",
		mac: "Alt-ArrowRight",
		run: Gm,
		shift: vh,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowRight",
		run: sh,
		shift: Ah,
		preventDefault: !0
	},
	{
		key: "ArrowUp",
		run: Zm,
		shift: Sh,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowUp",
		run: Nh,
		shift: Fh
	},
	{
		mac: "Ctrl-ArrowUp",
		run: th,
		shift: Th
	},
	{
		key: "ArrowDown",
		run: Qm,
		shift: Ch,
		preventDefault: !0
	},
	{
		mac: "Cmd-ArrowDown",
		run: Ph,
		shift: Ih
	},
	{
		mac: "Ctrl-ArrowDown",
		run: nh,
		shift: Eh
	},
	{
		key: "PageUp",
		run: th,
		shift: Th
	},
	{
		key: "PageDown",
		run: nh,
		shift: Eh
	},
	{
		key: "Home",
		run: ah,
		shift: Oh,
		preventDefault: !0
	},
	{
		key: "Mod-Home",
		run: Nh,
		shift: Fh
	},
	{
		key: "End",
		run: ih,
		shift: Dh,
		preventDefault: !0
	},
	{
		key: "Mod-End",
		run: Ph,
		shift: Ih
	},
	{
		key: "Enter",
		run: fg,
		shift: fg
	},
	{
		key: "Mod-a",
		run: Lh
	},
	{
		key: "Backspace",
		run: qh,
		shift: qh,
		preventDefault: !0
	},
	{
		key: "Delete",
		run: Jh,
		preventDefault: !0
	},
	{
		key: "Mod-Backspace",
		mac: "Alt-Backspace",
		run: Xh,
		preventDefault: !0
	},
	{
		key: "Mod-Delete",
		mac: "Alt-Delete",
		run: Zh,
		preventDefault: !0
	},
	{
		mac: "Mod-Backspace",
		run: $h,
		preventDefault: !0
	},
	{
		mac: "Mod-Delete",
		run: eg,
		preventDefault: !0
	}
].concat(/*@__PURE__*/ bg.map((e) => ({
	mac: e.key,
	run: e.run,
	shift: e.shift
}))), Sg = /*@__PURE__*/ [
	{
		key: "Alt-ArrowLeft",
		mac: "Ctrl-ArrowLeft",
		run: Jm,
		shift: yh
	},
	{
		key: "Alt-ArrowRight",
		mac: "Ctrl-ArrowRight",
		run: Ym,
		shift: bh
	},
	{
		key: "Alt-ArrowUp",
		run: ag
	},
	{
		key: "Shift-Alt-ArrowUp",
		run: cg
	},
	{
		key: "Alt-ArrowDown",
		run: og
	},
	{
		key: "Shift-Alt-ArrowDown",
		run: lg
	},
	{
		key: "Mod-Alt-ArrowUp",
		run: Vh
	},
	{
		key: "Mod-Alt-ArrowDown",
		run: Hh
	},
	{
		key: "Escape",
		run: Uh
	},
	{
		key: "Mod-Enter",
		run: pg
	},
	{
		key: "Alt-l",
		mac: "Ctrl-l",
		run: Rh
	},
	{
		key: "Mod-i",
		run: zh,
		preventDefault: !0
	},
	{
		key: "Mod-[",
		run: vg
	},
	{
		key: "Mod-]",
		run: _g
	},
	{
		key: "Mod-Alt-\\",
		run: gg
	},
	{
		key: "Shift-Mod-k",
		run: ug
	},
	{
		key: "Shift-Mod-\\",
		run: dh
	},
	{
		key: "Mod-/",
		run: $p
	},
	{
		key: "Alt-A",
		run: nm
	},
	{
		key: "Ctrl-m",
		mac: "Shift-Alt-m",
		run: yg
	}
].concat(xg), Cg = {
	key: "Tab",
	run: _g,
	shift: vg
}, wg = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFKD") : (e) => e, Tg = class {
	constructor(e, t, n = 0, r = e.length, i, a) {
		this.test = a, this.value = {
			from: 0,
			to: 0,
			precise: !1
		}, this.done = !1, this.matches = [], this.buffer = "", this.bufferPos = 0, this.iter = e.iterRange(n, r), this.bufferStart = n, this.normalize = i ? (e) => i(wg(e)) : wg, this.query = this.normalize(t);
	}
	peek() {
		if (this.bufferPos == this.buffer.length) {
			if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
			this.bufferPos = 0, this.buffer = this.iter.value;
		}
		return In(this.buffer, this.bufferPos);
	}
	next() {
		for (; this.matches.length;) this.matches.pop();
		return this.nextOverlapping();
	}
	nextOverlapping() {
		for (;;) {
			let e = this.peek();
			if (e < 0) return this.done = !0, this;
			let t = Ln(e), n = this.bufferStart + this.bufferPos;
			this.bufferPos += Rn(e);
			let r = this.normalize(t);
			if (r.length) for (let e = 0, i = n, a = !0;; e++) {
				let n = r.charCodeAt(e), o = this.match(n, i, a, this.bufferPos + this.bufferStart, e == r.length - 1);
				if (o) return this.value = o, this;
				if (e == r.length - 1) break;
				a && e < t.length && t.charCodeAt(e) == n ? i++ : a = !1;
			}
		}
	}
	match(e, t, n, r, i) {
		let a = null;
		for (let t = 0; t < this.matches.length;) {
			let n = this.matches[t], o = !1;
			this.query.charCodeAt(n.index) == e && (n.index == this.query.length - 1 ? a = {
				from: n.from,
				to: r,
				precise: i && n.precise
			} : (n.index++, o = !0)), o ? t++ : this.matches.splice(t, 1);
		}
		return this.query.charCodeAt(0) == e && (this.query.length == 1 ? a = {
			from: t,
			to: r,
			precise: n && i
		} : this.matches.push({
			from: t,
			index: 1,
			precise: n
		})), a && this.test && !this.test(a.from, a.to, this.buffer, this.bufferStart) && (a = null), a;
	}
};
typeof Symbol < "u" && (Tg.prototype[Symbol.iterator] = function() {
	return this;
});
var Eg = {
	from: -1,
	to: -1,
	match: /*@__PURE__*/ /.*/.exec(""),
	precise: !0
}, Dg = "gm" + (/x/.unicode == null ? "" : "u"), Og = class {
	constructor(e, t, n, r = 0, i = e.length) {
		if (this.text = e, this.to = i, this.curLine = "", this.done = !1, this.value = Eg, /\\[sWDnr]|\n|\r|\[\^/.test(t)) return new jg(e, t, n, r, i);
		this.re = new RegExp(t, Dg + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.iter = e.iter();
		let a = e.lineAt(r);
		this.curLineStart = a.from, this.matchPos = Ng(e, r), this.getLine(this.curLineStart);
	}
	getLine(e) {
		this.iter.next(e), this.iter.lineBreak ? this.curLine = "" : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
	}
	nextLine() {
		this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = "" : this.getLine(0);
	}
	next() {
		for (let e = this.matchPos - this.curLineStart;;) {
			this.re.lastIndex = e;
			let t = this.matchPos <= this.to && this.re.exec(this.curLine);
			if (t) {
				let n = this.curLineStart + t.index, r = n + t[0].length;
				if (this.matchPos = Ng(this.text, r + +(n == r)), n == this.curLineStart + this.curLine.length && this.nextLine(), (n < r || n > this.value.to) && (!this.test || this.test(n, r, t))) return this.value = {
					from: n,
					to: r,
					precise: !0,
					match: t
				}, this;
				e = this.matchPos - this.curLineStart;
			} else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), e = 0;
			else return this.done = !0, this;
		}
	}
}, kg = /*@__PURE__*/ new WeakMap(), Ag = class e {
	constructor(e, t) {
		this.from = e, this.text = t;
	}
	get to() {
		return this.from + this.text.length;
	}
	static get(t, n, r) {
		let i = kg.get(t);
		if (!i || i.from >= r || i.to <= n) {
			let i = new e(n, t.sliceString(n, r));
			return kg.set(t, i), i;
		}
		if (i.from == n && i.to == r) return i;
		let { text: a, from: o } = i;
		return o > n && (a = t.sliceString(n, o) + a, o = n), i.to < r && (a += t.sliceString(i.to, r)), kg.set(t, new e(o, a)), new e(n, a.slice(n - o, r - o));
	}
}, jg = class {
	constructor(e, t, n, r, i) {
		this.text = e, this.to = i, this.done = !1, this.value = Eg, this.matchPos = Ng(e, r), this.re = new RegExp(t, Dg + (n?.ignoreCase ? "i" : "")), this.test = n?.test, this.flat = Ag.get(e, r, this.chunkEnd(r + 5e3));
	}
	chunkEnd(e) {
		return e >= this.to ? this.to : this.text.lineAt(e).to;
	}
	next() {
		for (;;) {
			let e = this.re.lastIndex = this.matchPos - this.flat.from, t = this.re.exec(this.flat.text);
			if (t && !t[0] && t.index == e && (this.re.lastIndex = e + 1, t = this.re.exec(this.flat.text)), t) {
				let e = this.flat.from + t.index, n = e + t[0].length;
				if ((this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) && (!this.test || this.test(e, n, t))) return this.value = {
					from: e,
					to: n,
					precise: !0,
					match: t
				}, this.matchPos = Ng(this.text, n + +(e == n)), this;
			}
			if (this.flat.to == this.to) return this.done = !0, this;
			this.flat = Ag.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
		}
	}
};
typeof Symbol < "u" && (Og.prototype[Symbol.iterator] = jg.prototype[Symbol.iterator] = function() {
	return this;
});
function Mg(e) {
	try {
		return new RegExp(e, Dg), !0;
	} catch {
		return !1;
	}
}
function Ng(e, t) {
	if (t >= e.length) return t;
	let n = e.lineAt(t), r;
	for (; t < n.to && (r = n.text.charCodeAt(t - n.from)) >= 56320 && r < 57344;) t++;
	return t;
}
var Pg = (e) => {
	let { state: t } = e, n = String(t.doc.lineAt(e.state.selection.main.head).number), { close: r, result: i } = od(e, {
		label: t.phrase("Go to line"),
		input: {
			type: "text",
			name: "line",
			value: n
		},
		focus: !0,
		submitLabel: t.phrase("go")
	});
	return i.then((n) => {
		let i = n && /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(n.elements.line.value);
		if (!i) {
			e.dispatch({ effects: r });
			return;
		}
		let a = t.doc.lineAt(t.selection.main.head), [, o, s, c, l] = i, u = c ? +c.slice(1) : 0, d = s ? +s : a.number;
		if (s && l) {
			let e = d / 100;
			o && (e = e * (o == "-" ? -1 : 1) + a.number / t.doc.lines), d = Math.round(t.doc.lines * e);
		} else s && o && (d = d * (o == "-" ? -1 : 1) + a.number);
		let f = t.doc.line(Math.max(1, Math.min(t.doc.lines, d))), p = q.cursor(f.from + Math.max(0, Math.min(u, f.length)));
		e.dispatch({
			effects: [r, Q.scrollIntoView(p.from, { y: "center" })],
			selection: p
		});
	}), !0;
}, Fg = {
	highlightWordAroundCursor: !1,
	minSelectionLength: 1,
	maxMatches: 100,
	wholeWords: !1
}, Ig = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, Fg, {
		highlightWordAroundCursor: (e, t) => e || t,
		minSelectionLength: Math.min,
		maxMatches: Math.min
	});
} });
function Lg(e) {
	let t = [Ug, Hg];
	return e && t.push(Ig.of(e)), t;
}
var Rg = /*@__PURE__*/ Z.mark({ class: "cm-selectionMatch" }), zg = /*@__PURE__*/ Z.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Bg(e, t, n, r) {
	return (n == 0 || e(t.sliceDoc(n - 1, n)) != Pr.Word) && (r == t.doc.length || e(t.sliceDoc(r, r + 1)) != Pr.Word);
}
function Vg(e, t, n, r) {
	return e(t.sliceDoc(n, n + 1)) == Pr.Word && e(t.sliceDoc(r - 1, r)) == Pr.Word;
}
var Hg = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.decorations = this.getDeco(e);
	}
	update(e) {
		(e.selectionSet || e.docChanged || e.viewportChanged) && (this.decorations = this.getDeco(e.view));
	}
	getDeco(e) {
		let t = e.state.facet(Ig), { state: n } = e, r = n.selection;
		if (r.ranges.length > 1) return Z.none;
		let i = r.main, a, o = null;
		if (i.empty) {
			if (!t.highlightWordAroundCursor) return Z.none;
			let e = n.wordAt(i.head);
			if (!e) return Z.none;
			o = n.charCategorizer(i.head), a = n.sliceDoc(e.from, e.to);
		} else {
			let e = i.to - i.from;
			if (e < t.minSelectionLength || e > 200) return Z.none;
			if (t.wholeWords) {
				if (a = n.sliceDoc(i.from, i.to), o = n.charCategorizer(i.head), !(Bg(o, n, i.from, i.to) && Vg(o, n, i.from, i.to))) return Z.none;
			} else if (a = n.sliceDoc(i.from, i.to), !a) return Z.none;
		}
		let s = [];
		for (let r of e.visibleRanges) {
			let e = new Tg(n.doc, a, r.from, r.to);
			for (; !e.next().done;) {
				let { from: r, to: a } = e.value;
				if ((!o || Bg(o, n, r, a)) && (i.empty && r <= i.from && a >= i.to ? s.push(zg.range(r, a)) : (r >= i.to || a <= i.from) && s.push(Rg.range(r, a)), s.length > t.maxMatches)) return Z.none;
			}
		}
		return Z.set(s);
	}
}, { decorations: (e) => e.decorations }), Ug = /*@__PURE__*/ Q.baseTheme({
	".cm-selectionMatch": { backgroundColor: "#99ff7780" },
	".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" }
}), Wg = ({ state: e, dispatch: t }) => {
	let { selection: n } = e, r = q.create(n.ranges.map((t) => e.wordAt(t.head) || q.cursor(t.head)), n.mainIndex);
	return !r.eq(n) && (t(e.update({ selection: r })), !0);
};
function Gg(e, t) {
	let { main: n, ranges: r } = e.selection, i = e.wordAt(n.head), a = i && i.from == n.from && i.to == n.to;
	for (let n = !1, i = new Tg(e.doc, t, r[r.length - 1].to);;) if (i.next(), i.done) {
		if (n) return null;
		i = new Tg(e.doc, t, 0, Math.max(0, r[r.length - 1].from - 1)), n = !0;
	} else {
		if (n && r.some((e) => e.from == i.value.from)) continue;
		if (a) {
			let t = e.wordAt(i.value.from);
			if (!t || t.from != i.value.from || t.to != i.value.to) continue;
		}
		return i.value;
	}
}
var Kg = ({ state: e, dispatch: t }) => {
	let { ranges: n } = e.selection;
	if (n.some((e) => e.from === e.to)) return Wg({
		state: e,
		dispatch: t
	});
	let r = e.sliceDoc(n[0].from, n[0].to);
	if (e.selection.ranges.some((t) => e.sliceDoc(t.from, t.to) != r)) return !1;
	let i = Gg(e, r);
	return i ? (t(e.update({
		selection: e.selection.addRange(q.range(i.from, i.to), !1),
		effects: Q.scrollIntoView(i.to)
	})), !0) : !1;
}, qg = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		top: !1,
		caseSensitive: !1,
		literal: !1,
		regexp: !1,
		wholeWord: !1,
		createPanel: (e) => new D_(e),
		scrollToMatch: (e) => Q.scrollIntoView(e)
	});
} }), Jg = class {
	constructor(e) {
		this.search = e.search, this.caseSensitive = !!e.caseSensitive, this.literal = !!e.literal, this.regexp = !!e.regexp, this.replace = e.replace || "", this.valid = !!this.search && (!this.regexp || Mg(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!e.wholeWord, this.test = e.test;
	}
	unquote(e) {
		return this.literal ? e : e.replace(/\\([nrt\\])/g, (e, t) => t == "n" ? "\n" : t == "r" ? "\r" : t == "t" ? "	" : "\\");
	}
	eq(e) {
		return this.search == e.search && this.replace == e.replace && this.caseSensitive == e.caseSensitive && this.regexp == e.regexp && this.wholeWord == e.wholeWord && this.test == e.test;
	}
	create() {
		return this.regexp ? new a_(this) : new $g(this);
	}
	getCursor(e, t = 0, n) {
		let r = e.doc ? e : zr.create({ doc: e });
		return n ??= r.doc.length, this.regexp ? t_(this, r, t, n) : Zg(this, r, t, n);
	}
}, Yg = class {
	constructor(e) {
		this.spec = e;
	}
};
function Xg(e, t, n) {
	return (r, i, a, o) => n && !n(r, i, a, o) ? !1 : e(r >= o && i <= o + a.length ? a.slice(r - o, i - o) : t.doc.sliceString(r, i), t, r, i);
}
function Zg(e, t, n, r) {
	let i;
	return e.wholeWord && (i = Qg(t.doc, t.charCategorizer(t.selection.main.head))), e.test && (i = Xg(e.test, t, i)), new Tg(t.doc, e.unquoted, n, r, e.caseSensitive ? void 0 : (e) => e.toLowerCase(), i);
}
function Qg(e, t) {
	return (n, r, i, a) => ((a > n || a + i.length < r) && (a = Math.max(0, n - 2), i = e.sliceString(a, Math.min(e.length, r + 2))), (t(n_(i, n - a)) != Pr.Word || t(r_(i, n - a)) != Pr.Word) && (t(r_(i, r - a)) != Pr.Word || t(n_(i, r - a)) != Pr.Word));
}
var $g = class extends Yg {
	constructor(e) {
		super(e);
	}
	nextMatch(e, t, n) {
		let r = Zg(this.spec, e, n, e.doc.length).nextOverlapping();
		if (r.done) {
			let n = Math.min(e.doc.length, t + this.spec.unquoted.length);
			r = Zg(this.spec, e, 0, n).nextOverlapping();
		}
		return r.done || r.value.from == t && r.value.to == n ? null : r.value;
	}
	prevMatchInRange(e, t, n) {
		for (let r = n;;) {
			let n = Math.max(t, r - 1e4 - this.spec.unquoted.length), i = Zg(this.spec, e, n, r), a = null;
			for (; !i.nextOverlapping().done;) a = i.value;
			if (a) return a;
			if (n == t) return null;
			r -= 1e4;
		}
	}
	prevMatch(e, t, n) {
		let r = this.prevMatchInRange(e, 0, t);
		return r ||= this.prevMatchInRange(e, Math.max(0, n - this.spec.unquoted.length), e.doc.length), r && (r.from != t || r.to != n) ? r : null;
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace);
	}
	matchAll(e, t) {
		let n = Zg(this.spec, e, 0, e.doc.length), r = [];
		for (; !n.next().done;) {
			if (r.length >= t) return null;
			r.push(n.value);
		}
		return r;
	}
	highlight(e, t, n, r) {
		let i = Zg(this.spec, e, Math.max(0, t - this.spec.unquoted.length), Math.min(n + this.spec.unquoted.length, e.doc.length));
		for (; !i.next().done;) r(i.value.from, i.value.to);
	}
};
function e_(e, t, n) {
	return (r, i, a) => (!n || n(r, i, a)) && e(a[0], t, r, i);
}
function t_(e, t, n, r) {
	let i;
	return e.wholeWord && (i = i_(t.charCategorizer(t.selection.main.head))), e.test && (i = e_(e.test, t, i)), new Og(t.doc, e.search, {
		ignoreCase: !e.caseSensitive,
		test: i
	}, n, r);
}
function n_(e, t) {
	return e.slice(Nn(e, t, !1), t);
}
function r_(e, t) {
	return e.slice(t, Nn(e, t));
}
function i_(e) {
	return (t, n, r) => !r[0].length || (e(n_(r.input, r.index)) != Pr.Word || e(r_(r.input, r.index)) != Pr.Word) && (e(r_(r.input, r.index + r[0].length)) != Pr.Word || e(n_(r.input, r.index + r[0].length)) != Pr.Word);
}
var a_ = class extends Yg {
	nextMatch(e, t, n) {
		let r = t_(this.spec, e, n, e.doc.length).next();
		return r.done && (r = t_(this.spec, e, 0, t).next()), r.done ? null : r.value;
	}
	prevMatchInRange(e, t, n) {
		for (let r = 1;; r++) {
			let i = Math.max(t, n - r * 1e4), a = t_(this.spec, e, i, n), o = null;
			for (; !a.next().done;) o = a.value;
			if (o && (i == t || o.from > i + 10)) return o;
			if (i == t) return null;
		}
	}
	prevMatch(e, t, n) {
		return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, n, e.doc.length);
	}
	getReplacement(e) {
		return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, n) => {
			if (n == "&") return e.match[0];
			if (n == "$") return "$";
			for (let t = n.length; t > 0; t--) {
				let r = +n.slice(0, t);
				if (r > 0 && r < e.match.length) return e.match[r] + n.slice(t);
			}
			return t;
		});
	}
	matchAll(e, t) {
		let n = t_(this.spec, e, 0, e.doc.length), r = [];
		for (; !n.next().done;) {
			if (r.length >= t) return null;
			r.push(n.value);
		}
		return r;
	}
	highlight(e, t, n, r) {
		let i = t_(this.spec, e, Math.max(0, t - 250), Math.min(n + 250, e.doc.length));
		for (; !i.next().done;) r(i.value.from, i.value.to);
	}
}, o_ = /*@__PURE__*/ Y.define(), s_ = /*@__PURE__*/ Y.define(), c_ = /*@__PURE__*/ ir.define({
	create(e) {
		return new l_(x_(e).create(), null);
	},
	update(e, t) {
		for (let n of t.effects) n.is(o_) ? e = new l_(n.value.create(), e.panel) : n.is(s_) && (e = new l_(e.query, n.value ? b_ : null));
		return e;
	},
	provide: (e) => ad.from(e, (e) => e.panel)
}), l_ = class {
	constructor(e, t) {
		this.query = e, this.panel = t;
	}
}, u_ = /*@__PURE__*/ Z.mark({ class: "cm-searchMatch" }), d_ = /*@__PURE__*/ Z.mark({ class: "cm-searchMatch cm-searchMatch-selected" }), f_ = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.decorations = this.highlight(e.state.field(c_));
	}
	update(e) {
		let t = e.state.field(c_);
		(t != e.startState.field(c_) || e.docChanged || e.selectionSet || e.viewportChanged) && (this.decorations = this.highlight(t));
	}
	highlight({ query: e, panel: t }) {
		if (!t || !e.spec.valid) return Z.none;
		let { view: n } = this, r = new Jr();
		for (let t = 0, i = n.visibleRanges, a = i.length; t < a; t++) {
			let { from: o, to: s } = i[t];
			for (; t < a - 1 && s > i[t + 1].from - 500;) s = i[++t].to;
			e.highlight(n.state, o, s, (e, t) => {
				let i = n.state.selection.ranges.some((n) => n.from == e && n.to == t);
				r.add(e, t, i ? d_ : u_);
			});
		}
		return r.finish();
	}
}, { decorations: (e) => e.decorations });
function p_(e) {
	return (t) => {
		let n = t.state.field(c_, !1);
		return n && n.query.spec.valid ? e(t, n) : w_(t);
	};
}
var m_ = /*@__PURE__*/ p_((e, { query: t }) => {
	let { to: n } = e.state.selection.main, r = t.nextMatch(e.state, n, n);
	if (!r) return !1;
	let i = q.single(r.from, r.to), a = e.state.facet(qg);
	return e.dispatch({
		selection: i,
		effects: [j_(e, r), a.scrollToMatch(i.main, e)],
		userEvent: "select.search"
	}), C_(e), !0;
}), h_ = /*@__PURE__*/ p_((e, { query: t }) => {
	let { state: n } = e, { from: r } = n.selection.main, i = t.prevMatch(n, r, r);
	if (!i) return !1;
	let a = q.single(i.from, i.to), o = e.state.facet(qg);
	return e.dispatch({
		selection: a,
		effects: [j_(e, i), o.scrollToMatch(a.main, e)],
		userEvent: "select.search"
	}), C_(e), !0;
}), g_ = /*@__PURE__*/ p_((e, { query: t }) => {
	let n = t.matchAll(e.state, 1e3);
	return !n || !n.length ? !1 : (e.dispatch({
		selection: q.create(n.map((e) => q.range(e.from, e.to))),
		userEvent: "select.search.matches"
	}), !0);
}), __ = ({ state: e, dispatch: t }) => {
	let n = e.selection;
	if (n.ranges.length > 1 || n.main.empty) return !1;
	let { from: r, to: i } = n.main, a = [], o = 0;
	for (let t = new Tg(e.doc, e.sliceDoc(r, i)); !t.next().done;) {
		if (a.length > 1e3) return !1;
		t.value.from == r && (o = a.length), a.push(q.range(t.value.from, t.value.to));
	}
	return t(e.update({
		selection: q.create(a, o),
		userEvent: "select.search.matches"
	})), !0;
}, v_ = /*@__PURE__*/ p_((e, { query: t }) => {
	let { state: n } = e, { from: r, to: i } = n.selection.main;
	if (n.readOnly) return !1;
	let a = t.nextMatch(n, r, r);
	if (!a) return !1;
	let o = a, s = [], c, l, u = [];
	o.precise ? o.from == r && o.to == i && (l = n.toText(t.getReplacement(o)), s.push({
		from: o.from,
		to: o.to,
		insert: l
	}), o = t.nextMatch(n, o.from, o.to), u.push(Q.announce.of(n.phrase("replaced match on line $", n.doc.lineAt(r).number) + "."))) : o = t.nextMatch(n, o.from, o.to);
	let d = e.state.changes(s);
	return o && (c = q.single(o.from, o.to).map(d), u.push(j_(e, o)), u.push(n.facet(qg).scrollToMatch(c.main, e))), e.dispatch({
		changes: d,
		selection: c,
		effects: u,
		userEvent: "input.replace"
	}), !0;
}), y_ = /*@__PURE__*/ p_((e, { query: t }) => {
	if (e.state.readOnly) return !1;
	let n = [];
	for (let r of t.matchAll(e.state, 1e9)) {
		let { from: e, to: i, precise: a } = r;
		a && n.push({
			from: e,
			to: i,
			insert: t.getReplacement(r)
		});
	}
	if (!n.length) return !1;
	let r = e.state.phrase("replaced $ matches", n.length) + ".";
	return e.dispatch({
		changes: n,
		effects: Q.announce.of(r),
		userEvent: "input.replace.all"
	}), !0;
});
function b_(e) {
	return e.state.facet(qg).createPanel(e);
}
function x_(e, t) {
	let n = e.selection.main, r = n.empty || n.to > n.from + 100 ? "" : e.sliceDoc(n.from, n.to);
	if (t && !r) return t;
	let i = e.facet(qg);
	return new Jg({
		search: t?.literal ?? i.literal ? r : r.replace(/\n/g, "\\n"),
		caseSensitive: t?.caseSensitive ?? i.caseSensitive,
		literal: t?.literal ?? i.literal,
		regexp: t?.regexp ?? i.regexp,
		wholeWord: t?.wholeWord ?? i.wholeWord
	});
}
function S_(e) {
	let t = td(e, b_);
	return t && t.dom.querySelector("[main-field]");
}
function C_(e) {
	let t = S_(e);
	t && t == e.root.activeElement && t.select();
}
var w_ = (e) => {
	let t = e.state.field(c_, !1);
	if (t && t.panel) {
		let n = S_(e);
		if (n && n != e.root.activeElement) {
			let r = x_(e.state, t.query.spec);
			r.valid && e.dispatch({ effects: o_.of(r) }), n.focus(), n.select();
		}
	} else e.dispatch({ effects: [s_.of(!0), t ? o_.of(x_(e.state, t.query.spec)) : Y.appendConfig.of(N_)] });
	return !0;
}, T_ = (e) => {
	let t = e.state.field(c_, !1);
	if (!t || !t.panel) return !1;
	let n = td(e, b_);
	return n && n.dom.contains(e.root.activeElement) && e.focus(), e.dispatch({ effects: s_.of(!1) }), !0;
}, E_ = [
	{
		key: "Mod-f",
		run: w_,
		scope: "editor search-panel"
	},
	{
		key: "F3",
		run: m_,
		shift: h_,
		scope: "editor search-panel",
		preventDefault: !0
	},
	{
		key: "Mod-g",
		run: m_,
		shift: h_,
		scope: "editor search-panel",
		preventDefault: !0
	},
	{
		key: "Escape",
		run: T_,
		scope: "editor search-panel"
	},
	{
		key: "Mod-Shift-l",
		run: __
	},
	{
		key: "Mod-Alt-g",
		run: Pg
	},
	{
		key: "Mod-d",
		run: Kg,
		preventDefault: !0
	}
], D_ = class {
	constructor(e) {
		this.view = e;
		let t = this.query = e.state.field(c_).query.spec;
		this.commit = this.commit.bind(this), this.searchField = xi("input", {
			value: t.search,
			placeholder: O_(e, "Find"),
			"aria-label": O_(e, "Find"),
			class: "cm-textfield",
			name: "search",
			form: "",
			"main-field": "true",
			onchange: this.commit,
			onkeyup: this.commit
		}), this.replaceField = xi("input", {
			value: t.replace,
			placeholder: O_(e, "Replace"),
			"aria-label": O_(e, "Replace"),
			class: "cm-textfield",
			name: "replace",
			form: "",
			onchange: this.commit,
			onkeyup: this.commit
		}), this.caseField = xi("input", {
			type: "checkbox",
			name: "case",
			form: "",
			checked: t.caseSensitive,
			onchange: this.commit
		}), this.reField = xi("input", {
			type: "checkbox",
			name: "re",
			form: "",
			checked: t.regexp,
			onchange: this.commit
		}), this.wordField = xi("input", {
			type: "checkbox",
			name: "word",
			form: "",
			checked: t.wholeWord,
			onchange: this.commit
		});
		function n(e, t, n) {
			return xi("button", {
				class: "cm-button",
				name: e,
				onclick: t,
				type: "button"
			}, n);
		}
		this.dom = xi("div", {
			onkeydown: (e) => this.keydown(e),
			class: "cm-search"
		}, [
			this.searchField,
			n("next", () => m_(e), [O_(e, "next")]),
			n("prev", () => h_(e), [O_(e, "previous")]),
			n("select", () => g_(e), [O_(e, "all")]),
			xi("label", null, [this.caseField, O_(e, "match case")]),
			xi("label", null, [this.reField, O_(e, "regexp")]),
			xi("label", null, [this.wordField, O_(e, "by word")]),
			...e.state.readOnly ? [] : [
				xi("br"),
				this.replaceField,
				n("replace", () => v_(e), [O_(e, "replace")]),
				n("replaceAll", () => y_(e), [O_(e, "replace all")])
			],
			xi("button", {
				name: "close",
				onclick: () => T_(e),
				"aria-label": O_(e, "close"),
				type: "button"
			}, ["×"])
		]);
	}
	commit() {
		let e = new Jg({
			search: this.searchField.value,
			caseSensitive: this.caseField.checked,
			regexp: this.reField.checked,
			wholeWord: this.wordField.checked,
			replace: this.replaceField.value
		});
		e.eq(this.query) || (this.query = e, this.view.dispatch({ effects: o_.of(e) }));
	}
	keydown(e) {
		Al(this.view, e, "search-panel") ? e.preventDefault() : e.keyCode == 13 && e.target == this.searchField ? (e.preventDefault(), (e.shiftKey ? h_ : m_)(this.view)) : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), v_(this.view));
	}
	update(e) {
		for (let t of e.transactions) for (let e of t.effects) e.is(o_) && !e.value.eq(this.query) && this.setQuery(e.value);
	}
	setQuery(e) {
		this.query = e, this.searchField.value = e.search, this.replaceField.value = e.replace, this.caseField.checked = e.caseSensitive, this.reField.checked = e.regexp, this.wordField.checked = e.wholeWord;
	}
	mount() {
		this.searchField.select();
	}
	get pos() {
		return 80;
	}
	get top() {
		return this.view.state.facet(qg).top;
	}
};
function O_(e, t) {
	return e.state.phrase(t);
}
var k_ = 30, A_ = /[\s\.,:;?!]/;
function j_(e, { from: t, to: n }) {
	let r = e.state.doc.lineAt(t), i = e.state.doc.lineAt(n).to, a = Math.max(r.from, t - k_), o = Math.min(i, n + k_), s = e.state.sliceDoc(a, o);
	if (a != r.from) {
		for (let e = 0; e < k_; e++) if (!A_.test(s[e + 1]) && A_.test(s[e])) {
			s = s.slice(e);
			break;
		}
	}
	if (o != i) {
		for (let e = s.length - 1; e > s.length - k_; e--) if (!A_.test(s[e - 1]) && A_.test(s[e])) {
			s = s.slice(0, e);
			break;
		}
	}
	return Q.announce.of(`${e.state.phrase("current match")}. ${s} ${e.state.phrase("on line")} ${r.number}.`);
}
var M_ = /*@__PURE__*/ Q.baseTheme({
	".cm-panel.cm-search": {
		padding: "2px 6px 4px",
		position: "relative",
		"& [name=close]": {
			position: "absolute",
			top: "0",
			right: "4px",
			backgroundColor: "inherit",
			border: "none",
			font: "inherit",
			padding: 0,
			margin: 0
		},
		"& input, & button, & label": { margin: ".2em .6em .2em 0" },
		"& input[type=checkbox]": { marginRight: ".2em" },
		"& label": {
			fontSize: "80%",
			whiteSpace: "pre"
		}
	},
	"&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
	"&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
	"&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
	"&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
}), N_ = [
	c_,
	/*@__PURE__*/ sr.low(f_),
	M_
], P_ = class {
	constructor(e, t, n, r) {
		this.state = e, this.pos = t, this.explicit = n, this.view = r, this.abortListeners = [], this.abortOnDocChange = !1;
	}
	tokenBefore(e) {
		let t = bf(this.state).resolveInner(this.pos, -1);
		for (; t && e.indexOf(t.name) < 0;) t = t.parent;
		return t ? {
			from: t.from,
			to: this.pos,
			text: this.state.sliceDoc(t.from, this.pos),
			type: t.type
		} : null;
	}
	matchBefore(e) {
		let t = this.state.doc.lineAt(this.pos), n = Math.max(t.from, this.pos - 250), r = t.text.slice(n - t.from, this.pos - t.from), i = r.search(B_(e, !1));
		return i < 0 ? null : {
			from: n + i,
			to: this.pos,
			text: r.slice(i)
		};
	}
	get aborted() {
		return this.abortListeners == null;
	}
	addEventListener(e, t, n) {
		e == "abort" && this.abortListeners && (this.abortListeners.push(t), n && n.onDocChange && (this.abortOnDocChange = !0));
	}
};
function F_(e) {
	let t = Object.keys(e).join(""), n = /\w/.test(t);
	return n && (t = t.replace(/\w/g, "")), `[${n ? "\\w" : ""}${t.replace(/[^\w\s]/g, "\\$&")}]`;
}
function I_(e) {
	let t = Object.create(null), n = Object.create(null);
	for (let { label: r } of e) {
		t[r[0]] = !0;
		for (let e = 1; e < r.length; e++) n[r[e]] = !0;
	}
	let r = F_(t) + F_(n) + "*$";
	return [RegExp("^" + r), new RegExp(r)];
}
function L_(e) {
	let t = e.map((e) => typeof e == "string" ? { label: e } : e), [n, r] = t.every((e) => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : I_(t);
	return (e) => {
		let i = e.matchBefore(r);
		return i || e.explicit ? {
			from: i ? i.from : e.pos,
			options: t,
			validFor: n
		} : null;
	};
}
var R_ = class {
	constructor(e, t, n, r) {
		this.completion = e, this.source = t, this.match = n, this.score = r;
	}
};
function z_(e) {
	return e.selection.main.from;
}
function B_(e, t) {
	let { source: n } = e, r = t && n[0] != "^", i = n[n.length - 1] != "$";
	return !r && !i ? e : RegExp(`${r ? "^" : ""}(?:${n})${i ? "$" : ""}`, e.flags ?? (e.ignoreCase ? "i" : ""));
}
var V_ = /*@__PURE__*/ Sr.define();
function H_(e, t, n, r) {
	let { main: i } = e.selection, a = n - i.from, o = r - i.from;
	return {
		...e.changeByRange((s) => {
			if (s != i && n != r && e.sliceDoc(s.from + a, s.from + o) != e.sliceDoc(n, r)) return { range: s };
			let c = e.toText(t);
			return {
				changes: {
					from: s.from + a,
					to: r == i.from ? s.to : s.from + o,
					insert: c
				},
				range: q.cursor(s.from + a + c.length)
			};
		}),
		scrollIntoView: !0,
		userEvent: "input.complete"
	};
}
var U_ = /*@__PURE__*/ new WeakMap();
function W_(e) {
	if (!Array.isArray(e)) return e;
	let t = U_.get(e);
	return t || U_.set(e, t = L_(e)), t;
}
var G_ = /*@__PURE__*/ Y.define(), K_ = /*@__PURE__*/ Y.define(), q_ = class {
	constructor(e) {
		this.pattern = e, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
		for (let t = 0; t < e.length;) {
			let n = In(e, t), r = Rn(n);
			this.chars.push(n);
			let i = e.slice(t, t + r), a = i.toUpperCase();
			this.folded.push(In(a == i ? i.toLowerCase() : a, 0)), t += r;
		}
		this.astral = e.length != this.chars.length;
	}
	ret(e, t) {
		return this.score = e, this.matched = t, this;
	}
	match(e) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (e.length < this.pattern.length) return null;
		let { chars: t, folded: n, any: r, precise: i, byWord: a } = this;
		if (t.length == 1) {
			let r = In(e, 0), i = Rn(r), a = i == e.length ? 0 : -100;
			if (r != t[0]) if (r == n[0]) a += -200;
			else return null;
			return this.ret(a, [0, i]);
		}
		let o = e.indexOf(this.pattern);
		if (o == 0) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let s = t.length, c = 0;
		if (o < 0) {
			for (let i = 0, a = Math.min(e.length, 200); i < a && c < s;) {
				let a = In(e, i);
				(a == t[c] || a == n[c]) && (r[c++] = i), i += Rn(a);
			}
			if (c < s) return null;
		}
		let l = 0, u = 0, d = !1, f = 0, p = -1, m = -1, h = /[a-z]/.test(e), g = !0;
		for (let r = 0, c = Math.min(e.length, 200), _ = 0; r < c && u < s;) {
			let c = In(e, r);
			o < 0 && (l < s && c == t[l] && (i[l++] = r), f < s && (c == t[f] || c == n[f] ? (f == 0 && (p = r), m = r + 1, f++) : f = 0));
			let v, y = c < 255 ? c >= 48 && c <= 57 || c >= 97 && c <= 122 ? 2 : +(c >= 65 && c <= 90) : (v = Ln(c)) == v.toLowerCase() ? v == v.toUpperCase() ? 0 : 2 : 1;
			(!r || y == 1 && h || _ == 0 && y != 0) && (t[u] == c || n[u] == c && (d = !0) ? a[u++] = r : a.length && (g = !1)), _ = y, r += Rn(c);
		}
		return u == s && a[0] == 0 && g ? this.result(-100 + (d ? -200 : 0), a, e) : f == s && p == 0 ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m]) : o > -1 ? this.ret(-700 - e.length, [o, o + this.pattern.length]) : f == s ? this.ret(-900 - e.length, [p, m]) : u == s ? this.result(-100 + (d ? -200 : 0) + -700 + (g ? 0 : -1100), a, e) : t.length == 2 ? null : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
	}
	result(e, t, n) {
		let r = [], i = 0;
		for (let e of t) {
			let t = e + (this.astral ? Rn(In(n, e)) : 1);
			i && r[i - 1] == e ? r[i - 1] = t : (r[i++] = e, r[i++] = t);
		}
		return this.ret(e - n.length, r);
	}
}, J_ = class {
	constructor(e) {
		this.pattern = e, this.matched = [], this.score = 0, this.folded = e.toLowerCase();
	}
	match(e) {
		if (e.length < this.pattern.length) return null;
		let t = e.slice(0, this.pattern.length), n = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
		return n == null ? null : (this.matched = [0, t.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
	}
}, Y_ = /*@__PURE__*/ J.define({ combine(e) {
	return Br(e, {
		activateOnTyping: !0,
		activateOnCompletion: () => !1,
		activateOnTypingDelay: 100,
		selectOnOpen: !0,
		override: null,
		closeOnBlur: !0,
		maxRenderedOptions: 100,
		defaultKeymap: !0,
		tooltipClass: () => "",
		optionClass: () => "",
		aboveCursor: !1,
		icons: !0,
		addToOptions: [],
		positionInfo: Z_,
		filterStrict: !1,
		compareCompletions: (e, t) => (e.sortText || e.label).localeCompare(t.sortText || t.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (e, t) => e && t,
		closeOnBlur: (e, t) => e && t,
		icons: (e, t) => e && t,
		tooltipClass: (e, t) => (n) => X_(e(n), t(n)),
		optionClass: (e, t) => (n) => X_(e(n), t(n)),
		addToOptions: (e, t) => e.concat(t),
		filterStrict: (e, t) => e || t
	});
} });
function X_(e, t) {
	return e ? t ? e + " " + t : e : t;
}
function Z_(e, t, n, r, i, a) {
	let o = e.textDirection == xa.RTL, s = o, c = !1, l = "top", u, d, f = t.left - i.left, p = i.right - t.right, m = r.right - r.left, h = r.bottom - r.top;
	if (s && f < Math.min(m, p) ? s = !1 : !s && p < Math.min(m, f) && (s = !0), m <= (s ? f : p)) u = Math.max(i.top, Math.min(n.top, i.bottom - h)) - t.top, d = Math.min(400, s ? f : p);
	else {
		c = !0, d = Math.min(400, (o ? t.right : i.right - t.left) - 30);
		let e = i.bottom - t.bottom;
		e >= h || e > t.top ? u = n.bottom - t.top : (l = "bottom", u = t.bottom - n.top);
	}
	let g = (t.bottom - t.top) / a.offsetHeight, _ = (t.right - t.left) / a.offsetWidth;
	return {
		style: `${l}: ${u / g}px; max-width: ${d / _}px`,
		class: "cm-completionInfo-" + (c ? o ? "left-narrow" : "right-narrow" : s ? "left" : "right")
	};
}
var Q_ = /*@__PURE__*/ Y.define();
function $_(e) {
	let t = e.addToOptions.slice();
	return e.icons && t.push({
		render(e) {
			let t = document.createElement("div");
			return t.classList.add("cm-completionIcon"), e.type && t.classList.add(...e.type.split(/\s+/g).map((e) => "cm-completionIcon-" + e)), t.setAttribute("aria-hidden", "true"), t;
		},
		position: 20
	}), t.push({
		render(e, t, n, r) {
			let i = document.createElement("span");
			i.className = "cm-completionLabel";
			let a = e.displayLabel || e.label, o = 0;
			for (let e = 0; e < r.length;) {
				let t = r[e++], n = r[e++];
				t > o && i.appendChild(document.createTextNode(a.slice(o, t)));
				let s = i.appendChild(document.createElement("span"));
				s.appendChild(document.createTextNode(a.slice(t, n))), s.className = "cm-completionMatchedText", o = n;
			}
			return o < a.length && i.appendChild(document.createTextNode(a.slice(o))), i;
		},
		position: 50
	}, {
		render(e) {
			if (!e.detail) return null;
			let t = document.createElement("span");
			return t.className = "cm-completionDetail", t.textContent = e.detail, t;
		},
		position: 80
	}), t.sort((e, t) => e.position - t.position).map((e) => e.render);
}
function ev(e, t, n) {
	if (e <= n) return {
		from: 0,
		to: e
	};
	if (t < 0 && (t = 0), t <= e >> 1) {
		let e = Math.floor(t / n);
		return {
			from: e * n,
			to: (e + 1) * n
		};
	}
	let r = Math.ceil((e - t) / n);
	return {
		from: e - r * n,
		to: e - (r - 1) * n
	};
}
var tv = class {
	constructor(e, t, n) {
		this.view = e, this.stateField = t, this.applyCompletion = n, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (e) => this.placeInfo(e),
			key: this
		}, this.space = null, this.currentClass = "";
		let r = e.state.field(t), { options: i, selected: a } = r.open, o = e.state.facet(Y_);
		this.optionContent = $_(o), this.optionClass = o.optionClass, this.tooltipClass = o.tooltipClass, this.range = ev(i.length, a, o.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(e.state), this.dom.addEventListener("mousedown", (n) => {
			let { options: r } = e.state.field(t).open;
			for (let t = n.target, i; t && t != this.dom; t = t.parentNode) if (t.nodeName == "LI" && (i = /-(\d+)$/.exec(t.id)) && +i[1] < r.length) {
				this.applyCompletion(e, r[+i[1]]), n.preventDefault();
				return;
			}
			if (n.target == this.list) {
				let t = this.list.classList.contains("cm-completionListIncompleteTop") && n.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && n.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
				t != null && (e.dispatch({ effects: Q_.of(t) }), n.preventDefault());
			}
		}), this.dom.addEventListener("focusout", (t) => {
			let n = e.state.field(this.stateField, !1);
			n && n.tooltip && e.state.facet(Y_).closeOnBlur && t.relatedTarget != e.contentDOM && e.dispatch({ effects: K_.of(null) });
		}), this.showOptions(i, r.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(e, t) {
		this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(e, t, this.range)), this.list.addEventListener("scroll", () => {
			this.info && this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(e) {
		let t = e.state.field(this.stateField), n = e.startState.field(this.stateField);
		if (this.updateTooltipClass(e.state), t != n) {
			let { options: r, selected: i, disabled: a } = t.open;
			(!n.open || n.open.options != r) && (this.range = ev(r.length, i, e.state.facet(Y_).maxRenderedOptions), this.showOptions(r, t.id)), this.updateSel(), a != n.open?.disabled && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!a);
		}
	}
	updateTooltipClass(e) {
		let t = this.tooltipClass(e);
		if (t != this.currentClass) {
			for (let e of this.currentClass.split(" ")) e && this.dom.classList.remove(e);
			for (let e of t.split(" ")) e && this.dom.classList.add(e);
			this.currentClass = t;
		}
	}
	positioned(e) {
		this.space = e, this.info && this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let e = this.view.state.field(this.stateField), t = e.open;
		(t.selected > -1 && t.selected < this.range.from || t.selected >= this.range.to) && (this.range = ev(t.options.length, t.selected, this.view.state.facet(Y_).maxRenderedOptions), this.showOptions(t.options, e.id));
		let n = this.updateSelectedOption(t.selected);
		if (n) {
			this.destroyInfo();
			let { completion: r } = t.options[t.selected], { info: i } = r;
			if (!i) return;
			let a = typeof i == "string" ? document.createTextNode(i) : i(r);
			if (!a) return;
			"then" in a ? a.then((t) => {
				t && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(t, r);
			}).catch((e) => ao(this.view.state, e, "completion info")) : (this.addInfoPane(a, r), n.setAttribute("aria-describedby", this.info.id));
		}
	}
	addInfoPane(e, t) {
		this.destroyInfo();
		let n = this.info = document.createElement("div");
		if (n.className = "cm-tooltip cm-completionInfo", n.id = "cm-completionInfo-" + Math.floor(Math.random() * 65535).toString(16), e.nodeType != null) n.appendChild(e), this.infoDestroy = null;
		else {
			let { dom: t, destroy: r } = e;
			n.appendChild(t), this.infoDestroy = r || null;
		}
		this.dom.appendChild(n), this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(e) {
		let t = null;
		for (let n = this.list.firstChild, r = this.range.from; n; n = n.nextSibling, r++) n.nodeName != "LI" || !n.id ? r-- : r == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), t = n) : n.hasAttribute("aria-selected") && (n.removeAttribute("aria-selected"), n.removeAttribute("aria-describedby"));
		return t && rv(this.list, t), t;
	}
	measureInfo() {
		let e = this.dom.querySelector("[aria-selected]");
		if (!e || !this.info) return null;
		let t = this.dom.getBoundingClientRect(), n = this.info.getBoundingClientRect(), r = e.getBoundingClientRect(), i = this.space;
		if (!i) {
			let e = this.dom.ownerDocument.documentElement;
			i = {
				left: 0,
				top: 0,
				right: e.clientWidth,
				bottom: e.clientHeight
			};
		}
		return r.top > Math.min(i.bottom, t.bottom) - 10 || r.bottom < Math.max(i.top, t.top) + 10 ? null : this.view.state.facet(Y_).positionInfo(this.view, t, r, n, i, this.dom);
	}
	placeInfo(e) {
		this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")) : this.info.style.cssText = "top: -1e6px");
	}
	createListBox(e, t, n) {
		let r = document.createElement("ul");
		r.id = t, r.setAttribute("role", "listbox"), r.setAttribute("aria-expanded", "true"), r.setAttribute("aria-label", this.view.state.phrase("Completions")), r.addEventListener("mousedown", (e) => {
			e.target == r && e.preventDefault();
		});
		let i = null;
		for (let a = n.from; a < n.to; a++) {
			let { completion: o, match: s } = e[a], { section: c } = o;
			if (c) {
				let e = typeof c == "string" ? c : c.name;
				if (e != i && (a > n.from || n.from == 0)) if (i = e, typeof c != "string" && c.header) r.appendChild(c.header(c));
				else {
					let t = r.appendChild(document.createElement("completion-section"));
					t.textContent = e;
				}
			}
			let l = r.appendChild(document.createElement("li"));
			l.id = t + "-" + a, l.setAttribute("role", "option");
			let u = this.optionClass(o);
			u && (l.className = u);
			for (let e of this.optionContent) {
				let t = e(o, this.view.state, this.view, s);
				t && l.appendChild(t);
			}
		}
		return n.from && r.classList.add("cm-completionListIncompleteTop"), n.to < e.length && r.classList.add("cm-completionListIncompleteBottom"), r;
	}
	destroyInfo() {
		this.info &&= (this.infoDestroy && this.infoDestroy(), this.info.remove(), null);
	}
	destroy() {
		this.destroyInfo();
	}
};
function nv(e, t) {
	return (n) => new tv(n, e, t);
}
function rv(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = n.height / e.offsetHeight;
	r.top < n.top ? e.scrollTop -= (n.top - r.top) / i : r.bottom > n.bottom && (e.scrollTop += (r.bottom - n.bottom) / i);
}
function iv(e) {
	return (e.boost || 0) * 100 + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + +!!e.type;
}
function av(e, t) {
	let n = [], r = null, i = null, a = (e) => {
		n.push(e);
		let { section: t } = e.completion;
		if (t) {
			r ||= [];
			let e = typeof t == "string" ? t : t.name;
			r.some((t) => t.name == e) || r.push(typeof t == "string" ? { name: e } : t);
		}
	}, o = t.facet(Y_);
	for (let r of e) if (r.hasResult()) {
		let e = r.result.getMatch;
		if (r.result.filter === !1) for (let t of r.result.options) a(new R_(t, r.source, e ? e(t) : [], 1e9 - n.length));
		else {
			let n = t.sliceDoc(r.from, r.to), s, c = o.filterStrict ? new J_(n) : new q_(n);
			for (let t of r.result.options) if (s = c.match(t.label)) {
				let n = t.displayLabel ? e ? e(t, s.matched) : [] : s.matched, o = s.score + (t.boost || 0);
				if (a(new R_(t, r.source, n, o)), typeof t.section == "object" && t.section.rank === "dynamic") {
					let { name: e } = t.section;
					i ||= Object.create(null), i[e] = Math.max(o, i[e] || -1e9);
				}
			}
		}
	}
	if (r) {
		let e = Object.create(null), t = 0, a = (e, t) => (e.rank === "dynamic" && t.rank === "dynamic" ? i[t.name] - i[e.name] : 0) || (typeof e.rank == "number" ? e.rank : 1e9) - (typeof t.rank == "number" ? t.rank : 1e9) || (e.name < t.name ? -1 : 1);
		for (let n of r.sort(a)) t -= 1e5, e[n.name] = t;
		for (let t of n) {
			let { section: n } = t.completion;
			n && (t.score += e[typeof n == "string" ? n : n.name]);
		}
	}
	let s = [], c = null, l = o.compareCompletions;
	for (let e of n.sort((e, t) => t.score - e.score || l(e.completion, t.completion))) {
		let t = e.completion;
		!c || c.label != t.label || c.detail != t.detail || c.type != null && t.type != null && c.type != t.type || c.apply != t.apply || c.boost != t.boost ? s.push(e) : iv(e.completion) > iv(c) && (s[s.length - 1] = e), c = e.completion;
	}
	return s;
}
var ov = class e {
	constructor(e, t, n, r, i, a) {
		this.options = e, this.attrs = t, this.tooltip = n, this.timestamp = r, this.selected = i, this.disabled = a;
	}
	setSelected(t, n) {
		return t == this.selected || t >= this.options.length ? this : new e(this.options, dv(n, t), this.tooltip, this.timestamp, t, this.disabled);
	}
	static build(t, n, r, i, a, o) {
		if (i && !o && t.some((e) => e.isPending)) return i.setDisabled();
		let s = av(t, n);
		if (!s.length) return i && t.some((e) => e.isPending) ? i.setDisabled() : null;
		let c = n.facet(Y_).selectOnOpen ? 0 : -1;
		if (i && i.selected != c && i.selected != -1) {
			let e = i.options[i.selected].completion;
			for (let t = 0; t < s.length; t++) if (s[t].completion == e) {
				c = t;
				break;
			}
		}
		return new e(s, dv(r, c), {
			pos: t.reduce((e, t) => t.hasResult() ? Math.min(e, t.from) : e, 1e8),
			create: bv,
			above: a.aboveCursor
		}, i ? i.timestamp : Date.now(), c, !1);
	}
	map(t) {
		return new e(this.options, this.attrs, {
			...this.tooltip,
			pos: t.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new e(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
	}
}, sv = class e {
	constructor(e, t, n) {
		this.active = e, this.id = t, this.open = n;
	}
	static start() {
		return new e(fv, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(t) {
		let { state: n } = t, r = n.facet(Y_), i = (r.override || n.languageDataAt("autocomplete", z_(n)).map(W_)).map((e) => (this.active.find((t) => t.source == e) || new mv(e, +!!this.active.some((e) => e.state != 0))).update(t, r));
		i.length == this.active.length && i.every((e, t) => e == this.active[t]) && (i = this.active);
		let a = this.open, o = t.effects.some((e) => e.is(_v));
		a && t.docChanged && (a = a.map(t.changes)), t.selection || i.some((e) => e.hasResult() && t.changes.touchesRange(e.from, e.to)) || !cv(i, this.active) || o ? a = ov.build(i, n, this.id, a, r, o) : a && a.disabled && !i.some((e) => e.isPending) && (a = null), !a && i.every((e) => !e.isPending) && i.some((e) => e.hasResult()) && (i = i.map((e) => e.hasResult() ? new mv(e.source, 0) : e));
		for (let e of t.effects) e.is(Q_) && (a &&= a.setSelected(e.value, this.id));
		return i == this.active && a == this.open ? this : new e(i, this.id, a);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? lv : uv;
	}
};
function cv(e, t) {
	if (e == t) return !0;
	for (let n = 0, r = 0;;) {
		for (; n < e.length && !e[n].hasResult();) n++;
		for (; r < t.length && !t[r].hasResult();) r++;
		let i = n == e.length, a = r == t.length;
		if (i || a) return i == a;
		if (e[n++].result != t[r++].result) return !1;
	}
}
var lv = { "aria-autocomplete": "list" }, uv = {};
function dv(e, t) {
	let n = {
		"aria-autocomplete": "list",
		"aria-haspopup": "listbox",
		"aria-controls": e
	};
	return t > -1 && (n["aria-activedescendant"] = e + "-" + t), n;
}
var fv = [];
function pv(e, t) {
	if (e.isUserEvent("input.complete")) {
		let n = e.annotation(V_);
		if (n && t.activateOnCompletion(n)) return 12;
	}
	let n = e.isUserEvent("input.type");
	return n && t.activateOnTyping ? 5 : n ? 1 : e.isUserEvent("delete.backward") ? 2 : e.selection ? 8 : e.docChanged ? 16 : 0;
}
var mv = class e {
	constructor(e, t, n = !1) {
		this.source = e, this.state = t, this.explicit = n;
	}
	hasResult() {
		return !1;
	}
	get isPending() {
		return this.state == 1;
	}
	update(t, n) {
		let r = pv(t, n), i = this;
		(r & 8 || r & 16 && this.touches(t)) && (i = new e(i.source, 0)), r & 4 && i.state == 0 && (i = new e(this.source, 1)), i = i.updateFor(t, r);
		for (let n of t.effects) if (n.is(G_)) i = new e(i.source, 1, n.value);
		else if (n.is(K_)) i = new e(i.source, 0);
		else if (n.is(_v)) for (let e of n.value) e.source == i.source && (i = e);
		return i;
	}
	updateFor(e, t) {
		return this.map(e.changes);
	}
	map(e) {
		return this;
	}
	touches(e) {
		return e.changes.touchesRange(z_(e.state));
	}
}, hv = class e extends mv {
	constructor(e, t, n, r, i, a) {
		super(e, 3, t), this.limit = n, this.result = r, this.from = i, this.to = a;
	}
	hasResult() {
		return !0;
	}
	updateFor(t, n) {
		if (!(n & 3)) return this.map(t.changes);
		let r = this.result;
		r.map && !t.changes.empty && (r = r.map(r, t.changes));
		let i = t.changes.mapPos(this.from), a = t.changes.mapPos(this.to, 1), o = z_(t.state);
		if (o > a || !r || n & 2 && (z_(t.startState) == this.from || o < this.limit)) return new mv(this.source, n & 4 ? 1 : 0);
		let s = t.changes.mapPos(this.limit);
		return gv(r.validFor, t.state, i, a) ? new e(this.source, this.explicit, s, r, i, a) : r.update && (r = r.update(r, i, a, new P_(t.state, o, !1))) ? new e(this.source, this.explicit, s, r, r.from, r.to ?? z_(t.state)) : new mv(this.source, 1, this.explicit);
	}
	map(t) {
		if (t.empty) return this;
		let n = this.result.map ? this.result.map(this.result, t) : this.result;
		return n ? new e(this.source, this.explicit, t.mapPos(this.limit), n, t.mapPos(this.from), t.mapPos(this.to, 1)) : new mv(this.source, 0);
	}
	touches(e) {
		return e.changes.touchesRange(this.from, this.to);
	}
};
function gv(e, t, n, r) {
	if (!e) return !1;
	let i = t.sliceDoc(n, r);
	return typeof e == "function" ? e(i, n, r, t) : B_(e, !0).test(i);
}
var _v = /*@__PURE__*/ Y.define({ map(e, t) {
	return e.map((e) => e.map(t));
} }), vv = /*@__PURE__*/ ir.define({
	create() {
		return sv.start();
	},
	update(e, t) {
		return e.update(t);
	},
	provide: (e) => [Vu.from(e, (e) => e.tooltip), Q.contentAttributes.from(e, (e) => e.attrs)]
});
function yv(e, t) {
	let n = t.completion.apply || t.completion.label, r = e.state.field(vv).active.find((e) => e.source == t.source);
	return r instanceof hv && (typeof n == "string" ? e.dispatch({
		...H_(e.state, n, r.from, r.to),
		annotations: V_.of(t.completion)
	}) : n(e, t.completion, r.from, r.to), !0);
}
var bv = /*@__PURE__*/ nv(vv, yv);
function xv(e, t = "option") {
	return (n) => {
		let r = n.state.field(vv, !1);
		if (!r || !r.open || r.open.disabled || Date.now() - r.open.timestamp < n.state.facet(Y_).interactionDelay) return !1;
		let i = 1, a;
		t == "page" && (a = Qu(n, r.open.tooltip)) && (i = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
		let { length: o } = r.open.options, s = r.open.selected > -1 ? r.open.selected + i * (e ? 1 : -1) : e ? 0 : o - 1;
		return s < 0 ? s = t == "page" ? 0 : o - 1 : s >= o && (s = t == "page" ? o - 1 : 0), n.dispatch({ effects: Q_.of(s) }), !0;
	};
}
var Sv = (e) => {
	let t = e.state.field(vv, !1);
	return e.state.readOnly || !t || !t.open || t.open.selected < 0 || t.open.disabled || Date.now() - t.open.timestamp < e.state.facet(Y_).interactionDelay ? !1 : yv(e, t.open.options[t.open.selected]);
}, Cv = (e) => e.state.field(vv, !1) ? (e.dispatch({ effects: G_.of(!0) }), !0) : !1, wv = (e) => {
	let t = e.state.field(vv, !1);
	return !t || !t.active.some((e) => e.state != 0) ? !1 : (e.dispatch({ effects: K_.of(null) }), !0);
}, Tv = class {
	constructor(e, t) {
		this.active = e, this.context = t, this.time = Date.now(), this.updates = [], this.done = void 0;
	}
}, Ev = 50, Dv = 1e3, Ov = /*@__PURE__*/ lo.fromClass(class {
	constructor(e) {
		this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
		for (let t of e.state.field(vv).active) t.isPending && this.startQuery(t);
	}
	update(e) {
		let t = e.state.field(vv), n = e.state.facet(Y_);
		if (!e.selectionSet && !e.docChanged && e.startState.field(vv) == t) return;
		let r = e.transactions.some((e) => {
			let t = pv(e, n);
			return t & 8 || (e.selection || e.docChanged) && !(t & 3);
		});
		for (let t = 0; t < this.running.length; t++) {
			let n = this.running[t];
			if (r || n.context.abortOnDocChange && e.docChanged || n.updates.length + e.transactions.length > Ev && Date.now() - n.time > Dv) {
				for (let e of n.context.abortListeners) try {
					e();
				} catch (e) {
					ao(this.view.state, e);
				}
				n.context.abortListeners = null, this.running.splice(t--, 1);
			} else n.updates.push(...e.transactions);
		}
		this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), e.transactions.some((e) => e.effects.some((e) => e.is(G_))) && (this.pendingStart = !0);
		let i = this.pendingStart ? 50 : n.activateOnTypingDelay;
		if (this.debounceUpdate = t.active.some((e) => e.isPending && !this.running.some((t) => t.active.source == e.source)) ? setTimeout(() => this.startUpdate(), i) : -1, this.composing != 0) for (let t of e.transactions) t.isUserEvent("input.type") ? this.composing = 2 : this.composing == 2 && t.selection && (this.composing = 3);
	}
	startUpdate() {
		this.debounceUpdate = -1, this.pendingStart = !1;
		let { state: e } = this.view, t = e.field(vv);
		for (let e of t.active) e.isPending && !this.running.some((t) => t.active.source == e.source) && this.startQuery(e);
		this.running.length && t.open && t.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Y_).updateSyncTime));
	}
	startQuery(e) {
		let { state: t } = this.view, n = new P_(t, z_(t), e.explicit, this.view), r = new Tv(e, n);
		this.running.push(r), Promise.resolve(e.source(n)).then((e) => {
			r.context.aborted || (r.done = e || null, this.scheduleAccept());
		}, (e) => {
			this.view.dispatch({ effects: K_.of(null) }), ao(this.view.state, e);
		});
	}
	scheduleAccept() {
		this.running.every((e) => e.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Y_).updateSyncTime));
	}
	accept() {
		this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
		let e = [], t = this.view.state.facet(Y_), n = this.view.state.field(vv);
		for (let r = 0; r < this.running.length; r++) {
			let i = this.running[r];
			if (i.done === void 0) continue;
			if (this.running.splice(r--, 1), i.done) {
				let n = z_(i.updates.length ? i.updates[0].startState : this.view.state), r = Math.min(n, i.done.from + +!i.active.explicit), a = new hv(i.active.source, i.active.explicit, r, i.done, i.done.from, i.done.to ?? n);
				for (let e of i.updates) a = a.update(e, t);
				if (a.hasResult()) {
					e.push(a);
					continue;
				}
			}
			let a = n.active.find((e) => e.source == i.active.source);
			if (a && a.isPending) if (i.done == null) {
				let n = new mv(i.active.source, 0);
				for (let e of i.updates) n = n.update(e, t);
				n.isPending || e.push(n);
			} else this.startQuery(a);
		}
		(e.length || n.open && n.open.disabled) && this.view.dispatch({ effects: _v.of(e) });
	}
}, { eventHandlers: {
	blur(e) {
		let t = this.view.state.field(vv, !1);
		if (t && t.tooltip && this.view.state.facet(Y_).closeOnBlur) {
			let n = t.open && Qu(this.view, t.open.tooltip);
			(!n || !n.dom.contains(e.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: K_.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: G_.of(!1) }), 20), this.composing = 0;
	}
} }), kv = typeof navigator == "object" && /*@__PURE__*/ /Win/.test(navigator.platform), Av = /*@__PURE__*/ sr.highest(/*@__PURE__*/ Q.domEventHandlers({ keydown(e, t) {
	let n = t.state.field(vv, !1);
	if (!n || !n.open || n.open.disabled || n.open.selected < 0 || e.key.length > 1 || e.ctrlKey && !(kv && e.altKey) || e.metaKey) return !1;
	let r = n.open.options[n.open.selected], i = n.active.find((e) => e.source == r.source), a = r.completion.commitCharacters || i.result.commitCharacters;
	return a && a.indexOf(e.key) > -1 && yv(t, r), !1;
} })), jv = /*@__PURE__*/ Q.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: "monospace",
		whiteSpace: "nowrap",
		overflow: "hidden auto",
		maxWidth_fallback: "700px",
		maxWidth: "min(700px, 95vw)",
		minWidth: "250px",
		maxHeight: "10em",
		height: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: "1px 3px",
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: "hidden",
			textOverflow: "ellipsis",
			cursor: "pointer"
		},
		"& > completion-section": {
			display: "list-item",
			borderBottom: "1px solid silver",
			paddingLeft: "0.5em",
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#17c",
		color: "white"
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: "#347",
		color: "white"
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: "\"···\"",
		opacity: .5,
		display: "block",
		textAlign: "center",
		cursor: "pointer"
	},
	".cm-tooltip.cm-completionInfo": {
		position: "absolute",
		padding: "3px 9px",
		width: "max-content",
		maxWidth: "400px",
		boxSizing: "border-box",
		whiteSpace: "pre-line"
	},
	".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
	".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
	"&light .cm-snippetField": { backgroundColor: "#00000022" },
	"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
	".cm-snippetFieldPosition": {
		verticalAlign: "text-top",
		width: 0,
		height: "1.15em",
		display: "inline-block",
		margin: "0 -0.7px -.7em",
		borderLeft: "1.4px dotted #888"
	},
	".cm-completionMatchedText": { textDecoration: "underline" },
	".cm-completionDetail": {
		marginLeft: "0.5em",
		fontStyle: "italic"
	},
	".cm-completionIcon": {
		fontSize: "90%",
		width: ".8em",
		display: "inline-block",
		textAlign: "center",
		paddingRight: ".6em",
		opacity: "0.6",
		boxSizing: "content-box"
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
	".cm-completionIcon-class": { "&:after": { content: "'○'" } },
	".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
	".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
	".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
	".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
	".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
	".cm-completionIcon-property": { "&:after": { content: "'□'" } },
	".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
	".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
	".cm-completionIcon-text": { "&:after": {
		content: "'abc'",
		fontSize: "50%",
		verticalAlign: "middle"
	} }
}), Mv = {
	brackets: [
		"(",
		"[",
		"{",
		"'",
		"\""
	],
	before: ")]}:;>",
	stringPrefixes: []
}, Nv = /*@__PURE__*/ Y.define({ map(e, t) {
	return t.mapPos(e, -1, Bn.TrackAfter) ?? void 0;
} }), Pv = /*@__PURE__*/ new class extends Vr {}();
Pv.startSide = 1, Pv.endSide = -1;
var Fv = /*@__PURE__*/ ir.define({
	create() {
		return Kr.empty;
	},
	update(e, t) {
		if (e = e.map(t.changes), t.selection) {
			let n = t.state.doc.lineAt(t.selection.main.head);
			e = e.update({ filter: (e) => e >= n.from && e <= n.to });
		}
		for (let n of t.effects) n.is(Nv) && (e = e.update({ add: [Pv.range(n.value, n.value + 1)] }));
		return e;
	}
});
function Iv() {
	return [Vv, Fv];
}
var Lv = "()[]{}<>«»»«［］｛｝";
function Rv(e) {
	for (let t = 0; t < 16; t += 2) if (Lv.charCodeAt(t) == e) return Lv.charAt(t + 1);
	return Ln(e < 128 ? e : e + 1);
}
function zv(e, t) {
	return e.languageDataAt("closeBrackets", t)[0] || Mv;
}
var Bv = typeof navigator == "object" && /*@__PURE__*/ /Android\b/.test(navigator.userAgent), Vv = /*@__PURE__*/ Q.inputHandler.of((e, t, n, r) => {
	if ((Bv ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
	let i = e.state.selection.main;
	if (r.length > 2 || r.length == 2 && Rn(In(r, 0)) == 1 || t != i.from || n != i.to) return !1;
	let a = Uv(e.state, r);
	return a ? (e.dispatch(a), !0) : !1;
}), Hv = [{
	key: "Backspace",
	run: ({ state: e, dispatch: t }) => {
		if (e.readOnly) return !1;
		let n = zv(e, e.selection.main.head).brackets || Mv.brackets, r = null, i = e.changeByRange((t) => {
			if (t.empty) {
				let r = Kv(e.doc, t.head);
				for (let i of n) if (i == r && Gv(e.doc, t.head) == Rv(In(i, 0))) return {
					changes: {
						from: t.head - i.length,
						to: t.head + i.length
					},
					range: q.cursor(t.head - i.length)
				};
			}
			return { range: r = t };
		});
		return r || t(e.update(i, {
			scrollIntoView: !0,
			userEvent: "delete.backward"
		})), !r;
	}
}];
function Uv(e, t) {
	let n = zv(e, e.selection.main.head), r = n.brackets || Mv.brackets;
	for (let i of r) {
		let a = Rv(In(i, 0));
		if (t == i) return a == i ? Yv(e, i, r.indexOf(i + i + i) > -1, n) : qv(e, i, a, n.before || Mv.before);
		if (t == a && Wv(e, e.selection.main.from)) return Jv(e, i, a);
	}
	return null;
}
function Wv(e, t) {
	let n = !1;
	return e.field(Fv).between(0, e.doc.length, (e) => {
		e == t && (n = !0);
	}), n;
}
function Gv(e, t) {
	let n = e.sliceString(t, t + 2);
	return n.slice(0, Rn(In(n, 0)));
}
function Kv(e, t) {
	let n = e.sliceString(t - 2, t);
	return Rn(In(n, 0)) == n.length ? n : n.slice(1);
}
function qv(e, t, n, r) {
	let i = null, a = e.changeByRange((a) => {
		if (!a.empty) return {
			changes: [{
				insert: t,
				from: a.from
			}, {
				insert: n,
				from: a.to
			}],
			effects: Nv.of(a.to + t.length),
			range: q.range(a.anchor + t.length, a.head + t.length)
		};
		let o = Gv(e.doc, a.head);
		return !o || /\s/.test(o) || r.indexOf(o) > -1 ? {
			changes: {
				insert: t + n,
				from: a.head
			},
			effects: Nv.of(a.head + t.length),
			range: q.cursor(a.head + t.length)
		} : { range: i = a };
	});
	return i ? null : e.update(a, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function Jv(e, t, n) {
	let r = null, i = e.changeByRange((t) => t.empty && Gv(e.doc, t.head) == n ? {
		changes: {
			from: t.head,
			to: t.head + n.length,
			insert: n
		},
		range: q.cursor(t.head + n.length)
	} : r = { range: t });
	return r ? null : e.update(i, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function Yv(e, t, n, r) {
	let i = r.stringPrefixes || Mv.stringPrefixes, a = null, o = e.changeByRange((r) => {
		if (!r.empty) return {
			changes: [{
				insert: t,
				from: r.from
			}, {
				insert: t,
				from: r.to
			}],
			effects: Nv.of(r.to + t.length),
			range: q.range(r.anchor + t.length, r.head + t.length)
		};
		let o = r.head, s = Gv(e.doc, o), c;
		if (s == t) {
			if (Xv(e, o)) return {
				changes: {
					insert: t + t,
					from: o
				},
				effects: Nv.of(o + t.length),
				range: q.cursor(o + t.length)
			};
			if (Wv(e, o)) {
				let r = n && e.sliceDoc(o, o + t.length * 3) == t + t + t ? t + t + t : t;
				return {
					changes: {
						from: o,
						to: o + r.length,
						insert: r
					},
					range: q.cursor(o + r.length)
				};
			}
		} else if (n && e.sliceDoc(o - 2 * t.length, o) == t + t && (c = Qv(e, o - 2 * t.length, i)) > -1 && Xv(e, c)) return {
			changes: {
				insert: t + t + t + t,
				from: o
			},
			effects: Nv.of(o + t.length),
			range: q.cursor(o + t.length)
		};
		else if (e.charCategorizer(o)(s) != Pr.Word && Qv(e, o, i) > -1 && !Zv(e, o, t, i)) return {
			changes: {
				insert: t + t,
				from: o
			},
			effects: Nv.of(o + t.length),
			range: q.cursor(o + t.length)
		};
		return { range: a = r };
	});
	return a ? null : e.update(o, {
		scrollIntoView: !0,
		userEvent: "input.type"
	});
}
function Xv(e, t) {
	let n = bf(e).resolveInner(t + 1);
	return n.parent && n.from == t;
}
function Zv(e, t, n, r) {
	let i = bf(e).resolveInner(t, -1), a = r.reduce((e, t) => Math.max(e, t.length), 0);
	for (let o = 0; o < 5; o++) {
		let o = e.sliceDoc(i.from, Math.min(i.to, i.from + n.length + a)), s = o.indexOf(n);
		if (!s || s > -1 && r.indexOf(o.slice(0, s)) > -1) {
			let t = i.firstChild;
			for (; t && t.from == i.from && t.to - t.from > n.length + s;) {
				if (e.sliceDoc(t.to - n.length, t.to) == n) return !1;
				t = t.firstChild;
			}
			return !0;
		}
		let c = i.to == t && i.parent;
		if (!c) break;
		i = c;
	}
	return !1;
}
function Qv(e, t, n) {
	let r = e.charCategorizer(t);
	if (r(e.sliceDoc(t - 1, t)) != Pr.Word) return t;
	for (let i of n) {
		let n = t - i.length;
		if (e.sliceDoc(n, t) == i && r(e.sliceDoc(n - 1, n)) != Pr.Word) return n;
	}
	return -1;
}
function $v(e = {}) {
	return [
		Av,
		vv,
		Y_.of(e),
		Ov,
		ty,
		jv
	];
}
var ey = [
	{
		key: "Ctrl-Space",
		run: Cv
	},
	{
		mac: "Alt-`",
		run: Cv
	},
	{
		mac: "Alt-i",
		run: Cv
	},
	{
		key: "Escape",
		run: wv
	},
	{
		key: "ArrowDown",
		run: /*@__PURE__*/ xv(!0)
	},
	{
		key: "ArrowUp",
		run: /*@__PURE__*/ xv(!1)
	},
	{
		key: "PageDown",
		run: /*@__PURE__*/ xv(!0, "page")
	},
	{
		key: "PageUp",
		run: /*@__PURE__*/ xv(!1, "page")
	},
	{
		key: "Enter",
		run: Sv
	}
], ty = /*@__PURE__*/ sr.highest(/*@__PURE__*/ Dl.computeN([Y_], (e) => e.facet(Y_).defaultKeymap ? [ey] : [])), ny = class {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.diagnostic = n;
	}
}, ry = class e {
	constructor(e, t, n) {
		this.diagnostics = e, this.panel = t, this.selected = n;
	}
	static init(t, n, r) {
		let i = r.facet(_y).markerFilter;
		i && (t = i(t, r));
		let a = t.slice().sort((e, t) => e.from - t.from || e.to - t.to), o = new Jr(), s = [], c = 0, l = r.doc.iter(), u = 0, d = r.doc.length;
		for (let e = 0;;) {
			let t = e == a.length ? null : a[e];
			if (!t && !s.length) break;
			let n, r;
			if (s.length) n = c, r = s.reduce((e, t) => Math.min(e, t.to), t && t.from > n ? t.from : 1e8);
			else {
				if (n = t.from, n > d) break;
				r = t.to, s.push(t), e++;
			}
			for (; e < a.length;) {
				let t = a[e];
				if (t.from == n && (t.to > t.from || t.to == n)) s.push(t), e++, r = Math.min(t.to, r);
				else {
					r = Math.min(t.from, r);
					break;
				}
			}
			r = Math.min(r, d);
			let i = !1;
			if (s.some((e) => e.from == n && (e.to == r || r == d)) && (i = n == r, !i && r - n < 10)) {
				let e = n - (u + l.value.length);
				e > 0 && (l.next(e), u = n);
				for (let e = n;;) {
					if (e >= r) {
						i = !0;
						break;
					}
					if (!l.lineBreak && u + l.value.length > e) break;
					e = u + l.value.length, u += l.value.length, l.next();
				}
			}
			let f = Oy(s);
			if (i) o.add(n, n, Z.widget({
				widget: new xy(f),
				diagnostics: s.slice()
			}));
			else {
				let e = s.reduce((e, t) => t.markClass ? e + " " + t.markClass : e, "");
				o.add(n, r, Z.mark({
					class: "cm-lintRange cm-lintRange-" + f + e,
					diagnostics: s.slice(),
					inclusiveEnd: s.some((e) => e.to > r)
				}));
			}
			if (c = r, c == d) break;
			for (let e = 0; e < s.length; e++) s[e].to <= c && s.splice(e--, 1);
		}
		let f = o.finish();
		return new e(f, n, iy(f));
	}
};
function iy(e, t = null, n = 0) {
	let r = null;
	return e.between(n, 1e9, (e, n, { spec: i }) => {
		if (!(t && i.diagnostics.indexOf(t) < 0)) if (!r) r = new ny(e, n, t || i.diagnostics[0]);
		else if (i.diagnostics.indexOf(r.diagnostic) < 0) return !1;
		else r = new ny(r.from, n, r.diagnostic);
	}), r;
}
function ay(e, t) {
	let n = t.pos, r = t.end || n, i = e.state.facet(_y).hideOn(e, n, r);
	if (i != null) return i;
	let a = e.startState.doc.lineAt(t.pos);
	return !!(e.effects.some((e) => e.is(sy)) || e.changes.touchesRange(a.from, Math.max(a.to, r)));
}
function oy(e, t) {
	return e.field(uy, !1) ? t : t.concat(Y.appendConfig.of(Ay));
}
var sy = /*@__PURE__*/ Y.define(), cy = /*@__PURE__*/ Y.define(), ly = /*@__PURE__*/ Y.define(), uy = /*@__PURE__*/ ir.define({
	create() {
		return new ry(Z.none, null, null);
	},
	update(e, t) {
		if (t.docChanged && e.diagnostics.size) {
			let n = e.diagnostics.map(t.changes), r = null, i = e.panel;
			if (e.selected) {
				let i = t.changes.mapPos(e.selected.from, 1);
				r = iy(n, e.selected.diagnostic, i) || iy(n, null, i);
			}
			!n.size && i && t.state.facet(_y).autoPanel && (i = null), e = new ry(n, i, r);
		}
		for (let n of t.effects) if (n.is(sy)) {
			let r = t.state.facet(_y).autoPanel ? n.value.length ? Cy.open : null : e.panel;
			e = ry.init(n.value, r, t.state);
		} else n.is(cy) ? e = new ry(e.diagnostics, n.value ? Cy.open : null, e.selected) : n.is(ly) && (e = new ry(e.diagnostics, e.panel, n.value));
		return e;
	},
	provide: (e) => [ad.from(e, (e) => e.panel), Q.decorations.from(e, (e) => e.diagnostics)]
}), dy = /*@__PURE__*/ Z.mark({ class: "cm-lintRange cm-lintRange-active" });
function fy(e, t, n) {
	let { diagnostics: r } = e.state.field(uy), i, a = -1, o = -1;
	r.between(t - +(n < 0), t + +(n > 0), (e, r, { spec: s }) => {
		if (t >= e && t <= r && (e == r || (t > e || n > 0) && (t < r || n < 0))) return i = s.diagnostics, a = e, o = r, !1;
	});
	let s = e.state.facet(_y).tooltipFilter;
	return i && s && (i = s(i, e.state)), i ? {
		pos: a,
		end: o,
		above: !0,
		create() {
			return { dom: py(e, i) };
		}
	} : null;
}
function py(e, t) {
	return xi("ul", { class: "cm-tooltip-lint" }, t.map((t) => by(e, t, !1)));
}
var my = (e) => {
	let t = e.state.field(uy, !1);
	(!t || !t.panel) && e.dispatch({ effects: oy(e.state, [cy.of(!0)]) });
	let n = td(e, Cy.open);
	return n && n.dom.querySelector(".cm-panel-lint ul").focus(), !0;
}, hy = (e) => {
	let t = e.state.field(uy, !1);
	return !t || !t.panel ? !1 : (e.dispatch({ effects: cy.of(!1) }), !0);
}, gy = [{
	key: "Mod-Shift-m",
	run: my,
	preventDefault: !0
}, {
	key: "F8",
	run: (e) => {
		let t = e.state.field(uy, !1);
		if (!t) return !1;
		let n = e.state.selection.main, r = iy(t.diagnostics, null, n.to + 1);
		return !r && (r = iy(t.diagnostics, null, 0), !r || r.from == n.from && r.to == n.to) ? !1 : (e.dispatch({
			selection: {
				anchor: r.from,
				head: r.to
			},
			scrollIntoView: !0
		}), Zu(e, r.from, 1, {
			tooltip: ky,
			until: (e) => e.docChanged || e.newSelection.main.head < r.from || e.newSelection.main.head > r.to
		}), !0);
	}
}], _y = /*@__PURE__*/ J.define({ combine(e) {
	return {
		sources: e.map((e) => e.source).filter((e) => e != null),
		...Br(e.map((e) => e.config), {
			delay: 750,
			markerFilter: null,
			tooltipFilter: null,
			needsRefresh: null,
			hideOn: () => null
		}, {
			delay: Math.max,
			markerFilter: vy,
			tooltipFilter: vy,
			needsRefresh: (e, t) => e ? t ? (n) => e(n) || t(n) : e : t,
			hideOn: (e, t) => e ? t ? (n, r, i) => e(n, r, i) || t(n, r, i) : e : t,
			autoPanel: (e, t) => e || t
		})
	};
} });
function vy(e, t) {
	return e ? t ? (n, r) => t(e(n, r), r) : e : t;
}
function yy(e) {
	let t = [];
	if (e) actions: for (let { name: n } of e) {
		for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (/[a-zA-Z]/.test(r) && !t.some((e) => e.toLowerCase() == r.toLowerCase())) {
				t.push(r);
				continue actions;
			}
		}
		t.push("");
	}
	return t;
}
function by(e, t, n) {
	let r = n ? yy(t.actions) : [];
	return xi("li", { class: "cm-diagnostic cm-diagnostic-" + t.severity }, xi("span", { class: "cm-diagnosticText" }, t.renderMessage ? t.renderMessage(e) : t.message), t.actions?.map((n, i) => {
		let a = !1, o = (r) => {
			if (r.preventDefault(), a) return;
			a = !0;
			let i = iy(e.state.field(uy).diagnostics, t);
			i && n.apply(e, i.from, i.to);
		}, { name: s } = n, c = r[i] ? s.indexOf(r[i]) : -1, l = c < 0 ? s : [
			s.slice(0, c),
			xi("u", s.slice(c, c + 1)),
			s.slice(c + 1)
		];
		return xi("button", {
			type: "button",
			class: "cm-diagnosticAction" + (n.markClass ? " " + n.markClass : ""),
			onclick: o,
			onmousedown: o,
			"aria-label": ` Action: ${s}${c < 0 ? "" : ` (access key "${r[i]})"`}.`
		}, l);
	}), t.source && xi("div", { class: "cm-diagnosticSource" }, t.source));
}
var xy = class extends Bi {
	constructor(e) {
		super(), this.sev = e;
	}
	eq(e) {
		return e.sev == this.sev;
	}
	toDOM() {
		return xi("span", { class: "cm-lintPoint cm-lintPoint-" + this.sev });
	}
}, Sy = class {
	constructor(e, t) {
		this.diagnostic = t, this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16), this.dom = by(e, t, !0), this.dom.id = this.id, this.dom.setAttribute("role", "option");
	}
}, Cy = class e {
	constructor(e) {
		this.view = e, this.items = [];
		let t = (t) => {
			if (!(t.ctrlKey || t.altKey || t.metaKey)) {
				if (t.keyCode == 27) hy(this.view), this.view.focus();
				else if (t.keyCode == 38 || t.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
				else if (t.keyCode == 40 || t.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
				else if (t.keyCode == 36) this.moveSelection(0);
				else if (t.keyCode == 35) this.moveSelection(this.items.length - 1);
				else if (t.keyCode == 13) this.view.focus();
				else if (t.keyCode >= 65 && t.keyCode <= 90 && this.selectedIndex >= 0) {
					let { diagnostic: n } = this.items[this.selectedIndex], r = yy(n.actions);
					for (let i = 0; i < r.length; i++) if (r[i].toUpperCase().charCodeAt(0) == t.keyCode) {
						let t = iy(this.view.state.field(uy).diagnostics, n);
						t && n.actions[i].apply(e, t.from, t.to);
					}
				} else return;
				t.preventDefault();
			}
		}, n = (e) => {
			for (let t = 0; t < this.items.length; t++) this.items[t].dom.contains(e.target) && this.moveSelection(t);
		};
		this.list = xi("ul", {
			tabIndex: 0,
			role: "listbox",
			"aria-label": this.view.state.phrase("Diagnostics"),
			onkeydown: t,
			onclick: n
		}), this.dom = xi("div", { class: "cm-panel-lint" }, this.list, xi("button", {
			type: "button",
			name: "close",
			"aria-label": this.view.state.phrase("close"),
			onclick: () => hy(this.view)
		}, "×")), this.update();
	}
	get selectedIndex() {
		let e = this.view.state.field(uy).selected;
		if (!e) return -1;
		for (let t = 0; t < this.items.length; t++) if (this.items[t].diagnostic == e.diagnostic) return t;
		return -1;
	}
	update() {
		let { diagnostics: e, selected: t } = this.view.state.field(uy), n = 0, r = !1, i = null, a = /* @__PURE__ */ new Set();
		for (e.between(0, this.view.state.doc.length, (e, o, { spec: s }) => {
			for (let e of s.diagnostics) {
				if (a.has(e)) continue;
				a.add(e);
				let o = -1, s;
				for (let t = n; t < this.items.length; t++) if (this.items[t].diagnostic == e) {
					o = t;
					break;
				}
				o < 0 ? (s = new Sy(this.view, e), this.items.splice(n, 0, s), r = !0) : (s = this.items[o], o > n && (this.items.splice(n, o - n), r = !0)), t && s.diagnostic == t.diagnostic ? s.dom.hasAttribute("aria-selected") || (s.dom.setAttribute("aria-selected", "true"), i = s) : s.dom.hasAttribute("aria-selected") && s.dom.removeAttribute("aria-selected"), n++;
			}
		}); n < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);) r = !0, this.items.pop();
		this.items.length == 0 && (this.items.push(new Sy(this.view, {
			from: -1,
			to: -1,
			severity: "info",
			message: this.view.state.phrase("No diagnostics")
		})), r = !0), i ? (this.list.setAttribute("aria-activedescendant", i.id), this.view.requestMeasure({
			key: this,
			read: () => ({
				sel: i.dom.getBoundingClientRect(),
				panel: this.list.getBoundingClientRect()
			}),
			write: ({ sel: e, panel: t }) => {
				let n = t.height / this.list.offsetHeight;
				e.top < t.top ? this.list.scrollTop -= (t.top - e.top) / n : e.bottom > t.bottom && (this.list.scrollTop += (e.bottom - t.bottom) / n);
			}
		})) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"), r && this.sync();
	}
	sync() {
		let e = this.list.firstChild;
		function t() {
			let t = e;
			e = t.nextSibling, t.remove();
		}
		for (let n of this.items) if (n.dom.parentNode == this.list) {
			for (; e != n.dom;) t();
			e = n.dom.nextSibling;
		} else this.list.insertBefore(n.dom, e);
		for (; e;) t();
	}
	moveSelection(e) {
		if (this.selectedIndex < 0) return;
		let t = iy(this.view.state.field(uy).diagnostics, this.items[e].diagnostic);
		t && this.view.dispatch({
			selection: {
				anchor: t.from,
				head: t.to
			},
			scrollIntoView: !0,
			effects: ly.of(t)
		});
	}
	static open(t) {
		return new e(t);
	}
};
function wy(e, t = "viewBox=\"0 0 40 40\"") {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`;
}
function Ty(e) {
	return wy(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, "width=\"6\" height=\"3\"");
}
var Ey = /*@__PURE__*/ Q.baseTheme({
	".cm-diagnostic": {
		padding: "3px 6px 3px 8px",
		marginLeft: "-1px",
		display: "block",
		whiteSpace: "pre-wrap"
	},
	".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
	".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
	".cm-diagnostic-info": { borderLeft: "5px solid #999" },
	".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
	".cm-diagnosticAction": {
		font: "inherit",
		border: "none",
		padding: "2px 4px",
		backgroundColor: "#444",
		color: "white",
		borderRadius: "3px",
		marginLeft: "8px",
		cursor: "pointer"
	},
	".cm-diagnosticSource": {
		fontSize: "70%",
		opacity: .7
	},
	".cm-lintRange": {
		backgroundPosition: "left bottom",
		backgroundRepeat: "repeat-x",
		paddingBottom: "0.7px"
	},
	".cm-lintRange-error": { backgroundImage: /*@__PURE__*/ Ty("#f11") },
	".cm-lintRange-warning": { backgroundImage: /*@__PURE__*/ Ty("orange") },
	".cm-lintRange-info": { backgroundImage: /*@__PURE__*/ Ty("#999") },
	".cm-lintRange-hint": { backgroundImage: /*@__PURE__*/ Ty("#66d") },
	".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
	".cm-tooltip-lint": {
		padding: 0,
		margin: 0
	},
	".cm-lintPoint": {
		position: "relative",
		"&:after": {
			content: "\"\"",
			position: "absolute",
			bottom: 0,
			left: "-2px",
			borderLeft: "3px solid transparent",
			borderRight: "3px solid transparent",
			borderBottom: "4px solid #d11"
		}
	},
	".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
	".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
	".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } },
	".cm-panel.cm-panel-lint": {
		position: "relative",
		"& ul": {
			maxHeight: "100px",
			overflowY: "auto",
			"& [aria-selected]": {
				backgroundColor: "#ddd",
				"& u": { textDecoration: "underline" }
			},
			"&:focus [aria-selected]": {
				background_fallback: "#bdf",
				backgroundColor: "Highlight",
				color_fallback: "white",
				color: "HighlightText"
			},
			"& u": { textDecoration: "none" },
			padding: 0,
			margin: 0
		},
		"& [name=close]": {
			position: "absolute",
			top: "0",
			right: "2px",
			background: "inherit",
			border: "none",
			font: "inherit",
			padding: 0,
			margin: 0
		}
	},
	"&dark .cm-lintRange-active": { backgroundColor: "#86714a80" },
	"&dark .cm-panel.cm-panel-lint ul": { "& [aria-selected]": { backgroundColor: "#2e343e" } }
});
function Dy(e) {
	return e == "error" ? 4 : e == "warning" ? 3 : e == "info" ? 2 : 1;
}
function Oy(e) {
	let t = "hint", n = 1;
	for (let r of e) {
		let e = Dy(r.severity);
		e > n && (n = e, t = r.severity);
	}
	return t;
}
var ky = /*@__PURE__*/ Xu(fy, { hideOn: ay }), Ay = [
	uy,
	/*@__PURE__*/ Q.decorations.compute([uy], (e) => {
		let { selected: t, panel: n } = e.field(uy);
		return !t || !n || t.from == t.to ? Z.none : Z.set([dy.range(t.from, t.to)]);
	}),
	ky,
	Ey
], jy = function(e) {
	e === void 0 && (e = {});
	var t = e.crosshairCursor, n = t !== void 0 && t, r = [];
	e.closeBracketsKeymap !== !1 && (r = r.concat(Hv)), e.defaultKeymap !== !1 && (r = r.concat(Sg)), e.searchKeymap !== !1 && (r = r.concat(E_)), e.historyKeymap !== !1 && (r = r.concat(Pm)), e.foldKeymap !== !1 && (r = r.concat(dp)), e.completionKeymap !== !1 && (r = r.concat(ey)), e.lintKeymap !== !1 && (r = r.concat(gy));
	var i = [];
	return e.lineNumbers !== !1 && i.push(Md()), e.highlightActiveLineGutter !== !1 && i.push(Id()), e.highlightSpecialChars !== !1 && i.push(du()), e.history !== !1 && i.push(hm()), e.foldGutter !== !1 && i.push(bp()), e.drawSelection !== !1 && i.push(Gl()), e.dropCursor !== !1 && i.push(tu()), e.allowMultipleSelections !== !1 && i.push(zr.allowMultipleSelections.of(!0)), e.indentOnInput !== !1 && i.push(qf()), e.syntaxHighlighting !== !1 && i.push(Ep(kp, { fallback: !0 })), e.bracketMatching !== !1 && i.push(zp()), e.closeBrackets !== !1 && i.push(Iv()), e.autocompletion !== !1 && i.push($v()), e.rectangularSelection !== !1 && i.push(Ou()), n !== !1 && i.push(ju()), e.highlightActiveLine !== !1 && i.push(vu()), e.highlightSelectionMatches !== !1 && i.push(Lg()), e.tabSize && typeof e.tabSize == "number" && i.push(jf.of(" ".repeat(e.tabSize))), i.concat([Dl.of(r.flat())]).filter(Boolean);
}, My = "#e5c07b", Ny = "#e06c75", Py = "#56b6c2", Fy = "#ffffff", Iy = "#abb2bf", Ly = "#7d8799", Ry = "#61afef", zy = "#98c379", By = "#d19a66", Vy = "#c678dd", Hy = "#21252b", Uy = "#2c313a", Wy = "#282c34", Gy = "#353a42", Ky = "#3E4451", qy = "#528bff", Jy = [/* @__PURE__ */ Q.theme({
	"&": {
		color: Iy,
		backgroundColor: Wy
	},
	".cm-content": { caretColor: qy },
	".cm-cursor, .cm-dropCursor": { borderLeftColor: qy },
	"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: Ky },
	".cm-panels": {
		backgroundColor: Hy,
		color: Iy
	},
	".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
	".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
	".cm-searchMatch": {
		backgroundColor: "#72a1ff59",
		outline: "1px solid #457dff"
	},
	".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" },
	".cm-activeLine": { backgroundColor: "#6699ff0b" },
	".cm-selectionMatch": { backgroundColor: "#aafe661a" },
	"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bad0f847" },
	".cm-gutters": {
		backgroundColor: Wy,
		color: Ly,
		border: "none"
	},
	".cm-activeLineGutter": { backgroundColor: Uy },
	".cm-foldPlaceholder": {
		backgroundColor: "transparent",
		border: "none",
		color: "#ddd"
	},
	".cm-tooltip": {
		border: "none",
		backgroundColor: Gy
	},
	".cm-tooltip .cm-tooltip-arrow:before": {
		borderTopColor: "transparent",
		borderBottomColor: "transparent"
	},
	".cm-tooltip .cm-tooltip-arrow:after": {
		borderTopColor: Gy,
		borderBottomColor: Gy
	},
	".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": {
		backgroundColor: Uy,
		color: Iy
	} }
}, { dark: !0 }), /*@__PURE__*/ Ep(/* @__PURE__ */ Sp.define([
	{
		tag: U.keyword,
		color: Vy
	},
	{
		tag: [
			U.name,
			U.deleted,
			U.character,
			U.propertyName,
			U.macroName
		],
		color: Ny
	},
	{
		tag: [/*@__PURE__*/ U.function(U.variableName), U.labelName],
		color: Ry
	},
	{
		tag: [
			U.color,
			/*@__PURE__*/ U.constant(U.name),
			/*@__PURE__*/ U.standard(U.name)
		],
		color: By
	},
	{
		tag: [/*@__PURE__*/ U.definition(U.name), U.separator],
		color: Iy
	},
	{
		tag: [
			U.typeName,
			U.className,
			U.number,
			U.changed,
			U.annotation,
			U.modifier,
			U.self,
			U.namespace
		],
		color: My
	},
	{
		tag: [
			U.operator,
			U.operatorKeyword,
			U.url,
			U.escape,
			U.regexp,
			U.link,
			/*@__PURE__*/ U.special(U.string)
		],
		color: Py
	},
	{
		tag: [U.meta, U.comment],
		color: Ly
	},
	{
		tag: U.strong,
		fontWeight: "bold"
	},
	{
		tag: U.emphasis,
		fontStyle: "italic"
	},
	{
		tag: U.strikethrough,
		textDecoration: "line-through"
	},
	{
		tag: U.link,
		color: Ly,
		textDecoration: "underline"
	},
	{
		tag: U.heading,
		fontWeight: "bold",
		color: Ny
	},
	{
		tag: [
			U.atom,
			U.bool,
			/*@__PURE__*/ U.special(U.variableName)
		],
		color: By
	},
	{
		tag: [
			U.processingInstruction,
			U.string,
			U.inserted
		],
		color: zy
	},
	{
		tag: U.invalid,
		color: Fy
	}
]))], Yy = Q.theme({ "&": { backgroundColor: "#fff" } }, { dark: !1 }), Xy = function(e) {
	e === void 0 && (e = {});
	var t = e, n = t.indentWithTab, r = n === void 0 || n, i = t.editable, a = i === void 0 || i, o = t.readOnly, s = o !== void 0 && o, c = t.theme, l = c === void 0 ? "light" : c, u = t.placeholder, d = u === void 0 ? "" : u, f = t.basicSetup, p = f === void 0 || f, m = [];
	switch (r && m.unshift(Dl.of([Cg])), p && (typeof p == "boolean" ? m.unshift(jy()) : m.unshift(jy(p))), d && m.unshift(Su(d)), l) {
		case "light":
			m.push(Yy);
			break;
		case "dark":
			m.push(Jy);
			break;
		case "none": break;
		default: m.push(l);
	}
	return a === !1 && m.push(Q.editable.of(!1)), s && m.push(zr.readOnly.of(!0)), [...m];
}, Zy = (e) => ({
	line: e.state.doc.lineAt(e.state.selection.main.from),
	lineCount: e.state.doc.lines,
	lineBreak: e.state.lineBreak,
	length: e.state.doc.length,
	readOnly: e.state.readOnly,
	tabSize: e.state.tabSize,
	selection: e.state.selection,
	selectionAsSingle: e.state.selection.asSingle().main,
	ranges: e.state.selection.ranges,
	selectionCode: e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to),
	selections: e.state.selection.ranges.map((t) => e.state.sliceDoc(t.from, t.to)),
	selectedText: e.state.selection.ranges.some((e) => !e.empty)
}), Qy = class {
	constructor(e, t) {
		this.timeLeftMS = void 0, this.timeoutMS = void 0, this.isCancelled = !1, this.isTimeExhausted = !1, this.callbacks = [], this.timeLeftMS = t, this.timeoutMS = t, this.callbacks.push(e);
	}
	tick() {
		if (!this.isCancelled && !this.isTimeExhausted && (this.timeLeftMS--, this.timeLeftMS <= 0)) {
			this.isTimeExhausted = !0;
			var e = this.callbacks.slice();
			this.callbacks.length = 0, e.forEach((e) => {
				try {
					e();
				} catch (e) {
					console.error("TimeoutLatch callback error:", e);
				}
			});
		}
	}
	cancel() {
		this.isCancelled = !0, this.callbacks.length = 0;
	}
	reset() {
		this.timeLeftMS = this.timeoutMS, this.isCancelled = !1, this.isTimeExhausted = !1;
	}
	get isDone() {
		return this.isCancelled || this.isTimeExhausted;
	}
}, $y = class {
	constructor() {
		this.interval = null, this.latches = /* @__PURE__ */ new Set();
	}
	add(e) {
		this.latches.add(e), this.start();
	}
	remove(e) {
		this.latches.delete(e), this.latches.size === 0 && this.stop();
	}
	start() {
		this.interval === null && (this.interval = setInterval(() => {
			this.latches.forEach((e) => {
				e.tick(), e.isDone && this.remove(e);
			});
		}, 1));
	}
	stop() {
		this.interval !== null && (clearInterval(this.interval), this.interval = null);
	}
}, eb = null, tb = () => typeof window > "u" ? new $y() : (eb ||= new $y(), eb), nb = Q.theme({ "& .cm-scroller": { height: "100% !important" } }), rb = null, ib = null;
function ab(e, t, n, r, i, a) {
	if (!e && !t && !n && !r && !i && !a) return null;
	var o = JSON.stringify({
		height: e,
		minHeight: t,
		maxHeight: n,
		width: r,
		minWidth: i,
		maxWidth: a
	});
	return o === rb ? ib : (rb = o, ib = Q.theme({ "&": {
		height: e,
		minHeight: t,
		maxHeight: n,
		width: r,
		minWidth: i,
		maxWidth: a
	} }), ib);
}
//#endregion
//#region node_modules/.pnpm/@uiw+react-codemirror@4.25.11_@babel+runtime@7.29.7_@codemirror+autocomplete@6.20.3_@co_98e4a4c8fef7637376cdb51bde4bf3ba/node_modules/@uiw/react-codemirror/esm/useCodeMirror.js
var ob = Sr.define(), sb = 200, cb = [];
function lb(e) {
	var t = e.value, n = e.selection, r = e.onChange, i = e.onStatistics, a = e.onCreateEditor, o = e.onUpdate, s = e.extensions, c = s === void 0 ? cb : s, l = e.autoFocus, u = e.theme, d = u === void 0 ? "light" : u, f = e.height, p = f === void 0 ? null : f, m = e.minHeight, h = m === void 0 ? null : m, g = e.maxHeight, _ = g === void 0 ? null : g, v = e.width, y = v === void 0 ? null : v, b = e.minWidth, x = b === void 0 ? null : b, S = e.maxWidth, C = S === void 0 ? null : S, w = e.placeholder, T = w === void 0 ? "" : w, E = e.editable, D = E === void 0 || E, O = e.readOnly, k = O !== void 0 && O, A = e.indentWithTab, j = A === void 0 || A, M = e.basicSetup, N = M === void 0 || M, P = e.root, ee = e.initialState, te = B(), ne = te[0], re = te[1], ie = B(), F = ie[0], I = ie[1], ae = B(), R = ae[0], se = ae[1], ce = B(() => ({ current: null }))[0], z = B(() => ({ current: null }))[0], le = ab(p, h, _, y, x, C), ue = Q.updateListener.of((e) => {
		e.docChanged && typeof r == "function" && !e.transactions.some((e) => e.annotation(ob)) && (ce.current ? ce.current.reset() : (ce.current = new Qy(() => {
			if (z.current) {
				var e = z.current;
				z.current = null, e();
			}
			ce.current = null;
		}, sb), tb().add(ce.current)), r(e.state.doc.toString(), e)), i && i(Zy(e));
	}), de = Xy({
		theme: d,
		editable: D,
		readOnly: k,
		placeholder: T,
		indentWithTab: j,
		basicSetup: N
	}), fe = [
		ue,
		...le ? [le] : [],
		nb,
		...de
	];
	return o && typeof o == "function" && fe.push(Q.updateListener.of(o)), fe = fe.concat(c), oe(() => {
		if (ne && !R) {
			var e = {
				doc: t,
				selection: n,
				extensions: fe
			}, r = ee ? zr.fromJSON(ee.json, e, ee.fields) : zr.create(e);
			if (se(r), !F) {
				var i = new Q({
					state: r,
					parent: ne,
					root: P
				});
				I(i), a && a(i, r);
			}
		}
		return () => {
			F && (se(void 0), I(void 0));
		};
	}, [ne, R]), L(() => {
		e.container && re(e.container);
	}, [e.container]), L(() => () => {
		F && (F.destroy(), I(void 0)), ce.current &&= (ce.current.cancel(), null);
	}, [F]), L(() => {
		l && F && F.focus();
	}, [l, F]), L(() => {
		F && F.dispatch({ effects: Y.reconfigure.of(fe) });
	}, [
		d,
		c,
		p,
		h,
		_,
		y,
		x,
		C,
		T,
		D,
		k,
		j,
		N,
		r,
		o
	]), L(() => {
		if (t !== void 0) {
			var e = F ? F.state.doc.toString() : "";
			if (F && t !== e) {
				var n = ce.current && !ce.current.isDone, r = () => {
					F && t !== F.state.doc.toString() && F.dispatch({
						changes: {
							from: 0,
							to: F.state.doc.toString().length,
							insert: t || ""
						},
						annotations: [ob.of(!0)]
					});
				};
				n ? z.current = r : r();
			}
		}
	}, [t, F]), {
		state: R,
		setState: se,
		view: F,
		setView: I,
		container: ne,
		setContainer: re
	};
}
//#endregion
//#region node_modules/.pnpm/@uiw+react-codemirror@4.25.11_@babel+runtime@7.29.7_@codemirror+autocomplete@6.20.3_@co_98e4a4c8fef7637376cdb51bde4bf3ba/node_modules/@uiw/react-codemirror/esm/index.js
var ub = [
	"className",
	"value",
	"selection",
	"extensions",
	"onChange",
	"onStatistics",
	"onCreateEditor",
	"onUpdate",
	"autoFocus",
	"theme",
	"height",
	"minHeight",
	"maxHeight",
	"width",
	"minWidth",
	"maxWidth",
	"basicSetup",
	"placeholder",
	"indentWithTab",
	"editable",
	"readOnly",
	"root",
	"initialState"
], db = /*#__PURE__*/ ie((e, t) => {
	var n = e.className, r = e.value, i = r === void 0 ? "" : r, a = e.selection, o = e.extensions, s = o === void 0 ? [] : o, c = e.onChange, l = e.onStatistics, u = e.onCreateEditor, d = e.onUpdate, f = e.autoFocus, p = e.theme, m = p === void 0 ? "light" : p, h = e.height, g = e.minHeight, _ = e.maxHeight, v = e.width, y = e.minWidth, b = e.maxWidth, x = e.basicSetup, S = e.placeholder, C = e.indentWithTab, w = e.editable, T = e.readOnly, E = e.root, D = e.initialState, O = un(e, ub), k = z(null), A = lb({
		root: E,
		value: i,
		autoFocus: f,
		theme: m,
		height: h,
		minHeight: g,
		maxHeight: _,
		width: v,
		minWidth: y,
		maxWidth: b,
		basicSetup: x,
		placeholder: S,
		indentWithTab: C,
		editable: w,
		readOnly: T,
		selection: a,
		onChange: c,
		onStatistics: l,
		onCreateEditor: u,
		onUpdate: d,
		extensions: s,
		initialState: D
	}), j = A.state, M = A.view, N = A.container, P = A.setContainer;
	R(t, () => ({
		editor: k.current,
		state: j,
		view: M
	}), [
		k,
		N,
		j,
		M
	]);
	var ee = I((e) => {
		k.current = e, P(e);
	}, [P]);
	if (typeof i != "string") throw Error("value must be typeof string but got " + typeof i);
	var te = typeof m == "string" ? "cm-theme-" + m : "cm-theme";
	return /*#__PURE__*/ V("div", ln({
		ref: ee,
		className: "" + te + (n ? " " + n : "")
	}, O));
});
db.displayName = "CodeMirror";
//#endregion
//#region src/hooks/useAnimatedSetState.ts
var fb = (e) => {
	let [t, n] = B(e), r = z();
	return L(() => () => {
		r.current && window?.cancelAnimationFrame && window.cancelAnimationFrame(r.current);
	}, []), [t, z((e) => {
		window?.requestAnimationFrame ? r.current = window.requestAnimationFrame(() => {
			r.current = void 0, n(e);
		}) : n(e);
	}).current];
};
//#endregion
//#region src/hooks/usePrevious.ts
function pb(e) {
	let t = z();
	return L(() => {
		t.current = e;
	}, [e]), t.current;
}
//#endregion
//#region src/hooks/useAnimationCycle.ts
function mb({ animate: e, durationMs: t = 1e3 }) {
	let [n, r] = B(() => e), [i, a] = B(null);
	L(() => {
		e && (r(!0), a(/* @__PURE__ */ new Date()));
	}, [e]);
	let o = pb(n) && !e, s = se(() => o && xe().diff(i, "ms") < t, [
		o,
		i,
		t
	]), c = se(() => o && !s, [o, s]);
	return L(() => {
		if (s) {
			let e = setTimeout(() => {
				r(!1);
			}, t);
			return () => clearTimeout(e);
		}
		c && r(!1);
	}, [
		t,
		s,
		c
	]), n;
}
//#endregion
//#region src/hooks/useBodyLock.ts
function hb() {
	oe(() => {
		let e = window.getComputedStyle(document.body).overflow;
		return document.body.style.overflow = "hidden", () => {
			document.body.style.overflow = e;
		};
	}, []);
}
//#endregion
//#region src/hooks/useCopyToClipboard.ts
var gb = (e, t = 2e3) => {
	let [n, r] = B(!1), [i, a] = B(!1), o = z(null);
	L(() => {
		(async () => {
			try {
				let e = await navigator.permissions.query({ name: "clipboard-write" });
				a(e.state === "granted" || e.state === "prompt");
				let t = () => {
					a(e.state === "granted");
				};
				return e.addEventListener("change", t), () => {
					e.removeEventListener("change", t);
				};
			} catch {
				a(!0);
				return;
			}
		})();
	}, []), oe(() => {
		if (!n) {
			o.current && window.clearTimeout(o.current);
			return;
		}
		return o.current = window.setTimeout(() => {
			r(!1);
		}, t), () => {
			o.current && window.clearTimeout(o.current);
		};
	}, [n, t]);
	async function s() {
		r(!1);
		try {
			await navigator.clipboard.writeText(e), r(!0);
		} catch (e) {
			console.error("Failed to copy to clipboard:", e);
		}
	}
	return [
		s,
		n,
		i
	];
};
//#endregion
//#region src/hooks/useCurrentOrPrevious.ts
function _b(e) {
	let t = z();
	return L(() => {
		e != null && (t.current = e);
	}, [e]), e ?? t.current;
}
//#endregion
//#region src/hooks/useDetectTheme.ts
var vb = "(prefers-color-scheme: dark)", yb = () => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia(vb) : null, bb = () => {
	if (typeof document > "u") return null;
	let e = document.documentElement, t = e.dataset.appliedTheme;
	return t === "dark" || t === "light" ? t : e.classList.contains("dark") ? "dark" : e.classList.contains("light") ? "light" : null;
}, xb = () => bb() || (yb()?.matches ? "dark" : "light"), Sb = () => {
	let [e, t] = B(xb);
	return L(() => {
		let e = yb();
		if (!e) return;
		let n = () => t(xb());
		if (typeof e.addEventListener == "function") return e.addEventListener("change", n), () => e.removeEventListener("change", n);
		if (typeof e.addListener == "function") return e.addListener(n), () => e.removeListener(n);
	}, []), L(() => {
		if (typeof document > "u" || typeof MutationObserver != "function") return;
		let e = document.documentElement, n = new MutationObserver(() => t(xb()));
		return n.observe(e, {
			attributes: !0,
			attributeFilter: [
				"class",
				"data-applied-theme",
				"data-theme"
			]
		}), t(xb()), () => n.disconnect();
	}, []), e;
};
//#endregion
//#region src/hooks/useDevicePlatform.ts
function Cb() {
	let [e, t] = B("Unknown");
	return L(() => {
		let e = navigator.userAgent;
		e.includes("Macintosh") ? t("macOS") : e.includes("Windows") ? t("Windows") : e.includes("Linux") && t("Linux");
	}, []), {
		platform: e,
		isMacOS: e === "macOS",
		isWindows: e === "Windows",
		isLinux: e === "Linux"
	};
}
//#endregion
//#region src/hooks/useLogSpan.ts
var wb = () => {
	let e = z((e) => {
		let t = performance.now();
		return { endSpan: () => {
			Db(performance.now() - t, e);
		} };
	}).current;
	return {
		logSpan: z((t, n) => {
			let { endSpan: r } = e(t);
			n(), r();
		}).current,
		logSpanPromise: z(async function(t, n) {
			let { endSpan: r } = e(t), i = await n;
			return r(), i;
		}).current,
		startSpan: e
	};
}, Tb = 3e3, Eb = process.env.NODE_ENV === "development", Db = (e, t) => {
	let n = `Span '${t}' took ${e.toFixed(3)}ms`;
	Eb && console.debug(`%c[DEBUG] ${n}`, "color: #777"), Se.addBreadcrumb({
		message: n,
		level: "debug",
		category: "span",
		data: { duration: e }
	}), e > Tb && Se.captureMessage(`Span exceeded ${Tb}ms`, {
		level: "debug",
		tags: { [`span.${t}`]: e }
	});
};
//#endregion
//#region src/hooks/useMediaMatch.ts
function Ob(e) {
	let t = se(() => window.matchMedia(e), [e]), [n, r] = B(() => t.matches);
	return L(() => {
		r(t.matches);
		let e = (e) => r(e.matches);
		return t.addEventListener ? (t.addEventListener("change", e), () => t.removeEventListener("change", e)) : (t.addListener(e), () => t.removeListener(e));
	}, [t]), typeof window > "u" ? (console.warn("useMediaMatch cannot function as window is undefined."), !1) : n;
}
//#endregion
//#region src/hooks/useOutsideClick.ts
var kb = (e, t) => {
	let n = (n) => {
		e.current && !e.current.contains(n.target) && t();
	};
	L(() => (document.addEventListener("click", n), document.addEventListener("touchstart", n), () => {
		document.removeEventListener("click", n), document.removeEventListener("touchstart", n);
	}), []);
};
//#endregion
//#region src/hooks/usePopper.ts
function Ab(e) {
	let t = z(null), n = z(null), r = z(), i = I(() => {
		t.current && n.current && (r.current && r.current(), r.current = Ce(t.current, n.current, e).destroy);
	}, [
		t,
		n,
		r,
		e
	]);
	return se(() => [(e) => {
		t.current = e, i();
	}, (e) => {
		n.current = e, i();
	}], [
		t,
		n,
		i
	]);
}
//#endregion
//#region src/hooks/usePreviousIsDifferent.ts
function jb(e, { ignoreNullish: t = !1 } = {}) {
	let n = pb(e);
	return (t || e != null) && e !== n;
}
//#endregion
//#region src/hooks/useScript.ts
var Mb = (e) => {
	let [t, n] = B(e ? "loading" : "idle");
	return L(() => {
		if (!e) {
			n("idle");
			return;
		}
		let t = document.querySelector(`script[src="${e}"]`);
		if (t) n(t.getAttribute("data-status"));
		else {
			t = document.createElement("script"), t.src = e, t.async = !0, t.setAttribute("data-status", "loading"), document.body.appendChild(t);
			let n = (e) => {
				t?.setAttribute("data-status", e.type === "load" ? "ready" : "error");
			};
			t.addEventListener("load", n), t.addEventListener("error", n);
		}
		let r = (e) => {
			n(e.type === "load" ? "ready" : "error");
		};
		return t.addEventListener("load", r), t.addEventListener("error", r), () => {
			t && (t.removeEventListener("load", r), t.removeEventListener("error", r));
		};
	}, [e]), t;
}, Nb = (e = 0, t = () => {}) => {
	let [n, r] = B({
		width: e,
		height: e
	}), i = z();
	function a() {
		if (i.current) {
			let { width: e, height: t } = i.current.getBoundingClientRect();
			(e !== n.width || t !== n.height) && r({
				width: e,
				height: t
			});
		}
	}
	return L(() => {
		function e() {
			a(), t();
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), [
		(e) => {
			e && (i.current = e, a());
		},
		n,
		() => a()
	];
}, Pb = [
	{
		tag: U.comment,
		color: "var(--code-muted)"
	},
	{
		tag: [
			U.number,
			U.bool,
			U.null,
			U.tagName
		],
		color: "var(--code-literal)"
	},
	{
		tag: [
			U.string,
			U.regexp,
			U.escape,
			U.attributeName,
			U.attributeValue
		],
		color: "var(--code-string)"
	},
	{
		tag: [
			U.punctuation,
			U.separator,
			U.bracket,
			U.variableName
		],
		color: "var(--code-foreground)"
	},
	{
		tag: [U.keyword, U.propertyName],
		color: "var(--code-keyword)"
	},
	{
		tag: U.invalid,
		color: "var(--code-literal)"
	}
], Fb = (e) => we({
	theme: e,
	settings: {
		background: "var(--code-background)",
		foreground: "var(--code-foreground)",
		fontFamily: "var(--font-plex-mono)",
		fontSize: "var(--text-sm)",
		caret: "var(--foreground-subtle)",
		selection: "var(--code-selection)",
		selectionMatch: "var(--code-selection-match)",
		lineHighlight: "var(--code-line-highlight)",
		gutterBackground: "var(--background-surface)",
		gutterForeground: "var(--foreground-subtle)"
	},
	styles: Pb
}), Ib = Fb("light"), Lb = Fb("dark");
//#endregion
//#region src/codeEditor/CodeEditor.tsx
function Rb({ value: e, onChange: t, height: n = "300px", readOnly: r = !1, language: i, linter: a, options: o, ...s }) {
	return /* @__PURE__ */ V(db, {
		...s,
		basicSetup: o,
		value: e,
		onChange: t,
		height: n,
		readOnly: r,
		theme: Sb() === "dark" ? Lb : Ib,
		extensions: [i, ...a ? [a] : []]
	});
}
//#endregion
//#region src/codeHighlight/prism.ts
globalThis.Prism = De;
var zb = De, Bb = ({ code: e, language: t, lineNumbers: n, className: r, isRounded: i }) => /* @__PURE__ */ V(Te, {
	prism: zb,
	theme: Ee.vsDark,
	code: e,
	language: t ?? "bash",
	children: ({ className: e, tokens: t, getLineProps: a, getTokenProps: o }) => /* @__PURE__ */ V("pre", {
		className: W(e, "font-plex-mono overflow-x-auto px-3 py-5 text-sm", { "rounded-md": i }, r),
		children: t.map((e, t) => {
			let { className: r, ...i } = a({
				line: e,
				key: t
			});
			return /* @__PURE__ */ H("div", {
				className: W(r, { "table-row": n }),
				...i,
				children: [n && /* @__PURE__ */ V("span", {
					className: "text-foreground-subtle table-cell select-none pr-4 text-right",
					children: t + 1
				}), /* @__PURE__ */ V("span", {
					className: W({ "table-cell": n }),
					children: e.map((e, t) => {
						let n = o({
							token: e,
							key: t
						});
						return /* @__PURE__ */ V("span", {
							...n,
							style: void 0
						}, t);
					})
				})]
			}, t);
		})
	})
}), Vb = ke.Root, Hb = ke.Trigger, Ub = ke.Portal, Wb = ke.Close, Gb = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Overlay, {
	ref: n,
	className: W("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-black-static/50 fixed inset-0 z-50", e),
	...t
}));
Gb.displayName = ke.Overlay.displayName;
var Kb = de(["fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 grid-rows-[auto_auto] gap-y-4 overflow-hidden rounded-xl border border-border-normal bg-background-surface p-4 shadow duration-200 has-[>[data-slot=dialog-body]]:grid-rows-[auto_minmax(0,1fr)_auto]", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"], { variants: { size: {
	xs: "sm:max-w-72",
	sm: "sm:max-w-sm",
	md: "sm:max-w-120",
	lg: "sm:max-w-xl",
	xl: "sm:max-w-208"
} } }), qb = N.forwardRef(({ className: e, children: t, showClose: n, size: r, ...i }, a) => /* @__PURE__ */ H(Ub, { children: [/* @__PURE__ */ V(Gb, {}), /* @__PURE__ */ H(ke.Content, {
	ref: a,
	className: W(Kb({ size: r }), { "sm:max-w-lg md:max-w-xl": !r }, e),
	...i,
	"aria-describedby": i["aria-describedby"] || void 0,
	children: [t, n && /* @__PURE__ */ V(ke.Close, {
		asChild: !0,
		"data-testid": "dialogCloseButton",
		children: /* @__PURE__ */ H(Vt, {
			className: "absolute right-1.5 top-1.5",
			size: "square",
			children: [/* @__PURE__ */ V(G, {
				className: "text-foreground-subtle size-4",
				svg: /* @__PURE__ */ V(j, {})
			}), /* @__PURE__ */ V("span", {
				className: "sr-only",
				children: "Close"
			})]
		})
	})]
})] }));
qb.displayName = ke.Content.displayName;
var Jb = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("row-start-1 flex flex-col space-y-2", e),
	...t
});
Jb.displayName = "DialogHeader";
var Yb = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("row-start-2 min-h-0 overflow-y-auto", e),
	...t,
	"data-slot": "dialog-body"
});
Yb.displayName = "DialogBody";
var Xb = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("flex flex-col-reverse gap-y-2 sm:flex-row sm:justify-end sm:gap-x-2 sm:gap-y-0", e),
	...t
});
Xb.displayName = "DialogFooter";
var Zb = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Title, {
	ref: n,
	className: W("text-foreground-normal text-lg font-medium leading-none tracking-tight", e),
	...t
}));
Zb.displayName = ke.Title.displayName;
var Qb = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Description, {
	ref: n,
	className: W("text-foreground-subtle", e),
	...t
}));
Qb.displayName = ke.Description.displayName;
var $b = ((e) => /* @__PURE__ */ V(Vb, { ...e }));
$b.Trigger = Hb, $b.Portal = Ub, $b.Close = Wb, $b.Overlay = Gb, $b.Content = qb, $b.Header = Jb, $b.Body = Yb, $b.Footer = Xb, $b.Title = Zb, $b.Description = Qb;
//#endregion
//#region src/dialog/ConfirmationDialog.tsx
function ex({ open: e, title: t, size: n = "md", description: r, variant: i, children: a, cancelButtonText: o = "Cancel", confirmButtonText: s = "Confirm", showCloseIcon: c, showConfirmButton: l = !0, showCancelButton: u = !0, confirmButtonDisabled: d, confirmationButtonForm: f, cancelButtonDisabled: p, onConfirm: m, onCancel: h, ...g }) {
	let _ = i === "warning" ? "critical" : "primary", v = P.Children.toArray(a).length > 0;
	return /* @__PURE__ */ V($b, {
		open: e,
		onOpenChange: h,
		children: /* @__PURE__ */ H($b.Content, {
			size: n,
			showClose: c,
			"aria-describedby": void 0,
			...g,
			children: [
				/* @__PURE__ */ H($b.Header, { children: [/* @__PURE__ */ V($b.Title, { children: t }), r && /* @__PURE__ */ V($b.Description, { children: r })] }),
				v && /* @__PURE__ */ V($b.Body, { children: a }),
				/* @__PURE__ */ H($b.Footer, { children: [u && /* @__PURE__ */ V(Vt, {
					variant: "outline",
					onClick: h,
					disabled: p,
					"data-testid": "confirmationDialogCancelButton",
					children: o
				}), l && /* @__PURE__ */ V(Vt, {
					variant: _,
					onClick: m,
					disabled: d,
					form: f,
					type: f ? "submit" : "button",
					"data-testid": "confirmationDialogConfirmButton",
					children: s
				})] })
			]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function tx(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = tx(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function nx() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = tx(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var rx = function() {
	return rx = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, rx.apply(this, arguments);
};
function ix(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ax(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function ox(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/.pnpm/react-easy-sort@1.8.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-easy-sort/index.module.js
var sx = function(e, t, n) {
	for (var r = e.x, i = e.y, a = (n === void 0 ? {} : n).fallbackToClosest, o = a !== void 0 && a, s = 1e4, c = -1, l = 0; l < t.length; l += 1) {
		var u = t[l];
		if (r >= u.left && r < u.right && i >= u.top && i < u.bottom) return l;
		if (o) {
			var d = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2, p = Math.sqrt((r - d) ** 2 + (i - f) ** 2);
			p < s && (s = p, c = l);
		}
	}
	return c;
}, cx = function(e) {
	if (!e) return window;
	for (var t = e; t;) {
		var n = window.getComputedStyle(t), r = n.overflowX, i = n.overflowY, a = (r === "auto" || r === "scroll") && t.scrollWidth > t.clientWidth, o = (i === "auto" || i === "scroll") && t.scrollHeight > t.clientHeight;
		if (a || o) return t;
		t = t.parentElement;
	}
	return window;
};
function lx(e, t, n) {
	var r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		var i = n < 0 ? e.length + n : n, a = e.splice(t, 1)[0];
		e.splice(i, 0, a);
	}
}
function ux(e, t, n) {
	var r = ox([], e, !0);
	return lx(r, t, n), r;
}
var dx = function(e) {
	return {
		x: Number(e.clientX),
		y: Number(e.clientY)
	};
}, fx = function(e) {
	return {
		x: Number(e.clientX),
		y: Number(e.clientY)
	};
}, px = function(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}, mx = function(e) {
	e.preventDefault();
}, hx = function() {
	window.addEventListener("contextmenu", mx, {
		capture: !0,
		passive: !1
	});
}, gx = function() {
	window.removeEventListener("contextmenu", mx);
}, _x = function(e) {
	var t = e.onStart, n = e.onMove, r = e.onEnd, i = e.allowDrag, a = i === void 0 || i, o = e.containerRef, s = e.knobs, c = P.useRef({
		x: 0,
		y: 0
	}), l = P.useRef(void 0), u = P.useRef(!1), d = P.useRef({
		onStart: t,
		onMove: n,
		onEnd: r
	}), f = P.useState(!1), p = f[0], m = f[1];
	P.useEffect(function() {
		d.current = {
			onStart: t,
			onMove: n,
			onEnd: r
		};
	}, [
		t,
		n,
		r
	]);
	var h = function() {
		l.current && window.clearTimeout(l.current);
	}, g = P.useCallback(function() {
		if (o.current) {
			var e = o.current.getBoundingClientRect();
			c.current = {
				x: e.left,
				y: e.top
			};
		}
	}, [o]), _ = P.useCallback(function(e) {
		var t = px(e, c.current);
		d.current.onMove && d.current.onMove({
			pointInWindow: e,
			point: t
		});
	}, []), v = P.useCallback(function(e) {
		if (u.current) {
			u.current = !1;
			var t = dx(e), n = px(t, c.current);
			d.current.onStart && d.current.onStart({
				point: n,
				pointInWindow: t
			});
		} else _(dx(e));
	}, [_]), y = P.useCallback(function(e) {
		e.cancelable ? (e.preventDefault(), _(fx(e.touches[0]))) : (document.removeEventListener("touchmove", y), d.current.onEnd && d.current.onEnd());
	}, [_]), b = P.useCallback(function() {
		u.current = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", b), d.current.onEnd && d.current.onEnd();
	}, [v]), x = P.useCallback(function() {
		document.removeEventListener("touchmove", y), document.removeEventListener("touchend", x), gx(), d.current.onEnd && d.current.onEnd();
	}, [y]), S = P.useCallback(function(e) {
		e.button === 0 && (s?.length && !s.find(function(t) {
			return t.contains(e.target);
		}) || (document.addEventListener("mousemove", v), document.addEventListener("mouseup", b), g(), u.current = !0));
	}, [
		v,
		b,
		g,
		s
	]), C = P.useCallback(function(e, t) {
		document.addEventListener("touchmove", y, {
			capture: !1,
			passive: !1
		}), document.addEventListener("touchend", x), hx(), d.current.onStart && d.current.onStart({
			point: e,
			pointInWindow: t
		});
	}, [x, y]), w = P.useCallback(function(e) {
		if (!(s?.length && !s.find(function(t) {
			return t.contains(e.target);
		}))) {
			g();
			var t = fx(e.touches[0]), n = px(t, c.current);
			l.current = window.setTimeout(function() {
				return C(n, t);
			}, 120);
		}
	}, [
		C,
		g,
		s
	]), T = P.useCallback(function() {
		m(!0), document.removeEventListener("touchstart", T);
	}, []), E = P.useCallback(function() {
		h();
	}, []);
	return P.useLayoutEffect(function() {
		if (p) {
			var e = o.current;
			return a && (e?.addEventListener("touchstart", w, {
				capture: !0,
				passive: !1
			}), document.addEventListener("touchmove", E, {
				capture: !1,
				passive: !1
			}), document.addEventListener("touchend", E, {
				capture: !1,
				passive: !1
			})), function() {
				e?.removeEventListener("touchstart", w, { capture: !0 }), document.removeEventListener("touchmove", E, { capture: !1 }), document.removeEventListener("touchend", E, { capture: !1 }), document.removeEventListener("touchmove", y), document.removeEventListener("touchend", x), gx(), h();
			};
		}
		return document.addEventListener("touchstart", T), function() {
			document.removeEventListener("touchstart", T), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", b);
		};
	}, [
		p,
		a,
		T,
		v,
		y,
		E,
		x,
		b,
		o,
		w
	]), p ? {} : { onMouseDown: S };
}, vx = function(e) {
	var t = P.useRef(null);
	return e ? {
		show: function(e) {
			t.current && (t.current.style.width = `${e.width}px`, t.current.style.height = `${e.height}px`, t.current.style.opacity = "1", t.current.style.visibility = "visible");
		},
		hide: function() {
			t.current && (t.current.style.opacity = "0", t.current.style.visibility = "hidden");
		},
		setPosition: function(e, n, r) {
			if (t.current) {
				var i = n[e], a = r === "y" ? i.left : n[e].left, o = r === "x" ? i.top : n[e].top;
				t.current.style.transform = `translate3d(${a}px, ${o}px, 0px)`;
			}
		},
		render: function() {
			return P.createElement("div", {
				ref: t,
				"aria-hidden": !0,
				style: {
					opacity: 0,
					visibility: "hidden",
					position: "fixed",
					top: 0,
					left: 0,
					pointerEvents: "none"
				}
			}, e);
		}
	} : {};
}, yx = "div", bx = P.createContext(void 0), xx = function(e) {
	var t = e.children, n = e.allowDrag, r = n === void 0 || n, i = e.onSortStart, a = e.onSortMove, o = e.onSortEnd, s = e.draggedItemClassName, c = e.as, l = e.lockAxis, u = e.customHolderRef, d = e.dropTarget, f = e.autoScroll, p = f !== void 0 && f, m = ix(e, [
		"children",
		"allowDrag",
		"onSortStart",
		"onSortMove",
		"onSortEnd",
		"draggedItemClassName",
		"as",
		"lockAxis",
		"customHolderRef",
		"dropTarget",
		"autoScroll"
	]), h = P.useRef([]), g = P.useRef([]), _ = P.useRef([]), v = P.useRef(null), y = P.useRef(null), b = P.useRef(void 0), x = P.useRef(void 0), S = P.useRef({
		x: 0,
		y: 0
	}), C = vx(d), w = P.useRef("1"), T = P.useRef({
		x: 0,
		y: 0
	}), E = P.useRef(null), D = P.useRef(null), O = P.useRef({
		x: 0,
		y: 0
	}), k = P.useCallback(function() {
		var e = D.current, t = T.current;
		if (t.x === 0 && t.y === 0 || !e) {
			E.current &&= (cancelAnimationFrame(E.current), null);
			return;
		}
		e instanceof Window ? e.scrollBy(t.x, t.y) : e instanceof HTMLElement && (e.scrollTop += t.y, e.scrollLeft += t.x), E.current = requestAnimationFrame(k);
	}, []);
	P.useEffect(function() {
		var e = u?.current || document.body;
		return function() {
			y.current && e.removeChild(y.current);
		};
	}, [u]);
	var A = function(e) {
		if (y.current && b.current !== void 0) {
			var t = S.current, n = g.current[b.current], r = l === "y" ? n.left : e.x - t.x, i = l === "x" ? n.top : e.y - t.y;
			y.current.style.transform = `translate3d(${r}px, ${i}px, 0px)`;
		}
	}, j = P.useCallback(function(e) {
		if (v.current) {
			var t = h.current[e], n = g.current[e], r = t.cloneNode(!0);
			s && s.split(" ").forEach(function(e) {
				return r.classList.add(e);
			}), r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, r.style.position = "fixed", r.style.margin = "0", r.style.top = "0", r.style.left = "0";
			var i = t.querySelectorAll("canvas");
			r.querySelectorAll("canvas").forEach(function(e, t) {
				var n;
				(n = e.getContext("2d")) == null || n.drawImage(i[t], 0, 0);
			}), (u?.current || document.body).appendChild(r), y.current = r;
		}
	}, [u, s]), M = _x({
		allowDrag: r,
		containerRef: v,
		knobs: _.current,
		onStart: function(e) {
			var t, n = e.pointInWindow;
			if (v.current) {
				if (p) {
					var r = cx(v.current);
					D.current = r, O.current = r instanceof HTMLElement ? {
						y: r.scrollTop,
						x: r.scrollLeft
					} : {
						y: r.scrollY,
						x: r.scrollX
					};
				}
				g.current = h.current.map(function(e) {
					return e.getBoundingClientRect();
				});
				var a = sx(n, g.current);
				if (a !== -1) {
					b.current = a, i && i(), j(a);
					var o = h.current[a];
					w.current = o.style.opacity ?? "1", o.style.opacity = "0", o.style.visibility = "hidden";
					var s = o.getBoundingClientRect();
					S.current = {
						x: n.x - s.left,
						y: n.y - s.top
					}, A(n), (t = C.show) == null || t.call(C, s), window.navigator.vibrate && window.navigator.vibrate(100);
				}
			}
		},
		onMove: function(e) {
			var t, n = e.pointInWindow;
			if (v.current) {
				A(n);
				var r = b.current;
				if (r !== void 0) {
					if (p) {
						var i = D.current;
						if (i) {
							var o = 60, s = 15, c = n.x, u = n.y;
							T.current = {
								x: 0,
								y: 0
							};
							var d = void 0;
							if (d = i instanceof Window ? {
								top: 0,
								bottom: i.innerHeight,
								left: 0,
								right: i.innerWidth
							} : i.getBoundingClientRect(), l !== "x") {
								if (u < d.top + o && u >= d.top) {
									var f = d.top + o - u;
									T.current.y = -s * (f / o);
								} else if (u > d.bottom - o && u <= d.bottom) {
									var f = u - (d.bottom - o);
									T.current.y = f / o * s;
								}
							}
							if (l !== "y") {
								if (c < d.left + o && c >= d.left) {
									var f = d.left + o - c;
									T.current.x = -s * (f / o);
								} else if (c > d.right - o && c <= d.right) {
									var f = c - (d.right - o);
									T.current.x = f / o * s;
								}
							}
							(T.current.x !== 0 || T.current.y !== 0) && !E.current && (E.current = requestAnimationFrame(k));
						}
					}
					var m = {
						x: 0,
						y: 0
					};
					if (p && D.current) {
						var i = D.current;
						i instanceof HTMLElement ? m = {
							y: i.scrollTop - O.current.y,
							x: i.scrollLeft - O.current.x
						} : i instanceof Window && (m = {
							y: i.scrollY - O.current.y,
							x: i.scrollX - O.current.x
						});
					}
					var _ = g.current[r], y = sx({
						x: (l === "y" ? _.left : n.x) + m.x,
						y: (l === "x" ? _.top : n.y) + m.y
					}, g.current, { fallbackToClosest: !0 });
					if (y !== -1) {
						a && x.current !== void 0 && x.current !== y && a(y), x.current = y;
						for (var S = r < y, w = 0; w < h.current.length; w += 1) {
							var j = h.current[w], M = g.current[w];
							if (S && w >= r && w <= y || !S && w >= y && w <= r) {
								var N = g.current[S ? w - 1 : w + 1];
								if (N) {
									var P = N.left - M.left, ee = N.top - M.top;
									j.style.transform = `translate3d(${P}px, ${ee}px, 0px)`;
								}
							} else j.style.transform = "translate3d(0,0,0)";
							j.style.transitionDuration = "300ms";
						}
						(t = C.setPosition) == null || t.call(C, x.current, g.current, l);
					}
				}
			}
		},
		onEnd: function() {
			var e;
			p && (D.current = null, T.current = {
				x: 0,
				y: 0
			}, E.current &&= (cancelAnimationFrame(E.current), null));
			for (var t = 0; t < h.current.length; t += 1) {
				var n = h.current[t];
				n.style.transform = "", n.style.transitionDuration = "";
			}
			var r = b.current;
			if (r !== void 0) {
				var i = h.current[r];
				i && (i.style.opacity = w.current, i.style.visibility = "");
				var a = x.current;
				a !== void 0 && r !== a && (h.current = ux(h.current, r, a), o(r, a));
			}
			b.current = void 0, x.current = void 0, (e = C.hide) == null || e.call(C), y.current &&= ((u?.current || document.body).removeChild(y.current), null);
		}
	}), N = P.useCallback(function(e) {
		h.current.push(e);
	}, []), ee = P.useCallback(function(e) {
		var t = h.current.indexOf(e);
		t !== -1 && h.current.splice(t, 1);
	}, []), te = P.useCallback(function(e) {
		_.current.push(e);
	}, []), ne = P.useCallback(function(e) {
		var t = _.current.indexOf(e);
		t !== -1 && _.current.splice(t, 1);
	}, []), re = P.useMemo(function() {
		return {
			registerItem: N,
			removeItem: ee,
			registerKnob: te,
			removeKnob: ne
		};
	}, [
		N,
		ee,
		te,
		ne
	]);
	return P.createElement(c || yx, rx(rx(rx({}, r ? M : {}), m), { ref: v }), P.createElement(bx.Provider, { value: re }, t, C.render?.call(C)));
}, Sx = function(e) {
	var t = e.children, n = P.useContext(bx);
	if (!n) throw Error("SortableItem must be a child of SortableList");
	var r = n.registerItem, i = n.removeItem, a = P.useRef(null);
	return P.useEffect(function() {
		var e = a.current;
		return e && r(e), function() {
			e && i(e);
		};
	}, [
		r,
		i,
		t
	]), P.cloneElement(t, { ref: a });
};
//#endregion
//#region node_modules/.pnpm/emblor@1.4.8_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@18.3.31_react-d_b2be973d8ca380868fd345bc31ce5083/node_modules/emblor/dist/index.mjs
function Cx(...e) {
	return me(nx(e));
}
function wx() {
	return crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0].toString();
}
var Tx = ie(({ className: e, type: t, ...n }, r) => P.createElement("input", {
	type: t,
	className: Cx("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
	ref: r,
	...n
}));
Tx.displayName = "Input";
var Ex = de("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Dx = N.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) => N.createElement(r ? ue : "button", {
	className: Cx(Ex({
		variant: t,
		size: n,
		className: e
	})),
	ref: a,
	...i
}));
Dx.displayName = "Button";
var Ox = Ae.Root, kx = Ae.Trigger, Ax = N.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, i) => N.createElement(Ae.Portal, null, N.createElement(Ae.Content, {
	ref: i,
	align: t,
	sideOffset: n,
	className: Cx("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...r
})));
Ax.displayName = Ae.Content.displayName;
var jx = de("transition-all border inline-flex items-center text-sm pl-2 rounded-md", {
	variants: {
		variant: {
			default: "bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-50",
			primary: "bg-primary border-primary text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50",
			destructive: "bg-destructive border-destructive text-destructive-foreground hover:bg-destructive/90 disabled:cursor-not-allowed disabled:opacity-50"
		},
		size: {
			sm: "text-xs h-7",
			md: "text-sm h-8",
			lg: "text-base h-9",
			xl: "text-lg h-10"
		},
		shape: {
			default: "rounded-sm",
			rounded: "rounded-lg",
			square: "rounded-none",
			pill: "rounded-full"
		},
		borderStyle: {
			default: "border-solid",
			none: "border-none",
			dashed: "border-dashed",
			dotted: "border-dotted",
			double: "border-double"
		},
		textCase: {
			uppercase: "uppercase",
			lowercase: "lowercase",
			capitalize: "capitalize"
		},
		interaction: {
			clickable: "cursor-pointer hover:shadow-md",
			nonClickable: "cursor-default"
		},
		animation: {
			none: "",
			fadeIn: "animate-fadeIn",
			slideIn: "animate-slideIn",
			bounce: "animate-bounce"
		},
		textStyle: {
			normal: "font-normal",
			bold: "font-bold",
			italic: "italic",
			underline: "underline",
			lineThrough: "line-through"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "md",
		shape: "default",
		borderStyle: "default",
		interaction: "nonClickable",
		animation: "fadeIn",
		textStyle: "normal"
	}
}), Mx = ({ tagObj: e, direction: t, draggable: n, onTagClick: r, onRemoveTag: i, variant: a, size: o, shape: s, borderStyle: c, textCase: l, interaction: u, animation: d, textStyle: f, isActiveTag: p, tagClasses: m, disabled: h }) => P.createElement("span", {
	key: e.id,
	draggable: n,
	className: Cx(jx({
		variant: a,
		size: o,
		shape: s,
		borderStyle: c,
		textCase: l,
		interaction: u,
		animation: d,
		textStyle: f
	}), {
		"justify-between w-full": t === "column",
		"cursor-pointer": n,
		"ring-ring ring-offset-2 ring-2 ring-offset-background": p
	}, m?.body),
	onClick: () => r?.(e)
}, e.text, P.createElement(Dx, {
	type: "button",
	variant: "ghost",
	onClick: (t) => {
		t.stopPropagation(), i(e.id);
	},
	disabled: h,
	className: Cx("py-1 px-3 h-full hover:bg-transparent", m?.closeButton)
}, P.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className: "lucide lucide-x"
}, P.createElement("path", { d: "M18 6 6 18" }), P.createElement("path", { d: "m6 6 12 12" })))), Nx = () => P.createElement("div", { className: Cx("h-full rounded-md bg-secondary/50") }), Px = ({ tags: e, customTagRenderer: t, direction: n, draggable: r, onSortEnd: i, className: a, inlineTags: o, activeTagIndex: s, setActiveTagIndex: c, classStyleProps: l, disabled: u, ...d }) => {
	let [f, p] = P.useState(null), m = (e) => {
		p(e);
	}, h = () => {
		p(null);
	};
	return P.createElement(P.Fragment, null, o ? P.createElement(P.Fragment, null, r ? P.createElement(xx, {
		onSortEnd: i,
		className: "flex flex-wrap gap-2 list",
		dropTarget: P.createElement(Nx, null)
	}, e.map((e, i) => P.createElement(Sx, { key: e.id }, P.createElement("div", {
		onMouseDown: () => m(e.id),
		onMouseLeave: h,
		className: Cx({ "border border-solid border-primary rounded-md": f === e.id }, "transition-all duration-200 ease-in-out")
	}, t ? t(e, i === s) : P.createElement(Mx, {
		tagObj: e,
		isActiveTag: i === s,
		direction: n,
		draggable: r,
		tagClasses: l?.tagClasses,
		...d,
		disabled: u
	}))))) : e.map((e, i) => t ? t(e, i === s) : P.createElement(Mx, {
		key: e.id,
		tagObj: e,
		isActiveTag: i === s,
		direction: n,
		draggable: r,
		tagClasses: l?.tagClasses,
		...d,
		disabled: u
	}))) : P.createElement("div", { className: Cx("rounded-md w-full", {
		"flex flex-wrap gap-2": n === "row",
		"flex flex-col gap-2": n === "column"
	}, l?.tagListClasses?.container) }, r ? P.createElement(xx, {
		onSortEnd: i,
		className: `flex flex-wrap gap-2 list ${l?.tagListClasses?.sortableList}`,
		dropTarget: P.createElement(Nx, null)
	}, e.map((e, i) => P.createElement(Sx, { key: e.id }, P.createElement("div", {
		onMouseDown: () => m(e.id),
		onMouseLeave: h,
		className: Cx({ "border border-solid border-primary rounded-md": f === e.id }, "transition-all duration-200 ease-in-out")
	}, t ? t(e, i === s) : P.createElement(Mx, {
		tagObj: e,
		isActiveTag: i === s,
		direction: n,
		draggable: r,
		tagClasses: l?.tagClasses,
		...d,
		disabled: u
	}))))) : e.map((e, i) => t ? t(e, i === s) : P.createElement(Mx, {
		key: e.id,
		tagObj: e,
		isActiveTag: i === s,
		direction: n,
		draggable: r,
		tagClasses: l?.tagClasses,
		...d,
		disabled: u
	}))));
}, Fx = ({ children: e, tags: t, customTagRenderer: n, activeTagIndex: r, setActiveTagIndex: i, classStyleProps: a, disabled: o, usePortal: s, ...c }) => {
	let l = z(null), u = z(null), d = z(null), f = z(null), [p, m] = B(0), [h, g] = B(!1), [_, v] = B(!1), [y, b] = B(0);
	L(() => {
		let e = () => {
			l.current && u.current && (m(l.current.offsetWidth), b(l.current.offsetWidth - u?.current?.offsetWidth));
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [l, u]), L(() => {
		let e = (e) => {
			h && l.current && d.current && !l.current.contains(e.target) && !d.current.contains(e.target) && g(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, [h]);
	let x = I((e) => {
		var t;
		e && l.current && m(l.current.offsetWidth), e && ((t = f.current) == null || t.focus(), g(e));
	}, [_]);
	return P.createElement(Ox, {
		open: h,
		onOpenChange: x,
		modal: s
	}, P.createElement("div", {
		className: "relative flex items-center rounded-md border border-input bg-transparent pr-3",
		ref: l
	}, P.cloneElement(e, {
		onFocus: (t) => {
			h && v(!0);
			let n = e.props.onFocus;
			n && n(t);
		},
		onBlur: (t) => {
			v(!1), h || g(!1);
			let n = e.props.onBlur;
			n && n(t);
		},
		ref: f
	}), P.createElement(kx, { asChild: !0 }, P.createElement(Dx, {
		ref: u,
		variant: "ghost",
		size: "icon",
		role: "combobox",
		className: Cx("hover:bg-transparent", a?.popoverClasses?.popoverTrigger),
		onClick: () => g(!h)
	}, P.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `lucide lucide-chevron-down h-4 w-4 shrink-0 opacity-50 ${h ? "rotate-180" : "rotate-0"}`
	}, P.createElement("path", { d: "m6 9 6 6 6-6" }))))), P.createElement(Ax, {
		ref: d,
		className: Cx("w-full space-y-3", a?.popoverClasses?.popoverContent),
		style: {
			marginLeft: `-${y}px`,
			width: `${p}px`
		}
	}, P.createElement("div", { className: "space-y-1" }, P.createElement("h4", { className: "text-sm font-medium leading-none" }, "Entered Tags"), P.createElement("p", { className: "text-sm text-muted-foregrounsd text-left" }, "These are the tags you've entered.")), P.createElement(Px, {
		tags: t,
		customTagRenderer: n,
		activeTagIndex: r,
		setActiveTagIndex: i,
		classStyleProps: {
			tagListClasses: a?.tagListClasses,
			tagClasses: a?.tagClasses
		},
		...c,
		disabled: o
	})));
}, Ix = ({ tags: e, setTags: t, setInputValue: n, setTagCount: r, autocompleteOptions: i, maxTags: a, onTagAdd: o, onTagRemove: s, allowDuplicates: c, inlineTags: l, children: u, classStyleProps: d, usePortal: f }) => {
	let p = z(null), m = z(null), h = z(null), g = z(null), [_, v] = B(0), [y, b] = B(!1), [x, S] = B(!1), [C, w] = B(0), [T, E] = B(-1);
	L(() => {
		!p.current || !m.current || w(p.current?.getBoundingClientRect().bottom - m.current?.getBoundingClientRect().bottom);
	}, [e]), L(() => {
		let e = (e) => {
			y && p.current && g.current && !p.current.contains(e.target) && !g.current.contains(e.target) && b(!1);
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, [y]);
	let D = I((e) => {
		var t;
		if (e && p.current) {
			let { width: e } = p.current.getBoundingClientRect();
			v(e);
		}
		e && ((t = h.current) == null || t.focus(), b(e));
	}, [x]), O = (e) => {
		if (p.current) {
			let { width: e } = p.current.getBoundingClientRect();
			v(e), b(!0);
		}
		y && S(!0);
		let t = u.props.onFocus;
		t && t(e);
	}, k = (e) => {
		S(!1), y || b(!1);
		let t = u.props.onBlur;
		t && t(e);
	}, A = (e) => {
		if (y) switch (e.key) {
			case "ArrowUp":
				e.preventDefault(), E((e) => e <= 0 ? i.length - 1 : e - 1);
				break;
			case "ArrowDown":
				e.preventDefault(), E((e) => e === i.length - 1 ? 0 : e + 1);
				break;
			case "Enter":
				e.preventDefault(), T !== -1 && (j(i[T]), E(-1));
				break;
		}
	}, j = (i) => {
		let l = e.findIndex((e) => e.text === i.text);
		if (l >= 0) t(e.filter((e, t) => t !== l)), r((e) => e - 1), s && s(i.text);
		else {
			if (!c && e.some((e) => e.text === i.text)) return;
			(!a || e.length < a) && (t([...e, i]), r((e) => e + 1), n(""), o && o(i.text));
		}
		E(-1);
	}, M = P.cloneElement(u, {
		onKeyDown: A,
		onFocus: O,
		onBlur: k,
		ref: h
	});
	return P.createElement("div", { className: Cx("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", d?.command) }, P.createElement(Ox, {
		open: y,
		onOpenChange: D,
		modal: f
	}, P.createElement("div", {
		className: "relative h-full flex items-center rounded-md border bg-transparent pr-3",
		ref: p
	}, M, P.createElement(kx, {
		asChild: !0,
		ref: m
	}, P.createElement(Dx, {
		variant: "ghost",
		size: "icon",
		role: "combobox",
		className: Cx(`hover:bg-transparent ${l ? "" : "ml-auto"}`, d?.popoverTrigger),
		onClick: () => {
			b(!y);
		}
	}, P.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: `lucide lucide-chevron-down h-4 w-4 shrink-0 opacity-50 ${y ? "rotate-180" : "rotate-0"}`
	}, P.createElement("path", { d: "m6 9 6 6 6-6" }))))), P.createElement(Ax, {
		ref: g,
		side: "bottom",
		align: "start",
		forceMount: !0,
		className: Cx("p-0 relative", d?.popoverContent),
		style: {
			top: `${C}px`,
			marginLeft: `calc(-${_}px + 36px)`,
			width: `${_}px`,
			minWidth: `${_}px`,
			zIndex: 9999
		}
	}, P.createElement("div", {
		className: Cx("max-h-[300px] overflow-y-auto overflow-x-hidden", d?.commandList),
		style: { minHeight: "68px" },
		key: i.length
	}, i.length > 0 ? P.createElement("div", {
		key: i.length,
		role: "group",
		className: Cx("overflow-y-auto overflow-hidden p-1 text-foreground", d?.commandGroup),
		style: { minHeight: "68px" }
	}, P.createElement("span", { className: "text-muted-foreground font-medium text-sm py-1.5 px-2 pb-2" }, "Suggestions"), P.createElement("div", {
		role: "separator",
		className: "py-0.5"
	}), i.map((t, n) => {
		let r = n === T;
		return P.createElement("div", {
			key: t.id,
			role: "option",
			"aria-selected": r,
			className: Cx("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent", r && "bg-accent text-accent-foreground", d?.commandItem),
			"data-value": t.text,
			onClick: () => j(t)
		}, P.createElement("div", { className: "w-full flex items-center gap-2" }, t.text, e.some((e) => e.text === t.text) && P.createElement("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "14",
			height: "14",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "lucide lucide-check"
		}, P.createElement("path", { d: "M20 6 9 17l-5-5" }))));
	})) : P.createElement("div", { className: "py-6 text-center text-sm" }, "No results found.")))));
}, Lx = ((e) => (e.Comma = ",", e.Enter = "Enter", e))(Lx || {}), Rx = P.forwardRef((e, t) => {
	let { id: n, placeholder: r, tags: i, setTags: a, variant: o, size: s, shape: c, enableAutocomplete: l, autocompleteOptions: u, maxTags: d, delimiter: f = ",", onTagAdd: p, onTagRemove: m, allowDuplicates: h, showCount: g, validateTag: _, placeholderWhenFull: v = "Max tags reached", sortTags: y, delimiterList: b, truncate: x, autocompleteFilter: S, borderStyle: C, textCase: w, interaction: T, animation: E, textStyle: D, minLength: O, maxLength: k, direction: A = "row", onInputChange: j, customTagRenderer: M, onFocus: N, onBlur: ee, onTagClick: te, draggable: ne = !1, inputFieldPosition: re = "bottom", clearAll: ie = !1, onClearAll: F, usePopoverForTags: I = !1, inputProps: ae = {}, restrictTagsToAutocompleteOptions: L, inlineTags: R = !0, addTagsOnBlur: oe = !1, activeTagIndex: ce, setActiveTagIndex: z, styleClasses: B = {}, disabled: le = !1, usePortal: ue = !1, addOnPaste: de = !1, generateTagId: fe = wx } = e, [pe, me] = P.useState(""), [he, ge] = P.useState(Math.max(0, i.length)), V = P.useRef(null);
	if (d !== void 0 && d < 0 || e.minTags !== void 0 && e.minTags < 0) return console.warn("maxTags and minTags cannot be less than 0"), null;
	let H = (e) => {
		let t = e.target.value;
		de && t.includes(f) ? (t.split(f).map((e) => e.trim()).filter((e) => e).forEach((e) => {
			if (!e) return;
			let t = e.trim();
			if (L && !(u != null && u.some((e) => e.text === t))) {
				console.warn("Tag not allowed as per autocomplete options");
				return;
			}
			if (_ && !_(t)) {
				console.warn("Invalid tag as per validateTag");
				return;
			}
			if (O && t.length < O) {
				console.warn(`Tag "${t}" is too short`);
				return;
			}
			if (k && t.length > k) {
				console.warn(`Tag "${t}" is too long`);
				return;
			}
			let n = fe();
			if (h || !i.some((e) => e.text === t)) if (d === void 0 || i.length < d) {
				let e = {
					id: n,
					text: t
				};
				a((t) => [...t, e]), p?.(t);
			} else console.warn("Reached the maximum number of tags allowed");
			else console.warn(`Duplicate tag "${t}" not added`);
		}), me("")) : me(t), j?.(t);
	}, _e = (e) => {
		z(null), N?.(e);
	}, ve = (e) => {
		if (oe && pe.trim()) {
			let e = pe.trim();
			if (_ && !_(e)) return;
			if (O && e.length < O) {
				console.warn("Tag is too short");
				return;
			}
			if (k && e.length > k) {
				console.warn("Tag is too long");
				return;
			}
			if ((h || !i.some((t) => t.text === e)) && (d === void 0 || i.length < d)) {
				let t = fe();
				a([...i, {
					id: t,
					text: e
				}]), p?.(e), ge((e) => e + 1), me("");
			}
		}
		ee?.(e);
	}, ye = (e) => {
		if (b ? b.includes(e.key) : e.key === f || e.key === "Enter") {
			e.preventDefault();
			let t = pe.trim();
			if (L && !(u != null && u.some((e) => e.text === t)) || _ && !_(t)) return;
			if (O && t.length < O) {
				console.warn("Tag is too short");
				return;
			}
			if (k && t.length > k) {
				console.warn("Tag is too long");
				return;
			}
			let n = fe();
			t && (h || !i.some((e) => e.text === t)) && (d === void 0 || i.length < d) && (a([...i, {
				id: n,
				text: t
			}]), p?.(t), ge((e) => e + 1)), me("");
		} else switch (e.key) {
			case "Delete":
				if (ce !== null) {
					e.preventDefault();
					let t = [...i];
					t.splice(ce, 1), a(t), z((e) => t.length === 0 ? null : e >= t.length ? t.length - 1 : e), ge((e) => e - 1), m?.(i[ce].text);
				}
				break;
			case "Backspace":
				if (ce !== null) {
					e.preventDefault();
					let t = [...i];
					t.splice(ce, 1), a(t), z((e) => e === 0 ? null : e - 1), ge((e) => e - 1), m?.(i[ce].text);
				}
				break;
			case "ArrowRight":
				e.preventDefault(), z(ce === null ? 0 : (e) => e + 1 >= i.length ? 0 : e + 1);
				break;
			case "ArrowLeft":
				e.preventDefault(), z(ce === null ? i.length - 1 : (e) => e === 0 ? i.length - 1 : e - 1);
				break;
			case "Home":
				e.preventDefault(), z(0);
				break;
			case "End":
				e.preventDefault(), z(i.length - 1);
				break;
		}
	}, be = (e) => {
		a(i.filter((t) => t.id !== e)), m?.(i.find((t) => t.id === e)?.text || ""), ge((e) => e - 1);
	}, U = (e, t) => {
		a((n) => {
			let r = [...n], [i] = r.splice(e, 1);
			return r.splice(t, 0, i), r;
		});
	}, xe = () => {
		if (!F) {
			z(-1), a([]);
			return;
		}
		F?.();
	}, Se = se(() => (u || []).filter((e) => e.text.toLowerCase().includes(pe ? pe.toLowerCase() : "")), [pe, u]), Ce = y ? [...i].sort() : i, we = x ? i.map((e) => ({
		id: e.id,
		text: e.text?.length > x ? `${e.text.substring(0, x)}...` : e.text
	})) : Ce;
	return P.createElement("div", { className: `w-full flex ${!R && i.length > 0 ? "gap-3" : ""} ${re === "bottom" ? "flex-col" : re === "top" ? "flex-col-reverse" : "flex-row"}` }, !I && (R ? !l && P.createElement("div", { className: "w-full" }, P.createElement("div", { className: Cx("flex flex-row flex-wrap items-center gap-2 p-2 w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", B?.inlineTagsContainer) }, P.createElement(Px, {
		tags: we,
		customTagRenderer: M,
		variant: o,
		size: s,
		shape: c,
		borderStyle: C,
		textCase: w,
		interaction: T,
		animation: E,
		textStyle: D,
		onTagClick: te,
		draggable: ne,
		onSortEnd: U,
		onRemoveTag: be,
		direction: A,
		inlineTags: R,
		activeTagIndex: ce,
		setActiveTagIndex: z,
		classStyleProps: {
			tagListClasses: B?.tagList,
			tagClasses: B?.tag
		},
		disabled: le
	}), P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		className: Cx("border-0 h-5 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 flex-1 w-fit", B?.input),
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d
	}))) : P.createElement(Px, {
		tags: we,
		customTagRenderer: M,
		variant: o,
		size: s,
		shape: c,
		borderStyle: C,
		textCase: w,
		interaction: T,
		animation: E,
		textStyle: D,
		onTagClick: te,
		draggable: ne,
		onSortEnd: U,
		onRemoveTag: be,
		direction: A,
		inlineTags: R,
		activeTagIndex: ce,
		setActiveTagIndex: z,
		classStyleProps: {
			tagListClasses: B?.tagList,
			tagClasses: B?.tag
		},
		disabled: le
	})), l ? P.createElement("div", { className: "w-full" }, P.createElement(Ix, {
		tags: i,
		setTags: a,
		setInputValue: me,
		autocompleteOptions: Se,
		setTagCount: ge,
		maxTags: d,
		onTagAdd: p,
		onTagRemove: m,
		allowDuplicates: h ?? !1,
		inlineTags: R,
		usePortal: ue,
		classStyleProps: {
			command: B?.autoComplete?.command,
			popoverTrigger: B?.autoComplete?.popoverTrigger,
			popoverContent: B?.autoComplete?.popoverContent,
			commandList: B?.autoComplete?.commandList,
			commandGroup: B?.autoComplete?.commandGroup,
			commandItem: B?.autoComplete?.commandItem
		}
	}, I ? P.createElement(Fx, {
		tags: we,
		customTagRenderer: M,
		variant: o,
		size: s,
		shape: c,
		borderStyle: C,
		textCase: w,
		interaction: T,
		animation: E,
		textStyle: D,
		onTagClick: te,
		draggable: ne,
		onSortEnd: U,
		onRemoveTag: be,
		direction: A,
		activeTagIndex: ce,
		setActiveTagIndex: z,
		classStyleProps: {
			popoverClasses: B?.tagPopover,
			tagListClasses: B?.tagList,
			tagClasses: B?.tag
		},
		disabled: le
	}, P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		className: Cx("border-0 h-5 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 flex-1 w-fit", B?.input),
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d
	})) : R ? P.createElement("div", { className: Cx("flex flex-row flex-wrap items-center p-2 gap-2 h-fit w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", B?.inlineTagsContainer) }, P.createElement(Px, {
		tags: we,
		customTagRenderer: M,
		variant: o,
		size: s,
		shape: c,
		borderStyle: C,
		textCase: w,
		interaction: T,
		animation: E,
		textStyle: D,
		onTagClick: te,
		draggable: ne,
		onSortEnd: U,
		onRemoveTag: be,
		direction: A,
		inlineTags: R,
		activeTagIndex: ce,
		setActiveTagIndex: z,
		classStyleProps: {
			tagListClasses: B?.tagList,
			tagClasses: B?.tag
		},
		disabled: le
	}), P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		className: Cx("border-0 h-5 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 flex-1 w-fit", B?.input),
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d
	})) : P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		className: Cx("border-0 h-5 bg-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 flex-1 w-fit", B?.input),
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d
	}))) : P.createElement("div", { className: "w-full" }, I ? P.createElement(Fx, {
		tags: we,
		customTagRenderer: M,
		variant: o,
		size: s,
		shape: c,
		borderStyle: C,
		textCase: w,
		interaction: T,
		animation: E,
		textStyle: D,
		onTagClick: te,
		draggable: ne,
		onSortEnd: U,
		onRemoveTag: be,
		direction: A,
		activeTagIndex: ce,
		setActiveTagIndex: z,
		classStyleProps: {
			popoverClasses: B?.tagPopover,
			tagListClasses: B?.tagList,
			tagClasses: B?.tag
		},
		disabled: le
	}, P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d,
		className: Cx("border-0 w-full", B?.input)
	})) : R ? null : P.createElement(Tx, {
		ref: V,
		id: n,
		type: "text",
		placeholder: d !== void 0 && i.length >= d ? v : r,
		value: pe,
		onChange: H,
		onKeyDown: ye,
		onFocus: _e,
		onBlur: ve,
		...ae,
		className: Cx(B?.input),
		autoComplete: l ? "on" : "off",
		list: l ? "autocomplete-options" : void 0,
		disabled: le || d !== void 0 && i.length >= d
	})), g && d && P.createElement("div", { className: "flex" }, P.createElement("span", { className: "text-muted-foreground text-sm mt-1 ml-auto" }, `${he}`, "/", `${d}`)), ie && P.createElement(Dx, {
		type: "button",
		onClick: xe,
		className: Cx("mt-2", B?.clearAllButton)
	}, "Clear All"));
});
Rx.displayName = "TagInput";
//#endregion
//#region src/input/Chip.tsx
var zx = {
	body: "bg-primary text-foreground-on-brand-primary pointer-events-none relative z-10 flex h-6 max-w-full items-center gap-0.5 rounded-md border-0 pl-2 text-sm",
	removeButton: "enabled:hover:bg-background/10 focus-visible:ring-ring pointer-events-auto m-0 ml-0.5 flex size-6 shrink-0 items-center justify-center rounded-r-md bg-transparent p-0 text-current outline-none focus-visible:ring-2"
};
function Bx({ children: e, className: t, removeLabel: n, disabled: r, onRemove: i, onRemovePointerDown: a, removeButtonTestId: o, removeButtonProps: s, ...c }) {
	return /* @__PURE__ */ H("span", {
		className: W(zx.body, { "cursor-not-allowed opacity-50": r }, t),
		...c,
		children: [/* @__PURE__ */ V("span", {
			className: "truncate",
			children: e
		}), /* @__PURE__ */ V("button", {
			type: "button",
			"aria-label": `Remove ${n}`,
			"data-testid": o,
			className: W(zx.removeButton, { "cursor-not-allowed": r }),
			disabled: r,
			onPointerDown: a,
			onClick: i,
			...s,
			children: /* @__PURE__ */ V(G, {
				className: "size-3",
				svg: /* @__PURE__ */ V(j, {})
			})
		})]
	});
}
//#endregion
//#region src/input/ChipInput.tsx
var Vx = ie(({ styleClasses: e, ...t }, n) => /* @__PURE__ */ V(Rx, {
	ref: n,
	styleClasses: {
		...e,
		inlineTagsContainer: W("border-border-normal text-foreground-normal placeholder:text-foreground-subtle relative flex min-h-8 w-full flex-wrap items-center gap-1 rounded-md border bg-transparent p-1.5 text-left outline-none ring-0 transition-colors", "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50", { "cursor-not-allowed opacity-50": t.disabled }, e?.inlineTagsContainer),
		input: W("text-foreground-normal placeholder:text-foreground-subtle h-5 w-fit flex-1 border-0 bg-transparent p-0 text-sm shadow-none outline-none! ring-0!", e?.input),
		tag: {
			body: W(zx.body, e?.tag?.body),
			closeButton: W(zx.removeButton, e?.tag?.closeButton)
		}
	},
	...t,
	inputProps: {
		...t.inputProps,
		"data-testid": "chipInput"
	}
}));
Vx.displayName = "ChipInput";
//#endregion
//#region src/label/Label.tsx
var Hx = de("uppercase font-aeonik text-sm text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 tracking-wider font-medium"), Ux = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(je.Root, {
	ref: n,
	className: W(Hx(), e),
	...t
}));
Ux.displayName = je.Root.displayName;
//#endregion
//#region src/input/InputError.tsx
var Wx = ({ message: e, className: t, ...n }) => /* @__PURE__ */ V("div", {
	className: W("text-fill-critical mt-1.5 text-xs", t),
	...n,
	children: e
}), Gx = de(["flex h-8 w-full rounded-md border border-border-normal text-foreground-normal px-3 py-1 placeholder:text-foreground-subtle disabled:cursor-not-allowed disabled:opacity-50 bg-background-surface text-base", "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"], {
	variants: {
		size: {
			default: "h-8",
			sm: "h-7"
		},
		isInvalid: { true: "focus-visible:outline-border-critical focus:outline-border-critical text-fill-critical" }
	},
	defaultVariants: { size: "default" }
}), Kx = P.forwardRef(({ className: e, type: t, size: n, isInvalid: r, ...i }, a) => /* @__PURE__ */ V("input", {
	type: t,
	className: W(Gx({
		size: n,
		isInvalid: r
	}), e),
	ref: a,
	...i
}));
Kx.displayName = "RawInput";
//#endregion
//#region src/input/Input.tsx
var qx = P.forwardRef(({ label: e, description: t, errorMessage: n, containerClassName: r, forceNoFill: i, labelClassName: a, leadingIcon: o, addOn: s, trailingIcon: c, ...l }, u) => /* @__PURE__ */ H("div", {
	className: W("grid w-full items-center gap-2", r),
	children: [
		e && (() => {
			let t = /* @__PURE__ */ V(Ux, {
				htmlFor: l.id || l.name,
				className: W({ "text-foreground-subtle/50 cursor-not-allowed": l.disabled }, a),
				children: e
			});
			return l.required ? /* @__PURE__ */ H("div", {
				className: "flex items-center gap-1",
				children: [t, /* @__PURE__ */ V("span", {
					className: "text-fill-critical leading-none",
					children: "*"
				})]
			}) : t;
		})(),
		(() => {
			let e = /* @__PURE__ */ V(Kx, {
				...l,
				isInvalid: l.isInvalid || !!n,
				className: W({ "pl-8": !!o }, { "pr-8": !!c }, { "rounded-l-none": !!s }, l.className),
				ref: u,
				...i ? { "data-1p-ignore": !0 } : {},
				id: l.id || l.name
			});
			return o || c ? /* @__PURE__ */ H("div", {
				className: W("relative flex items-center", r),
				children: [
					o && /* @__PURE__ */ V("div", {
						className: "z-1 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5",
						children: o
					}),
					e,
					c && /* @__PURE__ */ V("div", {
						className: "z-1 pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5",
						children: c
					})
				]
			}) : s ? /* @__PURE__ */ H("div", {
				className: "flex",
				children: [/* @__PURE__ */ V("span", {
					className: "bg-background-surface-secondary border-border-normal text-foreground-subtle line-clamp-1 inline-flex shrink-0 items-center rounded-l-lg border border-r-0 px-3 sm:text-sm",
					children: s
				}), e]
			}) : e;
		})(),
		n ? /* @__PURE__ */ V(Wx, {
			message: n,
			className: "mt-0"
		}) : t ? /* @__PURE__ */ V("p", {
			className: "text-foreground-subtle text-sm",
			children: t
		}) : null
	]
}));
qx.displayName = "Input";
//#endregion
//#region src/input/InputConfirmation.tsx
function Jx({ value: e, onMatch: t, confirmationRenderer: n }) {
	return /* @__PURE__ */ H("div", { children: [n ? n() : /* @__PURE__ */ H("p", {
		className: "text-foreground-subtle",
		children: [
			"To confirm, type \"",
			/* @__PURE__ */ V("span", {
				className: "text-foreground-normal font-medium",
				children: e
			}),
			"\" into the box below"
		]
	}), /* @__PURE__ */ V(qx, {
		id: "confirmationInput",
		className: "mt-1.5",
		onChange: (n) => {
			t(n.target.value === e);
		},
		placeholder: e,
		"data-testid": "confirmationInput"
	})] });
}
//#endregion
//#region src/input/RawTextArea.tsx
var Yx = de(["flex w-full rounded-md border border-border-normal bg-background-surface px-3 py-2 text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-foreground-normal", "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"], {
	variants: {
		size: { default: "min-h-15" },
		isInvalid: { true: "focus-visible:outline-border-critical focus:outline-border-critical text-fill-critical" }
	},
	defaultVariants: { size: "default" }
}), Xx = P.forwardRef(({ className: e, size: t, isInvalid: n, ...r }, i) => /* @__PURE__ */ V("textarea", {
	className: W(Yx({
		size: t,
		isInvalid: n
	}), e),
	ref: i,
	...r
}));
Xx.displayName = "RawTextarea";
//#endregion
//#region src/input/TextArea.tsx
var Zx = P.forwardRef(({ className: e, label: t, description: n, errorMessage: r, ...i }, a) => {
	let o = () => r ? /* @__PURE__ */ V(Wx, {
		message: r,
		className: "mt-0"
	}) : n ? /* @__PURE__ */ V("p", {
		className: "text-foreground-subtle text-sm",
		children: n
	}) : null;
	return /* @__PURE__ */ H("div", {
		className: W("grid w-full items-center gap-2"),
		children: [
			t && /* @__PURE__ */ H(Ux, {
				htmlFor: i.id || i.name,
				className: W({ "text-foreground-subtle/50 cursor-not-allowed": i.disabled }),
				children: [t, i.required && /* @__PURE__ */ V("span", {
					className: "text-fill-critical",
					children: " *"
				})]
			}),
			/* @__PURE__ */ V(Xx, {
				className: e,
				...i,
				ref: a,
				isInvalid: i.isInvalid || !!r,
				id: i.id || i.name
			}),
			o()
		]
	});
});
Zx.displayName = "TextArea";
//#endregion
//#region src/command/Command.tsx
var Qx = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Oe, {
	ref: n,
	className: W("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", e),
	...t
}));
Qx.displayName = Oe.displayName;
var $x = ({ children: e, ...t }) => /* @__PURE__ */ V($b, {
	...t,
	children: /* @__PURE__ */ V($b.Content, {
		className: "overflow-hidden p-0",
		children: /* @__PURE__ */ V($b.Body, {
			className: "overflow-hidden",
			children: /* @__PURE__ */ V(Qx, {
				className: "**:[[cmdk-group-heading]]:text-foreground-subtle **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group]]:px-2 **:[[cmdk-input]]:h-8 **:[[cmdk-item]]:px-2 **:[[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: e
			})
		})
	})
}), eS = N.forwardRef(({ className: e, leadingIcon: t, ...n }, r) => /* @__PURE__ */ V("div", {
	className: "border-border-normal flex items-center border-b p-1",
	"cmdk-input-wrapper": "",
	children: /* @__PURE__ */ H("div", {
		className: "relative flex w-full items-center",
		children: [t && /* @__PURE__ */ V("div", {
			className: "z-1 pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2.5",
			children: t
		}), /* @__PURE__ */ V(Oe.Input, {
			ref: r,
			className: W(Gx(), { "pl-8": !!t }, e),
			...n
		})]
	})
}));
eS.displayName = Oe.Input.displayName;
var tS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Oe.List, {
	ref: n,
	className: W("max-h-75 overflow-y-auto overflow-x-hidden", e),
	...t
}));
tS.displayName = Oe.List.displayName;
var nS = N.forwardRef((e, t) => /* @__PURE__ */ V(Oe.Empty, {
	ref: t,
	className: "p-1 text-center",
	...e
}));
nS.displayName = Oe.Empty.displayName;
var rS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Oe.Group, {
	ref: n,
	className: W("text-foreground-normal **:[[cmdk-group-heading]]:text-foreground-subtle **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium overflow-hidden p-1", e),
	...t
}));
rS.displayName = Oe.Group.displayName;
var iS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Oe.Separator, {
	ref: n,
	className: W("bg-border-normal -mx-1 h-px", e),
	...t
}));
iS.displayName = Oe.Separator.displayName;
var aS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Oe.Item, {
	ref: n,
	className: W("focus:bg-background-overlay-hovered data-[selected=true]:bg-background-overlay-hovered data-[selected=true]:text-foreground-normal relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50", e),
	...t
}));
aS.displayName = Oe.Item.displayName;
var oS = ({ className: e, ...t }) => /* @__PURE__ */ V("span", {
	className: W("text-foreground-subtle ml-auto text-xs tracking-widest", e),
	...t
});
oS.displayName = "CommandShortcut";
var sS = ((e) => /* @__PURE__ */ V(Qx, { ...e }));
sS.Dialog = $x, sS.Empty = nS, sS.Group = rS, sS.Input = eS, sS.Item = aS, sS.List = tS, sS.Separator = iS, sS.Shortcut = oS;
//#endregion
//#region src/copyableEntry/CopyableEntry.tsx
var cS = Array(40).fill("*").join(""), lS = ({ testId: e, value: t, mask: n, title: r, isCode: i, onCopied: a, render: o, fullWidth: s }) => {
	let [c, l] = B(n ?? !1), [u, d, f] = gb(t || "", 2e3), p = async () => {
		await u(), a?.();
	}, h = c ? x : S;
	return /* @__PURE__ */ H("div", {
		className: W({ "w-full": s }),
		children: [!!r && /* @__PURE__ */ V("label", {
			htmlFor: "about",
			className: "text-foreground-normal mb-1 block text-base font-medium",
			children: r
		}), /* @__PURE__ */ H("div", {
			className: "flex items-start space-x-4",
			children: [/* @__PURE__ */ V("div", {
				className: W("text-foreground-subtle grow break-all", { "font-plex-mono": i }),
				"data-testid": e,
				children: o ? o() : c ? cS : t
			}), !!t && /* @__PURE__ */ H("div", {
				className: W("flex flex-row", { "gap-x-2": n }),
				children: [n && /* @__PURE__ */ V(Vt, {
					variant: "ghost",
					size: "icon",
					onClick: () => l(!c),
					className: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ml-1 outline-none",
					"data-testid": "visibilityButton",
					children: /* @__PURE__ */ V(G, {
						className: "text-foreground-subtle size-4",
						svg: /* @__PURE__ */ V(h, {})
					})
				}), f && /* @__PURE__ */ V(Vt, {
					variant: "ghost",
					size: "icon",
					onClick: p,
					className: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 ml-1 outline-none",
					"data-testid": "copyButton",
					children: d ? /* @__PURE__ */ V(G, {
						className: "text-fill-success size-4",
						svg: /* @__PURE__ */ V(m, {}),
						"data-testid": "recentlyCopiedIcon"
					}) : /* @__PURE__ */ V(G, {
						className: "text-foreground-subtle hover:text-foreground-normal group-focus-visible:text-foreground-normal size-4",
						svg: /* @__PURE__ */ V(g, {}),
						"data-testid": "copyIcon"
					})
				})]
			})]
		})]
	});
}, uS = Bt({
	variant: "ghost",
	size: "icon"
});
function dS({ className: e, classNames: t, showOutsideDays: n = !1, ...r }) {
	return /* @__PURE__ */ V(Me, {
		"data-slot": "calendar",
		animate: !1,
		components: { Chevron: ({ orientation: e }) => /* @__PURE__ */ V(G, {
			className: "size-4",
			svg: V(e === "left" ? l : u, {})
		}) },
		classNames: {
			root: W("isolate", e),
			button_next: W(uS, "absolute right-0"),
			button_previous: W(uS, "absolute left-0"),
			caption_label: "text-sm font-medium",
			day: W("relative size-8 overflow-hidden rounded-md p-0 text-center text-sm focus-within:z-20", r.mode === "range" ? "first:has-aria-selected:rounded-l-md last:has-aria-selected:rounded-r-md" : ""),
			day_button: "size-full rounded-md outline-none not-aria-selected:not-disabled:hover:bg-background-surface-hovered focus-visible:border-focus-outline focus-visible:ring-focus-outline/50 focus-visible:ring-3",
			disabled: "text-foreground-disabled cursor-not-allowed",
			hidden: "invisible",
			month: "space-y-3",
			month_caption: "relative flex h-8 items-center justify-center",
			month_grid: "w-full border-collapse",
			months: "relative flex max-w-min flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0",
			nav: "absolute inset-x-0 top-0 z-10 flex h-8 items-center justify-between",
			outside: "text-foreground-subtle opacity-50 aria-selected:text-foreground-on-brand-primary",
			range_end: "day-range-end [&:not(.day-range-start)]:rounded-l-none",
			range_middle: "day-range-middle bg-primary/15 text-foreground-normal! rounded-none hover:bg-primary/25",
			range_start: "day-range-start [&:not(.day-range-end)]:rounded-r-none",
			selected: "bg-primary text-foreground-on-brand-primary hover:bg-primary",
			today: "not-aria-selected:bg-primary/15",
			week: "mt-1 flex w-full",
			weekday: "text-foreground-subtle w-8 text-center text-xs font-normal",
			weekdays: "flex",
			...t
		},
		showOutsideDays: n,
		...r
	});
}
//#endregion
//#region src/form/FormField.tsx
var fS = ({ htmlFor: e, label: t, description: n, errorMessage: r, children: i, isRequired: a, className: o, labelClassName: s }) => /* @__PURE__ */ H("div", {
	className: o,
	children: [
		!!t && /* @__PURE__ */ H(Ux, {
			htmlFor: e,
			className: s,
			children: [t, a && /* @__PURE__ */ V("span", {
				className: "text-fill-critical",
				children: " *"
			})]
		}),
		i,
		r ? /* @__PURE__ */ V(Wx, { message: r }) : n ? /* @__PURE__ */ V("p", {
			className: "text-foreground-subtle mt-1.5 text-sm",
			children: n
		}) : null
	]
});
fS.defaultProps = { isRequired: !1 };
//#endregion
//#region src/Popover/Popover.tsx
var pS = Ae.Root, mS = Ae.Trigger, hS = Ae.Close, gS = Ae.Anchor, _S = N.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, portal: r = !0, ...i }, a) => {
	let o = r ? Ae.Portal : N.Fragment;
	return /* @__PURE__ */ V(o, { children: /* @__PURE__ */ V(Ae.Content, {
		ref: a,
		align: t,
		sideOffset: n,
		className: W("border-border-normal bg-background-overlay text-foreground-normal data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-lg border p-4 shadow-md outline-none", e),
		...i
	}) });
});
_S.displayName = Ae.Content.displayName;
var vS = ((e) => /* @__PURE__ */ V(pS, { ...e }));
vS.Trigger = mS, vS.Content = _S, vS.Anchor = gS, vS.Close = hS;
//#endregion
//#region src/datePicker/RawDatePicker.tsx
var yS = (e) => e.replaceAll("yyyy", "YYYY").replaceAll("yy", "YY").replaceAll("dd", "DD").replaceAll("d", "D"), bS = (e, t) => e ? xe(e).format(yS(t)) : "", xS = ({ selected: e, onChange: t, onMonthChange: n, minDate: r, maxDate: i, className: a, htmlFor: o, showTimeInput: s }) => /* @__PURE__ */ H("div", {
	className: W("border-border-normal bg-background-overlay text-foreground-normal flex flex-col rounded-lg border p-3 shadow-md", a),
	children: [/* @__PURE__ */ V(dS, {
		mode: "single",
		selected: e ?? void 0,
		onSelect: (e) => t(e ?? null),
		onMonthChange: n,
		disabled: [...r ? [{ before: r }] : [], ...i ? [{ after: i }] : []],
		defaultMonth: e ?? r,
		startMonth: r,
		endMonth: i
	}), s && /* @__PURE__ */ H("div", {
		className: "border-border-normal mt-3 flex items-center gap-3 border-t pt-3",
		children: [/* @__PURE__ */ V("label", {
			className: "text-foreground-subtle text-sm",
			htmlFor: `${o}-time`,
			children: "Time"
		}), /* @__PURE__ */ V("input", {
			id: `${o}-time`,
			className: "text-foreground-normal focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 h-8 flex-1 appearance-none rounded-md border border-transparent bg-transparent px-2 text-right text-sm outline-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
			type: "time",
			value: e ? xe(e).format("HH:mm") : "",
			onChange: (n) => {
				let [r, i] = n.target.value.split(":").map(Number), a = e ? new Date(e) : /* @__PURE__ */ new Date();
				a.setHours(r, i, 0, 0), t(a);
			}
		})]
	})]
}), SS = ({ htmlFor: e, isInvalid: t, className: n, selected: r, onChange: i, onMonthChange: a, minDate: o, maxDate: s, disabled: c, inline: l = !1, customInput: u, placeholderText: d, dateFormat: f = "MM/dd/yyyy", name: p, popperPlacement: m, shouldCloseOnSelect: h = !0, showTimeInput: g, "data-testid": _ }) => {
	let [v, y] = B(!1), b = bS(r, f), x = m?.endsWith("start") ? "start" : m?.endsWith("end") ? "end" : "center", S = (e) => {
		i(e), h && !g && y(!1);
	}, C = {
		id: e,
		name: p,
		value: b,
		placeholder: d,
		disabled: c,
		onClick: () => y(!0),
		onChange: (e) => {
			let t = e.target.value ? xe(e.target.value).toDate() : null;
			(!t || !Number.isNaN(t.getTime())) && i(t);
		},
		"aria-haspopup": "dialog",
		"aria-expanded": v,
		"data-testid": _
	}, w = F(u) ? ne(u, C) : /* @__PURE__ */ V(Kx, {
		...C,
		isInvalid: t
	});
	return l ? /* @__PURE__ */ V(xS, {
		selected: r,
		htmlFor: e,
		onChange: S,
		onMonthChange: a,
		minDate: o,
		maxDate: s,
		className: n,
		showTimeInput: g
	}) : /* @__PURE__ */ H(vS, {
		open: v,
		onOpenChange: y,
		children: [/* @__PURE__ */ V(vS.Anchor, {
			asChild: !0,
			children: w
		}), /* @__PURE__ */ V(vS.Content, {
			align: x,
			className: "w-auto border-none bg-transparent p-0 shadow-none",
			children: /* @__PURE__ */ V(xS, {
				selected: r,
				htmlFor: e,
				onChange: S,
				onMonthChange: a,
				minDate: o,
				maxDate: s,
				className: n,
				showTimeInput: g
			})
		})]
	});
}, CS = ({ htmlFor: e, description: t, isRequired: n, label: r, wrapperClassName: i, datePickerClassName: a, ...o }) => /* @__PURE__ */ V(fS, {
	label: r,
	description: t,
	htmlFor: e,
	isRequired: n,
	className: i,
	children: /* @__PURE__ */ V(SS, {
		htmlFor: e,
		className: a,
		...o
	})
});
//#endregion
//#region src/datePicker/RangeDatePicker.tsx
function wS({ range: e, onConfirmRangeChange: t, showTimeSelect: n, containerClassName: r, htmlFor: i, minDate: a, maxDate: o, "data-testid": s }) {
	let [c, l] = B(!1), [u, d] = B(e.start), [f, p] = B(e.end), m = se(() => DS(u), [u]), h = se(() => DS(f), [f]), g = (e, t) => {
		if (u && f) {
			d(t), p(null);
			return;
		}
		d(e?.from ?? null), p(e?.to ?? null);
	}, _ = (e, t) => {
		let [n, r, i] = e.split(":").map(Number);
		if ([
			n,
			r,
			i
		].some((e) => Number.isNaN(e))) return;
		let a = (e) => {
			let t = new Date(e ?? Date.now());
			return t.setHours(n, r, i), t;
		};
		t === "start" ? d(a) : p(a);
	}, v = (e) => {
		let [t, n] = e.target.value.split(" - ").map((e) => e.trim());
		t && !Number.isNaN(Date.parse(t)) && d(new Date(t)), n && !Number.isNaN(Date.parse(n)) && p(new Date(n));
	}, y = () => {
		u && f && (t({
			start: u,
			end: f
		}), l(!1));
	};
	L(() => {
		d(e.start), p(e.end);
	}, [e]);
	let b = [u, f].filter((e) => !!e).map((e) => xe(e).format("MM/D/YYYY, HH:mm:ss")).join(" - ");
	return /* @__PURE__ */ V("div", {
		className: W("w-full max-w-full md:max-w-[18rem]", r),
		children: /* @__PURE__ */ H(vS, {
			open: c,
			onOpenChange: l,
			children: [/* @__PURE__ */ V(vS.Anchor, {
				asChild: !0,
				children: /* @__PURE__ */ V("input", {
					id: i,
					value: b,
					onChange: v,
					onClick: () => l(!0),
					className: W(Gx(), "w-full flex-1 truncate"),
					"data-testid": "rangeDatePickerCustomInput",
					"data-1p-ignore": !0,
					"aria-haspopup": "dialog",
					"aria-expanded": c
				})
			}), /* @__PURE__ */ V(vS.Content, {
				align: "start",
				className: "w-auto border-none bg-transparent p-0 shadow-none",
				"data-testid": s,
				children: /* @__PURE__ */ H("div", {
					className: "border-border-normal bg-background-overlay text-foreground-normal flex flex-col overflow-hidden rounded-xl border shadow-lg outline-none",
					children: [
						/* @__PURE__ */ V("div", {
							className: "p-3",
							children: /* @__PURE__ */ V(dS, {
								mode: "range",
								selected: {
									from: u ?? void 0,
									to: f ?? void 0
								},
								onSelect: g,
								disabled: [...a ? [{ before: a }] : [], ...o ? [{ after: o }] : []],
								defaultMonth: u ?? a,
								startMonth: a,
								endMonth: o
							})
						}),
						n && /* @__PURE__ */ V(TS, {
							startTime: m,
							endTime: h,
							onTimeChange: _
						}),
						/* @__PURE__ */ V("div", {
							className: "px-3 pb-3",
							children: /* @__PURE__ */ V(Vt, {
								variant: "primary",
								onClick: y,
								disabled: !u || !f,
								"data-testid": "rangeDatePickerCustomConfirm",
								className: "w-full",
								children: "Confirm"
							})
						})
					]
				})
			})]
		})
	});
}
var TS = ({ startTime: e, endTime: t, onTimeChange: n }) => /* @__PURE__ */ H("div", {
	className: "border-border-normal flex flex-col gap-1 border-t p-3 text-base",
	children: [/* @__PURE__ */ V(ES, {
		label: "From",
		value: e,
		onChange: (e) => n(e, "start"),
		"data-testid": "rangeDatePickerCustomStartTimeInput"
	}), /* @__PURE__ */ V(ES, {
		label: "To",
		value: t,
		onChange: (e) => n(e, "end"),
		"data-testid": "rangeDatePickerCustomEndTimeInput"
	})]
}), ES = ({ label: e, value: t, onChange: n, "data-testid": r }) => /* @__PURE__ */ H("label", {
	className: "flex items-center",
	children: [/* @__PURE__ */ V("span", {
		className: "text-foreground-normal w-12 shrink-0",
		children: e
	}), /* @__PURE__ */ V(Kx, {
		className: "appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
		type: "time",
		step: "1",
		value: t ?? "",
		onChange: (e) => n(e.target.value),
		"data-testid": r
	})]
}), DS = (e) => e ? xe(e).format("HH:mm:ss") : void 0, OS = Fe.Root, kS = Fe.Group, AS = Fe.Value, jS = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ H(Fe.Trigger, {
	ref: r,
	className: W("border-border-normal bg-background-surface text-foreground-normal placeholder:text-foreground-subtle flex h-8 w-full items-center justify-between rounded-md border py-2 pl-3 pr-2 text-left outline-none ring-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 flex gap-1 outline-none", { "text-foreground-subtle": n.value === void 0 || n.value === "" }, e),
	...n,
	type: "button",
	children: [t, /* @__PURE__ */ V(Fe.Icon, {
		asChild: !0,
		children: /* @__PURE__ */ V(G, {
			className: "text-foreground-subtle size-4",
			svg: /* @__PURE__ */ V(d, {})
		})
	})]
}));
jS.displayName = Fe.Trigger.displayName;
var MS = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Fe.ScrollUpButton, {
	ref: n,
	className: W("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ V(G, {
		className: "text-foreground-subtle size-4",
		svg: /* @__PURE__ */ V(f, {})
	})
}));
MS.displayName = Fe.ScrollUpButton.displayName;
var NS = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Fe.ScrollDownButton, {
	ref: n,
	className: W("flex cursor-default items-center justify-center py-1", e),
	...t,
	children: /* @__PURE__ */ V(G, {
		className: "text-foreground-subtle size-4",
		svg: /* @__PURE__ */ V(c, {})
	})
}));
NS.displayName = Fe.ScrollDownButton.displayName;
var PS = P.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, i) => /* @__PURE__ */ V(Fe.Portal, { children: /* @__PURE__ */ H(Fe.Content, {
	ref: i,
	className: W("border-border-normal bg-background-overlay text-foreground-normal data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg border shadow-md", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
	position: n,
	...r,
	children: [
		/* @__PURE__ */ V(MS, {}),
		/* @__PURE__ */ V(Fe.Viewport, {
			className: W("p-1", n === "popper" && "h-(--radix-select-trigger-height) min-w-(--radix-select-trigger-width) w-full"),
			children: t
		}),
		/* @__PURE__ */ V(NS, {})
	]
}) }));
PS.displayName = Fe.Content.displayName;
var FS = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Fe.Label, {
	ref: n,
	className: W("px-2 py-1.5 font-semibold", e),
	...t
}));
FS.displayName = Fe.Label.displayName;
var IS = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ H(Fe.Item, {
	ref: r,
	className: W("focus:bg-background-overlay-hovered data-disabled:pointer-events-none data-disabled:opacity-50 relative flex w-full cursor-pointer select-none items-center rounded-lg py-1.5 pl-2 pr-8 outline-none", e),
	...n,
	children: [/* @__PURE__ */ V("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ V(Fe.ItemIndicator, { children: /* @__PURE__ */ V(G, {
			className: "size-4",
			svg: /* @__PURE__ */ V(m, {})
		}) })
	}), /* @__PURE__ */ V(Fe.ItemText, { children: t })]
}));
IS.displayName = Fe.Item.displayName;
var LS = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(Fe.Separator, {
	ref: n,
	className: W("bg-border-normal -mx-1 my-1 h-px", e),
	...t
}));
LS.displayName = Fe.Separator.displayName;
var RS = ((e) => /* @__PURE__ */ V(OS, { ...e }));
RS.displayName = "RawSelect", RS.Group = kS, RS.Value = AS, RS.Trigger = jS, RS.Content = PS, RS.Label = FS, RS.Item = IS, RS.Separator = LS;
//#endregion
//#region src/form/Select.tsx
var zS = ie(({ label: e, options: t, description: n, containerClassName: r, errorMessage: i, placeholder: a, onValueChange: o, defaultValue: s, ...c }, l) => {
	let u = () => i ? /* @__PURE__ */ V(Wx, {
		message: i,
		className: "mt-0"
	}) : n ? /* @__PURE__ */ V("p", {
		className: "text-foreground-subtle text-sm",
		children: n
	}) : null;
	return /* @__PURE__ */ H("div", {
		className: W("grid items-center gap-2", r),
		children: [
			e && /* @__PURE__ */ V(Ux, {
				htmlFor: c.id || c.name,
				className: W({ "cursor-not-allowed": c.disabled }),
				children: e
			}),
			/* @__PURE__ */ H(RS, {
				onValueChange: o,
				defaultValue: s,
				value: c.value,
				children: [/* @__PURE__ */ V(RS.Trigger, {
					ref: l,
					...c,
					children: /* @__PURE__ */ V(RS.Value, { placeholder: a || "Select an option" })
				}), /* @__PURE__ */ V(RS.Content, { children: t.map((e) => /* @__PURE__ */ V(RS.Item, {
					value: e.value,
					disabled: e.disabled,
					children: e.label
				}, e.value)) })]
			}),
			u()
		]
	});
});
zS.displayName = "Select", xe.extend(Pe), xe.extend(Ne);
function BS(e, t) {
	let n = xe(t).diff(e, "second"), r = xe.duration(n, "seconds");
	return {
		label: r.asSeconds() <= 30 ? "30 seconds" : r.humanize(),
		value: n,
		start: e,
		end: t
	};
}
function VS({ range: e, setRange: t, options: n, renderOption: r, allowCustom: i = !0, className: a, ...o }) {
	let s = I((e, t) => r ? r(e, t) : BS(e, t), [r]), c = se(() => {
		let t = xe().toDate();
		return [...i ? [{
			label: "Custom",
			value: "custom",
			start: e.start,
			end: e.end
		}] : [], ...n.map((e) => s(e, t))];
	}, [
		e,
		n,
		s,
		i
	]), l = se(() => c.find((t) => {
		if (t.value === "custom") return !1;
		let n = xe(e.end).diff(e.start, "second"), r = xe(t.end).diff(t.start, "second");
		return Math.abs(n - r) < 1;
	}) || c[0], [e, c]), u = (e) => {
		!e || !e.value || t({
			start: e.start,
			end: e.end
		});
	};
	return /* @__PURE__ */ V(zS, {
		value: String(l?.value),
		onValueChange: (e) => {
			let t = c.find((t) => String(t.value) === e);
			u(t);
		},
		options: c.map((e) => ({
			label: e.label,
			value: String(e.value)
		})),
		className: a,
		...o
	});
}
//#endregion
//#region src/ditto/helpers.ts
var HS = (e) => Ie(e), US = ie((e, t) => /* @__PURE__ */ H("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "21",
	height: "24",
	fill: "currentColor",
	viewBox: "0 0 21 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ V("path", { d: "m9.464 0 .296.296v2.815l.296.296h4.733l.296.296v4.593l.295.297h5.324l.296.296v6.222l-.296.296H15.38l-.295.296v4.593l-.296.296h-4.733l-.296.297v2.815L9.464 24H6.211l-.296-.296v-3.408L6.211 20h3.55l.295-.296V15.11l.296-.297h5.028l.296-.296V9.481l-.296-.296h-5.028l-.296-.296V4.296L9.76 4H6.211l-.296-.297V.296L6.211 0zM3.402 16.148v2.815l-.296.296H.296L0 18.963v-2.815l.296-.296h2.81z" }), /* @__PURE__ */ V("path", { d: "M9.168 9.63v4.74l-.296.297H4.14l-.296-.296V9.63l.296-.297h4.732zM3.402 5.037v2.815l-.296.296H.296L0 7.852V5.037l.296-.296h2.81z" })]
}));
US.displayName = "Logo";
//#endregion
//#region src/emptyState/EmptyState.tsx
function WS({ message: e, className: t, iconProps: n, icon: r = !0 }) {
	return /* @__PURE__ */ H("div", {
		className: W("flex flex-1 flex-col items-center gap-3 text-center", t),
		children: [r && /* @__PURE__ */ V(G, {
			svg: /* @__PURE__ */ V(O, { ...n }),
			className: "size-10"
		}), /* @__PURE__ */ V("p", {
			className: "text-foreground-subtle font-medium",
			children: e
		})]
	});
}
//#endregion
//#region node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var GS = /* @__PURE__ */ Tt(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), KS = /* @__PURE__ */ Tt(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, ee = !1;
		function te(e) {
			return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ne(e) || x(e) === l;
		}
		function ne(e) {
			return x(e) === u;
		}
		function re(e) {
			return x(e) === c;
		}
		function ie(e) {
			return x(e) === s;
		}
		function F(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function I(e) {
			return x(e) === d;
		}
		function ae(e) {
			return x(e) === i;
		}
		function L(e) {
			return x(e) === h;
		}
		function R(e) {
			return x(e) === m;
		}
		function oe(e) {
			return x(e) === r;
		}
		function se(e) {
			return x(e) === o;
		}
		function ce(e) {
			return x(e) === a;
		}
		function z(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = te, e.isConcurrentMode = ne, e.isContextConsumer = re, e.isContextProvider = ie, e.isElement = F, e.isForwardRef = I, e.isFragment = ae, e.isLazy = L, e.isMemo = R, e.isPortal = oe, e.isProfiler = se, e.isStrictMode = ce, e.isSuspense = z, e.isValidElementType = b, e.typeOf = x;
	})();
})), qS = /* @__PURE__ */ Tt(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? GS() : KS();
})), JS = /* @__PURE__ */ Tt(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), YS = /* @__PURE__ */ Tt(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), XS = /* @__PURE__ */ Tt(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), ZS = /* @__PURE__ */ Tt(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = YS(), i = {}, a = XS();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), QS = /* @__PURE__ */ Tt(((e, t) => {
	var n = qS(), r = JS(), i = YS(), a = XS(), o = ZS(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					}
					if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = ee(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function ee(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), $S = /* @__PURE__ */ Tt(((e, t) => {
	var n = YS();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), eC = /* @__PURE__ */ Tt(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = qS();
		t.exports = QS()(n.isElement, !0);
	} else t.exports = $S()();
})), tC = /* @__PURE__ */ new Map([
	["1km", "application/vnd.1000minds.decision-model+xml"],
	["3dml", "text/vnd.in3d.3dml"],
	["3ds", "image/x-3ds"],
	["3g2", "video/3gpp2"],
	["3gp", "video/3gp"],
	["3gpp", "video/3gpp"],
	["3mf", "model/3mf"],
	["7z", "application/x-7z-compressed"],
	["7zip", "application/x-7z-compressed"],
	["123", "application/vnd.lotus-1-2-3"],
	["aab", "application/x-authorware-bin"],
	["aac", "audio/x-acc"],
	["aam", "application/x-authorware-map"],
	["aas", "application/x-authorware-seg"],
	["abw", "application/x-abiword"],
	["ac", "application/vnd.nokia.n-gage.ac+xml"],
	["ac3", "audio/ac3"],
	["acc", "application/vnd.americandynamics.acc"],
	["ace", "application/x-ace-compressed"],
	["acu", "application/vnd.acucobol"],
	["acutc", "application/vnd.acucorp"],
	["adp", "audio/adpcm"],
	["aep", "application/vnd.audiograph"],
	["afm", "application/x-font-type1"],
	["afp", "application/vnd.ibm.modcap"],
	["ahead", "application/vnd.ahead.space"],
	["ai", "application/pdf"],
	["aif", "audio/x-aiff"],
	["aifc", "audio/x-aiff"],
	["aiff", "audio/x-aiff"],
	["air", "application/vnd.adobe.air-application-installer-package+zip"],
	["ait", "application/vnd.dvb.ait"],
	["ami", "application/vnd.amiga.ami"],
	["amr", "audio/amr"],
	["apk", "application/vnd.android.package-archive"],
	["apng", "image/apng"],
	["appcache", "text/cache-manifest"],
	["application", "application/x-ms-application"],
	["apr", "application/vnd.lotus-approach"],
	["arc", "application/x-freearc"],
	["arj", "application/x-arj"],
	["asc", "application/pgp-signature"],
	["asf", "video/x-ms-asf"],
	["asm", "text/x-asm"],
	["aso", "application/vnd.accpac.simply.aso"],
	["asx", "video/x-ms-asf"],
	["atc", "application/vnd.acucorp"],
	["atom", "application/atom+xml"],
	["atomcat", "application/atomcat+xml"],
	["atomdeleted", "application/atomdeleted+xml"],
	["atomsvc", "application/atomsvc+xml"],
	["atx", "application/vnd.antix.game-component"],
	["au", "audio/x-au"],
	["avi", "video/x-msvideo"],
	["avif", "image/avif"],
	["aw", "application/applixware"],
	["azf", "application/vnd.airzip.filesecure.azf"],
	["azs", "application/vnd.airzip.filesecure.azs"],
	["azv", "image/vnd.airzip.accelerator.azv"],
	["azw", "application/vnd.amazon.ebook"],
	["b16", "image/vnd.pco.b16"],
	["bat", "application/x-msdownload"],
	["bcpio", "application/x-bcpio"],
	["bdf", "application/x-font-bdf"],
	["bdm", "application/vnd.syncml.dm+wbxml"],
	["bdoc", "application/x-bdoc"],
	["bed", "application/vnd.realvnc.bed"],
	["bh2", "application/vnd.fujitsu.oasysprs"],
	["bin", "application/octet-stream"],
	["blb", "application/x-blorb"],
	["blorb", "application/x-blorb"],
	["bmi", "application/vnd.bmi"],
	["bmml", "application/vnd.balsamiq.bmml+xml"],
	["bmp", "image/bmp"],
	["book", "application/vnd.framemaker"],
	["box", "application/vnd.previewsystems.box"],
	["boz", "application/x-bzip2"],
	["bpk", "application/octet-stream"],
	["bpmn", "application/octet-stream"],
	["bsp", "model/vnd.valve.source.compiled-map"],
	["btif", "image/prs.btif"],
	["buffer", "application/octet-stream"],
	["bz", "application/x-bzip"],
	["bz2", "application/x-bzip2"],
	["c", "text/x-c"],
	["c4d", "application/vnd.clonk.c4group"],
	["c4f", "application/vnd.clonk.c4group"],
	["c4g", "application/vnd.clonk.c4group"],
	["c4p", "application/vnd.clonk.c4group"],
	["c4u", "application/vnd.clonk.c4group"],
	["c11amc", "application/vnd.cluetrust.cartomobile-config"],
	["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"],
	["cab", "application/vnd.ms-cab-compressed"],
	["caf", "audio/x-caf"],
	["cap", "application/vnd.tcpdump.pcap"],
	["car", "application/vnd.curl.car"],
	["cat", "application/vnd.ms-pki.seccat"],
	["cb7", "application/x-cbr"],
	["cba", "application/x-cbr"],
	["cbr", "application/x-cbr"],
	["cbt", "application/x-cbr"],
	["cbz", "application/x-cbr"],
	["cc", "text/x-c"],
	["cco", "application/x-cocoa"],
	["cct", "application/x-director"],
	["ccxml", "application/ccxml+xml"],
	["cdbcmsg", "application/vnd.contact.cmsg"],
	["cda", "application/x-cdf"],
	["cdf", "application/x-netcdf"],
	["cdfx", "application/cdfx+xml"],
	["cdkey", "application/vnd.mediastation.cdkey"],
	["cdmia", "application/cdmi-capability"],
	["cdmic", "application/cdmi-container"],
	["cdmid", "application/cdmi-domain"],
	["cdmio", "application/cdmi-object"],
	["cdmiq", "application/cdmi-queue"],
	["cdr", "application/cdr"],
	["cdx", "chemical/x-cdx"],
	["cdxml", "application/vnd.chemdraw+xml"],
	["cdy", "application/vnd.cinderella"],
	["cer", "application/pkix-cert"],
	["cfs", "application/x-cfs-compressed"],
	["cgm", "image/cgm"],
	["chat", "application/x-chat"],
	["chm", "application/vnd.ms-htmlhelp"],
	["chrt", "application/vnd.kde.kchart"],
	["cif", "chemical/x-cif"],
	["cii", "application/vnd.anser-web-certificate-issue-initiation"],
	["cil", "application/vnd.ms-artgalry"],
	["cjs", "application/node"],
	["cla", "application/vnd.claymore"],
	["class", "application/octet-stream"],
	["clkk", "application/vnd.crick.clicker.keyboard"],
	["clkp", "application/vnd.crick.clicker.palette"],
	["clkt", "application/vnd.crick.clicker.template"],
	["clkw", "application/vnd.crick.clicker.wordbank"],
	["clkx", "application/vnd.crick.clicker"],
	["clp", "application/x-msclip"],
	["cmc", "application/vnd.cosmocaller"],
	["cmdf", "chemical/x-cmdf"],
	["cml", "chemical/x-cml"],
	["cmp", "application/vnd.yellowriver-custom-menu"],
	["cmx", "image/x-cmx"],
	["cod", "application/vnd.rim.cod"],
	["coffee", "text/coffeescript"],
	["com", "application/x-msdownload"],
	["conf", "text/plain"],
	["cpio", "application/x-cpio"],
	["cpp", "text/x-c"],
	["cpt", "application/mac-compactpro"],
	["crd", "application/x-mscardfile"],
	["crl", "application/pkix-crl"],
	["crt", "application/x-x509-ca-cert"],
	["crx", "application/x-chrome-extension"],
	["cryptonote", "application/vnd.rig.cryptonote"],
	["csh", "application/x-csh"],
	["csl", "application/vnd.citationstyles.style+xml"],
	["csml", "chemical/x-csml"],
	["csp", "application/vnd.commonspace"],
	["csr", "application/octet-stream"],
	["css", "text/css"],
	["cst", "application/x-director"],
	["csv", "text/csv"],
	["cu", "application/cu-seeme"],
	["curl", "text/vnd.curl"],
	["cww", "application/prs.cww"],
	["cxt", "application/x-director"],
	["cxx", "text/x-c"],
	["dae", "model/vnd.collada+xml"],
	["daf", "application/vnd.mobius.daf"],
	["dart", "application/vnd.dart"],
	["dataless", "application/vnd.fdsn.seed"],
	["davmount", "application/davmount+xml"],
	["dbf", "application/vnd.dbf"],
	["dbk", "application/docbook+xml"],
	["dcr", "application/x-director"],
	["dcurl", "text/vnd.curl.dcurl"],
	["dd2", "application/vnd.oma.dd2+xml"],
	["ddd", "application/vnd.fujixerox.ddd"],
	["ddf", "application/vnd.syncml.dmddf+xml"],
	["dds", "image/vnd.ms-dds"],
	["deb", "application/x-debian-package"],
	["def", "text/plain"],
	["deploy", "application/octet-stream"],
	["der", "application/x-x509-ca-cert"],
	["dfac", "application/vnd.dreamfactory"],
	["dgc", "application/x-dgc-compressed"],
	["dic", "text/x-c"],
	["dir", "application/x-director"],
	["dis", "application/vnd.mobius.dis"],
	["disposition-notification", "message/disposition-notification"],
	["dist", "application/octet-stream"],
	["distz", "application/octet-stream"],
	["djv", "image/vnd.djvu"],
	["djvu", "image/vnd.djvu"],
	["dll", "application/octet-stream"],
	["dmg", "application/x-apple-diskimage"],
	["dmn", "application/octet-stream"],
	["dmp", "application/vnd.tcpdump.pcap"],
	["dms", "application/octet-stream"],
	["dna", "application/vnd.dna"],
	["doc", "application/msword"],
	["docm", "application/vnd.ms-word.template.macroEnabled.12"],
	["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
	["dot", "application/msword"],
	["dotm", "application/vnd.ms-word.template.macroEnabled.12"],
	["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
	["dp", "application/vnd.osgi.dp"],
	["dpg", "application/vnd.dpgraph"],
	["dra", "audio/vnd.dra"],
	["drle", "image/dicom-rle"],
	["dsc", "text/prs.lines.tag"],
	["dssc", "application/dssc+der"],
	["dtb", "application/x-dtbook+xml"],
	["dtd", "application/xml-dtd"],
	["dts", "audio/vnd.dts"],
	["dtshd", "audio/vnd.dts.hd"],
	["dump", "application/octet-stream"],
	["dvb", "video/vnd.dvb.file"],
	["dvi", "application/x-dvi"],
	["dwd", "application/atsc-dwd+xml"],
	["dwf", "model/vnd.dwf"],
	["dwg", "image/vnd.dwg"],
	["dxf", "image/vnd.dxf"],
	["dxp", "application/vnd.spotfire.dxp"],
	["dxr", "application/x-director"],
	["ear", "application/java-archive"],
	["ecelp4800", "audio/vnd.nuera.ecelp4800"],
	["ecelp7470", "audio/vnd.nuera.ecelp7470"],
	["ecelp9600", "audio/vnd.nuera.ecelp9600"],
	["ecma", "application/ecmascript"],
	["edm", "application/vnd.novadigm.edm"],
	["edx", "application/vnd.novadigm.edx"],
	["efif", "application/vnd.picsel"],
	["ei6", "application/vnd.pg.osasli"],
	["elc", "application/octet-stream"],
	["emf", "image/emf"],
	["eml", "message/rfc822"],
	["emma", "application/emma+xml"],
	["emotionml", "application/emotionml+xml"],
	["emz", "application/x-msmetafile"],
	["eol", "audio/vnd.digital-winds"],
	["eot", "application/vnd.ms-fontobject"],
	["eps", "application/postscript"],
	["epub", "application/epub+zip"],
	["es", "application/ecmascript"],
	["es3", "application/vnd.eszigno3+xml"],
	["esa", "application/vnd.osgi.subsystem"],
	["esf", "application/vnd.epson.esf"],
	["et3", "application/vnd.eszigno3+xml"],
	["etx", "text/x-setext"],
	["eva", "application/x-eva"],
	["evy", "application/x-envoy"],
	["exe", "application/octet-stream"],
	["exi", "application/exi"],
	["exp", "application/express"],
	["exr", "image/aces"],
	["ext", "application/vnd.novadigm.ext"],
	["ez", "application/andrew-inset"],
	["ez2", "application/vnd.ezpix-album"],
	["ez3", "application/vnd.ezpix-package"],
	["f", "text/x-fortran"],
	["f4v", "video/mp4"],
	["f77", "text/x-fortran"],
	["f90", "text/x-fortran"],
	["fbs", "image/vnd.fastbidsheet"],
	["fcdt", "application/vnd.adobe.formscentral.fcdt"],
	["fcs", "application/vnd.isac.fcs"],
	["fdf", "application/vnd.fdf"],
	["fdt", "application/fdt+xml"],
	["fe_launch", "application/vnd.denovo.fcselayout-link"],
	["fg5", "application/vnd.fujitsu.oasysgp"],
	["fgd", "application/x-director"],
	["fh", "image/x-freehand"],
	["fh4", "image/x-freehand"],
	["fh5", "image/x-freehand"],
	["fh7", "image/x-freehand"],
	["fhc", "image/x-freehand"],
	["fig", "application/x-xfig"],
	["fits", "image/fits"],
	["flac", "audio/x-flac"],
	["fli", "video/x-fli"],
	["flo", "application/vnd.micrografx.flo"],
	["flv", "video/x-flv"],
	["flw", "application/vnd.kde.kivio"],
	["flx", "text/vnd.fmi.flexstor"],
	["fly", "text/vnd.fly"],
	["fm", "application/vnd.framemaker"],
	["fnc", "application/vnd.frogans.fnc"],
	["fo", "application/vnd.software602.filler.form+xml"],
	["for", "text/x-fortran"],
	["fpx", "image/vnd.fpx"],
	["frame", "application/vnd.framemaker"],
	["fsc", "application/vnd.fsc.weblaunch"],
	["fst", "image/vnd.fst"],
	["ftc", "application/vnd.fluxtime.clip"],
	["fti", "application/vnd.anser-web-funds-transfer-initiation"],
	["fvt", "video/vnd.fvt"],
	["fxp", "application/vnd.adobe.fxp"],
	["fxpl", "application/vnd.adobe.fxp"],
	["fzs", "application/vnd.fuzzysheet"],
	["g2w", "application/vnd.geoplan"],
	["g3", "image/g3fax"],
	["g3w", "application/vnd.geospace"],
	["gac", "application/vnd.groove-account"],
	["gam", "application/x-tads"],
	["gbr", "application/rpki-ghostbusters"],
	["gca", "application/x-gca-compressed"],
	["gdl", "model/vnd.gdl"],
	["gdoc", "application/vnd.google-apps.document"],
	["geo", "application/vnd.dynageo"],
	["geojson", "application/geo+json"],
	["gex", "application/vnd.geometry-explorer"],
	["ggb", "application/vnd.geogebra.file"],
	["ggt", "application/vnd.geogebra.tool"],
	["ghf", "application/vnd.groove-help"],
	["gif", "image/gif"],
	["gim", "application/vnd.groove-identity-message"],
	["glb", "model/gltf-binary"],
	["gltf", "model/gltf+json"],
	["gml", "application/gml+xml"],
	["gmx", "application/vnd.gmx"],
	["gnumeric", "application/x-gnumeric"],
	["gpg", "application/gpg-keys"],
	["gph", "application/vnd.flographit"],
	["gpx", "application/gpx+xml"],
	["gqf", "application/vnd.grafeq"],
	["gqs", "application/vnd.grafeq"],
	["gram", "application/srgs"],
	["gramps", "application/x-gramps-xml"],
	["gre", "application/vnd.geometry-explorer"],
	["grv", "application/vnd.groove-injector"],
	["grxml", "application/srgs+xml"],
	["gsf", "application/x-font-ghostscript"],
	["gsheet", "application/vnd.google-apps.spreadsheet"],
	["gslides", "application/vnd.google-apps.presentation"],
	["gtar", "application/x-gtar"],
	["gtm", "application/vnd.groove-tool-message"],
	["gtw", "model/vnd.gtw"],
	["gv", "text/vnd.graphviz"],
	["gxf", "application/gxf"],
	["gxt", "application/vnd.geonext"],
	["gz", "application/gzip"],
	["gzip", "application/gzip"],
	["h", "text/x-c"],
	["h261", "video/h261"],
	["h263", "video/h263"],
	["h264", "video/h264"],
	["hal", "application/vnd.hal+xml"],
	["hbci", "application/vnd.hbci"],
	["hbs", "text/x-handlebars-template"],
	["hdd", "application/x-virtualbox-hdd"],
	["hdf", "application/x-hdf"],
	["heic", "image/heic"],
	["heics", "image/heic-sequence"],
	["heif", "image/heif"],
	["heifs", "image/heif-sequence"],
	["hej2", "image/hej2k"],
	["held", "application/atsc-held+xml"],
	["hh", "text/x-c"],
	["hjson", "application/hjson"],
	["hlp", "application/winhlp"],
	["hpgl", "application/vnd.hp-hpgl"],
	["hpid", "application/vnd.hp-hpid"],
	["hps", "application/vnd.hp-hps"],
	["hqx", "application/mac-binhex40"],
	["hsj2", "image/hsj2"],
	["htc", "text/x-component"],
	["htke", "application/vnd.kenameaapp"],
	["htm", "text/html"],
	["html", "text/html"],
	["hvd", "application/vnd.yamaha.hv-dic"],
	["hvp", "application/vnd.yamaha.hv-voice"],
	["hvs", "application/vnd.yamaha.hv-script"],
	["i2g", "application/vnd.intergeo"],
	["icc", "application/vnd.iccprofile"],
	["ice", "x-conference/x-cooltalk"],
	["icm", "application/vnd.iccprofile"],
	["ico", "image/x-icon"],
	["ics", "text/calendar"],
	["ief", "image/ief"],
	["ifb", "text/calendar"],
	["ifm", "application/vnd.shana.informed.formdata"],
	["iges", "model/iges"],
	["igl", "application/vnd.igloader"],
	["igm", "application/vnd.insors.igm"],
	["igs", "model/iges"],
	["igx", "application/vnd.micrografx.igx"],
	["iif", "application/vnd.shana.informed.interchange"],
	["img", "application/octet-stream"],
	["imp", "application/vnd.accpac.simply.imp"],
	["ims", "application/vnd.ms-ims"],
	["in", "text/plain"],
	["ini", "text/plain"],
	["ink", "application/inkml+xml"],
	["inkml", "application/inkml+xml"],
	["install", "application/x-install-instructions"],
	["iota", "application/vnd.astraea-software.iota"],
	["ipfix", "application/ipfix"],
	["ipk", "application/vnd.shana.informed.package"],
	["irm", "application/vnd.ibm.rights-management"],
	["irp", "application/vnd.irepository.package+xml"],
	["iso", "application/x-iso9660-image"],
	["itp", "application/vnd.shana.informed.formtemplate"],
	["its", "application/its+xml"],
	["ivp", "application/vnd.immervision-ivp"],
	["ivu", "application/vnd.immervision-ivu"],
	["jad", "text/vnd.sun.j2me.app-descriptor"],
	["jade", "text/jade"],
	["jam", "application/vnd.jam"],
	["jar", "application/java-archive"],
	["jardiff", "application/x-java-archive-diff"],
	["java", "text/x-java-source"],
	["jhc", "image/jphc"],
	["jisp", "application/vnd.jisp"],
	["jls", "image/jls"],
	["jlt", "application/vnd.hp-jlyt"],
	["jng", "image/x-jng"],
	["jnlp", "application/x-java-jnlp-file"],
	["joda", "application/vnd.joost.joda-archive"],
	["jp2", "image/jp2"],
	["jpe", "image/jpeg"],
	["jpeg", "image/jpeg"],
	["jpf", "image/jpx"],
	["jpg", "image/jpeg"],
	["jpg2", "image/jp2"],
	["jpgm", "video/jpm"],
	["jpgv", "video/jpeg"],
	["jph", "image/jph"],
	["jpm", "video/jpm"],
	["jpx", "image/jpx"],
	["js", "application/javascript"],
	["json", "application/json"],
	["json5", "application/json5"],
	["jsonld", "application/ld+json"],
	["jsonl", "application/jsonl"],
	["jsonml", "application/jsonml+json"],
	["jsx", "text/jsx"],
	["jxr", "image/jxr"],
	["jxra", "image/jxra"],
	["jxrs", "image/jxrs"],
	["jxs", "image/jxs"],
	["jxsc", "image/jxsc"],
	["jxsi", "image/jxsi"],
	["jxss", "image/jxss"],
	["kar", "audio/midi"],
	["karbon", "application/vnd.kde.karbon"],
	["kdb", "application/octet-stream"],
	["kdbx", "application/x-keepass2"],
	["key", "application/x-iwork-keynote-sffkey"],
	["kfo", "application/vnd.kde.kformula"],
	["kia", "application/vnd.kidspiration"],
	["kml", "application/vnd.google-earth.kml+xml"],
	["kmz", "application/vnd.google-earth.kmz"],
	["kne", "application/vnd.kinar"],
	["knp", "application/vnd.kinar"],
	["kon", "application/vnd.kde.kontour"],
	["kpr", "application/vnd.kde.kpresenter"],
	["kpt", "application/vnd.kde.kpresenter"],
	["kpxx", "application/vnd.ds-keypoint"],
	["ksp", "application/vnd.kde.kspread"],
	["ktr", "application/vnd.kahootz"],
	["ktx", "image/ktx"],
	["ktx2", "image/ktx2"],
	["ktz", "application/vnd.kahootz"],
	["kwd", "application/vnd.kde.kword"],
	["kwt", "application/vnd.kde.kword"],
	["lasxml", "application/vnd.las.las+xml"],
	["latex", "application/x-latex"],
	["lbd", "application/vnd.llamagraphics.life-balance.desktop"],
	["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"],
	["les", "application/vnd.hhe.lesson-player"],
	["less", "text/less"],
	["lgr", "application/lgr+xml"],
	["lha", "application/octet-stream"],
	["link66", "application/vnd.route66.link66+xml"],
	["list", "text/plain"],
	["list3820", "application/vnd.ibm.modcap"],
	["listafp", "application/vnd.ibm.modcap"],
	["litcoffee", "text/coffeescript"],
	["lnk", "application/x-ms-shortcut"],
	["log", "text/plain"],
	["lostxml", "application/lost+xml"],
	["lrf", "application/octet-stream"],
	["lrm", "application/vnd.ms-lrm"],
	["ltf", "application/vnd.frogans.ltf"],
	["lua", "text/x-lua"],
	["luac", "application/x-lua-bytecode"],
	["lvp", "audio/vnd.lucent.voice"],
	["lwp", "application/vnd.lotus-wordpro"],
	["lzh", "application/octet-stream"],
	["m1v", "video/mpeg"],
	["m2a", "audio/mpeg"],
	["m2v", "video/mpeg"],
	["m3a", "audio/mpeg"],
	["m3u", "text/plain"],
	["m3u8", "application/vnd.apple.mpegurl"],
	["m4a", "audio/x-m4a"],
	["m4p", "application/mp4"],
	["m4s", "video/iso.segment"],
	["m4u", "application/vnd.mpegurl"],
	["m4v", "video/x-m4v"],
	["m13", "application/x-msmediaview"],
	["m14", "application/x-msmediaview"],
	["m21", "application/mp21"],
	["ma", "application/mathematica"],
	["mads", "application/mads+xml"],
	["maei", "application/mmt-aei+xml"],
	["mag", "application/vnd.ecowin.chart"],
	["maker", "application/vnd.framemaker"],
	["man", "text/troff"],
	["manifest", "text/cache-manifest"],
	["map", "application/json"],
	["mar", "application/octet-stream"],
	["markdown", "text/markdown"],
	["mathml", "application/mathml+xml"],
	["mb", "application/mathematica"],
	["mbk", "application/vnd.mobius.mbk"],
	["mbox", "application/mbox"],
	["mc1", "application/vnd.medcalcdata"],
	["mcd", "application/vnd.mcd"],
	["mcurl", "text/vnd.curl.mcurl"],
	["md", "text/markdown"],
	["mdb", "application/x-msaccess"],
	["mdi", "image/vnd.ms-modi"],
	["mdx", "text/mdx"],
	["me", "text/troff"],
	["mesh", "model/mesh"],
	["meta4", "application/metalink4+xml"],
	["metalink", "application/metalink+xml"],
	["mets", "application/mets+xml"],
	["mfm", "application/vnd.mfmp"],
	["mft", "application/rpki-manifest"],
	["mgp", "application/vnd.osgeo.mapguide.package"],
	["mgz", "application/vnd.proteus.magazine"],
	["mid", "audio/midi"],
	["midi", "audio/midi"],
	["mie", "application/x-mie"],
	["mif", "application/vnd.mif"],
	["mime", "message/rfc822"],
	["mj2", "video/mj2"],
	["mjp2", "video/mj2"],
	["mjs", "application/javascript"],
	["mk3d", "video/x-matroska"],
	["mka", "audio/x-matroska"],
	["mkd", "text/x-markdown"],
	["mks", "video/x-matroska"],
	["mkv", "video/x-matroska"],
	["mlp", "application/vnd.dolby.mlp"],
	["mmd", "application/vnd.chipnuts.karaoke-mmd"],
	["mmf", "application/vnd.smaf"],
	["mml", "text/mathml"],
	["mmr", "image/vnd.fujixerox.edmics-mmr"],
	["mng", "video/x-mng"],
	["mny", "application/x-msmoney"],
	["mobi", "application/x-mobipocket-ebook"],
	["mods", "application/mods+xml"],
	["mov", "video/quicktime"],
	["movie", "video/x-sgi-movie"],
	["mp2", "audio/mpeg"],
	["mp2a", "audio/mpeg"],
	["mp3", "audio/mpeg"],
	["mp4", "video/mp4"],
	["mp4a", "audio/mp4"],
	["mp4s", "application/mp4"],
	["mp4v", "video/mp4"],
	["mp21", "application/mp21"],
	["mpc", "application/vnd.mophun.certificate"],
	["mpd", "application/dash+xml"],
	["mpe", "video/mpeg"],
	["mpeg", "video/mpeg"],
	["mpg", "video/mpeg"],
	["mpg4", "video/mp4"],
	["mpga", "audio/mpeg"],
	["mpkg", "application/vnd.apple.installer+xml"],
	["mpm", "application/vnd.blueice.multipass"],
	["mpn", "application/vnd.mophun.application"],
	["mpp", "application/vnd.ms-project"],
	["mpt", "application/vnd.ms-project"],
	["mpy", "application/vnd.ibm.minipay"],
	["mqy", "application/vnd.mobius.mqy"],
	["mrc", "application/marc"],
	["mrcx", "application/marcxml+xml"],
	["ms", "text/troff"],
	["mscml", "application/mediaservercontrol+xml"],
	["mseed", "application/vnd.fdsn.mseed"],
	["mseq", "application/vnd.mseq"],
	["msf", "application/vnd.epson.msf"],
	["msg", "application/vnd.ms-outlook"],
	["msh", "model/mesh"],
	["msi", "application/x-msdownload"],
	["msl", "application/vnd.mobius.msl"],
	["msm", "application/octet-stream"],
	["msp", "application/octet-stream"],
	["msty", "application/vnd.muvee.style"],
	["mtl", "model/mtl"],
	["mts", "model/vnd.mts"],
	["mus", "application/vnd.musician"],
	["musd", "application/mmt-usd+xml"],
	["musicxml", "application/vnd.recordare.musicxml+xml"],
	["mvb", "application/x-msmediaview"],
	["mvt", "application/vnd.mapbox-vector-tile"],
	["mwf", "application/vnd.mfer"],
	["mxf", "application/mxf"],
	["mxl", "application/vnd.recordare.musicxml"],
	["mxmf", "audio/mobile-xmf"],
	["mxml", "application/xv+xml"],
	["mxs", "application/vnd.triscape.mxs"],
	["mxu", "video/vnd.mpegurl"],
	["n-gage", "application/vnd.nokia.n-gage.symbian.install"],
	["n3", "text/n3"],
	["nb", "application/mathematica"],
	["nbp", "application/vnd.wolfram.player"],
	["nc", "application/x-netcdf"],
	["ncx", "application/x-dtbncx+xml"],
	["nfo", "text/x-nfo"],
	["ngdat", "application/vnd.nokia.n-gage.data"],
	["nitf", "application/vnd.nitf"],
	["nlu", "application/vnd.neurolanguage.nlu"],
	["nml", "application/vnd.enliven"],
	["nnd", "application/vnd.noblenet-directory"],
	["nns", "application/vnd.noblenet-sealer"],
	["nnw", "application/vnd.noblenet-web"],
	["npx", "image/vnd.net-fpx"],
	["nq", "application/n-quads"],
	["nsc", "application/x-conference"],
	["nsf", "application/vnd.lotus-notes"],
	["nt", "application/n-triples"],
	["ntf", "application/vnd.nitf"],
	["numbers", "application/x-iwork-numbers-sffnumbers"],
	["nzb", "application/x-nzb"],
	["oa2", "application/vnd.fujitsu.oasys2"],
	["oa3", "application/vnd.fujitsu.oasys3"],
	["oas", "application/vnd.fujitsu.oasys"],
	["obd", "application/x-msbinder"],
	["obgx", "application/vnd.openblox.game+xml"],
	["obj", "model/obj"],
	["oda", "application/oda"],
	["odb", "application/vnd.oasis.opendocument.database"],
	["odc", "application/vnd.oasis.opendocument.chart"],
	["odf", "application/vnd.oasis.opendocument.formula"],
	["odft", "application/vnd.oasis.opendocument.formula-template"],
	["odg", "application/vnd.oasis.opendocument.graphics"],
	["odi", "application/vnd.oasis.opendocument.image"],
	["odm", "application/vnd.oasis.opendocument.text-master"],
	["odp", "application/vnd.oasis.opendocument.presentation"],
	["ods", "application/vnd.oasis.opendocument.spreadsheet"],
	["odt", "application/vnd.oasis.opendocument.text"],
	["oga", "audio/ogg"],
	["ogex", "model/vnd.opengex"],
	["ogg", "audio/ogg"],
	["ogv", "video/ogg"],
	["ogx", "application/ogg"],
	["omdoc", "application/omdoc+xml"],
	["onepkg", "application/onenote"],
	["onetmp", "application/onenote"],
	["onetoc", "application/onenote"],
	["onetoc2", "application/onenote"],
	["opf", "application/oebps-package+xml"],
	["opml", "text/x-opml"],
	["oprc", "application/vnd.palm"],
	["opus", "audio/ogg"],
	["org", "text/x-org"],
	["osf", "application/vnd.yamaha.openscoreformat"],
	["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"],
	["osm", "application/vnd.openstreetmap.data+xml"],
	["otc", "application/vnd.oasis.opendocument.chart-template"],
	["otf", "font/otf"],
	["otg", "application/vnd.oasis.opendocument.graphics-template"],
	["oth", "application/vnd.oasis.opendocument.text-web"],
	["oti", "application/vnd.oasis.opendocument.image-template"],
	["otp", "application/vnd.oasis.opendocument.presentation-template"],
	["ots", "application/vnd.oasis.opendocument.spreadsheet-template"],
	["ott", "application/vnd.oasis.opendocument.text-template"],
	["ova", "application/x-virtualbox-ova"],
	["ovf", "application/x-virtualbox-ovf"],
	["owl", "application/rdf+xml"],
	["oxps", "application/oxps"],
	["oxt", "application/vnd.openofficeorg.extension"],
	["p", "text/x-pascal"],
	["p7a", "application/x-pkcs7-signature"],
	["p7b", "application/x-pkcs7-certificates"],
	["p7c", "application/pkcs7-mime"],
	["p7m", "application/pkcs7-mime"],
	["p7r", "application/x-pkcs7-certreqresp"],
	["p7s", "application/pkcs7-signature"],
	["p8", "application/pkcs8"],
	["p10", "application/x-pkcs10"],
	["p12", "application/x-pkcs12"],
	["pac", "application/x-ns-proxy-autoconfig"],
	["pages", "application/x-iwork-pages-sffpages"],
	["pas", "text/x-pascal"],
	["paw", "application/vnd.pawaafile"],
	["pbd", "application/vnd.powerbuilder6"],
	["pbm", "image/x-portable-bitmap"],
	["pcap", "application/vnd.tcpdump.pcap"],
	["pcf", "application/x-font-pcf"],
	["pcl", "application/vnd.hp-pcl"],
	["pclxl", "application/vnd.hp-pclxl"],
	["pct", "image/x-pict"],
	["pcurl", "application/vnd.curl.pcurl"],
	["pcx", "image/x-pcx"],
	["pdb", "application/x-pilot"],
	["pde", "text/x-processing"],
	["pdf", "application/pdf"],
	["pem", "application/x-x509-user-cert"],
	["pfa", "application/x-font-type1"],
	["pfb", "application/x-font-type1"],
	["pfm", "application/x-font-type1"],
	["pfr", "application/font-tdpfr"],
	["pfx", "application/x-pkcs12"],
	["pgm", "image/x-portable-graymap"],
	["pgn", "application/x-chess-pgn"],
	["pgp", "application/pgp"],
	["php", "application/x-httpd-php"],
	["php3", "application/x-httpd-php"],
	["php4", "application/x-httpd-php"],
	["phps", "application/x-httpd-php-source"],
	["phtml", "application/x-httpd-php"],
	["pic", "image/x-pict"],
	["pkg", "application/octet-stream"],
	["pki", "application/pkixcmp"],
	["pkipath", "application/pkix-pkipath"],
	["pkpass", "application/vnd.apple.pkpass"],
	["pl", "application/x-perl"],
	["plb", "application/vnd.3gpp.pic-bw-large"],
	["plc", "application/vnd.mobius.plc"],
	["plf", "application/vnd.pocketlearn"],
	["pls", "application/pls+xml"],
	["pm", "application/x-perl"],
	["pml", "application/vnd.ctc-posml"],
	["png", "image/png"],
	["pnm", "image/x-portable-anymap"],
	["portpkg", "application/vnd.macports.portpkg"],
	["pot", "application/vnd.ms-powerpoint"],
	["potm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
	["ppa", "application/vnd.ms-powerpoint"],
	["ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
	["ppd", "application/vnd.cups-ppd"],
	["ppm", "image/x-portable-pixmap"],
	["pps", "application/vnd.ms-powerpoint"],
	["ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
	["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
	["ppt", "application/powerpoint"],
	["pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
	["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
	["pqa", "application/vnd.palm"],
	["prc", "application/x-pilot"],
	["pre", "application/vnd.lotus-freelance"],
	["prf", "application/pics-rules"],
	["provx", "application/provenance+xml"],
	["ps", "application/postscript"],
	["psb", "application/vnd.3gpp.pic-bw-small"],
	["psd", "application/x-photoshop"],
	["psf", "application/x-font-linux-psf"],
	["pskcxml", "application/pskc+xml"],
	["pti", "image/prs.pti"],
	["ptid", "application/vnd.pvi.ptid1"],
	["pub", "application/x-mspublisher"],
	["pvb", "application/vnd.3gpp.pic-bw-var"],
	["pwn", "application/vnd.3m.post-it-notes"],
	["pya", "audio/vnd.ms-playready.media.pya"],
	["pyv", "video/vnd.ms-playready.media.pyv"],
	["qam", "application/vnd.epson.quickanime"],
	["qbo", "application/vnd.intu.qbo"],
	["qfx", "application/vnd.intu.qfx"],
	["qps", "application/vnd.publishare-delta-tree"],
	["qt", "video/quicktime"],
	["qwd", "application/vnd.quark.quarkxpress"],
	["qwt", "application/vnd.quark.quarkxpress"],
	["qxb", "application/vnd.quark.quarkxpress"],
	["qxd", "application/vnd.quark.quarkxpress"],
	["qxl", "application/vnd.quark.quarkxpress"],
	["qxt", "application/vnd.quark.quarkxpress"],
	["ra", "audio/x-realaudio"],
	["ram", "audio/x-pn-realaudio"],
	["raml", "application/raml+yaml"],
	["rapd", "application/route-apd+xml"],
	["rar", "application/x-rar"],
	["ras", "image/x-cmu-raster"],
	["rcprofile", "application/vnd.ipunplugged.rcprofile"],
	["rdf", "application/rdf+xml"],
	["rdz", "application/vnd.data-vision.rdz"],
	["relo", "application/p2p-overlay+xml"],
	["rep", "application/vnd.businessobjects"],
	["res", "application/x-dtbresource+xml"],
	["rgb", "image/x-rgb"],
	["rif", "application/reginfo+xml"],
	["rip", "audio/vnd.rip"],
	["ris", "application/x-research-info-systems"],
	["rl", "application/resource-lists+xml"],
	["rlc", "image/vnd.fujixerox.edmics-rlc"],
	["rld", "application/resource-lists-diff+xml"],
	["rm", "audio/x-pn-realaudio"],
	["rmi", "audio/midi"],
	["rmp", "audio/x-pn-realaudio-plugin"],
	["rms", "application/vnd.jcp.javame.midlet-rms"],
	["rmvb", "application/vnd.rn-realmedia-vbr"],
	["rnc", "application/relax-ng-compact-syntax"],
	["rng", "application/xml"],
	["roa", "application/rpki-roa"],
	["roff", "text/troff"],
	["rp9", "application/vnd.cloanto.rp9"],
	["rpm", "audio/x-pn-realaudio-plugin"],
	["rpss", "application/vnd.nokia.radio-presets"],
	["rpst", "application/vnd.nokia.radio-preset"],
	["rq", "application/sparql-query"],
	["rs", "application/rls-services+xml"],
	["rsa", "application/x-pkcs7"],
	["rsat", "application/atsc-rsat+xml"],
	["rsd", "application/rsd+xml"],
	["rsheet", "application/urc-ressheet+xml"],
	["rss", "application/rss+xml"],
	["rtf", "text/rtf"],
	["rtx", "text/richtext"],
	["run", "application/x-makeself"],
	["rusd", "application/route-usd+xml"],
	["rv", "video/vnd.rn-realvideo"],
	["s", "text/x-asm"],
	["s3m", "audio/s3m"],
	["saf", "application/vnd.yamaha.smaf-audio"],
	["sass", "text/x-sass"],
	["sbml", "application/sbml+xml"],
	["sc", "application/vnd.ibm.secure-container"],
	["scd", "application/x-msschedule"],
	["scm", "application/vnd.lotus-screencam"],
	["scq", "application/scvp-cv-request"],
	["scs", "application/scvp-cv-response"],
	["scss", "text/x-scss"],
	["scurl", "text/vnd.curl.scurl"],
	["sda", "application/vnd.stardivision.draw"],
	["sdc", "application/vnd.stardivision.calc"],
	["sdd", "application/vnd.stardivision.impress"],
	["sdkd", "application/vnd.solent.sdkm+xml"],
	["sdkm", "application/vnd.solent.sdkm+xml"],
	["sdp", "application/sdp"],
	["sdw", "application/vnd.stardivision.writer"],
	["sea", "application/octet-stream"],
	["see", "application/vnd.seemail"],
	["seed", "application/vnd.fdsn.seed"],
	["sema", "application/vnd.sema"],
	["semd", "application/vnd.semd"],
	["semf", "application/vnd.semf"],
	["senmlx", "application/senml+xml"],
	["sensmlx", "application/sensml+xml"],
	["ser", "application/java-serialized-object"],
	["setpay", "application/set-payment-initiation"],
	["setreg", "application/set-registration-initiation"],
	["sfd-hdstx", "application/vnd.hydrostatix.sof-data"],
	["sfs", "application/vnd.spotfire.sfs"],
	["sfv", "text/x-sfv"],
	["sgi", "image/sgi"],
	["sgl", "application/vnd.stardivision.writer-global"],
	["sgm", "text/sgml"],
	["sgml", "text/sgml"],
	["sh", "application/x-sh"],
	["shar", "application/x-shar"],
	["shex", "text/shex"],
	["shf", "application/shf+xml"],
	["shtml", "text/html"],
	["sid", "image/x-mrsid-image"],
	["sieve", "application/sieve"],
	["sig", "application/pgp-signature"],
	["sil", "audio/silk"],
	["silo", "model/mesh"],
	["sis", "application/vnd.symbian.install"],
	["sisx", "application/vnd.symbian.install"],
	["sit", "application/x-stuffit"],
	["sitx", "application/x-stuffitx"],
	["siv", "application/sieve"],
	["skd", "application/vnd.koan"],
	["skm", "application/vnd.koan"],
	["skp", "application/vnd.koan"],
	["skt", "application/vnd.koan"],
	["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"],
	["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
	["slim", "text/slim"],
	["slm", "text/slim"],
	["sls", "application/route-s-tsid+xml"],
	["slt", "application/vnd.epson.salt"],
	["sm", "application/vnd.stepmania.stepchart"],
	["smf", "application/vnd.stardivision.math"],
	["smi", "application/smil"],
	["smil", "application/smil"],
	["smv", "video/x-smv"],
	["smzip", "application/vnd.stepmania.package"],
	["snd", "audio/basic"],
	["snf", "application/x-font-snf"],
	["so", "application/octet-stream"],
	["spc", "application/x-pkcs7-certificates"],
	["spdx", "text/spdx"],
	["spf", "application/vnd.yamaha.smaf-phrase"],
	["spl", "application/x-futuresplash"],
	["spot", "text/vnd.in3d.spot"],
	["spp", "application/scvp-vp-response"],
	["spq", "application/scvp-vp-request"],
	["spx", "audio/ogg"],
	["sql", "application/x-sql"],
	["src", "application/x-wais-source"],
	["srt", "application/x-subrip"],
	["sru", "application/sru+xml"],
	["srx", "application/sparql-results+xml"],
	["ssdl", "application/ssdl+xml"],
	["sse", "application/vnd.kodak-descriptor"],
	["ssf", "application/vnd.epson.ssf"],
	["ssml", "application/ssml+xml"],
	["sst", "application/octet-stream"],
	["st", "application/vnd.sailingtracker.track"],
	["stc", "application/vnd.sun.xml.calc.template"],
	["std", "application/vnd.sun.xml.draw.template"],
	["stf", "application/vnd.wt.stf"],
	["sti", "application/vnd.sun.xml.impress.template"],
	["stk", "application/hyperstudio"],
	["stl", "model/stl"],
	["stpx", "model/step+xml"],
	["stpxz", "model/step-xml+zip"],
	["stpz", "model/step+zip"],
	["str", "application/vnd.pg.format"],
	["stw", "application/vnd.sun.xml.writer.template"],
	["styl", "text/stylus"],
	["stylus", "text/stylus"],
	["sub", "text/vnd.dvb.subtitle"],
	["sus", "application/vnd.sus-calendar"],
	["susp", "application/vnd.sus-calendar"],
	["sv4cpio", "application/x-sv4cpio"],
	["sv4crc", "application/x-sv4crc"],
	["svc", "application/vnd.dvb.service"],
	["svd", "application/vnd.svd"],
	["svg", "image/svg+xml"],
	["svgz", "image/svg+xml"],
	["swa", "application/x-director"],
	["swf", "application/x-shockwave-flash"],
	["swi", "application/vnd.aristanetworks.swi"],
	["swidtag", "application/swid+xml"],
	["sxc", "application/vnd.sun.xml.calc"],
	["sxd", "application/vnd.sun.xml.draw"],
	["sxg", "application/vnd.sun.xml.writer.global"],
	["sxi", "application/vnd.sun.xml.impress"],
	["sxm", "application/vnd.sun.xml.math"],
	["sxw", "application/vnd.sun.xml.writer"],
	["t", "text/troff"],
	["t3", "application/x-t3vm-image"],
	["t38", "image/t38"],
	["taglet", "application/vnd.mynfc"],
	["tao", "application/vnd.tao.intent-module-archive"],
	["tap", "image/vnd.tencent.tap"],
	["tar", "application/x-tar"],
	["tcap", "application/vnd.3gpp2.tcap"],
	["tcl", "application/x-tcl"],
	["td", "application/urc-targetdesc+xml"],
	["teacher", "application/vnd.smart.teacher"],
	["tei", "application/tei+xml"],
	["teicorpus", "application/tei+xml"],
	["tex", "application/x-tex"],
	["texi", "application/x-texinfo"],
	["texinfo", "application/x-texinfo"],
	["text", "text/plain"],
	["tfi", "application/thraud+xml"],
	["tfm", "application/x-tex-tfm"],
	["tfx", "image/tiff-fx"],
	["tga", "image/x-tga"],
	["tgz", "application/x-tar"],
	["thmx", "application/vnd.ms-officetheme"],
	["tif", "image/tiff"],
	["tiff", "image/tiff"],
	["tk", "application/x-tcl"],
	["tmo", "application/vnd.tmobile-livetv"],
	["toml", "application/toml"],
	["torrent", "application/x-bittorrent"],
	["tpl", "application/vnd.groove-tool-template"],
	["tpt", "application/vnd.trid.tpt"],
	["tr", "text/troff"],
	["tra", "application/vnd.trueapp"],
	["trig", "application/trig"],
	["trm", "application/x-msterminal"],
	["ts", "video/mp2t"],
	["tsd", "application/timestamped-data"],
	["tsv", "text/tab-separated-values"],
	["ttc", "font/collection"],
	["ttf", "font/ttf"],
	["ttl", "text/turtle"],
	["ttml", "application/ttml+xml"],
	["twd", "application/vnd.simtech-mindmapper"],
	["twds", "application/vnd.simtech-mindmapper"],
	["txd", "application/vnd.genomatix.tuxedo"],
	["txf", "application/vnd.mobius.txf"],
	["txt", "text/plain"],
	["u8dsn", "message/global-delivery-status"],
	["u8hdr", "message/global-headers"],
	["u8mdn", "message/global-disposition-notification"],
	["u8msg", "message/global"],
	["u32", "application/x-authorware-bin"],
	["ubj", "application/ubjson"],
	["udeb", "application/x-debian-package"],
	["ufd", "application/vnd.ufdl"],
	["ufdl", "application/vnd.ufdl"],
	["ulx", "application/x-glulx"],
	["umj", "application/vnd.umajin"],
	["unityweb", "application/vnd.unity"],
	["uoml", "application/vnd.uoml+xml"],
	["uri", "text/uri-list"],
	["uris", "text/uri-list"],
	["urls", "text/uri-list"],
	["usdz", "model/vnd.usdz+zip"],
	["ustar", "application/x-ustar"],
	["utz", "application/vnd.uiq.theme"],
	["uu", "text/x-uuencode"],
	["uva", "audio/vnd.dece.audio"],
	["uvd", "application/vnd.dece.data"],
	["uvf", "application/vnd.dece.data"],
	["uvg", "image/vnd.dece.graphic"],
	["uvh", "video/vnd.dece.hd"],
	["uvi", "image/vnd.dece.graphic"],
	["uvm", "video/vnd.dece.mobile"],
	["uvp", "video/vnd.dece.pd"],
	["uvs", "video/vnd.dece.sd"],
	["uvt", "application/vnd.dece.ttml+xml"],
	["uvu", "video/vnd.uvvu.mp4"],
	["uvv", "video/vnd.dece.video"],
	["uvva", "audio/vnd.dece.audio"],
	["uvvd", "application/vnd.dece.data"],
	["uvvf", "application/vnd.dece.data"],
	["uvvg", "image/vnd.dece.graphic"],
	["uvvh", "video/vnd.dece.hd"],
	["uvvi", "image/vnd.dece.graphic"],
	["uvvm", "video/vnd.dece.mobile"],
	["uvvp", "video/vnd.dece.pd"],
	["uvvs", "video/vnd.dece.sd"],
	["uvvt", "application/vnd.dece.ttml+xml"],
	["uvvu", "video/vnd.uvvu.mp4"],
	["uvvv", "video/vnd.dece.video"],
	["uvvx", "application/vnd.dece.unspecified"],
	["uvvz", "application/vnd.dece.zip"],
	["uvx", "application/vnd.dece.unspecified"],
	["uvz", "application/vnd.dece.zip"],
	["vbox", "application/x-virtualbox-vbox"],
	["vbox-extpack", "application/x-virtualbox-vbox-extpack"],
	["vcard", "text/vcard"],
	["vcd", "application/x-cdlink"],
	["vcf", "text/x-vcard"],
	["vcg", "application/vnd.groove-vcard"],
	["vcs", "text/x-vcalendar"],
	["vcx", "application/vnd.vcx"],
	["vdi", "application/x-virtualbox-vdi"],
	["vds", "model/vnd.sap.vds"],
	["vhd", "application/x-virtualbox-vhd"],
	["vis", "application/vnd.visionary"],
	["viv", "video/vnd.vivo"],
	["vlc", "application/videolan"],
	["vmdk", "application/x-virtualbox-vmdk"],
	["vob", "video/x-ms-vob"],
	["vor", "application/vnd.stardivision.writer"],
	["vox", "application/x-authorware-bin"],
	["vrml", "model/vrml"],
	["vsd", "application/vnd.visio"],
	["vsf", "application/vnd.vsf"],
	["vss", "application/vnd.visio"],
	["vst", "application/vnd.visio"],
	["vsw", "application/vnd.visio"],
	["vtf", "image/vnd.valve.source.texture"],
	["vtt", "text/vtt"],
	["vtu", "model/vnd.vtu"],
	["vxml", "application/voicexml+xml"],
	["w3d", "application/x-director"],
	["wad", "application/x-doom"],
	["wadl", "application/vnd.sun.wadl+xml"],
	["war", "application/java-archive"],
	["wasm", "application/wasm"],
	["wav", "audio/x-wav"],
	["wax", "audio/x-ms-wax"],
	["wbmp", "image/vnd.wap.wbmp"],
	["wbs", "application/vnd.criticaltools.wbs+xml"],
	["wbxml", "application/wbxml"],
	["wcm", "application/vnd.ms-works"],
	["wdb", "application/vnd.ms-works"],
	["wdp", "image/vnd.ms-photo"],
	["weba", "audio/webm"],
	["webapp", "application/x-web-app-manifest+json"],
	["webm", "video/webm"],
	["webmanifest", "application/manifest+json"],
	["webp", "image/webp"],
	["wg", "application/vnd.pmi.widget"],
	["wgt", "application/widget"],
	["wks", "application/vnd.ms-works"],
	["wm", "video/x-ms-wm"],
	["wma", "audio/x-ms-wma"],
	["wmd", "application/x-ms-wmd"],
	["wmf", "image/wmf"],
	["wml", "text/vnd.wap.wml"],
	["wmlc", "application/wmlc"],
	["wmls", "text/vnd.wap.wmlscript"],
	["wmlsc", "application/vnd.wap.wmlscriptc"],
	["wmv", "video/x-ms-wmv"],
	["wmx", "video/x-ms-wmx"],
	["wmz", "application/x-msmetafile"],
	["woff", "font/woff"],
	["woff2", "font/woff2"],
	["word", "application/msword"],
	["wpd", "application/vnd.wordperfect"],
	["wpl", "application/vnd.ms-wpl"],
	["wps", "application/vnd.ms-works"],
	["wqd", "application/vnd.wqd"],
	["wri", "application/x-mswrite"],
	["wrl", "model/vrml"],
	["wsc", "message/vnd.wfa.wsc"],
	["wsdl", "application/wsdl+xml"],
	["wspolicy", "application/wspolicy+xml"],
	["wtb", "application/vnd.webturbo"],
	["wvx", "video/x-ms-wvx"],
	["x3d", "model/x3d+xml"],
	["x3db", "model/x3d+fastinfoset"],
	["x3dbz", "model/x3d+binary"],
	["x3dv", "model/x3d-vrml"],
	["x3dvz", "model/x3d+vrml"],
	["x3dz", "model/x3d+xml"],
	["x32", "application/x-authorware-bin"],
	["x_b", "model/vnd.parasolid.transmit.binary"],
	["x_t", "model/vnd.parasolid.transmit.text"],
	["xaml", "application/xaml+xml"],
	["xap", "application/x-silverlight-app"],
	["xar", "application/vnd.xara"],
	["xav", "application/xcap-att+xml"],
	["xbap", "application/x-ms-xbap"],
	["xbd", "application/vnd.fujixerox.docuworks.binder"],
	["xbm", "image/x-xbitmap"],
	["xca", "application/xcap-caps+xml"],
	["xcs", "application/calendar+xml"],
	["xdf", "application/xcap-diff+xml"],
	["xdm", "application/vnd.syncml.dm+xml"],
	["xdp", "application/vnd.adobe.xdp+xml"],
	["xdssc", "application/dssc+xml"],
	["xdw", "application/vnd.fujixerox.docuworks"],
	["xel", "application/xcap-el+xml"],
	["xenc", "application/xenc+xml"],
	["xer", "application/patch-ops-error+xml"],
	["xfdf", "application/vnd.adobe.xfdf"],
	["xfdl", "application/vnd.xfdl"],
	["xht", "application/xhtml+xml"],
	["xhtml", "application/xhtml+xml"],
	["xhvml", "application/xv+xml"],
	["xif", "image/vnd.xiff"],
	["xl", "application/excel"],
	["xla", "application/vnd.ms-excel"],
	["xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
	["xlc", "application/vnd.ms-excel"],
	["xlf", "application/xliff+xml"],
	["xlm", "application/vnd.ms-excel"],
	["xls", "application/vnd.ms-excel"],
	["xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
	["xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
	["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
	["xlt", "application/vnd.ms-excel"],
	["xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
	["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
	["xlw", "application/vnd.ms-excel"],
	["xm", "audio/xm"],
	["xml", "application/xml"],
	["xns", "application/xcap-ns+xml"],
	["xo", "application/vnd.olpc-sugar"],
	["xop", "application/xop+xml"],
	["xpi", "application/x-xpinstall"],
	["xpl", "application/xproc+xml"],
	["xpm", "image/x-xpixmap"],
	["xpr", "application/vnd.is-xpr"],
	["xps", "application/vnd.ms-xpsdocument"],
	["xpw", "application/vnd.intercon.formnet"],
	["xpx", "application/vnd.intercon.formnet"],
	["xsd", "application/xml"],
	["xsl", "application/xml"],
	["xslt", "application/xslt+xml"],
	["xsm", "application/vnd.syncml+xml"],
	["xspf", "application/xspf+xml"],
	["xul", "application/vnd.mozilla.xul+xml"],
	["xvm", "application/xv+xml"],
	["xvml", "application/xv+xml"],
	["xwd", "image/x-xwindowdump"],
	["xyz", "chemical/x-xyz"],
	["xz", "application/x-xz"],
	["yaml", "text/yaml"],
	["yang", "application/yang"],
	["yin", "application/yin+xml"],
	["yml", "text/yaml"],
	["ymp", "text/x-suse-ymp"],
	["z", "application/x-compress"],
	["z1", "application/x-zmachine"],
	["z2", "application/x-zmachine"],
	["z3", "application/x-zmachine"],
	["z4", "application/x-zmachine"],
	["z5", "application/x-zmachine"],
	["z6", "application/x-zmachine"],
	["z7", "application/x-zmachine"],
	["z8", "application/x-zmachine"],
	["zaz", "application/vnd.zzazz.deck+xml"],
	["zip", "application/zip"],
	["zir", "application/vnd.zul"],
	["zirz", "application/vnd.zul"],
	["zmm", "application/vnd.handheld-entertainment+xml"],
	["zsh", "text/x-scriptzsh"]
]);
function nC(e, t, n) {
	let r = rC(e), { webkitRelativePath: i } = e, a = typeof t == "string" ? t : typeof i == "string" && i.length > 0 ? i : `./${e.name}`;
	return typeof r.path != "string" && iC(r, "path", a), n !== void 0 && Object.defineProperty(r, "handle", {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	}), iC(r, "relativePath", a), r;
}
function rC(e) {
	let { name: t } = e;
	if (t && t.lastIndexOf(".") !== -1 && !e.type) {
		let n = t.split(".").pop().toLowerCase(), r = tC.get(n);
		r && Object.defineProperty(e, "type", {
			value: r,
			writable: !1,
			configurable: !1,
			enumerable: !0
		});
	}
	return e;
}
function iC(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !1,
		configurable: !1,
		enumerable: !0
	});
}
//#endregion
//#region node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js
var aC = [".DS_Store", "Thumbs.db"];
function oC(e) {
	return ax(this, void 0, void 0, function* () {
		return lC(e) && sC(e.dataTransfer) ? fC(e.dataTransfer, e.type) : cC(e) ? uC(e) : Array.isArray(e) && e.every((e) => "getFile" in e && typeof e.getFile == "function") ? dC(e) : [];
	});
}
function sC(e) {
	return lC(e);
}
function cC(e) {
	return lC(e) && lC(e.target);
}
function lC(e) {
	return typeof e == "object" && !!e;
}
function uC(e) {
	return mC(e.target.files).map((e) => nC(e));
}
function dC(e) {
	return ax(this, void 0, void 0, function* () {
		return (yield Promise.all(e.map((e) => e.getFile()))).map((e) => nC(e));
	});
}
function fC(e, t) {
	return ax(this, void 0, void 0, function* () {
		if (e.items) {
			let n = mC(e.items).filter((e) => e.kind === "file");
			return t === "drop" ? pC(gC(yield Promise.all(n.map(hC)))) : n;
		}
		return pC(mC(e.files).map((e) => nC(e)));
	});
}
function pC(e) {
	return e.filter((e) => aC.indexOf(e.name) === -1);
}
function mC(e) {
	if (e === null) return [];
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t.push(r);
	}
	return t;
}
function hC(e) {
	if (typeof e.webkitGetAsEntry != "function") return _C(e);
	let t = e.webkitGetAsEntry();
	return t && t.isDirectory ? yC(t) : _C(e, t);
}
function gC(e) {
	return e.reduce((e, t) => [...e, ...Array.isArray(t) ? gC(t) : [t]], []);
}
function _C(e, t) {
	return ax(this, void 0, void 0, function* () {
		if (globalThis.isSecureContext && typeof e.getAsFileSystemHandle == "function") {
			let t = yield e.getAsFileSystemHandle();
			if (t === null) throw Error(`${e} is not a File`);
			if (t !== void 0) {
				let e = yield t.getFile();
				return e.handle = t, nC(e);
			}
		}
		let n = e.getAsFile();
		if (!n) throw Error(`${e} is not a File`);
		return nC(n, t?.fullPath ?? void 0);
	});
}
function vC(e) {
	return ax(this, void 0, void 0, function* () {
		return e.isDirectory ? yC(e) : bC(e);
	});
}
function yC(e) {
	let t = e.createReader();
	return new Promise((e, n) => {
		let r = [];
		function i() {
			t.readEntries((t) => ax(this, void 0, void 0, function* () {
				if (t.length) {
					let e = Promise.all(t.map(vC));
					r.push(e), i();
				} else try {
					e(yield Promise.all(r));
				} catch (e) {
					n(e);
				}
			}), (e) => {
				n(e);
			});
		}
		i();
	});
}
function bC(e) {
	return ax(this, void 0, void 0, function* () {
		return new Promise((t, n) => {
			e.file((n) => {
				t(nC(n, e.fullPath));
			}, (e) => {
				n(e);
			});
		});
	});
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/utils/index.js
var xC = /* @__PURE__ */ Ot((/* @__PURE__ */ Tt(((e) => {
	e.__esModule = !0, e.default = function(e, t) {
		if (e && t) {
			var n = Array.isArray(t) ? t : t.split(",");
			if (n.length === 0) return !0;
			var r = e.name || "", i = (e.type || "").toLowerCase(), a = i.replace(/\/.*$/, "");
			return n.some(function(e) {
				var t = e.trim().toLowerCase();
				return t.charAt(0) === "." ? r.toLowerCase().endsWith(t) : t.endsWith("/*") ? a === t.replace(/\/.*$/, "") : i === t;
			});
		}
		return !0;
	};
})))());
function SC(e) {
	return TC(e) || wC(e) || jC(e) || CC();
}
function CC() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function wC(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function TC(e) {
	if (Array.isArray(e)) return MC(e);
}
function EC(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function DC(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? EC(Object(n), !0).forEach(function(t) {
			OC(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : EC(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function OC(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kC(e, t) {
	return PC(e) || NC(e, t) || jC(e, t) || AC();
}
function AC() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function jC(e, t) {
	if (e) {
		if (typeof e == "string") return MC(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MC(e, t);
	}
}
function MC(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function NC(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function PC(e) {
	if (Array.isArray(e)) return e;
}
var FC = typeof xC.default == "function" ? xC.default : xC.default.default, IC = "file-invalid-type", LC = "file-too-large", RC = "file-too-small", zC = "too-many-files", BC = function() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split(",");
	return {
		code: IC,
		message: `File type must be ${e.length > 1 ? `one of ${e.join(", ")}` : e[0]}`
	};
}, VC = function(e) {
	return {
		code: LC,
		message: `File is larger than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, HC = function(e) {
	return {
		code: RC,
		message: `File is smaller than ${e} ${e === 1 ? "byte" : "bytes"}`
	};
}, UC = {
	code: zC,
	message: "Too many files"
};
function WC(e) {
	return e.type === "" && typeof e.getAsFile == "function";
}
function GC(e, t) {
	var n = e.type === "application/x-moz-file" || FC(e, t) || WC(e);
	return [n, n ? null : BC(t)];
}
function KC(e, t, n) {
	if (qC(e.size)) {
		if (qC(t) && qC(n)) {
			if (e.size > n) return [!1, VC(n)];
			if (e.size < t) return [!1, HC(t)];
		} else if (qC(t) && e.size < t) return [!1, HC(t)];
		else if (qC(n) && e.size > n) return [!1, VC(n)];
	}
	return [!0, null];
}
function qC(e) {
	return e != null;
}
function JC(e) {
	var t = e.files, n = e.accept, r = e.minSize, i = e.maxSize, a = e.multiple, o = e.maxFiles, s = e.validator;
	return !a && t.length > 1 || a && o >= 1 && t.length > o ? !1 : t.every(function(e) {
		var t = kC(GC(e, n), 1)[0], a = kC(KC(e, r, i), 1)[0], o = s ? s(e) : null;
		return t && a && !o;
	});
}
function YC(e) {
	return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : e.cancelBubble !== void 0 && e.cancelBubble;
}
function XC(e) {
	return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(e) {
		return e === "Files" || e === "application/x-moz-file";
	}) : !!e.target && !!e.target.files;
}
function ZC(e) {
	e.preventDefault();
}
function QC(e) {
	return e.indexOf("MSIE") !== -1 || e.indexOf("Trident/") !== -1;
}
function $C(e) {
	return e.indexOf("Edge/") !== -1;
}
function ew() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
	return QC(e) || $C(e);
}
function tw() {
	var e = [...arguments];
	return function(t) {
		var n = [...arguments].slice(1);
		return e.some(function(e) {
			return !YC(t) && e && e.apply(void 0, [t].concat(n)), YC(t);
		});
	};
}
function nw() {
	return "showOpenFilePicker" in window;
}
function rw(e) {
	return qC(e) ? [{
		description: "Files",
		accept: Object.entries(e).filter(function(e) {
			var t = kC(e, 2), n = t[0], r = t[1], i = !0;
			return sw(n) || (console.warn(`Skipped "${n}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`), i = !1), (!Array.isArray(r) || !r.every(cw)) && (console.warn(`Skipped "${n}" because an invalid file extension was provided.`), i = !1), i;
		}).reduce(function(e, t) {
			var n = kC(t, 2), r = n[0], i = n[1];
			return DC(DC({}, e), {}, OC({}, r, i));
		}, {})
	}] : e;
}
function iw(e) {
	if (qC(e)) return Object.entries(e).reduce(function(e, t) {
		var n = kC(t, 2), r = n[0], i = n[1];
		return [].concat(SC(e), [r], SC(i));
	}, []).filter(function(e) {
		return sw(e) || cw(e);
	}).join(",");
}
function aw(e) {
	return e instanceof DOMException && (e.name === "AbortError" || e.code === e.ABORT_ERR);
}
function ow(e) {
	return e instanceof DOMException && (e.name === "SecurityError" || e.code === e.SECURITY_ERR);
}
function sw(e) {
	return e === "audio/*" || e === "video/*" || e === "image/*" || e === "text/*" || e === "application/*" || /\w+\/[-+.\w]+/g.test(e);
}
function cw(e) {
	return /^.*\.[\w]+$/.test(e);
}
//#endregion
//#region node_modules/.pnpm/react-dropzone@14.4.1_react@18.3.1/node_modules/react-dropzone/dist/es/index.js
var lw = /* @__PURE__ */ Ot(eC()), uw = ["children"], dw = ["open"], fw = [
	"refKey",
	"role",
	"onKeyDown",
	"onFocus",
	"onBlur",
	"onClick",
	"onDragEnter",
	"onDragOver",
	"onDragLeave",
	"onDrop"
], pw = [
	"refKey",
	"onChange",
	"onClick"
];
function mw(e) {
	return _w(e) || gw(e) || bw(e) || hw();
}
function hw() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function gw(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _w(e) {
	if (Array.isArray(e)) return xw(e);
}
function vw(e, t) {
	return Cw(e) || Sw(e, t) || bw(e, t) || yw();
}
function yw() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function bw(e, t) {
	if (e) {
		if (typeof e == "string") return xw(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xw(e, t);
	}
}
function xw(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function Sw(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [], i = !0, a = !1, o, s;
		try {
			for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0);
		} catch (e) {
			a = !0, s = e;
		} finally {
			try {
				!i && n.return != null && n.return();
			} finally {
				if (a) throw s;
			}
		}
		return r;
	}
}
function Cw(e) {
	if (Array.isArray(e)) return e;
}
function ww(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Tw(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ww(Object(n), !0).forEach(function(t) {
			Ew(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ww(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ew(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Dw(e, t) {
	if (e == null) return {};
	var n = Ow(e, t), r, i;
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
	}
	return n;
}
function Ow(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
var kw = /*#__PURE__*/ ie(function(e, t) {
	var n = e.children, r = Mw(Dw(e, uw)), i = r.open, a = Dw(r, dw);
	return R(t, function() {
		return { open: i };
	}, [i]), /*#__PURE__*/ P.createElement(te, null, n(Tw(Tw({}, a), {}, { open: i })));
});
kw.displayName = "Dropzone";
var Aw = {
	disabled: !1,
	getFilesFromEvent: oC,
	maxSize: Infinity,
	minSize: 0,
	multiple: !0,
	maxFiles: 0,
	preventDropOnDocument: !0,
	noClick: !1,
	noKeyboard: !1,
	noDrag: !1,
	noDragEventsBubbling: !1,
	validator: null,
	useFsAccessApi: !1,
	autoFocus: !1
};
kw.defaultProps = Aw, kw.propTypes = {
	children: lw.default.func,
	accept: lw.default.objectOf(lw.default.arrayOf(lw.default.string)),
	multiple: lw.default.bool,
	preventDropOnDocument: lw.default.bool,
	noClick: lw.default.bool,
	noKeyboard: lw.default.bool,
	noDrag: lw.default.bool,
	noDragEventsBubbling: lw.default.bool,
	minSize: lw.default.number,
	maxSize: lw.default.number,
	maxFiles: lw.default.number,
	disabled: lw.default.bool,
	getFilesFromEvent: lw.default.func,
	onFileDialogCancel: lw.default.func,
	onFileDialogOpen: lw.default.func,
	useFsAccessApi: lw.default.bool,
	autoFocus: lw.default.bool,
	onDragEnter: lw.default.func,
	onDragLeave: lw.default.func,
	onDragOver: lw.default.func,
	onDrop: lw.default.func,
	onDropAccepted: lw.default.func,
	onDropRejected: lw.default.func,
	onError: lw.default.func,
	validator: lw.default.func
};
var jw = {
	isFocused: !1,
	isFileDialogActive: !1,
	isDragActive: !1,
	isDragAccept: !1,
	isDragReject: !1,
	isDragGlobal: !1,
	acceptedFiles: [],
	fileRejections: []
};
function Mw() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = Tw(Tw({}, Aw), e), n = t.accept, r = t.disabled, i = t.getFilesFromEvent, a = t.maxSize, o = t.minSize, s = t.multiple, c = t.maxFiles, l = t.onDragEnter, u = t.onDragLeave, d = t.onDragOver, f = t.onDrop, p = t.onDropAccepted, m = t.onDropRejected, h = t.onFileDialogCancel, g = t.onFileDialogOpen, _ = t.useFsAccessApi, v = t.autoFocus, y = t.preventDropOnDocument, b = t.noClick, x = t.noKeyboard, S = t.noDrag, C = t.noDragEventsBubbling, w = t.onError, T = t.validator, E = se(function() {
		return iw(n);
	}, [n]), D = se(function() {
		return rw(n);
	}, [n]), O = se(function() {
		return typeof g == "function" ? g : Pw;
	}, [g]), k = se(function() {
		return typeof h == "function" ? h : Pw;
	}, [h]), A = z(null), j = z(null), M = vw(ce(Nw, jw), 2), N = M[0], P = M[1], ee = N.isFocused, te = N.isFileDialogActive, ne = z(typeof window < "u" && window.isSecureContext && _ && nw()), re = function() {
		!ne.current && te && setTimeout(function() {
			j.current && (j.current.files.length || (P({ type: "closeDialog" }), k()));
		}, 300);
	};
	L(function() {
		return window.addEventListener("focus", re, !1), function() {
			window.removeEventListener("focus", re, !1);
		};
	}, [
		j,
		te,
		k,
		ne
	]);
	var ie = z([]), F = z([]), ae = function(e) {
		A.current && A.current.contains(e.target) || (e.preventDefault(), ie.current = []);
	};
	L(function() {
		return y && (document.addEventListener("dragover", ZC, !1), document.addEventListener("drop", ae, !1)), function() {
			y && (document.removeEventListener("dragover", ZC), document.removeEventListener("drop", ae));
		};
	}, [A, y]), L(function() {
		var e = function(e) {
			F.current = [].concat(mw(F.current), [e.target]), XC(e) && P({
				isDragGlobal: !0,
				type: "setDragGlobal"
			});
		}, t = function(e) {
			F.current = F.current.filter(function(t) {
				return t !== e.target && t !== null;
			}), !(F.current.length > 0) && P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, n = function() {
			F.current = [], P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		}, r = function() {
			F.current = [], P({
				isDragGlobal: !1,
				type: "setDragGlobal"
			});
		};
		return document.addEventListener("dragenter", e, !1), document.addEventListener("dragleave", t, !1), document.addEventListener("dragend", n, !1), document.addEventListener("drop", r, !1), function() {
			document.removeEventListener("dragenter", e), document.removeEventListener("dragleave", t), document.removeEventListener("dragend", n), document.removeEventListener("drop", r);
		};
	}, [A]), L(function() {
		return !r && v && A.current && A.current.focus(), function() {};
	}, [
		A,
		v,
		r
	]);
	var R = I(function(e) {
		w ? w(e) : console.error(e);
	}, [w]), oe = I(function(e) {
		e.preventDefault(), e.persist(), ve(e), ie.current = [].concat(mw(ie.current), [e.target]), XC(e) && Promise.resolve(i(e)).then(function(t) {
			if (!(YC(e) && !C)) {
				var n = t.length, r = n > 0 && JC({
					files: t,
					accept: E,
					minSize: o,
					maxSize: a,
					multiple: s,
					maxFiles: c,
					validator: T
				});
				P({
					isDragAccept: r,
					isDragReject: n > 0 && !r,
					isDragActive: !0,
					type: "setDraggedFiles"
				}), l && l(e);
			}
		}).catch(function(e) {
			return R(e);
		});
	}, [
		i,
		l,
		R,
		C,
		E,
		o,
		a,
		s,
		c,
		T
	]), B = I(function(e) {
		e.preventDefault(), e.persist(), ve(e);
		var t = XC(e);
		if (t && e.dataTransfer) try {
			e.dataTransfer.dropEffect = "copy";
		} catch {}
		return t && d && d(e), !1;
	}, [d, C]), le = I(function(e) {
		e.preventDefault(), e.persist(), ve(e);
		var t = ie.current.filter(function(e) {
			return A.current && A.current.contains(e);
		}), n = t.indexOf(e.target);
		n !== -1 && t.splice(n, 1), ie.current = t, !(t.length > 0) && (P({
			type: "setDraggedFiles",
			isDragActive: !1,
			isDragAccept: !1,
			isDragReject: !1
		}), XC(e) && u && u(e));
	}, [
		A,
		u,
		C
	]), ue = I(function(e, t) {
		var n = [], r = [];
		e.forEach(function(e) {
			var t = vw(GC(e, E), 2), i = t[0], s = t[1], c = vw(KC(e, o, a), 2), l = c[0], u = c[1], d = T ? T(e) : null;
			if (i && l && !d) n.push(e);
			else {
				var f = [s, u];
				d && (f = f.concat(d)), r.push({
					file: e,
					errors: f.filter(function(e) {
						return e;
					})
				});
			}
		}), (!s && n.length > 1 || s && c >= 1 && n.length > c) && (n.forEach(function(e) {
			r.push({
				file: e,
				errors: [UC]
			});
		}), n.splice(0)), P({
			acceptedFiles: n,
			fileRejections: r,
			isDragReject: r.length > 0,
			type: "setFiles"
		}), f && f(n, r, t), r.length > 0 && m && m(r, t), n.length > 0 && p && p(n, t);
	}, [
		P,
		s,
		E,
		o,
		a,
		c,
		f,
		p,
		m,
		T
	]), de = I(function(e) {
		e.preventDefault(), e.persist(), ve(e), ie.current = [], XC(e) && Promise.resolve(i(e)).then(function(t) {
			YC(e) && !C || ue(t, e);
		}).catch(function(e) {
			return R(e);
		}), P({ type: "reset" });
	}, [
		i,
		ue,
		R,
		C
	]), fe = I(function() {
		if (ne.current) {
			P({ type: "openDialog" }), O();
			var e = {
				multiple: s,
				types: D
			};
			window.showOpenFilePicker(e).then(function(e) {
				return i(e);
			}).then(function(e) {
				ue(e, null), P({ type: "closeDialog" });
			}).catch(function(e) {
				aw(e) ? (k(e), P({ type: "closeDialog" })) : ow(e) ? (ne.current = !1, j.current ? (j.current.value = null, j.current.click()) : R(/* @__PURE__ */ Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : R(e);
			});
			return;
		}
		j.current && (P({ type: "openDialog" }), O(), j.current.value = null, j.current.click());
	}, [
		P,
		O,
		k,
		_,
		ue,
		R,
		D,
		s
	]), pe = I(function(e) {
		!A.current || !A.current.isEqualNode(e.target) || (e.key === " " || e.key === "Enter" || e.keyCode === 32 || e.keyCode === 13) && (e.preventDefault(), fe());
	}, [A, fe]), me = I(function() {
		P({ type: "focus" });
	}, []), he = I(function() {
		P({ type: "blur" });
	}, []), ge = I(function() {
		b || (ew() ? setTimeout(fe, 0) : fe());
	}, [b, fe]), V = function(e) {
		return r ? null : e;
	}, H = function(e) {
		return x ? null : V(e);
	}, _e = function(e) {
		return S ? null : V(e);
	}, ve = function(e) {
		C && e.stopPropagation();
	}, ye = se(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, i = e.role, a = e.onKeyDown, o = e.onFocus, s = e.onBlur, c = e.onClick, l = e.onDragEnter, u = e.onDragOver, d = e.onDragLeave, f = e.onDrop, p = Dw(e, fw);
			return Tw(Tw(Ew({
				onKeyDown: H(tw(a, pe)),
				onFocus: H(tw(o, me)),
				onBlur: H(tw(s, he)),
				onClick: V(tw(c, ge)),
				onDragEnter: _e(tw(l, oe)),
				onDragOver: _e(tw(u, B)),
				onDragLeave: _e(tw(d, le)),
				onDrop: _e(tw(f, de)),
				role: typeof i == "string" && i !== "" ? i : "presentation"
			}, n, A), !r && !x ? { tabIndex: 0 } : {}), p);
		};
	}, [
		A,
		pe,
		me,
		he,
		ge,
		oe,
		B,
		le,
		de,
		x,
		S,
		r
	]), be = I(function(e) {
		e.stopPropagation();
	}, []), U = se(function() {
		return function() {
			var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.refKey, n = t === void 0 ? "ref" : t, r = e.onChange, i = e.onClick, a = Dw(e, pw);
			return Tw(Tw({}, Ew({
				accept: E,
				multiple: s,
				type: "file",
				style: {
					border: 0,
					clip: "rect(0, 0, 0, 0)",
					clipPath: "inset(50%)",
					height: "1px",
					margin: "0 -1px -1px 0",
					overflow: "hidden",
					padding: 0,
					position: "absolute",
					width: "1px",
					whiteSpace: "nowrap"
				},
				onChange: V(tw(r, de)),
				onClick: V(tw(i, be)),
				tabIndex: -1
			}, n, j)), a);
		};
	}, [
		j,
		n,
		s,
		de,
		r
	]);
	return Tw(Tw({}, N), {}, {
		isFocused: ee && !r,
		getRootProps: ye,
		getInputProps: U,
		rootRef: A,
		inputRef: j,
		open: V(fe)
	});
}
function Nw(e, t) {
	/* istanbul ignore next */
	switch (t.type) {
		case "focus": return Tw(Tw({}, e), {}, { isFocused: !0 });
		case "blur": return Tw(Tw({}, e), {}, { isFocused: !1 });
		case "openDialog": return Tw(Tw({}, jw), {}, { isFileDialogActive: !0 });
		case "closeDialog": return Tw(Tw({}, e), {}, { isFileDialogActive: !1 });
		case "setDraggedFiles": return Tw(Tw({}, e), {}, {
			isDragActive: t.isDragActive,
			isDragAccept: t.isDragAccept,
			isDragReject: t.isDragReject
		});
		case "setFiles": return Tw(Tw({}, e), {}, {
			acceptedFiles: t.acceptedFiles,
			fileRejections: t.fileRejections,
			isDragReject: t.isDragReject
		});
		case "setDragGlobal": return Tw(Tw({}, e), {}, { isDragGlobal: t.isDragGlobal });
		case "reset": return Tw({}, jw);
		default: return e;
	}
}
function Pw() {}
//#endregion
//#region src/spinner/ProgressSpinner.tsx
var Fw = ie(({ progress: e, total: t = 100, progressColor: n = "var(--color-progress)", remainingColor: r = "var(--color-progress-remaining)", backgroundColor: i = "transparent", strokeWidth: a = 12, className: o, ...s }, c) => {
	let l = e === void 0, u = l ? void 0 : Math.min(Math.max(e, 0), t), d = l ? .25 : Math.min(Math.max(t > 0 ? e / t : 0, 0), 1), f = !l && d === 1, p = (100 - a) / 2, m = 2 * Math.PI * p;
	return /* @__PURE__ */ H("svg", {
		ref: c,
		width: "40",
		height: "40",
		viewBox: "0 0 100 100",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		role: "progressbar",
		"aria-label": l ? "Loading" : void 0,
		"aria-valuemin": l ? void 0 : 0,
		"aria-valuemax": l ? void 0 : t,
		"aria-valuenow": u,
		className: M("relative", o, {
			"animate-spin": !f,
			"animate-pulse": f
		}),
		...s,
		children: [
			/* @__PURE__ */ V("rect", {
				width: "100",
				height: "100",
				rx: "14",
				fill: i
			}),
			/* @__PURE__ */ V("circle", {
				cx: "50",
				cy: "50",
				r: p,
				stroke: r,
				strokeWidth: a
			}),
			/* @__PURE__ */ V("circle", {
				cx: "50",
				cy: "50",
				r: p,
				stroke: n,
				strokeWidth: a,
				strokeLinecap: "round",
				strokeDasharray: m,
				strokeDashoffset: m * (1 - d),
				transform: "rotate(-90 50 50)"
			})
		]
	});
});
Fw.displayName = "ProgressSpinner";
//#endregion
//#region src/fileUploader/FileUploader.tsx
function Iw({ prompt: e, subPrompt: t, icon: n = "cloud", onDrop: r, disabled: i, className: a, isPending: o, ...s }) {
	let { getRootProps: c, getInputProps: l, isDragActive: u, isFileDialogActive: d } = Mw({
		onDrop: r,
		disabled: i,
		...s
	}), f = () => u ? /* @__PURE__ */ V("p", {
		className: "text-foreground-subtle mb-2",
		children: "Drop your file here"
	}) : typeof e == "string" ? /* @__PURE__ */ V("p", {
		className: "text-foreground-subtle mb-2",
		children: e
	}) : e || /* @__PURE__ */ H("p", {
		className: "text-foreground-subtle mb-2",
		children: [/* @__PURE__ */ V("span", {
			className: "font-semibold",
			children: "Click to upload"
		}), " or drag and drop"]
	}), m = () => typeof t == "string" ? /* @__PURE__ */ V("p", {
		className: "text-foreground-subtle text-xs",
		children: t
	}) : t || null, g = () => n && typeof n != "string" ? n : n === "cloud" ? /* @__PURE__ */ V(G, {
		className: "text-foreground-subtle mb-3 size-10",
		svg: /* @__PURE__ */ V(h, {})
	}) : n === "fileAdded" ? /* @__PURE__ */ V(G, {
		className: "text-foreground-subtle mb-3 size-10",
		svg: /* @__PURE__ */ V(p, {})
	}) : null;
	return /* @__PURE__ */ V("div", {
		...c(),
		className: W("border-border-normal flex h-64 w-full items-center justify-between rounded-lg border border-dashed px-2 py-1.5 outline-none", { "hover:bg-background-surface/70": !i && !o }, { "border-border-normal bg-background-surface/70": u && !i && !o }, { "border-ring ring-3 ring-ring/50": d }, i || o ? "cursor-not-allowed" : "hover:bg-background-surface/70 cursor-pointer", a),
		"data-testid": "dragZone",
		children: /* @__PURE__ */ H("label", {
			htmlFor: "file-upload",
			className: W("relative flex flex-1 items-center justify-center", i || o ? "cursor-not-allowed" : "cursor-pointer"),
			"aria-disabled": i,
			children: [/* @__PURE__ */ H("div", {
				className: "relative flex flex-col items-center justify-center pb-6 pt-5",
				children: [
					g(),
					f(),
					m(),
					/* @__PURE__ */ V("input", {
						id: "file-upload",
						...l(),
						className: "hidden"
					})
				]
			}), o && /* @__PURE__ */ V(Fw, {
				className: "text-foreground-subtle absolute bottom-2 right-2 h-6 w-6",
				progressColor: "currentColor"
			})]
		})
	});
}
//#endregion
//#region src/form/CheckBox.tsx
var Lw = N.forwardRef(({ className: e, label: t, description: n, isRequired: r, id: i, ...a }, o) => {
	let s = N.useId(), c = i ?? s;
	return /* @__PURE__ */ H("div", {
		className: W(a.disabled && "opacity-50"),
		children: [/* @__PURE__ */ H("label", {
			htmlFor: c,
			className: W("flex items-center gap-2", a.disabled ? "cursor-not-allowed" : "cursor-pointer", e),
			children: [/* @__PURE__ */ V(Le.Root, {
				ref: o,
				id: c,
				className: W("border-border-normal bg-background flex h-4 w-4 shrink-0 items-center justify-center rounded border", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none", "disabled:cursor-not-allowed", "data-[state=checked]:border-border-control-selected data-[state=checked]:bg-fill-control-selected"),
				...a,
				children: /* @__PURE__ */ V(Le.Indicator, {
					className: "flex items-center justify-center text-white",
					children: /* @__PURE__ */ V(m, {
						weight: "bold",
						className: "h-3 w-3"
					})
				})
			}), t && /* @__PURE__ */ H("span", {
				className: "text-foreground-normal text-sm",
				children: [t, r && /* @__PURE__ */ V("span", {
					className: "text-fill-critical",
					children: " *"
				})]
			})]
		}), n && /* @__PURE__ */ V("p", {
			className: "text-foreground-subtle mt-1 pl-6 text-sm",
			children: n
		})]
	});
});
Lw.displayName = Le.Root.displayName;
//#endregion
//#region src/form/ComboBoxMultiSelectTrigger.tsx
function Rw({ className: e, disabled: t, errorMessage: n, formatSelected: r, id: i, isOpen: a, onRemove: o, options: s, placeholder: c, value: l, width: u }) {
	let f = l.length > 0;
	return /* @__PURE__ */ V(vS.Anchor, {
		asChild: !0,
		children: /* @__PURE__ */ H("div", {
			className: W(e, "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 relative min-h-8 flex-wrap gap-1 p-1.5 pr-8", { "cursor-not-allowed opacity-50": t }),
			style: { width: u ? `${u}px` : void 0 },
			children: [r ? r(l) || c || "Select an option" : l.map((e) => {
				let n = s.find(({ value: t }) => t === e), r = typeof n?.label == "string" ? n.label : e;
				return /* @__PURE__ */ V(Bx, {
					removeLabel: r,
					disabled: t,
					onRemovePointerDown: (e) => {
						e.preventDefault(), e.stopPropagation();
					},
					onRemove: (t) => {
						t.stopPropagation(), o(e);
					},
					removeButtonTestId: "selectMultivalueRemove",
					children: n?.label ?? e
				}, e);
			}), /* @__PURE__ */ V(vS.Trigger, {
				asChild: !0,
				children: /* @__PURE__ */ H("button", {
					type: "button",
					id: i,
					disabled: t,
					"aria-expanded": a,
					"aria-invalid": n ? !0 : void 0,
					className: "text-foreground-normal absolute inset-0 flex items-center justify-between gap-2 bg-transparent px-3 outline-none",
					role: "combobox",
					children: [!f && !r && /* @__PURE__ */ V("span", {
						className: "truncate",
						children: c || "Select an option"
					}), /* @__PURE__ */ V(G, {
						className: "ml-auto size-4 shrink-0 opacity-50",
						svg: /* @__PURE__ */ V(d, {})
					})]
				})
			})]
		})
	});
}
//#endregion
//#region src/form/Switch.tsx
var zw = de([
	"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50",
	"focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
	"data-[state=unchecked]:bg-fill-disabled data-[state=checked]:bg-fill-control-selected"
], {
	variants: { size: {
		default: "",
		tiny: "h-3.5 w-5.5"
	} },
	defaultVariants: { size: "default" }
}), Bw = de([
	"pointer-events-none block h-4 w-4 rounded-full shadow-sm ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
	"bg-white",
	"dark:shadow-none dark-high-contrast:shadow-none"
], {
	variants: { size: {
		default: "",
		tiny: "h-2.5 w-2.5 data-[state=checked]:translate-x-2 data-[state=unchecked]:translate-x-0"
	} },
	defaultVariants: { size: "default" }
}), Vw = N.forwardRef(({ className: e, size: t, ...n }, r) => /* @__PURE__ */ V(Ye.Root, {
	className: W(zw({
		className: e,
		size: t
	})),
	...n,
	ref: r,
	children: /* @__PURE__ */ V(Ye.Thumb, { className: W(Bw({ size: t })) })
}));
Vw.displayName = Ye.Root.displayName;
//#endregion
//#region src/form/ComboBox.tsx
function Hw({ options: e, label: t, description: n, errorMessage: r, isRequired: i, containerClassName: a, isMulti: o, useSwitches: s, value: c, onValueChange: l, placeholder: u, searchable: f, className: p, id: h, disabled: g, onRearrange: _, onAddOption: v, formatSelected: y, popover: b, width: x }) {
	let S = P.useId(), C = h || S, [w, E] = B(!1), [D, O] = B(""), k = z(null), A = Ue(He(ze, {}), He(Be, { activationConstraint: { distance: 5 } })), j = I(() => y ? y(c) || u || "Select an option" : o ? c.length ? `${c.length} selected` : u || "Select an option" : c || u || "Select an option", [
		c,
		y,
		o,
		u
	]), M = I((e) => {
		o ? (l(c.includes(e) ? c.filter((t) => t !== e) : c.concat(e)), v && k.current?.focus()) : (l(e), E(!1));
	}, [
		c,
		l,
		o,
		v
	]), N = I((e) => {
		if (o && s) return /* @__PURE__ */ V(Vw, {
			size: "tiny",
			checked: c.includes(e.value),
			onClick: () => M(e.value),
			disabled: e.disabled
		});
		{
			let t = o ? c.includes(e.value) : c === e.value;
			return /* @__PURE__ */ V(G, {
				className: W("size-4", t ? "opacity-100" : "opacity-0"),
				svg: /* @__PURE__ */ V(m, {})
			});
		}
	}, [
		c,
		o,
		M,
		s
	]), ee = I(() => {
		!D || !v || (v({
			value: D,
			label: D
		}), O(""), k.current?.focus());
	}, [D, v]), te = I((t) => {
		let { active: n, over: r } = t;
		if (r?.id && n.id !== r.id) {
			let t = e.findIndex((e) => e.value === n.id), i = e.findIndex((e) => e.value === r.id), a = Ge(e, t, i);
			_ && _(a);
		}
	}, [e, _]), ne = () => {
		let t = "No matching options";
		return v && e.length === 0 && (t = "No values added"), /* @__PURE__ */ V("span", {
			className: "border-border-normal flex items-center justify-center rounded-lg border border-dashed py-1.5",
			children: t
		});
	}, re = () => !D || !v ? null : /* @__PURE__ */ V(sS.Empty, { children: /* @__PURE__ */ H(Vt, {
		type: "button",
		onClick: ee,
		variant: "primary",
		className: "w-full",
		size: "sm",
		children: [
			"Add ",
			/* @__PURE__ */ V("span", {
				className: "text-foreground-subtle",
				children: "\""
			}),
			D,
			/* @__PURE__ */ V("span", {
				className: "text-foreground-subtle",
				children: "\""
			})
		]
	}) }), ie = !!_, F = o ? c.length > 0 : !!c, ae = !!v || !!f, L = W("border-border-normal text-foreground-normal placeholder:text-foreground-subtle flex w-full items-center rounded-md border bg-background-surface text-left outline-none ring-0 transition-colors disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none", { "text-foreground-subtle": !F }, { "border-border-critical": !!r }, p), R = /* @__PURE__ */ H(vS, {
		open: w,
		onOpenChange: (e) => {
			e || O(""), E(e);
		},
		children: [o ? /* @__PURE__ */ V(Rw, {
			className: L,
			disabled: g,
			errorMessage: r,
			formatSelected: y,
			id: C,
			isOpen: w,
			onRemove: M,
			options: e,
			placeholder: u,
			value: c,
			width: x
		}) : /* @__PURE__ */ V(vS.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ H("button", {
				type: "button",
				id: C,
				disabled: g,
				"aria-expanded": w,
				"aria-invalid": r ? !0 : void 0,
				className: W(L, "h-8 justify-between py-2 pl-3 pr-2 [&>span]:line-clamp-1"),
				style: { width: x ? `${x}px` : void 0 },
				role: "combobox",
				children: [/* @__PURE__ */ V("span", {
					className: "truncate",
					style: { width: x ? `${x - 16}px` : void 0 },
					children: j()
				}), /* @__PURE__ */ V(G, {
					className: "size-4 shrink-0 opacity-50",
					svg: /* @__PURE__ */ V(d, {})
				})]
			})
		}), /* @__PURE__ */ V(vS.Content, {
			className: "w-(--radix-popover-trigger-width) p-0",
			side: "bottom",
			align: "end",
			...b,
			children: /* @__PURE__ */ H(sS, {
				filter: f ? (e, t, n) => {
					let r = t.toLowerCase();
					return +!!(n?.length ? n : [e]).some((e) => e.toLowerCase().includes(r));
				} : void 0,
				children: [
					ae && /* @__PURE__ */ H(ge, { children: [/* @__PURE__ */ V(sS.Input, {
						ref: k,
						value: D,
						onValueChange: O,
						placeholder: v ? "Enter value" : "Search...",
						leadingIcon: f ? /* @__PURE__ */ V(T, { className: "text-foreground-subtle size-4" }) : void 0
					}), /* @__PURE__ */ V(sS.Empty, { children: ne() })] }),
					/* @__PURE__ */ V(sS.List, { children: /* @__PURE__ */ V(sS.Group, { children: ie ? /* @__PURE__ */ V(Re, {
						sensors: A,
						collisionDetection: Ve,
						onDragEnd: te,
						children: /* @__PURE__ */ V(We, {
							items: e.map((e) => e.value),
							strategy: qe,
							children: e.map((e) => /* @__PURE__ */ V(Uw, {
								option: e,
								handleChange: M,
								renderActiveDecoration: N,
								isMulti: o || !1,
								useSwitches: s || !1,
								value: c
							}, e.value))
						})
					}) : e.map((e) => /* @__PURE__ */ H(sS.Item, {
						value: e.value,
						keywords: e.keywords,
						onSelect: (e) => M(e),
						className: "justify-between",
						disabled: e.disabled,
						children: [e.label, N(e)]
					}, e.value)) }) }),
					!!v && re()
				]
			})
		})]
	});
	return t || n || r || i || a ? /* @__PURE__ */ V(fS, {
		htmlFor: C,
		label: t,
		description: n,
		errorMessage: r,
		isRequired: i,
		className: a,
		children: R
	}) : R;
}
function Uw({ option: e, handleChange: t, renderActiveDecoration: n, isMulti: r, useSwitches: i, value: a }) {
	let o = r ? a.includes(e.value) : a === e.value, { attributes: s, listeners: c, setNodeRef: l, transform: u, transition: d, isDragging: f } = Ke({
		id: e.value,
		disabled: !o
	}), p = {
		transform: Je.Transform.toString(u),
		transition: d
	}, m = (e) => {
		i || t(e);
	};
	return /* @__PURE__ */ H(sS.Item, {
		ref: l,
		style: p,
		...s,
		value: e.value,
		onSelect: m,
		className: W("justify-between", { "opacity-50": f }),
		disabled: e.disabled,
		children: [/* @__PURE__ */ H("span", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ V(Vt, {
				variant: "ghost",
				size: "icon",
				...c,
				className: W(f ? "z-10 cursor-grabbing" : "cursor-grab", !o && "cursor-default opacity-10"),
				children: /* @__PURE__ */ V(G, {
					className: "text-foreground-subtle size-4",
					svg: /* @__PURE__ */ V(y, {})
				})
			}), e.label]
		}), n(e)]
	});
}
//#endregion
//#region src/form/Form.tsx
function Ww({ form: e, onSubmit: t, children: n, fieldsetClassName: r, disabled: i, ...a }) {
	return /* @__PURE__ */ V(Xe, {
		...e,
		children: /* @__PURE__ */ V("form", {
			onSubmit: e.handleSubmit(t),
			...a,
			children: /* @__PURE__ */ V("fieldset", {
				className: W("flex min-w-0 flex-col gap-4", r),
				disabled: e.formState.isSubmitting || i,
				children: n
			})
		})
	});
}
//#endregion
//#region src/form/RadioButtonList.tsx
function Gw(e, t) {
	return {
		target: {
			name: e,
			value: t
		},
		currentTarget: {
			name: e,
			value: t
		},
		preventDefault: () => {},
		stopPropagation: () => {},
		type: "change"
	};
}
var Kw = ({ htmlFor: e, label: t, value: n, renderFn: r, options: i, onChange: a, keyFn: o, disabled: s, groupDisabled: c, orientation: l = "vertical", className: u, containerClassName: d, optionClassName: f }) => /* @__PURE__ */ V("div", {
	className: M("mx-auto w-full", u),
	children: /* @__PURE__ */ H(Ze.Root, {
		value: o(n),
		onValueChange: (t) => {
			if (c) return;
			let n = i.find((e) => o(e) === t), r = n && (s || []).some((e) => o(e) === o(n));
			n && !r && a(Gw(e, t));
		},
		disabled: c,
		children: [/* @__PURE__ */ V(Ux, {
			className: "sr-only",
			children: t
		}), /* @__PURE__ */ V("div", {
			className: W("border-border-normal flex overflow-hidden rounded-xl border", {
				"flex-col": l === "vertical",
				"flex-row": l === "horizontal"
			}, d),
			children: i.map((e) => {
				let t = c || (s || []).some((t) => o(t) === o(e));
				return /* @__PURE__ */ V(Ze.Item, {
					id: `${o(e)}-label`,
					value: o(e),
					disabled: t,
					className: W("radio-item bg-background focus-visible:ring-3 focus-visible:ring-ring/50 w-full flex-1 outline-none focus-visible:ring-inset", l === "vertical" ? "border-border-normal border-b last-of-type:border-b-0" : "border-border-normal border-r last-of-type:border-r-0", t ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
					"data-testid": `option-${o(e)}`,
					"aria-describedby": r(e).description ? `${o(e)}-description` : void 0,
					asChild: !0,
					children: /* @__PURE__ */ H("div", {
						className: "relative flex p-4",
						children: [/* @__PURE__ */ V("div", {
							className: W("size-4 rounded-full border", f, "[.radio-item[data-state=checked]_&]:bg-fill-control-selected [.radio-item[data-state=checked]_&]:border-border-control-selected"),
							children: /* @__PURE__ */ V(Ze.Indicator, { className: "relative flex size-full items-center justify-center after:block after:size-1.5 after:rounded-full after:bg-white" })
						}), /* @__PURE__ */ H(Ux, {
							className: W("cursor-inherit ml-3 flex w-full flex-1 flex-col"),
							htmlFor: `${o(e)}-label`,
							"data-testid": `${o(e)}-label`,
							children: [/* @__PURE__ */ V("span", {
								className: "text-foreground-normal block text-base font-medium leading-tight",
								children: r(e).title
							}), /* @__PURE__ */ V("span", {
								id: `${o(e)}-description`,
								className: "text-foreground-subtle mt-1 block font-sans text-sm font-normal normal-case tracking-normal",
								children: r(e).description
							})]
						})]
					})
				}, o(e));
			})
		})]
	})
});
Kw.defaultProps = {
	onChange: () => {},
	disabled: []
};
//#endregion
//#region src/image/Image.tsx
var qw = ({ src: e, fallback: t, alt: n, ...r }) => /* @__PURE__ */ V("img", {
	alt: n,
	src: e || t,
	...r,
	onError: (e) => {
		e.currentTarget.src = t || "";
	}
});
//#endregion
//#region src/jsonKeyPicker/JSONKeyPicker.tsx
function Jw({ label: e, source: t, onChange: n, value: r, placeholder: a, isInvalid: o }) {
	let [s, l] = B(!1), [u, d] = B(() => r || []), f = z(null), p = z(null);
	kb(f, () => l(!1));
	let h = se(() => {
		if (!u.length) return null;
		let e = $e(t, u.join("."));
		if (typeof e == "object" && !Array.isArray(e)) return u[u.length - 1];
		if ((Array.isArray(e) || typeof e != "object") && u.length > 1) return u[u.length - 2];
	}, [u, t]), g = I(() => {
		h && d((e) => {
			let n = $e(t, e.join("."));
			return typeof n == "object" && !Array.isArray(n) ? e.slice(0, -1) : (Array.isArray(n) || typeof n != "object") && e.length > 1 ? e.slice(0, -2) : e;
		});
	}, [t, h]), _ = Qe(g, 0), v = I((e) => {
		let n = e.length ? $e(t, e.join(".")) : t;
		return typeof n == "object" && !Array.isArray(n) && n ? Object.entries(n).map(([t, n]) => ({
			key: t,
			value: n,
			__type: Xw(n),
			level: e.length
		})) : v(e.slice(0, -1));
	}, [t]), y = I((e) => {
		let n = $e(t, u.join("."));
		return (Array.isArray(n) || typeof n != "object") && e.key === u[u.length - 1];
	}, [u, t]), b = se(() => v(u), [u, v]), x = se(() => u[u.length - 1] || "", [u]), S = I((e) => {
		n(e);
	}, [n]), C = I(({ key: e, level: n }) => {
		let r = u.length, i;
		if (i = n < r ? u.slice(0, n).concat(e) : [...u, e], i.join(".") === u.join(".")) l(!1), S([]), d([]);
		else {
			let e = $e(t, i.join("."));
			(Array.isArray(e) || typeof e != "object") && (l(!1), S(i)), d(i);
		}
	}, [
		u,
		t,
		S
	]);
	L(() => {
		r && d(r);
	}, [r]);
	let w = I((e) => {
		if (!s) return;
		let t = e.key === "ArrowDown", n = e.key === "ArrowUp";
		if ((t || n) && (e.preventDefault(), p.current)) {
			let e = p.current.querySelectorAll("button"), n = p.current.querySelector("button:focus");
			if (n && n instanceof HTMLButtonElement) {
				let r = Array.from(e).indexOf(n);
				e[t ? Math.min(r + 1, e.length - 1) : Math.max(r - 1, 0)]?.focus();
			} else e[0]?.focus();
		}
	}, [s]);
	L(() => (document.addEventListener("keydown", w), () => {
		document.removeEventListener("keydown", w);
	}), [w]);
	let T = "flex w-full items-center text-base text-foreground-normal rounded-lg focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none normal-case";
	return /* @__PURE__ */ H(vS, {
		open: s,
		onOpenChange: l,
		children: [/* @__PURE__ */ V(vS.Trigger, {
			className: "w-full",
			asChild: !0,
			children: /* @__PURE__ */ H("div", {
				className: "flex flex-col items-start",
				children: [e && /* @__PURE__ */ V(Ux, {
					className: "mb-1.5 block",
					children: e
				}), /* @__PURE__ */ H(Vt, {
					variant: "ghost",
					type: "button",
					onClick: (e) => {
						e.stopPropagation(), l(!0);
					},
					className: W(Gx(), "items-center justify-between normal-case", { "border-border-critical focus-within:ring-border-critical": o }),
					"data-testid": "JSONKeyPickerTrigger",
					children: [/* @__PURE__ */ V("span", {
						className: W("text-foreground-normal", { "text-foreground-subtle": !x }),
						children: u.join(".") || a || "myObj.key"
					}), /* @__PURE__ */ V(G, {
						className: "text-foreground-subtle size-4",
						svg: /* @__PURE__ */ V(c, {})
					})]
				})]
			})
		}), /* @__PURE__ */ H(vS.Content, {
			ref: p,
			className: "bg-background-overlay scrollbar-hide max-h-75 w-50 z-50 overflow-y-scroll p-1 shadow-sm",
			portal: !1,
			children: [h && /* @__PURE__ */ V("span", {
				className: W(T, "border-border-normal p-1"),
				onClick: _,
				"data-testid": "JSONKeyPickerPreviousLevel",
				children: /* @__PURE__ */ H("div", {
					className: "border-border-normal hover:bg-background-overlay-hovered flex h-full w-full items-center rounded-md border pl-3",
					children: [/* @__PURE__ */ V(G, {
						className: "text-foreground-subtle mr-2 size-4 rotate-180",
						svg: /* @__PURE__ */ V(i, {})
					}), /* @__PURE__ */ V("span", { children: h || "Metadata" })]
				})
			}), b.map((e) => {
				let t = y(e), n = e.__type === "object";
				return /* @__PURE__ */ V(Vt, {
					variant: "ghost",
					className: W(T, "justify-between", { "bg-background-overlay-hovered": t && !n }, n ? "p-1" : "hover:bg-background-overlay-hovered h-8 px-4"),
					onClick: () => C(e),
					"data-testid": "JSONKeyPickerOption",
					type: "button",
					children: /* @__PURE__ */ H("div", {
						className: W("flex h-full w-full items-center justify-between", { "border-border-normal bg-background-overlay-hovered rounded-md border px-3": n }),
						children: [
							/* @__PURE__ */ H("div", {
								className: "flex items-center",
								children: [Qw(e.__type), /* @__PURE__ */ V("span", { children: e.key })]
							}),
							t && /* @__PURE__ */ V(G, {
								className: "text-foreground-subtle size-4",
								svg: /* @__PURE__ */ V(m, {})
							}),
							n && /* @__PURE__ */ V(G, {
								className: "text-foreground-subtle size-4",
								svg: /* @__PURE__ */ V(i, {})
							})
						]
					})
				}, e.key);
			})]
		})]
	});
}
var Yw = (e) => [
	"string",
	"number",
	"boolean",
	"object",
	"array"
].includes(e), Xw = (e) => {
	let t = Array.isArray(e) ? "array" : typeof e;
	return t === "bigint" ? "number" : Yw(t) ? t : null;
}, Zw = {
	string: E,
	number: C,
	boolean: D,
	object: o,
	array: s
}, Qw = (e) => {
	let t = e && Zw[e] || v;
	return /* @__PURE__ */ V(G, {
		svg: /* @__PURE__ */ V(t, {}),
		className: "text-foreground-subtle mr-2 size-4"
	});
}, $w = ie(({ to: e, state: t, href: n, children: r, isBlank: i, className: a, end: o, activeClassName: s, disabled: c, onClick: l, ...u }, d) => {
	let f = {};
	return c ? /* @__PURE__ */ V("a", {
		ref: d,
		className: W("cursor-pointer", a),
		"aria-disabled": !0,
		tabIndex: -1,
		onClick: (e) => e.preventDefault(),
		...u,
		children: r
	}) : (i && (f = {
		target: "_blank",
		rel: "noreferrer"
	}), e ? /* @__PURE__ */ V(et, {
		ref: d,
		to: e,
		state: t,
		className: (e) => W("cursor-pointer", a, s ? { [s]: e.isActive } : void 0),
		...f,
		...u,
		onClick: l,
		end: o,
		children: r
	}) : /* @__PURE__ */ V("a", {
		ref: d,
		href: n,
		className: W("cursor-pointer", a),
		...f,
		...u,
		onClick: l,
		children: r
	}));
});
$w.displayName = "Link", $w.defaultProps = {
	isBlank: !1,
	activeClassName: "active"
};
//#endregion
//#region src/link/Link.tsx
var eT = ie(({ to: e, state: t, href: n, children: r, isBlank: i, className: a, end: o, activeClassName: s, ...c }, l) => /* @__PURE__ */ V($w, {
	ref: l,
	to: e,
	href: n,
	state: t,
	className: M("hover:opacity-80", a),
	activeClassName: s,
	isBlank: i,
	...c,
	end: o,
	children: r
}));
eT.displayName = "Link", eT.defaultProps = {
	isBlank: !1,
	activeClassName: "active"
};
//#endregion
//#region src/messagePanel/MessagePanel.tsx
var tT = {
	info: w,
	warning: k,
	danger: A,
	success: p,
	promo: _
}, nT = ({ variant: e = "info", message: t, className: n }) => {
	let r = tT[e];
	return /* @__PURE__ */ H("div", {
		className: W("grid-cols-min-fr text-foreground-normal grid w-full grid-flow-col items-start gap-x-3 rounded-lg border p-3 text-base", {
			"border-border-info bg-fill-info-secondary": e === "info",
			"border-border-critical bg-fill-critical-secondary": e === "danger",
			"border-border-warning bg-fill-warning-secondary": e === "warning",
			"border-border-success bg-fill-success-secondary": e === "success",
			"border-border-promo bg-fill-promo-secondary": e === "promo"
		}, n),
		children: [/* @__PURE__ */ V(G, { svg: /* @__PURE__ */ V(r, {}) }), /* @__PURE__ */ V("div", { children: t && typeof t == "function" ? t() : t })]
	});
};
//#endregion
//#region src/progressBar/ProgressBar.tsx
function rT({ progress: e, max: t = 1, size: n = "md" }) {
	if (t === 0) throw Error("You cannot set the max to 0.");
	let r = se(() => e / t * 100, [e, t]);
	return /* @__PURE__ */ V("div", {
		"data-testid": "progressBarContainer",
		className: fe({ "h-1.5": n === "sm" }, { "h-2.5": n === "md" }, { "h-4": n === "lg" }, "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"),
		children: /* @__PURE__ */ V("div", {
			"data-testid": "progressBarFilledSection",
			className: fe({ "h-1.5": n === "sm" }, { "h-2.5": n === "md" }, { "h-4": n === "lg" }, "bg-primary rounded-full transition-all duration-1000 ease-out"),
			style: { width: `${r}%` }
		})
	});
}
//#endregion
//#region src/separator/Separator.tsx
var iT = N.forwardRef(({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, i) => /* @__PURE__ */ V(tt.Root, {
	ref: i,
	decorative: n,
	orientation: t,
	className: W("bg-border-normal shrink-0", t === "horizontal" ? "h-px w-full" : "h-full w-px", e),
	...r
}));
iT.displayName = tt.Root.displayName;
//#endregion
//#region src/separator/index.tsx
var aT = iT, oT = ke.Root, sT = ke.Trigger, cT = ke.Close, lT = ke.Portal, uT = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Overlay, {
	className: W("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", e),
	...t,
	ref: n
}));
uT.displayName = ke.Overlay.displayName;
var dT = de("fixed z-50 gap-4 bg-background border-border-normal p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 outline-none focus:outline-none", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
}), fT = P.forwardRef(({ side: e = "right", className: t, children: n, overlay: r = !0, portal: i = !0, closeIcon: a = !0, ...o }, s) => {
	let c = i ? lT : P.Fragment;
	return /* @__PURE__ */ H(c, { children: [r && /* @__PURE__ */ V(uT, {}), /* @__PURE__ */ H(ke.Content, {
		ref: s,
		className: W(dT({ side: e }), t),
		...o,
		children: [n, a && /* @__PURE__ */ H(ke.Close, {
			className: "focus:ring-ring ring-offset-background data-[state=open]:bg-foreground-normal absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
			children: [/* @__PURE__ */ V(G, {
				className: "size-4",
				svg: /* @__PURE__ */ V(j, {})
			}), /* @__PURE__ */ V("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
});
fT.displayName = ke.Content.displayName;
var pT = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("flex flex-col space-y-2 text-center sm:text-left", e),
	...t
});
pT.displayName = "SheetHeader";
var mT = ({ className: e, ...t }) => /* @__PURE__ */ V("div", {
	className: W("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
	...t
});
mT.displayName = "SheetFooter";
var hT = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Title, {
	ref: n,
	className: W("text-foreground-normal text-lg font-semibold", e),
	...t
}));
hT.displayName = ke.Title.displayName;
var gT = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(ke.Description, {
	ref: n,
	className: W("text-foreground-subtle text-sm", e),
	...t
}));
gT.displayName = ke.Description.displayName;
var _T = oT;
_T.Trigger = sT, _T.Content = fT, _T.Close = cT, _T.Header = pT, _T.Footer = mT, _T.Title = hT, _T.Description = gT, _T.Overlay = uT;
//#endregion
//#region src/slideOver/SlideOverPanel.tsx
var vT = {
	sm: "max-w-sm",
	md: "max-w-md",
	lg: "max-w-lg",
	xl: "max-w-xl",
	full: "max-w-full"
}, yT = ({ isOpen: e, children: t, className: n, containerClassName: r, wrapperClassName: i, size: a = "md" }) => /* @__PURE__ */ V("section", {
	className: W("absolute inset-y-0 right-0 z-10 flex max-w-full pl-10", { "pointer-events-none": !e }, i),
	"aria-labelledby": "slide-over-heading",
	children: /* @__PURE__ */ V(nt, {
		show: e,
		enter: "transition ease-in-out duration-500 sm:duration-700",
		enterFrom: "translate-x-full",
		enterTo: "translate-x-0",
		leave: "transition ease-in-out duration-500 sm:duration-700",
		leaveFrom: "translate-x-0",
		leaveTo: "translate-x-full",
		as: "div",
		children: /* @__PURE__ */ V("div", {
			className: W("h-full w-[calc(100vw-2.5rem)] sm:w-screen", vT[a || "md"] || vT.md, r),
			children: /* @__PURE__ */ V("div", {
				className: M("flex h-full flex-col shadow-xl", n),
				children: t
			})
		})
	})
});
//#endregion
//#region src/table/pagination/TablePageSelector.tsx
function bT({ currentPage: e, setPage: t, pageCount: n, allowedPages: r, height: i }) {
	let [a, o] = B(e), s = (e) => e !== void 0 && e >= 1 && e <= n && (!r || r.includes(e));
	return L(() => {
		o(e);
	}, [e]), n === 0 ? null : /* @__PURE__ */ H("form", {
		"data-testid": "tablePageSelectorForm",
		className: "flex h-full shrink-0 items-center gap-2 px-4 text-base",
		onSubmit: (n) => {
			n.preventDefault(), s(a) ? t(a) : o(e);
		},
		style: { height: i },
		children: [
			/* @__PURE__ */ V("span", { children: "Page" }),
			/* @__PURE__ */ V("input", {
				"data-testid": "tablePageSelectorInput",
				type: "number",
				className: W("bg-background-surface-secondary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 rounded-md border border-transparent p-0 text-center text-sm outline-none [appearance:textfield] disabled:cursor-not-allowed [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", { "w-8": n < 1e3 }, { "w-12": n >= 1e3 }),
				value: a,
				onChange: (e) => {
					let t = parseInt(e.target.value);
					o(isNaN(t) ? void 0 : t);
				},
				onBlur: () => {
					s(a) || o(e);
				},
				disabled: n === 1,
				max: n,
				min: 1
			}),
			/* @__PURE__ */ H("span", { children: ["of ", n] })
		]
	});
}
//#endregion
//#region src/table/pagination/TablePageSizeSelector.tsx
function xT({ pageSize: e, setPageSize: t, options: n, height: r, label: i = "per page" }) {
	return /* @__PURE__ */ H("div", {
		className: "flex shrink-0 items-center pr-4 text-base",
		style: { height: r },
		children: [/* @__PURE__ */ V(zS, {
			"data-testid": "tablePageSizeSelector",
			className: "border-none bg-transparent",
			value: e.toString(),
			onValueChange: (e) => {
				let n = parseInt(e, 10);
				isNaN(n) || t(n);
			},
			options: n ?? [
				{
					value: "5",
					label: "Show 5"
				},
				{
					value: "10",
					label: "Show 10"
				},
				{
					value: "20",
					label: "Show 20"
				},
				{
					value: "30",
					label: "Show 30"
				},
				{
					value: "40",
					label: "Show 40"
				},
				{
					value: "50",
					label: "Show 50"
				}
			],
			containerClassName: "m-0"
		}), /* @__PURE__ */ V("span", {
			className: "hidden md:inline-block",
			children: i
		})]
	});
}
//#endregion
//#region src/table/TableActionsHeaderButton.tsx
var ST = ie(({ open: e, className: t, variant: n = "ghost", ...r }, i) => /* @__PURE__ */ V(Vt, {
	ref: i,
	size: "icon",
	variant: n,
	className: W("hover:bg-background-surface/70 active:bg-background-surface/80 flex h-8 w-8 items-center justify-center border-none", { "bg-background-surface/80": e }, { "text-foreground-subtle/50 cursor-not-allowed": r.disabled }, t),
	...r
}));
ST.displayName = "TableActionsHeaderButton";
//#endregion
//#region src/table/pagination/TablePaginationControls.tsx
function CT({ currentPage: e, pageSize: t, pageSizeOptions: n, pageCount: r, selectablePages: i, canGoBackward: a, canGoForward: o, centerContent: s, onSetPage: c, onSetPageSize: d, height: f, className: p, actionButtonClassName: m, onPrefetchPage: h }) {
	let g = () => a === void 0 ? e > 1 : a, _ = () => o === void 0 ? e < r : o, v = (t) => {
		!(t === "forward" ? _() : g()) || !h || h(t === "forward" ? e + 1 : e - 1);
	};
	return /* @__PURE__ */ H("div", {
		className: W("divide-border-normal border-border-normal flex h-full w-full items-center divide-x border-t", p),
		style: { height: f },
		children: [
			t && d && /* @__PURE__ */ V(xT, {
				pageSize: t,
				setPageSize: d,
				height: f,
				options: n || void 0
			}),
			/* @__PURE__ */ V("div", {
				className: "hidden flex-1 shrink-0 items-center px-4 text-base sm:px-6 md:flex",
				style: { height: f },
				children: s
			}),
			/* @__PURE__ */ V(bT, {
				currentPage: e,
				setPage: c,
				pageCount: r,
				allowedPages: i,
				height: f
			}),
			/* @__PURE__ */ V("div", { className: "flex flex-1 md:hidden" }),
			/* @__PURE__ */ V(ST, {
				className: W(m),
				"data-testid": "paginateBack",
				disabled: !g(),
				onMouseEnter: () => v("backward"),
				onClick: () => c(e - 1),
				children: /* @__PURE__ */ V(G, {
					className: "size-4",
					svg: /* @__PURE__ */ V(l, {})
				})
			}),
			/* @__PURE__ */ V(ST, {
				className: W(m),
				"data-testid": "paginateForward",
				disabled: !_(),
				onMouseEnter: () => v("forward"),
				onClick: () => c(e + 1),
				children: /* @__PURE__ */ V(G, {
					className: "size-4",
					svg: /* @__PURE__ */ V(u, {})
				})
			})
		]
	});
}
//#endregion
//#region src/table/TableActiveRowDrawer.tsx
function wT({ title: e, isOpen: t, onClose: n, canGoBackward: r, canGoForward: i, onNextRow: a, onPreviousRow: o, children: s }) {
	let c = z(null), d = z();
	L(() => {
		t && (c.current = s, d.current = e);
	}, [
		t,
		s,
		e
	]);
	let f = () => t ? s : c.current, p = () => t ? e : d.current;
	return /* @__PURE__ */ V(_T, {
		open: t,
		onOpenChange: (e) => e ? void 0 : n(),
		children: /* @__PURE__ */ H(_T.Content, {
			closeIcon: !1,
			className: "divide-border-normal z-100 max-w-[unset]! fixed w-5/6 divide-y p-0 shadow-none md:w-2/3 lg:w-2/5",
			children: [/* @__PURE__ */ H(_T.Header, {
				className: "flex h-12 flex-row items-center justify-between space-y-[unset] pl-4 pr-1",
				children: [
					/* @__PURE__ */ V(_T.Title, {
						className: "text-base font-medium",
						children: p()
					}),
					/* @__PURE__ */ V(_T.Description, {
						className: "hidden",
						children: p()
					}),
					/* @__PURE__ */ H("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ V(ST, {
								onClick: o,
								disabled: !r,
								children: /* @__PURE__ */ V(G, { svg: /* @__PURE__ */ V(l, {}) })
							}),
							/* @__PURE__ */ V(ST, {
								onClick: a,
								disabled: !i,
								children: /* @__PURE__ */ V(G, { svg: /* @__PURE__ */ V(u, {}) })
							}),
							/* @__PURE__ */ V(ST, {
								onClick: n,
								"data-testid": "closeActiveRowDrawer",
								children: /* @__PURE__ */ V(G, { svg: /* @__PURE__ */ V(j, {}) })
							})
						]
					})
				]
			}), f()]
		})
	});
}
//#endregion
//#region src/table/TableCell.tsx
function TT({ className: e, activeOnHover: t, enableCopy: n, children: r, ...i }) {
	let a = z(null), [o, s] = B("");
	L(() => {
		a.current && s(a.current.textContent || "");
	}, [r]);
	let [c, l, u] = gb(o, 2e3), d = I((e) => {
		e.stopPropagation(), c();
	}, [c]);
	return /* @__PURE__ */ H("td", {
		ref: a,
		className: W("border-b-border-normal group relative border-b px-1.5", { "cursor-pointer": t }, e),
		...i,
		children: [r, n && u && /* @__PURE__ */ V("div", {
			"data-testid": "copy-cell",
			className: "group-hover:bg-background-surface absolute bottom-0 right-0 top-0 z-10 w-8 p-1 opacity-0 transition-opacity group-hover:opacity-100",
			children: /* @__PURE__ */ V(Vt, {
				variant: "ghost",
				size: "icon",
				type: "button",
				className: "bg-background-surface-hovered absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-md p-1",
				onClick: d,
				title: "Copy to clipboard",
				"aria-label": "Copy to clipboard",
				"data-testid": "copy-cell-button",
				children: l ? /* @__PURE__ */ V(G, {
					className: "size-3.5",
					svg: /* @__PURE__ */ V(m, {})
				}) : /* @__PURE__ */ V(G, {
					className: "size-3.5",
					svg: /* @__PURE__ */ V(g, {})
				})
			})
		})]
	});
}
//#endregion
//#region src/table/TableHeadItem.tsx
function ET({ table: e, header: t }) {
	if (t.isPlaceholder) return null;
	let { rows: n } = e.getRowModel(), r = (e, t) => e ? t === "asc" ? /* @__PURE__ */ V(G, {
		className: "size-4",
		svg: /* @__PURE__ */ V(f, {})
	}) : t === "desc" ? /* @__PURE__ */ V(G, {
		className: "size-4",
		svg: /* @__PURE__ */ V(c, {})
	}) : /* @__PURE__ */ V(G, {
		className: "size-4",
		svg: /* @__PURE__ */ V(d, {})
	}) : null, i = t.column.columnDef.meta?.isActionColumn ?? !1, a = t.column.getCanResize() && !i, o = t.column.getCanSort(), s = t.column.getIsResizing(), l = r(o, t.column.getIsSorted());
	return /* @__PURE__ */ H(ge, { children: [/* @__PURE__ */ H("div", {
		className: fe("flex w-full items-center justify-between", { "cursor-pointer select-none": t.column.getCanSort() && !i }),
		onClick: s || i ? void 0 : t.column.getToggleSortingHandler(),
		children: [it(t.column.columnDef.header, t.getContext()), !i && l && /* @__PURE__ */ V(Vt, {
			variant: "ghost",
			size: "square",
			className: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 flex h-8 w-8 items-center justify-center outline-none",
			disabled: n.length === 0,
			children: l
		})]
	}), a && /* @__PURE__ */ V("div", {
		"data-testid": "resizeHandle",
		onMouseDown: t.getResizeHandler(),
		onTouchStart: t.getResizeHandler(),
		className: fe("absolute right-0 top-0 z-50 h-full w-0.5 cursor-col-resize touch-none opacity-0 transition-opacity duration-75 hover:opacity-100", { "bg-primary/50 opacity-100": s }, { "bg-background-overlay-hovered/50": !s })
	})] });
}
//#endregion
//#region src/table/Table.tsx
var DT = 48, OT = 48;
function kT({ data: e, columns: t, height: n, width: r, options: i, emptyStateRenderer: o, enableScrollToTop: s, scrollToTopThreshold: c = .25, activeOnHover: l = !0, activeRow: u, activeRowOverlay: d, activeRowOverlayTitle: f, onSelectActiveRow: p, disableFollowActiveRow: m, onScrolledToBottom: h, tableHeaderRowClassName: g, tableHeaderCellClassName: _, tableRowClassName: v, tableCellClassName: y, tableClassName: b, containerClassName: x, divide: S = "rows", emptyRowClassName: C, ...w }) {
	let T = z(null), E = z(null), D = () => {
		if (!(i?.meta || {}).manualSorting && i?.state?.sorting) return ct();
	}, O = lt({
		...i,
		data: e,
		columns: t,
		getCoreRowModel: at(),
		getSortedRowModel: D(),
		getPaginationRowModel: i?.state?.pagination ? st() : void 0,
		getFilteredRowModel: i?.state?.globalFilter || i?.state?.columnFilters ? ot() : void 0,
		columnResizeMode: "onChange"
	}), { rows: k } = O.getRowModel(), A = k.length, j = dt({
		parentRef: E,
		size: k.length,
		overscan: 10
	}), N = Sb() === "dark", [P] = ut({
		defer: !0,
		options: { scrollbars: { theme: N ? "os-theme-light" : "os-theme-dark" } }
	});
	L(() => {
		let { current: e } = T, { current: t } = E;
		e && t && P({
			target: e,
			elements: { viewport: t }
		});
	}, [P]);
	let { virtualItems: ee, totalSize: te } = j, ne = se(() => typeof n == "function" ? n(A) : n, [n, A]), re = ee.length > 0 && ee?.[0]?.start || 0, ie = ee.length > 0 ? te - (ee?.[ee.length - 1]?.end || 0) : 0, F = I((e) => {
		if (e) {
			let { scrollHeight: t, scrollTop: n, clientHeight: r } = e;
			t - n - r < 200 && h?.();
		}
	}, [h]), ae = () => {
		E.current?.scroll({
			top: 0,
			behavior: "smooth"
		});
	}, R = (e, t) => typeof t == "function" ? t(e) : t, oe = se(() => u ? k.findIndex((e) => e.original === u) : -1, [k, u]), ce = () => {
		if (!d) return null;
		let e = oe > 0 ? k[oe - 1] : null, t = oe < k.length - 1 ? k[oe + 1] : null, n;
		return u && typeof f == "function" ? n = f(u) : typeof f == "string" && (n = f), /* @__PURE__ */ V(wT, {
			title: n,
			isOpen: !!u,
			canGoBackward: !!e,
			canGoForward: !!t,
			onPreviousRow: () => p?.(e?.original),
			onNextRow: () => p?.(t?.original),
			onClose: () => p?.(void 0),
			children: u && d(u)
		});
	}, B = E.current?.scrollTop ?? 0, le = se(() => !E.current || !s ? !1 : B > E.current.scrollHeight * c, [
		s,
		B,
		c
	]), ue = oe > -1 ? k[oe] : null;
	return L(() => {
		if (!ue || m) return;
		let e = document.getElementById(ue.id);
		if (e && E.current) {
			let t = e.getBoundingClientRect(), n = E.current.getBoundingClientRect();
			(t.top < n.top || t.bottom > n.bottom) && e.scrollIntoView({
				behavior: "smooth",
				block: "end",
				inline: "start"
			});
		}
	}, [
		oe,
		ue,
		m
	]), /* @__PURE__ */ V("div", {
		ref: T,
		className: "relative",
		"data-overlayscrollbars-initialize": "",
		style: {
			height: ne,
			width: r
		},
		children: /* @__PURE__ */ H("div", {
			ref: E,
			className: W("relative overflow-auto", x),
			"data-testid": "tableContainer",
			onScroll: (e) => F(e.target),
			style: {
				height: ne,
				width: r
			},
			children: [
				ce(),
				/* @__PURE__ */ H("table", {
					className: W("divide-border-normal z-0 w-full table-fixed border-separate border-spacing-0 divide-y", b),
					style: { width: r },
					...w,
					children: [/* @__PURE__ */ V("thead", {
						className: W("z-1 sticky top-0 m-0 h-12", g),
						children: O.getHeaderGroups().map((e) => /* @__PURE__ */ V("tr", {
							className: W("h-12", { "divide-border-normal divide-x": S === "cells" }),
							children: e.headers.map((e) => /* @__PURE__ */ V("th", {
								className: W("text-foreground-normal font-aeonik border-b-border-normal bg-background-surface relative border-b px-1.5 text-left text-sm font-medium uppercase tracking-wider", _),
								colSpan: e.colSpan,
								style: { width: e.getSize() },
								children: /* @__PURE__ */ V(ET, {
									table: O,
									header: e
								})
							}, e.id))
						}, e.id))
					}), /* @__PURE__ */ H("tbody", { children: [
						re > 0 && /* @__PURE__ */ V(AT, {
							className: R(!1, v),
							children: /* @__PURE__ */ V(TT, {
								style: { height: `${re}px` },
								className: R(!1, y)
							})
						}),
						ee.map((e) => {
							let t = k[e.index], n = !!u && t.original === u, r = e.index === k.length - 1;
							return /* @__PURE__ */ V(AT, {
								id: t.id,
								tabIndex: 0,
								isActive: n,
								activeOnHover: l,
								className: W({ "divide-border-normal divide-x": S === "cells" }, R(n, v)),
								children: t.getVisibleCells().map((e) => {
									let i = e.column.columnDef.meta?.isActionColumn ?? !1, a = !e.column.columnDef.meta?.isNonSelectable && !i;
									return /* @__PURE__ */ V(TT, {
										activeOnHover: l,
										enableCopy: e.column.columnDef.meta?.enableCopy,
										className: W(R(n, y), { "border-b-0": r }),
										onClick: a ? () => p?.(t.original) : void 0,
										style: { width: e.column.getSize() },
										children: it(e.column.columnDef.cell, e.getContext())
									}, e.id);
								})
							}, t.id);
						}),
						k.length === 0 && o && /* @__PURE__ */ V("tr", {
							className: C,
							children: /* @__PURE__ */ V("td", {
								colSpan: t.length,
								className: "h-0 p-0",
								children: o()
							})
						}),
						ie > 0 && /* @__PURE__ */ V(AT, { children: /* @__PURE__ */ V(TT, {
							style: { height: `${ie}px` },
							className: R(!1, y)
						}) })
					] })]
				}),
				s && /* @__PURE__ */ V("div", {
					className: "sticky bottom-4 right-4 z-50 float-right -my-10 h-10",
					children: /* @__PURE__ */ H(Vt, {
						variant: "ghost",
						"data-testid": "scrollToTopButton",
						className: M("bg-background-inverse text-background hover:bg-primary-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 flex h-full items-center rounded-full px-2.5 text-base normal-case opacity-0 outline-none transition-all duration-100", { "opacity-100": le }),
						onClick: ae,
						children: [/* @__PURE__ */ V(G, {
							className: "size-4",
							svg: /* @__PURE__ */ V(a, {})
						}), "Back to top"]
					})
				})
			]
		})
	});
}
function AT({ className: e, isActive: t, activeOnHover: n, ...r }) {
	return /* @__PURE__ */ V("tr", {
		className: W("border-b-border-normal focus-visible:ring-3 focus-visible:ring-ring/50 h-12 outline-none transition-colors duration-75 focus-visible:ring-inset", { "bg-background-surface-secondary": t }, { "hover:bg-background-surface-hovered cursor-pointer": n }, e),
		...r
	});
}
//#endregion
//#region src/table/utils.ts
function jT(e, t, n) {
	let r = e.pageIndex * e.pageSize, i = Math.floor(r / t.pageSize), a = Math.ceil(n / t.pageSize) - 1;
	return Math.min(i, a);
}
function MT(e, t) {
	let n = e.getIsPinned();
	return {
		left: n === "left" ? `${e.getStart("left")}px` : void 0,
		right: n === "right" ? `${e.getAfter("right")}px` : void 0,
		position: n ? "sticky" : void 0,
		zIndex: n ? 1 : void 0,
		...t?.(n === "left" || n === "right")
	};
}
function NT(e, t) {
	return Array.isArray(e) || typeof e == "object" ? t ? jt(e, null, 2) : jt(e) : typeof e == "boolean" ? `${e}` : e ?? "";
}
//#endregion
//#region src/tabs/Tabs.tsx
function PT({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ V(ft.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		orientation: t,
		className: W("group/tabs flex items-start data-[orientation=horizontal]:flex-col", e),
		...n
	});
}
var FT = de("group/tabs-list inline-flex items-center justify-center text-foreground-subtle group-data-[orientation=vertical]/tabs:flex-col h-8 group-data-[orientation=vertical]/tabs:h-auto", {
	variants: { variant: {
		default: "rounded-lg p-0.5 shadow-inner border-border-normal border",
		pill: "gap-1"
	} },
	defaultVariants: { variant: "default" }
});
function IT({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ V(ft.List, {
		"data-slot": "tabs-list",
		"data-variant": t ?? "default",
		className: W(FT({ variant: t }), e),
		...n
	});
}
function LT({ className: e, ...t }) {
	return /* @__PURE__ */ V(ft.Trigger, {
		"data-slot": "tabs-trigger",
		className: W("text-foreground-subtle relative inline-flex h-full items-center justify-center whitespace-nowrap px-2 text-base transition-all", "group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start", "group-data-[orientation=vertical]/tabs:h-8", "hover:text-foreground-normal", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none", "disabled:pointer-events-none disabled:opacity-50", "group-data-[variant=default]/tabs-list:rounded-[calc(var(--radius-lg)-2px)]", "group-data-[variant=default]/tabs-list:data-[state=active]:bg-fill-control-selected group-data-[variant=default]/tabs-list:data-[state=active]:text-white", "group-data-[variant=pill]/tabs-list:data-[state=active]:bg-primary group-data-[variant=pill]/tabs-list:data-[state=active]:text-foreground-on-brand-primary group-data-[variant=pill]/tabs-list:rounded-full group-data-[variant=pill]/tabs-list:px-3", e),
		...t
	});
}
function RT({ className: e, ...t }) {
	return /* @__PURE__ */ V(ft.Content, {
		"data-slot": "tabs-content",
		className: W("flex-1 outline-none", e),
		...t
	});
}
var zT = Object.assign(PT, {
	List: IT,
	Trigger: LT,
	Content: RT
}), BT = ({ href: e, fileName: t, children: n, ...r }) => /* @__PURE__ */ V(eT, {
	isBlank: !0,
	href: e,
	download: t,
	...r,
	children: n
}), VT = (e) => typeof e == "string" && n.includes(e), HT = (e, t) => e === "system" ? t ? "dark" : "light" : e, UT = {
	getItem: (e) => {
		if (typeof window > "u") return null;
		try {
			let t = window.localStorage.getItem(e);
			return VT(t) ? {
				state: { theme: t },
				version: 0
			} : null;
		} catch {
			return null;
		}
	},
	setItem: (e, t) => {
		if (!(typeof window > "u")) try {
			window.localStorage.setItem(e, t.state.theme);
		} catch {}
	},
	removeItem: (e) => {
		if (!(typeof window > "u")) try {
			window.localStorage.removeItem(e);
		} catch {}
	}
}, WT = () => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia("(prefers-color-scheme: dark)").matches, GT = pt()(mt((t, n) => {
	let r = WT();
	return {
		theme: e,
		systemPrefersDark: r,
		resolvedTheme: HT(e, r),
		setTheme: (e) => t({
			theme: e,
			resolvedTheme: HT(e, n().systemPrefersDark)
		}),
		setSystemPrefersDark: (e) => t({
			systemPrefersDark: e,
			resolvedTheme: HT(n().theme, e)
		})
	};
}, {
	name: r,
	storage: UT,
	partialize: (e) => ({ theme: e.theme }),
	onRehydrateStorage: () => (e) => {
		e && (e.resolvedTheme = HT(e.theme, e.systemPrefersDark));
	}
})), KT = "(prefers-color-scheme: dark)", qT = ["transition-none!", "**:transition-none!"], JT = 0, YT = () => {
	if (typeof document > "u") return;
	let e = document.documentElement;
	e.classList.add(...qT), e.offsetHeight;
	let t = ++JT, n = () => {
		t === JT && e.classList.remove(...qT);
	};
	typeof window < "u" && typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame(() => window.requestAnimationFrame(n)) : setTimeout(n, 0);
}, XT = (e, n) => {
	if (typeof document > "u") return;
	let r = document.documentElement;
	(r.dataset.appliedTheme !== n || r.dataset.theme !== e) && YT();
	for (let e of t) r.classList.remove(e);
	r.classList.add(n), r.dataset.theme = e, r.dataset.appliedTheme = n;
}, ZT = ({ children: e }) => {
	let t = GT((e) => e.theme), n = GT((e) => e.resolvedTheme), r = GT((e) => e.setSystemPrefersDark);
	return L(() => {
		XT(t, n);
	}, [t, n]), L(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(KT);
		r(e.matches);
		let t = (e) => {
			r(e.matches);
		};
		return typeof e.addEventListener == "function" ? (e.addEventListener("change", t), () => e.removeEventListener("change", t)) : (e.addListener(t), () => e.removeListener(t));
	}, [r]), /* @__PURE__ */ V(ge, { children: e });
}, QT = () => ({
	theme: GT((e) => e.theme),
	resolvedTheme: GT((e) => e.resolvedTheme),
	setTheme: GT((e) => e.setTheme)
}), $T = ({ ...e }) => {
	let t = Sb();
	return /* @__PURE__ */ V(ht, {
		theme: t,
		className: "toaster group",
		richColors: !0,
		icons: {
			success: /* @__PURE__ */ V(G, {
				className: "size-4",
				svg: /* @__PURE__ */ V(p, {})
			}),
			info: /* @__PURE__ */ V(G, {
				className: "size-4",
				svg: /* @__PURE__ */ V(w, {})
			}),
			warning: /* @__PURE__ */ V(G, {
				className: "size-4",
				svg: /* @__PURE__ */ V(k, {})
			}),
			error: /* @__PURE__ */ V(G, {
				className: "size-4",
				svg: /* @__PURE__ */ V(A, {})
			})
		},
		style: {
			"--normal-bg": "var(--background-overlay)",
			"--normal-text": "var(--foreground-normal)",
			"--normal-border": "var(--border-normal)",
			"--success-bg": "var(--fill-success-secondary)",
			"--success-text": "var(--foreground-normal)",
			"--success-border": "var(--border-success)",
			"--info-bg": "var(--fill-info-secondary)",
			"--info-text": "var(--foreground-normal)",
			"--info-border": "var(--border-info)",
			"--warning-bg": "var(--fill-warning-secondary)",
			"--warning-text": "var(--foreground-normal)",
			"--warning-border": "var(--border-warning)",
			"--error-bg": "var(--fill-critical-secondary)",
			"--error-text": "var(--foreground-normal)",
			"--error-border": "var(--border-critical)",
			"--border-radius": "var(--radius-lg)"
		},
		...e
	});
}, eE = gt.Provider, tE = gt.Root, nE = gt.Trigger, rE = P.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ V(gt.Portal, { children: /* @__PURE__ */ V(gt.Content, {
	ref: r,
	sideOffset: t,
	className: W("bg-background-inverse text-foreground-on-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 flex items-center justify-center overflow-hidden rounded-md px-1.5 py-0.5 text-sm", e),
	...n
}) }));
rE.displayName = gt.Content.displayName;
var iE = (e) => /* @__PURE__ */ V(eE, { children: /* @__PURE__ */ V(tE, {
	delayDuration: 100,
	...e
}) });
iE.Trigger = nE, iE.Content = rE;
//#endregion
//#region src/tooltip/Tooltip.tsx
function aE({ children: e, tip: t, disabled: n, ...r }) {
	return /* @__PURE__ */ H(iE, { children: [/* @__PURE__ */ V(iE.Trigger, {
		disabled: n,
		asChild: !0,
		className: W({ "pointer-events-none": n }),
		children: e
	}), /* @__PURE__ */ V(iE.Content, {
		...r,
		children: t
	})] });
}
//#endregion
//#region src/twoColumn/TwoColumn.tsx
var oE = ({ containerClassName: e, firstColumnTitle: t, firstColumnContent: n, firstColumnContainerClassName: r, children: i }) => /* @__PURE__ */ H("div", {
	className: W("py-5 md:grid md:grid-cols-12 md:gap-6", e),
	children: [/* @__PURE__ */ V("div", {
		className: "md:col-span-4",
		children: /* @__PURE__ */ H("div", {
			className: W("px-4 sm:px-0", r),
			children: [t && /* @__PURE__ */ V(Wt, {
				level: 2,
				children: t
			}), V(typeof n == "string" ? "p" : "div", {
				className: "text-foreground-subtle font-sans",
				children: n
			})]
		})
	}), /* @__PURE__ */ V("div", {
		className: "mt-5 md:col-span-7 md:col-start-6 md:mt-0",
		children: i
	})]
}), sE = de("flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 *:focus-visible:relative *:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
		vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function cE({ className: e, orientation: t, ...n }) {
	return /* @__PURE__ */ V("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": t,
		className: W(sE({ orientation: t }), e),
		...n
	});
}
function lE({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ V(aT, {
		"data-slot": "button-group-separator",
		orientation: t,
		className: W("bg-input m-0! relative self-stretch data-[orientation=vertical]:h-auto", e),
		...n
	});
}
//#endregion
//#region src/dropdown/base.tsx
var uE = _t.Root, dE = _t.Trigger, fE = _t.Group, pE = _t.Portal, mE = _t.Sub, hE = _t.RadioGroup, gE = P.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ H(_t.SubTrigger, {
	ref: i,
	className: W("data-[state=open]:bg-background-overlay-hovered flex select-none items-center rounded-sm px-2 py-1.5 outline-none", "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none", t && "pl-8", e),
	...r,
	children: [n, /* @__PURE__ */ V(G, {
		className: "ml-auto size-4",
		svg: /* @__PURE__ */ V(u, {})
	})]
}));
gE.displayName = _t.SubTrigger.displayName;
var _E = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(_t.SubContent, {
	ref: n,
	className: W("border-border-normal bg-background-overlay text-foreground-normal data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-32 overflow-hidden rounded-lg border p-1 shadow-lg", e),
	...t
}));
_E.displayName = _t.SubContent.displayName;
var vE = P.forwardRef(({ className: e, sideOffset: t = 4, portal: n = !0, ...r }, i) => {
	let a = n ? _t.Portal : P.Fragment;
	return /* @__PURE__ */ V(a, { children: /* @__PURE__ */ V(_t.Content, {
		ref: i,
		sideOffset: t,
		className: W("border-border-normal bg-background-overlay text-foreground-normal z-50 min-w-32 overflow-hidden rounded-lg border p-1 shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
		...r
	}) });
});
vE.displayName = _t.Content.displayName;
var yE = P.forwardRef(({ className: e, inset: t, active: n, ...r }, i) => /* @__PURE__ */ V(_t.Item, {
	ref: i,
	className: W("data-disabled:opacity-50 relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 outline-none transition-colors", t && "pl-8", { "bg-background-overlay-hovered": n }, { "hover:bg-background-overlay-hovered focus:bg-background-overlay-hovered": !r.disabled }, e),
	...r,
	onClick: r.disabled ? void 0 : r.onClick
}));
yE.displayName = _t.Item.displayName;
var bE = P.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ H(_t.CheckboxItem, {
	ref: i,
	className: W("focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors", e),
	checked: n,
	...r,
	children: [/* @__PURE__ */ V("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ V(_t.ItemIndicator, { children: /* @__PURE__ */ V(G, {
			className: "size-4",
			svg: /* @__PURE__ */ V(m, {})
		}) })
	}), t]
}));
bE.displayName = _t.CheckboxItem.displayName;
var xE = P.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ H(_t.RadioItem, {
	ref: r,
	className: W("focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none transition-colors", e),
	...n,
	children: [/* @__PURE__ */ V("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ V(_t.ItemIndicator, { children: /* @__PURE__ */ V(G, {
			className: "size-4 fill-current",
			svg: /* @__PURE__ */ V(p, {})
		}) })
	}), t]
}));
xE.displayName = _t.RadioItem.displayName;
var SE = P.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ V(_t.Label, {
	ref: r,
	className: W("text-foreground-subtle px-2 py-1.5 text-sm font-medium", t && "pl-8", e),
	...n
}));
SE.displayName = _t.Label.displayName;
var CE = P.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ V(_t.Separator, {
	ref: n,
	className: W("bg-background-surface -mx-1 my-1.5 h-px", e),
	...t
}));
CE.displayName = _t.Separator.displayName;
var wE = ({ className: e, ...t }) => /* @__PURE__ */ V("span", {
	className: W("ml-auto text-xs tracking-widest opacity-60", e),
	...t
});
wE.displayName = "DropdownMenuShortcut";
var TE = ((e) => /* @__PURE__ */ V(uE, { ...e }));
TE.Trigger = dE, TE.Content = vE, TE.Group = fE, TE.Portal = pE, TE.Sub = mE, TE.SubTrigger = gE, TE.SubContent = _E, TE.Item = yE, TE.CheckboxItem = bE, TE.RadioItem = xE, TE.Label = SE, TE.Separator = CE, TE.Shortcut = wE, TE.RadioGroup = hE;
//#endregion
//#region src/dropdown/ActionMenu.tsx
function EE({ groups: e, items: t, ...n }) {
	let [r, i] = B(!1), a = (e) => {
		e && n.disabled || (i(e), n.onOpenChange?.(e));
	}, o = () => {
		if ("trigger" in n) return /* @__PURE__ */ V(TE.Trigger, {
			asChild: !0,
			"data-testid": "actionMenuTrigger",
			disabled: n.disabled,
			children: n.trigger
		});
		{
			let { icon: e, iconClassName: t } = n, r = e ?? null;
			return /* @__PURE__ */ V(TE.Trigger, {
				className: Bt({
					size: "icon",
					variant: "ghost"
				}),
				"data-testid": "actionMenuTrigger",
				disabled: n.disabled,
				children: /* @__PURE__ */ V(G, {
					svg: V(r || b, {}),
					className: t
				})
			});
		}
	}, s = (e) => e.map(({ label: e, onClick: t, className: r, disabled: i, icon: a, iconPosition: o, active: s, id: c, render: l, tip: u, variant: d = "default" }) => {
		if (!e && !l) return null;
		let f = ({ children: e }) => u ? /* @__PURE__ */ V(aE, {
			tip: u.content,
			side: u.side,
			children: e
		}) : /* @__PURE__ */ V(te, { children: e });
		if (l) return /* @__PURE__ */ V(f, { children: /* @__PURE__ */ V(TE.Item, {
			disabled: i,
			onClick: t,
			onSelect: (e) => e.preventDefault(),
			active: s,
			"data-testid": c,
			className: W(r, n.itemsClassName),
			children: l()
		}) }, c);
		let p = a ?? null, m = o || "left";
		return /* @__PURE__ */ V(f, { children: /* @__PURE__ */ H(TE.Item, {
			disabled: i,
			onClick: t,
			active: s,
			"data-testid": c,
			className: W({ "text-fill-critical": d === "critical" }, r, n.itemsClassName),
			children: [
				p && m === "left" && /* @__PURE__ */ V(G, {
					svg: /* @__PURE__ */ V(p, {}),
					className: W("text-foreground-subtle mr-2 size-4", { "text-fill-critical": d === "critical" })
				}),
				e,
				p && m === "right" && /* @__PURE__ */ V(G, {
					svg: /* @__PURE__ */ V(p, {}),
					className: W("text-foreground-subtle ml-2 size-4", { "text-fill-critical": d === "critical" })
				})
			]
		}, e) }, e);
	}), c = (e) => {
		let { label: t, items: n } = e;
		return /* @__PURE__ */ H(TE.Group, { children: [t && /* @__PURE__ */ V(TE.Label, { children: t }), s(n)] }, `group-${t || n.length}`);
	};
	return /* @__PURE__ */ H(TE, {
		modal: !1,
		open: r,
		onOpenChange: a,
		children: [o(), /* @__PURE__ */ V(TE.Content, {
			align: n.align,
			alignOffset: n.alignOffset,
			children: e ? e.map((t, n) => {
				let r = c(t);
				return n === e.length - 1 ? r : /* @__PURE__ */ H(te, { children: [r, /* @__PURE__ */ V(TE.Separator, {})] }, n);
			}) : s(t)
		})]
	});
}
//#endregion
//#region src/resizable/Resizable.tsx
function DE({ className: e, ...t }) {
	return /* @__PURE__ */ V(vt.PanelGroup, {
		"data-slot": "resizable-panel-group",
		className: W("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", e),
		...t
	});
}
function OE({ ...e }) {
	return /* @__PURE__ */ V(vt.Panel, {
		"data-slot": "resizable-panel",
		...e
	});
}
function kE({ withHandle: e, className: t, onPointerDownCapture: n, ...r }) {
	return /* @__PURE__ */ V(vt.PanelResizeHandle, {
		"data-slot": "resizable-handle",
		className: W("bg-border-normal focus-visible:ring-focus-outline relative flex w-px items-center justify-center outline-none after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", t),
		onPointerDownCapture: (e) => {
			e.currentTarget.setPointerCapture?.(e.pointerId), n?.(e);
		},
		...r,
		children: e && /* @__PURE__ */ V("div", {
			className: "bg-background-surface rounded-xs border-border-normal text-foreground-normal z-10 flex h-4 w-3 items-center justify-center border",
			children: /* @__PURE__ */ V(G, {
				className: "size-2.5 rotate-90",
				svg: /* @__PURE__ */ V(y, {})
			})
		})
	});
}
//#endregion
export { EE as ActionMenu, Jt as Alert, Xt as AlertProvider, en as Avatar, tn as Badge, Vt as Button, cE as ButtonGroup, lE as ButtonGroupSeparator, dS as Calendar, cn as Card, Lw as CheckBox, Vx as ChipInput, Rb as CodeEditor, Bb as CodeHighlight, Hw as ComboBox, sS as Command, ex as ConfirmationDialog, lS as CopyableEntry, OT as DEFAULT_TABLE_HEADER_ROW_HEIGHT, DT as DEFAULT_TABLE_ROW_HEIGHT, CS as DatePicker, $b as Dialog, US as DittoLogo, TE as DropdownMenu, WS as EmptyState, Iw as FileUploader, Ww as Form, Wt as Heading, G as Icon, qw as Image, qx as Input, Jx as InputConfirmation, Wx as InputError, Jw as JSONKeyPicker, Ux as Label, eT as Link, cS as MASKED_VALUE, nT as MessagePanel, vS as Popover, rT as ProgressBar, Fw as ProgressSpinner, Kw as RadioButtonList, wS as RangeDatePicker, VS as RangeDatePickerQuickSelect, SS as RawDatePicker, Kx as RawInput, $w as RawLink, RS as RawSelect, Xx as RawTextarea, kE as ResizableHandle, OE as ResizablePanel, DE as ResizablePanelGroup, zS as Select, aT as Separator, _T as Sheet, yT as SlideOverPanel, Ht as SvgOnly, Vw as Switch, kT as Table, ST as TableActionsHeaderButton, TT as TableCell, bT as TablePageSelector, xT as TablePageSizeSelector, CT as TablePaginationControls, AT as TableRow, zT as Tabs, Zx as TextArea, BT as TextDownload, ZT as ThemeProvider, $T as Toaster, aE as Tooltip, oE as TwoColumn, sE as buttonGroupVariants, Bt as buttonVariants, W as classes, HS as configurationHash, rt as createColumnHelper, MT as getCommonPinningStyles, Gx as inputVariants, Yw as isSupportedJSONPickerType, VT as isTheme, Hx as labelVariants, kt as noop, At as randomU64, NT as renderUnknownValue, jT as resolveTablePageSizeChanged, jt as stringify, Yx as textAreaVariants, Xw as toSupportedJSONPickerType, Ft as truncate, Pt as truncateString, fb as useAnimatedSetState, mb as useAnimationCycle, hb as useBodyLock, gb as useCopyToClipboard, _b as useCurrentOrPrevious, Sb as useDetectTheme, Cb as useDevicePlatform, wb as useLogSpan, Ob as useMediaMatch, Ab as usePopper, pb as usePrevious, jb as usePreviousIsDifferent, Mb as useScript, Nb as useSize, QT as useTheme, GT as useThemeStore, It as uuid, Lt as validations };

//# sourceMappingURL=index.js.map