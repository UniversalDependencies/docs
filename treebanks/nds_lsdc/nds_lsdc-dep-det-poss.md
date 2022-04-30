---
layout: base
title:  'Statistics of det:poss in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="nds_lsdc-dep-det.html">det</a></tt>.

25 nodes (1%) are attached to their parents as `det:poss`.

25 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12.

The following 2 pairs of parts of speech are connected with `det:poss`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-DET.html">DET</a></tt> (24; 96% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	Wat	wat	PRON	_	_	4	obl	_	lemma[gml]=wat(te)³
2	myn	myn	DET	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det:poss	_	lemma[gml]=mîn²
3	süsterdochter	süsterdochter	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	lemma[gml]=süsterdochter
4	fiks	fiks	ADJ	_	Degree=Pos	0	root	_	_
5	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	4	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
6	:	:	PUNCT	_	_	10	punct	_	_
7	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	lemma[gml]=dê¹
8	kan	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	10	aux	_	lemma[gml]=künnen
9	gedanken	gedanke	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	lemma[gml]=gedanke
10	leasen	leasen	VERB	_	VerbForm=Inf	4	parataxis	_	lemma[gml]=lēsen¹|SpaceAfter=No
11	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:poss	color:blue
1	Syne	syn	DET	_	Case=Nom|Gender[psor]=Masc|Number=Plur|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	2	det:poss	_	lemma[gml]=sîn⁴
2	olden	old	ADJ	_	Case=Nom|Number=Plur	3	nsubj	_	lemma[gml]=ōlt
3	wiatet	weaten	VERB	_	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	lemma[gml]=wēten¹
4	wal	wol	ADV	_	_	3	advmod	_	lemma[gml]=wol²|SpaceAfter=No
5	,	,	PUNCT	_	_	15	punct	_	_
6	dat	dat	SCONJ	_	_	15	mark	_	lemma[gml]=dat²
7	my	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	15	obj	_	lemma[gml]=ik
8	dat	dat	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	lemma[gml]=dat²
9	heyle	heyl	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	10	amod	_	lemma[gml]=hêⁱl²
10	getrouw	getrouw	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	15	nsubj	_	_
11	skeyv	skeyv	ADJ	_	Degree=Pos	15	advmod	_	lemma[gml]=schêf²
12	in	in	ADP	_	AdpType=Prep	14	case	_	lemma[gml]=in²
13	de	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	Case[regional]=Acc|lemma[gml]=dê¹
14	mütse	mütse	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	Case[regional]=Acc|lemma[gml]=mütze
15	sit	sitten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	lemma[gml]=sitten|SpaceAfter=No
16	;	;	PUNCT	_	_	15	punct	_	_
17	see	see	PRON	_	Case=Nom|Number=Plur|PronType=Prs	19	nsubj	_	lemma[gml]=sê²
18	sint	weasen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Cop	19	cop	_	lemma[gml]=wēsen²
19	hellig	hellig	ADJ	_	Degree=Pos	3	conj	_	lemma[gml]=hellich³
20	up	up	ADP	_	AdpType=Prep	21	case	_	lemma[gml]=up²
21	my	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	19	obl	_	lemma[gml]=ik
22	as	as	CCONJ	_	_	23	case	_	lemma[gml]=alsô
23	spinnekop	spinnekop	NOUN	_	Gender=Masc|Number=Sing	19	obl	_	SpaceAfter=No
24	;	;	PUNCT	_	_	30	punct	_	_
25	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	30	nsubj	_	lemma[gml]=sê²
26	willet	willen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	30	aux	_	lemma[gml]=willen¹
27	my	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	30	obj	_	lemma[gml]=ik
28	håste	håste	ADV	_	_	29	advmod	_	lemma[gml]=hâst²
29	neet	nich	PART	_	PartType=Neg	30	advmod	_	lemma[gml]=nicht¹
30	tospreaken	tospreaken	VERB	_	VerbForm=Inf	3	conj	_	lemma[gml]=tôsprēken|SpaceAfter=No
31	,	,	PUNCT	_	_	37	punct	_	_
32	mer	men	CCONJ	_	_	37	cc	_	lemma[gml]=men³
33	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	37	nsubj	_	lemma[gml]=dat²
34	kan	künnen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	37	aux	_	lemma[gml]=künnen
35	my	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	37	iobj	_	lemma[gml]=ik
36	niks	niks	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Neg	37	obj	_	lemma[gml]=nichtes
37	vorskealen	vorskealen	VERB	_	VerbForm=Inf	30	conj	_	lemma[gml]=vorschēlen|SpaceAfter=No
38	,	,	PUNCT	_	_	46	punct	_	_
39	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	46	nsubj	_	lemma[gml]=ik
40	wil	willen	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Aux	46	aux	_	lemma[gml]=willen¹
41	mynen	myn	DET	_	Case=Dat|Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	42	det:poss	_	lemma[gml]=mîn²
42	suane	söäne	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	46	obj	_	lemma[gml]=sȫne¹
43	te	to	ADP	_	AdpType=Prep	45	case	_	lemma[gml]=tô⁴
44	n	de	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	45	det	_	lemma[gml]=dê¹
45	besten	good	ADJ	_	Case=Dat|Degree=Sup|Gender=Neut|Number=Sing	46	obl	_	lemma[gml]=gôt²
46	råden	råden	VERB	_	VerbForm=Inf	3	parataxis	_	lemma[gml]=râden¹|SpaceAfter=No
47	,	,	PUNCT	_	_	50	punct	_	_
48	nå	nå	ADP	_	AdpType=Prep	50	case	_	lemma[gml]=nâ
49	myn	myn	DET	_	Case=Dat|Gender=Neut|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	50	det:poss	_	Case[regional]=Acc|lemma[gml]=mîn²
50	gooddünken	gooddünken	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	46	obl	_	Case[regional]=Acc|lemma[gml]=gôtdünken(t)|SpaceAfter=No
51	,	,	PUNCT	_	_	66	punct	_	_
52	al	al	ADV	_	_	66	mark	_	lemma[gml]=al
53	willet	willen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	66	aux	_	lemma[gml]=willen¹
54	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	66	nsubj	_	lemma[gml]=sê²
55	ouk	ouk	ADV	_	_	66	advmod	_	lemma[gml]=ôk
56	van	van	ADP	_	AdpType=Prep	57	case	_	lemma[gml]=van¹
57	helligheid	helligheid	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	66	obl	_	_
58	mid	mid	ADP	_	AdpType=Prep	61	case	_	lemma[gml]=mit
59	'	'	PUNCT	_	_	60	punct	_	SpaceAfter=No
60	en	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	61	det	_	Case[regional]=Acc|lemma[gml]=dê¹
61	kop	kop	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	66	obl	_	Case[regional]=Acc|lemma[gml]=kop²
62	teagen	geagen	ADP	_	AdpType=Prep	64	case	_	lemma[gml]=gēgen
63	de	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	64	det	_	lemma[gml]=dê¹
64	böyme	boum	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	66	obl	_	lemma[gml]=bôm
65	an	an	ADP	_	_	64	case	_	lemma[gml]=an
66	loupen	loupen	VERB	_	VerbForm=Inf	46	advcl	_	lemma[gml]=lôpen¹|SpaceAfter=No
67	,	,	PUNCT	_	_	71	punct	_	_
68	en	un	CCONJ	_	_	71	cc	_	lemma[gml]=unde²
69	ouw	juw	DET	_	Case=Nom|Gender=Fem|Number=Sing|Person[psor]=2|Poss=Yes|PronType=Prs	70	det:poss	_	lemma[gml]=iuwe
70	moder	moder	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	71	nsubj	_	lemma[gml]=môder¹
71	segt	seggen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	46	conj	_	lemma[gml]=seggen
72	net	net	ADV	_	_	73	advmod	_	lemma[gml]=net³
73	sou	sou	ADV	_	_	71	advmod	_	lemma[gml]=sô²|SpaceAfter=No
74	.	.	PUNCT	_	_	3	punct	_	_

~~~


