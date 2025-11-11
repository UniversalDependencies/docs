---
layout: base
title:  'Statistics of appos in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `appos`

This relation is universal.

68 nodes (0%) are attached to their parents as `appos`.

68 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54411764705882.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (32; 47% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (10; 15% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (8; 12% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (5; 7% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Oh	oh	PART	i	_	2	discourse	2:discourse	Canto=23|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_1
2	Beatrice	Beatrice	PROPN	np	_	0	root	0:root	Canto=23|SpaceAfter=No|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_2
3	,	,	PUNCT	_	_	5	punct	5:punct	UniqueTokenId=OldItalian_Dante_Paradiso-690_3
4	dolce	dolce	ADJ	a2fs	Gender=Fem|Number=Sing	5	amod	5:amod	Canto=23|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_4
5	guida	guida	NOUN	sf1fs	Gender=Fem|Number=Sing	2	appos	2:appos	Canto=23|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_5
6	e	e	CCONJ	cscc	_	7	cc	7:cc	Canto=23|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_6
7	cara	caro	ADJ	a1fs	Gender=Fem|Number=Sing	4	conj	4:conj	Canto=23|SpaceAfter=No|Verso=34|UniqueTokenId=OldItalian_Dante_Paradiso-690_7
8	!	!	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Paradiso-690_8

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 appos	color:blue
1	Mia	mio	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	2	det:poss	2:det:poss	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_1
2	madre	madre	NOUN	sf3fs	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_2
3	a	a	ADP	epskf	_	4	case	4:case	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_3
4	servo	servo	NOUN	sm2ms	Gender=Masc|Number=Sing	9	obl	9:obl	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_4
5	d'	di	ADP	eps	_	7	case	7:case	Canto=22|SpaceAfter=No|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_5
6	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_6
7	segnor	signore	NOUN	sm3ms	Gender=Masc|Number=Sing	4	nmod	4:nmod	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_7
8	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	obj	9:obj	Canto=22|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_8
9	puose	porre	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=22|SpaceAfter=No|Verso=49|UniqueTokenId=OldItalian_Dante_Inferno-789_9
10	,	,	PUNCT	_	_	14	punct	14:punct	UniqueTokenId=OldItalian_Dante_Inferno-789_10
11	che	che	PRON	pr	PronType=Rel	14	nsubj	14:nsubj	Canto=22|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_11
12	m'	mi	PRON	pp1syac	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	14	obj	14:obj	Canto=22|SpaceAfter=No|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_12
13	avea	avere	AUX	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	aux	14:aux	Canto=22|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_13
14	generato	generare	VERB	vta1iss3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Act	2	acl:relcl	2:acl:relcl	Canto=22|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_14
15	d'	da	ADP	epsk6	_	17	case	17:case	Canto=22|SpaceAfter=No|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_15
16	un	uno	DET	rims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	17:det	Canto=22|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_16
17	ribaldo	ribaldo	NOUN	sm2ms	Gender=Masc|Number=Sing	14	obl	14:obl	Canto=22|SpaceAfter=No|Verso=50|UniqueTokenId=OldItalian_Dante_Inferno-789_17
18	,	,	PUNCT	_	_	19	punct	19:punct	UniqueTokenId=OldItalian_Dante_Inferno-789_18
19	distruggitor	distruggitore	NOUN	sm3ms	Gender=Masc|Number=Sing	17	appos	17:appos	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_19
20	di	di	ADP	epskg	_	21	case	21:case	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_20
21	sé	sé	PRON	pf3lpr	Person=3|PronType=Prs|Reflex=Yes	19	nmod	19:nmod	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_21
22	e	e	CCONJ	cscc	_	25	cc	25:cc	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_22
23	di	di	ADP	epskg	_	25	case	25:case	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_23
24	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	25	det:poss	25:det:poss	Canto=22|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_24
25	cose	cosa	NOUN	sf1fp	Gender=Fem|Number=Plur	21	conj	21:conj	Canto=22|SpaceAfter=No|Verso=51|UniqueTokenId=OldItalian_Dante_Inferno-789_25
26	.	.	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Inferno-789_26

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 appos	color:blue
1	Per	per	ADP	epskw	_	3	case	3:case	Canto=16|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_1
2	altro	altro	DET	ai	Gender=Masc|Number=Sing|PronType=Ind	3	det	3:det	Canto=16|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_2
3	sopranome	soprannome	NOUN	sm3ms	Gender=Masc|Number=Sing	7	obl	7:obl	Canto=16|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_3
4	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	7	nsubj	7:nsubj	Canto=16|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_4
5	non	non	ADV	_	PronType=Neg	7	advmod:neg	7:advmod:neg	Canto=16|Comment=no-l|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_5
6	lo	lo	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj	Canto=16|Clitic=Yes|Comment=no-l|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_6
7	conosco	conoscere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=16|SpaceAfter=No|Verso=139|UniqueTokenId=OldItalian_Dante_Purgatorio-583_7
8	,	,	PUNCT	_	_	13	punct	13:punct	_
9	s'	se	SCONJ	cssv	_	13	mark	13:mark	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_9
10	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	13	nsubj	13:nsubj	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_10
11	non	non	ADV	_	PronType=Neg	13	advmod:neg	13:advmod:neg	Canto=16|Comment=no-l|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_11
12	lo	lo	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	13:obj	Canto=16|Clitic=Yes|Comment=no-l|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_12
13	togliessi	togliere	VERB	vta2cis1	Aspect=Imp|Mood=Sub|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_13
14	da	da	ADP	epska	_	16	case	16:case	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_14
15	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	16	det:poss	16:det:poss	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_15
16	figlia	figlia	NOUN	sf1fs	Gender=Fem|Number=Sing	13	obl:lmod	13:obl:lmod	Canto=16|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_16
17	Gaia	Gaia	PROPN	np	_	16	appos	16:appos	Canto=16|SpaceAfter=No|Verso=140|UniqueTokenId=OldItalian_Dante_Purgatorio-583_17
18	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


