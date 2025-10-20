---
layout: relation
title: 'acl:nmlz'
shortdef: 'clausal nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*.  
These enclitics derive a nominal base from another form, which can be almost arbitrary.  
They are annotated as a type of "empty" nominal, functionally similar to English *one*.  
The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope:  
`acl:nmlz`, [advmod:nmlz](), [amod:nmlz](), [det:nmlz](), or [nmod:nmlz]().  
In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is a clause, the dependency used is `acl:nmlz`.

~~~ conllu
# sent_id = grammar_Morphology_161a									
# text = Sunogosaŋa na kanimɨksɨlɨkta siptandoko.									
# english = The sour one makes us wink.									
1-2	Sunogosaŋa	_	_	_	_	_	_	_	_
1	Suno	su	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:nmlz	_	Gloss=be_sour-IND.NPST|MSeg=su-nok
2	gosaŋa	go	NOUN	NMLZ1-OBL	Case=Erg|Number=Sing	6	nsubj	_	Gloss=NMLZ1-OBL-ERG|MSeg=go-sa-ŋa
3	na	na	PART	TOP	InfStruct=Top	2	advmod:emph	_	Gloss=TOP|MSeg=na
4-5	kanimɨksɨlɨkta	_	_	_	_	_	_	_	_
4	kanimɨksɨlɨk	mɨksɨlɨk	NOUN	_	Case=Abs|Clusivity[psor]=In|Number=Sing|Number[psor]=Plur|Person=1	6	obj	_	Gloss=1PL.INCL.POSS-eye|MSeg=kani-mɨksɨlɨk
5	ta	ta	PART	FOC	InfStruct=Foc	4	advmod:emph	_	Gloss=FOC|MSeg=ta
6	siptandoko	sipt	VERB	COMPL1	Aspect=ComplImp|Mood=Ind|Number=Sing|Number[p]=Sing|Person=3|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=close-3.P-COMPL1-3[SG].P-IND.NPST[.3SG.A]|MSeg=sipt-u-dhend-u-kV|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	SpacesAfter=\n
~~~