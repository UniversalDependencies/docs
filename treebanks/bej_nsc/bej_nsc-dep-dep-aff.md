---
layout: base
title:  'Statistics of dep:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

7 nodes (1%) are attached to their parents as `dep:aff`.

7 instances of `dep:aff` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85714285714286.

The following 2 pairs of parts of speech are connected with `dep:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (6; 86% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep:aff	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	2	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 81414, 81535|TokenType=Aff
2	skʷi	_	VERB	V1	Aspect=Perf|VerbClass=1	5	parataxis:coord	_	GE= PFV|Gloss= pursue|RX= V1|Times= 81535, 81656|TokenType=Stem
3	-i	_	X	NP	_	2	dep:aff	_	RX= -L|Times= 81656, 81778|TokenType=Aff
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 81778, 81899|TokenType=Aff
5	gʷoːj	_	VERB	V1	Aspect=Perf|VerbClass=1	9	dep:conj	_	GE= INT,PFV|Gloss= be_unable|RX= V1,DER|Times= 81899, 82021|TokenType=Stem
6	=t	_	CCONJ	CCONJ	_	5	cc	_	GE= =COORD|RX= CCONJ|Times= 82021, 82143|TokenType=Clit
7	//	_	PUNCT	PUNCT	_	5	punct	_	GE= PUNCT|RX= PUNCT|Times= 82143, 82850
8	hoːj	_	PRON	PRO	Case=Abl	9	iobj	_	GE= ABL,3|RX= PRO|Times= 82850, 83108|TokenType=Stem
9	ɖaːb	_	VERB	V2	VerbClass=2	0	root	_	Gloss= run|RX= V2|Times= 83108, 83194|TokenType=Stem
10	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	GE= -PFV,3SG,M|RX= -TAM,PNG|Times= 83194, 83280|TokenType=Aff
11	-i	_	X	-L	_	9	dep:aff	_	RX= -L|Times= 83280, 83367|TokenType=Aff
12	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 83367, 83496|TokenType=Aff
13	ha	_	AUX	AUX,EMPH	Aspect=Aor	9	cop	_	GE= AOR|Gloss= take|RX= AUX,EMPH|Times= 83496, 83625|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	9	punct	_	GE= PUNCT|RX= PUNCT|Times= 83625, 84523

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 dep:aff	color:blue
1	doːr	_	NOUN	N	Gender=Masc	8	obl:mod	_	Gloss= time|RX= N,M|Times= 28614, 28792|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 28792, 29410
3	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 29410, 29552|TokenType=Clit
4	meːk	_	NOUN	N	_	8	obj	_	Gloss= donkey|RX= N|Times= 29552, 29695|TokenType=Stem
5	oːn	_	PRON	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	GE= PROX,SG,M,ACC|RX= DEM|Times= 29695, 29981|TokenType=Stem
6	ba=	_	AUX	PTCL	Mood=Opt	8	aux	_	GE= OPT=|RX= PTCL=|Times= 29981, 30076|TokenType=Clit
7	a-	_	PRON	PNG	Number=Sing|Person=1	8	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 30076, 30171|TokenType=Aff
8	akaj	_	VERB	V1,IRG,NEG	Mood=Opt|Polarity=Neg|VerbClass=1	10	acl:relcl	_	GE= NEG,OPT|Gloss= become|RX= V1,IRG|Times= 30171, 30267|TokenType=Stem
9	/	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 30267, 30553
10	kaːm	_	NOUN	N	_	12	obj	_	Gloss= camel|RX= N|Times= 30553, 30772|TokenType=Stem
11	han	_	PART	PTCL	_	10	advmod	_	Gloss= also|RX= PTCL,FOC|Times= 30772, 30991|TokenType=Stem
12	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	17	parataxis	_	GE= MID|Gloss= ride|RX= V1,DER|Times= 30991, 31045|TokenType=Stem
13	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	12	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 31045, 31100|TokenType=Aff
14	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	12	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 31100, 31155|TokenType=Clit
15	=i	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	12	aux	_	GE= =COP,1SG|ReportedSpeech=Yes|RX= =PRED,N|Times= 31155, 31210|TokenType=Clit
16	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	17	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 31210, 31319|TokenType=Aff
17	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 31319, 31429|TokenType=Stem
18	//	_	PUNCT	PUNCT	_	17	punct	_	GE= PUNCT|RX= PUNCT|Times= 31429, 31649
19	mhaj	_	NUM	NUM	_	20	nummod:det	_	Gloss= three|RX= NUM|Times= 31649, 31929|TokenType=Stem
20	nafar	_	NOUN	N	Foreign=Yes|Gender=Masc	28	dislocated	_	Gloss= person|RX= N,M,BORR,ARA|Times= 31929, 32069|TokenType=Stem
21	-a	_	PART	_	Number=Plur	20	dep:aff	_	GE= -PL|Times= 32069, 32209|TokenType=Aff
22	nuːn	_	PART	PTCL	_	20	advmod	_	Gloss= only|RX= PTCL|Times= 32209, 32489|TokenType=Stem
23	/	_	PUNCT	PUNCT	_	20	punct	_	GE= PUNCT|RX= PUNCT|Times= 32489, 33247
24	naː	_	NOUN	N	Gender=Fem	28	nsubj	_	Gloss= thing|RX= SBJ,N,F|Times= 33247, 33441|TokenType=Stem
25	=t	_	DET	DET	Definite=Ind|Gender=Fem	24	det	_	GE= =INDF,F|RX= =DET|Times= 33441, 33635|TokenType=Clit
26	bi=	_	AUX	PTCL	Mood=Opt	28	aux	_	GE= OPT=|RX= PTCL=|Times= 33635, 33732|TokenType=Clit
27	t-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	28	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 33732, 33829|TokenType=Aff
28	ʔam	_	VERB	V1,NEG	Mood=Opt|Polarity=Neg|VerbClass=1|Voice=Mid	10	acl:relcl	_	GE= MID,NEG,OPT|Gloss= ride|RX= V1,DER|Times= 33829, 33926|TokenType=Stem
29	=eːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	28	mark	_	GE= =REL,SG,M|RX= =CONJ|Times= 33926, 34024|TokenType=Clit
30	//	_	PUNCT	PUNCT	_	17	punct	_	GE= //|RX= PUNCT|Times= 34024, 35599

~~~


