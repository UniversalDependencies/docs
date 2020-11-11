---
layout: base
title:  'Statistics of dep:fixed in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `dep:fixed`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-dep.html">dep</a></tt>.
There are also 1 other language-specific subtypes of `dep`: <tt><a href="pcm_nsc-dep-dep-comp.html">dep:comp</a></tt>.

2 nodes (0%) are attached to their parents as `dep:fixed`.

2 instances of `dep:fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `dep:fixed`: <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep:fixed	color:blue
1	and	and	CCONJ	_	_	2	case	_	AlignBegin=280986|AlignEnd=281120|Gloss=and
2	in	in	ADP	_	_	9	discourse	_	AlignBegin=281120|AlignEnd=281220|ExtPos=ADV|Gloss=in|PhraseType=Idiom
3	fact	fact	NOUN	_	_	2	fixed	_	AlignBegin=281220|AlignEnd=281759|Gloss=fact
4	#	#	X	_	_	2	dep	_	AlignBegin=281759|AlignEnd=281982|Gloss=PUNCT
5	sey	sey	SCONJ	_	_	2	dep:fixed	_	AlignBegin=281982|AlignEnd=282160|Gloss=COMP
6	{	{	X	_	_	9	dep	_	AlignBegin=282160|AlignEnd=282190|Gloss=PUNCT
7	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	AlignBegin=282190|AlignEnd=282340|Gloss=NOM.SG.3
8	no	no	PART	_	Polarity=Neg	9	advmod	_	AlignBegin=282340|AlignEnd=282580|Gloss=NEG
9	get	get	VERB	_	_	0	root	_	AlignBegin=282580|AlignEnd=282910|Gloss=get
10	ehn	ehn	INTJ	_	_	9	discourse	_	AlignBegin=282910|AlignEnd=283002|Gloss=ehn
11	||	||	X	_	_	14	dep	_	AlignBegin=283002|AlignEnd=283032|Gloss=PUNCT
12	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=283032|AlignEnd=283140|Gloss=NOM.SG.3
13	no	no	PART	_	Polarity=Neg	14	advmod	_	AlignBegin=283140|AlignEnd=283340|Gloss=NEG
14	get	get	VERB	_	_	9	reparandum	_	AlignBegin=283340|AlignEnd=283540|Gloss=get
15	}	}	X	_	_	9	dep	_	AlignBegin=283540|AlignEnd=283570|Gloss=PUNCT
16	brain	brain	NOUN	_	_	14	obj	_	AlignBegin=283570|AlignEnd=283818|Gloss=brain
17	{	{	X	_	_	18	dep	_	AlignBegin=283818|AlignEnd=283848|Gloss=PUNCT
18	at	at	ADP	_	_	14	advmod	_	AlignBegin=283848|AlignEnd=283980|ExtPos=ADV|Gloss=at|PhraseType=Idiom
19	all	all	DET	_	_	18	fixed	_	AlignBegin=283980|AlignEnd=284063|Gloss=all
20	|r	|r	X	_	_	21	dep	_	AlignBegin=284063|AlignEnd=284093|Gloss=PUNCT
21	at	at	ADP	_	_	18	compound:redup	_	AlignBegin=284093|AlignEnd=284260|ExtPos=ADV|Gloss=at|PhraseType=Idiom
22	all	all	DET	_	_	21	fixed	_	AlignBegin=284260|AlignEnd=284450|Gloss=all
23	}	}	X	_	_	18	dep	_	AlignBegin=284450|AlignEnd=284480|Gloss=PUNCT
24	//	//	X	_	_	9	dep	_	AlignBegin=284450|AlignEnd=284480|Gloss=PUNCT

~~~


