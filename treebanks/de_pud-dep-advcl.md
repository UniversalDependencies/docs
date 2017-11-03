---
layout: base
title:  'Statistics of advcl in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `advcl`

This relation is universal.

220 nodes (1%) are attached to their parents as `advcl`.

157 instances of `advcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.3909090909091.

The following 13 pairs of parts of speech are connected with `advcl`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (154; 70% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (22; 10% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (13; 6% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (11; 5% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advcl	color:blue
1	Wenn	_	SCONJ	CC	_	5	mark	_	_
2	ein	_	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	4	det	_	_
3	türkischer	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	4	amod	_	InflectionType=Mixed|Proper=True
4	Mitarbeiter	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	kündigt	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	advcl	_	SpaceAfter=No
6	,	_	PUNCT	,	_	5	punct	_	_
7	kommen	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
8	die	_	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Person=3	10	det	_	_
9	türkischen	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Person=3	10	amod	_	InflectionType=Weak|Proper=True
10	Betriebsräte	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	7	nsubj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advcl	color:blue
1	George	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	_
2	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	cop	_	_
3	von	_	ADP	IN	_	11	case	_	_
4	ihren	_	PRON	DTP$	Case=Dat|Gender=Fem|Gender[psor]=Masc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Prs	11	nmod:poss	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	wie	_	ADV	WRB	_	8	advmod	_	_
7	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	fand	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	advcl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	8	punct	_	_
10	lockeren	_	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Person=3	11	amod	_	InflectionType=Mixed
11	Moralvorstellungen	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	12	obl	_	_
12	entsetzt	_	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 advcl	color:blue
1	Reagan	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
3	überzeugt	_	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	9	punct	_	_
5	dass	_	SCONJ	CC	_	9	mark	_	_
6	Gott	_	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	_
7	sein	_	PRON	DTP$	Case=Acc|Gender=Neut|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	8	nmod:poss	_	_
8	Leben	_	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	9	obj	_	_
9	gerettet	_	VERB	VBN	Tense=Past	3	ccomp	_	_
10	hatte	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	aux	_	SpaceAfter=No
11	,	_	PUNCT	,	_	17	punct	_	_
12	weil	_	SCONJ	CC	_	17	mark	_	_
13	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	_
14	noch	_	ADV	RB	Degree=Pos	17	advmod	_	_
15	zu	_	ADP	IN	_	16	case	_	_
16	Höherem	_	NOUN	NNA	Case=Dat|Gender=Neut|Number=Sing|Person=3	17	obl	_	InflectionType=Strong
17	berufen	_	ADJ	JJ	Degree=Pos	9	advcl	_	_
18	war	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	17	cop	_	SpaceAfter=No
19	.	_	PUNCT	.	_	3	punct	_	_

~~~


