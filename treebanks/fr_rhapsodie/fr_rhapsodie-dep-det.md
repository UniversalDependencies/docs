---
layout: base
title:  'Statistics of det in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `det`

This relation is universal.

4129 nodes (9%) are attached to their parents as `det`.

4129 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10850084766287.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (3762; 91% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (199; 5% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (40; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (38; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt> (21; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (19; 0% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=18470|AlignEnd=18712|Overlap=Rhap_D0006-7|Polite=Unknown
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	AlignBegin=18712|AlignEnd=18756|Overlap=Rhap_D0006-7|SpaceAfter=No
3	avez	avoir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=18756|AlignEnd=19068|Overlap=Rhap_D0006-7
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	AlignBegin=19068|AlignEnd=19203
5	autour	autour	ADV	_	_	3	advmod	_	AlignBegin=19203|AlignEnd=19493
6	de	de	ADP	_	_	7	case	_	AlignBegin=19493|AlignEnd=19603
7	vous	vous	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=2|PronType=Prs	5	obl:arg	_	AlignBegin=19603|AlignEnd=19981|Polite=Unknown
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	AlignBegin=19981|AlignEnd=20180
9	impression	impression	NOUN	_	_	3	obj:lvc	_	AlignBegin=20180|AlignEnd=20905|Gender[lex]=Fem|Number[ctxt]=Sing
10	que	que	SCONJ	_	_	9	dep	_	AlignBegin=20905|AlignEnd=21246|Scrap=Yes|SpaceAfter=No
11	…	…	PUNCT	_	_	3	punct	_	AlignBegin=21246|AlignEnd=21246

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=321744|AlignEnd=321859|Polite=Unknown
2	vous	vous	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=2|PronType=Prs	3	iobj	_	AlignBegin=321859|AlignEnd=321960|Polite=Unknown
3	trouvez	trouver	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=321960|AlignEnd=322238
4	à	à	ADP	_	_	6	case	_	AlignBegin=322238|AlignEnd=322352
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	AlignBegin=322238|AlignEnd=322352
6	Gosier	Gosier	PROPN	_	_	3	obl:arg	_	AlignBegin=322352|AlignEnd=323006|Gender[lex]=Unknown|SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	AlignBegin=323006|AlignEnd=323006

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	AlignBegin=259455|AlignEnd=259575
2	spécialit~	spécialit~	X	_	ExtPos=NOUN	0	root	_	AlignBegin=259575|AlignEnd=260105|Scrap=Yes|SpaceAfter=No
3	…	…	PUNCT	_	_	2	punct	_	AlignBegin=260105|AlignEnd=260105

~~~


