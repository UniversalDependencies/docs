---
layout: relation
title: 'det:nmlz'
shortdef: 'determiner nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*.  
These enclitics derive a nominal base from another form, which can be almost arbitrary.  
They are annotated as a type of "empty" nominal, functionally similar to English *one*.  
The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope:  
[acl:nmlz](), [advmod:nmlz](), [amod:nmlz](), `det:nmlz`, or [nmod:nmlz]().  
In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is a determiner, the dependency used is `det:nmlz`.

~~~ conllu
1-2	Huŋkhaceŋa	_	_	_	_	_	_	_	_
1	Huŋ	hun	DET	_	Deixis=Med|PronType=Dem	2	det:nmlz	_	Gloss=MED|MSeg=hun
2	khaceŋa	kha	NOUN	NMLZ2	Case=Erg|Number=Plur	4	nsubj	_	Gloss=NMLZ2-NSG-ERG|MSeg=kha-ce-ŋa
3	Budhahaŋ	Budhahaŋ	PROPN	_	Case=Abs|Number=Sing	4	obj	_	Gloss=a_deity|MSeg=buɖhahaŋ
4	unumdokonɨŋ	numd	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Number[p]=Sing|Person=3|Person[p]=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=3[PL].A-do-3[SG].P-IND.NPST-NEG|MSeg=u-numd-u-kV-nɨŋ|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n
~~~