---
layout: base
title:  'Statistics of aux:q in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>.

12 nodes (0%) are attached to their parents as `aux:q`.

11 instances of `aux:q` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 4 pairs of parts of speech are connected with `aux:q`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (7; 58% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	_
2	кулось	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	ли	ли	AUX	Pcle	_	2	aux:q	_	GTtags=Qst|SpaceAfter=No
4	?..	?..	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:q	color:blue
1	Виде	виде	ADJ	A	_	0	root	_	_
2	ли	ли	AUX	Pcle	_	1	aux:q	_	_
3	кияк	кияк	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	7	nsubj	_	GTtags=Indef,Sg,Nom
4	косояк	косояк	ADV	Adv	Case=Ine|Definite=Ind	7	advmod:lmod	_	GTtags=Indef,Ine
5	мезтькак	мезеяк	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Ind	7	obj	_	GTtags=Indef,Pl,Nom,Indef
6	а	а	AUX	Pcle	Polarity=Neg	7	aux:neg	_	GTtags=Neg
7	тейни	тейнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	1	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
8	?..	?..	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux:q	color:blue
1	Видестэ	видестэ	ADV	Adv	AdvType=Man	4	advmod	_	GTtags=Manner|Gloss[eng]=in.the.right.way
2	-	-	PUNCT	PUNCT	_	3	punct	_	_
3	арась	арась	AUX	Pcle	Polarity=Neg	1	aux:q	_	GTtags=Neg|Gloss[eng]=in.the.right.way
4	тошкси	тошксемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss[eng]=whisper
5	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom|Gloss[eng]=it|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	седеем	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	appos	_	GTtags=Sg,Nom,PxSg1|Gloss[eng]=heart|SpaceAfter=No
8	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


