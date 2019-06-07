---
layout: base
title:  'Statistics of ccomp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="pl_pud-dep-ccomp-obj.html">ccomp:obj</a></tt>.

86 nodes (0%) are attached to their parents as `ccomp`.

86 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2093023255814.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (42; 49% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (17; 20% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (7; 8% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	właśnie	właśnie	PART	part	_	3	advmod	3:advmod	_
3	sprawia	sprawiać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
5	że	że	SCONJ	comp	_	7	mark	7:mark	_
6	wciąż	wciąż	ADV	adv	_	7	advmod	7:advmod	_
7	wracamy	wracać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	_
8	po	po	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
9	więcej	więcej	DET	num:pl:acc:n:rec	Case=Acc|Gender=Neut|Number=Plur|NumType=Card|PronType=Ind	7	obl:arg	7:obl:arg	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 ccomp	color:blue
1	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	5	punct	5:punct	SpaceAfter=No
2	Tak	tak	ADV	adv:pos	Degree=Pos|PronType=Dem	5	advmod	5:advmod	_
3	czy	czy	CCONJ	conj	_	4	cc	4:cc	_
4	inaczej	inaczej	ADV	adv	_	2	conj	2:conj|5:advmod	_
5	idę	iść	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	więzienia	więzienie	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	5	obl	5:obl	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
9	mam	mieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	0:root|5:conj	_
10	nadzieję	nadzieja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	9	iobj	9:iobj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	14	punct	14:punct	_
12	że	że	SCONJ	comp	_	14	mark	14:mark	_
13	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	14	aux	14:aux	_
14	warto	warto	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	10	ccomp	10:ccomp	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	SpaceAfter=No
16	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	To	to	PART	part	_	2	advmod	2:advmod	_
2	dlatego	dlatego	ADV	adv	PronType=Dem	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
4	że	że	SCONJ	comp	_	11	mark	11:mark	_
5	każdy	każdy	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	6	det	6:det	_
6	cud	cud	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
7	i	i	CCONJ	conj	_	10	cc	10:cc	_
8	każdy	każdy	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	det	10:det	_
9	wyspecjalizowany	wyspecjalizować	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	10	acl	10:acl	_
10	obszar	obszar	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	conj	6:conj|11:nsubj	_
11	zajmuje	zajmować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
12	całe	cały	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	13:amod	_
13	pole	pole	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	11	obj	11:obj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


