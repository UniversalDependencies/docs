---
layout: base
title:  'Statistics of flat:name in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ga_cadhan-dep-flat-foreign.html">flat:foreign</a></tt>.

24 nodes (1%) are attached to their parents as `flat:name`.

24 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29166666666667.

The following 7 pairs of parts of speech are connected with `flat:name`: <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (11; 46% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (6; 25% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	Bhur	bhur	DET	_	Number=Plur|Person=2|Poss=Yes	2	nmod:poss	_	_
2	mbocht-chara	bochtchara	NOUN	_	Case=Nom|Form=Ecl|Gender=Masc|Number=Sing	0	root	_	_
3	bithdhíleas	bithdhílis	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
4	go	go	ADP	_	_	5	case	_	_
5	bás	bás	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	SpacesAfter=\n
7	SEATHRÚN	Seathrún	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	appos	_	_
8	CÉITINN	Céitinn	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:name	color:blue
1	Fuair	faigh	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	tusa	tusa	PRON	_	Number=Sing|Person=2|PronType=Emp	1	nsubj	_	_
3	's	agus	CCONJ	_	_	5	cc	_	_
4	as	is	AUX	_	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	cuirthe	curtha	ADJ	_	VerbForm=Part	1	parataxis	_	_
6	a	i	ADP	_	_	7	case	_	_
7	suim	suim	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	obl	_	_
8	a	a	PART	_	PartType=Voc	9	case:voc	_	_
9	mheic	mac	NOUN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	5	vocative	_	_
10	Cathbharr	Cafarr	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	_
11	Í	uí	PART	_	PartType=Pat	10	flat:name	_	_
12	Dhomhnuill	Domhnall	PROPN	_	Case=Gen|Definite=Def|Form=Len|Gender=Masc|Number=Sing	10	flat:name	_	_
13	ní	ní	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
14	ó	ó	ADP	_	_	15	case	_	_
15	Dhia	Dia	PROPN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	13	nmod	_	_
16	et	et	CCONJ	_	_	17	cc	_	_
17	re	ré	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	conj	_	_
18	fa	faoi	ADP	_	_	19	case	_	_
19	rath	rath	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	nmod	_	_
20	ni	ní	PART	_	PartType=Vb|Polarity=Neg	21	advmod	_	_
21	dlighe	dligh	VERB	_	Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Pres	1	parataxis	_	_
22	bheith	bheith	NOUN	_	Form=Len|VerbForm=Inf	21	xcomp	_	_
23	dhe	de	ADP	_	Form=Len|Gender=Masc|Number=Sing|Person=3	24	obl:prep	_	_
24	diomdhach	diomúch	ADJ	_	Degree=Pos	22	xcomp:pred	_	SpaceAfter=No
25	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 50 51 flat:name	color:blue
1	Adeir	abair	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	4	cop	_	_
3	ó	ó	ADP	_	_	4	case	_	_
4	Ursula	Ursula	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	nó	nó	CCONJ	_	_	7	cc	_	_
7	Fitz	Fitz	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	conj	_	_
8	Ursula	Ursula	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	flat:name	_	_
9	,	,	PUNCT	_	_	7	punct	_	_
10	sloinneadh	sloinne	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
11	áta	bí	VERB	_	Form=Direct|Mood=Ind|PronType=Rel|Tense=Pres	10	acl:relcl	_	_
12	i	i	ADP	_	_	13	case	_	_
13	Sacsaibh	Sasana	PROPN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	11	xcomp:pred	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	táinig	tar	VERB	_	Mood=Ind|Tense=Past	4	csubj:cleft	_	_
16	Mac	mac	PART	_	PartType=Pat	15	nsubj	_	_
17	Mathghamhna	mathúin	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	16	flat:name	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	agus	agus	CCONJ	_	_	21	cc	_	_
20	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	21	cop	_	_
21	ionann	ionann	ADJ	_	Degree=Pos	4	conj	_	_
22	‘	‘	PUNCT	_	_	23	punct	_	SpaceAfter=No
23	Ursula	Ursula	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	21	nsubj	_	SpaceAfter=No
24	’	’	PUNCT	_	_	23	punct	_	_
25	agus	agus	CCONJ	_	_	27	cc	_	_
26	‘	‘	PUNCT	_	_	27	punct	_	SpaceAfter=No
27	Beare	Beare	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	23	conj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	27	punct	_	SpaceAfter=No
29	’	’	PUNCT	_	_	27	punct	_	_
30	agus	agus	CCONJ	_	_	32	cc	_	_
31	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	32	cop	_	_
32	ionann	ionann	ADJ	_	Degree=Pos	21	conj	_	_
33	‘	‘	PUNCT	_	_	34	punct	_	SpaceAfter=No
34	Beare	Beare	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	32	nsubj	_	SpaceAfter=No
35	’	’	PUNCT	_	_	34	punct	_	_
36	agus	agus	CCONJ	_	_	37	cc	_	_
37	mucgamhain	mucgamhain	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	34	conj	_	_
38	nó	nó	CCONJ	_	_	39	cc	_	_
39	macgamhain	macgamhain	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	37	conj	_	SpaceAfter=No
40	,	,	PUNCT	_	_	43	punct	_	_
41	agus	agus	CCONJ	_	_	43	cc	_	_
42	d'á	de	ADP	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	43	case	_	_
43	réir	réir	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	47	obl	_	_
44	sin	sin	PRON	_	PronType=Dem	43	det	_	_
45	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	47	cop	_	_
46	ó'n	ó	ADP	_	Number=Sing|PronType=Art	47	case	_	_
47	tigh	teach	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	32	conj	_	_
48	thall	thall	ADV	_	_	47	advmod	_	_
49	táinig	tar	VERB	_	Mood=Ind|Tense=Past	47	acl:relcl	_	_
50	Mac	mac	PART	_	PartType=Pat	49	nsubj	_	_
51	Mathghamhna	mathúin	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	50	flat:name	_	_
52	Uladh	Ulaidh	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	50	nmod	_	SpaceAfter=No
53	.	.	PUNCT	_	_	1	punct	_	_

~~~


