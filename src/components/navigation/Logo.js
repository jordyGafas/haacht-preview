import React from 'react';
import Link from '../shared/Link';

const Logo = ({ locale }) => {
  return (
    <div className="nav-logo">
      <Link to={locale}>
        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="41" viewBox="0 0 105 41">
          <g fill="#FFF" fillRule="evenodd" transform="translate(0 -.108)">
            <path
              fillRule="nonzero"
              d="M13.3653185,5.87184131 L13.3653185,5.87184131 L11.8165477,3.70332962 C12.5811959,3.39305299 13.1013805,2.66445671 13.1530796,1.83131684 C13.1480606,1.38881363 12.9576193,0.969348955 12.6292915,0.677625312 C12.3009638,0.38590167 11.8657279,0.24944369 11.4322231,0.302312622 C10.6521015,0.302312622 9.8777161,0.401145594 9.07464975,0.401145594 C9.00091157,0.400281639 8.93264107,0.440458264 8.89682791,0.505792271 C8.8587141,0.57020948 8.8587141,0.650668416 8.89682791,0.715085625 C9.05395146,1.0807252 9.11710257,1.48075336 9.08038594,1.87782648 L9.08038594,5.53464646 C9.08038594,5.5869698 9.08038594,5.63929314 9.08038594,5.69161648 C9.1108595,6.07153126 9.02898365,6.45203535 8.84520222,6.78459288 C8.8070884,6.84901009 8.8070884,6.92946902 8.84520222,6.99388623 C8.88101537,7.05922024 8.94928588,7.09939687 9.02302405,7.09853291 L10.3825007,7.09853291 C10.4562388,7.09939687 10.5245093,7.05922024 10.5603225,6.99388623 C10.5984363,6.92946902 10.5984363,6.84901009 10.5603225,6.78459288 C10.4017273,6.41939138 10.3385148,6.01897432 10.3767645,5.62185203 L10.3767645,4.06959299 C10.6578377,4.13354373 10.6807824,4.24981782 11.0478985,4.75561009 L12.2352895,6.49972137 C12.4250157,6.86199776 12.7890276,7.09616949 13.1932329,7.11597402 L14.0135078,7.11597402 C14.0966509,7.11718375 14.1719257,7.06632244 14.202802,6.98807253 C14.2324532,6.90887001 14.212073,6.81936254 14.1511763,6.76133806 C13.8565942,6.49620129 13.5929254,6.19775981 13.3653185,5.87184131 L13.3653185,5.87184131 Z M10.606212,3.27892921 L10.3710283,3.27892921 L10.3710283,1.37784791 C10.3710283,1.29064235 10.3710283,1.19762308 10.3710283,1.11041752 L10.6348929,1.11041752 C11.5182659,1.17436826 11.8222839,1.16855456 11.856701,2.02898279 C11.8911182,2.88941102 11.4723764,3.24986069 10.606212,3.27892921 Z M45.1610098,5.81370427 C44.7223664,6.1718455 44.1690661,6.35394293 43.6065028,6.32531024 L42.6887127,6.32531024 L42.6887127,4.06959299 L42.728866,4.06959299 C43.3311657,4.06959299 44.4497224,4.12191633 44.9487708,3.4068307 C44.9892216,3.34098864 44.9892216,3.2575657 44.9487708,3.19172364 C44.9080349,3.12701229 44.834835,3.09104184 44.7594766,3.09870437 C44.0883426,3.16265512 43.3770552,3.16846883 42.6887127,3.16846883 L42.6887127,1.20925049 L43.3942638,1.20925049 C43.8527066,1.16086691 44.3137839,1.27154514 44.7021147,1.52319052 C44.7634694,1.57784141 44.8513765,1.58937007 44.9244354,1.55234697 C44.9974943,1.51532388 45.0411386,1.43713069 45.0348136,1.35459309 L45.0003965,0.581370427 C44.9916381,0.474838628 44.9050744,0.392118467 44.7996299,0.389518186 L41.3980703,0.389518186 C41.3219852,0.386665558 41.2508548,0.427678399 41.2143964,0.495422087 C41.177938,0.563165776 41.1824257,0.645982264 41.2259847,0.709271921 C41.3828673,1.07498291 41.4460085,1.47494799 41.4095427,1.87201277 L41.4095427,5.5869698 C41.4375366,5.98653785 41.3644867,6.38673827 41.1973037,6.74971065 C41.1578725,6.81375181 41.1578725,6.89496285 41.1973037,6.95900401 C41.2315775,7.02658763 41.3001511,7.06918456 41.3751256,7.06946439 L44.1686492,7.06946439 C44.5300291,7.06946439 44.8569918,7.03458216 45.1151203,7.01714105 C45.2055421,7.01108377 45.2807518,6.944386 45.2986783,6.85435733 L45.4765001,5.94160576 C45.4947841,5.85486004 45.455517,5.76610513 45.3794475,5.72223935 C45.303378,5.67837357 45.2080363,5.68950571 45.1438012,5.74975352 L45.1610098,5.81370427 Z M22.7382501,6.44739803 C21.8292318,4.54941824 21.0901227,2.57258027 20.5298176,0.540674497 C20.5041776,0.45348481 20.4245463,0.394141128 20.3347872,0.39533189 L19.1875496,0.39533189 C19.0778353,0.395160165 18.9871419,0.481972523 18.9810468,0.592997835 L18.9810468,0.860428232 C19.0097277,1.52319052 16.9733809,5.87765501 16.4628602,6.50553508 L16.244885,6.77877918 C16.195722,6.84039134 16.1863208,6.92532558 16.2207918,6.99644693 C16.2552627,7.06756828 16.3273355,7.11193939 16.4054983,7.11016032 L17.6273064,7.11016032 C17.6865612,7.11121317 17.7432477,7.08567873 17.7821835,7.04039587 C17.8207932,6.99585564 17.8376379,6.93610257 17.828073,6.87761215 C17.8193251,6.76344784 17.8193251,6.6487679 17.828073,6.5346036 C17.9616516,5.76577172 18.225592,5.02619302 18.6081946,4.34865079 L20.5355538,4.34865079 L21.5107058,6.97644512 C21.5415821,7.05469504 21.6168569,7.10555634 21.7,7.10434661 L22.7554586,7.10434661 C22.827012,7.10519039 22.8935998,7.06737077 22.9302423,7.00507545 C22.9668847,6.94278013 22.9680422,6.86542684 22.9332805,6.80203399 L22.7382501,6.44739803 Z M19.657917,1.66853312 L19.7841131,1.6336509 L19.6521808,1.67434683 L19.657917,1.66853312 Z M18.9294211,3.5405459 L19.6407084,1.79643462 L20.2143273,3.5405459 L18.9294211,3.5405459 Z M53.306397,5.86602761 L53.306397,5.86602761 L51.7576262,3.69751591 C52.5222744,3.38723928 53.042459,2.658643 53.0941581,1.82550314 C53.0941581,0.947633796 52.4459688,0.296498918 51.3733016,0.296498918 C50.59318,0.296498918 49.8187946,0.39533189 49.0157283,0.39533189 C48.9415741,0.394022782 48.872748,0.434253928 48.8367302,0.499962225 C48.8007123,0.565670522 48.8033702,0.646151665 48.8436426,0.709271921 C49.0002808,1.07499465 49.0615148,1.47539133 49.0214644,1.87201277 L49.0214644,5.67998907 C49.0536812,6.0593184 48.9738101,6.43978549 48.7920169,6.77296547 C48.7525857,6.83700663 48.7525857,6.91821767 48.7920169,6.98225883 C48.8278301,7.04759283 48.8961006,7.08776946 48.9698388,7.0869055 L50.3235792,7.0869055 C50.3973173,7.08776946 50.4655879,7.04759283 50.501401,6.98225883 C50.5382892,6.91750324 50.5382892,6.83772106 50.501401,6.77296547 C50.3428058,6.40776397 50.2795933,6.00734692 50.317843,5.61022462 L50.317843,4.06959299 C50.5989162,4.12773003 50.621861,4.24981782 50.988977,4.75561009 L52.1821042,6.49972137 C52.3683393,6.87047631 52.7358318,7.11213099 53.1457838,7.13341514 L53.9201692,7.13341514 C54.0033123,7.13462486 54.078587,7.08376356 54.1094634,7.00551364 C54.1391146,6.92631112 54.1187344,6.83680365 54.0578377,6.77877918 C53.7654408,6.50835976 53.5055185,6.20394625 53.2834523,5.87184131 L53.306397,5.86602761 Z M50.5472905,3.2731155 L50.3121068,3.2731155 L50.3121068,1.37784791 C50.3121068,1.29064235 50.3121068,1.19762308 50.3121068,1.11041752 L50.5817076,1.11041752 C51.4593444,1.17436826 51.7690986,1.16855456 51.8035157,2.02898279 C51.8379329,2.88941102 51.3962464,3.24986069 50.5243458,3.27892921 L50.5472905,3.2731155 Z M58.577954,5.59859721 L58.577954,1.9010813 C58.5379036,1.50445985 58.5991376,1.10406317 58.7557758,0.738340442 C58.792664,0.673584853 58.792664,0.593802677 58.7557758,0.529047088 C58.7215021,0.461463464 58.6529285,0.418866532 58.577954,0.418586707 L57.2701031,0.418586707 C57.194018,0.415734079 57.1228876,0.45674692 57.0864292,0.524490609 C57.0499707,0.592234298 57.0544585,0.675050785 57.0980174,0.738340442 C57.2566127,1.10354194 57.3198252,1.503959 57.2815755,1.9010813 L57.2815755,1.9010813 L57.2815755,5.61603832 C57.3198252,6.01316062 57.2566127,6.41357768 57.0980174,6.77877918 C57.0544585,6.84206883 57.0499707,6.92488532 57.0864292,6.99262901 C57.1228876,7.0603727 57.194018,7.10138554 57.2701031,7.09853291 L58.577954,7.09853291 C58.6516922,7.09939687 58.7199627,7.05922024 58.7557758,6.99388623 C58.7938897,6.92946902 58.7938897,6.84901009 58.7557758,6.78459288 C58.5920479,6.41866846 58.5229548,6.01651489 58.5550093,5.61603832 L58.577954,5.59859721 Z M36.1379857,3.22079216 C35.415226,2.83127398 34.835871,2.52896136 34.8530796,1.93014982 C34.8702881,1.33133828 35.2144594,1.06972159 35.8397039,1.04646677 C36.3052117,0.988649803 36.7660107,1.18564182 37.0500397,1.56388645 C37.1078011,1.62505053 37.1968956,1.64357329 37.273751,1.61039608 C37.3509576,1.57910248 37.4011407,1.50281053 37.3999471,1.41854384 L37.3999471,0.505792271 C37.3969424,0.394699431 37.3087921,0.305357961 37.1991805,0.302312622 C36.7173407,0.302312622 36.2182924,0.244175579 35.6962992,0.244175579 C34.6006873,0.244175579 33.5337563,0.877869344 33.5280201,2.15688428 C33.5280201,3.20335105 34.3425588,3.66844739 35.0309014,4.04052447 C35.719244,4.41260154 36.3272799,4.75561009 36.3158076,5.43581349 C36.3299237,5.72752454 36.2160152,6.01062618 36.004651,6.20914467 C35.7932867,6.40766316 35.5061128,6.50126798 35.2201956,6.46483915 C34.5678991,6.48728829 33.9592113,6.13380149 33.64848,5.55208758 C33.5979013,5.48048737 33.507619,5.44998661 33.4247687,5.47650942 C33.3387415,5.50249588 33.2801891,5.58320328 33.281364,5.67417536 L33.281364,6.72064213 C33.2825164,6.80278881 33.3322962,6.87617426 33.4075601,6.90668067 C33.9690041,7.12422271 34.5621204,7.24602059 35.1628337,7.26713033 C36.3100714,7.26713033 37.6293947,6.52878989 37.6351308,5.14512828 C37.640867,4.06959299 36.8320645,3.59286924 36.1379857,3.22079216 Z M66.6315623,5.77300834 C66.5613722,5.72160059 66.4665686,5.72160059 66.3963785,5.77300834 C65.9592364,6.12978925 65.4082273,6.31180426 64.8476077,6.28461431 L63.9298176,6.28461431 L63.9298176,4.06959299 L63.9699709,4.06959299 C64.5722707,4.06959299 65.6908274,4.12191633 66.1898758,3.4068307 C66.2285679,3.33948992 66.227142,3.25593833 66.1861751,3.18999404 C66.1452082,3.12404974 66.071485,3.08663384 65.9948454,3.09289067 C65.3237113,3.15684142 64.612424,3.15684142 63.9240814,3.16265512 L63.9240814,1.20925049 L64.6296326,1.20925049 C65.0880754,1.16086691 65.5491527,1.27154514 65.9374835,1.52319052 C66.0055957,1.56767418 66.0930826,1.56767418 66.1611948,1.52319052 C66.2359173,1.48749692 66.2814418,1.40905945 66.2759186,1.32552457 L66.2415015,0.581370427 C66.2353336,0.471271768 66.1437548,0.386190117 66.0349987,0.389518186 L62.6334391,0.389518186 C62.5597009,0.388654231 62.4914304,0.428830856 62.4556172,0.494164863 C62.416186,0.558206022 62.416186,0.639417057 62.4556172,0.703458216 C62.6120218,1.06931069 62.6751432,1.46915106 62.6391753,1.86619907 L62.6391753,5.5811561 C62.6684601,5.98079646 62.5953503,6.38132513 62.4269363,6.74389695 C62.3888225,6.80831416 62.3888225,6.88877309 62.4269363,6.9531903 C62.4612101,7.02077393 62.5297837,7.06337086 62.6047581,7.06365068 L65.4212265,7.06365068 C65.7826064,7.06365068 66.1095691,7.03458216 66.3734338,7.01132735 C66.4669735,7.00518454 66.5446977,6.93595846 66.562728,6.84272992 L66.7348136,5.93579206 C66.7309136,5.86851155 66.6943968,5.80755339 66.6372984,5.77300834 L66.6315623,5.77300834 Z M28.5145916,3.22079216 C27.7918319,2.83127398 27.2124769,2.52896136 27.2239492,1.93014982 C27.2354216,1.33133828 27.5910653,1.06972159 28.2105736,1.04646677 C28.6760814,0.988649803 29.1368804,1.18564182 29.4209093,1.56388645 C29.476939,1.62692562 29.5656816,1.64811249 29.6435828,1.61704866 C29.721484,1.58598483 29.7721909,1.50919115 29.7708168,1.42435755 L29.7708168,0.505792271 C29.7708168,0.393413564 29.6809305,0.302312622 29.5700502,0.302312622 C29.0882104,0.302312622 28.589162,0.244175579 28.0671689,0.244175579 C26.971557,0.244175579 25.904626,0.877869344 25.904626,2.15688428 C25.904626,3.20335105 26.7191647,3.66844739 27.4075073,4.04052447 C28.0958499,4.41260154 28.7038858,4.75561009 28.6981496,5.43581349 C28.7122657,5.72752454 28.5983573,6.01062618 28.386993,6.20914467 C28.1756288,6.40766316 27.8884548,6.50126798 27.6025377,6.46483915 C26.9502411,6.48728829 26.3415534,6.13380149 26.0308221,5.55208758 C25.980639,5.47656894 25.887065,5.44402991 25.8017075,5.47241631 C25.7163501,5.5008027 25.6599881,5.58320434 25.6637061,5.67417536 L25.6637061,6.72064213 C25.6625125,6.80490882 25.7126956,6.88120078 25.7899022,6.91249437 C26.351047,7.13107917 26.9443376,7.25291283 27.5451758,7.27294404 C28.6924134,7.27294404 30.0117367,6.5346036 30.0174729,5.15094198 C30.0232091,4.06959299 29.2144066,3.59286924 28.5203278,3.22079216 L28.5145916,3.22079216 Z M4.01533175,3.23241957 C4.61128668,2.95871332 5.00253855,2.3661578 5.02490087,1.70341535 C5.02490087,0.697644512 4.17020883,0.302312622 3.36714248,0.302312622 C2.56407613,0.302312622 1.61760508,0.401145594 0.774385408,0.401145594 C0.699772359,0.402694702 0.631789252,0.444924836 0.596563574,0.511605976 C0.559675406,0.576361564 0.559675406,0.65614374 0.596563574,0.720899329 C0.753206549,1.08668128 0.81633782,1.48658376 0.780121597,1.88364018 L0.780121597,4.41841524 C0.833691807,5.22927919 0.730417558,6.04293913 0.476103621,6.8136614 C0.446430062,6.87705355 0.451074224,6.95146783 0.488392305,7.0105653 C0.525710386,7.06966277 0.59043681,7.10510478 0.659661644,7.10434661 C1.3135871,7.10434661 1.96751256,7.14504254 2.63864658,7.14504254 C3.98665081,7.14504254 5.33465504,6.62762286 5.33465504,4.92420751 C5.33275097,4.11928725 4.78760038,3.42023253 4.01533175,3.23241957 Z M2.07076394,1.12785863 C2.21416865,1.12785863 2.35183717,1.12785863 2.47229712,1.12785863 C3.28109966,1.16274085 3.61953476,1.19762308 3.66542427,1.94177723 C3.66542427,2.82546027 2.97134549,3.04056733 2.13386201,3.05800844 L2.07650013,3.05800844 L2.07076394,1.12785863 Z M2.52392281,6.36019247 C2.20269627,6.36019247 2.1912239,6.32531024 2.1395982,6.22066357 C2.06724185,5.87502749 2.04406213,5.52067531 2.07076394,5.16838309 L2.07076394,3.8079763 C3.21800159,3.84285852 3.91208036,3.91843668 3.92355274,5.10443235 C3.87766323,6.05787985 3.44171293,6.31949654 2.50097806,6.34856506 L2.52392281,6.36019247 Z"
              transform="translate(18.402 33.47)"
            />
            <g fillRule="nonzero" transform="translate(0 14.036)">
              <path d="M10.8423913 5.10557432L10.8423913 1.3334146C10.8154972.968290625 10.6233153.637143124 10.3230978.438623224L15.2820652.438623224C14.968735.623857883 14.7720154.962824219 14.7627717 1.3334146L14.7627717 12.7083769C14.796994 13.0726535 14.9872191 13.4025715 15.2820652 13.6090166L10.3459239 13.6090166C10.6389918 13.4041878 10.8224662 13.0713476 10.8423913 12.7083769L10.8423913 8.15839196 4.4111413 8.15839196 4.4111413 12.7083769C4.44670584 13.0736785 4.63913074 13.4037842 4.9361413 13.6090166L0 13.6090166C.309500788 13.4161921.506016175 13.0790692.525 12.7083769L.525 1.3334146C.496811079.967210027.302392753.635850328 0 .438623224L4.95896739.438623224C4.64344103.622394677 4.44440143.961630718 4.43396739 1.3334146L4.43396739 5.10557432 10.8423913 5.10557432 10.8423913 5.10557432zM83.2581522 5.10557432L83.2581522 1.3334146C83.2299633.967210027 83.0355449.635850328 82.7331522.438623224L87.6921196.438623224C87.3765932.622394677 87.1775536.961630718 87.1671196 1.3334146L87.1671196 12.7083769C87.2013418 13.0726535 87.3915669 13.4025715 87.686413 13.6090166L82.7445652 13.6090166C83.048491 13.4105817 83.2431186 13.0766972 83.2695652 12.7083769L83.2695652 8.15839196 76.8040761 8.15839196 76.8040761 12.7083769C76.8396406 13.0736785 77.0320655 13.4037842 77.3290761 13.6090166L72.3701087 13.6090166C72.6774251 13.4148237 72.8716677 13.077938 72.8894022 12.7083769L72.8894022 1.3334146C72.8625081.968290625 72.6703262.637143124 72.3701087.438623224L77.3290761.438623224C77.0135497.622394677 76.8145101.961630718 76.8040761 1.3334146L76.8040761 5.10557432 83.2581522 5.10557432 83.2581522 5.10557432zM34.8097826 13.6031682C34.5635572 13.4412467 34.3660095 13.2124713 34.2391304 12.9423093 34.0279891 12.4218097 33.742663 11.7726473 33.3888587 11.0182154 33.0350543 10.2637834 32.6641304 9.43332347 32.2475543 8.57947026L31.0491848 6.00621401 29.9535326 3.66689015C29.6225543 2.95729525 29.3543478 2.37246428 29.148913 1.91239726 29.0159209 1.66066944 28.9124833 1.3936871 28.8407609 1.11702714 28.8052406.894822549 28.8350374.666811259 28.9263587.462016462L23.3967391.462016462C23.5080836.660365715 23.5388297.895641189 23.482337 1.11702714 23.358262 1.53654222 23.2017892 1.94526611 23.0144022 2.33932386L21.8331522 5.09387771C21.3538043 6.19920823 20.8173913 7.43320156 20.2125 8.80170602 19.6076087 10.1702105 18.7002717 12.4042648 18.4320652 12.9423093 18.3229727 13.2241227 18.1210861 13.4579228 17.861413 13.6031682L21.9472826 13.6031682C21.8459441 13.4120185 21.8155387 13.189738 21.8616848 12.9773991 21.9644022 12.7083769 22.6663043 11.0825468 22.70625 10.9421874L29.4684783 10.9421874C29.5255435 11.0825468 30.2046196 12.6966802 30.31875 12.9773991 30.3778167 13.1876706 30.3510435 13.4135094 30.2445652 13.6031682L34.8097826 13.6031682zM23.6307065 8.77246447L26.0274457 3.50898579 28.48125 8.77246447 23.6307065 8.77246447zM53.1790761 13.6031682C52.9328506 13.4412467 52.735303 13.2124713 52.6084239 12.9423093 52.3972826 12.4218097 52.1119565 11.7726473 51.7581522 11.0182154 51.4043478 10.2637834 51.0334239 9.43332347 50.6168478 8.57947026L49.4184783 6.00621401 48.3228261 3.66689015C47.9918478 2.95729525 47.7236413 2.37246428 47.5182065 1.91239726 47.3852629 1.66064622 47.2818276 1.3936699 47.2100543 1.11702714 47.174534.894822549 47.2043309.666811259 47.2956522.462016462L41.7945652.462016462C41.9059096.660365715 41.9366558.895641189 41.880163 1.11702714 41.7561109 1.53655035 41.5996375 1.94527608 41.4122283 2.33932386L40.2309783 5.09387771C39.757337 6.19920823 39.2152174 7.43320156 38.6103261 8.80170602 38.0054348 10.1702105 37.0923913 12.4042648 36.8241848 12.9481576 36.7150922 13.229971 36.5132057 13.4637712 36.2535326 13.6090166L40.3394022 13.6090166C40.2380636 13.4178668 40.2076583 13.1955863 40.2538043 12.9832474 40.3565217 12.7142252 41.0584239 11.0883951 41.0983696 10.9480357L47.8720109 10.9480357C47.9290761 11.0883951 48.6081522 12.7025286 48.7222826 12.9832474 48.7779249 13.1950904 48.7470205 13.4210196 48.6366848 13.6090166L53.1790761 13.6031682zM42.0228261 8.77246447L44.4195652 3.50898579 46.8733696 8.77246447 42.0228261 8.77246447zM67.0402174 5.26347868C66.8084229 4.94004908 66.54451 4.64213976 66.2527174 4.37453562 65.9592155 4.19008106 65.6449635 4.04279745 65.3168478 3.93591239 64.8955655 3.79611987 64.4668885 3.68091826 64.0328804 3.59086213 63.5575183 3.49341251 63.0739094 3.44443771 62.5891304 3.44465438 62.027569 3.44774544 61.4683044 3.51840906 60.9228261 3.65519353 60.3864475 3.78478175 59.8739155 4.0019973 59.4048913 4.29850759 58.9626738 4.5836255 58.585183 4.96251899 58.2978261 5.40968643 57.7132569 6.41498487 57.7132569 7.66774476 58.2978261 8.67304321 58.5824927 9.12562758 58.9603534 9.50888457 59.4048913 9.79591866 59.872082 10.0973937 60.3851156 10.3167984 60.9228261 10.445081 61.468247 10.582186 62.0275487 10.6528543 62.5891304 10.6556202 63.1465586 10.6589622 63.7016909 10.5821867 64.2383152 10.4275361 64.7131648 10.2958436 65.1739025 10.1155902 65.613587 9.88949162 65.9491096 9.72127902 66.2617996 9.50895019 66.54375 9.25787418 66.8234541 8.92046255 67.0790104 8.56278489 67.3084239 8.18763351L69.836413 11.9539449C69.3728227 12.0086954 68.9170336 12.1186046 68.4782609 12.2814503 68.1358696 12.4627479 67.6850543 12.6615904 67.1201087 12.8662812 66.4697488 13.1188137 65.7996923 13.3144562 65.1171196 13.4511122 64.2743598 13.6138373 63.4181563 13.6921835 62.5605978 13.6850446 61.5062399 13.6858934 60.4545652 13.5761533 59.4220109 13.3575392 58.4504569 13.1582658 57.5235493 12.7755141 56.688587 12.2288155 55.9022511 11.7056167 55.2488812 10.9979215 54.7826087 10.1643622 54.273394 9.20006302 54.02514 8.11372039 54.063587 7.01797158 54.0287797 5.93377008 54.2769977 4.85969834 54.7826087 3.90667085 55.256978 3.06382422 55.9175978 2.34672906 56.711413 1.81297599 57.5493057 1.26325565 58.4742939.867443111 59.444837.643314061 60.472863.391523847 61.526452.265878226 62.5834239.269022244 63.2089825.265773518 63.8335433.320581506 64.4494565.432774914 65.0543478.543892797 65.5907609.655010681 66.1157609.777825183 66.6407609.900639686 67.0630435 1.01175757 67.4339674 1.12287545 67.8048913 1.23399334 68.894837 1.38604939 68.894837 1.38604939L67.0402174 5.26347868zM104.526359.415229985L104.526359 3.84818775C104.242314 3.7058203 103.948617 3.58464067 103.647554 3.48559255L99.476087 3.48559255 99.476087 12.7083769C99.5612222 13.024696 99.687926 13.327684 99.8527174 13.6090166L95.1847826 13.6090166C95.349574 13.327684 95.4762778 13.024696 95.561413 12.7083769L95.561413 3.50898579 91.3899457 3.50898579C91.0890549 3.60852005 90.7953911 3.72968592 90.5111413 3.87158099L90.5111413.415229985 91.3899457.415229985 103.653261.415229985 104.526359.415229985z" />
            </g>
            <g fillRule="nonzero" transform="translate(19.485)">
              <path d="M65.6232586.731308628C65.5874103.66659685 65.5190728.626802859 65.4452622.627658586L64.1361273.627658586C64.0599675.624833126 63.9887673.665455368 63.9522731.732553879 63.9157788.79965239 63.920271.881680149 63.9638727.944367047 64.1204308 1.30673521 64.1836142 1.70276758 64.1476109 2.09603418L64.1476109 5.48193554C64.1706412 6.45475376 64.0467464 7.42546599 63.7801345 8.36110337 63.753471 8.43227497 63.7690135 8.51243769 63.8203272 8.56840346 63.8590152 8.60960064 63.9131916 8.63258734 63.9696145 8.63174515L64.0212909 8.63174515C64.6710531 8.45075298 65.1557455 7.90615589 65.261524 7.23822792 65.3937666 6.64116293 65.4516268 6.02994896 65.4337786 5.41859385L65.4337786 2.11330919C65.3975268 1.72003426 65.46072 1.32394037 65.6175168.961642054 65.667317.893638541 65.6696083.801722802 65.6232586.731308628L65.6232586.731308628zM41.2779426.627658586L40.0090004.627658586C39.9252158.626279217 39.8493716.677181889 39.8186919.75538385 39.7880122.833585811 39.8089371.922671066 39.8711968.978917061 39.9630659 1.0825671 39.9515823 1.07680877 39.9630659 1.28986719 39.9538121 1.91816646 39.8670246 2.54289955 39.704684 3.1498096L39.130502 5.45314387 38.3323891 2.45305099C38.2236278 2.12011442 38.1504867 1.7765204 38.1141999 1.42806724 38.1149875 1.26120755 38.1785577 1.10079668 38.2921963.978917061 38.3301464.912996557 38.3301464.831779146 38.2921963.765858642 38.2559542.698007214 38.1852084.655881071 38.1084581.656450265L36.4375885.656450265C36.3543492.652774274 36.2774809.700991733 36.2443523.777662395 36.2112236.854333057 36.2287062.943553484 36.2883012 1.0019504 36.4241323 1.11669307 36.4949855 1.29110585 36.4777813 1.46837559 36.4800445 1.85845742 36.423915 2.24667074 36.3112685 2.62004272L35.4499955 5.41283552C35.2881306 3.9796652 35.0446627 2.55695247 34.7207844 1.15166713 34.6863335.990433733 34.5944644.639175258 34.2097624.621900251L33.3427476.621900251C33.2701095.624260928 33.2040442.664704555 33.1687495.728417752 33.1334548.792130949 33.1341168.869751966 33.1704931.932850376 33.217322 1.01795236 33.2576309 1.10650207 33.2910713 1.19773382 33.7706114 2.79450943 34.1314214 4.42474962 34.3705334 6.07504412L34.5370462 7.14609455C34.5536693 7.24477953 34.6382232 7.31746275 34.7380099 7.31884462L35.5590901 7.31884462C35.6489373 7.32002404 35.7286468 7.26124554 35.754312 7.17488623 35.9035993 6.71421937 36.0356611 6.25355252 36.1849485 5.79288567L37.1323487 2.77551779 37.1323487 2.71793443 37.1323487 2.76975945 37.7065307 4.77941859C37.9362035 5.56831058 38.0912326 6.35720256 38.2807127 7.15761122 38.3024641 7.25067047 38.386402 7.31560879 38.4816764 7.31308628L39.3027566 7.31308628C39.3958925 7.31289022 39.4766904 7.24854263 39.4979785 7.15761122L40.6463424 2.78127612C40.766541 2.26673886 40.9599151 1.77221637 41.2205244 1.31290053L41.4501972.92709204C41.4859767.862650288 41.4859767.784233709 41.4501972.719791957 41.4117678.662110365 41.3471157.627530056 41.2779426.627658586L41.2779426.627658586zM60.4613626 5.79288567L60.4613626 2.11330919C60.4246099 1.72001771 60.4878231 1.32379935 60.6451009.961642054 60.6832521.897838343 60.6832521.818145683 60.6451009.754341971 60.6107934.687402 60.5421525.645210753 60.4671044.644933593L59.1407441.644933593C59.0645843.642108133 58.993384.682730375 58.9568898.749828886 58.9203956.816927397 58.9248877.898955156 58.9684895.961642054 59.1248101 1.32407964 59.1879838 1.72005094 59.1522277 2.11330919L59.1522277 5.79288567C59.1879838 6.18614391 59.1248101 6.58211522 58.9684895 6.9445528 58.9303382 7.00835651 58.9303382 7.08804917 58.9684895 7.15185288 59.0027969 7.21879285 59.0714378 7.2609841 59.1464859 7.26126126L60.4556208 7.26126126C60.5317806 7.26408672 60.6029808 7.22346448 60.639475 7.15636597 60.6759693 7.08926746 60.6714771 7.0072397 60.6278754 6.9445528 60.4764668 6.58087517 60.4191881 6.18471359 60.4613626 5.79288567zM48.0303227 5.97139407C47.5927514 6.32477707 47.0412014 6.50505861 46.4800314 6.47812761L45.5613402 6.47812761 45.5613402 4.25541005 45.6015329 4.25541005C46.2101658 4.25541005 47.3240789 4.30723507 47.829359 3.59895978 47.8680892 3.53226034 47.8666619 3.44950448 47.8256548 3.38418823 47.7846477 3.31887198 47.710852 3.28181241 47.6341372 3.28800966 46.9623442 3.35135135 46.2503586 3.35710969 45.5613402 3.35710969L45.5613402 1.42230891 46.267584 1.42230891C46.7282911 1.37443475 47.1916179 1.4840051 47.5824608 1.73325903 47.6452593 1.78189461 47.7302751 1.79018837 47.8012428 1.75460244 47.8722106 1.71901651 47.9166041 1.64583197 47.9154863 1.5662673L47.8752936.811925327C47.8721855.702871959 47.7831149.616097377 47.6743299.616141915L44.2694307.616141915C44.1947444.617676269 44.1266946.659504211 44.0914343.725550293 44.0532831.789354004 44.0532831.869046664 44.0914343.932850376 44.248471 1.2950784 44.3116741 1.69123429 44.2751726 2.08451751L44.2751726 5.76409399C44.3029396 6.15984228 44.2298296 6.55616774 44.0627252 6.91576112 44.024574 6.97956483 44.024574 7.05925749 44.0627252 7.12306121 44.0979855 7.18910729 44.1660353 7.23093523 44.2407216 7.23246958L47.0599552 7.23246958C47.4216898 7.23246958 47.7489736 7.2036779 48.0130973 7.18064456 48.1036079 7.17464497 48.1788914 7.10858242 48.1968355 7.01941116L48.3748319 6.1211108C48.3919078 6.03478717 48.3527737 5.94705934 48.277221 5.90229405 48.1890547 5.86286779 48.0853916 5.89188023 48.0303227 5.97139407L48.0303227 5.97139407zM30.5407396.938608712C30.5771158.875510302 30.5777778.797889285 30.5424831.734176088 30.5071884.670462891 30.4411231.630019264 30.368485.627658586L29.0593501.627658586C28.9851232.626361946 28.9162295.666209938 28.8801762.731292442 28.844123.796374945 28.8467835.876089601 28.8870955.938608712 29.0465331 1.31028592 29.1097355 1.71634097 29.0708337 2.11906752L29.0708337 3.65654314C29.0708337 4.01931829 29.0421246 4.39936844 29.030641 4.77941859 28.967481 5.93108572 28.7320663 6.43781926 27.7215061 6.46085261 26.7109458 6.48388595 26.4238548 5.97715241 26.3606948 4.97520201L26.3606948 2.09603418C26.321542 1.69330033 26.3847541 1.2871828 26.544433.915575369 26.5813574.8514365 26.5813574.772414155 26.544433.708275286 26.5085847.643563507 26.4402471.603769517 26.3664366.604625244L25.0573017.604625244C24.9838161.604987932 24.9160476.644450548 24.8793052.708275286 24.841154.772078997 24.841154.851771657 24.8793052.915575369 25.0385028 1.28732192 25.1016955 1.69331496 25.0630435 2.09603418L25.0630435 5.55103557C25.0630435 6.83514442 25.9645092 7.42249466 27.1013895 7.42249466L27.1760332 7.42249466C27.828746 7.432078 28.4671103 7.23012199 28.99619 6.84666109L28.99619 7.1057862C28.9910672 7.16422575 29.0115887 7.22200348 29.0523969 7.26403522 29.0932052 7.30606697 29.1502496 7.32818063 29.2086374 7.32460295L30.3570013 7.2670196C30.4311 7.26549549 30.4983476 7.22319412 30.5319719 7.1569563 30.5655963 7.09071847 30.5601389 7.01129715 30.5177723 6.95031114 30.3590214 6.58858775 30.2957468 6.19198418 30.3340341 5.798644L30.3340341 2.11330919C30.3033154 1.71053901 30.3744109 1.3065058 30.5407396.938608712L30.5407396.938608712zM4.01927387 3.45500139C4.61581389 3.18390187 5.00744988 2.59698973 5.02983416 1.94055912 5.02983416.944367047 4.174303.552800223 3.37044823.552800223 2.56659346.552800223 1.61919319.650691929.775145675.650691929.701335101.649836202.632997574.689630192.59714926.754341971.560224877.81848084.560224877.897503185.59714926.961642054.753707334 1.32401022.81689077 1.72004258.780887494 2.11330919L.780887494 4.60666852C.834362223 5.40980541.730990257 6.21568757.476571044 6.97910281.442840663 7.03998043.442840663 7.11400861.476571044 7.17488623.515000468 7.23256782.579652581 7.26714813.648825639 7.2670196 1.3033931 7.2670196 1.95796056 7.30732795 2.62975347 7.30732795 3.97908113 7.30732795 5.32840879 6.79483607 5.33415061 5.10764373 5.32241702 4.32069556 4.78177917 3.64117864 4.01927387 3.45500139zM2.07279695 1.37048389C2.21634245 1.37048389 2.35414612 1.37048389 2.47472434 1.37048389 3.29006275 1.4050339 3.6230883 1.43382558 3.66902286 2.17665088 3.66902286 3.05767623 2.98000448 3.26497632 2.13595697 3.28225132L2.07279695 3.28225132 2.07279695 1.37048389zM2.5206589 6.55298598C2.19911699 6.55298598 2.18763335 6.51843596 2.13595697 6.41478592 2.06337257 6.07246345 2.04016859 5.72146337 2.06705513 5.37252717L2.06705513 4.00204328C3.21541909 4.03659329 3.91017929 4.11145166 3.92740475 5.28615213 3.89295383 6.23051918 3.44509189 6.48964428 2.50917526 6.51843596L2.5206589 6.55298598zM56.4707978 6.91000279C56.1809445 6.65213977 55.9209284 6.36240205 55.6956522 6.04625244L55.6956522 6.04625244 54.1453608 3.89839324C54.9116595 3.59222902 55.4328325 2.86990954 55.4832048 2.04420916 55.4832048 1.17470047 54.840121.52976688 53.7606589.52976688 52.9797714.52976688 52.2046257.627658586 51.400771.627658586 51.3257229.627935746 51.257082.670126993 51.2227745.737066964 51.1846233.800870676 51.1846233.880563336 51.2227745.944367047 51.3790951 1.30680463 51.4422688 1.70277593 51.4065128 2.09603418L51.4065128 5.87350237C51.4366667 6.24977538 51.3547324 6.62655458 51.1710982 6.95606947 51.1307862 7.01858858 51.1281257 7.09830324 51.1641789 7.16338574 51.2002322 7.22846825 51.2691258 7.26831624 51.3433528 7.2670196L52.6984222 7.2670196C52.774582 7.26984506 52.8457823 7.22922281 52.8822765 7.1621243 52.9187707 7.09502579 52.9142786 7.01299803 52.8706768 6.95031114 52.7136402 6.58808311 52.650437 6.19192722 52.6869386 5.798644L52.6869386 4.26692672C52.9682878 4.33026841 52.991255 4.44543513 53.3587315 4.95216866L54.55303 6.67966936C54.7404549 7.04862115 55.1109506 7.28826726 55.5233976 7.30732795L56.338736 7.30732795C56.4196991 7.3031333 56.4907427 7.25186053 56.5204248 7.17620154 56.5501069 7.10054254 56.532947 7.01446698 56.4765397 6.95606947L56.4707978 6.91000279zM52.9166114 3.45500139L52.6811968 3.45500139 52.6811968 1.59505898C52.6811968 1.50868394 52.6811968 1.41655057 52.6811968 1.33017554L52.9510623 1.33017554C53.8295607 1.39351723 54.139619 1.38775889 54.1740699 2.24575091 54.2085208 3.10374292 53.7836262 3.45500139 52.9108696 3.45500139L52.9166114 3.45500139zM18.8446526.466425188C16.6914702.466425188 15.5373644 2.1478592 15.5373644 4.07690164 15.5373644 5.88501904 16.5249574 7.428253 18.6896235 7.43401133 20.8542896 7.43976967 21.9911699 5.75833566 21.9969117 3.82353488 21.9911699 2.02117581 21.0035769.472183524 18.8446526.466425188zM18.7642671 6.59329433C17.3862304 6.59329433 16.9613357 5.07885205 16.9555939 3.80050153 16.9555939 2.43001765 17.5297759 1.30714219 18.7642671 1.30138386 20.1423039 1.30138386 20.5671986 2.81582614 20.5729404 4.08841832 20.5614567 5.47041887 20.010242 6.59329433 18.7642671 6.59905266L18.7642671 6.59329433zM13.6942403 6.91000279C13.3970329 6.64804563 13.1311318 6.35239424 12.9018691 6.02897743L12.9018691 6.02897743 11.3515778 3.88111823C12.1169767 3.57379662 12.6376719 2.85213935 12.6894218 2.02693415 12.6894218 1.15742547 12.046338.512491873 10.9668758.512491873 10.1859883.512491873 9.41084267.610383579 8.6069879.610383579 8.53082812.607558119 8.45962787.648180361 8.42313365.715278872 8.38663944.782377383 8.39113157.864405142 8.4347333.92709204 8.59153007 1.28939036 8.65472332 1.68548424 8.61847154 2.07875917L8.61847154 5.75833566C8.61847154 5.81016068 8.61847154 5.85622736 8.61847154 5.90805238 8.64897502 6.28434893 8.56701879 6.66122917 8.38305693 6.99061949 8.34490569 7.0544232 8.34490569 7.13411586 8.38305693 7.19791957 8.41979928 7.26174431 8.48756774 7.30120692 8.56105334 7.30156961L9.92186463 7.30156961C9.99535023 7.30120692 10.0631187 7.26174431 10.099861 7.19791957 10.1380123 7.13411586 10.1380123 7.0544232 10.099861 6.99061949 9.94282438 6.62839146 9.87962124 6.23223557 9.91612281 5.83895235L9.91612281 4.26692672C10.197472 4.32451008 10.2204393 4.44543513 10.5879157 4.95216866L11.7764724 6.67966936C11.9638973 7.04862115 12.334393 7.28826726 12.74684 7.30732795L13.5621784 7.30732795C13.6459631 7.30870732 13.7218072 7.25780464 13.752487 7.17960268 13.7831667 7.10140072 13.7622418 7.01231547 13.6999821 6.95606947L13.6942403 6.91000279zM10.1400538 3.45500139L9.90463918 3.45500139 9.90463918 1.59505898C9.90463918 1.50868394 9.90463918 1.41655057 9.90463918 1.33017554L10.1687629 1.33017554C11.0472613 1.39351723 11.3573196 1.38775889 11.3917705 2.23999257 11.4262214 3.09222625 11.0128104 3.45500139 10.1400538 3.45500139z" />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
};
export default Logo;