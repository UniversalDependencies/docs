---
layout: base
title:  'Statistics of punct in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `punct`

This relation is universal.

31777 nodes (19%) are attached to their parents as `punct`.

18227 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.89391698398213.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (24032; 76% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (2947; 9% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (2177; 7% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (800; 3% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (617; 2% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (363; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (279; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (213; 1% instances), <tt><a href="cs_fictree-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (130; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (94; 0% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (39; 0% instances), <tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (36; 0% instances), <tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances), <tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="cs_fictree-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_fictree-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 punct	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	1:obl:arg:do:gen	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Tatínka	tatínek	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 punct	color:blue
1	Když	když	SCONJ	J,-------------	_	3	mark	3:mark	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	3:expl:pv	_
3	zhroutí	zhroutit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	9:advcl:když	_
4	optimista	optimista	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
6	bývá	bývat	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	9:nsubj	_
8	obzvlášť	obzvlášť	ADV	Db-------------	_	9	advmod	9:advmod	_
9	smutné	smutný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


