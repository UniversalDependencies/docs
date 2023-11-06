---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_old-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="it_old-dep-flat-name.html">flat:name</a></tt>, <tt><a href="it_old-dep-flat-redup.html">flat:redup</a></tt>.

11 nodes (0%) are attached to their parents as `flat:foreign`.

11 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63636363636364.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-X.html">X</a></tt> (9; 82% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 18% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 flat:foreign	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Vexilla	vexilla	X	_	_	15	ccomp:reported	_	Canto=34|Verso=1
3	regis	regis	X	_	_	2	flat:foreign	_	Canto=34|Verso=1
4	prodeunt	prodeunt	X	_	_	2	flat:foreign	_	Canto=34|Verso=1
5	inferni	inferni	X	_	_	2	flat:foreign	_	Canto=34|Verso=1
6	verso	verso	ADP	_	_	8	case	_	Canto=34|Verso=2
7	di	di	ADP	_	_	8	case	_	Canto=34|Verso=2
8	noi	noi	PRON	pp1plco	Number=Plur|Person=1|PronType=Prs	2	obl:lmod	_	Canto=34|SpaceAfter=No|Verso=2
9	;	;	PUNCT	_	_	12	punct	_	_
10	però	però	ADV	cssc	_	12	mark	_	Canto=34|Verso=2
11	dinanzi	dinanzi	ADV	b	_	12	advmod:lmod	_	Canto=34|Verso=2
12	mira	mirare	VERB	vta1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	Canto=34|SpaceAfter=No|Verso=2
13	»	»	PUNCT	_	_	12	punct	_	SpaceAfter=No
14	,	,	PUNCT	_	_	12	punct	_	_
15	disse	dire	VERB	vta3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=34|Verso=3
16	'l	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	det	_	Canto=34|Verso=3
17	maestro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	15	nsubj	_	Canto=34|Verso=3
18	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	_	Canto=34|SpaceAfter=No|Verso=3
19	,	,	PUNCT	_	_	24	punct	_	_
20	«	«	PUNCT	_	_	24	punct	_	SpaceAfter=No
21	se	se	SCONJ	cssv	_	24	mark	_	Canto=34|Verso=3
22	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	24	nsubj	_	Canto=34|Verso=3
23	'l	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	obj	_	Canto=34|Verso=3
24	discerni	discernere	VERB	vta2ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	Canto=34|SpaceAfter=No|Verso=3
25	»	»	PUNCT	_	_	24	punct	_	SpaceAfter=No
26	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 flat:foreign	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Pape	pape	X	_	Foreign=Yes	11	ccomp:reported	_	Canto=7|Verso=1
3	Satàn	Satan	PROPN	_	_	2	flat:foreign	_	Canto=7|SpaceAfter=No|Verso=1
4	,	,	PUNCT	_	_	5	punct	_	_
5	pape	pape	X	_	Foreign=Yes	2	flat:foreign	_	Canto=7|Verso=1
6	Satàn	Satan	PROPN	_	_	2	flat:foreign	_	Canto=7|Verso=1
7	aleppe	aleppe	X	_	Foreign=Yes	2	flat:foreign	_	Canto=7|SpaceAfter=No|Verso=1
8	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
9	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
10	,	,	PUNCT	_	_	2	punct	_	_
11	cominciò	cominciare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=7|Verso=2
12	Pluto	Pluto	PROPN	np	_	11	nsubj	_	Canto=7|Verso=2
13	con	con	ADP	epskm	_	15	case	_	Canto=7|Verso=2
14	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	Canto=7|Verso=2
15	voce	voce	NOUN	sf3fs	Gender=Fem|Number=Sing	11	obl	_	Canto=7|Verso=2
16	chioccia	chioccio	ADJ	a1fs	Gender=Fem|Number=Sing	15	amod	_	Canto=7|SpaceAfter=No|Verso=2
17	;	;	PUNCT	_	_	27	punct	_	_
18	e	e	CCONJ	cscc	_	27	cc	_	Canto=7|Verso=3
19	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	20	det	_	Canto=7|Verso=3
20	savio	savio	NOUN	sm2ms	Gender=Masc|Number=Sing	27	nsubj	_	Canto=7|Verso=3
21	gentil	gentile	ADJ	a2ms	Number=Sing	20	amod	_	Canto=7|SpaceAfter=No|Verso=3
22	,	,	PUNCT	_	_	25	punct	_	_
23	che	che	PRON	pr	PronType=Rel	25	nsubj	_	Canto=7|Verso=3
24	tutto	tutto	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Tot	25	obj	_	Canto=7|Verso=3
25	seppe	sapere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	acl:relcl	_	Canto=7|SpaceAfter=No|Verso=3
26	,	,	PUNCT	_	_	25	punct	_	_
27	disse	dire	VERB	vta3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	parataxis	_	Canto=7|Verso=4
28	per	per	ADP	epsf	_	29	mark	_	Canto=7|Verso=4
29	confortare	confortare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	27	advcl	_	Canto=7|Verso=4
30	mi	mi	PRON	pp1sxac	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	29	obj	_	Canto=7|Verso=4
31	:	:	PUNCT	_	_	35	punct	_	_
32	«	«	PUNCT	_	_	35	punct	_	SpaceAfter=No
33	Non	non	ADV	b	PronType=Neg	35	advmod:neg	_	Canto=7|Verso=4
34	ti	ti	PRON	pp2syda	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	35	iobj	_	Canto=7|Verso=4
35	noccia	nuocere	VERB	vi2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	ccomp:reported	_	Canto=7|Verso=4
36	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	Canto=7|Verso=5
37	tua	tuo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	38	det:poss	_	Canto=7|Verso=5
38	paura	paura	NOUN	sf1fs	Gender=Fem|Number=Sing	35	nsubj	_	Canto=7|SpaceAfter=No|Verso=5
39	;	;	PUNCT	_	_	49	punct	_	_
40	ché	ché	SCONJ	cssc	_	49	mark	_	Canto=7|SpaceAfter=No|Verso=5
41	,	,	PUNCT	_	_	42	punct	_	_
42	poder	potere	NOUN	vta2fpsm3ms	Gender=Masc|Number=Sing	49	orphan	_	Canto=7|Verso=5
43	ch'	che	PRON	pr	PronType=Rel	45	obj	_	Canto=7|SpaceAfter=No|Verso=5
44	elli	egli	PRON	pp3mslso	Gender=Masc|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	Canto=7|Verso=5
45	abbia	avere	VERB	vta5cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	42	acl:relcl	_	Canto=7|SpaceAfter=No|Verso=5
46	,	,	PUNCT	_	_	42	punct	_	_
47	non	non	ADV	b	PronType=Neg	49	advmod:neg	_	Canto=7|Verso=6
48	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	49	iobj	_	Canto=7|Verso=6
49	torrà	togliere	VERB	vta2ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	35	advcl	_	Canto=7|Verso=6
50	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	51	det	_	Canto=7|Verso=6
51	scender	scendere	VERB	vta2fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	49	ccomp	_	Canto=7|Verso=6
52	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	53	det	_	Canto=7|Verso=6
53	roccia	roccia	NOUN	sf1fs	Gender=Fem|Number=Sing	51	obj	_	Canto=7|SpaceAfter=No|Verso=6
54	»	»	PUNCT	_	_	35	punct	_	SpaceAfter=No
55	.	.	PUNCT	_	_	35	punct	_	_

~~~


