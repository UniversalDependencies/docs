---
layout: base
title:  'Statistics of aux:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-aux.html">aux</a></tt>.

516 nodes (0%) are attached to their parents as `aux:pass`.

512 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11627906976744.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (508; 98% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Было	быць	AUX	VBC	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	2:aux:pass	_
2	напісана	напісаць	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	5:punct	_
4	што	што	SCONJ	IN	_	5	mark	5:mark	_
5	ацёк	ацёк	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	ccomp	2:ccomp	_
6	лёгкіх	лёгкае	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	5	nmod	5:nmod:gen	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	9:punct	_
8	а	а	CCONJ	CC	_	9	cc	9:cc	_
9	паступала	паступаць	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
10	яна	яна	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	9:nsubj	_
11	з	з	ADP	IN	_	12	case	12:case	_
12	пнэўманіяй	пнэўманія	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	9	obl	9:obl:з:ins	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Зьлева	зьлева	ADV	RB	Degree=Pos	0	root	0:root	_
2	—	—	PUNCT	PUNCT	_	1	punct	1:punct	_
3	Фара	фара	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	nsubj	1:nsubj	_
4	Вітаўта	Вітаўт	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	_
5	адрэстаўраваная	адрэстаўраваны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	acl	3:acl	_
6	ў	у	ADP	IN	_	8	case	8:case	_
7	нэагатычным	нэагатычны	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
8	стылі	стыль	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl:у:loc	_
9	была	быць	AUX	VBC	Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	aux:pass	10:aux:pass	_
10	зьнішчаная	зьнішчаны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	parataxis	1:parataxis	_
11	ў	у	ADP	IN	_	13	case	13:case	_
12	1961	1961	ADJ	ORD	_	13	amod	13:amod	_
13	годзе	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	10	nmod	10:nmod:у:loc	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 aux:pass	color:blue
1	7	7	ADJ	ORD	_	6	obl	6:obl	_
2	траўня	травень	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	flat	1:flat	_
3	1999	1999	ADJ	ORD	_	4	amod	4:amod	_
4	году	год	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen	_
5	быў	быць	AUX	VBC	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	aux:pass	11:aux:pass	_
6	выкрадзены	выкрасьці	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	і	і	CCONJ	CC	_	9	cc	9:cc	_
8	імаверна	імаверна	ADV	RB	Degree=Pos	9	advmod	9:advmod	_
9	забіты	забіць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	conj	0:root|6:conj	_
10	былы	былы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	_
11	міністар	міністар	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	6:nsubj:pass	_
12	унутраных	унутраны	ADJ	JJL	Case=Gen|Degree=Pos|Number=Plur	13	amod	13:amod	_
13	справаў	справа	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	11	nmod	11:nmod:gen	_
14	Беларусі	Беларусь	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	nmod	13:nmod:gen	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	16	punct	16:punct	_
16	дзяяч	дзяяч	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	conj	6:nsubj:pass|11:conj	_
17	апазыцыі	апазыцыя	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	16	nmod	16:nmod:gen	_
18	генэрал	генэрал	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	11	appos	11:appos	_
19	Юры	Юры	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	18	appos	18:appos	_
20	Захаранка	Захаранка	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	19	flat:name	19:flat:name	SpaceAfter=No
21	…	…	PUNCT	PUNCT	_	6	punct	6:punct	_

~~~


