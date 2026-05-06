---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-aux.html">aux</a></tt>.

7 nodes (0%) are attached to their parents as `aux:pass`.

7 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71428571428571.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (6; 86% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	finns	finnas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	i	i	ADP	_	_	4	case	_	_
4	samhället	samhälle	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	obl	_	_
5	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	7	det	_	_
6	otalad	otalad	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	7	amod	_	CorrectionLabels=L-Der
7	kod	kod	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
8	som	som	PRON	_	PronType=Rel	9	nsubj	_	_
9	gör	göra	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	_
10	att	att	SCONJ	_	_	13	mark	_	_
11	folk	folk	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	13	nsubj:pass	_	_
12	blir	bli	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	_	_
13	klassificera	klassificera	VERB	_	VerbForm=Inf|Voice=Act	9	ccomp	_	CorrectionLabels=L-Der;S-Type
14	på	på	ADP	_	_	15	case	_	_
15	grund	grund	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	obl	_	_
16	av	av	ADP	_	_	18	case	_	_
17	vilka	vilken	DET	_	Definite=Ind|Number=Plur|PronType=Int	18	det	_	_
18	kläder	kläder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	15	nmod	_	_
19	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	20	nsubj	_	_
20	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	18	acl	_	_
21	på	på	ADP	_	_	22	case	_	_
22	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	20	obl	_	_
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 aux:pass	color:blue
1	När	när	SCONJ	_	_	4	mark	_	_
2	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	4	nsubj	_	_
3	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	klarat	klara	VERB	_	VerbForm=Sup|Voice=Act	17	advcl	_	_
5	äventyret	äventyr	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	obj	_	_
6	och	och	CCONJ	_	_	7	cc	_	_
7	befriat	befria	VERB	_	VerbForm=Sup|Voice=Act	4	conj	_	_
8	världen	värld	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obj	_	_
9	från	från	ADP	_	_	12	case	_	_
10	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	12	det	_	_
11	onde	ond	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Com|Number=Sing	12	amod	_	_
12	härskaren	härskare	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	_
13	blir	bli	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	17	aux:pass	_	_
14	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	16	det	_	_
15	äldre	gammal	ADJ	_	Case=Nom|Degree=Cmp	16	amod	_	_
16	brodern	broder	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	17	nsubj	_	_
17	förlamad	förlamad	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
18	,	,	PUNCT	_	_	21	punct	_	_
19	och	och	CCONJ	_	_	21	cc	_	_
20	därför	därför	ADV	_	_	21	advmod	_	_
21	avgör	avgöra	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	CorrectionLabels=L-W
22	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	21	nsubj	_	_
23	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	21	obj	_	_
24	för	för	ADP	_	_	26	mark	_	_
25	att	att	PART	_	_	26	mark	_	_
26	dö	dö	VERB	_	VerbForm=Inf|Voice=Act	21	xcomp	_	_
27	igen	igen	ADV	_	_	26	advmod	_	_
28	,	,	PUNCT	_	_	26	punct	_	_
29	så	så	SCONJ	_	_	33	mark	_	_
30	att	att	SCONJ	_	_	33	mark	_	_
31	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	33	nsubj	_	_
32	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	33	aux	_	_
33	komma	komma	VERB	_	VerbForm=Inf|Voice=Act	26	advcl	_	_
34	till	till	ADP	_	_	37	case	_	_
35	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	37	det	_	_
36	annan	annan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	37	amod	_	_
37	plats	plats	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	33	obl	_	_
38	.	.	PUNCT	_	_	17	punct	_	_

~~~


