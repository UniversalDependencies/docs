---
layout: base
title:  'Statistics of nsubj:pass in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="mk_mtb-dep-nsubj.html">nsubj</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:pass`.

4 instances of `nsubj:pass` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Книгата	книга	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	3	nsubj:pass	_	Translit=Knigata|LTranslit=kniga
2	беше	сум	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	_	Translit=beše|LTranslit=sum
3	прочитана	прочита	VERB	_	Aspect=Perf|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|Translit=pročitana|LTranslit=pročita
4	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:pass	color:blue
1	Тој	тој	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj:pass	_	Translit=Toj|LTranslit=toj
2	што	што	SCONJ	_	_	4	mark	_	Translit=što|LTranslit=što
3	ги	ги	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	obj	_	Translit=gi|LTranslit=gi
4	оставил	остави	VERB	_	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	Translit=ostavil|LTranslit=ostavi
5	работиве	работа	NOUN	_	Definite=Def|Gender=Fem|Number=Plur	4	obj	_	Translit=rabotive|LTranslit=rabota
6	овде	овде	ADV	_	Degree=Pos	4	advmod	_	Translit=ovde|LTranslit=ovde
7	ќе	ќе	AUX	_	_	9	aux	_	Translit=ťe|LTranslit=ťe
8	биде	биде	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	_	Translit=bide|LTranslit=bide
9	казнет	казни	VERB	_	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|Translit=kaznet|LTranslit=kazni
10	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	Ниту	ниту	PART	_	Polarity=Neg	2	advmod	_	Translit=Nitu|LTranslit=nitu
2	Петар	Петар	PROPN	_	Gender=Masc|Number=Sing	8	nsubj:pass	_	Translit=Petar|LTranslit=Petar
3	Смит	Смит	PROPN	_	Gender=Masc|Number=Sing	2	flat	_	Translit=Smit|LTranslit=Smit
4	ниту	ниту	PART	_	Polarity=Neg	5	advmod	_	Translit=nitu|LTranslit=nitu
5	Мери	Мери	PROPN	_	Gender=Fem|Number=Sing	2	conj	_	Translit=Meri|LTranslit=Meri
6	Браун	Браун	PROPN	_	Gender=Fem|Number=Sing	5	flat	_	Translit=Braun|LTranslit=Braun
7	не	не	PART	_	Polarity=Neg	8	advmod	_	Translit=ne|LTranslit=ne
8	можеа	може	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=možea|LTranslit=može
9	да	да	PART	_	_	11	mark	_	Translit=da|LTranslit=da
10	бидат	биде	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	_	Translit=bidat|LTranslit=bide
11	одбрани	одбран	ADJ	_	Aspect=Perf|Definite=Ind|Number=Plur|VerbForm=Part|Voice=Pass	8	xcomp	_	SpaceAfter=No|Translit=odbrani|LTranslit=odbran
12	.	.	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


