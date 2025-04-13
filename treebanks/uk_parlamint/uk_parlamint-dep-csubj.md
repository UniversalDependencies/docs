---
layout: base
title:  'Statistics of csubj in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `csubj`

This relation is universal.

176 nodes (0%) are attached to their parents as `csubj`.

169 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90340909090909.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (169; 96% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	І	і	CCONJ	CCONJ	_	3	cc	_	_
2	не	не	PART	PART	Polarity=Neg	3	advmod:neg	_	_
3	потрібно	потрібно	ADV	ADV	Degree=Pos	0	root	_	_
4	розпалювати	розпалювати	VERB	VERB	Aspect=Imp|VerbForm=Inf	3	csubj	_	_
5	паніку	паніка	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
6	і	і	CCONJ	CCONJ	_	7	cc	_	_
7	насаждати	насаждати	VERB	VERB	Aspect=Perf|VerbForm=Inf	4	conj	_	_
8	її	вона	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	всередині	всередині	ADP	ADP	Case=Gen	10	case	_	_
10	країни	країна	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	Хто	хто	PRON	PRON	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	NER=O
2	поїхав	поїхати	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	5	csubj	_	NER=O
3	–	–	PUNCT	PUNCT	_	5	punct	_	NER=O|PunctType=Dash
4	той	той	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	NER=O
5	зрадник	зрадник	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=O|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	NER=O

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 csubj	color:blue
1	А	а	CCONJ	CCONJ	_	12	cc	_	_
2	тим	той	DET	DET	Case=Dat|Number=Plur|PronType=Dem	3	det	_	_
3	колегам	колега	NOUN	NOUN	Animacy=Anim|Case=Dat|Gender=Fem,Masc|Number=Plur	12	iobj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	6	nsubj	_	_
6	говорять	говорити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
7	про	про	ADP	ADP	Case=Acc	8	case	_	_
8	розкол	розкол	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl	_	_
9	України	Україна	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	6	punct	_	_
11	я	я	PRON	PRON	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
12	раджу	радити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	прочитати	прочитати	VERB	VERB	Aspect=Perf|VerbForm=Inf	12	xcomp	_	_
14	памфлети	памфлет	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	obj	_	_
15	Миколи	Микола	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	14	nmod	_	_
16	Хвильового	Хвильовий	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	15	flat:name	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	20	punct	_	_
18	зокрема	зокрема	ADV	ADV	_	20	parataxis	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	18	punct	_	_
20	там	там	ADV	ADV	PronType=Dem	14	advmod	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	23	punct	_	_
22	де	де	ADV	ADV	PronType=Rel	23	advmod	_	_
23	сказано	сказати	VERB	VERB	Aspect=Perf|Mood=Ind|Person=0|VerbForm=Fin	20	advcl	_	SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	27	punct	_	_
25	що	що	SCONJ	SCONJ	_	27	mark	_	_
26	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	27	iobj	_	_
27	треба	треба	ADV	ADV	_	23	ccomp	_	_
28	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	29	cop	_	_
29	геть	геть	ADV	ADV	_	27	csubj	_	_
30	від	від	ADP	ADP	Case=Gen	31	case	_	_
31	Москви	Москва	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	29	obl:arg	_	_
32	і	і	CCONJ	CCONJ	_	35	cc	_	_
33	від	від	ADP	ADP	Case=Gen	35	case	_	_
34	російського	російський	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	35	amod	_	_
35	культурника	культурник	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	31	conj	_	SpaceAfter=No
36	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


