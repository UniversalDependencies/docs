---
layout: base
title:  'Statistics of root in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `root`

This relation is universal.

210 nodes (5%) are attached to their parents as `root`.

210 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57142857142857.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (128; 61% instances), -<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (35; 17% instances), -<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (22; 10% instances), -<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (8; 4% instances), -<tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt> (8; 4% instances), -<tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt> (4; 2% instances), -<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (2; 1% instances), -<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (2; 1% instances), -<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Felul	fel	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	întâi	întâi	NUM	_	Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	_
3	sarmale	sarma	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
4	iar	iar	CCONJ	_	_	6	cc	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	desert	desert	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	_
7	buzele	buză	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	_
8	tale	tău	PRON	_	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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


