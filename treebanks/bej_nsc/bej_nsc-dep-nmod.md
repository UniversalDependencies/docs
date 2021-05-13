---
layout: base
title:  'Statistics of nmod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bej_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

14 nodes (1%) are attached to their parents as `nmod`.

10 instances of `nmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92857142857143.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (8; 57% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	tak	_	NOUN	N	Gender=Masc	9	nsubj	_	Gloss= man|RX= SBJ,N,M|Times= 0, 351|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 351, 1157
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	Gloss= elder|RX= CN|Times= 1157, 1424|TokenType=Stem
4	//	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 1424, 2257
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	Gloss= relatives|RX= N|Times= 2257, 2593|TokenType=Stem
6	tak	_	NOUN	N	Gender=Masc	1	appos	_	Gloss= man|RX= N,M|Times= 2593, 2761|TokenType=Stem
7	-i	_	PART	CASE	Case=Gen	6	case:aff	_	GE= -GEN|RX= -CASE|Times= 2761, 2930|TokenType=Aff
8	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 2930, 3042|TokenType=Aff
9	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	GE= AOR|Gloss= be_there|RX= V1,IRG|Times= 3042, 3154|TokenType=Stem
10	=t	_	CCONJ	CCONJ	_	9	cc	_	GE= =COORD|RX= CCONJ|Times= 3154, 3267|TokenType=Clit
11	amsi	_	ADV	ADV	_	13	advmod	_	Gloss= today|RX= ADV|Times= 3267, 3603|TokenType=Stem
12	iraːnaj	_	INTJ	_	_	13	discourse	_	Gloss= gosh|RX= EXCL|Times= 3603, 3940|TokenType=Stem
13	rh	_	VERB	V2	VerbClass=2	0	root	_	Gloss= see|RX= V2|Times= 3940, 4108|TokenType=Stem
14	-i	_	PRON	TAM,PNG	Aspect=Aor|Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	GE= -AOR,3SG,M|RX= -TAM,PNG|Times= 4108, 4277|TokenType=Aff
15	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 4277, 4764
16	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	17	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 4764, 4921|TokenType=Clit
17	kina	_	PRON	PRO	Reflex=Yes	13	dislocated	_	Gloss= owner|RX= PRO,REFL|Times= 4921, 5079|TokenType=Stem
18	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 5079, 5895

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 nmod	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	GE= DIST,SG,M,NOM|RX= DEM|Times= 76156, 76440|TokenType=Stem
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	GE= DEF,PL,M,NOM=|RX= DET=|Times= 76440, 76582|TokenType=Clit
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	GE= PL|Gloss= man|RX= SBJ,N,M|Times= 76582, 76724|TokenType=Stem
4	eːjaː	_	VERB	V2,IRG	Aspect=Pfv|VerbClass=2	8	acl:fixed	_	GE= PFV|Gloss= come|RX= V2,IRG|Times= 76724, 76819|TokenType=Stem
5	-n	_	PRON	PNG	Number=Plur|Person=3	4	nsubj:aff	_	GE= -3PL|RX= -PNG|Times= 76819, 76914|TokenType=Aff
6	=eːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	4	mark	_	GE= =REL,SG,M|RX= =CONJ|Times= 76914, 77009|TokenType=Clit
7	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	8	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 77009, 77151|TokenType=Clit
8	doːr	_	NOUN	N	Gender=Masc	14	nmod	_	Gloss= time|RX= N,M|Times= 77151, 77293|TokenType=Stem
9	/	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 77293, 78459
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	GE= DEF,M=|RX= DET=|Times= 78459, 78599|TokenType=Clit
11	kaːm	_	NOUN	N	_	14	obj	_	Gloss= camel|RX= N|Times= 78599, 78739|TokenType=Stem
12	=i	_	PRON	PRO	Case=Acc|Number=Sing	11	nmod:poss	_	GE= =POSS1,SG,ACC|RX= =PRO|Times= 78739, 78880|TokenType=Clit
13	jam	_	NOUN	N	Gender=Masc|Number=Plur	14	obj	_	Gloss= water|RX= N,PL,M|Times= 78880, 79301|TokenType=Stem
14	gʷʔa	_	VERB	V2	VerbClass=2	0	root	_	Gloss= drink|RX= V2|Times= 79301, 79385|TokenType=Stem
15	-s	_	AUX	V2	VerbClass=2|Voice=Cau	14	aux:aff	_	GE= -CAUS|RX= -V2,DER|Times= 79385, 79469|TokenType=Aff
16	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	14	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 79469, 79553|TokenType=Aff
17	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	14	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 79553, 79637|TokenType=Clit
18	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	14	aux	_	GE= =COP,1SG|RX= =PRED,N|Times= 79637, 79722|TokenType=Clit
19	/	_	PUNCT	PUNCT	_	14	punct	_	GE= PUNCT|RX= PUNCT|Times= 79722, 80500

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
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


