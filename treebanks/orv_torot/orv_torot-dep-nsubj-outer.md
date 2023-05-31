---
layout: base
title:  'Statistics of nsubj:outer in UD_Old_East_Slavic-TOROT'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-TOROT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="orv_torot-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_torot-dep-nsubj-pass.html">nsubj:pass</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

7 instances of `nsubj:outer` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.875.

The following 5 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-PRON.html">PRON</a></tt> (3; 38% instances), <tt><a href="orv_torot-pos-AUX.html">AUX</a></tt>-<tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="orv_torot-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_torot-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	вьси	вьсь	PRON	Px	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	ref=52
2	иже	иже	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	6	nsubj:outer	_	ref=52
3	ти	тыи	PRON	Pd	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	ref=52
4	въ	въ	ADP	R-	_	5	case	_	ref=52
5	слѣдъ	слѣдъ	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	6	obl	_	ref=52
6	идѹще	ити	VERB	V-	Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	1	acl	_	ref=52
7	поꙗхѹ	пѣти	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=52

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	и	и	CCONJ	C-	_	6	cc	_	ref=82.11
2	бѣ	быти	AUX	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	ref=82.11
3	дворъ	дворъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:outer	_	ref=82.11
4	его	и	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	det	_	ref=82.11
5	идеже	идѣже	ADV	Dq	PronType=Rel	6	advcl	_	ref=82.11
6	есть	быти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=82.12
7	цр҃ки	цьркы	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	ref=82.12
8	с҃тая	святыи	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	ref=82.12
9	б҃ца	богородица	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	7	appos	_	ref=82.12
10	юже	иже	PRON	Pr	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	11	obj	_	ref=82.12
11	сдѣла	съдѣлати	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	acl	_	ref=82.12
12	володимеръ	володимѣръ	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	ref=82.12

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 nsubj:outer	color:blue
1	ѡ	о	ADP	R-	_	2	case	_	ref=203.18
2	семь	сии	PRON	Pd	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	ref=203.18
3	свершаѥт	съвьршати	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=203.18
4	сѧ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	ref=203.18
5	любы	любы	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	ref=203.18
6	да	да	SCONJ	G-	_	8	mark	_	ref=203.18
7	достоянье	достояние	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	ref=203.19
8	имам	имѣти	VERB	V-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	ref=203.19
9	в	въ	ADP	R-	_	10	case	_	ref=203.19
10	дн҃ь	дьнь	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	ref=203.19
11	судныи	судьныи	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	ref=203.19
12	да	да	SCONJ	G-	_	13	mark	_	ref=203.19
13	якоже	якоже	ADV	Dq	PronType=Rel	3	advcl	_	ref=203.19
14	ѡнъ	онъ	PRON	Pd	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	ref=203.19
15	ѥсть	быти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	ref=203.20
16	и	и	ADV	Df	_	17	advmod	_	ref=203.20
17	мы	мы	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	13	nsubj:outer	_	ref=203.20
18	ѥсмы	быти	AUX	V-	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	ref=203.20
19	в	въ	ADP	R-	_	20	case	_	ref=203.20
20	мирѣ	миръ	NOUN	Nb	Case=Loc|Gender=Masc|Number=Sing	13	obl	_	ref=203.20
21	семь	сии	DET	Pd	Case=Loc|Gender=Masc|Number=Sing	20	det	_	ref=203.20

~~~


