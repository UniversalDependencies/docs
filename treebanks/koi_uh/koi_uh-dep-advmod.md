---
layout: base
title:  'Statistics of advmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="koi_uh-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="koi_uh-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="koi_uh-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="koi_uh-dep-advmod-tmod.html">advmod:tmod</a></tt>.

40 nodes (5%) are attached to their parents as `advmod`.

30 instances of `advmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (31; 78% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (4; 10% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-DET.html">DET</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Кыдз	кыдз	ADV	_	PronType=Int	3	advmod	_	GTtags=Interr
2	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg2,Nom
3	думайтан	думайтны	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2|SpaceAfter=No
4	,	,	PUNCT	CLB	_	8	punct	_	_
5	кӧр	кӧр	SCONJ	_	_	8	mark	_	_
6	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	GTtags=Pers,Sg2,Nom
7	верман	вермыны	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	8	aux	_	GTtags=Ind,Prs,Sg2
8	локны	локны	VERB	_	VerbForm=Inf	3	ccomp	_	GTtags=Inf|SpaceAfter=No
9	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advmod	_	GTtags=Adv
2	петкӧтіс	петкӧтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=V,TV,Ind,Prt1,Sg3
3	гидсис	гид	NOUN	N	Case=Ela|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=N,Sg,Ela,PxSg3
4	сісь	сісь	ADJ	N	Animacy=Inan|Case=Nom|Number=Sing	5	amod	_	GTtags=N,Sem/Inanim,Sg,Nom
5	пӧв	пӧв	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=N,Sg,Nom
6	торрез	тор	NOUN	N	Case=Nom|Number=Plur	2	obj	_	GTtags=N,Pl,Nom|SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	GTtags=CLB
8	кынымкӧ	кынымкӧ	ADV	Adv	_	10	advmod	_	GTtags=Adv
9	бырӧм	бырны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	GTtags=A,Prc
10	отопки	отопки	NOUN	N	Case=Nom|Number=Sing	6	conj	_	GTtags=N,Sg,Nom|SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	GTtags=CLB
12	ӧзтіс	ӧзтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=V,IV,Ind,Prt1,Sg3
13	кыдззез	кыдз	NOUN	N	Case=Nom|Number=Plur	14	nmod	_	GTtags=N,Pl,Nom
14	увтӧ	увт	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	12	obl:lmod	_	GTtags=N,Sg,Nom,PxSg1
15	би	би	NOUN	N	Case=Nom|Number=Sing	12	obj	_	GTtags=N,Sg,Nom|SpaceAfter=No
16	.	.	PUNCT	CLB	_	2	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Только	только	ADV	_	_	3	advmod	_	_
2	ылын	ыв	NOUN	N	Case=Ine|NounType=Relat	3	obl:lmod	_	GTtags=Spat,Ine
3	веськытлань	веськыт	ADJ	_	Case=Apr|Number=Sing	9	obl:lmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	самӧй	самӧй	ADV	_	_	6	advmod	_	_
6	горизонт	горизонт	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	вылын	выв	NOUN	N	Case=Ine|NounType=Relat|Number=Sing	3	appos	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	лэбтіcиcӧ	лэбтіcьны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
10	кык	кык	NUM	_	Case=Nom|Number=Sing|NumType=Card	13	nummod	_	GTtags=Card,Sg,Nom
11	ыджыт	ыджыт	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
12	коричневӧй	коричневӧй	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
13	кымӧp	кымӧp	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


