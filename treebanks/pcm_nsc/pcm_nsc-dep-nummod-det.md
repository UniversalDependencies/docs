---
layout: base
title:  'Statistics of nummod:det in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod:det`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nummod.html">nummod</a></tt>.
There are also 2 other language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>, <tt><a href="pcm_nsc-dep-nummod-periph.html">nummod:periph</a></tt>.

470 nodes (0%) are attached to their parents as `nummod:det`.

469 instances of `nummod:det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7.

The following 5 pairs of parts of speech are connected with `nummod:det`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (464; 99% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:det	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=27115|AlignEnd=27579|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=27579|AlignEnd=27670|Gloss=NOM.SG.1
3	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=27670|AlignEnd=27840|Gloss=be
4	dere	dere	ADV	_	_	3	xcomp:pred	_	AlignBegin=27840|AlignEnd=27980|Gloss=there
5	o	o	PART	_	PartType=Disc	4	advmod:emph	_	AlignBegin=27980|AlignEnd=28240|Gloss=EMPH
6	//=	//=	X	_	_	8	dep	_	AlignBegin=28240|AlignEnd=28270|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=28270|AlignEnd=28450|Gloss=NOM.SG.1
8	school	school	VERB	_	_	3	parataxis:conj	_	AlignBegin=28450|AlignEnd=28830|Gloss=school
9	o	o	PART	_	PartType=Disc	8	advmod:emph	_	AlignBegin=28830|AlignEnd=29030|Gloss=EMPH
10	//=	//=	X	_	_	11	dep	_	AlignBegin=28830|AlignEnd=29030|Gloss=PUNCT
11	setay	sotay	ADV	_	_	8	parataxis:conj	_	AlignBegin=29060|AlignEnd=29610|Gloss=such_that
12	four	four	NUM	_	NumType=Card	13	nummod:det	_	AlignBegin=29610|AlignEnd=29950|Gloss=four.CARD
13	years	year	NOUN	_	Number=Plur	11	obl:mod	_	AlignBegin=29950|AlignEnd=30270|Gloss=year.PL
14	//	//	X	_	_	3	dep	_	AlignBegin=30270|AlignEnd=30300|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod:det	color:blue
1	#	#	X	_	_	7	dep	_	AlignBegin=287862|AlignEnd=289080|Gloss=PUNCT
2	and	and	CCONJ	_	_	7	discourse	_	AlignBegin=289080|AlignEnd=289150|Gloss=and
3	after	after	ADP	_	_	7	dep	_	AlignBegin=289150|AlignEnd=289340|Gloss=after
4	<	<	X	_	_	3	dep	_	AlignBegin=289340|AlignEnd=289370|Gloss=PUNCT
5	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	AlignBegin=289370|AlignEnd=289454|Gloss=NOM.PL.3
6	go	go	AUX	_	Aspect=Prosp	7	aux	_	AlignBegin=289454|AlignEnd=289542|Gloss=PROSP
7	say	say	VERB	_	_	0	root	_	AlignBegin=289542|AlignEnd=289720|Gloss=say
8	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	AlignBegin=289750|AlignEnd=289840|Gloss=NOM.PL.1|Lang=en
9	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Cop	11	cop	_	AlignBegin=289840|AlignEnd=289950|Gloss=be.IND.PRS.FIN|Lang=en
10	one	one	NUM	_	NumType=Card	11	nummod:det	_	AlignBegin=289950|AlignEnd=290080|Gloss=one|Lang=en
11	Nigeria	Nigeria	PROPN	_	_	7	parataxis	_	AlignBegin=290080|AlignEnd=290680|Gloss=Nigeria|Lang=en
12	//]	//]	X	_	_	11	dep	_	AlignBegin=290680|AlignEnd=290710|Gloss=PUNCT
13	//	//	X	_	_	7	dep	_	AlignBegin=290680|AlignEnd=290710|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod:det	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=135438|AlignEnd=136242|Gloss=PUNCT
2	eh	eh	INTJ	_	_	3	discourse	_	AlignBegin=136242|AlignEnd=136312|Gloss=eh
3	making	make	VERB	_	Tense=Pres|VerbForm=Part	0	root	_	AlignBegin=136342|AlignEnd=136602|Gloss=make.PRS.PTCP
4	{	{	X	_	_	6	dep	_	AlignBegin=136602|AlignEnd=136632|Gloss=PUNCT
5	a	a	DET	_	Definite=Ind|PronType=Art	6	det	_	AlignBegin=136632|AlignEnd=136752|Gloss=INDF.ART
6	year	year	NOUN	_	_	3	obl:mod	_	AlignBegin=136752|AlignEnd=136885|Gloss=year
7	|c	|c	X	_	_	12	dep	_	AlignBegin=136885|AlignEnd=136915|Gloss=PUNCT
8	and	and	CCONJ	_	_	12	cc	_	AlignBegin=136915|AlignEnd=137390|Gloss=and
9	{	{	X	_	_	12	dep	_	AlignBegin=137390|AlignEnd=137420|Gloss=PUNCT
10	eh	eh	INTJ	_	_	12	discourse	_	AlignBegin=137420|AlignEnd=137491|Gloss=eh
11	nine	nine	NUM	_	NumType=Card	12	nummod:det	_	AlignBegin=137521|AlignEnd=137798|Gloss=nine.CARD
12	mon~	X	X	_	_	6	conj	_	AlignBegin=137798|AlignEnd=138012|Gloss=X
13	||	||	X	_	_	16	dep	_	AlignBegin=138012|AlignEnd=138042|Gloss=PUNCT
14	eh	eh	INTJ	_	_	16	discourse	_	AlignBegin=138042|AlignEnd=138252|Gloss=eh
15	ten	ten	NUM	_	_	16	nummod:det	_	AlignBegin=138282|AlignEnd=138571|Gloss=ten
16	months	month	NOUN	_	Number=Plur	12	reparandum	_	AlignBegin=138571|AlignEnd=138925|Gloss=month.PL
17	}	}	X	_	_	12	dep	_	AlignBegin=138925|AlignEnd=138955|Gloss=PUNCT
18	}	}	X	_	_	6	dep	_	AlignBegin=138925|AlignEnd=138955|Gloss=PUNCT
19	//	//	X	_	_	3	dep	_	AlignBegin=138925|AlignEnd=138955|Gloss=PUNCT

~~~


