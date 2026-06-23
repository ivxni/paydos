// FontAwesome core config — disable auto-CSS injection (we import the
// stylesheet ourselves in the root layout so SSR icons aren't oversized).
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
