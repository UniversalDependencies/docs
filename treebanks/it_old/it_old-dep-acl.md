---
layout: base
title:  'Statistics of acl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_old-dep-acl-relcl.html">acl:relcl</a></tt>.

690 nodes (1%) are attached to their parents as `acl`.

489 instances of `acl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41449275362319.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (604; 88% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (24; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (22; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	E	e	CCONJ	cscc	_	2	cc	2:cc	Canto=5|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_1
2	caddi	cadere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Canto=5|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_2
3	come	come	ADV	b	_	6	mark	6:mark	Canto=5|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_3
4	corpo	corpo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	Canto=5|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_4
5	morto	morire	VERB	vi3pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	4:acl	Canto=5|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_5
6	cade	cadere	VERB	vi2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:cmp	2:advcl:cmp	Canto=5|SpaceAfter=No|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-197_6
7	.	.	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-197_7

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 acl	color:blue
1	Tre	tre	NUM	an	NumType=Card	2	nummod	2:nummod	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_1
2	specchi	specchio	NOUN	sm2mp	Gender=Masc|Number=Plur	3	obj	3:obj	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_2
3	prenderai	prendere	VERB	vta2ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=2|SpaceAfter=No|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_3
4	;	;	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Paradiso-58_4
5	e	e	CCONJ	cscc	_	8	cc	8:cc	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_5
6	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	7:det	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_6
7	due	due	NUM	an	NumType=Card	8	obj	8:obj	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_7
8	rimovi	rimuovere	VERB	vta2mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	3:parataxis	Canto=2|Verso=97|UniqueTokenId=OldItalian_Dante_Paradiso-58_8
9	da	da	ADP	epska	_	10	case	10:case	Canto=2|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_9
10	te	te	PRON	pp2slco	Person=2|Poss=Yes|PronType=Prs	8	obl:lmod	8:obl:lmod	Canto=2|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_10
11	d'	di	ADP	_	_	13	case	13:case	UniqueTokenId=OldItalian_Dante_Paradiso-58_11
12	un	un	DET	_	Gender=Masc|Number=Sing	13	det	13:det	UniqueTokenId=OldItalian_Dante_Paradiso-58_12
13	modo	modo	NOUN	_	Gender=Masc|Number=Sing	8	obl	8:obl	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-58_13
14	,	,	PUNCT	_	_	29	punct	29:punct	UniqueTokenId=OldItalian_Dante_Paradiso-58_14
15	e	e	CCONJ	cscc	_	29	cc	29:cc	Canto=2|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_15
16	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	17:det	Canto=2|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_16
17	altro	altro	PRON	pi	PronType=Ind	29	nsubj	29:nsubj	Canto=2|SpaceAfter=No|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_17
18	,	,	PUNCT	_	_	20	punct	20:punct	UniqueTokenId=OldItalian_Dante_Paradiso-58_18
19	più	più	ADV	b	_	20	advmod	20:advmod	Canto=2|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_19
20	rimosso	rimuovere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	17	acl	17:acl	Canto=2|SpaceAfter=No|Verso=98|UniqueTokenId=OldItalian_Dante_Paradiso-58_20
21	,	,	PUNCT	_	_	17	punct	17:punct	UniqueTokenId=OldItalian_Dante_Paradiso-58_21
22	tr'	tra	ADP	epsksl	_	25	case	25:case	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_22
23	ambo	ambo	NUM	an	NumType=Card	25	nummod	25:nummod	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_23
24	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	25	det	25:det	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_24
25	primi	primo	ADJ	an1mp	Gender=Masc|Number=Plur|NumType=Ord	29	obl:lmod	29:obl:lmod	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_25
26	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	27:det	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_26
27	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	29	obj	29:obj	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_27
28	tuoi	tuo	DET	as1mp	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	27	det:poss	27:det:poss	Canto=2|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_28
29	ritrovi	ritrovare	VERB	vta1cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	8:conj	Canto=2|SpaceAfter=No|Verso=99|UniqueTokenId=OldItalian_Dante_Paradiso-58_29
30	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Paradiso-58_30

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 acl	color:blue
1	Quel	quello	PRON	pd1ms	Gender=Masc|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_1
2	de	di	ADP	eps	_	4	case	4:case	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_2
3	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	4:det	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_3
4	Pressa	Pressa	PROPN	np	_	1	nmod	1:nmod	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_4
5	sapeva	sapere	VERB	vta2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_5
6	già	già	ADV	b	_	5	advmod:tmod	5:advmod:tmod	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_6
7	come	come	ADV	b	_	10	mark	10:mark	Canto=16|Verso=100|UniqueTokenId=OldItalian_Dante_Paradiso-484_7
8	regger	reggere	VERB	vta2fp	Tense=Pres|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	Canto=16|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_8
9	si	si	PRON	pf3yim	Person=3|PronType=Prs|Reflex=Yes	10	expl:impers	10:expl:impers	Canto=16|Clitic=Yes|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_9
10	vuole	volere	VERB	vta*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	Canto=16|SpaceAfter=No|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_10
11	,	,	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Paradiso-484_11
12	e	e	CCONJ	cscc	_	15	cc	15:cc	Canto=16|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_12
13	avea	avere	AUX	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	aux	15:aux	Canto=16|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_13
14	Galigaio	Galigaio	PROPN	np	_	15	nsubj	15:nsubj	Canto=16|Verso=101|UniqueTokenId=OldItalian_Dante_Paradiso-484_14
15	dorata	dorare	VERB	vtp1pra1fs	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	5:acl	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_15
16	in	in	ADP	epsksl	_	17	case	17:case	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_16
17	casa	casa	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obl:lmod	15:obl:lmod	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_17
18	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	17:det:poss	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_18
19	già	già	ADV	b	_	15	advmod:tmod	15:advmod:tmod	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_19
20	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	21:det	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_20
21	elsa	elsa	NOUN	sf1fs	Gender=Fem|Number=Sing	15	obj	15:obj	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_21
22	e	e	CCONJ	cscc	_	24	cc	24:cc	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_22
23	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	24:det	Canto=16|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_23
24	pome	pomo	NOUN	sm3ms	Gender=Masc|Number=Sing	21	conj	21:conj	Canto=16|SpaceAfter=No|Verso=102|UniqueTokenId=OldItalian_Dante_Paradiso-484_24
25	.	.	PUNCT	_	_	5	punct	5:punct	UniqueTokenId=OldItalian_Dante_Paradiso-484_25

~~~


