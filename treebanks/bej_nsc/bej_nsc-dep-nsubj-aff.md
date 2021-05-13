---
layout: base
title:  'Statistics of nsubj:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nsubj:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nsubj.html">nsubj</a></tt>.

156 nodes (14%) are attached to their parents as `nsubj:aff`.

87 instances of `nsubj:aff` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21153846153846.

The following 1 pairs of parts of speech are connected with `nsubj:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (156; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:aff	color:blue
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


