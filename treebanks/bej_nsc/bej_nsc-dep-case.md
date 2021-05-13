---
layout: base
title:  'Statistics of case in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="bej_nsc-dep-case-aff.html">case:aff</a></tt>.

19 nodes (2%) are attached to their parents as `case`.

15 instances of `case` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47368421052632.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (14; 74% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (4; 21% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 case	color:blue
1	oːn	_	PRON	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	8	discourse	_	GE= PROX,SG,M,ACC|RX= DEM|Times= 80500, 80927|TokenType=Stem
2	hallaːn	_	ADV	ADV	_	8	discourse	_	Gloss= now|RX= ADV|Times= 80927, 81355|TokenType=Stem
3	hasara	_	ADV	PTCL	_	8	advmod	_	GE= ADVS|RX= PTCL|Times= 81355, 81783|TokenType=Stem
4	t=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	GE= DEF,F=|RX= DET=|Times= 81783, 81890|TokenType=Clit
5	ʔabaː	_	NOUN	N	Gender=Fem	8	obl:arg	_	Gloss= river_branch|RX= N,F|Times= 81890, 81997|TokenType=Stem
6	=t	_	DET	DET	Definite=Ind|Gender=Fem	5	det	_	GE= =INDF,F|RX= =DET|Times= 81997, 82104|TokenType=Clit
7	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	5	case	_	GE= =LOC,SG|RX= =POSTP|Times= 82104, 82211|TokenType=Clit
8	kirif	_	VERB	V1	VerbClass=1	0	root	_	Gloss= cut_off|RX= V1|Times= 82211, 82318|TokenType=Stem
9	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	8	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 82318, 82425|TokenType=Aff
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	8	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 82425, 82532|TokenType=Clit
11	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	8	aux	_	GE= =COP,1SG|RX= =PRED,N|Times= 82532, 82639|TokenType=Clit
12	//	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 82639, 83812

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	bak	_	ADV	DEICT	_	5	advmod	_	Gloss= thus|RX= DEICT,MNR|Times= 156541, 156863|TokenType=Stem
2	tʔi	_	VERB	V1,IRG	VerbClass=1	5	acl:relcl	_	Gloss= resemble|RX= V1,IRG|Times= 156863, 156970|TokenType=Stem
3	-it	_	SCONJ	N	_	2	mark:aff	_	GE= -VN|RX= -N,V|Times= 156970, 157078|TokenType=Aff
4	=eːt	_	SCONJ	CONJ	Gender=Fem	2	mark	_	GE= =REL,F|RX= =CONJ|Times= 157078, 157186|TokenType=Clit
5	ʔiːbaːb	_	NOUN	N	Gender=Fem	10	nsubj	_	GE= N,AC|Gloss= travel|RX= N,V,F|Times= 157186, 157509|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	GE= PUNCT|RX= PUNCT|Times= 157509, 158686
7	dh	_	ADP	POSTP	_	8	case	_	GE= DIR|RX= POSTP|Times= 158686, 158783|TokenType=Stem
8	=eː	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	10	obl:arg	_	GE= =POSS,1SG,ACC|RX= =PRO|Times= 158783, 158881|TokenType=Clit
9	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	10	nsubj:aff	_	GE= 3SG,F-|RX= PNG-|Times= 158881, 158978|TokenType=Aff
10	ki	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	12	parataxis	_	GE= PFV|Gloss= become|ReportedSpeech=Yes|RX= V1,IRG|Times= 158978, 159076|TokenType=Stem
11	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	12	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 159076, 159173|TokenType=Aff
12	di	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 159173, 159271|TokenType=Stem
13	eːn	_	VERB	V1,IRG	Aspect=Pfv|Number=Plur|Person=3|VerbClass=1	12	discourse	_	GE= PFV,3PL|Gloss= say|RX= V1,IRG|Times= 159271, 159466|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	12	punct	_	GE= PUNCT|RX= PUNCT|Times= 159466, 160103

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
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


