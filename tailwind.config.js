/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
     main_bg: "var(--main_bg)",
     page_color: "var(--page_color)",
     input_color: "var(--input_color)",
     line_color: "var(--line_color)",
     primary_bg: "var(--primary_bg)",
     single_color: "var(--single_color)",
     secondary_bg: "var(--secondary_bg)",
     hover_color: "var(--hover_color)",
     blur: "var(--blur)",
     text_color:"var(--text_color)",
     primary_color: "var(--primary_color)",
     secondary_color: "var(--secondary_color)",
     title_color: "var(--title_color)",
     black: "var(--black)",
     white: "var(--white)",
     green: "var(--green)",
     blue: "var(--blue)",
     red: "var(--red)",
     yellow: "var(--yellow)",
     "white_100": "var(--white_100)",
     "purple_100": "var(--purple_100)",
     "pink_100": "var(--pink_100)",
     "cyan_100":"var(--cyan_100)",
     transparent: "transparent"
    },
    fontFamily:{
      gilroyNormal : ['Gilroy Regular'],
      gilroyMedium : ['Gilroy Medium'],
      gilroyNormalItalic : ['Gilroy NormalItalic'],
      gilroyBold : ['Gilroy Bold'],
      gilroySemiBold : ['Gilroy Semibold'],
      gilroyLight : ['Gilroy Light']
    },
    extend: {
      screens:{
        xs:"320px",
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl":"1480px",
        "3xl":"1620px"
      },
      container:{
        center: true
      }
    },
  },
  plugins: [],
}

