---
layout: base
title:  'Statistics of advmod:tmod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-advmod.html">advmod</a></tt>.

38 nodes (1%) are attached to their parents as `advmod:tmod`.

21 instances of `advmod:tmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28947368421053.

The following 5 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (33; 87% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:tmod	color:blue
1	Când	când	ADV	_	PronType=Int,Rel	3	advmod:tmod	_	_
2	femeia	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	_
3	fierbe	fierbe	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl:tcl	_	SpaceAfter=No
4	...	...	PUNCT	_	_	3	punct	_	_
5	bărbatul	bărbat	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
6	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	evapora	evapora	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	0	root	_	CorrectForm=evaporă

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 38 advmod:tmod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	0	root	_	_
2	2	2	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	3	nummod	_	_
3	ore	oră	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	1	obl	_	_
4	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	5	case	_	CorrectForm=în
5	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	obl	_	_
6	ti	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Typo=Yes|Variant=Short	8	iobj	_	CorrectForm=ți-
7	as	avea	AUX	_	Number=Sing|Person=1|Typo=Yes	8	aux	_	CorrectForm=aș
8	face	face	VERB	_	Tense=Pres|VerbForm=Inf	3	acl	_	_
9	toate	tot	DET	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	10	det	_	_
10	placerile	plăcere	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur|Typo=Yes	8	obj	_	CorrectForm=plăcerile|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	2	2	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	13	nummod	_	_
13	ore	oră	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	10	conj	_	_
14	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	15	case	_	CorrectForm=în
15	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	18	obl	_	_
16	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Typo=Yes|Variant=Short	18	obj	_	CorrectForm=te-
17	as	avea	AUX	_	Number=Sing|Person=1|Typo=Yes	18	aux	_	CorrectForm=aș
18	tine	ține	VERB	_	Tense=Pres|Typo=Yes|VerbForm=Inf	13	acl	_	CorrectForm=ține
19	numai	numai	ADV	_	Degree=Pos	21	advmod	_	_
20	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	21	case	_	CorrectForm=în
21	pula	pulă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	18	obl	_	CorrectForm=pulă
22	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	23	cc	_	CorrectForm=și
23	excitata	excitat	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	21	conj	_	CorrectForm=excitată|SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	2	2	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	26	nummod	_	_
26	ore	oră	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	23	conj	_	_
27	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	28	case	_	CorrectForm=în
28	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	32	obl	_	_
29	nu	nu	PART	_	Polarity=Neg	32	advmod	_	_
30	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Typo=Yes|Variant=Short	32	obj	_	CorrectForm=te-
31	as	avea	AUX	_	Number=Sing|Person=1|Typo=Yes	32	aux	_	CorrectForm=aș
32	lasa	lăsa	VERB	_	Tense=Pres|Typo=Yes|VerbForm=Inf	26	acl	_	CorrectForm=lăsa
33	nici	nici	ADV	_	PronType=Neg	35	advmod	_	_
34	sa	să	PART	_	Mood=Sub|Typo=Yes	35	mark	_	CorrectForm=să
35	fumezi	fuma	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	32	ccomp	_	_
36	tig	țigară	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	35	obj	_	CorrectForm=țigara
37	de	de	ADP	_	AdpType=Prep|Case=Acc	38	case	_	_
38	dupa	după	ADV	_	Typo=Yes	36	advmod:tmod	_	CorrectForm=după

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 35 advmod:tmod	color:blue
1	🙄	🙄	SYM	_	_	3	discourse:emo	_	_
2	doamne	domn	NOUN	_	Case=Voc|Definite=Ind|Gender=Masc|Number=Sing	3	vocative	_	_
3	fereste	feri	VERB	_	Mood=Imp|Number=Sing|Person=2|Typo=Yes|VerbForm=Fin	0	root	_	CorrectForm=ferește
4	de	de	ADP	_	AdpType=Prep|Case=Acc	5	case	_	_
5	aia	acela	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem|Typo=Yes	3	obl	_	CorrectForm=ăia
6	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nsubj	_	_
7	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	8	expl:pv	_	_
8	aboneaza	abona	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	5	acl	_	CorrectForm=abonează
9	la	la	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
10	femei	femeie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	8	obl	_	_
11	doar	doar	ADV	_	Degree=Pos	15	advmod	_	_
12	ca	ca	SCONJ	_	Polarity=Pos	15	mark	_	_
13	sa	să	PART	_	Mood=Sub|Typo=Yes	15	mark	_	CorrectForm=să
14	le	el	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Weak	15	obj	_	_
15	injure	înjura	VERB	_	Mood=Sub|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	8	advcl	_	CorrectForm=înjure|SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	18	expl:pv	_	_
18	abonase	abona	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	3	conj	_	_
19	ieri	ieri	ADV	_	Degree=Pos	18	advmod:tmod	_	_
20	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	21	det	_	_
21	handicapat	handicapat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	18	nsubj	_	_
22	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	23	nsubj	_	_
23	crede	crede	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	acl	_	_
24	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	28	mark	_	CorrectForm=că
25	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	26	case	_	CorrectForm=în
26	6	6	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	27	nummod	_	SpaceAfter=No
27	$	dolar	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	28	obl	_	_
28	primeste	primi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	23	conj	_	CorrectForm=primește
29	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	31	advmod	_	CorrectForm=și
30	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	31	det	_	_
31	muie	muie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	28	obj	_	_
32	finalizare	finalizare	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	31	conj	_	_
33	etc	etcetera	ADV	_	Abbr=Yes	31	conj	_	_
34	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	38	cc	_	CorrectForm=și
35	cand	când	ADV	_	PronType=Int,Rel|Typo=Yes	33	advmod:tmod	_	CorrectForm=când
36	i-	el	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	38	iobj	_	SpaceAfter=No
37	am	avea	AUX	_	Person=1	38	aux	_	_
38	zis	zice	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	28	advcl:tcl	_	_
39	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	42	mark	_	CorrectForm=că
40	“	“	PUNCT	_	_	42	punct	_	SpaceAfter=No
41	NU	nu	PART	_	Polarity=Neg	42	advmod	_	_
42	FAC	face	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	38	ccomp	_	_
43	SERVICI	serviciu	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	42	obj	_	CorrectForm=serviciu
44	DE	de	ADP	_	AdpType=Prep|Case=Acc	45	case	_	_
45	ESCORTA	escortă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	43	nmod	_	CorrectForm=escortă|SpaceAfter=No
46	”	”	PUNCT	_	_	42	punct	_	_
47	Incepuse	începe	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|Typo=Yes|VerbForm=Fin	38	ccomp	_	CorrectForm=începuse
48	sa	să	PART	_	Mood=Sub|Typo=Yes	50	mark	_	CorrectForm=să
49	ma	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Typo=Yes	50	obj	_	CorrectForm=mă
50	injure	înjura	VERB	_	Mood=Sub|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	47	ccomp	_	CorrectForm=înjure
51	etc	etcetera	ADV	_	Abbr=Yes	50	conj	_	SpaceAfter=No
52	,	,	PUNCT	_	_	56	punct	_	_
53	apoi	apoi	ADV	_	Degree=Pos	56	advmod:tmod	_	_
54	sa	să	PART	_	Mood=Sub|Typo=Yes	56	mark	_	CorrectForm=să
55	imi	eu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Typo=Yes	56	iobj	_	CorrectForm=îmi
56	lase	lăsa	VERB	_	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	50	conj	_	_
57	comentarii	comentariu	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	56	obj	_	_
58	pe	pe	ADP	_	AdpType=Prep|Case=Acc	59	case	_	_
59	aici	aici	ADV	_	Degree=Pos	56	advmod	_	_
60	nasoale	nasol	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	56	xcomp	_	_

~~~


