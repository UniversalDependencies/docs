---
layout: base
title:  'Statistics of advcl:tcl in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-advcl.html">advcl</a></tt>.

20 nodes (0%) are attached to their parents as `advcl:tcl`.

16 instances of `advcl:tcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2.

The following 2 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (18; 90% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl:tcl	color:blue
1	Fetele	fată	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	știu	ști	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	tot	tot	ADV	_	Degree=Pos	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	până	până	SCONJ	_	Polarity=Pos	7	mark	_	_
6	le	el	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	7	iobj	_	_
7	întrebi	întreba	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl:tcl	_	_
8	de	de	ADP	_	AdpType=Prep|Case=Acc	11	mark	_	_
9	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	fixed	_	_
10	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	supărate	supărat	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	7	ccomp	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl:tcl	color:blue
1	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	frumoasă	frumos	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
3	și	și	CCONJ	_	Polarity=Pos	4	cc	_	_
4	cuminte	cuminte	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	_
5	până	până	SCONJ	_	Polarity=Pos	7	mark	_	_
6	îl	el	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	7	expl	_	_
7	refuzi	refuza	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	advcl:tcl	_	_
8	pe	pe	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	prost	prost	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	…	…	PUNCT	_	_	2	punct	_	_

~~~


