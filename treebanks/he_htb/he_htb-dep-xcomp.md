---
layout: base
title:  'Statistics of xcomp in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `xcomp`

This relation is universal.

1142 nodes (1%) are attached to their parents as `xcomp`.

1132 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44483362521891.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (957; 84% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt> (79; 7% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (31; 3% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (24; 2% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (19; 2% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	בני	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	זוג	זוג	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	גרוסבורד	גרוסבורד	PROPN	PROPN	_	1	flat:name	_	_
5	תוכננו	תוכנן	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	0	root	_	_
6	לשוב	שב	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	היום	היום	ADV	ADV	_	6	advmod	_	_
8	אחרי	אחרי	ADP	ADP	_	11	case	_	SpaceAfter=No
9	-	-	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	צהריים	צהריים	NOUN	NOUN	Gender=Masc|Number=Plur	7	fixed	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	ישראל	ישראל	PROPN	PROPN	_	6	obl	_	_
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	מסתבר	הסתבר	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
3	הייתי	היה	AUX	AUX	Gender=Fem,Masc|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbType=Cop	4	cop	_	_
4	תמים	תמים	ADJ	ADJ	Gender=Masc|Number=Sing	1	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	זוהי	זהו	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	סכנה	סכנה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
4	,	,	PUNCT	PUNCT	_	8	punct	_	_
5	ו	ו	CCONJ	CCONJ	_	8	cc	_	_
6	על	על	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	ממשלה	ממשלה	NOUN	NOUN	Gender=Fem|Number=Sing	3	conj	_	_
9	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	מאמץ	מאמץ	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	_
11	עילאי	עילאי	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
12	כדי	כדי	ADP	ADP	_	13	case	_	_
13	למנוע	מנע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	9	advcl	_	_
14	את_	את	ADP	ADP	Case=Acc	15	case:acc	_	_
15	_היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


