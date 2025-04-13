---
layout: base
title:  'Statistics of root in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `root`

This relation is universal.

763 nodes (6%) are attached to their parents as `root`.

763 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.2961992136304.

The following 10 pairs of parts of speech are connected with `root`: -<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (708; 93% instances), -<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (22; 3% instances), -<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (12; 2% instances), -<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (10; 1% instances), -<tt><a href="bej_autogramm-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), -<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (3; 0% instances), -<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), -<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (1; 0% instances), -<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 0% instances), -<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|Gloss=1SG.DAT|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	AlignBegin=2092|AlignEnd=2370|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	geː	_	PART	PTCL	_	3	discourse	_	AlignBegin=140985|AlignEnd=141367|Gloss=[DM]|RX=[PTCL]|TokenType=Root
2	i=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=141367|AlignEnd=141494|Gloss=[DEF].[M]=|RX=[DET]=|TokenType=Clit
3	kam	_	NOUN	N	Number=Plur	7	nsubj	_	AlignBegin=141494|AlignEnd=141622|Gloss=camel\[PL]|RX=[SBJ].[N]|TokenType=Root
4	=hina	_	PRON	PRO	Case=Nom|Number=Plur|Person=3|Poss=Yes	3	nmod:poss	_	AlignBegin=141622|AlignEnd=141750|Gloss==[POSS].[3PL].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=141750|AlignEnd=142133|Gloss=[PUNCT]|RX=[PUNCT]|TokenType=Break
6	winneːt	_	ADV	ADV	_	7	advmod	_	AlignBegin=142133|AlignEnd=142531|Gloss=plenty|RX=[ADV]|TokenType=Root
7	naʃʃalam	_	ADJ	ADJ	_	9	acl:relcl	_	AlignBegin=142531|AlignEnd=142730|Gloss=athletic|RX=[ADJ]|TokenType=Root
8	=a	_	AUX	N.COP	Number=Plur|Person=3|VerbType=Cop	7	cop	_	AlignBegin=142730|AlignEnd=142929|Gloss==[COP].[3PL]|RX==[PRED].[N]|TokenType=Clit
9	kam	_	NOUN	N	Number=Plur	0	root	_	AlignBegin=142929|AlignEnd=143128|Gloss=camel\[PL]|RX=[N]|TokenType=Root
10	=a	_	AUX	COP	Number=Plur|VerbType=Cop	9	cop	_	AlignBegin=143128|AlignEnd=143327|Gloss==[COP].[PL]|RX==[PRED].[NOM]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=143327|AlignEnd=144049|Gloss=[PUNCT]|RX=[PUNCT]|TokenType=Break
12	annafa	_	PROPN	N	_	14	dep:comp	_	AlignBegin=144049|AlignEnd=144231|Gloss=Annafa|RX=[N].[PROP]|TokenType=Root
13	=a	_	AUX	N.COP	Number=Plur|Person=3|VerbType=Cop	12	cop	_	AlignBegin=144231|AlignEnd=144413|Gloss==[COP].[3PL]|RX==[PRED].[N]|TokenType=Clit
14	=ajt	_	SCONJ	CONJ	_	9	dislocated:mod	_	AlignBegin=144413|AlignEnd=144596|Gloss==[CSL]|RX==[CONJ]|TokenType=Clit
15	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=144596|AlignEnd=145459|Gloss=[PUNCT]|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	əəə	_	INTJ	HESIT	_	8	discourse	_	AlignBegin=16164|AlignEnd=16399|Gloss=er|RX=[HESIT]|TokenType=Root
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	AlignBegin=16399|AlignEnd=16516|Gloss=small|RX=[ADJ]|TokenType=Root
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	AlignBegin=16516|AlignEnd=16634|Gloss==INDF.F|RX==[DET]|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	7	nsubj	_	AlignBegin=16634|AlignEnd=16869|Gloss=child|RX=[SBJ].[N]|TokenType=Root
5	geːb	_	ADP	POSTP	_	7	obl:arg	_	AlignBegin=16869|AlignEnd=17104|Gloss=beside|RX=[POSTP]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=17104|AlignEnd=17339|TokenType=Break
7	tiːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Fem|Number=Sing|VerbClass=1	8	dep:comp	_	AlignBegin=17339|AlignEnd=17475|Gloss=be_there\AOR|MGloss=3SG.F-be_there\AOR|MSeg=tiː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	=aj	_	SCONJ	CONJ	_	0	root	_	AlignBegin=17475|AlignEnd=17543|Gloss==CSL|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=17543|AlignEnd=19067|TokenType=Break

~~~


