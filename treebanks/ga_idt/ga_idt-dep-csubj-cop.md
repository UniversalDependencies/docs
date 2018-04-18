---
layout: base
title:  'Statistics of csubj:cop in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga_idt-dep-csubj-cleft.html">csubj:cleft</a></tt>.

48 nodes (0%) are attached to their parents as `csubj:cop`.

48 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5625.

The following 11 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (19; 40% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (14; 29% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	Ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	2	csubj:cop	_	_
5	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nsubj	_	_
6	acu	ag	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	_
7	cad	cad	PRON	Q	PronType=Int	10	nsubj	_	_
8	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
9	a	a	PART	Vb	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	tharla	tarlaigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	4	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cop	color:blue
1	Níor	is	AUX	Cop	Polarity=Neg|Tense=Past|VerbForm=Cop	2	cop	_	_
2	chúis	cúis	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	0	root	_	_
3	iontais	iontas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	compound	_	_
4	í	í	PRON	Pers	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
5	go	go	PART	Ad	PartType=Ad	6	mark:prt	_	_
6	hiomlán	iomlán	ADJ	Adj	Degree=Pos	2	advmod	_	_
7	gur	gur	PART	Vb	PartType=Vb|Tense=Past	8	mark:prt	_	_
8	ghlaoigh	glaoigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	2	csubj:cop	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	ar	ar	ADP	Simp	_	11	case	_	_
11	Melissa	Melissa	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj:cop	color:blue
1	Dá	dá	SCONJ	Subord	_	2	mark	_	_
2	mbeinn	bí	VERB	Cond	Form=Ecl|Mood=Cnd|Number=Sing|Person=1	8	advcl	_	_
3	gearrtha	gearrtha	ADJ	Adj	VerbForm=Part	2	xcomp:pred	_	_
4	amach	amach	ADV	Dir	_	3	advmod	_	_
5	ón	ó	ADP	Art	Number=Sing|PronType=Art	6	case	_	_
6	gcomhluadar	comhluadar	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	3	obl	_	_
7	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	8	cop	_	_
8	eol	eol	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
9	duit	do	ADP	Prep	Number=Sing|Person=2	8	obl:prep	_	_
10	b'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	11	cop	_	SpaceAfter=No
11	fhéidir	féidir	NOUN	Subst	Form=Len|Number=Sing	8	csubj:cop	_	_
12	go	go	PART	Vb	PartType=Cmpl	13	mark:prt	_	_
13	n-imeodh	imigh	VERB	VI	Form=Ecl|Mood=Cnd	11	csubj:cop	_	_
14	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	15	det	_	_
15	díthchéille	díthchéille	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
16	as	as	ADP	Simp	_	18	case	_	_
17	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	18	nmod:poss	_	_
18	chroí	croí	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	_	8	punct	_	_

~~~


