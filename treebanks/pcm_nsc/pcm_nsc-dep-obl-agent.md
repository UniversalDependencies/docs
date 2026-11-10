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
1	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	Gloss=DEF.ART|WordAlignmentBegin=85203|WordAlignmentEnd=85406
2	English	English	ADJ	_	_	3	amod	_	Gloss=English|WordAlignmentBegin=85406|WordAlignmentEnd=85780
3	man	man	NOUN	_	_	4	nsubj	_	Gloss=man|WordAlignmentBegin=85780|WordAlignmentEnd=86020
4	dey	dey	VERB	_	VerbType=Cop	0	root	_	Gloss=be|WordAlignmentBegin=86020|WordAlignmentEnd=86180
5	wanted	want	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	ccomp	_	Gloss=want.IND.PST.FIN|WordAlignmentBegin=86180|WordAlignmentEnd=86687
6	by	by	ADP	_	_	9	case	_	Gloss=by|WordAlignmentBegin=86687|WordAlignmentEnd=86820
7	{	{	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=86687|WordAlignmentEnd=86820
8	former	former	ADJ	_	_	9	amod	_	Gloss=former|WordAlignmentBegin=86820|WordAlignmentEnd=87120
9	club	club	NOUN	_	_	5	obl:agent	_	Gloss=club|WordAlignmentBegin=87120|WordAlignmentEnd=87370
10	|a	|a	PUNCT	_	_	11	punct	_	Gloss=PUNCT|WordAlignmentBegin=87370|WordAlignmentEnd=88010
11	Southampton	Southampton	PROPN	_	_	9	appos	_	Gloss=Southampton|WordAlignmentBegin=87370|WordAlignmentEnd=88010
12	ah	ah	INTJ	_	_	11	discourse	_	Gloss=ah|WordAlignmentBegin=88010|WordAlignmentEnd=88110
13	}	}	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=88010|WordAlignmentEnd=88110
14	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=88010|WordAlignmentEnd=88110

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obl:agent	color:blue
1	#	#	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=31867|WordAlignmentEnd=32520
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	Gloss=SG.DEM|WordAlignmentBegin=32520|WordAlignmentEnd=32832
3	decision	decision	NOUN	_	_	4	nsubj	_	Gloss=decision|WordAlignmentBegin=32832|WordAlignmentEnd=33339
4	follow	follow	VERB	_	_	0	root	_	Gloss=follow|WordAlignmentBegin=33339|WordAlignmentEnd=33750
5	one	one	DET	_	Definite=Spec|PronType=Art	6	det	_	Gloss=SPEC.ART|WordAlignmentBegin=33750|WordAlignmentEnd=33955
6	motion	motion	NOUN	_	_	4	obj	_	Gloss=motion|WordAlignmentBegin=33955|WordAlignmentEnd=34390
7	wey	wey	SCONJ	_	_	9	mark	_	Gloss=REL|WordAlignmentBegin=34390|WordAlignmentEnd=34510
8	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	Gloss=NOM.PL.3|WordAlignmentBegin=34510|WordAlignmentEnd=34643
9	move	move	VERB	_	_	6	acl:relcl	_	Gloss=move|WordAlignmentBegin=34643|WordAlignmentEnd=34890
10	by	by	ADP	_	_	11	case	_	Gloss=by|WordAlignmentBegin=34890|WordAlignmentEnd=35170
11	Honourable	honourable	ADJ	_	_	9	obl:agent	_	Gloss=honourable|WordAlignmentBegin=35170|WordAlignmentEnd=35610
12	Abubakar	Abubakar	PROPN	_	_	11	flat	_	Gloss=Abubakar|WordAlignmentBegin=35610|WordAlignmentEnd=36250
13	Yunusa	Yunusa	PROPN	_	_	11	flat	_	Gloss=Yunusa|WordAlignmentBegin=36250|WordAlignmentEnd=37170
14	as	as	ADP	_	_	16	mark	_	Gloss=as|WordAlignmentBegin=37170|WordAlignmentEnd=37480
15	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=37480|WordAlignmentEnd=37559
16	come	come	VERB	_	_	4	advcl	_	Gloss=come|WordAlignmentBegin=37559|WordAlignmentEnd=37760
17	outside	outside	ADP	_	_	16	compound:prt	_	Gloss=outside|WordAlignmentBegin=37760|WordAlignmentEnd=38180
18	shout	shout	VERB	_	_	16	compound:svc	_	Gloss=shout|WordAlignmentBegin=38180|WordAlignmentEnd=38629
19	sey	sey	SCONJ	_	_	45	mark	_	Gloss=COMP|WordAlignmentBegin=38629|WordAlignmentEnd=38842
20	[	[	PUNCT	_	_	45	punct	_	Gloss=PUNCT|WordAlignmentBegin=38842|WordAlignmentEnd=38842
21	dis	dis	DET	_	Number=Sing|PronType=Dem	23	det	_	Gloss=SG.DEM|WordAlignmentBegin=38842|WordAlignmentEnd=39121
22	rising	rise	VERB	_	Tense=Pres|VerbForm=Part	23	acl	_	Gloss=rising.PRS.PTCP|WordAlignmentBegin=39121|WordAlignmentEnd=39550
23	price	price	NOUN	_	_	45	dislocated	_	Gloss=price|WordAlignmentBegin=39550|WordAlignmentEnd=39830
24	of	of	ADP	_	_	26	case	_	Gloss=of|WordAlignmentBegin=39830|WordAlignmentEnd=40060
25	different	different	ADJ	_	_	26	amod	_	Gloss=different|WordAlignmentBegin=40060|WordAlignmentEnd=40430
26	kinds	kind	NOUN	_	Number=Plur	23	nmod	_	Gloss=kind.PL|WordAlignmentBegin=40430|WordAlignmentEnd=40710
27	of	of	ADP	_	_	28	case	_	Gloss=of|WordAlignmentBegin=40710|WordAlignmentEnd=40950
28	cement	cement	NOUN	_	_	26	nmod	_	Gloss=cement|WordAlignmentBegin=40950|WordAlignmentEnd=41430
29	#	#	PUNCT	_	_	32	punct	_	Gloss=PUNCT|WordAlignmentBegin=41430|WordAlignmentEnd=41730
30	inside	inside	ADP	_	_	32	case	_	Gloss=inside|WordAlignmentBegin=41730|WordAlignmentEnd=42298
31	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	32	nmod:poss	_	Gloss=PL.1.POSS|WordAlignmentBegin=42298|WordAlignmentEnd=42443
32	country	country	NOUN	_	_	23	nmod	_	Gloss=country|WordAlignmentBegin=42443|WordAlignmentEnd=42840
33	without	without	ADP	_	_	34	case	_	Gloss=without|WordAlignmentBegin=42840|WordAlignmentEnd=43239
34	considerate	considerate	NOUN	_	_	23	nmod	_	Gloss=consideration|WordAlignmentBegin=43239|WordAlignmentEnd=44197
35	of	of	ADP	_	_	38	case	_	Gloss=of|WordAlignmentBegin=44197|WordAlignmentEnd=44583
36	di	di	DET	_	Definite=Def|PronType=Art	38	det	_	Gloss=DEF.ART|WordAlignmentBegin=44583|WordAlignmentEnd=44660
37	negative	negative	ADJ	_	_	38	amod	_	Gloss=negative|WordAlignmentBegin=44660|WordAlignmentEnd=45149
38	implicate	implicate	NOUN	_	_	34	nmod	_	Gloss=implication|WordAlignmentBegin=45149|WordAlignmentEnd=45926
39	inside	inside	ADP	_	_	42	case	_	Gloss=inside|WordAlignmentBegin=45926|WordAlignmentEnd=46380
40	di	di	DET	_	Definite=Def|PronType=Art	42	det	_	Gloss=DEF.ART|WordAlignmentBegin=46380|WordAlignmentEnd=46500
41	building	building	NOUN	_	_	42	compound	_	Gloss=building|WordAlignmentBegin=46500|WordAlignmentEnd=46886
42	industry	industry	NOUN	_	_	38	nmod	_	Gloss=industry|WordAlignmentBegin=46886|WordAlignmentEnd=47480
43	<	<	PUNCT	_	_	23	punct	_	Gloss=PUNCT|WordAlignmentBegin=47480|WordAlignmentEnd=47480
44	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=47480|WordAlignmentEnd=47650
45	get	get	VERB	_	_	18	ccomp	_	Gloss=get|WordAlignmentBegin=47650|WordAlignmentEnd=47840
46	as	as	ADP	_	_	48	mark	_	Gloss=as|WordAlignmentBegin=47840|WordAlignmentEnd=48040
47	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	48	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=48040|WordAlignmentEnd=48100
48	be	be	VERB	_	PartType=Cop	45	ccomp	_	Gloss=be|WordAlignmentBegin=48100|WordAlignmentEnd=48259
49	o	o	PART	_	PartType=Disc	45	advmod	_	Gloss=EMPH|WordAlignmentBegin=48259|WordAlignmentEnd=48540
50	]	]	PUNCT	_	_	45	punct	_	Gloss=PUNCT|WordAlignmentBegin=48540|WordAlignmentEnd=48540
51	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=48510|WordAlignmentEnd=48540

~~~


