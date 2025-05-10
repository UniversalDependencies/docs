---
layout: base
title:  'Statistics of compound in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="kpv_ikdp-dep-compound-nn.html">compound:nn</a></tt>.

12 nodes (1%) are attached to their parents as `compound`.

12 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08333333333333.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (3; 25% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Медводзсэ	водз	ADV	Adv	Clitic=So|Degree=Sup	3	advmod	_	GTtags=Superl,Clt/сӧ,Err/Dial
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg1,Nom
3	помалі	помавны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg1
4	Красноборса	красноборса	ADJ	A	Case=Nom|Number=Sing	6	amod	_	GTtags=Sg,Nom
5	шӧр	шӧр	NOUN	N	Case=Nom|NounType=Relat|Number=Sing	6	compound	_	GTtags=Relat,Sg,Nom
6	школа	школа	NOUN	N	Case=Nom|Number=Sing	3	obj	_	GTtags=Sg,Nom|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Тае	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	det	_	GTtags=Dem,Sg,Nom,Err/Dial
2	вот	вот	ADV	Adv	_	9	discourse	_	GTtags=Parenthetic|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	кызь	кызь	NUM	Num	Case=Nom|Number=Sing|NumType=Card	5	compound	_	GTtags=Card,Sg,Nom
5	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	9	nummod	_	GTtags=Card,Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	хах	хах	INTJ	Interj	_	9	discourse	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	7	punct	_	_
9	вонас	во	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obl	_	GTtags=Sg,Ins,PxSg3,So/CP
10	олэмад	овны	VERB	V	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=2|VerbForm=Vnoun	12	advcl	_	GTtags=Err/Dial,Der,Der/ӧм,Der/NomAct,N,Sg,Ine|PxSg2
11	мый	мый	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	12	nsubj	_	GTtags=Interr,Sg,Nom
12	лоис	лоны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
13	?	?	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	А	а	CCONJ	CCb	_	4	cc	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	шестого	шестого	ADJ	A	_	4	amod	_	_
4	сентября	сентябрь	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Src/F,Sg,Der,Der/ProprietiveMod,A,Sg,Nom|Lang=ru|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	девяносто	девяносто	NUM	Num	_	7	compound	_	_
7	второй	второй	ADJ	A	_	8	amod	_	_
8	годын	год	NOUN	N	Case=Ine|Number=Sing	4	conj	_	GTtags=Sg,Ine|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


