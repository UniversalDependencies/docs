---
layout: base
title:  'Statistics of csubj:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="it_old-dep-csubj-pass.html">csubj:pass</a></tt>.

45 nodes (0%) are attached to their parents as `csubj:relcl`.

33 instances of `csubj:relcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.42222222222222.

The following 6 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (37; 82% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 csubj:relcl	color:blue
1	Ma	ma	CCONJ	csca	_	10	cc	_	Canto=6|Verso=130
2	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	Canto=6|Verso=130
3	Provenzai	provenzale	NOUN	sm3mp	Gender=Masc|Number=Plur	10	nsubj	_	Canto=6|Verso=130
4	che	che	PRON	pr	PronType=Rel	5	nsubj	_	Canto=6|Verso=130
5	fecer	fare	VERB	vta1irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Canto=6|Verso=130
6	contra	contro	ADP	eisks	_	7	case	_	Canto=6|Verso=130
7	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl	_	Canto=6|Verso=130
8	non	non	ADV	b	PronType=Neg	10	advmod:neg	_	Canto=6|Verso=131
9	hanno	avere	AUX	vta5ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	Canto=6|Verso=131
10	riso	ridere	VERB	vi2ibp3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	Canto=6|Verso=131|SpaceAfter=No
11	;	;	PUNCT	_	_	15	punct	_	_
12	e	e	CCONJ	cscc	_	15	cc	_	Canto=6|Verso=131
13	però	però	ADV	cssc	_	15	advmod	_	Canto=6|Verso=131
14	mal	male	ADV	b	_	15	advmod	_	Canto=6|Verso=131
15	cammina	camminare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	Canto=6|Verso=131
16	qual	quale	PRON	pri2ms	PronType=Rel	18	nsubj	_	Canto=6|Verso=132
17	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	18	expl:pv	_	Canto=6|Verso=132
18	fa	fare	VERB	vta+1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	csubj:relcl	_	Canto=6|Verso=132
19	danno	danno	NOUN	sm2ms	Gender=Masc|Number=Sing	18	obj	_	Canto=6|Verso=132
20	di	di	ADP	_	_	23	case	_	_
21	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
22	ben	bene	ADV	b	_	23	advmod	_	Canto=6|Verso=132
23	fare	fare	VERB	vta1fpsm3ms	Tense=Pres|VerbForm=Inf|Voice=Act	19	nmod	_	Canto=6|Verso=132
24	altrui	altrui	DET	ai	PronType=Ind	23	det	_	Canto=6|Verso=132|SpaceAfter=No
25	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj:relcl	color:blue
1	Matto	matto	ADJ	a1ms	Gender=Masc|Number=Sing	0	root	_	Canto=3|Verso=34
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	Canto=3|Verso=34
3	chi	chi	PRON	pr	PronType=Rel	4	nsubj	_	Canto=3|Verso=34
4	spera	sperare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj:relcl	_	Canto=3|Verso=34
5	che	che	SCONJ	csso	_	9	mark	_	Canto=3|Verso=34
6	nostra	nostro	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	Canto=3|Verso=34
7	ragione	ragione	NOUN	sf3fs	Gender=Fem|Number=Sing	9	nsubj	_	Canto=3|Verso=34
8	possa	potere	AUX	vta2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	Canto=3|Verso=35
9	trascorrer	trascorrere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	4	ccomp	_	Canto=3|Verso=35
10	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Canto=3|Verso=35
11	infinita	infinito	ADJ	a1fs	Gender=Fem|Number=Sing	12	amod	_	Canto=3|Verso=35
12	via	via	NOUN	sf1fs	Gender=Fem|Number=Sing	9	obj	_	Canto=3|Verso=35
13	che	che	PRON	pr	PronType=Rel	14	nsubj	_	Canto=3|Verso=36
14	tiene	tenere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	Canto=3|Verso=36
15	una	uno	DET	an1fs	Gender=Fem|Number=Sing	16	det	_	Canto=3|Verso=36
16	sustanza	sostanza	NOUN	sf1fs	Gender=Fem|Number=Sing	14	obj	_	Canto=3|Verso=36
17	in	in	ADP	epsksl	_	19	case	_	Canto=3|Verso=36
18	tre	tre	NUM	an	NumType=Card	19	nummod	_	Canto=3|Verso=36
19	persone	persona	NOUN	sf1fp	Gender=Fem|Number=Plur	14	obl	_	Canto=3|SpaceAfter=No|Verso=36
20	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 27 csubj:relcl	color:blue
1	Novo	nuovo	ADJ	a1ms	Gender=Masc|Number=Sing	2	amod	_	Canto=19|Verso=85
2	Iasón	Giasone	PROPN	np	_	0	root	_	Canto=19|Verso=85
3	sarà	essere	AUX	vi4ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	cop	_	Canto=19|SpaceAfter=No|Verso=85
4	,	,	PUNCT	_	_	8	punct	_	_
5	di	di	ADP	epskx	_	6	case	_	Canto=19|Verso=85
6	cui	cui	PRON	pr	PronType=Rel	8	obl	_	Canto=19|Verso=85
7	si	si	PRON	pf3yim	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	8	expl:impers	_	Canto=19|Verso=85
8	legge	leggere	VERB	vta*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	Canto=19|Verso=85
9	in	in	ADP	_	_	11	case	_	Canto=19|Comment=ne-'|Verso=86
10	il	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	Canto=19|Comment=ne-'|Verso=86
11	Maccabei	Maccabeo	PROPN	npt	_	8	obl:lmod	_	Canto=19|SpaceAfter=No|Verso=86
12	;	;	PUNCT	_	_	22	punct	_	_
13	e	e	CCONJ	cscc	_	22	cc	_	Canto=19|Verso=86
14	come	come	ADV	b	_	18	advmod	_	Canto=19|Verso=86
15	a	a	ADP	epsk1b	_	16	case	_	Canto=19|Verso=86
16	quel	quello	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	18	obl	_	Canto=19|Verso=86
17	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	cop	_	Canto=19|Verso=86
18	molle	molle	ADJ	a2msxc1	Number=Sing	22	advcl:cmp	_	Canto=19|Verso=86
19	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	20	det:poss	_	Canto=19|Verso=87
20	re	re	NOUN	sm3ms	Gender=Masc|Number=Sing	18	nsubj	_	Canto=19|SpaceAfter=No|Verso=87
21	,	,	PUNCT	_	_	18	punct	_	_
22	così	così	ADV	b	_	2	parataxis	_	Canto=19|Verso=87
23	fia	essere	AUX	vi4ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	22	cop	_	Canto=19|Verso=87
24	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	obl	_	Canto=19|Verso=87
25	chi	chi	PRON	pr	PronType=Rel	27	nsubj	_	Canto=19|Verso=87
26	Francia	Francia	PROPN	np	_	27	obj	_	Canto=19|Verso=87
27	regge	reggere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	csubj:relcl	_	Canto=19|SpaceAfter=No|Verso=87
28	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	_

~~~


