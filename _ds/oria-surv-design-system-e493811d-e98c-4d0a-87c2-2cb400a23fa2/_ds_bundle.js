/* @ds-bundle: {"format":4,"namespace":"OriaSurvDesignSystem_e49381","components":[{"name":"CategoryTile","sourcePath":"components/cards/CategoryTile.jsx"},{"name":"NotificationCard","sourcePath":"components/cards/NotificationCard.jsx"},{"name":"OrderCard","sourcePath":"components/cards/OrderCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"ServiceListItem","sourcePath":"components/cards/ServiceListItem.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedTabs","sourcePath":"components/forms/SegmentedTabs.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCategoryCard","sourcePath":"components/marketing/ServiceCategoryCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"}],"sourceHashes":{"components/cards/CategoryTile.jsx":"5f06e74139fe","components/cards/NotificationCard.jsx":"0f56f90f953d","components/cards/OrderCard.jsx":"9a6677f9bb50","components/cards/ServiceCard.jsx":"a8fbf05eb6fa","components/cards/ServiceListItem.jsx":"5d54179586d1","components/core/Badge.jsx":"e1b28228bc79","components/core/Button.jsx":"a4f651ab4df8","components/core/Icon.jsx":"29a1dd9ac396","components/core/IconButton.jsx":"e9b5add994e2","components/core/Price.jsx":"f8c62500058e","components/core/Rating.jsx":"7d75ebe0a48a","components/feedback/Dialog.jsx":"0e6bcb0de9b6","components/forms/Input.jsx":"3acdec40dbac","components/forms/SegmentedTabs.jsx":"8d57807ddb17","components/marketing/SectionHeading.jsx":"7deed77a0118","components/marketing/ServiceCategoryCard.jsx":"31a97698a472","components/marketing/StatBlock.jsx":"02f0ffee9fbb","components/marketing/Testimonial.jsx":"05470e8d712e","components/navigation/AppHeader.jsx":"2c252bf75fdd","components/navigation/BottomNav.jsx":"450b3293b0df","ui_kits/app/BookingScreen.jsx":"621132fda7e7","ui_kits/app/HomeScreen.jsx":"29f6ecc08091","ui_kits/app/NotificationsScreen.jsx":"76e0b04bf79d","ui_kits/app/OrdersScreen.jsx":"2d14890787d9","ui_kits/app/Phone.jsx":"58b98b7c427b","ui_kits/app/data.js":"41e08f42b5fe","ui_kits/website/Header.jsx":"6f10ae7acc4c","ui_kits/website/Hero.jsx":"f72210107135","ui_kits/website/Sections.jsx":"397f58b1a4be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OriaSurvDesignSystem_e49381 = window.OriaSurvDesignSystem_e49381 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const T = {
  discount: {
    bg: 'var(--brand-primary)',
    fg: '#fff',
    r: 999
  },
  offer: {
    bg: 'var(--brand-primary)',
    fg: '#fff',
    r: 8
  },
  progress: {
    bg: 'var(--status-progress-bg)',
    fg: 'var(--status-progress-fg)',
    r: 999
  },
  done: {
    bg: 'var(--status-done-bg)',
    fg: 'var(--status-done-fg)',
    r: 999
  },
  pending: {
    bg: 'var(--status-pending-bg)',
    fg: 'var(--status-pending-fg)',
    r: 999
  },
  cancelled: {
    bg: 'var(--status-cancel-bg)',
    fg: 'var(--status-cancel-fg)',
    r: 999
  },
  tint: {
    bg: 'var(--surface-tint)',
    fg: 'var(--brand-primary)',
    r: 999
  }
};
function Badge({
  tone = 'discount',
  children,
  style
}) {
  const t = T[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 12px',
      borderRadius: t.r,
      background: t.bg,
      color: t.fg,
      font: '600 12px/1 var(--font-ui)',
      letterSpacing: '.01em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: "os-icon",
    style: {
      width: size,
      height: size,
      color,
      '--icon': `url(${CDN}${name}.svg)`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/CategoryTile.jsx
try { (() => {
function CategoryTile({
  label,
  labelAr,
  image,
  icon,
  selected,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 104,
      height: 112,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: 8,
      borderRadius: 18,
      cursor: 'pointer',
      background: '#fff',
      border: `1.5px solid ${selected ? 'var(--lavender-300)' : 'transparent'}`,
      boxShadow: selected ? 'none' : 'var(--shadow-card)',
      transform: h ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: 52,
      height: 44,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || 'layout-grid',
    size: 34,
    color: "var(--brand-primary)"
  }), labelAr && /*#__PURE__*/React.createElement("span", {
    dir: "rtl",
    style: {
      font: '600 11px/1.1 var(--font-arabic)',
      color: 'var(--brand-primary)'
    }
  }, labelAr), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/1.15 var(--font-ui)',
      color: 'var(--brand-primary)',
      textAlign: 'center'
    }
  }, label));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const S = {
  sm: {
    h: 36,
    px: 14,
    fs: 13,
    r: 8
  },
  md: {
    h: 48,
    px: 20,
    fs: 15,
    r: 10
  },
  lg: {
    h: 56,
    px: 28,
    fs: 16,
    r: 12
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  full,
  disabled,
  children,
  onClick,
  style
}) {
  const s = S[size];
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const v = {
    primary: {
      background: p ? 'var(--brand-primary-press)' : h ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: h ? 'var(--surface-tint-soft)' : 'var(--white)',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--brand-primary)'
    },
    soft: {
      background: h ? 'var(--lavender-200)' : 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      border: '1.5px solid transparent'
    },
    ghost: {
      background: h ? 'var(--surface-tint-soft)' : 'transparent',
      color: 'var(--brand-primary)',
      border: '1.5px solid var(--border-subtle)'
    },
    link: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1.5px solid transparent',
      padding: 0,
      height: 'auto'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: s.r,
      font: `600 ${s.fs}px/1 var(--font-ui)`,
      letterSpacing: '.01em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      width: full ? '100%' : undefined,
      transition: 'background var(--dur-fast), transform var(--dur-fast)',
      transform: p && !disabled ? 'scale(.98)' : 'none',
      ...v,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 1
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/NotificationCard.jsx
try { (() => {
function NotificationCard({
  title,
  time,
  body,
  accepted,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      boxShadow: 'var(--shadow-card)',
      borderLeft: '3px solid var(--brand-primary)',
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/1.25 var(--font-ui)',
      color: 'var(--text-strong)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, title, accepted && /*#__PURE__*/React.createElement("span", {
    "aria-label": "accepted",
    style: {
      width: 18,
      height: 18,
      borderRadius: 4,
      background: 'var(--green-600)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 12px/1 var(--font-ui)'
    }
  }, "\u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 12px/1 var(--font-ui)',
      color: 'var(--brand-primary)',
      whiteSpace: 'nowrap'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.45 var(--font-ui)',
      color: 'var(--gray-600)'
    }
  }, body), action && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    full: true,
    size: "md",
    onClick: onAction,
    style: {
      marginTop: 4,
      height: 44
    }
  }, action));
}
Object.assign(__ds_scope, { NotificationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/NotificationCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/OrderCard.jsx
try { (() => {
function OrderCard({
  title,
  icon = 'paintbrush',
  vendor,
  when,
  price,
  proposed,
  status = 'In Progress',
  tone = 'progress',
  onDetails
}) {
  const row = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    font: '500 14px/1.3 var(--font-ui)',
    color: 'var(--gray-700)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 18,
      boxShadow: 'var(--shadow-card)',
      borderTop: '5px solid var(--brand-primary)',
      padding: '16px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      font: '600 17px/1.2 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone
  }, status)), vendor && /*#__PURE__*/React.createElement("div", {
    style: row
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "store",
    size: 16,
    color: "var(--gray-500)"
  }), vendor), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-clock",
    size: 16,
    color: "var(--gray-500)"
  }), when), price != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px/1 var(--font-ui)',
      color: 'var(--brand-primary)'
    }
  }, "BHD ", price.toFixed(3))), proposed != null && /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      justifyContent: 'space-between',
      color: 'var(--gray-500)'
    }
  }, "Proposed Price:", /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px/1 var(--font-ui)',
      color: 'var(--text-success)'
    }
  }, "BHD ", proposed.toFixed(3))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    iconRight: "chevron-right",
    full: true,
    onClick: onDetails,
    style: {
      height: 44,
      marginTop: 2
    }
  }, "View Details"));
}
Object.assign(__ds_scope, { OrderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/OrderCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  variant = 'soft',
  size = 44,
  label,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const v = {
    soft: {
      background: h ? 'var(--lavender-200)' : 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      borderRadius: 12
    },
    solid: {
      background: h ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      color: '#fff',
      borderRadius: '50%'
    },
    plain: {
      background: h ? 'var(--surface-tint-soft)' : 'transparent',
      color: 'var(--brand-primary)',
      borderRadius: 12
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      cursor: 'pointer',
      transition: 'background var(--dur-fast)',
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
function Price({
  amount,
  was,
  currency = 'BHD',
  size = 18,
  tone = 'brand',
  style
}) {
  const fmt = n => Number(n).toFixed(3);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `700 ${size}px/1.1 var(--font-ui)`,
      color: tone === 'success' ? 'var(--text-success)' : 'var(--text-price)'
    }
  }, currency, " ", fmt(amount)), was != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `500 ${Math.round(size * .72)}px/1 var(--font-ui)`,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, currency, " ", fmt(was)));
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceListItem.jsx
try { (() => {
function ServiceListItem({
  title,
  description,
  image,
  offer,
  price,
  was,
  discount = true,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      position: 'relative',
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      background: '#fff',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: 14,
      cursor: 'pointer'
    }
  }, discount && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: 'absolute',
      top: -10,
      right: 16,
      height: 22,
      fontSize: 11
    }
  }, "Discount"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 92,
      height: 84,
      flex: 'none',
      borderRadius: 14,
      background: `var(--surface-tint) center/cover url(${image || ''})`
    }
  }, offer && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "offer",
    style: {
      position: 'absolute',
      left: 6,
      top: 8,
      height: 20,
      fontSize: 10,
      padding: '0 7px'
    }
  }, offer)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.2 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-ui)',
      color: 'var(--text-muted)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    was: was,
    size: 15
  })), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    size: 40,
    style: {
      alignSelf: 'center'
    }
  }));
}
Object.assign(__ds_scope, { ServiceListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceListItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  count = 0,
  size = 14
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      font: `500 ${size}px/1 var(--font-ui)`,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: size + 2,
    style: {
      background: 'var(--rating-star)'
    }
  }), value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  image,
  vendorLogo,
  rating = 0,
  reviews = 0,
  price,
  was,
  discount = true,
  onClick,
  width = 240
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width,
      flex: 'none',
      background: '#fff',
      borderRadius: 22,
      boxShadow: 'var(--shadow-card)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: 'var(--surface-tint)',
      overflow: 'hidden',
      flex: 'none'
    }
  }, vendorLogo && /*#__PURE__*/React.createElement("img", {
    src: vendorLogo,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px/1.2 var(--font-ui)',
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 12
  }))), discount && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      height: 22,
      fontSize: 11,
      padding: '0 10px'
    }
  }, "Discount")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: width * .58,
      borderRadius: 14,
      background: `var(--surface-tint) center/cover url(${image || ''})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: price,
    was: was,
    size: 16,
    style: {
      flexDirection: 'column',
      gap: 2,
      alignItems: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    size: 40
  })));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  onCancel,
  onConfirm,
  inline
}) {
  if (!open) return null;
  const card = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      width: '100%',
      maxWidth: 340,
      background: '#fff',
      borderRadius: 22,
      boxShadow: 'var(--shadow-dialog)',
      padding: '22px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.25 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px/1.5 var(--font-ui)',
      color: 'var(--gray-700)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    full: true,
    onClick: onCancel,
    style: {
      height: 44
    }
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    full: true,
    onClick: onConfirm,
    style: {
      height: 44
    }
  }, confirmLabel)));
  if (inline) return card;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onCancel,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, card));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  icon,
  multiline,
  rows = 4,
  type = 'text',
  style
}) {
  const [f, setF] = React.useState(false);
  const box = {
    width: '100%',
    border: `1.5px solid ${f ? 'var(--brand-primary)' : 'var(--lavender-300)'}`,
    borderRadius: 12,
    background: '#fff',
    boxShadow: f ? 'var(--ring-focus)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
    display: 'flex',
    alignItems: multiline ? 'flex-start' : 'center',
    gap: 10,
    padding: multiline ? '14px 16px' : '0 16px',
    minHeight: multiline ? undefined : 52
  };
  const fld = {
    flex: 1,
    border: 0,
    outline: 0,
    background: 'transparent',
    font: '400 15px/1.45 var(--font-ui)',
    color: 'var(--text-strong)',
    resize: 'vertical',
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px/1.2 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: box
  }, multiline ? /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: fld
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: fld
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--gray-500)"
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedTabs.jsx
try { (() => {
function SegmentedTabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 6,
      padding: 6,
      border: '1.5px solid var(--border-subtle)',
      borderRadius: 16,
      background: '#fff',
      ...style
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: 46,
        border: 0,
        borderRadius: 12,
        cursor: 'pointer',
        background: on ? 'var(--surface-tint)' : 'transparent',
        color: on ? 'var(--brand-primary)' : 'var(--gray-600)',
        font: `${on ? 600 : 500} 15px/1 var(--font-ui)`,
        transition: 'background var(--dur-base)'
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accent,
  accentTone = 'orchid',
  lede,
  align = 'left',
  size = 'm',
  brackets
}) {
  const fs = {
    xl: 'var(--fs-display-xl)',
    l: 'var(--fs-display-l)',
    m: 'var(--fs-display-m)',
    s: 'var(--fs-display-s)'
  }[size];
  const ac = accentTone === 'periwinkle' ? 'var(--brand-accent-alt)' : accentTone === 'purple' ? 'var(--brand-primary)' : 'var(--brand-accent)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 30,
      padding: '0 14px',
      borderRadius: 999,
      background: 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      font: '600 13px/1 var(--font-ui)',
      letterSpacing: '.02em'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `700 ${fs}/1.08 var(--font-display)`,
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title, accent && /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: ac
    }
  }, brackets ? '[' + accent + ']' : accent))), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      font: '400 19px/1.45 var(--font-display)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCategoryCard.jsx
try { (() => {
function ServiceCategoryCard({
  icon,
  title,
  description,
  items = [],
  soon
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      background: '#fff',
      border: `1px solid ${h ? 'var(--lavender-300)' : 'var(--border-subtle)'}`,
      borderRadius: 20,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: h ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, soon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20,
      height: 24,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 10px',
      borderRadius: 999,
      background: 'var(--brand-primary)',
      color: '#fff',
      font: '600 11px/1 var(--font-ui)'
    }
  }, "Coming Soon"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '600 19px/1.25 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/1.55 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, description), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: '500 14px/1.3 var(--font-body)',
      color: 'var(--gray-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--brand-accent)"
  }), i))));
}
Object.assign(__ds_scope, { ServiceCategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 40px/1 var(--font-display)',
      letterSpacing: '-.02em',
      color: 'var(--brand-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.3 var(--font-ui)',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function Testimonial({
  category,
  quote,
  name,
  role
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 20,
      boxShadow: 'var(--shadow-card)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      height: 26,
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 12px',
      borderRadius: 999,
      background: 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      font: '600 12px/1 var(--font-ui)'
    }
  }, category), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--gray-700)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 16px/1 var(--font-ui)'
    }
  }, name[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: '600 15px/1.2 var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.3 var(--font-ui)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function AppHeader({
  title,
  onBack,
  right,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr 44px',
      alignItems: 'center',
      height: 56,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, onBack && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    variant: "plain",
    onClick: onBack,
    label: "Back"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 22px/1 var(--font-ui)',
      color: 'var(--brand-primary)',
      textAlign: align
    }
  }, title), /*#__PURE__*/React.createElement("div", null, right));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: 4,
      height: 72,
      padding: '0 14px',
      background: '#fff',
      borderRadius: 28,
      boxShadow: 'var(--shadow-nav)'
    }
  }, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      "aria-label": it.label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        height: 48,
        padding: on ? '0 22px' : '0 12px',
        border: 0,
        borderRadius: 999,
        cursor: 'pointer',
        background: on ? 'var(--surface-tint)' : 'transparent',
        color: 'var(--brand-primary)',
        font: '600 15px/1 var(--font-ui)',
        transition: 'all var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22,
      style: on ? {} : {
        opacity: .85
      }
    }), on && it.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BookingScreen.jsx
try { (() => {
function BookingScreen({
  go,
  service
}) {
  const s = service || window.OS_DATA.top[1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Booking Details",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      background: '#fff',
      borderRadius: 18,
      boxShadow: 'var(--shadow-card)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 84,
      flex: 'none',
      borderRadius: 12,
      background: `var(--surface-tint) center/cover url(${s.img})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-ui)',
      color: 'var(--gray-500)',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Price, {
    amount: s.price,
    size: 16
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "clock",
    size: "sm",
    style: {
      height: 42
    }
  }, "Propose Alternate Time")), /*#__PURE__*/React.createElement(Input, {
    label: "Select Date",
    placeholder: "dd/mm/yyyy",
    icon: "calendar-days"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Select Time",
    placeholder: "00:00",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Client Comments",
    placeholder: "Add your comments here...",
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement(Button, {
    full: true,
    size: "lg",
    onClick: () => go('orders')
  }, "Confirm Booking")));
}
window.BookingScreen = BookingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BookingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const D = window.OS_DATA;
  const [cat, setCat] = React.useState(0);
  const H = ({
    t,
    link
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      margin: '22px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 19px var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, t), link && /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    iconRight: "chevron-right"
  }, link));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      font: '500 13px var(--font-ui)',
      color: 'var(--gray-600)'
    }
  }, "Select Location ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-ui)',
      color: 'var(--text-strong)',
      marginTop: 2
    }
  }, "1552, 1010, Road 1078, Hamala, Home")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "solid",
    size: 46,
    onClick: () => go('notifications')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      padding: '18px 20px 8px'
    }
  }, D.categories.map((c, i) => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.label,
    label: c.label,
    labelAr: c.ar,
    icon: c.icon,
    selected: cat === i,
    onClick: () => setCat(i)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    iconRight: "chevron-right"
  }, "View All")), /*#__PURE__*/React.createElement(H, {
    t: "Our Top Pick"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      padding: '4px 20px 14px'
    }
  }, D.top.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    title: s.title,
    image: s.img,
    price: s.price,
    was: s.was,
    width: 230,
    onClick: () => go('booking', s)
  }))), /*#__PURE__*/React.createElement(H, {
    t: "Recommended for You",
    link: "See All"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: '8px 20px'
    }
  }, D.top.map(s => /*#__PURE__*/React.createElement(ServiceListItem, {
    key: s.id,
    title: s.title,
    description: s.desc,
    image: s.img,
    offer: s.offer,
    price: s.price,
    was: s.was,
    onClick: () => go('booking', s)
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/NotificationsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NotificationsScreen({
  go,
  onPaid
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppHeader, {
    title: "Notifications",
    onBack: () => go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, window.OS_DATA.notifications.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.date
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 15px var(--font-ui)',
      color: 'var(--text-strong)',
      marginTop: 8
    }
  }, g.date), g.items.map((n, i) => /*#__PURE__*/React.createElement(NotificationCard, _extends({
    key: i
  }, n, {
    onAction: () => setOpen(true)
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Complete Payment",
    confirmLabel: "Pay Now",
    onCancel: () => setOpen(false),
    onConfirm: () => {
      setOpen(false);
      onPaid();
      go('orders');
    }
  }, "Your booking has been accepted. Pay now to confirm and hold the amount securely until the service is completed."));
}
window.NotificationsScreen = NotificationsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/NotificationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/OrdersScreen.jsx
try { (() => {
function OrdersScreen({
  go,
  paid
}) {
  const [t, setT] = React.useState('on');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 28px/1.2 var(--font-ui)',
      color: 'var(--brand-primary)'
    }
  }, "My Orders"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 14px var(--font-ui)',
      color: 'var(--gray-500)',
      margin: '4px 0 18px'
    }
  }, "Here's what's happening with your orders."), /*#__PURE__*/React.createElement(SegmentedTabs, {
    value: t,
    onChange: setT,
    items: [{
      value: 'on',
      label: 'Ongoing Order',
      icon: 'clock'
    }, {
      value: 'past',
      label: 'Past Order',
      icon: 'calendar'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, t === 'on' ? /*#__PURE__*/React.createElement(OrderCard, {
    title: "Cleaning 1BHK",
    vendor: "Stafco",
    when: "Sat, Sep 5 \u2022 12:32 AM",
    price: 8.38,
    proposed: 9,
    status: paid ? 'Paid' : 'In Progress',
    tone: paid ? 'done' : 'progress',
    onDetails: () => go('notifications')
  }) : /*#__PURE__*/React.createElement(OrderCard, {
    title: "AC Servicing",
    icon: "air-vent",
    vendor: "CoolTech",
    when: "Mon, Aug 17 \u2022 10:00 AM",
    price: 15,
    status: "Completed",
    tone: "done"
  })));
}
window.OrdersScreen = OrdersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/OrdersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Phone.jsx
try { (() => {
function Phone({
  children,
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      borderRadius: 54,
      background: '#111',
      padding: 12,
      boxShadow: '0 30px 80px rgba(75,0,130,.18)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 42,
      background: '#fff',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px',
      font: '600 16px var(--font-ui)',
      color: '#111'
    }
  }, /*#__PURE__*/React.createElement("span", null, "12:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 110,
      height: 32,
      borderRadius: 20,
      background: '#111',
      position: 'absolute',
      left: '50%',
      top: 10,
      transform: 'translateX(-50%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: nav ? 110 : 20
    }
  }, children), nav && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 18
    }
  }, nav)));
}
window.Phone = Phone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
window.OS_DATA = {
  categories: [{
    label: 'All Services',
    ar: 'الكل',
    icon: 'layout-grid'
  }, {
    label: 'Air Conditioning',
    ar: 'خدمات التكييف',
    icon: 'air-vent'
  }, {
    label: 'Home Spa',
    ar: 'سبا منزلي',
    icon: 'flower-2'
  }, {
    label: 'Disinfection',
    ar: 'خدمات التعقيم',
    icon: 'spray-can'
  }, {
    label: 'Plumbing',
    ar: 'السباكة',
    icon: 'wrench'
  }],
  top: [{
    id: 'hc',
    title: 'Home Cleaning',
    img: 'https://oriasurv.com/Assets/Images/banner1.webp',
    price: 18.4,
    was: 20,
    desc: '2 Hours 1 Cleaner · Single Visit - With Cleaning Material',
    offer: '8% OFF'
  }, {
    id: 'rc',
    title: 'Roof Cleaning',
    img: 'https://oriasurv.com/Assets/Images/banner2.webp',
    price: 18,
    was: 20,
    desc: "Restore your home's curb appeal and protect its structure with our professional roof cleaning services.",
    offer: '10% OFF'
  }],
  notifications: [{
    date: '09/09/2026',
    items: [{
      title: 'Vendor Response',
      time: '02:36 AM',
      body: 'Vendor approved your time slot with additional price of 9.'
    }, {
      title: 'Booking Accepted',
      accepted: true,
      time: '02:36 AM',
      body: 'Your booking for Cleaning 1BHK on Sat Sep 05 2026 at 00:32 has been accepted by the vendor.',
      action: 'Pay Now'
    }]
  }, {
    date: '09/03/2026',
    items: [{
      title: 'Vendor Response',
      time: '09:13 PM',
      body: 'Vendor approved your comment.'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function SiteHeader() {
  const links = ['Home', 'About', 'How it Works', 'Services', 'FAQ', 'Contact Us'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'logo.webp',
    alt: "Oria Surv",
    style: {
      height: 44
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(/ /g, '-'),
    style: {
      font: '500 15px var(--font-ui)',
      color: 'var(--gray-700)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Download App")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  const chips = ['HVAC', 'MEP', 'Construction', 'Facility Mgmt', 'Maintenance', 'Cleaning'];
  const [b, setB] = React.useState(1);
  React.useEffect(() => {
    const t = setInterval(() => setB(x => x % 4 + 1), 4000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      background: 'var(--page-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 24px 80px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Bahrain's #1 Multi-Service Marketplace",
    title: "One Platform, All Services",
    accent: "At Your Fingertips",
    size: "l",
    lede: "Book verified professionals for HVAC, MEP, Construction, Facility Management, Maintenance, Cleaning and more \u2014 all from a single trusted platform."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    tone: "tint",
    style: {
      height: 32,
      fontSize: 13,
      padding: '0 14px'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'play-store.webp',
    alt: "Get it on Google Play",
    style: {
      height: 50
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'app-store.webp',
    alt: "Download on the App Store",
    style: {
      height: 50
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3.4',
      borderRadius: 28,
      background: `var(--lavender-100) center/cover url(${IMG}banner${b}.webp)`,
      boxShadow: 'var(--shadow-raised)',
      transition: 'background-image .6s'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 24px 64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, [['10,000+', 'Happy Clients'], ['500+', 'Verified Professionals'], ['4.9/5', 'Average Rating'], ['8+', 'Service Categories']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: '#fff',
      borderRadius: 20,
      padding: 24,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: v,
    label: l
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const Wrap = ({
  id,
  bg = '#fff',
  children
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  style: {
    background: bg
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '96px 24px'
  }
}, children));
function About() {
  const why = [['shield-check', 'Verified Vendors', 'All professionals are background-checked, licensed, and verified across every category'], ['smartphone', 'Easy Booking', 'Request any service in minutes through our user-friendly mobile app'], ['receipt', 'Transparent Pricing', 'Compare quotes and pay securely with no hidden fees or surprises']];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      aspectRatio: '1/1',
      background: `var(--lavender-100) center/cover url(${IMG}about-us.webp)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About the Platform",
    title: "What is",
    accent: "Oria Surv?",
    size: "m",
    lede: "Bahrain's leading on-demand multi-service marketplace connecting property owners and businesses with verified professionals across HVAC, MEP, Construction, Facility Management, Maintenance, Cleaning, and more."
  }), why.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      flex: 'none',
      borderRadius: 14,
      background: 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, d)))))));
}
function Services() {
  const S = [['air-vent', 'HVAC Services', 'Heating, Ventilation & Air Conditioning installation, maintenance, and repair for residential and commercial properties', ['AC installation & repair', 'Duct cleaning & maintenance', 'Ventilation systems']], ['plug-zap', 'MEP Services', 'Mechanical, Electrical & Plumbing engineering solutions for new builds, fit-outs, and ongoing maintenance', ['Electrical wiring & panels', 'Plumbing & drainage', 'MEP design & consultation']], ['hard-hat', 'Construction', 'Full-cycle construction services from groundwork to finishing, managed by certified contractors', ['Civil construction', 'Interior fit-outs', 'Renovation & remodeling']], ['building-2', 'Facility Management', 'Comprehensive integrated facility management for commercial buildings, compounds, and large properties', ['Preventive maintenance', 'Security management', 'Compliance & reporting']], ['wrench', 'Maintenance Services', 'Scheduled and on-demand maintenance to keep assets in top condition', ['General repairs', 'Painting & waterproofing', 'Carpentry & metalwork']], ['sparkles', 'Cleaning Services', 'From regular housekeeping to deep cleaning and sanitization', ['Regular & deep cleaning', 'Post-construction cleanup', 'Sanitization services']], ['handshake', 'Third-Party Services', 'A growing catalog of specialized providers for niche needs', ['Pest control', 'Landscaping & gardening', 'Pool maintenance']], ['rocket', 'More Coming Soon', 'New service categories are regularly added', ['IT & tech support', 'Solar & renewable energy', 'Smart home automation'], true]];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "services",
    bg: "var(--page-50)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Service Categories",
    title: "All Services,",
    accent: "One Platform",
    lede: "From HVAC and MEP to Facility Management and Cleaning \u2014 find verified professionals for every service your property or business needs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
      gap: 20,
      marginTop: 48
    }
  }, S.map(([i, t, d, it, soon]) => /*#__PURE__*/React.createElement(ServiceCategoryCard, {
    key: t,
    icon: i,
    title: t,
    description: d,
    items: it,
    soon: soon
  }))));
}
function HowItWorks() {
  const st = [['01', 'Choose Your Service', 'Browse our wide range of service categories and select the exact service you need.'], ['02', 'Compare & Book', 'Review vendor profiles, compare quotes, check ratings and reviews. Confirm with secure escrow payments.'], ['03', 'Get It Done Right', 'Your verified professional arrives on time. Rate the service and pay only when you\'re satisfied.']];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "how-it-works"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Simple Process",
    title: "How It",
    accent: "Works",
    lede: "Getting professional services has never been easier. Three simple steps and you're all set."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 48
    }
  }, st.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: 'var(--surface-tint-soft)',
      borderRadius: 24,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 44px/1 var(--font-display)',
      color: 'var(--lavender-300)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.55 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 32,
      marginTop: 36
    }
  }, [['lock', 'Secure Payments'], ['badge-check', 'Verified Vendors'], ['star', 'Rated Services'], ['phone', '24/7 Support']].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '500 15px var(--font-ui)',
      color: 'var(--gray-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--brand-primary)"
  }), l))));
}
function Testimonials() {
  const T = [['Facility Management', 'Oria Surv has completely transformed how we manage our commercial portfolio. We now handle HVAC maintenance, cleaning, and facility management all through one app.', 'Khalid Al-Rashid', 'Property Manager · Manama'], ['Cleaning Services', 'Booking was incredibly simple and the team arrived right on time. The deep cleaning service was thorough and professional.', 'Sarah Al-Mahmoud', 'Homeowner · Juffair'], ['HVAC Services', 'My AC was down in the peak of summer. A certified HVAC technician arrived within the hour. Transparent pricing, no hidden costs.', 'Mohammed Al-Baker', 'Homeowner · Saar']];
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "stories",
    bg: "var(--page-50)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Client Stories",
    title: "What Our",
    accent: "Clients Say",
    lede: "Trusted by homeowners, property managers, and businesses across Bahrain."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20,
      marginTop: 48
    }
  }, T.map(([c, q, n, r]) => /*#__PURE__*/React.createElement(Testimonial, {
    key: n,
    category: c,
    quote: q,
    name: n,
    role: r
  }))));
}
function FAQ() {
  const Q = [['How are vendors verified?', 'Every professional is background-checked, licensed and verified before serving your property.'], ['How do payments work?', 'Pay securely in-app. The amount is held in escrow and released when the job is done.'], ['Which areas do you cover?', 'We serve all of the Kingdom of Bahrain.']];
  const [o, setO] = React.useState(0);
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "faq"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    title: "Frequently Asked",
    accent: "Questions",
    lede: "Find quick answers to the most common questions before you book."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '40px auto 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, Q.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      border: '1px solid ' + (o === i ? 'var(--lavender-300)' : 'var(--border-subtle)'),
      borderRadius: 16,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setO(o === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 22px',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      font: '600 16px var(--font-ui)',
      color: 'var(--text-strong)',
      textAlign: 'left'
    }
  }, q, /*#__PURE__*/React.createElement(Icon, {
    name: o === i ? 'minus' : 'plus',
    size: 18,
    color: "var(--brand-primary)"
  })), o === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 18px',
      font: '400 15px/1.55 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, a)))));
}
function AppCTA() {
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "download"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-primary)',
      borderRadius: 32,
      padding: '56px 48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "tint",
    style: {
      height: 30,
      fontSize: 13
    }
  }, "Available on iOS & Android"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '700 44px/1.1 var(--font-display)',
      letterSpacing: '-.02em',
      color: '#fff'
    }
  }, "Book Any Service, Anytime, Anywhere"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 600,
      font: '400 18px/1.5 var(--font-display)',
      color: 'var(--lavender-200)'
    }
  }, "Download the Oria Surv app and get instant access to verified professionals across all service categories \u2014 in minutes, not days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'play-store.webp',
    alt: "Google Play",
    style: {
      height: 50
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG + 'app-store.webp',
    alt: "App Store",
    style: {
      height: 50
    }
  }))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "contact-us",
    bg: "var(--page-50)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Contact",
    accent: "Us",
    lede: "We're here to help \u2014 reach out anytime for quick support and assistance."
  }), [['mail', 'Mail', 'support@oriasurv.com'], ['phone', 'Phone', '+973 36623664'], ['map-pin', 'Office Address', 'Manama, Kingdom of Bahrain']].map(([i, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      background: 'var(--surface-tint)',
      color: 'var(--brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-ui)',
      color: 'var(--text-muted)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-ui)',
      color: 'var(--text-strong)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 24,
      boxShadow: 'var(--shadow-card)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone Number",
    placeholder: "+973"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "How can we help?",
    multiline: true,
    rows: 4
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    full: true,
    onClick: () => setSent(true)
  }, sent ? 'Message Sent' : 'Send Message'))));
}
function SiteFooter() {
  const col = (t, l) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px var(--font-ui)',
      color: '#fff',
      marginBottom: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, l.map(x => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      font: '400 14px var(--font-body)',
      color: 'var(--lavender-200)'
    }
  }, x))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--purple-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 24px 28px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: '#fff',
      borderRadius: 12,
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'logo.webp',
    alt: "Oria Surv",
    style: {
      height: 40,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.6 var(--font-body)',
      color: 'var(--lavender-200)',
      maxWidth: 300
    }
  }, "Bahrain's leading multi-service marketplace \u2014 connecting property owners and businesses with verified professionals across all service categories.")), col('Our Services', ['HVAC Services', 'MEP Services', 'Construction', 'Facility Management', 'Cleaning Services']), col('Quick Links', ['Home', 'How it Works', 'About Us', 'FAQ', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy']), col('Contact Us', ['support@oriasurv.com', 'Manama, Kingdom of Bahrain', '+973 36623664'])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '20px 24px 32px',
      borderTop: '1px solid rgba(255,255,255,.12)',
      font: '400 13px var(--font-body)',
      color: 'var(--lavender-300)'
    }
  }, "\xA9 2025 Oria Surv. All rights reserved."));
}
Object.assign(window, {
  About,
  Services,
  HowItWorks,
  Testimonials,
  FAQ,
  AppCTA,
  Contact,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.NotificationCard = __ds_scope.NotificationCard;

__ds_ns.OrderCard = __ds_scope.OrderCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ServiceListItem = __ds_scope.ServiceListItem;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCategoryCard = __ds_scope.ServiceCategoryCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.BottomNav = __ds_scope.BottomNav;

})();
