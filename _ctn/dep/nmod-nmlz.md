---
layout: relation
title: 'nmod:nmlz'
shortdef: 'nominal nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*.  
These enclitics derive a nominal base from another form, which can be almost arbitrary.  
They are annotated as a type of "empty" nominal, functionally similar to English *one*.  
The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope:  
[acl:nmlz](), [advmod:nmlz](), [amod:nmlz](), [det:nmlz](), or `nmod:nmlz`.  
In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is a nominal, the dependency used is `nmod:nmlz`.

~~~ conllu
# sent_id = grammar_Morphology_162a									
# text = Teĩbekoceŋayaŋ naphadihẽ?									
# english = Did the villagers also help you?									
1-3	Teĩbekoceŋayaŋ	_	_	_	_	_	_	_	_
1	Teĩbe	teĩ	NOUN	LOC2	Case=Loc|Number=Sing	2	nmod:nmlz	_	Gloss=village-LOC2|MSeg=teĩ-beʔ
2	koceŋa	go	NOUN	NMLZ1	Case=Erg|Number=Plur	4	nsubj	_	Gloss=NMLZ1-NSG-ERG|MSeg=go-ce-ŋa
3	yaŋ	yaŋ	PART	ADD	InfStruct=Foc	2	advmod:emph	_	Gloss=ADD|MSeg=yaŋ
4	naphadihẽ	phad	VERB	_	Aspect=Perfv|Mood=Ind|Number[p]=Plur|Person=3|Person[p]=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=3>2-help-2PL-IND.PST|MSeg=na-phad-ĩ-e|SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	SpacesAfter=\n
~~~