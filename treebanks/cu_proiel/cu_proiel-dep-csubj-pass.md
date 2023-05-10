---
layout: base
title:  'Statistics of csubj:pass in UD_Old_Church_Slavonic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cu_proiel-dep-csubj.html">csubj</a></tt>.

29 nodes (0%) are attached to their parents as `csubj:pass`.

29 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.20689655172414.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt> (23; 79% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-SCONJ.html">SCONJ</a></tt> (4; 14% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:pass	color:blue
1	тебѣ	тꙑ	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	obl:arg	_	ref=19
2	бо	бо	ADV	Df	_	5	discourse	_	ref=19
3	тоу	тоу	ADV	Df	_	6	advmod	_	ref=19
4	ѥ҅стъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	ref=19
5	дано	дати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=19
6	прославити	прославити	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	5	csubj:pass	_	ref=19
7	сꙙ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	expl:pv	_	ref=19
8	чловѣкꙑ	чловѣкъ	NOUN	Nb	Case=Ins|Gender=Masc|Number=Plur	6	obl:agent	_	ref=19

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	҅И	и	CCONJ	C-	_	4	cc	_	ref=48
2	дауи҅да	давꙑдъ	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	4	obl	_	ref=48
3	ради	ради	ADP	R-	_	2	case	_	ref=48
4	реченоѥ҆	рещи	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=48
5	ꙗ҅ко	ꙗко	SCONJ	G-	_	4	csubj:pass	_	ref=48

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	ꙇ	и	CCONJ	C-	_	6	cc	_	ref=JOHN_8.17
2	въ	въ	ADP	R-	_	3	case	_	ref=JOHN_8.17
3	законѣ	законъ	NOUN	Nb	Case=Loc|Gender=Masc|Number=Sing	6	obl	_	ref=JOHN_8.17
4	же	же	ADV	Df	_	6	discourse	_	ref=JOHN_8.17
5	вашемь	вашь	DET	Ps	Case=Loc|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	3	det	_	ref=JOHN_8.17
6	писано	пьсати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=JOHN_8.17
7	естъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	ref=JOHN_8.17
8	ѣко	ꙗко	SCONJ	G-	_	12	mark	_	ref=JOHN_8.17
9	дъвою	дъва	NUM	Ma	Case=Gen|Number=Dual	10	nummod	_	ref=JOHN_8.17
10	ч҃лвкоу	чловѣкъ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Dual	11	nmod	_	ref=JOHN_8.17
11	съвѣдѣтельство	съвѣдѣтельство	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	ref=JOHN_8.17
12	истинъно	истиньнъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	6	csubj:pass	_	ref=JOHN_8.17
13	естъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	ref=JOHN_8.17

~~~


