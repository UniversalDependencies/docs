---
layout: base
title:  'Statistics of aux in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="koi_uh-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="koi_uh-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="koi_uh-dep-aux-pot.html">aux:pot</a></tt>.

25 nodes (2%) are attached to their parents as `aux`.

25 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (24; 96% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Висьтала	висьтавны	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1
2	тай	тай	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	8	punct	_	_
4	бур	бур	ADJ	_	Case=Nom|Number=Sing	5	amod	_	GTtags=Sg,Nom
5	олан	олан	NOUN	_	Case=Nom|Number=Sing	8	obj	_	GTtags=Sg,Nom
6	ӧтикӧ	ӧтикӧ	ADV	Num	Case=Ill|Number=Sing|NumType=Card	8	advmod	_	GTtags=Card,Der/MWN,N,Sg,Ill
7	эг	оз	AUX	_	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Past	8	aux	_	GTtags=Neg,Ind,Prt1,Pl1
8	адззыв	адззывны	VERB	_	Connegative=Yes	1	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 aux	color:blue
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
12	эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	14	aux	_	GTtags=Prt1,3
13	вӧв	вӧвны	AUX	_	Connegative=Yes	14	cop	_	GTtags=ConNeg
14	охота	охота	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
15	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	GTtags=Pers,Sg3,Acc
16	керны	керны	VERB	_	VerbForm=Inf	14	advcl	_	GTtags=Inf|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


