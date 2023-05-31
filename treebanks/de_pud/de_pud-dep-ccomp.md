---
layout: base
title:  'Statistics of ccomp in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `ccomp`

This relation is universal.

169 nodes (1%) are attached to their parents as `ccomp`.

127 instances of `ccomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2958579881657.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (117; 69% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (17; 10% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (14; 8% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 ccomp	color:blue
1	„	„	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
3	liebte	lieben	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Past	9	ccomp	_	_
4	die	der	DET	DT	Case=Acc|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
5	tropischen	tropisch	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	InflectionType=Weak
6	Farben	Farbe	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	SpaceAfter=No
7	“	“	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	,	PUNCT	,	_	3	punct	_	_
9	sagt	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp	color:blue
1	González	González	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	Anaya	Anaya	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	1	flat:name	_	_
3	sagt	sagen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	12	punct	_	_
5	dass	dass	SCONJ	CC	_	12	mark	_	_
6	allein	allein	ADV	RB	Degree=Pos	9	advmod	_	_
7	für	für	ADP	IN	_	9	case	_	_
8	die	der	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Parade	Parade	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	_
10	1200	1200	NUM	CD	NumType=Card	11	nummod	_	_
11	Freiwillige	freiwillig	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	InflectionType=Strong
12	tätig	tätig	ADJ	JJ	Degree=Pos	3	ccomp	_	_
13	sind	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 ccomp	color:blue
1	„	„	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	ETA	ETA	PROPN	NNP	Case=Nom|Number=Sing	5	nsubj	_	_
3	ist	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	ein	ein	DET	DT	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	5	det	_	_
5	Auslaufmodell	Auslaufmodell	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	8	ccomp	_	SpaceAfter=No
6	“	“	PUNCT	''	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	,	_	5	punct	_	_
8	verriet	verraten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
9	die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	französische	französisch	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	InflectionType=Weak|Proper=True
11	Division	Division	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	8	punct	_	_

~~~


