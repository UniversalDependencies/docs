---
layout: base
title:  'Statistics of xcomp in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `xcomp`

This relation is universal.

41 nodes (1%) are attached to their parents as `xcomp`.

39 instances of `xcomp` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41463414634146.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (26; 63% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADJ.html">ADJ</a></tt> (11; 27% instances), <tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-AUX.html">AUX</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mr_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="mr_ufal-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	आणि	आणि	CCONJ	_	_	4	cc	_	Translit=āṇi|LTranslit=āṇi
2	वाद्ये	वाद्य	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	Translit=vādye|LTranslit=vādya
3	वाजू	वाजणे	VERB	_	InfForm=Incp|VerbForm=Inf	4	xcomp	_	Translit=vājū|LTranslit=vājaṇe
4	लागली	लागणे	VERB	_	Aspect=Perf|Gender=Neut|Number=Plur|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=lāgalī|LTranslit=lāgaṇe
5	.	.	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	शेता	शेत	NOUN	_	Case=Abs|Gender=Neut|Number=Sing	4	nmod:poss	_	Translit=śetā|LTranslit=śeta
2	चे	चा	ADP	_	Gender=Masc|Number=Plur	1	case	_	Translit=ce|LTranslit=cā
3	मूळचे	मूळचा	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	4	amod	_	Translit=mūḷace|LTranslit=mūḷacā
4	मालक	मालक	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	Translit=mālaka|LTranslit=mālaka
5	मजूर	मजूर	ADJ	_	Case=Nom	6	xcomp	_	Translit=majūra|LTranslit=majūra
6	झाले	होणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|Translit=jhāle|LTranslit=hoṇe
7	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	आज	आज	ADV	_	_	10	advmod	_	Translit=āja|LTranslit=āja
2	मी	मी	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Translit=mī|LTranslit=mī
3	तुला	तू	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	8	iobj	_	Translit=tulā|LTranslit=tū
4	तू	तू	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	Translit=tū|LTranslit=tū
5	मागशील	मागणे	VERB	_	Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	7	acl	_	Translit=māgaśīla|LTranslit=māgaṇe
6	ती	तो	DET	_	Deixis=Remt|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	Translit=tī|LTranslit=to
7	किंमत	किंमत	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	Translit=kiṁmata|LTranslit=kiṁmata
8	द्यायला	देणे	VERB	_	VerbForm=Sup	9	xcomp	_	Translit=dyāyalā|LTranslit=deṇe
9	तयार	तयार	ADV	_	_	10	xcomp	_	Translit=tayāra|LTranslit=tayāra
10	झालो	होणे	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Person=1|VerbForm=Fin	0	root	_	Translit=jhālo|LTranslit=hoṇe
11	होतो	असणे	AUX	_	Gender=Masc|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	10	aux	_	SpaceAfter=No|Translit=hoto|LTranslit=asaṇe
12	;	;	PUNCT	_	_	18	punct	_	Translit=;|LTranslit=;
13	परंतु	परंतु	CCONJ	_	_	18	cc	_	Translit=paraṁtu|LTranslit=paraṁtu
14	तुझ	तू	PRON	_	Number=Sing|Person=2|PronType=Prs	16	nmod:poss	_	Translit=tujha|LTranslit=tū
15	ची	चा	ADP	_	Gender=Fem|Number=Sing	14	case	_	Translit=cī|LTranslit=cā
16	बुद्धी	बुद्धी	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	Translit=buddhī|LTranslit=buddhī
17	भ्रष्ट	भ्रष्ट	ADJ	_	Case=Nom	18	xcomp	_	Translit=bhraṣṭa|LTranslit=bhraṣṭa
18	झाली	होणे	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Fin	10	conj	_	Translit=jhālī|LTranslit=hoṇe
19	आहे	असणे	AUX	_	Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	18	aux	_	SpaceAfter=No|Translit=āhe|LTranslit=asaṇe
20	.	.	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.

~~~


