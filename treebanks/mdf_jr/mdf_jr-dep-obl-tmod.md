---
layout: base
title:  'Statistics of obl:tmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>.

22 nodes (1%) are attached to their parents as `obl:tmod`.

16 instances of `obl:tmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13636363636364.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (18; 82% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	Омбоце	омбоце	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|NumType=Ord	2	amod	_	GTtags=Ord,Sg,Nom,Indef
2	шись	ши	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	obl:tmod	_	GTtags=Sg,Nom,Def
3	ащан	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg1
4	эрьгяфтома	эрьгя	NOUN	N	Case=Abe|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Abe,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:tmod	color:blue
1	Ёмластокиге	ёмла	ADJ	A	Case=Ela|Clitic=AddKige|Definite=Ind|Number=Plur,Sing	5	obl:tmod	_	GTtags=SP,Ela,Indef,Clt/Kige
2	Миша	Миша	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj:cop	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
3	ялгань	ялга	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	obl:comp	_	GTtags=SP,Gen,Indef
4	коряс	коряс	ADP	Adp	_	3	case	_	_
5	сятяволь	сятяв	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Sg,Nom,Indef,Clt/Cop,Prt2,ScSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:tmod	color:blue
1	Сондеенза	сон	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Long	3	obl:agent	_	GTtags=Pers,Sg3,Dat,Long
2	эрявсть	эрявомс	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	3	aux:nec	_	GTtags=IV,Ind,Prt1,ScPl3
3	тиемс	тиемс	VERB	_	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
4	шяяренза	шяярь	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	GTtags=Pl,Nom,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	аньцек	аньцек	ADV	_	_	9	advmod:foc	_	_
7	ся	ся	DET	_	Case=Nom|Number=Sing|PronType=Dem	8	det	_	GTtags=Dem,Sg,Nom
8	шиня	ши	NOUN	_	Case=Tem|Definite=Ind|Number=Sing	9	obl:tmod	_	GTtags=Der/Dimin,N,Sg,Nom,Indef
9	сонь	сон	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	conj	_	GTtags=Pers,Sg3,Gen
10	ашель	аш	AUX	_	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	cop	_	GTtags=Aux,Neg,Prt2,ScSg3
11	мялец	мяль	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


