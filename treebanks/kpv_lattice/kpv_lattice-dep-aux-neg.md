---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-aux.html">aux</a></tt>.

85 nodes (2%) are attached to their parents as `aux:neg`.

81 instances of `aux:neg` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41176470588235.

The following 5 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (73; 86% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (6; 7% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	_
2	позь	позьны	VERB	V	Connegative=Yes	0	root	_	_
3	бӧрйыны	бӧрйыны	VERB	V	VerbForm=Inf	2	xcomp	_	_
4	ни	ни	PART	Pcle	Polarity=Neg	5	advmod:neg	_	_
5	Питер	Питер	NOUN	N	Case=Nom|Number=Sing	3	obj	_	Lang=Mixed
6	Смитӧс	Смит	NOUN	N	Case=Acc|Number=Sing	5	flat:name	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ни	ни	PART	Pcle	Polarity=Neg	9	advmod:neg	_	_
9	Мери	Мери	NOUN	N	Case=Nom|Number=Sing	5	conj	_	Lang=Mixed
10	Браунӧс	Браун	NOUN	N	Case=Acc|Number=Sing	9	flat:name	_	Lang=Mixed|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux:neg	color:blue
1	Мӧд	мӧд	PRON	Pron	PronType=Dem	2	nmod	_	_
2	петанін	петанін	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
3	сэтысь	сэтысь	ADV	Adv	Case=Ela	2	obl:lmod	_	_
4	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	_
5	вӧв	вӧвны	AUX	V	Connegative=Yes	2	cop	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 aux:neg	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	шензи	шензьыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	нӧшта	нӧшта	ADV	Adv	_	2	advmod:tmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	кор	кор	SCONJ	CS	_	6	mark	_	_
6	тӧдмалі	тӧдмавны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	2	advcl	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	12	punct	_	_
8	мый	мый	SCONJ	CS	_	12	mark	_	_
9	шерыслӧн	шер	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nmod	_	_
10	туйыс	туй	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	зэв	зэв	ADV	Adv	_	12	advmod:deg	_	_
12	векньыдик	векньыдик	ADJ	A	Case=Nom|Derivation=Ik|Number=Sing	6	ccomp	_	_
13	и	и	PART	Pcle	_	12	advmod	_	_
14	вӧлӧма	вӧвны	AUX	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	12	aux:neg	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


