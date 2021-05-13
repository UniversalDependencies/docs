---
layout: base
title:  'Statistics of dep in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 33% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	Der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	2	det	_	_
2	Stufenwechsel	Stufenwechsel	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
3	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Merkmal	Merkmal	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	_	_
6	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3	10	det	_	_
7	finnischen	finnisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Person=3	10	amod	_	InflectionType=Weak|Proper=True
8	und	und	CCONJ	CC	_	9	cc	_	_
9	nordsamischen	nordsamisch	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Person=3	7	conj	_	InflectionType=Weak|Proper=True
10	Dialekte	Dialekt	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur|Person=3	5	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	10	dep	_	_
13	jedoch	jedoch	CCONJ	CC	_	20	cc	_	_
14	nicht	nicht	ADV	RB	Degree=Pos|Polarity=Neg	20	advmod	_	_
15	in	in	ADP	IN	_	18	case	_	_
16	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	18	det	_	_
17	Südsamischen	Südsamisch	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Person=3	18	amod	_	InflectionType=Weak|Proper=True
18	Sprache	Sprache	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	20	obl	_	_
19	zu	zu	PART	RP	_	20	mark	_	_
20	finden	finden	VERB	VB	_	5	conj	_	SpaceAfter=No
21	,	,	PUNCT	,	_	26	punct	_	_
22	die	der	PRON	REL	Case=Nom|Gender=Fem|Number=Sing|Person=3	26	nsubj	_	_
23	eine	ein	DET	PDT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	25	det	_	_
24	andere	ander	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	25	det	_	_
25	Sprachgeschichte	Sprachgeschichte	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	26	obj	_	_
26	aufweist	aufweisen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	acl:relcl	_	SpaceAfter=No
27	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 dep	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Erforschung	Erforschung	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	nsubj:pass	_	_
3	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	4	det	_	_
4	Insel	Insel	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	2	nmod	_	_
5	und	und	CCONJ	CC	_	10	dep	_	_
6	und	und	CCONJ	CC	_	7	cc	_	_
7	Expeditionen	Expedition	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	2	conj	_	_
8	dorthin	dorthin	ADV	RB	Degree=Pos	7	advmod	_	_
9	werden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux:pass	_	_
10	fortgesetzt	fortsetzen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep	color:blue
1	Einen	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3	2	det	_	_
2	Schub	Schub	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
3	erwartet	erwarten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	man	man	PRON	EX	_	3	nsubj	_	_
5	sich	er|es|sie	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Rcp	3	dep	_	_
6	von	von	ADP	APPR	_	9	case	_	_
7	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	9	det	_	_
8	boomenden	boomend	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Person=3	9	amod	_	InflectionType=Weak
9	Immobilienmarkt	Immobilienmarkt	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	3	obl	_	_
10	und	und	CCONJ	CC	_	12	cc	_	_
11	steigenden	steigend	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Person=3	12	amod	_	InflectionType=Strong
12	Staatsausgaben	Staatsausgabe	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


