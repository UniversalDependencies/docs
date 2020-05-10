---
layout: base
title:  'Statistics of dislocated:obj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:obj`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_llct-dep-dislocated-conj.html">dislocated:conj</a></tt>, <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obl.html">dislocated:obl</a></tt>.

521 nodes (0%) are attached to their parents as `dislocated:obj`.

519 instances of `dislocated:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 16.190019193858.

The following 5 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (502; 96% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (11; 2% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dislocated:obj	color:blue
1	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	2	case	_	_
2	quibus	qui	PRON	p|p|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur|PronType=Rel	6	obl	_	_
3	ad	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	te	tu	PRON	p|p|2|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	obl	_	_
5	pretium	pretium	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
6	recepi	recipio	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	argento	argentum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	9	nmod	_	_
9	soledos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	6	dislocated:obj	_	_
10	dece	decem	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	9	nummod	_	_
11	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	12	mark	_	_
12	finito	finio	VERB	t|t|-|s|r|p|p|n|b|-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	advcl	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 25 dislocated:obj	color:blue
1	hec	hic	DET	p|p|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
2	omnia	omnis	DET	a|a|-|p|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	4	nmod	_	_
3	suprascripta	suprascriptus	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	res	res	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	8	mark	_	_
7	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	8	advmod	_	_
8	legitur	lego	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	4	punct	_	_
10	offero	offero	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	10	obl:arg	_	_
12	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	tibi	tu	PRON	p|p|2|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Person=2|PronType=Prs	11	conj	_	_
14	prefate	praefatus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	15	det	_	_
15	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	13	appos	_	_
16	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	17	amod	_	_
17	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
18	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	salute	salus	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	10	obl	_	_
20	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	21	cc	_	_
21	redemtione	redemptio	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	19	conj	_	_
22	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
23	meae	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	22	det	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	25	punct	_	_
25	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	10	dislocated:obj	_	_
26	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
27	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No
28	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 dislocated:obj	color:blue
1	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	5	advmod	_	_
2	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Eriteo	Eriteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	nsubj	_	_
4	advocatus	aduocatus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	_
5	detulit	defero	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ante	ante	ADP	r|r|-|-|-|-|-|-|-|-	_	7	case	_	_
7	nos	nos	PRON	p|p|1|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
8	testimonias	testimonium	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	5	obj	_	_
9	suas	suus	DET	a|a|3|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	13	punct	_	_
11	i	hic	DET	p|p|-|p|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	12	nsubj	_	_
12	sunt	sum	VERB	v|v|3|p|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl	_	_
13	Teupaldo	Teutpaldus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	5	dislocated:obj	_	SpaceAfter=No
14	,	,	PUNCT	Punc	_	15	punct	_	_
15	Ermiteo	Ermiteus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	13	conj	_	_
16	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	17	cc	_	_
17	Adalghisi	Adelchisus	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	13	conj	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


