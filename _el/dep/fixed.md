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
- Fixed multiword adverbs involving reduplication, e.g. such as *τσίμα τσίμα*, *ίσα ίσα*, *στο τσακ*, *στο παρατσάκ* 'tightly'. Notice that reduplication is productive in Modern Greek; the results of productive reduplication are tagged as [compound]().

~~~ sdparse
τσίμα τσίμα
fixed(τσίμα -1-, τσίμα -2-)
~~~

- Other forms, e.g. *καλού-κακού* Lit. *of good-of bad* 'just to make sure'

~~~ sdparse
καλού-κακού
fixed(καλού -1-, - -2-)
fixed(καλού -1-, κακού -3-)
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


<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:54 CET -->
