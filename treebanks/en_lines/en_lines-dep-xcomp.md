---
layout: base
title:  'Statistics of xcomp in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `xcomp`

This relation is universal.

1407 nodes (1%) are attached to their parents as `xcomp`.

1369 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.863539445629.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (899; 64% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (310; 22% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (107; 8% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (23; 2% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (21; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	If	if	SCONJ	_	_	5	mark	_	_
2	you	you	PRON	PERS-P2	_	5	nsubj	_	_
3	do	do	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	SpaceAfter=No
4	n't	not	PART	NEG	_	5	advmod	_	_
5	like	like	VERB	INF	VerbForm=Inf	11	advcl	_	_
6	it	it	PRON	PERS-SG	_	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	5	punct	_	_
8	why	why	ADV	WH	PronType=Int	11	advmod	_	_
9	do	do	AUX	INF-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	you	you	PRON	PERS-P2	_	11	nsubj	_	_
11	go	go	VERB	INF	VerbForm=Inf	0	root	_	_
12	on	on	ADV	_	_	11	compound:prt	_	_
13	reading	read	VERB	ING	Tense=Pres|VerbForm=Part	11	xcomp	_	SpaceAfter=No
14	?	?	PUNCT	QuestionMark	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp	color:blue
1	You	you	PRON	PERS-P2	_	3	nsubj	_	_
2	can	can	AUX	PRES-AUX	VerbForm=Fin	3	aux	_	_
3	change	change	VERB	INF	VerbForm=Inf	0	root	_	_
4	the	the	DET	DEF	Definite=Def|PronType=Art	5	det	_	_
5	color	color	NOUN	SG-NOM	Number=Sing	3	obj	_	_
6	of	of	ADP	_	_	8	case	_	_
7	a	a	DET	IND-SG	Definite=Ind|PronType=Art	8	det	_	_
8	control	control	NOUN	SG-NOM	Number=Sing	5	nmod	_	_
9	or	or	CCONJ	_	_	10	cc	_	_
10	make	make	VERB	INF	VerbForm=Inf	3	conj	_	_
11	it	it	PRON	PERS-SG	_	10	obj	_	_
12	transparent	transparent	ADJ	POS	Degree=Pos	10	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 xcomp	color:blue
1	It	it	PRON	PERS-SG	_	2	nsubj	_	_
2	seems	seem	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	PART	_	_	8	mark	_	_
4	be	be	AUX	INF	VerbForm=Inf	8	cop	_	_
5	a	a	DET	IND-SG	Definite=Ind|PronType=Art	8	det	_	_
6	perfectly	perfect	ADV	_	_	7	advmod	_	_
7	normal	normal	ADJ	POS	Degree=Pos	8	amod	_	_
8	check	check	NOUN	SG-NOM	Number=Sing	2	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	2	punct	_	_

~~~


