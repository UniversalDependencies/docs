---
layout: base
title:  'Statistics of nummod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `nummod`

This relation is universal.

39 nodes (4%) are attached to their parents as `nummod`.

38 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (27; 69% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (4; 10% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Миян	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
2	семяын	семя	NOUN	N	Case=Ine|Number=Sing	0	root	_	Lang=Mixed
3	дас	дас	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	морт	морт	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	рӧдитчылі	рӧдитчывны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Lang=Mixed
3	одиннадцатого	одиннадцать	ADJ	A	Case=Gen|Number=Sing	4	amod	_	Lang=Rus
4	мая	мая	NOUN	N	Case=Gen|Number=Sing	2	obl	_	Lang=Rus
5	тысяча	тысяча	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	Lang=Rus|Note=Check
6	девятьсот	девятьсот	NUM	Num	NumType=Card	7	compound	_	Lang=Rus
7	шестьдесят	шестьдесят	NUM	Num	NumType=Card	8	compound	_	Lang=Rus
8	второй	второй	ADJ	A	Case=Nom|Number=Sing	4	amod	_	Lang=Rus
9	год	год	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	Lang=Mixed
10	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	9	case	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
2	ае	ай	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	_
3	пырема	пырны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	тридцеть	тридцать	NUM	Num	Case=Nom|NumType=Card	5	nummod	_	Lang=Rus
5	седьмой	седьмой	ADJ	A	Case=Nom|Number=Sing	6	amod	_	Lang=Rus
6	годын	год	NOUN	N	Case=Ine|Number=Sing	3	obl	_	Lang=Mixed
7	в	в	ADP	Pr	_	9	case	_	Lang=Rus
8	Ненецкий	ненецкӧй	ADJ	A	Case=Nom|Number=Sing	9	amod	_	Lang=Rus
9	олень-совхоз	олень-совхоз	NOUN	N	Case=Nom|Number=Sing	3	obl	_	Lang=Rus|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


