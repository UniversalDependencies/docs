---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A copula is the relation between a subject complement and a copular verb or copular suffix.
We always mark copula as dependent of the subject complement.

The main means of forming copular constructions, however, is through
the bound morpheme _-(y)_,
and (infrequently) its clitic form _i-_.
Since the morpheme _-(y)_ consists only of a "buffer" consonant,
in some morphological contexts, it is not realized.

Copular morphemes carry features, e.g., [Number](tr-feat/Number), [Person](tr-feat/Person),
that may conflict with the complement they are attached to.
Furthermore, the copular suffixes can also attach to verbal nouns,
causing conflicting dependency relations besides more feature conflicts.
As a result, all copular markers, 
exectp the "zero copula", are considered as separate syntactic tokens.

~~~ sdparse
Güzel idi . (He\/she\/it) was beautiful
cop(Güzel, idi)
~~~

~~~ sdparse
Güzel –di . (He\/she\/it) was beautiful
cop(Güzel, –di)
~~~

~~~ sdparse
Güzel –im . \n I am beautiful
cop(Güzel, –im)
~~~

When an overt subject is present,
it is headed by the subject complement (not the copula).

~~~ sdparse
Kitap güzel –di . \n The book was nice\/beautiful 
cop(güzel, –di)
nsubj(güzel, Kitap)
~~~

In Turkish, the auxiliary verba _ol-_,
and to a lesser extent, _bulun-_
may act like a copula.
currently, they are treated as main verbs rather than copula
(see the discussion in 
[specific syntactic constructions](/tr/specific-syntax#auxiliaries-ol--and-bulun-)).
<!-- Interlanguage links updated Út zář 29 20:43:14 CEST 2020 -->
