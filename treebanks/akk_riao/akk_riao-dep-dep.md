---
layout: base
title:  'Statistics of dep in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `dep`

This relation is universal.

258 nodes (1%) are attached to their parents as `dep`.

174 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25193798449612.

The following 12 pairs of parts of speech are connected with `dep`: <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-ADP.html">ADP</a></tt> (83; 32% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (80; 31% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (48; 19% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (22; 9% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (9; 3% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (5; 2% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	arki	warki	ADP	PRP	_	2	dep	2:dep	EGIR-šu₂
2	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	3	obl	3:obl	_
3	x	_	VERB	u	_	0	root	0:root	x

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dep	color:blue
1	Aššur-naṣir-apli	Aššur-naṣir-apli_II	PROPN	RN	Gender=Masc	0	root	0:root	{m}AŠ-PAP-A
2	iššak	iššiakku	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	1	appos	1:appos	ŠID
3	Aššur	Aššur	PROPN	DN	Gender=Masc	2	nmod:poss	2:nmod:poss	AŠ
4	mār	māru	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	1	appos	1:appos	A
5	Tukulti-Ninurta	Tukulti-Ninurta_II	PROPN	RN	Gender=Masc	4	nmod:poss	4:nmod:poss	TUKUL-MAŠ
6	iššak	iššiakku	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	5	appos	5:appos	ŠID
7	Aššur	Aššur	PROPN	DN	Gender=Masc	6	nmod:poss	6:nmod:poss	AŠ-ma
8	ma	_	PART	_	_	7	dep	7:dep	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	ina	ina	ADP	PRP	_	2	case	2:case	ina
2	ūme	ūmu	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Suffixal|Number=Sing	13	obl	13:obl	UD.MEŠ-šu-ma
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det	2:det	_
4	ma	_	PART	_	_	2	dep	2:dep	_
5	ina	ina	ADP	PRP	_	6	case	6:case	ina
6	pî	pû	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	13	obl	13:obl	pi-i
7	ilāni	ilu	NOUN	N	Gender=Masc|Number=Plur	6	nmod:poss	6:nmod:poss	DINGIR.MEŠ
8	rabûti	rabû	ADJ	AJ	Gender=Masc|Number=Plur	7	amod	7:amod	GAL.MEŠ
9	šarrūt	_	NOUN	_	Gender=Fem|Nounbase=Suffixal|Number=Sing	13	nsubj	13:nsubj	_
10	ī	_	PRON	_	Number=Sing|Person=1	9	det:poss	9:det:poss	_
11	bēlūt	_	NOUN	_	Gender=Fem|Nounbase=Suffixal|Number=Sing	9	conj	9:conj	_
12	ī	_	PRON	_	Number=Sing|Person=1	11	det:poss	11:det:poss	_
13	ūṣâ	waṣû	VERB	V	Gender=Fem|Mood=Ind|Number=Plur|Person=3|Tense=Past|Ventive=Yes|VerbForm=Finite|Verbstem=G	0	root	0:root	_

~~~


