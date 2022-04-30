---
layout: base
title:  'Statistics of csubj in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 19.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 27 csubj	color:blue
1	Dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	lemma[gml]=dat²
2	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	4	cop	_	lemma[gml]=wēsen²
3	ouk	ouk	ADV	_	_	4	advmod	_	lemma[gml]=ôk
4	wår	wår	ADJ	_	Degree=Pos	0	root	_	lemma[gml]=wâr¹
5	un	un	CCONJ	_	_	10	cc	_	lemma[gml]=unde²
6	is	weasen	AUX	_	Number=Sing|Person=3|VerbType=Aux	10	aux:pass	_	lemma[gml]=wēsen²
7	döär	döär	ADP	_	AdpType=Prep	9	case	_	lemma[gml]=dȫr¹
8	veale	veale	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	9	amod	_	lemma[gml]=vēle¹
9	teyken	teyken	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	10	obl:agent	_	lemma[gml]=têⁱken¹
10	bewysd	bewysen	VERB	_	Aspect=Perf|VerbForm=Part	4	conj	_	lemma[gml]=bewîsen|SpaceAfter=No
11	,	,	PUNCT	_	_	27	punct	_	_
12	dat	dat	SCONJ	_	_	27	mark	_	lemma[gml]=dat²
13	düslike	düslik	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	lemma[gml]=düslĩk
14	vordamde	vordammen	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	lemma[gml]=vordammen
15	saelen	saele	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	27	nsubj:pass	_	lemma[gml]=sêle⁴|SpaceAfter=No
16	,	,	PUNCT	_	_	23	punct	_	_
17	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	23	nsubj	_	lemma[gml]=dê¹
18	in	in	ADP	_	AdpType=Prep	20	case	_	lemma[gml]=in²
19	dem	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	lemma[gml]=dê¹
20	grav	grav	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	23	obl	_	lemma[gml]=graf
21	keyne	keyn	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Neg	22	det	_	lemma[gml]=kêⁱn²
22	rouwe	rouwe	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	23	obj	_	lemma[gml]=rouwe¹
23	hebben	hebben	VERB	_	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	15	acl	_	lemma[gml]=hebben|SpaceAfter=No
24	,	,	PUNCT	_	_	27	punct	_	_
25	van	van	ADP	_	AdpType=Prep	26	case	_	lemma[gml]=van¹
26	god	god	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	27	obl:agent	_	lemma[gml]=got¹
27	bruked	bruken	VERB	_	Aspect=Perf|VerbForm=Part	4	csubj	_	lemma[gml]=brûken
28	warden	werden	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	27	aux:pass	_	lemma[gml]=wērden¹
29	de	de	DET	_	Case=Acc|Definite=Def|Number=Plur|PronType=Art	30	det	_	lemma[gml]=dê¹
30	slimmen	slim	ADJ	_	Case=Acc|Number=Plur	34	obj	_	lemma[gml]=slim¹
31	in	in	ADP	_	AdpType=Prep	32	case	_	lemma[gml]=in²
32	tucht	tucht	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	34	obl	_	lemma[gml]=tucht¹
33	to	to	PART	_	PartType=Inf	34	mark	_	lemma[gml]=tô⁵
34	holden	holden	VERB	_	VerbForm=Inf	27	ccomp	_	lemma[gml]=hōlden|SpaceAfter=No
35	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 33 csubj	color:blue
1	As	as	SCONJ	_	_	8	mark	_	lemma[gml]=alsô
2	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	lemma[gml]=ik
3	de	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	lemma[gml]=dê¹
4	sin	sin	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	lemma[gml]=sin¹
5	sou	sou	ADV	_	_	7	advmod	_	lemma[gml]=sô²
6	en	en	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	7	det	_	lemma[gml]=êⁱn¹
7	bittyn	betken	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
8	nåstuderen	nåstuderen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	18	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	15	punct	_	_
10	dår	dår	ADV	_	_	15	advmod	_	lemma[gml]=dâr¹
11	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	lemma[gml]=et¹
12	in	in	ADP	_	_	10	case	_	lemma[gml]=in²
13	ofte	of	CCONJ	_	_	14	cc	_	lemma[gml]=of¹
14	by	by	ADP	_	_	12	conj	_	lemma[gml]=bî
15	stun	stån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	acl	_	lemma[gml]=stân|SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	dan	dan	ADV	_	_	18	advmod	_	_
18	docht	dünken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=dünken
19	myn	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	18	obj	_	lemma[gml]=ik|SpaceAfter=No
20	,	,	PUNCT	_	_	33	punct	_	_
21	det	dat	SCONJ	_	_	33	mark	_	lemma[gml]=dat²
22	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	33	nsubj	_	lemma[gml]=et¹
23	sou	sou	ADV	_	_	24	advmod	_	lemma[gml]=sô²
24	yts	ichts	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	33	obj	_	_
25	van	van	ADP	_	AdpType=Prep	26	case	_	lemma[gml]=van¹
26	foppen	voppen	VERB	_	VerbForm=Inf	24	nmod	_	lemma[gml]=voppen
27	of	of	CCONJ	_	_	31	cc	_	lemma[gml]=of¹
28	vöär	vöär	ADP	_	AdpType=Prep	30	case	_	lemma[gml]=vȫr³
29	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem,Masc|Number=Sing|PronType=Art	30	det	_	lemma[gml]=dê¹
30	gek	gek	NOUN	_	Case=Acc|Gender=Fem,Masc|Number=Sing	31	obj	_	lemma[gml]=gek¹
31	holden	holden	VERB	_	VerbForm=Inf	26	conj	_	lemma[gml]=hōlden
32	must	möten	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	33	aux	_	lemma[gml]=mö̂ten²
33	hebben	hebben	VERB	_	VerbForm=Inf	18	csubj	_	lemma[gml]=hebben|SpaceAfter=No
34	,	,	PUNCT	_	_	39	punct	_	_
35	mer	men	CCONJ	_	_	39	cc	_	lemma[gml]=men³
36	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	39	nsubj	_	lemma[gml]=ik
37	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	39	cop	_	lemma[gml]=wēsen²
38	neet	nich	PART	_	PartType=Neg	39	advmod	_	lemma[gml]=nicht¹
39	seaker	seaker	ADJ	_	Degree=Cmp	18	conj	_	lemma[gml]=sēker|SpaceAfter=No
40	.	.	PUNCT	_	_	18	punct	_	_

~~~


