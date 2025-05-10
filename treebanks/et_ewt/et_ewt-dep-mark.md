---
layout: base
title:  'Statistics of mark in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `mark`

This relation is universal.

3102 nodes (3%) are attached to their parents as `mark`.

3091 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.34526112185687.

The following 21 pairs of parts of speech are connected with `mark`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1732; 56% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (400; 13% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (359; 12% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (214; 7% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (114; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (83; 3% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (49; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (44; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (34; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (31; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (13; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="et_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-X.html">X</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	On	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	ja	ja	CCONJ	J	_	3	cc	3:cc	_
3	elavad	elama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
4	nagu	nagu	SCONJ	J	_	5	mark	5:mark	_
5	elaksid	elama	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	_
6	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
7	igavesti	igavesti	ADV	D	_	5	advmod	5:advmod	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Nagu	nagu	SCONJ	J	_	2	mark	2:mark	_
2	filmis	film	NOUN	S	Case=Ine|Number=Sing	0	root	0:root	NE=B-Prod
3	"	"	PUNCT	Z	_	6	punct	6:punct	NE=I-Prod|SpaceAfter=No
4	Madissoni	Madisson	PROPN	S	Case=Gen|Number=Sing	5	nmod	5:nmod	NE=I-Prod
5	maakonna	maakond	NOUN	S	Case=Gen|Number=Sing	6	nmod	6:nmod	NE=I-Prod
6	sillad	sild	NOUN	S	Case=Nom|Number=Plur	2	appos	2:appos	NE=I-Prod|SpaceAfter=No
7	"	"	PUNCT	Z	_	6	punct	6:punct	NE=I-Prod
8	...	...	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	See	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	2	det	2:det	_
2	kôik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot|Typo=Yes	5	obj	5:obj	CorrectForm=kõik
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ära	ära	ADV	D	_	5	compound:prt	5:compound	_
5	aurustada	aurustama	VERB	V	VerbForm=Inf	3	csubj	3:csubj	_
6	enne	enne	ADV	D	ExtPos=SCONJ	9	mark	9:mark	_
7	kui	kui	SCONJ	J	_	6	fixed	6:fixed	_
8	pôlema	põlema	NOUN	S	Case=Nom|Number=Sing|Typo=Yes	9	obl	9:obl	CorrectForm=põlema
9	pääsed	pääsema	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


