---
layout: base
title:  'Statistics of appos in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `appos`

This relation is universal.

86 nodes (1%) are attached to their parents as `appos`.

86 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.12790697674419.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (30; 35% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (24; 28% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (10; 12% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (4; 5% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-DET.html">DET</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Әр	әр	DET	det	PronType=Tot	2	det	_	_
2	нысан	нысан	NOUN	n	Case=Nom	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	6	punct	_	_
4	әр	әр	DET	det	PronType=Tot	6	det	_	_
5	салынған	сал	VERB	v	Tense=Past|VerbForm=Part|Voice=Pass	6	acl:relcl	_	_
6	ғимарат	ғимарат	NOUN	n	Case=Nom	2	appos	_	_
7	бірегей	бірегей	ADJ	adj	_	9	csubj	_	_
8	болуы	бол	AUX	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	7	cop	_	_
9	керек	керек	ADJ	adj	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Бұл	бұл	DET	det	PronType=Dem	2	det	_	_
2	театрларды	театр	NOUN	n	Case=Acc|Number=Plur	3	obj	_	_
3	құруда	құр	VERB	v	Case=Loc|VerbForm=Ger	9	advcl	_	_
4	актер	актер	NOUN	n	Case=Nom	8	nmod:poss	_	_
5	Сейед	Сейед	PROPN	np	Case=Nom|Gender=Masc	4	appos	_	_
6	Әли	Әли	PROPN	np	Case=Nom|Gender=Masc	5	flat:name	_	_
7	Нәсірдің	Нәсір	PROPN	np	Case=Gen	5	flat:name	_	_
8	еңбегі	еңбек	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	9	nsubj	_	_
9	зор	зор	ADJ	adj	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Халқы	халық	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	4	nsubj	_	_
2	65,2	65,2	NUM	num	NumType=Card	3	nummod	_	_
3	млн.	млн.	NOUN	abbr	_	4	nummod	_	_
4	адам	адам	NOUN	n	Case=Nom	0	root	_	_
5	(	(	PUNCT	lpar	_	6	punct	_	SpaceAfter=No
6	1999	1999	NUM	num	NumType=Card,Ord	4	appos	_	SpaceAfter=No
7	)	)	PUNCT	rpar	_	6	punct	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	4	punct	_	_

~~~


