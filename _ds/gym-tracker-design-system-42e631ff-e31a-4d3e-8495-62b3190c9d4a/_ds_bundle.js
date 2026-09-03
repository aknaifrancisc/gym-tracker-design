/* @ds-bundle: {"format":4,"namespace":"GymTrackerDesignSystem_42e631","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AiBubble","sourcePath":"components/tracking/AiBubble.jsx"},{"name":"MacroBar","sourcePath":"components/tracking/MacroBar.jsx"},{"name":"ProgressRing","sourcePath":"components/tracking/ProgressRing.jsx"},{"name":"SetRow","sourcePath":"components/tracking/SetRow.jsx"},{"name":"StatTile","sourcePath":"components/tracking/StatTile.jsx"},{"name":"TrendBars","sourcePath":"components/tracking/TrendBars.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"223a2ce52d41","components/core/Badge.jsx":"553a4b3c1d5b","components/core/Button.jsx":"ab8ff71dce1a","components/core/Card.jsx":"d75b067b7980","components/core/Icon.jsx":"807f35f91928","components/core/IconButton.jsx":"9e50446d9a02","components/core/Tag.jsx":"ec9c8cdb8ce1","components/feedback/Dialog.jsx":"18189fd823bd","components/feedback/ProgressBar.jsx":"6344283476e3","components/feedback/Toast.jsx":"074eeb352aa9","components/feedback/Tooltip.jsx":"542cb315ea5d","components/forms/Checkbox.jsx":"a8da954e0b96","components/forms/Input.jsx":"f6ce7cafa154","components/forms/Radio.jsx":"2e3011814660","components/forms/Select.jsx":"8667c160b5f5","components/forms/Stepper.jsx":"921b2db82965","components/forms/Switch.jsx":"cc2ce7700d51","components/navigation/NavItem.jsx":"63226fd22878","components/navigation/TabBar.jsx":"f669c6294910","components/navigation/Tabs.jsx":"f05af0aa1eae","components/tracking/AiBubble.jsx":"d74d5d3033f1","components/tracking/MacroBar.jsx":"76c7e29f6149","components/tracking/ProgressRing.jsx":"6c8eda016a9b","components/tracking/SetRow.jsx":"d2b8199ec5a3","components/tracking/StatTile.jsx":"ffe83fb604fe","components/tracking/TrendBars.jsx":"c5af99191549","ui_kits/app/App.jsx":"7fc4395d53b0","ui_kits/app/AppShell.jsx":"85d05381b848","ui_kits/app/CoachScreen.jsx":"4f8adec65a18","ui_kits/app/LogSheet.jsx":"171b7165d18b","ui_kits/app/NutritionScreen.jsx":"9796acd90037","ui_kits/app/TodayScreen.jsx":"34c82e9a2339","ui_kits/app/WorkoutScreen.jsx":"721d627395aa","ui_kits/dashboard/Dashboard.jsx":"c16d6914dd40","ui_kits/dashboard/DashboardShell.jsx":"4586e3207b87","ui_kits/dashboard/OverviewScreen.jsx":"a7dec2a29788","ui_kits/dashboard/PlanScreen.jsx":"bfb7614d158a","ui_kits/dashboard/SettingsScreen.jsx":"4959bc518577","ui_kits/marketing/Features.jsx":"a4483b7e052b","ui_kits/marketing/Hero.jsx":"59fd9d71f0a3","ui_kits/marketing/Pricing.jsx":"455a028c810f","ui_kits/marketing/Site.jsx":"fb4fc103169a","ui_kits/marketing/SiteFooter.jsx":"21238dfafbb0","ui_kits/marketing/SiteHeader.jsx":"978bde6f7168"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GymTrackerDesignSystem_42e631 = window.GymTrackerDesignSystem_42e631 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar(props) {
  const size = props.size || 40;
  const cls = ['gt-avatar'];
  if (props.className) cls.push(props.className);
  const style = Object.assign({
    width: size,
    height: size,
    fontSize: Math.round(size * 0.38) + 'px',
    background: props.tone === 'brand' ? 'var(--blue-500)' : 'var(--ink-900)'
  }, props.style);
  if (props.src) {
    return React.createElement('img', {
      className: cls.join(' '),
      src: props.src,
      alt: props.name || '',
      style: style
    });
  }
  const initials = (props.name || '').split(' ').filter(Boolean).slice(0, 2).map(function (w) {
    return w[0].toUpperCase();
  }).join('');
  return React.createElement('div', {
    className: cls.join(' '),
    style: style,
    'aria-hidden': !props.name
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card(props) {
  const cls = ['gt-card'];
  if (props.variant && props.variant !== 'default') cls.push('gt-card--' + props.variant);
  if (props.interactive) cls.push('gt-card--interactive');
  if (props.className) cls.push(props.className);
  const pad = props.padding === 'none' ? 0 : props.padding === 'lg' ? 'var(--pad-card-lg)' : props.padding === 'sm' ? 'var(--space-4)' : 'var(--pad-card)';
  return React.createElement('div', {
    className: cls.join(' '),
    onClick: props.onClick,
    style: Object.assign({
      padding: pad
    }, props.style)
  }, props.children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Icons come from Lucide (loaded as a UMD script by the host page). We render
   the icon's node data as real inline SVG so it inherits currentColor. */
function toPascal(name) {
  return String(name).replace(/(^|[-_ ])([a-z0-9])/g, function (m, a, b) {
    return b.toUpperCase();
  });
}
function camelAttrs(attrs) {
  const out = {};
  Object.keys(attrs || {}).forEach(function (k) {
    const key = k.replace(/-([a-z])/g, function (m, c) {
      return c.toUpperCase();
    });
    out[key] = attrs[k];
  });
  return out;
}
function Icon(props) {
  const name = props.name;
  const size = props.size || 20;
  const strokeWidth = props.strokeWidth || 2;
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || null;
  const node = lib ? lib[toPascal(name)] || lib[name] : null;
  const kids = node && node[2] ? node[2] : [];
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: Object.assign({
      display: 'block',
      flex: 'none'
    }, props.style),
    className: props.className
  }, kids.map(function (c, i) {
    return React.createElement(c[0], Object.assign({
      key: i
    }, camelAttrs(c[1])));
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge(props) {
  const tone = props.tone || 'neutral';
  const cls = ['gt-badge', 'gt-badge--' + tone];
  if (props.className) cls.push(props.className);
  return React.createElement('span', {
    className: cls.join(' '),
    style: props.style
  }, props.icon ? React.createElement(__ds_scope.Icon, {
    name: props.icon,
    size: 12,
    strokeWidth: 2.5
  }) : null, props.children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button(props) {
  const variant = props.variant || 'primary';
  const size = props.size || 'md';
  const cls = ['gt-btn', 'gt-btn--' + variant, 'gt-btn--' + size];
  if (props.block) cls.push('gt-btn--block');
  if (props.className) cls.push(props.className);
  const iconSize = size === 'lg' ? 20 : 18;
  const Tag = props.href ? 'a' : 'button';
  return React.createElement(Tag, {
    className: cls.join(' '),
    href: props.href,
    type: props.href ? undefined : props.type || 'button',
    disabled: props.href ? undefined : props.disabled,
    onClick: props.onClick,
    style: props.style
  }, props.iconLeft ? React.createElement(__ds_scope.Icon, {
    name: props.iconLeft,
    size: iconSize
  }) : null, React.createElement('span', null, props.children), props.iconRight ? React.createElement(__ds_scope.Icon, {
    name: props.iconRight,
    size: iconSize
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton(props) {
  const size = props.size || 'md';
  const shape = props.shape || 'round';
  const variant = props.variant || 'ghost';
  const cls = ['gt-iconbtn', 'gt-iconbtn--' + shape, 'gt-iconbtn--' + size];
  if (variant !== 'ghost') cls.push('gt-iconbtn--' + variant);
  if (props.className) cls.push(props.className);
  const glyph = size === 'sm' ? 18 : size === 'lg' ? 24 : 20;
  return React.createElement('button', {
    className: cls.join(' '),
    type: 'button',
    'aria-label': props.label,
    disabled: props.disabled,
    onClick: props.onClick,
    style: props.style
  }, React.createElement(__ds_scope.Icon, {
    name: props.icon,
    size: glyph
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag(props) {
  const cls = ['gt-tag'];
  if (!props.onClick) cls.push('gt-tag--static');
  if (props.className) cls.push(props.className);
  return React.createElement('button', {
    className: cls.join(' '),
    type: 'button',
    'data-selected': props.selected ? 'true' : 'false',
    onClick: props.onClick,
    style: props.style
  }, props.icon ? React.createElement(__ds_scope.Icon, {
    name: props.icon,
    size: 16
  }) : null, props.children, props.count != null ? React.createElement('span', {
    style: {
      color: 'var(--text-subtle)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.count) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog(props) {
  if (!props.open) return null;
  const isSheet = props.variant === 'sheet';
  return React.createElement('div', {
    className: 'gt-scrim',
    style: Object.assign(isSheet ? {
      alignItems: 'flex-end'
    } : null, props.style),
    onClick: props.onClose
  }, React.createElement('div', {
    className: isSheet ? 'gt-sheet' : 'gt-dialog',
    onClick: function (e) {
      e.stopPropagation();
    }
  }, isSheet ? React.createElement('div', {
    style: {
      width: 40,
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--border-default)',
      margin: '0 auto var(--space-5)'
    }
  }) : null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, React.createElement('h3', {
    style: {
      font: 'var(--text-h3)'
    }
  }, props.title), props.description ? React.createElement('p', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, props.description) : null), props.onClose && !isSheet ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'Close',
    size: 'sm',
    onClick: props.onClose
  }) : null), props.children ? React.createElement('div', {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, props.children) : null, props.footer ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: isSheet ? 'stretch' : 'flex-end',
      marginTop: 'var(--space-5)'
    }
  }, props.footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar(props) {
  const max = props.max || 100;
  const pct = Math.max(0, Math.min(100, props.value / max * 100));
  const over = props.value > max;
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }, props.style)
  }, props.label || props.valueLabel ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, React.createElement('span', null, props.label), React.createElement('span', {
    style: {
      fontVariantNumeric: 'tabular-nums',
      color: over ? 'var(--text-danger)' : 'var(--text-heading)'
    }
  }, props.valueLabel)) : null, React.createElement('div', {
    className: 'gt-progress',
    style: props.thickness ? {
      height: props.thickness
    } : null,
    role: 'progressbar',
    'aria-valuenow': props.value,
    'aria-valuemax': max
  }, React.createElement('div', {
    className: 'gt-progress__fill',
    style: {
      width: pct + '%',
      background: over ? 'var(--red-500)' : props.color || 'var(--blue-500)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE_ICON = {
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-x',
  info: 'info'
};
const TONE_COLOR = {
  success: 'var(--green-500)',
  warning: 'var(--amber-500)',
  danger: 'var(--red-500)',
  info: 'var(--blue-300)'
};
function Toast(props) {
  const tone = props.tone || 'info';
  const cls = ['gt-toast'];
  if (props.appearance === 'light') cls.push('gt-toast--light');
  return React.createElement('div', {
    className: cls.join(' '),
    role: 'status',
    style: props.style
  }, React.createElement(__ds_scope.Icon, {
    name: TONE_ICON[tone],
    size: 20,
    style: {
      color: TONE_COLOR[tone],
      marginTop: 1
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-label)'
    }
  }, props.title), props.children ? React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      opacity: .75
    }
  }, props.children) : null), props.action ? React.createElement('button', {
    type: 'button',
    onClick: props.onAction,
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      font: 'var(--text-label)',
      textDecoration: 'underline',
      cursor: 'pointer',
      padding: 0
    }
  }, props.action) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip(props) {
  const [open, setOpen] = React.useState(false);
  return React.createElement('span', {
    className: 'gt-tooltip',
    onMouseEnter: function () {
      setOpen(true);
    },
    onMouseLeave: function () {
      setOpen(false);
    },
    onFocus: function () {
      setOpen(true);
    },
    onBlur: function () {
      setOpen(false);
    },
    style: props.style
  }, props.children, open || props.forceOpen ? React.createElement('span', {
    className: 'gt-tooltip__bubble',
    role: 'tooltip'
  }, props.label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox(props) {
  return React.createElement('label', {
    className: 'gt-choice',
    'data-disabled': props.disabled ? 'true' : 'false',
    style: props.style
  }, React.createElement('input', {
    type: 'checkbox',
    name: props.name,
    checked: props.checked,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    onChange: props.onChange
  }), React.createElement('span', {
    className: 'gt-box'
  }, React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 14,
    strokeWidth: 3
  })), props.children ? React.createElement('span', null, props.children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input(props) {
  const id = props.id || props.name;
  const invalid = !!props.error;
  const inputCls = ['gt-input'];
  if (props.size === 'lg') inputCls.push('gt-input--lg');
  const field = React.createElement('div', {
    className: 'gt-inputwrap'
  }, props.iconLeft ? React.createElement('span', {
    className: 'gt-inputwrap__icon'
  }, React.createElement(__ds_scope.Icon, {
    name: props.iconLeft,
    size: 18
  })) : null, React.createElement('input', {
    id: id,
    name: props.name,
    type: props.type || 'text',
    className: inputCls.join(' '),
    placeholder: props.placeholder,
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
    disabled: props.disabled,
    inputMode: props.inputMode,
    'data-invalid': invalid ? 'true' : 'false',
    style: Object.assign(props.iconLeft ? {
      paddingLeft: 'var(--space-9)'
    } : null, props.suffix ? {
      paddingRight: 'var(--space-10)'
    } : null)
  }), props.suffix ? React.createElement('span', {
    className: 'gt-inputwrap__icon gt-inputwrap__icon--right',
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-muted)'
    }
  }, props.suffix) : null);
  if (!props.label && !props.hint && !props.error) return field;
  return React.createElement('label', {
    className: 'gt-field',
    htmlFor: id
  }, props.label ? React.createElement('span', {
    className: 'gt-field__label'
  }, props.label) : null, field, props.error ? React.createElement('span', {
    className: 'gt-field__error'
  }, props.error) : props.hint ? React.createElement('span', {
    className: 'gt-field__hint'
  }, props.hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio(props) {
  return React.createElement('label', {
    className: 'gt-choice',
    'data-disabled': props.disabled ? 'true' : 'false',
    style: props.style
  }, React.createElement('input', {
    type: 'radio',
    name: props.name,
    value: props.value,
    checked: props.checked,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    onChange: props.onChange
  }), React.createElement('span', {
    className: 'gt-box gt-box--radio'
  }, React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'currentColor'
    }
  })), props.children ? React.createElement('span', null, props.children) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select(props) {
  const id = props.id || props.name;
  const control = React.createElement('div', {
    className: 'gt-inputwrap'
  }, React.createElement('select', {
    id: id,
    name: props.name,
    className: 'gt-input gt-select',
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: props.onChange,
    disabled: props.disabled
  }, (props.options || []).map(function (o, i) {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return React.createElement('option', {
      key: i,
      value: opt.value
    }, opt.label);
  })), React.createElement('span', {
    className: 'gt-inputwrap__icon gt-inputwrap__icon--right'
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 18
  })));
  if (!props.label) return control;
  return React.createElement('label', {
    className: 'gt-field',
    htmlFor: id
  }, React.createElement('span', {
    className: 'gt-field__label'
  }, props.label), control, props.hint ? React.createElement('span', {
    className: 'gt-field__hint'
  }, props.hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function Stepper(props) {
  const step = props.step || 1;
  const value = props.value;
  const dec = function () {
    if (props.onChange) props.onChange(Math.max(props.min != null ? props.min : 0, round(value - step)));
  };
  const inc = function () {
    if (props.onChange) props.onChange(Math.min(props.max != null ? props.max : Infinity, round(value + step)));
  };
  function round(n) {
    return Math.round(n * 100) / 100;
  }
  return React.createElement('div', {
    className: 'gt-stepper',
    style: props.style
  }, React.createElement('button', {
    className: 'gt-stepper__btn',
    type: 'button',
    onClick: dec,
    'aria-label': 'Decrease'
  }, '\u2212'), React.createElement('span', {
    className: 'gt-stepper__value'
  }, value, props.unit ? React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginLeft: 2
    }
  }, props.unit) : null), React.createElement('button', {
    className: 'gt-stepper__btn',
    type: 'button',
    onClick: inc,
    'aria-label': 'Increase'
  }, '+'));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch(props) {
  return React.createElement('label', {
    className: 'gt-choice',
    'data-disabled': props.disabled ? 'true' : 'false',
    style: Object.assign(props.labelFirst ? {
      justifyContent: 'space-between',
      width: '100%'
    } : null, props.style)
  }, props.labelFirst && props.children ? React.createElement('span', null, props.children) : null, React.createElement('input', {
    type: 'checkbox',
    role: 'switch',
    name: props.name,
    checked: props.checked,
    defaultChecked: props.defaultChecked,
    disabled: props.disabled,
    onChange: props.onChange
  }), React.createElement('span', {
    className: 'gt-switch'
  }, React.createElement('span', {
    className: 'gt-switch__knob'
  })), !props.labelFirst && props.children ? React.createElement('span', null, props.children) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function NavItem(props) {
  return React.createElement('button', {
    className: 'gt-navitem',
    type: 'button',
    'aria-current': props.active ? 'page' : undefined,
    onClick: props.onClick,
    style: props.style
  }, React.createElement(__ds_scope.Icon, {
    name: props.icon,
    size: 20,
    strokeWidth: props.active ? 2.4 : 2
  }), React.createElement('span', {
    style: {
      flex: 1
    }
  }, props.children), props.trailing != null ? React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-subtle)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.trailing) : null);
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
function TabBar(props) {
  return React.createElement('nav', {
    className: 'gt-tabbar',
    style: props.style
  }, (props.items || []).map(function (it, i) {
    const active = props.value === it.id;
    if (it.primary) {
      return React.createElement('button', {
        key: it.id || i,
        type: 'button',
        className: 'gt-tabbar__item',
        onClick: function () {
          if (props.onChange) props.onChange(it.id);
        },
        style: {
          position: 'relative'
        }
      }, React.createElement('span', {
        style: {
          width: 52,
          height: 52,
          borderRadius: 'var(--radius-pill)',
          background: 'var(--blue-500)',
          color: 'var(--ink-000)',
          display: 'grid',
          placeItems: 'center',
          boxShadow: 'var(--shadow-brand)',
          marginTop: -22
        }
      }, React.createElement(__ds_scope.Icon, {
        name: it.icon,
        size: 24,
        strokeWidth: 2.25
      })));
    }
    return React.createElement('button', {
      key: it.id || i,
      type: 'button',
      className: 'gt-tabbar__item',
      'aria-current': active ? 'page' : undefined,
      onClick: function () {
        if (props.onChange) props.onChange(it.id);
      }
    }, React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22,
      strokeWidth: active ? 2.4 : 2
    }), React.createElement('span', null, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs(props) {
  const cls = ['gt-tabs'];
  if (props.variant === 'underline') cls.push('gt-tabs--underline');
  return React.createElement('div', {
    className: cls.join(' '),
    role: 'tablist',
    style: props.style
  }, (props.items || []).map(function (item, i) {
    const it = typeof item === 'string' ? {
      id: item,
      label: item
    } : item;
    const selected = (props.value != null ? props.value : props.items[0].id || props.items[0]) === it.id;
    return React.createElement('button', {
      key: it.id || i,
      className: 'gt-tabs__tab',
      role: 'tab',
      type: 'button',
      'aria-selected': selected,
      onClick: function () {
        if (props.onChange) props.onChange(it.id);
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/tracking/AiBubble.jsx
try { (() => {
function AiBubble(props) {
  const isUser = props.from === 'user';
  const cls = ['gt-aibubble'];
  if (isUser) cls.push('gt-aibubble--user');
  return React.createElement('div', {
    className: cls.join(' '),
    style: props.style
  }, isUser ? React.createElement(__ds_scope.Avatar, {
    name: props.name || 'You',
    size: 32
  }) : React.createElement('span', {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--blue-500)',
      color: 'var(--ink-000)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'sparkles',
    size: 17
  })), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: isUser ? 'flex-end' : 'flex-start'
    }
  }, React.createElement('div', {
    className: 'gt-aibubble__body'
  }, props.children), props.suggestions && props.suggestions.length ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, props.suggestions.map(function (s, i) {
    return React.createElement('button', {
      key: i,
      type: 'button',
      className: 'gt-tag',
      onClick: function () {
        if (props.onSuggestion) props.onSuggestion(s);
      },
      style: {
        height: 30,
        fontSize: 'var(--fs-12)'
      }
    }, s);
  })) : null));
}
Object.assign(__ds_scope, { AiBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/AiBubble.jsx", error: String((e && e.message) || e) }); }

// components/tracking/MacroBar.jsx
try { (() => {
function MacroBar(props) {
  const items = props.items || [];
  const total = items.reduce(function (s, i) {
    return s + i.value;
  }, 0) || 1;
  return React.createElement('div', {
    className: 'gt-macro',
    style: props.style
  }, props.label ? React.createElement('div', {
    className: 'gt-macro__row'
  }, React.createElement('span', {
    style: {
      color: 'var(--text-muted)'
    }
  }, props.label), React.createElement('span', {
    style: {
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.total)) : null, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 3,
      height: props.thickness || 10
    }
  }, items.map(function (it, i) {
    return React.createElement('span', {
      key: i,
      title: it.label,
      style: {
        width: it.value / total * 100 + '%',
        background: it.color,
        borderRadius: 'var(--radius-pill)',
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    });
  })), props.showLegend === false ? null : React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      marginTop: 2
    }
  }, items.map(function (it, i) {
    return React.createElement('span', {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        font: 'var(--text-caption)',
        color: 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        width: 8,
        height: 8,
        borderRadius: 'var(--radius-pill)',
        background: it.color
      }
    }), it.label, React.createElement('span', {
      style: {
        color: 'var(--text-heading)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.display != null ? it.display : it.value + ' g'));
  })));
}
Object.assign(__ds_scope, { MacroBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/MacroBar.jsx", error: String((e && e.message) || e) }); }

// components/tracking/ProgressRing.jsx
try { (() => {
function ProgressRing(props) {
  const size = props.size || 120;
  const stroke = props.stroke || 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, (props.value || 0) / (props.max || 100)));
  return React.createElement('div', {
    style: Object.assign({
      position: 'relative',
      width: size,
      height: size,
      flex: 'none'
    }, props.style)
  }, React.createElement('svg', {
    width: size,
    height: size,
    style: {
      display: 'block',
      transform: 'rotate(-90deg)'
    }
  }, React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: 'none',
    stroke: props.trackColor || 'var(--surface-sunken)',
    strokeWidth: stroke
  }), React.createElement('circle', {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: 'none',
    stroke: props.color || 'var(--ring-move)',
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: 'stroke-dashoffset var(--dur-ring) var(--ease-out)'
    }
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      textAlign: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(size * 0.24) + 'px',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tighter)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.centerValue != null ? props.centerValue : Math.round(pct * 100) + '%'), props.centerLabel ? React.createElement('span', {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, props.centerLabel) : null));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/tracking/SetRow.jsx
try { (() => {
function SetRow(props) {
  return React.createElement('div', {
    className: 'gt-setrow',
    'data-done': props.done ? 'true' : 'false',
    style: props.style
  }, React.createElement('span', {
    style: {
      font: 'var(--text-data)',
      color: 'var(--text-subtle)'
    }
  }, props.index), React.createElement('span', {
    style: {
      font: 'var(--text-metric-sm)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.weight, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginLeft: 3
    }
  }, props.unit || 'kg')), React.createElement('span', {
    style: {
      font: 'var(--text-metric-sm)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, props.reps, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginLeft: 3
    }
  }, 'reps')), React.createElement('button', {
    type: 'button',
    onClick: props.onToggle,
    'aria-label': props.done ? 'Mark set not done' : 'Mark set done',
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      justifySelf: 'end',
      border: props.done ? 'none' : 'var(--border-width-strong) solid var(--border-strong)',
      background: props.done ? 'var(--green-500)' : 'transparent',
      color: props.done ? 'var(--ink-000)' : 'var(--text-subtle)',
      transition: 'var(--transition-control)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 16,
    strokeWidth: 3
  })));
}
Object.assign(__ds_scope, { SetRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/SetRow.jsx", error: String((e && e.message) || e) }); }

// components/tracking/StatTile.jsx
try { (() => {
function StatTile(props) {
  const dir = props.deltaDirection || 'flat';
  return React.createElement('div', {
    className: 'gt-stat',
    style: props.style
  }, React.createElement('span', {
    className: 'gt-stat__label'
  }, props.icon ? React.createElement(__ds_scope.Icon, {
    name: props.icon,
    size: 13,
    strokeWidth: 2.5,
    style: {
      display: 'inline-block',
      verticalAlign: '-2px',
      marginRight: 6
    }
  }) : null, props.label), React.createElement('span', {
    className: 'gt-stat__value'
  }, props.value, props.unit ? React.createElement('span', {
    className: 'gt-stat__unit'
  }, props.unit) : null), props.delta ? React.createElement('span', {
    className: 'gt-delta gt-delta--' + dir
  }, React.createElement(__ds_scope.Icon, {
    name: dir === 'up' ? 'trending-up' : dir === 'down' ? 'trending-down' : 'minus',
    size: 14
  }), props.delta, props.deltaLabel ? React.createElement('span', {
    style: {
      color: 'var(--text-muted)'
    }
  }, props.deltaLabel) : null) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/tracking/TrendBars.jsx
try { (() => {
function TrendBars(props) {
  const items = props.items || [];
  const max = props.max || Math.max.apply(null, items.map(function (i) {
    return i.value;
  }).concat([1]));
  const h = props.height || 96;
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }, props.style)
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: props.gap || 8,
      height: h
    }
  }, items.map(function (it, i) {
    const pct = Math.max(3, it.value / max * 100);
    return React.createElement('div', {
      key: i,
      title: it.label + ': ' + it.value,
      style: {
        flex: 1,
        height: pct + '%',
        borderRadius: 'var(--radius-sm)',
        background: it.highlight ? props.color || 'var(--blue-500)' : props.mutedColor || 'var(--ink-200)',
        transition: 'height var(--dur-slow) var(--ease-out)'
      }
    });
  })), props.showLabels === false ? null : React.createElement('div', {
    style: {
      display: 'flex',
      gap: props.gap || 8
    }
  }, items.map(function (it, i) {
    return React.createElement('span', {
      key: i,
      style: {
        flex: 1,
        textAlign: 'center',
        font: 'var(--text-caption)',
        color: it.highlight ? 'var(--text-heading)' : 'var(--text-subtle)'
      }
    }, it.label);
  })));
}
Object.assign(__ds_scope, { TrendBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tracking/TrendBars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
const {
  Toast
} = window.GymTrackerDesignSystem_42e631;
function App() {
  const [tab, setTab] = React.useState('today');
  const [sheet, setSheet] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const go = id => {
    if (id === 'log') {
      setSheet(true);
    } else {
      setTab(id);
    }
  };
  const finish = () => {
    setTab('today');
    setToast('Workout saved — 18 sets, 4 260 kg total volume');
    setTimeout(() => setToast(null), 3200);
  };
  const dark = tab === 'workout';
  return /*#__PURE__*/React.createElement(AppShell, {
    tab: tab,
    onTab: go,
    dark: dark,
    sheet: /*#__PURE__*/React.createElement(LogSheet, {
      open: sheet,
      onClose: () => setSheet(false)
    })
  }, tab === 'today' && /*#__PURE__*/React.createElement(TodayScreen, {
    onStart: () => setTab('workout'),
    onCoach: () => setTab('coach')
  }), tab === 'workout' && /*#__PURE__*/React.createElement(WorkoutScreen, {
    onFinish: finish
  }), tab === 'food' && /*#__PURE__*/React.createElement(NutritionScreen, {
    onAdd: () => setSheet(true)
  }), tab === 'coach' && /*#__PURE__*/React.createElement(CoachScreen, null), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 96,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Workout saved"
  }, toast)));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
/* Phone frame + status bar + bottom tab bar for the Gym-Tracker app. */
const {
  TabBar,
  Icon
} = window.GymTrackerDesignSystem_42e631;
function StatusBar({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      font: 'var(--text-label)',
      color: dark ? '#F7F8F9' : 'var(--text-heading)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, "7:42"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 17
  })));
}
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--mobile-frame-w)',
      height: 844,
      borderRadius: 44,
      background: 'var(--ink-950)',
      padding: 5,
      boxShadow: 'var(--shadow-lg)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 39,
      overflow: 'hidden',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
function AppShell({
  tab,
  onTab,
  dark,
  children,
  sheet
}) {
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    className: dark ? 'theme-dark' : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minHeight: 0,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      minHeight: 0
    }
  }, children), /*#__PURE__*/React.createElement(TabBar, {
    value: tab,
    onChange: onTab,
    items: [{
      id: 'today',
      label: 'Today',
      icon: 'house'
    }, {
      id: 'workout',
      label: 'Workouts',
      icon: 'dumbbell'
    }, {
      id: 'log',
      label: 'Log',
      icon: 'plus',
      primary: true
    }, {
      id: 'food',
      label: 'Food',
      icon: 'utensils'
    }, {
      id: 'coach',
      label: 'Coach',
      icon: 'sparkles'
    }]
  })), sheet);
}
function ScreenHeader({
  eyebrow,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      padding: '8px var(--pad-screen) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title)), right);
}
Object.assign(window, {
  AppShell,
  PhoneFrame,
  StatusBar,
  ScreenHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CoachScreen.jsx
try { (() => {
const {
  AiBubble,
  Card,
  IconButton,
  Icon,
  Avatar
} = window.GymTrackerDesignSystem_42e631;
const OPENING = [{
  from: 'coach',
  text: 'Bench volume is up 14% this week and your last set felt easier (RPE 7). Hold 80 kg one more session?',
  chips: ['Hold the load', 'Add 2.5 kg', 'Why?']
}];
function CoachScreen() {
  const [turns, setTurns] = React.useState(OPENING);
  const [draft, setDraft] = React.useState('');
  const send = text => {
    const t = (text || draft).trim();
    if (!t) return;
    setDraft('');
    setTurns(list => list.concat([{
      from: 'user',
      text: t
    }]));
    setTimeout(() => setTurns(list => list.concat([{
      from: 'coach',
      text: 'Locked in. I kept 80 kg x 8 for Friday and nudged your protein target to 155 g on training days.',
      chips: ['Show the plan', 'Adjust protein']
    }])), 520);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '8px var(--pad-screen) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--blue-500)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, "Coach"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Reads your last 14 days")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "history",
    label: "Past conversations"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: '0 var(--pad-screen) var(--space-5)'
    }
  }, turns.map((t, i) => /*#__PURE__*/React.createElement(AiBubble, {
    key: i,
    from: t.from,
    name: "Mara Lupu",
    suggestions: i === turns.length - 1 ? t.chips : undefined,
    onSuggestion: send
  }, t.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--pad-screen)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "gt-input",
    placeholder: "Ask about your training",
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') send();
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-up",
    label: "Send",
    variant: "solid",
    onClick: () => send()
  })));
}
Object.assign(window, {
  CoachScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CoachScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/LogSheet.jsx
try { (() => {
const {
  Dialog,
  Button,
  Tag,
  Input,
  Icon
} = window.GymTrackerDesignSystem_42e631;
function LogSheet({
  open,
  onClose
}) {
  const [kind, setKind] = React.useState('Food');
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    variant: "sheet",
    title: "Log something",
    description: "Two taps, then back to your session.",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(Button, {
      block: true,
      iconLeft: "check",
      onClick: onClose
    }, "Save entry")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, [['Food', 'utensils'], ['Weight', 'scale'], ['Steps', 'footprints'], ['Water', 'droplet']].map(([k, ic]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    icon: ic,
    selected: kind === k,
    onClick: () => setKind(k)
  }, k))), kind === 'Food' ? /*#__PURE__*/React.createElement(Input, {
    iconLeft: "search",
    placeholder: "Search 1.2 m foods"
  }) : /*#__PURE__*/React.createElement(Input, {
    label: kind,
    type: "number",
    suffix: kind === 'Weight' ? 'kg' : kind === 'Water' ? 'ml' : 'steps',
    defaultValue: kind === 'Weight' ? '78.4' : '0'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    style: {
      color: 'var(--text-brand)'
    }
  }), "Or say it out loud \u2014 the coach fills the numbers in.")));
}
Object.assign(window, {
  LogSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/LogSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/NutritionScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Tabs,
  MacroBar,
  ProgressBar,
  Icon,
  IconButton,
  Tag
} = window.GymTrackerDesignSystem_42e631;
const MEALS = [{
  name: 'Breakfast',
  time: '07:10',
  kcal: 520,
  items: ['Skyr 250 g', 'Blueberries 80 g', 'Oats 60 g']
}, {
  name: 'Lunch',
  time: '12:40',
  kcal: 780,
  items: ['Chicken thigh 200 g', 'Jasmine rice 180 g', 'Broccoli 150 g']
}, {
  name: 'Snack',
  time: '16:05',
  kcal: 240,
  items: ['Whey shake', 'Banana']
}];
function NutritionScreen({
  onAdd
}) {
  const [range, setRange] = React.useState('Day');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: '0 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Wednesday 6 August",
    title: "Nutrition",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: "scan-barcode",
      label: "Scan a barcode",
      variant: "outline"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--pad-screen)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Day', 'Week', 'Month'],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Calories",
    valueLabel: "1 840 / 2 200 kcal",
    value: 1840,
    max: 2200
  }), /*#__PURE__*/React.createElement(MacroBar, {
    items: [{
      label: 'Protein',
      value: 132,
      color: 'var(--data-protein)',
      display: '132 / 150 g'
    }, {
      label: 'Carbs',
      value: 190,
      color: 'var(--data-carbs)',
      display: '190 / 230 g'
    }, {
      label: 'Fat',
      value: 61,
      color: 'var(--data-fat)',
      display: '61 / 70 g'
    }]
  })), MEALS.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, m.time)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-metric-sm)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, m.kcal, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginLeft: 4
    }
  }, "kcal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, m.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      font: 'var(--text-body-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-small",
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    style: {
      color: 'var(--text-subtle)'
    }
  })))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: "plus",
    onClick: onAdd
  }, "Add food"))), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      flex: 1
    }
  }, "18 g of protein short. A scoop of whey or 150 g of skyr closes the gap."))));
}
Object.assign(window, {
  NutritionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/NutritionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TodayScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Avatar,
  ProgressRing,
  ProgressBar,
  StatTile,
  MacroBar,
  Icon,
  Tag
} = window.GymTrackerDesignSystem_42e631;
function TodayScreen({
  onStart,
  onCoach
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: '0 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Wednesday 6 August",
    title: "Morning, Mara",
    right: /*#__PURE__*/React.createElement(Avatar, {
      name: "Mara Lupu",
      size: 40
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--pad-screen)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 1840,
    max: 2200,
    size: 116,
    stroke: 11,
    color: "var(--ring-calories)",
    trackColor: "rgba(255,255,255,.14)",
    centerValue: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, "1 840"),
    centerLabel: "kcal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)'
    }
  }, "Remaining"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-metric-lg)',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "360", /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'rgba(255,255,255,.6)',
      marginLeft: 4
    }
  }, "kcal"))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 132,
    max: 150,
    label: "Protein",
    valueLabel: "132 / 150 g",
    color: "var(--data-protein)",
    thickness: 6,
    style: {
      '--surface-sunken': 'rgba(255,255,255,.14)',
      color: 'rgba(255,255,255,.7)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatTile, {
    icon: "footprints",
    label: "Steps",
    value: "8 420",
    delta: "+1 240",
    deltaDirection: "up",
    deltaLabel: "vs avg"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(StatTile, {
    icon: "scale",
    label: "Weight",
    value: "78.4",
    unit: "kg",
    delta: "-0.6 kg",
    deltaDirection: "down",
    deltaLabel: "7 days"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, "Today \xB7 week 3"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Upper body \u2014 push"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "5 exercises \xB7 18 sets \xB7 ~52 min")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Planned")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "dumbbell"
  }, "Bench press"), /*#__PURE__*/React.createElement(Tag, null, "Incline DB"), /*#__PURE__*/React.createElement(Tag, {
    count: 3
  }, "+3 more")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconLeft: "play",
    onClick: onStart
  }, "Start workout")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(MacroBar, {
    label: "Macros today",
    total: "1 840 kcal",
    items: [{
      label: 'Protein',
      value: 132,
      color: 'var(--data-protein)',
      display: '132 g'
    }, {
      label: 'Carbs',
      value: 190,
      color: 'var(--data-carbs)',
      display: '190 g'
    }, {
      label: 'Fat',
      value: 61,
      color: 'var(--data-fat)',
      display: '61 g'
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg",
    interactive: true,
    onClick: onCoach,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.18)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)'
    }
  }, "Your coach has 1 note"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      opacity: .85
    }
  }, "Bench volume is up 14% \u2014 worth holding this load one more week.")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    style: {
      marginLeft: 'auto',
      opacity: .8
    }
  }))));
}
Object.assign(window, {
  TodayScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/WorkoutScreen.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  Badge,
  SetRow,
  Stepper,
  ProgressBar,
  Icon,
  Tabs
} = window.GymTrackerDesignSystem_42e631;
function WorkoutScreen({
  onFinish
}) {
  const [sets, setSets] = React.useState([{
    w: 40,
    r: 12,
    done: true,
    warm: true
  }, {
    w: 70,
    r: 8,
    done: true
  }, {
    w: 80,
    r: 8,
    done: true
  }, {
    w: 80,
    r: 8,
    done: false
  }, {
    w: 82.5,
    r: 6,
    done: false
  }]);
  const [weight, setWeight] = React.useState(80);
  const [reps, setReps] = React.useState(8);
  const [rest, setRest] = React.useState(72);
  React.useEffect(() => {
    const t = setInterval(() => setRest(s => s > 0 ? s - 1 : 0), 1000);
    return () => clearInterval(t);
  }, []);
  const doneCount = sets.filter(s => s.done).length;
  const mmss = String(Math.floor(rest / 60)) + ':' + String(rest % 60).padStart(2, '0');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: '0 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px var(--pad-screen) 0'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Back"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Push day \xB7 week 3"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-data)',
      color: 'var(--text-heading)'
    }
  }, "32:18 elapsed")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "Workout options"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--pad-screen)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Bench press"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-data)',
      color: 'var(--text-muted)'
    }
  }, "Last: 80 kg x 8 \xB7 e1RM 101 kg")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, doneCount, " / ", sets.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, sets.map((s, i) => /*#__PURE__*/React.createElement(SetRow, {
    key: i,
    index: s.warm ? 'W' : i,
    weight: s.w,
    reps: s.r,
    done: s.done,
    onToggle: () => setSets(list => list.map((x, j) => j === i ? Object.assign({}, x, {
      done: !x.done
    }) : x))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    value: weight,
    step: 2.5,
    unit: "kg",
    onChange: setWeight
  }), /*#__PURE__*/React.createElement(Stepper, {
    value: reps,
    step: 1,
    unit: "reps",
    onChange: setReps
  })), /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconLeft: "check",
    onClick: () => setSets(list => list.concat([{
      w: weight,
      r: reps,
      done: true
    }]))
  }, "Log set")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "timer",
    size: 18,
    style: {
      color: 'var(--text-brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)'
    }
  }, "Rest")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-metric-sm)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, mmss)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: rest,
    max: 90,
    thickness: 6
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    padding: "sm",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dumbbell",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)'
    }
  }, "Up next \xB7 Incline dumbbell press"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "3 sets \xB7 10 reps \xB7 24 kg")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--text-subtle)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    block: true,
    iconLeft: "flag",
    onClick: onFinish
  }, "Finish workout")));
}
Object.assign(window, {
  WorkoutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/WorkoutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
const {
  Button,
  IconButton,
  Tag
} = window.GymTrackerDesignSystem_42e631;
const META = {
  overview: {
    title: 'Overview',
    eyebrow: 'Week 50 · 6 August 2026'
  },
  plan: {
    title: 'Training plan',
    eyebrow: 'Upper / lower · week 3 of 8'
  },
  nutrition: {
    title: 'Nutrition',
    eyebrow: 'Week 50 · 2 200 kcal target'
  },
  progress: {
    title: 'Progress',
    eyebrow: 'Last 12 weeks'
  },
  settings: {
    title: 'Settings',
    eyebrow: 'Account · units · connections'
  }
};
function Dashboard() {
  const [page, setPage] = React.useState('overview');
  const meta = META[page];
  return /*#__PURE__*/React.createElement(DashboardShell, {
    page: page,
    onPage: setPage,
    title: meta.title,
    eyebrow: meta.eyebrow,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search",
      variant: "outline",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Notifications",
      variant: "outline",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "sparkles"
    }, "Ask the coach"))
  }, page === 'overview' && /*#__PURE__*/React.createElement(OverviewScreen, null), page === 'plan' && /*#__PURE__*/React.createElement(PlanScreen, null), page === 'settings' && /*#__PURE__*/React.createElement(SettingsScreen, null), (page === 'nutrition' || page === 'progress') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      height: 320,
      textAlign: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)'
    }
  }, "Not part of this kit"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "No source design exists for this view yet, so it is intentionally left blank rather than invented."))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardShell.jsx
try { (() => {
const {
  NavItem,
  Icon,
  Avatar,
  Button,
  IconButton,
  Badge
} = window.GymTrackerDesignSystem_42e631;
function Sidebar({
  page,
  onPage
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--app-sidebar-w)',
      flex: 'none',
      borderRight: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Gym-Tracker",
    style: {
      height: 34,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "layout-dashboard",
    active: page === 'overview',
    onClick: () => onPage('overview')
  }, "Overview"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "dumbbell",
    trailing: "4",
    active: page === 'plan',
    onClick: () => onPage('plan')
  }, "Training plan"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "utensils",
    active: page === 'nutrition',
    onClick: () => onPage('nutrition')
  }, "Nutrition"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "trending-up",
    active: page === 'progress',
    onClick: () => onPage('progress')
  }, "Progress"), /*#__PURE__*/React.createElement(NavItem, {
    icon: "settings",
    active: page === 'settings',
    onClick: () => onPage('settings')
  }, "Settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-brand-subtle)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-brand)'
    }
  }, "Coach weekly review"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Ready for week 3 \u2014 2 changes suggested."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "arrow-right"
  }, "Open review")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mara Lupu",
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-heading)'
    }
  }, "Mara Lupu"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, "Pro plan")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-down",
    label: "Account menu",
    size: "sm"
  }))));
}
function TopBar({
  title,
  eyebrow,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--app-topbar-h)',
      flex: 'none',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--glass-light)',
      backdropFilter: 'blur(var(--blur-glass))',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: '0 var(--space-8)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-heading)'
    }
  }, title)), actions);
}
function DashboardShell({
  page,
  onPage,
  children,
  title,
  eyebrow,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    page: page,
    onPage: onPage
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    eyebrow: eyebrow,
    actions: actions
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-8)'
    }
  }, children)));
}
Object.assign(window, {
  DashboardShell,
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/OverviewScreen.jsx
try { (() => {
const {
  Card,
  StatTile,
  ProgressRing,
  ProgressBar,
  MacroBar,
  TrendBars,
  Tabs,
  Badge,
  Button,
  Icon,
  AiBubble,
  SetRow
} = window.GymTrackerDesignSystem_42e631;
function OverviewScreen() {
  const [range, setRange] = React.useState('Week');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 'var(--container-max)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['Day', 'Week', 'Month'],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "plus"
  }, "Log entry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "dumbbell",
    label: "Sessions",
    value: "4",
    unit: "of 5",
    delta: "+1",
    deltaDirection: "up",
    deltaLabel: "vs last week"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "weight",
    label: "Volume",
    value: "18.2",
    unit: "t",
    delta: "+14%",
    deltaDirection: "up",
    deltaLabel: "vs last week"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "scale",
    label: "Body weight",
    value: "78.4",
    unit: "kg",
    delta: "-0.6 kg",
    deltaDirection: "down",
    deltaLabel: "7-day trend"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "footprints",
    label: "Steps / day",
    value: "8 420",
    delta: "+1 240",
    deltaDirection: "up",
    deltaLabel: "vs avg"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Weekly training volume"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-data)',
      color: 'var(--text-muted)'
    }
  }, "tonnes lifted")), /*#__PURE__*/React.createElement(TrendBars, {
    height: 168,
    items: [{
      label: 'Wk 44',
      value: 13.1
    }, {
      label: 'Wk 45',
      value: 14.8
    }, {
      label: 'Wk 46',
      value: 12.2
    }, {
      label: 'Wk 47',
      value: 15.9
    }, {
      label: 'Wk 48',
      value: 16.4
    }, {
      label: 'Wk 49',
      value: 15.1
    }, {
      label: 'Wk 50',
      value: 18.2,
      highlight: true
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Today"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Calories against a 2 200 kcal target")), /*#__PURE__*/React.createElement(ProgressRing, {
    value: 1840,
    max: 2200,
    size: 188,
    stroke: 14,
    color: "var(--ring-calories)",
    centerValue: "1 840",
    centerLabel: "kcal"
  }), /*#__PURE__*/React.createElement(MacroBar, {
    style: {
      alignSelf: 'stretch'
    },
    items: [{
      label: 'Protein',
      value: 132,
      color: 'var(--data-protein)',
      display: '132 g'
    }, {
      label: 'Carbs',
      value: 190,
      color: 'var(--data-carbs)',
      display: '190 g'
    }, {
      label: 'Fat',
      value: 61,
      color: 'var(--data-fat)',
      display: '61 g'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Last session"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "check"
  }, "Completed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(SetRow, {
    index: 1,
    weight: 80,
    reps: 8,
    done: true
  }), /*#__PURE__*/React.createElement(SetRow, {
    index: 2,
    weight: 80,
    reps: 8,
    done: true
  }), /*#__PURE__*/React.createElement(SetRow, {
    index: 3,
    weight: 82.5,
    reps: 6,
    done: true
  })), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "Weekly volume target",
    valueLabel: "112% of target",
    value: 112,
    max: 100,
    thickness: 6
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Coach notes"), /*#__PURE__*/React.createElement(AiBubble, {
    from: "coach",
    suggestions: ['Apply both', 'Review later']
  }, "Two adjustments for week 3: hold bench at 80 kg, and raise protein to 155 g on training days."))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/PlanScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Tag,
  Icon,
  Tabs,
  Switch,
  Checkbox
} = window.GymTrackerDesignSystem_42e631;
const WEEK = [{
  day: 'Mon',
  name: 'Lower body — squat',
  sets: 20,
  mins: 58,
  state: 'done'
}, {
  day: 'Tue',
  name: 'Upper body — pull',
  sets: 18,
  mins: 51,
  state: 'done'
}, {
  day: 'Wed',
  name: 'Upper body — push',
  sets: 18,
  mins: 52,
  state: 'today'
}, {
  day: 'Thu',
  name: 'Rest — 8 000 steps',
  sets: 0,
  mins: 0,
  state: 'rest'
}, {
  day: 'Fri',
  name: 'Lower body — deadlift',
  sets: 16,
  mins: 55,
  state: 'planned'
}, {
  day: 'Sat',
  name: 'Full body — accessories',
  sets: 14,
  mins: 42,
  state: 'planned'
}, {
  day: 'Sun',
  name: 'Rest',
  sets: 0,
  mins: 0,
  state: 'rest'
}];
const TONE = {
  done: 'success',
  today: 'brand',
  planned: 'neutral',
  rest: 'neutral'
};
const LABEL = {
  done: 'Done',
  today: 'Today',
  planned: 'Planned',
  rest: 'Rest'
};
function PlanScreen() {
  const [split, setSplit] = React.useState('Upper / lower');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      maxWidth: 'var(--container-max)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, ['Upper / lower', 'Push / pull / legs', 'Full body'].map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: split === s,
    onClick: () => setSplit(s)
  }, s))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: "sparkles"
  }, "Re-plan with coach")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, WEEK.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) var(--space-6)',
      borderTop: i ? '1px solid var(--border-subtle)' : 'none',
      background: d.state === 'today' ? 'var(--surface-brand-subtle)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, d.day), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.state === 'rest' ? 'bed' : 'dumbbell',
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-heading)'
    }
  }, d.name), d.sets ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, d.sets, " sets \xB7 ~", d.mins, " min") : null), /*#__PURE__*/React.createElement(Badge, {
    tone: TONE[d.state]
  }, LABEL[d.state]), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--text-subtle)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Plan rules"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    defaultChecked: true
  }, "Auto-progress load"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    defaultChecked: true
  }, "Deload every 5th week"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true
  }, "Swap exercises when equipment is busy")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Week goals"), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true
  }, "5 sessions"), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true
  }, "150 g protein daily"), /*#__PURE__*/React.createElement(Checkbox, null, "8 000 steps daily")))));
}
Object.assign(window, {
  PlanScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/PlanScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Input,
  Select,
  Radio,
  Switch,
  Badge,
  Icon,
  Dialog
} = window.GymTrackerDesignSystem_42e631;
function SettingsScreen() {
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 'var(--space-5)',
      maxWidth: 'var(--container-narrow)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Profile"), /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    defaultValue: "Mara Lupu"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    defaultValue: "mara@gym.app",
    hint: "Used for weekly reports only."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Height",
    type: "number",
    suffix: "cm",
    defaultValue: "172"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Body weight",
    type: "number",
    suffix: "kg",
    defaultValue: "78.4"
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Goal",
    options: ['Lose fat', 'Maintain', 'Build muscle'],
    defaultValue: "Build muscle"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Units"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "units",
    value: "kg",
    defaultChecked: true
  }, "Kilograms"), /*#__PURE__*/React.createElement(Radio, {
    name: "units",
    value: "lb"
  }, "Pounds")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Coach & alerts"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    defaultChecked: true
  }, "Daily check-in"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true,
    defaultChecked: true
  }, "Rest timer sound"), /*#__PURE__*/React.createElement(Switch, {
    labelFirst: true
  }, "Weekly email report")), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Connections"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "check"
  }, "2 active")), [['Apple Health', 'activity'], ['Withings scale', 'scale']].map(([n, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    style: {
      color: 'var(--text-brand)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, n), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Disconnect")))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Data"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Export or delete everything you have logged. Deleting is permanent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: "download"
  }, "Export CSV"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    onClick: () => setConfirm(true)
  }, "Delete account")))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Delete your account?",
    description: "Every workout, meal and measurement is removed. This cannot be undone.",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Keep my data"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => setConfirm(false)
    }, "Delete everything"))
  }));
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
const {
  Card,
  Icon,
  Badge,
  Button,
  Tag,
  ProgressBar,
  AiBubble,
  TrendBars,
  SetRow
} = window.GymTrackerDesignSystem_42e631;
const FEATURES = [{
  icon: 'dumbbell',
  title: 'Sets in two taps',
  body: 'Last session pre-filled, plate maths done, rest timer starts itself.'
}, {
  icon: 'utensils',
  title: 'Food without the guesswork',
  body: 'Scan a barcode or describe a meal; macros land in the right slot.'
}, {
  icon: 'scale',
  title: 'One trend, not noise',
  body: 'Weight, steps and sleep smoothed into a line you can actually read.'
}, {
  icon: 'sparkles',
  title: 'A coach that reads your log',
  body: 'Weekly review with two or three concrete changes — never a lecture.'
}, {
  icon: 'heart-pulse',
  title: 'Everything connected',
  body: 'Apple Health, Google Fit, Withings, Garmin. Sync once, forget it.'
}, {
  icon: 'lock',
  title: 'Your data stays yours',
  body: 'Export the whole log as CSV any time. Delete it for good in one tap.'
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section-y) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, "Everything in one log"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Six things that keep the habit alive")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, FEATURES.map(ft => /*#__PURE__*/React.createElement(Card, {
    key: ft.title,
    padding: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-brand-subtle)',
      color: 'var(--text-brand)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ft.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h4)'
    }
  }, ft.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, ft.body))))));
}
function CoachSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section-y) var(--space-7)',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-11)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)'
    }
  }, "The assistant"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: 'var(--ls-tight)',
      color: '#fff'
    }
  }, "It reads 14 days of your log, then says one useful thing"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,.7)',
      maxWidth: 480
    }
  }, "No streak shaming, no generic plans. Ask a question in plain language, or let the weekly review come to you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, ['Why did my squat stall?', 'Cut 200 kcal without losing protein', 'Plan around a busy Thursday'].map(q => /*#__PURE__*/React.createElement("span", {
    key: q,
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,.18)',
      color: 'rgba(255,255,255,.82)',
      font: 'var(--text-caption)'
    }
  }, q))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Meet the coach")), /*#__PURE__*/React.createElement("div", {
    className: "theme-dark",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card-lg)',
      padding: 'var(--pad-card-lg)'
    }
  }, /*#__PURE__*/React.createElement(AiBubble, {
    from: "coach",
    suggestions: ['Hold the load', 'Add 2.5 kg']
  }, "Bench volume is up 14% and your last set was RPE 7. Hold 80 kg one more session?"), /*#__PURE__*/React.createElement(AiBubble, {
    from: "user",
    name: "Mara Lupu"
  }, "Hold the load"), /*#__PURE__*/React.createElement(AiBubble, {
    from: "coach"
  }, "Done. Friday stays at 80 kg x 8 and protein goes to 155 g on training days."), /*#__PURE__*/React.createElement(TrendBars, {
    height: 72,
    items: [{
      label: 'Wk 46',
      value: 12.2
    }, {
      label: 'Wk 47',
      value: 15.9
    }, {
      label: 'Wk 48',
      value: 16.4
    }, {
      label: 'Wk 49',
      value: 15.1
    }, {
      label: 'Wk 50',
      value: 18.2,
      highlight: true
    }]
  }))));
}
Object.assign(window, {
  Features,
  CoachSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  ProgressRing,
  ProgressBar,
  MacroBar,
  StatTile,
  Icon
} = window.GymTrackerDesignSystem_42e631;
function PhoneMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 330,
      borderRadius: 40,
      background: 'var(--ink-950)',
      padding: 5,
      boxShadow: 'var(--shadow-lg)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 35,
      background: 'var(--surface-page)',
      padding: '18px 16px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "7:42"), /*#__PURE__*/React.createElement("span", null, "Today \xB7 push day")), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "md",
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ProgressRing, {
    value: 1840,
    max: 2200,
    size: 92,
    stroke: 9,
    color: "var(--ring-calories)",
    trackColor: "rgba(255,255,255,.14)",
    centerValue: /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff'
      }
    }, "1 840"),
    centerLabel: "kcal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)'
    }
  }, "Remaining"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-metric-sm)',
      color: '#fff',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "360 kcal"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 132,
    max: 150,
    thickness: 5,
    color: "var(--data-protein)",
    style: {
      '--surface-sunken': 'rgba(255,255,255,.16)'
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MacroBar, {
    items: [{
      label: 'P',
      value: 132,
      color: 'var(--data-protein)',
      display: '132 g'
    }, {
      label: 'C',
      value: 190,
      color: 'var(--data-carbs)',
      display: '190 g'
    }, {
      label: 'F',
      value: 61,
      color: 'var(--data-fat)',
      display: '61 g'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "sm"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Steps",
    value: "8 420"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "sm"
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Weight",
    value: "78.4",
    unit: "kg"
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "md",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)'
    }
  }, "Hold 80 kg one more week."))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-13) var(--space-7) var(--space-12)',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr auto',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: "sparkles"
  }, "AI coach included"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-2)',
      letterSpacing: 'var(--ls-tighter)',
      color: 'var(--text-heading)',
      maxWidth: 620
    }
  }, "Track the work. Let the coach do the maths."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Workouts, macros, weight and steps in one log \u2014 and an assistant that adjusts your plan when the numbers move."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right"
  }, "Start free"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconLeft: "play"
  }, "Watch 90 seconds")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Sets logged",
    value: "41 M"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Avg. weekly sessions",
    value: "4.2"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Plans adjusted by coach",
    value: "1.8 M"
  }))), /*#__PURE__*/React.createElement(PhoneMock, null)));
}
Object.assign(window, {
  Hero,
  PhoneMock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon
} = window.GymTrackerDesignSystem_42e631;
const PLANS = [{
  name: 'Free',
  price: '0',
  per: 'forever',
  blurb: 'Log workouts, food and weight. Keep the habit.',
  cta: 'Start free',
  variant: 'secondary',
  features: ['Unlimited workouts', 'Barcode food log', 'Weight & step trends', '30 days of history']
}, {
  name: 'Pro',
  price: '7',
  per: 'per month',
  blurb: 'The coach, the plans, and the full history.',
  cta: 'Go Pro',
  variant: 'primary',
  featured: true,
  features: ['Everything in Free', 'AI coach & weekly review', 'Auto-progressing plans', 'Full history + CSV export', 'Health & scale sync']
}, {
  name: 'Team',
  price: '5',
  per: 'per member',
  blurb: 'For coaches running a roster of lifters.',
  cta: 'Talk to us',
  variant: 'secondary',
  features: ['Everything in Pro', 'Roster dashboard', 'Shared plan templates', 'Client check-in notes']
}];
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--pad-section-y) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Free to log. Pay for the coach.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "lg",
    variant: p.featured ? 'raised' : 'default',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      border: p.featured ? '2px solid var(--blue-500)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)'
    }
  }, p.name), p.featured ? /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, "Most picked") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-metric-xl)',
      letterSpacing: 'var(--ls-tighter)',
      color: 'var(--text-heading)'
    }
  }, "\u20AC", p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, p.per)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p.blurb), /*#__PURE__*/React.createElement(Button, {
    variant: p.variant,
    block: true
  }, p.cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-2)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, p.features.map(ft => /*#__PURE__*/React.createElement("div", {
    key: ft,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      font: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    style: {
      color: 'var(--green-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, ft)))))))));
}
Object.assign(window, {
  Pricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Site.jsx
try { (() => {
function Site() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(CoachSection, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteFooter.jsx
try { (() => {
const {
  Button,
  Input,
  Icon
} = window.GymTrackerDesignSystem_42e631;
const COLS = [{
  head: 'Product',
  links: ['Features', 'AI coach', 'Integrations', 'Pricing', 'Changelog']
}, {
  head: 'For coaches',
  links: ['Roster dashboard', 'Plan templates', 'Client check-ins']
}, {
  head: 'Company',
  links: ['About', 'Careers', 'Press kit', 'Contact']
}, {
  head: 'Legal',
  links: ['Privacy', 'Terms', 'Data export']
}];
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-12) var(--space-7)',
      background: 'var(--blue-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      letterSpacing: 'var(--ls-tight)',
      color: '#fff'
    }
  }, "Log your first set tonight"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,.8)'
    }
  }, "Free forever. No card. Export whenever you like.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@email.com",
    size: "lg",
    style: {
      minWidth: 260
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right"
  }, "Start free"))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-950)',
      padding: 'var(--space-12) var(--space-7) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Gym-Tracker",
    style: {
      height: 36,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'rgba(255,255,255,.55)',
      maxWidth: 260
    }
  }, "Every workout, meal and measurement in one log \u2014 with a coach that reads it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      color: 'rgba(255,255,255,.6)'
    }
  }, ['instagram', 'youtube', 'github'].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 18
  })))), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.45)'
    }
  }, c.head), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--text-body-sm)',
      color: 'rgba(255,255,255,.78)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid rgba(255,255,255,.12)',
      font: 'var(--text-caption)',
      color: 'rgba(255,255,255,.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Gym-Tracker"), /*#__PURE__*/React.createElement("span", null, "Built for people who actually write it down."))));
}
Object.assign(window, {
  SiteFooter,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteHeader.jsx
try { (() => {
const {
  Button,
  Icon
} = window.GymTrackerDesignSystem_42e631;
function SiteHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--glass-light)',
      backdropFilter: 'blur(var(--blur-glass))',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Gym-Tracker",
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      flex: 1
    }
  }, ['Features', 'Coach', 'Pricing', 'Stories'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--text-label)',
      color: 'var(--text-body)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: "arrow-right"
  }, "Start free"))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AiBubble = __ds_scope.AiBubble;

__ds_ns.MacroBar = __ds_scope.MacroBar;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.SetRow = __ds_scope.SetRow;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TrendBars = __ds_scope.TrendBars;

})();
