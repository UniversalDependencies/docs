---
layout: base
title:  'Statistics of reparandum in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `reparandum`

This relation is universal.

4 nodes (0%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 reparandum	color:blue
1	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
3	_	_	ADV	RB	Degree=Pos	5	advmod	_	_
4	_	_	ADV	RB	Degree=Pos	5	advmod	_	_
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
6	_	_	SCONJ	IN	_	18	mark	_	_
7	_	_	DET	DT	PronType=Art	8	det	_	_
8	_	_	NOUN	NN	Number=Sing	18	nsubj	_	_
9	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	8	reparandum	_	_
11	_	_	ADJ	JJ	Degree=Pos	12	amod	_	_
12	_	_	NOUN	NN	Number=Sing	10	obj	_	_
13	_	_	DET	WDT	PronType=Rel	14	nsubj	_	_
14	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	8	acl:relcl	_	_
15	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VB	VerbForm=Inf	14	ccomp	_	_
18	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	advcl	_	_
19	_	_	PART	TO	_	20	mark	_	_
20	_	_	VERB	VB	VerbForm=Inf	18	ccomp	_	_
21	_	_	PROPN	NNP	_	20	obj	_	_
22	_	_	PROPN	NNP	_	21	flat	_	_
23	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 reparandum	color:blue
1	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	0	root	_	CorrectForm=convenient
4	_	_	PUNCT	,	_	3	punct	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	reparandum	_	_
7	_	_	PUNCT	``	_	8	punct	_	_
8	_	_	ADJ	JJ	Degree=Pos	10	amod	_	_
9	_	_	PUNCT	''	_	8	punct	_	_
10	_	_	NOUN	NNS	Number=Plur	6	obj	_	_
11	_	_	SCONJ	IN	_	13	mark	_	_
12	_	_	PRON	PRP	Person=2|PronType=Prs	13	nsubj	_	_
13	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl	_	_
14	_	_	ADJ	JJR	Degree=Cmp	15	amod	_	_
15	_	_	NOUN	NN	Number=Sing	13	obj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VB	VerbForm=Inf	15	acl	_	_
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	17	obj	_	CorrectForm=material
19	_	_	DET	WDT	PronType=Rel	21	nsubj:pass	_	_
20	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux:pass	_	_
21	_	_	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part	18	acl:relcl	_	CorrectForm=given
22	_	_	CCONJ	CC	_	25	cc	_	_
23	_	_	SCONJ	IN	_	25	mark	_	_
24	_	_	PRON	PRP	Person=2|PronType=Prs	25	nsubj	_	_
25	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	conj	_	_
26	_	_	PART	TO	_	27	mark	_	_
27	_	_	VERB	VB	VerbForm=Inf	25	xcomp	_	_
28	_	_	ADV	RB	Degree=Pos	29	advmod	_	_
29	_	_	NUM	CD	_	30	nummod	_	_
30	_	_	NOUN	NNS	Number=Plur	27	obj	_	_
31	_	_	ADP	IN	_	33	case	_	_
32	_	_	PUNCT	''	_	33	punct	_	_
33	_	_	NOUN	NN	Number=Sing	27	obl	_	_
34	_	_	PUNCT	''	_	13	punct	_	_
35	_	_	CCONJ	CC	_	38	cc	_	_
36	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	38	nsubj	_	_
37	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	38	cop	_	_
38	_	_	ADJ	JJ	Degree=Pos	13	conj	_	_
39	_	_	ADP	IN	_	41	case	_	_
40	_	_	NUM	CD	_	41	nummod	_	_
41	_	_	NOUN	NNS	Number=Plur	38	obl	_	_
42	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 19 reparandum	color:blue
1	_	_	CCONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	_	_	PRON	DT	PronType=Dem	3	obj	_	_
5	_	_	ADP	IN	_	7	case	_	_
6	_	_	DET	DT	PronType=Art	7	det	_	_
7	_	_	NOUN	NN	Number=Sing	3	obl	_	_
8	_	_	ADV	RB	Degree=Pos	3	advmod	_	_
9	_	_	PUNCT	,	_	3	punct	_	_
10	_	_	SCONJ	IN	_	19	mark	_	_
11	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	19	advcl	_	_
13	_	_	PRON	NN	Number=Sing|PronType=Ind	12	obj	_	_
14	_	_	ADP	IN	_	16	case	_	_
15	_	_	DET	DT	PronType=Prs	16	det	_	_
16	_	_	NOUN	NN	Number=Sing	12	obl	_	_
17	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	19	nsubj	_	_
18	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	19	aux	_	_
19	_	_	VERB	VB	VerbForm=Inf	3	reparandum	_	_
20	_	_	ADP	IN	_	21	case	_	_
21	_	_	NOUN	NN	Number=Sing	19	obl	_	_
22	_	_	AUX	VBG	VerbForm=Ger	23	aux:pass	_	_
23	_	_	VERB	VBG	VerbForm=Ger	21	acl	_	_
24	_	_	PUNCT	.	_	3	punct	_	_

~~~


