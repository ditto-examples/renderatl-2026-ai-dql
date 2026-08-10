import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Recreation of the primary CTA on ditto.com (the "Schedule a demo" button):
 * a rounded lime button with an uppercase Aeonik-Fono label and a dark,
 * rounded-square chip holding Ditto's blocky arrow glyph.
 *
 * Structure mirrors Ditto's Webflow component (btn_wrap_main → label +
 * icon chip). Colors are Ditto's brand tokens: accent #eaf044, dark #0a0a0a.
 */
interface DittoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** `primary` = filled lime (default). `secondary` = dark with lime chip. */
  variant?: 'primary' | 'secondary'
}

// Ditto's arrow glyph — a stepped, square-built arrow (viewBox 0 0 8 11),
// taken verbatim from the site. Uses currentColor so the chip drives it.
function DittoArrow() {
  return (
    <svg
      className="ditto-btn__arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.25647 3.5H7.74908L7.99971 3.75V7.25L7.74547 7.5H4.25286L3.99916 7.75V10.75L3.74547 11L-0.000835419 11L-0.00390625 7.25L0.249789 7H3.74609L3.99863 6.75L4.00224 4.25L3.74971 4H0.253402L-0.000293732 3.75L0.00277758 0L3.74908 9.53674e-07L4.00278 0.25V3.25L4.25647 3.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function DittoButton({
  children,
  variant = 'primary',
  className,
  ...props
}: DittoButtonProps) {
  return (
    <button
      className={`ditto-btn ditto-btn--${variant}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span className="ditto-btn__chip">
        <DittoArrow />
      </span>
      <span className="ditto-btn__label">{children}</span>
    </button>
  )
}
