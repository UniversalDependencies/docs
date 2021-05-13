---
layout: base
title:  'Statistics of csubj in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="la_llct-dep-csubj-pass.html">csubj:pass</a></tt>.

221 nodes (0%) are attached to their parents as `csubj`.

201 instances of `csubj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 17.7647058823529.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (125; 57% instances), <tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (81; 37% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="la_llct-pos-DET.html">DET</a></tt>-<tt><a href="la_llct-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_llct-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	3	cc	_	_
2	nulli	nullus	DET	a|a|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|PronType=Ind,Neg	3	obl:arg	_	_
3	liceat	licet	VERB	v|v|3|s|p|s|a|-|-|-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	nolle	nolo	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|VerbType=Mod|Voice=Act	3	csubj	_	_
5	quod	qui	PRON	p|p|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	_	_
6	semel	semel	ADV	d|d|-|-|-|-|-|-|-|-	NumType=Mult	7	obl	_	_
7	voluit	uolo	VERB	v|v|1|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 csubj	color:blue
1	Christi	Christus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	retributionem	retributio	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
3	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	_
4	expectandum	exspecto	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	5	ccomp	_	_
5	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	10	punct	_	_
7	senper	semper	ADV	d|d|-|-|-|-|-|-|-|-	_	8	advmod	_	_
8	dispensare	dispenso	VERB	v|v|-|-|p|n|a|-|-|-	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	10	csubj	_	_
9	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	obl:arg	_	_
10	oportunum	opportunus	ADJ	a|a|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing	5	conj	_	_
11	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
12	illa	ille	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	8	obj	_	_
13	ut	ut	SCONJ	c|c|-|-|-|-|-|-|-|-	_	17	mark	_	_
14	anime	anima	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
15	me	meus	DET	a|a|1|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	14	det	_	_
16	medillam	medela	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	17	obj	_	_
17	adquirenda	acquiro	VERB	t|t|-|s|p|g|p|f|a|-	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Gdv|Voice=Pass	8	advcl	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 46 csubj	color:blue
1	manifesta	manifestus	ADJ	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	_
2	causa	causa	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	2	obl:arg	_	_
5	Cristiano	Christianus	PROPN	Propn|n|-|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	filius	filius	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
8	Vitali	Vitalis	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	10	punct	_	_
10	quia	quia	SCONJ	c|c|-|-|-|-|-|-|-|-	_	46	mark	_	_
11	quamquam	quamquam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	19	mark	_	_
12	nulla	nullus	DET	a|a|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind,Neg	13	det	_	_
13	hereditas	hereditas	NOUN	n|n|-|s|-|-|-|f|n|-	Case=Nom|Gender=Fem|Number=Sing	19	obj	_	_
14	ipsius	ipse	DET	p|p|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	15	det	_	_
15	Vitali	Vitalis	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	genitori	genitor	NOUN	n|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
17	meo	meus	DET	a|a|1|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	16	det	_	_
18	non	non	PART	d|d|-|-|-|-|-|-|-|-	Polarity=Neg	19	advmod	_	_
19	abeo	habeo	VERB	v|v|1|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	46	advcl	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	19	punct	_	_
21	tamen	tamen	ADV	d|d|-|-|-|-|-|-|-|-	_	46	advmod	_	_
22	ipso	ipse	DET	p|p|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	23	det	_	_
23	Vitali	Vitalis	PROPN	Propn|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	24	nsubj	_	_
24	consentiente	consentio	VERB	t|t|-|s|p|p|a|m|b|-	Aspect=Imp|Case=Abl|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	46	advcl	_	_
25	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	24	obl:arg	_	_
26	tu	tu	PRON	p|p|2|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	46	nsubj	_	_
27	domno	domnus	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	26	appos	_	_
28	Ambrosio	Ambrosius	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	27	flat	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	36	punct	_	_
30	gratia	gratia	NOUN	n|n|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing	36	nmod	_	_
31	Dei	Deus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	30	nmod	_	_
32	humilis	humilis	ADJ	a|a|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	36	amod	_	_
33	sancte	sanctus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	35	amod	_	_
34	Lucane	lucanus	ADJ	a|a|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	35	amod	_	_
35	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|g|-	Case=Gen|Gender=Fem|Number=Sing	36	nmod	_	_
36	episcopus	episcopus	NOUN	n|n|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing	27	appos	_	SpaceAfter=No
37	,	,	PUNCT	Punc	_	26	punct	_	_
38	per	per	ADP	r|r|-|-|-|-|-|-|-|-	_	39	case	_	_
39	cartula	chartula	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	obl	_	_
40	livellario	libellarius	ADJ	a|a|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	41	amod	_	_
41	nomine	nomen	NOUN	n|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	46	obl	_	_
42	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	45	mark	_	_
43	censum	census	NOUN	n|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	45	obj	_	_
44	vobis	uos	PRON	p|p|2|p|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Plur|Person=2|PronType=Prs	45	obl:arg	_	_
45	persolvendum	persoluo	VERB	t|t|-|s|p|d|p|n|a|-	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Ger|Voice=Pass	46	advcl	_	_
46	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	_	_
47	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	46	obl:arg	_	SpaceAfter=No
48	,	,	PUNCT	Punc	_	51	punct	_	_
49	id	is	PRON	p|p|-|s|-|-|-|n|n|-	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem,Prs	51	advmod:emph	_	_
50	est	sum	VERB	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	49	fixed	_	_
51	casa	casa	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	46	obj	_	_
52	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	53	cc	_	_
53	res	res	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	51	conj	_	_
54	illa	ille	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	51	det	_	_
55	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	56	case	_	_
56	locho	locus	NOUN	n|n|-|s|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Sing	51	nmod	_	_
57	Milliano	Milianum	PROPN	Propn|n|-|s|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Sing	56	flat	_	SpaceAfter=No
58	,	,	PUNCT	Punc	_	59	punct	_	_
59	pertinens	pertineo	VERB	t|t|-|s|p|p|a|f|n|-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	51	acl	_	_
60	ecclesie	ecclesia	NOUN	n|n|-|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing	59	obl:arg	_	_
61	vestre	uester	DET	a|a|2|s|-|-|-|f|d|-	Case=Dat|Gender=Fem|Number=Sing|Number[psor]=Plur|Person[psor]=2|Poss=Yes|PronType=Prs	60	det	_	_
62	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	63	amod	_	_
63	Petri	Petrus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	60	nmod	_	SpaceAfter=No
64	,	,	PUNCT	Punc	_	66	punct	_	_
65	qui	qui	PRON	p|p|-|s|-|-|-|m|n|-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	66	nsubj:pass	_	_
66	dicitur	dico	VERB	v|v|3|s|p|i|p|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	60	acl:relcl	_	_
67	Sumualdi	Sumualdus	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	66	xcomp	_	SpaceAfter=No
68	,	,	PUNCT	Punc	_	74	punct	_	_
69	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	70	case	_	_
70	qua	qui	PRON	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Rel	74	obl	_	_
71	quondam	quondam	ADJ	a|a|-|-|-|-|-|-|-|-	_	72	amod	_	_
72	Ghititiulo	Ghititiolus	PROPN	Propn|n|-|s|-|-|-|m|a|-	Case=Acc|Gender=Masc|Number=Sing	74	nsubj	_	_
73	fuit	sum	AUX	v|v|3|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	74	cop	_	_
74	avitantes	habito	VERB	t|t|-|s|p|p|a|m|a|-	Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	60	acl:relcl	_	SpaceAfter=No
75	;	;	PUNCT	Punc	_	2	punct	_	_

~~~


