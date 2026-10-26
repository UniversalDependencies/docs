---
layout: base
title:  'Statistics of obl:agent in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="it_old-dep-obl-tmod.html">obl:tmod</a></tt>.

168 nodes (0%) are attached to their parents as `obl:agent`.

85 instances of `obl:agent` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.19642857142857.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (87; 52% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (54; 32% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (16; 10% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 obl:agent	color:blue
1	Con	con	ADP	epskc	_	2	case	2:case	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_1
2	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	3:obl	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_2
3	vedrai	vedere	VERB	vta2ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_3
4	colui	colui	PRON	pdms	Gender=Masc|Number=Sing|PronType=Dem	3	obj	3:obj	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_4
5	che	che	PRON	pr	PronType=Rel	6	nsubj:pass	6:nsubj:pass	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_5
6	'mpresso	imprimere	VERB	vtp2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	acl:relcl	4:acl:relcl	Canto=17|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_6
7	fue	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	6:aux:pass	Canto=17|SpaceAfter=No|Verso=76|UniqueTokenId=OldItalian_Dante_Paradiso-513_7
8	,	,	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Paradiso-513_8
9	nascendo	nascere	VERB	vi2gp	VerbForm=Conv|Voice=Act	6	advcl	6:advcl	Canto=17|SpaceAfter=No|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_9
10	,	,	PUNCT	_	_	9	punct	9:punct	UniqueTokenId=OldItalian_Dante_Paradiso-513_10
11	sì	così	ADV	b	_	15	advmod	15:advmod	Canto=17|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_11
12	da	da	ADP	epsk6	_	14	case	14:case	Canto=17|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_12
13	questa	questo	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	14	det	14:det	Canto=17|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_13
14	stella	stella	NOUN	sf1fs	Gender=Fem|Number=Sing	6	obl:agent	6:obl:agent	Canto=17|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_14
15	forte	forte	ADV	b	_	6	advmod	6:advmod	Canto=17|SpaceAfter=No|Verso=77|UniqueTokenId=OldItalian_Dante_Paradiso-513_15
16	,	,	PUNCT	_	_	18	punct	18:punct	UniqueTokenId=OldItalian_Dante_Paradiso-513_16
17	che	che	SCONJ	cssu	_	18	mark	18:mark	Canto=17|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_17
18	notabili	notabile	ADJ	a2fp	Gender=Fem|Number=Plur	15	advcl:cmp	15:advcl:cmp	Canto=17|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_18
19	fier	essere	AUX	vi4ifp3	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	18	cop	18:cop	Canto=17|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_19
20	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	21:det	Canto=17|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_20
21	opere	opera	NOUN	sf1fp	Gender=Fem|Number=Plur	18	nsubj	18:nsubj	Canto=17|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_21
22	sue	suo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	21	det:poss	21:det:poss	Canto=17|SpaceAfter=No|Verso=78|UniqueTokenId=OldItalian_Dante_Paradiso-513_22
23	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Paradiso-513_23

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:agent	color:blue
1	Queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	2	det	2:det	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_1
2	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj:pass	7:nsubj:pass	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_2
3	da	da	ADP	epski	_	4	case	4:case	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_3
4	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	7	obl:agent	7:obl:agent	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_4
5	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	iobj	7:iobj	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_5
6	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_6
7	porte	porgere	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Canto=5|SpaceAfter=No|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_7
8	.	.	PUNCT	_	_	7	punct	7:punct	UniqueTokenId=OldItalian_Dante_Inferno-185_8

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obl:agent	color:blue
1	Non	non	ADV	b	PronType=Neg	3	advmod:neg	3:advmod:neg	Canto=15|Verso=109|UniqueTokenId=OldItalian_Dante_Paradiso-455_1
2	era	essere	AUX	vi4iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	3:aux:pass	Canto=15|Verso=109|UniqueTokenId=OldItalian_Dante_Paradiso-455_2
3	vinto	vincere	VERB	vtp2iis3	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Canto=15|Verso=109|UniqueTokenId=OldItalian_Dante_Paradiso-455_3
4	ancora	ancora	ADV	b	_	3	advmod:tmod	3:advmod:tmod	Canto=15|Verso=109|UniqueTokenId=OldItalian_Dante_Paradiso-455_4
5	Montemalo	Montemalo	PROPN	np	_	3	nsubj:pass	3:nsubj:pass	Canto=15|Verso=109|UniqueTokenId=OldItalian_Dante_Paradiso-455_5
6	da	da	ADP	_	_	9	case	9:case	UniqueTokenId=OldItalian_Dante_Paradiso-455_6
7	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	UniqueTokenId=OldItalian_Dante_Paradiso-455_7
8	vostro	vostro	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	9:det:poss	Canto=15|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_8
9	Uccellatoio	Uccellatoio	PROPN	np	_	3	obl:agent	3:obl:agent	Canto=15|SpaceAfter=No|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_9
10	,	,	PUNCT	_	_	25	punct	25:punct	UniqueTokenId=OldItalian_Dante_Paradiso-455_10
11	che	che	PRON	pr	PronType=Rel	25	nsubj:pass	25:nsubj:pass	Canto=15|SpaceAfter=No|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_11
12	,	,	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Paradiso-455_12
13	com'	come	ADV	b	_	15	mark	15:mark	Canto=15|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_13
14	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux:pass	15:aux:pass	Canto=15|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_14
15	vinto	vincere	VERB	vtp2ips3	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	25	advcl:cmp	25:advcl:cmp	Canto=15|Verso=110|UniqueTokenId=OldItalian_Dante_Paradiso-455_15
16	in	in	ADP	_	_	18	case	18:case	UniqueTokenId=OldItalian_Dante_Paradiso-455_16
17	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	UniqueTokenId=OldItalian_Dante_Paradiso-455_17
18	montar	montare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	15	obl	15:obl	Canto=15|Verso=111|UniqueTokenId=OldItalian_Dante_Paradiso-455_18
19	sù	sù	ADV	b	_	18	advmod:lmod	18:advmod:lmod	Canto=15|SpaceAfter=No|Verso=111|UniqueTokenId=OldItalian_Dante_Paradiso-455_19
20	,	,	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Paradiso-455_20
21	così	così	ADV	b	_	25	advmod	25:advmod	Canto=15|Verso=111|UniqueTokenId=OldItalian_Dante_Paradiso-455_21
22	sarà	essere	AUX	vi4ifs3	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	25	cop	25:cop	Canto=15|Verso=111|UniqueTokenId=OldItalian_Dante_Paradiso-455_22
23	in	in	ADP	_	_	25	case	25:case	UniqueTokenId=OldItalian_Dante_Paradiso-455_23
24	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	25:det	UniqueTokenId=OldItalian_Dante_Paradiso-455_24
25	calo	calo	NOUN	sm2ms	Gender=Masc|Number=Sing	9	acl:relcl	9:acl:relcl	Canto=15|SpaceAfter=No|Verso=111|UniqueTokenId=OldItalian_Dante_Paradiso-455_25
26	.	.	PUNCT	_	_	3	punct	3:punct	UniqueTokenId=OldItalian_Dante_Paradiso-455_26

~~~


