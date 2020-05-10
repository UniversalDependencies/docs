---
layout: base
title:  'Statistics of mark in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `mark`

This relation is universal.

406 nodes (2%) are attached to their parents as `mark`.

406 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.69950738916256.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (270; 67% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (56; 14% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (50; 12% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (10; 2% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (7; 2% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PART.html">PART</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	Svědek	svědek	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	_
2	policii	policie	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:dat	_
3	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
5	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
6	oběť	oběť	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	_
7	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
8	srpnu	srpen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	10:obl:v:loc	_
9	podezřelého	podezřelý	ADJ	AAMS4----1A----	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	obj	10:obj	_
10	napadla	napadnout	VERB	VpQW---XR-AA--1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	ccomp	3:ccomp	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Občas	občas	ADV	Db-------------	_	6	advmod	6:advmod	_
2	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
4	jako	jako	SCONJ	J,-------------	_	6	mark	6:mark	LId=jako-1
5	nadpřirozená	nadpřirozený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	schopnost	schopnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No|LDeriv=schopný
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Předtím	předtím	ADV	Db-------------	_	14	advmod	14:advmod	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	než	než	SCONJ	J,-------------	_	5	mark	5:mark	LId=než-2
4	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	zformovány	zformovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	1	advcl	1:advcl:než	LDeriv=zformovat
6	Andy	Andy	PROPN	NNFP1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Plur|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	SpaceAfter=No|LId=Andy-2|LGloss=(pohoří_v_již._Am.)
7	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
8	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	14	cop	14:cop	_
9	západní	západní	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	okraj	okraj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	14	nsubj	14:nsubj	_
11	Jižní	jižní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	12	amod	12:amod	_
12	Ameriky	Amerika	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	10	nmod	10:nmod:gen	_
13	už	už	ADV	Db-------------	_	14	advmod	14:advmod	LId=už-1
14	oblastí	oblast	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	_
15	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	16	det:nummod	16:det:nummod	_
16	orogenezí	orogeneze	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	14	nmod	14:nmod:gen	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


