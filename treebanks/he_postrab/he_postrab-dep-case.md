---
layout: base
title:  'Statistics of case in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `case`

This relation is universal.
There are 2 language-specific subtypes of `case`: <tt><a href="he_postrab-dep-case-acc.html">case:acc</a></tt>, <tt><a href="he_postrab-dep-case-gen.html">case:gen</a></tt>.

1124 nodes (14%) are attached to their parents as `case`.

1117 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15658362989324.

The following 15 pairs of parts of speech are connected with `case`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (667; 59% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (309; 27% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (41; 4% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (39; 3% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (19; 2% instances), <tt><a href="he_postrab-pos-ADV.html">ADV</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (15; 1% instances), <tt><a href="he_postrab-pos-DET.html">DET</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (13; 1% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (10; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="he_postrab-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	צריך	צריך	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3	0	root	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	ישאר	נשאר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	1	csubj	_	_
4	אחר	אחר	ADP	ADP	_	5	case	_	_
5	הוצאת	הוצאה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
6	ה	ה	DET	DET	_	7	det	_	_
7	פסולת	פסולת	NOUN	NOUN	Gender=Fem|Number=Sing	5	compound:smixut	_	_
8	כ	כ	ADP	ADP	_	9	case	_	_
9	גרוגרת	גרוגרת	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	אוכל	אוכל	NOUN	NOUN	Gender=Masc|Number=Sing	8	dislocated	_	_
2	מתוך	מתוך	ADP	ADP	_	3	case	_	_
3	פסולת	פסולת	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod	_	_
4	אין	אין	ADV	ADV	_	8	advmod	_	_
5	דרך	דרך	NOUN	NOUN	Gender=Fem|Number=Sing	8	nsubj:cop	_	_
6	ברירה	ברירה	NOUN	NOUN	Gender=Fem|Number=Sing	5	compound:smixut	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	כך	כך	PRON	PRON	_	0	root	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 case	color:blue
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


