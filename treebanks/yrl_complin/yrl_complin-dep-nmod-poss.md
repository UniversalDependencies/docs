---
layout: base
title:  'Statistics of nmod:poss in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="yrl_complin-dep-nmod.html">nmod</a></tt>.

673 nodes (5%) are attached to their parents as `nmod:poss`.

656 instances of `nmod:poss` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01931649331352.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (444; 66% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (183; 27% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (39; 6% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="yrl_complin-pos-DET.html">DET</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Ayuíri	yuíri	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
2	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	1	aux	_	_
3	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	TokenRange=14:16
4	retama	tetama	NOUN	N	Number=Sing|Rel=Cont	1	obl	_	TokenRange=17:23
5	kití	kití	ADP	ADP	_	4	case	_	SpaceAfter=No|TokenRange=24:28
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:5
2	ukuntari	kuntari	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=6:14
3	uakonteseri	akonteseri	VERB	V	Person=3|VerbForm=Fin	2	ccomp	_	Orig=acontecer|OrigLang=pt|TokenRange=15:26
4	waá	waá	PRON	REL	Number=Sing|PronType=Rel	3	nsubj	_	TokenRange=27:30
5	garapé	garapé	NOUN	N	Number=Sing	6	nmod:poss	_	TokenRange=31:37
6	apira	apira	NOUN	N	Number=Sing	3	obl	_	TokenRange=38:43
7	kití	kití	ADP	ADP	_	6	case	_	SpaceAfter=No|TokenRange=44:48
8	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=48:49

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Maria	maria	PROPN	PROPN	_	2	nmod:poss	_	TokenRange=0:5
2	mimbira-itá	mimbira	NOUN	N	Number=Plur	3	nsubj	_	TokenRange=6:17
3	puranga	puranga	ADJ	A	_	0	root	_	SpaceAfter=No|TokenRange=18:25
4	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=25:26

~~~


