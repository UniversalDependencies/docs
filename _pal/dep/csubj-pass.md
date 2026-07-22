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

It is only for pattern 4 that the relation `csubj:pass` is applied to ensure a correct interpretation of the semantic roles. The passive reading is certain when the agent is encoded by a preposition phrase with *az*.

- "(It) was said by Siyāwaxš that (Farrox) is compliant to rules when (he) does not amortise the sum of money until (Mihrēn) gives back that deed."
~~~ sdparse
az siyāwaxš be guft kū tā ān wizīr abāz dahēd pādixšāy ka drahm nē wizārēd \n from Siyāwaxš PFV said that until that document back gives authorised when sum_of_money not amortises
case(siyāwaxš, az)
obl:agent(guft, siyāwaxš)
mark(pādixšāy, kū)
csubj:pass(guft, pādixšāy)
advcl(pādixšāy, dahēd)
mark(dahēd, tā)
advcl(pādixšāy, wizārēd)
mark(wizārēd, ka)
~~~
