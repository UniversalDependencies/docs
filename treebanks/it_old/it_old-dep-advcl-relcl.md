---
layout: base
title:  'Statistics of advcl:relcl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-pred.html">advcl:pred</a></tt>.

141 nodes (0%) are attached to their parents as `advcl:relcl`.

132 instances of `advcl:relcl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.93617021276596.

The following 17 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (82; 58% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (27; 19% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 1% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 advcl:relcl	color:blue
1	Ma	ma	CCONJ	csca	_	3	cc	_	Canto=28|Verso=43
2	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	3	nsubj	_	Canto=28|Verso=43
3	chi	chi	PRON	pn	PronType=Rel	0	root	_	Canto=28|Verso=43
4	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	Canto=28|Verso=43
5	che	che	PRON	pr	PronType=Rel	10	nsubj	_	Canto=28|Verso=43
6	'n	in	ADP	_	_	9	case	_	Canto=28|Verso=43
7	su	su	ADV	_	_	9	case	_	Canto=28|Verso=43
8	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=28|Verso=43
9	scoglio	scoglio	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obl:lmod	_	Canto=28|Verso=43
10	muse	musare	VERB	vi1ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl:relcl	_	Canto=28|SpaceAfter=No|Verso=43
11	,	,	PUNCT	_	_	14	punct	_	_
12	forse	forse	ADV	b	_	14	advmod:tmod	_	Canto=28|Verso=44
13	per	per	ADP	epsf	_	14	mark	_	Canto=28|Verso=44
14	indugiar	indugiare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	3	advcl	_	Canto=28|Verso=44
15	d'	di	ADP	epsb	_	16	mark	_	Canto=28|SpaceAfter=No|Verso=44
16	ire	ire	VERB	vi3fp	Tense=Pres|VerbForm=Inf	14	xcomp	_	Canto=28|Verso=44
17	a	a	ADP	epskml	_	19	case	_	Canto=28|Verso=44
18	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	Canto=28|Verso=44
19	pena	pena	NOUN	sf1fs	Gender=Fem|Number=Sing	16	obl:lmod	_	Canto=28|Verso=44
20	ch'	che	PRON	pr	PronType=Rel	22	nsubj:pass	_	Canto=28|SpaceAfter=No|Verso=45
21	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	aux:pass	_	Canto=28|Verso=45
22	giudicata	giudicare	VERB	vtp1ips3	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	19	acl:relcl	_	Canto=28|Verso=45
23	in	in	ADP	_	_	27	case	_	Canto=28|Verso=45
24	su	su	ADP	_	_	27	case	_	Canto=28|Verso=45
25	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	27	det	_	Canto=28|Verso=45
26	tue	tuo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	27	det:poss	_	Canto=28|Verso=45
27	accuse	accusa	NOUN	sf1fp	Gender=Fem|Number=Plur	22	obl	_	Canto=28|SpaceAfter=No|Verso=45
28	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No
29	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
30	.	.	PUNCT	_	_	3	punct	_	_

~~~


