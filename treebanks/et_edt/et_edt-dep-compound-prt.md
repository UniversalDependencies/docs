---
layout: base
title:  'Statistics of compound:prt in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-compound.html">compound</a></tt>.

3888 nodes (1%) are attached to their parents as `compound:prt`.

2262 instances of `compound:prt` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88786008230453.

The following 8 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (3791; 98% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (76; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (16; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	Üle	üle	ADP	K	AdpType=Prep	2	case	_	_
2	poole	pool	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	neist	tema	PRON	P	Case=Ela|Number=Plur|Person=3|PronType=Prs	2	nmod	_	_
4	lasti	laskma	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	maha	maha	ADV	D	_	4	compound:prt	_	_
6	pärast	pärast	ADP	K	AdpType=Prep	9	case	_	_
7	Berliini	Berliin	PROPN	S	Case=Gen|Number=Sing	8	nmod	_	_
8	müüri	müür	NOUN	S	Case=Gen|Number=Sing	9	nmod	_	_
9	püstitamist	püstitamine	NOUN	S	Case=Par|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	Aastal	aasta	NOUN	S	Case=Ade|Number=Sing	3	obl	_	_
2	297	297	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	1	nummod	_	_
3	muutis	muutma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kristlasi	kristlane	NOUN	S	Case=Par|Number=Plur	6	obj	_	_
5	taga	taga	ADV	D	_	6	compound:prt	_	_
6	kiusanud	kiusa=nud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl	_	_
7	Trdat	Trdat	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
8	ootamatult	ootamatult	ADV	D	_	3	advmod	_	_
9	meelt	meel	NOUN	S	Case=Par|Number=Sing	3	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:prt	color:blue
1	Siis	siis	ADV	D	_	2	advmod	_	_
2	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	harjuda	harjuma	VERB	V	VerbForm=Inf	2	csubj	_	_
4	lühikesest	lühike	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	5	amod	_	_
5	basseinist	bassein	NOUN	S	Case=Ela|Number=Sing	8	nmod	_	_
6	pikka	pikk	ADJ	A	Case=Ine|Degree=Pos|Number=Sing	8	amod	_	_
7	üle	üle	ADV	D	_	8	compound:prt	_	_
8	minemisega	minemine	NOUN	S	Case=Com|Number=Sing	3	obl	_	_
9	...	...	PUNCT	Z	_	2	punct	_	_

~~~


