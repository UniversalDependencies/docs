---
layout: base
title:  'Statistics of case in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `case`

This relation is universal.

71 nodes (3%) are attached to their parents as `case`.

71 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01408450704225.

The following 7 pairs of parts of speech are connected with `case`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (52; 73% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (10; 14% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post|Case=Cmp	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мезень	мезе	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Int	3	obl:lto	_	GTtags=Interr|SP,Gen
2	лангс	лангс	ADP	Po	Case=Ill	1	case	_	GTtags=Ill
3	ванат	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Авардемать	авардемс	VERB	V	Case=Gen|Definite=Def|Number=Sing|VerbForm=Vnoun	5	advcl:cau	_	GTtags=NomAct,Sg,Gen,Def
2	эзда	эзда	ADP	Adp	Case=Abl	1	case	_	GTtags=Abl
3	сембонь	сембе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing	4	nmod:poss	_	GTtags=SP,Gen,Indef
4	сельмосна	сельме	NOUN	N	Case=Nom|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	5	nsubj	_	GTtags=SP,Nom,PxPl3
5	таргозьфтольхть	таргоземс	VERB	V	Aspect=Perf|Derivation=F|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Part	0	root	_	GTtags=Der/f,PrfPrc,Clt/Cop,Prt2,ScPl3|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


