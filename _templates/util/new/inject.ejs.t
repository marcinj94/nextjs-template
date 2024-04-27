---
inject: true
to: src/utils/index.ts
skip_if: src/<%= name %>
append: true
---
export * from './<%= name %>';