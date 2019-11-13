---
layout: base
title:  'Statistics of root in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `root`

This relation is universal.

1424 nodes (5%) are attached to their parents as `root`.

1424 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28651685393258.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (934; 66% instances), -<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (305; 21% instances), -<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (74; 5% instances), -<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (41; 3% instances), -<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (23; 2% instances), -<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (20; 1% instances), -<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (14; 1% instances), -<tt><a href="it_twittiro-pos-X.html">X</a></tt> (6; 0% instances), -<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), -<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	MARIO	mario	PROPN	SP	_	6	parataxis:obj	_	_
2	MONTI	Monti	PROPN	SP	_	1	flat:name	_	_
3	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	ALIENO	alieno	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	4	punct	_	_
6	GODETE	godere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
7	VE	ve	PRON	PC	Clitic=Yes|Number=Plur|Person=2|PronType=Prs	6	iobj	_	_
8	LO	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
9	ANCORA	ancora	ADV	B	_	6	advmod	_	_
10	PER	per	ADP	E	_	11	case	_	_
11	POCO	poco	ADV	B	_	6	advmod	_	_
12	http://t.co/AkU6DZB4	http://t.co/AkU6DZB4	SYM	X	_	6	dep	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	a	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	fase	fase	NOUN	S	Gender=Fem|Number=Sing	3	nsubj	_	_
6	due	due	NUM	N	NumType=Card	5	nummod	_	_
7	di	di	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	#Monti	#Monti	SYM	SYM	_	9	nmod	_	SpaceAfter=No
11	:	:	PUNCT	FC	_	3	punct	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	risata	risata	NOUN	S	Gender=Fem|Number=Sing	3	parataxis	_	_
14	satanica	satanico	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Schumacher	Schumacher	PROPN	SP	_	3	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	sveglio	sveglio	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_
5	Le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
6	sue	suo	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	8	det:poss	_	_
7	prime	primo	ADJ	NO	Gender=Fem|Number=Plur|NumType=Ord	8	amod	_	_
8	parole	parola	NOUN	S	Gender=Fem|Number=Plur	11	parataxis	_	SpaceAfter=No
9	:	:	PUNCT	FC	_	8	punct	_	_
10	“	“	PUNCT	FB	_	11	punct	_	_
11	Fünf	Fünf	X	SW	_	3	parataxis	_	_
12	minuten	minuten	X	SW	_	11	flat:foreign	_	_
13	!	!	PUNCT	FS	_	11	punct	_	_
14	“	“	PUNCT	FB	_	3	punct	_	_
15	[	[	PUNCT	FB	_	16	punct	_	SpaceAfter=No
16	@user	@user	SYM	SYM	_	3	dep	_	SpaceAfter=No
17	]	]	PUNCT	FB	_	16	punct	_	SpaceAfter=\n

~~~


