---
layout: base
title:  'Statistics of csubj in UD_Ancient_Hebrew-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Hebrew-PTNK: Relations: `csubj`

This relation is universal.

24 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.45833333333333.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (11; 46% instances), <tt><a href="hbo_ptnk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-AUX.html">AUX</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 csubj	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	נגד	VERB	verb	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	ל	ADP	prep	_	4	case	_	_
4	_	לבן	PROPN	nmpr	Gender=Masc|Number=Sing	2	obl	_	_
5	_	ב	ADP	prep	_	7	case	_	_
6	_	ה	DET	art	_	7	det	_	_
7	_	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	_
8	_	ה	DET	art	_	9	det	_	_
9	_	שׁלישׁי	NUM	adjv	Gender=Masc|Number=Sing	7	nummod	_	_
10	כִּ֥י	כי	SCONJ	conj	_	11	mark	_	_
11	בָרַ֖ח	ברח	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	csubj	_	_
12	יַעֲקֹֽב	יעקב	PROPN	nmpr	Gender=Masc|Number=Sing	11	nsubj	_	SpaceAfter=No
13	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubj	color:blue
1	_	ו	CCONJ	conj	_	2	cc	_	_
2	_	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	אל	ADP	prep	_	4	case	_	_
4	_	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	_
5	לָ֚מָּה	למה	PART	inrg	_	6	advmod	_	_
6	יְדַבֵּ֣ר	דבר	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	_
7	_	אדון	NOUN	subs	Gender=Masc|Number=Sing	6	nsubj	_	_
8	_	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
9	_	כ	ADP	prep	_	11	case	_	_
10	_	ה	DET	art	_	11	det	_	_
11	_	דבר	NOUN	subs	Gender=Masc|Number=Plur	6	obl	_	_
12	_	ה	DET	art	_	13	det	_	_
13	_	אלה	PRON	prde	Number=Plur|PronType=Dem	11	det	_	_
14	חָלִ֨ילָה֙	חלילה	INTJ	intj	_	6	ccomp	_	_
15	_	ל	ADP	prep	_	16	case	_	_
16	_	עבד	NOUN	subs	Gender=Masc|Number=Plur	14	obl	_	_
17	_	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	16	nmod:poss	_	_
18	_	מן	ADP	prep	_	19	case	_	_
19	_	עשׂה	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	14	csubj	_	_
20	_	כ	ADP	prep	_	22	case	_	_
21	_	ה	DET	art	_	22	det	_	_
22	_	דבר	NOUN	subs	Gender=Masc|Number=Sing	19	obl	_	_
23	_	ה	DET	art	_	24	det	_	_
24	_	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	22	det	_	_
25	׃	׃	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 csubj	color:blue
1	_	ו	CCONJ	conj	_	5	cc	_	_
2	_	הנה	INTJ	intj	_	5	discourse	_	_
3	_	עין	NOUN	subs	Gender=Fem|Number=Dual	5	nsubj	_	_
4	_	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nmod:poss	_	_
5	רֹאֹ֔ות	ראה	VERB	verb	Gender=Fem|HebBinyan=PAAL|Number=Plur|VerbForm=Part	0	root	_	_
6	_	ו	CCONJ	conj	_	7	cc	_	_
7	_	עין	NOUN	subs	Gender=Fem|Number=Dual	3	conj	_	_
8	_	אח	NOUN	subs	Gender=Masc|Number=Sing	7	compound:smixut	_	_
9	_	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	_
10	בִנְיָמִ֑ין	בנימן	PROPN	nmpr	Number=Sing	8	appos	_	_
11	כִּי	כי	SCONJ	conj	_	13	mark	_	SpaceAfter=No
12	־	־	PUNCT	punct	_	11	punct	_	SpaceAfter=No
13	_	פה	NOUN	subs	Gender=Masc|Number=Sing	5	ccomp	_	_
14	_	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	13	nmod:poss	_	_
15	_	ה	SCONJ	art	_	16	mark	_	_
16	_	דבר	VERB	verb	Gender=Masc|HebBinyan=PIEL|Number=Sing|VerbForm=Part	13	csubj	_	_
17	_	אל	ADP	prep	_	18	case	_	_
18	_	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	16	obl	_	_
19	׃	׃	PUNCT	punct	_	5	punct	_	_

~~~


