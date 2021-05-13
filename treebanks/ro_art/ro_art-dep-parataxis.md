---
layout: base
title:  'Statistics of parataxis in UD_Romanian-ArT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-ArT: Relations: `parataxis`

This relation is universal.

4 nodes (1%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 2 pairs of parts of speech are connected with `parataxis`: <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="ro_art-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_art-pos-INTJ.html">INTJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	4	advmod	_	_
2	va	voi	AUX	Va--3p	Number=Plur|Person=3	4	aux	_	SpaceAfter=No
3	-s	să	PART	Qs	Mood=Sub	4	mark	_	_
4	cură	cur	VERB	Vmsp3s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	lucru	lucru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	_
6	bun	bun	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	_
8	mindui	minduescu	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
9	nâsă	năs	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis	color:blue
1	Am	am	INTJ	I	_	3	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	adu	aduc	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	3	obj	_	_
5	cara	cara	SCONJ	Csssp	Polarity=Pos	6	mark	_	_
6	poţ	pot	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


