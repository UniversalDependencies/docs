---
layout: base
title:  'Statistics of nsubj:outer in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="uk_parlamint-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_parlamint-dep-nsubj-pass.html">nsubj:pass</a></tt>.

9 nodes (0%) are attached to their parents as `nsubj:outer`.

9 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.44444444444444.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (4; 44% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (4; 44% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 5 nsubj:outer	color:blue
1	Тому	тому	ADV	ADV	_	16	mark	_	_
2	що	що	SCONJ	SCONJ	_	1	fixed	_	_
3	181	181	NUM	NUM	Case=Nom|NumType=Card	5	nummod	_	_
4	народний	народний	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	депутат	депутат	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	16	nsubj:outer	_	_
6	в	в	ADP	ADP	Case=Loc	7	case	_	_
7	залі	зала	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	_
8	після	після	ADP	ADP	Case=Gen	11	case	_	_
9	майже	майже	ADV	ADV	_	10	advmod:emph	_	_
10	40	40	NUM	NUM	Case=Gen|NumType=Card	11	nummod	_	_
11	днів	день	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
12	відпочинку	відпочинок	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	7	punct	_	_
14	це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	16	nsubj	_	_
15	якось	якось	ADV	ADV	PronType=Ind	16	advmod	_	_
16	виглядає	виглядати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	погано	погано	ADV	ADV	Degree=Pos	16	advmod	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:outer	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	думаю	думати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	таким	такий	DET	DET	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	чином	чин	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	obl	_	_
8	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	cop	_	_
9	набагато	набагато	ADV	ADV	_	10	advmod	_	_
10	краще	краще	ADV	ADV	Degree=Cmp	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Друге	друге	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	4	nsubj:outer	_	_
2	–	–	PUNCT	PUNCT	_	4	punct	_	_
3	про	про	ADP	ADP	Case=Acc	4	case	_	_
4	те	те	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	що	що	SCONJ	SCONJ	_	7	mark	_	_
7	відміна	відміна	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
8	тих	той	DET	DET	Case=Gen|Number=Plur|PronType=Dem	9	det	_	_
9	змін	зміна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	13	punct	_	_
11	які	який	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Rel	13	obj	_	_
12	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
13	пропонували	пропонувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
14	по	по	ADP	ADP	Case=Loc	15	case	_	_
15	Закону	закон	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	obl	_	_
16	про	про	ADP	ADP	Case=Acc	17	case	_	_
17	мови	мова	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	15	nmod	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	13	punct	_	_
19	і	і	CCONJ	CCONJ	_	20	cc	_	_
20	неповернення	неповернення	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	7	conj	_	_
21	більше	більше	ADV	ADV	Degree=Cmp	20	advmod	_	_
22	до	до	ADP	ADP	Case=Gen	24	case	_	_
23	цього	цей	DET	DET	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	24	det	_	_
24	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	28	punct	_	_
26	що	що	SCONJ	SCONJ	_	28	mark	_	_
27	люди	людина	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	28	nsubj	_	_
28	зможуть	змогти	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	24	ccomp	_	_
29	вільно	вільно	ADV	ADV	Degree=Pos	30	advmod	_	_
30	говорити	говорити	VERB	VERB	Aspect=Imp|VerbForm=Inf	28	xcomp	_	_
31	російською	російський	ADJ	ADJ	Case=Ins|Gender=Fem|Number=Sing	32	amod	_	_
32	мовою	мова	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	30	obl	_	_
33	в	в	ADP	ADP	Case=Loc	34	case	_	_
34	Криму	Крим	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	30	obl	_	SpaceAfter=No
35	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


