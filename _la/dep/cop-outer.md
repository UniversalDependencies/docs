---
layout: relation
title: 'cop:outer'
shortdef: 'outer copula'
udver: '2'
---

This subtype of [`cop`](la-dep/cop) is used alongside of [`nsubj:outer`](u-dep/nsubj-outer) to clearly differentiate the copula "supporting" a clausal non-verbal predicate from any other predication that might appear in the latter. If the [copula](la-pos/AUX) (in Latin *sum*) is expressed, this subtype is always used whenever `nsubj:outer` would also be used. Other arguments and modifiers of the matrix clause are currently not explicitly differentiated this way.


~~~ sdparse
perfectus enim modus intelligendi est ut intelligantur ea quae sunt secundum naturam suam intelligibilia \n perfect then way of-understanding is that they-be-understood them which are according-to nature own
nsubj:outer(intelligantur, modus)
cop:outer(intelligantur, est)
mark(intelligantur, ut)
nsubj:outer(they-be-understood, way)
cop:outer(they-be-understood, is)
mark(they-be-understood, that)
~~~

'the perfect way of understanding consists in the understanding of things which in their very nature are intelligible' (`ITTB train-s5236`, *Summa Contra Gentiles* lib. 2 cap. 91 n. 8, Thomas Aquinas)

* The original literally uses the copula *sum* and not a lexical verb like *consisto* 'to consist'. The clausal non-verbal predicate is signalled and introduced by the connector ([`SCONJ`](la-pos/SCONJ)) *ut*, and headed by a so-called [finite form](la-feat/VerbForm) of the verb *intelligo* 'to understand'.
