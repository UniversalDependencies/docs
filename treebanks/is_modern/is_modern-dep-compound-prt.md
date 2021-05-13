---
layout: base
title:  'Statistics of compound:prt in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `compound:prt`

This relation is a language-specific subtype of .

1964 nodes (1%) are attached to their parents as `compound:prt`.

1154 instances of `compound:prt` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84114052953157.

The following 12 pairs of parts of speech are connected with `compound:prt`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (1164; 59% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (472; 24% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (116; 6% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (74; 4% instances), <tt><a href="is_modern-pos-ADP.html">ADP</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (40; 2% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (32; 2% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (24; 1% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (16; 1% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (16; 1% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-NUM.html">NUM</a></tt>-<tt><a href="is_modern-pos-ADP.html">ADP</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Maður	maður	PRON	MAN-N	_	2	nsubj	_	_
2	spyr	spyrja	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	sig	sig	PRON	PRO-A	Case=Acc	2	iobj	_	_
4	hvað	hver	PRON	WPRO-A	Case=Acc	5	obj	_	_
5	liggi	liggja	VERB	VBPS	Mood=Sub|Tense=Pres	2	ccomp	_	_
6	á	á	ADP	RP	_	5	compound:prt	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 compound:prt	color:blue
1	Svo	svo	ADV	ADV	Degree=Pos	0	root	_	_
2	er	vera	AUX	BEPI	Mood=Ind|Tense=Pres	1	cop	_	_
3	eins	_	ADV	ADVR	Degree=Cmp	1	advmod	_	_
4	og	_	ADP	P	_	5	case	_	_
5	það	það	PRON	ES	Case=Nom|Gender=Neut|Number=Sing	3	obl	_	_
6	sé	vera	AUX	BEPS	Mood=Sub|Tense=Pres	5	cop	_	_
7	engin	enginn	DET	Q-N	Case=Nom|Degree=Pos	8	amod	_	_
8	tenging	tenging	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	obl	_	_
9	inn	inn	ADP	RP	_	11	compound:prt	_	_
10	á	á	ADP	P	_	11	case	_	_
11	ríkisstjórnarborðið	ríkisstjórnarborð	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:prt	color:blue
1	Gripið	grípa	VERB	VAN	Tense=Past|VerbForm=Part	0	root	_	_
2	fram	fram	ADP	RP	_	3	compound:prt	_	_
3	í	í	ADV	ADV	Degree=Pos	1	advmod	_	SpaceAfter=No
4	.	.	PUNCT	.	_	3	punct	_	_

~~~


