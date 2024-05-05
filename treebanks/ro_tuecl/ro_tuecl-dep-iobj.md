---
layout: base
title:  'Statistics of iobj in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `iobj`

This relation is universal.

54 nodes (1%) are attached to their parents as `iobj`.

45 instances of `iobj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42592592592593.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (45; 83% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	2	iobj	_	_
2	urez	ura	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	noapte	noapte	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
5	că	că	SCONJ	_	Polarity=Pos	8	mark	_	_
6	dacă	dacă	SCONJ	_	Polarity=Pos	8	mark	_	_
7	era	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	erai	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	2	ccomp:pmod	_	_
11	în	în	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	pat	pat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	_
13	cu	cu	ADP	_	AdpType=Prep|Case=Acc	14	case	_	_
14	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 iobj	color:blue
1	dacă	dacă	SCONJ	_	Polarity=Pos	3	mark	_	_
2	bărbații	bărbat	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	3	nsubj	_	_
3	dau	da	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
4	femeilor	femeie	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	3	iobj	_	_
5	flori	floare	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	3	obj	_	_
6	de	de	ADP	_	AdpType=Prep|Case=Acc	11	mark	_	_
7	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	fixed	_	_
8	femeile	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	_
9	nu	nu	PART	_	Polarity=Neg	11	advmod	_	_
10	le	el	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	11	expl	_	_
11	dau	da	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	bărbaților	bărbat	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	11	iobj	_	_
13	bere	bere	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
14	?	?	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 iobj	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	6	vocative:mention	_	_
2	Odată	odată	ADV	_	Degree=Pos	6	advmod:tmod	_	_
3	de	de	ADP	_	AdpType=Prep|Case=Acc	2	fixed	_	_
4	mi-	eu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	6	iobj	_	SpaceAfter=No
5	l	el	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	6	obj	_	_
6	bag	băga	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	in	în	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	tine	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	6	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	6	punct	_	_
10	o	vrea	AUX	_	Number=Sing|Person=2	16	aux	_	_
11	să	să	PART	_	Mood=Sub	16	mark	_	SpaceAfter=No
12	-ți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	16	iobj	_	_
13	fie	fi	AUX	_	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	_
14	și	și	CCONJ	_	Polarity=Pos	16	advmod	_	_
15	mai	mai	ADV	_	_	16	advmod	_	_
16	bine	bine	ADJ	_	Degree=Pos	6	advmod	_	_
17	😘	😘	SYM	_	_	6	discourse:emo	_	SpaceAfter=No
18	😁	😁	SYM	_	_	6	discourse:emo	_	SpaceAfter=No
19	😁	😁	SYM	_	_	6	discourse:emo	_	_

~~~


