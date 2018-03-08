---
layout: base
title:  'Statistics of acl:relcl in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `acl:relcl`

This relation is a language-specific subtype of .

436 nodes (2%) are attached to their parents as `acl:relcl`.

436 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1651376146789.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (387; 89% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (13; 3% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Person=3	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	leabhar	leabhar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	obj	_	_
6	thug	tabhair	VERB	VD	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
7	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
8	do	do	ADP	Simp	_	9	case	_	_
9	Mháire	Máire	PROPN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:relcl	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	acl:relcl	_	_
4	i	i	ADP	Simp	_	5	case	_	_
5	gceist	ceist	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	2	xcomp:pred	_	_
6	leis	le	ADP	Simp	_	8	case	_	_
7	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	heagrais	eagras	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Plur	5	nmod	_	_
9	dheonacha	deonach	ADJ	Adj	Case=NomAcc|NounType=Slender|Number=Plur	8	amod	_	_
10	ná	ná	PART	Vb	Mood=Imp|PartType=Vb	13	mark	_	_
11	eagrais	eagras	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	10	nmod	_	_
12	nach	is	AUX	Cop	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	13	cop	_	_
13	eagrais	eagras	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	2	ccomp	_	_
14	Stáit	stát	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	13	compound	_	_
15	iad	iad	PRON	Pers	Number=Plur|Person=3	13	nsubj	_	_
16	'	'	PUNCT	Punct	_	15	punct	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
2	is	is	AUX	Cop	PronType=Rel|Tense=Pres|VerbForm=Cop	3	cop	_	_
3	lena	le	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	0	root	_	_
4	aghaidh	aghaidh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	3	nmod	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	a	a	PART	Inf	PartType=Inf	7	obj	_	_
7	ceapadh	ceapadh	NOUN	Noun	VerbForm=Inf	4	acl:relcl	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	boinn	bonn	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	_
10	ídín	ídín	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	Punct	_	14	punct	_	_
12	leis	le	ADP	Simp	_	14	case	_	_
13	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	bhfuil	fuil	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	3	nmod	_	_
15	a	a	PART	Inf	PartType=Inf	16	mark	_	_
16	choinneáil	coinneáil	NOUN	Noun	Form=Len|VerbForm=Inf	14	xcomp	_	_
17	ag	ag	ADP	Simp	_	18	case	_	_
18	sodarnaíl	sodarnaíl	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	16	xcomp	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


