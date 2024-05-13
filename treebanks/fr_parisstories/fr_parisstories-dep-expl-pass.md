---
layout: base
title:  'Statistics of expl:pass in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:pass`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_parisstories-dep-expl-pv.html">expl:pv</a></tt>, <tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>.

23 nodes (0%) are attached to their parents as `expl:pass`.

23 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (23; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 expl:pass	color:blue
1	en	en	ADP	_	_	2	case	_	_
2	fait	fait	NOUN	_	Gender=Masc|Number=Sing	14	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	quand	quand	SCONJ	_	_	6	mark	_	_
5	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	mets	mettre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	14	advcl	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	farine	farine	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	à	à	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	final	final	NOUN	_	Gender=Masc|Number=Sing	6	obl:mod	_	_
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
13	se	soi	PRON	_	Person=3|PronType=Prs	14	expl:pass	_	_
14	décolle	décoller	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


