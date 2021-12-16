---
layout: base
title:  'Statistics of expl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-subj.html">expl:subj</a></tt>.

11 nodes (0%) are attached to their parents as `expl`.

11 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18181818181818.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (11; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	me	se	PRON	_	Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	y	y	PRON	_	Person=3|PronType=Prs	6	expl	_	_
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	Reported=Yes
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	truc	truc	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
9	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
10	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
11	pas	pas	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


