---
layout: base
title:  'Statistics of csubj:pass in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="it_old-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="it_old-dep-csubj-relcl.html">csubj:relcl</a></tt>.

3 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 37 csubj:pass	color:blue
1	Quella	quello	PRON	pd1fs	Gender=Fem|Number=Sing|PronType=Dem	2	nsubj	_	Canto=30|Verso=103
2	sonò	suonare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Canto=30|Verso=103
3	come	come	SCONJ	cssm	_	6	mark	_	Canto=30|Verso=103
4	fosse	essere	AUX	vi4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	Canto=30|Verso=103
5	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Canto=30|Verso=103
6	tamburo	tamburo	NOUN	sm2ms	Gender=Masc|Number=Sing	2	advcl:cmp	_	Canto=30|SpaceAfter=No|Verso=103
7	;	;	PUNCT	_	_	12	punct	_	_
8	e	e	CCONJ	cscc	_	10	cc	_	Canto=30|Verso=104
9	mastro	maestro	NOUN	sm2ms	Gender=Masc|Number=Sing	12	nsubj	_	Canto=30|Verso=104
10	Adamo	Adamo	PROPN	np	_	9	nmod	_	Canto=30|Verso=104
11	li	li	PRON	pp3msyda	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	iobj	_	Canto=30|Verso=104
12	percosse	percuotere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	Canto=30|Verso=104
13	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	Canto=30|Verso=104
14	volto	volto	NOUN	sm2ms	Gender=Masc|Number=Sing	12	obj	_	Canto=30|Verso=104
15	con	con	ADP	_	_	17	case	_	Canto=30|Comment=co-l|Verso=105
16	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Canto=30|Comment=co-l|Verso=105
17	braccio	braccio	NOUN	sm2ms	Gender=Masc|Number=Sing	12	obl	_	Canto=30|Verso=105
18	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	_	Canto=30|SpaceAfter=No|Verso=105
19	,	,	PUNCT	_	_	22	punct	_	_
20	che	che	PRON	pr	PronType=Rel	22	nsubj	_	Canto=30|Verso=105
21	non	non	ADV	b	PronType=Neg	22	advmod:neg	_	Canto=30|Verso=105
22	parve	parere	VERB	vi2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	acl:relcl	_	Canto=30|Verso=105
23	men	meno	ADV	b	Degree=Cmp	24	advmod	_	Canto=30|Verso=105
24	duro	duro	ADJ	a1msc-	Gender=Masc|Number=Sing	22	xcomp	_	Canto=30|SpaceAfter=No|Verso=105
25	,	,	PUNCT	_	_	26	punct	_	_
26	dicendo	dire	VERB	vta3gp	VerbForm=Conv|Voice=Act	12	advcl	_	Canto=30|Verso=106
27	a	a	ADP	epsk1d	_	28	case	_	Canto=30|Verso=106
28	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	obl:arg	_	Canto=30|SpaceAfter=No|Verso=106
29	:	:	PUNCT	_	_	45	punct	_	_
30	«	«	PUNCT	_	_	45	punct	_	SpaceAfter=No
31	ancor	ancora	ADV	_	_	35	advmod	_	Canto=30|Verso=106
32	che	che	SCONJ	_	_	35	mark	_	Canto=30|Verso=106
33	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	35	iobj	_	Canto=30|Verso=106
34	sia	essere	AUX	vi4cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	aux:pass	_	Canto=30|Verso=106
35	tolto	togliere	VERB	vtp2cps3	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	45	advcl	_	Canto=30|Verso=106
36	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	37	det	_	Canto=30|Verso=107
37	muover	muovere	VERB	vi2fpsm3ms	Tense=Pres|VerbForm=Inf	35	csubj:pass	_	Canto=30|Verso=107
38	per	per	ADP	epskr	_	40	case	_	Canto=30|Verso=107
39	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	40	det	_	Canto=30|Verso=107
40	membra	membro	NOUN	sm2fp	Gender=Fem|Number=Plur	37	obl	_	Canto=30|Verso=107
41	che	che	PRON	pr	PronType=Rel	43	nsubj	_	Canto=30|Verso=107
42	son	essere	AUX	vi4ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	43	cop	_	Canto=30|Verso=107
43	gravi	grave	ADJ	a2fp	Number=Plur	40	acl:relcl	_	Canto=30|SpaceAfter=No|Verso=107
44	,	,	PUNCT	_	_	35	punct	_	_
45	ho	avere	VERB	vta5ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	26	ccomp:reported	_	Canto=30|Verso=108
46	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	45	nsubj	_	Canto=30|Verso=108
47	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	48	det	_	Canto=30|Verso=108
48	braccio	braccio	NOUN	sm2ms	Gender=Masc|Number=Sing	45	obj	_	Canto=30|Verso=108
49	a	a	ADP	epskf	_	51	case	_	Canto=30|Verso=108
50	tal	tale	DET	a2ms	Number=Sing	51	det	_	Canto=30|Verso=108
51	mestiere	mestiere	NOUN	sm3ms	Gender=Masc|Number=Sing	45	obl	_	Canto=30|Verso=108
52	sciolto	sciogliere	VERB	vta2pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	45	xcomp	_	Canto=30|SpaceAfter=No|Verso=108
53	»	»	PUNCT	_	_	45	punct	_	SpaceAfter=No
54	.	.	PUNCT	_	_	45	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 26 csubj:pass	color:blue
1	Tanto	tanto	ADV	b	_	2	advmod	_	Canto=15|Verso=91
2	vogl'	volere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=15|SpaceAfter=No|Verso=91
3	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Canto=15|Verso=91
4	che	che	SCONJ	csso	_	7	mark	_	Canto=15|Verso=91
5	vi	vi	PRON	pp2pyda	Clitic=Yes|Number=Plur|Person=2|PronType=Prs	7	iobj	_	Canto=15|Verso=91
6	sia	essere	AUX	vi4cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	Canto=15|Verso=91
7	manifesto	manifestare	VERB	vta1pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	2	ccomp	_	Canto=15|SpaceAfter=No|Verso=91
8	,	,	PUNCT	_	_	15	punct	_	_
9	pur	pure	ADV	_	_	15	advmod	_	Canto=15|Verso=92
10	che	che	SCONJ	_	_	15	mark	_	Canto=15|Verso=92
11	mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	12	det:poss	_	Canto=15|Verso=92
12	coscienza	coscienza	NOUN	sf1fs	Gender=Fem|Number=Sing	15	nsubj	_	Canto=15|Verso=92
13	non	non	ADV	b	PronType=Neg	15	advmod:neg	_	Canto=15|Verso=92
14	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	15	iobj	_	Canto=15|Verso=92
15	garra	garrire	VERB	vta3cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	Canto=15|SpaceAfter=No|Verso=92
16	,	,	PUNCT	_	_	26	punct	_	_
17	ch'	che	SCONJ	csss	_	26	mark	_	Canto=15|SpaceAfter=No|Verso=93
18	a	a	ADP	epskf	_	20	case	_	Canto=15|Verso=93
19	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	Canto=15|Verso=93
20	Fortuna	fortuna	NOUN	sf1fs	Gender=Fem|Number=Sing	26	obl	_	Canto=15|SpaceAfter=No|Verso=93
21	,	,	PUNCT	_	_	23	punct	_	_
22	come	come	ADV	b	_	23	mark	_	Canto=15|Verso=93
23	vuol	volere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	advcl:cmp	_	Canto=15|SpaceAfter=No|Verso=93
24	,	,	PUNCT	_	_	26	punct	_	_
25	son	essere	AUX	vi4ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	26	cop	_	Canto=15|Verso=93
26	presto	presto	ADJ	a1msxc1	Gender=Masc|Number=Sing	7	csubj:pass	_	Canto=15|SpaceAfter=No|Verso=93
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


