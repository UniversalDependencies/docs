---
layout: relation
title: 'mwe'
shortdef: 'multi-word expression'
---

The multi-word expression (modifier) relation is one of the three relations ([compound](), `mwe`, [name]()) for compounding.
It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

Note that, we mark most of the expressions that are marked `MWE` in METU-Sabancı treebank as `compound`. 
`mwe` is only used for fixed expressions that do not show any morphological variation.

~~~ sdparse
Ali ya da Ahmet  \n Ali or Ahmet
mwe(ya, da)
~~~

~~~ sdparse
Bir tek Ali okumamış . \n Only Ali did not read
mwe(bir, tek)
~~~

~~~ sdparse
Her ne kadar aradıysam da ulaşamadım . \n Despite calling many times, I could not reach (him\/her)
mwe(Her, ne)
mwe(Her, kadar)
~~~
