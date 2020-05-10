---
layout: base
title:  'Statistics of vocative in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `vocative`

This relation is universal.

278 nodes (0%) are attached to their parents as `vocative`.

173 instances of `vocative` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.21942446043165.

The following 14 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (172; 62% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (66; 24% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (6; 2% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	"	"	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
2	Tatínku	tatínek	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	4	vocative	4:vocative	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	víš	vědět	VERB	VB-S---2P-AA---	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	_
7	Honzovi	Honza	PROPN	NNMS3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	8	obl	8:obl:dat	_
8	odešla	odejít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	4:ccomp	_
9	maminka	maminka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	SpaceAfter=No
10	?	?	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
11	"	"	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Miloši	Miloš	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	3	vocative	3:vocative	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	pojď	jít	VERB	Vi-S---2--A---1	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	8	ccomp	8:ccomp	_
4	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	5	case	5:case	_
5	mnou	já	PRON	PP-S7--1-------	Case=Ins|Number=Sing|Person=1|PronType=Prs	3	obl	3:obl:s:ins	_
6	ven	ven	ADV	Db-------------	_	3	advmod	3:advmod	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	SpaceAfter=No
8	řekl	říci	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	8	obl:arg	8:obl:arg:dat	_
10	tiše	tiše	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Ach	ach	INTJ	II-------------	_	6	dep	6:dep|11:dep	_
2	přátelé	přítel	NOUN	NNMP5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Plur|Polarity=Pos	6	vocative	6:vocative|11:vocative	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
5	byla	být	AUX	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	6:cop	_
6	noc	noc	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
8	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	11:nsubj	_
9	byla	být	AUX	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	cop	11:cop	_
10	nádherná	nádherný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	11:amod	_
11	noc	noc	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	conj	0:root|6:conj	SpaceAfter=No
12	!	!	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


