---
layout: base
title:  'Statistics of ccomp in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `ccomp`

This relation is universal.

16 nodes (1%) are attached to their parents as `ccomp`.

14 instances of `ccomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.625.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (11; 69% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp	color:blue
1	Hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma[gml]=hê¹
2	vorwündert	vorwunderen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	lemma[gml]=vorwunderen
3	sik	sik	PRON	_	Case=Acc,Dat|Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	lemma[gml]=sik¹
4	un	un	CCONJ	_	_	5	cc	_	lemma[gml]=unde²
5	vrågt	vrågen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	lemma[gml]=vrâgen
6	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	lemma[gml]=dê¹
7	waerd	waerd	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	iobj	_	lemma[gml]=wērt¹|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	hwat	wat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Int	11	obj	_	lemma[gml]=wat(te)³
10	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	lemma[gml]=dat²
11	bedüdde	bedüden	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	ccomp	_	lemma[gml]=bedü̂den|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 ccomp	color:blue
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


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 31 ccomp	color:blue
1	Jüsken	Jüsken	PROPN	_	Number=Sing	2	nsubj	_	_
2	nam	neamen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=nēmen
3	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	lemma[gml]=dê¹
4	korv	korv	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	lemma[gml]=korf|SpaceAfter=No
5	,	,	PUNCT	_	_	14	punct	_	_
6	un	un	CCONJ	_	_	14	cc	_	lemma[gml]=unde²
7	Anton	Anton	PROPN	_	Number=Sing	14	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Willem	Willem	PROPN	_	Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	Adolf	Adolf	PROPN	_	Number=Sing	7	conj	_	_
12	un	un	DET	_	_	13	det	_	lemma[gml]=unde²
13	Paiter	Paiter	PROPN	_	Number=Sing	7	conj	_	_
14	setten	setten	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	2	conj	_	lemma[gml]=setten
15	sik	sik	PRON	_	Case=Acc,Dat|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	14	obj	_	lemma[gml]=sik¹
16	by	by	ADP	_	AdpType=Prep	17	case	_	lemma[gml]=bî
17	ean	hee	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	14	obl	_	lemma[gml]=hê¹|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	avers	avers	ADV	_	_	20	advmod	_	lemma[gml]=āvers
20	sou	sou	ADV	_	_	14	advmod	_	lemma[gml]=sô²|SpaceAfter=No
21	,	,	PUNCT	_	_	31	punct	_	_
22	dat	dat	SCONJ	_	_	31	mark	_	lemma[gml]=dat²
23	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	31	nsubj	_	lemma[gml]=sê²
24	de	de	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	25	det	_	lemma[gml]=dê¹
25	lüdens	lüüd	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	31	obj	_	lemma[gml]=lü̂t¹
26	konnen	künnen	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	31	aux	_	lemma[gml]=künnen
27	in	in	ADP	_	AdpType=Prep	30	case	_	lemma[gml]=in²|SpaceAfter=No
28	'	'	PUNCT	_	_	29	punct	_	SpaceAfter=No
29	t	dat	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	30	det	_	lemma[gml]=dat²
30	gesicht	gesichte	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	31	obl	_	lemma[gml]=gesichte²
31	seen	seen	VERB	_	VerbForm=Inf	20	ccomp	_	lemma[gml]=sên|SpaceAfter=No
32	,	,	PUNCT	_	_	34	punct	_	_
33	un	un	CCONJ	_	_	34	cc	_	lemma[gml]=unde²
34	döppen	döppen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	14	conj	_	SpaceAfter=No
35	.	.	PUNCT	_	_	2	punct	_	_

~~~


