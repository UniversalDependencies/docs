---
layout: base
title:  'Statistics of punct in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `punct`

This relation is universal.

529 nodes (23%) are attached to their parents as `punct`.

295 instances of `punct` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61814744801512.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (259; 49% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (96; 18% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (26; 5% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (24; 5% instances), <tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (24; 5% instances), <tt><a href="kpv_ikdp-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (22; 4% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (21; 4% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (20; 4% instances), <tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (9; 2% instances), <tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (9; 2% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (8; 2% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (4; 1% instances), <tt><a href="kpv_ikdp-pos-ADP.html">ADP</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="kpv_ikdp-pos-X.html">X</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt>-<tt><a href="kpv_ikdp-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 punct	color:blue
1	Мама	мама	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	OrigLang=ru
2	уджалӧ	уджавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	колхозын	колхоз	NOUN	N	Case=Ine|Number=Sing	2	obl	_	OrigLang=ru|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 punct	color:blue
1	Миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	nmod	_	_
2	семяын	семя	NOUN	N	Case=Ine|Number=Sing	0	root	_	OrigLang=ru
3	дас	дас	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	морт	морт	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 punct	color:blue
1	Пока	пока	ADV	Adv	_	4	advmod	_	_
2	лёк	лёк	ADJ	A	Case=Nom|Number=Sing	4	nsubj	_	_
3	из	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg	4	aux:neg	_	_
4	ло	лоны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	но	но	CCONJ	CC	_	13	cc	_	OrigLang=ru|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	пока	пока	ADV	Adv	_	13	advmod	_	OrigLang=ru|SpaceAfter=No
9	,	,	PUNCT	CLB	_	13	punct	_	_
10	не	не	PART	Pcle	Polarity=Neg	11	advmod	_	OrigLang=ru
11	то	то	PART	Pcle	_	13	advmod	_	OrigLang=ru
12	что	что	PRON	Pron	_	11	goeswith	_	Lang=ru
13	лёк-а	лёк	ADJ	A	Case=Nom|Number=Sing	4	conj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


