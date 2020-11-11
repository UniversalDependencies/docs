---
layout: base
title:  'Statistics of obl:arg in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="de_gsd-dep-obl-agent.html">obl:agent</a></tt>.

1 nodes (0%) are attached to their parents as `obl:arg`.

1 instances of `obl:arg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 1 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 obl:arg	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	dep	_	FixTigerDep=Yes
2	FDP	FDP	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	NamedEntity=Yes
3	werde	werden	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
4	sich	er|es|sie	PRON	PRF	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	obj	_	_
5	an	an	ADP	APPR	_	7	case	_	_
6	weiteren	weit	ADJ	ADJA	Case=Dat|Gender=Fem|Number=Plur	7	amod	_	_
7	Verhandlungen	Verhandlung	NOUN	NN	Case=Dat|Gender=Fem|Number=Plur	12	obl:arg	_	_
8	über	über	ADP	APPR	_	10	case	_	_
9	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Kostendeckung	Kostendeckung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	_
11	nicht	nicht	PART	PTKNEG	Polarity=Neg	12	advmod	_	_
12	beteiligen	beteiligen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	12	punct	_	_

~~~


