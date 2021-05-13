---
layout: base
title:  'Statistics of csubj:pass in UD_Old_East_Slavic-TOROT'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-TOROT: Relations: `csubj:pass`

This relation is a language-specific subtype of .

6 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-SCONJ.html">SCONJ</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 csubj:pass	color:blue
1	прочїи	прочии	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	nsubj	_	ref=
2	же	же	ADV	Df	_	5	discourse	_	ref=
3	да	да	ADV	Df	_	5	advmod	_	ref=|LId=1
4	не	не	ADV	Df	Polarity=Neg	5	advmod	_	ref=
5	дерȥнѹть	дьрзнути	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=
6	но	нъ	CCONJ	C-	_	5	cc	_	ref=
7	первое	пьрвое	ADV	Df	_	8	advmod	_	ref=
8	ѹчими	учити	VERB	V-	Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Pass	5	conj	_	ref=
9	бѹдѹть	быти	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	8	cop	_	ref=
10	какъ	како	ADV	Du	PronType=Int	15	advmod	_	ref=
11	имъ	и	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	15	nsubj	_	ref=
12	съ	съ	ADP	R-	_	13	case	_	ref=
13	гдрьми	государь	NOUN	Nb	Case=Ins|Gender=Masc|Number=Plur	15	obl	_	ref=
14	великыми	великыи	ADJ	A-	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	13	amod	_	ref=
15	бесѣдовати	бесѣдовати	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	8	csubj:pass	_	ref=

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj:pass	color:blue
1	ѹстремиша	устрьмити	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=
2	сѧ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	1	expl	_	ref=
3	на	на	ADP	R-	_	4	case	_	ref=
4	бои	бои	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	ref=
5	не	не	ADV	Df	Polarity=Neg	6	advmod	_	ref=
6	вѣдуще	вѣдѣти	VERB	V-	Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	1	advcl	_	ref=
7	гл҃емаго	глаголати	VERB	V-	Case=Gen|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	6	obj	_	ref=
8	ꙗко	яко	SCONJ	G-	_	7	csubj:pass	_	ref=

~~~


