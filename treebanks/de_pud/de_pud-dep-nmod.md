---
layout: base
title:  'Statistics of nmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="de_pud-dep-nmod-gmod.html">nmod:gmod</a></tt>, <tt><a href="de_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

1101 nodes (5%) are attached to their parents as `nmod`.

1063 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81198910081744.

The following 20 pairs of parts of speech are connected with `nmod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (818; 74% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (206; 19% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	Über	über	ADP	IN	_	3	case	_	_
2	330	330	NUM	CD	NumType=Card	3	nummod	_	_
3	Besatzungsmitglieder	Besatzungsmitglieder	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur|Person=3	6	nsubj	_	_
4	sind	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	cop	_	_
5	an	an	ADP	IN	_	6	case	_	_
6	Bord	Bord	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	0	root	_	_
7	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|Person=3	8	det	_	_
8	Schiffes	Schiff	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing|Person=3	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Dies	dies	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Person=3	2	nsubj	_	_
2	geschah	geschehen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	mit	mit	ADP	IN	_	5	case	_	_
4	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|Person=3	5	det	_	_
5	Schiff	Schiff	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	2	obl	_	_
6	aus	aus	ADP	IN	_	7	case	_	_
7	Kontinentaleuropa	Kontinentaleuropa	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing|Person=3	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	John	John	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
2	von	von	ADP	IN	_	3	case	_	Proper=True
3	Gaunt	Gaunt	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing|Person=3	1	nmod	_	_
4	starb	sterben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	1399	1399	NUM	CD	NumType=Card	4	obl:tmod	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


