---
layout: base
title:  'Statistics of compound in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ga_idt-dep-compound-prt.html">compound:prt</a></tt>.

141 nodes (0%) are attached to their parents as `compound`.

141 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15602836879433.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (119; 84% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (18; 13% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	éirigh	éirigh	VERB	VI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	sa	i	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	scrúdú	scrúdú	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obl	_	_
5	leis	le	ADP	Simp	_	7	case	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	mac	mac	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	obl	_	_
8	léinn	léann	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	compound	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	(f)	(f)	NUM	Item	_	2	list	_	_
2	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	a	a	PART	Nm	PartType=Num	2	mark:prt	_	_
5	dó	dó	NUM	Num	NumType=Card	8	nummod	_	_
6	dhéag	déag	NOUN	Subst	Form=Len|Number=Sing	5	compound	_	_
7	a	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	chlog	clog	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	2	obl:tmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	oíche	oíche	NOUN	Noun	Gender=Fem|Number=Sing	0	root	_	_
3	roimh	roimh	ADP	Simp	_	4	case	_	_
4	Mhí	mí	NOUN	Noun	Form=Len|Gender=Fem|Number=Sing	2	nmod	_	_
5	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	compound	_	_
6	Meala	mil	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	compound	_	SpaceAfter=No
7	!	!	PUNCT	!	_	2	punct	_	_

~~~


