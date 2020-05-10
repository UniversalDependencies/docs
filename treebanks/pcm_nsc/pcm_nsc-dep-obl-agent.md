---
layout: base
title:  'Statistics of obl:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obl:agent`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pcm_nsc-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pcm_nsc-dep-obl-lvc.html">obl:lvc</a></tt>, <tt><a href="pcm_nsc-dep-obl-mod.html">obl:mod</a></tt>.

14 nodes (0%) are attached to their parents as `obl:agent`.

12 instances of `obl:agent` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (9; 64% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	di	the	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=85203|AlignEnd=85406|Gloss=DEF.ART
2	English	English	ADJ	_	_	3	amod	_	AlignBegin=85406|AlignEnd=85780|Gloss=English
3	man	man	NOUN	_	_	4	xcomp	_	AlignBegin=85780|AlignEnd=86020|Gloss=man
4	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=86020|AlignEnd=86180|Gloss=be
5	wanted	want	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	xcomp	_	AlignBegin=86180|AlignEnd=86687|Gloss=want.IND.PST.FIN
6	by	by	ADP	_	_	9	case	_	AlignBegin=86687|AlignEnd=86820|Gloss=by
7	{	{	PUNCT	_	_	9	punct	_	AlignBegin=86687|AlignEnd=86820|Gloss=PUNCT
8	former	former	ADJ	_	_	9	amod	_	AlignBegin=86820|AlignEnd=87120|Gloss=former
9	club	club	NOUN	_	_	5	obl:agent	_	AlignBegin=87120|AlignEnd=87370|Gloss=club
10	|a	|a	PUNCT	_	_	11	punct	_	AlignBegin=87370|AlignEnd=88010|Gloss=PUNCT
11	Southampton	Southampton	PROPN	_	_	9	appos	_	AlignBegin=87370|AlignEnd=88010|Gloss=Southampton
12	ah	ah	INTJ	_	_	11	discourse	_	AlignBegin=88010|AlignEnd=88110|Gloss=ah
13	}	}	PUNCT	_	_	9	punct	_	AlignBegin=88010|AlignEnd=88110|Gloss=PUNCT
14	//	//	PUNCT	_	_	4	punct	_	AlignBegin=88010|AlignEnd=88110|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 obl:agent	color:blue
1	#	#	PUNCT	_	_	4	punct	_	AlignBegin=80080|AlignEnd=80460|Gloss=PUNCT
2	Jesus	Jesus	PROPN	_	_	4	nsubj	_	AlignBegin=80460|AlignEnd=80901|Gloss=Jesus
3	con	con	AUX	_	Aspect=Cons	4	aux	_	AlignBegin=80901|AlignEnd=81190|Gloss=CONS
4	answer	answer	VERB	_	_	0	root	_	AlignBegin=81190|AlignEnd=81570|Gloss=answer
5	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	AlignBegin=81570|AlignEnd=81709|Gloss=ACC.SG.3
6	sey	sey	SCONJ	_	_	13	mark	_	AlignBegin=81709|AlignEnd=81950|Gloss=COMP
7	[	[	PUNCT	_	_	13	punct	_	AlignBegin=81950|AlignEnd=81980|Gloss=PUNCT
8	[eng	[eng	PUNCT	_	_	13	punct	_	AlignBegin=81950|AlignEnd=81980|Gloss=PUNCT
9	yes	yes	INTJ	_	_	13	discourse	_	AlignBegin=81980|AlignEnd=82503|Gloss=yes
10	it	it	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	expl:subj	_	AlignBegin=82503|AlignEnd=82700|Gloss=NOM.NT.SG.3
11	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	AlignBegin=82700|AlignEnd=82890|Gloss=be.IND.SG.3.PRS.FIN
12	very	very	ADV	_	_	13	advmod	_	AlignBegin=82890|AlignEnd=83200|Gloss=very
13	possible	possible	ADJ	_	_	4	ccomp	_	AlignBegin=83200|AlignEnd=83840|Gloss=possible
14	#	#	PUNCT	_	_	16	punct	_	AlignBegin=83840|AlignEnd=84112|Gloss=PUNCT
15	for	for	ADP	_	_	16	case	_	AlignBegin=84112|AlignEnd=84250|Gloss=for
16	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	13	obl:agent	_	AlignBegin=84250|AlignEnd=84419|Gloss=NOM.2
17	to	to	ADP	_	_	18	mark	_	AlignBegin=84419|AlignEnd=84590|Gloss=to
18	do	do	VERB	_	_	16	ccomp	_	AlignBegin=84590|AlignEnd=84710|Gloss=do
19	wetin	wetin	PRON	_	PronType=Int	18	obj	_	AlignBegin=84710|AlignEnd=84990|Gloss=what.Q
20	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	AlignBegin=84990|AlignEnd=85139|Gloss=NOM.SG.1
21	dey	dey	AUX	_	Aspect=Imp	22	aux	_	AlignBegin=85139|AlignEnd=85253|Gloss=IPFV
22	do	do	VERB	_	_	19	acl:relcl	_	AlignBegin=85253|AlignEnd=85391|Gloss=do
23	|c	|c	PUNCT	_	_	26	punct	_	AlignBegin=85391|AlignEnd=85421|Gloss=PUNCT
24	but	but	CCONJ	_	_	26	cc	_	AlignBegin=85421|AlignEnd=85575|Gloss=but
25	dere	dere	PRON	_	_	26	expl:subj	_	AlignBegin=85575|AlignEnd=85790|Gloss=there
26	is	be	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	AlignBegin=85790|AlignEnd=85930|Gloss=be.IND.SG.3.PRS.FIN
27	a	a	DET	_	Definite=Ind|PronType=Art	28	det	_	AlignBegin=85930|AlignEnd=86074|Gloss=INDF.ART
28	condition	condition	NOUN	_	_	26	dep	_	AlignBegin=86074|AlignEnd=86630|Gloss=condition
29	eng]	eng]	PUNCT	_	_	13	punct	_	AlignBegin=86630|AlignEnd=86660|Gloss=PUNCT
30	//]	//]	PUNCT	_	_	13	punct	_	AlignBegin=86630|AlignEnd=86660|Gloss=PUNCT
31	//	//	PUNCT	_	_	4	punct	_	AlignBegin=86630|AlignEnd=86660|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 23 obl:agent	color:blue
1	{	{	PUNCT	_	_	3	punct	_	AlignBegin=183177|AlignEnd=183207|Gloss=PUNCT
2	if	if	SCONJ	_	_	3	dep	_	AlignBegin=183207|AlignEnd=183430|Gloss=if
3	an	a	DET	_	Definite=Ind|PronType=Art	34	dep	_	AlignBegin=183430|AlignEnd=183550|Gloss=INDF.ART
4	||	||	PUNCT	_	_	3	punct	_	AlignBegin=183550|AlignEnd=183580|Gloss=PUNCT
5	if	if	SCONJ	_	_	8	mark	_	AlignBegin=183580|AlignEnd=183820|Gloss=if
6	}	}	PUNCT	_	_	5	punct	_	AlignBegin=183820|AlignEnd=184086|Gloss=PUNCT
7	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	AlignBegin=183820|AlignEnd=184086|Gloss=NOM.PL.3
8	bring	bring	VERB	_	_	3	conj:dicto	_	AlignBegin=184116|AlignEnd=184380|Gloss=bring
9	form	form	NOUN	_	_	8	obj	_	AlignBegin=184380|AlignEnd=184789|Gloss=form
10	say	say	VERB	_	_	8	compound:svc	_	AlignBegin=184789|AlignEnd=185020|Gloss=say
11	[	[	PUNCT	_	_	18	punct	_	AlignBegin=185020|AlignEnd=185050|Gloss=PUNCT
12	[eng	[eng	PUNCT	_	_	18	punct	_	AlignBegin=185020|AlignEnd=185050|Gloss=PUNCT
13	{	{	PUNCT	_	_	14	punct	_	AlignBegin=185020|AlignEnd=185050|Gloss=PUNCT
14	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	AlignBegin=185050|AlignEnd=185250|Gloss=NOM.PL.3
15	||	||	PUNCT	_	_	16	punct	_	AlignBegin=185250|AlignEnd=185280|Gloss=PUNCT
16	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	conj:dicto	_	AlignBegin=185280|AlignEnd=185421|Gloss=NOM.SG.3
17	}	}	PUNCT	_	_	14	punct	_	AlignBegin=185421|AlignEnd=185451|Gloss=PUNCT
18	see	see	VERB	_	_	10	parataxis	_	AlignBegin=185451|AlignEnd=185670|Gloss=see
19	dere	dere	PRON	_	_	27	expl:subj	_	AlignBegin=185670|AlignEnd=185777|Gloss=there
20	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	AlignBegin=185777|AlignEnd=185876|Gloss=be.IND.SG.3.PRS.FIN
21	a	a	DET	_	Definite=Ind|PronType=Art	23	det	_	AlignBegin=185876|AlignEnd=185980|Gloss=INDF.ART
22	{	{	PUNCT	_	_	23	punct	_	AlignBegin=185980|AlignEnd=186010|Gloss=PUNCT
23	pro-	X	X	_	_	27	obl:agent	_	AlignBegin=186010|AlignEnd=186175|Gloss=X
24	||	||	PUNCT	_	_	25	punct	_	AlignBegin=186175|AlignEnd=186205|Gloss=PUNCT
25	problem	problem	NOUN	_	_	23	conj:dicto	_	AlignBegin=186205|AlignEnd=186650|Gloss=problem
26	}	}	PUNCT	_	_	23	punct	_	AlignBegin=186650|AlignEnd=186680|Gloss=PUNCT
27	dere	dere	ADV	_	_	18	xcomp	_	AlignBegin=186680|AlignEnd=186970|Gloss=there
28	eng]	eng]	PUNCT	_	_	18	punct	_	AlignBegin=186970|AlignEnd=187000|Gloss=PUNCT
29	]	]	PUNCT	_	_	18	punct	_	AlignBegin=186970|AlignEnd=187000|Gloss=PUNCT
30	<	<	PUNCT	_	_	3	punct	_	AlignBegin=186970|AlignEnd=187000|Gloss=PUNCT
31	#	#	PUNCT	_	_	34	punct	_	AlignBegin=187000|AlignEnd=187500|Gloss=PUNCT
32	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	34	nsubj	_	AlignBegin=187500|AlignEnd=187580|Gloss=NOM.SG.3
33	go	go	AUX	_	Aspect=Prosp	34	aux	_	AlignBegin=187580|AlignEnd=187710|Gloss=PROSP
34	bring	bring	VERB	_	_	0	root	_	AlignBegin=187710|AlignEnd=187910|Gloss=bring
35	di	the	DET	_	Definite=Def|PronType=Art	36	det	_	AlignBegin=187910|AlignEnd=188020|Gloss=DEF.ART
36	form	form	NOUN	_	_	34	obj	_	AlignBegin=188020|AlignEnd=188389|Gloss=form
37	//=	//=	PUNCT	_	_	40	punct	_	AlignBegin=188389|AlignEnd=188419|Gloss=PUNCT
38	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	40	nsubj	_	AlignBegin=188419|AlignEnd=188567|Gloss=NOM.PL.1
39	go	go	AUX	_	Aspect=Prosp	40	aux	_	AlignBegin=188567|AlignEnd=188690|Gloss=PROSP
40	fill	fill	VERB	_	_	34	parataxis:conj	_	AlignBegin=188690|AlignEnd=188880|Gloss=fill
41	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	40	obj	_	AlignBegin=188880|AlignEnd=189042|Gloss=ACC.SG.3
42	//=	//=	PUNCT	_	_	46	punct	_	AlignBegin=189042|AlignEnd=189072|Gloss=PUNCT
43	#	#	PUNCT	_	_	46	punct	_	AlignBegin=189072|AlignEnd=189275|Gloss=PUNCT
44	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	46	nsubj	_	AlignBegin=189275|AlignEnd=189345|Gloss=NOM.PL.1
45	go	go	AUX	_	Aspect=Prosp	46	aux	_	AlignBegin=189345|AlignEnd=189450|Gloss=PROSP
46	pass	pass	VERB	_	_	40	parataxis:conj	_	AlignBegin=189450|AlignEnd=189745|Gloss=pass
47	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	46	obj	_	AlignBegin=189745|AlignEnd=189885|Gloss=ACC.SG.3
48	to	to	ADP	_	_	50	case	_	AlignBegin=189885|AlignEnd=189985|Gloss=to
49	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	50	nmod:poss	_	AlignBegin=189985|AlignEnd=190219|Gloss=PL.1.POSS
50	oga	oga	NOUN	_	_	46	obl:arg	_	AlignBegin=190219|AlignEnd=190465|Gloss=boss
51	patapata	patapata	ADV	_	_	50	advmod	_	AlignBegin=190465|AlignEnd=190865|Gloss=completely
52	for	for	ADP	_	_	53	dep	_	AlignBegin=190865|AlignEnd=191045|Gloss=for
53	up	up	ADP	_	_	50	dep	_	AlignBegin=191045|AlignEnd=191386|Gloss=up
54	#	#	PUNCT	_	_	59	punct	_	AlignBegin=191386|AlignEnd=192260|Gloss=PUNCT
55	wey	wey	SCONJ	_	_	59	mark	_	AlignBegin=192260|AlignEnd=192370|Gloss=REL
56	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	59	nsubj	_	AlignBegin=192370|AlignEnd=192410|Gloss=NOM.SG.3
57	go	go	AUX	_	Aspect=Prosp	59	aux	_	AlignBegin=192410|AlignEnd=192480|Gloss=PROSP
58	{	{	PUNCT	_	_	59	punct	_	AlignBegin=192480|AlignEnd=192510|Gloss=PUNCT
59	go	go	VERB	_	_	50	acl:relcl	_	AlignBegin=192510|AlignEnd=192720|Gloss=go
60	do	do	VERB	_	_	59	xcomp	_	AlignBegin=192720|AlignEnd=192850|Gloss=do
61	di	the	DET	_	Definite=Def|PronType=Art	62	det	_	AlignBegin=192850|AlignEnd=192993|Gloss=DEF.ART
62	wor-	X	X	_	_	60	obj	_	AlignBegin=192993|AlignEnd=193355|Gloss=X
63	||	||	PUNCT	_	_	64	punct	_	AlignBegin=193355|AlignEnd=193385|Gloss=PUNCT
64	send	send	VERB	_	_	59	conj:dicto	_	AlignBegin=193385|AlignEnd=193881|Gloss=send
65	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	64	obj	_	AlignBegin=193881|AlignEnd=194060|Gloss=ACC.PL.1
66	}	}	PUNCT	_	_	64	punct	_	AlignBegin=194060|AlignEnd=194090|Gloss=PUNCT
67	{	{	PUNCT	_	_	69	punct	_	AlignBegin=194060|AlignEnd=194090|Gloss=PUNCT
68	to	to	ADP	_	_	69	case	_	AlignBegin=194090|AlignEnd=194198|Gloss=to
69	s-	X	X	_	_	64	obl:arg	_	AlignBegin=194198|AlignEnd=194400|Gloss=X
70	||	||	PUNCT	_	_	72	punct	_	AlignBegin=194400|AlignEnd=194430|Gloss=PUNCT
71	to	to	ADP	_	_	72	mark	_	AlignBegin=194430|AlignEnd=194630|Gloss=to
72	go	go	VERB	_	_	69	conj:dicto	_	AlignBegin=194630|AlignEnd=194743|Gloss=go
73	out	out	ADP	_	_	72	compound:prt	_	AlignBegin=194743|AlignEnd=194903|Gloss=out
74	|c	|c	PUNCT	_	_	77	punct	_	AlignBegin=194903|AlignEnd=194933|Gloss=PUNCT
75	to	to	ADP	_	_	77	mark	_	AlignBegin=194933|AlignEnd=195146|Gloss=to
76	eh	eh	INTJ	_	_	77	discourse	_	AlignBegin=195146|AlignEnd=195340|Gloss=eh
77	go	go	VERB	_	_	69	conj	_	AlignBegin=195340|AlignEnd=195420|Gloss=go
78	and	and	CCONJ	_	_	79	cc	_	AlignBegin=195420|AlignEnd=195570|Gloss=and
79	do	do	VERB	_	_	77	conj	_	AlignBegin=195570|AlignEnd=195660|Gloss=do
80	di	the	DET	_	Definite=Def|PronType=Art	81	det	_	AlignBegin=195660|AlignEnd=195823|Gloss=DEF.ART
81	work	work	NOUN	_	_	79	obj	_	AlignBegin=195823|AlignEnd=196085|Gloss=work
82	}	}	PUNCT	_	_	69	punct	_	AlignBegin=196085|AlignEnd=196115|Gloss=PUNCT
83	//	//	PUNCT	_	_	34	punct	_	AlignBegin=196085|AlignEnd=196115|Gloss=PUNCT

~~~


