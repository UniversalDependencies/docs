---
layout: base
title:  'Statistics of nmod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bej_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

13 nodes (1%) are attached to their parents as `nmod`.

9 instances of `nmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.69230769230769.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (8; 62% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	tak	_	NOUN	N	Gender=Masc	9	nsubj	_	AlignBegin=0|AlignEnd=351|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|GE=elder|Gloss=elder|RX=[CN]|TokenType=Stem
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Stem
6	tak	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=2593|AlignEnd=2761|GE=man|Gloss=man|RX=[N].[M]|TokenType=Stem
7	-i	_	PART	CASE	Case=Gen	6	case:aff	_	AlignBegin=2761|AlignEnd=2930|GE=-[GEN]|RX=-[CASE]|TokenType=InflAff
8	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=2930|AlignEnd=3042|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
9	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	AlignBegin=3042|AlignEnd=3154|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
10	=t	_	CCONJ	CCONJ	_	9	cc	_	AlignBegin=3154|AlignEnd=3267|GE==[COORD]|RX==[CONJ]|TokenType=Clit
11	amsi	_	ADV	ADV	_	13	advmod	_	AlignBegin=3267|AlignEnd=3603|GE=today|Gloss=today|RX=[ADV]|TokenType=Stem
12	iraːnaj	_	INTJ	_	_	13	discourse	_	AlignBegin=3603|AlignEnd=3940|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
13	rh	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4108|GE=see|Gloss=see|RX=[V2]|TokenType=Stem
14	-i	_	PRON	TAM,PNG	Aspect=Aor|Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	AlignBegin=4108|AlignEnd=4277|GE=-[AOR].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
15	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
16	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	17	det	_	AlignBegin=4764|AlignEnd=4921|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
17	kina	_	PRON	PRO	Reflex=Yes	13	dislocated	_	AlignBegin=4921|AlignEnd=5079|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
18	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 nmod	color:blue
1	bak	_	PART	DEICT	_	2	advmod	_	AlignBegin=58718|AlignEnd=58986|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
2	ʔabk	_	VERB	V1	VerbClass=1	6	parataxis	_	AlignBegin=58986|AlignEnd=59075|GE=take|Gloss=take|ReportedSpeech=Yes|RX=[V1]|TokenType=Stem
3	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	2	nsubj:aff	_	AlignBegin=59075|AlignEnd=59164|GE=-[IMP].[SG].[F]|RX=-[TAM].[PNG]|TokenType=InflAff
4	-n	_	AUX	SUFX	_	2	aux:aff	_	AlignBegin=59164|AlignEnd=59254|GE=-[EMPH]|RX=-[SUFX]|TokenType=InflAff
5	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	6	nsubj:aff	_	AlignBegin=59254|AlignEnd=59321|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
6	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	11	advcl	_	AlignBegin=59321|AlignEnd=59388|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
7	=oː	_	PRON	PRO	Number=Sing|Person=1	6	obj	_	AlignBegin=59388|AlignEnd=59455|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
8	=hoːb	_	SCONJ	CONJ	_	6	mark	_	AlignBegin=59455|AlignEnd=59522|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=59522|AlignEnd=59790|TokenType=Break
10	hoːj	_	PRON	PRO	Case=Abl	11	iobj	_	AlignBegin=59790|AlignEnd=60157|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
11	sallam	_	VERB	V2	VerbClass=2	25	dep:conj	_	AlignBegin=60157|AlignEnd=60248|GE=give|Gloss=give|RX=[V2]|TokenType=Stem
12	-am	_	AUX	V2	VerbClass=2|Voice=Mid	11	aux:aff	_	AlignBegin=60248|AlignEnd=60340|GE=-[MID]|RX=-[V2].[DER]|TokenType=DerAff
13	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	11	nsubj:aff	_	AlignBegin=60340|AlignEnd=60432|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
14	=t	_	CCONJ	CCONJ	_	11	cc	_	AlignBegin=60432|AlignEnd=60524|GE==[COORD]|RX==[CONJ]|TokenType=Clit
15	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=60524|AlignEnd=61267|TokenType=Break
16	ontʔa	_	PART	PTCL	_	2	discourse	_	AlignBegin=61267|AlignEnd=61443|GE=now|Gloss=now|RX=[PTCL]|TokenType=Stem
17	/	_	PUNCT	PUNCT	_	16	punct	_	AlignBegin=61443|AlignEnd=61620|TokenType=Break
18	doːr	_	NOUN	N	Gender=Masc	22	nmod	_	AlignBegin=61620|AlignEnd=61844|GE=time|Gloss=time|RX=[N].[M]|TokenType=Stem
19	=ka	_	ADP	POSTP	Case=Dis	18	case	_	AlignBegin=61844|AlignEnd=62068|GE==[DISTR]|RX==[POSTP]|TokenType=Clit
20	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	21	det	_	AlignBegin=62068|AlignEnd=62292|GE=[DEF].[SG].[F].[ACC]=|RX=[DET]=|TokenType=Clit
21	ʃa	_	NOUN	N	Gender=Fem	22	obj	_	AlignBegin=62292|AlignEnd=62517|GE=meat|Gloss=meat|RX=[N].[F]|TokenType=Stem
22	kitʔ	_	VERB	V1	VerbClass=1	25	dep:conj	_	AlignBegin=62517|AlignEnd=62666|GE=cut|Gloss=cut|RX=[V1]|TokenType=Stem
23	-a	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	22	mark:aff	_	AlignBegin=62666|AlignEnd=62816|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
24	=t	_	DET	DET	Definite=Ind|Gender=Fem	22	det	_	AlignBegin=62816|AlignEnd=62966|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
25	tam	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=62966|AlignEnd=63115|GE=eat|Gloss=eat|RX=[V2]|TokenType=Stem
26	-a	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	25	mark:aff	_	AlignBegin=63115|AlignEnd=63264|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
27	=t	_	DET	DET	Definite=Ind|Gender=Fem	25	det	_	AlignBegin=63264|AlignEnd=63414|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
28	ni-	_	PRON	PNG	Number=Plur|Person=1	25	nsubj:aff	_	AlignBegin=63414|AlignEnd=63638|GE=[1PL]-|RX=[PNG]-|TokenType=InflAff
29	ki	_	AUX	AUX	Aspect=Perf	25	cop	_	AlignBegin=63638|AlignEnd=63863|GE=become\[PFV]|Gloss=become|RX=[AUX].[PRF]|TokenType=Stem
30	/	_	PUNCT	PUNCT	_	25	punct	_	AlignBegin=63863|AlignEnd=65384|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	əəə	_	INTJ	HESIT	_	8	discourse	_	AlignBegin=16164|AlignEnd=16399|GE=er|Gloss=er|RX=[HESIT]|TokenType=Stem
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	AlignBegin=16399|AlignEnd=16516|GE=small|Gloss=small|RX=[ADJ]|TokenType=Stem
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	AlignBegin=16516|AlignEnd=16634|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	8	nsubj	_	AlignBegin=16634|AlignEnd=16869|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Stem
5	geːb	_	ADP	POSTP	_	8	iobj	_	AlignBegin=16869|AlignEnd=17104|GE=beside|Gloss=beside|RX=[POSTP]|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=17104|AlignEnd=17339|TokenType=Break
7	tiː-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	8	nsubj:aff	_	AlignBegin=17339|AlignEnd=17407|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
8	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	AlignBegin=17407|AlignEnd=17475|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
9	=aj	_	SCONJ	CONJ	_	8	mark	_	AlignBegin=17475|AlignEnd=17543|GE==[CSL]|RX==[CONJ]|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=17543|AlignEnd=19067|TokenType=Break

~~~


