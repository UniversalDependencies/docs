---
layout: base
title:  'Statistics of conj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `conj`

This relation is universal.

18 nodes (5%) are attached to their parents as `conj`.

18 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 7 pairs of parts of speech are connected with `conj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (8; 44% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 17% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	пондыліс	пондывны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	чапкыны	чапкыны	VERB	_	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	куритны	куритны	VERB	_	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	да	да	CCONJ	_	_	6	cc	_	_
6	юны	юны	VERB	_	VerbForm=Inf	4	conj	_	GTtags=Inf|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 conj	color:blue
1	Эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	3	aux:neg	_	GTtags=Prt1,3
2	позь	позьны	AUX	_	Connegative=Yes	3	aux	_	GTtags=ConNeg
3	бӧрйыны	бӧрйыны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
4	не	не	CCONJ	Polarity=Neg	_	6	cc:preconj	_	_
5	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|Number=Sing	3	obj	_	GTtags=Prop,Sg,Nom
6	Смитӧс	Смит	PROPN	_	Animacy=Hum|Case=Acc|Number=Sing	5	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	_
8	не	не	CCONJ	Polarity=Neg	_	10	cc	_	_
9	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|Number=Sing	6	conj	_	GTtags=Prop,Sg,Nom
10	Браунӧс	Браун	PROPN	_	Animacy=Hum|Case=Acc|Number=Sing	9	flat:name	_	GTtags=Prop,Sg,Acc|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 conj	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	босьтіс	босьтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	машина	машина	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	а	а	CCONJ	_	_	7	cc	_	_
6	сылӧн	сія	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	nmod	_	GTtags=Pers,Sg3,Gen
7	воныс	вон	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sg,Nom,PxSg3
8	–	–	PUNCT	_	_	7	punct	_	_
9	дзир	дзир	ADV	_	_	7	orphan	_	GTtags=Sg,Nom
10	велосипед	велосипед	NOUN	_	Case=Nom|Number=Sing	7	orphan	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


