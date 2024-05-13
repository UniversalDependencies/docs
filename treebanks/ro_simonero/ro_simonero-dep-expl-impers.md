---
layout: base
title:  'Statistics of expl:impers in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

20 nodes (0%) are attached to their parents as `expl:impers`.

20 instances of `expl:impers` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (20; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:impers	color:blue
1	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	persoanele	persoană	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	9	obl	_	_
3	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	BioNERLabel=B-DISO
5	zaharat	zaharat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	BioNERLabel=I-DISO
6	cunoscut	cunoscut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:impers	_	_
9	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	administra	administra	VERB	Vmnp	Tense=Pres|VerbForm=Inf	9	ccomp	_	_
11	dozele	doză	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	10	nsubj:pass	_	_
12	anterioare	anterior	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	insulină	insulină	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	nmod	_	BioNERLabel=B-CHEM|SpaceAfter=No
15	,	,	PUNCT	COMMA	_	17	punct	_	_
16	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	monitorizarea	monitorizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	obl	_	BioNERLabel=B-PROC
18	glicemică	glicemic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	BioNERLabel=I-PROC|SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


