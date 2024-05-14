---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="ro_tuecl-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_tuecl-dep-expl-pv.html">expl:pv</a></tt>.

1 nodes (0%) are attached to their parents as `expl:pass`.

1 instances of `expl:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pass	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	3	vocative:mention	_	_
2	Ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	băiat	băiat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	sau	sau	CCONJ	_	Polarity=Pos	5	cc	_	_
5	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	conj	_	_
6	că	că	SCONJ	_	Polarity=Pos	9	mark	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	PunctError
8	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pass	_	_
9	vede	vedea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
10	părul	păr	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj:pass	_	_
11	pe	pe	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	burtă	burtă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obl	_	_

~~~


