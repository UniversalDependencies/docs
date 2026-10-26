---
layout: base
title:  'Statistics of xcomp in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `xcomp`

This relation is universal.

2195 nodes (1%) are attached to their parents as `xcomp`.

2121 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.91662870159453.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2042; 93% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (46; 2% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (36; 2% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (24; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (17; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Jednou	jednou	ADV	Db-------------	_	3	advmod	3:advmod	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
3	měla	mít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	přistavovat	přistavovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	část	část	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj|4:nsubj:xsubj	_
6	mlýna	mlýn	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Dub	dub	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj|4:nsubj:xsubj	_
2	může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	4	cop	4:cop	_
4	starší	starý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	2	xcomp	2:xcomp	_
5	než	než	SCONJ	J,-------------	_	8	mark	8:mark	_
6	šest	šest	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	8	nummod:gov	8:nummod:gov	_
7	set	sto	NUM	ClNP2----------	Case=Gen|Gender=Neut|Number=Plur|NumForm=Word|NumType=Card	8	nummod:gov	8:nummod:gov	_
8	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	4	obl	4:obl:než	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	CHTĚL	chtít	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	BYCH	být	AUX	Vc-S---1-------	Aspect=Imp|Mood=Cnd|Number=Sing|Person=1|VerbForm=Fin	1	aux	1:aux	_
3	BÝT	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	cop	5:cop	_
4	SVÝM	svůj	DET	P8NS7----------	Case=Ins|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	5:det	_
5	DÍTĚTEM	dítě	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing	1	xcomp	1:xcomp	SpaceAfter=No
6	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


