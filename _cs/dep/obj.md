---
layout: relation
title: 'obj'
shortdef: 'direct object'
udver: '2'
---

The direct object of a verb is the noun phrase that denotes the entity acted upon.
Most often the direct object is in the [accusative case](cs-feat/Case) but
there are verbs that require their objects be in other cases (except for
nominative and vocative).

Accusative example:

~~~ sdparse
Koupil jsem auto . \n Bought I-have car .
obj(Koupil, auto)
obj(Bought, car)
~~~

Genitive example:

~~~ sdparse
Cením si vaší pomoci . \n I-appreciate REFLEX your help .
obj(Cením, pomoci)
obj(I-appreciate, help)
~~~

Dative example:

~~~ sdparse
Čelíme velkým problémům . \n We-face big problems .
obj(Čelíme, problémům)
obj(We-face, problems)
~~~

Instrumental example:

~~~ sdparse
Univerzita nedisponuje takovým rozpočtem . \n University does-not-have-at-disposal such budget .
obj(nedisponuje, rozpočtem)
obj(does-not-have-at-disposal, budget)
~~~

In general, if there is just one object, it should be labeled `obj`,
regardless of the morphological case or semantic role that it bears. If there are two or more
objects, one of them should be `obj` and the others should be
[iobj](). In such cases it is necessary to decide what is the most
directly affected object _(patient)._ The one exception is when there is a clausal complement. Then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an iobj.

## Diffs

### Prague Dependency Treebank

The manual annotation of the PDT does not distinguish direct and indirect objects.
Therefore most non-clausal dependents labeled `Obj` in PDT are currently labeled `obj`
in the converted data, even if it results in two or more direct objects attached to one verb.
Occasionally a heuristic was used: if there are two objects, one of them accusative and the other dative,
then the former is `obj` and the latter `iobj`. But such heuristics do not cover all possible objects,
and even ditransitive verbs may occur without one of their objects because of ellipsis.
In future, the valency lexicon <a href="http://ufal.mff.cuni.cz/vallex">Vallex</a>
could be used to identify the main object.
<!-- Interlanguage links updated St lis 3 20:59:03 CET 2021 -->
