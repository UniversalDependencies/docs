---
layout: base
title:  'Statistics of acl in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ga_idt-dep-acl-relcl.html">acl:relcl</a></tt>.

88 nodes (0%) are attached to their parents as `acl`.

88 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55681818181818.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (41; 47% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (38; 43% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (6; 7% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	_
2	léan	léan	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	2	acl	_	_
5	ar	ar	ADP	Simp	_	7	case	_	_
6	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	Gaeil	Gael	PROPN	Noun	Definite=Def|Gender=Masc|Number=Plur	4	obl	_	_
8	luí	luí	NOUN	Noun	VerbForm=Inf	7	xcomp:pred	_	_
9	síos	síos	ADV	Dir	_	8	advmod	_	_
10	arís	arís	ADV	Gn	_	8	advmod	_	_
11	ina	i	ADP	Poss	Number=Plur|Person=3|Poss=Yes	12	case	_	_
12	dtír	tír	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	4	obl	_	_
13	féin	féin	PRON	Ref	Reflex=Yes	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	na	an	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	meánmhuir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	acl	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing|Typo=Yes	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	8	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	NamedEntity=Yes
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Definite=Def|Form=Len|Gender=Fem|Number=Sing	8	nmod	_	NamedEntity=Yes|SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Tugtar	tabhair	VERB	VTI	Mood=Ind|Person=0|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	caimbiam	caimbiam	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obj	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	limistéar	limistéar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	_
7	fáis	fás	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	díreach	díreach	ADJ	Adj	Degree=Pos	6	acl	_	_
9	faoin	faoi	ADP	Art	Number=Sing|PronType=Art	10	case	_	_
10	gcoirt	coirt	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


