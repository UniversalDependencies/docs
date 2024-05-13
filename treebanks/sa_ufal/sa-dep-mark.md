---
layout: base
title:  'Statistics of mark in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `mark`

This relation is universal.

9 nodes (1%) are attached to their parents as `mark`.

6 instances of `mark` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22222222222222.

The following 3 pairs of parts of speech are connected with `mark`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-SCONJ.html">SCONJ</a></tt> (5; 56% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-SCONJ.html">SCONJ</a></tt> (3; 33% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mark	color:blue
1	अप्रधानः	अ-प्रधान	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Translit=apradhānaḥ|LTranslit=a-pradhāna|Gloss=unimportant
2	प्रधानम्	प्रधन	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	0	root	_	Translit=pradhānam|LTranslit=pradhana|Gloss=important
3	स्यात्	अस्	AUX	_	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	cop	_	Translit=syāt|LTranslit=as|Gloss=may-be
4	सेवते	सेव्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	2	advcl	_	Translit=sevate|LTranslit=sev|Gloss=serves
5	यदि	यदि	SCONJ	_	_	4	mark	_	Translit=yadi|LTranslit=yadi|Gloss=if
6	पार्थिवम्	पार्थिव	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No|Translit=pārthivam|LTranslit=pārthiva|Gloss=king
7	।	।	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	जायन्ते	जन्	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=jāyante|LTranslit=jan|Gloss=are-born
2	विरला	विरल	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	4	amod	_	Translit=viralā|LTranslit=virala|Gloss=rare
3	लोके	लोक	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	1	obl	_	Translit=loke|LTranslit=loka|Gloss=world
4	जलदा	जलद	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	nsubj	_	Translit=jaladā|LTranslit=jalada|Gloss=clouds
5	इव	इव	SCONJ	_	_	6	mark	_	Translit=iva|LTranslit=iva|Gloss=as-if
6	सज्जनाः	सज्जन	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	advcl	_	SpaceAfter=No|Translit=sajjanāḥ|LTranslit=sajjana|Gloss=human
7	॥	॥	PUNCT	_	_	1	punct	_	Translit=:|LTranslit=:|Gloss=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 mark	color:blue
1	भोः	भोस्	INTJ	_	_	3	vocative	_	SpaceAfter=No|Translit=bhoḥ|LTranslit=bhos|Gloss=oh-gentlemen
2	,	,	PUNCT	_	_	1	punct	_	Translit=,|LTranslit=,|Gloss=,
3	ज्ञातम्	ज्ञात	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=jñātam|LTranslit=jñāta|Gloss=known
4	एतद्	एतद्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	Translit=etad|LTranslit=etad|Gloss=this
5	भवद्भिः	भवत्	PRON	_	Case=Ins|Gender=Masc|Number=Plur|Person=3|Polite=Form|PronType=Prs	3	obl:agent	_	Translit=bhavadbhiḥ|LTranslit=bhavat|Gloss=by-you
6	यत्	यद्	SCONJ	_	_	12	mark	_	Translit=yat|LTranslit=yad|Gloss=that
7	मम	अस्मद्	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	11	nmod	_	Translit=mama|LTranslit=asmad|Gloss=my
8	एते	एतद्	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	Translit=ete|LTranslit=etad|Gloss=these
9	त्रयः	त्रि	NUM	_	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	3	nummod	_	Translit=trayaḥ|LTranslit=tri|Gloss=three
10	अपि	अपि	ADV	_	_	11	advmod	_	Translit=api|LTranslit=api|Gloss=also
11	पुत्राः	पुत्र	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	Translit=putrāḥ|LTranslit=putra|Gloss=sons
12	शास्त्रविमुखा	शास्त्रविमुख	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	4	acl	_	Translit=śāstravimukhā|LTranslit=śāstravimukha|Gloss=ignorant-of-education
13	विवेक	विवेक	NOUN	_	Gender=Masc	14	compound	_	Translit=viveka|LTranslit=viveka|Gloss=discernment
14	हीनाः	हीन	ADJ	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	12	conj	_	Translit=hīnāḥ|LTranslit=hīna|Gloss=lacking
15	च	च	CCONJ	_	_	14	cc	_	Translit=ca|LTranslit=ca|Gloss=and
16	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


