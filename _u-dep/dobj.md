---
layout: entry
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.

~~~ sdparse
She gave me a raise
dobj(gave, raise)
~~~

In languages distinguishing morphological [cases](u-feat/Case), the
direct object will often be marked by the accusative case. However,
verb valency may occasionally dictate a different form, such as the
dative case in the following German example:

~~~ sdparse
jemandem begegnen \n someone.Dat to-meet
dobj(begegnen, jemandem)
~~~

In general, if there is just one object, it should be labeled `dobj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `dobj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj. There is more discussion of constructions with multiple objects
on the page for [iobj](). If possible, language-specific
documentation should be available to help identify direct objects.
