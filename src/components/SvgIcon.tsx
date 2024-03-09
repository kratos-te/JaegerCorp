import { FC } from "react";

interface IconProps {
  color?: string;
  className?: string;
}

export const ArrowLine: FC<IconProps> = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask maskUnits="userSpaceOnUse" x="0" y="0" width="12" height="12">
        <rect
          y="12"
          width="12"
          height="12"
          transform="rotate(-90 0 12)"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_394_15152)">
        <path
          d="M7.47501 6.00001C7.47501 6.06667 7.4646 6.12917 7.44376 6.18751C7.42293 6.24584 7.38751 6.30001 7.33751 6.35001L5.03751 8.65001C4.94585 8.74167 4.82918 8.78751 4.68751 8.78751C4.54585 8.78751 4.42918 8.74167 4.33751 8.65001C4.24585 8.55834 4.20001 8.44167 4.20001 8.30001C4.20001 8.15834 4.24585 8.04167 4.33751 7.95001L6.28751 6.00001L4.33751 4.05001C4.24585 3.95834 4.20001 3.84167 4.20001 3.70001C4.20001 3.55834 4.24585 3.44167 4.33751 3.35001C4.42918 3.25834 4.54585 3.21251 4.68751 3.21251C4.82918 3.21251 4.94585 3.25834 5.03751 3.35001L7.33751 5.65001C7.38751 5.70001 7.42293 5.75417 7.44376 5.81251C7.4646 5.87084 7.47501 5.93334 7.47501 6.00001Z"
          fill="#E4F5F2"
        />
      </g>
    </svg>
  );
};

export const SolanaIcon: FC<IconProps> = () => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50036 0H1.24971C1.09469 0 0.944686 0.0794115 0.849677 0.211764L0.0996095 1.27058C-0.145413 1.61999 0.0896025 2.11764 0.499639 2.11764H7.75029C7.90531 2.11764 8.05531 2.03823 8.15032 1.90588L8.90039 0.847056C9.14541 0.497645 8.9104 0 8.50036 0Z"
        fill="#E4F5F2"
      />
      <path
        d="M0.499639 3.44092H7.75029C7.90531 3.44092 8.05531 3.52033 8.15032 3.65268L8.90039 4.7115C9.14541 5.06091 8.9104 5.55856 8.50036 5.55856H1.24971C1.09469 5.55856 0.944686 5.47915 0.849677 5.34679L0.0996095 4.28797C-0.145413 3.93856 0.0896025 3.44092 0.499639 3.44092Z"
        fill="#E4F5F2"
      />
      <path
        d="M8.50036 6.88232H1.24971C1.09469 6.88232 0.944686 6.96174 0.849677 7.09409L0.0996095 8.15291C-0.145413 8.50232 0.0896025 8.99996 0.499639 8.99996H7.75029C7.90531 8.99996 8.05531 8.92055 8.15032 8.7882L8.90039 7.72938C9.14541 7.37997 8.9104 6.88232 8.50036 6.88232Z"
        fill="#E4F5F2"
      />
    </svg>
  );
};

// export const WalletIcon: FC<IconProps> = ({className}) => {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 14 14"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className ? className : ""}
//     >
//       <g mask="url(#mask0_75_320733)">
//         <path
//           d="M3.50008 11.6668C2.85841 11.6668 2.30911 11.4384 1.85216 10.9814C1.39522 10.5245 1.16675 9.97516 1.16675 9.3335V4.66683C1.16675 4.02516 1.39522 3.47586 1.85216 3.01891C2.30911 2.56197 2.85841 2.3335 3.50008 2.3335H10.5001C11.1417 2.3335 11.6911 2.56197 12.148 3.01891C12.6049 3.47586 12.8334 4.02516 12.8334 4.66683V9.3335C12.8334 9.97516 12.6049 10.5245 12.148 10.9814C11.6911 11.4384 11.1417 11.6668 10.5001 11.6668H3.50008ZM3.50008 4.66683H10.5001C10.714 4.66683 10.9181 4.69113 11.1126 4.73975C11.307 4.78836 11.4917 4.86613 11.6667 4.97308V4.66683C11.6667 4.346 11.5525 4.07134 11.324 3.84287C11.0956 3.6144 10.8209 3.50016 10.5001 3.50016H3.50008C3.17925 3.50016 2.9046 3.6144 2.67612 3.84287C2.44765 4.07134 2.33341 4.346 2.33341 4.66683V4.97308C2.50841 4.86613 2.69314 4.78836 2.88758 4.73975C3.08203 4.69113 3.28619 4.66683 3.50008 4.66683ZM2.42091 6.56266L8.9105 8.13766C8.998 8.15711 9.0855 8.15711 9.173 8.13766C9.2605 8.11822 9.34314 8.07933 9.42092 8.021L11.448 6.32933C11.3411 6.1835 11.2049 6.0644 11.0397 5.97204C10.8744 5.87968 10.6945 5.8335 10.5001 5.8335H3.50008C3.2473 5.8335 3.02612 5.89912 2.83654 6.03037C2.64696 6.16162 2.50841 6.33905 2.42091 6.56266Z"
//           fill="#435854"
//         />
//       </g>
//     </svg>
//   );
// };

export const ExitIcon: FC<IconProps> = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_75_320739)">
        <path
          d="M11.7542 7.58333H5.25C5.08472 7.58333 4.94618 7.52743 4.83437 7.41563C4.72257 7.30382 4.66667 7.16528 4.66667 7C4.66667 6.83472 4.72257 6.69618 4.83437 6.58437C4.94618 6.47257 5.08472 6.41667 5.25 6.41667H11.7542L11.2583 5.92083C11.1417 5.80417 11.0858 5.66806 11.0906 5.5125C11.0955 5.35694 11.1514 5.22083 11.2583 5.10417C11.375 4.9875 11.5135 4.92674 11.674 4.92188C11.8344 4.91701 11.9729 4.97292 12.0896 5.08958L13.5917 6.59167C13.7083 6.70833 13.7667 6.84444 13.7667 7C13.7667 7.15556 13.7083 7.29167 13.5917 7.40833L12.0896 8.91042C11.9729 9.02708 11.8344 9.08299 11.674 9.07812C11.5135 9.07326 11.375 9.0125 11.2583 8.89583C11.1514 8.77917 11.0955 8.64306 11.0906 8.4875C11.0858 8.33194 11.1417 8.19583 11.2583 8.07917L11.7542 7.58333ZM8.75 4.66667V2.91667H2.91667V11.0833H8.75V9.33333C8.75 9.16806 8.8059 9.02951 8.91771 8.91771C9.02951 8.8059 9.16806 8.75 9.33333 8.75C9.49861 8.75 9.63715 8.8059 9.74896 8.91771C9.86076 9.02951 9.91667 9.16806 9.91667 9.33333V11.0833C9.91667 11.4042 9.80243 11.6788 9.57396 11.9073C9.34549 12.1358 9.07083 12.25 8.75 12.25H2.91667C2.59583 12.25 2.32118 12.1358 2.09271 11.9073C1.86424 11.6788 1.75 11.4042 1.75 11.0833V2.91667C1.75 2.59583 1.86424 2.32118 2.09271 2.09271C2.32118 1.86424 2.59583 1.75 2.91667 1.75H8.75C9.07083 1.75 9.34549 1.86424 9.57396 2.09271C9.80243 2.32118 9.91667 2.59583 9.91667 2.91667V4.66667C9.91667 4.83194 9.86076 4.97049 9.74896 5.08229C9.63715 5.1941 9.49861 5.25 9.33333 5.25C9.16806 5.25 9.02951 5.1941 8.91771 5.08229C8.8059 4.97049 8.75 4.83194 8.75 4.66667Z"
          fill="#435854"
        />
      </g>
    </svg>
  );
};

export const TwitterIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6829 0.6875H16.1639L10.7437 6.8825L17.1202 15.3125H12.1274L8.21691 10.1998L3.74241 15.3125H1.25993L7.05741 8.68625L0.94043 0.6875H6.05991L9.59466 5.36075L13.6829 0.6875ZM12.8122 13.8275H14.1869L5.31291 2.0945H3.83766L12.8122 13.8275Z"
        fill={className ? className : "#070A13"}
      />
    </svg>
  );
};

export const WalletIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.14174 1.62498C8.72797 1.50681 8.26605 1.50003 7.04925 1.50003H2.33321C1.87304 1.50003 1.5 1.87307 1.5 2.33324C1.5 2.79341 1.87304 3.16645 2.33321 3.16645H11.1209C10.7026 2.62016 10.4758 2.35981 10.2138 2.161C9.89276 1.91741 9.52923 1.73564 9.14174 1.62498ZM7.1624 1.48357e-05C8.22714 -0.000203794 8.91293 -0.000344521 9.55367 0.182647C10.12 0.344388 10.6513 0.610044 11.1205 0.966066C11.6513 1.36886 12.0627 1.91758 12.7014 2.76951L12.7692 2.86003L13.0522 3.23734C13.6643 3.29811 14.1936 3.41509 14.6825 3.65616C15.6207 4.11868 16.3799 4.87793 16.8424 5.81606C17.1081 6.35494 17.2231 6.94269 17.2782 7.63644C17.3321 8.31497 17.3321 9.15602 17.3321 10.2173V10.2493V10.2814C17.3321 11.3427 17.3321 12.1837 17.2782 12.8623C17.2231 13.556 17.1081 14.1438 16.8424 14.6826C16.3799 15.6208 15.6207 16.38 14.6825 16.8425C14.1437 17.1082 13.5559 17.2232 12.8622 17.2783C12.1836 17.3322 11.3426 17.3322 10.2813 17.3322H10.2492H7.14999H7.11697C6.02484 17.3322 5.15935 17.3322 4.46173 17.2752C3.74834 17.2169 3.14472 17.0953 2.59355 16.8145C1.69978 16.3591 0.973118 15.6324 0.517719 14.7386C0.236882 14.1875 0.115274 13.5838 0.0569879 12.8704C-1.0022e-05 12.1728 -5.49206e-06 11.3073 1.1078e-07 10.2152V10.1822V2.33331V2.33324C1.1078e-07 1.04464 1.04461 3.02137e-05 2.33321 3.02137e-05H7.04925L7.1624 1.48357e-05ZM2.33321 4.66645H2.48982L2.5 4.66651H10.2493C11.3497 4.66651 12.1312 4.66707 12.7434 4.7157C13.3471 4.76367 13.7218 4.85488 14.0192 5.00154C14.6611 5.318 15.1806 5.83748 15.4971 6.47936C15.5845 6.65667 15.6522 6.86138 15.7028 7.1257C14.0176 7.17217 12.6657 8.55286 12.6657 10.2493C12.6657 11.9457 14.0176 13.3264 15.7028 13.3729C15.6522 13.6373 15.5845 13.842 15.4971 14.0193C15.1806 14.6612 14.6611 15.1807 14.0192 15.4972C13.7218 15.6438 13.3471 15.735 12.7434 15.783C12.1312 15.8316 11.3497 15.8322 10.2492 15.8322H7.14999C6.01752 15.8322 5.21326 15.8316 4.58388 15.7802C3.96325 15.7295 3.579 15.6331 3.27453 15.4779C2.663 15.1664 2.16582 14.6692 1.85423 14.0576C1.69909 13.7532 1.60271 13.3689 1.55201 12.7483C1.50058 12.1189 1.5 11.3147 1.5 10.1822V4.51328C1.75876 4.61223 2.03966 4.66645 2.33321 4.66645ZM15.8222 11.8741C15.8319 11.4207 15.8321 10.8889 15.8321 10.2493C15.8321 9.60978 15.8319 9.07795 15.8222 8.62448H15.7906C14.8932 8.62448 14.1657 9.35194 14.1657 10.2493C14.1657 11.1467 14.8932 11.8741 15.7906 11.8741H15.8222Z"
        fill="#FFB547"
      />
    </svg>
  );
};

export const AvatarIcon: FC<IconProps> = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="url(#paint0_linear_20_2212)" />
      <defs>
        <linearGradient
          id="paint0_linear_20_2212"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ABFF85" />
          <stop offset="0.37" stop-color="#ABFF85" />
          <stop offset="0.775" stop-color="#FFB547" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const AvatarMobileIcon: FC<IconProps> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="12" fill="url(#paint0_linear_166_1142)"/>
  <defs>
    <linearGradient id="paint0_linear_166_1142" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ABFF85"/>
      <stop offset="0.37" stop-color="#ABFF85"/>
      <stop offset="0.775" stop-color="#FFB547"/>
    </linearGradient>
  </defs>
</svg>
  )
}

export const CoinIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className: ""}
    >
      <g filter="url(#filter0_ii_18_2542)">
        <rect width="40" height="40" rx="20" fill="#13151D" />
        <g clip-path="url(#clip0_18_2542)">
          <path
            d="M20 22.25C25.3848 22.25 29.75 20.2353 29.75 17.75C29.75 15.2647 25.3848 13.25 20 13.25C14.6152 13.25 10.25 15.2647 10.25 17.75C10.25 20.2353 14.6152 22.25 20 22.25Z"
            stroke="#FFB547"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 22.25V26.75"
            stroke="#FFB547"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.25 17.75V22.25C10.25 24.5 14 26.75 20 26.75C26 26.75 29.75 24.5 29.75 22.25V17.75"
            stroke="#FFB547"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26 21.3225V25.8225"
            stroke="#FFB547"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 21.3225V25.8225"
            stroke="#FFB547"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ii_18_2542"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.122222 0 0 0 0 0.131111 0 0 0 0 0.166667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_18_2542"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0363368 0 0 0 0 0.0399028 0 0 0 0 0.0541667 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_18_2542"
            result="effect2_innerShadow_18_2542"
          />
        </filter>
        <clipPath id="clip0_18_2542">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CopyIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5833 5.50001H13C13.9205 5.50001 14.6666 6.2462 14.6666 7.16668V13C14.6666 13.9205 13.9205 14.6667 13 14.6667H7.16665C6.24617 14.6667 5.49998 13.9205 5.49998 13V12.5833M2.99998 10.5H8.83331C9.75379 10.5 10.5 9.75382 10.5 8.83334V3.00001C10.5 2.07954 9.75379 1.33334 8.83331 1.33334H2.99998C2.07951 1.33334 1.33331 2.07954 1.33331 3.00001V8.83334C1.33331 9.75382 2.07951 10.5 2.99998 10.5Z"
        stroke="#686B6E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RaidsDarkIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ""}
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#1A1D21" />
      <path
        d="M11.5 12C11.5 11.4477 11.9477 11 12.5 11H17.5C18.0523 11 18.5 11.4477 18.5 12V20C18.5 20.5523 18.0523 21 17.5 21H12.5C11.9477 21 11.5 20.5523 11.5 20V12Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 20C22.5 19.4477 22.9477 19 23.5 19H28.5C29.0523 19 29.5 19.4477 29.5 20V28C29.5 28.5523 29.0523 29 28.5 29H23.5C22.9477 29 22.5 28.5523 22.5 28V20Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 12C22.5 11.4477 22.9477 11 23.5 11H28.5C29.0523 11 29.5 11.4477 29.5 12V14C29.5 14.5523 29.0523 15 28.5 15H23.5C22.9477 15 22.5 14.5523 22.5 14V12Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5 26C11.5 25.4477 11.9477 25 12.5 25H17.5C18.0523 25 18.5 25.4477 18.5 26V28C18.5 28.5523 18.0523 29 17.5 29H12.5C11.9477 29 11.5 28.5523 11.5 28V26Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RaidsLightIcon: FC<IconProps> = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#FFB547" />
      <path
        d="M11.5 12C11.5 11.4477 11.9477 11 12.5 11H17.5C18.0523 11 18.5 11.4477 18.5 12V20C18.5 20.5523 18.0523 21 17.5 21H12.5C11.9477 21 11.5 20.5523 11.5 20V12Z"
        stroke="#0C1132"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 20C22.5 19.4477 22.9477 19 23.5 19H28.5C29.0523 19 29.5 19.4477 29.5 20V28C29.5 28.5523 29.0523 29 28.5 29H23.5C22.9477 29 22.5 28.5523 22.5 28V20Z"
        stroke="#0C1132"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 12C22.5 11.4477 22.9477 11 23.5 11H28.5C29.0523 11 29.5 11.4477 29.5 12V14C29.5 14.5523 29.0523 15 28.5 15H23.5C22.9477 15 22.5 14.5523 22.5 14V12Z"
        stroke="#0C1132"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5 26C11.5 25.4477 11.9477 25 12.5 25H17.5C18.0523 25 18.5 25.4477 18.5 26V28C18.5 28.5523 18.0523 29 17.5 29H12.5C11.9477 29 11.5 28.5523 11.5 28V26Z"
        stroke="#0C1132"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const BookDarkIcon: FC<IconProps> = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#1A1D21" />
      <path
        d="M16.5 20L18.7929 22.2929C19.1834 22.6834 19.8166 22.6834 20.2071 22.2929L24.5 18M12.7058 17.2321V22.768C12.7058 23.8398 13.2776 24.8301 14.2058 25.366L19 28.134C19.9282 28.6699 21.0718 28.6699 22 28.134L26.7942 25.366C27.7224 24.8301 28.2942 23.8398 28.2942 22.768V17.2321C28.2942 16.1603 27.7224 15.1699 26.7942 14.634L22 11.866C21.0718 11.3301 19.9282 11.3301 19 11.866L14.2058 14.634C13.2776 15.1699 12.7058 16.1603 12.7058 17.2321Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const BookLightIcon: FC<IconProps> = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#FFB547" />
      <path
        d="M16.5 20L18.7929 22.2929C19.1835 22.6834 19.8166 22.6834 20.2071 22.2929L24.5 18M12.7058 17.2321V22.768C12.7058 23.8398 13.2776 24.8301 14.2058 25.366L19 28.134C19.9282 28.6699 21.0718 28.6699 22 28.134L26.7943 25.366C27.7225 24.8301 28.2943 23.8398 28.2943 22.768V17.2321C28.2943 16.1603 27.7225 15.1699 26.7943 14.634L22 11.866C21.0718 11.3301 19.9282 11.3301 19 11.866L14.2058 14.634C13.2776 15.1699 12.7058 16.1603 12.7058 17.2321Z"
        stroke="#070A13"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const BuyDarkIcon: FC<IconProps> = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#1A1D21" />
      <path
        d="M20.5 16V20M20.5 20V24M20.5 20H24.5M20.5 20H16.5M29.5 20C29.5 24.9706 25.4706 29 20.5 29C15.5294 29 11.5 24.9706 11.5 20C11.5 15.0294 15.5294 11 20.5 11C25.4706 11 29.5 15.0294 29.5 20Z"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const BuyLightIcon: FC<IconProps> = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="40" height="40" rx="12" fill="#FFB547" />
      <path
        d="M20.5 16V20M20.5 20V24M20.5 20H24.5M20.5 20H16.5M29.5 20C29.5 24.9706 25.4706 29 20.5 29C15.5294 29 11.5 24.9706 11.5 20C11.5 15.0294 15.5294 11 20.5 11C25.4706 11 29.5 15.0294 29.5 20Z"
        stroke="#070A13"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const SearchIcon: FC<IconProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 16.6667L13.6794 13.6794M13.6794 13.6794C14.7762 12.5827 15.4545 11.0675 15.4545 9.39393C15.4545 6.04675 12.7411 3.33333 9.39394 3.33333C6.04676 3.33333 3.33334 6.04675 3.33334 9.39393C3.33334 12.7411 6.04676 15.4545 9.39394 15.4545C11.0675 15.4545 12.5827 14.7762 13.6794 13.6794Z"
        stroke="#CDCECF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ArrowDown: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M13.3334 9.16667L10.5335 11.4999C10.2245 11.7574 9.77557 11.7574 9.46653 11.4999L6.66669 9.16667"
        stroke="#9B9C9E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LikeIcon: FC<IconProps> = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className ? className :""}
    >
      <mask
        id="mask0_96_396"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_96_396)">
        <path
          d="M12.05 21.914H12.036C9.453 21.866 2 15.132 2 8.754C2 5.69 4.525 3 7.403 3C9.693 3 11.233 4.58 12.049 5.73C12.863 4.582 14.403 3 16.694 3C19.574 3 22.098 5.69 22.098 8.755C22.098 15.131 14.644 21.865 12.061 21.912H12.05V21.914ZM7.404 4.501C5.324 4.501 3.501 6.489 3.501 8.756C3.501 14.496 10.535 20.352 12.051 20.414C13.569 20.352 20.601 14.497 20.601 8.756C20.601 6.489 18.778 4.501 16.698 4.501C14.17 4.501 12.758 7.437 12.746 7.466C12.516 8.028 11.59 8.028 11.359 7.466C11.345 7.436 9.93401 4.501 7.40501 4.501H7.404Z"
          fill="#536471"
        />
      </g>
    </svg>
  );
};

export const CommectIcon: FC<IconProps> = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className ? className :""}

    >
      <mask
        id="mask0_20_3106"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_20_3106)">
        <path
          d="M13.95 2.01L9.802 2H9.8C5.426 2 2 5.427 2 9.80201C2 13.9 5.186 17.008 9.465 17.172V21C9.465 21.108 9.509 21.286 9.585 21.403C9.727 21.628 9.96899 21.75 10.217 21.75C10.355 21.75 10.494 21.712 10.619 21.632C10.883 21.464 17.092 17.492 18.707 16.126C20.609 14.516 21.747 12.156 21.75 9.81401V9.79701C21.744 5.43 18.32 2.01 13.95 2.009V2.01ZM17.737 14.982C16.603 15.942 12.875 18.387 10.965 19.625V16.438C10.965 16.024 10.63 15.688 10.215 15.688H9.819C6.159 15.688 3.501 13.212 3.501 9.80201C3.501 6.268 6.269 3.5 9.801 3.5L13.948 3.51H13.95C17.482 3.51 20.25 6.276 20.252 9.80601C20.249 11.716 19.31 13.65 17.738 14.982H17.737Z"
          fill="#536471"
        />
      </g>
    </svg>
  );
};

export const ShareIcon: FC<IconProps> = ({className}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className ?className : ""}
    >
      <mask
        id="mask0_96_605"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_96_605)">
        <path
          d="M17.53 7.21975L12.53 2.21975C12.237 1.92675 11.762 1.92675 11.47 2.21975L6.47001 7.21975C6.17601 7.51275 6.17601 7.98775 6.47001 8.27975C6.76401 8.57175 7.23701 8.57375 7.53001 8.27975L11.25 4.55975V14.7498C11.25 15.1638 11.586 15.4998 12 15.4998C12.414 15.4998 12.75 15.1638 12.75 14.7498V4.55975L16.47 8.27975C16.616 8.42675 16.808 8.49975 17 8.49975C17.192 8.49975 17.384 8.42775 17.53 8.27975C17.823 7.98675 17.823 7.51275 17.53 7.21975Z"
          fill="#536471"
        />
        <path
          d="M19.708 21.6938H4.29201C3.02801 21.6938 2 20.6658 2 19.4018V13.7498C2 13.3358 2.336 12.9998 2.75 12.9998C3.164 12.9998 3.5 13.3358 3.5 13.7498V19.4018C3.5 19.8388 3.85501 20.1938 4.29201 20.1938H19.708C20.145 20.1938 20.5 19.8388 20.5 19.4018V13.7498C20.5 13.3358 20.836 12.9998 21.25 12.9998C21.664 12.9998 22 13.3358 22 13.7498V19.4018C22 20.6658 20.972 21.6938 19.708 21.6938Z"
          fill="#536471"
        />
      </g>
    </svg>
  );
};

export const DollarIcon: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
        fill="#FFB547"
      />
      <path
        d="M12 8H14C14 6.58 12.74 5.43 11 5.1V4C11 3.73478 10.8946 3.48043 10.7071 3.29289C10.5196 3.10536 10.2652 3 10 3C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V5.1C7.26 5.43 6 6.58 6 8C6 9.42 7.26 10.57 9 10.9V12.85C8.37 12.64 8 12.28 8 12H6C6 13.42 7.26 14.57 9 14.9V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17C10.2652 17 10.5196 16.8946 10.7071 16.7071C10.8946 16.5196 11 16.2652 11 16V14.9C12.74 14.57 14 13.42 14 12C14 10.58 12.74 9.43 11 9.1V7.15C11.63 7.36 12 7.72 12 8ZM8 8C8 7.72 8.37 7.36 9 7.15V8.85C8.37 8.64 8 8.28 8 8ZM12 12C12 12.28 11.63 12.64 11 12.85V11.15C11.63 11.36 12 11.72 12 12Z"
        fill="#FFB547"
      />
    </svg>
  );
};

export const CloseIcon: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4.16675 4.16666L15.8334 15.8333M15.8334 4.16666L4.16675 15.8333"
        stroke="#686B6E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const FeelIcon: FC<IconProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <path
        d="M10 13.8333V10.5M10 7.16667H10.0083M17.5 10.5C17.5 6.35786 14.1421 3 10 3C5.85786 3 2.5 6.35786 2.5 10.5C2.5 14.6421 5.85786 18 10 18C14.1421 18 17.5 14.6421 17.5 10.5Z"
        stroke="#686B6E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const PlusIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.00001V12M12 12V19M12 12H19M12 12H5"
        stroke="#686B6E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const MinusIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H12H5"
        stroke="#686B6E"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const SelectIcon: FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_139_351)">
        <rect x="3" y="2" width="24" height="24" rx="4" fill="#FFB547" />
        <path
          d="M10.5 13.4L13.1455 16.2218C13.5405 16.6432 14.2095 16.6432 14.6045 16.2218L19.5 11"
          stroke="#0C1132"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_139_351"
          x="0"
          y="0"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_139_351"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_139_351"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_139_351"
            result="effect2_dropShadow_139_351"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_139_351"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const UnselectIcon: FC = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_139_770)">
        <rect x="4" y="3" width="24" height="24" rx="4" fill="#070A13" />
        <rect
          x="3.5"
          y="2.5"
          width="25"
          height="25"
          rx="4.5"
          stroke="#363A3D"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_139_770"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_139_770"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_139_770"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_139_770"
            result="effect2_dropShadow_139_770"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_139_770"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const NextIcon = () => {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="29.1421"
        width="41.2132"
        height="41.2132"
        rx="20.6066"
        transform="rotate(45 29.1421 0)"
        fill="white"
      />
      <path
        d="M23.6421 19.6422L34.6421 29.1422L23.6421 38.6421"
        stroke="#047EFF"
        strokeWidth="5"
      />
    </svg>
  );
};

export const PrevIcon = () => {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="29.1421"
        y="58.2842"
        width="41.2132"
        height="41.2132"
        rx="20.6066"
        transform="rotate(-135 29.1421 58.2842)"
        fill="white"
      />
      <path
        d="M34.6421 38.6421L23.6421 29.1421L34.6421 19.6421"
        stroke="#047EFF"
        strokeWidth="5"
      />
    </svg>
  );
};
