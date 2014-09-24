---
layout: base
title: 'iobj'
shortdef: 'indirect object'
---

## iobj: indirect object

The indirect object of a verb is any noun phrase that is a core argument of the verb but it is not its <a href="dobj.html">direct object</a>. Prototypical example is the addressee of ditransitive verbs of exchange:

~~~ sdparse
She gave me a raise
iobj(gave, me)
~~~

In languages distinguishing morphological <a href="../ud-feat/Case.html">cases</a>, the direct object will often be marked by the dative case. However, verb valency may occasionally dictate that the direct object is in dative, or that the indirect objects shall take various other forms.

In the following Czech example, the verb takes two arguments, both are nouns in the accusative case. One of them is direct object (patient), the other is indirect (addressee). It is parallel to how the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving (consider a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
dobj(učí, matematiku)
iobj(učí, dceru)
dobj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

In general, if there is just one object, it should be labeled [dobj](), regardless of the morphological case. If there are two or more objects, one of them should be dobj and the others should be {{ page.title }}. In such cases it is necessary to decide what is the most directly affected object _(patient)._ If possible, language-specific documentation should help identify direct and indirect objects.

Note that the above example could be reduced to _he teaches my daughter,_ then _my daughter_ would become direct object.
