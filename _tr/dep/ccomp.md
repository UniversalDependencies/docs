---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

A clausal complement of a predicate is a dependent clause which is
a core argument.
That is, it functions like an object of the predicate.

`ccomp` is used only for direct clausal objects,
i.e., clauses headed by (non-finite)  verbal nouns
in accusative or nominative [Case](tr-feat/Case).
Other clausal arguments in are marked using [advcl]() relation.

~~~ sdparse
Sonunda " artık yeter " dedi . \n Finally, he said " that's enough " .
ccomp(dedi, yeter)
~~~

~~~ sdparse
Sevmiyorum demedim . \n I did not say I don't like it .
ccomp(demedim, Sevmiyorum)
~~~

~~~ sdparse
Sevmediğimi söylemedim . \n I did not that I don't like it .
ccomp(söylemedim, Sevmediğimi)
~~~

~~~ sdparse
Yarın gelecek sanıyordum . \n I thought he'd come tomorrow
ccomp(sanıyordum, gelecek)
~~~

~~~ sdparse
Sanıyordum ki yarın gelecek . \n I thought he'd come tomorrow
ccomp(Sanıyordum, gelecek)
mark(gelecek, ki)
~~~

~~~ sdparse
Yarın gelecek diye biliyordum . \n I knew (as if) she'd come tomorrow .
ccomp(biliyordum, gelecek)
makr(gelecek, diye)
~~~

See also [xcomp]().
<!-- Interlanguage links updated Út zář 29 20:23:22 CEST 2020 -->
