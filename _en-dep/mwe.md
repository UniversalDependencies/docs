---
layout: base
title:  'mwe'
shortdef : 'multi-word expression'
---

## `{{ page.title }}`: {{ page.shortdef }}

The multi-word expression (modifier) relation is used for certain fixed grammaticized expressions with function words that behave like a single function word.

At present, this relation is used inside the following expressions: *rather than, as well as, instead of, such as, because of, instead of, in addition to, all but, such as, because of, instead of, due to*. 

~~~ sdparse
I like dogs as well as cats
mwe(well, as)
~~~

~~~ sdparse
He cried because of you
mwe(of, because)
~~~

Multiword expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the
`mwe` label.
