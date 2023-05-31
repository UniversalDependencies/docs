---
layout: base
title:  'Statistics of nummod in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `nummod`

This relation is universal.

1072 nodes (1%) are attached to their parents as `nummod`.

545 instances of `nummod` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41138059701493.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (867; 81% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (99; 9% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (65; 6% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (20; 2% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-SYM.html">SYM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	Z	z	ADP	Eu2	AdpType=Prep|Case=Gen	2	case	2:case	_
2	okien	okno	NOUN	SSnp2	Case=Gen|Gender=Neut|Number=Plur	6	nmod	6:nmod:z:gen	_
3	mali	mať	VERB	VLepcm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
4	60	60	NUM	0	NumForm=Digit	6	nummod	6:nummod	_
5	°	°	X	#	_	4	nmod	4:nmod	_
6	výhľad	výhľad	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nummod	color:blue
1	Všetky	všetok	DET	PFip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	det	3:det	_
2	štyri	štyri	NUM	NNip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nummod	3:nummod	_
3	reaktory	reaktor	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	5:nsubj	_
4	boli	byť	AUX	VLepci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	5	cop	5:cop	_
5	typu	typ	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	0	root	0:root	_
6	RBMK	rbmk	PROPN	W	Abbr=Yes	5	nmod	5:nmod	_
7	‐	‐	PUNCT	Z	_	8	punct	8:punct	_
8	1000	1000	NUM	0	NumForm=Digit	6	nummod	6:nummod	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	BARAN	baran	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	21	21	NUM	0	NumForm=Digit	4	nummod	4:nummod	SpaceAfter=No
3	.	.	PUNCT	ZIP	_	2	punct	2:punct	_
4	3	3	NUM	0	NumForm=Digit	1	dep	1:dep	SpaceAfter=No
5	.	.	PUNCT	ZIP	_	4	punct	4:punct	_
6	-	-	PUNCT	ZIP	_	9	punct	9:punct	_
7	20	20	NUM	0	NumForm=Digit	9	nummod	9:nummod	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	7:punct	_
9	4	4	NUM	0	NumForm=Digit	4	conj	1:dep|4:conj	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


