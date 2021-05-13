---
layout: base
title:  'Statistics of obl:arg in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-mod.html">obl:mod</a></tt>.

11 nodes (1%) are attached to their parents as `obl:arg`.

10 instances of `obl:arg` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.90909090909091.

The following 2 pairs of parts of speech are connected with `obl:arg`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:arg	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl:arg	color:blue
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


