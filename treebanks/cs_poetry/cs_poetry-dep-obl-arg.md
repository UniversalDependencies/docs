---
layout: base
title:  'Statistics of obl:arg in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_poetry-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_poetry-dep-obl-agent.html">obl:agent</a></tt>.

138 nodes (2%) are attached to their parents as `obl:arg`.

75 instances of `obl:arg` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09420289855072.

The following 13 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (58; 42% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (41; 30% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (5; 4% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:arg	color:blue
1	O	o	INTJ	II-------------	_	5	dep	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	_	_
3	jediné	jediný	ADJ	AANS1----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	8	amod	_	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	_	_
5	dej	dát	VERB	Vi-S---2--A----	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
6	mi	já	PRON	PH-S3--1-------	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	5	obl:arg	_	_
7	slyšet	slyšet	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	5	xcomp	_	_
8	slovo	slovo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	SpaceAfter=No
9	:	:	PUNCT	Z:-------------	_	10	punct	_	_
10	Ego	ego	PRON	II-------------	Foreign=Yes	8	appos	_	_
11	te	tu	PRON	TT-------------	Foreign=Yes	10	flat:foreign	_	_
12	absolvo	absolvere	VERB	NNNS1-----A----	Aspect=Perf|Foreign=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	10	flat:foreign	_	SpaceAfter=No
13	!	!	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:arg	color:blue
1	Krákorala	krákorat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
3	svém	svůj	DET	P8ZS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	_
4	plenu	plen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	_	_
6	družkám	družka	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur	7	nmod	_	_
7	sovám	sova	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur	1	obl	_	_
8	–	–	PUNCT	Z:-------------	_	10	punct	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	_
10	jelenu	jelen	NOUN	NNMS6-----A---1	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:arg	color:blue
1	Jdou	jít	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	leta	rok	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Style=Rare	1	nsubj	_	_
3	umdlená	umdlený	ADJ	AANP1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	amod	_	_
4	parny	parna	NOUN	NNIP7-----A----	Case=Ins|Gender=Neut|Number=Plur	3	obl:arg	_	_
5	života	život	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	_	_
7	jdou	jít	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
8	hluboko	hluboko	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	_
9	dole	dole	ADV	Db-------------	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


