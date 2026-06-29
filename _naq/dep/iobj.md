---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or [direct object](naq-dep/obj). The prototypical example is the recipient of ditransitive verbs of transfer. In Khoekhoe direct and indirect objects are marked identically (with the oblique _-a_).

~~~ sdparse
Tita ge ǂō-e ǁîba gere mā . \n I DECL salt him PST.IPFV give .
iobj(mā, ǁîba)
iobj(give, him)
~~~

The indirect object could also be realized as an object pronoun following the predicate:

~~~ sdparse
Tita ge ǂō-e gere mā bi . \n I DECL salt him PST.IPFV give him .
iobj(mā, bi)
iobj(give, him)
~~~

When verbs occur with one object, it is `iobj` if:

* Another, more patient-like object may be inserted into the clause without affecting the morphosyntax of the object in question
    
* The verb licenses the object in combination with a [ccomp](naq-dep/ccomp) (the [ccomp](naq-dep/ccomp) may be analyzed as taking the place of an [obj](naq-dep/obj))
    
For example, the verb _ǁkhāǁkhā_ "teach" may occur with [obj](naq-dep/obj), `iobj`, or both:

~~~ sdparse
ǁîb ge ǁîna ǁuisâuǁkhāsiba ra ǁkhāǁkhā . \n He DECL them economics IPFV teach .
obj(ǁkhāǁkhā, ǁuisâuǁkhāsiba)
iobj(ǁkhāǁkhā, ǁîna)
obj(teach, economics)
iobj(teach, them)
~~~

~~~ sdparse
ǁîb ge ǁîna ra ǁkhāǁkhā . \n He DECL them IPFV teach .
iobj(ǁkhāǁkhā, ǁîna)
iobj(teach, them)
~~~

~~~ sdparse
ǁîb ge ǁuisâuǁkhāsiba ra ǁkhāǁkhā . \n He DECL economics IPFV teach .
obj(ǁkhāǁkhā, ǁuisâuǁkhāsiba)
obj(teach, economics)
~~~

~~~ sdparse
ǁîb ge ǁîna ra ǁkhāǁkhā , mati i ǀaena ra nî ǀaere sa . \n He DECL them IPFV teach , how it firewood IPFV will collect NMLZ.OBL .
ccomp(ǁkhāǁkhā, ǀaere sa)
iobj(ǁkhāǁkhā, ǁîna)
ccomp(teach, collect)
iobj(teach, them)
~~~


For the indirect object of a verb in the applicative voice the [iobj:appl]() sub-relation is used.

~~~ sdparse
ǁGuiǃāba te re . \n Explain_for me IPFV .
iobj(ǁGuiǃāba, te)
iobj(Explain_for, me)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:12:31 CEST -->
