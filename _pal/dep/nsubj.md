---
layout: relation
title: 'nsubj'
shortdef: '<shortdef>'
udver: '2'
---

The nominal subject relation is used for nouns, pronouns, and proper names. In the ergative construction the so-called A participant is taken as the subject. If the ergative construction received a passive reading, the object is annotated as `nsubj:pass`. Clausal subjects are annotated as `csubj`. Subjects of clausal predicates are annotated as `nsubj:outer`. Note that subjects are frequently omitted. Expletive subjects have not been identified so far.

- "And so, the gods have created the dogs and flyers (the birds) according to their nature as carrion eaters."
~~~ sdparse
ōh =iz ān sagān ud wayān murwān xwadčihrag yazdān kirbxwār dād ēstēnd \ thus also that dogs and flyers birds instinctive gods scavenging created stand.3PL
nsubj(dād, yazdān)
aux(dād, ēstēnd)
obj(dād, sagān)
conj(sagān, wayān)
appos(wayān, murwān)
~~~

- "Ohrmazd created Jam and Frēdōn and Kāwōs (to be) immortal."
~~~ sdparse
ohrmazd ǰam ud frēdōn ud kāwōs ahōš dād hēnd \n Ohrmazd Jam and Frēdōn and Kāwōs deathless created are
nsubj(dād, ohrmazd)
obj(dād, ǰam)
conj(ǰam, frēdōn)
conj(ǰam, kāwōs)
aux(dād, hēnd)
~~~

- "He, Ohrmazd, said: I created you, bird Warīšag!"
~~~ sdparse
guft =iš ohrmazd kū =m dād hē tō murw warīšag \n said him Ohrmazd that me created are.2SG you bird Warīšag
nsubj(dād, =im
aux(dād, hē)
obj(dād, tō)
~~~

- "Which of the lands (is) happier?"
~~~ sdparse
zamīg kadām šādtar \n earth which happier
nmod(kadām, zamīg)
nsubj(šādtar, kadām)
~~~

- "And the organisation of the material and spiritual worlds (is) by wisdom as well."
~~~ sdparse
ud gētī =yiz ud mēnōy rāyēnīdārīh pad xrad \n and material_world also and spiritual_world organisation by wisdom
nsubj(xrad, rāyēnīdārīh)
case(xrad, pad)
cc(xrad, ud-1)
advmod(rāyēnīdārīh, =yiz)
nmod(rāyēnīdārīh, gētī)
conj(gētī, mēnōy)
cc(mēnōy, ud-4)
~~~

**On oblique subjects**
1. The oblique A participant of the ergative construction is in `nsubj` relation to its head. (For examples see above.)
2. The oblique A or S participant of modal constructions is in `nsubj` relation to the modal verb (*abāyistan* 'must').
3. The Experiencer participant is in `obl` relation to its head (e.g., *sahistan* 'to seem', *abāyistan* 'to be necessary').

- Oblique experiencer: "As long as (he is) alive, (he is) authorized to take back the guardianship whenever there is a need for him."
~~~ sdparse
tā zīndag hamē ka =š andar abāyēd sālārīh bē abāz pādixšāy stadan \n until alive always when him therein be_necessary guardianship out back authorized take
mark(abāyēd, ka)
obl(abāyēd, =š)
advmod(abāyēd, andar)
advcl(pādixšāy, abāyēd)
~~~

- Oblique subject of a modal verb: "And in which manner does he have to be in this world?"
~~~ sdparse
u =š andar gētī pad čē ēwēnag abāyēd būd \n and him inside world in what manner must be
nsubj(abāyēd, =š)
xcomp(abāyēd, ēwēnag)
cop(ēwēnag, būd)
case(ēwēnag, pad)
det(ēwēnag, čē)
case(gētī, andar)
obl:lmod(ēwēnag, gētī)
cc(abāyēd, u)
~~~

- Oblique experiencer: "Which one appears more useful to you."
~~~ sdparse
kadār =tān sūdōmandtar sahēd \n which you.OBL more_useful seems
case(nām, pad)
det(yazadān, ī)
nmod(nām, yazadān)
~~~

- Oblique experiencer: "Then (it) seemed more sensible to me to separate and sort the questions topic by topic."
~~~ sdparse
ēg =im pursišn dar dar ǰudāg ud wizihāgīhātar kirdan čimīgtar sahist \n then me question topic topic separate and more_assortedly making more_reasonable seemed
compound:redup(dar-4, dar-5)
obl(kirdan, dar-4)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:22 CEST -->
