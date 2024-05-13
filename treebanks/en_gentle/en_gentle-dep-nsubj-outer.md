---
layout: base
title:  'Statistics of nsubj:outer in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gentle-dep-nsubj-pass.html">nsubj:pass</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:outer`.

10 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.6.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (5; 50% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj:outer	5:nsubj:outer|6:nsubj:xsubj	Discourse=joint-list_m:27->26:1:_|Entity=(14-person-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	in	in	ADP	IN	_	4	case	4:case	_
4	general	general	ADJ	JJ	Degree=Pos	5	obl	5:obl:in	_
5	feeling	feel	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=feel-ing
6	better	well	ADV	RBR	Degree=Cmp	5	xcomp	5:xcomp	MSeg=bett-er|SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:outer	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-list_m:63->5:1:_|Entity=(11-person-giv:inact-cf1-2-coref
2	patient	patient	NOUN	NN	Number=Sing	5	nsubj:outer	5:nsubj:outer	Entity=11)
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	receive	receive	VERB	VB	VerbForm=Inf	0	root	0:root	_
6	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	Entity=(111-abstract-new-cf4-5-sgl(11-person-giv:act-cf1-1-ana)
7	sixth	sixth	ADJ	JJ	Degree=Pos|NumForm=Word|NumType=Ord	10	amod	10:amod	MSeg=six-th
8	and	and	CCONJ	CC	_	9	cc	9:cc	_
9	final	final	ADJ	JJ	Degree=Pos	7	conj	7:conj:and|10:amod	_
10	cycle	cycle	NOUN	NN	Number=Sing	5	obj	5:obj	_
11	of	of	ADP	IN	_	12	case	12:case	_
12	chemotherapy	chemotherapy	NOUN	NN	Number=Sing	10	nmod	10:nmod:of	Entity=(9-event-giv:inact-cf2-1-coref)111)|MSeg=chemo-therap-y
13	today	today	NOUN	NN	Number=Sing	5	obl:tmod	5:obl:tmod	Entity=(98-time-giv:inact-cf3-1-coref)|MSeg=to-day|SpaceAfter=No
14	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:outer	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=joint-other_m:74->70:2:_|Entity=(116-abstract-giv:inact-cf3-2-coref-Comprehensive_metabolic_panel(11-person-giv:act-cf1*-1-ana)
2	CMP	CMP	PROPN	NNP	Number=Sing	4	nsubj:outer	4:nsubj:outer	Entity=116)
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	pending	pend	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=pend-ing
5	from	from	ADP	IN	_	6	case	6:case	_
6	today	today	NOUN	NN	Number=Sing	4	obl	4:obl:from	Entity=(98-time-giv:act-cf2-1-coref)|MSeg=to-day|SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


