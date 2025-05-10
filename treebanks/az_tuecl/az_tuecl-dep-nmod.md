---
layout: base
title:  'Statistics of nmod in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="az_tuecl-dep-nmod-poss.html">nmod:poss</a></tt>.

38 nodes (4%) are attached to their parents as `nmod`.

36 instances of `nmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31578947368421.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (16; 42% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (6; 16% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (5; 13% instances), <tt><a href="az_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Anasının	ana	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nmod	_	_
2	arzusu	arzu	NOUN	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
3	Denizin	Deniz	PROPN	_	Case=Gen|Number=Sing	8	ccomp	_	_
4	yaxçı	yaxçı	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	_	6	det	_	_
6	mədrəsəde	mədrəsə	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
7	dərs	dərs	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	oxumasıydı	oxu	VERB	_	Case=Nom|Mood=Ind|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Tense=Past|VerbForm=Vnoun	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Peterin	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	qonşusu	qonşu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	hasarı	hasar	NOUN	_	Case=Acc|Number=Sing	5	obl	_	_
4	qırmız	qırmız	ADJ	_	_	5	xcomp	_	_
5	rənglədi	rənglə	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauCau	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Mənin	mən	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	_
3	sənin	sən	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kindən	-ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	5	nmod	_	_
5	bətərdi	bətər	ADJ	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


