---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, to signal that it is not the subject of the nested clause. See the discussion of [Predicate Clauses](https://universaldependencies.org/u/overview/complex-syntax.html#predicate-clauses).

~~~ sdparse
ǃŪsa mû s ge ǃnorosa mû sa . \n Forehead see NMLZ DECL back_of_head see NMLZ.OBL .
obj(mû-2, ǃŪsa)
csubj:outer(mû-6, mû-2)
mark(mû-2, s)
aux(mû-6, ge)
obj(mû-6, ǃnorosa)
mark(mû-6, sa)
mark(mû-6, .-8)
obj(see-11, Forehead)
csubj:outer(see-15, see-11)
mark(see-11, NMLZ)
aux(see-15, DECL)
obj(see-15, back_of_head)
mark(see-15, NMLZ.OBL)
mark(see-15, .-17)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:20 CEST -->
