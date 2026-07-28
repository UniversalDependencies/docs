---
layout: base
title:  'Statistics of obj in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `obj`

This relation is universal.

367 nodes (5%) are attached to their parents as `obj`.

360 instances of `obj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89373297002725.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (230; 63% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (114; 31% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="he_postrab-pos-AUX.html">AUX</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obj	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 obj	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	שכר	שכר	NOUN	NOUN	Gender=Masc|Number=Sing	12	obl	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	הניח	הניח	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	2	acl:relcl	_	_
5	כעס	כעס	NOUN	NOUN	Gender=Masc|Number=Sing	4	obj	_	_
6	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nmod:poss	_	_
7	ו	ו	CCONJ	CCONJ	_	8	cc	_	_
8	חמת	חמה	NOUN	NOUN	Gender=Fem|Number=Sing	5	conj	_	_
9	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	8	nmod:poss	_	_
10	של	של	ADP	ADP	_	11	case	_	_
11	הקב"ה	הקב"ה	PROPN	PROPN	Gender=Masc|Number=Sing	5	nmod:poss	_	_
12	ברכ	בירך	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
13	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	12	obj	_	_
14	ב	ב	ADP	ADP	_	15	case	_	_
15	מדת	מידה	NOUN	NOUN	Gender=Fem|Number=Sing	12	obl	_	_
16	ה	ה	DET	DET	_	17	det	_	_
17	שלום	שלום	NOUN	NOUN	Gender=Masc|Number=Sing	15	compound:smixut	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obj	color:blue
1	אסור	אסור	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
2	לתת	נתן	VERB	VERB	VerbForm=Inf	1	csubj	_	_
3	אות	את	ADP	ADP	_	4	case	_	_
4	ם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	5	det	_	_
5	אמצעיים	אמצעי	ADJ	ADJ	Gender=Masc|Number=Plur	2	obj	_	_
6	בין	בין	ADP	ADP	_	7	case	_	_
7	השם	השם	PROPN	PROPN	_	2	obl	_	_
8	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
9	בינינ	בין	ADP	ADP	_	10	case	_	_
10	ו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1	7	conj	_	_

~~~


