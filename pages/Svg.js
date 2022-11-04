import React from 'react';
import Image from 'next/image';
import Floor from '../assets/floor.png';
const Svg = () => {
    return (
        <div>
            <svg
                width='728'
                height='506'
                viewBox='0 0 728 506'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='test_svg'
            >
                <rect width='842' height='569' fill='url(#pattern0)' />
                <path
                    opacity='0.39'
                    d='M295.7 169.6V365.1H766.1V135.5H536.6V167.8L295.7 169.6Z'
                    // fill='#00A651'
                    fill='#fff'
                    className='svghover'
                />
                <path
                    opacity='0.93'
                    d='M40 135.5V304L291.3 305.3V168.4L274.5 168.1L273.9 92.8L231.1 36H137.7L101.1 89.6L100.2 134.4H40V135.5Z'
                    fill='#1E1E1E'
                />
                <path
                    d='M94.3447 200.469C95.6586 201.126 96.644 201.934 97.3009 202.893C97.9757 203.834 98.313 204.988 98.313 206.355C98.313 207.74 98.0289 208.938 97.4607 209.95C96.9103 210.98 96.1202 211.77 95.0904 212.321C94.0783 212.871 92.8799 213.146 91.4949 213.146C89.3998 213.146 87.7397 212.525 86.5145 211.282C85.2894 210.057 84.6769 208.379 84.6769 206.248C84.6769 204.508 85.0941 203.097 85.9286 202.014C86.7809 200.913 88.1924 199.919 90.1633 199.031C90.9268 198.693 91.4949 198.409 91.8678 198.179C92.2407 197.93 92.4892 197.699 92.6135 197.486C92.7378 197.255 92.8 196.989 92.8 196.687C92.8 196.332 92.6757 196.048 92.4271 195.835C92.1785 195.604 91.8234 195.489 91.3618 195.489C90.8469 195.489 90.4562 195.604 90.1899 195.835C89.9236 196.066 89.7904 196.376 89.7904 196.767C89.7904 196.98 89.817 197.184 89.8703 197.38L86.2482 198.338C85.9996 197.77 85.8753 197.211 85.8753 196.661C85.8753 195.897 86.115 195.213 86.5944 194.61C87.0916 193.988 87.7663 193.5 88.6186 193.145C89.4708 192.79 90.4296 192.612 91.4949 192.612C92.5603 192.612 93.4924 192.799 94.2914 193.172C95.1082 193.527 95.7385 194.024 96.1824 194.663C96.6262 195.284 96.8482 195.986 96.8482 196.767C96.8482 197.531 96.6706 198.196 96.3155 198.765C95.9782 199.333 95.3212 199.901 94.3447 200.469ZM91.4683 210.057C93.1551 210.057 93.9984 208.823 93.9984 206.355C93.9984 204.242 93.3681 202.644 92.1075 201.561C91.2552 201.987 90.6072 202.422 90.1633 202.866C89.7371 203.31 89.4353 203.807 89.2578 204.357C89.098 204.89 89.0181 205.565 89.0181 206.382C89.0181 207.607 89.2222 208.521 89.6306 209.125C90.0567 209.746 90.6693 210.057 91.4683 210.057ZM107.498 193.065C107.534 193.633 107.702 194.166 108.004 194.663C108.306 195.142 108.759 195.746 109.362 196.474C109.913 197.131 110.357 197.708 110.694 198.205C111.031 198.685 111.316 199.253 111.546 199.91C111.795 200.567 111.919 201.295 111.919 202.094C111.919 203.194 111.653 204.171 111.12 205.023C110.588 205.876 109.833 206.533 108.856 206.994C107.898 207.456 106.779 207.687 105.501 207.687C104.204 207.687 103.077 207.447 102.118 206.968C101.177 206.47 100.458 205.805 99.9609 204.97C99.4638 204.136 99.2152 203.194 99.2152 202.147C99.2152 201.046 99.4815 200.025 100.014 199.084L103.663 200.043C103.468 200.664 103.37 201.357 103.37 202.12C103.37 202.884 103.548 203.487 103.903 203.931C104.275 204.357 104.808 204.571 105.501 204.571C106.211 204.571 106.735 204.357 107.072 203.931C107.427 203.487 107.605 202.919 107.605 202.227C107.605 201.499 107.445 200.869 107.125 200.336C106.823 199.785 106.344 199.129 105.687 198.365C105.154 197.744 104.728 197.22 104.409 196.794C104.107 196.35 103.84 195.817 103.61 195.196C103.397 194.574 103.29 193.864 103.29 193.065H107.498ZM126.119 193.065V207.26C126.119 208.397 125.87 209.409 125.373 210.297C124.876 211.184 124.148 211.877 123.189 212.374C122.248 212.889 121.112 213.146 119.78 213.146C118.484 213.146 117.365 212.907 116.424 212.427C115.483 211.966 114.764 211.326 114.267 210.51C113.77 209.711 113.521 208.823 113.521 207.846C113.521 206.905 113.779 206.018 114.294 205.183L117.889 206.195C117.729 206.71 117.649 207.243 117.649 207.793C117.649 208.486 117.836 209.036 118.209 209.444C118.599 209.853 119.123 210.057 119.78 210.057C120.508 210.057 121.041 209.817 121.378 209.338C121.733 208.858 121.911 208.228 121.911 207.447V202.759C120.952 203.63 119.825 204.065 118.528 204.065C117.587 204.065 116.735 203.834 115.972 203.372C115.208 202.91 114.604 202.236 114.161 201.348C113.734 200.442 113.521 199.368 113.521 198.125C113.521 196.332 113.93 194.645 114.746 193.065H118.741C118.12 194.574 117.809 196.163 117.809 197.832C117.809 199.927 118.466 200.975 119.78 200.975C120.597 200.975 121.307 200.647 121.911 199.99V193.065H126.119ZM128.69 199.643C128.69 197.424 129.285 195.702 130.475 194.477C131.664 193.234 133.289 192.612 135.348 192.612C137.408 192.612 139.024 193.225 140.196 194.45C141.385 195.675 141.98 197.406 141.98 199.643C141.98 202.058 141.456 204.579 140.409 207.207H136.36C137.248 204.384 137.692 201.872 137.692 199.67C137.692 198.285 137.497 197.282 137.106 196.661C136.716 196.021 136.13 195.702 135.348 195.702C134.549 195.702 133.955 196.021 133.564 196.661C133.173 197.282 132.978 198.285 132.978 199.67C132.978 200.895 133.093 202.111 133.324 203.319C133.555 204.508 133.884 205.805 134.31 207.207H130.288C129.223 204.615 128.69 202.094 128.69 199.643ZM158.046 206.435C156.697 206.435 155.543 206.142 154.584 205.556C153.625 204.97 152.897 204.162 152.4 203.132C151.903 202.085 151.654 200.904 151.654 199.59C151.654 198.418 151.832 197.353 152.187 196.394C151.637 195.897 151.06 195.648 150.456 195.648C148.982 195.648 148.245 197.016 148.245 199.75C148.245 201.614 148.68 203.106 149.55 204.224C150.438 205.325 151.672 206.177 153.252 206.781C154.744 207.332 155.996 207.909 157.008 208.512C158.02 209.134 158.89 209.915 159.618 210.856L156.848 213.146C156.28 212.33 155.525 211.637 154.584 211.069C153.643 210.519 152.586 210.243 151.415 210.243C150.598 210.243 149.817 210.368 149.071 210.616C148.343 210.865 147.606 211.211 146.86 211.655L145.875 208.672C146.94 208.193 148.13 207.953 149.444 207.953C147.757 207.154 146.416 206.124 145.422 204.864C144.446 203.603 143.957 201.818 143.957 199.51C143.957 198.001 144.206 196.732 144.703 195.702C145.2 194.654 145.875 193.882 146.727 193.385C147.579 192.87 148.538 192.612 149.604 192.612C151.148 192.612 152.48 193.154 153.599 194.237C154.717 193.154 156.191 192.612 158.02 192.612C159.369 192.612 160.523 192.914 161.482 193.518C162.441 194.104 163.169 194.92 163.666 195.968C164.163 196.998 164.412 198.187 164.412 199.537C164.412 201.65 163.852 203.328 162.734 204.571C161.615 205.813 160.053 206.435 158.046 206.435ZM158.02 195.622C157.274 195.622 156.723 195.941 156.368 196.581C156.013 197.22 155.836 198.214 155.836 199.564C155.836 200.86 156.013 201.827 156.368 202.467C156.741 203.106 157.301 203.425 158.046 203.425C159.502 203.425 160.23 202.129 160.23 199.537C160.23 198.223 160.044 197.246 159.671 196.607C159.316 195.95 158.765 195.622 158.02 195.622ZM175.145 192.612C176.601 192.612 177.728 193.047 178.527 193.917C179.344 194.787 179.752 195.933 179.752 197.353V207.047C179.752 208.237 179.495 209.293 178.98 210.217C178.465 211.14 177.702 211.859 176.69 212.374C175.695 212.889 174.506 213.146 173.121 213.146C171.771 213.146 170.608 212.889 169.632 212.374C168.673 211.877 167.945 211.176 167.448 210.27C166.951 209.382 166.702 208.379 166.702 207.26C166.702 206.053 166.977 204.881 167.528 203.745L171.23 204.677C170.964 205.547 170.83 206.417 170.83 207.287C170.83 208.157 171.017 208.832 171.39 209.311C171.78 209.808 172.357 210.057 173.121 210.057C173.92 210.057 174.523 209.8 174.932 209.285C175.34 208.787 175.544 208.068 175.544 207.127V197.273C175.544 196.208 175.136 195.675 174.319 195.675C173.485 195.675 173.068 196.181 173.068 197.193V200.256L169.259 200.682V197.273C169.259 196.439 168.895 196.021 168.167 196.021L167.608 196.048C167.324 196.083 167.093 196.101 166.915 196.101C166.312 196.101 165.841 195.968 165.504 195.702L165.957 192.692C166.329 192.799 166.658 192.852 166.942 192.852C167.208 192.852 167.475 192.825 167.741 192.772C168.327 192.719 168.673 192.692 168.78 192.692C169.383 192.692 169.925 192.861 170.404 193.198C170.901 193.536 171.239 194.104 171.416 194.903C171.967 193.376 173.21 192.612 175.145 192.612ZM202.249 192.612C203.882 192.612 205.187 193.163 206.164 194.264C207.158 195.347 207.655 196.918 207.655 198.978C207.655 200.38 207.54 201.623 207.309 202.706C207.096 203.772 206.75 204.784 206.27 205.742L202.595 204.597C202.861 203.763 203.057 202.928 203.181 202.094C203.305 201.241 203.367 200.274 203.367 199.191C203.367 197.966 203.208 197.078 202.888 196.527C202.586 195.977 202.169 195.702 201.636 195.702C201.21 195.702 200.864 195.862 200.598 196.181C200.331 196.501 200.198 196.98 200.198 197.619V202.36L196.31 202.786V197.646C196.31 196.35 195.83 195.702 194.872 195.702C194.41 195.702 194.046 195.862 193.78 196.181C193.513 196.501 193.38 196.989 193.38 197.646V202.333L189.465 202.786V197.619C189.465 196.341 189.003 195.702 188.08 195.702C187.476 195.702 187.033 196.012 186.748 196.634C186.464 197.255 186.322 198.258 186.322 199.643C186.322 201.046 186.633 202.191 187.254 203.079C187.876 203.967 188.648 204.65 189.572 205.13C190.513 205.609 191.676 206.062 193.06 206.488C194.872 207.021 196.398 207.616 197.641 208.273C198.902 208.929 199.958 209.8 200.811 210.883L198.121 213.146C197.34 212.205 196.398 211.46 195.298 210.909C194.215 210.377 192.963 210.11 191.542 210.11C190.53 210.11 189.616 210.252 188.799 210.536C187.982 210.82 187.139 211.229 186.269 211.761L185.284 208.779C186.42 208.228 187.725 207.953 189.199 207.953C187.104 207.42 185.381 206.453 184.032 205.05C182.7 203.63 182.034 201.747 182.034 199.404C182.034 197.113 182.505 195.409 183.446 194.29C184.405 193.172 185.719 192.612 187.388 192.612C189.518 192.612 190.85 193.598 191.383 195.569C191.578 194.574 191.969 193.837 192.554 193.358C193.158 192.861 193.93 192.612 194.872 192.612C195.777 192.612 196.532 192.861 197.135 193.358C197.739 193.855 198.13 194.592 198.307 195.569C198.538 194.61 198.982 193.882 199.639 193.385C200.314 192.87 201.184 192.612 202.249 192.612ZM209.63 199.643C209.63 197.424 210.225 195.702 211.414 194.477C212.604 193.234 214.228 192.612 216.288 192.612C218.348 192.612 219.963 193.225 221.135 194.45C222.325 195.675 222.92 197.406 222.92 199.643C222.92 202.058 222.396 204.579 221.348 207.207H217.3C218.188 204.384 218.632 201.872 218.632 199.67C218.632 198.285 218.436 197.282 218.046 196.661C217.655 196.021 217.069 195.702 216.288 195.702C215.489 195.702 214.894 196.021 214.504 196.661C214.113 197.282 213.918 198.285 213.918 199.67C213.918 200.895 214.033 202.111 214.264 203.319C214.495 204.508 214.823 205.805 215.249 207.207H211.228C210.162 204.615 209.63 202.094 209.63 199.643ZM232.887 193.065C232.922 193.633 233.091 194.166 233.393 194.663C233.695 195.142 234.148 195.746 234.751 196.474C235.302 197.131 235.746 197.708 236.083 198.205C236.42 198.685 236.704 199.253 236.935 199.91C237.184 200.567 237.308 201.295 237.308 202.094C237.308 203.194 237.042 204.171 236.509 205.023C235.976 205.876 235.222 206.533 234.245 206.994C233.286 207.456 232.168 207.687 230.889 207.687C229.593 207.687 228.466 207.447 227.507 206.968C226.566 206.47 225.847 205.805 225.35 204.97C224.853 204.136 224.604 203.194 224.604 202.147C224.604 201.046 224.87 200.025 225.403 199.084L229.052 200.043C228.856 200.664 228.759 201.357 228.759 202.12C228.759 202.884 228.936 203.487 229.291 203.931C229.664 204.357 230.197 204.571 230.889 204.571C231.6 204.571 232.123 204.357 232.461 203.931C232.816 203.487 232.993 202.919 232.993 202.227C232.993 201.499 232.834 200.869 232.514 200.336C232.212 199.785 231.733 199.129 231.076 198.365C230.543 197.744 230.117 197.22 229.798 196.794C229.496 196.35 229.229 195.817 228.999 195.196C228.785 194.574 228.679 193.864 228.679 193.065H232.887Z'
                    fill='#B20000'
                />
                <path
                    opacity='0.39'
                    d='M40 350.2V541.8H291.3V450.6H170.5L170.9 350.2H40Z'
                    // fill='#00A651'
                    fill='#fff'
                    className='svghover'
                />
                <path opacity='0.93' d='M766.1 369.9H535.7V541.8H767.8L766.1 369.9Z' fill='#1E1E1E' />
                <path
                    opacity='0.93'
                    d='M40.7 311.7V345.3H177.6V446H295.7V541.8H529.6V369.9H291.3V311.7H40.7Z'
                    fill='#1E1E1E'
                />
                <path
                    d='M580.454 457.451C581.768 458.108 582.753 458.916 583.41 459.875C584.085 460.816 584.422 461.97 584.422 463.337C584.422 464.722 584.138 465.92 583.57 466.932C583.019 467.962 582.229 468.752 581.2 469.303C580.187 469.853 578.989 470.128 577.604 470.128C575.509 470.128 573.849 469.507 572.624 468.264C571.399 467.039 570.786 465.361 570.786 463.23C570.786 461.49 571.203 460.079 572.038 458.996C572.89 457.895 574.302 456.9 576.272 456.013C577.036 455.675 577.604 455.391 577.977 455.16C578.35 454.912 578.598 454.681 578.723 454.468C578.847 454.237 578.909 453.971 578.909 453.669C578.909 453.314 578.785 453.03 578.536 452.817C578.288 452.586 577.933 452.471 577.471 452.471C576.956 452.471 576.565 452.586 576.299 452.817C576.033 453.048 575.9 453.358 575.9 453.749C575.9 453.962 575.926 454.166 575.979 454.361L572.357 455.32C572.109 454.752 571.984 454.193 571.984 453.642C571.984 452.879 572.224 452.195 572.704 451.592C573.201 450.97 573.875 450.482 574.728 450.127C575.58 449.772 576.539 449.594 577.604 449.594C578.669 449.594 579.602 449.781 580.401 450.153C581.217 450.509 581.848 451.006 582.291 451.645C582.735 452.266 582.957 452.968 582.957 453.749C582.957 454.512 582.78 455.178 582.425 455.746C582.087 456.315 581.43 456.883 580.454 457.451ZM577.577 467.039C579.264 467.039 580.108 465.805 580.108 463.337C580.108 461.224 579.477 459.626 578.217 458.543C577.364 458.969 576.716 459.404 576.272 459.848C575.846 460.292 575.544 460.789 575.367 461.339C575.207 461.872 575.127 462.547 575.127 463.363C575.127 464.589 575.331 465.503 575.74 466.107C576.166 466.728 576.778 467.039 577.577 467.039ZM593.607 450.047C593.643 450.615 593.811 451.148 594.113 451.645C594.415 452.124 594.868 452.728 595.472 453.456C596.022 454.113 596.466 454.69 596.803 455.187C597.141 455.666 597.425 456.235 597.655 456.892C597.904 457.549 598.028 458.277 598.028 459.076C598.028 460.176 597.762 461.153 597.229 462.005C596.697 462.857 595.942 463.514 594.966 463.976C594.007 464.438 592.888 464.668 591.61 464.668C590.314 464.668 589.186 464.429 588.227 463.949C587.286 463.452 586.567 462.786 586.07 461.952C585.573 461.117 585.324 460.176 585.324 459.129C585.324 458.028 585.591 457.007 586.123 456.066L589.772 457.025C589.577 457.646 589.479 458.339 589.479 459.102C589.479 459.866 589.657 460.469 590.012 460.913C590.385 461.339 590.917 461.552 591.61 461.552C592.32 461.552 592.844 461.339 593.181 460.913C593.536 460.469 593.714 459.901 593.714 459.209C593.714 458.481 593.554 457.85 593.234 457.318C592.933 456.767 592.453 456.11 591.796 455.347C591.264 454.725 590.837 454.202 590.518 453.776C590.216 453.332 589.95 452.799 589.719 452.178C589.506 451.556 589.399 450.846 589.399 450.047H593.607ZM612.228 450.047V464.242C612.228 465.379 611.979 466.391 611.482 467.279C610.985 468.166 610.257 468.859 609.298 469.356C608.357 469.871 607.221 470.128 605.889 470.128C604.593 470.128 603.475 469.889 602.533 469.409C601.592 468.948 600.873 468.308 600.376 467.492C599.879 466.693 599.63 465.805 599.63 464.828C599.63 463.887 599.888 462.999 600.403 462.165L603.998 463.177C603.838 463.692 603.759 464.225 603.759 464.775C603.759 465.467 603.945 466.018 604.318 466.426C604.709 466.835 605.232 467.039 605.889 467.039C606.617 467.039 607.15 466.799 607.487 466.32C607.842 465.84 608.02 465.21 608.02 464.429V459.741C607.061 460.611 605.934 461.046 604.637 461.046C603.696 461.046 602.844 460.816 602.081 460.354C601.317 459.892 600.714 459.218 600.27 458.33C599.844 457.424 599.63 456.35 599.63 455.107C599.63 453.314 600.039 451.627 600.856 450.047H604.851C604.229 451.556 603.918 453.145 603.918 454.814C603.918 456.909 604.575 457.957 605.889 457.957C606.706 457.957 607.416 457.628 608.02 456.972V450.047H612.228ZM614.799 456.625C614.799 454.406 615.394 452.684 616.584 451.458C617.773 450.216 619.398 449.594 621.458 449.594C623.517 449.594 625.133 450.207 626.305 451.432C627.494 452.657 628.089 454.388 628.089 456.625C628.089 459.04 627.565 461.561 626.518 464.189H622.47C623.357 461.366 623.801 458.854 623.801 456.652C623.801 455.267 623.606 454.264 623.215 453.642C622.825 453.003 622.239 452.684 621.458 452.684C620.659 452.684 620.064 453.003 619.673 453.642C619.283 454.264 619.087 455.267 619.087 456.652C619.087 457.877 619.203 459.093 619.433 460.301C619.664 461.49 619.993 462.786 620.419 464.189H616.397C615.332 461.597 614.799 459.076 614.799 456.625ZM644.155 463.417C642.806 463.417 641.652 463.124 640.693 462.538C639.734 461.952 639.006 461.144 638.509 460.114C638.012 459.067 637.763 457.886 637.763 456.572C637.763 455.4 637.941 454.335 638.296 453.376C637.746 452.879 637.169 452.63 636.565 452.63C635.091 452.63 634.354 453.997 634.354 456.732C634.354 458.596 634.789 460.088 635.659 461.206C636.547 462.307 637.781 463.159 639.361 463.763C640.853 464.313 642.105 464.89 643.117 465.494C644.129 466.116 644.999 466.897 645.727 467.838L642.957 470.128C642.389 469.312 641.634 468.619 640.693 468.051C639.752 467.5 638.696 467.225 637.524 467.225C636.707 467.225 635.926 467.35 635.18 467.598C634.452 467.847 633.715 468.193 632.969 468.637L631.984 465.654C633.049 465.175 634.239 464.935 635.553 464.935C633.866 464.136 632.526 463.106 631.531 461.845C630.555 460.585 630.066 458.8 630.066 456.492C630.066 454.983 630.315 453.713 630.812 452.684C631.309 451.636 631.984 450.864 632.836 450.367C633.689 449.852 634.647 449.594 635.713 449.594C637.257 449.594 638.589 450.136 639.708 451.219C640.826 450.136 642.3 449.594 644.129 449.594C645.478 449.594 646.632 449.896 647.591 450.5C648.55 451.086 649.278 451.902 649.775 452.95C650.272 453.98 650.521 455.169 650.521 456.519C650.521 458.632 649.961 460.31 648.843 461.552C647.724 462.795 646.162 463.417 644.155 463.417ZM644.129 452.604C643.383 452.604 642.833 452.923 642.478 453.562C642.122 454.202 641.945 455.196 641.945 456.545C641.945 457.842 642.122 458.809 642.478 459.448C642.85 460.088 643.41 460.407 644.155 460.407C645.611 460.407 646.339 459.111 646.339 456.519C646.339 455.205 646.153 454.228 645.78 453.589C645.425 452.932 644.874 452.604 644.129 452.604ZM661.254 449.594C662.71 449.594 663.837 450.029 664.636 450.899C665.453 451.769 665.862 452.914 665.862 454.335V464.029C665.862 465.219 665.604 466.275 665.089 467.199C664.574 468.122 663.811 468.841 662.799 469.356C661.804 469.871 660.615 470.128 659.23 470.128C657.881 470.128 656.718 469.871 655.741 469.356C654.782 468.859 654.054 468.157 653.557 467.252C653.06 466.364 652.811 465.361 652.811 464.242C652.811 463.035 653.087 461.863 653.637 460.727L657.339 461.659C657.073 462.529 656.939 463.399 656.939 464.269C656.939 465.139 657.126 465.814 657.499 466.293C657.889 466.79 658.466 467.039 659.23 467.039C660.029 467.039 660.633 466.781 661.041 466.266C661.449 465.769 661.654 465.05 661.654 464.109V454.255C661.654 453.19 661.245 452.657 660.428 452.657C659.594 452.657 659.177 453.163 659.177 454.175V457.238L655.368 457.664V454.255C655.368 453.42 655.004 453.003 654.276 453.003L653.717 453.03C653.433 453.065 653.202 453.083 653.024 453.083C652.421 453.083 651.95 452.95 651.613 452.684L652.066 449.674C652.438 449.781 652.767 449.834 653.051 449.834C653.317 449.834 653.584 449.807 653.85 449.754C654.436 449.701 654.782 449.674 654.889 449.674C655.492 449.674 656.034 449.843 656.513 450.18C657.011 450.517 657.348 451.086 657.525 451.885C658.076 450.358 659.319 449.594 661.254 449.594ZM688.358 449.594C689.992 449.594 691.297 450.145 692.273 451.245C693.267 452.328 693.765 453.9 693.765 455.959C693.765 457.362 693.649 458.605 693.418 459.688C693.205 460.753 692.859 461.765 692.38 462.724L688.704 461.579C688.971 460.745 689.166 459.91 689.29 459.076C689.414 458.223 689.477 457.256 689.477 456.173C689.477 454.947 689.317 454.06 688.997 453.509C688.695 452.959 688.278 452.684 687.745 452.684C687.319 452.684 686.973 452.843 686.707 453.163C686.44 453.483 686.307 453.962 686.307 454.601V459.342L682.419 459.768V454.628C682.419 453.332 681.939 452.684 680.981 452.684C680.519 452.684 680.155 452.843 679.889 453.163C679.622 453.483 679.489 453.971 679.489 454.628V459.315L675.574 459.768V454.601C675.574 453.323 675.112 452.684 674.189 452.684C673.586 452.684 673.142 452.994 672.858 453.616C672.573 454.237 672.431 455.24 672.431 456.625C672.431 458.028 672.742 459.173 673.364 460.061C673.985 460.949 674.757 461.632 675.681 462.112C676.622 462.591 677.785 463.044 679.17 463.47C680.981 464.003 682.508 464.597 683.75 465.254C685.011 465.911 686.068 466.781 686.92 467.864L684.23 470.128C683.449 469.187 682.508 468.442 681.407 467.891C680.324 467.358 679.072 467.092 677.652 467.092C676.639 467.092 675.725 467.234 674.908 467.518C674.092 467.802 673.248 468.211 672.378 468.743L671.393 465.76C672.529 465.21 673.834 464.935 675.308 464.935C673.213 464.402 671.49 463.434 670.141 462.032C668.809 460.611 668.143 458.729 668.143 456.386C668.143 454.095 668.614 452.391 669.555 451.272C670.514 450.153 671.828 449.594 673.497 449.594C675.627 449.594 676.959 450.58 677.492 452.55C677.687 451.556 678.078 450.819 678.664 450.34C679.267 449.843 680.04 449.594 680.981 449.594C681.886 449.594 682.641 449.843 683.244 450.34C683.848 450.837 684.239 451.574 684.416 452.55C684.647 451.592 685.091 450.864 685.748 450.367C686.423 449.852 687.293 449.594 688.358 449.594ZM695.739 456.625C695.739 454.406 696.334 452.684 697.523 451.458C698.713 450.216 700.338 449.594 702.397 449.594C704.457 449.594 706.073 450.207 707.244 451.432C708.434 452.657 709.029 454.388 709.029 456.625C709.029 459.04 708.505 461.561 707.457 464.189H703.409C704.297 461.366 704.741 458.854 704.741 456.652C704.741 455.267 704.546 454.264 704.155 453.642C703.764 453.003 703.178 452.684 702.397 452.684C701.598 452.684 701.003 453.003 700.613 453.642C700.222 454.264 700.027 455.267 700.027 456.652C700.027 457.877 700.142 459.093 700.373 460.301C700.604 461.49 700.932 462.786 701.359 464.189H697.337C696.272 461.597 695.739 459.076 695.739 456.625ZM718.996 450.047C719.032 450.615 719.2 451.148 719.502 451.645C719.804 452.124 720.257 452.728 720.86 453.456C721.411 454.113 721.855 454.69 722.192 455.187C722.529 455.666 722.813 456.235 723.044 456.892C723.293 457.549 723.417 458.277 723.417 459.076C723.417 460.176 723.151 461.153 722.618 462.005C722.086 462.857 721.331 463.514 720.354 463.976C719.396 464.438 718.277 464.668 716.999 464.668C715.702 464.668 714.575 464.429 713.616 463.949C712.675 463.452 711.956 462.786 711.459 461.952C710.962 461.117 710.713 460.176 710.713 459.129C710.713 458.028 710.98 457.007 711.512 456.066L715.161 457.025C714.966 457.646 714.868 458.339 714.868 459.102C714.868 459.866 715.045 460.469 715.401 460.913C715.773 461.339 716.306 461.552 716.999 461.552C717.709 461.552 718.233 461.339 718.57 460.913C718.925 460.469 719.103 459.901 719.103 459.209C719.103 458.481 718.943 457.85 718.623 457.318C718.321 456.767 717.842 456.11 717.185 455.347C716.652 454.725 716.226 454.202 715.907 453.776C715.605 453.332 715.338 452.799 715.108 452.178C714.895 451.556 714.788 450.846 714.788 450.047H718.996Z'
                    fill='#B20000'
                />
                <path
                    d='M266.235 413.856C267.549 414.513 268.534 415.321 269.191 416.279C269.866 417.22 270.203 418.375 270.203 419.742C270.203 421.127 269.919 422.325 269.351 423.337C268.801 424.367 268.011 425.157 266.981 425.708C265.969 426.258 264.77 426.533 263.385 426.533C261.29 426.533 259.63 425.912 258.405 424.669C257.18 423.444 256.567 421.766 256.567 419.635C256.567 417.895 256.984 416.484 257.819 415.401C258.671 414.3 260.083 413.305 262.054 412.418C262.817 412.08 263.385 411.796 263.758 411.565C264.131 411.317 264.38 411.086 264.504 410.873C264.628 410.642 264.69 410.376 264.69 410.074C264.69 409.719 264.566 409.435 264.317 409.222C264.069 408.991 263.714 408.875 263.252 408.875C262.737 408.875 262.347 408.991 262.08 409.222C261.814 409.452 261.681 409.763 261.681 410.154C261.681 410.367 261.707 410.571 261.761 410.766L258.139 411.725C257.89 411.157 257.766 410.598 257.766 410.047C257.766 409.284 258.005 408.6 258.485 407.997C258.982 407.375 259.657 406.887 260.509 406.532C261.361 406.177 262.32 405.999 263.385 405.999C264.451 405.999 265.383 406.185 266.182 406.558C266.999 406.913 267.629 407.411 268.073 408.05C268.517 408.671 268.739 409.373 268.739 410.154C268.739 410.917 268.561 411.583 268.206 412.151C267.869 412.719 267.212 413.288 266.235 413.856ZM263.359 423.444C265.045 423.444 265.889 422.21 265.889 419.742C265.889 417.629 265.259 416.031 263.998 414.948C263.146 415.374 262.498 415.809 262.054 416.253C261.628 416.697 261.326 417.194 261.148 417.744C260.988 418.277 260.908 418.952 260.908 419.768C260.908 420.993 261.113 421.908 261.521 422.512C261.947 423.133 262.56 423.444 263.359 423.444ZM279.388 406.452C279.424 407.02 279.593 407.553 279.895 408.05C280.196 408.529 280.649 409.133 281.253 409.861C281.803 410.518 282.247 411.095 282.584 411.592C282.922 412.071 283.206 412.64 283.437 413.297C283.685 413.953 283.81 414.681 283.81 415.48C283.81 416.581 283.543 417.558 283.011 418.41C282.478 419.262 281.723 419.919 280.747 420.381C279.788 420.843 278.669 421.073 277.391 421.073C276.095 421.073 274.967 420.834 274.009 420.354C273.068 419.857 272.348 419.191 271.851 418.357C271.354 417.522 271.106 416.581 271.106 415.534C271.106 414.433 271.372 413.412 271.905 412.471L275.553 413.43C275.358 414.051 275.26 414.744 275.26 415.507C275.26 416.271 275.438 416.874 275.793 417.318C276.166 417.744 276.699 417.957 277.391 417.957C278.101 417.957 278.625 417.744 278.962 417.318C279.317 416.874 279.495 416.306 279.495 415.614C279.495 414.886 279.335 414.255 279.016 413.723C278.714 413.172 278.234 412.515 277.577 411.752C277.045 411.13 276.619 410.607 276.299 410.18C275.997 409.737 275.731 409.204 275.5 408.582C275.287 407.961 275.18 407.251 275.18 406.452H279.388ZM298.009 406.452V420.647C298.009 421.784 297.761 422.796 297.263 423.683C296.766 424.571 296.038 425.264 295.08 425.761C294.138 426.276 293.002 426.533 291.67 426.533C290.374 426.533 289.256 426.293 288.315 425.814C287.374 425.352 286.655 424.713 286.157 423.896C285.66 423.098 285.412 422.21 285.412 421.233C285.412 420.292 285.669 419.404 286.184 418.57L289.78 419.582C289.62 420.097 289.54 420.63 289.54 421.18C289.54 421.872 289.726 422.423 290.099 422.831C290.49 423.24 291.014 423.444 291.67 423.444C292.398 423.444 292.931 423.204 293.268 422.725C293.624 422.245 293.801 421.615 293.801 420.834V416.146C292.842 417.016 291.715 417.451 290.419 417.451C289.478 417.451 288.625 417.22 287.862 416.759C287.098 416.297 286.495 415.622 286.051 414.735C285.625 413.829 285.412 412.755 285.412 411.512C285.412 409.719 285.82 408.032 286.637 406.452H290.632C290.01 407.961 289.7 409.55 289.7 411.219C289.7 413.314 290.357 414.362 291.67 414.362C292.487 414.362 293.197 414.033 293.801 413.376V406.452H298.009ZM300.581 413.03C300.581 410.811 301.175 409.088 302.365 407.863C303.555 406.62 305.179 405.999 307.239 405.999C309.298 405.999 310.914 406.612 312.086 407.837C313.276 409.062 313.87 410.793 313.87 413.03C313.87 415.445 313.347 417.966 312.299 420.594H308.251C309.139 417.771 309.583 415.258 309.583 413.057C309.583 411.672 309.387 410.669 308.997 410.047C308.606 409.408 308.02 409.088 307.239 409.088C306.44 409.088 305.845 409.408 305.454 410.047C305.064 410.669 304.868 411.672 304.868 413.057C304.868 414.282 304.984 415.498 305.215 416.706C305.445 417.895 305.774 419.191 306.2 420.594H302.179C301.113 418.002 300.581 415.48 300.581 413.03ZM329.937 419.822C328.587 419.822 327.433 419.529 326.474 418.943C325.516 418.357 324.788 417.549 324.29 416.519C323.793 415.472 323.545 414.291 323.545 412.977C323.545 411.805 323.722 410.74 324.077 409.781C323.527 409.284 322.95 409.035 322.346 409.035C320.873 409.035 320.136 410.402 320.136 413.137C320.136 415.001 320.571 416.492 321.441 417.611C322.328 418.712 323.562 419.564 325.143 420.168C326.634 420.718 327.886 421.295 328.898 421.899C329.91 422.52 330.78 423.302 331.508 424.243L328.738 426.533C328.17 425.716 327.415 425.024 326.474 424.456C325.533 423.905 324.477 423.63 323.305 423.63C322.488 423.63 321.707 423.754 320.961 424.003C320.233 424.252 319.496 424.598 318.751 425.042L317.765 422.059C318.831 421.579 320.02 421.34 321.334 421.34C319.647 420.541 318.307 419.511 317.313 418.25C316.336 416.99 315.848 415.205 315.848 412.897C315.848 411.388 316.096 410.118 316.593 409.088C317.091 408.041 317.765 407.269 318.618 406.771C319.47 406.257 320.429 405.999 321.494 405.999C323.039 405.999 324.37 406.541 325.489 407.624C326.608 406.541 328.081 405.999 329.91 405.999C331.259 405.999 332.414 406.301 333.372 406.905C334.331 407.491 335.059 408.307 335.556 409.355C336.053 410.385 336.302 411.574 336.302 412.924C336.302 415.037 335.743 416.714 334.624 417.957C333.505 419.2 331.943 419.822 329.937 419.822ZM329.91 409.009C329.164 409.009 328.614 409.328 328.259 409.967C327.904 410.607 327.726 411.601 327.726 412.95C327.726 414.246 327.904 415.214 328.259 415.853C328.632 416.492 329.191 416.812 329.937 416.812C331.393 416.812 332.121 415.516 332.121 412.924C332.121 411.61 331.934 410.633 331.561 409.994C331.206 409.337 330.656 409.009 329.91 409.009ZM347.035 405.999C348.491 405.999 349.619 406.434 350.418 407.304C351.234 408.174 351.643 409.319 351.643 410.74V420.434C351.643 421.624 351.385 422.68 350.87 423.604C350.356 424.527 349.592 425.246 348.58 425.761C347.586 426.276 346.396 426.533 345.011 426.533C343.662 426.533 342.499 426.276 341.522 425.761C340.563 425.264 339.835 424.562 339.338 423.657C338.841 422.769 338.593 421.766 338.593 420.647C338.593 419.44 338.868 418.268 339.418 417.132L343.12 418.064C342.854 418.934 342.721 419.804 342.721 420.674C342.721 421.544 342.907 422.219 343.28 422.698C343.671 423.195 344.248 423.444 345.011 423.444C345.81 423.444 346.414 423.186 346.822 422.671C347.231 422.174 347.435 421.455 347.435 420.514V410.66C347.435 409.595 347.026 409.062 346.21 409.062C345.375 409.062 344.958 409.568 344.958 410.58V413.643L341.149 414.069V410.66C341.149 409.825 340.785 409.408 340.057 409.408L339.498 409.435C339.214 409.47 338.983 409.488 338.806 409.488C338.202 409.488 337.731 409.355 337.394 409.088L337.847 406.079C338.22 406.185 338.548 406.239 338.832 406.239C339.099 406.239 339.365 406.212 339.631 406.159C340.217 406.106 340.563 406.079 340.67 406.079C341.274 406.079 341.815 406.248 342.295 406.585C342.792 406.922 343.129 407.491 343.307 408.29C343.857 406.763 345.1 405.999 347.035 405.999ZM374.139 405.999C375.773 405.999 377.078 406.549 378.054 407.65C379.049 408.733 379.546 410.305 379.546 412.364C379.546 413.767 379.43 415.01 379.2 416.093C378.986 417.158 378.64 418.17 378.161 419.129L374.486 417.984C374.752 417.149 374.947 416.315 375.071 415.48C375.196 414.628 375.258 413.661 375.258 412.577C375.258 411.352 375.098 410.465 374.778 409.914C374.477 409.364 374.059 409.088 373.527 409.088C373.101 409.088 372.754 409.248 372.488 409.568C372.222 409.887 372.089 410.367 372.089 411.006V415.747L368.2 416.173V411.033C368.2 409.737 367.721 409.088 366.762 409.088C366.3 409.088 365.936 409.248 365.67 409.568C365.404 409.887 365.27 410.376 365.27 411.033V415.72L361.355 416.173V411.006C361.355 409.728 360.894 409.088 359.97 409.088C359.367 409.088 358.923 409.399 358.639 410.021C358.355 410.642 358.213 411.645 358.213 413.03C358.213 414.433 358.523 415.578 359.145 416.466C359.766 417.354 360.539 418.037 361.462 418.517C362.403 418.996 363.566 419.449 364.951 419.875C366.762 420.408 368.289 421.002 369.532 421.659C370.792 422.316 371.849 423.186 372.701 424.269L370.011 426.533C369.23 425.592 368.289 424.846 367.188 424.296C366.105 423.763 364.853 423.497 363.433 423.497C362.421 423.497 361.506 423.639 360.69 423.923C359.873 424.207 359.029 424.616 358.159 425.148L357.174 422.165C358.31 421.615 359.615 421.34 361.089 421.34C358.994 420.807 357.272 419.839 355.922 418.437C354.591 417.016 353.925 415.134 353.925 412.79C353.925 410.5 354.395 408.796 355.336 407.677C356.295 406.558 357.609 405.999 359.278 405.999C361.409 405.999 362.74 406.984 363.273 408.955C363.468 407.961 363.859 407.224 364.445 406.745C365.049 406.248 365.821 405.999 366.762 405.999C367.667 405.999 368.422 406.248 369.026 406.745C369.629 407.242 370.02 407.979 370.198 408.955C370.428 407.997 370.872 407.269 371.529 406.771C372.204 406.257 373.074 405.999 374.139 405.999ZM381.52 413.03C381.52 410.811 382.115 409.088 383.305 407.863C384.494 406.62 386.119 405.999 388.178 405.999C390.238 405.999 391.854 406.612 393.026 407.837C394.215 409.062 394.81 410.793 394.81 413.03C394.81 415.445 394.286 417.966 393.239 420.594H389.191C390.078 417.771 390.522 415.258 390.522 413.057C390.522 411.672 390.327 410.669 389.936 410.047C389.546 409.408 388.96 409.088 388.178 409.088C387.379 409.088 386.785 409.408 386.394 410.047C386.003 410.669 385.808 411.672 385.808 413.057C385.808 414.282 385.924 415.498 386.154 416.706C386.385 417.895 386.714 419.191 387.14 420.594H383.118C382.053 418.002 381.52 415.48 381.52 413.03ZM404.777 406.452C404.813 407.02 404.982 407.553 405.283 408.05C405.585 408.529 406.038 409.133 406.642 409.861C407.192 410.518 407.636 411.095 407.973 411.592C408.311 412.071 408.595 412.64 408.826 413.297C409.074 413.953 409.198 414.681 409.198 415.48C409.198 416.581 408.932 417.558 408.399 418.41C407.867 419.262 407.112 419.919 406.136 420.381C405.177 420.843 404.058 421.073 402.78 421.073C401.484 421.073 400.356 420.834 399.397 420.354C398.456 419.857 397.737 419.191 397.24 418.357C396.743 417.522 396.494 416.581 396.494 415.534C396.494 414.433 396.761 413.412 397.293 412.471L400.942 413.43C400.747 414.051 400.649 414.744 400.649 415.507C400.649 416.271 400.827 416.874 401.182 417.318C401.555 417.744 402.087 417.957 402.78 417.957C403.49 417.957 404.014 417.744 404.351 417.318C404.706 416.874 404.884 416.306 404.884 415.614C404.884 414.886 404.724 414.255 404.404 413.723C404.103 413.172 403.623 412.515 402.966 411.752C402.434 411.13 402.007 410.607 401.688 410.18C401.386 409.737 401.12 409.204 400.889 408.582C400.676 407.961 400.569 407.251 400.569 406.452H404.777Z'
                    fill='#B20000'
                />
            </svg>
            <Image src={Floor} alt='floor' />
        </div>
    );
};

export default Svg;
