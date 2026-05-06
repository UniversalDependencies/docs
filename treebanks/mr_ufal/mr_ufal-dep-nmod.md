---
layout: base
title:  'Statistics of nmod in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="mr_ufal-dep-nmod-poss.html">nmod:poss</a></tt>.

6 nodes (0%) are attached to their parents as `nmod`.

6 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	"	"	PUNCT	_	_	13	punct	_	Translit="|LTranslit="
2	त्यां	तो	PRON	_	Case=Abs|Deixis=Remt|Gender=Masc|Number=Plur|Person=3|PronType=Dem	4	nmod:poss	_	Translit=tyāṁ|LTranslit=to
3	च्या	चा	ADP	_	Case=Abs	2	case	_	Translit=cyā|LTranslit=cā
4	बाबतीत	बाबत	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	Translit=bābatīta|LTranslit=bābata
5	देव	देव	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Translit=deva|LTranslit=deva
6	मेला	मरणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	13	advcl	_	SpaceAfter=No|Translit=melā|LTranslit=maraṇe
7	,	,	PUNCT	_	_	8	punct	_	Translit=,|LTranslit=,
8	तसा	तसा	SCONJ	_	_	6	mark	_	Translit=tasā|LTranslit=tasā
9	आपल	आपण	PRON	_	PronType=Prs	11	nmod:poss	_	Translit=āpala|LTranslit=āpaṇa
10	च्या	चा	ADP	_	Case=Abs	9	case	_	Translit=cyā|LTranslit=cā
11	बाबतीत	बाबत	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	13	obl	_	Translit=bābatīta|LTranslit=bābata
12	ही	ही	PART	_	_	11	discourse	_	Translit=hī|LTranslit=hī
13	मरायचा	मरणे	VERB	_	Aspect=Hab|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=marāyacā|LTranslit=maraṇe
14	!	!	PUNCT	_	_	13	punct	_	SpaceAfter=No|Translit=!|LTranslit=!
15	"	"	PUNCT	_	_	13	punct	_	Translit="|LTranslit="

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	तो	तो	PRON	_	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	Translit=to|LTranslit=to
2	आई	आई	NOUN	_	Case=Abs|Gender=Fem|Number=Sing	4	nmod:poss	_	Translit=āī|LTranslit=āī
3	च्या	चा	ADP	_	Case=Abs	2	case	_	Translit=cyā|LTranslit=cā
4	पाया	पाय	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	Translit=pāyā|LTranslit=pāya
5	पडला	पडणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=paḍalā|LTranslit=paḍaṇe
6	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod	color:blue
1	त्या	तो	PRON	_	Deixis=Remt|Gender=Neut|Number=Sing|Person=3|PronType=Dem	5	nmod	_	Translit=tyā|LTranslit=to
2	च्या	चा	PART	_	_	1	case	_	Translit=cyā|LTranslit=cā
3	वर	वर	ADP	_	_	1	case	_	Translit=vara|LTranslit=vara
4	अंबारी	अंबारी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	_	Translit=aṁbārī|LTranslit=aṁbārī
5	ठेवण्यात	ठेवणे	VERB	_	Case=Loc|InfForm=Dict|VerbForm=Inf	0	root	_	Translit=ṭhevaṇyāta|LTranslit=ṭhevaṇe
6	आली	येणे	AUX	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	5	aux:pass	_	SpaceAfter=No|Translit=ālī|LTranslit=yeṇe
7	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


