---
layout: base
title:  'Statistics of nmod in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="mr_ufal-dep-nmod-poss.html">nmod:poss</a></tt>.

5 nodes (0%) are attached to their parents as `nmod`.

5 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nmod	color:blue
1	चांदी	चांदी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No|Translit=cāṁdī|LTranslit=cāṁdī
2	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=-|LTranslit=-
3	सोन्या	सोने	NOUN	_	Case=Abs|Gender=Neut|Number=Sing	1	conj	_	Translit=sonyā|LTranslit=sone
4	ची	चा	ADP	_	Gender=Neut|Number=Plur	3	case	_	Translit=cī|LTranslit=cā
5	भांडी	भांडे	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	Translit=bhāṁḍī|LTranslit=bhāṁḍe
6	होती	असणे	AUX	_	Gender=Neut|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=hotī|LTranslit=asaṇe
7	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

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


