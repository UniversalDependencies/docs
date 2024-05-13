---
layout: base
title:  'Statistics of mark in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Relations: `mark`

This relation is universal.

45 nodes (8%) are attached to their parents as `mark`.

44 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02222222222222.

The following 5 pairs of parts of speech are connected with `mark`: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-PART.html">PART</a></tt> (29; 64% instances), <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-SCONJ.html">SCONJ</a></tt> (13; 29% instances), <tt><a href="ro_art-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_art-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="ro_art-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_art-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="ro_art-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_art-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Să	să	PART	Qs	Mood=Sub	3	mark	_	_
2	se-	si	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	3	expl:pv	_	SpaceAfter=No
3	alină	alin	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	analtu	analtu	ADV	Rgp	Degree=Pos	3	advmod	_	SpaceAfter=No
5	-n	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	casă	casă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	11	punct	_	_
8	i	i	CCONJ	Ccssp	Polarity=Pos	11	cc	_	_
9	s-	să	PART	Qs	Mood=Sub	11	mark	_	SpaceAfter=No
10	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
11	intră	intr	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
12	dip	dip	ADV	Rgp	Degree=Pos	11	advmod	_	SpaceAfter=No
13	?	?	PUNCT	QUEST	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 mark	color:blue
1	Ţe	ţe	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	2	obj	_	_
2	vrei	voi	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	7	punct	_	_
4	di	di	SCONJ	Csssp	Polarity=Pos	7	mark	_	_
5	ma	mini	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	7	obj	_	_
6	tut	tut	ADV	Rp	_	7	advmod	_	_
7	asuń	asuń	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl	_	SpaceAfter=No
8	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	Cari	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	nsubj	_	_
2	di	di	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	doľi	doi	NUM	Mcmprly	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	1	nummod	_	_
4	era	hiu	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	ccomp	_	_
5	ca	ca	SCONJ	Csssp	Polarity=Pos	9	mark	_	_
6	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	9	mark	_	SpaceAfter=No
7	hibă	hiu	AUX	Vasp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	cama	cama	ADV	Rgp	Degree=Pos	9	advmod	_	_
9	sănătos	sănătos	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
10	,	,	PUNCT	COMMA	_	4	punct	_	_
11	va	voi	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	SpaceAfter=No
12	-ĺi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	13	expl	_	_
13	arăţea	arăţescu	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
14	inima	inimă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
15	şi	şi	CCONJ	Crssp	Polarity=Pos	19	cc	_	_
16	era	hiu	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	aux	_	_
17	ca	ca	SCONJ	Csssp	Polarity=Pos	19	mark	_	_
18	s-	să	PART	Qs-y	Mood=Sub|Variant=Short	19	mark	_	SpaceAfter=No
19	moară	mor	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	SpaceAfter=No
20	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


