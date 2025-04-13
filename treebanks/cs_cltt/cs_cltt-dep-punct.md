---
layout: base
title:  'Statistics of punct in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `punct`

This relation is universal.

4539 nodes (13%) are attached to their parents as `punct`.

2831 instances of `punct` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.67702137034589.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (1906; 42% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (1337; 29% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (603; 13% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (554; 12% instances), <tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (84; 2% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (19; 0% instances), <tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="cs_cltt-pos-PART.html">PART</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="cs_cltt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="cs_cltt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cltt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 punct	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Rezervy	rezerva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj|4:nsubj:xsubj	_
3	nesmějí	smět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	aktivní	aktivní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	zůstatek	zůstatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	OBSAHOVÉ	obsahový	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	VYMEZENÍ	vymezení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	_
3	NĚKTERÝCH	některý	DET	PZXP2----------	Case=Gen|Number=Plur|PronType=Ind	4	det	4:det	_
4	POLOŽEK	položka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	2	nmod	2:nmod:gen	_
5	ROZVAHY	rozvaha	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod:gen	_
6	(	(	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
7	BILANCE	bilance	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	appos	5:appos	SpaceAfter=No
8	)	)	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 punct	color:blue
1	Výpočtové	výpočtový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	položky	položka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
4	označují	označovat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	znaménky	znaménko	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur	4	obl	4:obl:ins	_
6	„	"	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
7	+	+	X	X@-------------	_	5	nmod	5:nmod	SpaceAfter=No|LGloss=(from_multi_word_term)
8	“	"	PUNCT	Z:-------------	_	7	punct	7:punct	_
9	a	a	CCONJ	J^-------------	_	7	cc	7:cc	LId=a-1
10	„	"	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
11	*	*	PUNCT	X@-------------	_	7	punct	7:punct	SpaceAfter=No|LGloss=(from_multi_word_term)
12	“	"	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


