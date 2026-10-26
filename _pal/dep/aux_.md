---
layout: relation
title: 'aux'
shortdef: 'auxiliary verb'
udver: '2'
---

Auxiliary verbs represent independent verb forms in Middle Persian, which can fully inflect. Nevertheless, they receive a [flat]() structure according to UD rules.
<br>For instance, the pluperfect is formed with the resultative participle of the main verb followed by the 'past' of the auxiliary verb, i.e. the resultative participle of the auxiliary verb *ēstādan* followed by the person and number marking copula verb: (PP (PP+COP)).

- "the authorities who had come"
~~~ sdparse
dastwarān ī mad ēstād hēnd \n authorities REL come stood are.3PL
aux(mad, ēstād)
aux(mad, hēnd)
acl:relcl(dastwarān, mad)
~~~

The flat structure results in an ambiguity if one is only to look for the combination of a resultative participle and the person and number marking copula verb: (PP+COP), which forms the so-called 'past tense'.

- "the authorities who came"
~~~ sdparse
dastwarān ī mad hēnd \n authorities REL come are.3PL
aux(mad, hēnd)
acl:relcl(dastwarān, mad)
~~~

The relation "*hēnd* is auxiliary of *mad*" holds for both and only by checking for the absence or presence of another auxiliary, it is possible to decide whether the auxiliary verb is inflected and it is a plurperfect, or not, and it is a 'past tense'. Hence, the 'past tense' cannot be identified by the relation only.
