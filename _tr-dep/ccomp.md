---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement of a predicate is a dependent clause which is a core argument.
That is, it functions like an object of the predicate.

We split the verbal noun suffixes,
and mark them as the head of the subordinate clause.
The unit with the subordinating suffix is tagged as [noun](tr-pos/NOUN).
However, we still use `ccomp` for the relation between the higher level clause and the clausal object.

At present, we use `ccomp` only for direct objects, i.e., non-finite noun phrases in accusative or nominative [Case](tr-feat/Case).
The arguments in other cases are marked using [nmod]() relation or appropriate subtype of it.

~~~ sdparse
Sonunda " artık yeter " dedi . \n Finally, he said " that's enough " .
ccomp(dedi, yeter)
~~~

~~~ sdparse
Sevmiyorum demedim . \n I did not say I don't like it .
ccomp(demedim, Sevmiyorum)
~~~

~~~ sdparse
Sevme/VERB –diğimi/NOUN söylemedim/VERB . \n I did not that I don't like it .
ccomp(söylemedim, –diğimi)
acl(–diğimi, Sevme)
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
