// @ts-nocheck
import { defineConfig } from "vite";
import { md } from "./plugins/vite-plugin-md";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";

// https://vitejs.dev/config/
export default ({
  plugins: [vue(),md()],
  server: {
    host: "0.0.0.0"
  }
});
