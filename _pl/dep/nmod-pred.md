---
layout: relation
title: 'nmod:pred'
shortdef: 'predicative expression'
udver: '2'
---

The `nmod:pred` relation is used in the Polish [PDB](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for predicative expressions depending on the gerund form of the copula _być_ ("to be").

~~~ conllu
# visual-style 6 7 nmod:pred color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	4	punct	4:punct	_
2	Jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	bardzo	bardzo	ADV	adv:pos	Degree=Pos	4	advmod	4:advmod	_
4	dumna	dumny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	bycia	być	NOUN	ger:sg:gen:n:imperf:aff	Aspect=Imp|Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	4	obl:arg	4:obl:arg	_
7	ciechanowianką	ciechanowianka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	nmod:pred	6:nmod:pred	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_
~~~

~~~ conllu
1	I	_	_	_	_	_	_	_	_
2	am	_	_	_	_	_	_	_	_
3	very	_	_	_	_	_	_	_	_
4	proud	_	_	_	_	_	_	_	_
5	of	_	_	_	_	_	_	_	_
6	being	_	_	_	_	_	_	_	_
7	Ciechowianka [a female resident of Ciechów]	_	_	_	_	_	_	_	_
8	.	_	_	_	_	_	_	_	_
~~~