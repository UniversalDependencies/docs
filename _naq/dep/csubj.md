---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

A clausal subject is a clause that acts as the subject of another clause. The governor of this relation might not always be a verb: it could be a non-verbal predicate. The dependent is the main lexical verb or other predicate of the subject clause.

~~~ sdparse
Amaba ǁgau s ge ǂhâbasa . \n Truth-OBL show NMLZ DECL necessary .
obj(ǁgau, Amaba)
csubj(ǂhâbasa, ǁgau)
mark(ǁgau, s) 
aux(ǂhâbasa, ge)
punct(ǂhâbasa, .-6)
obj(show, Truth-OBL)
csubj(necessary, show)
mark(show, NMLZ)
aux(necessary, DECL)
punct(necessary, .-13)
~~~

~~~ sdparse
ǃŪsa mû s ge ǃnorosa mû sa . \n Forehead.OBL see NMLZ DECL back_of_head.OBL see NMLZ.OBL .
obj(mû-2, ǃŪsa)
csubj(mû-6, mû-2)
mark(mû-2, s)
aux(mû-6, ge)
obj(mû-6, ǃnorosa)
mark(mû-6, sa)
punct(mû-6, .-8)
obj(see-11, Forehead.OBL)
csubj(see-15, see-11)
mark(see-11, NMLZ)
aux(see-15, DECL)
obj(see-15, back_of_head.OBL)
mark(see-15, NMLZ.OBL)
punct(see-15, .-17)
~~~

The [csubj:pass](naq-dep/csubj-pass) relation subtype is used for the clausal subject of a passive verb. If the subject is of a copular clause whose predicate is itself a clause, [csubj:outer](naq-dep/csubj-outer) is used.

<!-- Interlanguage links updated So 10. května 2025, 18:15:19 CEST -->
