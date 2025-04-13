---
layout: base
title:  'Statistics of aux:neg in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="kpv_ikdp-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="kpv_ikdp-dep-aux-cnd.html">aux:cnd</a></tt>.

4 nodes (0%) are attached to their parents as `aux:neg`.

2 instances of `aux:neg` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `aux:neg`: <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (2; 50% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:neg	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	GTtags=CC|OrigLang=ru
2	эні	ӧні	ADV	Adv	_	6	advmod:tmod	_	GTtags=Adv
3	миян	ме	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	GTtags=Pron,Pers,Pl1,Gen
4	вӧлэсьтсюнум	вӧлэсьт	NOUN	N	Case=Ela|Number=Plur|Number[psor]=Sing|Person[psor]=1	5	nmod	_	GTtags=N,Sg,Ela,PxPl1|OrigLang=ru
5	ветлысь	ветлыны	VERB	V	Case=Nom|Nomzr=Ag|Number=Sing	6	nsubj	_	GTtags=V,IV,Der,Der/ысь,ActPrsPtc
6	никод	некод	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	0	root	_	GTtags=Err/Dial,Pron,Neg,Sg,Nom
7	абу	абу	AUX	Pcle	Polarity=Neg	6	aux:neg	_	GTtags=V,Neg,Cop,Ind,Sg|SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:neg	color:blue
1	Куимсэ	куим	NUM	Num	Case=Nom|Clitic=So|Number=Sing|NumType=Card	0	root	_	GTtags=Card,Sg,Nom,Clt/сӧ,Err/Dial
2	ӧттшӧтш	ӧттшӧтш	ADV	Adv	_	1	orphan	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	6	punct	_	_
4	мыйла	мыйла	SCONJ	CS	_	6	mark	_	_
5	ная	ная	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	6	nsubj	_	GTtags=Dem,Pl,Nom,Err/Dial
6	ӧткойдэсь	ӧткодь	ADJ	A	Number[subj]=Plur	1	advcl	_	GTtags=Cop,Pl,Err/Dial|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	11	punct	_	_
8	но	но	CCONJ	CC	_	11	cc	_	_
9	абу	абу	AUX	Pcle	Polarity=Neg	11	aux:neg	_	GTtags=Aux,Neg
10	правоясас	право	NOUN	N	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl:lmod	_	GTtags=Pl,Ine,PxSg3,So/CP
11	равнэйэсь	равнэй	ADJ	A	Number[subj]=Plur	6	conj	_	GTtags=Cop,Pl|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux:neg	color:blue
1	Ну	ну	PART	Pcle	_	3	cc	_	OrigLang=ru|SpaceAfter=No|Note=CheckAll
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	палялі	палявны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	5	amod	_	_
5	местэам	местӧ	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	OrigLang=ru|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	а	а	CCONJ	CC	_	9	cc	_	OrigLang=ru
8	мӧд	мӧд	PRON	Pron	PronType=Dem	9	det	_	_
9	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	acl	_	_
10	ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
11	уже	уже	ADV	Adv	_	15	advmod:tmod	_	OrigLang=ru|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	абу	абу	AUX	Pcle	Polarity=Neg	15	aux:neg	_	_
14	мӧд	мӧд	PRON	Pron	PronType=Dem	15	det	_	_
15	луннас-а	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	csubj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	18	det	_	_
18	луннас	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	conj	_	_
19	же	жӧ	PART	Pcle	_	18	advmod	_	OrigLang=ru
20	вот	вот	PART	Pcle	_	22	advmod	_	OrigLang=ru|SpaceAfter=No
21	,	,	PUNCT	CLB	_	20	punct	_	_
22	тытэн	тытэн	ADV	Adv	_	3	advcl	_	_
23	нин	нин	ADV	Adv	_	22	advmod:tmod	_	_
24	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	22	cop	_	SpaceAfter=No
25	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


