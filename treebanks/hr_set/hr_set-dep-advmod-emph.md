---
layout: base
title:  'Statistics of advmod:emph in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-advmod.html">advmod</a></tt>.

43 nodes (0%) are attached to their parents as `advmod:emph`.

43 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02325581395349.

The following 4 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="hr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (39; 91% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="hr_set-pos-SYM.html">SYM</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:emph	color:blue
1	Zemlja	zemlja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	bila	biti	AUX	Vap-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
4	bez	bez	ADP	Sg	Case=Gen	5	case	_	_
5	čelnika	čelnik	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
6	gotovo	gotovo	ADV	Rgp	Degree=Pos	7	advmod:emph	_	_
7	tri	tri	NUM	Mlc	NumType=Card	8	nummod	_	_
8	godine	godina	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	5	nmod	_	SpaceAfter=No|ToDo=nmod
9	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:emph	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	SpaceAfter=No
2	Već	već	ADV	Rgp	Degree=Pos	3	advmod:emph	_	_
3	mnogo	mnogo	ADV	Rgp	Degree=Pos	4	det	_	_
4	godina	godina	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	5	obl	_	_
5	imamo	imati	VERB	Vmr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	takav	takav	DET	Pd-msan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	sporazum	sporazum	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	sa	sa	ADP	Si	Case=Ins	9	case	_	_
9	Srbijom	Srbija	PROPN	Npfsi	Case=Ins|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 advmod:emph	color:blue
1	Sejdiu	Sejdiu	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	da	da	SCONJ	Cs	_	6	mark	_	_
4	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	to	taj	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
6	premalo	premalo	ADV	Rgp	Degree=Pos	2	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	15	punct	_	_
8	te	te	CCONJ	Cc	_	15	cc	_	_
9	da	da	SCONJ	Cs	_	15	mark	_	_
10	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
11	neke	neki	DET	Pi-fpn	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind	12	det	_	_
12	zemlje	zemlja	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	15	nsubj	_	_
13	u	u	ADP	Sl	Case=Loc	14	case	_	_
14	regiji	regija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	12	nmod	_	_
15	prodavale	prodavati	VERB	Vmp-pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	6	conj	_	_
16	samo	samo	ADV	Rgp	Degree=Pos	17	advmod:emph	_	_
17	jednu	jedan	DET	Mlcfsa	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	20	det	_	_
18	ili	ili	CCONJ	Cc	_	19	cc	_	_
19	nekoliko	nekoliko	ADV	Rgp	Degree=Pos|PronType=Ind	17	conj	_	_
20	tvrtki	tvrtka	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	15	obj	_	_
21	po	po	ADP	Sl	Case=Loc	23	case	_	_
22	toj	taj	DET	Pd-fsl	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	23	det	_	_
23	cijeni	cijena	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
24	.	.	PUNCT	Z	_	2	punct	_	_

~~~


