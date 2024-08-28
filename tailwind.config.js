module.exports = {
  content: ["./src/**/*.{html,js,jsx,png,gif}"],
  theme: {
    extend: {
      colors: {
        primary: "#cff600",
      },
      backgroundImage: {
        "gradient-box": "linear-gradient(270deg, #3c402b73, #accc0573);",
        "roadmap-box": "linear-gradient(90deg, #2c64f4a6, #a6c50540);",
        "gradient-faq-box":
          "linear-gradient(90deg, #ffffff26, #c2c2c226, #323a0526);",
        "gradient-club-box": "linear-gradient(270deg, #c2c2c240, #ffffff40);",
        clubbg: "url('/public/images/clubbg.png')",
      },
      screens: {
        xxl: { max: "1500px" },
        xl: { max: "1300px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "500px" },
        xxs: { max: "400px" },
        xxxs: { max: "376px" },
      },
    },
  },
  plugins: [],
};
