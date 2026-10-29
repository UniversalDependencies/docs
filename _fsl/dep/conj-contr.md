---
layout: relation
title: 'conj:contr'
shortdef: 'contrastive relation'
udver: '2'
---

The deprel `conj:contr` is used for dependency relation presented in a contrastive relation. It is used in order to focalize an element. This element is preceded by an alternative, which is negated, thus it focuses on the second element, excluding alternatives. The pattern appears to always be ’Alternative-A/Negation/Alternative-B’, to express an contrastive focus on Alternative-B. This suite is, in most cases, uninterrupted by other constituents.

~~~ sdparse
[AUSSI] PNT[là-bas-en-bas] [EAU] [SABLE] [non] [ROCHER] [rocher] \n And in the water, not sand but rocks,
conj:contr ([non],[ROCHER])
~~~

In this example, to focus on [ROCHER], it is first stated ‘it is not sand’ with the alternative [SAND] and its negation [no].

~~~ sdparse
PNT[lieu3] [QUOI] [MER] [MAIS] [PLAGE] [DIFFÉRENT] [CALANQUE] [ROCHER] [rocher] \n The seashore but not the beach, the rocky inlet with the rocks around.
conj:contr ([DIFFÉRENT],[CALANQUE])
~~~

Furthermore, we can see with this example, that the central ’Negation’ constituent, doesn’t have to be the sign [NO] but can any sign with a negative reading, like here with [DIFFERENT]. Here, the focus in on [ROCKY-INLET], since the alternative of the setting of [BEACH] is excluded.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:34 CEST -->
