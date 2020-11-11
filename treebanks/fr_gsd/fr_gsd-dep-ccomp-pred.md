---
layout: base
title:  'Statistics of ccomp:pred in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `ccomp:pred`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="fr_gsd-dep-ccomp-agent.html">ccomp:agent</a></tt>, <tt><a href="fr_gsd-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="fr_gsd-dep-ccomp-obl.html">ccomp:obl</a></tt>.

104 nodes (0%) are attached to their parents as `ccomp:pred`.

104 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38461538461538.

The following 5 pairs of parts of speech are connected with `ccomp:pred`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (96; 92% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:pred	color:blue
1	«	«	PUNCT	_	_	2	punct	_	_
2	Est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|wordform=est
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	wordform=ce
4	qu'	que	SCONJ	_	_	7	mark	_	SpaceAfter=No
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	_
6	y	y	PRON	_	Person=3|PronType=Prs	7	dep:comp	_	_
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp:pred	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	poème	poème	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	11	det	_	_
11	matin	matin	NOUN	_	Gender=Masc|Number=Sing	7	obl:mod	_	_
12	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp:pred	color:blue
1	Auto-entrepreneur	auto-entrepreneur	NOUN	_	Gender=Masc|Number=Sing	0	root	_	wordform=auto-entrepreneur
2	:	:	PUNCT	_	_	3	punct	_	_
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	wordform=ce
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	intéressant	intéressant	ADJ	_	Gender=Masc|Number=Sing	3	ccomp:pred	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:pred	color:blue
1	«	«	PUNCT	_	_	4	punct	_	_
2	Être	être	VERB	_	VerbForm=Inf	4	dislocated	_	wordform=être
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
4	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	valeur	valeur	NOUN	_	Gender=Fem|Number=Sing	4	ccomp:pred	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	variable	variable	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	liée	lier	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	_
12	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


