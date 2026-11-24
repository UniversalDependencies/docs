---
layout: base
title:  'Statistics of xcomp in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `xcomp`

This relation is universal.

9 nodes (0%) are attached to their parents as `xcomp`.

8 instances of `xcomp` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-NUM.html">NUM</a></tt> (8; 89% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	Eko	eka	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	3	nummod	_	_
2	sāvakānaṃ	sāvaka	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
3	sannipāto	sannipāta	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	ahosi	bhavati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	aṭṭhasaṭṭhi	aṭṭhasaṭṭhi	NUM	_	NumType=Card	6	compound:dg	_	_
6	bhikkhu	bhikkhu	NOUN	_	_	7	compound:tp	_	_
7	sata	sata	NUM	_	NumType=Card	8	compound:dg	_	_
8	sahassaṃ	sahassa	NUM	_	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 xcomp	color:blue
1	Atha	atha	ADV	_	_	14	advmod	_	_
2	kho	kho	PART	_	_	14	discourse	_	_
3	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	14	vocative	_	_
4	vipassī	vipassin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
5	bodhisatto	bodhisatta	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	aparena	apara	ADJ	_	Case=Ins|Gender=Masc|Number=Sing	7	amod	_	_
7	samayena	samaya	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	14	obl	_	_
8	pañcasu	pañca	NUM	_	Case=Loc|Number=Plur|NumType=Card	10	nummod	_	_
9	upādāna	upādāna	NOUN	_	_	10	compound:tp	_	_
10	kkhandhesu	khandha	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	13	obl	_	_
11	udaya	udaya	NOUN	_	_	12	compound:dv	_	_
12	bbaya	vaya	NOUN	_	_	13	compound:tp	_	_
13	ānupassī	anupassin	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	14	xcomp	_	_
14	vihāsi	viharati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


