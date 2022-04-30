---
layout: base
title:  'Statistics of expl:pv in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="es_ancora-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="es_ancora-dep-expl-pass.html">expl:pass</a></tt>.

3212 nodes (1%) are attached to their parents as `expl:pv`.

2559 instances of `expl:pv` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15940224159402.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (3208; 100% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Y	y	CCONJ	cc	_	3	advmod	3:advmod	_
2	nos	yo	PRON	pp1cp000	Case=Acc|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
3	quemamos	quemar	VERB	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl:pv	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
2	Yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	ClusterId=CESS-CAST-P-20010302-45-c1|ClusterType=Spec.person|MentionSpan=2|MentionMisc=ClusterTypeMismatch:Spec:Spec.person,CorefType:ident
3	no	no	ADV	rn	Polarity=Neg	4	advmod	4:advmod	_
4	pido	pedir	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	ccomp	11:ccomp	_
5	que	que	SCONJ	cs	_	7	mark	7:mark	_
6	me	yo	PRON	pp1cs000	Case=Acc|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	7	obj	7:obj	ClusterId=CESS-CAST-P-20010302-45-c1|ClusterType=Spec.person|MentionSpan=6|MentionMisc=ClusterTypeMismatch:Spec:Spec.person,CorefType:ident
7	protejan	proteger	VERB	vmsp3p0	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	4:ccomp	SpaceAfter=No
8	"	"	PUNCT	fe	PunctType=Quot	4	punct	4:punct	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	4	punct	4:punct	_
10	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	iobj	11:iobj	ClusterId=CESS-CAST-P-20010302-45-c11|ClusterType=Gen|MentionSpan=10
11	dijo	decir	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	a	a	ADP	spcms	_	14	case	14:case	_
13	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	14:det	_
14	jefe	jefe	NOUN	ncms000	Gender=Masc|Number=Sing	11	iobj	11:iobj	ClusterId=CESS-CAST-P-20010302-45-c11|ClusterType=Gen|MentionSpan=14-23|MentionMisc=HomoDD,CorefType:ident
15	policial	policial	ADJ	aq0cs0	Number=Sing	14	amod	14:amod	_
16	que	que	PRON	pr0cn000	PronType=Int,Rel	18	nsubj	18:nsubj	ClusterId=CESS-CAST-P-20010302-45-c11|ClusterType=Gen|MentionSpan=16|MentionMisc=CorefType:ident
17	le	él	PRON	pp3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	18	iobj	18:iobj	ClusterId=CESS-CAST-P-20010302-45-c1|ClusterType=Spec.person|MentionSpan=17|MentionMisc=ClusterTypeMismatch:Spec:Spec.person,CorefType:ident
18	recomendaba	recomendar	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	acl	14:acl	_
19	que	que	SCONJ	cs	_	22	mark	22:mark	_
20	no	no	ADV	rn	Polarity=Neg	22	advmod	22:advmod	_
21	se	él	PRON	p0300000	Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	22	expl:pv	22:expl:pv	_
22	fuese	ser	AUX	vssi3s0	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	18	ccomp	18:ccomp	_
23	caminando	caminar	VERB	vmg0000	VerbForm=Ger	22	advcl	22:advcl	SpaceAfter=No
24	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl:pv	color:blue
1	No	no	ADV	rn	Polarity=Neg	7	advmod	7:advmod	_
2	se	él	PRON	p0000000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	expl:pv	7:expl:pv	_
3	puede	poder	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
4	estar	estar	AUX	vmn0000	VerbForm=Inf	7	cop	7:cop	_
5	53	53	NUM	_	NumForm=Digit|NumType=Card	6	nummod	6:nummod	_
6	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obl	7:obl	ClusterId=CESS-CAST-P-19991202-20-s12.sn.69|ClusterType=Spec.number|MentionSpan=5-6
7	a	a	ADP	rg	_	0	root	0:root	MWE=al_pie_del_cañón|MWEPOS=ADV
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	fixed	7:fixed	_
9	pie	pie	NOUN	_	_	7	fixed	7:fixed	_
10	de	de	ADP	_	_	7	case	7:case	_
11	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
12	cañón	cañón	NOUN	_	_	7	fixed	7:fixed	_
13	sin	sin	ADP	sps00	_	15	case	15:case	_
14	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	_
15	apoyo	apoyo	NOUN	ncms000	Gender=Masc|Number=Sing	7	obl	7:obl	SpaceAfter=No|ClusterId=CESS-CAST-P-19991202-20-s12.sn.83|ClusterType=Gen|MentionSpan=14-15|MentionMisc=HomoDD
16	,	,	PUNCT	fc	PunctType=Comm	18	punct	18:punct	_
17	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	_
18	comprensión	comprensión	NOUN	ncfs000	Gender=Fem|Number=Sing	15	appos	15:appos	ClusterId=CESS-CAST-P-19991202-20-s12.sn.89|ClusterType=Gen|MentionSpan=17-18|MentionMisc=HomoDD
19	y	y	CCONJ	cc	_	21	cc	21:cc	_
20	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	21:det	_
21	afecto	afecto	NOUN	ncms000	Gender=Masc|Number=Sing	15	conj	15:conj	ClusterId=CESS-CAST-P-19991202-20-s12.sn.96|ClusterType=Gen|MentionSpan=20-21|MentionMisc=HomoDD
22	de	de	ADP	sps00	_	24	case	24:case	_
23	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	24	det	24:det	_
24	tuyos	tuyo	PRON	px2mp000	Gender=Masc|Number=Plur|Person=2|Poss=Yes|PronType=Ind	15	nmod	15:nmod	SpaceAfter=No|ClusterId[1]=CESS-CAST-P-19991202-20-s12.p.108|ClusterType[1]=Gen|MentionSpan[1]=24|ClusterId[2]=CESS-CAST-P-19991202-20-s12.sn.104|ClusterType[2]=Gen|MentionSpan[2]=23-24|MentionMisc[2]=HomoDD
25	,	,	PUNCT	fc	PunctType=Comm	28	punct	28:punct	_
26	y	y	CCONJ	cc	_	28	cc	28:cc	_
27	sin	sin	ADP	sps00	_	28	mark	28:mark	_
28	compartir	compartir	VERB	vmn0000	VerbForm=Inf	15	conj	15:conj	_
29	momentos	momento	NOUN	ncmp000	Gender=Masc|Number=Plur	28	obj	28:obj	ClusterId=CESS-CAST-P-19991202-20-s12.sn.118|ClusterType=Gen|MentionSpan=29-33
30	buenos	buen	ADJ	aq0mp0	Gender=Masc|Number=Plur	29	amod	29:amod	_
31	pero	pero	CCONJ	cc	_	33	cc	33:cc	_
32	también	también	ADV	rg	_	33	advmod	33:advmod	_
33	malos	malo	ADJ	aq0mp0	Gender=Masc|Number=Plur	30	conj	30:conj	SpaceAfter=No
34	"	"	PUNCT	fe	PunctType=Quot	7	punct	7:punct	SpaceAfter=No
35	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

~~~


