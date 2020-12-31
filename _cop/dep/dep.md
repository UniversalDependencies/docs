---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

For all cases not covered by these guidelines, the label dep may be used to denote the unusual dependency. Ideally, these cases should be re-examined and integrated into the guidelines at a later date.

Another specific use of `dep` in the Coptic Treebank is as the function of tokens representing lacunae (e.g. `[...]`) or tokens representing incomplete words which cannot be reconstructed from context. These are all attached to the root/local root of their clause. For example:

~~~ sdparse
ⲟⲩ/DET ⲥⲟⲛ/NOUN ⲉ[......]ⲙ[....]/X \n a brother e...m....

det(ⲥⲟⲛ, ⲟⲩ)
dep(ⲥⲟⲛ, ⲉ[......]ⲙ[....])
~~~


<!-- Interlanguage links updated Čt lis 12 09:43:22 CET 2020 -->
