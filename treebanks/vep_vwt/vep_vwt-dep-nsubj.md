---
layout: base
title:  'Statistics of nsubj in UD_Veps-VWT'
udver: '2'
---

## Treebank Statistics: UD_Veps-VWT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="vep_vwt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

98 nodes (8%) are attached to their parents as `nsubj`.

75 instances of `nsubj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85714285714286.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (47; 48% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (44; 45% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="vep_vwt-pos-AUX.html">AUX</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vep_vwt-pos-PRON.html">PRON</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Muštat-ik	muštatada	VERB	_	Clitic=Ik|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	Tö	tö	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	1	nsubj	_	_
3	ičetoi	ičeze	PRON	_	Case=Nom|Number=Plur|PronType=Prs|Reflex=Yes	4	nmod	_	_
4	školan	škol	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
5	vozid	voz'	NOUN	_	Case=Par|Number=Plur	1	obj	_	_
6	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Nece	nece	PRON	_	Case=Nom|Number=Sing|PronType=Dem	2	nmod	_	_
2	rad	rad	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	pakičeb	pakita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	vastusenpidändad	vastusenpidänd	NOUN	_	Case=Par|Number=Sing	3	obj	_	_
5	da	da	CCONJ	_	_	6	cc	_	_
6	väged	vägi	NOUN	_	Case=Par|Number=Sing	4	conj	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	Išttes	ištta	VERB	_	VerbForm=Conv	7	advcl	_	_
2	čomal	čoma	ADJ	_	Case=Ade|Degree=Pos|Number=Sing	3	amod	_	_
3	Änižen	Änine	PROPN	_	Case=Gen|Number=Sing	4	nmod	_	_
4	randal	rand	NOUN	_	Case=Ade|Number=Sing	7	obl	_	_
5	Natalja	Natalja	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
6	Jevgenjevna	Jevgenjevna	PROPN	_	Case=Nom|Number=Sing	5	flat	_	_
7	andoi	antta	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	vastusid	vastuz	NOUN	_	Case=Par|Number=Plur	7	obj	_	_
9	minun	minä	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	nmod	_	_
10	küzundoihe	küzund	NOUN	_	Case=Ill|Number=Plur	7	obl	_	_
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


