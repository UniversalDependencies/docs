---
layout: base
title:  'Statistics of obl:lmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="kpv_ikdp-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_ikdp-dep-obl-tmod.html">obl:tmod</a></tt>.

21 nodes (1%) are attached to their parents as `obl:lmod`.

11 instances of `obl:lmod` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 3 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (17; 81% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:lmod	color:blue
1	Харей	харей	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sg,Nom
2	юр	юр	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	выытіыс	выв	NOUN	N	Case=Tra|NounType=Relat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl:lmod	_	GTtags=Relat,Sg,Err/Dial,Tra,PxSg3,So/CP
4	чеччис	чеччыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
5	да	да	CCONJ	CC	_	9	cc	_	_
6	кокыс	кок	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	GTtags=Sg,Nom,PxSg3
7	на	на	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time
8	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	9	aux:neg	_	GTtags=Neg,Ind,Prt1,Sg3
9	сидзоолы	сидзооны	VERB	V	Connegative=Yes	4	conj	_	GTtags=ConNeg|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 obl:lmod	color:blue
1	Но	но	INTJ	Interj	_	12	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	Ижмаыслэн	Ижма	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod:poss	_	GTtags=Prop,Sg,Err/Dial,Gen,PxSg3,So/PC
4	ю	ю	NOUN	N	Case=Nom|Number=Sing	12	obl:lmod	_	GTtags=Sg,Nom
5	кузяыс	кузя	ADP	Adp	AdpType=Post|Number[psor]=Sing|Person[psor]=3	4	case	_	GTtags=Po,PxSg3
6	сиктъяс	сикт	NOUN	N	Case=Nom|Number=Plur	7	nmod	_	GTtags=Pl,Nom
7	дорас	дор	NOUN	N	Case=Ine|NounType=Relat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	appos	_	GTtags=Relat,Sg,Ine,PxSg3,So/CP|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	ӧӧ	оо	INTJ	Interj	_	12	discourse	_	GTtags=Err/Dial|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	9	punct	_	_
11	берегыс	берег	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=Sg,Nom,PxSg3
12	изъя	изъя	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:lmod	color:blue
1	Ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	квайтэнэсь	квайтӧн	ADV	Adv	Case=Nom|Number[subj]=Plur|NumType=Dist	0	root	_	_
3	семьяанум	семьяанум	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Plur|Person[psor]=1	2	obl:lmod	_	OrigLang=ru|SpaceAfter=No
4	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


