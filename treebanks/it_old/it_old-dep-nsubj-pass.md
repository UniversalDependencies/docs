---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_old-dep-nsubj-outer.html">nsubj:outer</a></tt>.

119 nodes (0%) are attached to their parents as `nsubj:pass`.

93 instances of `nsubj:pass` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.40336134453782.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (62; 52% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (52; 44% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
1	Indi	indi	ADV	b	_	7	advmod:lmod	_	Canto=19|Verso=133
2	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	Canto=19|Verso=133
3	altro	altro	DET	pi	Gender=Masc|Number=Sing|PronType=Ind	4	det	_	Canto=19|Verso=133
4	vallon	vallone	NOUN	sm3ms	Gender=Masc|Number=Sing	7	nsubj:pass	_	Canto=19|Verso=133
5	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	iobj	_	Canto=19|Verso=133
6	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Canto=19|Verso=133
7	scoperto	scoprire	VERB	vta3pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Canto=19|SpaceAfter=No|Verso=133
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 nsubj:pass	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=8|Verso=34
2	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	0	root	_	Canto=8|Verso=34
3	a	a	ADP	epsk1d	_	4	case	_	Canto=8|Verso=34
4	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Canto=8|SpaceAfter=No|Verso=34
5	:	:	PUNCT	_	_	12	punct	_	_
6	«	«	PUNCT	_	_	12	punct	_	SpaceAfter=No
7	S'	se	SCONJ	cssv	_	9	mark	_	Canto=8|SpaceAfter=No|Verso=34
8	i'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Canto=8|Verso=34
9	vegno	venire	VERB	vi3ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	_	Canto=8|SpaceAfter=No|Verso=34
10	,	,	PUNCT	_	_	9	punct	_	_
11	non	non	ADV	b	PronType=Neg	12	advmod:neg	_	Canto=8|Verso=34
12	rimango	rimanere	VERB	vi2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	ccomp:reported	_	Canto=8|SpaceAfter=No|Verso=34
13	;	;	PUNCT	_	_	16	punct	_	_
14	ma	ma	CCONJ	csca	_	16	cc	_	Canto=8|Verso=35
15	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	16	nsubj	_	Canto=8|Verso=35
16	chi	chi	PRON	pn	PronType=Rel	12	parataxis	_	Canto=8|Verso=35
17	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	16	cop	_	Canto=8|SpaceAfter=No|Verso=35
18	,	,	PUNCT	_	_	22	punct	_	_
19	che	che	PRON	pr	PronType=Rel	22	nsubj:pass	_	Canto=8|Verso=35
20	sì	così	ADV	b	_	23	advmod	_	Canto=8|Verso=35
21	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	aux:pass	_	Canto=8|Verso=35
22	fatto	fare	VERB	vi1iss2	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	acl:relcl	_	Canto=8|Verso=35
23	brutto	brutto	ADJ	a1ms	Gender=Masc|Number=Sing	22	xcomp	_	Canto=8|SpaceAfter=No|Verso=35
24	?	?	PUNCT	_	_	16	punct	_	SpaceAfter=No
25	»	»	PUNCT	_	_	16	punct	_	SpaceAfter=No
26	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 nsubj:pass	color:blue
1	Poeta	poeta	NOUN	sm1ms	Gender=Masc|Number=Sing	0	root	_	Canto=1|Verso=73
2	fui	essere	AUX	vi4irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	1	cop	_	Canto=1|SpaceAfter=No|Verso=73
3	,	,	PUNCT	_	_	5	punct	_	_
4	e	e	CCONJ	cscc	_	5	cc	_	Canto=1|Verso=73
5	cantai	cantare	VERB	vta1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	Canto=1|Verso=73
6	di	di	ADP	epskx	_	9	case	_	Canto=1|Verso=73
7	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	Canto=1|Verso=73
8	giusto	giusto	NOUN	sm2ms	Gender=Masc|Number=Sing	9	amod	_	Canto=1|Verso=73
9	figliuol	figliuolo	NOUN	sm2ms	Gender=Masc|Number=Sing	5	obl	_	Canto=1|Verso=74
10	d'	di	ADP	eps	_	11	case	_	Canto=1|SpaceAfter=No|Verso=74
11	Anchise	Anchise	PROPN	np	_	9	nmod	_	Canto=1|Verso=74
12	che	che	PRON	pr	PronType=Rel	13	nsubj	_	Canto=1|Verso=74
13	venne	venire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl:relcl	_	Canto=1|Verso=74
14	di	di	ADP	epskdl	_	15	case	_	Canto=1|Verso=74
15	Troia	Troia	PROPN	np	_	13	obl:lmod	_	Canto=1|SpaceAfter=No|Verso=74
16	,	,	PUNCT	_	_	23	punct	_	_
17	poi	poi	ADV	_	_	23	advmod:tmod	_	Canto=1|Verso=75
18	che	che	SCONJ	_	_	23	mark	_	Canto=1|Verso=75
19	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	Canto=1|Verso=75
20	superbo	superbo	ADJ	a1ms	Gender=Masc|Number=Sing	21	amod	_	Canto=1|Verso=75
21	Ilión	Ilion	PROPN	np	_	23	nsubj:pass	_	Canto=1|Verso=75
22	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	23	aux:pass	_	Canto=1|Verso=75
23	combusto	comburere	VERB	vtp2irs3	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	advcl	_	Canto=1|SpaceAfter=No|Verso=75
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


