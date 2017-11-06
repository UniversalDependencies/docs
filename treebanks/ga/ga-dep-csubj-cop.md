---
layout: base
title:  'Statistics of csubj:cop in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga-dep-csubj-cleft.html">csubj:cleft</a></tt>.

48 nodes (0%) are attached to their parents as `csubj:cop`.

48 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5625.

The following 11 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (19; 40% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (14; 29% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	ón	ó	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	teideal	teideal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obl	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	draíocht	draíocht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	6	nsubj	_	_
8	i	i	ADP	Simp	_	9	case	_	_
9	gceist	ceist	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	6	xcomp:pred	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	dráma	dráma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	_
12	seo	seo	DET	Det	PronType=Dem	11	det	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj:cop	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ná	ná	PART	Vb	Mood=Imp|PartType=Vb|Polarity=Neg	3	advmod	_	_
3	habair	abar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
4	liom	le	ADP	Prep	Number=Sing|Person=1	3	obl:prep	_	_
5	gurb	is	AUX	Cop	Form=VF|Tense=Pres|VerbForm=Cop	8	cop	_	_
6	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
7	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	8	nmod:poss	_	_
8	thuairimse	tuairim	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	3	ccomp	_	_
9	leis	le	ADP	Simp	_	10	case	_	_
10	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
11	gur	is	AUX	Cop	Tense=Pres|VerbForm=Cop	12	cop	_	_
12	bréaga	bréag	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	8	csubj:cop	_	_
13	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	14	det	_	_
14	leath	leath	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	12	compound	_	_
15	dá	dá	SCONJ	Subord	_	16	nsubj	_	_
16	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	12	acl:relcl	_	_
17	foghlamtha	foghlamtha	ADJ	Adj	VerbForm=Part	16	xcomp:pred	_	_
18	againn	ag	ADP	Prep	Number=Plur|Person=1	17	obl:prep	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


