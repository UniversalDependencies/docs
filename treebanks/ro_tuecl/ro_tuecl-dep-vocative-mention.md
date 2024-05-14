---
layout: base
title:  'Statistics of vocative:mention in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `vocative:mention`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-vocative.html">vocative</a></tt>.

80 nodes (2%) are attached to their parents as `vocative:mention`.

80 instances of `vocative:mention` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2125.

The following 7 pairs of parts of speech are connected with `vocative:mention`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (44; 55% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (13; 16% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (8; 10% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (7; 9% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (5; 6% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (2; 3% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative:mention	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 vocative:mention	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Ziua	zi	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	4	mark	_	_
4	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	acl	_	_
5	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative:mention	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	o	un	DET	_	Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	dulce	dulce	ADJ	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	păsărică	păsărică	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


