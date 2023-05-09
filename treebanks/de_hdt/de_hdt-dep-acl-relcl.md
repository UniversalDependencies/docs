---
layout: base
title:  'Statistics of acl:relcl in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-acl.html">acl</a></tt>.

1 nodes (0%) are attached to their parents as `acl:relcl`.

1 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.

The following 1 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 17 acl:relcl	color:blue
1	Mit	Mit	ADP	APPR	AdpType=Prep|Case=Dat	3	case	_	_
2	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Fall	Fall	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
4	der	der	DET	ART	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Mauer	Mauer	NOUN	NN	Gender=Fem|Number=Sing	3	nmod	_	_
6	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
7	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	Einzige	einzig	ADJ	ADJA	Degree=Pos|Gender=Neut|Number=Sing	9	nsubj	_	_
9	verschwinden	verschwinden	VERB	VVINF	VerbForm=Inf	0	root	_	_
10	,	,	PUNCT	$,	PunctType=Comm	17	punct	_	_
11	was	was	PRON	PRELS	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	17	nsubj	_	_
12	Deutsche	Deutsch	NOUN	NN	Number=Plur	17	obj	_	_
13	in	in	ADP	APPR	AdpType=Prep|Case=Dat	14	case	_	_
14	Ost	Ost	NOUN	NN	Gender=Neut|Number=Sing	12	nmod	_	_
15	und	und	CCONJ	KON	_	16	cc	_	_
16	West	West	NOUN	NN	Gender=Masc|Number=Sing	14	conj	_	_
17	eint	einen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	_
18	,	,	PUNCT	$,	PunctType=Comm	19	punct	_	_
19	befand	befinden	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	parataxis	_	_
20	schon	schon	ADV	ADV	_	19	advmod	_	_
21	Joseph	Joseph	PROPN	NE	Gender=Masc|Number=Sing	19	nsubj	_	_
22	Beuys	Beuys	PROPN	NE	Case=Nom|Number=Sing	21	flat:name	_	_
23	.	.	PUNCT	$.	PunctType=Peri	9	punct	_	_

~~~


