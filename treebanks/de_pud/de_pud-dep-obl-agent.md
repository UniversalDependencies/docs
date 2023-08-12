---
layout: base
title:  'Statistics of obl:agent in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="de_pud-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="de_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

29 nodes (0%) are attached to their parents as `obl:agent`.

27 instances of `obl:agent` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44827586206897.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (23; 79% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (5; 17% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 obl:agent	color:blue
1	Von	von	ADP	IN	_	4	case	_	_
2	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	ersten	erst	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	4	amod	_	InflectionType=Weak
4	Edition	Edition	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	9	obl:agent	_	_
5	wurden	werden	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	9	aux:pass	_	_
6	lediglich	lediglich	ADV	RB	Degree=Pos	7	advmod	_	_
7	3000	3000	NUM	CD	NumType=Card	8	nummod	_	_
8	Exemplare	Exemplar	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	9	nsubj:pass	_	_
9	aufgelegt	auflegen	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:agent	color:blue
1	Die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Winteruniversiade	Winteruniversiade	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
3	2019	2019	NUM	CD	NumType=Card	2	obl:tmod	_	Proper=True
4	wird	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:pass	_	_
5	von	von	ADP	IN	_	6	case	_	_
6	Krasnojarsk	Krasnojarsk	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	7	obl:agent	_	_
7	ausgerichtet	ausrichten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 obl:agent	color:blue
1	Laut	laut	ADP	IN	_	3	case	_	_
2	Le	le	DET	DT	Definite=Def|Foreign=Yes|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Lang=fr|Proper=True
3	Figaro	Figaro	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	15	obl	_	Lang=fr
4	könnten	können	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	15	aux	_	_
5	durch	durch	ADP	IN	_	7	case	_	_
6	diesen	dieser	DET	DT	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	Plan	Plan	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	15	obl	_	_
8	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Regierung	Regierung	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
10	42	42	NUM	CD	NumType=Card	11	nummod	_	_
11	Mio	Mio	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	13	nmod	_	SpaceAfter=No|Proper=True
12	.	.	PUNCT	.	_	11	punct	_	_
13	Euro	Euro	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	15	nsubj	_	Proper=True
14	frei	frei	ADJ	JJ	Degree=Pos	15	xcomp	_	_
15	werden	werden	VERB	VB	_	0	root	_	SpaceAfter=No
16	,	,	PUNCT	,	_	24	punct	_	_
17	von	von	ADP	IN	_	18	case	_	_
18	denen	der	PRON	REL	Case=Dat|Number=Plur|PronType=Dem,Rel	24	obl:agent	_	_
19	15,5	15,5	NUM	CD	NumType=Card	20	nummod	_	_
20	Mio.	Mio.	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	24	nsubj:pass	_	_
21	für	für	ADP	IN	_	23	case	_	_
22	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	Sicherheit	Sicherheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	24	obl	_	_
24	eingesetzt	einsetzen	VERB	VBN	Tense=Past	13	acl:relcl	_	_
25	werden	werden	AUX	VB	_	24	aux:pass	_	_
26	würden	werden	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Past	24	aux	_	SpaceAfter=No
27	.	.	PUNCT	.	_	15	punct	_	_

~~~


