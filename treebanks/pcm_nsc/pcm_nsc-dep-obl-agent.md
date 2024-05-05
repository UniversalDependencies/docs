---
layout: base
title:  'Statistics of obl:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obl:agent`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="pcm_nsc-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pcm_nsc-dep-obl-mod.html">obl:mod</a></tt>.

18 nodes (0%) are attached to their parents as `obl:agent`.

18 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.27777777777778.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (17; 94% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=85203|AlignEnd=85406|Gloss=DEF.ART
2	English	English	ADJ	_	_	3	amod	_	AlignBegin=85406|AlignEnd=85780|Gloss=English
3	man	man	NOUN	_	_	4	nsubj	_	AlignBegin=85780|AlignEnd=86020|Gloss=man
4	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=86020|AlignEnd=86180|Gloss=be
5	wanted	want	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	ccomp	_	AlignBegin=86180|AlignEnd=86687|Gloss=want.IND.PST.FIN
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
19	sey	sey	SCONJ	_	_	45	mark	_	AlignBegin=38629|AlignEnd=38842|Gloss=COMP
20	[	[	X	_	_	45	dep	_	AlignBegin=38842|AlignEnd=38842|Gloss=PUNCT
21	dis	dis	DET	_	Number=Sing|PronType=Dem	23	det	_	AlignBegin=38842|AlignEnd=39121|Gloss=SG.DEM
22	rising	rise	VERB	_	Tense=Pres|VerbForm=Part	23	acl	_	AlignBegin=39121|AlignEnd=39550|Gloss=rising.PRS.PTCP
23	price	price	NOUN	_	_	45	dislocated	_	AlignBegin=39550|AlignEnd=39830|Gloss=price
24	of	of	ADP	_	_	26	case	_	AlignBegin=39830|AlignEnd=40060|Gloss=of
25	different	different	ADJ	_	_	26	amod	_	AlignBegin=40060|AlignEnd=40430|Gloss=different
26	kinds	kind	NOUN	_	Number=Plur	23	nmod	_	AlignBegin=40430|AlignEnd=40710|Gloss=kind.PL
27	of	of	ADP	_	_	28	case	_	AlignBegin=40710|AlignEnd=40950|Gloss=of
28	cement	cement	NOUN	_	_	26	nmod	_	AlignBegin=40950|AlignEnd=41430|Gloss=cement
29	#	#	X	_	_	32	dep	_	AlignBegin=41430|AlignEnd=41730|Gloss=PUNCT
30	inside	inside	ADP	_	_	32	case	_	AlignBegin=41730|AlignEnd=42298|Gloss=inside
31	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	32	nmod:poss	_	AlignBegin=42298|AlignEnd=42443|Gloss=PL.1.POSS
32	country	country	NOUN	_	_	23	nmod	_	AlignBegin=42443|AlignEnd=42840|Gloss=country
33	without	without	ADP	_	_	34	case	_	AlignBegin=42840|AlignEnd=43239|Gloss=without
34	considerate	considerate	NOUN	_	_	23	nmod	_	AlignBegin=43239|AlignEnd=44197|Gloss=consideration
35	of	of	ADP	_	_	38	case	_	AlignBegin=44197|AlignEnd=44583|Gloss=of
36	di	di	DET	_	Definite=Def|PronType=Art	38	det	_	AlignBegin=44583|AlignEnd=44660|Gloss=DEF.ART
37	negative	negative	ADJ	_	_	38	amod	_	AlignBegin=44660|AlignEnd=45149|Gloss=negative
38	implicate	implicate	NOUN	_	_	34	nmod	_	AlignBegin=45149|AlignEnd=45926|Gloss=implication
39	inside	inside	ADP	_	_	42	case	_	AlignBegin=45926|AlignEnd=46380|Gloss=inside
40	di	di	DET	_	Definite=Def|PronType=Art	42	det	_	AlignBegin=46380|AlignEnd=46500|Gloss=DEF.ART
41	building	building	NOUN	_	_	42	compound	_	AlignBegin=46500|AlignEnd=46886|Gloss=building
42	industry	industry	NOUN	_	_	38	nmod	_	AlignBegin=46886|AlignEnd=47480|Gloss=industry
43	<	<	X	_	_	23	dep	_	AlignBegin=47480|AlignEnd=47480|Gloss=PUNCT
44	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	AlignBegin=47480|AlignEnd=47650|Gloss=NOM.SG.3
45	get	get	VERB	_	_	18	ccomp	_	AlignBegin=47650|AlignEnd=47840|Gloss=get
46	as	as	ADP	_	_	48	mark	_	AlignBegin=47840|AlignEnd=48040|Gloss=as
47	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	48	nsubj	_	AlignBegin=48040|AlignEnd=48100|Gloss=NOM.SG.3
48	be	be	VERB	_	PartType=Cop	45	ccomp	_	AlignBegin=48100|AlignEnd=48259|Gloss=be
49	o	o	PART	_	PartType=Disc	45	advmod	_	AlignBegin=48259|AlignEnd=48540|Gloss=EMPH
50	]	]	X	_	_	45	dep	_	AlignBegin=48540|AlignEnd=48540|Gloss=PUNCT
51	//	//	X	_	_	4	dep	_	AlignBegin=48510|AlignEnd=48540|Gloss=PUNCT

~~~


