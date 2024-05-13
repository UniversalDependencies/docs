---
layout: base
title:  'Statistics of expl:pv in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_parisstories-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>.

48 nodes (0%) are attached to their parents as `expl:pv`.

48 instances of `expl:pv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3125.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (48; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pv	color:blue
1	donc	donc	ADV	_	_	8	advmod	_	_
2	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	ouais	ouais	INTJ	_	_	8	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
8	méfie	méfier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AttachTo=3@ParisStories_2021_loulouLeChat_18bis|Rel=conj:dicto|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


