---
layout: base
title:  'Statistics of obl:arg in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="it_old-dep-obl-tmod.html">obl:tmod</a></tt>.

341 nodes (0%) are attached to their parents as `obl:arg`.

201 instances of `obl:arg` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8533724340176.

The following 15 pairs of parts of speech are connected with `obl:arg`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (161; 47% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (118; 35% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (14; 4% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:arg	color:blue
1	«	«	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_1
2	Oh	oh	INTJ	i	_	15	discourse	15:discourse	Canto=33|SpaceAfter=No|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_2
3	!	!	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_3
4	»	»	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_4
5	,	,	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-1182_5
6	diss'	dire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=33|SpaceAfter=No|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_6
7	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	Canto=33|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_7
8	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl:arg	6:obl:arg	Canto=33|SpaceAfter=No|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_8
9	,	,	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Inferno-1182_9
10	«	«	PUNCT	_	_	15	punct	15:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_10
11	or	ora	ADV	cscn	_	15	advmod:tmod	15:advmod:tmod	Canto=33|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_11
12	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	aux	15:aux	Canto=33|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_12
13	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	15	nsubj	15:nsubj	Canto=33|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_13
14	ancor	ancora	ADV	b	_	15	advmod:tmod	15:advmod:tmod	Canto=33|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_14
15	morto	morire	VERB	vi3ibs2	Aspect=Perf|Gender=Masc|Number=Sing|Person=2|Tense=Past|VerbForm=Part	6	ccomp:reported	6:ccomp:reported	Canto=33|SpaceAfter=No|Verso=121|UniqueTokenId=OldItalian_Dante_Inferno-1182_15
16	?	?	PUNCT	_	_	15	punct	15:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_16
17	»	»	PUNCT	_	_	15	punct	15:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Inferno-1182_17
18	.	.	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Inferno-1182_18

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:arg	color:blue
1	Qui	qui	ADV	b	_	2	advmod:lmod	2:advmod:lmod	Canto=6|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_1
2	puose	porre	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=6|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_2
3	fine	fine	NOUN	sm3ms	Gender=Masc|Number=Sing	2	obj	2:obj	Canto=6|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_3
4	a	a	ADP	_	_	7	case	7:case	Canto=6|Comment=a-l|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_4
5	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Canto=6|Comment=a-l|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_5
6	lagrimabil	lagrimabile	ADJ	a2ms	Number=Sing	7	amod	7:amod	Canto=6|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_6
7	suono	suono	NOUN	sm2ms	Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg	Canto=6|SpaceAfter=No|Verso=76|UniqueTokenId=OldItalian_Dante_Inferno-220_7
8	.	.	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Inferno-220_8

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:arg	color:blue
1	Né	né	CCONJ	cscr	_	2	cc	2:cc	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_1
2	Pier	Piero	PROPN	np	_	6	nsubj	6:nsubj	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_2
3	né	né	CCONJ	cscr	_	5	cc	5:cc	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_3
4	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_4
5	altri	altro	PRON	pi	Gender=Masc|Number=Plur|PronType=Ind	2	conj	2:conj	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_5
6	tolsero	togliere	VERB	vta2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_6
7	a	a	ADP	epsk1d	_	8	case	8:case	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_7
8	Matia	Mattia	PROPN	np	_	6	obl:arg	6:obl:arg	Canto=19|Verso=94|UniqueTokenId=OldItalian_Dante_Inferno-691_8
9	oro	oro	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obj	6:obj	Canto=19|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_9
10	od	o	CCONJ	cscd	_	11	cc	11:cc	Canto=19|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_10
11	argento	argento	NOUN	sm2ms	Gender=Masc|Number=Sing	9	conj	9:conj	Canto=19|SpaceAfter=No|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_11
12	,	,	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Inferno-691_12
13	quando	quando	SCONJ	csst	_	15	mark	15:mark	Canto=19|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_13
14	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	aux:pass	15:aux:pass	Canto=19|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_14
15	sortito	sortire	VERB	vtp3irs3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	6	advcl	6:advcl	Canto=19|Verso=95|UniqueTokenId=OldItalian_Dante_Inferno-691_15
16	a	a	ADP	_	_	18	case	18:case	Canto=19|Comment=a-l|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_16
17	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	18:det	Canto=19|Comment=a-l|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_17
18	loco	luogo	NOUN	sm2ms	Gender=Masc|Number=Sing	15	obl:lmod	15:obl:lmod	Canto=19|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_18
19	che	che	PRON	pr	PronType=Rel	20	obj	20:obj	Canto=19|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_19
20	perdé	perdere	VERB	vta2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	acl:relcl	18:acl:relcl	Canto=19|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_20
21	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	22:det	Canto=19|SpaceAfter=No|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_21
22	anima	anima	NOUN	sf1fs	Gender=Fem|Number=Sing	20	nsubj	20:nsubj	Canto=19|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_22
23	ria	rio	ADJ	a1fs	Gender=Fem|Number=Sing	22	amod	22:amod	Canto=19|SpaceAfter=No|Verso=96|UniqueTokenId=OldItalian_Dante_Inferno-691_23
24	.	.	PUNCT	_	_	6	punct	6:punct	UniqueTokenId=OldItalian_Dante_Inferno-691_24

~~~


