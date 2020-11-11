---
layout: base
title:  'Statistics of nummod:mod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod:mod`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nummod.html">nummod</a></tt>.
There are also 2 other language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-det.html">nummod:det</a></tt>, <tt><a href="pcm_nsc-dep-nummod-periph.html">nummod:periph</a></tt>.

73 nodes (0%) are attached to their parents as `nummod:mod`.

71 instances of `nummod:mod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.38356164383562.

The following 3 pairs of parts of speech are connected with `nummod:mod`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (67; 92% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (5; 7% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:mod	color:blue
1	Maths	maths	NOUN	_	Number=Plur	0	root	_	AlignBegin=130650|AlignEnd=130880|Gloss=mathematics
2	101	101	NUM	_	_	1	nummod:mod	_	AlignBegin=130880|AlignEnd=131460|Gloss=101
3	//	//	X	_	_	1	dep	_	AlignBegin=130880|AlignEnd=131460|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nummod:mod	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=143200|AlignEnd=143840|Gloss=PUNCT
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	expl:subj	_	AlignBegin=143840|AlignEnd=143880|Gloss=NOM.SG.3
3	be	be	AUX	_	PartType=Cop	8	cop	_	AlignBegin=143880|AlignEnd=143929|Gloss=be
4	like	like	ADP	_	_	8	mark	_	AlignBegin=143929|AlignEnd=144054|ExtPos=SCONJ|Gloss=like|PhraseType=Idiom
5	sey	sey	SCONJ	_	_	4	fixed	_	AlignBegin=144054|AlignEnd=144119|Gloss=COMP
6	[	[	X	_	_	8	dep	_	AlignBegin=144119|AlignEnd=144149|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=144149|AlignEnd=144262|Gloss=NOM.SG.1
8	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=144262|AlignEnd=144624|Gloss=be
9	SS	SS	PROPN	_	_	8	xcomp:pred	_	AlignBegin=144624|AlignEnd=145000|Gloss=SS
10	one	one	NUM	_	NumType=Card	9	nummod:mod	_	AlignBegin=145000|AlignEnd=145150|Gloss=one
11	]	]	X	_	_	8	dep	_	AlignBegin=145150|AlignEnd=145180|Gloss=PUNCT
12	//	//	X	_	_	8	dep	_	AlignBegin=145150|AlignEnd=145180|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:mod	color:blue
1	we	our	PRON	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	3	nsubj	_	Gloss=PL.1.POSS
2	two	two	NUM	_	_	1	nummod:mod	_	Gloss=two
3	sureties	surety	NOUN	_	Number=Plur	0	root	_	Gloss=surety.PL
4	each	each	DET	_	_	3	dep	_	Gloss=each
5	o	o	PART	_	_	4	advmod:emph	_	Gloss=EMPH
6	for	for	ADP	_	_	9	case	_	Gloss=for
7	di	di	DET	_	Definite=Def|PronType=Art	9	det	_	Gloss=DEF.ART
8	same	same	ADJ	_	_	9	amod	_	Gloss=same
9	money	money	NOUN	_	_	3	dep:comp	_	Gloss=money
10	//	//	X	_	_	9	dep	_	Gloss=PUNCT

~~~


