---
layout: base
title:  'Statistics of goeswith in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `goeswith`

This relation is universal.

4 nodes (0%) are attached to their parents as `goeswith`.

4 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 75% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	imir	imir	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
3	do	do	ADP	Simp	_	4	case	_	_
4	Londain	Londain	PROPN	Noun	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	_
5	i	i	ADP	Simp	_	6	case	_	_
6	gCraobh-	craobh	NOUN	Noun	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Plur|Typo=Yes	2	obl	_	NamedEntity=Yes
7	Chluichí	_	X	_	_	6	goeswith	_	NamedEntity=Yes
8	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	NamedEntity=Yes
9	hÉireann	Éire	PROPN	Noun	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	6	nmod	_	NamedEntity=Yes
10	1900	1900	NUM	Num	_	6	flat	_	NamedEntity=Yes|SpaceAfter=No
11	,	,	PUNCT	Punct	_	12	punct	_	_
12	1901	1901	NUM	Num	_	10	conj	_	SpaceAfter=No
13	,	,	PUNCT	Punct	_	14	punct	_	_
14	1903	1903	NUM	Num	_	10	conj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Bhfuil	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	cop-on	cop-on	NOUN	Noun	Case=Nom|Foreign=Yes|Number=Sing	1	nsubj	_	_
3	ar	ar	ADP	Simp	_	2	nmod	_	_
4	bith	bith	NOUN	Subst	Case=Nom|Gender=Masc|Number=Sing	3	fixed	_	_
5	a'	ag	ADP	Simp	Typo=Yes	1	obl:prep	_	_
6	t	_	X	Item	_	5	goeswith	_	SpaceAfter=No
7	?	?	PUNCT	?	_	1	punct	_	_

~~~


