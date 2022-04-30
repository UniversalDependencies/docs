---
layout: base
title:  'Statistics of appos in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `appos`

This relation is universal.

1911 nodes (8%) are attached to their parents as `appos`.

1911 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.52223966509681.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1612; 84% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (192; 10% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (72; 4% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (22; 1% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	ēkal	ēkallu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	0	root	_	E₂.GAL
2	x	_	PROPN	u	Gender=Masc	1	nmod:poss	_	x
3	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	A
4	Aššur-dan	Aššur-dan_II	PROPN	RN	Gender=Masc	3	nmod:poss	_	aš-šur-KAL-an

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	maddattu	maddattu	NOUN	N	Case=Nom|Gender=Fem|NounBase=Free|Number=Sing	10	obj	_	_
2	ša	ša	ADP	DET	_	3	case	_	_
3	Šura	Šura	PROPN	SN	_	1	nmod	_	_
4	alpī	alpu	NOUN	N	Gender=Masc|Number=Plur	1	appos	_	_
5	immerī	immeru	NOUN	N	Gender=Masc|Number=Plur	4	conj	_	_
6	karānī	karānu	NOUN	N	Gender=Masc|Number=Plur	4	conj	_	_
7	diqārī	diqāru	NOUN	N	Gender=Masc|Number=Plur	4	conj	_	_
8	ina	ina	ADP	PRP	_	9	case	_	_
9	Irsia	Irsia	PROPN	SN	_	10	obl	_	_
10	attahar	mahāru	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Amma-baʾli	Ammi-baʾal	PROPN	PN	Gender=Masc	5	obl	_	_
2	mar-Zamani	Bit-Zamani	PROPN	EN	Gender=Masc	1	appos	_	_
3	rabûti	rabû	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Plur	5	nsubj	_	_
4	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	3	det:poss	_	_
5	ibbalkitū	nabalkutu	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|VerbStem=N	0	root	_	_
6	ma	_	CCONJ	_	_	7	cc	_	_
7	idūkū	dâku	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|VerbStem=G	5	conj	_	_
8	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	7	obj	_	_

~~~


