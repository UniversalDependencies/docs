---
layout: base
title:  'Statistics of expl:impers in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_old-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="it_old-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="it_old-dep-expl-pv.html">expl:pv</a></tt>.

295 nodes (0%) are attached to their parents as `expl:impers`.

239 instances of `expl:impers` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1728813559322.

The following 2 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (294; 100% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	Così	così	ADV	b	_	3	advmod	3:advmod	Canto=28|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_1
2	s'	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:impers	3:expl:impers	Canto=28|SpaceAfter=No|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_2
3	osserva	osservare	VERB	vtp1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	Canto=28|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_3
4	in	in	ADP	epsksl	_	5	case	5:case	Canto=28|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_4
5	me	me	PRON	pp1slco	Number=Sing|Person=1|PronType=Prs	3	obl:lmod	3:obl:lmod	Canto=28|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_5
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=28|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_6
7	contrapasso	contrappasso	NOUN	sm2ms	Gender=Masc|Number=Sing	3	obj	3:obj	Canto=28|SpaceAfter=No|Verso=142|UniqueTokenId=OldItalian_Dante_Inferno-1017_7
8	»	»	PUNCT	_	_	3	punct	3:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1017_8
9	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Inferno-1017_9

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 expl:impers	color:blue
1	Non	non	ADV	b	PronType=Neg	5	advmod:neg	5:advmod:neg	Canto=9|Verso=34|UniqueTokenId=OldItalian_Dante_Purgatorio-293_1
2	altrimenti	altrimenti	ADV	b	_	5	advmod	5:advmod	Canto=9|Verso=34|UniqueTokenId=OldItalian_Dante_Purgatorio-293_2
3	Achille	Achille	PROPN	np	_	5	nsubj	5:nsubj	Canto=9|Verso=34|UniqueTokenId=OldItalian_Dante_Purgatorio-293_3
4	si	si	PRON	pf3ypr	Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Canto=9|Clitic=Yes|Verso=34|UniqueTokenId=OldItalian_Dante_Purgatorio-293_4
5	riscosse	riscuotere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=9|SpaceAfter=No|Verso=34|UniqueTokenId=OldItalian_Dante_Purgatorio-293_5
6	,	,	PUNCT	_	_	10	punct	10:punct	_
7	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	8:det	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_7
8	occhi	occhio	NOUN	sm2mp	Gender=Masc|Number=Plur	10	obj	10:obj	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_8
9	svegliati	svegliare	VERB	vta1pra1mp	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	8	acl	8:acl	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_9
10	rivolgendo	rivolgere	VERB	vta2gp	VerbForm=Conv|Voice=Act	5	advcl	5:advcl	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_10
11	in	in	ADP	_	_	12	case	12:case	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_11
12	giro	giro	NOUN	_	Gender=Masc|Number=Sing	10	obl:lmod	10:obl:lmod	Canto=9|Verso=35|UniqueTokenId=OldItalian_Dante_Purgatorio-293_12
13	e	e	CCONJ	cscc	_	15	cc	15:cc	Canto=9|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_13
14	non	non	ADV	b	PronType=Neg	15	advmod:neg	15:advmod:neg	Canto=9|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_14
15	sappiendo	sapere	VERB	vta2gp	VerbForm=Conv|Voice=Act	10	conj	10:conj	Canto=9|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_15
16	là	là	ADV	_	_	15	advmod:lmod	15:advmod:lmod	Canto=9|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_16
17	dove	dove	ADV	_	_	16	acl:relcl	16:acl:relcl	Canto=9|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_17
18	si	si	PRON	pf3yle	Person=3|PronType=Prs|Reflex=Yes	17	expl:impers	17:expl:impers	Canto=9|Clitic=Yes|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_18
19	fosse	essere	AUX	vi+4cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	cop	17:cop	Canto=9|SpaceAfter=No|Verso=36|UniqueTokenId=OldItalian_Dante_Purgatorio-293_19
20	,	,	PUNCT	_	_	28	punct	28:punct	_
21	quando	quando	SCONJ	csst	_	28	mark	28:mark	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_21
22	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	23:det	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_22
23	madre	madre	NOUN	sf3fs	Gender=Fem|Number=Sing	28	nsubj	28:nsubj	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_23
24	da	da	ADP	epska	_	25	case	25:case	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_24
25	Chirón	Chirone	PROPN	np	_	28	obl:lmod	28:obl:lmod	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_25
26	a	a	ADP	epskml	_	27	case	27:case	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_26
27	Schiro	Sciro	PROPN	np	_	28	obl:lmod	28:obl:lmod	Canto=9|Verso=37|UniqueTokenId=OldItalian_Dante_Purgatorio-293_27
28	trafuggò	trafugare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_28
29	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	obj	28:obj	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_29
30	dormendo	dormire	VERB	vi3gp	VerbForm=Conv|Voice=Act	29	acl	29:acl	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_30
31	in	in	ADP	epsksl	_	34	case	34:case	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_31
32	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	34	det	34:det	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_32
33	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	34	det:poss	34:det:poss	Canto=9|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_33
34	braccia	braccio	NOUN	sm2fp	Gender=Fem|Number=Plur	28	obl:lmod	28:obl:lmod	Canto=9|SpaceAfter=No|Verso=38|UniqueTokenId=OldItalian_Dante_Purgatorio-293_34
35	,	,	PUNCT	_	_	28	punct	28:punct	_
36	là	là	ADV	_	_	28	advmod:lmod	28:advmod:lmod	Canto=9|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_36
37	onde	onde	ADV	_	_	42	advmod:lmod	42:advmod:lmod	Canto=9|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_37
38	poi	poi	ADV	b	_	42	advmod:tmod	42:advmod:tmod	Canto=9|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_38
39	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	40	det	40:det	Canto=9|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_39
40	Greci	greco	NOUN	sm2mp	Gender=Masc|Number=Plur	42	nsubj	42:nsubj	Canto=9|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_40
41	il	il	PRON	pp3msyac	Gender=Masc|Number=Sing|Person=3|PronType=Prs	42	obj	42:obj	Canto=9|Clitic=Yes|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_41
42	dipartiro	dipartire	VERB	vta3irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	36	acl:relcl	36:acl:relcl	Canto=9|SpaceAfter=No|Verso=39|UniqueTokenId=OldItalian_Dante_Purgatorio-293_42
43	;	;	PUNCT	_	_	46	punct	46:punct	_
44	che	che	SCONJ	cssp	_	46	mark	46:mark	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_44
45	mi	mi	PRON	pf1sypr	Person=1|Poss=Yes|PronType=Prs|Reflex=Yes	46	obj	46:obj	Canto=9|Clitic=Yes|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_45
46	scoss'	scuotere	VERB	vta+irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl:cmp	5:advcl:cmp	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_46
47	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	46	nsubj	46:nsubj	Canto=9|SpaceAfter=No|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_47
48	,	,	PUNCT	_	_	55	punct	55:punct	_
49	sì	sì	ADV	_	_	55	advmod	55:advmod	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_49
50	come	come	ADV	_	_	55	mark	55:mark	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_50
51	da	da	ADP	epska	_	53	case	53:case	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_51
52	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	53	det	53:det	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_52
53	faccia	faccia	NOUN	sf1fs	Gender=Fem|Number=Sing	55	obl:lmod	55:obl:lmod	Canto=9|Verso=40|UniqueTokenId=OldItalian_Dante_Purgatorio-293_53
54	mi	mi	PRON	pp1syda	Person=1|Poss=Yes|PronType=Prs	55	iobj	55:iobj	Canto=9|Clitic=Yes|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_54
55	fuggì	fuggire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	46	advcl	46:advcl	Canto=9|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_55
56	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	57	det	57:det	Canto=9|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_56
57	sonno	sonno	NOUN	sm2ms	Gender=Masc|Number=Sing	55	nsubj	55:nsubj	Canto=9|SpaceAfter=No|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_57
58	,	,	PUNCT	_	_	60	punct	60:punct	_
59	e	e	CCONJ	cscc	_	60	cc	60:cc	Canto=9|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_59
60	diventa'	diventare	VERB	vi1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	55	conj	55:conj	Canto=9|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_60
61	ismorto	smorto	ADJ	a1ms	Gender=Masc|Number=Sing	60	xcomp	60:xcomp	Canto=9|SpaceAfter=No|Verso=41|UniqueTokenId=OldItalian_Dante_Purgatorio-293_61
62	,	,	PUNCT	_	_	64	punct	64:punct	_
63	come	come	ADV	b	_	64	mark	64:mark	Canto=9|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_63
64	fa	fare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	60	advcl:cmp	60:advcl:cmp	Canto=9|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_64
65	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	66	det	66:det	Canto=9|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_65
66	uom	uomo	NOUN	sm2ms	Gender=Masc|Number=Sing	64	nsubj	64:nsubj	Canto=9|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_66
67	che	che	PRON	pr	PronType=Rel	71	nsubj	71:nsubj	Canto=9|SpaceAfter=No|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_67
68	,	,	PUNCT	_	_	71	punct	71:punct	_
69	spaventato	spaventare	VERB	vtp1pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	71	advcl	71:advcl	Canto=9|SpaceAfter=No|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_69
70	,	,	PUNCT	_	_	71	punct	71:punct	_
71	agghiaccia	agghiacciare	VERB	vi1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	66	acl:relcl	66:acl:relcl	Canto=9|SpaceAfter=No|Verso=42|UniqueTokenId=OldItalian_Dante_Purgatorio-293_71
72	.	.	PUNCT	_	_	55	punct	55:punct	_

~~~


