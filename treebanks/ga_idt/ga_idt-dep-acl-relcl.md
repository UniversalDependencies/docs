---
layout: base
title:  'Statistics of acl:relcl in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `acl:relcl`

This relation is a language-specific subtype of .

654 nodes (2%) are attached to their parents as `acl:relcl`.

653 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.29204892966361.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (570; 87% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (21; 3% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-PART.html">PART</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	nobilis	nobilis	X	Foreign	Foreign=Yes	0	root	_	SpaceAfter=No
2	)	)	PUNCT	Punct	_	4	punct	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	4	punct	_	_
4	gaol	gaol	NOUN	Noun	Gender=Masc|Number=Sing	1	parataxis	_	_
5	leis	le	ADP	Prep	Gender=Masc|Number=Sing|Person=3	4	obl:prep	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	obj	_	_
7	fhaightear	faigh	VERB	VT	Form=Len|Mood=Ind|Tense=Pres|Voice=Auto	4	acl:relcl	_	_
8	sa	i	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
9	Mheánmhuir	Meánmhuir	PROPN	Noun	Form=Len|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Cuir	cuir	VERB	Imper	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	i	i	ADP	Simp	_	3	case	_	_
3	gcomparáid	comparáid	NOUN	Noun	Form=Ecl|Gender=Fem|Number=Sing	1	obl	_	_
4	ansin	ansin	ADV	Loc	_	1	advmod	_	_
5	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
6	lena	le	PART	Rel	PronType=Rel	7	obl	_	_
7	dtugann	tabhair	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	acl:relcl	_	_
8	Fíor	fíor	NOUN	Noun	Gender=Fem|Number=Sing	7	nsubj	_	_
9	70.3	70.3	NUM	Num	_	8	nummod	_	_
10	le	le	ADP	Simp	_	11	case	_	_
11	fios	fios	NOUN	Noun	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Duine	Duine	PROPN	Noun	Gender=Masc|Number=Sing	0	root	_	_
2	fíorthuisceanach	tuisceanach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	1	amod	_	_
3	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	4	nmod	_	_
4	Ciarán	Ciarán	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	thug	tabhair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
7	faoi	faoi	ADP	Simp	_	8	case	_	_
8	deara	deara	NOUN	Subst	Number=Sing	6	obl	_	_
9	go	go	PART	Ad	PartType=Ad	10	mark:prt	_	_
10	luath	luath	ADJ	Adj	Degree=Pos	6	advmod	_	_
11	buanna	bua	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	6	obj	_	_
12	Chaitlín	Caitlín	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	_
13	Maude	Maude	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	12	flat:name	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


