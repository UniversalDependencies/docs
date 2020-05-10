---
layout: base
title:  'Statistics of dislocated:obl in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `dislocated:obl`

This relation is a language-specific subtype of .
There are also 9 other language-specific subtypes of `dislocated`: <tt><a href="la_llct-dep-dislocated-acl.html">dislocated:acl</a></tt>, <tt><a href="la_llct-dep-dislocated-advcl.html">dislocated:advcl</a></tt>, <tt><a href="la_llct-dep-dislocated-advmod.html">dislocated:advmod</a></tt>, <tt><a href="la_llct-dep-dislocated-ccomp.html">dislocated:ccomp</a></tt>, <tt><a href="la_llct-dep-dislocated-conj.html">dislocated:conj</a></tt>, <tt><a href="la_llct-dep-dislocated-csubj.html">dislocated:csubj</a></tt>, <tt><a href="la_llct-dep-dislocated-nmod.html">dislocated:nmod</a></tt>, <tt><a href="la_llct-dep-dislocated-nsubj.html">dislocated:nsubj</a></tt>, <tt><a href="la_llct-dep-dislocated-obj.html">dislocated:obj</a></tt>.

14 nodes (0%) are attached to their parents as `dislocated:obl`.

13 instances of `dislocated:obl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 19.9285714285714.

The following 6 pairs of parts of speech are connected with `dislocated:obl`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (7; 50% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 dislocated:obl	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	2	cc	_	_
2	recepi	recipio	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	a	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
4	te	tu	PRON	p|p|2|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	obl	_	_
5	Periteo	Peredeus	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	4	appos	_	_
6	episcopo	episcopus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	appos	_	_
7	pretio	pretium	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	2	obl:arg	_	_
8	pro	pro	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
9	ipsas	ipse	DET	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	10	det	_	_
10	res	res	NOUN	n|n|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur	2	obl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	auro	aurum	NOUN	n|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	13	nmod	_	_
13	solidos	solidus	NOUN	n|n|-|p|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Plur	2	dislocated:obl	_	_
14	viginti	uiginti	NUM	m|m|-|-|-|-|-|-|-|-	NumType=Card	13	nummod	_	_
15	tantum	tantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	2	advmod	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 52 dislocated:obl	color:blue
1	adque	atque	CCONJ	c|c|-|-|-|-|-|-|-|-	_	4	cc	_	_
2	et	et	ADV	d|d|-|-|-|-|-|-|-|-	_	4	advmod:emph	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	_
4	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	8	advmod:emph	_	_
6	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	fixed	_	_
7	una	unus	NUM	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	8	nummod	_	_
8	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
9	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	10	case	_	_
10	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	8	nmod	_	_
11	quod	qui	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	13	nsubj	_	_
12	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	prato	pratum	NOUN	n|n|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	10	acl:relcl	_	_
14	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	15	case	_	_
15	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	8	nmod	_	_
16	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	17	advmod	_	_
17	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	acl:relcl	_	_
18	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	19	case	_	_
19	Scrinio	Scrineum	PROPN	Propn|n|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	17	xcomp	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	_	_
22	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
23	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	21	obl:arg	_	SpaceAfter=No
24	,	,	PUNCT	Punc	_	25	punct	_	_
25	petia	petia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	dislocated:obj	_	_
26	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	_
27	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	28	case	_	_
28	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	25	nmod	_	_
29	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	30	case	_	_
30	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	25	nmod	_	SpaceAfter=No
31	,	,	PUNCT	Punc	_	35	punct	_	_
32	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	35	case	_	_
33	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	32	fixed	_	_
34	una	unus	NUM	a|a|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|NumType=Card	35	nummod	_	_
35	petia	petia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	4	obl	_	_
36	de	de	ADP	r|r|-|-|-|-|-|-|-|-	_	37	case	_	_
37	terra	terra	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	nmod	_	_
38	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	39	case	_	_
39	loco	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	35	nmod	_	_
40	ubi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	41	advmod	_	_
41	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	39	acl:relcl	_	_
42	Campo	campus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	41	xcomp	_	_
43	da	da	ADP	r|r|-|-|-|-|-|-|-|-	_	44	case	_	_
44	Flume	Flumen	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	42	nmod	_	SpaceAfter=No
45	,	,	PUNCT	Punc	_	46	punct	_	_
46	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|f|b|-	Aspect=Imp|Case=Abl|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	35	acl	_	_
47	suprascripte	suprascriptus	DET	a|a|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	48	det	_	_
48	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	46	obl:arg	_	_
49	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	50	amod	_	_
50	Marie	Maria	PROPN	Propn|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	48	nmod	_	SpaceAfter=No
51	,	,	PUNCT	Punc	_	52	punct	_	_
52	petia	petia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	35	dislocated:obl	_	_
53	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	52	det	_	_
54	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	55	case	_	_
55	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	52	nmod	_	SpaceAfter=No
56	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 dislocated:obl	color:blue
1	professio	professio	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	_	_
2	ab	ab	ADP	r|r|-|-|-|-|-|-|-|-	_	4	case	_	_
3	isso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	Andrea	Andreas	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	5	obl:arg	_	_
5	facta	facio	VERB	t|t|-|s|r|p|p|f|n|-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	advcl	_	_
6	omnino	omnino	ADV	d|d|-|-|-|-|-|-|-|-	_	15	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	6	punct	_	_
8	sicut	sicut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	10	mark	_	_
9	superius	superius	ADV	d|d|-|-|-|-|-|-|-|c	Degree=Cmp	10	advmod	_	_
10	declaratur	declaro	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	15	advcl	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	sic	sic	ADV	d|d|-|-|-|-|-|-|-|-	_	15	advmod	_	_
13	nobis	nos	PRON	p|p|1|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	15	obl:arg	_	_
14	iudicibus	iudex	NOUN	n|n|-|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur	13	appos	_	_
15	paruit	pareo	VERB	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	17	punct	_	_
17	nobis	nos	PRON	p|p|1|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	15	dislocated:obl	_	_
18	recte	recte	ADV	d|d|-|-|-|-|-|-|-|-	_	15	advmod	_	_
19	una	una	ADV	d|d|-|-|-|-|-|-|-|-	_	21	case	_	_
20	cum	cum	ADP	r|r|-|-|-|-|-|-|-|-	_	19	fixed	_	_
21	reliqui	reliquus	DET	a|a|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur|PronType=Ind	15	obl	_	_
22	nobiscum	nobiscum	NOUN	p|p|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	24	obl	_	_
23	ibi	ubi	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	24	advmod	_	_
24	adesentibus	adsum	VERB	t|t|-|p|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	21	acl:relcl	_	SpaceAfter=No
25	;	;	PUNCT	Punc	_	15	punct	_	_

~~~


