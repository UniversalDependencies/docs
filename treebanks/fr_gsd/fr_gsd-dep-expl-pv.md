---
layout: base
title:  'Statistics of expl:pv in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_gsd-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_gsd-dep-expl-subj.html">expl:subj</a></tt>.

892 nodes (0%) are attached to their parents as `expl:pv`.

892 instances of `expl:pv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19394618834081.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (892; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl:subj	_	wordform=il
2	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	s'	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	SpaceAfter=No
4	agir	agir	VERB	_	VerbForm=Inf	2	xcomp	_	_
5	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	vestige	vestige	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	_
8	de	de	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	église	église	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	Notre-Dame-du-Val	Notre-Dame-du-Val	PROPN	_	_	10	appos	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


