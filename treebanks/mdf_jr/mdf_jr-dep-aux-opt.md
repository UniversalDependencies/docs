---
layout: base
title:  'Statistics of aux:opt in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:opt`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>.

3 nodes (0%) are attached to their parents as `aux:opt`.

3 instances of `aux:opt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 1 pairs of parts of speech are connected with `aux:opt`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:opt	color:blue
1	Катк	катк	AUX	Pcle	Mood=Opt	3	aux:opt	_	GTtags=Opt
2	сембе	сембе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef
3	няйсазь	няемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScPl3,OcSg3|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	коза	коза	ADV	Adv	_	6	advmod:lto	_	_
6	серьгядезь	серьгядемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past	3	ccomp	_	GTtags=Ind,Prt1,ScPl3,OcSg3
7	Мулёвть	Мулёв	NOUN	N	Case=Gen|Definite=Def|Number=Sing	6	obj	_	GTtags=Prop,Sg,Gen,Def|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	катк	катк	AUX	Pcle	Mood=Opt	10	aux:opt	_	GTtags=Opt
10	каяйхть	каямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,ScPl3
11	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	obj	_	GTtags=Sg,Nom,Indef
12	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	13	nmod	_	GTtags=Pers,Sg3,Gen
13	лангозонза	ланга	NOUN	N	Case=Ill|NounType=Relat|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	10	obl:lto	_	GTtags=Relator,SP,Ill,PxSg3|SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


