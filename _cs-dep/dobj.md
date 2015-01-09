---
layout: relation
title: 'dobj'
shortdef: 'direct object'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.
Most often the direct object is in the [accusative case](cs-feat/Case) but
there are verbs that require their objects be in other cases (except for
nominative and vocative).

Accusative example:

~~~ sdparse
Koupil jsem auto . \n Bought I-have car .
dobj(Koupil, auto)
~~~

Genitive example:

~~~ sdparse
Cením si vaší pomoci . \n I-appreciate REFLEX your help .
dobj(Cením, pomoci)
~~~

Dative example:

~~~ sdparse
Čelíme velkým problémům . \n We-face big problems .
dobj(Čelíme, problémům)
~~~

Instrumental example:

~~~ sdparse
Univerzita nedisponuje takovým rozpočtem . \n University does-not-have-at-disposal such budget .
dobj(nedisponuje, rozpočtem)
~~~

In general, if there is just one object, it should be labeled `dobj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `dobj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj.

## Diffs

### Prague Dependency Treebank

The manual annotation of the PDT does not distinguish direct and indirect objects.
Therefore all non-clausal dependents labeled `Obj` in PDT are currently labeled `dobj`
in the converted data, even if it results in two or more direct objects attached to one verb.
In future, the valency lexicon <a href="http://ufal.mff.cuni.cz/vallex">Vallex</a>
could be used to identify the main object.
