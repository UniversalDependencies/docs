---
layout: base
title:  'Statistics of nummod:det in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod:det`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nummod.html">nummod</a></tt>.
There are also 2 other language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>, <tt><a href="pcm_nsc-dep-nummod-periph.html">nummod:periph</a></tt>.

393 nodes (0%) are attached to their parents as `nummod:det`.

393 instances of `nummod:det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39185750636132.

The following 5 pairs of parts of speech are connected with `nummod:det`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (376; 96% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (12; 3% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:det	color:blue
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=27115|AlignEnd=27579|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=27579|AlignEnd=27670|Gloss=NOM.SG.1
3	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=27670|AlignEnd=27840|Gloss=be
4	dere	dere	ADV	_	_	3	xcomp	_	AlignBegin=27840|AlignEnd=27980|Gloss=there
5	o	o	PART	_	PartType=Disc	4	advmod:emph	_	AlignBegin=27980|AlignEnd=28240|Gloss=EMPH
6	//=	//=	PUNCT	_	_	8	punct	_	AlignBegin=28240|AlignEnd=28270|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=28270|AlignEnd=28450|Gloss=NOM.SG.1
8	school	school	VERB	_	_	3	parataxis:conj	_	AlignBegin=28450|AlignEnd=28830|Gloss=school
9	o	o	PART	_	PartType=Disc	8	advmod:emph	_	AlignBegin=28830|AlignEnd=29030|Gloss=EMPH
10	//=	//=	PUNCT	_	_	11	punct	_	AlignBegin=28830|AlignEnd=29030|Gloss=PUNCT
11	setay	sotay	ADV	_	_	8	parataxis:conj	_	AlignBegin=29060|AlignEnd=29610|Gloss=such_that
12	four	four	NUM	_	NumType=Card	13	nummod:det	_	AlignBegin=29610|AlignEnd=29950|Gloss=four.CARD
13	years	year	NOUN	_	Number=Plur	11	obl:mod	_	AlignBegin=29950|AlignEnd=30270|Gloss=year.PL
14	//	//	PUNCT	_	_	3	punct	_	AlignBegin=30270|AlignEnd=30300|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod:det	color:blue
1	sey	sey	SCONJ	_	_	8	cc	_	AlignBegin=405090|AlignEnd=405300|Gloss=COMP
2	WAEC	WAEC	PROPN	_	_	8	dislocated	_	AlignBegin=405300|AlignEnd=405690|Gloss=WAEC
3	now	now	ADV	_	_	2	advmod:emph	_	AlignBegin=405690|AlignEnd=405902|Gloss=now
4	<	<	PUNCT	_	_	2	punct	_	AlignBegin=405902|AlignEnd=405932|Gloss=PUNCT
5	na	na	AUX	_	PartType=Cop	8	cop	_	AlignBegin=405932|AlignEnd=406104|Gloss=be
6	thirty	thirty	NUM	_	NumType=Card	8	nummod:det	_	AlignBegin=406104|AlignEnd=406462|Gloss=thirty.CARD
7	eight	eight	NUM	_	NumType=Card	6	flat	_	AlignBegin=406462|AlignEnd=406682|Gloss=eight.CARD
8	thousand	thousand	NUM	_	NumType=Card	0	root	_	AlignBegin=406682|AlignEnd=406950|Gloss=thousand.CARD
9	>+	>+	PUNCT	_	_	12	punct	_	AlignBegin=406950|AlignEnd=406980|Gloss=PUNCT
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	AlignBegin=406980|AlignEnd=407070|Gloss=NOM.PL.3
11	dey	dey	AUX	_	Aspect=Imp	12	aux	_	AlignBegin=407070|AlignEnd=407240|Gloss=IPFV
12	write	write	VERB	_	_	8	advcl:cleft	_	AlignBegin=407240|AlignEnd=407517|Gloss=write
13	o	o	PART	_	PartType=Disc	12	advmod:emph	_	AlignBegin=407517|AlignEnd=407688|Gloss=EMPH
14	//	//	PUNCT	_	_	8	punct	_	AlignBegin=407688|AlignEnd=407718|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:det	color:blue
1	#	#	PUNCT	_	_	7	punct	_	AlignBegin=287862|AlignEnd=289080|Gloss=PUNCT
2	and	and	CCONJ	_	_	7	cc	_	AlignBegin=289080|AlignEnd=289150|Gloss=and
3	after	after	ADP	_	_	7	dep	_	AlignBegin=289150|AlignEnd=289340|Gloss=after
4	<	<	PUNCT	_	_	3	punct	_	AlignBegin=289340|AlignEnd=289370|Gloss=PUNCT
5	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	AlignBegin=289370|AlignEnd=289454|Gloss=NOM.PL.3
6	go	go	AUX	_	Aspect=Prosp	7	aux	_	AlignBegin=289454|AlignEnd=289542|Gloss=PROSP
7	say	say	VERB	_	_	0	root	_	AlignBegin=289542|AlignEnd=289720|Gloss=say
8	[eng	[eng	PUNCT	_	_	12	punct	_	AlignBegin=289720|AlignEnd=289750|Gloss=PUNCT
9	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	AlignBegin=289750|AlignEnd=289840|Gloss=NOM.PL.1
10	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	12	cop	_	AlignBegin=289840|AlignEnd=289950|Gloss=be.IND.PRS.FIN
11	one	one	NUM	_	NumType=Card	12	nummod:det	_	AlignBegin=289950|AlignEnd=290080|Gloss=one
12	Nigeria	_	PROPN	_	_	7	parataxis	_	AlignBegin=290080|AlignEnd=290680|Gloss=Nigeria
13	eng]	_	PUNCT	_	_	12	punct	_	AlignBegin=290680|AlignEnd=290710|Gloss=PUNCT
14	//]	_	PUNCT	_	_	12	punct	_	AlignBegin=290680|AlignEnd=290710|Gloss=PUNCT
15	//	_	PUNCT	_	_	7	punct	_	AlignBegin=290680|AlignEnd=290710|Gloss=PUNCT

~~~


