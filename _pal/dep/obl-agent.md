---
layout: relation
title: '<title>'
shortdef: '<shortdef>'
udver: '2'
---

Middle Persian does not have a grammaticalized passive diathesis (at least in all centuries of its attestations). There are the following patterns that can be expressed by a passive in the target language of translation:
1. intransitivization by the suffix *-īh-* : this suffix is used to form intransitive verbs from nouns or other parts-of-speech, and to reduce the valency of a verb by -1. With transitive verbs, this can result in a passive reading, with intransitive verbs, it may be a middle. Some texts apply this suffix so regularly to transitive verbs that it can be considered a grammaticalized passive suffix.
2. middle verbs: verbs ending in *°xtan* can form a middle in the so-called present tense (e.g. *hammōxtan* with *hammōz-* 'to teach' and *hammōxt-* 'to learn').
3. subject demotion in the active: the subject referent can left unexpressed and the verb is a 3sg. or 3pl. This corresponds to English constructions with 'one' or 'you' without specific reference.
4. ergative construction: if the oblique subject referent is not expressed, the construction allows for an active reading assuming subject omission (topic drop) or a passive reading.
5. participle + *būdan* 'to become': Combining the resultative (aka past) participle with the verb 'to become' results in various readings among which the terminative reading is close to a passive interpretation.

Patterns 1+2 represent intransitive constructions, 3+4 transitive constructions, 5 is a copular construction including an [external-subject](nsubj:xsubj) relation.

The passive reading is certain when the agent is encoded by a preposition phrase with *az*.

- "If an amortisation (of a debt) is to be made <b>by a family</b>"
~~~ sdparse
ka az dūdag tōzišn bē kunišn \n if from family amortisation off do.NEC
mark(kunišn, ka)
case(dūdag, az)
obl:agent(kunišn, dūdag)
nsubj:pass(kunišn, tōzišn)
advmod(kunišn, bē)
~~~
