---
layout: base
title:  'Statistics of punct in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `punct`

This relation is universal.

71498 nodes (16%) are attached to their parents as `punct`.

40294 instances of `punct` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.09121933480657.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (41466; 58% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (14445; 20% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (5340; 7% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4071; 6% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1954; 3% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1869; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1617; 2% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (276; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (255; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (180; 0% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-ADP.html">ADP</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 punct	color:blue
1	Kust	kust	ADV	D	_	2	mark	2:mark	_
2	tuli	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mõte	mõte	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
4	kirjutada	kirjutama	VERB	V	VerbForm=Inf	3	acl	3:acl	_
5	ooper	ooper	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	_
6	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
7	Writing	Writing	PROPN	S	Case=Nom|Number=Sing	5	appos	5:appos	_
8	to	to	X	Y	Abbr=Yes	7	flat	7:flat	_
9	Vermeer	Vermeer	PROPN	S	Case=Nom|Number=Sing	7	flat	7:flat	SpaceAfter=No
10	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
11	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	8	obl	8:obl	_
6	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	7	det	7:det	_
7	kirjad	kiri	NOUN	S	Case=Nom|Number=Plur	8	nsubj	8:nsubj	_
8	jutustavad	jutustama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	2:csubj	SpaceAfter=No
9	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 punct	color:blue
1	Nagu	nagu	SCONJ	J	_	2	mark	2:mark	_
2	Fellini	Fellini	PROPN	S	Case=Nom|Number=Sing	9	advcl	9:advcl	SpaceAfter=No
3	,	,	PUNCT	Z	_	9	punct	9:punct	_
4	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
5	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	9	nsubj:cop	9:nsubj	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	7:nmod	_
7	filmides	film	NOUN	S	Case=Ine|Number=Plur	9	obl	9:obl	_
8	tohutult	tohutult	ADV	D	_	9	advmod	9:advmod	_
9	erootiline	erootiline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


