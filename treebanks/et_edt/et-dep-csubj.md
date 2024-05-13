---
layout: base
title:  'Statistics of csubj in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="et-dep-csubj-cop.html">csubj:cop</a></tt>.

210 nodes (0%) are attached to their parents as `csubj`.

193 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.86666666666667.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (192; 91% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj	color:blue
1	Tundus	tunduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	10	punct	_	_
3	et	et	SCONJ	J	_	10	mark	_	_
4	pisikesed	pisike	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	5	amod	_	_
5	elukad	elukas	NOUN	S	Case=Nom|Number=Plur	10	nsubj	_	_
6	narmaste	narmas	NOUN	S	Case=Gen|Number=Plur	5	nmod	_	_
7	vahel	vahel	ADP	K	AdpType=Post	6	case	_	_
8	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
9	paigale	paigale	ADV	D	_	10	compound:prt	_	_
10	tardunud	tarduma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	1	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Samuti	samuti	ADV	D	_	3	advmod	_	_
2	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	osutuda	osutuma	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	et	et	SCONJ	J	_	8	mark	_	_
6	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
7	jälle	jälle	ADV	D	_	8	advmod	_	_
8	peol	pidu	NOUN	S	Case=Ade|Number=Sing	3	csubj	_	_
9	ja	ja	CCONJ	J	_	11	cc	_	_
10	kallim	kallim	NOUN	S	Case=Nom|Number=Sing	11	nsubj	_	_
11	sosistab	sosistama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
12	:	:	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj	color:blue
1	Tundub	tunduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	6	punct	_	_
3	et	et	SCONJ	J	_	6	mark	_	_
4	korrektiivid	korrektiiv	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
5	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
6	õiged	õige	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	1	csubj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	9	punct	_	_
9	tõdes	tõdema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
10	Alaver	Alaver	PROPN	S	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	_	_

~~~


