---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj:pass	color:blue
1	mihi	ego	PRON	p-s---md-	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
2	ac	atque	CCONJ	c--------	_	3	cc	_	_
3	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	conj	_	_
4	providendum	provideo	VERB	v-s-g-nn-	Aspect=Prosp|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Gerundivum
5	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	LId=edo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	ne	ne	SCONJ	d--------	_	10	mark	_	LId=ne1
7	etiam	etiam	ADV	c--------	_	8	advmod:emph	_	_
8	a	ab	ADP	r--------	_	9	case	_	_
9	bonis	bonus	ADJ	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur	10	obl	_	_
10	desideretur	desidero	VERB	v3spsp---	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	csubj:pass	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
11	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


