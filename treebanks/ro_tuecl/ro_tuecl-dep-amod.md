---
layout: base
title:  'Statistics of amod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `amod`

This relation is universal.

134 nodes (3%) are attached to their parents as `amod`.

112 instances of `amod` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14925373134328.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (121; 90% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	3	vocative:mention	_	_
2	Apetisant	apetisant	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	fund	fund	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	irezistibil	irezistibil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 amod	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	5	vocative:mention	_	_
2	Hmmmm	hm	INTJ	_	_	1	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	aș	avea	AUX	_	Number=Sing|Person=1	5	aux	_	_
5	vrea	vrea	VERB	_	Tense=Pres|VerbForm=Inf	0	root	_	_
6	și	și	CCONJ	_	Polarity=Pos	7	advmod	_	_
7	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	5	nsubj	_	_
8	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
9	așa	așa	ADJ	_	Degree=Pos	10	amod	_	_
10	party	party	NOUN	_	Degree=Pos|Foreign=Yes|Gender=Masc|Number=Plur	5	obj	_	Lang=en
11	cu	cu	ADP	_	AdpType=Prep|Case=Acc	13	case	_	_
12	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	13	det	_	_
13	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obl	_	_
14	așa	așa	ADJ	_	Degree=Pos	15	amod	_	_
15	frumoasă	frumoasă	NOUN	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 36 amod	color:blue
1	La	la	ADP	_	AdpType=Prep|Case=Acc	2	case	_	_
2	început	început	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	_
3	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
4	-	-	PUNCT	_	_	6	punct	_	_
5	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	zâna	zână	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
7	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No
9	esti	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Typo=Yes|VerbForm=Fin	10	cop	_	CorrectForm=ești
10	mândria	mândrie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	parataxis	_	_
11	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	SpaceAfter=No
12	!	!	PUNCT	_	_	10	punct	_	SpaceAfter=No
13	"	"	PUNCT	_	_	6	punct	_	_
14	In	în	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	15	case	_	CorrectForm=în
15	timpul	timp	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	21	obl	_	_
16	relației	relație	NOUN	_	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	_
17	"	"	PUNCT	_	_	21	punct	_	SpaceAfter=No
18	nu	nu	PART	_	Polarity=Neg	21	advmod	_	_
19	mă	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	21	expl:pv	_	_
20	mai	mai	ADV	_	_	21	advmod	_	_
21	f*te	fute	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	6	parataxis	_	CorrectForm=fute
22	la	la	ADP	_	AdpType=Prep|Case=Acc	23	case	_	_
23	creieri	creier	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	21	obl	_	SpaceAfter=No
24	!	!	PUNCT	_	_	21	punct	_	_
25	Lasă	lasă	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	6	parataxis	_	SpaceAfter=No
26	-mă	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak|Variant=Short	25	obj	_	_
27	în	în	ADP	_	AdpType=Prep|Case=Acc	28	case	_	_
28	p*la	pulă	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	25	obl	_	CorrectForm=pula
29	mea	meu	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	28	det	_	SpaceAfter=No
30	"	"	PUNCT	_	_	25	punct	_	_
31	Și	și	CCONJ	_	Polarity=Pos	35	cc:preconj	_	_
32	tot	tot	ADV	_	Degree=Pos	35	advmod	_	_
33	femeia	femeie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	35	nsubj	_	_
34	este	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	cop	_	_
35	aia	acela	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	6	parataxis	_	_
36	ciudată	ciudat	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	35	amod	_	SpaceAfter=No
37	....	....	PUNCT	_	_	35	punct	_	SpaceAfter=No
38	🙄	🙄	SYM	_	_	35	discourse:emo	_	SpaceAfter=No
39	😒	😒	SYM	_	_	35	discourse:emo	_	_

~~~


