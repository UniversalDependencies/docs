---
layout: base
title:  'Statistics of case in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `case`

This relation is universal.

7 nodes (2%) are attached to their parents as `case`.

7 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (3; 43% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (3; 43% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэнат	тэ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Gen
5	ай	ай	NOUN	_	Case=Nom|Number=Sing	3	advcl	_	GTtags=Sg,Nom
6	сьӧрті	сьӧрті	ADP	_	_	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мый	мый	PRON	_	Case=Nom|Number=Sing|PronType=Int	4	obl	_	GTtags=Interr,Sg,Nom
2	вылӧ	вылӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	1	case	_	GTtags=Po,Spat,Sg,Ill
3	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg2,Nom
4	видзӧтан	видзӧтны	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Быд	быд	DET	_	Case=Nom|Number=Sing	2	det	_	GTtags=Sg,Nom
2	лaдopcянь	лaдopcянь	NOUN	_	Case=Egr|Number=Sing	6	obl	_	GTtags=Sg,Egr
3	Ворошилов	Ворошилов	PROPN	_	Animacy=Hum|Case=Nom|Number=Sing	6	obl	_	GTtags=Prop,Sem/Sur,Sem/Mal,Sg,Nom
4	дынӧ	дынӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	3	case	_	GTtags=Po,Spat,Sg,Ill
5	ӧні	ӧні	ADV	_	_	6	advmod:tmod	_	_
6	кoтӧpтіcӧ	кoтӧpтіcӧ	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
7	oтиp	oтиp	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	GTtags=CLB

~~~


