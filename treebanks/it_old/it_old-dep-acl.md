---
layout: base
title:  'Statistics of acl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_old-dep-acl-relcl.html">acl:relcl</a></tt>.

706 nodes (1%) are attached to their parents as `acl`.

505 instances of `acl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44334277620397.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (608; 86% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (24; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (21; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (21; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=5|Verso=142
2	caddi	cadere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Canto=5|Verso=142
3	come	come	ADV	b	_	6	mark	_	Canto=5|Verso=142
4	corpo	corpo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	nsubj	_	Canto=5|Verso=142
5	morto	morire	VERB	vi3pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	Canto=5|Verso=142
6	cade	cadere	VERB	vi2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:cmp	_	Canto=5|SpaceAfter=No|Verso=142
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 acl	color:blue
1	Tre	tre	NUM	an	NumType=Card	2	nummod	_	Canto=2|Verso=97
2	specchi	specchio	NOUN	sm2mp	Gender=Masc|Number=Plur	3	obj	_	Canto=2|Verso=97
3	prenderai	prendere	VERB	vta2ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	Canto=2|Verso=97|SpaceAfter=No
4	;	;	PUNCT	_	_	8	punct	_	_
5	e	e	CCONJ	cscc	_	8	cc	_	Canto=2|Verso=97
6	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	Canto=2|Verso=97
7	due	due	NUM	an	NumType=Card	8	obj	_	Canto=2|Verso=97
8	rimovi	rimuovere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	Canto=2|Verso=97
9	da	da	ADP	epska	_	10	case	_	Canto=2|Verso=98
10	te	te	PRON	pp2slco	Person=2|Poss=Yes|PronType=Prs	8	obl:lmod	_	Canto=2|Verso=98
11	d'	di	ADP	_	_	13	case	_	_
12	un	un	DET	_	Gender=Masc|Number=Sing	13	det	_	_
13	modo	modo	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	29	punct	_	_
15	e	e	CCONJ	cscc	_	29	cc	_	Canto=2|Verso=98
16	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Canto=2|Verso=98
17	altro	altro	PRON	pi	PronType=Ind	29	nsubj	_	Canto=2|Verso=98|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	più	più	ADV	b	_	20	advmod	_	Canto=2|Verso=98
20	rimosso	rimuovere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	17	acl	_	Canto=2|Verso=98|SpaceAfter=No
21	,	,	PUNCT	_	_	17	punct	_	_
22	tr'	tra	ADP	epsksl	_	25	case	_	Canto=2|Verso=99
23	ambo	ambo	NUM	an	NumType=Card	25	nummod	_	Canto=2|Verso=99
24	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	25	det	_	Canto=2|Verso=99
25	primi	primo	ADJ	an1mp	Gender=Masc|Number=Plur|NumType=Ord	29	obl:lmod	_	Canto=2|Verso=99
26	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	Canto=2|Verso=99
27	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	29	obj	_	Canto=2|Verso=99
28	tuoi	tuo	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	27	det:poss	_	Canto=2|Verso=99
29	ritrovi	ritrovare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	Canto=2|Verso=99|SpaceAfter=No
30	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	Quelli	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	3	nsubj	_	Canto=18|Verso=86
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Canto=18|Verso=86
3	Iasón	Giasone	PROPN	np	_	0	root	_	Canto=18|SpaceAfter=No|Verso=86
4	,	,	PUNCT	_	_	17	punct	_	_
5	che	che	PRON	pr	PronType=Rel	17	nsubj	_	Canto=18|Verso=86
6	per	per	ADP	epskw	_	7	case	_	Canto=18|Verso=86
7	cuore	cuore	NOUN	sm3ms	Gender=Masc|Number=Sing	17	obl	_	Canto=18|Verso=86
8	e	e	CCONJ	cscc	_	10	cc	_	Canto=18|Verso=86
9	per	per	ADP	epskw	_	10	case	_	Canto=18|Verso=86
10	senno	senno	NOUN	sm2ms	Gender=Masc|Number=Sing	7	conj	_	Canto=18|Verso=86
11	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	Canto=18|Verso=87
12	Colchi	Colchi	PROPN	np	_	17	obj	_	Canto=18|Verso=87
13	di	di	ADP	_	_	15	case	_	Canto=18|Comment=de-l|Verso=87
14	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=18|Comment=de-l|Verso=87
15	monton	montone	NOUN	sm3ms	Gender=Masc|Number=Sing	16	obl	_	Canto=18|Verso=87
16	privati	privare	VERB	vta1pr	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	12	acl	_	Canto=18|Verso=87
17	féne	fare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Canto=18|SpaceAfter=No|Verso=87
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


