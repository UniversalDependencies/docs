---
layout: base
title:  'Statistics of xcomp in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Relations: `xcomp`

This relation is universal.

1747 nodes (1%) are attached to their parents as `xcomp`.

1740 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94218660560962.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (982; 56% instances), <tt><a href="he-pos-AUX.html">AUX</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (684; 39% instances), <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (31; 2% instances), <tt><a href="he-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (20; 1% instances), <tt><a href="he-pos-PRON.html">PRON</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="he-pos-ADV.html">ADV</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="he-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="he-pos-NUM.html">NUM</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	בני	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	זוג	זוג	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	גרוסבורד	גרוסבורד	PROPN	PROPN	_	1	appos	_	_
5	תוכננו	תוכנן	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	0	root	_	_
6	לשוב	שב	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	היום	היום	ADV	ADV	_	6	advmod:phrase	_	_
8	אחרי	אחרי	ADP	ADP	_	11	case	_	SpaceAfter=No
9	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	צהריים	צהריים	NOUN	NOUN	Gender=Masc|Number=Plur	7	advmod	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	ישראל	ישראל	PROPN	PROPN	_	6	obl	_	_
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	שם	שם	ADV	ADV	_	3	advmod	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	נפגש	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf|Voice=Mid	3	xcomp	_	_
5	עם	עם	ADP	ADP	_	6	case	_	_
6	איש_	איש	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	4	obl	_	_
7	_של_	של	ADP	ADP	_	8	case:gen	_	_
8	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
9	,	,	PUNCT	PUNCT	_	6	punct	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	6	acl:relcl	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	בוסטון	בוסטון	PROPN	PROPN	_	11	obl	_	_
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	זוהי	זהו	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	סכנה	סכנה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	ו	ו	CCONJ	CCONJ	_	8	cc	_	_
6	על	על	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	ממשלה	ממשלה	NOUN	NOUN	Gender=Fem|Number=Sing	3	conj	_	_
9	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	מאמץ	מאמץ	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	_
11	עילאי	עילאי	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
12	כדי	כדי	ADP	ADP	_	13	case	_	_
13	למנוע	מנע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	9	advcl	_	_
14	את_	את	PART	PART	Case=Acc	15	case:acc	_	_
15	_היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


