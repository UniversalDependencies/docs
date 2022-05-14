---
layout: base
title:  'Statistics of nmod in UD_Ancient_Hebrew-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Hebrew-PTNK: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="hbo_ptnk-dep-nmod-poss.html">nmod:poss</a></tt>.

163 nodes (0%) are attached to their parents as `nmod`.

162 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71779141104294.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (92; 56% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (24; 15% instances), <tt><a href="hbo_ptnk-pos-NUM.html">NUM</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (15; 9% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="hbo_ptnk-pos-NUM.html">NUM</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="hbo_ptnk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hbo_ptnk-pos-ADV.html">ADV</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="hbo_ptnk-pos-PART.html">PART</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	חֲמֵ֨שׁ	חמשׁ	NUM	subs	Number=Sing|NumType=Card	3	nummod	_	_
2	עֶשְׂרֵ֤ה	עשׂרה	NUM	subs	Number=Sing|NumType=Card	1	flat	_	_
3	אַמָּה֙	אמה	NOUN	subs	Gender=Fem|Number=Sing	7	obl	_	_
4	_	מן	ADP	prep	_	6	case	_	_
5	_	ל	ADP	prep	_	6	case	_	_
6	_	מעל	NOUN	subs	Number=Sing	3	nmod	_	_
7	גָּבְר֖וּ	גבר	VERB	verb	Aspect=Perf|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
8	_	ה	DET	art	_	9	det	_	_
9	_	מים	NOUN	subs	Gender=Masc|Number=Plur	7	nsubj	_	_
10	_	ו	CCONJ	conj	_	11	cc	_	_
11	_	כסה	VERB	verb	Gender=Masc|HebBinyan=PUAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	_
12	_	ה	DET	art	_	13	det	_	_
13	_	הר	NOUN	subs	Gender=Masc|Number=Plur	11	nsubj	_	_
14	׃	׃	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 16 nmod	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	בוא	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	נֹ֗חַ	נח	PROPN	nmpr	Gender=Masc|Number=Sing	2	nsubj	_	_
4	_	ו	CCONJ	conj	_	5	cc	_	_
5	_	בן	NOUN	subs	Gender=Masc|Number=Plur	3	conj	_	_
6	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
7	_	ו	CCONJ	conj	_	8	cc	_	_
8	_	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	5	conj	_	_
9	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod:poss	_	_
10	_	ו	CCONJ	conj	_	11	cc	_	_
11	_	אשׁה	NOUN	subs	Gender=Fem|Number=Plur	5	conj	_	_
12	־	־	PUNCT	punct	_	13	punct	_	SpaceAfter=No
13	_	בן	NOUN	subs	Gender=Masc|Number=Plur	11	compound:smixut	_	_
14	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
15	_	את	ADP	prep	_	16	case	_	_
16	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
17	אֶל	אל	ADP	prep	_	20	case	_	SpaceAfter=No
18	־	־	PUNCT	punct	_	17	punct	_	SpaceAfter=No
19	_	ה	DET	art	_	20	det	_	_
20	_	תבה	NOUN	subs	Gender=Fem|Number=Sing	2	obl	_	_
21	_	מן	ADP	prep	_	22	case	_	_
22	_	פנה	NOUN	subs	Gender=Masc|Number=Plur	2	obl	_	_
23	מֵ֥י	מים	NOUN	subs	Gender=Masc|Number=Plur	22	compound:smixut	_	_
24	_	ה	DET	art	_	25	det	_	_
25	_	מבול	NOUN	subs	Gender=Masc|Number=Sing	23	compound:smixut	_	_
26	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	_	ו	CCONJ	conj	_	5	cc	_	_
2	_	היה	AUX	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	_
3	_	שׁנים	NUM	subs	Number=Dual|NumType=Card	5	nsubj	_	_
4	_	הם	PRON	prn	Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	nmod	_	_
5	עֲרוּמִּ֔ים	ערום	ADJ	adjv	Gender=Masc|Number=Plur	0	root	_	_
6	_	ה	DET	art	_	7	det	_	_
7	_	אדם	NOUN	subs	Gender=Masc|Number=Sing	5	dislocated	_	_
8	_	ו	CCONJ	conj	_	9	cc	_	_
9	_	אשׁה	NOUN	subs	Gender=Fem|Number=Sing	7	conj	_	_
10	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
11	_	ו	CCONJ	conj	_	13	cc	_	_
12	_	לא	ADV	nega	Polarity=Neg	13	advmod	_	_
13	יִתְבֹּשָֽׁשׁוּ	בושׁ	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=HITPAEL|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	5	conj	_	SpaceAfter=No
14	׃	׃	PUNCT	punct	_	5	punct	_	_

~~~


