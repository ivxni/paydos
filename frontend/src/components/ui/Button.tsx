import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./Button.module.scss";

type Variant = "primary" | "silver" | "glass" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  fullWidth?: boolean;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    /** external links open in a new tab */
    external?: boolean;
  };

type Props = ButtonAsButton | ButtonAsLink;

function classes(
  variant: Variant,
  size: Size,
  fullWidth: boolean,
  extra?: string,
) {
  return [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.full : "",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    iconLeft,
    iconRight,
    fullWidth = false,
    className,
  } = props;

  const inner = (
    <>
      {iconLeft && <FontAwesomeIcon icon={iconLeft} className={styles.icon} />}
      <span>{children}</span>
      {iconRight && <FontAwesomeIcon icon={iconRight} className={styles.icon} />}
    </>
  );

  const cls = classes(variant, size, fullWidth, className);

  if (props.href !== undefined) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...stripCommon(rest)}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...stripCommon(rest)}>
        {inner}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...stripCommon(rest)}>
      {inner}
    </button>
  );
}

// Remove our custom props before spreading onto the DOM element.
function stripCommon<T extends Record<string, unknown>>(p: T) {
  const {
    children,
    variant,
    size,
    iconLeft,
    iconRight,
    fullWidth,
    className,
    href,
    external,
    ...rest
  } = p as Record<string, unknown>;
  void children;
  void variant;
  void size;
  void iconLeft;
  void iconRight;
  void fullWidth;
  void className;
  void href;
  void external;
  return rest;
}
