---
layout: base
title:  'Statistics of discourse in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-INTJ.html">INTJ</a></tt> (1; 50% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-INTJ.html">INTJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	§	§	PUNCT	Z	_	5	punct	5:punct	_
2	O	o	INTJ	Ig	_	3	discourse	3:discourse	_
3	kaip	kaip	PART	Qg	_	5	advmod:emph	5:advmod:emph	_
4	būtų	būti	AUX	Vgm-3---n--ns-	Mood=Cnd|Person=3|Polarity=Pos|VerbForm=Fin	5	cop	5:cop	_
5	gražu	gražus	ADJ	Agpn--n	Definite=Ind|Degree=Pos|Gender=Neut	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	Z	_	12	punct	12:punct	_
7	jei	jei	SCONJ	Cg	_	12	mark	12:mark	_
8	ir	ir	PART	Qg	_	9	advmod:emph	9:advmod:emph	_
9	Seime	seimas	NOUN	Ncmsln-	Case=Loc|Gender=Masc|Number=Sing	12	obl	12:obl	_
10	kas	kas	PRON	Pg--nn	Case=Nom|Definite=Ind|PronType=Int	12	nsubj	12:nsubj	_
11	didingai	didingai	ADV	Rgp	Degree=Pos	12	advmod	12:advmod	_
12	užriktų	užrikti	VERB	Vgm-3---n--ns-	Mood=Cnd|Person=3|Polarity=Pos|VerbForm=Fin	5	acl	5:acl	_
13	Geresnio	geras	ADJ	Agcmsgn	Case=Gen|Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	14	amod	14:amod	_
14	paminklo	paminklas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	16	obj	16:obj	_
15	didvyriams	didvyris	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	16	obj	16:obj	_
16	nebus	nebūti	VERB	Vgmf3---y--ni-	Mood=Ind|Person=3|Polarity=Neg|Tense=Fut|VerbForm=Fin	5	parataxis	5:parataxis	SpaceAfter=No
17	,	,	PUNCT	Z	_	19	punct	19:punct	_
18	kaip	kaip	SCONJ	Cg	_	19	mark	19:mark	_
19	vykdymas	vykdymas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	16	obl	16:obl	_
20	jų	jis	PRON	Pgmpgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	21	nmod	21:nmod	_
21	idealo	idealas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	19	nmod	19:nmod	_
22	!..	!..	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Na	na	INTJ	Ig	_	5	discourse	5:discourse	_
2	dabar	dabar	ADV	Rgp	Degree=Pos	5	advmod	5:advmod	_
3	tai	tai	PART	Qg	_	5	advmod:emph	5:advmod:emph	_
4	jau	jau	ADV	Rgp	Degree=Pos	5	advmod	5:advmod	_
5	gausi	gauti	VERB	Vgmf2s--n--ni-	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	0:root	_
6	lupt	lupti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	_
7	"	"	PUNCT	Z	_	5	punct	5:punct	SpaceAfter=No
8	tėvai	tėvai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj	_
9	gali	galėti	VERB	Vgmp3p--n--ni-	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	parataxis	5:parataxis	_
10	pranešti	pranešti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
11	apie	apie	ADP	Sga	AdpType=Prep|Case=Acc	13	case	13:case	_
12	savo	savęs	PRON	Pg--gn	Case=Gen|Definite=Ind|PronType=Prs|Reflex=Yes	13	nmod	13:nmod	_
13	pyktį	pyktis	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	10	obl:arg	10:obl:arg	_
14	sakydami	sakyti	VERB	Vgh--pm-n--n--	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Conv	10	advcl	10:advcl	SpaceAfter=No
15	:	:	PUNCT	Z	_	14	punct	14:punct	SpaceAfter=No
16	"	"	PUNCT	Z	_	19	punct	19:punct	_
17	Aš	aš	PRON	Pg-snn	Case=Nom|Definite=Ind|Number=Sing|Person=1|PronType=Prs	19	nsubj	19:nsubj	_
18	labai	labai	ADV	Rgp	Degree=Pos	19	advmod	19:advmod	_
19	pykstu	pykti	VERB	Vgmp1s--n--ni-	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	acl	14:acl	SpaceAfter=No
20	!	!	PUNCT	Z	_	5	punct	5:punct	_

~~~


