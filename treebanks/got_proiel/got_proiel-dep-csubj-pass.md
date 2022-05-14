---
layout: base
title:  'Statistics of csubj:pass in UD_Gothic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Gothic-PROIEL: Relations: `csubj:pass`

This relation is a language-specific subtype of .

42 nodes (0%) are attached to their parents as `csubj:pass`.

39 instances of `csubj:pass` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.23809523809524.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-VERB.html">VERB</a></tt> (32; 76% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-SCONJ.html">SCONJ</a></tt> (7; 17% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="got_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="got_proiel-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	ni	ni	ADV	Df	Polarity=Neg	2	advmod	_	Ref=MARK_6.18
2	skuld	skulan*	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Ref=MARK_6.18
3	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	LId=1|Ref=MARK_6.18
4	þus	þu	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	iobj	_	Ref=MARK_6.18
5	haban	haban	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	2	csubj:pass	_	Ref=MARK_6.18
6	qen	qens	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	Ref=MARK_6.18
7	broþrs	broþar	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	Ref=MARK_6.18
8	þeinis	þeins	ADJ	Ps	Case=Gen|Gender=Masc|Number=Sing|Person=2|Poss=Yes	7	nmod	_	Ref=MARK_6.18

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	gamelid	ga-meljan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Ref=LUKE_4.4
2	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	LId=1|Ref=LUKE_4.4
3	þatei	þatei	SCONJ	G-	_	1	csubj:pass	_	Ref=LUKE_4.4

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	jah	jah	ADV	Df	_	4	advmod	_	Ref=JOHN_8.17
2	þan	þan	ADV	Df	_	6	discourse	_	Ref=JOHN_8.17
3	in	in	ADP	R-	_	4	case	_	Ref=JOHN_8.17
4	witoda	witoþ	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	6	obl	_	Ref=JOHN_8.17
5	izwaramma	izwar	ADJ	Ps	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=2|Poss=Yes	4	nmod	_	Ref=JOHN_8.17
6	gameliþ	ga-meljan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Ref=JOHN_8.17
7	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	LId=1|Ref=JOHN_8.17
8	þatei	þatei	SCONJ	G-	_	12	mark	_	Ref=JOHN_8.17
9	twaddje	twai	NUM	Ma	Case=Gen|Gender=Masc,Neut|Number=Plur	10	nummod	_	Ref=JOHN_8.17
10	manne	manna	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	LId=2|Ref=JOHN_8.17
11	weitwodiþa	weitwodiþa	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	Ref=JOHN_8.17
12	sunja	sunjis*	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Strength=Strong	6	csubj:pass	_	Ref=JOHN_8.17
13	ist	wisan	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	LId=1|Ref=JOHN_8.17

~~~


