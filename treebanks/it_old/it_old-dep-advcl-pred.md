---
layout: base
title:  'Statistics of advcl:pred in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="it_old-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="it_old-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="it_old-dep-advcl-relcl.html">advcl:relcl</a></tt>.

378 nodes (0%) are attached to their parents as `advcl:pred`.

214 instances of `advcl:pred` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49470899470899.

The following 17 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (163; 43% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (107; 28% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (44; 12% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (25; 7% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (15; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 advcl:pred	color:blue
1	Ecco	ecco	ADV	b	_	11	advmod	11:advmod	Canto=15|SpaceAfter=No|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_1
2	,	,	PUNCT	_	_	3	punct	3:punct	_
3	dolenti	dolente	ADJ	a2mp	Gender=Masc|Number=Plur	11	advcl:pred	11:advcl:pred	Canto=15|SpaceAfter=No|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_3
4	,	,	PUNCT	_	_	3	punct	3:punct	_
5	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=15|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_5
6	tuo	tuo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	7:det:poss	Canto=15|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_6
7	padre	padre	NOUN	sm3ms	Gender=Masc|Number=Sing	11	nsubj	11:nsubj	Canto=15|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_7
8	e	e	CCONJ	cscc	_	9	cc	9:cc	Canto=15|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_8
9	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	7	conj	7:conj	Canto=15|Verso=91|UniqueTokenId=OldItalian_Dante_Purgatorio-530_9
10	ti	ti	PRON	pp2syac	Person=2|Poss=Yes|PronType=Prs	11	obj	11:obj	Canto=15|Clitic=Yes|Verso=92|UniqueTokenId=OldItalian_Dante_Purgatorio-530_10
11	cercavamo	cercare	VERB	vta1iip1	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=15|SpaceAfter=No|Verso=92|UniqueTokenId=OldItalian_Dante_Purgatorio-530_11
12	»	»	PUNCT	_	_	11	punct	11:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Purgatorio-530_12
13	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl:pred	color:blue
1	Muore	morire	VERB	vi3ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Canto=19|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_1
2	non	non	ADV	b	PronType=Neg	3	advmod:neg	3:advmod:neg	Canto=19|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_2
3	battezzato	battezzare	VERB	vta1pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	advcl:pred	1:advcl:pred	Canto=19|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_3
4	e	e	CCONJ	cscc	_	6	cc	6:cc	Canto=19|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_4
5	sanza	senza	ADP	eisk13	_	6	case	6:case	Canto=19|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_5
6	fede	fede	NOUN	sf3fs	Gender=Fem|Number=Sing	3	conj	3:conj	Canto=19|SpaceAfter=No|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-572_6
7	:	:	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Paradiso-572_7
8	ov'	ove	ADV	b	_	1	parataxis	1:parataxis	Canto=19|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_8
9	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	8:cop	Canto=19|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_9
10	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	11	det	11:det	Canto=19|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_10
11	giustizia	giustizia	NOUN	sf1fs	Gender=Fem|Number=Sing	8	nsubj	8:nsubj	Canto=19|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_11
12	che	che	PRON	pr	PronType=Rel	14	nsubj	14:nsubj	Canto=19|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_12
13	'l	il	PRON	pp3msyac	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	14:obj	Canto=19|Clitic=Yes|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_13
14	condanna	condannare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl:relcl	Canto=19|SpaceAfter=No|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-572_14
15	?	?	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Paradiso-572_15
16	ov'	ove	ADV	b	_	1	parataxis	1:parataxis	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_16
17	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_17
18	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	19:det	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_18
19	colpa	colpa	NOUN	sf1fs	Gender=Fem|Number=Sing	16	nsubj	16:nsubj	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_19
20	sua	suo	DET	as1fs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	19	det:poss	19:det:poss	Canto=19|SpaceAfter=No|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_20
21	,	,	PUNCT	_	_	25	punct	25:punct	UniqueTokenId=OldItalian_Dante_Paradiso-572_21
22	se	se	SCONJ	cssv	_	25	mark	25:mark	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_22
23	ei	egli	PRON	pp3mlso	Gender=Masc|Person=3|PronType=Prs	25	nsubj	25:nsubj	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_23
24	non	non	ADV	b	PronType=Neg	25	advmod:neg	25:advmod:neg	Canto=19|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_24
25	crede	credere	VERB	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	16:advcl	Canto=19|SpaceAfter=No|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-572_25
26	?	?	PUNCT	_	_	16	punct	16:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-572_26
27	"	"	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-572_27
28	.	.	PUNCT	_	_	1	punct	1:punct	UniqueTokenId=OldItalian_Dante_Paradiso-572_28

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 advcl:pred	color:blue
1	Parere	parere	VERB	vi*2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	UniqueTokenId=OldItalian_Dante_Paradiso-688_1
2	mi	mi	PRON	pp1sxda	Person=1|Poss=Yes|PronType=Prs	1	iobj	1:iobj	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-688_2
3	che	che	SCONJ	csss	_	7	mark	7:mark	Canto=23|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_3
4	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	Canto=23|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_4
5	suo	suo	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	Canto=23|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_5
6	viso	viso	NOUN	sm2ms	Gender=Masc|Number=Sing	7	nsubj	7:nsubj	Canto=23|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_6
7	ardesse	ardere	VERB	vi2cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	csubj	1:csubj	Canto=23|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_7
8	tutto	tutto	DET	ai1ms	Gender=Masc|Number=Sing|PronType=Ind	7	advcl:pred	7:advcl:pred	Canto=23|SpaceAfter=No|Verso=22|UniqueTokenId=OldItalian_Dante_Paradiso-688_8
9	,	,	PUNCT	_	_	13	punct	13:punct	UniqueTokenId=OldItalian_Dante_Paradiso-688_9
10	e	e	CCONJ	cscc	_	13	cc	13:cc	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_10
11	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	12:det	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_11
12	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	13	obj	13:obj	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_12
13	avea	avere	VERB	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	7:conj	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_13
14	di	di	ADP	epsk7	_	15	case	15:case	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_14
15	letizia	letizia	NOUN	sf1fs	Gender=Fem|Number=Sing	17	obl	17:obl	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_15
16	sì	così	ADV	b	_	17	advmod	17:advmod	Canto=23|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_16
17	pieni	pieno	ADJ	a1mpxc5	Gender=Masc|Number=Plur	13	xcomp	13:xcomp	Canto=23|SpaceAfter=No|Verso=23|UniqueTokenId=OldItalian_Dante_Paradiso-688_17
18	,	,	PUNCT	_	_	23	punct	23:punct	UniqueTokenId=OldItalian_Dante_Paradiso-688_18
19	che	che	SCONJ	cssu	_	23	mark	23:mark	Canto=23|Verso=24|UniqueTokenId=OldItalian_Dante_Paradiso-688_19
20	passare	passare	VERB	vta+1fp	Tense=Pres|VerbForm=Inf|Voice=Act	23	csubj	23:csubj	UniqueTokenId=OldItalian_Dante_Paradiso-688_20
21	me	me	PRON	pf1sxle	Person=1|Poss=Yes|PronType=Prs|Reflex=Yes	20	expl:pv	20:expl:pv	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-688_21
22	ne	ne	PRON	pp3xpt	Person=3|PronType=Prs	20	expl	20:expl	Clitic=Yes|UniqueTokenId=OldItalian_Dante_Paradiso-688_22
23	convien	convenire	VERB	vi*3ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	13:advcl	Canto=23|Verso=24|UniqueTokenId=OldItalian_Dante_Paradiso-688_23
24	sanza	senza	ADP	eisk13	_	25	case	25:case	Canto=23|Verso=24|UniqueTokenId=OldItalian_Dante_Paradiso-688_24
25	costrutto	costruire	VERB	vta3prsm2ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	20	obl	20:obl	Canto=23|SpaceAfter=No|Verso=24|UniqueTokenId=OldItalian_Dante_Paradiso-688_25
26	.	.	PUNCT	_	_	1	punct	1:punct	UniqueTokenId=OldItalian_Dante_Paradiso-688_26

~~~


