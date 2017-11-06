---
layout: base
title:  'Statistics of dep in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	Der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	2	det	_	_
2	Stufenwechsel	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
3	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	ein	_	DET	DT	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Merkmal	_	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	_	_
6	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|Person=3	10	det	_	_
7	finnischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Person=3	10	amod	_	InflectionType=Weak|Proper=True
8	und	_	CCONJ	CC	_	9	cc	_	_
9	nordsamischen	_	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Person=3	7	conj	_	InflectionType=Weak|Proper=True
10	Dialekte	_	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur|Person=3	5	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	12	punct	_	_
12	der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	10	dep	_	_
13	jedoch	_	CCONJ	CC	_	20	cc	_	_
14	nicht	_	ADV	RB	Degree=Pos|Polarity=Neg	20	advmod	_	_
15	in	_	ADP	IN	_	18	case	_	_
16	der	_	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	18	det	_	_
17	Südsamischen	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|Person=3	18	amod	_	InflectionType=Weak|Proper=True
18	Sprache	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	20	obl	_	_
19	zu	_	PART	RP	_	20	mark	_	_
20	finden	_	VERB	VB	_	5	conj	_	SpaceAfter=No
21	,	_	PUNCT	,	_	26	punct	_	_
22	die	_	PRON	REL	Case=Nom|Gender=Fem|Number=Sing|Person=3	26	nsubj	_	_
23	eine	_	DET	PDT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	25	det:predet	_	_
24	andere	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	25	det	_	_
25	Sprachgeschichte	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	26	obj	_	_
26	aufweist	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	acl:relcl	_	SpaceAfter=No
27	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 25 dep	color:blue
1	Rafferty	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	nahm	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	auf	_	ADP	IN	_	5	case	_	_
4	dem	_	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Album	_	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
6	„	_	PUNCT	``	_	9	punct	_	SpaceAfter=No
7	Over	_	ADP	IN	_	9	case	_	Proper=True
8	My	_	PRON	DTP$	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	9	nmod:poss	_	Proper=True
9	Head	_	NOUN	NN	Number=Sing|Person=3	5	nmod	_	Proper=True|SpaceAfter=No
10	“	_	PUNCT	''	_	9	punct	_	_
11	von	_	ADP	IN	_	12	case	_	_
12	1994	_	NUM	CD	NumType=Card	5	nmod	_	_
13	eine	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	15	det	_	_
14	neue	_	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Person=3	15	amod	_	InflectionType=Mixed
15	Version	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	2	obj	_	_
16	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	19	det	_	_
17	Humblebums	_	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing|Person=3	19	compound	_	SpaceAfter=No
18	-	_	PUNCT	-	_	17	punct	_	SpaceAfter=No
19	Songs	_	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	15	nmod	_	_
20	„	_	PUNCT	``	_	25	punct	_	SpaceAfter=No
21	Her	_	PRON	DTP$	Case=Nom|Gender=Masc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	22	nmod:poss	_	Proper=True
22	fahter	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	25	nsubj	_	Proper=True
23	didn'	_	AUX	''	Mood=Ind|Number=Sing|Person=3|Tense=Past	25	aux	_	Proper=True|SpaceAfter=No
24	t	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	25	aux	_	Proper=True
25	like	_	VERB	VB	_	19	dep	_	Proper=True
26	me	_	PRON	PRP	Case=Acc|Number=Sing|Person=1	25	obj	_	Proper=True
27	anyway	_	ADV	RB	Degree=Pos	25	advmod	_	Proper=True|SpaceAfter=No
28	“	_	PUNCT	''	_	25	punct	_	_
29	auf	_	VERB	DC	_	2	compound:prt	_	SpaceAfter=No
30	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 dep	color:blue
1	Die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	2	det	_	_
2	Erforschung	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	nsubj:pass	_	_
3	der	_	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3	4	det	_	_
4	Insel	_	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing|Person=3	2	nmod	_	_
5	und	_	CCONJ	CC	_	10	dep	_	_
6	und	_	CCONJ	CC	_	7	cc	_	_
7	Expeditionen	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	2	conj	_	_
8	dorthin	_	ADV	RB	Degree=Pos	7	advmod	_	_
9	werden	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux:pass	_	_
10	fortgesetzt	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


