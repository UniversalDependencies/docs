---
layout: relation
title: 'advmod:nmlz'
shortdef: 'adverbial nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*.  
These enclitics derive a nominal base from another form, which can be almost arbitrary.  
They are annotated as a type of "empty" nominal, functionally similar to English *one*.  
The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope:  
[acl:nmlz](), `advmod:nmlz`, [amod:nmlz](), [det:nmlz](), or [nmod:nmlz]().  
In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is an adverb, the dependency used is `advmod:nmlz`.

~~~ conllu
# sent_id = grammar_Morphology_160a									
# text = To bhittragocele uthatno.									
# english = Only the ones inside up there are visible.									
1	To	to	DET	DEM.UP	Deixis=Remt|PronType=Dem	3	det	_	Gloss=DEM.UP|MSeg=to
2-4	bhittragocele	_	_	_	_	_	_	_	_
2	bhittra	bhitra	ADV	_	_	3	advmod:nmlz	_	Gloss=inside|MSeg=bhit̪rʌ
3	goce	go	NOUN	NMLZ1	Case=Abs|Number=Plur	5	nsubj	_	Gloss=NMLZ1-NSG|MSeg=go-ce
4	le	le	PART	RESTR	InfStruct=Foc	3	advmod:emph	_	Gloss=RESTR|MSeg=le
5	uthatno	that	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=3[PL].S-appear-IND.NPST|MSeg=u-that-nok|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=\n
~~~