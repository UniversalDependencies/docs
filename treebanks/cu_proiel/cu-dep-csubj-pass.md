---
layout: base
title:  'Statistics of csubj:pass in UD_Old_Church_Slavonic'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic: Relations: `csubj:pass`

This relation is a language-specific subtype of .

9 nodes (0%) are attached to their parents as `csubj:pass`.

9 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77777777777778.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-SCONJ.html">SCONJ</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	отъ	отъ	ADP	R-	_	2	case	_	ref=JOHN_9.32
2	вѣка	вѣкъ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	ref=JOHN_9.32
3	нѣстъ	не.бꙑти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_9.32
4	слꙑшано	слꙑшати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	3	xcomp	_	ref=JOHN_9.32
5	ѣко	ꙗко	SCONJ	G-	_	7	mark	_	ref=JOHN_9.32
6	кто	къто	ADJ	Px	Case=Nom|Number=Sing	7	nsubj	_	ref=JOHN_9.32
7	отвръзе	отврѣсти	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	csubj:pass	_	ref=JOHN_9.32
8	очи	око	NOUN	Nb	Case=Acc|Gender=Neut|Number=Dual	7	obj:dir	_	ref=JOHN_9.32
9	слѣпоу	слѣпъ	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	10	advmod	_	ref=JOHN_9.32
10	рожденоу	родити#1	VERB	V-	Case=Dat|Gender=Masc|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	ref=JOHN_9.32

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	нѣстъ	не.бꙑти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_10.34
2	ли	ли	ADV	Du	PronType=Int	1	advmod	_	ref=JOHN_10.34
3	написано	напьсати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	_	ref=JOHN_10.34
4	въ	въ	ADP	R-	_	5	case	_	ref=JOHN_10.34
5	законѣ	законъ	NOUN	Nb	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	ref=JOHN_10.34
6	вашемъ	вашь	ADJ	Ps	Case=Loc|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	5	nmod	_	ref=JOHN_10.34
7	ѣко	ꙗко	SCONJ	G-	_	3	csubj:pass	_	ref=JOHN_10.34

~~~


