---
layout: base
title:  'Statistics of cop in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `cop`

This relation is universal.

1421 nodes (1%) are attached to their parents as `cop`.

1346 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79732582688248.

The following 15 pairs of parts of speech are connected with `cop`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (355; 25% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (325; 23% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (311; 22% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (238; 17% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (62; 4% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (47; 3% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (24; 2% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (23; 2% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	נראה	נראה	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Mid	0	root	_	_
2	היה	היה	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	1	cop	_	_
3	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
4	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	זיווג	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	מסתבר	הסתבר	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
3	הייתי	היה	AUX	AUX	Gender=Fem,Masc|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbType=Cop	4	cop	_	_
4	תמים	תמים	ADJ	ADJ	Gender=Masc|Number=Sing	1	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 cop	color:blue
1	ו	ו	CCONJ	CCONJ	_	14	cc	_	_
2	באשר	באשר	CCONJ	CCONJ	_	5	case	_	_
3	ל	ל	ADP	ADP	_	2	fixed	_	_
4	ה_	ה	DET	DET	PronType=Art	5	det	_	_
5	הצמדה	הצמדה	NOUN	NOUN	Gender=Fem|Number=Sing	14	nmod	_	_
6	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
7	ל	ל	ADP	ADP	_	9	case	_	_
8	ה_	ה	DET	DET	PronType=Art	9	det	_	_
9	אינפלציה	אינפלציה	NOUN	NOUN	Gender=Fem|Number=Sing	5	conj	_	_
10	ה	ה	DET	DET	PronType=Art	11	det	_	_
11	כתובת	כתובת	NOUN	NOUN	Gender=Fem|Number=Sing	14	nsubj	_	_
12	אינה	אינו	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Polarity=Neg|VerbForm=Part|VerbType=Cop	14	cop	_	_
13	ה	ה	DET	DET	PronType=Art	14	det	_	_
14	בנקים	בנק	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
15	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


