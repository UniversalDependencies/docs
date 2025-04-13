---
layout: base
title:  'Statistics of ccomp:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `ccomp:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="it_old-dep-ccomp-reported.html">ccomp:reported</a></tt>.

17 nodes (0%) are attached to their parents as `ccomp:relcl`.

15 instances of `ccomp:relcl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.05882352941176.

The following 5 pairs of parts of speech are connected with `ccomp:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (10; 59% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (3; 18% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-X.html">X</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp:relcl	color:blue
1	Quei	quello	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	Canto=18|Verso=109
2	che	che	PRON	pr	PronType=Rel	3	nsubj	_	Canto=18|Verso=109
3	dipinge	dipingere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	Canto=18|Verso=109
4	lì	lì	ADV	b	_	3	advmod:lmod	_	Canto=18|Verso=109|SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=18|Verso=109
7	ha	avere	VERB	vta5ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=18|Verso=109
8	chi	chi	PRON	pi	PronType=Ind	10	nsubj	_	Canto=18|Verso=109
9	'l	il	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obj	_	Canto=18|Verso=109
10	guidi	guidare	VERB	vta1cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp:relcl	_	Canto=18|Verso=109|SpaceAfter=No
11	;	;	PUNCT	_	_	14	punct	_	_
12	ma	ma	CCONJ	csca	_	14	cc	_	Canto=18|Verso=110
13	esso	esso	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	Canto=18|Verso=110
14	guida	guidare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	Canto=18|Verso=110|SpaceAfter=No
15	,	,	PUNCT	_	_	20	punct	_	_
16	e	e	CCONJ	cscc	_	20	cc	_	Canto=18|Verso=110
17	da	da	ADP	epsk6	_	18	case	_	Canto=18|Verso=110
18	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	obl:lmod	_	Canto=18|Verso=110
19	si	si	PRON	pf3yle	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	20	expl:impers	_	Canto=18|Verso=110
20	rammenta	rammentare	VERB	vi+1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	conj	_	Canto=18|Verso=110
21	quella	quello	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	22	det	_	Canto=18|Verso=111
22	virtù	virtù	NOUN	sf3fs	Gender=Fem|Number=Sing	20	obj	_	Canto=18|Verso=111
23	ch'	che	PRON	pr	PronType=Rel	25	nsubj	_	Canto=18|Verso=111
24	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	cop	_	Canto=18|Verso=111
25	forma	forma	NOUN	sf1fs	Gender=Fem|Number=Sing	22	acl:relcl	_	Canto=18|Verso=111
26	per	per	ADP	epskf	_	28	case	_	Canto=18|Verso=111
27	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	28	det	_	Canto=18|Verso=111
28	nidi	nido	NOUN	sm2mp	Gender=Masc|Number=Plur	25	obl	_	Canto=18|Verso=111|SpaceAfter=No
29	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 ccomp:relcl	color:blue
1	Di	di	ADP	_	_	2	case	_	Canto=14|Verso=19
2	sovr'	sopra	ADV	_	_	3	advmod	_	Canto=14|Verso=19
3	esso	esso	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl:lmod	_	Canto=14|Verso=19
4	rech'	recare	VERB	vta1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=14|Verso=19
5	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	4	nsubj	_	Canto=14|Verso=19
6	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	Canto=14|Verso=19
7	persona	persona	NOUN	sf1fs	Gender=Fem|Number=Sing	4	obj	_	Canto=14|SpaceAfter=No|Verso=19
8	:	:	PUNCT	_	_	16	punct	_	_
9	dire	dire	VERB	vta3fp	Tense=Pres|VerbForm=Inf|Voice=Act	16	csubj	_	Canto=14|Verso=20
10	vi	vi	PRON	pp2sxda	Clitic=Yes|Person=2|Poss=Yes|PronType=Prs	9	iobj	_	Canto=14|Verso=20
11	ch'	chi	PRON	pt	PronType=Rel	12	nsubj	_	Canto=14|Verso=20
12	i'	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	9	ccomp:relcl	_	Canto=14|Verso=20
13	sia	essere	AUX	vi4cps1	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	cop	_	Canto=14|SpaceAfter=No|Verso=20
14	,	,	PUNCT	_	_	16	punct	_	_
15	saria	essere	AUX	vi4dps3	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	16	aux	_	Canto=14|Verso=20
16	parlare	parlare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	4	parataxis	_	Canto=14|Verso=20
17	indarno	indarno	ADV	b	_	16	advmod	_	Canto=14|SpaceAfter=No|Verso=20
18	,	,	PUNCT	_	_	26	punct	_	_
19	ché	ché	SCONJ	cssc	_	26	mark	_	Canto=14|Verso=21
20	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	Canto=14|Verso=21
21	nome	nome	NOUN	sm3ms	Gender=Masc|Number=Sing	26	nsubj	_	Canto=14|Verso=21
22	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	21	det:poss	_	Canto=14|Verso=21
23	ancor	ancora	ADV	b	_	26	advmod	_	Canto=14|Verso=21
24	molto	molto	ADV	b	_	26	advmod	_	Canto=14|Verso=21
25	non	non	ADV	b	PronType=Neg	26	advmod:neg	_	Canto=14|Verso=21
26	suona	suonare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	Canto=14|SpaceAfter=No|Verso=21
27	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 27 ccomp:relcl	color:blue
1	Indi	indi	ADV	b	_	11	advmod:tmod	_	Canto=18|Verso=49|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	tra	tra	ADP	epsksl	_	6	case	_	Canto=18|Verso=49
4	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	Canto=18|Verso=49
5	altre	altro	DET	ai	PronType=Ind	6	det	_	Canto=18|Verso=49
6	luci	luce	NOUN	sf3fp	Gender=Fem|Number=Plur	7	obl:lmod	_	Canto=18|Verso=49
7	mota	muovere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	11	advcl	_	Canto=18|Verso=49
8	e	e	CCONJ	cscc	_	9	cc	_	Canto=18|Verso=49
9	mista	misto	ADJ	a1fsxc9	Gender=Fem|Number=Sing	7	conj	_	Canto=18|Verso=49|SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	_	_
11	mostrare	mostrare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	mi	mi	PRON	pp1sxda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	11	iobj	_	_
13	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	Canto=18|Verso=50
14	alma	alma	NOUN	sf1fs	Gender=Fem|Number=Sing	11	nsubj	_	Canto=18|Verso=50
15	che	che	PRON	pr	PronType=Rel	18	nsubj	_	Canto=18|Verso=50
16	m'	mi	PRON	pp1syda	Clitic=Yes|Person=1|Poss=Yes|PronType=Prs	18	iobj	_	Canto=18|Verso=50
17	avea	avere	AUX	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	aux	_	Canto=18|Verso=50
18	parlato	parlare	VERB	vi1iss3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part	14	acl:relcl	_	Canto=18|Verso=50
19	qual	quale	DET	ar	PronType=Rel	27	nsubj	_	Canto=18|Verso=51
20	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	27	cop	_	Canto=18|Verso=51
21	tra	tra	ADP	epsk8	_	23	case	_	Canto=18|Verso=51
22	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	Canto=18|Verso=51
23	cantor	cantore	NOUN	sm3ms	Gender=Masc|Number=Sing	27	obl	_	Canto=18|Verso=51
24	di	di	ADP	_	_	26	case	_	_
25	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	cielo	cielo	NOUN	sm2ms	Gender=Masc|Number=Sing	23	nmod	_	Canto=18|Verso=51
27	artista	artista	NOUN	sm1ms	Gender=Masc|Number=Sing	11	ccomp:relcl	_	Canto=18|Verso=51|SpaceAfter=No
28	.	.	PUNCT	_	_	11	punct	_	_

~~~


