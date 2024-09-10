---
layout: base
title:  'Statistics of dep:conj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:conj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 2 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

169 nodes (3%) are attached to their parents as `dep:conj`.

167 instances of `dep:conj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.89349112426035.

The following 20 pairs of parts of speech are connected with `dep:conj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (113; 67% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (23; 14% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bej_nsc-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dep:conj	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=38507|AlignEnd=38641|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
2	his	_	NOUN	N	Gender=Masc	4	obj	_	AlignBegin=38641|AlignEnd=38775|GE=voice|Gloss=voice|RX=[N].[M]|TokenType=Root
3	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	AlignBegin=38775|AlignEnd=38910|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
4	gajjaran	_	VERB	V2	Number=Sing|VerbClass=2	8	dep:conj	_	AlignBegin=38910|AlignEnd=39178|GE=change-[PFV].[1SG]|Gloss=change|MGloss=change-PFV.1SG|MSeg=gajjar-an|RX=[V2]-[TAM].[PNG]|TokenType=Root
5	=t	_	CCONJ	CCONJ	_	4	cc	_	AlignBegin=39178|AlignEnd=39312|GE==[COORD]|RX==[CONJ]|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=39312|AlignEnd=39715|TokenType=Break
7	hoːj	_	ADP	PRO	Case=Abl	8	obl:arg	_	AlignBegin=39715|AlignEnd=40053|GE=[LOC]|RX=[POSTP]|TokenType=Root
8	sallamaman	_	VERB	V2	Number=Sing|VerbClass=2	9	parataxis	_	AlignBegin=40053|AlignEnd=40391|GE=give-[MID]-[PFV].[1SG]|Gloss=give|MGloss=give-MID-PFV.1SG|MSeg=sallam-am-an|ReportedSpeech=Yes|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
9	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=40391|AlignEnd=40729|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=40729|AlignEnd=42616|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dep:conj	color:blue
1	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=65417|AlignEnd=65574|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
2	maːl	_	NOUN	N	Gender=Masc	5	dep:conj	_	AlignBegin=65574|AlignEnd=65731|GE=treasure|RX=[N].[M].[BORR].[ARA]|TokenType=Root
3	=wa	_	CCONJ	CONJ	_	2	cc	_	AlignBegin=65731|AlignEnd=65887|GE=[COORD]|RX=[CONJ]|TokenType=Clit
4	t=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	AlignBegin=65887|AlignEnd=66044|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
5	ʔarabijaːj	_	NOUN	N	Gender=Fem	7	obj	_	AlignBegin=66044|AlignEnd=66201|GE=car|RX=[N].[F].[BORR].[ARA]|TokenType=Root
6	=wa	_	CCONJ	CONJ	_	5	cc	_	AlignBegin=66201|AlignEnd=66357|GE=[COORD]|RX=[CONJ]|TokenType=Clit
7	hagil	_	VERB	V1	Aspect=Perf|Number=Sing|Person=1|VerbClass=1	12	dep:conj	_	AlignBegin=66357|AlignEnd=66827|GE=miss\PFV.[1SG]|RX=[V1]|TokenType=Root
8	/	_	PUNCT	_	_	7	punct	_	AlignBegin=66827|AlignEnd=67296|GE=[/]|TokenType=Break
9	laːkin	_	CCONJ	PTCL	_	7	cc	_	AlignBegin=67482|AlignEnd=67787|GE=but|RX=[PTCL].[BORR].[ARA]|TokenType=Root
10	/	_	PUNCT	_	_	7	punct	_	AlignBegin=67787|AlignEnd=68092|GE=[/]|TokenType=Break
11	adir	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	12	parataxis	_	AlignBegin=68955|AlignEnd=69242|GE=[1SG]kill\PFV|MGloss=[1SG]kill\PFV|MSeg=a-dir|RX=[PNG][V1]|TokenType=Root
12	ini	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=69242|AlignEnd=69529|GE=[3SG].[M]say\PFV|MGloss=[3SG].[M]say\PFV|MSeg=i-ni|RX=[PNG][V1].[IRG]|TokenType=Root
13	//	_	PUNCT	_	_	12	punct	_	AlignBegin=69529|AlignEnd=69815|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 10 dep:conj	color:blue
1	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=66619|AlignEnd=66765|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
2	jhaːm	_	NOUN	N	Gender=Masc	3	obj	_	AlignBegin=66765|AlignEnd=66910|GE=leopard|RX=[N].[M]|TokenType=Root
3	deːra	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	5	dep:conj	_	AlignBegin=66910|AlignEnd=67201|GE=kill\INT[IMP].[SG].[M]|MGloss=kill\INT[IMP].[SG].[M]|MSeg=deːr-a|RX=[V1].[DER][TAM].[PNG]|TokenType=Root
4	/	_	PUNCT	_	_	3	punct	_	AlignBegin=67201|AlignEnd=67491|GE=[/]|TokenType=Break
5	ʈabʔa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	6	parataxis	_	AlignBegin=67594|AlignEnd=67949|GE=hit[IMP].[SG].[M]|MGloss=hit[IMP].[SG].[M]|MSeg=ʈabʔ-a|RX=[V1].[DER][TAM].[PNG]|TokenType=Root
6	ani	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	7	dep:comp	_	AlignBegin=67949|AlignEnd=68185|GE=[1SG]say\PFV|MGloss=[1SG]say\PFV|MSeg=a-ni|RX=[PNG][V1].[IRG]|TokenType=Root
7	=hoːb	_	SCONJ	CONJ	_	10	dep	_	AlignBegin=68185|AlignEnd=68304|GE=when|RX=[CONJ]|TokenType=Clit
8	/	_	PUNCT	_	_	7	punct	_	AlignBegin=68304|AlignEnd=68659|GE=[/]|TokenType=Break
9	hoː	_	PRON	PRO	Number=Sing|Person=1	10	obj	_	AlignBegin=69145|AlignEnd=69361|GE=[1SG].[DAT/ABL]|RX=[PRO]|TokenType=Root
10	ʃinhat	_	NOUN	V1	_	17	dep:conj	_	AlignBegin=69361|AlignEnd=69577|GE=take_care[VN]|MGloss=take_care[VN]|MSeg=ʃinh-at|RX=[V1][N].[V]|TokenType=Root
11	irib	_	AUX	AUX.CONTR	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Neg	10	aux	_	AlignBegin=69577|AlignEnd=69793|GE=[3SG].[M]refuse\PFV|MGloss=[3SG].[M]refuse\PFV|MSeg=i-rib|RX=[PNG][AUX].[NEG].[CONTR]|TokenType=Root
12	/	_	PUNCT	_	_	10	punct	_	AlignBegin=69793|AlignEnd=70010|GE=[/]|TokenType=Break
13	iʔiʃ	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	17	compound:svc	_	AlignBegin=70010|AlignEnd=70307|GE=[3SG].[M]let\PFV|MGloss=[3SG].[M]let\PFV|MSeg=i-ʔiʃ|RX=[PNG][V1]|TokenType=Root
14	ʤabanaː	_	NOUN	N	Gender=Fem	17	obj	_	AlignBegin=70307|AlignEnd=70406|GE=coffee|RX=[N].[F]|TokenType=Root
15	=t	_	DET	DET	Gender=Fem	14	det	_	AlignBegin=70406|AlignEnd=70505|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
16	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	14	nmod:poss	_	AlignBegin=70505|AlignEnd=70604|GE=[POSS].[3SG].[ACC]|RX=[PRO]|TokenType=Clit
17	idʔi	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	18	parataxis	_	AlignBegin=70604|AlignEnd=70901|GE=[3SG].[M]do\PFV|MGloss=[3SG].[M]do\PFV|MSeg=i-dʔi|RX=[PNG][V1].[IRG]|TokenType=Root
18	ini	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=70901|AlignEnd=71198|GE=[3SG].[M]say\PFV|MGloss=[3SG].[M]say\PFV|MSeg=i-ni|RX=[PNG][V1].[IRG]|TokenType=Root
19	//	_	PUNCT	_	_	18	punct	_	AlignBegin=71198|AlignEnd=71497|GE=[//]|TokenType=Break

~~~


