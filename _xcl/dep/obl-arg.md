---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` for oblique arguments and distinguishes them from adjuncts (such as specifications of time, location, manner or instrument), which use the plain [obl]() relation. Two types of oblique arguments are marked by `obl:arg` in the UD_Classical_Armenian-CAVaL treebank: 

* Agents expressed by the genitive case in the periphrastic perfect tenses:

~~~ sdparse
զինչ ՞ գործ գործեալ է քո [Gen] : \n What have you done ?
obl:arg(գործեալ, քո)
~~~

* Recipient-like participants expressed by the prepositional construction ց=/_cՙ_= plus the accusative:

~~~ sdparse
Եւ հարցանէր ց նա ՝ թե զինչ ՞ անունէ քո : \n And he asked him , What is thy name ?
obl:arg(հարցանէր, նա)
~~~

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.

Kölligan, Daniel. 2013. Non-canonical subject marking. Genitive subjects in Classical Armenian. I. Seržant, L. Kulikov (eds.), _The Diachronic Typology of Non-Canonical Subjects_. Amsterdam: Benjamins: 73‒89.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:17 CET -->
