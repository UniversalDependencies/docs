---
layout: base
title:  'Statistics of nmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="de_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

1099 nodes (5%) are attached to their parents as `nmod`.

1063 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81164695177434.

The following 20 pairs of parts of speech are connected with `nmod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (788; 72% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (206; 19% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (23; 2% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="de_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="de_pud-pos-DET.html">DET</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="de_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	Über	über	ADP	IN	_	3	case	_	_
2	330	330	NUM	CD	NumType=Card	3	nummod	_	_
3	Besatzungsmitglieder	Besatzungsmitglieder	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
4	sind	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	cop	_	_
5	an	an	ADP	IN	_	6	case	_	_
6	Bord	Bord	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	0	root	_	_
7	des	der	DET	DT	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	Schiffes	Schiff	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Dies	dieser	DET	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	geschah	geschehen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	mit	mit	ADP	IN	_	5	case	_	_
4	dem	der	DET	DT	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Schiff	Schiff	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	2	obl	_	_
6	aus	aus	ADP	IN	_	7	case	_	_
7	Kontinentaleuropa	Kontinentaleuropa	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 nmod	color:blue
1	Anders	anders	ADV	RB	Degree=Pos	16	advmod	_	_
2	als	als	SCONJ	CC	_	3	case	_	_
3	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	obl	_	_
4	von	von	ADP	APPR	_	7	case	_	_
5	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	28.	28.	ADJ	CC	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	InflectionType=Weak
7	Oktober	Oktober	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	1	punct	_	_
9	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	16	aux	_	_
10	der	der	DET	DT	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Brief	Brief	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	16	nsubj:pass	_	_
12	von	von	ADP	IN	_	13	case	_	_
13	Herrn	Herr	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	11	nmod	_	_
14	Comey	Comey	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	13	appos	_	_
15	kaum	kaum	ADV	RB	Degree=Pos	16	advmod	_	_
16	kommentiert	kommentieren	VERB	VBN	Tense=Past	0	root	_	_
17	worden	werden	AUX	VBN	Tense=Past	16	aux:pass	_	SpaceAfter=No
18	.	.	PUNCT	.	_	16	punct	_	_

~~~


