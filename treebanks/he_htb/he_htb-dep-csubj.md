---
layout: base
title:  'Statistics of csubj in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `csubj`

This relation is universal.

12 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (11; 92% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	יש	יש	VERB	VERB	HebExistential=Yes	0	root	_	_
2	ה	ה	SCONJ	SCONJ	_	3	mark	_	_
3	מקבלים	קיבל	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	1	csubj	_	_
4	תקציב	תקציב	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
5	שנתי	שנתי	ADJ	ADJ	Gender=Masc|Number=Sing	4	amod	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	סך	סך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	4	nmod	_	_
8	350,000	350,000	NUM	NUM	_	9	nummod	_	_
9	שקל	שקל	NOUN	NOUN	Gender=Masc|Number=Sing	7	compound:smixut	_	_
10	בלבד	בלבד	ADV	ADV	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	היו	היה	AUX	AUX	Gender=Fem,Masc|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	0	root	_	_
2	בין_	בין	ADP	ADP	_	3	case	_	_
3	_הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	1	obl	_	_
4	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
5	פרצו	פרץ	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	1	csubj	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	בכי	בכי	NOUN	NOUN	Gender=Masc|Number=Sing	5	obl	_	_
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


