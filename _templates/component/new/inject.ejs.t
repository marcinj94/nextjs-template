---
inject: true
to: src/components/index.ts
skip_if: components/<%= h.capitalize(name) %>
append: true
---
export * from './<%= h.capitalize(name) %>';