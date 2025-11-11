---
layout: base
title:  'Statistics of nsubj:outer in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_swell-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.3333333333333.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	_	_
2	lösning	lösning	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	nsubj:outer	_	_
3	till	till	ADP	_	_	4	case	_	CorrectionLabels=L-W
4	detta	denna	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	nmod	_	_
5	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	9	cop	_	_
7	att	att	SCONJ	_	_	9	mark	_	_
8	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	9	nsubj	_	_
9	inför	införa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	politik	politik	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obj	_	_
11	som	som	SCONJ	_	_	12	mark	_	_
12	ämne	ämne	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	9	xcomp	_	_
13	tidigt	tidigt	ADV	_	Degree=Pos	9	advmod	_	_
14	i	i	ADP	_	_	15	case	_	_
15	skolan	skola	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	obl	_	_
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


