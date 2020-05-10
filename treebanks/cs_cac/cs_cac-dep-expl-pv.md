---
layout: base
title:  'Statistics of expl:pv in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_cac-dep-expl-pass.html">expl:pass</a></tt>.

6066 nodes (1%) are attached to their parents as `expl:pv`.

4766 instances of `expl:pv` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08984503791625.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (5780; 95% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (253; 4% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (17; 0% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (16; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	3:case	LId=za-1
2	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	3:det	_
3	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:za:ins	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	LGloss=(zvr._zájmeno/částice)
5	zavazujeme	zavazovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pv	color:blue
1	Tuto	tento	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	zásadu	zásada	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	3:obj	_
3	zakotvili	zakotvit	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	6:case	LId=do-1
5	všech	všechno	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	6	nmod	6:nmod:gen	_
6	opatření	opatření	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	3	obl	3:obl:do:gen	LDeriv=opatřit
7	týkajících	týkající	ADJ	AGNP2-----A----	Aspect=Imp|Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	LDeriv=týkat
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	7:expl:pv	LGloss=(zvr._zájmeno/částice)
9	této	tento	DET	PDFS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	10	det	10:det	_
10	sféry	sféra	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	obl:arg	7:obl:arg:gen	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Učení	učení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	LDeriv=učit
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	LGloss=(zvr._zájmeno/částice)
3	novým	nový	ADJ	AAFP3----1A----	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	4	amod	4:amod	_
4	odpovědím	odpověď	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	1	nmod	1:nmod:dat	_
5	závisí	záviset	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	_
7	jejím	jeho	DET	PSZS6FS3-------	Case=Loc|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	LGloss=(přivlast.)
8	uplatnění	uplatnění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl:arg	5:obl:arg:na:loc	SpaceAfter=No|LDeriv=uplatnit
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


