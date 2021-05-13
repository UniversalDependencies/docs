---
layout: base
title:  'Statistics of csubj:cop in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:cop`.

2 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj:cop	color:blue
1	Аконашканель	Аконашкане	ADV	Adv	AdvType=Tim|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Sem/Time,Prt2,ScSg3|Gloss=there-was-no-time
2	вешнемс	вешнемс	VERB	V	Valency=2|VerbForm=Inf	1	csubj:cop	_	GTtags=TV,Inf|Gloss=look-for
3	«	«	PUNCT	PUNCT	_	4	punct	_	GTtags=|SpaceAfter=No
4	мазый	мазый	ADJ	A	_	6	amod	_	GTtags=|Gloss=pretty|SpaceAfter=No
5	»	»	PUNCT	PUNCT	_	4	punct	_	_
6	валт	вал	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	obj	_	GTtags=Pl,Nom,Indef|Gloss=word|SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:cop	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	А	а	CCONJ	CC	_	3	cc	_	_
3	тонь	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Gen
4	мень	мень	ADJ	A	Derivation=GenAttr|PronType=Int	5	nmod:poss	_	GTtags=Interr,Der/GenAttr,A
5	тев	тев	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
6	киян	кие	PRON	Pron	Animacy=Hum|Number[subj]=Sing|Person[subj]=1|PronType=Int|Tense=Pres	5	csubj:cop	_	GTtags=Interr,Hum,Prs,ScSg1
7	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj:cop	_	GTtags=Pers,Sg1,Nom|SpaceAfter=No
8	?..	?..	PUNCT	CLB	_	5	punct	_	_

~~~


