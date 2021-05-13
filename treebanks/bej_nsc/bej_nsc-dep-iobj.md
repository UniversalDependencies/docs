---
layout: base
title:  'Statistics of iobj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `iobj`

This relation is universal.

21 nodes (2%) are attached to their parents as `iobj`.

21 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (15; 71% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (4; 19% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	əəə	_	INTJ	HESIT	_	8	discourse	_	Gloss= er|RX= HESIT|Times= 16164, 16399|TokenType=Stem
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	Gloss= small|RX= ADJ|Times= 16399, 16516|TokenType=Stem
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	GE= =INDF,F|RX= =DET|Times= 16516, 16634|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	8	nsubj	_	Gloss= child|RX= SBJ,N|Times= 16634, 16869|TokenType=Stem
5	geːb	_	ADP	POSTP	_	8	iobj	_	Gloss= beside|RX= POSTP|Times= 16869, 17104|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	GE= PUNCT|RX= PUNCT|Times= 17104, 17339
7	tiː-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	8	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 17339, 17407|TokenType=Aff
8	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	GE= AOR|Gloss= be_there|RX= V1,IRG|Times= 17407, 17475|TokenType=Stem
9	=aj	_	SCONJ	CONJ	_	8	mark	_	GE= =CSL|RX= =CONJ|Times= 17475, 17543|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 17543, 19067

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 iobj	color:blue
1	beːn	_	ADV	ADV	_	7	iobj	_	Gloss= there|RX= ADV|Times= 2926, 3046|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX=PUNCT|Times= 3046, 3398
3	i=	_	DET	DET	Definite=Def|Gender=Masc	4	det	_	GE= DEF,M=|RX= DET=|Times= 3398, 3530|TokenType=Clit
4	ʃarg	_	PROPN	NP	_	1	reparandum	_	ProperName= Sharg|RX= N,PROP|Times= 3530, 3662|TokenType=Stem
5	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	4	case	_	GE= =LOC,SG|RX= =POSTP|Times= 3662, 3794|TokenType=Clit
6	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 3794, 3926|TokenType=Aff
7	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	GE= AOR|Gloss= be_there|RX=V1,IRG|Times= 3926, 4058|TokenType=Stem
8	=ajt	_	CCONJ	CCONJ	_	7	cc	_	GE= =COORD|RX=CCONJ|Times= 4058, 4190|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	7	punct	_	GE= PUNCT|RX=PUNCT|Times= 4190, 5569
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	GE= DEF,M=|RX= DET=|Times= 5569, 5666|TokenType=Clit
11	kaːm	_	NOUN	N	_	13	obj	_	Gloss= camel|RX= N|Times= 5666, 5763|TokenType=Stem
12	=iji	_	PRON	PRO	Case=Gen|Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	GE= =POSS,1SG,GEN|RX= =PRO|Times= 5763, 5860|TokenType=Clit
13	haraw	_	VERB	V1	VerbClass=1	17	advcl	_	GE= V1|Gloss= seek|Times= 5860, 6006|TokenType=Stem
14	-a	_	SCONJ	CVB	VerbForm=Conv	13	mark:aff	_	GE= -CVB,MNR|Times= 6006, 6152|TokenType=Aff
15	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX=PUNCT|Times= 6152, 6713
16	a-	_	PRON	PNG	Number=Sing|Person=1	17	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 6713, 6799|TokenType=Aff
17	dif	_	VERB	V1	Aspect=Perf|VerbClass=1	24	advcl	_	GE= PFV|Gloss= leave|RX=V1|Times= 6799, 6885|TokenType=Stem
18	=hoːb	_	SCONJ	CONJ	_	17	mark	_	GE= =CONJ|Gloss= =when|Times= 6885, 6972|TokenType=Clit
19	//	_	PUNCT	PUNCT	_	17	punct	_	GE= PUNCT|RX=PUNCT|Times= 6972, 7232
20	biri	_	NOUN	N	Gender=Masc	24	nsubj	_	Gloss= rain|RX= N,M|Times= 7232, 7478|TokenType=Stem
21	dh	_	ADP	POSTP	_	24	iobj	_	GE= DIR|RX=POSTP|Times= 7478, 7601|TokenType=Stem
22	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	GE= =POSS,1SG,ACC|RX= =PRO|Times= 7601, 7724|TokenType=Clit
23	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	24	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 7724, 7847|TokenType=Aff
24	jaːm	_	VERB	V1	Aspect=Perf|VerbClass=1	0	root	_	GE= INT,PFV|Gloss= rain|RX=V1,DER|Times= 7847, 7970|TokenType=Stem
25	//	_	PUNCT	PUNCT	_	24	punct	_	GE= PUNCT|RX=PUNCT|Times= 7970, 9063

~~~


