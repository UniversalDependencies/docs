---
layout: relation
title: 'obj:exp'
shortdef: 'experiencer object'
udver: '2'
---

Experience verbs (such as ደኸመ / *dəxəmə* "be tired" and ጠመየ / *t'əməyə* "be hungry") can take an experiencer that agrees with the object suffix of the verb, while the verb has 3rd person masculine singular subject agreement. We annotate this experiencer as `obj:exp`. It usually has no case marker, even when it is definite, but it may take the objective prefix ን- / *n-*.

~~~ sdparse
ኣስቴር ደኺሙዋ ። \n Aster tire.CONV.Sb3sm.Ob3sf .
obj:exp(ደኺሙዋ, ኣስቴር)
~~~

"Aster is tired." (ti_ref_46b)

~~~ sdparse
እቲ ቆልዓ ጠምዩዎ ኣሎ ። \n the child be.hungry.CONV.Sb3sm.Ob3sm AUX.Sb3sm .
det(ቆልዓ, እቲ)
obj:exp(ጠምዩዎ, ቆልዓ)
aux(ጠምዩዎ, ኣሎ)
~~~

"The child is hungry." (ti_ref_181)

~~~ sdparse
ን- እቲ ቆልዓ ጠምዩዎ ኣሎ ። \n OBJ the child be.hungry.CONV.Sb3sm.Ob3sm AUX.Sb3sm .
case:pre(ቆልዓ, ን-)
det(ቆልዓ, እቲ)
obj:exp(ጠምዩዎ, ቆልዓ)
aux(ጠምዩዎ, ኣሎ)
~~~

"The child is hungry." (ti_ref_182)

With the same verb, the experiencer can also be the subject, agreeing with the subject marking of the verb (እቲ ቆልዓ ጠምዩ ኣሎ / *ʔti k'olʕa t'əmyu ʔallo*, ti_ref_180); it is then [nsubj](https://universaldependencies.org/u/dep/nsubj.html)
