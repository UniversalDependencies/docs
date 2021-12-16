---
layout: base
title:  'Statistics of nmod:poss in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="nds_lsdc-dep-nmod.html">nmod</a></tt>.

5 nodes (0%) are attached to their parents as `nmod:poss`.

3 instances of `nmod:poss` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="nds_lsdc-pos-DET.html">DET</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nmod:poss	color:blue
1	An	an	ADP	_	AdpType=Prep	4	case	_	lemma[gml]=an
2	dem	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	lemma[gml]=dê¹
3	anderen	ander	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	lemma[gml]=ander
4	ende	ende	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	9	obl	_	lemma[gml]=ende²
5	van	van	ADP	_	AdpType=Prep	8	case	_	lemma[gml]=van¹
6	'	'	PUNCT	_	_	7	punct	_	_
7	er	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	lemma[gml]=dê¹
8	küäken	köäke	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	4	nmod:poss	_	lemma[gml]=kȫke²
9	stund	stån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	lemma[gml]=stân
10	dee	de	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	lemma[gml]=dê¹
11	lange	lang	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	lemma[gml]=lanc
12	eykendisk	eykendisk	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	wår	wår	ADV	_	_	19	advmod	_	lemma[gml]=wôr(e)
15	in	in	ADP	_	AdpType=Prep	18	case	_	lemma[gml]=in²
16	'	'	PUNCT	_	_	17	punct	_	_
17	en	de	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	Case[regional]=Acc|lemma[gml]=dê¹
18	sommer	soamer	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	19	obl	_	Case[regional]=Acc|lemma[gml]=sōmer²
19	giaten	eaten	VERB	_	Aspect=Perf|VerbForm=Part	12	acl	_	lemma[gml]=ēten
20	word	werden	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Aux	19	aux:pass	_	lemma[gml]=wērden¹|SpaceAfter=No
21	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:poss	color:blue
1	Lulef	Lulef	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	smit	smyten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	lemma[gml]=smîten|SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	mor	men	CCONJ	_	_	5	cc	_	lemma[gml]=men³
5	raakt	raken	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	lemma[gml]=rāken¹
6	niks	niks	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Neg	5	obj	_	lemma[gml]=nichtes|SpaceAfter=No
7	;	;	PUNCT	_	_	9	punct	_	_
8	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	lemma[gml]=hê¹
9	smit	smyten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	lemma[gml]=smîten
10	vlak	vlak	ADV	_	_	11	advmod	_	lemma[gml]=vlak¹
11	langs	langs	ADP	_	AdpType=Prep	14	case	_	lemma[gml]=langes
12	Bennad	Bennad	PROPN	_	Gender=Masc|Number=Sing	13	nmod:poss	_	_
13	synen	syn	DET	_	Case=Acc|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	14	det:poss	_	lemma[gml]=sîn⁴
14	klump	klump	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	9	obl	_	lemma[gml]=klump(e)|SpaceAfter=No
15	;	;	PUNCT	_	_	19	punct	_	_
16	of	of	SCONJ	_	_	19	mark	_	lemma[gml]=of¹
17	hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	lemma[gml]=hê¹
18	üm	hee	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	obj	_	lemma[gml]=hê¹
19	eraked	raken	VERB	_	Aspect=Perf|VerbForm=Part	9	parataxis	_	lemma[gml]=rāken¹
20	hevt	hebben	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux	19	aux	_	lemma[gml]=hebben|SpaceAfter=No
21	?	?	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Now	nu	INTJ	_	_	4	discourse	_	lemma[gml]=nu|SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	elk	elk	PRON	_	Case=Nom|Number=Sing|PronType=Tot	4	nsubj	_	lemma[gml]=elk¹
4	wiste	weaten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	lemma[gml]=wēten¹
5	wel	wol	ADV	_	_	4	advmod	_	lemma[gml]=wol²|SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	dat	dat	SCONJ	_	_	13	mark	_	lemma[gml]=dat²
8	Winkels	Winkel	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	9	nmod:poss	_	_
9	Hente	Hente	PROPN	_	Gender=Fem|Number=Sing	13	nsubj	_	_
10	en	en	DET	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	13	det	_	lemma[gml]=êⁱn¹
11	byster	byster	ADJ	_	Degree=Pos	12	advmod	_	lemma[gml]=bîster
12	kwåd	kwåd	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	lemma[gml]=quât²
13	wyv	wyv	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	ccomp	_	lemma[gml]=wîf
14	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Cop	13	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
15	,	,	PUNCT	_	_	43	punct	_	_
16	en	un	CCONJ	_	_	43	cc	_	lemma[gml]=unde²
17	dat	dat	SCONJ	_	_	43	mark	_	lemma[gml]=dat²
18	Winkel	Winkel	PROPN	_	Gender=Masc|Number=Sing	43	nsubj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	30	punct	_	_
20	sind	sind	SCONJ	_	_	30	mark	_	lemma[gml]=sint
21	dat	dat	SCONJ	_	_	20	fixed	_	lemma[gml]=dat²|SpaceAfter=No
22	'	'	PUNCT	_	_	23	punct	_	SpaceAfter=No
23	e	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	30	nsubj	_	lemma[gml]=hê¹
24	syn	syn	DET	_	Case=Acc|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	26	det:poss	_	lemma[gml]=sîn⁴
25	eyrste	eyrst	ADJ	_	Case=Acc|Degree=Sup|Gender=Fem|Number=Sing	26	amod	_	lemma[gml]=êrst¹
26	vrouwe	vrouwe	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	30	obj	_	lemma[gml]=vrouwe²
27	nå	nå	ADP	_	AdpType=Prep	28	case	_	lemma[gml]=nâ
28	Marten	Marten	PROPN	_	_	30	obl	_	_
29	Eskes	Eskes	PROPN	_	_	28	flat	_	_
30	ebracht	bringen	VERB	_	Aspect=Perf|VerbForm=Part	43	advcl	_	lemma[gml]=bringen
31	hadde	hebben	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Aux	30	aux	_	lemma[gml]=hebben
32	en	un	CCONJ	_	_	36	cc	_	lemma[gml]=unde²
33	mid	mid	ADP	_	AdpType=Prep	34	case	_	lemma[gml]=mit
34	Hente	Hente	PROPN	_	Gender=Fem|Number=Sing	36	obl	_	_
35	Wonnink	Wonnink	PROPN	_	_	34	flat	_	_
36	etrouwd	trouwen	VERB	_	Aspect=Perf|VerbForm=Part	30	conj	_	lemma[gml]=trûwen
37	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|VerbType=Aux	36	aux	_	lemma[gml]=wēsen²|SpaceAfter=No
38	,	,	PUNCT	_	_	43	punct	_	_
39	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	40	det	_	lemma[gml]=dê¹
40	helle	helle	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	43	obj	_	lemma[gml]=helle
41	in	in	ADP	_	AdpType=Prep	42	case	_	lemma[gml]=in²
42	huus	huus	NOUN	_	Gender=Neut|Number=Sing	43	obl	_	lemma[gml]=hûs¹
43	hadde	hebben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	lemma[gml]=hebben|SpaceAfter=No
44	.	.	PUNCT	_	_	4	punct	_	_

~~~


