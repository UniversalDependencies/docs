---
layout: base
title:  'Statistics of csubj in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="it_old-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="it_old-dep-csubj-relcl.html">csubj:relcl</a></tt>.

124 nodes (0%) are attached to their parents as `csubj`.

92 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66935483870968.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (93; 75% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (10; 8% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_old-pos-AUX.html">AUX</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Oh	oh	INTJ	i	_	3	discourse	_	Canto=9|Verso=9
2	quanto	quanto	ADV	b	_	3	advmod	_	Canto=9|Verso=9
3	tarda	tardare	VERB	vi*1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Canto=9|Verso=9
4	a	a	ADP	epsk1e	_	5	case	_	Canto=9|Verso=9
5	me	me	PRON	pp1slco	Number=Sing|Person=1|PronType=Prs	3	obl	_	Canto=9|Verso=9
6	ch'	che	SCONJ	csss	_	9	mark	_	Canto=9|SpaceAfter=No|Verso=9
7	altri	altro	PRON	pi	Gender=Masc|Number=Plur|PronType=Ind	9	nsubj	_	Canto=9|Verso=9
8	qui	qui	ADV	b	_	9	advmod:lmod	_	Canto=9|Verso=9
9	giunga	giungere	VERB	vi2cps3	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	Canto=9|SpaceAfter=No|Verso=9
10	!	!	PUNCT	_	_	9	punct	_	SpaceAfter=No
11	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 csubj	color:blue
1	Di	di	ADP	_	_	2	case	_	Canto=15|Verso=115
2	più	più	ADV	_	_	3	obl:arg	_	Canto=15|Verso=115
3	direi	dire	VERB	vta3dps1	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	Canto=15|SpaceAfter=No|Verso=115
4	;	;	PUNCT	_	_	12	punct	_	_
5	ma	ma	CCONJ	csca	_	12	cc	_	Canto=15|Verso=115
6	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=15|Verso=115
7	venire	venire	VERB	vi3fpsm3ms	Tense=Pres|VerbForm=Inf	12	csubj	_	Canto=15|Verso=115
8	e	e	CCONJ	cscc	_	10	cc	_	Canto=15|Verso=115
9	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	Canto=15|Verso=115
10	sermone	sermone	NOUN	sm3ms	Gender=Masc|Number=Sing	7	conj	_	Canto=15|Verso=115
11	più	più	DET	b	_	12	advmod	_	Canto=15|Verso=116
12	lungo	lungo	ADJ	a1msc+	Degree=Cmp|Gender=Masc|Number=Sing	3	parataxis	_	Canto=15|Verso=116
13	esser	essere	AUX	vi4fp	Tense=Pres|VerbForm=Inf	12	cop	_	Canto=15|Verso=116
14	non	non	ADV	b	PronType=Neg	12	advmod:neg	_	Canto=15|Verso=116
15	può	potere	AUX	vta2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	Canto=15|SpaceAfter=No|Verso=116
16	,	,	PUNCT	_	_	20	punct	_	_
17	però	però	SCONJ	_	_	20	cc	_	Canto=15|Verso=116
18	ch'	che	SCONJ	_	_	20	mark	_	Canto=15|SpaceAfter=No|Verso=116
19	i'	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	20	nsubj	_	Canto=15|Verso=116
20	veggio	vedere	VERB	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	Canto=15|Verso=116
21	là	là	ADV	b	_	20	advmod:lmod	_	Canto=15|Verso=117
22	surger	surgere	VERB	vi2fp	Tense=Pres|VerbForm=Inf	20	ccomp	_	Canto=15|Verso=117
23	nuovo	nuovo	ADJ	a1ms	Gender=Masc|Number=Sing	24	amod	_	Canto=15|Verso=117
24	fummo	fumo	NOUN	sm2ms	Gender=Masc|Number=Sing	22	nsubj	_	Canto=15|Verso=117
25	di	di	ADP	_	_	27	case	_	Canto=15|Comment=de-l|Verso=117
26	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	Canto=15|Comment=de-l|Verso=117
27	sabbione	sabbione	NOUN	sm3ms	Gender=Masc|Number=Sing	22	obl:lmod	_	Canto=15|SpaceAfter=No|Verso=117
28	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Non	non	ADV	b	PronType=Neg	4	advmod:neg	_	Canto=7|Verso=10
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Canto=7|Verso=10
3	sanza	senza	ADP	eisk13	_	4	case	_	Canto=7|Verso=10
4	cagion	cagione	NOUN	sf3fs	Gender=Fem|Number=Sing	0	root	_	Canto=7|Verso=10
5	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Canto=7|SpaceAfter=No|Verso=10
6	andare	andare	VERB	vi1fp_s_ms	Tense=Pres|VerbForm=Inf	4	csubj	_	Canto=7|Verso=10
7	a	a	ADP	_	_	9	case	_	Canto=7|Comment=a-l|Verso=10
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=7|Comment=a-l|Verso=10
9	cupo	cupo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	obl:lmod	_	Canto=7|SpaceAfter=No|Verso=10
10	:	:	PUNCT	_	_	11	punct	_	_
11	vuole	volere	VERB	vta*2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	Canto=7|Verso=11
12	si	si	PRON	pf3xim	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	11	expl:impers	_	Canto=7|Verso=11
13	ne	in	ADP	epaksl	_	15	case	_	Canto=7|Verso=11
14	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=7|SpaceAfter=No|Verso=11
15	alto	alto	NOUN	sm2ms	Gender=Masc|Number=Sing	11	obl:lmod	_	Canto=7|SpaceAfter=No|Verso=11
16	,	,	PUNCT	_	_	17	punct	_	_
17	là	là	ADV	b	_	15	advmod:lmod	_	Canto=7|Verso=11
18	dove	dove	ADV	b	_	20	advmod:lmod	_	Canto=7|Verso=11
19	Michele	Michele	PROPN	np	_	20	nsubj	_	Canto=7|Verso=11
20	fé	fare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	17	acl:relcl	_	Canto=7|Verso=12
21	la	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	Canto=7|Verso=12
22	vendetta	vendetta	NOUN	sf1fs	Gender=Fem|Number=Sing	20	obj	_	Canto=7|Verso=12
23	di	di	ADP	_	_	26	case	_	Canto=7|Comment=de-l|Verso=12
24	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	Canto=7|Comment=de-l|Verso=12
25	superbo	superbo	ADJ	a1ms	Gender=Masc|Number=Sing	26	amod	_	Canto=7|Verso=12
26	strupo	stupro	NOUN	sm2ms	Gender=Masc|Number=Sing	22	nmod	_	Canto=7|SpaceAfter=No|Verso=12
27	»	»	PUNCT	_	_	4	punct	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


