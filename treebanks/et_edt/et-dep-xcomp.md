---
layout: base
title:  'Statistics of xcomp in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `xcomp`

This relation is universal.

1324 nodes (1%) are attached to their parents as `xcomp`.

1076 instances of `xcomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61858006042296.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (924; 70% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (168; 13% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (164; 12% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (27; 2% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Muidugi	muidugi	ADV	D	_	4	advmod	_	_
2	poleks	olema	AUX	V	Mood=Cnd|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	_	_
4	osanud	oskama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	sealt	sealt	ADV	D	_	7	advmod	_	_
7	otsida	otsima	VERB	V	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Ebalev	ebalev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	naeratus	naeratus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	muutis	muutma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ta	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	lapselikuks	lapselik	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Muidu	muidu	ADV	D	_	2	advmod	_	_
2	pidas	pidama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	ennast	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	obj	_	_
5	viimasel	viimane	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	6	amod	_	_
6	ajal	aeg	NOUN	S	Case=Ade|Number=Sing	2	obl	_	_
7	pool-impoks	pool-impo	NOUN	S	Case=Tra|Number=Sing	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


