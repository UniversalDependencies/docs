---
layout: base
title:  'Statistics of obl:agent in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_cac-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_cac-dep-obl-arg.html">obl:arg</a></tt>.

241 nodes (0%) are attached to their parents as `obl:agent`.

179 instances of `obl:agent` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.04979253112033.

The following 10 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (172; 71% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (47; 20% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Motor	motor	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj:pass	4:nsubj:pass	_
2	praní	praní	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	1	nmod	1:nmod	LDeriv=prát
3	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	ovládán	ovládaný	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=ovládat
5	polohovým	polohový	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	spínačem	spínač	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:agent	4:obl:agent	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:agent	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	odstavci	odstavec	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	7:obl	_
3	#	&cother;	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	7:expl:pass	LGloss=(zvr._zájmeno/částice)
5	druhá	druhý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	LId=druhý-1|LGloss=(jiný)
6	věta	věta	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	7:nsubj:pass	_
7	nahrazuje	nahrazovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	větou	věta	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	7	obl:agent	7:obl:agent	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Lexikální	lexikální	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	úkoly	úkol	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
3	byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
4	naopak	naopak	ADV	Db-------------	_	5	cc	5:cc	_
5	posíleny	posílený	ADJ	VsTP---XX-AP---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=posílit
6	*	*	SYM	Xx-------------	Abbr=Yes	7	nmod	7:nmod	_
7	Macháčkovou	Macháčková	PROPN	NNFS7-----A----	Case=Ins|Gender=Fem|NameType=Sur|Number=Sing|Polarity=Pos	5	obl:agent	5:obl:agent	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


