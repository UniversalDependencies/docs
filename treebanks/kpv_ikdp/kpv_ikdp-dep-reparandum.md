---
layout: base
title:  'Statistics of reparandum in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `reparandum`

This relation is universal.

13 nodes (1%) are attached to their parents as `reparandum`.

13 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 11 pairs of parts of speech are connected with `reparandum`: <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 15% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (2; 15% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 reparandum	color:blue
1	Воліс	волыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	же	жӧ	PART	Pcle	_	1	advmod	_	OrigLang=ru
3	тундраас	тундра	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obl	_	OrigLang=ru|SpaceAfter=No
4	,	,	PUNCT	CLB	_	9	punct	_	_
5	но	но	CCONJ	CC	_	9	cc	_	OrigLang=ru
6	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	8	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	абу	абу	AUX	Pcle	Polarity=Neg	9	aux:neg	_	_
9	понравитчема	понравитчыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	acl	_	OrigLang=ru|SpaceAfter=No|Note=Check
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	12	aux:neg	_	_
12	вермы	вермыны	VERB	V	Connegative=Yes	9	conj	_	_
13	сыа	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
14	сэтшем	сэтшӧм	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	15	det	_	_
15	условиеясас	условие	NOUN	N	Case=Ill|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	obl	_	OrigLang=ru|SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 reparandum	color:blue
1	А	а	CCONJ	CC	_	8	cc	_	_
2	корейскей	корейскӧй	ADJ	A	Case=Nom|Number=Sing	5	reparandum	_	GTtags=Sg,Nom|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	корея	корея	NOUN	N	Case=Nom|Number=Sing	5	nmod:appos	_	GTtags=Sg,Nom
5	кывсэ	кыв	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Err/Dial,Sg,Acc,PxSg3,Err/Dial
6	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
7	куті	кутны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg1
8	велэдны	велӧдны	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=Err/Dial,Inf
9	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	10	nummod	_	GTtags=Card,Sg,Nom
10	во	во	NOUN	N	Case=Nom|Number=Sing	11	nmod	_	GTtags=Sg,Nom
11	сайын	сай	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	7	obl:tmod	_	GTtags=Relat,Sg,Ine
12	ачум	ас	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	6	det	_	GTtags=Refl,Sg1,Err/Dial,Nom|SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	16	punct	_	_
14	но	но	CCONJ	CC	_	16	cc	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	14	punct	_	_
16	кӧсйысис	кӧсйысьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	7	conj	_	GTtags=Refl,Ind,Prt1,Sg3
17	сідз	сідзи	ADV	Adv	AdvType=Man	16	advmod	_	GTtags=Manner|SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 reparandum	color:blue
1	Из	из	PROPN	N	Case=Nom|Number=Sing	4	obl	_	_
2	сае	сайын	ADP	Po	Case=Ill|Number=Sing	1	case	_	_
3	токо	токо	ADV	Adv	_	4	advmod	_	OrigLang=ru
4	ветлала	ветлыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	потому	потому	SCONJ	CS	_	11	mark	_	Lang=ru
7	что	что	SCONJ	CS	_	6	goeswith	_	Lang=ru
8	мӧд	мӧд	DET	Det	Case=Nom|Number=Sing|NumType=Ord	10	reparandum	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	мӧдэд	мӧдӧд	ADJ	A	Case=Nom|NumType=Ord	11	amod	_	_
11	луныс	лун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	advcl	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	да	да	PART	Pcle	_	11	advmod	_	OrigLang=ru|SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	11	nmod	_	_
16	сэн	сэн	ADV	Adv	_	18	advmod:lmod	_	_
17	нин	нин	ADV	Adv	_	18	advmod:tmod	_	_
18	воссис	воссьыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	advcl	_	_
19	нин	нин	ADV	Adv	_	18	advmod:tmod	_	SpaceAfter=No
20	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


