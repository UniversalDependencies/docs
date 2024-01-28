---
layout: base
title:  'Statistics of advmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="koi_uh-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="koi_uh-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="koi_uh-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="koi_uh-dep-advmod-tmod.html">advmod:tmod</a></tt>.

40 nodes (4%) are attached to their parents as `advmod`.

30 instances of `advmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (31; 78% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (4; 10% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-DET.html">DET</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Висьтала	висьтавны	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1
2	тай	тай	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	8	punct	_	_
4	бур	бур	ADJ	_	Case=Nom|Number=Sing	5	amod	_	GTtags=Sg,Nom
5	олан	олан	NOUN	_	Case=Nom|Number=Sing	8	obj	_	GTtags=Sg,Nom
6	ӧтикӧ	ӧтикӧ	ADV	Num	Case=Ill|Number=Sing|NumType=Card	8	advmod	_	GTtags=Card,Der/MWN,N,Sg,Ill
7	эг	оз	AUX	_	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Past	8	aux:neg	_	GTtags=Neg,Ind,Prt1,Pl1
8	адззыв	адззывны	VERB	_	Connegative=Yes	1	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advmod	color:blue
1	Сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Dat
2	коліс	ковны	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	GTtags=Ind,Prt1,Sg3
3	басӧка	басӧка	ADV	_	_	4	advmod	_	_
4	лӧсьӧтны	лӧсьӧтны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
5	юрсисӧ	юрси	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	,	,	PUNCT	_	_	14	punct	_	_
7	но	но	CCONJ	_	_	14	cc	_	_
8	мылякӧ	мылякӧ	ADV	_	Definite=Ind	14	advmod	_	GTtags=Indef
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	det	_	GTtags=Pers,Sg3,Nom
10	лунӧ	лун	NOUN	_	Case=Ill|Number=Sing	14	obl:tmod	_	GTtags=Sg,Ill
11	сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obl	_	GTtags=Pers,Sg3,Dat
12	эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	14	aux:neg	_	GTtags=Prt1,3
13	вӧв	вӧвны	AUX	_	Connegative=Yes	14	cop	_	GTtags=ConNeg
14	охота	охота	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
15	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	GTtags=Pers,Sg3,Acc
16	керны	керны	VERB	_	VerbForm=Inf	14	advcl	_	GTtags=Inf|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Только	только	ADV	_	_	3	advmod	_	_
2	ылын	ыв	NOUN	N	Case=Ine|NounType=Relat	3	obl:lmod	_	GTtags=Spat,Ine
3	веськытлань	веськыт	ADJ	_	Case=Apr|Number=Sing	9	obl:lmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	самӧй	самӧй	ADV	_	_	6	advmod	_	_
6	горизонт	горизонт	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	вылын	выв	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	3	appos	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	лэбтіcиcӧ	лэбтіcьны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
10	кык	кык	NUM	_	Case=Nom|Number=Sing|NumType=Card	13	nummod	_	GTtags=Card,Sg,Nom
11	ыджыт	ыджыт	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
12	коричневӧй	коричневӧй	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
13	кымӧp	кымӧp	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


