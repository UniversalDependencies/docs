---
layout: base
title:  'Statistics of aux:pass in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_proiel-dep-aux.html">aux</a></tt>.

1778 nodes (1%) are attached to their parents as `aux:pass`.

1486 instances of `aux:pass` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16254218222722.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1764; 99% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="la_proiel-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:pass	color:blue
1	audistis	audio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Ref=MATT_5.21
2	quia	quia	SCONJ	G-	_	3	mark	_	Ref=MATT_5.21
3	dictum	dico	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	Ref=MATT_5.21
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	Ref=MATT_5.21
5	antiquis	antiquus	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	iobj	_	Ref=MATT_5.21

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	addit	addo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Ref=2.20.2
2	etiam	etiam	ADV	Df	_	1	discourse	_	Ref=2.20.2
3	se	se	PRON	Pk	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	5	nsubj:pass	_	Ref=2.20.2
4	prius	prius	ADV	Df	Degree=Cmp	5	advmod	_	Ref=2.20.2
5	occisum	occido	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	LId=1|Ref=2.20.2
6	iri	eo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	aux:pass	_	Ref=2.20.2
7	ab	ab	ADP	R-	_	8	case	_	Ref=2.20.2
8	eo	is	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	Ref=2.20.2
9	quam	quam	ADV	Df	_	4	advmod	_	LId=1|Ref=2.20.2
10	me	ego	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	11	nsubj:pass	_	Ref=2.20.2
11	violatum	violo	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	ccomp	_	Ref=2.20.2
12	iri	eo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	11	aux:pass	_	Ref=2.20.2

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 aux:pass	color:blue
1	ita	ita	ADV	Df	_	3	advmod	_	Ref=1.18.7
2	nos	nos	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	nsubj:pass	_	Ref=1.18.7
3	cogimur	cogo	VERB	V-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Ref=1.18.7
4	reliquis	reliquus	ADJ	A-	Case=Abl|Degree=Pos|Number=Plur	6	amod	_	Ref=1.18.7
5	de	de	ADP	R-	_	6	case	_	Ref=1.18.7
6	rebus	res	NOUN	Nb	Case=Abl|Gender=Fem|Number=Plur	8	obl	_	Ref=1.18.7
7	nihil	nihil	ADJ	Px	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	Ref=1.18.7
8	decernere	decerno	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	3	xcomp	_	Ref=1.18.7
9	ante	antequam	SCONJ	G-	_	10	mark	_	Ref=1.18.7
10	quam	quam	SCONJ	G-	_	8	advcl	_	Ref=1.18.7
11	publicanis	publicanus	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	10	iobj	_	Ref=1.18.7
12	responsum	respondeo	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	10	fixed	_	Ref=1.18.7
13	sit	sum	AUX	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux:pass	_	Ref=1.18.7

~~~


