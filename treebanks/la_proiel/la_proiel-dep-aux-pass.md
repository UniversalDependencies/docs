---
layout: base
title:  'Statistics of aux:pass in UD_Latin-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Latin-PROIEL: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_proiel-dep-aux.html">aux</a></tt>.

1613 nodes (1%) are attached to their parents as `aux:pass`.

1358 instances of `aux:pass` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14135151890887.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-AUX.html">AUX</a></tt> (1606; 100% instances), <tt><a href="la_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="la_proiel-pos-VERB.html">VERB</a></tt> (7; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:pass	color:blue
1	audistis	audio	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.21
2	quia	quia	SCONJ	G-	_	3	mark	_	ref=MATT_5.21
3	dictum	dico	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	ref=MATT_5.21
4	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	ref=MATT_5.21
5	antiquis	antiquus	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	3	iobj	_	ref=MATT_5.21

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	addit	addo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=2.20.2
2	etiam	etiam	ADV	Df	_	1	discourse	_	ref=2.20.2
3	se	se	PRON	Pk	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	5	nsubj:pass	_	ref=2.20.2
4	prius	prius	ADV	Df	Degree=Cmp	5	advmod	_	ref=2.20.2
5	occisum	occido#1	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	ref=2.20.2
6	iri	eo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	5	aux:pass	_	ref=2.20.2
7	ab	ab	ADP	R-	_	8	case	_	ref=2.20.2
8	eo	is	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl:agent	_	ref=2.20.2
9	quam	quam#1	ADV	Df	_	4	advmod	_	ref=2.20.2
10	me	ego	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=1|PronType=Prs	11	nsubj:pass	_	ref=2.20.2
11	violatum	violo	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	ccomp	_	ref=2.20.2
12	iri	eo	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Pass	11	aux:pass	_	ref=2.20.2

~~~


