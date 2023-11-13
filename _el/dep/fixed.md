---
layout: relation
title: 'fixed'
shortdef: 'multi-word expression'
udver: '2'
---

For examples of fixed multiword expressions, see [case]() and [mark]().
These expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the relation [fixed]().

Adverbs
- Multiword adverbs involving reduplication, e.g. such as *τσίμα τσίμα*, *ίσα ίσα* *στο τσακ*, *στο παρατσάκ* 'tightly'.

~~~ sdparse
τσίμα τσίμα
fixed(τσίμα -1-, τσίμα -2-)
~~~

- Other forms, e.g. *καλού-κακού* Lit. *of good-of bad* 'just to make sure'

~~~ sdparse
τσίμα τσίμα
fixed(καλού -1-, - -2-)
fixed(καλού -1-, τσίμα -3-)
~~~

~~~ sdparse
στο τσακ
fixed(στο -1-, τσακ -2-)
~~~

~~~ sdparse
Πρέπει να είμαστε απολύτως σαφείς ως προς αυτό . \n We need to be absolutely clear on this.
fixed(ως, προς)
case(αυτό, προς)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:55 CET -->
