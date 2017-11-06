---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_Church_Slavonic'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cu-dep-nsubj.html">nsubj</a></tt>.

13 nodes (0%) are attached to their parents as `nsubj:pass`.

8 instances of `nsubj:pass` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69230769230769.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-NOUN.html">NOUN</a></tt> (7; 54% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-ADJ.html">ADJ</a></tt> (4; 31% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-PRON.html">PRON</a></tt> (2; 15% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	ꙇ	и	CCONJ	C-	_	5	cc	_	ref=JOHN_11.44
2	лице	лице	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	5	nsubj:pass	_	ref=JOHN_11.44
3	его	и	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	det	_	ref=JOHN_11.44
4	оуброусомъ	оуброусъ	NOUN	Nb	Case=Ins|Gender=Masc|Number=Sing	5	iobj	_	ref=JOHN_11.44
5	обѧзано	обѧзати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=JOHN_11.44

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nsubj:pass	color:blue
1	бѣ	бꙑти	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_19.23
2	же	же	ADV	Df	_	1	discourse	_	ref=JOHN_19.23
3	хитонъ	хитонъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	ref=JOHN_19.23
4	не	не	ADV	Df	Polarity=Neg	5	advmod	_	ref=JOHN_19.23
5	шъвенъ	шьвенъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	1	xcomp	_	ref=JOHN_19.23
6	съ	съ	ADP	R-	_	7	case	_	ref=JOHN_19.23
7	връхоу	врьхъ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	8	obl	_	ref=JOHN_19.23
8	истъканъ	истъкати	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	5	conj	_	ref=JOHN_19.23
9	вьсь	вьсь	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	ref=JOHN_19.23

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	идѣте	ити	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	ref=MATT_20.4
2	и	и	ADV	Df	_	3	advmod	_	ref=MATT_20.4
3	вꙑ	вꙑ	PRON	Pp	Case=Nom|Number=Plur|Person=2|PronType=Prs	1	nsubj:pass	_	ref=MATT_20.4
4	въ	въ	ADP	R-	_	5	case	_	ref=MATT_20.4
5	виноградъ	виноградъ	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	ref=MATT_20.4
6	мои	мои	ADJ	Ps	Case=Acc|Gender=Masc|Number=Sing|Person=1|Poss=Yes	5	nmod	_	ref=MATT_20.4

~~~


