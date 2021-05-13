---
layout: base
title:  'Statistics of obl:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-arg.html">obl:arg</a></tt>.

10 nodes (1%) are attached to their parents as `obl:mod`.

10 instances of `obl:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.3.

The following 3 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (7; 70% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (2; 20% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	da	_	NOUN	N	Gender=Masc|Number=Plur	5	nsubj	_	GE= PL|Gloss= man|RX= SBJ,N,M|Times= 52560, 52754|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 52754, 53717
3	bʔeː	_	NOUN	N	Gender=Masc	5	obl:mod	_	Gloss= day|RX= N,M|Times= 53717, 53884|TokenType=Stem
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 53884, 54051|TokenType=Clit
5	eːjaː	_	VERB	V2,IRG	Aspect=Pfv|VerbClass=2	9	parataxis	_	GE= PFV|Gloss= come|ReportedSpeech=Yes|RX= V2,IRG|Times= 54051, 54162|TokenType=Stem
6	-n	_	PRON	PNG	Number=Plur|Person=3	5	nsubj:aff	_	GE= -3PL|RX= -PNG|Times= 54162, 54273|TokenType=Aff
7	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 54273, 54385|TokenType=Clit
8	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 54385, 54552|TokenType=Aff
9	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 54552, 54719|TokenType=Stem
10	//	_	PUNCT	PUNCT	_	9	punct	_	GE= PUNCT|RX= PUNCT|Times= 54719, 55636

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:mod	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	3	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 85022, 85127|TokenType=Aff
2	s-	_	AUX	V1	VerbClass=1|Voice=Cau	3	aux:aff	_	GE= CAUS-|RX= V1,DER-|Times= 85127, 85233|TokenType=Aff
3	ganif	_	VERB	V1	Aspect=Pfv|VerbClass=1	32	parataxis	_	GE= PFV|Gloss= kneel|ReportedSpeech=Yes|RX= V1|Times= 85233, 85339|TokenType=Stem
4	daːji	_	ADJ	ADJ	_	7	obl:mod	_	Gloss= good|RX= ADJ|Times= 85339, 85497|TokenType=Stem
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	4	det	_	GE= =INDF,F|RX= =DET|Times= 85497, 85656|TokenType=Clit
6	si-	_	AUX	V1	VerbClass=1|Voice=Cau	7	aux:aff	_	GE= CAUS-|RX= V1,DER-|Times= 85656, 85761|TokenType=Aff
7	ganf	_	VERB	V1	VerbClass=1	3	ccomp	_	Gloss= make_kneel|RX= V1|Times= 85761, 85867|TokenType=Stem
8	-oːj	_	SCONJ	N	_	7	mark:aff	_	GE= -N,AC|RX= -N,V|Times= 85867, 85973|TokenType=Aff
9	aːn	_	PRON	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	GE= PROX,PL,M,NOM|RX= DEM|Times= 85973, 86290|TokenType=Stem
10	hinin	_	PRON	PRO	Case=Nom|Number=Plur|Person=1	13	nsubj	_	GE= 1PL,NOM|RX= SBJ,PRO|Times= 86290, 86607|TokenType=Stem
11	/	_	PUNCT	PUNCT	_	10	punct	_	GE= PUNCT|RX= PUNCT|Times= 86607, 86925
12	barijoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	13	dep:comp	_	GE= POSS,2SG,ACC|RX= PRO|Times= 86925, 87328|TokenType=Stem
13	ribi	_	VERB	V1	VerbClass=1	28	parataxis	_	Gloss= load|RX= V1|Times= 87328, 87428|TokenType=Stem
14	-jaː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	13	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 87428, 87529|TokenType=Aff
15	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	13	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 87529, 87630|TokenType=Clit
16	=a	_	AUX	N,COP	Number=Plur|Person=1|VerbType=Cop	13	aux	_	GE= =COP,1PL|ReportedSpeech=Yes|RX= =PRED,N|Times= 87630, 87731|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 87731, 88965
18	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	19	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 88965, 89181|TokenType=Clit
19	kaːm	_	NOUN	N	_	21	obj	_	Gloss= camel|RX= N|Times= 89181, 89398|TokenType=Stem
20	ni-	_	PRON	PNG	Number=Plur|Person=1	21	nsubj:aff	_	GE= 1PL-|RX= PNG-|Times= 89398, 89542|TokenType=Aff
21	ʃabb	_	VERB	V1	Aspect=Pfv|VerbClass=1	23	ccomp	_	GE= INT,PFV|Gloss= look|RX= V1,DER|Times= 89542, 89687|TokenType=Stem
22	=eːt	_	SCONJ	CONJ	Gender=Fem	21	mark	_	GE= =REL,F|RX= =CONJ|Times= 89687, 89832|TokenType=Clit
23	areː	_	VERB	V2	VerbClass=2	13	advcl	_	Gloss= like|RX= V2|Times= 89832, 89976|TokenType=Stem
24	-na	_	PRON	TAM,PNG	Aspect=Pfv|Number=Plur|Person=1	23	nsubj:aff	_	GE= -PFV,1PL|RX= -TAM,PNG|Times= 89976, 90120|TokenType=Aff
25	=aj	_	SCONJ	CONJ	_	23	mark	_	GE= =CSL|RX= =CONJ|Times= 90120, 90265|TokenType=Clit
26	/	_	PUNCT	PUNCT	_	23	punct	_	GE= PUNCT|RX= PUNCT|Times= 90265, 90942
27	i-	_	PRON	PNG	_	28	nsubj:aff	_	GE= 3-|RX= PNG-|Times= 90942, 91026|TokenType=Aff
28	diː	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	32	parataxis	_	GE= PFV|Gloss= say|ReportedSpeech=Yes|RX= V1,IRG|Times= 91026, 91110|TokenType=Stem
29	-n	_	PRON	PNG	Number=Plur	28	nsubj:aff	_	GE= -PL|RX= -PNG|Times= 91110, 91194|TokenType=Aff
30	=heːb	_	PRON	PRO	Number=Sing|Person=1	28	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 91194, 91279|TokenType=Clit
31	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	32	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 91279, 91447|TokenType=Aff
32	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 91447, 91616|TokenType=Stem
33	//	_	PUNCT	PUNCT	_	32	punct	_	GE= PUNCT|RX= PUNCT|Times= 91616, 92425

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 obl:mod	color:blue
1	hoːj	_	PRON	PRO	Case=Abl	2	iobj	_	GE= ABL,3|RX= PRO|Times= 118871, 119193|TokenType=Stem
2	sallam	_	VERB	V2	VerbClass=2	7	acl:fixed	_	Gloss= give|RX= V2|Times= 119193, 119273|TokenType=Stem
3	-am	_	AUX	V2	VerbClass=2|Voice=Mid	2	aux:aff	_	GE= -MID|RX= -V2,DER|Times= 119273, 119354|TokenType=Aff
4	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	2	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 119354, 119435|TokenType=Aff
5	=eːt	_	SCONJ	CONJ	Gender=Fem	2	mark	_	GE= =REL,F|RX= =CONJ|Times= 119435, 119516|TokenType=Clit
6	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	det	_	GE= DEF,SG,F,ACC=|RX= DET=|Times= 119516, 119677|TokenType=Clit
7	na	_	SCONJ	CONJ	_	15	obl:mod	_	Gloss= thing|RX= CONJ|Times= 119677, 119839|TokenType=Stem
8	nuːn	_	PART	PTCL	Foreign=Yes	7	advmod	_	Gloss= only|RX= PTCL,BORR,ARA|Times= 119839, 120162|TokenType=Stem
9	/	_	PUNCT	PUNCT	_	7	punct	_	GE= PUNCT|RX= PUNCT|Times= 120162, 120485
10	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	11	det	_	GE= DEF,SG,M=|RX= DET=|Times= 120485, 120614|TokenType=Clit
11	ʔaraːw	_	NOUN	N	_	15	obj	_	Gloss= friend|RX= N|Times= 120614, 120743|TokenType=Stem
12	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	11	nmod:poss	_	GE= =POSS,3SG,ACC|RX= =PRO|Times= 120743, 120872|TokenType=Clit
13	ba=	_	AUX	PTCL	Mood=Opt	15	advcl	_	GE= OPT=|RX= PTCL=|Times= 120872, 120968|TokenType=Clit
14	a-	_	PRON	PNG	Number=Sing|Person=1	15	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 120968, 121065|TokenType=Aff
15	akaj	_	VERB	V1,IRG,NEG	Mood=Opt|Polarity=Neg|VerbClass=1	19	acl:relcl	_	GE= NEG,OPT|Gloss= become|RX= V1,IRG|Times= 121065, 121162|TokenType=Stem
16	=eːt	_	SCONJ	CONJ	Gender=Fem	15	mark	_	GE= =REL,F|RX= =CONJ|Times= 121162, 121259|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	15	punct	_	GE= PUNCT|RX= PUNCT|Times= 121259, 121801
18	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	19	det	_	GE= DEF,SG,F,ACC=|RX= DET=|Times= 121801, 121904|TokenType=Clit
19	na	_	SCONJ	CONJ	_	22	obj	_	Gloss= thing|RX= CONJ|Times= 121904, 122008|TokenType=Stem
20	/	_	PUNCT	PUNCT	_	19	punct	_	GE= PUNCT|RX= PUNCT|Times= 122008, 122894
21	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	22	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 122894, 123013|TokenType=Aff
22	kan	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1|Voice=Mid	0	root	_	GE= MID,PFV|Gloss= know|RX= V1,DER,IRG|Times= 123013, 123132|TokenType=Stem
23	=heːb	_	PRON	PRO	Number=Sing|Person=1	22	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 123132, 123251|TokenType=Clit
24	//	_	PUNCT	PUNCT	_	22	punct	_	GE= PUNCT|RX= PUNCT|Times= 123251, 124427

~~~


