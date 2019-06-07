---
layout: base
title:  'Statistics of acl:relcl in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-acl.html">acl</a></tt>.

101 nodes (1%) are attached to their parents as `acl:relcl`.

101 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.14851485148515.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (91; 90% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Мiграцыя	мiграцы	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	—	—	PUNCT	_	_	4	punct	_	_
3	як	як	SCONJ	IN	_	4	mark	_	_
4	вiрус	вiрус	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	перад	перад	ADP	NN	_	7	case	_	_
7	якiм	якi	PRON	RB	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	8	obl	_	_
8	нельга	нельга	VERB	RB	_	4	acl:relcl	_	_
9	паставiць	паставiць	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	санiтарны	санiтарны	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	кардон	кардон	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 25 acl:relcl	color:blue
1	Але	але	CCONJ	_	_	10	cc	_	_
2	вось	вось	PART	_	_	6	advmod:discourse	_	_
3	у	у	ADP	_	_	6	case	_	_
4	той	той	DET	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	det	_	_
5	самы	самы	DET	_	Case=Acc|Gender=Masc|Number=Sing	6	amod	_	_
6	час	час	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	даўным-даўно	даўным-даўно	ADV	_	_	10	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	жыў	жыць	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	адзін	адзін	DET	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	12	det	_	_
12	такі	такі	DET	_	Case=Nom|Gender=Masc|Number=Sing	13	det	_	_
13	Слон	слон	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	20	punct	_	_
15	або	або	CCONJ	_	_	20	cc	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	лепш	лепш	ADV	_	Degree=Cmp	20	parataxis	_	_
18	сказаць	сказаць	VERB	_	Aspect=Perf|VerbForm=Inf	17	csubj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	17	punct	_	_
20	Слонік	слонік	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	13	conj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	25	punct	_	_
22	які	які	PRON	_	Case=Nom|Gender=Masc|Number=Sing	25	nsubj	_	_
23	быў	быць	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	25	cop	_	_
24	страшэнна	страшэнна	ADV	_	Degree=Pos	25	advmod	_	_
25	дапытлівы	дапытлівы	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	20	acl:relcl	_	SpaceAfter=No
26	,	,	PUNCT	_	_	37	punct	_	_
27	і	і	CCONJ	_	_	37	cc	_	_
28	каго	хто	PRON	_	Case=Gen|Number=Sing	33	obj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	бывала	бываць	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	33	discourse	_	SpaceAfter=No
31	,	,	PUNCT	_	_	30	punct	_	_
32	ні	ні	PART	_	Polarity=Neg	33	amod	_	_
33	ўбачыць	ўбачыць	VERB	_	Aspect=Perf|VerbForm=Inf	36	acl	_	SpaceAfter=No
34	,	,	PUNCT	_	_	33	punct	_	_
35	да	да	ADP	_	_	36	case	_	_
36	ўсіх	ўсе	PRON	_	Case=Gen|Number=Plur|Person=3	37	obl	_	_
37	прыстае	прыставаць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	conj	_	_
38	з	з	ADP	_	_	39	case	_	_
39	роспытамі	роспыт	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	37	obl	_	SpaceAfter=No
40	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Новая	новы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	купюра	купюра	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	стала	стаць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	першай	першы	ADJ	ORD	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	obj	_	_
5	у	у	ADP	IN	_	6	case	_	_
6	Беларусі	Беларусь	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	на	на	ADP	IN	_	9	case	_	_
9	якой	які	PRON	WPA	Case=Loc|Gender=Fem|Number=Sing|PronType=Rel	10	obl	_	_
10	стаіць	стаяць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
11	подпіс	подпіс	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	цяперашняй	цяперашні	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	кіраўніка	кіраўнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	_
14	Нацыянальнага	нацыянальны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	банка	банк	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	_
16	Надзеі	Надзея	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	13	appos	_	_
17	Ермаковай	Ермакова	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	16	flat:name	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


