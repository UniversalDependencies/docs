---
layout: base
title:  'Statistics of cc in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="et_edt-dep-cc-preconj.html">cc:preconj</a></tt>.

13477 nodes (4%) are attached to their parents as `cc`.

13446 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13304147807376.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (5350; 40% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (4820; 36% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1502; 11% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (923; 7% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (432; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (228; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (167; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (16; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADP.html">ADP</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Tules	tuli	NOUN	S	Case=Ine|Number=Sing	2	obl	_	_
2	hävis	hävima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	maja	maja	NOUN	S	Case=Gen|Number=Sing	4	nmod	_	_
4	katus	katus	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
5	ja	ja	CCONJ	J	_	7	cc	_	_
6	osaliselt	osaliselt	ADV	D	_	2	advmod	_	_
7	vahelaed	vahe_lagi	NOUN	S	Case=Nom|Number=Plur	4	conj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	_	_
2	milleks	milleks	ADV	D	_	3	mark	_	_
3	kõhelda	kõhklema	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	_	_
5	kui	kui	SCONJ	J	_	6	mark	_	_
6	tunned	tundma	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
7	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	6	obj	_	_
8	panganduses	pangandus	NOUN	S	Case=Ine|Number=Sing	6	obl	_	_
9	nagu	nagu	SCONJ	J	_	10	mark	_	_
10	kala	kala	NOUN	S	Case=Nom|Number=Sing	6	advcl	_	_
11	vees	vesi	NOUN	S	Case=Ine|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Iga	iga	DET	P	Case=Nom|Number=Sing|PronType=Tot	2	det	_	_
2	päev	päev	NOUN	S	Case=Nom|Number=Sing	5	obl	_	_
3	sai	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
4	loomi	loom	NOUN	S	Case=Par|Number=Plur	5	obj	_	_
5	kammitu	kammima	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	ja	ja	CCONJ	J	_	7	cc	_	_
7	klanitu	klanitud	ADJ	A	Case=Gen|Degree=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	_	_

~~~


