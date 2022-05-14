---
layout: base
title:  'Statistics of advmod in UD_Ancient_Hebrew-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Hebrew-PTNK: Relations: `advmod`

This relation is universal.

817 nodes (2%) are attached to their parents as `advmod`.

622 instances of `advmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96450428396573.

The following 10 pairs of parts of speech are connected with `advmod`: <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (610; 75% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (73; 9% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (51; 6% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (24; 3% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-PART.html">PART</a></tt> (20; 2% instances), <tt><a href="hbo_ptnk-pos-AUX.html">AUX</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (16; 2% instances), <tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="hbo_ptnk-pos-NUM.html">NUM</a></tt>-<tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-PART.html">PART</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 advmod	color:blue
1	_	ו	CCONJ	conj	_	3	cc	_	_
2	_	נהר	NOUN	subs	Gender=Masc|Number=Sing	3	nsubj	_	_
3	יֹצֵ֣א	יצא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbForm=Part	0	root	_	_
4	_	מן	ADP	prep	_	5	case	_	_
5	_	עדן	PROPN	nmpr	Number=Sing	3	obl	_	_
6	_	ל	ADP	prep	_	7	case	_	_
7	_	שׁקה	VERB	verb	HebBinyan=HIFIL|VerbForm=Inf	3	advcl	_	_
8	אֶת	את	ADP	prep	_	11	case	_	SpaceAfter=No
9	־	־	PUNCT	punct	_	8	punct	_	SpaceAfter=No
10	_	ה	DET	art	_	11	det	_	_
11	_	גן	NOUN	subs	Number=Sing	7	obj	_	_
12	_	ו	CCONJ	conj	_	15	cc	_	_
13	_	מן	ADP	prep	_	14	case	_	_
14	_	שׁם	ADV	advb	_	15	advmod	_	_
15	יִפָּרֵ֔ד	פרד	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=NIFAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	conj	_	_
16	_	ו	CCONJ	conj	_	20	cc	_	_
17	_	היה	AUX	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	20	cop	_	_
18	_	ל	ADP	prep	_	20	case	_	_
19	_	ארבע	NUM	subs	Gender=Fem|Number=Sing|NumType=Card	20	nummod	_	_
20	רָאשִֽׁים	ראשׁ	NOUN	subs	Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No
21	׃	׃	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	אַךְ	אך	ADV	advb	_	3	advmod	_	SpaceAfter=No
2	־	־	PUNCT	punct	_	1	punct	_	SpaceAfter=No
3	בָּשָׂ֕ר	בשׂר	NOUN	subs	Gender=Masc|Number=Sing	10	obj	_	_
4	_	ב	ADP	prep	_	5	case	_	_
5	_	נפשׁ	NOUN	subs	Gender=Fem|Number=Sing	3	nmod	_	_
6	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
7	_	דם	NOUN	subs	Gender=Masc|Number=Sing	5	appos	_	_
8	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	_
9	לֹ֥א	לא	ADV	nega	Polarity=Neg	10	advmod	_	_
10	תֹאכֵֽלוּ	אכל	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
11	׃	׃	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	חפר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	בְּאֵ֣ר	באר	NOUN	subs	Gender=Fem|Number=Sing	2	obj	_	_
4	אַחֶ֔רֶת	אחר	ADJ	adjv	Gender=Fem|Number=Sing	3	amod	_	_
5	_	ו	CCONJ	conj	_	6	cc	_	_
6	_	ריב	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
7	גַּם	גם	ADV	advb	_	10	advmod	_	SpaceAfter=No
8	־	־	PUNCT	punct	_	7	punct	_	SpaceAfter=No
9	_	על	ADP	prep	_	10	case	_	_
10	_	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
11	_	ו	CCONJ	conj	_	12	cc	_	_
12	_	קרא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
13	_	שׁם	NOUN	subs	Gender=Masc|Number=Sing	12	obj	_	_
14	_	היא	PRON	prn	Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	שִׂטְנָֽה	שׂטנה	PROPN	nmpr	Number=Sing	12	xcomp	_	SpaceAfter=No
16	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


