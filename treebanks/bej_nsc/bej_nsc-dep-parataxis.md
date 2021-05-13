---
layout: base
title:  'Statistics of parataxis in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-coord.html">parataxis:coord</a></tt>, <tt><a href="bej_nsc-dep-parataxis-mod.html">parataxis:mod</a></tt>.

45 nodes (4%) are attached to their parents as `parataxis`.

44 instances of `parataxis` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.48888888888889.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (41; 91% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 parataxis	color:blue
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	Gloss= man|RX= SBJ,N,M|Times= 0, 190|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX=PUNCT|Times= 190, 879
3	kaːm	_	NOUN	N	_	7	nsubj	_	Gloss= camel|RX= SBJ,N|Times= 879, 982|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	GE= =POSS,1SG,NOM|RX= =PRO|Times= 982, 1085|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX=PUNCT|Times= 1085, 1815
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	GE= 1SG,DAT|RX=PRO|Times= 1815, 2092|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	GE= V2|Gloss= disappear|ReportedSpeech=Yes|Times= 2092, 2231|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	GE= -PFV,3SG,M|RX= -TAM,PNG|Times= 2231, 2370|TokenType=Aff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 2370, 2509|TokenType=Aff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX=V1,IRG|Times= 2509, 2648|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	GE= PUNCT|RX=PUNCT|Times= 2648, 2926

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 parataxis	color:blue
1	ʃamat	_	VERB	V2	VerbClass=2	6	acl	_	Gloss= blame|RX= V2|Times= 144041, 144120|TokenType=Stem
2	-ta	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Fem|Number=Sing|Person=3	1	nsubj:aff	_	GE= -PFV,3SG,F|RX= -TAM,PNG|Times= 144120, 144200|TokenType=Aff
3	-n	_	X	-L	_	1	dep:aff	_	RX= -L|Times= 144200, 144279|TokenType=Aff
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	1	obj	_	GE= =POSS,1SG,NOM|RX= =PRO|Times= 144279, 144359|TokenType=Clit
5	=ji	_	SCONJ	CONJ	_	1	mark	_	GE= =REL|RX= =CONJ|Times= 144359, 144439|TokenType=Clit
6	ʃamat	_	NOUN	N	Gender=Masc	13	parataxis	_	Gloss= blame|RX= N,M|Times= 144439, 144571|TokenType=Stem
7	-eː	_	PART	CASE	Case=Gen|Number=Plur	6	case:aff	_	GE= -GEN,PL|RX= -CASE|Times= 144571, 144704|TokenType=Aff
8	=ka	_	ADP	POSTP	Case=Dis	6	case	_	GE= =DISTR|RX= =POSTP|Times= 144704, 144837|TokenType=Clit
9	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	13	nsubj	_	GE= 1SG,NOM|RX= SBJ,PRO|Times= 144837, 145236|TokenType=Stem
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	GE= DEF,M=|RX= DET=|Times= 145236, 145368|TokenType=Clit
11	mhiːn	_	NOUN	N	Gender=Masc	13	iobj	_	Gloss= place|RX= N,M|Times= 145368, 145501|TokenType=Stem
12	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	GE= =POSS,1SG,ACC|RX= =PRO|Times= 145501, 145634|TokenType=Clit
13	naː	_	VERB	V2	VerbClass=2	0	root	_	Gloss= spend_the_night|RX= V2|Times= 145634, 145833|TokenType=Stem
14	-jeː	_	SCONJ	CVB	VerbForm=Conv	13	mark:aff	_	GE= -CVB,SMLT|Times= 145833, 146033|TokenType=Aff
15	mh	_	VERB	V2	VerbClass=2	13	advcl	_	Gloss= be_in_morning|RX= V2|Times= 146033, 146232|TokenType=Stem
16	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	15	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 146232, 146431|TokenType=Aff
17	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 146431, 147206

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 37 parataxis	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	GE= DEF,F=|RX= DET=|Times= 19067, 19150|TokenType=Clit
2	ʔoːr	_	NOUN	N	_	8	nsubj	_	Gloss= child|RX= SBJ,N|Times= 19150, 19233|TokenType=Stem
3	/	_	PUNCT	PUNCT	_	2	punct	_	GE= PUNCT|RX= PUNCT|Times= 19233, 19988
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 19988, 20204|TokenType=Clit
5	meːk	_	NOUN	N	_	7	obj	_	Gloss= donkey|RX= N|Times= 20204, 20420|TokenType=Stem
6	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	7	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 20420, 20636|TokenType=Aff
7	fidin	_	VERB	V1	Aspect=Pfv|VerbClass=1	8	dep:comp	_	GE= PFV|Gloss= move_away|RX= V1|Times= 20636, 20852|TokenType=Stem
8	galeːl	_	VERB	V2	VerbClass=2	27	parataxis	_	Gloss= drive_cattle|RX= V2|Times= 20852, 20996|TokenType=Stem
9	-tan	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Fem|Number=Sing|Person=3	8	nsubj:aff	_	GE= -PFV,3SG,F|RX= -TAM,PNG|Times= 20996, 21140|TokenType=Aff
10	=hoːb	_	SCONJ	CONJ	_	8	mark	_	Gloss= =when|ReportedSpeech=Yes|RX= =CONJ|Times= 21140, 21284|TokenType=Clit
11	/	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 21284, 22302
12	doːr	_	NOUN	N	Gender=Masc	22	nmod	_	Gloss= time|RX= N,M|Times= 22302, 22492|TokenType=Stem
13	han	_	ADV	ADV	_	22	advmod	_	GE= Q,PLR|RX= ADV,Q|Times= 22492, 22683|TokenType=Stem
14	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 22683, 22874
15	hoːb	_	NOUN	N	Gender=Masc	22	vocative	_	Gloss= grand-father|RX= N,M|Times= 22874, 22999|TokenType=Stem
16	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Polite=Form|Poss=Yes	15	nmod:poss	_	GE= =POSS,1PL,NOM|RX= =PRO,POL|Times= 22999, 23125|TokenType=Clit
17	-ej	_	PART	CASE	Case=Voc	15	case:aff	_	GE= -VOC|RX= -CASE|Times= 23125, 23251|TokenType=Aff
18	iraːnaj	_	INTJ	_	_	22	discourse	_	Gloss= gosh|RX= EXCL|Times= 23251, 23628|TokenType=Stem
19	/	_	PUNCT	PUNCT	_	18	punct	_	GE= PUNCT|RX= PUNCT|Times= 23628, 24200
20	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	21	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 24200, 24358|TokenType=Clit
21	meːk	_	NOUN	N	_	22	obj	_	Gloss= donkey|RX= N|Times= 24358, 24517|TokenType=Stem
22	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	27	parataxis	_	GE= MID|Gloss= ride|RX= V1,DER|Times= 24517, 24596|TokenType=Stem
23	-a	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	22	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 24596, 24675|TokenType=Aff
24	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	22	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 24675, 24754|TokenType=Clit
25	=wa	_	AUX	N,COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	22	aux	_	GE= =COP,2SG,M|ReportedSpeech=Yes|RX= =PRED,N|Times= 24754, 24834|TokenType=Clit
26	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	27	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 24834, 24939|TokenType=Aff
27	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	41	advcl	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 24939, 25045|TokenType=Stem
28	=hoːb	_	SCONJ	CONJ	_	27	mark	_	Gloss= =when|RX= =CONJ|Times= 25045, 25151|TokenType=Clit
29	?	_	PUNCT	PUNCT	_	27	punct	_	GE= PUNCT|RX= PUNCT|Times= 25151, 25469
30	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	37	nsubj	_	GE= 1SG,NOM|RX= SBJ,PRO|Times= 25469, 25766|TokenType=Stem
31	i=	_	DET	DET	Definite=Def|Gender=Masc	32	det	_	GE= DEF,M=|RX= DET=|Times= 25766, 25865|TokenType=Clit
32	meːk	_	NOUN	N	_	35	obl:mod	_	Gloss= donkey|RX= N|Times= 25865, 25964|TokenType=Stem
33	-i	_	PART	CASE	Case=Gen	32	case:aff	_	GE= -GEN|RX= -CASE|Times= 25964, 26064|TokenType=Aff
34	m-	_	SCONJ	N	_	35	mark:aff	_	GE= N,AC-|RX= N,V-|Times= 26064, 26163|TokenType=Aff
35	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	37	ccomp	_	GE= MID|Gloss= ride|RX= V1,DER|Times= 26163, 26262|TokenType=Stem
36	=eː	_	SCONJ	CONJ	_	35	mark	_	GE= =REL|RX= =CONJ|Times= 26262, 26362|TokenType=Clit
37	sagi	_	ADJ	ADJ	_	41	parataxis	_	Gloss= far|RX= ADJ|Times= 26362, 26461|TokenType=Stem
38	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	37	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 26461, 26560|TokenType=Clit
39	=i	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	37	cop	_	GE= =COP,1SG|ReportedSpeech=Yes|RX= =PRED,N|Times= 26560, 26660|TokenType=Clit
40	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	41	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 26660, 26809|TokenType=Aff
41	di	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	43	discourse	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 26809, 26958|TokenType=Stem
42	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	43	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 26958, 27107|TokenType=Aff
43	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 27107, 27256|TokenType=Stem
44	//	_	PUNCT	PUNCT	_	43	punct	_	GE= PUNCT|RX= PUNCT|Times= 27256, 28614

~~~


