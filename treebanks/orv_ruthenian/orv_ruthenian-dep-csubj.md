---
layout: base
title:  'Statistics of csubj in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `csubj`

This relation is universal.

97 nodes (0%) are attached to their parents as `csubj`.

89 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09278350515464.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (39; 40% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (34; 35% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (20; 21% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj	color:blue
1	И	и	CCONJ	СС	_	4	cc	_	wf="И"
2	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	wf="мы"
3	ихъ	они	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obj	_	wf="ихъ"
4	пожаловали	пожаловати	VERB	VBC	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пожаловали"|SpaceAfter=No
5	:	:	PUNCT	-COLON-	_	8	punct	_	_
6	городничого	городничий	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	11	obj	_	wf="городничого"
7	не	не	PART	NEG	Polarity=Neg	8	advmod	_	wf="не"
8	надобе	надобе	VERB	PRED	_	4	advcl	_	wf="надобе"
9	намъ	мы	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	iobj	_	wf="намъ"
10	имъ	они	PRON	PRP	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	iobj	_	wf="имъ"
11	давати	давати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	8	csubj	_	wf="давати"|SpaceAfter=No
12	.	.	PUNCT	-PERIOD-	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	А	а	CCONJ	СС	_	4	cc	_	wf="А"
2	купцеви	купецъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	wf="купцеви"
3	цистъ	чистый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	amod	_	wf="цистъ"
4	путъ	путь	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="путъ"
5	ѡт(ъ)ѥхати	отъехати	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	4	csubj	_	wf="ѡтъѥхати"
6	и	и	CCONJ	СС	_	7	cc	_	wf="и"
7	приѥхати	приехати	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	5	conj	_	wf="приѥхати"
8	въсегъди	всегды	ADV	PRB	Degree=Pos	4	advmod	_	wf="въсегъди"|SpaceAfter=No
9	.	.	PUNCT	-PERIOD-	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	Також	также	CCONJ	СС	_	5	cc	_	wf="Також"
2	полочаном	полочанинъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Plur	5	iobj	_	wf="полочаном"
3	и	и	CCONJ	СС	_	4	cc	_	wf="и"
4	видиблѧнину	видблянинъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	2	conj	_	wf="видиблѧнину"
5	волно	вольный	ADJ	PRED	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="волно"
6	гостити	гостити	VERB	VB	VerbForm=Inf|Voice=Act	5	csubj	_	wf="гостити"
7	в	въ	ADP	IN	_	8	case	_	wf="в"
8	Ригу	Рига	PROPN	NPI	Case=Acc|Gender=Fem|NameType=Geo|Number=Sing	6	obl	_	wf="Ригу"
9	и	и	CCONJ	СС	_	12	cc	_	wf="и"
10	на	на	ADP	IN	_	12	case	_	wf="на"
11	Готьскы	готский	ADJ	JJH	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	12	amod	_	wf="Готьскы"
12	берегъ	берегъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	8	conj	_	wf="берегъ"|SpaceAfter=No
13	.	.	PUNCT	-PERIOD-	_	5	punct	_	_

~~~


