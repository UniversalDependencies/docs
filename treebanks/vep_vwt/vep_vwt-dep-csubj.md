---
layout: base
title:  'Statistics of csubj in UD_Veps-VWT'
udver: '2'
---

## Treebank Statistics: UD_Veps-VWT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="vep_vwt-dep-csubj-cop.html">csubj:cop</a></tt>.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="vep_vwt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vep_vwt-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="vep_vwt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt>-<tt><a href="vep_vwt-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Hüvä	hüvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
2	,	,	PUNCT	_	_	5	punct	_	_
3	miše	miše	SCONJ	_	_	5	mark	_	_
4	minun	minä	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	nmod	_	_
5	elos	elo	NOUN	_	Case=Ine|Number=Sing	1	csubj	_	_
6	oliba	olda	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
7	ristitud	ristit	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
8	,	,	PUNCT	_	_	10	punct	_	_
9	kudambad	kudamb	PRON	_	Case=Nom|Number=Plur|PronType=Int	10	nsubj	_	_
10	abutiba	abutada	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	_	_
11	minei	minä	PRON	_	Case=All|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
12	da	da	CCONJ	_	_	14	cc	_	_
13	kaiken	kaik	PRON	_	Case=Gen|Number=Sing|PronType=Tot	14	obj	_	_
14	tugeziba	tugeta	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	conj	_	_
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 csubj	color:blue
1	Muštan	muštta	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	7	punct	_	_
3	miše	miše	SCONJ	_	_	7	mark	_	_
4	ezmäi	ezmäi	ADV	_	_	7	advmod	_	_
5	oli	olda	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
6	lujas	lujas	ADV	_	_	7	advmod	_	_
7	jüged	jüged	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	ccomp	_	_
8	opetas	opetas	VERB	_	VerbForm=Inf	7	csubj	_	_
9	,	,	PUNCT	_	_	10	punct	_	_
10	el'geta	el'geta	VERB	_	VerbForm=Inf	8	conj	_	_
11	da	da	CCONJ	_	_	12	cc	_	_
12	panda	panda	VERB	_	VerbForm=Inf	8	conj	_	_
13	muštho	mušt	NOUN	_	Case=Ill|Number=Sing	12	obl	_	_
14	kaik	kaik	PRON	_	Case=Nom|Number=Sing|PronType=Tot	15	nmod	_	_
15	tedoid	tedo	NOUN	_	Case=Par|Number=Plur	12	obj	_	_
16	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Ken	ken	PRON	_	Case=Nom|Number=Sing|PronType=Int	2	nsubj	_	_
2	tuleb	tulda	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj	_	_
3	Päžarvehe	Päžar'	PROPN	_	Case=Ill|Number=Sing	2	obl	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	ka	ka	ADV	_	_	6	advmod	_	_
6	kaičeb	kaita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	necen	nece	PRON	_	Case=Gen|Number=Sing|PronType=Dem	8	nsubj	_	_
8	tahon	taho	NOUN	_	Case=Gen|Number=Sing	6	obj	_	_
9	südäimes	südäin	NOUN	_	Case=Ine|Number=Sing	6	obl	_	_
10	i	i	CCONJ	_	_	11	cc	_	_
11	pördase	pörttas	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
12	tänna	tänna	ADV	_	_	11	advmod	_	_
13	völ	völ	ADV	_	_	14	advmod	_	_
14	kerdan	kerdan	ADV	_	_	11	advmod	_	_
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


