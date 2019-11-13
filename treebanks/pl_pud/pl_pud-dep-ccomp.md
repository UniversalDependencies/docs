---
layout: base
title:  'Statistics of ccomp in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `ccomp`

This relation is universal.
There are 2 language-specific subtypes of `ccomp`: <tt><a href="pl_pud-dep-ccomp-cleft.html">ccomp:cleft</a></tt>, <tt><a href="pl_pud-dep-ccomp-obj.html">ccomp:obj</a></tt>.

84 nodes (0%) are attached to their parents as `ccomp`.

84 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.61904761904762.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (41; 49% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (17; 20% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (10; 12% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PART.html">PART</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	To	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	3:nsubj	_
2	właśnie	właśnie	PART	part	_	3	advmod:emph	3:advmod:emph	_
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 ccomp	color:blue
1	Zapewnił	zapewnić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	_
3	że	że	SCONJ	comp	_	15	mark	15:mark	_
4	gdyby	gdyby	SCONJ	comp	_	11	mark	11:mark	_
5	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	6	nmod	6:nmod	_
6	rywalka	rywalka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj:pass	11:nsubj:pass	_
7	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Gen
8	partii	partia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	_
9	demokratycznej	demokratyczny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
10	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	aux:pass	11:aux:pass	_
11	wybrana	wybrać	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	15	advcl	15:advcl	SpaceAfter=No
12	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
13	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	15	aux:pass	15:aux:pass	_
14	by	by	AUX	part	_	15	aux:cnd	15:aux:cnd	_
15	paraliżowana	paraliżować	ADJ	ppas:sg:nom:f:imperf:aff	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	ccomp	1:ccomp	_
16	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	20	case	20:case	Case=Acc
17	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	18	punct	18:punct	SpaceAfter=No
18	nieustające	nieustający	ADJ	adj:pl:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	20	amod	20:amod	SpaceAfter=No
19	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	18	punct	18:punct	_
20	śledztwa	śledztwo	NOUN	subst:pl:acc:n:ncol	Case=Acc|Gender=Neut|Number=Plur	15	obl:agent	15:obl:agent	SpaceAfter=No
21	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


