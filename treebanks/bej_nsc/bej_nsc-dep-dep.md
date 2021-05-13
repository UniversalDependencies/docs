---
layout: base
title:  'Statistics of dep in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep`

This relation is universal.
There are 4 language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

5 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 dep	color:blue
1	j=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	GE= DEF,M=|RX= DET=|Times= 147206, 147301|TokenType=Clit
2	halak	_	NOUN	N	Gender=Masc	29	ccomp	_	Gloss= cloth|RX= N,M|Times= 147301, 147396|TokenType=Stem
3	-a	_	PART	_	Number=Plur	2	mark:aff	_	GE= -PL|Times= 147396, 147492|TokenType=Aff
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	2	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 147492, 147587|TokenType=Clit
5	=wa	_	CCONJ	CCONJ	_	2	cc	_	GE= =COORD|RX= CCONJ|Times= 147587, 147683|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	2	punct	_	GE= PUNCT|RX= PUNCT|Times= 147683, 148160
7	ji=	_	SCONJ	CONJ	Gender=Masc|Number=Plur	2	dep	_	GE= REL,PL,M=|RX= CONJ=|Times= 148160, 148239|TokenType=Clit
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	GE= DEF,M=|RX= DET=|Times= 148239, 148318|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	25	obl:arg	_	Gloss= man|RX= N,M|Times= 148318, 148397|TokenType=Stem
10	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	9	case	_	GE= =LOC,SG|RX= =POSTP|Times= 148397, 148476|TokenType=Clit
11	areː	_	CCONJ	PTCL	_	14	cc	_	Gloss= then|RX= PTCL|Times= 148476, 148793|TokenType=Stem
12	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	GE= PROX,PL,M,ACC|RX= DEM|Times= 148793, 149109|TokenType=Stem
13	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	14	det	_	GE= DEF,PL,M,ACC=|RX= DET=|Times= 149109, 149214|TokenType=Clit
14	gaɖʔa	_	NOUN	N	Gender=Masc|Number=Plur	29	obj	_	GE= PL|Gloss= weapon|RX= N,M|Times= 149214, 149320|TokenType=Stem
15	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	14	nmod:poss	_	GE= =POSS,3PL,ACC|RX= =PRO|Times= 149320, 149426|TokenType=Clit
16	na	_	PART	PTCL	_	14	discourse	_	GE= CONTR|RX= PTCL|Times= 149426, 149742|TokenType=Stem
17	/	_	PUNCT	PUNCT	_	14	punct	_	GE= PUNCT|RX= PUNCT|Times= 149742, 150059
18	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	29	nsubj	_	GE= 1SG,NOM|RX= SBJ,PRO|Times= 150059, 150374|TokenType=Stem
19	ti=	_	DET	DET	Definite=Def|Gender=Fem	20	det	_	GE= DEF,F=|RX= DET=|Times= 150374, 150453|TokenType=Clit
20	kina	_	PRON	PRO	Reflex=Yes	18	nmod	_	Gloss= owner|RX= PRO,REFL|Times= 150453, 150532|TokenType=Stem
21	=t	_	DET	DET	Definite=Ind|Gender=Fem	20	det	_	GE= =INDF,F|RX= =DET|Times= 150532, 150611|TokenType=Clit
22	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	GE= =POSS,1SG,NOM|RX= =PRO|Times= 150611, 150690|TokenType=Clit
23	/	_	PUNCT	PUNCT	_	20	punct	_	GE= PUNCT|RX= PUNCT|Times= 150690, 151006
24	ti=	_	DET	DET	Definite=Def|Gender=Fem	25	det	_	GE= DEF,F=|RX= DET=|Times= 151006, 151181|TokenType=Clit
25	sitoːb	_	VERB	V1,IRG	VerbClass=1	29	dep:comp	_	Gloss= convey|RX= V1,IRG|Times= 151181, 151357|TokenType=Stem
26	-oːj	_	SCONJ	N	_	25	mark:aff	_	GE= -N,AC|RX= -N,V|Times= 151357, 151533|TokenType=Aff
27	ti=	_	SCONJ	REL	Definite=Def|Gender=Fem	29	mark	_	GE= DEF,F=|RX= REL=|Times= 151533, 151664|TokenType=Clit
28	a-	_	PRON	PNG	Number=Sing|Person=1	29	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 151664, 151796|TokenType=Aff
29	stoːbi	_	VERB	V1,IRG	Aspect=Imp|VerbClass=1	32	ccomp	_	GE= IPFV|Gloss= convey|RX= V1,IRG|Times= 151796, 151928|TokenType=Stem
30	=jeːt	_	SCONJ	CONJ	Gender=Fem	29	mark	_	GE= =REL,F|RX= =CONJ|Times= 151928, 152060|TokenType=Clit
31	a-	_	PRON	PNG	Number=Sing|Person=1	32	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 152060, 152235|TokenType=Aff
32	kteːn	_	VERB	V1,IRG	Aspect=Imp|VerbClass=1|Voice=Mid	35	advcl	_	GE= MID,IPFV|Gloss= know|RX= V1,DER,IRG|Times= 152235, 152411|TokenType=Stem
33	=aj	_	SCONJ	CONJ	_	32	mark	_	GE= =CSL|RX= =CONJ|Times= 152411, 152587|TokenType=Clit
34	//	_	PUNCT	PUNCT	_	32	punct	_	GE= PUNCT|RX= PUNCT|Times= 152587, 153596
35	sallam	_	VERB	V2	VerbClass=2	39	parataxis	_	Gloss= give|ReportedSpeech=Yes|RX= V2|Times= 153596, 153739|TokenType=Stem
36	-a	_	PRON	TAM,PNG	Gender=Masc|Mood=Imp|Number=Sing	35	nsubj:aff	_	GE= -IMP,SG,M|RX= -TAM,PNG|Times= 153739, 153882|TokenType=Aff
37	=heːb	_	PRON	PRO	Number=Sing|Person=1	35	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 153882, 154026|TokenType=Clit
38	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	39	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 154026, 154133|TokenType=Aff
39	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 154133, 154241|TokenType=Stem
40	=t	_	CCONJ	CCONJ	_	39	cc	_	GE= =COORD|RX= CCONJ|Times= 154241, 154348|TokenType=Clit
41	=heːb	_	PRON	PRO	Number=Sing|Person=1	39	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 154348, 154456|TokenType=Clit
42	/	_	PUNCT	PUNCT	_	39	punct	_	GE= PUNCT|RX= PUNCT|Times= 154456, 154887

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	Gloss= what|RX= PRO,Q|Times= 132837, 133174|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	GE= COM|RX= POSTP|Times= 133174, 133511|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	Gloss= come|RX= V2,IRG|Times= 133511, 133567|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 133567, 133623|TokenType=Aff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	GE= =INDF,F|RX= =DET|Times= 133623, 133679|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	GE= =POSS,2SG,ACC|RX= =PRO|Times= 133679, 133735|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	GE= =INDF,F|RX= =DET|Times= 133735, 133791|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	GE= =COP,3SG|RX= =PRED,N|Times= 133791, 133848|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 133848, 134339

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dep	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	Gloss= what|RX= PRO,Q|Times= 132837, 133174|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	GE= COM|RX= POSTP|Times= 133174, 133511|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	Gloss= come|RX= V2,IRG|Times= 133511, 133567|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 133567, 133623|TokenType=Aff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	GE= =INDF,F|RX= =DET|Times= 133623, 133679|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	GE= =POSS,2SG,ACC|RX= =PRO|Times= 133679, 133735|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	GE= =INDF,F|RX= =DET|Times= 133735, 133791|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	GE= =COP,3SG|RX= =PRED,N|Times= 133791, 133848|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 133848, 134339

~~~


