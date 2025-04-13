---
layout: base
title:  'Statistics of acl:relcl in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-acl.html">acl</a></tt>.

70 nodes (0%) are attached to their parents as `acl:relcl`.

62 instances of `acl:relcl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.54285714285714.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (48; 69% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (7; 10% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	Зярдо	зярдо	ADV	Adv	AdvType=Tim|PronType=Int	4	advmod:tmod	_	GTtags=Interr,Sem/Time
2	уш	уш	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Sem/Time
3	ансяк	ансяк	ADV	Adv	_	4	advmod:foc	_	_
4	сы	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3
5	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	6	det	_	GTtags=Sg,Nom,Indef
6	шкась	шка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кода	кода	SCONJ	CS	AdvType=Tim	9	mark	_	GTtags=Sem/Temp
9	туить	туемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	6	acl:relcl	_	GTtags=IV,Ind,Prs,ScPl3
10	Цёраксонь	цёракс	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	nmod	_	GTtags=Sem/Inanim,Sem/NCnt,SP,Gen,Indef
11	кирдав	кирда	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	9	obl	_	GTtags=Sem/Inanim_Cnt,SP,Lat,Indef|SpaceAfter=No
12	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl:relcl	color:blue
1	Кодамо	кодамо	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	3	amod	_	GTtags=Interr,Sg,Nom,Indef
2	виде	виде	ADJ	A	_	3	amod	_	_
3	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj	_	GTtags=Sem/Body_part,Sg,Nom,Indef
4	ды	ды	CCONJ	CC	_	6	cc	_	_
5	кеме	кеме	ADJ	A	_	6	amod	_	_
6	кедь	кедь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	conj	_	GTtags=Sem/Body_part,Sg,Nom,Indef
7	улезэ	улемс	AUX	V	Mood=Opt|Number[subj]=Sing|Person[subj]=3	8	cop	_	GTtags=Opt,ScSg3
8	сень	се	PRON	Pron	Case=Gen|PronType=Ind	0	root	_	GTtags=Indef,Gen|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	кие	кие	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	11	nsubj	_	GTtags=Sg,Nom,Indef
11	кунды	кундамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	acl:relcl	_	GTtags=Ind,Prs,ScSg3
12	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	13	det	_	GTtags=Sg,Nom,Indef
13	тевентень	тев	NOUN	N	Case=Dat|Definite=Def|Number=Sing	11	obl	_	GTtags=Sem/Inanim_Cnt,Sg,Dat,Def|SpaceAfter=No
14	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Астай	Астай	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	2	compound:nn	_	CGdephead=#1-&gt;2|CGdeprel=@&gt;N|GTtags=Prop,Sg,Nom,Indef
2	покштянть	покштя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl:own	_	CGdephead=#2-&gt;2|CGdeprel=@-FOBJ&gt;|GTtags=Sg,Gen,Def
3	сестэ	сестэ	ADV	Adv	_	4	advmod:tmod	_	CGdephead=#3-&gt;4|CGdeprel=@ADVL&gt;|GTtags=
4	ульнесть	ульнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScPl3
5	вете	вете	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	6	nummod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
6	цёранзо	цёра	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	CGdephead=#6-&gt;4|CGdeprel=@&lt;SUBJ|GTtags=Pl,Nom,PxSg3
7	пек	пек	ADV	Adv	AdvType=Deg	8	advmod:deg	_	CGdephead=#7-&gt;8|CGdeprel=@&gt;A|GTtags=Deg
8	вадрят	вадря	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	6	acl:relcl	_	CGdephead=#8-&gt;4|CGdeprel=@&lt;OBJ|GTtags=Pl,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	CGdephead=#9-&gt;8|CGdeprel=@CLB|GTtags=CLB
10	нилетне	ниле	NUM	Num	Case=Nom|Definite=Def|Number=Plur|NumType=Card	12	nsubj	_	CGdephead=#10-&gt;0|CGdeprel=@X|GTtags=Card,Pl,Nom,Def
11	уш	уш	ADV	Adv	_	12	advmod:tmod	_	CGdephead=#11-&gt;10|CGdeprel=@ADVL|GTtags=
12	урьвакстозельть	урьвакстомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Conv,Part	4	conj	_	CGdephead=#12-&gt;0|CGdeprel=@PRED|GTtags=IV,Der/Ozj,Ger,Der/MWN,N,Pl,Nom,Indef,Clt/Cop Prt2 ScPl3|SpaceAfter=No
13	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#13-&gt;4|CGdeprel=@CLB|GTtags=CLB

~~~


