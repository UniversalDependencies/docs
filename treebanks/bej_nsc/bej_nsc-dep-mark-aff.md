---
layout: base
title:  'Statistics of mark:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `mark:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-mark.html">mark</a></tt>.

45 nodes (4%) are attached to their parents as `mark:aff`.

44 instances of `mark:aff` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06666666666667.

The following 3 pairs of parts of speech are connected with `mark:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (41; 91% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (3; 7% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark:aff	color:blue
1	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	2	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 124427, 124599|TokenType=Aff
2	ki	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	9	advcl	_	GE= PFV|Gloss= become|RX= V1,IRG|Times= 124599, 124771|TokenType=Stem
3	sar	_	VERB	V1	VerbClass=1|Voice=Mid	2	csubj	_	GE= MID|Gloss= be_awake|RX= V1,DER|Times= 124771, 124885|TokenType=Stem
4	-oːj	_	SCONJ	N	_	3	mark:aff	_	GE= -N,AC|RX= -N,V|Times= 124885, 125000|TokenType=Aff
5	=ka	_	ADP	POSTP	Case=Dis	3	mark	_	GE= =DISTR|RX= =POSTP|Times= 125000, 125115|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 125115, 126003
7	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	8	det	_	GE= DEF,SG,M=|RX= DET=|Times= 126003, 126233|TokenType=Clit
8	hanʤar	_	NOUN	N	Gender=Masc	9	obj	_	Gloss= dagger|RX= N,M|Times= 126233, 126464|TokenType=Stem
9	sallam	_	VERB	V2	VerbClass=2	0	root	_	Gloss= give|RX= V2|Times= 126464, 126695|TokenType=Stem
10	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	9	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 126695, 126926|TokenType=Aff
11	/	_	PUNCT	PUNCT	_	9	punct	_	GE= PUNCT|RX= PUNCT|Times= 126926, 128062

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 mark:aff	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	Gloss= plenty|RX= ADV|Times= 68424, 68690|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 68690, 69484
3	naʃʃalam	_	ADJ	ADJ	_	5	acl	_	Gloss= athletic|RX= ADJ|Times= 69484, 69679|TokenType=Stem
4	-a	_	PART	_	Number=Plur	3	mark:aff	_	GE= -PL|Times= 69679, 69874|TokenType=Aff
5	kam	_	NOUN	N	Number=Plur	15	obj	_	GE= PL|Gloss= camel|RX= N|Times= 69874, 70265|TokenType=Stem
6	//	_	PUNCT	PUNCT	_	5	punct	_	GE= PUNCT|RX= PUNCT|Times= 70265, 71814
7	aː#	_	X	FS	_	8	reparandum	_	GE= FS|RX= FS|Times= 71814, 72145|TokenType=Unfinished
8	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	det	_	GE= DEF,PL,M,ACC=|RX= DET=|Times= 72145, 72311|TokenType=Clit
9	kina	_	PRON	PRO	Reflex=Yes	10	nmod	_	Gloss= owner|RX= PRO,REFL|Times= 72311, 72477|TokenType=Stem
10	mitti	_	NOUN	N	_	5	acl	_	Gloss= pure_breed|RX= N|Times= 72477, 72587|TokenType=Stem
11	-a	_	PART	_	Number=Plur	10	mark:aff	_	GE= -PL|Times= 72587, 72698|TokenType=Aff
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 72698, 72809|TokenType=Clit
13	//	_	PUNCT	PUNCT	_	10	punct	_	GE= PUNCT|RX= PUNCT|Times= 72809, 73141
14	iː-	_	PRON	PNG	_	15	nsubj:aff	_	GE= 3-|RX= PNG-|Times= 73141, 73223|TokenType=Aff
15	biri	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	GE= AOR|Gloss= have|RX= V1,IRG|Times= 73223, 73305|TokenType=Stem
16	-n	_	PRON	PNG	Number=Plur	15	nsubj:aff	_	GE= -PL|RX= -PNG|Times= 73305, 73388|TokenType=Aff
17	//	_	PUNCT	PUNCT	_	15	punct	_	GE= PUNCT|RX= PUNCT|Times= 73388, 73636

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark:aff	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	Gloss= plenty|RX= ADV|Times= 68424, 68690|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 68690, 69484
3	naʃʃalam	_	ADJ	ADJ	_	5	acl	_	Gloss= athletic|RX= ADJ|Times= 69484, 69679|TokenType=Stem
4	-a	_	PART	_	Number=Plur	3	mark:aff	_	GE= -PL|Times= 69679, 69874|TokenType=Aff
5	kam	_	NOUN	N	Number=Plur	15	obj	_	GE= PL|Gloss= camel|RX= N|Times= 69874, 70265|TokenType=Stem
6	//	_	PUNCT	PUNCT	_	5	punct	_	GE= PUNCT|RX= PUNCT|Times= 70265, 71814
7	aː#	_	X	FS	_	8	reparandum	_	GE= FS|RX= FS|Times= 71814, 72145|TokenType=Unfinished
8	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	det	_	GE= DEF,PL,M,ACC=|RX= DET=|Times= 72145, 72311|TokenType=Clit
9	kina	_	PRON	PRO	Reflex=Yes	10	nmod	_	Gloss= owner|RX= PRO,REFL|Times= 72311, 72477|TokenType=Stem
10	mitti	_	NOUN	N	_	5	acl	_	Gloss= pure_breed|RX= N|Times= 72477, 72587|TokenType=Stem
11	-a	_	PART	_	Number=Plur	10	mark:aff	_	GE= -PL|Times= 72587, 72698|TokenType=Aff
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 72698, 72809|TokenType=Clit
13	//	_	PUNCT	PUNCT	_	10	punct	_	GE= PUNCT|RX= PUNCT|Times= 72809, 73141
14	iː-	_	PRON	PNG	_	15	nsubj:aff	_	GE= 3-|RX= PNG-|Times= 73141, 73223|TokenType=Aff
15	biri	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	GE= AOR|Gloss= have|RX= V1,IRG|Times= 73223, 73305|TokenType=Stem
16	-n	_	PRON	PNG	Number=Plur	15	nsubj:aff	_	GE= -PL|RX= -PNG|Times= 73305, 73388|TokenType=Aff
17	//	_	PUNCT	PUNCT	_	15	punct	_	GE= PUNCT|RX= PUNCT|Times= 73388, 73636

~~~


