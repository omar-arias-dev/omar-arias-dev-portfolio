import IconToTop from "../../../assets/images/components/genericIcons/IconToTop";

import "./../index.css";

export default function ToTopButton({ onToTop }) {
    return (
        <button
            className="button-to_top"
            onClick={onToTop}
        >
            <IconToTop />
        </button>
    )
}