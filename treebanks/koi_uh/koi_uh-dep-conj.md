---
layout: base
title:  'Statistics of conj in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `conj`

This relation is universal.

56 nodes (6%) are attached to their parents as `conj`.

56 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.73214285714286.

The following 12 pairs of parts of speech are connected with `conj`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (27; 48% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (11; 20% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 conj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 conj	color:blue
1	Вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	GTtags=V,IV,Ind,Prt1,Sg3
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj:cop	_	GTtags=Pron,Pers,Sg3,Nom
3	лажмытик	лажмытик	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
5	пӧввезӧн	пӧв	NOUN	N	Case=Ins|Number=Plur	6	obl	_	GTtags=N,Pl,Ins
6	дорӧм	дорны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	GTtags=N,Sem/Inanim,Sg,Nom
7	ӧшына	ӧшын	NOUN	N	Derivation=ProprietiveMod|Number=Sing	3	conj	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
9	крышатӧм	крыша	NOUN	_	Case=Abe|Number=Sing|Variant=Nomin	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


