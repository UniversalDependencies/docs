---
layout: base
title:  'Statistics of case in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `case`

This relation is universal.

259 nodes (3%) are attached to their parents as `case`.

252 instances of `case` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64864864864865.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (112; 43% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (44; 17% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (33; 13% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (30; 12% instances), <tt><a href="ota_boun-pos-DET.html">DET</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (8; 3% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (7; 3% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Ermeni	Ermeni	PROPN	_	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	hazırlığı	hazırlık	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
3	da	da	PART	Emph	_	2	advmod:emph	_	_
4	tamamen	tamamen	ADV	_	_	7	advmod	_	_
5	Rum	Rum	PROPN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
6	hazırlığı	hazırlık	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	_
7	gibi	gibi	ADP	PCNom	_	6	case	_	_
8	ilerliyor	ilerle	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
9	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Bu	bu	DET	Det	_	13	nsubj	_	_
2	dün	dün	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obl	_	_
3	gece	gece	NOUN	_	Case=Nom|Number=Sing|Person=3	2	fixed	_	_
4	böyle	böyle	ADV	_	_	5	advmod	_	_
5	olduğu	ol	VERB	Ptcp	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	13	advcl	_	_
6	gibi	gibi	ADP	PCNom	_	5	case	_	_
7	bu	bu	DET	Demons	_	8	det	_	_
8	gece	gece	NOUN	_	Case=Nom|Number=Sing|Person=3	13	obl	_	_
9	de	de	PART	Emph	_	8	advmod:emph	_	_
10	yarın	yarın	NOUN	_	Case=Nom|Number=Sing|Person=3	13	obl	_	_
11	da	da	PART	Emph	_	8	advmod:emph	_	_
12	böyle	böyle	ADV	_	_	13	advmod	_	_
13	olacak	ol	VERB	_	Aspect=Prosp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	0	root	_	_
14	.	.	PUNCT	Stop	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 case	color:blue
1	Kapanık	kapanık	ADJ	Adj	_	2	amod	_	_
2	hava	hava	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
3	,	,	PUNCT	Comma	_	4	punct	_	_
4	derin	derin	ADJ	Adj	_	6	amod	_	_
5	bir	bir	DET	Indef	_	6	det	_	_
6	sükûn-ı	sükûn	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
7	teşrîn	teşrîn	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
8	ile	ile	CCONJ	_	_	6	case	_	_
9	bî-tâb-ı	bî-tâb	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	melâl	melâl	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_
11	idi	y	AUX	Overt	Case=Nom|Number=Sing|Person=3	9	cop	_	_
12	.	.	PUNCT	Stop	_	11	punct	_	_

~~~


