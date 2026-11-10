---
layout: base
title:  'Statistics of advcl:pred in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-advcl.html">advcl</a></tt>.

11 nodes (0%) are attached to their parents as `advcl:pred`.

8 instances of `advcl:pred` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45454545454545.

The following 5 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (7; 64% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (1; 9% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 advcl:pred	color:blue
1	P	P	NOUN	NNNXX-----A----	Gender=Neut	5	dep	_	_
2	–	–	PUNCT	Z:-------------	_	1	punct	_	_
3	Není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	_
5	co	co	PRON	PQ--4----------	Case=Acc|PronType=Int,Rel	0	root	_	_
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	_
8	takovu	takový	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	_
9	krasnu	krásný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
10	ženu	žena	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	14	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	14	punct	_	_
12	moc	moc	ADV	Ca--X----------	Degree=Pos|Polarity=Pos	13	advmod	_	_
13	rád	rád	ADJ	ACYS------A----	Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	14	advcl:pred	_	_
14	pomoc	pomoci	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl:pred	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	_	_
2	Japonsku	Japonsko	PROPN	NNNS6-----A----	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing	10	obl	_	_
3	jako	jako	SCONJ	J,-------------	_	6	mark	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	_	_
5	jiných	jiný	ADJ	AAFP6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	6	amod	_	_
6	zemích	země	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	10	advcl:pred	_	_
7	každý	každý	DET	AAIS1----1A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	8	amod	_	_
8	život	život	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	rozmanitější	rozmanitý	ADJ	AAIS1----2A----	Animacy=Inan|Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	_	_
12	poslední	poslední	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	_	_
13	době	doba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl:pred	color:blue
1	občas	občas	ADV	Db-------------	Degree=Pos|Polarity=Pos	3	advmod	_	_
2	lidi	člověk	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	3	nsubj	_	_
3	jezdi	jezdit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	sami	samý	DET	PLMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Emp|Variant=Short	3	advcl:pred	_	_
5	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	6	case	_	_
6	průvodce	průvodce	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_

~~~


