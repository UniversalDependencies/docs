---
layout: base
title:  'Statistics of cc in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="et_edt-dep-cc-preconj.html">cc:preconj</a></tt>.

16137 nodes (4%) are attached to their parents as `cc`.

16107 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1467435087067.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (6559; 41% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (5644; 35% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1778; 11% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1134; 7% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (492; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (270; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (175; 1% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (29; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (18; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="et_edt-pos-ADP.html">ADP</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Aga	aga	CCONJ	J	_	3	cc	3:cc	_
2	ilu	ilu	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	mõiste	mõiste	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
4	?	?	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Kuid	kuid	CCONJ	J	_	5	cc	5:cc	_
2	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	4:nmod	_
3	ilu	ilu	NOUN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	_
4	definitsioon	definitsioon	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	:	:	PUNCT	Z	_	7	punct	7:punct	_
7	vaadata	vaatama	VERB	V	VerbForm=Inf	5	ccomp	5:ccomp	_
8	ja	ja	CCONJ	J	_	9	cc	9:cc	_
9	pühitseda	pühitsema	VERB	V	VerbForm=Inf	7	conj	7:conj	SpaceAfter=No
10	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Kuid	kuid	CCONJ	J	_	5	cc	5:cc	_
2	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	5	obl	5:obl	_
3	ongi	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	just	just	ADV	D	_	5	advmod	5:advmod	_
5	huvitavad	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	üleminekuajajärgud	üle_mineku_aja_järk	NOUN	S	Case=Nom|Number=Plur	5	nsubj:cop	5:nsubj	_
7	nagu	nagu	SCONJ	J	_	8	mark	8:mark	_
8	manerism	manerism	NOUN	S	Case=Nom|Number=Sing	5	advcl	5:advcl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


