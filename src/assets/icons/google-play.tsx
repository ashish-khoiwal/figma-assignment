import React from "react"
import { IconProps } from "../../types"

const GooglePlay: React.FC<IconProps> = ({
    color = "currentColor",
    width = "20",
    height = "24",
    ...attributes
}) => {
    return (
        <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            {...attributes}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.504946 21.3146L9.8176 12.0284L13.1002 15.3012L2.0295 21.4392C1.60857 21.6727 1.09301 21.6692 0.674726 21.4295L0.504946 21.3146ZM8.87849 11.0919L0 19.9448V2.23913L8.87849 11.0919ZM14.4267 7.43357L18.7642 9.83801C19.1904 10.075 19.4548 10.5189 19.4548 11C19.4548 11.481 19.1904 11.9249 18.7642 12.1619L14.3082 14.6318L10.7576 11.0919L14.4267 7.43357ZM0.406786 0.771175C0.486376 0.694239 0.575686 0.627032 0.674726 0.570436C1.09301 0.330788 1.60857 0.32725 2.0295 0.560709L13.2187 6.76415L9.8176 10.1554L0.406786 0.771175Z"
                fill="#00D54B"
            />
        </svg>
    )
}

export default GooglePlay