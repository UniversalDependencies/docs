---
layout: base
title:  'Statistics of obl:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obl:agent`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pcm_nsc-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pcm_nsc-dep-obl-lvc.html">obl:lvc</a></tt>, <tt><a href="pcm_nsc-dep-obl-mod.html">obl:mod</a></tt>.

12 nodes (0%) are attached to their parents as `obl:agent`.

12 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (9; 75% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=85203|AlignEnd=85406|Gloss=DEF.ART
2	English	English	ADJ	_	_	3	amod	_	AlignBegin=85406|AlignEnd=85780|Gloss=English
3	man	man	NOUN	_	_	4	xcomp:pred	_	AlignBegin=85780|AlignEnd=86020|Gloss=man
4	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=86020|AlignEnd=86180|Gloss=be
5	wanted	want	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	xcomp:obj	_	AlignBegin=86180|AlignEnd=86687|Gloss=want.IND.PST.FIN
6	by	by	ADP	_	_	9	case	_	AlignBegin=86687|AlignEnd=86820|Gloss=by
7	{	{	X	_	_	9	dep	_	AlignBegin=86687|AlignEnd=86820|Gloss=PUNCT
8	former	former	ADJ	_	_	9	amod	_	AlignBegin=86820|AlignEnd=87120|Gloss=former
9	club	club	NOUN	_	_	5	obl:agent	_	AlignBegin=87120|AlignEnd=87370|Gloss=club
10	|a	|a	X	_	_	11	dep	_	AlignBegin=87370|AlignEnd=88010|Gloss=PUNCT
11	Southampton	Southampton	PROPN	_	_	9	appos	_	AlignBegin=87370|AlignEnd=88010|Gloss=Southampton
12	ah	ah	INTJ	_	_	11	discourse	_	AlignBegin=88010|AlignEnd=88110|Gloss=ah
13	}	}	X	_	_	9	dep	_	AlignBegin=88010|AlignEnd=88110|Gloss=PUNCT
14	//	//	X	_	_	4	dep	_	AlignBegin=88010|AlignEnd=88110|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 obl:agent	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=80080|AlignEnd=80460|Gloss=PUNCT
2	Jesus	Jesus	PROPN	_	_	4	nsubj	_	AlignBegin=80460|AlignEnd=80901|Gloss=Jesus
3	con	con	AUX	_	Aspect=Cons	4	aux	_	AlignBegin=80901|AlignEnd=81190|Gloss=CONS
4	answer	answer	VERB	_	_	0	root	_	AlignBegin=81190|AlignEnd=81570|Gloss=answer
5	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	AlignBegin=81570|AlignEnd=81709|Gloss=ACC.SG.3
6	sey	sey	SCONJ	_	_	12	mark	_	AlignBegin=81709|AlignEnd=81950|Gloss=COMP
7	[	[	X	_	_	12	dep	_	AlignBegin=81950|AlignEnd=81980|Gloss=PUNCT
8	yes	yes	INTJ	_	_	12	discourse	_	AlignBegin=81980|AlignEnd=82503|Gloss=yes|Lang=en
9	it	it	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	expl:subj	_	AlignBegin=82503|AlignEnd=82700|Gloss=NOM.NT.SG.3|Lang=en
10	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	AlignBegin=82700|AlignEnd=82890|Gloss=be.IND.SG.3.PRS.FIN|Lang=en
11	very	very	ADV	_	_	12	advmod	_	AlignBegin=82890|AlignEnd=83200|Gloss=very|Lang=en
12	possible	possible	ADJ	_	_	4	ccomp:obj	_	AlignBegin=83200|AlignEnd=83840|Gloss=possible|Lang=en
13	#	#	X	_	_	15	dep	_	AlignBegin=83840|AlignEnd=84112|Gloss=PUNCT
14	for	for	ADP	_	_	15	case	_	AlignBegin=84112|AlignEnd=84250|Gloss=for|Lang=en
15	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	12	obl:agent	_	AlignBegin=84250|AlignEnd=84419|Gloss=NOM.2|Lang=en
16	to	to	ADP	_	_	17	mark	_	AlignBegin=84419|AlignEnd=84590|Gloss=to|Lang=en
17	do	do	VERB	_	_	15	ccomp:pred	_	AlignBegin=84590|AlignEnd=84710|Gloss=do|Lang=en
18	wetin	wetin	PRON	_	PronType=Int	17	obj	_	AlignBegin=84710|AlignEnd=84990|Gloss=what.Q|Lang=en
19	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	21	nsubj	_	AlignBegin=84990|AlignEnd=85139|Gloss=NOM.SG.1|Lang=en
20	dey	dey	AUX	_	Aspect=Imp	21	aux	_	AlignBegin=85139|AlignEnd=85253|Gloss=IPFV|Lang=en
21	do	do	VERB	_	_	18	acl:relcl	_	AlignBegin=85253|AlignEnd=85391|Gloss=do|Lang=en
22	|c	|c	X	_	_	25	dep	_	AlignBegin=85391|AlignEnd=85421|Gloss=PUNCT
23	but	but	CCONJ	_	_	25	cc	_	AlignBegin=85421|AlignEnd=85575|Gloss=but|Lang=en
24	dere	dere	PRON	_	_	25	expl:subj	_	AlignBegin=85575|AlignEnd=85790|Gloss=there|Lang=en
25	is	be	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	AlignBegin=85790|AlignEnd=85930|Gloss=be.IND.SG.3.PRS.FIN|Lang=en
26	a	a	DET	_	Definite=Ind|PronType=Art	27	det	_	AlignBegin=85930|AlignEnd=86074|Gloss=INDF.ART|Lang=en
27	condition	condition	NOUN	_	_	25	dep:comp	_	AlignBegin=86074|AlignEnd=86630|Gloss=condition|Lang=en
28	//]	//]	X	_	_	12	dep	_	AlignBegin=86630|AlignEnd=86660|Gloss=PUNCT
29	//	//	X	_	_	4	dep	_	AlignBegin=86630|AlignEnd=86660|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:agent	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=31867|AlignEnd=32520|Gloss=PUNCT
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	AlignBegin=32520|AlignEnd=32832|Gloss=SG.DEM
3	decision	decision	NOUN	_	_	4	nsubj	_	AlignBegin=32832|AlignEnd=33339|Gloss=decision
4	follow	follow	VERB	_	_	0	root	_	AlignBegin=33339|AlignEnd=33750|Gloss=follow
5	one	one	DET	_	Definite=Spec|PronType=Art	6	det	_	AlignBegin=33750|AlignEnd=33955|Gloss=SPEC.ART
6	motion	motion	NOUN	_	_	4	obj	_	AlignBegin=33955|AlignEnd=34390|Gloss=motion
7	wey	wey	SCONJ	_	_	9	mark	_	AlignBegin=34390|AlignEnd=34510|Gloss=REL
8	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	AlignBegin=34510|AlignEnd=34643|Gloss=NOM.PL.3
9	move	move	VERB	_	_	6	acl:relcl	_	AlignBegin=34643|AlignEnd=34890|Gloss=move
10	by	by	ADP	_	_	11	case	_	AlignBegin=34890|AlignEnd=35170|Gloss=by
11	Honourable	honourable	ADJ	_	_	9	obl:agent	_	AlignBegin=35170|AlignEnd=35610|Gloss=honourable
12	Abubakar	Abubakar	PROPN	_	_	11	flat	_	AlignBegin=35610|AlignEnd=36250|Gloss=Abubakar
13	Yunusa	Yunusa	PROPN	_	_	11	flat	_	AlignBegin=36250|AlignEnd=37170|Gloss=Yunusa
14	as	as	ADP	_	_	16	mark	_	AlignBegin=37170|AlignEnd=37480|Gloss=as
15	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	AlignBegin=37480|AlignEnd=37559|Gloss=NOM.SG.3
16	come	come	VERB	_	_	4	advcl	_	AlignBegin=37559|AlignEnd=37760|Gloss=come
17	outside	outside	ADP	_	_	16	compound:prt	_	AlignBegin=37760|AlignEnd=38180|Gloss=outside
18	shout	shout	VERB	_	_	16	compound:svc	_	AlignBegin=38180|AlignEnd=38629|Gloss=shout
19	sey	sey	SCONJ	_	_	44	mark	_	AlignBegin=38629|AlignEnd=38812|Gloss=COMP
20	[	[	X	_	_	44	dep	_	AlignBegin=38812|AlignEnd=38842|Gloss=PUNCT
21	dis	dis	DET	_	Number=Sing|PronType=Dem	23	det	_	AlignBegin=38842|AlignEnd=39121|Gloss=SG.DEM
22	rising	rise	VERB	_	Tense=Pres|VerbForm=Part	23	acl	_	AlignBegin=39121|AlignEnd=39550|Gloss=rising.PRS.PTCP
23	price	price	NOUN	_	_	44	dislocated	_	AlignBegin=39550|AlignEnd=39830|Gloss=price
24	of	of	ADP	_	_	26	case	_	AlignBegin=39830|AlignEnd=40060|Gloss=of
25	different	different	ADJ	_	_	26	amod	_	AlignBegin=40060|AlignEnd=40430|Gloss=different
26	kinds	kind	NOUN	_	Number=Plur	23	nmod	_	AlignBegin=40430|AlignEnd=40710|Gloss=kind.PL
27	of	of	ADP	_	_	28	case	_	AlignBegin=40710|AlignEnd=40950|Gloss=of
28	cement	cement	NOUN	_	_	26	nmod	_	AlignBegin=40950|AlignEnd=41730|Gloss=cement
29	inside	inside	ADP	_	_	31	case	_	AlignBegin=41730|AlignEnd=42298|Gloss=inside
30	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	31	nmod:poss	_	AlignBegin=42298|AlignEnd=42443|Gloss=PL.1.POSS
31	country	country	NOUN	_	_	23	nmod	_	AlignBegin=42443|AlignEnd=42840|Gloss=country
32	without	without	ADP	_	_	33	case	_	AlignBegin=42840|AlignEnd=43239|Gloss=without
33	considerate	considerate	NOUN	_	_	23	nmod	_	AlignBegin=43239|AlignEnd=44197|Gloss=consideration
34	of	of	ADP	_	_	37	case	_	AlignBegin=44197|AlignEnd=44583|Gloss=of
35	di	di	DET	_	Definite=Def|PronType=Art	37	det	_	AlignBegin=44583|AlignEnd=44660|Gloss=DEF.ART
36	negative	negative	ADJ	_	_	37	amod	_	AlignBegin=44660|AlignEnd=45149|Gloss=negative
37	implicate	implicate	NOUN	_	_	33	nmod	_	AlignBegin=45149|AlignEnd=45926|Gloss=implication
38	inside	inside	ADP	_	_	41	case	_	AlignBegin=45926|AlignEnd=46380|Gloss=inside
39	di	di	DET	_	Definite=Def|PronType=Art	41	det	_	AlignBegin=46380|AlignEnd=46500|Gloss=DEF.ART
40	building	building	NOUN	_	_	41	compound	_	AlignBegin=46500|AlignEnd=46886|Gloss=building
41	industry	industry	NOUN	_	_	37	nmod	_	AlignBegin=46886|AlignEnd=47450|Gloss=industry
42	<	<	X	_	_	23	dep	_	AlignBegin=47450|AlignEnd=47480|Gloss=PUNCT
43	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	44	nsubj	_	AlignBegin=47480|AlignEnd=47650|Gloss=NOM.SG.3
44	get	get	VERB	_	_	18	ccomp:obj	_	AlignBegin=47650|AlignEnd=47840|Gloss=get
45	as	as	ADP	_	_	47	mark	_	AlignBegin=47840|AlignEnd=48040|Gloss=as
46	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	47	nsubj	_	AlignBegin=48040|AlignEnd=48100|Gloss=NOM.SG.3
47	be	be	VERB	_	PartType=Cop	44	ccomp:pred	_	AlignBegin=48100|AlignEnd=48290|Gloss=be
48	o	o	PART	_	PartType=Disc	47	advmod:emph	_	AlignBegin=48290|AlignEnd=48510|Gloss=EMPH
49	]	]	X	_	_	44	dep	_	AlignBegin=48510|AlignEnd=48540|Gloss=PUNCT
50	//	//	X	_	_	4	dep	_	AlignBegin=48510|AlignEnd=48540|Gloss=PUNCT

~~~


