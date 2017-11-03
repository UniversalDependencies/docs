---
layout: base
title:  'Statistics of ccomp in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `ccomp`

This relation is universal.

170 nodes (1%) are attached to their parents as `ccomp`.

128 instances of `ccomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1705882352941.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (116; 68% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (19; 11% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (14; 8% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 ccomp	color:blue
1	„	_	PUNCT	``	_	3	punct	_	SpaceAfter=No
2	Ich	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
3	liebte	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Past	9	ccomp	_	_
4	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|Person=3	6	det	_	_
5	tropischen	_	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur|Person=3	6	amod	_	InflectionType=Weak
6	Farben	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	3	obj	_	SpaceAfter=No
7	“	_	PUNCT	''	_	3	punct	_	SpaceAfter=No
8	,	_	PUNCT	,	_	3	punct	_	_
9	sagt	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	er	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp	color:blue
1	González	_	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
2	Anaya	_	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing|Person=3	1	flat:name	_	_
3	sagt	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	12	punct	_	_
5	dass	_	SCONJ	CC	_	12	mark	_	_
6	allein	_	ADV	RB	Degree=Pos	9	advmod	_	_
7	für	_	ADP	IN	_	9	case	_	_
8	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|Person=3	9	det	_	_
9	Parade	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	12	obl	_	_
10	1200	_	NUM	CD	NumType=Card	11	nummod	_	_
11	Freiwillige	_	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur|Person=3	12	nsubj	_	InflectionType=Strong
12	tätig	_	ADJ	JJ	Degree=Pos	3	ccomp	_	_
13	sind	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	cop	_	SpaceAfter=No
14	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 ccomp	color:blue
1	„	_	PUNCT	``	_	5	punct	_	SpaceAfter=No
2	ETA	_	PROPN	NNP	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
3	ist	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
4	ein	_	DET	DT	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Auslaufmodell	_	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing|Person=3	8	ccomp	_	SpaceAfter=No
6	“	_	PUNCT	''	_	5	punct	_	SpaceAfter=No
7	,	_	PUNCT	,	_	5	punct	_	_
8	verriet	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
9	die	_	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|Person=3	11	det	_	_
10	französische	_	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Person=3	11	amod	_	InflectionType=Weak|Proper=True
11	Division	_	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	8	punct	_	_

~~~


