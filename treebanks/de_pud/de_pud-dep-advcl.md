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
1	Wenn	wenn	SCONJ	CC	_	5	mark	_	_
2	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3	4	det	_	_
3	türkischer	türkisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Person=3	4	amod	_	InflectionType=Mixed|Proper=True
4	Mitarbeiter	Mitarbeiter	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	kündigt	kündigen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	kommen	kommen	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
8	die	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Person=3	10	det	_	_
9	türkischen	türkisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Person=3	10	amod	_	InflectionType=Weak|Proper=True
10	Betriebsräte	Betriebsrat	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	7	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advcl	color:blue
1	George	George	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	_
2	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	cop	_	_
3	von	von	ADP	IN	_	11	case	_	_
4	ihren	ihr	PRON	DTP$	Case=Dat|Gender=Fem|Gender[psor]=Masc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Prs	11	nmod:poss	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	wie	wie	ADV	WRB	_	8	advmod	_	_
7	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
8	fand	finden	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	advcl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	lockeren	locker	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Person=3	11	amod	_	InflectionType=Mixed
11	Moralvorstellungen	Moralvorstellung	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur|Person=3	12	obl	_	_
12	entsetzt	entsetzen	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 advcl	color:blue
1	Reagan	Reagan	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
3	überzeugt	überzeugt	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	9	punct	_	_
5	dass	daß	SCONJ	CC	_	9	mark	_	_
6	Gott	Gott	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	_
7	sein	sein	PRON	DTP$	Case=Acc|Gender=Neut|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Prs	8	nmod:poss	_	_
8	Leben	Leben	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing|Person=3	9	obj	_	_
9	gerettet	retten	VERB	VBN	Tense=Past	3	ccomp	_	_
10	hatte	haben	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	aux	_	SpaceAfter=No
11	,	,	PUNCT	,	_	17	punct	_	_
12	weil	weil	SCONJ	CC	_	17	mark	_	_
13	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	_
14	noch	noch	ADV	RB	Degree=Pos	17	advmod	_	_
15	zu	zu	ADP	IN	_	16	case	_	_
16	Höherem	Höhere	NOUN	NNA	Case=Dat|Gender=Neut|Number=Sing|Person=3	17	obl	_	InflectionType=Strong
17	berufen	berufen	ADJ	JJ	Degree=Pos	9	advcl	_	_
18	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	17	cop	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


