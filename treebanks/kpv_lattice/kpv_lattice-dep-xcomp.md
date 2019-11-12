---
layout: base
title:  'Statistics of xcomp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `xcomp`

This relation is universal.

53 nodes (2%) are attached to their parents as `xcomp`.

45 instances of `xcomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54716981132075.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (49; 92% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	заводитліс	заводітны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	чӧвтны	чӧвтны	VERB	V	VerbForm=Inf	2	xcomp	_	_
4	куритчӧмсӧ	куритчӧм	NOUN	N	Case=Acc|Number=Sing	3	obj	_	_
5	да	да	CCONJ	CC	_	6	cc	_	_
6	юӧмсӧ	юӧм	NOUN	N	Case=Acc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 xcomp	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	кывъясыс	кыв	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	csubj	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	кодӧс	коді	PRON	Pron	Case=Acc|Number=Sing|PronType=Int	5	obj	_	_
5	висьтавліс	висьтавлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	acl	_	_
6	Сталин	Сталин	PROPN	N	Case=Nom|Number=Sing	5	nsubj	_	_
7	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux:neg	_	_
10	вермы	вермыны	VERB	V	Connegative=Yes	0	root	_	_
11	лоны	лоны	VERB	V	VerbForm=Inf	10	xcomp	_	_
12	вунӧдӧма	вунӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	xcomp	_	_
13	некодӧн	некод	PRON	Pron	Case=Ins|Number=Sing|Polarity=Neg	12	obl	_	_
14	да	да	CCONJ	CC	_	15	cc	_	_
15	должен	должен	ADJ	A	Case=Nom|Number=Sing	10	conj	_	_
16	лоны	лоны	VERB	V	VerbForm=Inf	15	xcomp	_	_
17	пӧртӧма	пӧртны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	xcomp	_	_
18	олӧмӧ	олӧм	NOUN	N	Case=Ill|Number=Sing	17	obl	_	SpaceAfter=No
19	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 xcomp	color:blue
1	Сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	пыр	пыр	ADV	Adv	_	4	advmod	_	_
3	жӧ	жӧ	PART	Pcle	_	2	advmod	_	_
4	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	Максимлы	Максим	PROPN	N	Case=Dat|Number=Sing	4	obl	_	_
6	зэв	зэв	ADV	Adv	_	7	advmod	_	_
7	кузь	кузь	ADJ	A	Case=Nom|Number=Sing	11	amod	_	_
8	да	да	CCONJ	CC	_	9	cc	_	_
9	зэв	зэв	ADV	Adv	_	10	advmod	_	_
10	стрӧг	стрӧг	ADJ	A	Case=Nom|Number=Sing	7	conj	_	_
11	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	4	obj	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	кӧні	кӧні	ADV	Adv	Case=Ine|Number=Sing|PronType=Int	18	advmod	_	_
14	Валентина	Валентина	PROPN	N	Case=Nom|Number=Sing	18	obl	_	_
15	Ивановна	Ивановна	PROPN	N	Case=Nom|Number=Sing	14	flat:name	_	_
16	моз	моз	ADP	Po	_	14	case	_	_
17	жӧ	жӧ	PART	Pcle	_	18	advmod	_	_
18	нимтіс	нимтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	_	_
19	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	18	obj	_	_
20	«	«	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No
21	сюсь	сюсь	ADJ	A	Case=Nom|Number=Sing	22	amod	_	_
22	йӧйӧн	йӧй	ADJ	A	Case=Ins|Number=Sing	18	xcomp	_	SpaceAfter=No
23	»	»	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No
24	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


