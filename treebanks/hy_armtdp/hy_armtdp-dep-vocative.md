---
layout: base
title:  'Statistics of vocative in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `vocative`

This relation is universal.

9 nodes (0%) are attached to their parents as `vocative`.

9 instances of `vocative` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (6; 67% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 vocative	color:blue
1	«	«	PUNCT	_	_	13	punct	_	SpaceAfter=No
2	Կեղտոտ	կեղտոտ	ADJ	_	Degree=Pos	3	amod	_	_
3	անասուն	անասուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	13	vocative	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	SpaceAfter=No
5	—	—	PUNCT	_	_	6	punct	_	_
6	գոչեց	գոչել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	13	parataxis	_	_
7	Սիմեոնը	Սիմեոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	SpaceAfter=No
9	—	—	PUNCT	_	_	6	punct	_	_
10	ինչպես	ինչպես	ADV	_	PronType=Int	13	advmod	_	_
11	՞	՞	PUNCT	_	_	10	punct	_	_
12	ես	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	համարձակվում	համարձակվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
14	ինձ	ես	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	17	iobj	_	_
15	փախչելու	փախչել	VERB	_	Case=Dat|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	16	nmod:poss	_	_
16	առաջարկ	առաջարկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	17	obj	_	_
17	անել	անել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
18	»	»	PUNCT	_	_	13	punct	_	SpaceAfter=No
19	:	:	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 2 vocative	color:blue
1	—	—	PUNCT	_	_	23	punct	_	_
2	Զավակներս	զավակ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur|Number[psor]=Sing|Person[psor]=1	23	vocative	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	—	—	PUNCT	_	_	5	punct	_	_
5	սկսեց	սկսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	23	parataxis	_	_
6	Սիմեոնը	Սիմեոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	SpaceAfter=No
8	—	—	PUNCT	_	_	5	punct	_	_
9	ի	ի	ADP	_	AdpType=Prep	12	case	_	_
10	սեր	սեր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	fixed	_	_
11	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	12	det:poss	_	_
12	տիրոջ	տեր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	23	obl	_	SpaceAfter=No
13	՝	՝	PUNCT	_	_	14	punct	_	_
14	Հիսուս	Հիսուս	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	12	appos	_	_
15	Քրիստոսի	Քրիստոս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	14	flat	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	կայսեր	կայսր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing|Style=Arch	12	conj	_	_
18	ու	ու	CCONJ	_	_	20	cc	_	_
19	հռոմեացի	հռոմեացի	ADJ	_	_	20	amod	_	_
20	ժողովրդի	ժողովուրդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	12	conj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	մենք	մենք	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	23	nsubj	_	_
23	պատրաստ	պատրաստ	ADJ	_	Degree=Pos	0	root	_	_
24	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	cop	_	_
25	անել	անել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	23	xcomp	_	_
26	ավելին	ավելի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	25	obj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	քան	քան	SCONJ	_	_	29	mark	_	_
29	անում	անել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	25	advcl	_	_
30	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	29	aux	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	պատրաստ	պատրաստ	ADJ	_	Degree=Pos	23	conj	_	_
33	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	32	cop	_	_
34	կրել	կրել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	32	xcomp	_	_
35	ավելի	ավելի	ADV	_	Degree=Cmp	36	advmod	_	_
36	մեծ	մեծ	ADJ	_	Degree=Pos	37	amod	_	_
37	զրկանքներ	զրկանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	34	obj	_	SpaceAfter=No
38	,	,	PUNCT	_	_	40	punct	_	_
39	քան	քան	SCONJ	_	_	40	mark	_	_
40	կրում	կրել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	36	advcl	_	_
41	ենք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	40	aux	_	SpaceAfter=No
42	:	:	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 vocative	color:blue
1	–	–	PUNCT	_	_	15	punct	_	SpaceAfter=No
2	Պարոն	պարոն	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	15	vocative	_	_
3	Նեդոլյան	Նեդոլյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	եթե	եթե	SCONJ	_	_	6	mark	_	_
6	ամփոփենք	ամփոփել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	_
7	այն	այն	PRON	_	Distance=Dist|Number=Sing|PronType=Dem	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	11	nsubj	_	_
10	տեղի	տեղի	ADV	_	Style=Arch	11	compound:lvc	_	_
11	ունեցավ	ունենալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	7	acl:relcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	ի	ի	ADP	_	AdpType=Prep	15	discourse	_	_
14	վերջո	վերջ	NOUN	_	Animacy=Nhum|Case=Gen|Definite=Ind|Number=Sing|Style=Arch	13	fixed	_	_
15	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	0	root	_	_
16	՞	՞	PUNCT	_	_	15	punct	_	_
17	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	15	cop	_	SpaceAfter=No
18	։	։	PUNCT	_	_	15	punct	_	_

~~~


