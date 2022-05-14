---
layout: base
title:  'Statistics of xcomp in UD_Ancient_Hebrew-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Hebrew-PTNK: Relations: `xcomp`

This relation is universal.

204 nodes (1%) are attached to their parents as `xcomp`.

193 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.20098039215686.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (84; 41% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (59; 29% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt> (49; 24% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt> (11; 5% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 xcomp	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	היה	AUX	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	כִּֽי	כי	SCONJ	conj	_	5	mark	_	SpaceAfter=No
4	־	־	PUNCT	punct	_	3	punct	_	SpaceAfter=No
5	הֵחֵ֣ל	חלל	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=HIFIL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	advcl	_	_
6	_	ה	DET	art	_	7	det	_	_
7	_	אדם	NOUN	subs	Gender=Masc|Number=Sing	5	nsubj	_	_
8	_	ל	ADP	prep	_	9	case	_	_
9	_	רבב	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	5	xcomp	_	_
10	עַל	על	ADP	prep	_	12	case	_	SpaceAfter=No
11	־	־	PUNCT	punct	_	10	punct	_	SpaceAfter=No
12	פְּנֵ֣י	פנה	NOUN	subs	Gender=Masc|Number=Plur	9	obl	_	_
13	_	ה	DET	art	_	14	det	_	_
14	_	אדמה	NOUN	subs	Gender=Fem|Number=Sing	12	compound:smixut	_	_
15	_	ו	CCONJ	conj	_	17	cc	_	_
16	_	בת	NOUN	subs	Gender=Fem|Number=Plur	17	nsubj	_	_
17	יֻלְּד֥וּ	ילד	VERB	verb	Aspect=Perf|HebBinyan=PUAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	2	conj	_	_
18	_	ל	ADP	prep	_	19	case	_	_
19	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	obl	_	_
20	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 xcomp	color:blue
1	זָכָ֥ר	זכר	ADJ	adjv	Gender=Masc|Number=Sing	4	xcomp	_	_
2	_	ו	CCONJ	conj	_	3	cc	_	_
3	_	נקבה	NOUN	subs	Gender=Fem|Number=Sing	1	conj	_	_
4	_	ברא	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
5	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obj	_	_
6	_	ו	CCONJ	conj	_	7	cc	_	_
7	_	ברך	VERB	verb	Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	_
8	_	את	ADP	prep	_	9	case	_	_
9	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	obj	_	_
10	_	ו	CCONJ	conj	_	11	cc	_	_
11	_	קרא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	_	_
12	אֶת	את	ADP	prep	_	14	case	_	SpaceAfter=No
13	־	־	PUNCT	punct	_	12	punct	_	SpaceAfter=No
14	_	שׁם	NOUN	subs	Gender=Masc|Number=Sing	11	obj	_	_
15	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	nmod:poss	_	_
16	אָדָ֔ם	אדם	NOUN	subs	Gender=Masc|Number=Sing	11	xcomp	_	_
17	_	ב	ADP	prep	_	18	case	_	_
18	_	יום	NOUN	subs	Gender=Masc|Number=Sing	11	obl	_	_
19	_	ברא	VERB	verb	HebBinyan=NIFAL|VerbForm=Inf	18	acl	_	_
20	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	_
21	׃	׃	PUNCT	punct	_	4	punct	_	_
22	ס	ס	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 xcomp	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	קרא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	ה	DET	art	_	4	det	_	_
4	_	אדם	NOUN	subs	Gender=Masc|Number=Sing	2	nsubj	_	_
5	שֵׁ֥ם	שׁם	NOUN	subs	Gender=Masc|Number=Sing	2	obj	_	_
6	_	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	5	compound:smixut	_	_
7	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
8	חַוָּ֑ה	חוה	PROPN	nmpr	Gender=Fem|Number=Sing	2	xcomp	_	_
9	כִּ֛י	כי	SCONJ	conj	_	12	mark	_	_
10	הִ֥וא	היא	PRON	prps	Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
11	הָֽיְתָ֖ה	היה	AUX	verb	Aspect=Perf|Gender=Fem|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	12	cop	_	_
12	אֵ֥ם	אם	NOUN	subs	Gender=Fem|Number=Sing	2	advcl	_	_
13	כָּל	כל	NOUN	subs	Gender=Masc|Number=Sing	12	compound:smixut	_	SpaceAfter=No
14	־	־	PUNCT	punct	_	15	punct	_	SpaceAfter=No
15	חָֽי	חי	ADJ	adjv	Gender=Masc|Number=Sing	13	compound:smixut	_	SpaceAfter=No
16	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


