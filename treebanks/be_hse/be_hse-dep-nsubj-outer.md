---
layout: base
title:  'Statistics of nsubj:outer in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="be_hse-dep-nsubj-pass.html">nsubj:pass</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

7 instances of `nsubj:outer` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.875.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 63% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	А	а	CCONJ	CC	_	8	cc	8:cc	_
2	хмарка	хмарка	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj:outer	8:nsubj:outer	_
3	на	на	ADP	IN	_	4	case	4:case	_
4	фоне	фон	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	nmod	2:nmod:на:loc	_
5	—	—	PUNCT	PUNCT	_	4	punct	4:punct	_
6	гэта	гэта	PART	UH	_	8	expl	8:expl	_
7	апазыцыя	апазыцыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
8	пралятае	пралятаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	міма	міма	ADP	IN	_	10	case	10:case	_
10	Палаты	палата	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl:міма:gen	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj:outer	color:blue
1	Думаю	думаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	10	punct	10:punct	_
3	што	што	SCONJ	IN	_	10	mark	10:mark	_
4	правільны	правільны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	_
5	адказ	адказ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj:outer	10:nsubj:outer	_
6	тут	тут	ADV	RB	Degree=Pos	10	advmod	10:advmod	_
7	не	не	PART	NEG	Polarity=Neg	10	advmod	10:advmod	_
8	“	“	PUNCT	PUNCT	_	9	punct	9:punct	SpaceAfter=No
9	гэта	гэта	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj	10:nsubj	_
10	немагчыма	немагчымы	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	1	ccomp	1:ccomp	SpaceAfter=No
11	”	”	PUNCT	PUNCT	_	10	punct	10:punct	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	17	punct	17:punct	_
13	але	але	CCONJ	CC	_	17	cc	17:cc	_
14	“	“	PUNCT	PUNCT	_	17	punct	17:punct	SpaceAfter=No
15	нам	мы	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	17	obj	17:obj	_
16	не	не	PART	NEG	Polarity=Neg	17	advmod	17:advmod	_
17	хочаца	хацецца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	conj	1:ccomp|10:conj	SpaceAfter=No
18	”	”	PUNCT	PUNCT	_	17	punct	17:punct	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nsubj:outer	color:blue
1	Тое	той	DET	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	6:punct	_
3	што	што	PRON	WP	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	obj	7:obj	_
4	не	не	PART	NEG	_	6	advmod	6:advmod	_
5	ў	у	ADP	IN	_	6	case	6:case	_
6	стане	стан	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	_
7	рабіць	рабіць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	6	csubj	6:csubj	_
8	Пракуратура	пракуратура	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:outer	6:nsubj:outer	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


