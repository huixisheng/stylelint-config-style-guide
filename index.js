module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "unit-no-unknown": [true, { ignoreUnits: ["/rpx/"]}],
    // // 限制单行声明块中声明的数量。
    "declaration-block-single-line-max-declarations": 100,
    // // 禁止缺少文件末尾的换行符。
    // // http://stylelint.cn/user-guide/rules/no-missing-end-of-source-newline/
    "no-missing-end-of-source-newline": null,
    // // 在冒号之后必须有一个空格。
    // "declaration-colon-space-after": "always",
    // // 在开括号之后要求有一个换行符 。
    // "block-opening-brace-newline-after": "never-multi-line",
    // // 在括开号之前要求有一个换行符或禁止有空白。
    // "block-opening-brace-newline-before": "never-multi-line",
    // // 在开括号之后要求有一个空格或禁止有空白。
    // "block-opening-brace-space-after": "never-multi-line",
    // // 禁止出现单行块。
    "block-no-single-line": null,
    // // 要求选择器列表的逗号之后有一个换行符或禁止在逗号之后有空白。
    // "selector-list-comma-newline-after": "always-multi-line",
    // "block-opening-brace-space-before": "always-single-line",
    "selector-type-no-unknown": [true, { ignoreTypes: ["page", "icon", "picker"]} ],
    "rule-empty-line-before": "never",
    "max-empty-lines": 3,
  }
}