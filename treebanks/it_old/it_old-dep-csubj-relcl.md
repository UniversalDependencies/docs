---
layout: base
title:  'Statistics of csubj:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `csubj:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="it_old-dep-csubj-pass.html">csubj:pass</a></tt>.

7 nodes (0%) are attached to their parents as `csubj:relcl`.

5 instances of `csubj:relcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57142857142857.

The following 2 pairs of parts of speech are connected with `csubj:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (6; 86% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj:relcl	color:blue
1	Con	con	ADP	epskc	_	2	case	_	Canto=18|Verso=97
2	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obl	_	Canto=18|Verso=97
3	se	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	_	Canto=18|Comment=se-n|Verso=97
4	ne	ne	ADV	_	_	5	advmod	_	Canto=18|Comment=se-n|Verso=97
5	va	andare	VERB	vi+1ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	Canto=18|Verso=97
6	chi	chi	PRON	pr	PronType=Rel	10	nsubj	_	Canto=18|Verso=97
7	da	da	ADP	epsksl	_	9	case	_	Canto=18|Verso=97
8	tal	tale	DET	a2fs	Number=Sing|PronType=Dem	9	det	_	Canto=18|Verso=97
9	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	10	obl	_	Canto=18|Verso=97
10	inganna	ingannare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj:relcl	_	Canto=18|SpaceAfter=No|Verso=97
11	;	;	PUNCT	_	_	14	punct	_	_
12	e	e	CCONJ	cscc	_	14	cc	_	Canto=18|Verso=98
13	questo	questo	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	14	nsubj	_	Canto=18|Verso=98
14	basti	bastare	VERB	vi1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	Canto=18|Verso=98
15	de	di	ADP	eps	_	18	case	_	Canto=18|Verso=98
16	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	Canto=18|Verso=98
17	prima	primo	ADJ	a1fs	Gender=Fem|Number=Sing	18	amod	_	Canto=18|Verso=98
18	valle	valle	NOUN	sf3fs	Gender=Fem|Number=Sing	19	obl	_	Canto=18|Verso=98
19	sapere	sapere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	14	ccomp	_	Canto=18|Verso=99
20	e	e	CCONJ	cscc	_	22	cc	_	Canto=18|Verso=99
21	di	di	ADP	epskx	_	22	case	_	Canto=18|Verso=99
22	color	colui	PRON	pdmp	Gender=Masc|Number=Plur|PronType=Dem	18	conj	_	Canto=18|Verso=99
23	che	che	PRON	pr	PronType=Rel	26	obj	_	Canto=18|Verso=99
24	'n	in	ADP	epsksl	_	25	case	_	Canto=18|Verso=99
25	sé	sé	PRON	pf3lpr	Person=3|PronType=Prs|Reflex=Yes	26	obl	_	Canto=18|Verso=99
26	assanna	azzannare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	acl:relcl	_	Canto=18|SpaceAfter=No|Verso=99
27	»	»	PUNCT	_	_	5	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	5	punct	_	_

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


