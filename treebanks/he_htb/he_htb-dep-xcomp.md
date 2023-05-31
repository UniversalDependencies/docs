---
layout: base
title:  'Statistics of xcomp in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `xcomp`

This relation is universal.

1756 nodes (1%) are attached to their parents as `xcomp`.

1745 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.124715261959.

The following 15 pairs of parts of speech are connected with `xcomp`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1085; 62% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (262; 15% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (171; 10% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt> (86; 5% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (38; 2% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (36; 2% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (30; 2% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (28; 2% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	בני	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det	_	_
3	זוג	זוג	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	גרוסבורד	גרוסבורד	PROPN	PROPN	_	1	flat:name	_	_
5	תוכננו	תוכנן	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	0	root	_	_
6	לשוב	שב	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	היום	היום	ADV	ADV	_	6	advmod	_	_
8	אחרי	אחרי	ADP	ADP	_	11	case	_	SpaceAfter=No
9	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
10	ה	ה	DET	DET	PronType=Art	11	det	_	_
11	צהריים	צהריים	NOUN	NOUN	Gender=Masc|Number=Plur	7	obl	_	_
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
2	היה	היה	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	3	cop	_	_
3	אמור	אמור	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	Modal=Yes
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	כמה	כמה	DET	DET	Definite=Cons	2	det	_	_
2	מחקרים	מחקר	NOUN	NOUN	Gender=Masc|Number=Plur	3	nsubj	_	_
3	שאלו	שאל	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
4	כיצד	כיצד	ADV	ADV	PronType=Int	3	advcl	_	_
5	להפוך	הפך	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	כלכלה	כלכלה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obj	_	_
7	סטליניסטית	סטליניסטית	ADJ	ADJ	_	6	amod	_	_
8	ל	ל	ADP	ADP	_	9	case	_	_
9	כלכלת	כלכלה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	5	obl	_	_
10	שוק	שוק	NOUN	NOUN	Gender=Masc|Number=Sing	9	compound:smixut	_	_
11	חופשי	חופשי	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No
12	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


