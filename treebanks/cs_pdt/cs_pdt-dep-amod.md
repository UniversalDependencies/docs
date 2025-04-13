---
layout: base
title:  'Statistics of amod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `amod`

This relation is universal.

34341 nodes (10%) are attached to their parents as `amod`.

32010 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30322355202236.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (33033; 96% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (802; 2% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (114; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (109; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (85; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (70; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (62; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410009c2--2-gstype:spec|Functor=3:RSTR
3	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Entity=cmpr9410009c2)|Functor=0:DENOM
4	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Restaurátorské	restaurátorský	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	Functor=2:RSTR
2	licence	licence	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	Functor=3:ACT
3	umožňují	umožňovat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	práce	práce	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	Entity=(cmpr9410029c4--1-gstype:gen|Functor=3:PAT|LGloss=(jako_činnost_i_místo)
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	Bridge=cmpr9410029c7<cmpr9410029c5:subset,cmpr9410029c8<cmpr9410029c5:part|Entity=(cmpr9410029c5--3|LId=v-1
6	celé	celý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	ČR	ČR	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Geo	4	nmod	4:nmod:v:loc	Entity=cmpr9410029c5)cmpr9410029c4)|Functor=4:LOC|LGloss=(Česká_republika)|SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Zatím	zatím	ADV	Db-------------	_	3	advmod	3:advmod	Functor=3:TWHEN
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	3:expl:pv	LGloss=(zvr._zájmeno/částice)
3	přihlásilo	přihlásit	VERB	VpNS----R-AAP--	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
4	65	65	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	5:nummod:gov	Bridge=ln9420536c9<ln9420536c10:subset|Entity=(ln9420536c10--2-gstype:spec|Functor=5:RSTR
5	družstev	družstvo	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	3	nsubj	3:nsubj	Entity=ln9420536c10)|Functor=3:ACT|SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	8	punct	8.1:punct	Functor=8:CONJ
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	Entity=(ln9420536c10--2-gstype:spec|LId=z-1
8	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	conj	8.1:dep	Entity=ln9420536c10)|Functor=3:DIR1
9	15	15	NUM	C=-------------	NumForm=Digit|NumType=Card	8	orphan	8.1:dep	Bridge=ln9420536c10<ln9420536c11:subset|Entity=(ln9420536c11--1|Functor=8:ACT
10	ženských	ženský	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	9	amod	9:amod	Entity=ln9420536c11)|Functor=9:RSTR|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


