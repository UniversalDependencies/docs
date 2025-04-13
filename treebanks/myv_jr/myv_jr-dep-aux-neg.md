---
layout: base
title:  'Statistics of aux:neg in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-aux.html">aux</a></tt>.
There are also 6 other language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

163 nodes (1%) are attached to their parents as `aux:neg`.

161 instances of `aux:neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13496932515337.

The following 9 pairs of parts of speech are connected with `aux:neg`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (61; 37% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (34; 21% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (25; 15% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (20; 12% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (16; 10% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аволь	аволь	AUX	Pcle	NegationType=Contrastive|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Emphatic
2	пек	пек	ADV	Adv	AdvType=Deg	3	advmod:deg	_	GTtags=Degree
3	шумазь	шумамс	VERB	V	Derivation=Ozj|VerbForm=Conv	4	advcl	_	GTtags=IV,Der/Озь,Ger
4	охаесь	охаемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	ды	ды	CCONJ	CC	_	6	cc	_	_
6	кувсесь	кувсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	conj	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:neg	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	А	а	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	кирдевимашка	кирдевемашка	NOUN	N	Case=Nom|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Cmpr,Indef|SpaceAfter=No
4	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:neg	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Ох	ох	INTJ	Interj	_	3	discourse	_	_
3	кулан	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,ScSg1|SpaceAfter=No
4	!	!	PUNCT	CLB	_	3	punct	_	_
5	―	―	PUNCT	PUNCT	_	7	punct	_	_
6	таго	таго	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Temp
7	сергедсь	серьгедемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	3	parataxis	_	GTtags=TV,Ind,Prt1,ScSg3
8	Люба	Люба	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Giv|Number=Sing	7	nsubj	_	GTtags=Prop,Ant_Fem,Sg,Nom,Indef
9	а	а	AUX	Pcle	Polarity=Neg	10	aux:neg	_	GTtags=Neg
10	паро	паро	ADJ	A	_	11	amod	_	_
11	вайгельсэ	вайгель	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ine,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


