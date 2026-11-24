---
layout: base
title:  'Statistics of advcl in UD_Greek-Griko'
udver: '2'
---

## Treebank Statistics: UD_Greek-Griko: Relations: `advcl`

This relation is universal.

17 nodes (1%) are attached to their parents as `advcl`.

9 instances of `advcl` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35294117647059.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (12; 71% instances), <tt><a href="el_griko-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_griko-pos-VERB.html">VERB</a></tt> (2; 12% instances), <tt><a href="el_griko-pos-PRON.html">PRON</a></tt>-<tt><a href="el_griko-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="el_griko-pos-VERB.html">VERB</a></tt>-<tt><a href="el_griko-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl	color:blue
1	e	o	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	serva	serva	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	pirte	pao	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	klèonta	kleo	VERB	_	Aspect=Imp|VerbForm=Conv|Voice=Act	3	advcl	_	_
5	es	es	ADP	_	_	7	case	_	_
6	ti'	o	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	màna	mana	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
8	tti	mu	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nmod	_	_
9	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 advcl	color:blue
1	Tusi	tuso	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	jaterèḍḍa	jatereddha	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	sekùndu	sekundu	SCONJ	_	_	5	mark	_	_
5	jennìti	jennìome	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	8	advcl	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	ìsane	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
8	òrria	òrrio	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
9	ka	ka	SCONJ	_	_	11	mark	_	_
10	en	de	PART	_	Polarity=Neg	11	advmod	_	_
11	iχe	echo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	_	_
12	aḍḍi	addho	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	11	obj	_	_
13	sekundu	sekundu	ADP	_	_	14	case	_	_
14	ćini	cino	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	12	nmod	_	_
15	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 advcl	color:blue
1	Itta	ciso	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	_
2	tria	tris	NUM	_	Case=Nom|Gender=Neut|NumType=Card	3	nummod	_	_
3	pedìa	pedì	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	parataxis	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	ena	ena	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	_	_
6	ìgue	kuo	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	Pati	Pati	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	xcomp	_	_
8	,	,	PUNCT	_	_	10	punct	_	_
9	o	o	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	addos	addo	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	conj	_	_
11	Antonài	Antonài	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	orphan	_	_
12	ce	ce	CCONJ	_	_	14	cc	_	_
13	o	o	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	addos	addo	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	10	conj	_	_
15	Triannìscia	Trianniscia	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	14	orphan	_	_
16	,	,	PUNCT	_	_	19	punct	_	_
17	jatì	jatì	SCONJ	_	_	19	mark	_	_
18	ione	ime	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	cop	_	_
19	fiacculiddo	fiacculiddo	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	14	advcl	_	_
20	.	.	PUNCT	_	_	6	punct	_	_

~~~


