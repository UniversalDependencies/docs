---
layout: base
title:  'Statistics of acl:relcl in UD_Macedonian-MTB'
udver: '2'
---

## Treebank Statistics: UD_Macedonian-MTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="mk_mtb-dep-acl.html">acl</a></tt>.

9 nodes (1%) are attached to their parents as `acl:relcl`.

9 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55555555555556.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mk_mtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="mk_mtb-pos-PRON.html">PRON</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt>-<tt><a href="mk_mtb-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Го	го	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	Translit=Go|LTranslit=go
2	решивме	реши	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=rešivme|LTranslit=reši
3	проблемот	проблем	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	Translit=problemot|LTranslit=problem
4	којшто	којшто	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	6	nsubj	_	Translit=kojšto|LTranslit=kojšto
5	нè	нè	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	6	expl	_	Translit=nè|LTranslit=nè
6	мачеше	мачи	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Translit=mačeše|LTranslit=mači
7	со	со	ADP	_	_	8	case	_	Translit=so|LTranslit=so
8	години	година	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No|Translit=godini|LTranslit=godina
9	.	.	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Ќе	ќе	AUX	_	_	3	aux	_	Translit=Ťe|LTranslit=ťe
2	ти	ти	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	3	iobj	_	Translit=ti|LTranslit=ti
3	дадам	даде	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=dadam|LTranslit=dade
4	сè	сè	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	obj	_	Translit=sè|LTranslit=sè
5	што	што	SCONJ	_	_	7	mark	_	Translit=što|LTranslit=što
6	ќе	ќе	AUX	_	_	7	aux	_	Translit=ťe|LTranslit=ťe
7	посакаш	посака	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	SpaceAfter=No|Translit=posakaš|LTranslit=posaka
8	.	.	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


