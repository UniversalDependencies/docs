---
layout: base
title:  'Statistics of compound:prt in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="ga-dep-compound.html">compound</a></tt>.

12 nodes (0%) are attached to their parents as `compound:prt`.

12 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (4; 33% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (3; 25% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADV.html">ADV</a></tt> (2; 17% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (2; 17% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Bean	Bean	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	4	compound	_	_
2	Uasal	uasal	ADJ	Adj	Case=NomAcc|Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
3	:	:	PUNCT	Punct	_	4	punct	_	_
4	Cén	cé	DET	Det	Number=Sing|PronType=Int	5	nsubj	_	_
5	dul	dul	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
6	as	as	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	compound:prt	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	5	acl:relcl	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	8	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 compound:prt	color:blue
1	Labhair	labhair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	liom	le	ADP	Prep	Number=Sing|Person=1	1	obl:prep	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	bealaí	bealach	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	1	obl	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	6	acl:relcl	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	údaráis	údarás	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	8	obl	_	_
11	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	scoile	scoil	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	compound	_	_
13	brú	brú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	15	obj	_	_
14	a	a	PART	Inf	PartType=Inf	15	mark	_	_
15	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
16	ar	ar	ADP	Simp	_	18	case	_	_
17	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	18	det	_	_
18	daltaí	dalta	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	15	nmod	_	_
19	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	21	nmod:poss	_	_
20	gcuid	cuid	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	21	advmod	_	_
21	teangacha	teanga	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Strong|Number=Plur	23	obj	_	_
22	a	a	PART	Inf	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	Noun	Form=Len|VerbForm=Inf	15	xcomp	_	_
24	suas	suas	ADV	Dir	_	23	compound:prt	_	SpaceAfter=No
25	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 compound:prt	color:blue
1	den	de	ADP	Art	Number=Sing|PronType=Art	0	root	_	_
2	Chonradh	conradh	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nmod	_	_
3	seo	seo	DET	Det	PronType=Dem	2	det	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	de	de	ADP	Cmpd	PrepForm=Cmpd	1	conj	_	_
6	réir	réir	ADP	Cmpd	_	5	fixed	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	réimse	réimse	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	5	nmod	_	_
9	i	i	ADP	Simp	_	10	case	_	_
10	dtrácht	trácht	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Punct	_	12	punct	_	_
12	agus	agus	CCONJ	Coord	_	14	cc	_	_
13	go	go	PART	Vb	PartType=Cmpl	14	mark:prt	_	_
14	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	1	conj	_	_
15	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	14	nsubj	_	_
16	údaraithe	údaraithe	ADJ	Adj	VerbForm=Part	14	xcomp:pred	_	_
17	ag	ag	ADP	Simp	_	19	case	_	_
18	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	19	det	_	_
19	gComhairle	comhairle	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	16	obl	_	_
20	i	i	ADP	Simp	_	21	case	_	_
21	gcomhréir	comhréir	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	16	obl	_	_
22	leis	le	ADP	Simp	_	24	case	_	_
23	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
24	nósanna	nós	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	21	nmod	_	_
25	imeachta	imeacht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	24	compound	_	_
26	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	24	acl:relcl	_	_
27	leagtha	leagtha	ADJ	Adj	VerbForm=Part	26	xcomp:pred	_	_
28	síos	síos	ADV	Dir	_	27	compound:prt	_	_
29	iontu	i	ADP	Prep	Number=Plur|Person=3	27	obl:prep	_	SpaceAfter=No
30	.	.	PUNCT	.	_	1	punct	_	_

~~~


