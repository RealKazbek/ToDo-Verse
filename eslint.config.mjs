import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    // ⛔ Игнорируем сгенерированные Prisma файлы
    ignores: ["lib/generated/prisma/**"],
  },

  // ✅ Подключаем рекомендованные конфиги
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
