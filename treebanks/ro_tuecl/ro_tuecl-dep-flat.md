---
layout: base
title:  'Statistics of flat in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `flat`

This relation is universal.

24 nodes (1%) are attached to their parents as `flat`.

24 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.54166666666667.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (18; 75% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (6; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Boris	Boris	PROPN	_	_	4	nsubj:pass	_	_
2	Backer	Backer	PROPN	_	_	1	flat	_	_
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	acuzat	acuza	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	sexism	sexism	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	_
7	că	că	SCONJ	_	Polarity=Pos	9	mark	_	_
8	a	avea	AUX	_	Number=Sing|Person=3	9	aux	_	_
9	spus	spune	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	advcl	_	_
10	că	că	SCONJ	_	Polarity=Pos	15	mark	_	_
11	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	13	det	_	_
12	anumită	anumit	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	13	det	_	_
13	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nsubj	_	_
14	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	drăguță	drăguț	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	ccomp	_	SpaceAfter=No
16	😂	😂	SYM	_	_	4	discourse:emo	_	SpaceAfter=No
17	😂	😂	SYM	_	_	4	discourse:emo	_	_
18	Ne-	eu	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak|Variant=Short	20	obj	_	SpaceAfter=No
19	am	avea	AUX	_	Number=Plur|Person=1	20	aux	_	_
20	dus	duce	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	parataxis	_	_
21	pe	pe	ADP	_	AdpType=Prep|Case=Acc	22	case	_	_
22	pulă	pulă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	20	obl	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 28 flat	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	FRUMOASA	frumos	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	0	root	_	CorrectForm=frumoasă
3	FOC	foc	ADJ	_	Definite=Ind|Degree=Sup|Gender=Fem|Number=Sing	2	amod	_	_
4	ESTI	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Typo=Yes|VerbForm=Fin	2	cop	_	CorrectForm=ești
5	ȘI	și	CCONJ	_	Polarity=Pos	6	cc	_	_
6	SEXSY	sexy	ADJ	_	Foreign=Yes|Typo=Yes	2	conj	_	CorrectForm=sexy|Lang=en
7	ȘI	și	CCONJ	_	Polarity=Pos	8	cc	_	_
8	AI	avea	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
9	OCHII	ochi	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	8	obj	_	_
10	FRUMOȘI	frumos	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
11	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	8	conj	_	_
12	DULCI	dulce	ADJ	_	Definite=Ind|Degree=Pos|Number=Plur	11	amod	_	_
13	ȘI	și	CCONJ	_	Polarity=Pos	15	cc	_	_
14	TE	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	15	expl:pv	_	_
15	ADOR	adora	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	conj	_	_
16	ALEXANDRA	ALEXANDRA	PROPN	_	_	2	appos	_	_
17	STAN	STAN	PROPN	_	_	16	flat	_	_
18	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_
19	DULCI	dulce	ADJ	_	Definite=Ind|Gender=Masc|Number=Plur	18	amod	_	_
20	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_
21	DULCI	dulce	ADJ	_	Definite=Ind|Gender=Masc|Number=Plur	20	amod	_	_
22	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_
23	DULCI	dulce	ADJ	_	Definite=Ind|Gender=Masc|Number=Plur	22	amod	_	_
24	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_
25	DULCI	dulce	ADJ	_	Definite=Ind|Gender=Masc|Number=Plur	24	amod	_	_
26	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_
27	DULCI	dulce	ADJ	_	Definite=Ind|Gender=Masc|Number=Plur	26	amod	_	_
28	PUPICI	pupic	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	16	flat	_	_

~~~


