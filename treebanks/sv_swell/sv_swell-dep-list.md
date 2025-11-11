---
layout: base
title:  'Statistics of list in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `list`

This relation is universal.

3 nodes (0%) are attached to their parents as `list`.

3 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `list`: <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 33% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Från	från	ADP	_	_	0	root	_	_
2	:	:	PUNCT	_	_	3	punct	_	_
3	email@dot.com	email@dot.com	PROPN	_	Case=Nom	1	appos	_	_
4	Till	till	ADP	_	_	1	list	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	email@dot.com	email@dot.com	PROPN	_	Case=Nom	4	appos	_	_
7	Subjekt	subjekt	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	list	_	CorrectionLabels=L-FL
8	:	:	PUNCT	_	_	9	punct	_	_
9	bröllopspresent	bröllopspresent	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	appos	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 list	color:blue
1	Från	från	ADP	_	_	0	root	_	_
2	:	:	PUNCT	_	_	3	punct	_	_
3	email@dot.com	email@dot.com	PROPN	_	Case=Nom	1	appos	_	_
4	Till	till	ADP	_	_	1	list	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	email@dot.com	email@dot.com	PROPN	_	Case=Nom	4	appos	_	_
7	Subjekt	subjekt	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	list	_	CorrectionLabels=L-FL
8	:	:	PUNCT	_	_	9	punct	_	_
9	bröllopspresent	bröllopspresent	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	appos	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 list	color:blue
1	Patrik	Patrik	PROPN	_	Case=Nom	6	nsubj	_	_
2	Lindenfors	Lindenfors	PROPN	_	Case=Nom	1	flat:name	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	dn.se	dn.se	PROPN	_	Case=Nom	1	list	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	säger	säga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	att	att	SCONJ	_	_	11	mark	_	_
8	”	”	PUNCT	_	_	11	punct	_	_
9	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	10	det	_	_
10	del	del	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	nsubj	_	_
11	menar	mena	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
12	att	att	SCONJ	_	_	16	mark	_	_
13	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	16	nsubj	_	_
14	inte	inte	PART	_	_	16	advmod	_	Polarity=Neg
15	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
16	sänka	sänka	VERB	_	VerbForm=Inf|Voice=Act	11	ccomp	_	_
17	åldern	ålder	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	16	obj	_	_
18	eftersom	eftersom	SCONJ	_	_	24	mark	_	_
19	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	24	nsubj	_	_
20	under	under	ADV	_	_	21	advmod	_	_
21	18	18	NUM	_	Case=Nom|NumType=Card	22	nummod	_	_
22	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	19	nmod	_	_
23	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	24	cop	_	_
24	ansvarslösa	ansvarslös	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	16	advcl	_	_
25	”	”	PUNCT	_	_	24	punct	_	_
26	,	,	PUNCT	_	_	29	punct	_	_
27	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	29	nsubj	_	_
28	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	29	aux	_	_
29	resultera	resultera	VERB	_	VerbForm=Inf|Voice=Act	24	advcl:relcl	_	_
30	i	i	ADP	_	_	33	mark	_	_
31	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	33	nsubj	_	_
32	inte	inte	PART	_	_	33	advmod	_	Polarity=Neg
33	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	29	advcl	_	_
34	tillräckligt	tillräcklig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	33	obj	_	_
35	med	med	ADP	_	_	36	case	_	_
36	fakta	faktum	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	34	obl	_	_
37	för	för	ADP	_	_	40	mark	_	_
38	att	att	PART	_	_	40	mark	_	_
39	kunna	kunna	AUX	_	VerbForm=Inf|Voice=Act	40	aux	_	_
40	rösta	rösta	VERB	_	VerbForm=Inf|Voice=Act	34	advcl	_	_
41	respektabelt	respektabelt	ADV	_	Degree=Pos	40	advmod	_	_
42	,	,	PUNCT	_	_	45	punct	_	_
43	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	45	nsubj	_	_
44	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	45	aux	_	_
45	leda	leda	VERB	_	VerbForm=Inf|Voice=Act	33	advcl:relcl	_	_
46	till	till	ADP	_	_	49	mark	_	_
47	att	att	SCONJ	_	_	49	mark	_	_
48	extrempartier	extremparti	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	49	nsubj	_	_
49	vinner	vinna	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	45	advcl	_	_
50	.	.	PUNCT	_	_	6	punct	_	_

~~~


