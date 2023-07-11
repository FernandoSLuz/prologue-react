import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
  return (
  <svg
    className="logo"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.83506 38.1273C6.73779 38.1273 6.64013 38.0754 6.53467 37.9449L4.66826 35.7929C4.11631 35.1594 3.85693 34.4828 3.85693 33.8926C3.85693 32.8511 4.64404 32.0531 6.01553 32.0531H6.05615C6.21826 32.0531 6.34014 32.1051 6.44561 32.2355L8.31201 34.3875C8.87998 35.0469 9.14795 35.7238 9.14795 36.3136C9.14795 37.3461 8.34443 38.1273 6.97334 38.1273H6.83545H6.83506ZM3.9624 35.9582C3.9624 35.7758 4.02725 35.6804 4.1249 35.6804C4.18975 35.6804 4.27099 35.7238 4.35224 35.8191L5.9831 37.7109C6.04795 37.789 6.08037 37.8672 6.08037 37.9367C6.08037 38.0496 5.99092 38.1277 5.8124 38.1277H4.27881C4.07607 38.1277 3.9624 38.0062 3.9624 37.7894V35.9586V35.9582ZM8.896 34.0664C8.896 34.2398 8.82295 34.3355 8.72568 34.3355C8.66084 34.3355 8.58779 34.2922 8.50654 34.2054L6.99717 32.4699C6.93232 32.3918 6.8999 32.3136 6.8999 32.2441C6.8999 32.1312 6.98896 32.0531 7.16748 32.0531H8.57959C8.78232 32.0531 8.896 32.1746 8.896 32.3914V34.066V34.0664Z"
      fill="#414141"
    />
    <path
      d="M11.6629 31.7843C11.8656 31.7843 11.9793 31.9058 11.9793 32.1226V37.8496C11.9793 38.0925 11.8899 38.214 11.6223 38.214H11.3219C9.9344 38.214 9.38245 37.5285 9.38245 35.8277V33.7972C9.38245 33.6062 9.43127 33.4503 9.52854 33.3199L10.559 32.0097C10.6887 31.8363 10.8106 31.7839 10.9727 31.7839H11.6625L11.6629 31.7843ZM12.1821 33.346C12.1821 33.2332 12.2387 33.1726 12.3442 33.1726H12.4414C12.5469 33.1726 12.6035 33.2332 12.6035 33.346V34.7343C12.6035 34.8472 12.5469 34.9078 12.4414 34.9078H12.3442C12.2387 34.9078 12.1821 34.8472 12.1821 34.7343V33.346Z"
      fill="#414141"
    />
    <path
      d="M12.7258 35.6285C12.7258 34.1359 13.6426 33.164 15.1359 33.0515C15.3469 33.0343 15.4605 33.1644 15.4605 33.3812V37.9109C15.4605 38.1277 15.3469 38.2582 15.1117 38.2406C13.6512 38.1191 12.7262 37.13 12.7262 35.6289L12.7258 35.6285ZM15.7039 37.9105V33.3808C15.7039 33.164 15.8176 33.0336 16.0285 33.0511C17.5215 33.164 18.4387 34.1359 18.4387 35.6281C18.4387 37.1203 17.5137 38.1183 16.0367 38.2398C15.8176 38.257 15.7039 38.1269 15.7039 37.9101V37.9105Z"
      fill="#414141"
    />
    <path
      d="M21.2782 37.789C21.2782 38.0058 21.1646 38.1273 20.9618 38.1273H18.9982C18.7954 38.1273 18.6818 38.0058 18.6818 37.789V33.5113C18.6818 33.2945 18.7954 33.173 18.9982 33.173H20.9618C21.1646 33.173 21.2782 33.2945 21.2782 33.5113V37.789ZM21.5216 34.1187C21.5216 33.416 21.8462 33.1296 22.5927 33.1296H22.6415C22.6982 33.1296 22.7712 33.1296 22.8443 33.1382C23.0146 33.1554 23.0876 33.2769 23.0876 33.4851V34.3441C23.0876 35.0902 22.7872 35.3679 21.9923 35.3679H21.8056C21.6189 35.3679 21.5216 35.2464 21.5216 35.0296V34.1187Z"
      fill="#414141"
    />
    <path
      d="M23.2747 31.2465C23.2747 31.0297 23.3883 30.9082 23.5911 30.9082H25.7172C25.92 30.9082 26.0336 31.0297 26.0336 31.2465V32.4437C26.0336 32.6605 25.92 32.782 25.7172 32.782H23.5911C23.3883 32.782 23.2747 32.6605 23.2747 32.4437V31.2465ZM23.3559 33.5113C23.3559 33.2945 23.4696 33.173 23.6723 33.173H25.636C25.8387 33.173 25.9524 33.2945 25.9524 33.5113V37.7891C25.9524 38.0059 25.8387 38.1273 25.636 38.1273H23.6723C23.4696 38.1273 23.3559 38.0059 23.3559 37.7891V33.5113Z"
      fill="#414141"
    />
    <path
      d="M28.3949 33.0512C28.6059 33.034 28.7195 33.1641 28.7195 33.3809V35.4461C28.7195 35.6629 28.6059 35.7844 28.4031 35.7844H26.5125C26.3098 35.7844 26.1961 35.6629 26.2121 35.4114C26.3016 34.1793 26.9668 33.1641 28.3949 33.0512ZM26.5367 36.0449H30.4481C30.6508 36.0449 30.7645 36.1664 30.7645 36.3832V37.7891C30.7645 38.0059 30.6508 38.1274 30.4481 38.1274H28.6629C27.2348 38.1274 26.3422 37.5461 26.2285 36.4352C26.2043 36.166 26.334 36.0446 26.5367 36.0446V36.0449ZM29.2793 35.7848C29.0766 35.7848 28.9629 35.6633 28.9629 35.4465V33.3813C28.9629 33.1645 29.0766 33.0254 29.2957 33.043C30.7403 33.1645 31.4785 34.0754 31.5192 35.4117C31.5274 35.6981 31.4055 35.7848 31.2028 35.7848H29.2797H29.2793Z"
      fill="#414141"
    />
    <path
      d="M34.2611 38.1273C34.0986 38.1273 33.9931 38.0754 33.8474 37.9191L32.3462 36.2359C31.8755 35.7066 31.6564 35.1601 31.6564 34.6742C31.6564 33.8324 32.3056 33.173 33.4497 33.173H33.474C33.6361 33.173 33.7497 33.2336 33.8634 33.3551L35.381 35.0558C35.8517 35.5851 36.0708 36.1406 36.0708 36.6351C36.0708 37.4769 35.4298 38.1277 34.2939 38.1277H34.2615L34.2611 38.1273ZM31.7618 36.548C31.7618 36.3656 31.8349 36.2617 31.9404 36.2617C32.0052 36.2617 32.0865 36.3051 32.1677 36.3918L33.3443 37.7105C33.4173 37.7886 33.4497 37.8668 33.4497 37.9363C33.4497 38.0492 33.3525 38.1273 33.174 38.1273L32.0786 38.1359C31.8759 38.1359 31.7622 38.0144 31.7622 37.7976V36.548H31.7618ZM35.9083 34.6824C35.9083 34.8648 35.8353 34.9687 35.7298 34.9687C35.665 34.9687 35.5837 34.9254 35.4947 34.8301L34.3993 33.589C34.3263 33.5109 34.2939 33.4328 34.2939 33.3633C34.2939 33.2504 34.3833 33.1722 34.5615 33.1722H35.5919C35.7947 33.1722 35.9083 33.2937 35.9083 33.5105V34.682V34.6824Z"
      fill="#414141"
    />
    <path
      d="M21.3777 8.76761C23.4828 9.14612 25.1714 10.9598 25.3757 12.8969C25.621 15.2239 24.5203 17.1559 22.398 18.1246C21.5359 18.518 21.4093 18.8528 21.8632 19.666C23.2914 22.2231 24.7144 24.7828 26.1691 27.325C27.2664 29.243 29.5769 30.1629 31.7418 29.5965C33.8492 29.0453 35.3261 27.1129 35.3687 24.8938C35.3957 23.5059 34.8402 22.3262 34.1648 21.1657C30.8437 15.4578 27.5304 9.74534 24.2289 4.0262C23.5402 2.83362 22.6289 1.90511 21.3293 1.42659C19.407 0.718777 17.5621 0.836746 15.9476 2.19768C14.4 3.50198 13.8351 5.18636 14.2585 7.18011C14.4988 8.31175 14.9382 8.66722 16.0785 8.67112C19.7765 8.68323 20.5046 8.61136 21.3773 8.768L21.3777 8.76761ZM13.5472 17.1805C13.5472 14.6352 13.5554 12.0899 13.5429 9.54495C13.5382 8.62229 13.0027 8.10198 12.2968 8.36448C11.9984 8.47542 11.7195 8.78675 11.55 9.0762C9.11675 13.225 6.69761 17.3817 4.2941 21.5481C4.00699 22.0461 3.78745 22.595 3.61441 23.1446C2.8187 25.6715 4.15269 28.4364 6.61011 29.4059C9.91949 30.7121 13.4628 28.2594 13.5367 24.5672C13.5859 22.1059 13.546 19.643 13.5472 17.1809V17.1805Z"
      fill="#414141"
    />
  </svg>
  )
};

// Here you could map state values to props if needed
const mapStateToProps = ({ bot }) => ({
  // your state values here
})

// Here you could map dispatch actions to props if needed
const mapDispatchToProps = dispatch => ({
  // your dispatch actions here
})

// Then connect your component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);