import typescript from "@rollup/plugin-typescript";

const config = {
  input: "index.tsx",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [typescript()],
};

export default config;
