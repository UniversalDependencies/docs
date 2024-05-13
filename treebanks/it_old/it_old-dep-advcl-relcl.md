---
layout: base
title:  'Statistics of advcl:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-pred.html">advcl:pred</a></tt>.

108 nodes (0%) are attached to their parents as `advcl:relcl`.

100 instances of `advcl:relcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.94444444444444.

The following 16 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (65; 60% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (21; 19% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl:relcl	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=4|Verso=151
2	vegno	venire	VERB	vi3ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Canto=4|Verso=151
3	in	in	ADP	epskml	_	4	case	_	Canto=4|Verso=151
4	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	2	obl:lmod	_	Canto=4|Verso=151
5	ove	ove	PRON	p	_	7	obl:lmod	_	Canto=4|Verso=151
6	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=4|Verso=151
7	è	essere	VERB	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	Canto=4|Verso=151
8	che	che	PRON	pi	PronType=Ind	9	nsubj	_	Canto=4|Verso=151
9	luca	lucere	VERB	vi2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl:relcl	_	Canto=4|SpaceAfter=No|Verso=151
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 19 advcl:relcl	color:blue
1	Luogo	luogo	NOUN	sm2ms	Gender=Masc|Number=Sing	3	nsubj	_	Canto=7|Verso=28
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Canto=7|Verso=28
3	là	là	ADV	_	_	0	root	_	Canto=7|Verso=28
4	giù	giù	ADV	_	_	3	advmod:lmod	_	Canto=7|Verso=28
5	non	non	ADV	b	PronType=Neg	6	advmod:neg	_	Canto=7|Verso=28
6	tristo	tristo	ADJ	a1msxc5	Gender=Masc|Number=Sing	1	amod	_	Canto=7|Verso=28
7	di	di	ADP	epskr	_	8	case	_	Canto=7|Verso=28
8	martìri	martirio	NOUN	sm2mp	Gender=Masc|Number=Plur	6	obl	_	Canto=7|SpaceAfter=No|Verso=28
9	,	,	PUNCT	_	_	12	punct	_	_
10	ma	ma	CCONJ	csca	_	12	cc	_	Canto=7|Verso=29
11	di	di	ADP	epskr	_	12	case	_	Canto=7|Verso=29
12	tenebre	tenebra	NOUN	sf1fp	Gender=Fem|Number=Plur	6	conj	_	Canto=7|Verso=29
13	solo	solo	ADV	b	_	12	orphan	_	Canto=7|SpaceAfter=No|Verso=29
14	,	,	PUNCT	_	_	19	punct	_	_
15	ove	ove	PRON	p	_	19	obl:lmod	_	Canto=7|Verso=29
16	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	Canto=7|Verso=29
17	lamenti	lamento	NOUN	sm2mp	Gender=Masc|Number=Plur	19	nsubj	_	Canto=7|Verso=29
18	non	non	ADV	b	PronType=Neg	19	advmod:neg	_	Canto=7|Verso=30
19	suonan	suonare	VERB	vi1ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	_	Canto=7|Verso=30
20	come	come	ADV	b	_	21	mark	_	Canto=7|Verso=30
21	guai	guaio	NOUN	sm2mp	Gender=Masc|Number=Plur	19	advcl:cmp	_	Canto=7|SpaceAfter=No|Verso=30
22	,	,	PUNCT	_	_	25	punct	_	_
23	ma	ma	CCONJ	csca	_	25	cc	_	Canto=7|Verso=30
24	son	essere	AUX	vi4ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	25	cop	_	Canto=7|Verso=30
25	sospiri	sospiro	NOUN	sm2mp	Gender=Masc|Number=Plur	19	conj	_	Canto=7|SpaceAfter=No|Verso=30
26	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl:relcl	color:blue
1	Ma	ma	CCONJ	csca	_	3	cc	_	Canto=23|Verso=97
2	voi	voi	PRON	pp2plso	Number=Plur|Person=2|PronType=Prs	3	nsubj	_	Canto=23|Verso=97
3	chi	chi	PRON	pn	PronType=Rel	0	root	_	Canto=23|Verso=97
4	siete	essere	AUX	vi4ipp2	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	Canto=23|SpaceAfter=No|Verso=97
5	,	,	PUNCT	_	_	9	punct	_	_
6	a	a	ADP	epsk1e	_	7	case	_	Canto=23|Verso=97
7	cui	cui	PRON	pr	PronType=Rel	9	obl:arg	_	Canto=23|Verso=97
8	tanto	tanto	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	13	det	_	Canto=23|Verso=97
9	distilla	distillare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl:relcl	_	Canto=23|Verso=97
10	quant'	quanto	PRON	pr	PronType=Rel	12	obl	_	Canto=23|SpaceAfter=No|Verso=98
11	i'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	Canto=23|Verso=98
12	veggio	vedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl:cmp	_	Canto=23|Verso=98
13	dolor	dolore	NOUN	sm3ms	Gender=Masc|Number=Sing	9	nsubj	_	Canto=23|Verso=98
14	giù	giù	ADV	b	_	17	advmod:lmod	_	Canto=23|Verso=98
15	per	per	ADP	epskpl	_	17	case	_	Canto=23|Verso=98
16	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	Canto=23|Verso=98
17	guance	guancia	NOUN	sf1fp	Gender=Fem|Number=Plur	9	obl:lmod	_	Canto=23|SpaceAfter=No|Verso=98
18	?	?	PUNCT	_	_	9	punct	_	_
19	e	e	CCONJ	cscc	_	20	cc	_	Canto=23|Verso=99
20	che	che	DET	at	PronType=Int	3	conj	_	Canto=23|Verso=99
21	pena	pena	NOUN	sf1fs	Gender=Fem|Number=Sing	20	nsubj	_	Canto=23|Verso=99
22	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	Canto=23|Verso=99
23	in	in	ADP	epsksl	_	24	case	_	Canto=23|Verso=99
24	voi	voi	PRON	pp2plco	Number=Plur|Person=2|PronType=Prs	20	obl:lmod	_	Canto=23|Verso=99
25	che	che	PRON	pr	PronType=Rel	27	nsubj	_	Canto=23|Verso=99
26	sì	così	ADV	b	_	27	advcl:pred	_	Canto=23|Verso=99
27	sfavilla	sfavillare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	advcl:relcl	_	Canto=23|SpaceAfter=No|Verso=99
28	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No
29	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
30	.	.	PUNCT	_	_	3	punct	_	_

~~~


