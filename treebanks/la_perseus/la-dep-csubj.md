---
layout: base
title:  'Statistics of csubj in UD_Latin'
udver: '2'
---

## Treebank Statistics: UD_Latin: Relations: `csubj`

This relation is universal.

140 nodes (0%) are attached to their parents as `csubj`.

70 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="la-pos-VERB.html">VERB</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (111; 79% instances), <tt><a href="la-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (18; 13% instances), <tt><a href="la-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="la-pos-ADV.html">ADV</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la-pos-PRON.html">PRON</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la-pos-X.html">X</a></tt>-<tt><a href="la-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	falsa	fallo	VERB	v-prppna-	Aspect=Perf|Case=Acc|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	nmod	_	_
2	licet	licet1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	cupidus	cupidus1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	6	amod	_	_
4	deponat	depono1	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
5	gaudia	gaudium1	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	_
6	livor	livor1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
7	:	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	illis	ille1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	2	advmod	_	_
2	supervacuaneum	supervacuaneus	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	pugnare	pugno1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	2	csubj	_	_
5	pro	pro1	ADP	r--------	_	6	case	_	_
6	potentia	potentia1	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	4	obl	_	_
7	paucorum	paucus1	ADJ	a-p---mg-	Case=Gen|Gender=Masc|Number=Plur	6	amod	_	SpaceAfter=No
8	.	punc1	PUNCT	u--------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 csubj	color:blue
1	quibus	qui1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	9	advmod	_	_
2	in	in1	ADP	r--------	_	3	case	_	_
3	otio	otium1	NOUN	n-s---nb-	Case=Abl|Gender=Neut|Number=Sing	8	obl	_	_
4	vel	vel1	CCONJ	c--------	_	5	advmod	_	_
5	magnifice	magnificus1	ADV	d--------	_	8	advmod	_	_
6	vel	vel1	CCONJ	c--------	_	5	cc	_	_
7	molliter	mollis1	ADV	d--------	_	5	conj	_	_
8	vivere	vivo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	9	csubj	_	_
9	copia	copia1	NOUN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
10	erat	sum1	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No
11	;	punc1	PUNCT	u--------	_	9	punct	_	_

~~~


