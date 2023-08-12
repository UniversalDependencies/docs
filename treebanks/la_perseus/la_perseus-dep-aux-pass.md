---
layout: base
title:  'Statistics of aux:pass in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-aux.html">aux</a></tt>.

15 nodes (0%) are attached to their parents as `aux:pass`.

9 instances of `aux:pass` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-AUX.html">AUX</a></tt> (15; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:pass	color:blue
1	earum	is	PRON	p-p---fg-	Case=Gen|Gender=Fem|Number=Plur|Person=3|PronType=Prs	2	nmod	_	LId=is1
2	exemplum	exemplum	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	4	nsubj:pass	_	LId=exemplum1
3	infra	infra	ADV	d--------	_	4	advmod	_	LId=infra1
4	scriptum	scribo	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LId=scribo1|TraditionalMood=Participium|TraditionalTense=Perfectum
5	est	sum	AUX	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	LId=edo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


