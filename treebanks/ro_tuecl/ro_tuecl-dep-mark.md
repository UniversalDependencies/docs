---
layout: base
title:  'Statistics of mark in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `mark`

This relation is universal.

221 nodes (5%) are attached to their parents as `mark`.

220 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40723981900452.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PART.html">PART</a></tt> (86; 39% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (66; 30% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (24; 11% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (16; 7% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (12; 5% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Și	și	CCONJ	_	Polarity=Pos	4	cc:preconj	_	_
3	cum	cum	ADV	_	PronType=Int,Rel	4	advmod	_	_
4	facem	face	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	_	Mood=Sub	7	mark	_	_
6	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:poss	_	_
7	văd	vedea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	corpul	corp	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Degeaba	degeaba	ADV	_	Degree=Pos	3	advmod	_	_
2	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	frumoasă	frumos	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
4	dacă	dacă	SCONJ	_	Polarity=Pos	6	mark	_	_
5	nu	nu	ADV	_	Polarity=Neg	6	advmod	_	_
6	ești	fi	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
7	cu	cu	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	6	obl	_	_
9	...	...	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 mark	color:blue
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


