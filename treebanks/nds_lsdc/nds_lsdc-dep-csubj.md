---
layout: base
title:  'Statistics of csubj in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 csubj	color:blue
1	Wer	wer	PRON	_	Case=Nom|Number=Sing|PronType=Int	5	nsubj	_	_
2	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	lemma[gml]=dê¹
3	klokke	klokke	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
4	lüden	lüden	VERB	_	VerbForm=Inf	5	xcomp	_	_
5	höyrt	höyren	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	csubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	mot	möten	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
8	ouk	ouk	ADV	_	_	9	advmod	_	_
9	wetten	weaten	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	wo	wo	ADV	_	_	13	advmod	_	_
12	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj	_	_
13	hängt	hangen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	advcl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	un	un	CCONJ	_	_	21	cc	_	lemma[gml]=unde²
16	wän	wän	SCONJ	_	_	21	mark	_	_
17	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	21	nsubj	_	_
18	noch	noch	ADV	_	_	20	advmod	_	_
19	sou	sou	ADV	_	_	20	advmod	_	_
20	houg	houg	ADJ	_	Degree=Pos	21	advmod	_	_
21	hängt	hangen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	conj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	9	punct	_	_

~~~


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


