---
layout: base
title:  'Statistics of csubj:cop in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-csubj.html">csubj</a></tt>.

746 nodes (0%) are attached to their parents as `csubj:cop`.

699 instances of `csubj:cop` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28954423592493.

The following 18 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (530; 71% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (132; 18% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (30; 4% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	Kõige	kõige	ADV	D	_	2	advmod	_	_
2	hullem	hullem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	piiritustehase	piiritus_tehas	NOUN	S	Case=Gen|Number=Sing	5	nmod	_	_
5	praaka	praak	NOUN	S	Case=Par|Number=Sing	6	obj	_	_
6	kanda	kandma	VERB	V	VerbForm=Inf	2	csubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj:cop	color:blue
1	Kangelaseks	kangelane	NOUN	S	Case=Tra|Number=Sing	2	obl	_	_
2	saada	saama	VERB	V	VerbForm=Inf	8	csubj:cop	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	Otsmani	Otsman	PROPN	S	Case=Gen|Number=Sing	8	nmod	_	_
5	suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
6	ja	ja	CCONJ	J	_	7	cc	_	_
7	salajane	salajane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	conj	_	_
8	unistus	unistus	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj:cop	color:blue
1	“	“	PUNCT	Z	_	6	punct	_	_
2	Paari	paar	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	3	nummod	_	_
3	kuu	kuu	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	_	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	rohkem	rohkem	ADV	D	_	0	root	_	_
7	rääkida	rääkima	VERB	V	VerbForm=Inf	6	csubj:cop	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	6	punct	_	_
9	”	”	PUNCT	Z	_	6	punct	_	_
10	lubas	lubama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	_
11	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


