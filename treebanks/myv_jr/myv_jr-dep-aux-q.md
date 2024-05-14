---
layout: base
title:  'Statistics of aux:q in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 6 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>.

12 nodes (0%) are attached to their parents as `aux:q`.

11 instances of `aux:q` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 4 pairs of parts of speech are connected with `aux:q`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (7; 58% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 17% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	Но	но	CCONJ	CC	_	2	cc	_	_
2	кулось	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
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
7	тейни	тейнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	1	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
8	?..	?..	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:q	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	_
2	Ды	ды	CCONJ	CC	_	3	cc	_	GTtags=|Gloss=but
3	тонсь	тонсь	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	0	root	_	GTtags=Refl,Sg2,Nom|Gloss=you-yourself
4	ли	ли	AUX	Pcle	_	3	aux:q	_	GTtags=Qst|Gloss=q
5	те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	3	nsubj	_	GTtags=Dem,Sg,Nom,Indef|Gloss=this|SpaceAfter=No
6	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


