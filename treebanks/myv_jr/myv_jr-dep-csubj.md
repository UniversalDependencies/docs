---
layout: base
title:  'Statistics of csubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="myv_jr-dep-csubj-cop.html">csubj:cop</a></tt>.

24 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (12; 50% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (6; 25% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	Мелезэст	мель	NOUN	N	Case=Ill|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	3	obl	_	CGdephead=#1-&gt;3|CGdeprel=@ADVL&gt;|CGdephead=#1-&gt;3|CGdeprel=@ADVL&gt;|GTtags=SP,Ill,PxPl3
2	а	а	AUX	V	Polarity=Neg|VerbType=Aux	3	aux	_	CGdephead=#2-&gt;0|CGdeprel=@IAUX|CGdephead=#2-&gt;0|CGdeprel=@IAUX|GTtags=Aux,Neg
3	сы	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	CGdephead=#3-&gt;0|CGdeprel=@FMV|CGdephead=#3-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	CGdephead=#4-&gt;5|CGdeprel=@X|CGdephead=#4-&gt;5|CGdeprel=@X|GTtags=CLB
5	кие	кие	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	CGdephead=#5-&gt;6|CGdeprel=@SUBJ&gt;|CGdephead=#5-&gt;6|CGdeprel=@SUBJ&gt;|GTtags=Rel,Sg,Nom
6	сёрмадызе	сёрмадомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	3	csubj	_	CGdephead=#6-&gt;3|CGdeprel=@FS-N&lt;|CGdephead=#6-&gt;3|CGdeprel=@FS-N&lt;|GTtags=Ind,Prt1,ScSg3,OcSg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	CGdephead=#7-&gt;2|CGdeprel=@X|CGdephead=#7-&gt;2|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
2	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	1	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	велявтомс	велявтомс	VERB	V	VerbForm=Inf	1	csubj	_	GTtags=IV,Inf
4	вейке	вейке	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	бока	бока	NOUN	N	Case=Nom|Definite=Ind|NounType=Relat|Number=Sing	6	nmod	_	GTtags=Relator,Sg,Nom,Indef
6	лангсто	ланго	NOUN	N	Case=Ela|Definite=Ind|NounType=Relat|Number=Plur,Sing	3	obl:lmod	_	GTtags=Relator,SP,Ela,Indef
7	омбоцес	омбоце	ADJ	A	Case=Ill|Definite=Ind|Number=Plur,Sing|NumType=Ord	5	conj	_	GTtags=Ord,SP,Ill,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	CGdephead=#1-&gt;2|CGdeprel=@CLB|GTtags=PUNCT
2	Тесэ	тесэ	ADV	Adv	Case=Ine	0	root	_	CGdephead=#2-&gt;4|CGdeprel=@ADVL|GTtags=Ine|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	CGdephead=#3-&gt;2|CGdeprel=@CLB|GTtags=CLB
4	милок	милок	NOUN	_	_	2	vocative	_	CGdephead=#4-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@CLB|GTtags=CLB
6	а	а	AUX	Pcle	Polarity=Neg	7	aux:neg	_	CGdephead=#6-&gt;6|CGdeprel=@NEG&gt;|GTtags=Neg
7	мезть	мезе	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Int	8	obj	_	CGdephead=#7-&gt;0|CGdeprel=@X|GTtags=Interr,Pl,Nom,Indef
8	чарькодемскак	чарькодемс	VERB	V	Clitic=Add|VerbForm=Inf	2	csubj	_	CGdephead=#8-&gt;0|CGdeprel=@FS-IMV|GTtags=IV,Inf,Clt/Add|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#9-&gt;2|CGdeprel=@CLB|GTtags=CLB

~~~


