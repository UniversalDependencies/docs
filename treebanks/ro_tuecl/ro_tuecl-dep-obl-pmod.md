---
layout: base
title:  'Statistics of obl:pmod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `obl:pmod`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ro_tuecl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ro_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:pmod`.

5 instances of `obl:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.2.

The following 3 pairs of parts of speech are connected with `obl:pmod`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 27 obl:pmod	color:blue
1	@Utlizator_fem	@Utlizator_fem	SYM	_	_	5	vocative:mention	_	_
2	raspunsul	răspuns	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Typo=Yes	5	nsubj	_	CorrectForm=răspunsul
3	clasic	clasic	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
4	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	altul	altul	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	0	root	_	SpaceAfter=No
6	:	:	PUNCT	_	_	5	punct	_	_
7	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	Multumesc	mulțumi	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin	5	parataxis	_	CorrectForm=Mulțumesc|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	Doamne	domn	PROPN	_	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	15	mark	_	CorrectForm=că
13	m-	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	15	obj	_	SpaceAfter=No
14	ai	avea	AUX	_	Number=Sing|Person=2	15	aux	_	_
15	facut	face	VERB	_	Gender=Masc|Number=Sing|Typo=Yes|VerbForm=Part	8	ccomp	_	CorrectForm=făcut
16	barbat	barbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing|Typo=Yes	15	xcomp	_	CorrectForm=bărbat|SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	_
18	si	și	CCONJ	_	Polarity=Pos|Typo=Yes	21	cc	_	CorrectForm=și
19	nu	nu	PART	_	Polarity=Neg	21	advmod	_	_
20	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	21	aux:pass	_	_
21	obligat	obliga	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	15	conj	_	_
22	sa	să	PART	_	Mood=Sub|Typo=Yes	24	mark	_	CorrectForm=să
23	ma	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Typo=Yes	24	expl:pv	_	CorrectForm=mă
24	apropii	apropia	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	21	ccomp	_	_
25	de	de	ADP	_	AdpType=Prep|Case=Acc	27	case	_	_
26	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	27	det	_	_
27	fund	fund	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	24	obl:pmod	_	_
28	paros	păros	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Typo=Yes	27	amod	_	CorrectForm=păros|SpaceAfter=No
29	...	...	PUNCT	_	_	24	punct	_	_
30	(	(	PUNCT	_	_	33	punct	_	SpaceAfter=No
31	in	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	33	case	_	CorrectForm=în
32	fiecare	fiecare	DET	_	Case=Acc,Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	33	det	_	_
33	seara	seară	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	24	parataxis	_	CorrectForm=seară|SpaceAfter=No
34	)	)	PUNCT	_	_	33	punct	_	SpaceAfter=No
35	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No
36	"	"	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:pmod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	5	vocative:mention	_	_
2	Sânii	sâni	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	5	nsubj	_	_
3	tăi	tu	DET	_	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
4	nu	nu	PART	_	Polarity=Neg	5	advmod	_	_
5	au	avea	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	nevoie	nevoie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	fixed	_	_
7	de	de	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
8	așa	așa	ADV	_	Degree=Pos	9	advmod	_	_
9	ceva	ceva	PRON	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Ind	5	obl:pmod	_	_
10	😍	😍	SYM	_	_	12	discourse:emo	_	_
11	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	perfecți	perfect	ADJ	_	Definite=Ind|Degree=Sup|Gender=Masc|Number=Plur	9	acl	_	_
13	🍒	🍒	SYM	_	_	5	discourse:emo	_	SpaceAfter=No
14	😋	😋	SYM	_	_	5	discourse:emo	_	SpaceAfter=No
15	♥️	♥️	SYM	_	_	5	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:pmod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Superba	superb	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	CorrectForm=superbă
3	esti	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	cop	_	CorrectForm=ești
4	îmi	eu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	5	iobj	_	_
5	este	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
6	dor	dor	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
7	de	de	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	tine	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	5	obl:pmod	_	_
9	ling	linge	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
10	curul	cur	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	obj	_	_
11	tau	tău	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs|Typo=Yes	10	det	_	CorrectForm=tău
12	sexy	sexy	ADJ	_	Foreign=Yes|Gender=Masc|Number=Sing|Typo=Yes	10	amod	_	CorrectForm=sexy|Lang=en
13	și	și	CCONJ	_	Polarity=Pos	14	cc	_	_
14	apetisanta	apetisant	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	12	conj	_	CorrectForm=apetisant
15	mânca	mânca	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|Typo=Yes|VerbForm=Fin	2	conj	_	CorrectForm=mănânc
16	gurita	guriță	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	15	obj	_	CorrectForm=gurița

~~~


