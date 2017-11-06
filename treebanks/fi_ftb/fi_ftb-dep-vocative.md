---
layout: base
title:  'Statistics of vocative in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `vocative`

This relation is universal.

159 nodes (0%) are attached to their parents as `vocative`.

107 instances of `vocative` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55345911949686.

The following 18 pairs of parts of speech are connected with `vocative`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (56; 35% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (50; 31% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (24; 15% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Saanhan	saada	VERB	V,Act,Ind,Pres,Sg1,Han	Clitic=Han|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	mä	minä	PRON	Pron,Pers,Sg1,Nom	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	1	nsubj	_	_
3	koiran	koira	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	1	obj	_	_
4	äiti	äiti	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	vocative	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	saanhan	saada	VERB	V,Act,Ind,Pres,Sg1,Han	Clitic=Han|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
7	?	?	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 vocative	color:blue
1	No	no	INTJ	Pcle,Interj	_	2	discourse	_	Alt=2_discourse
2	niin	niin	PART	Pcle	_	4	advmod	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	tules	tulla	VERB	V,Act,Imprt,Sg2,S	Clitic=S|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	Lasse	lasse	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	vocative	_	_
6	laitetaan	laittaa	VERB	V,Pass,Ind,Pres	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	conj	_	_
7	tää	tämä	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem|Style=Coll	6	obj	_	_
8	kuntoon	kunto	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	6	nmod	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Ota	ottaa	VERB	V,Act,Imprt,Sg2	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	sinä	sinä	PRON	Pron,Pers,Sg2,Nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	vocative	_	_
3	tämä	tämä	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	1	obj	_	_
4	niin	niin	PART	Pcle	_	6	mark	_	_
5	minä	minä	PRON	Pron,Pers,Sg1,Nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	otan	ottaa	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
7	tämän	tämä	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	6	obj	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


