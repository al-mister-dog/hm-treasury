const countries = [
  {NAME: "Afghanistan", "ppp": 78.729},
  {NAME: "Albania", "ppp": 40.737},
  {NAME: "Algeria", "ppp": 491.459},
  {NAME: "Angola", "ppp": 215.105},
  {NAME: "Antigua and Barbuda", "ppp": 1.826},
  {NAME: "Argentina", "ppp": 941.848},
  {NAME: "Armenia", "ppp": 39.380},
  {NAME: "Aruba", "ppp": 3.274},
  {NAME: "Australia", "ppp": 1329.878},
  {NAME: "Austria", "ppp": 491.500},
  {NAME: "Azerbaijan", "ppp": 145.770},
  {NAME: "The Bahamas", "ppp": 12.762},
  {NAME: "Bahrain", "ppp": 73.804},
  {NAME: "Bangladesh", "ppp": 874.047},
  {NAME: "Barbados", "ppp": 3.902},
  {NAME: "Belarus", "ppp": 189.922},
  {NAME: "Belgium", "ppp": 588.752},
  {NAME: "Belize", "ppp": 2.531},
  {NAME: "Benin", "ppp": 41.742},
  {NAME: "Bhutan", "ppp": 8.988},
  {NAME: "Bolivia", "ppp": 97.804},
  {NAME: "Bosnia and Herz.", "ppp": 49.339},
  {NAME: "Botswana", "ppp": 39.638},
  {NAME: "Brazil", "ppp": 3153.630},
  {NAME: "Brunei Darussalam", "ppp": 28.726},
  {NAME: "Bulgaria", "ppp": 164.623},
  {NAME: "Burkina Faso", "ppp": 47.313},
  {NAME: "Burundi", "ppp": 9.023},
  {NAME: "Cabo Verde", "ppp": 3.577},
  {NAME: "Cambodia", "ppp": 73.609},
  {NAME: "Cameroon", "ppp": 96.798},
  {NAME: "Canada", "ppp": 1850.066},
  {NAME: "Central African Republic", "ppp": 4.731},
  {NAME: "Chad", "ppp": 26.462},
  {NAME: "Chile", "ppp": 454.668},
  {NAME: "China", "ppp": 24142.830},
  {NAME: "Colombia", "ppp": 728.767},
  {NAME: "Comoros", "ppp": 2.735},
  {NAME: "Democratic Republic of the Congo", "ppp": 100.452},
  {NAME: "Congo", "ppp": 19.605},
  {NAME: "Costa Rica", "ppp": 102.517},
  {NAME: "Côte d'Ivoire", "ppp": 144.631},
  {NAME: "Croatia", "ppp": 112.123},
  {NAME: "Cyprus", "ppp": 35.531},
  {NAME: "Czech Republic", "ppp": 434.364},
  {NAME: "Denmark", "ppp": 343.152},
  {NAME: "Djibouti", "ppp": 5.649},
  {NAME: "Dominica", "ppp": 0.829},
  {NAME: "Dominican Republic", "ppp": 194.555},
  {NAME: "Ecuador", "ppp": 192.770},
  {NAME: "Egypt", "ppp": 1290.221},
  {NAME: "El Salvador", "ppp": 54.621},
  {NAME: "Equatorial Guinea", "ppp": 25.015},
  {NAME: "Eritrea", "ppp": 6.456},
  {NAME: "Estonia", "ppp": 50.162},
  {NAME: "Eswatini", "ppp": 10.094},
  {NAME: "Ethiopia", "ppp": 282.612},
  {NAME: "Fiji", "ppp": 10.406},
  {NAME: "Finland", "ppp": 275.454},
  {NAME: "France", "ppp": 2999.732},
  {NAME: "Gabon", "ppp": 33.661},
  {NAME: "The Gambia", "ppp": 5.505},
  {NAME: "Georgia", "ppp": 55.250},
  {NAME: "Germany", "ppp": 4496.784},
  {NAME: "Ghana", "ppp": 175.212},
  {NAME: "Greece", "ppp": 307.909},
  {NAME: "Grenada", "ppp": 1.742},
  {NAME: "Guatemala", "ppp": 149.026},
  {NAME: "Guinea", "ppp": 36.373},
  {NAME: "Guinea-Bissau", "ppp": 4.261},
  {NAME: "Guyana", "ppp": 15.490},
  {NAME: "Haiti", "ppp": 33.244},
  {NAME: "Honduras", "ppp": 54.180},
  {NAME: "Hong Kong SAR", "ppp": 444.862},
  {NAME: "Hungary", "ppp": 322.698},
  {NAME: "Iceland", "ppp": 20.379},
  {NAME: "India", "ppp": 8907.116},
  {NAME: "Indonesia", "ppp": 3302.410},
  {NAME: "Iran", "ppp": 1100.090},
  {NAME: "Iraq", "ppp": 401.443},
  {NAME: "Ireland", "ppp": 471.357},
  {NAME: "Israel", "ppp": 373.689},
  {NAME: "Italy", "ppp": 2461.673},
  {NAME: "Jamaica", "ppp": 27.304},
  {NAME: "Japan", "ppp": 5313.023},
  {NAME: "Jordan", "ppp": 105.206},
  {NAME: "Kazakhstan", "ppp": 501.296},
  {NAME: "Kenya", "ppp": 239.836},
  {NAME: "Kiribati", "ppp": 0.261},
  {NAME: "South Korea", "ppp": 2310.430},
  {NAME: "Kosovo", "ppp": 20.375},
  {NAME: "Kuwait", "ppp": 203.259},
  {NAME: "Kyrgyz Republic", "ppp": 32.819},
  {NAME: "Lao P.D.R.", "ppp": 58.937},
  {NAME: "Latvia", "ppp": 60.073},
  {NAME: "Lebanon", "ppp": 78.931},
  {NAME: "Lesotho", "ppp": 5.604},
  {NAME: "Liberia", "ppp": 7.308},
  {NAME: "Libya", "ppp": 39.153},
  {NAME: "Lithuania", "ppp": 108.555},
  {NAME: "Luxembourg", "ppp": 73.882},
  {NAME: "Macao SAR", "ppp": 37.539},
  {NAME: "Madagascar", "ppp": 44.099},
  {NAME: "Malawi", "ppp": 20.733},
  {NAME: "Malaysia", "ppp": 902.595},
  {NAME: "Maldives", "ppp": 7.412},
  {NAME: "Mali", "ppp": 47.195},
  {NAME: "Malta", "ppp": 22.052},
  {NAME: "Marshall Islands", "ppp": 0.209},
  {NAME: "Mauritania", "ppp": 24.195},
  {NAME: "Mauritius", "ppp": 25.712},
  {NAME: "Mexico", "ppp": 2444.680},
  {NAME: "Micronesia", "ppp": 0.361},
  {NAME: "Moldova", "ppp": 33.745},
  {NAME: "Mongolia", "ppp": 39.670},
  {NAME: "Montenegro", "ppp": 11.994},
  {NAME: "Morocco", "ppp": 273.950},
  {NAME: "Mozambique", "ppp": 40.843},
  {NAME: "Myanmar", "ppp": 278.848},
  {NAME: "Namibia", "ppp": 23.776},
  {NAME: "Nauru", "ppp": 0.127},
  {NAME: "Nepal", "ppp": 117.055},
  {NAME: "Netherlands", "ppp": 1001.531},
  {NAME: "New Zealand", "ppp": 213.863},
  {NAME: "Nicaragua", "ppp": 36.216},
  {NAME: "Niger", "ppp": 30.469},
  {NAME: "Nigeria", "ppp": 1069.200},
  {NAME: "North Macedonia", "ppp": 34.698},
  {NAME: "Norway", "ppp": 354.592},
  {NAME: "Oman", "ppp": 134.151},
  {NAME: "Pakistan", "ppp": 1074.141},
  {NAME: "Palau", "ppp": 0.252},
  {NAME: "Panama", "ppp": 115.532},
  {NAME: "Papua New Guinea", "ppp": 33.660},
  {NAME: "Paraguay", "ppp": 93.422},
  {NAME: "Peru", "ppp": 397.612},
  {NAME: "Philippines", "ppp": 919.368},
  {NAME: "Poland", "ppp": 1294.478},
  {NAME: "Portugal", "ppp": 350.208},
  {NAME: "Puerto Rico", "ppp": 107.574},
  {NAME: "Qatar", "ppp": 261.979},
  {NAME: "Romania", "ppp": 589.707},
  {NAME: "Russia", "ppp": 4096.528},
  {NAME: "Rwanda", "ppp": 29.594},
  {NAME: "Samoa", "ppp": 1.147},
  {NAME: "San Marino", "ppp": 1.962},
  {NAME: "São Tomé and Príncipe", "ppp": 0.835},
  {NAME: "Saudi Arabia", "ppp": 1627.305},
  {NAME: "Senegal", "ppp": 58.267},
  {NAME: "Serbia", "ppp": 132.792},
  {NAME: "Seychelles", "ppp": 2.471},
  {NAME: "Sierra Leone", "ppp": 13.772},
  {NAME: "Singapore", "ppp": 560.205},
  {NAME: "Slovakia", "ppp": 178.526},
  {NAME: "Slovenia", "ppp": 81.334},
  {NAME: "Solomon Islands", "ppp": 1.608},
  {NAME: "Somalia", "ppp": 13.910},
  {NAME: "South Africa", "ppp": 717.396},
  {NAME: "South Sudan", "ppp": 10.904},
  {NAME: "Spain", "ppp": 1808.666},
  {NAME: "Sri Lanka", "ppp": 289.891},
  {NAME: "St. Kitts and Nevis", "ppp": 1.199},
  {NAME: "St. Lucia", "ppp": 2.417},
  {NAME: "St. Vincent and the Grenadines", "ppp": 1.394},
  {NAME: "Sudan", "ppp": 181.714},
  {NAME: "Suriname", "ppp": 8.771},
  {NAME: "Sweden", "ppp": 561.999},
  {NAME: "Switzerland", "ppp": 627.151},
  {NAME: "Syria", "ppp": "n/a"},
  {NAME: "Taiwan Province of China", "ppp": 1316.049},
  {NAME: "Tajikistan", "ppp": 34.827},
  {NAME: "Tanzania", "ppp": 163.598},
  {NAME: "Thailand", "ppp": 1272.898},
  {NAME: "Timor-Leste", "ppp": 4.459},
  {NAME: "Togo", "ppp": 18.218},
  {NAME: "Tonga", "ppp": 0.620},
  {NAME: "Trinidad and Tobago", "ppp": 35.031},
  {NAME: "Tunisia", "ppp": 120.457},
  {NAME: "Turkey", "ppp": 2546.498},
  {NAME: "Turkmenistan", "ppp": 98.192},
  {NAME: "Tuvalu", "ppp": 0.050},
  {NAME: "Uganda", "ppp": 106.106},
  {NAME: "Ukraine", "ppp": 543.828},
  {NAME: "United Arab Emirates", "ppp": 650.829},
  {NAME: "United Kingdom", "ppp": 2959.924},
  {NAME: "United States", "ppp": 20932.750},
  {NAME: "Uruguay", "ppp": 79.302},
  {NAME: "Uzbekistan", "ppp": 252.576},
  {NAME: "Vanuatu", "ppp": 0.777},
  {NAME: "Venezuela", "ppp": 144.737},
  {NAME: "Vietnam", "ppp": 1058.693},
  {NAME: "West Bank and Gaza", "ppp": 27.486},
  {NAME: "Yemen", "ppp": 62.583},
  {NAME: "Zambia", "ppp": 63.103},
  {NAME: "Zimbabwe", "ppp": 39.824},
  ]

  export default countries