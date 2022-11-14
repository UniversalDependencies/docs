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
1	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=85203|AlignEnd=85406|Gloss=DEF.ART|SyllableCount=1|WordContour=lm
2	English	English	ADJ	_	_	3	amod	_	AlignBegin=85406|AlignEnd=85780|Gloss=English|SyllableCount=2|WordContour=mm
3	man	man	NOUN	_	_	4	nsubj	_	AlignBegin=85780|AlignEnd=86020|Gloss=man|SyllableCount=1|WordContour=mlh1
4	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=86020|AlignEnd=86180|Gloss=be|SyllableCount=1|WordContour=lh
5	wanted	want	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	ccomp	_	AlignBegin=86180|AlignEnd=86687|Gloss=want.IND.PST.FIN|SyllableCount=2|WordContour=hl
6	by	by	ADP	_	_	9	case	_	AlignBegin=86687|AlignEnd=86820|Gloss=by|SyllableCount=1|WordContour=lmm1
7	{	{	X	_	_	9	dep	_	AlignBegin=86687|AlignEnd=86820|Gloss=PUNCT
8	former	former	ADJ	_	_	9	amod	_	AlignBegin=86820|AlignEnd=87120|Gloss=former|SyllableCount=2|WordContour=mmh2
9	club	club	NOUN	_	_	5	obl:agent	_	AlignBegin=87120|AlignEnd=87370|Gloss=club|SyllableCount=1|WordContour=llm2
10	|a	|a	X	_	_	11	dep	_	AlignBegin=87370|AlignEnd=88010|Gloss=PUNCT
11	Southampton	Southampton	PROPN	_	_	9	appos	_	AlignBegin=87370|AlignEnd=88010|Gloss=Southampton|SyllableCount=3|WordContour=llh3
12	ah	ah	INTJ	_	_	11	discourse	_	AlignBegin=88010|AlignEnd=88110|Gloss=ah|SyllableCount=1|WordContour=lL
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
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	AlignBegin=32520|AlignEnd=32832|Gloss=SG.DEM|SyllableCount=1|WordContour=lLh1
3	decision	decision	NOUN	_	_	4	nsubj	_	AlignBegin=32832|AlignEnd=33339|Gloss=decision|SyllableCount=3|WordContour=Lmh2
4	follow	follow	VERB	_	_	0	root	_	AlignBegin=33339|AlignEnd=33750|Gloss=follow|SyllableCount=2|WordContour=lmh3
5	one	one	DET	_	Definite=Spec|PronType=Art	6	det	_	AlignBegin=33750|AlignEnd=33955|Gloss=SPEC.ART|SyllableCount=1|WordContour=mh
6	motion	motion	NOUN	_	_	4	obj	_	AlignBegin=33955|AlignEnd=34390|Gloss=motion|SyllableCount=2|WordContour=hm
7	wey	wey	SCONJ	_	_	9	mark	_	AlignBegin=34390|AlignEnd=34510|Gloss=REL|SyllableCount=1|WordContour=mh
8	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	9	nsubj	_	AlignBegin=34510|AlignEnd=34643|Gloss=NOM.PL.3|SyllableCount=1|WordContour=mm
9	move	move	VERB	_	_	6	acl:relcl	_	AlignBegin=34643|AlignEnd=34890|Gloss=move|SyllableCount=1|WordContour=mm
10	by	by	ADP	_	_	11	case	_	AlignBegin=34890|AlignEnd=35170|Gloss=by|SyllableCount=1|WordContour=mm
11	Honourable	honourable	ADJ	_	_	9	obl:agent	_	AlignBegin=35170|AlignEnd=35610|Gloss=honourable|SyllableCount=4|WordContour=lm
12	Abubakar	Abubakar	PROPN	_	_	11	flat	_	AlignBegin=35610|AlignEnd=36250|Gloss=Abubakar|SyllableCount=4|WordContour=mLH1
13	Yunusa	Yunusa	PROPN	_	_	11	flat	_	AlignBegin=36250|AlignEnd=37170|Gloss=Yunusa|SyllableCount=3|WordContour=LHL1
14	as	as	ADP	_	_	16	mark	_	AlignBegin=37170|AlignEnd=37480|Gloss=as|SyllableCount=1|WordContour=mh
15	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	AlignBegin=37480|AlignEnd=37559|Gloss=NOM.SG.3|SyllableCount=1|WordContour=hm
16	come	come	VERB	_	_	4	advcl	_	AlignBegin=37559|AlignEnd=37760|Gloss=come|SyllableCount=1|WordContour=hh
17	outside	outside	ADP	_	_	16	compound:prt	_	AlignBegin=37760|AlignEnd=38180|Gloss=outside|SyllableCount=2|WordContour=hml3
18	shout	shout	VERB	_	_	16	compound:svc	_	AlignBegin=38180|AlignEnd=38629|Gloss=shout|SyllableCount=1|WordContour=mlh2
19	sey	sey	SCONJ	_	_	44	mark	_	AlignBegin=38629|AlignEnd=38812|Gloss=COMP|SyllableCount=1|WordContour=hm
20	[	[	X	_	_	44	dep	_	AlignBegin=38812|AlignEnd=38842|Gloss=PUNCT
21	dis	dis	DET	_	Number=Sing|PronType=Dem	23	det	_	AlignBegin=38842|AlignEnd=39121|Gloss=SG.DEM|SyllableCount=1|WordContour=mmh2
22	rising	rise	VERB	_	Tense=Pres|VerbForm=Part	23	acl	_	AlignBegin=39121|AlignEnd=39550|Gloss=rising.PRS.PTCP|SyllableCount=2|WordContour=mh
23	price	price	NOUN	_	_	44	dislocated	_	AlignBegin=39550|AlignEnd=39830|Gloss=price|SyllableCount=1|WordContour=hm
24	of	of	ADP	_	_	26	case	_	AlignBegin=39830|AlignEnd=40060|Gloss=of|SyllableCount=1|WordContour=ml
25	different	different	ADJ	_	_	26	amod	_	AlignBegin=40060|AlignEnd=40430|Gloss=different|SyllableCount=3|WordContour=lh
26	kinds	kind	NOUN	_	Number=Plur	23	nmod	_	AlignBegin=40430|AlignEnd=40710|Gloss=kind.PL|SyllableCount=1|WordContour=hm
27	of	of	ADP	_	_	28	case	_	AlignBegin=40710|AlignEnd=40950|Gloss=of|SyllableCount=1|WordContour=ml
28	cement	cement	NOUN	_	_	26	nmod	_	AlignBegin=40950|AlignEnd=41730|Gloss=cement|SyllableCount=2|WordContour=lLh2
29	inside	inside	ADP	_	_	31	case	_	AlignBegin=41730|AlignEnd=42298|Gloss=inside|SyllableCount=2|WordContour=Llh3
30	we	we	PRON	_	Number=Plur|Person=1|Poss=Yes	31	nmod:poss	_	AlignBegin=42298|AlignEnd=42443|Gloss=PL.1.POSS|SyllableCount=1|WordContour=ll
31	country	country	NOUN	_	_	23	nmod	_	AlignBegin=42443|AlignEnd=42840|Gloss=country|SyllableCount=2|WordContour=mlh1
32	without	without	ADP	_	_	33	case	_	AlignBegin=42840|AlignEnd=43239|Gloss=without|SyllableCount=2|WordContour=lmh2
33	considerate	considerate	NOUN	_	_	23	nmod	_	AlignBegin=43239|AlignEnd=44197|Gloss=consideration|SyllableCount=4|WordContour=lLh3
34	of	of	ADP	_	_	37	case	_	AlignBegin=44197|AlignEnd=44583|Gloss=of|SyllableCount=1|WordContour=lLl3
35	di	di	DET	_	Definite=Def|PronType=Art	37	det	_	AlignBegin=44583|AlignEnd=44660|Gloss=DEF.ART|SyllableCount=1|WordContour=Ll
36	negative	negative	ADJ	_	_	37	amod	_	AlignBegin=44660|AlignEnd=45149|Gloss=negative|SyllableCount=3|WordContour=LmH3
37	implicate	implicate	NOUN	_	_	33	nmod	_	AlignBegin=45149|AlignEnd=45926|Gloss=implication|SyllableCount=3|WordContour=lLh3
38	inside	inside	ADP	_	_	41	case	_	AlignBegin=45926|AlignEnd=46380|Gloss=inside|SyllableCount=2|WordContour=llH2
39	di	di	DET	_	Definite=Def|PronType=Art	41	det	_	AlignBegin=46380|AlignEnd=46500|Gloss=DEF.ART|SyllableCount=1|WordContour=lLl2
40	building	building	NOUN	_	_	41	compound	_	AlignBegin=46500|AlignEnd=46886|Gloss=building|SyllableCount=2|WordContour=LhH2
41	industry	industry	NOUN	_	_	37	nmod	_	AlignBegin=46886|AlignEnd=47450|Gloss=industry|SyllableCount=3|WordContour=mlh1
42	<	<	X	_	_	23	dep	_	AlignBegin=47450|AlignEnd=47480|Gloss=PUNCT
43	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	44	nsubj	_	AlignBegin=47480|AlignEnd=47650|Gloss=NOM.SG.3|SyllableCount=1|WordContour=LL
44	get	get	VERB	_	_	18	ccomp	_	AlignBegin=47650|AlignEnd=47840|Gloss=get|SyllableCount=1|WordContour=lm
45	as	as	ADP	_	_	47	mark	_	AlignBegin=47840|AlignEnd=48040|Gloss=as|SyllableCount=1|WordContour=ml
46	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	47	nsubj	_	AlignBegin=48040|AlignEnd=48100|Gloss=NOM.SG.3|SyllableCount=1|WordContour=ml
47	be	be	VERB	_	PartType=Cop	44	ccomp	_	AlignBegin=48100|AlignEnd=48290|Gloss=be|SyllableCount=1|WordContour=lhL1
48	o	o	PART	_	PartType=Disc	44	advmod	_	AlignBegin=48290|AlignEnd=48510|Gloss=EMPH|SyllableCount=1|WordContour=hm
49	]	]	X	_	_	44	dep	_	AlignBegin=48510|AlignEnd=48540|Gloss=PUNCT
50	//	//	X	_	_	4	dep	_	AlignBegin=48510|AlignEnd=48540|Gloss=PUNCT

~~~


