---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_cadhan-dep-csubj-cop.html">csubj:cop</a></tt>.

22 nodes (0%) are attached to their parents as `csubj:cleft`.

21 instances of `csubj:cleft` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.95454545454545.

The following 6 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (8; 36% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 9% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 csubj:cleft	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	_
2	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	gála	gála	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	aniar	aniar	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	3	amod	_	_
5	agus	agus	CCONJ	_	_	6	cc	_	_
6	andeas	aneas	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	4	conj	_	_
7	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	2	xcomp:pred	_	_
8	ba	is	AUX	_	Tense=Past|VerbForm=Cop	9	cop	_	_
9	dhóigh	dóigh	NOUN	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	3	acl:relcl	_	_
10	leat	le	ADP	_	Number=Sing|Person=2	9	obl:prep	_	_
11	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	12	nsubj	_	_
12	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	9	csubj:cleft	_	_
13	maith	maith	ADJ	_	Degree=Pos	12	xcomp:pred	_	_
14	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	15	nmod:poss	_	_
15	dhóthain	dóthain	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	13	obl	_	_
16	do	de	ADP	_	_	17	case	_	_
17	loing	long	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 csubj:cleft	color:blue
1	Is	is	AUX	_	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	dóigh	dóigh	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
3	liom	le	ADP	_	Number=Sing|Person=1	2	obl:prep	_	_
4	ná	nach	PART	_	PartType=Cmpl|Polarity=Neg	5	mark:prt	_	_
5	raibh	bí	VERB	_	Mood=Ind|Polarity=Neg|Tense=Past	2	csubj:cop	_	_
6	lá	lá	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
7	ar	ar	ADP	_	PrepForm=Cmpd	10	case	_	_
8	feadh	feadh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|PrepForm=Cmpd	7	fixed	_	_
9	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	haimsire	aimsir	NOUN	_	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	5	xcomp:pred	_	_
11	sin	sin	DET	_	PronType=Dem	10	det	_	_
12	ná	ná	CCONJ	_	_	14	cc	_	_
13	gur	is	AUX	_	Tense=Pres|VerbForm=Cop	14	cop	_	_
14	mhó	mór	ADJ	_	Degree=Cmp,Sup|Form=Len	5	conj	_	_
15	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	16	mark:prt	_	_
16	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	14	csubj:cleft	_	_
17	Pléasc	Pléasc	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
18	ag	ag	ADP	_	_	19	case	_	_
19	cur	cur	NOUN	_	VerbForm=Vnoun	16	xcomp	_	_
20	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	Tighearna	tiarna	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	obj	_	_
22	chun	chun	ADP	_	_	23	case	_	_
23	deiridh	deireadh	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	19	obl	_	_
24	ná	ná	CCONJ	_	_	26	cc	_	_
25	'á	do	ADP	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	26	case	_	_
26	chur	cur	NOUN	_	Definite=Def|Form=Len|VerbForm=Inf	19	conj	_	_
27	chun	chun	ADP	_	_	28	case	_	_
28	cinn	ceann	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	26	obl	_	SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 csubj:cleft	color:blue
1	Adeir	abair	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	arís	arís	ADV	_	_	1	advmod	_	_
3	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	4	cop	_	_
4	ionann	ionann	ADJ	_	Degree=Pos	1	ccomp	_	_
5	‘	‘	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	caomhán	caomhán	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
7	’	’	PUNCT	_	_	6	punct	_	_
8	agus	agus	CCONJ	_	_	9	cc	_	_
9	láidir	láidir	ADJ	_	Degree=Pos	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	agus	agus	CCONJ	_	_	13	cc	_	_
12	gurab	is	AUX	_	Tense=Past|VerbForm=Cop	13	cop	_	_
13	uaidh	ó	ADP	_	Gender=Masc|Number=Sing|Person=3	4	conj	_	_
14	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	15	mark:prt	_	_
15	deirtear	abair	VERB	_	Mood=Ind|Person=0|Tense=Pres	13	csubj:cleft	_	_
16	Caomhánaigh	Caomhánach	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	1	punct	_	_

~~~


