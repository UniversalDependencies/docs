---
layout: base
title:  'Statistics of advmod:eval in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="kpv_ikdp-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-tmod.html">advmod:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `advmod:eval`.

6 instances of `advmod:eval` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (3; 43% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 29% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:eval	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	GTtags=CC
2	важен	важ	ADJ	A	Case=Ins|Number=Sing	6	obl	_	GTtags=A,Sg,Ins
3	вед	вед	ADV	Adv	_	6	advmod:eval	_	GTtags=Adv,Parenthetic|OrigLang=ru
4	вина	вина	NOUN	N	Case=Nom|Number=Sing	6	obj	_	GTtags=N,Sg,Nom|OrigLang=ru
5	из	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	6	aux:neg	_	GTtags=V,Neg,Ind,Prt1,Sg3
6	юныс	юны	VERB	V	Connegative=Yes|Number=Plur	0	root	_	GTtags=V,TV,ConNeg|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod:eval	color:blue
1	Нёль	нёль	NUM	Num	Case=Nom|Number=Sing|NumType=Card	3	nummod	_	GTtags=Card,Sg,Nom
2	кынь	кынь	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	GTtags=Sg,Nom
3	рожа	рожа	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	GTtags=Sg,Nom
4	видзысь	видзысь	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	GTtags=Sg,Nom
5	вед	вед	ADV	Adv	_	8	advmod:eval	_	GTtags=Parenthetic
6	пыр	пыр	ADV	Adv	_	8	advmod	_	_
7	на	на	ADV	Adv	_	8	advmod	_	_
8	лооя	ловъя	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	ветлалэ	ветлыны	VERB	V	Derivation=Al|Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	conj	_	GTtags=Der/ал,Ind,Prs,Err/Dial,Sg3|SpaceAfter=No
11	!	!	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advmod:eval	color:blue
1	Коймедсэ	коймӧд	ADJ	A	Case=Acc|Number=Sing|Number[psor]=Sing|NumType=Ord|Person[psor]=3	2	obj	_	GTtags=Err/Dial,Ord,Sg,Acc,PxSg3
2	сетіс	сетны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	да	да	CCONJ	CC	_	6	cc	_	_
4	бара	бара	ADV	Adv	_	6	advmod:eval	_	GTtags=Parenthetic
5	же	жӧ	PART	Pcle	_	6	advmod:eval	_	GTtags=Err/Dial
6	сідз	сідзи	ADV	Adv	AdvType=Man	2	conj	_	GTtags=Manner|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


