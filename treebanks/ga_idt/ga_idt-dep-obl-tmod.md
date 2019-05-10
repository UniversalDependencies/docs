---
layout: base
title:  'Statistics of obl:tmod in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_idt-dep-obl-prep.html">obl:prep</a></tt>.

74 nodes (0%) are attached to their parents as `obl:tmod`.

58 instances of `obl:tmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.86486486486486.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (44; 59% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (14; 19% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (9; 12% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 obl:tmod	color:blue
1	Cé	cé	PRON	Q	PronType=Int	2	nsubj	_	_
2	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	0	root	_	_
3	ag	ag	ADP	Simp	_	4	case	_	_
4	comóradh	comóradh	NOUN	Noun	VerbForm=Vnoun	2	xcomp	_	_
5	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	6	nmod:poss	_	_
6	lá	lá	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	obj	_	_
7	breithe	breith	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	6	compound	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	tseachtain	seachtain	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	2	obl:tmod	_	_
10	seo	seo	DET	Det	PronType=Dem	9	det	_	SpaceAfter=No
11	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 obl:tmod	color:blue
1	Agus	agus	CCONJ	Coord	_	2	advmod	_	_
2	ranganna	rang	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
3	seiteanna	seit	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	2	compound	_	_
4	agus	agus	CCONJ	Coord	_	5	cc	_	_
5	céilí	céile	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	2	conj	_	_
6	do	do	ADP	Simp	_	7	case	_	_
7	dhaoine	duine	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Plur	2	nmod	_	_
8	fásta	fásta	ADJ	Adj	VerbForm=Part	7	amod	_	_
9	gach	gach	DET	Det	Definite=Def	10	det	_	_
10	oíche	oíche	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	2	obl:tmod	_	_
11	Dé	Dé	NOUN	Subst	Number=Sing	12	compound	_	_
12	Luain	luain	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	10	compound	_	_
13	ag	ag	ADP	Simp	_	14	case	_	_
14	8.30	8.30	NUM	Num	_	2	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	lá	lá	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	Vb	PartType=Vb|PronType=Rel	4	obl:tmod	_	_
4	cuireadh	cuir	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	2	acl:relcl	_	_
5	Butt	Butt	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	...	...	PUNCT	...	_	2	punct	_	_

~~~


