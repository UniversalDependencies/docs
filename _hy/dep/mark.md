---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the subordinating conjunction introducing a finite clause subordinate to another clause.
The `mark` is a dependent of the subordinate clause head.

~~~ sdparse
Չգիտեի, որ գերմաներեն ես խոսում ։ \n I-did't-know , that you-speak German .
mark(խոսում, որ)
mark(you-speak, that)
~~~

~~~ sdparse
Ապրանքը կուղարկենք , երբ գումարը փոխանցվի մեր հաշվին ։ \n We-will-dispatch goods , as-soon-as money arrive at our account .
mark(փոխանցվի, երբ)
mark(arrive, as-soon-as)
~~~

Note that the subordinating conjunction should not be confused with relative pronouns and adverbs.
These fill a valency slot in the frame of the subordinate predicate,
and are labeled according to their role in the frame, they are not `mark`:

~~~ sdparse
Տեղյակ պահեք, հենց գումարը փոխանցվի մեր հաշվի ։ \n Inform, when money is-traferred to-our account .
advmod(փոխանցվի, հենց)
advmod(is-traferred, when)
~~~
<!-- Interlanguage links updated St lis 3 20:58:57 CET 2021 -->
