---
layout: base
title:  'Statistics of cc in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="koi_uh-dep-cc-preconj.html">cc:preconj</a></tt>.

42 nodes (4%) are attached to their parents as `cc`.

42 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47619047619048.

The following 5 pairs of parts of speech are connected with `cc`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (24; 57% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (11; 26% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (5; 12% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Окаліс	окавны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
2	Митя	Митя	PROPN	_	Case=Nom|NameType=Giv|Number=Sing	1	nsubj	_	GTtags=Prop,Prop,Sem/Mal,Sg,Nom
3	кыкнаннысӧ	кык	PRON	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Tot	1	obj	_	GTtags=Coll,Der/MWN,N,Sg,PxPl3,Acc
4	да	да	CCONJ	_	_	5	cc	_	_
5	пуксьӧтіс	пуксьӧтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	conj	_	GTtags=Ind,Prt1,Sg3
6	пызан	пызан	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	сайӧ	сай	NOUN	N	Case=Nom|NounType=Relat|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	Ордчӧн	ордчӧн	ADV	Adv	_	3	advmod:lmod	_	GTtags=Adv
2	мекӧт	ме	PRON	Pron	Case=Com|Number=Sing|Person=1|PronType=Prs	1	nmod	_	GTtags=Pron,Pers,Sg1,Com
3	пукалӧ	пукавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=V,TV,Ind,Prs,Sg3
4	сьӧд	сьӧд	ADJ	A	_	5	amod	_	GTtags=A
5	тошока	тошок	NOUN	N	Derivation=ProprietiveMod|Number=Sing	9	amod	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A
6	и	и	CCONJ	CC	_	8	cc	_	GTtags=CC
7	гардчӧмкодь	гардчыны	VERB	V	Case=Nom|Derivation=CompMod|Number=Sing|Tense=Past|VerbForm=Part	8	advcl	_	GTtags=V,IV,Ind,Prt2,Sg3,Der,Der/CompMod
8	уссэза	ус	NOUN	N	Derivation=ProprietiveMod|Number=Plur	5	conj	_	GTtags=N,Pl,Der,Der/ProprietiveMod,A
9	мужик	мужик	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	GTtags=N,Sg,Nom|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Мери	Мери	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sg,Nom
2	босьтіс	босьтны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	бронза	бронза	NOUN	_	Case=Nom|Number=Sing	2	obj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Питер	Питер	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sg,Nom
6	–	–	PUNCT	_	_	5	punct	_	_
7	эзысь	эзысь	NOUN	_	Case=Nom|Number=Sing	5	orphan	_	GTtags=Sg,Nom|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	а	а	CCONJ	_	_	10	cc	_	_
10	Джейн	Джейн	PROPN	_	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sg,Nom
11	–	–	PUNCT	_	_	10	punct	_	_
12	зарни	зарни	NOUN	_	Case=Nom|Number=Sing	10	orphan	_	GTtags=Sg,Nom|SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


