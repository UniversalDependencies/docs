---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or (direct) object. 
In Slovene this relation is typically applied to **objects in the dative case** which perform the role of beneficiary on the semantic level. This is not always the case, however, since this semantic role can also be performed by objects in the accusative case. 

~~~ sdparse
Otrokoma je hotel zagotoviti lepo prihodnost \n For-the-children aux-PAST he-wanted to-ensure a-good future
iobj(zagotoviti,Otrokoma)
obj(zagotoviti,prihodnost)
iobj(to-ensure,For-the-children)
obj(to-ensure,future)
~~~
~~~ sdparse
prosili so me , naj govorim z njim \n they-asked aux-PAST me , to talk to him
iobj(prosili,me-3)
ccomp(prosili,govorim)
iobj(they-asked,me-12)
ccomp(they-asked,talk)
~~~
~~~ sdparse
razbremeniti sodišče obravnave \n relieve the-court of-the-case
iobj(razbremeniti,sodišče)
obj(razbremeniti,obravnave)
iobj(relieve,the-court)
obj(relieve,of-the-case)
~~~

If a clause contains only one non-clausal object (i.e. an object tat is not ccomp), this object can be marked either as a direct object (`obj`) or an indirect object (`iobj`). Potential reasons to consider a sole object in a clause as an `iobj` include:

- It has case marking distinct from that of a prototypical obj, e.g. dative rather than accusative
- Another, more patient-like object may be inserted into the clause without affecting the morphosyntax of the object in question
- The verb licenses the object in combination with a ccomp (the ccomp may be analyzed as taking the place of an obj)
~~~ sdparse
Suho listje jima je šelestelo pod čevlji \n Dry leaves to-them aux-PAST rustled beneath shoes
obj(šelestelo,jima)
obj(rustled,to-them)
~~~
~~~ sdparse
Ni mu še pojasnil \n He-did-not to-him yet explain
iobj(pojasnil,mu)
iobj(explain,to-him)
~~~
~~~ sdparse
Županja se je odločila , da jim bo občina po svojih močeh pomagala \n The mayor decided , that the municipality will help them as much as it could
iobj(pomagala,jim)
iobj(help,them) 
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:58 CET -->
