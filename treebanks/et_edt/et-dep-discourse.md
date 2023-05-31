---
layout: base
title:  'Statistics of discourse in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `discourse`

This relation is universal.

190 nodes (0%) are attached to their parents as `discourse`.

166 instances of `discourse` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51578947368421.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (103; 54% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (28; 15% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (14; 7% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (13; 7% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (12; 6% instances), <tt><a href="et-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (8; 4% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-INTJ.html">INTJ</a></tt> (8; 4% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	5	obj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	Z	_	7	punct	_	SpaceAfter=No
2	Ahah	ahah	INTJ	I	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	_	_
4	et	et	SCONJ	J	_	7	mark	_	_
5	isa	isa	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	tööl	töö	NOUN	S	Case=Ade|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	12	punct	_	_
9	noh	noh	INTJ	I	_	12	discourse	_	_
10	eks	eks	ADV	D	_	12	advmod	_	_
11	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	tulen	tulema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
13	mõnipäev	mõni_päev	NOUN	S	Case=Nom|Number=Sing	12	obl	_	_
14	jälle	jälle	ADV	D	_	12	advmod	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	7	punct	_	SpaceAfter=No
16	"	"	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	_
2	Kurat	kurat	INTJ	I	_	7	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	_
4	"	"	PUNCT	Z	_	5	punct	_	_
5	Postimeest	Posti_mees	PROPN	S	Case=Par|Number=Sing	7	nsubj:cop	_	_
6	"	"	PUNCT	Z	_	5	punct	_	_
7	siis	siis	ADV	D	_	0	root	_	_
8	veel	veel	ADV	D	_	7	advmod	_	_
9	polnud	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
10	ju	ju	ADV	D	_	7	advmod	_	SpaceAfter=No
11	!	!	PUNCT	Z	_	7	punct	_	_

~~~


