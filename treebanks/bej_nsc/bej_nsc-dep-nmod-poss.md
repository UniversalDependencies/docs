---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nmod.html">nmod</a></tt>.

16 nodes (1%) are attached to their parents as `nmod:poss`.

16 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (15; 94% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 nmod:poss	color:blue
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


