---
layout: relation
title: 'dislocated:res'
shortdef: 'dislocation'
udver: '2'
---

Middle Persian frequently uses placeholders of clausal complements. The [ccomp]() canonically follows the speech verb. It is possible that the position of nominal objects before the speech verb is filled by a [pronoun](PRON). Strictly speaking, this pronoun would be the object of the speech verb, and the complement clause would be dislocated. However, this would basically result in a total absence of `ccomp` relations, which also runs against canonical word order, i.e. considering frequency, the postverbal placement of complement clauses *is* the base position. Placeholder can also directly follow the clausal constituent.<br>Middle Persian does not require the use of [expletives](expl) as omission of constituents or zero-constituents are the preferred strategy. The placeholder is not an expletive as it does fill the respective argument position. It can also be modified by 'also' and differ in deixis (typically *ēn* or *ēd* 'this, but also *ān* 'that'). The personal pronoun *ōy* 'he, she, it' does not appear as a placeholder.

- "And (he) has to be without doubt about this that the gods give goodness to humans."
~~~ sdparse
ud pad ēn abēgumān būd kū yazdān ō mardōmān nēkīh dahēnd \n and in this doubtless be.NEC that gods to humans goodness give.3PL
cc(abēgumān, ud)
case(ēd, pad)
obl(abēgumān, ēd)
cop(abēgumān, būd)
xcomp(abēgumān, dahēnd
mark(dahēnd, kū)
~~~

- "The reply (is) this that progress (lies) in wisdom."
~~~ sdparse
pāsox ēd kū frāzīh pad xrad \n answer this that advance in wisdom
nsubj:outer(xrad, pāsox)
dislocated:res(xrad, ēd)
mark(xrad, kū)
nsubj(xrad, frāzīh)
case(xrad, pad)
~~~

- "Ohrmazd also knew this in (his) omniscience that during these nine thousand years all wishes of Ohrmazd would fulfil themselves for three thousand years."
~~~ sdparse
ohrmazd ēn =iz pad harwispāgāhīh dānist kū andar ēn nōhazār sehazār sāl hamāg kāmag ī ohrmazd rawēd \n Ohrmazd this also in omniscience knew that in this nine_thousand three_thousand year all wish EZ Ohrmazd moves
nsubj(dānist, ohrmazd)
dislocated:res(dānist, ēn)
advmod(ēn, =iz)
case(harwispāgāhīh, pad)
obl(dānist, harwispāgāhīh)
ccomp(dānist, rawēd)
mark(rawēd, kū)
~~~

- "also that thinking of thoughts – also that we worship"
~~~ sdparse
ān =iz menišn menīdārīh ud ān =iz yazam \n that also thought act_of_thinking and that also worship.1PL
det(menīdārīh, ān-)
advmod(menīdārīh, =iz-2)
nmod(menīdārīh, menišn)
obj(yazam, menīdārīh)
cc:nc(yazam, ud)
dislocated:res(yazam, ān-6)
advmod(ān-6, =iz-7)
~~~

- "What has been given to worthy peopl, that comes back to one's house in plenty."
~~~ sdparse
čē bē ō , arzānīgān dād ōy pad abzōn abāz ō ān mān rasēd , pānagīh ī ganǰ ī wehān ī kunēd
nsubj(dād, čē)
csubj(rasēd, dād)
dislocated:res(rasēd, ōy)
~~~

Certain texts show highger frequency of doubled subjects in ergative constructions. This may have started as an imitation of Avestan word order on the one hand and fulfilling Middle Persian word-order preferences on the other. However, this construction is a bridging context for enclitic pronouns developing to verbal agreement markers as it is prevalent in a good number of New Iranic languages (Jügel/Samvelian 2016: Les pronoms enclitiques dans les langues ouest-iraniennes, Bulletin de la Société de Linguistique de Paris 111, pp. 391-432).

- "And he, Zardušt, said: Reverence to Hōm!" (ergative construction!)
~~~ sdparse
u =š guft zardušt kū namāz hōm \ and him said Zardušt that reverence Hōm
cc(guft, u)
dislocated(guft, =š)
nsubj(guft, zardušt)
mark(namāz, kū)
obl(namāz, hōm)
ccomp(guft, namāz)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:06 CEST -->
