---
layout: relation
title: 'cop'
shortdef: 'copula'
---

A copula is the relation between a subject complement and a copular verb or copular suffix.
We always mark copula as dependent of the subject complement.

In Turkish, the auxiliary verb _ol-_ 
and in some constructions the negative particle _değil_ act like a free copula.
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
including the "zero copula" are considered as a separate syntactic tokens.

~~~ sdparse
Güzel olacak . \n (He\/she\/it) will be beautiful
cop(Güzel, olacak)
~~~

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

~~~ sdparse
Güzel –0 . \n He\/she\/it is beautiful (–0 represents the zero morpheme)
cop(Güzel, –0)
~~~

When an overt subject is present,
it is headed by the subject complement (not the copula).

~~~ sdparse
Kitap güzel –0 . \n The book is nice\/beautiful 
cop(güzel, –0)
nsubj(güzel, Kitap)
~~~

~~~ sdparse
Kitap güzel olacak . \n The book will be nice\/beautiful
cop(güzel, olacak)
nsubj(güzel, Kitap)
~~~
