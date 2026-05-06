---
layout: base
title:  'Statistics of csubj in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `csubj`

This relation is universal.

53 nodes (1%) are attached to their parents as `csubj`.

49 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13207547169811.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (17; 32% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (16; 30% instances), <tt><a href="he_postrab-pos-ADV.html">ADV</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="he_postrab-pos-AUX.html">AUX</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="he_postrab-pos-AUX.html">AUX</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	יותר	יותר	ADV	ADV	_	2	advmod	_	_
2	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	תספיק	הספיק	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Fut	2	csubj	_	_
5	ל	ל	ADP	ADP	_	6	case	_	_
6	עניה	עני	NOUN	NOUN	Gender=Fem|Number=Sing	4	obl	_	_
7	א'	א	NUM	NUM	_	6	nummod	_	_
8	כל	כל	DET	DET	_	10	advmod	_	_
9	כך	כך	PRON	PRON	_	8	fixed	_	_
10	שמן	שמן	NOUN	NOUN	Gender=Masc|Number=Sing	4	obj	_	_
11	כדי	כדי	SCONJ	SCONJ	_	13	mark	_	_
12	ש	ש	SCONJ	SCONJ	_	11	fixed	_	_
13	תדליק	הדליק	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Fut	10	advcl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	אין	אין	VERB	VERB	_	0	root	_	_
2	לסמוך	סמך	VERB	VERB	VerbForm=Inf	1	csubj	_	_
3	לומר	אמר	VERB	VERB	VerbForm=Inf	2	xcomp	_	_
4	עלי	על	ADP	ADP	_	5	case	_	_
5	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	3	obl	_	_
6	דין	דין	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	מעיין	מעיין	NOUN	NOUN	Gender=Masc|Number=Sing	6	compound:smixut	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	מקום	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
10	ה	ה	SCONJ	SCONJ	_	11	mark	_	_
11	נוגע	נגע	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	9	acl:relcl	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	קולא	קולא	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	_
14	כ	כ	ADP	ADP	Definite=Def	15	case	_	_
15	מבואר	בואר	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	1	obl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	אבל	אבל	CCONJ	CCONJ	_	8	cc	_	_
2	מ	מ	ADP	ADP	_	4	case	_	_
3	כל	כל	DET	DET	_	4	det	_	_
4	מקום	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	8	obl	_	_
5	גם	גם	ADV	ADV	_	7	advmod	_	_
6	ל	ל	ADP	ADP	_	7	case	_	_
7	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	9	obl	_	_
8	אפשר	אפשר	ADV	ADV	_	0	root	_	_
9	למצוא	מצא	VERB	VERB	VerbForm=Inf	8	csubj	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	9	obl	_	_
12	קצת	קצת	DET	DET	_	13	det	_	_
13	טעם	טעם	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	_
14	לפי	לפי	ADP	ADP	_	15	case	_	_
15	מנהג	מנהג	NOUN	NOUN	Gender=Masc|Number=Sing	9	obl	_	_
16	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	15	nmod:poss	_	_
17	של	של	ADP	ADP	_	18	case	_	_
18	עולם	עולם	NOUN	NOUN	Gender=Masc|Number=Sing	15	nmod	_	_

~~~


