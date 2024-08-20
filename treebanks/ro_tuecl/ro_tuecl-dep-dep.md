---
layout: base
title:  'Statistics of dep in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `dep`

This relation is universal.

2 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt> (1; 50% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 51 dep	color:blue
1	Sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	niste	niște	DET	_	Person=3|PronType=Ind|Typo=Yes	3	det	_	CorrectForm=niște
3	cetateni	cetățean	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur|Typo=Yes	0	root	_	CorrectForm=cetățeni
4	cu	cu	ADP	_	AdpType=Prep|Case=Acc	5	case	_	_
5	putza	puță	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	3	nmod	_	CorrectForm=puța
6	mica	mic	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	5	amod	_	CorrectForm=mică
7	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nsubj	_	_
8	injura	înjura	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	3	acl	_	CorrectForm=înjură
9	femei	femeie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	8	obj	_	_
10	daca	dacă	SCONJ	_	Polarity=Pos|Typo=Yes	13	mark	_	CorrectForm=dacă
11	nu	nu	PART	_	Polarity=Neg	13	advmod	_	_
12	le	el	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	13	obj	_	_
13	raspund	răspunde	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	8	advcl	_	CorrectForm=răspund
14	la	la	ADP	_	AdpType=Prep|Case=Acc	15	case	_	_
15	mesajele	mesaj	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	13	obl	_	_
16	penibile	penibil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	_
17	trimise	trimite	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	15	acl	_	_
18	pe	pe	ADP	_	AdpType=Prep|Case=Acc	19	case	_	_
19	facebook	Facebook	PROPN	_	Foreign=Yes	17	obl	_	Lang=en|SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_
21	Intreb	întreba	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin	3	parataxis	_	CorrectForm=Întreb
22	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	23	advmod	_	CorrectForm=și
23	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	21	nsubj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	astia	acesta	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem|Typo=Yes	28	nsubj	_	CorrectForm=ăștia
26	de	de	ADP	_	AdpType=Prep|Case=Acc	28	mark	_	_
27	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	26	fixed	_	_
28	au	avea	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	ccomp	_	_
29	aceleasi	același	DET	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Dem|Typo=Yes	30	det	_	CorrectForm=aceleași
30	drepturi	drept	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	28	obj	_	_
31	cu	cu	ADP	_	AdpType=Prep|Case=Acc	32	case	_	_
32	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	28	obl	_	SpaceAfter=No
33	?	?	PUNCT	_	_	21	punct	_	_
34	Si	și	CCONJ	_	Polarity=Pos|Typo=Yes	46	cc:preconj	_	CorrectForm=și
35	daca	dacă	SCONJ	_	Polarity=Pos|Typo=Yes	36	mark	_	CorrectForm=dacă
36	prind	prind	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	46	advcl	_	_
37	la	la	ADP	_	AdpType=Prep|Case=Acc	38	case	_	_
38	unu'	unul	PRON	_	Abbr=Yes|Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	36	obl	_	CorrectForm=unul
39	de	de	ADP	_	AdpType=Prep|Case=Acc	40	case	_	_
40	asta	acesta	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem|Typo=Yes	36	obl	_	CorrectForm=ăsta
41	degetele	deget	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	36	obj	_	_
42	intre	între	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	43	case	_	CorrectForm=între
43	usa	ușă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	36	obl	_	CorrectForm=ușă|SpaceAfter=No
44	,	,	PUNCT	_	_	36	punct	_	_
45	tot	tot	ADV	_	_	46	advmod	_	_
46	primesc	primi	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
47	amenda	amendă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	46	obj	_	CorrectForm=amendă|SpaceAfter=No
48	,	,	PUNCT	_	_	46	punct	_	_
49	nu	nu	PART	_	Polarity=Neg	46	conj	_	SpaceAfter=No
50	?	?	PUNCT	_	_	46	punct	_	_
51	Mmokai	Mmokai	SYM	_	_	46	dep	_	SpaceAfter=No
52	.	.	PUNCT	_	_	46	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 dep	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Ah	ah	INTJ	_	_	4	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	pune	pune	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-mi	eu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	iobj	_	SpaceAfter=No
6	-o	el	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	4	obj	_	_
7	pe	pe	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	față	față	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	_
9	sa	să	PART	_	Mood=Sub|Typo=Yes	11	mark	_	CorrectForm=să
10	ii	el	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Typo=Yes	11	iobj	_	CorrectForm=îi
11	simt	simți	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	dep	_	_
12	gustul	gust	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_

~~~


