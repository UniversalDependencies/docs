---
layout: base
title:  'Statistics of parataxis in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `parataxis`

This relation is universal.

30 nodes (1%) are attached to their parents as `parataxis`.

26 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.83333333333333.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (22; 73% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
1	Няить	няемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg2,OcSg3|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	тяса	тяса	ADV	Adv	_	5	advmod:lmod	_	_
4	ёфcи	ёфcи	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	од	од	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	1	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	мазы	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	ава	ава	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	GTtags=Sg,Nom,Indef
9	авардсь	авардемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	1	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
10	сельмоведь	сельмоведь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	obl	_	GTtags=Sg,Nom,Indef
11	мархта	мархта	ADP	Adp	_	10	case	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 parataxis	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	стирьхне	стирь	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj:cop	_	GTtags=Pl,Nom,Def|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	тонцьке	тонць	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	5	nsubj	_	GTtags=Refl,Sg2,Nom,Clt/Add
5	содасак	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	parataxis	_	GTtags=Ind,Prs,ScSg2,OcSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	8	advmod:deg	_	GTtags=Interr,Sg,Nom,Indef
8	мазыхть	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
9	и	и	CCONJ	CC	_	11	cc	_	_
10	тевонь	тев	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	obj	_	GTtags=SP,Gen,Indef
11	кельгихть	кельгомс	VERB	V	Case=Nom|Definite=Ind|Derivation=NomAg|Number=Plur	8	conj	_	GTtags=NomAg,Pl,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Станя	стане	ADV	Adv	_	0	root	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=Err/Orth-lowered-final-e-2-ja
2	или	или	CCONJ	CC	_	3	cc	_	CGdephead=#2-&gt;2|CGdeprel=@CC
3	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	1	conj	_	CGdephead=#3-&gt;0|CGdeprel=@IMV|GTtags=Aux,Neg
4	—	—	PUNCT	PUNCT	_	5	punct	_	CGdephead=#4-&gt;5|CGdeprel=@X|GTtags=PUNCT
5	ломанень	ломань	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
6	потмось	потма	NOUN	N	Case=Nom|Definite=Def|NounType=Relat|Number=Sing	7	nsubj:cop	_	CGdephead=#6-&gt;9|CGdeprel=@SUBJ&gt;|GTtags=Relator,Sg,Nom,Def
7	шобда	шобда	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	1	parataxis	_	CGdephead=#7-&gt;9|CGdeprel=@SPRED|GTtags=Sg,Nom,Indef|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	CGdephead=#8-&gt;7|CGdeprel=@X|GTtags=CLB
9	архт	архт	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2	7	conj	_	CGdephead=#9-&gt;0|CGdeprel=@FMV|GTtags=Imprt,ScSg2
10	вешеньк	вешеньк	VERB	_	_	9	conj	_	CGdephead=#10-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
11	,	,	PUNCT	CLB	_	13	punct	_	CGdephead=#11-&gt;10|CGdeprel=@X|GTtags=CLB
12	мезенкса	мезе	PRON	Pron	Case=Cau|Number=Plur,Sing	13	obl:cau	_	CGdephead=#12-&gt;0|CGdeprel=@X|GTtags=SP,Cau
13	кадозе	кадомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	10	ccomp	_	CGdephead=#13-&gt;9|CGdeprel=@FMV|GTtags=Ind,Prt1,ScSg3,OcSg3
14	мирденц	мирде	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obj	_	CGdephead=#14-&gt;13|CGdeprel=@&lt;OBJ|GTtags=Sg,Gen,PxSg3|SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	CGdephead=#15-&gt;14|CGdeprel=@X|GTtags=CLB
16	архт	архт	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2	7	conj	_	CGdephead=#16-&gt;9|CGdeprel=@FMV|GTtags=Imprt,ScSg2
17	кизефнек	кизефнемс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2	16	conj	_	CGdephead=#17-&gt;9|CGdeprel=@FMV|GTtags=Imprt,ScSg2|SpaceAfter=No
18	,	,	PUNCT	CLB	_	21	punct	_	CGdephead=#18-&gt;17|CGdeprel=@X|GTtags=CLB
19	мезенкса	мезе	PRON	Pron	Case=Cau|Number=Plur,Sing	21	obl:cau	_	CGdephead=#19-&gt;0|CGdeprel=@X|GTtags=SP,Cau
20	сяшкава	сяшка	ADV	A	Case=Prl|Definite=Ind|Number=Plur,Sing	21	advmod:tmod	_	CGdephead=#20-&gt;21|CGdeprel=@ADVL&gt;|GTtags=SP,Prl,Indef
21	кельгозе	кельгомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	17	ccomp	_	CGdephead=#21-&gt;9|CGdeprel=@FMV|GTtags=Ind,Prt1,ScSg3,OcSg3
22	Пашуть	Пашу	PROPN	N	Case=Gen|Definite=Def|Number=Sing	21	obj	_	CGdephead=#22-&gt;21|CGdeprel=@&lt;OBJ|GTtags=Prop,Sg,Gen,Def|SpaceAfter=No
23	.	.	PUNCT	CLB	_	1	punct	_	CGdephead=#23-&gt;3|CGdeprel=@X|GTtags=CLB

~~~


