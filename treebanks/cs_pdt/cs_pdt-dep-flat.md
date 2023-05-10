---
layout: base
title:  'Statistics of flat in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cs_pdt-dep-flat-foreign.html">flat:foreign</a></tt>.

4067 nodes (1%) are attached to their parents as `flat`.

4067 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9990164740595.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (2257; 55% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1736; 43% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (25; 1% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (12; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	N	N	NOUN	Q3-------------	Abbr=Yes	3	nmod	3:nmod	Entity=(lnd94103043c7--3-gstype:spec|Functor=3:RSTR|LId=N-33|SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	Petersen	Petersen	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	Entity=lnd94103043c7)|Functor=4:ACT
4	jednal	jednat	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	6	case	6:case	Bridge=lnd94103043c2<lnd94103043c17:funct|Entity=(lnd94103043c17--2|LId=v-1
6	Sněmovně	sněmovna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl:v:loc	Entity=lnd94103043c17)|Functor=4:LOC
7	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	8:case	LId=s-1
8	předsedou	předseda	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:s:ins	Bridge=lnd94103043c17<lnd94103043c18:funct|Entity=(lnd94103043c18--1)|Functor=4:RSTR
9	Milanem	Milan	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	8	flat	8:flat	Functor=8:RSTR
10	Uhdem	Uhde	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	8	flat	8:flat	SpaceAfter=No|Functor=8:ADDR
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Jiří	Jiří	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	0	root	0:root	Entity=(cmpr9410009c11--1-gstype:spec|Functor=0:RSTR
2	Gebarowský	Gebarowský	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	1	flat	1:flat	Entity=cmpr9410009c11)|Functor=1:DENOM

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 flat	color:blue
1	Slyšel	slyšet	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
2	jsem	být	AUX	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
4	že	že	SCONJ	J,-------------	_	8	mark	8:mark	LId=že-1
5	ho	on	PRON	P5ZS4--3-------	Case=Acc|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	8	obj	8:obj	Entity=(ln95048061c29--1-gstype:gen)|Functor=8:PAT|LId=on-1
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=po-1
7	léta	léta	NOUN	NNNP4-----A---2	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	8	obl	8:obl:po:acc	Functor=8:TFHL
8	udržuje	udržovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	Functor=1:PAT
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	10:case	LId=v-1
10	rodině	rodina	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	8	obl	8:obl:v:loc	Functor=8:LOC
11	i	i	CCONJ	J^-------------	_	12	advmod:emph	12:advmod:emph	LId=i-1|Functor=12:RHEM
12	pan	pan	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	Functor=8:RSTR
13	premiér	premiér	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	12	flat	12:flat	Functor=12:RSTR
14	Klaus	Klaus	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	12	flat	12:flat	SpaceAfter=No|Functor=12:ACT
15	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


