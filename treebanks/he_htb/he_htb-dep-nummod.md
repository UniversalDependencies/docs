---
layout: base
title:  'Statistics of nummod in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `nummod`

This relation is universal.

2126 nodes (1%) are attached to their parents as `nummod`.

1618 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22248353715898.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (1600; 75% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (363; 17% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (134; 6% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-X.html">X</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	עצה	עצה	NOUN	NOUN	Gender=Fem|Number=Sing	5	nsubj	_	_
2	מספר	מספר	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod	_	HebSource=ConvUncertainLabel
3	1	1	NUM	NUM	_	2	nummod	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	1	punct	_	_
5	הצטרפו	הצטרף	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Mood=Imp|Number=Plur|Person=2	0	root	_	_
6	ל	ל	ADP	ADP	_	7	case	_	_
7	גופים	גוף	NOUN	NOUN	Gender=Masc|Number=Plur	5	obl	_	_
8	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	טוקי	טוקי	PROPN	PROPN	_	2	nsubj	_	_
2	קיבל	קיבל	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	רק	רק	ADV	ADV	_	5	det	_	_
4	52	52	NUM	NUM	_	5	nummod	_	_
5	אלף	אלף	NUM	NUM	Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nummod	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	בנייה	בנייה	NOUN	NOUN	Gender=Fem|Number=Sing	4	nsubj	_	_
3	לא	לא	ADV	ADV	Polarity=Neg	4	advmod	_	_
4	הושלמה	הושלם	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
5	ב	ב	ADP	ADP	_	7	case	_	_
6	ה_	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	מועד	מועד	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
8	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
9	נקבע	נקבע	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Mid	7	acl:relcl	_	_
10	,	,	PUNCT	PUNCT	_	11	punct	_	_
11	ספטמבר	ספטמבר	PROPN	PROPN	_	7	appos	_	_
12	84	84	NUM	NUM	_	11	nummod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


