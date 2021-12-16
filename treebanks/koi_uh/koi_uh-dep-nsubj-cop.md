---
layout: base
title:  'Statistics of nsubj:cop in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-nsubj.html">nsubj</a></tt>.

10 nodes (1%) are attached to their parents as `nsubj:cop`.

6 instances of `nsubj:cop` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1.

The following 6 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	GTtags=CC
2	юрын	юр	NOUN	N	Case=Ine|Number=Sing	4	obl:lmod	_	GTtags=N,Sg,Ine
3	думаэз	дума	NOUN	N	Case=Nom|Number=Plur	4	nsubj:cop	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A,Der,Der/MWN,N,Pl,Nom
4	кокнитӧсь	кокнит	ADJ	A	Number=Plur	0	root	_	GTtags=A,Cop,Pl|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
6	гажаӧсь	гажа	ADJ	A	Number=Plur	4	conj	_	GTtags=A,Cop,Pl|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	GTtags=V,IV,Ind,Prt1,Sg3
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj:cop	_	GTtags=Pron,Pers,Sg3,Nom
3	лажмытик	лажмытик	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
5	пӧввезӧн	пӧв	NOUN	N	Case=Ins|Number=Plur	6	obl	_	GTtags=N,Pl,Ins
6	дорӧм	дорны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	GTtags=N,Sem/Inanim,Sg,Nom
7	ӧшына	ӧшын	NOUN	N	Derivation=ProprietiveMod|Number=Sing	3	conj	_	GTtags=N,Sg,Der,Der/ProprietiveMod,A|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	GTtags=CLB
9	крышатӧм	крыша	NOUN	_	_	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:cop	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:cop	_	GTtags=Pron,Pers,Sg1,Nom
2	татӧн	татӧн	ADV	Adv	_	4	advmod:lmod	_	GTtags=Adv
3	не	не	AUX	Pcle	_	4	aux:neg	_	GTtags=Pcle
4	ӧтнам	ӧтнам	ADV	Adv	_	0	root	_	GTtags=Adv|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


