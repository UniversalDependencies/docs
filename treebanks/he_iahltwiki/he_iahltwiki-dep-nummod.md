---
layout: base
title:  'Statistics of nummod in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nummod`

This relation is universal.

1149 nodes (1%) are attached to their parents as `nummod`.

1017 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19060052219321.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (930; 81% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (89; 8% instances), <tt><a href="he_iahltwiki-pos-SYM.html">SYM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (64; 6% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (35; 3% instances), <tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="he_iahltwiki-pos-X.html">X</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	שימוש	שימוש	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	ב	ב	ADP	ADP	_	4	case	_	_
4	פלזמה	פלזמה	NOUN	NOUN	Gender=Fem|Number=Sing	2	nmod	_	_
5	ו	ו	CCONJ	CCONJ	_	6	cc	_	_
6	מוצרי	מוצר	NOUN	NOUN	Gender=Masc|Number=Plur	4	conj	_	_
7	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
8	התפתח	התפתח	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
9	במשך	במשך	ADP	ADP	_	10	case	_	_
10	תקופה	תקופה	NOUN	NOUN	Gender=Fem|Number=Sing	8	obl	_	_
11	של	של	ADP	ADP	Case=Gen	13	case	_	_
12	ארבעה	ארבע	NUM	NUM	Gender=Masc|NumType=Card	13	nummod	_	_
13	עשורים	עשור	NOUN	NOUN	Gender=Masc|Number=Plur	10	nmod:poss	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	נכון	נכון	ADV	ADV	_	3	case	_	_
2	ל	ל	ADP	ADP	_	1	fixed	_	_
3	שנת	שנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	6	obl	_	Entity=(TIMEX
4	2021	2021	NUM	NUM	_	3	compound	_	Entity=TIMEX)|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	3	punct	_	_
6	נכללים	נכלל	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
9	כ	כ	ADV	ADV	_	12	advmod	_	_
10	חמישה	חמש	NUM	NUM	Gender=Masc|NumType=Card	11	nummod	_	_
11	מיליון	מיליון	NUM	NUM	Gender=Masc|Number=Sing	12	nummod	_	_
12	פליטים	פליט	NOUN	NOUN	Gender=Masc|Number=Plur	6	nsubj:pass	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	ערך	ערך	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
2	HBA1C	HBA1C	PROPN	PROPN	_	1	compound	_	_
3	ה	ה	SCONJ	SCONJ	_	4	mark	_	_
4	נמוך	נמוך	ADJ	ADJ	Gender=Masc|Number=Sing	1	acl:relcl	_	_
5	מ	מ	ADP	ADP	_	8	case	_	SpaceAfter=No
6	-	-	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
7	7	7	NUM	NUM	_	8	nummod	_	_
8	%	%	SYM	SYM	Gender=Masc|Number=Plur	4	obl	_	_
9	(	(	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
10	ממוצע	ממוצע	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	8	appos	_	_
11	גלוקוז	גלוקוז	NOUN	NOUN	Gender=Masc|Number=Sing	10	compound	_	Entity=(MISC)
12	ב	ב	ADP	ADP	Definite=Def|PronType=Art	13	case	_	_
13	דם	דם	NOUN	NOUN	Gender=Masc|Number=Sing	10	nmod	_	_
14	של	של	ADP	ADP	Case=Gen	16	case	_	_
15	154	154	NUM	NUM	_	16	nummod	_	_
16	gl/dl	gl/dl	NOUN	NOUN	_	10	nmod:poss	_	_
17	)	)	PUNCT	PUNCT	_	10	punct	_	_

~~~


