---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="bej_nsc-dep-acl-fixed.html">acl:fixed</a></tt>.

17 nodes (2%) are attached to their parents as `acl:relcl`.

11 instances of `acl:relcl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.35294117647059.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (15; 88% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 12% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl:relcl	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 15 acl:relcl	color:blue
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


