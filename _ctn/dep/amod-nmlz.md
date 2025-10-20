---
layout: relation
title: 'amod:nmlz'
shortdef: 'adjectival nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*.  
These enclitics derive a nominal base from another form, which can be almost arbitrary.  
They are annotated as a type of "empty" nominal, functionally similar to English *one*.  
The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope:  
[acl:nmlz](), [advmod:nmlz](), `amod:nmlz`, [det:nmlz](), or [nmod:nmlz]().  
In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is an adjective, the dependency used is `amod:nmlz`.

~~~ conllu
# sent_id = grammar_Morphology_161b									
# text = Mikhabe heptade.									
# english = It got caught on a small one.									
1-2	Mikhabe	_	_	_	_	_	_	_	_
1	Mi	mi	ADJ	_	_	2	amod:nmlz	_	Gloss=small|MSeg=mi
2	khabe	kha	NOUN	NMLZ2-LOC2	Case=Loc|Number=Sing	3	obj	_	Gloss=NMLZ2-LOC2|MSeg=kha-beʔ
3	heptade	hept	VERB	COMPL3.ITR	Aspect=ComplPerfv|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=get_caught-PST-COMPL3.ITR-IND.PST[.3SG.S]|MSeg=hept-a-hat-e|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n
~~~