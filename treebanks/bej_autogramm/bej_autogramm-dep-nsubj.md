---
layout: base
title:  'Statistics of nsubj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="bej_autogramm-dep-nsubj-outer.html">nsubj:outer</a></tt>.

461 nodes (4%) are attached to their parents as `nsubj`.

460 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.46420824295011.

The following 16 pairs of parts of speech are connected with `nsubj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (320; 69% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (86; 19% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (10; 2% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 nsubj	color:blue
1	ʃamattan	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	3	dep:comp	_	AlignBegin=144041|AlignEnd=144279|Gloss=blame|MGloss=blame-PFV.3SG.F-L|MSeg=ʃamat-ta-n|RX=[V2]-[TAM].[PNG]|TokenType=Root
2	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	1	obj	_	AlignBegin=144279|AlignEnd=144359|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
3	=ji	_	SCONJ	CONJ	_	4	acl:relcl	_	AlignBegin=144359|AlignEnd=144439|Gloss==REL|RX==[CONJ]|TokenType=Clit
4	ʃamat	_	NOUN	N	Gender=Masc	5	dep:comp	_	AlignBegin=144439|AlignEnd=144571|Gloss=blame|RX=[N].[M]|TokenType=Root
5	=eː	_	ADP	CASE	Case=Gen|Number=Plur	6	dep:comp	_	AlignBegin=144571|AlignEnd=144704|Gloss==GEN.PL|RX==[CASE]|TokenType=Clit
6	=ka	_	ADP	POSTP	_	11	obl:arg	_	AlignBegin=144704|AlignEnd=144837|Gloss==DISTR|RX==[POSTP]|TokenType=Clit
7	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	11	nsubj	_	AlignBegin=144837|AlignEnd=145236|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=145236|AlignEnd=145368|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
9	mhiːn	_	NOUN	N	Gender=Masc	11	obj	_	AlignBegin=145368|AlignEnd=145501|Gloss=place|RX=[N].[M]|TokenType=Root
10	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=145501|AlignEnd=145634|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
11	naːjeː	_	VERB	V2	VerbClass=2	12	advcl	_	AlignBegin=145634|AlignEnd=146033|Gloss=spend_the_night|MGloss=spend_the_night-CVB.SMLT|MSeg=naːj-eː|RX=[V2]|TokenType=Root
12	mhan	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=146033|AlignEnd=146431|Gloss=be_in_morning|MGloss=be_in_morning-PFV.1SG|MSeg=mh-an|RX=[V2]-[TAM].[PNG]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=146431|AlignEnd=147206|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=7764|AlignEnd=7965|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
2	mbʔi	_	NOUN	N	Gender=Masc	6	nsubj	_	AlignBegin=7965|AlignEnd=8166|Gloss=day|RX=[SBJ].[N].[M]|TokenType=Root
3	ʤimʔa	_	NOUN	N	Gender=Fem	5	dep:comp	_	AlignBegin=8166|AlignEnd=8300|Gloss=Friday|RX=[N].[F]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=8300|AlignEnd=8434|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	=i	_	ADP	CASE	Case=Gen	6	dep	_	AlignBegin=8434|AlignEnd=8568|Gloss==GEN|RX==[CASE]|TokenType=Clit|wordform=-i
6	bʔeː	_	NOUN	N	Gender=Masc	0	root	_	AlignBegin=8568|AlignEnd=8769|Gloss=day|RX=[N].[M]|TokenType=Root
7	=ju	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	6	cop	_	AlignBegin=8769|AlignEnd=8970|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
8	/	_	PUNCT	_	_	6	punct	_	AlignBegin=8970|AlignEnd=9372|Gloss=/|TokenType=Root

~~~


