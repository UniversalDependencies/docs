---
layout: base
title:  'Statistics of punct in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `punct`

This relation is universal.

2510 nodes (10%) are attached to their parents as `punct`.

1314 instances of `punct` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.27689243027888.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (1014; 40% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (668; 27% instances), <tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (137; 5% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (137; 5% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (116; 5% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (91; 4% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (75; 3% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (72; 3% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (67; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (41; 2% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (36; 1% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="ga_idt-pos-AUX.html">AUX</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ga_idt-pos-SYM.html">SYM</a></tt>-<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	fear	fear	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
4	fadó	fadó	ADV	Gn	_	1	advmod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
1	AN	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	FILE	file	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	i	i	ADP	Simp	_	4	case	_	_
4	gcead	cead	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	2	nmod	_	_
5	do	do	ADP	Simp	_	6	case	_	_
6	George	George	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	nmod	_	_
7	Mackay	Mackay	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	flat:name	_	_
8	Brown	Brown	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 punct	color:blue
1	agus	agus	CCONJ	Coord	_	0	root	_	_
2	glaochanna	glaochanna	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	1	compound	_	_
3	ó	ó	ADP	Simp	_	5	case	_	_
4	mhórán	mórán	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	5	advmod	_	_
5	daoine	duine	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Strong|Number=Plur	2	nmod	_	_
6	eile	eile	DET	Det	PronType=Dem	5	det	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


