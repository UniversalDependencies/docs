---
layout: base
title:  'Statistics of csubj in UD_Ancient_Hebrew-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Hebrew-PTNK: Relations: `csubj`

This relation is universal.

23 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.43478260869565.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (10; 43% instances), <tt><a href="hbo_ptnk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="hbo_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-AUX.html">AUX</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="hbo_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="hbo_ptnk-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 csubj	color:blue
1	ו	ו	CCONJ	conj	_	2	cc	_	Ref=GEN_31.22
2	נגד	נגד	VERB	verb	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Ref=GEN_31.22
3	ל	ל	ADP	prep	_	4	case	_	Ref=GEN_31.22
4	לבן	לבן	PROPN	nmpr	Gender=Masc|Number=Sing	2	obl	_	Ref=GEN_31.22
5	ב	ב	ADP	prep	_	7	case	_	Ref=GEN_31.22
6	ה	ה	DET	art	PronType=Art	7	det	_	Ref=GEN_31.22
7	יום	יום	NOUN	subs	Gender=Masc|Number=Sing	2	obl	_	Ref=GEN_31.22
8	ה	ה	DET	art	PronType=Art	9	det	_	Ref=GEN_31.22
9	שׁלישׁי	שׁלישׁי	NUM	adjv	Gender=Masc|Number=Sing|NumType=Ord	7	nummod	_	Ref=GEN_31.22
10	כִּ֥י	כי	SCONJ	conj	_	11	mark	_	Ref=GEN_31.22
11	בָרַ֖ח	ברח	VERB	verb	Aspect=Perf|Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	csubj	_	Ref=GEN_31.22
12	יַעֲקֹֽב	יעקב	PROPN	nmpr	Gender=Masc|Number=Sing	11	nsubj	_	Ref=GEN_31.22|SpaceAfter=No
13	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_31.22

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 csubj	color:blue
1	ו	ו	CCONJ	conj	_	2	cc	_	Ref=GEN_44.7
2	אמר	אמר	VERB	verb	Gender=Masc|HebBinyan=PAAL|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Ref=GEN_44.7
3	אל	אל	ADP	prep	_	4	case	_	Ref=GEN_44.7
4	הוא	הוא	PRON	prn	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	obl	_	Ref=GEN_44.7
5	לָ֚מָּה	למה	PART	inrg	_	6	advmod	_	Ref=GEN_44.7
6	יְדַבֵּ֣ר	דבר	VERB	verb	Aspect=Imp|Gender=Masc|HebBinyan=PIEL|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Ref=GEN_44.7
7	אדון	אדון	NOUN	subs	Gender=Masc|Number=Sing	6	nsubj	_	Ref=GEN_44.7
8	אני	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	Ref=GEN_44.7
9	כ	כ	ADP	prep	_	11	case	_	Ref=GEN_44.7
10	ה	ה	DET	art	PronType=Art	11	det	_	Ref=GEN_44.7
11	דבר	דבר	NOUN	subs	Gender=Masc|Number=Plur	6	obl	_	Ref=GEN_44.7
12	ה	ה	DET	art	PronType=Art	13	det	_	Ref=GEN_44.7
13	אלה	אלה	PRON	prde	Number=Plur|PronType=Dem	11	det	_	Ref=GEN_44.7
14	חָלִ֨ילָה֙	חלילה	INTJ	intj	_	6	ccomp	_	Ref=GEN_44.7
15	ל	ל	ADP	prep	_	16	case	_	Ref=GEN_44.7
16	עבד	עבד	NOUN	subs	Gender=Masc|Number=Plur	14	obl	_	Ref=GEN_44.7
17	אתה	אתה	PRON	prn	Gender=Masc|Number=Sing|Person=2|PronType=Prs	16	nmod:poss	_	Ref=GEN_44.7
18	מן	מן	ADP	prep	_	19	case	_	Ref=GEN_44.7
19	עשׂה	עשׂה	VERB	verb	HebBinyan=PAAL|VerbForm=Inf	14	csubj	_	Ref=GEN_44.7
20	כ	כ	ADP	prep	_	22	case	_	Ref=GEN_44.7
21	ה	ה	DET	art	PronType=Art	22	det	_	Ref=GEN_44.7
22	דבר	דבר	NOUN	subs	Gender=Masc|Number=Sing	19	obl	_	Ref=GEN_44.7
23	ה	ה	DET	art	PronType=Art	24	det	_	Ref=GEN_44.7
24	זה	זה	PRON	prde	Gender=Masc|Number=Sing|PronType=Dem	22	det	_	Ref=GEN_44.7
25	׃	׃	PUNCT	punct	_	2	punct	_	Ref=GEN_44.7

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 csubj	color:blue
1	ו	ו	CCONJ	conj	_	5	cc	_	Ref=GEN_45.12
2	הנה	הנה	INTJ	intj	_	5	discourse	_	Ref=GEN_45.12
3	עין	עין	NOUN	subs	Gender=Fem|Number=Dual	5	nsubj	_	Ref=GEN_45.12
4	אתם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nmod:poss	_	Ref=GEN_45.12
5	רֹאֹ֔ות	ראה	VERB	verb	Gender=Fem|HebBinyan=PAAL|Number=Plur|VerbForm=Part	0	root	_	Ref=GEN_45.12
6	ו	ו	CCONJ	conj	_	7	cc	_	Ref=GEN_45.12
7	עין	עין	NOUN	subs	Gender=Fem|Number=Dual	3	conj	_	Ref=GEN_45.12
8	אח	אח	NOUN	subs	Gender=Masc|Number=Sing	7	compound:smixut	_	Ref=GEN_45.12
9	אני	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	8	nmod:poss	_	Ref=GEN_45.12
10	בִנְיָמִ֑ין	בנימן	PROPN	nmpr	Number=Sing	8	appos	_	Ref=GEN_45.12
11	כִּי	כי	SCONJ	conj	_	13	mark	_	Ref=GEN_45.12|SpaceAfter=No
12	־	־	PUNCT	punct	_	11	punct	_	Ref=GEN_45.12|SpaceAfter=No
13	פה	פה	NOUN	subs	Gender=Masc|Number=Sing	5	ccomp	_	Ref=GEN_45.12
14	אני	אני	PRON	prn	Number=Sing|Person=1|PronType=Prs	13	nmod:poss	_	Ref=GEN_45.12
15	ה	ה	SCONJ	art	_	16	mark	_	Ref=GEN_45.12
16	דבר	דבר	VERB	verb	Gender=Masc|HebBinyan=PIEL|Number=Sing|VerbForm=Part	13	csubj	_	Ref=GEN_45.12
17	אל	אל	ADP	prep	_	18	case	_	Ref=GEN_45.12
18	אתם	אתם	PRON	prn	Gender=Masc|Number=Plur|Person=2|PronType=Prs	16	obl	_	Ref=GEN_45.12
19	׃	׃	PUNCT	punct	_	5	punct	_	Ref=GEN_45.12

~~~


