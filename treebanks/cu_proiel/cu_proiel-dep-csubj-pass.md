---
layout: base
title:  'Statistics of csubj:pass in UD_Old_Church_Slavonic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of .

12 nodes (0%) are attached to their parents as `csubj:pass`.

12 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt> (8; 67% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (2; 17% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-SCONJ.html">SCONJ</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	ѣко	ꙗко	ADV	Df	_	3	discourse	_	ref=MATT_13.11|LId=2
2	вамъ	вꙑ	PRON	Pp	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	iobj	_	ref=MATT_13.11
3	дано	дати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=MATT_13.11
4	естъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	ref=MATT_13.11
5	разоумѣти	разоумѣти	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	3	csubj:pass	_	ref=MATT_13.11
6	таинаа	таинъ	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	5	obj	_	ref=MATT_13.11
7	ц҃срствиѣ	цѣсарьствиѥ	NOUN	Nb	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	ref=MATT_13.11
8	н҃бскааго	небесьскъ	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc,Neut|Number=Sing	7	amod	_	ref=MATT_13.11

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
5	вашемь	вашь	ADJ	Ps	Case=Loc|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	3	nmod	_	ref=JOHN_8.17
6	писано	пьсати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=JOHN_8.17
7	естъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	ref=JOHN_8.17
8	ѣко	ꙗко	SCONJ	G-	_	12	mark	_	ref=JOHN_8.17
9	дъвою	дъва	NUM	Ma	Case=Gen|Number=Dual	10	nummod	_	ref=JOHN_8.17
10	ч҃лвкоу	чловѣкъ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Dual	11	nmod	_	ref=JOHN_8.17
11	съвѣдѣтельство	съвѣдѣтельство	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	ref=JOHN_8.17
12	истинъно	истиньнъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	6	csubj:pass	_	ref=JOHN_8.17
13	естъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	ref=JOHN_8.17

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	нѣстъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	ref=JOHN_10.34
2	ли	ли	ADV	Du	PronType=Int	3	advmod	_	ref=JOHN_10.34
3	написано	напьсати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=JOHN_10.34
4	въ	въ	ADP	R-	_	5	case	_	ref=JOHN_10.34
5	законѣ	законъ	NOUN	Nb	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	ref=JOHN_10.34
6	вашемъ	вашь	ADJ	Ps	Case=Loc|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	5	nmod	_	ref=JOHN_10.34
7	ѣко	ꙗко	SCONJ	G-	_	3	csubj:pass	_	ref=JOHN_10.34

~~~


