---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the second most core argument of a verb after the subject. 
Typically, it is the noun phrase that denotes the entity acted upon or which undergoes a change of state or motion (the proto-patient).

~~~ sdparse
Euller fez mais duas jogadas .
dobj(fez, jogadas)
~~~

<!--
In languages distinguishing morphological [cases](u-feat/Case), the
direct object will often be marked by the accusative case. However,
verb valency may occasionally dictate a different form, such as the
dative case in the following German example:

~~~ sdparse
jemandem begegnen \n someone.Dat to-meet
dobj(begegnen, jemandem)
~~~
-->

In general, if there is just one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `obj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. 
Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj. 
<!-- There is more discussion of constructions with multiple objects
on the page for [iobj](). If possible, language-specific
documentation should be available to help identify direct objects. -->

~~~ sdparse
não te dizem nada
iobj(dizem, te)
dobj(dizem, nada)
~~~

Note that oblique pronouns are tagged as `iobj`.

~~~ sdparse
faltou lhes inteligência
nsubj(faltou, inteligência)
iobj(faltou, lhes)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:31 CEST 2020 -->
