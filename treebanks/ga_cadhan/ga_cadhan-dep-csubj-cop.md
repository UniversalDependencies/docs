---
layout: base
title:  'Statistics of csubj:cop in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_cadhan-dep-csubj-cleft.html">csubj:cleft</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:cop`.

8 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.375.

The following 4 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	Is	is	AUX	_	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	maith	maith	ADJ	_	Degree=Pos	0	root	_	_
3	is	is	AUX	_	Tense=Pres|VerbForm=Cop	4	cop	_	_
4	cuimhin	cuimhin	NOUN	_	Case=Nom|Number=Sing	2	csubj:cop	_	_
5	liom	le	ADP	_	Number=Sing|Person=1	4	obl:prep	_	_
6	nuair	nuair	SCONJ	_	_	8	mark	_	_
7	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	thosnuigheas	tosaigh	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	4	ccomp	_	_
9	ar	ar	ADP	_	_	11	case	_	_
10	í	í	PRON	_	Gender=Fem|Number=Sing|Person=3	11	obj	_	_
11	fhoghluim	foghlaim	NOUN	_	Form=Len|VerbForm=Inf	8	xcomp	_	_
12	ar	ar	ADP	_	_	13	case	_	_
13	dtúis	tús	NOUN	_	Case=Dat|Form=Ecl|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj:cop	color:blue
1	Uáidh	ó	ADP	_	Gender=Masc|Number=Sing|Person=3	5	obl	_	_
2	sin	sin	PRON	_	PronType=Dem	1	det	_	_
3	suás	suas	ADV	_	_	1	advmod	_	_
4	dobadh	is	AUX	_	PronType=Rel|Tense=Past|VerbForm=Cop	5	cop	_	_
5	mián	mian	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	lé	le	ADP	_	_	7	case	_	_
7	Pilát	Píoláit	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	obl:prep	_	_
8	a	a	PART	_	PartType=Inf	9	mark	_	_
9	leigean	ligean	NOUN	_	VerbForm=Inf	5	csubj:cop	_	_
10	fá	faoi	ADP	_	_	11	case	_	_
11	sgáoil	scaoileadh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
12	:	:	PUNCT	_	_	15	punct	_	_
13	achd	ach	CCONJ	_	_	15	cc	_	_
14	do	do	PART	_	PartType=Vb	15	mark:prt	_	_
15	thógbhadar	tóg	VERB	_	Form=Len|Mood=Ind|Number=Plur|Person=3|Tense=Past	11	advcl	_	_
16	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	Híudaidhe	Giúdach	NOUN	_	Case=Nom|Form=HPref|Gender=Masc|Number=Plur	15	nsubj	_	_
18	na	na	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	gáirthe	gáir	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	15	obj	_	SpaceAfter=No
20	,	,	PUNCT	_	_	22	punct	_	_
21	agá	ag	ADP	_	_	22	case	_	_
22	rádh	rá	NOUN	_	VerbForm=Vnoun	15	xcomp	_	SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	_
24	má	má	SCONJ	_	_	25	mark	_	_
25	leigeann	lig	VERB	_	Mood=Ind|Tense=Pres	33	advcl	_	_
26	tú	tú	PRON	_	Number=Sing|Person=2	25	nsubj	_	_
27	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	28	det	_	_
28	fear	fear	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	25	obj	_	_
29	so	seo	DET	_	PronType=Dem	28	det	_	_
30	as	as	ADP	_	Gender=Masc|Number=Sing|Person=3	25	obl:prep	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	ní	is	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Cop	33	cop	_	_
33	cara	cara	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	22	ccomp	_	_
34	do	do	ADP	_	_	35	case	_	_
35	Chesar	Céasar	PROPN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	33	nmod	_	_
36	thú	tú	PRON	_	Form=Len|Number=Sing|Person=2	33	nsubj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:cop	color:blue
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


