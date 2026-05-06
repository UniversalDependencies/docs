---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is used for certain grammaticalized multiword expressions that behave like functional words. These include:

* Coordinating conjunction *ate era* "and"

Fixed multiword expressions are annotated with a flat structure, where all subsequent elements in the expression attach to the first one using the `fixed` relation. The assumption is that these expressions lack internal syntactic structure (synchronically), and their annotation is therefore structurally flat.

~~~ sdparse
Ate/[ExtPos=CCONJ] era nineyongera yo ninsoma . \n And1 and2 I_continued there I_studied .
cc(nineyongera, Ate)
cc(I_continued, And1)
fixed(Ate, era)
fixed(And1, and2)
~~~
<!-- Interlanguage links updated St 6. května 2026, 20:46:53 CEST -->
