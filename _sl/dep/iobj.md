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

In accordance with the general guidelines, the SSJ-UD treebank also follows the following strict rule: if the sentence contains only one non-clausal object, this object is always marked as a direct object, regardless of its grammatical case or semantic role (it receives the obj or ccomp relation). If there is more than one phrasal (**obj**) or clausal object (**ccomp**), the **iobj** relation is used for all subsequent objects. 
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:59 CET -->
