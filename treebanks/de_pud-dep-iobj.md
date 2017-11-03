---
layout: base
title:  'Statistics of iobj in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `iobj`

This relation is universal.

95 nodes (0%) are attached to their parents as `iobj`.

62 instances of `iobj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51578947368421.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (44; 46% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (31; 33% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (9; 9% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 iobj	color:blue
1	An	an	ADP	APPR	_	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|Person=3	3	det	_	_
3	Tag	_	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	6	obl	_	_
4	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Rennens	_	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing|Person=3	3	nmod	_	_
6	wohnte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
7	Elliott	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	der	_	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	9	det	_	_
9	Beerdigung	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	6	iobj	_	_
10	seines	_	PRON	DTP$	Case=Gen|Gender=Masc|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	11	nmod:poss	_	_
11	Vaters	_	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	9	nmod	_	_
12	bei	_	VERB	DC	_	6	compound:prt	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Ich	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	frage	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	mich	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Rcp	2	iobj	_	_
4	auch	_	ADV	RB	Degree=Pos	2	advmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	12	punct	_	_
6	ob	_	SCONJ	CC	_	12	mark	_	_
7	der	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	9	det	_	_
8	Davis	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	compound	_	_
9	Cup	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Proper=True
10	eine	_	DET	DT	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Person=3	11	det	_	_
11	Rolle	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	12	obj	_	_
12	spielte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	ccomp	_	SpaceAfter=No
13	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 3 iobj	color:blue
1	Dies	_	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	17	nsubj:pass	_	_
2	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	17	aux	_	_
3	MPS	_	PROPN	NNP	Case=Dat|Number=Sing|Person=3	17	iobj	_	_
4	nach	_	ADP	IN	_	6	case	_	_
5	der	_	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	6	det	_	_
6	Entscheidung	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	17	obl	_	_
7	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	10	det	_	_
8	Ex	_	X	AFX	_	10	compound	_	SpaceAfter=No
9	-	_	PUNCT	-	_	8	punct	_	SpaceAfter=No
10	Ministers	_	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	6	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	15	punct	_	_
12	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	13	det	_	_
13	Partei	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	15	obj	_	_
14	zu	_	PART	RP	_	15	mark	_	_
15	verlassen	_	VERB	VB	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
16	,	_	PUNCT	,	_	6	punct	_	_
17	mitgeteilt	_	VERB	VBN	Tense=Past	0	root	_	_
18	worden	_	AUX	VBN	Tense=Past	17	aux:pass	_	SpaceAfter=No
19	.	_	PUNCT	.	_	17	punct	_	_

~~~


