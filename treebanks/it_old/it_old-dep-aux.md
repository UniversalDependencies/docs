---
layout: base
title:  'Statistics of aux in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_old-dep-aux-pass.html">aux:pass</a></tt>.

783 nodes (1%) are attached to their parents as `aux`.

638 instances of `aux` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08556832694764.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (737; 94% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (21; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (13; 2% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 aux	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Oh	oh	INTJ	i	_	15	discourse	_	Canto=33|SpaceAfter=No|Verso=121
3	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	diss'	dire	VERB	vta3irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=33|SpaceAfter=No|Verso=121
7	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Canto=33|Verso=121
8	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obl:arg	_	Canto=33|SpaceAfter=No|Verso=121
9	,	,	PUNCT	_	_	15	punct	_	_
10	«	«	PUNCT	_	_	15	punct	_	SpaceAfter=No
11	or	ora	ADV	cscn	_	15	advmod:tmod	_	Canto=33|Verso=121
12	se'	essere	AUX	vi4ips2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	aux	_	Canto=33|Verso=121
13	tu	tu	PRON	pp2slso	Number=Sing|Person=2|PronType=Prs	15	nsubj	_	Canto=33|Verso=121
14	ancor	ancora	ADV	b	_	15	advmod:tmod	_	Canto=33|Verso=121
15	morto	morire	VERB	vi3ibs2	Aspect=Perf|Gender=Masc|Number=Sing|Person=2|Tense=Past|VerbForm=Part	6	ccomp:reported	_	Canto=33|SpaceAfter=No|Verso=121
16	?	?	PUNCT	_	_	15	punct	_	SpaceAfter=No
17	»	»	PUNCT	_	_	15	punct	_	SpaceAfter=No
18	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	Ben	bene	ADV	b	_	7	advmod	_	Canto=11|Verso=85
2	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=11|Verso=85
3	sare'	essere	AUX	vi4drs1	Mood=Cnd|Number=Sing|Person=1|Tense=Past	7	aux	_	Canto=11|Verso=85
4	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	7	nsubj	_	Canto=11|Verso=85
5	stato	essere	AUX	vi4drs1	Mood=Cnd|Number=Sing|Person=1|Tense=Past	7	cop	_	Canto=11|Verso=85
6	sì	così	ADV	b	_	7	advmod	_	Canto=11|Verso=85
7	cortese	cortese	ADJ	a2ms	Gender=Masc|Number=Sing	0	root	_	Canto=11|Verso=85
8	mentre	mentre	ADV	_	_	11	advmod	_	Canto=11|Verso=86
9	ch'	che	SCONJ	_	_	11	mark	_	Canto=11|Verso=86
10	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	11	nsubj	_	Canto=11|Verso=86
11	vissi	vivere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	advcl	_	Canto=11|SpaceAfter=No|Verso=86
12	,	,	PUNCT	_	_	7	punct	_	_
13	per	per	ADP	epskr	_	16	case	_	Canto=11|Verso=86
14	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	Canto=11|Verso=86
15	gran	grande	ADJ	a2ms	Gender=Masc|Number=Sing	16	amod	_	Canto=11|Verso=86
16	disio	desiderio	NOUN	sm2ms	Gender=Masc|Number=Sing	7	obl	_	Canto=11|Verso=86
17	de	di	ADP	eps	_	19	case	_	Canto=11|Verso=87
18	l'	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	Canto=11|Verso=87
19	eccellenza	eccellenza	NOUN	sf1fs	Gender=Fem|Number=Sing	16	nmod	_	Canto=11|Verso=87
20	ove	ove	PRON	p	_	23	obl:lmod	_	Canto=11|Verso=87
21	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	22	det:poss	_	Canto=11|Verso=87
22	core	cuore	NOUN	sm3ms	Gender=Masc|Number=Sing	23	nsubj	_	Canto=11|Verso=87
23	intese	intendere	VERB	vtp2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	16	acl:relcl	_	Canto=11|SpaceAfter=No|Verso=87
24	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux	color:blue
1	Lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Canto=13|Verso=40
2	fren	freno	NOUN	sm2ms	Gender=Masc|Number=Sing	8	nsubj	_	Canto=13|Verso=40
3	vuol	volere	AUX	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	Canto=13|Verso=40
4	esser	essere	AUX	vi4fp	Tense=Pres|VerbForm=Inf	8	cop	_	Canto=13|Verso=40
5	di	di	ADP	_	_	8	case	_	Canto=13|Comment=de-l|Verso=40
6	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=13|Comment=de-l|Verso=40
7	contrario	contrario	ADJ	a1ms	Gender=Masc|Number=Sing	8	amod	_	Canto=13|Verso=40
8	suono	suono	NOUN	sm2ms	Gender=Masc|Number=Sing	0	root	_	Canto=13|SpaceAfter=No|Verso=40
9	;	;	PUNCT	_	_	10	punct	_	_
10	credo	credere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	Canto=13|Verso=41
11	che	che	SCONJ	csso	_	13	mark	_	Canto=13|Verso=41
12	l'	lo	PRON	pp3msyac	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	Canto=13|Verso=41
13	udirai	udire	VERB	vta3ifs2	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	10	ccomp	_	Canto=13|SpaceAfter=No|Verso=41
14	,	,	PUNCT	_	_	17	punct	_	_
15	per	per	ADP	epskp	_	17	case	_	Canto=13|Verso=41
16	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	_	Canto=13|Verso=41
17	avviso	avviso	NOUN	sm2ms	Gender=Masc|Number=Sing	13	obl	_	Canto=13|SpaceAfter=No|Verso=41
18	,	,	PUNCT	_	_	21	punct	_	_
19	prima	prima	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	21	amod	_	Canto=13|Verso=42
20	che	che	SCONJ	_	_	21	mark	_	Canto=13|Verso=42
21	giunghi	giungere	VERB	vi2cps2	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	advcl	_	Canto=13|Verso=42
22	a	a	ADP	_	_	24	case	_	Canto=13|Comment=a-l|Verso=42
23	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	Canto=13|Comment=a-l|Verso=42
24	passo	passo	NOUN	sm2ms	Gender=Masc|Number=Sing	21	obl:arg	_	Canto=13|Verso=42
25	di	di	ADP	_	_	27	case	_	Canto=13|Comment=de-l|Verso=42
26	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	Canto=13|Comment=de-l|Verso=42
27	perdono	perdono	NOUN	sm2ms	Gender=Masc|Number=Sing	24	nmod	_	Canto=13|SpaceAfter=No|Verso=42
28	.	.	PUNCT	_	_	10	punct	_	_

~~~


