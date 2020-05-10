---
layout: base
title:  'Statistics of dislocated:csubj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:csubj`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_llct-dep-dislocated-conj.html">dislocated:conj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="la_llct-dep-dislocated-obl.html">dislocated:obl</a></tt>.

1 nodes (0%) are attached to their parents as `dislocated:csubj`.

1 instances of `dislocated:csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 55.

The following 1 pairs of parts of speech are connected with `dislocated:csubj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 56 dislocated:csubj	color:blue
1	contenebatur	contineo	VERB	v|v|3|s|i|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Pass	0	root	_	_
2	qualiter	qualiter	SCONJ	d|d|-|-|-|-|-|-|-|-	_	12	mark	_	_
3	ipse	ipse	DET	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	Racchisi	Ratchis	PROPN	Propn|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
5	presbitero	presbyter	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	4	punct	_	_
7	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
8	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
9	sue	suus	DET	a|a|3|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	_
10	remedium	remedium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	12	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	offeruerat	offero	VERB	v|v|3|s|l|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	1	csubj:pass	_	_
13	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	12	obl:arg	_	_
14	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	ipsius	ipse	DET	p|p|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	16	det	_	_
16	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	13	conj	_	_
17	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	19	amod	_	_
18	[--]	missing^token	PUNCT	Punc	_	17	punct	_	_
19	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
20	portione	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
21	sua	suus	DET	a|a|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	20	det	_	_
22	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	23	case	_	_
23	res	res	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	20	nmod	_	_
24	illa	ille	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
25	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	26	nsubj	_	_
26	fuit	sum	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	acl:relcl	_	_
27	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	28	case	_	_
28	iura	ius	NOUN	n|n|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur	26	obl	_	_
29	parentorum	parens	NOUN	n|n|-|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur	28	nmod	_	_
30	suorum	suus	DET	a|a|3|p|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	29	det	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	32	punct	_	_
32	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	56	obl	_	_
33	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	36	cc	_	_
34	ex	ex	ADP	r|r|-|-|-|-|-|-|-|-	_	36	case	_	_
35	omnibus	omnis	DET	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur|PronType=Tot	36	det	_	_
36	terris	terra	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	32	conj	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	38	punct	_	_
38	vineis	uinea	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	36	conj	_	SpaceAfter=No
39	,	,	PUNCT	Punc	_	40	punct	_	_
40	silvis	silua	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	36	conj	_	SpaceAfter=No
41	,	,	PUNCT	Punc	_	42	punct	_	_
42	virgareis	uirgareum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	36	conj	_	SpaceAfter=No
43	,	,	PUNCT	Punc	_	44	punct	_	_
44	pratis	pratum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	36	conj	_	SpaceAfter=No
45	,	,	PUNCT	Punc	_	46	punct	_	_
46	pascuis	pascuum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	36	conj	_	SpaceAfter=No
47	,	,	PUNCT	Punc	_	48	punct	_	_
48	cultum	cultus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	36	conj	_	_
49	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	50	cc	_	_
50	incultum	incultus	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	36	conj	_	SpaceAfter=No
51	,	,	PUNCT	Punc	_	32	punct	_	_
52	suam	suus	DET	a|a|3|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	53	det	_	_
53	portionem	portio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	56	obj	_	_
54	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	55	case	_	_
55	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	56	obl	_	_
56	offeruerat	offero	VERB	v|v|3|s|l|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	1	dislocated:csubj	_	_
57	Deo	Deus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	56	obl:arg	_	_
58	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	59	cc	_	_
59	eidem	idem	DET	p|p|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	57	conj	_	_
60	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	59	nmod	_	_
61	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	62	amod	_	_
62	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	60	nmod	_	_
63	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	64	case	_	_
64	prefinito	praefinitus	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	56	obl	_	SpaceAfter=No
65	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


